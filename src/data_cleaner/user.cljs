(ns data-cleaner.user
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
CREATE TABLE user(
  id             VARCHAR (50)   PRIMARY KEY,
  name           VARCHAR (50),
  email          text           NOT NULL,
  created_on     TIMESTAMP      NOT NULL
  );
")

(s/def :user/id (s/and  string? #(< (count %) 50)))
(s/def :user/name string?)
(s/def :user/email (s/and string? #"\A[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z"))
(s/def :user/created-on inst?)
(s/def :grownome/user (s/keys :req [:user/id
                                    :user/name
                                    :user/email
                                    :user/created-on]))


(def insert-query
  "
  INSERT INTO user(id,name,email,created_on),
  VALUES($1,$2,$3,$4)
  RETURNING *
  ")

(s/fdef build
  :args (s/cat :id :user/id :name :user/name :email :user/email :created-on :user/created-on)
  :ret :grownome/user)
(defn build
  [id name email created_on]
  {:user/id id
   :user/name name
   :user/email email
   :user/created-on created_on})

(s/fdef insert
  :args (s/cat :db any? :user :grownome/user))
(defn insert
  [db {id         :user/id
       name       :user/name
       email      :user/email
       created_on :user/created-on}]
  (pg/insert!
   db
   insert-query
   [id name email created_on]))
