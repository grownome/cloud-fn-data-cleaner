(ns data-cleaner.core
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            ["firebase-admin" :as fa]
            ["initial-state" :as is]
            [cljs.core.async :as a]
            ["@google-cloud/bigquery" :as bq]
            [data-cleaner.images :as i]
            [promesa.core :as p]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa))
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
        (.insert data)
        (.then #(info "inserted data"))
        (.catch (fn [err]
                  (error "insert error " err)
                  (spy (js->clj (aget err "errors")))
                  (debug (js-keys err))))))
  ([data]
   (bq-insert "grownome" "metrics" data)))

(defn push-inital-state [bucket reading value timestamp]
  (.push bucket reading value timestamp))

(defn cleanup-temp [value]
  (js/Math.round (+ (* value (/ 9 5)) 32)))

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
  (let [pubsub-message  event
        attributes (aget pubsub-message "attributes")
        subfolder (aget attributes "subFolder")
        subparts (s/split subfolder #"/")]
    (info subparts)
    (if (= (first subparts) "captures")
      ;;; Is image
      (do
        (let [fs  (fa/firestore)
              [kind rand-id max-idx idx] subparts
              data (.from js/Buffer (aget pubsub-message "data"))
              images-ref (-> fs (.collection "images"))]
          (aset attributes "image_part" data)
          (aset attributes "image_id" rand-id)
          (aset attributes "image_max_index" max-idx)
          (aset attributes "image_index" idx)
          (aset attributes "timestamp" (.-timestamp  event))
          (p/then (.add  images-ref attributes)
                  (callback))))
      ;;; Is metrics
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
          (aset attributes "user" user)
          (aset attributes "timestamp" (.-timestamp  event))
          ;(.add  readings-ref attributes)
          (bq-insert attributes))))))

(defn assemble-images
  [event callback]
  (i/assemble-images event callback))
