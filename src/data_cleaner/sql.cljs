(ns data-cleaner.sql
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
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

(def build-image-table
"
CREATE TABLE image(
  md5 UUID         PRIMARY KEY,
  device_num_id  INTEGER      NOT NULL,
  user_id        VARCHAR (50)   NOT NULL,
  path        VARCHAR (355)  NOT NULL,
  created_on  TIMESTAMP NOT NULL
  );
  ")


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

