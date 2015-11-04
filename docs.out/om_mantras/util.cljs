(ns om-mantras.util)

(defn indexes-of [x coll]
  (keep-indexed #(when (= x %2) %1) coll))

(defn index-of [x coll]
  (first (indexes-of x coll)))
