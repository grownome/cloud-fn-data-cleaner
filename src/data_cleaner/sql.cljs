(ns data-cleaner.sql
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
   [cljs.spec.alpha :as s]
   [cljs.core.async :as a]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))


(defn get-config
  []
  "get database config from environment"
  (let [env (utils/env)
        ;check to see if this is running in the cloud
        prod  (= "production" (get env "NODE_ENV"))
        ;either way we need these parameters
        base-config
        {:username (or (get env "SQL_USER") "postgres" )
         :password (or (get env "SQL_PASSWORD") "")
         :hostname (or (get env "SQL_HOST") "localhost")
         :database (or (get env "SQL_NAME") "grownome")}]
    ;if it's prod add the socket-path so that it can get to the db socket
    (if prod
      (assoc base-config
             :socket-path
             (str "/cloudsql/" (get env "INSTANCE_CONNECTION_NAME")))
      base-config)))

(defonce db (pg/open-pool (get-config)))

(def build-metric-table
"
CREATE TABLE metric(
  device_registry_id	      VARCHAR(50) NOT NULL,
  device_num_id	            INTEGER     NOT NULL,
  core_temp_max	            NUMERIC,
  core_temp_main	          NUMERIC,
  humidity	                NUMERIC,
  dewpoint                  NUMERIC,
  temperature	              NUMERIC,
  timestamp	                TIMESTAMP   NOT NULL
  );
")


(def build-image-table
"
CREATE TABLE image(
  md5 UUID         PRIMARY KEY,
  device_num_id    INTEGER        NOT NULL,
  user_id          VARCHAR (50)   REFERENCES user(id),
  path             VARCHAR (355)  NOT NULL,
  created_on       TIMESTAMP      NOT NULL
  );
  ")

(def build-user-table
  "
  CREATE TABLE user(
  id             VARCHAR (50)   PRIMARY KEY,
  name           VARCHAR (50),
  email          text  NOT NULL,
  created_on     TIMESTAMP NOT NULL
  );
  ")

(def build-device-table
  "
  CREATE TABLE device(
  id             INTEGER        PRIMARY KEY,
  iot_num_id     INTEGER        NOT NULL,
  name           text           NOT NULL,
  resin_name     text           NOT NULL,
  short_link     text           NOT NULL
  );
  ")


(s/def :user/id (s/and  string? #(< (count %) 50)))
(s/def :user/name string?)
(s/def :user/email (s/and string? #"\A[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z"))
(s/def :user/created-on inst?)
(s/def :grownome/user (s/keys :req [:user/id :user/name :user/email :user/created-on]))


(s/def :device/id         integer?)
(s/def :device/iot_num_id integer?)
(s/def :device/name       string?)
(s/def :device/resin_name string?)
(s/def :device/short_link uri?)
(s/def :grownome/device (s/keys :req [:device/id
                             :device/iot_num_id
                             :device/name
                             :device/resin_name
                             :device/short_link]))

(s/def :owner/id integer?)
(s/def :grownome/owner (s/keys :req [:owner/id
                            :user/id
                            :device/id]))
(def build-owner-table
  "
  CREATE TABLE owner(
  id                  SERIAL         PRIMARY KEY
  user_id             VARCHAR (50)   REFERENCES device(id),
  device_id           INTEGER        REFERENCES device(id)
  );
  ")

(defn init-tabels
  "Build the grownome database"
  [done]
  (go

    (let [c (data-cleaner.pg/open-db (data-cleaner.sql/get-config))
          conn (a/<! (data-cleaner.pg/connect! c))
          res-metrics (a/<!
                       (data-cleaner.pg/execute! conn [data-cleaner.sql/build-metric-table]))
          res-images (a/<!
                      (data-cleaner.pg/execute!  conn [data-cleaner.sql/build-image-table]))
          res-devices (a/<!
                      (data-cleaner.pg/execute!  conn [data-cleaner.sql/build-device-table]))
          res-users  (a/<!
                      (data-cleaner.pg/execute!  conn [data-cleaner.sql/build-user-table]))
          res-owners (a/<!
                      (data-cleaner.pg/execute!  conn [data-cleaner.sql/build-owner-table]))
          res (clj->js [res-metrics res-images res-devices res-users res-owners])]
      (done res))))



(def insert-image-query
"
  INSERT INTO metric(md5, device_num_id, user_id, path, created_on)
  VALUES($1,$2,$3,$4,$5) RETURNING *
")

(defn insert-image
  [db {:keys [md5
              device-num-id
              user-id
              path
              created-on] :as metric-row}]
    (pg/insert!
     db
     insert-image-query
     [md5
      device-num-id
      user-id
      path
      created-on]))

(defn build-image
  [md5 device-num-id user-id path created-on]
  {:md5           md5
   :device-num-id device-num-id
   :user-id       user-id
   :path          path
   :created-on    created-on})


(def insert-metric-query
"
  INSERT INTO metric(device_registry_id, device_num_id, core_temp_max, core_temp_main, humidity, dewpoint, temperature, timestamp)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *
")

(defn insert-metric
  [db {:keys [device-registry-id
              device-num-id
              core-temp-max
              core-temp-main
              humidity
              dewpoint
              temperature
              timestamp] :as metric-row}]
  (if (not (or core-temp-max core-temp-main humidity dewpoint temperature))
    (error ["Missing any metrics " metric-row])
    (pg/insert!
     db
     insert-metric-query
     [device-registry-id
      device-num-id
      core-temp-max
      core-temp-main
      humidity
      dewpoint
      temperature
      timestamp])))

(defn build-metric
  [metric-name metric device-registry-id device-num-id]
  {(keyword metric-name) metric
   :device-registry-id device-registry-id
   :device-num-id      device-num-id
   :timestamp          (js/Date.)})

