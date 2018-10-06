(ns data-cleaner.user-spec
  (:require
   [cljs.test :as t]
   [cljs.spec.alpha :as s]
   [data-cleaner.user :as user]
   [cljs.core.async :as a]
   [orchestra-cljs.spec.test :as st]
   [data-cleaner.sql :as sql]
   [data-cleaner.pg :as pg]))

(st/instrument 'data-cleaner.user)
(t/use-fixtures :once
  {:before (fn [] (t/async done (sql/init-tables done)))
   :after  (fn [] (t/async done (sql/drop-tables done)))})


(t/deftest build-user-work
  (t/is (any? (user/build "1123231211" "eric" "eric@gmail.com" (js/Date.)))))

(defonce user-args [(str (rand-int 1000000)) "eric" "eric@gmail.com" (js/Date.)] )

(t/deftest can-add-and-get-user
  (t/async
   done
   (a/go
     (let [c            (pg/open-db (sql/get-config))
           conn         (a/<! (pg/connect! c))
           u            (apply user/build user-args)
           insert-res   (a/<! (user/insert c u))
           get-res      (a/<! (user/by-id  c (first user-args)))
           get-by-email (a/<! (user/by-email c (get user-args 2)))]
       (t/is (= user-args (vals (first (js->clj (.-rows insert-res))))))
       (t/is (= u get-res))
       (t/is (= u get-by-email))
       (done)))))
