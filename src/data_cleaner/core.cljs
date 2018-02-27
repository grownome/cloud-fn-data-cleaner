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
        (.insert data)
        (.then #(info "inserted data"))
        (.catch (fn [err ]
                  (error "insert error " err)
                  (spy (js->clj (aget err "errors")))
                  (debug (js-keys err))))))
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
          (.add  images-ref attributes)
          (callback)
          ))
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
          (.add  readings-ref attributes)
          (p/then (bq-insert attributes)
                  #(callback)))))))

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

(defn reassemble-image
  "checks to see if all the parts are there and then assembles one image
  or not"
  [parts]
  (info "reassembling image")
  (let [a-part (first parts)
        expected-parts (aget a-part "image_max_index")
        device-id (aget a-part "deviceNumId")
        image-id (aget a-part "image_id")]
    (if (= expected-parts (spy (count parts)))
      (let [sorted (sort-by #(aget % "image_index") parts)
            unencoded (map #(.from js/Buffer (aget % "data") "base64"))
            joined (apply concat unencoded)]
        {:image joined :device-id device-id :image-id image-id}))))

(defn upload-image
  [{:keys [device-id image-id image]}]
  (let [stor (fa/storage)
        ref  (.child (.ref stor) (str "processed_images/" device-id "/" image-id))
        metadata #js {"contentType" "image/jpeg"}]
    (.put ref image)))

(defn images-chan
  [fs cursor]
  (let [img-chan (a/chan (comp
                          (distinct)
                          (partition-by #(spy (aget % "image_id")))
                          (map reassemble-image)
                          (map upload-image)
                          ))
        next-chan (a/chan)]
    (a/go-loop [c cursor]
      (p/chain (.get cursor)
               (fn [a-few-images]
                 (let [clj-imgs (js->clj (.-docs a-few-images))]
                   (a/go
                     (info "trying to reconstruct")
                     (if (> (spy (count clj-imgs)) 0)
                       (let [l (.data (last clj-imgs))]
                         (info "trying to put image on chan")
                         (info (js-keys l))
                         (doall (map #(a/>! img-chan (spy (.data %))) clj-imgs))
                         (a/>! next-chan (spy l)))
                       (do
                         (a/close! img-chan)
                         (a/close! next-chan)))))))
      (when-let [next (a/<! next-chan)]
        (info "getting next page")
        (recur  (images-by-id fs (spy (aget next "image_id"))))))
    img-chan))

(defn assemble-images
  [event callback]
  (let [fs (fa/firestore)
        images-ref (images-by-id fs)]
    (a/go-loop []
      (if (a/<! (images-chan fs images-ref))
        (recur)
        (callback)))))
