(ns data-cleaner.owner
  (:require
   [data-cleaner.pg :as pg]
   [cljs.spec.alpha :as s]
   [orchestra-cljs.spec.test :as st]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))


(st/instrument)

(def build-table-query
  "
  CREATE TABLE owner(
  id                  SERIAL         PRIMARY KEY,
  user_id             VARCHAR (50)   REFERENCES user(id),
  device_id           INTEGER        REFERENCES device(id),
  created_on          TIMESTAMP      NOT NULL
  );
  ")

(s/def :owner/id integer?)
(s/def :owner/created-on inst?)
(s/def :grownome/owner (s/keys :req [:user/id
                                     :device/id
                                     :owner/created-on]
                               :opt [:owner/id]))

(def insert-query
  "
  INSERT INTO
  owner(user_id,device_id,created_on)
  VALUES($1,$2,$3)
  RETURNING *
  ")

(s/fdef build
  :args (s/cat :device-id :device/id
               :user-id    :user/id)
  :ret :grownome/device)

(defn build
  [device-id  user-id]
  {:device/id device-id
   :user/id  user-id
   :owner/created-on (js/Date.)})


(s/fdef insert
  :args (s/cat :db any? :owner-row :grownome/owner))

(defn insert
  [db {device     :device/id  ; this is the iot numeric id
       user       :device/name
       created-on :device/created-on
       :as owner-row}]
  (pg/insert! db
              insert-query
              [user
               device
               created-on]))


