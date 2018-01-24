(ns data-cleaner.core
  (:require [clojure.string :as s]
            [firebase-admin :as fa]))

(defn store-capture
  [attrs data])

(defonce app (.initializeApp fa #js {:credential (.applicationDefault (.-credential fa) )
                                     :databaseURL "https://grownome.firebaseio.com"}))

(defn subscribe
  "Triggered from a message on a Cloud Pub/Sub topic.
  * @param {!Object} event The Cloud Functions event.
  * @param {!Function} The callback function."
  [event callback]
  (let [attrs  (js->clj (.-attributes event))
        subfolder (get attrs "subFolder")
        message (.-data event)
        ]
    (if (not (= subfolder "captures"))
      (do
        
        (let [fs  (fa/firestore)
              data (.from js/Buffer (.-data message) "base64")
              [reg name value] (s/split data #"/")
              readings-ref (-> fs
                               (.collection "readings")
                               (.add (clj->js (assoc attrs "reading" value))))]

          )))
    (callback)))

(set! (.-exports js/module) #js {:subscribe subscribe})

