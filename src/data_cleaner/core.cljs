(ns data-cleaner.core
  (:require [clojure.string :as s]
            [initial-state :as is]
            [firebase-admin :as fa]
            [promesa.core :as p]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn store-capture
  [attrs data])

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa) )
                                     :databaseURL "https://grownome.firebaseio.com"}))
(defonce users
  {"0" ["Q7S374HJ4MGR" "GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"]
   "1" ["4TF3E3GQHP8E" "GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"]})



(defn push-inital-state [bucket reading value timestamp]
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
              b (is/bucket bucket-key access-key)]

          (push-inital-state b name (js/parseFloat value) (.-timestamp event))

          (aset attributes "reading" value)
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  readings-ref attributes))))
    (callback)))

(defn images-by-id [fs]
  "gets a cursor that returns all of the unprocessed images firestore"
  (-> fs
      (.collection "images") ; It's silly that we called the colletions with raw images images
      (.orderBy "image_id"))) ; order it by the image id so they are always groupd together

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
