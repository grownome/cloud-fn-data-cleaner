(ns data-cleaner.images
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            ["firebase-admin" :as fa]
            ["initial-state" :as is]
            [cljs.core.async :as a]
            ["@google-cloud/bigquery" :as bq]
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

(defn  download-part
  [url]
  (let [stor (.storage fa)
        bucket (.bucket stor "grownome.appspot.com")
        file (.file bucket url)]
     (.download file)))

(defn reassemble-image
  "checks to see if all the parts are there and then assembles one image
  or not. All the items passed in are expected to be part of the same image"
  [parts]
  (info "reassembling image")
  ;; of the avalible parts
  ;; first convert them into clojure objects for ease
  (let [clj-parts       (into [] (map #(js->clj ( .data %)) (.-docs parts)))
        ;; then grab a part
        a-part          (first clj-parts)
        ;Grab the count of how many parts are expected
        expected-parts  (inc (js/parseInt (get clj-parts "imageMaxIndex")))
        ; Grab the device id to use to construct a file name to put
        ;the result of this operation in to google cloud storage
        device-id       (get a-part "deviceNumId")
        ; As well as the image id
        image-id        (get a-part "imageId")
        ; then grab all the urls
        part-url        (map #(get % "imagePartUrl") clj-parts)
        ; Downloads the parts from google cloud storage and save the name with them
        part-downloads  (map #(p/then (download-part %)
                                      (fn [data] {:name % :data data})) part-url)
        ; Wait for all of them to finish
        all-parts-prom        (p/all part-downloads)]
    (error a-part)
    (when (= (spy expected-parts) (count clj-parts))
       (p/then all-parts-prom
           (fn [all-parts]
             (debug (str "part group " device-id " ready"))
             (let [sorted    (sort-by :name all-parts)
                   unencoded (clj->js (into [] (map :data) sorted))
                   joined     (js/Buffer.concat unencoded)]
               (info [(md5 joined) image-id])
               {:image joined
                :md5 (md5 joined)
                :device-id device-id
                :image-id image-id
                :refs parts}))))))

(defn -upload-image
  [{:keys [device-id image-id image] :as image-data}]
  (spy image-data)
  (when image-data
      (let [stor     (.storage fa)
            bucket   (.bucket stor "grownome.appspot.com")
            file     (.file bucket (str "/images/" device-id "/" image-id ".gif"))]
        (p/then (.save file image)
                (fn [v]
                  (dissoc image-data :image))))))

(defn upload-image
  [prom]
  (p/then prom -upload-image))

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

(defn delete-raw
  [fs prom]
  (p/then prom
   (fn [{:keys [device-id image-id refs] :as image-info}]
     (let [b (.batch fs)]
       (doall (map #(.delete b %) refs))
       (p/then (.commit b)
               (fn [commit-res]
                 (assoc image-info :cleaning-commit commit-res)))))))

(defn images-chan
  [fs cursor]
  (let [img-chan (a/chan 50 (comp
                             (partition-by #(aget (spy (.data %)) "imageId"))
                             (map  #(->> %
                                         (reassemble-image)
                                         (upload-image)
                                         (delete-raw fs)))))
        next-chan (a/chan)]
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
  [event context]
  (let [fs (fa/firestore)
        images-ref (images-by-id fs)
        i-chan (images-chan fs images-ref)]
    (info "image sticher started")
    (a/go-loop [item (a/<! i-chan) accum []]
      (info "got an result")
      (p/then item info)
      (if (spy item)
        (do
          (info "recurring")
          (recur (a/<! i-chan) (conj accum item)))
        (do
          (info accum)
          (p/then (p/all accum)
           (fn [res]
             (info res)
             (info "I think i'm done") res)))))))
