(ns data-cleaner.sql
  (:require-macros [cljs.core.async :refer [go go-loop]])
  (:require
   [data-cleaner.utils :as utils]
   [data-cleaner.pg :as pg]
   [data-cleaner.owner :as owner]
   [data-cleaner.user :as  user]
   [data-cleaner.metric :as metric]
   [data-cleaner.device :as device]
   [data-cleaner.device :as image]
   [cljs.spec.alpha :as s]
   [orchestra-cljs.spec.test :as st]
   [cljs.core.async :as a]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]]))


(st/instrument)

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

(defn init-tabels
  "Build the grownome database"
  [done]
  (go
    (let [c (data-cleaner.pg/open-db (data-cleaner.sql/get-config))
          conn (a/<! (data-cleaner.pg/connect! c))
          res-devices (a/<!
                       (data-cleaner.pg/execute!  conn [device/build-table-query]))
          res-metrics (a/<!
                       (data-cleaner.pg/execute!  conn [metric/build-table-query]))
          res-images (a/<!
                      (data-cleaner.pg/execute!   conn [image/build-table-query]))
          res-users  (a/<!
                      (data-cleaner.pg/execute!   conn [user/build-table-query]))
          res-owners (a/<!
                      (data-cleaner.pg/execute!   conn [owner/build-table-query]))
          res (clj->js [res-metrics res-images res-devices res-users res-owners])]
      (done res))))



