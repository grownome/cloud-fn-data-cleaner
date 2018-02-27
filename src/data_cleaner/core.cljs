(ns data-cleaner.core
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            [initial-state :as is]
            [firebase-admin :as fa]
            [cljs.core.async :as a ]
            ["@google-cloud/bigquery" :as bq]
            [promesa.core :as p]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn store-capture
  [attrs data])

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa) )
                                     :databaseURL "https://grownome.firebaseio.com"}))

(defonce bq-client  (new bq #js {
                             :projectId "grownome"}))
; Bad Juju
(defonce users
  {"0" ["Q7S374HJ4MGR" "GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"]
   "1" ["4TF3E3GQHP8E" "GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"]})


(defn bq-insert
  ([dataset table data]
   (info "inserting bq row")
   (->  bq-client
        (.dataset dataset)
        (.table table)
        (.insert data)))
  ([data]
   (bq-insert "grownome" "metrics" data)))

(defn push-inital-state [bucket reading value timestamp]
  (.push bucket reading value timestamp))

(defn cleanup-temp [value]
  (+ (* value (/ 9 5)) 32))

(defn clean-value [name value]
  (if (s/includes? name "temp")
    (cleanup-temp value)
    value))

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
  * @param {!Function} The callback function."
  [event callback]
  (let [pubsub-message  (.-data event)
        attributes (aget pubsub-message "attributes")
        subfolder (aget attributes "subFolder")
        subparts (s/split subfolder #"/")]
    (info subparts)
    (if (= (first subparts) "captures")
      (do
        (let [fs  (fa/firestore)
              [kind rand-id max-idx idx] subparts
              data (aget pubsub-message "data")
              images-ref (-> fs (.collection "images"))]
          (aset attributes "image_part" data)
          (aset attributes "image_id" rand-id)
          (aset attributes "image_max_index" max-idx)
          (aset attributes "image_index" idx)
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  images-ref attributes)))
      (do
        (let [fs  (fa/firestore)
              data (.from js/Buffer (aget pubsub-message "data") "base64")
              [reg user name value] (s/split data #"/")
              readings-ref (-> fs (.collection "readings"))
              [bucket-key access-key] (get users (or user "0"))
              clean-value (clean-value name (js/parseFloat value))
              b (is/bucket bucket-key access-key)]
          (push-inital-state b name clean-value (.-timestamp event))
          (aset attributes "reading" clean-value)
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  readings-ref attributes)
          (bq-insert attributes))))
    (callback)))

(defn images-by-id
  ([fs start-at]
   (-> (images-by-id fs)
       (.startAt start-at)))
  ([fs]
   "gets a cursor that returns all of the unprocessed images firestore"
   (-> fs
       (.collection "images") ; It's silly that we called the colletions with raw images images
       (.orderBy "image_id")
       (.limit 5)))) ; order it by the image id so they are always groupd together

(defn images-chan
  [fs cursor]
  (let [img-chan (a/chan (comp
                          (partition-by #(aget % "image_id"))
                          (map #(.data %))
                          distinct))]
    (a/go-loop [c cursor]
      (p/chain cursor
               (fn [a-few-images]
                 (if a-few-images
                   (let [l (.data (last a-few-images))]
                     (a/onto-chan img-chan a-few-images false)
                     (recur (.get (images-by-id fs (aget l "image_id")))))))))
    img-chan))

(defn reassemble-image
  "checks to see if all the parts are there and then assembles one image
  or not"
  [parts]
  (let [a-part (first parts)
        expected-parts (aget a-part "image_max_index")]
    (if (= expected-parts (count parts ))
      (let [sorted (sort-by #(aget % "image_index") parts)
            unencoded (map #(.from js/Buffer (aget % "data") "base64"))
            joined (apply concat unencoded)
            ]
        joined))))

(defn upload-image
  [image device-id id]
  (let [stor (fa/storage)
        ref  (.child (.ref stor) (str "processed_images/" device-id "/" id))
        metadata #js {"contentType" "image/jpeg"}]
    (.put ref image)))


(defn assemble-images
  [event callback]
  (let [fs (fa/firestore)
        images-ref (images-by-id fs)
        images-snap-p (.get images-ref)]
    (p/chain
     images-snap-p
     (fn [snap]
       (.forEach snap
                 (fn [image-data]
                   ))))))
