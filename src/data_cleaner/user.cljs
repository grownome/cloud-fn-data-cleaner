(ns data-cleaner.user
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
   [cljs.spec.alpha :as s]
   [orchestra-cljs.spec.test :as st]
   [cljs.core.async :as a]
   [goog.format.EmailAddress :as f]
   [taoensso.timbre :as timbre
    :refer-macros [trace  spy debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))

(def build-table-query
  "
  CREATE TABLE IF NOT EXISTS user_account(
  id             VARCHAR (50)   PRIMARY KEY,
  name           VARCHAR (50)   NOT NULL,
  email          text           NOT NULL,
  created_on     TIMESTAMP      NOT NULL
  ) ;
")

(def drop-table-query
  "
  DROP TABLE user_account CASCADE;
  ")

(defn email?
  [s]
  (.isValid (f/parse s)))

(s/def :user/id (s/and  string? #(< (count %) 50)))
(s/def :user/name string?)
(s/def :user/email (s/and string? email?))
(s/def :user/created-on inst?)
(s/def :grownome/user (s/keys :req [:user/id
                                    :user/name
                                    :user/email
                                    :user/created-on]))



(def insert-query
  "
  INSERT INTO user_account(id,name,email,created_on)
  VALUES($1,$2,$3,$4)
  RETURNING *;
  ")

(s/def :user/table-order (s/cat :id :user/id
                                :name :user/name
                                :email :user/email
                                :created-on :user/created-on))
(s/fdef build
  :args :user/table-order
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

(def user-by-id-query
  "
  SELECT *
  FROM user_account
  WHERE id = $1;
  ")

(s/fdef by-id
  :args (s/cat :db any? :id :user/id))

(defn by-id
  [db id]
  (a/go
    (apply build (utils/one-res (a/<! (pg/query-with-param! db user-by-id-query id))))))

(def user-by-email-query
  "
  SELECT *
  FROM user_account
  WHERE email = $1
  ")

(s/fdef by-email
  :args (s/cat  :db any? :id :user/email))

(defn by-email
  [db email]
  (a/go
    (apply build (utils/one-res (a/<! (pg/query-with-param! db user-by-email-query email))))))

