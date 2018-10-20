(ns data-cleaner.core
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            ["firebase-admin" :as fa]
            ["initial-state" :as is]
            [cljs.core.async :as a]
            ["@google-cloud/bigquery" :as bq]
            [data-cleaner.images :as i]
            [data-cleaner.sql :as sql]
            [data-cleaner.pg :as pg]
            [data-cleaner.metric :as metric]
            [data-cleaner.utils :as utils]
            [promesa.core :as p]
            [goog.crypt.base64 :as b64]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa))
                                     :databaseURL "https://grownome.firebaseio.com"}))

(defonce bq-client  (new bq #js {:projectId "grownome"}))

(defn bq-insert
  ([dataset table data]
   (info "inserting bq row")
   (->  bq-client
        (.dataset dataset)
        (.table table)
        (.insert data)
        (.then #(info "inserted data"))
        (.catch (fn [err]
                  (error "insert error " err)
                  (error (js->clj data))
                  (error (js->clj (aget err "errors")))
                  (error (js->clj (aget err "response")))
                  (error (js-keys err))))))
  ([data]
   (bq-insert "grownome" "metrics" data)))

(defn push-inital-state [bucket reading value timestamp]
  (.push bucket reading value timestamp))

(defn offset-temp-factor [m b temp]
  ;mx + b
  (- temp (+ (* m temp) b)))

(defn cleanup-temp [value]
  (let [adjust (partial offset-temp-factor 0.2 -5) ]
    (/ (js/Math.round (* (adjust (+ (* value (/ 9 5)) 32)) 10))) 10))

(defn cleanup-humidity  [value]
  (js/Math.round value))


(defn clean-value [name value]
  (cond (s/includes? name "temp") (cleanup-temp value)
        (s/includes? name "humidity") (cleanup-humidity value)
        :else value))


(def example-data
  {"@type" "type.googleapis.com/google.pubsub.v1.PubsubMessage",
   "attributes" {"deviceId" "bold-meadow",
                 "deviceNumId" "2538009072846140",
                 "deviceRegistryId" "nomes",
                 "deviceRegistryLocation" "us-central1",
                 "projectId" "grownome",
                 "subFolder" "metrics/core-temp-main"},
   "data" "bm9tZXMvMC9ib2xkLW1lYWRvdy1wYXlsb2FkLWNvcmUtdGVtcC1tYWluLzQ3LjA3OA=="})


(defn get-device-promise
  [fs num-id]
  (info num-id)
  (let [device-info (-> fs
                        (.collection (str utils/dev-prefix "devices"))
                        (.where "deviceNumId" "==" num-id)
                        (.limit 1)
                        (.get))
        device-data
        (p/then device-info
                (fn [devices]
                  (first (js->clj
                          (into []
                                (map
                                 #(.data %)
                                 (.-docs   devices)))))))]
    device-data))

(defn get-initial-state-promise
  [device-promise]
  (p/then device-promise
          (fn [device]
            (let [bucket-key (get device "bucketKey")
                  access-key (get device "accessKey")]
              [bucket-key access-key]))))

(defn put-metric-promise
  [metric-name metric reg-id device-id timestamp]
  (p/promise
   (fn [resolve reject]
     (a/go
       (let [metric-data
             (metric/build-metric metric-name metric reg-id device-id timestamp)
             ]
         (a/<! (metric/insert sql/db metric-data))
         (resolve metric-data)))))
  )
(def subfolder-name-to-bq-name
  {"core-temp-max" "coreTempMax"
   "core-temp-main" "coreTempMain"
   "humidity" "humidity"
   "temperature" "temperature"
   })
(defn subscribe
  "Triggered from a message on a Cloud Pub/Sub topic.
  * @param {!Object} event The Cloud Functions event.
  example event inside data
  :deviceId blue-cherry,
  :deviceNumId 2711002696579299,
  :deviceRegistryId nomes,
  :deviceRegistryLocation us-central1,
  :projectId grownome,
  :subFolder metrics/core-temp-max},
  :data bm9tZXMvYmx1ZS1jaGVycnktcGF5bG9hZC1jb3JlLXRlbXAtbWF4LzQzLjg1}
  * @param {!Function} The callback function.

  debug
  "
  [event context]
  (info utils/dev-prefix)
  (let [pubsub-message  event
        clj-event       (js->clj event)
        attributes      (aget event "attributes")
        subfolder       (get-in clj-event ["attributes" "subFolder"])
        device-num-id   (get-in clj-event ["attributes" "deviceNumId"])
        published-time  (js/Date. (aget context "timestamp"))
        subparts        (s/split subfolder #"/")]
    (info (utils/env))
    (if (= (first subparts) "captures")
      ;;; Is image
      (do
        (let [fs                            (fa/firestore)
              ;use the subfolder to label the image with it's hash and part-id
              [kind image-hash max-idx idx] subparts
              ; the the blob out of the
              data                          (js/Buffer.from
                                             (b64/decodeStringToUint8Array
                                              (b64/decodeString
                                               (.-data event))))
              images-ref                    (-> fs (.collection
                                                    (str
                                                     utils/dev-prefix
                                                     "images")))

              upload-data                   {:device-id  (get-in clj-event
                                                                 ["attributes"
                                                                  "deviceNumId"])
                                             :image-id   image-hash
                                             :part-id    idx
                                             :image-part data}
              upload-url                     (i/part-url upload-data)]
          (p/then (i/upload-image-part upload-data)
                  (fn [_]
                    (let [attributes
                          #js
                          {"imagePartUrl"    upload-url
                           "imageId"         image-hash
                           "imageMaxIndex"   max-idx
                           "imageIndex"      idx
                           "deviceNumId"     device-num-id
                           "subFolder"       subfolder
                           "timestamp"       published-time}]
                      (.add images-ref attributes))))))
      ;;; Is metrics
      (do
        ;decode the data passed from the device
        (let [fs (fa/firestore)
              data (b64/decodeString (aget pubsub-message "data"))
              ;the folder name will be like metrics/humdity
              [kind metric-name] subparts
              ;it will be some thing like
              ;/nomes/0/device-name-temp/10
              [reg user name value] (s/split data #"/")
              ;get the device data by the numeric id
              device-num-id              (js/parseInt
                                          (get-in clj-event ["attributes" "deviceNumId"]))
              device-data-promise   (get-device-promise fs device-num-id)
              ;clean up the value what ever it is
              clean-value (clean-value name (js/parseFloat value))]
              ;send the metric to inital state
          (-> (p/then
              ;first get the keys for the initial-state bucket from fs
               (get-initial-state-promise device-data-promise)
              ;then
               (fn [[bucket-key access-key]]
                 ;push the metric to intial state
                 (when (and bucket-key access-key)
                   (let [b (is/bucket bucket-key access-key)]
                     (push-inital-state b metric-name clean-value (.-timestamp event))))))
              ;catch any errors
              (p/catch (fn [err]
                         (error err))))
          ;set the column name to the metric name
          (aset attributes (subfolder-name-to-bq-name metric-name) clean-value)
          (js-delete attributes "data")
          (aset attributes "deviceNumId" device-num-id)
          (aset attributes "user" user)
          (aset attributes "timestamp" (bq/timestamp published-time))
          (p/all [(put-metric-promise metric-name
                                      clean-value
                                      reg
                                      device-num-id
                                      published-time)
                  (when (empty? utils/dev-prefix)
                    (bq-insert attributes))]))))))


(defn assemble-images
  [event context done]
  (i/assemble-images event context done))
