(ns data-cleaner.core
  [:require [clojure.string]])

(defn subscribe 
  "Triggered from a message on a Cloud Pub/Sub topic.
  * @param {!Object} event The Cloud Functions event.
  * @param {!Function} The callback function."
  [event callback]
  (let [message (.-data event)
        data (.from js/Buffer (.-data message) "base64")]
    (println (clojure.string/split data #"/")
    (callback))))

(set! (.-exports js/module) #js {:subscribe subscribe})

