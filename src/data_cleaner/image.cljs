(ns data-cleaner.image
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
   [data-cleaner.device :as device]
   [cljs.spec.alpha :as s]
   [orchestra-cljs.spec.test :as st]
   [cljs.core.async :as a]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))

(def build-table-query
  "
CREATE TABLE image(
  md5              UUID           PRIMARY KEY,
  device_id        INTEGER        REFERENCES device(id),
  path             VARCHAR (355)  NOT NULL,
  created_on       TIMESTAMP      NOT NULL
  );
")

(s/def :image/md5 string?)
(s/def :image/path string?)
(s/def :image/created-on inst?)
(s/def :grownome/image (s/keys :req
                               [:image/md5
                                :device/id
                                :image/path
                                :image/created-on]))


(def insert-query
  "
  INSERT INTO image(md5, device_id, path, created_on)
  VALUES($1,$2,$3,$4) RETURNING *
")

(s/fdef build
  :args (s/cat :md5 :image/md5
               :device-num-id :device/id
               :user-id :user/id
               :path :image/path
               :created-on :image/created-on)
  :ret :grownome/image)

(defn build
  [md5 device-num-id path created-on]
  {:image/md5           md5
   :device/id           device-num-id
   :image/path          path
   :image/created-on    created-on})


(s/fdef insert
  :args (s/cat :db any? :image-row :grownome/image))

(defn insert
  [db {md5        :image/md5
       device-id  :device/id
       path       :image/path
       created-on :image/created-on :as image-row}]
  (pg/insert!
   db
   insert-image-query
   [md5
    device-id
    path
    created-on]))


