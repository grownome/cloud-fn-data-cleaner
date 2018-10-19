(ns data-cleaner.images
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            ["firebase-admin" :as fa]
            ["initial-state" :as is]
            [cljs.core.async :as a]
            ["@google-cloud/bigquery" :as bq]
            ["@google-cloud/storage" :as st]
            ["combined-stream2" :as cs2]
            [promesa.core :as p]
            [goog.crypt.Md5 :as MD5]
            [goog.crypt.base64 :as b64]
            [goog.crypt :as gcrypt]
            [data-cleaner.sql :as sql]
            [data-cleaner.pg :as pg]
            [data-cleaner.image :as img]
            [data-cleaner.utils :as utils]
            [cljs.spec.gen.alpha :as g]
            [cljs.spec.alpha :as spec]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn hash-bytes [digester bytes-in]
  (do
    (.update digester bytes-in)
    (.digest digester)))

(defn dev-prefix
  []
  (let [env (utils/env)]
    (or (get env "DEV_PREFIX") "")))

(defn bucket-name
  []
  (let [env (utils/env)]
    (or (get env "BUCKET") "")))




(defonce storage-client (new st #js {:projectId "grownome"}))

(spec/fdef md5
  :args array?
  :ret string?)

(defn md5
"convert bytes to md5 bytes"
  [bytes-in]
  (gcrypt/byteArrayToHex (hash-bytes (goog.crypt.Md5.) bytes-in)))


(defn images-by-id
  ([fs start-at]
   (-> fs
       (.collection (str (dev-prefix) "images")) ; It's silly that we called the colletions with raw images images
       (.orderBy "imageId")
       (.startAfter start-at)
       (.limit 200)))
  ([fs]
   "gets a cursor that returns all of the unprocessed images firestore"
   (-> fs
       (.collection (str (dev-prefix) "images")) ; It's silly that we called the colletions with raw images images
       (.orderBy "imageId")
       (.limit 200)))) ; order it by the image id so they are always groupd together

(spec/fdef download-part
  :args string?
  :ret  p/promise?)

(defn  stream-part
  [url]
  (let [stor   storage-client
        bucket (.bucket stor (or (bucket-name) "grownome.appspot.com"))
        file   (.file bucket url)]
     (.createReadStream file)))


(def example-image
  {"imageId" "fdba2a29316fbe1eebf5b1fbc7b8a71d",
   "deviceNumId" "2538009072846140",
   "imagePartUrl" "/parts/2538009072846140/1_fdba2a29316fbe1eebf5b1fbc7b8a71d.base64",
   "imageIndex" "1",
   "timestamp" 1537688720517,
   "subFolder" "captures/fdba2a29316fbe1eebf5b1fbc7b8a71d/4/1",
   "imageMaxIndex" "4"})
(defn reassemble-image
  "checks to see if all the parts are there and then assembles one image
  or not. All the items passed in are expected to be part of the same image

  "
  [recycle-chan parts]
  (info "reassembling image")
  ;; of the avalible parts
  ;; first convert them into clojure objects for ease
  (let [clj-parts       (into [] (distinct (map #(js->clj (.data %)) parts)))
        ;; then grab a part
        a-part          (first clj-parts)
        ;Grab the count of how many parts are expected
        expected-parts  (inc (js/parseInt (get a-part "imageMaxIndex")))
        ; Grab the device id to use to construct a file name to put
        ;the result of this operation in to google cloud storage
        device-id       (get a-part "deviceNumId")
        ; As well as the image id
        image-id        (get a-part "imageId")
        ; Grab the image timestamp
        timestamp       (get a-part "timestamp")
        ; then grab all the urls
        part-urls       (mapv #(get % "imagePartUrl") clj-parts)
        ; Downloads the parts from google cloud storage and save the name with them
        ]
    (info [expected-parts (count part-urls) (= expected-parts (count part-urls))])
    (if (= expected-parts (count part-urls))
      (let [part-streams (mapv (fn [url]
                                 {:name url :stream (stream-part url)})
                               part-urls)

            sorted-streams (sort-by :name part-streams)
            combined-stream (cs2/create)
            ]
        (doall (map (fn [part-stream]
                      (.append combined-stream (:stream part-stream))) sorted-streams))
        {:image-streams combined-stream
         :md5 image-id
         :urls part-urls
         :timestamp timestamp
         :device-id device-id
         :image-id image-id
         :refs parts})
      ;if there are not enough parts recycle the ones we have
      (do
        ;(doall (map #(a/put! recycle-chan %) parts))
        ;and return nil
        nil))))

(defn part-url
  [{:keys [device-id image-id part-id] :as image-data}]
  (str "/parts/" device-id "/" part-id "_" image-id ".base64"))

(defn upload-image-part
  [{:keys [device-id image-id part-id image-part] :as image-data}]
  (let [stor     (.storage fa)
        bucket   (.bucket stor (str (bucket-name) "grownome.appspot.com"))
        url      (part-url image-data)
        file     (.file bucket url)]
    (p/then (.save file image-part)
            (fn [resp]  url))))

(defn -upload-image
  [{:keys [device-id image-id image-streams md5 timestamp] :as image-data}]
  (when image-data
    (let [stor     storage-client
          bucket   (.bucket stor ( or (bucket-name) "grownome.appspot.com"))
          file     (.file bucket (str "/images/" device-id "/" timestamp "-" image-id ".jpg"))
          ;somewhere we are dopping data so this is left commeted out
          metadata #js {"contentType" "image/jpeg"}
          writeable (.createWriteStream file metadata)]
      (p/promise
       (fn [resolve reject]
         (.pipe image-streams writeable)
         (.on writeable "finish" (fn [] (resolve image-data)))
         (.on writeable "error" (fn [err] (reject err))))))))

(defn upload-image
  [prom]
  (p/then prom -upload-image))

(defn delete-bucket
  [url]
  (let [stor   storage-client
        bucket (.bucket stor (or (bucket-name) "grownome.appspot.com"))
        file   (.file bucket url)]
    (.delete file)))

(defn delete-raw
  [fs prom]
  (p/then prom
   (fn [{:keys [device-id image-id refs urls] :as image-info}]
     (when image-info
       (info image-info)
       (let [firestore-deletes (p/all
                                (mapv #(.delete
                                        (.doc
                                         (.collection fs "images")
                                         (.-id %))) refs))
             bucket-deletes (p/all (mapv delete-bucket urls))]
         (p/all [firestore-deletes bucket-deletes]))))))

(defn add-to-user-db
  [prom]
  (p/then prom
          (fn [{:keys [device-id timestamp image-id refs urls] :as image-info}]
            (when image-info
              (p/promise
               (fn [resolve reject]
                 (a/go
                   (let [path (str "gs://" (or (bucket-name)  "grownome.appspot.com") "/images/" device-id "/" timestamp "-" image-id ".jpg")
                         img-data (img/build image-id (js/parseInt device-id) path (js/Date. (*  timestamp)))
                         c    (pg/open-db (sql/get-config))
                         conn (a/<! (pg/connect! c))
                         ]
                     (a/<! (img/insert c img-data))
                     (resolve image-info)))))))))

(defn images-chan
  [fs cursor]
  (let [recycle-chan (a/chan 10)
        img-chan (a/chan 20 (comp
                             (partition-by #(aget (.data %) "imageId"))
                             (map  #(->> %
                                         (reassemble-image recycle-chan)
                                         (upload-image)
                                         (add-to-user-db)
                                         (delete-raw fs)))))
        next-chan (a/chan)
        mixxer    (a/mix img-chan)]
    (a/admix mixxer recycle-chan)
    (a/go-loop [c cursor]
      (p/then (.get c)
              (fn [a-few-images]
                (let [clj-imgs (js->clj (.-docs a-few-images))]
                  (a/go
                    (info "trying to reconstruct")
                    (if (> (count clj-imgs) 0)
                      (let [l (.data (last clj-imgs))]
                        (info "trying to put image on chan")
                        (doall (map #(a/put! img-chan %) clj-imgs)))
                      (do
                        (info "closing channels")
                        (a/close! img-chan)
                        (a/close! next-chan)))))))
      (when-let [next (a/<! next-chan)]
        (when (not (nil? next))
          (info "getting next page")
          (recur  (images-by-id fs (get next "imageId"))))))
    img-chan))

(defn assemble-images
  [event context done]
  (let [fs (fa/firestore)
        images-ref (images-by-id fs)
        i-chan (images-chan fs images-ref)]
    (info "image sticher started")
    (a/go-loop [item (a/<! i-chan) accum []]
      ;When there are no more images the channel will close and return nil
      (if item
        (recur (a/<! i-chan) (conj accum item))
        (p/then (p/all accum)
                (fn [res]
                  (info res)
                  (info "I think i'm done")
                  (done res)))))))
