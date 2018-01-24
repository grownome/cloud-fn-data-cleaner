(ns data-cleaner.core
  (:require [clojure.string :as s]
            [firebase-admin :as fa]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn store-capture
  [attrs data])

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa) )
                                     :databaseURL "https://grownome.firebaseio.com"}))


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
  (let [
        pubsub-message  (.-data event)
        attributes (aget  pubsub-message "attributes")
        subfolder (aget attributes "subFolder")
        ]
    (if (not (= subfolder "captures"))
      (do
        (let [fs  (fa/firestore)
              data (.from js/Buffer (aget pubsub-message "data") "base64")
              [reg name value] (s/split data #"/")
              readings-ref (-> fs (.collection "readings"))]
          (aset attributes "reading" value)
          (aset attributes "timestamp" (.-timestamp  event))
          (.add  readings-ref attributes))))
    (callback)))

(set! (.-exports js/module) #js {:subscribe subscribe})


