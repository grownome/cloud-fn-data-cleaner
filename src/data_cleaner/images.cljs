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
       (.collection "images") ; It's silly that we called the colletions with raw images images
       (.orderBy "imageId")
       (.startAfter start-at)
       (.limit 200)))
  ([fs]
   "gets a cursor that returns all of the unprocessed images firestore"
   (-> fs
       (.collection "images") ; It's silly that we called the colletions with raw images images
       (.orderBy "imageId")
       (.limit 200)))) ; order it by the image id so they are always groupd together

(spec/fdef download-part
  :args string?
  :ret  p/promise?)

(defn  stream-part
  [url]
  (let [stor   storage-client
        bucket (.bucket stor "grownome.appspot.com")
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
  (let [clj-parts       (into [] (map #(js->clj (.data %)) parts))
        ;; then grab a part
        a-part          (first clj-parts)
        ;Grab the count of how many parts are expected
        expected-parts  (inc (js/parseInt (get a-part "imageMaxIndex")))
        ; Grab the device id to use to construct a file name to put
        ;the result of this operation in to google cloud storage
        device-id       (get a-part "deviceNumId")
        ; As well as the image id
        image-id        (get a-part "imageId")
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
        (doall (map (fn [part-stream] (.append combined-stream part-stream)) sorted-streams))
        {:image-streams combined-stream
         :md5 image-id
         :device-id device-id
         :image-id image-id
         :refs parts})
      ;if there are not enough parts recycle the ones we have
      (do
        (doall (map #(a/put! recycle-chan %) parts))
        ;and return nil
        nil))))

(defn part-url
  [{:keys [device-id image-id part-id] :as image-data}]
  (str "/parts/" device-id "/" part-id "_" image-id ".base64"))

(defn upload-image-part
  [{:keys [device-id image-id part-id image-part] :as image-data}]
  (let [stor     (.storage fa)
        bucket   (.bucket stor "grownome.appspot.com")
        url      (part-url image-data)
        file     (.file bucket url)]
    (p/then (.save file image-part)
            (fn [resp]  url))))

(defn -upload-image
  [{:keys [device-id image-id image-streams] :as image-data}]
  (info image-data)
  (when image-data
    (let [stor     storage-client
          bucket   (.bucket stor "grownome.appspot.com")
          file     (.file bucket (str "/images/" device-id "/" image-id ".gif"))
          writeable (.createWriteStream file)]
      (p/promise
       (fn [resolve reject]
         (.pipe image-streams writeable)
         (.on writeable "finish" (fn [] (resolve image-data)))
         (.on writeable "error" (fn [err] (reject err))))))))

(defn upload-image
  [prom]
  (p/then prom -upload-image))


(defn delete-raw
  [fs prom]
  (p/then prom
   (fn [{:keys [device-id image-id refs] :as image-info}]
     (let [b (.batch fs)]
       (mapv #(.delete b %) refs)
     (p/then (.commit b)
               (fn [commit-res]
                 (assoc image-info :cleaning-commit commit-res)))))))

(defn images-chan
  [fs cursor]
  (let [recycle-chan (a/chan 10)

        img-chan (a/chan 50 (comp
                             (partition-by #(aget (.data %) "imageId"))
                             (map  #(->> %
                                         (reassemble-image recycle-chan)
                                         (upload-image)
                                         (delete-raw fs)))))
        next-chan (a/chan)
        mixxer (a/mix img-chan)]
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
                        (doall (map #(a/put! img-chan %) clj-imgs))
                        (a/>! next-chan (spy (js->clj l))))
                      (do
                        (info "closing channels")
                        (a/close! img-chan)
                        (a/close! next-chan)))))))
      (when-let [next (a/<! next-chan)]
        (info "getting next page")
        (recur  (images-by-id fs (get next "imageId")))))
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
