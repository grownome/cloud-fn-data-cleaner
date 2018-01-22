(defproject data-cleaner "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.13"]
            [lein-doo "0.1.8"]]
  ;; :jvm-opts ["--add-modules" "java.xml.bind"]
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :source-paths ["src"]
  :cljsbuild {:builds [
                       {:id "dev"
                        :source-paths ["src"]
                        :compiler {:optimizations :none
                                   :install-deps true
                                   :main data-cleaner.core
                                   :asset-path "target/js/compiled/dev"
                                   :output-to "target/js/compiled/index.js"
                                   :output-dir "target/js/compiled/dev"
                                   :target :nodejs
                                   :npm-deps {"@google-cloud/storage" "1.5.2"
                                              "@google-cloud/bigquery" "1.0.0"
                                              }}}]}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]])
