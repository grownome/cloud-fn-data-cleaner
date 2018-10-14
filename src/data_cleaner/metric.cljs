(ns data-cleaner.metric
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
  CREATE TABLE IF NOT EXISTS metric(
  device_registry_id	      VARCHAR(50) NOT NULL,
  device_id	                INTEGER     REFERENCES device(id),
  core_temp_max	            NUMERIC,
  core_temp_main	          NUMERIC,
  humidity	                NUMERIC,
  dewpoint                  NUMERIC,
  temperature	              NUMERIC,
  timestamp	                TIMESTAMP   NOT NULL
  );
")

(def drop-table-query
  "DROP TABLE metric CASCADE;"
  )
(s/def :metric/timestamp inst?)
(s/def :metric/core-temp-max  (s/and float? #(< % 300)))
(s/def :metric/core-temp-main (s/and float? #(< % 300)))
(s/def :metric/humidity       (s/and float? #(> % 0)))
(s/def :metric/temperature    (s/and float? #(> % 0)))

(s/def :grownome/metric (s/keys :req [:device/registry-id
                                      :device/id
                                      :metric/timestamp]
                                :opt [:metric/core-temp-main
                                      :metric/core-temp-max
                                      :metric/humidity
                                      :metric/temperature]))

(def insert-query
"
  INSERT INTO metrics(device_registry_id, device_id, core_temp_max, core_temp_main, humidity, temperature, timestamp, metric_name)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *
")


(s/def :metric/name #{"core-temp-main" "core-temp-max" "temperature" "humidity"})

(s/fdef build-metric
  :args (s/cat :metric-name :metric/name
               :metric float?
               :device-registry :device/registry-id
               :device-id :device/id
               :timestamp (s/or :nil nil? :value inst?))
  :ret :grownome/metric)

(defn build-metric
  [metric-name metric device-registry-id device-id timestamp]
  (let [time (or timestamp (js/Date.))
        metric-key (keyword :metric metric-name)]
    {metric-key metric
     :device/registry-id device-registry-id
     :device/id          device-id
     :metric/name        metric-name
     :metric/timestamp   time}))


(s/fdef insert
  :args (s/cat :db any? :metric :grownome/metric))

(defn insert
  [db {device-registry-id :device/registry-id
       device-num-id      :device/id
       core-temp-max      :metric/core-temp-max
       core-temp-main     :metric/core-temp-main
       humidity           :metric/humidity
       temperature        :metric/temperature
       timestamp          :metric/timestamp
       metric-name        :metric/name
       :as metric-row}]
  (if (not (or core-temp-max core-temp-main humidity temperature))
    (error ["Missing any metrics " metric-row])
    (pg/insert!
     db
     insert-query
     [device-registry-id
      device-num-id
      core-temp-max
      core-temp-main
      humidity
      temperature
      timestamp
      metric-name
      ])))



