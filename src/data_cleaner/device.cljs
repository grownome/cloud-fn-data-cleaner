(ns data-cleaner.device
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
   [cljs.spec.alpha :as s]
   [orchestra-cljs.spec.test :as st]
   [cljs.core.async :as a]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))



(def build-table-query
  "
  CREATE TABLE IF NOT EXISTS device (
  id             INTEGER        PRIMARY KEY,
  name           text           NOT NULL,
  resin_name     text           NOT NULL,
  short_link     text           NOT NULL,
  created_on     TIMESTAMP      NOT NULL
  ) ;
")

(def drop-table-query
  "
  DROP TABLE device CASCADE;
  ")

(s/def :device/id         integer?)
(s/def :device/name       string?)
(s/def :device/registry-id       string?)
(s/def :device/resin-name string?)
(s/def :device/short-link uri?)
(s/def :device/created-on inst?)
(s/def :grownome/device (s/keys :req [:device/id
                                      :device/name
                                      :device/resin-name
                                      :device/short-link
                                      :device/created-on]))

(def insert-query
  "
  INSERT INTO
  device(id,name,resin_name,short_link,created_on)
  VALUES($1,$2,$3,$4,$5)
  RETURNING *
  ")

(s/fdef build
  :args (s/cat :iot-num-id :device/id
               :name       :device/name
               :resin-name :device/resin-name
               :short-link :device/short-link)
  :ret :grownome/device)

(defn build
  [iot-num-id name resin-name short-link]
  {:device/id iot-num-id
   :device/name name
   :device/resin-name resin-name
   :device/short-link short-link})


(s/fdef insert
  :args (s/cat :db any? :device-row :grownome/device))

(defn insert
  [db {id         :device/id  ; this is the iot numeric id
       name       :device/name
       resin_name :device/resin-name
       short_link :device/short-link
       created_on :device/created-on
       :as device-row}]
  (pg/insert! db
              insert-query
              [id
               name
               resin_name
               short_link
               created_on]))


