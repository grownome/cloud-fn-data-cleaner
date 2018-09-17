(ns data-cleaner.images
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require [clojure.string :as s]
            ["firebase-admin" :as fa]
            ["initial-state" :as is]
            [cljs.core.async :as a]
            ["@google-cloud/bigquery" :as bq]
            [promesa.core :as p]
            [goog.crypt.Md5 :as MD5]
            [goog.crypt :as gcrypt]
            [taoensso.timbre :as timbre
             :refer-macros [trace  debug  info  warn  error  fatal  report
                            tracef debugf infof warnf errorf fatalf reportf
                            spy get-env]]))

(defn hash-bytes [digester bytes-in]
  (do
    (.update digester bytes-in)
    (.digest digester)))

(defn md5
"convert bytes to md5 bytes"
  [bytes-in]
  (gcrypt/byteArrayToHex (hash-bytes (goog.crypt.Md5.) bytes-in)))


(defn images-by-id
  ([fs start-at]
   (-> fs
       (.collection "images") ; It's silly that we called the colletions with raw images images
       (.orderBy "image_id")
       (.startAfter start-at)
       (.limit 200)))
  ([fs]
   "gets a cursor that returns all of the unprocessed images firestore"
   (-> fs
       (.collection "images") ; It's silly that we called the colletions with raw images images
       (.orderBy "image_id")
       (.limit 200)))) ; order it by the image id so they are always groupd together

(defn reassemble-image
  "checks to see if all the parts are there and then assembles one image
  or not"
  [parts]
  (info "reassembling image")
  (let [
        parts (into [] (map (fn [[k v]] (first v))
                        (group-by #(aget (.data %) "subFolder") parts)))
        a-part (spy (js->clj (.data (first parts))))
        expected-parts (inc (js/parseInt (get a-part "image_max_index")))
        device-id (get a-part "deviceNumId")
        part-refs (into [] (map #(.-ref %) parts))
        image-id (get a-part "image_id")
        part-data (map #(js->clj (.data %)) parts)]
    (spy (mapv #(aget   (.data %) "subFolder") parts))
    (when (= (spy expected-parts) (spy (count parts)))
      (let [sorted (sort-by #(js/parseInt
                              (last (s/split (get % "subFolder") "/"))) part-data)
            unencoded (clj->js (into []
                                     (map
                                      #(.from js/Buffer (get % "image_part") "base64"))
                                     sorted))
            joined (.concat js/Buffer unencoded)]

        (spy {:md5 (md5 joined) :device-id device-id :image-id image-id :refs part-refs})))))

(defn upload-image
  [{:keys [device-id image-id image] :as image-data}]
  (when image-data
      (let [stor (.storage fa)
            bucket (.bucket stor "grownome.appspot.com")
            file (.file bucket (str "/" device-id "/" image-id ".jpg"))
            metadata #js {"contentType" "image/jpeg"}]
        (p/then (.save file image)
                (fn [v]
                  (dissoc image-data :image))))))

(defn delete-raw
  [fs prom]
  (p/then prom
   (fn [{:keys [device-id image-id refs] :as image-info}]
     (let [b (.batch fs)]
       (doall (map #(.delete b %) refs))
       (.commit b)))))

(defn images-chan
  [fs cursor]
  (let [img-chan (a/chan 50 (comp
                                  (partition-by #(aget (spy (.data %)) "image_id"))
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
        (recur  (images-by-id fs (get next "image_id")))))
    img-chan))

(defn assemble-images
  [event context]
  (let [fs (fa/firestore)
        images-ref (images-by-id fs)
        i-chan (images-chan fs images-ref)]
    (info "image sticher started")
    (a/go-loop [item (a/<! i-chan) accum []]
      (info "got an result")
      (info item)
      (if (spy item)
        (do
          (info "recurring")
          (recur (a/<! i-chan) (conj accum item)))
        (do
          (info accum)
          (p/then
           (p/all accum)
           (fn [res]
             (info res)
             (info "I think i'm done"))))))))
