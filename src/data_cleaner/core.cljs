(ns data-cleaner.core
  (:require [clojure.string :as s]
            [initial-state :as is]
            [firebase-admin :as fa]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn store-capture
  [attrs data])

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa) )
                                     :databaseURL "https://grownome.firebaseio.com"}))

(defonce bucket (is/bucket  "Q7S374HJ4MGR" "GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"))


(defn push-inital-state [reading value timestamp]
  (.push bucket reading value timestamp))

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
        attributes (aget  pubsub-message "attributes")
        subfolder (aget attributes "subFolder")
        subparts (s/split subfolder #"/")]
    (if (= (first subparts) "captures")
      (do
        (let [fs  (fa/firestore)
              data (aget pubsub-message "data")
              images-ref (-> fs (.collection "images"))]
          (aset attributes "image_part" data)
          (aset attributes "image_id" (second subparts))
          (aset attributes "image_index" (get subparts 2))
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  images-ref attributes))
        )
      (do
        (let [fs  (fa/firestore)
              data (.from js/Buffer (aget pubsub-message "data") "base64")
              [reg name value] (s/split data #"/")
              readings-ref (-> fs (.collection "readings"))]

          (push-inital-state name (js/parseFloat value) (.-timestamp event))

          (aset attributes "reading" value)
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  readings-ref attributes))))
    (callback)))

(set! (.-exports js/module) #js {:subscribe subscribe})


