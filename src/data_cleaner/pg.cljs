(ns data-cleaner.pg
  (:require
   [clojure.string :as string]
   ["pg" :as pg]
   [cljs.core.async
    :refer [<! chan put! close! onto-chan to-chan]]
   [taoensso.timbre :as timbre
    :refer-macros [trace  debug  info  warn  error  fatal  report
                   tracef debugf infof warnf errorf fatalf reportf]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))


; found https://gist.github.com/theasp/8b1c35134788ba88edca12f52ad75f27 
(defn result-chan [f & args]
  (let [channel  (chan 1)
        callback (fn [rs err]
                   (put! channel (or err rs))
                   (close! channel))]
    (apply f (concat args [callback]))
    channel))

(defn prep-db-args
  [{:keys [hostname port username password database
           pool-size socket-path max ssl validation-query pipeline]
    :as   config}]
  (doseq [param [:username :password :database]]
    (when (nil? (param config))
      (errorf (str param " is required"))
      (throw (new js/Error (str param " is required")))))
  #js {"host"     hostname
       "max"      max
       "socketPath" socket-path
       "port"     (or port 5432)
       "user"     username
       "database" database
       "password" password
       "ssl"      (boolean ssl)}
  )
(defn open-db
  "Creates a db connection"
  [config]
  (-> (prep-db-args config)
      (pg/Client.)))

(defn open-pool
  "Creates a db connection pool"
  [config]
  (-> (prep-db-args config)
      (pg/Pool.)))

(defn close-db!
  "Closes a db connection pool"
  [db]
  (.close db))

(defn sql-error
  [& args]
  (error args)
  (js/Error. args))

(defn connect!
  ([db]
   (result-chan connect! db))
  ([db f]
   (.connect db
             (fn [err client done]
               (f [client done (some-> err (sql-error "CONNECT"))] nil)))))

(defn execute!
  "Executes an sql statement with parameters and returns result rows and update count."
  ([db sql]
   (result-chan execute! db sql))
  ([db [sql & params] f]
   (debugf "SQL: %s %s" sql (vec params))
   (try
     (.query db sql
             (clj->js (vec params))
             (fn [err rs]
               (debugf "Execute result: %s" {:err err :rs (js->clj rs) })
               (if (some? err)
                 (f nil (sql-error err sql))
                 (f (js->clj rs) nil))))
     (catch js/Object err
       (f nil (sql-error err sql))))))

(defn query!
  "Executes an sql query with parameters and returns result rows."
  ([db sql]
   (result-chan query! db [sql]))
  ([db sql f]
   (execute! db [sql] f)))

(defn query-with-param!
  "Executes an sql query with parameters and returns result rows."
  ([db sql data]
   (result-chan query-with-param! db sql data))
  ([db sql data f]
   (execute! db (flatten [sql data]) f)))


 (defn insert!
  "Executes an sql insert and returns update count and returned rows.
   Spec format is
     :table - table name
     :returning - sql string"
  ([db sql data]
   (result-chan insert! db sql data))
  ([db sql data f]
   (execute! db (flatten [sql data]) f)))

(defn update!
  "Executes an sql update and returns update count and returned rows.
   Spec format is
     :table - table name
     :returning - sql string
     :where - [sql & params]"
  ([db sql data]
   (result-chan update! db sql data))
  ([db sql data f]
   (execute! db (concat [sql data]
                        (vals data))
             f)))
