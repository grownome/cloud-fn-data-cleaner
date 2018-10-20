(ns data-cleaner.utils)

(defn -js->clj+
  "For cases when built-in js->clj doesn't work. Source: https://stackoverflow.com/a/32583549/4839573"
  [x]
  (into {} (for [k (js-keys x)]
             [k (aget x k)])))

(defn env
  "Returns current env vars as a Clojure map."
  []
  (-js->clj+ (.-env js/process)))


(defn one-res
  [result]
  (-> result .-rows first js->clj vals))

(defn -dev-prefix
  []
  (let [e (env)]
    (get e "DEV_PREFIX") ))

(defonce dev-prefix (-dev-prefix))
(defn -bucket-name
  []
  (let [e ( env)] (get e "BUCKET") ))

(defonce bucket-name (-bucket-name))



