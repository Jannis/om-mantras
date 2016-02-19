(ns om-mantras.util
  (:require [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn indexes-of [x coll]
  (keep-indexed #(when (= x %2) %1) coll))

(defn index-of [x coll]
  (first (indexes-of x coll)))

(defn delay-call
  ([ms f]
   (delay-call ms f (constantly true)))
  ([ms pred f]
   (go
     (<! (timeout ms))
     (when (pred)
       (f)))))
