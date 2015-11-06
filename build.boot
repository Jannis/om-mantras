#!/usr/bin/env boot

(set-env!
  :source-paths #{"src/docs" "src/main"}
  :resource-paths #{"resources" "src/main"}
  :dependencies '[; Boot setup
                  [adzerk/boot-cljs "1.7.170-1"]
                  [adzerk/boot-reload "0.4.1"]
                  [pandeiro/boot-http "0.7.0-SNAPSHOT"]

                  ; Library dependencies
                  [org.clojure/clojurescript "1.7.170"]
                  [org.omcljs/om "1.0.0-alpha14-SNAPSHOT"]

                  ; Development dependencies
                  [devcards "0.2.0-8"]
                  [garden "1.3.0-SNAPSHOT"]])

(task-options!
  pom {:project "om-mantras"
       :version "0.1.0-SNAPSHOT"})

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[pandeiro.boot-http :refer [serve]])

(deftask build-dev
  []
  (comp
    (cljs :source-map true
          :optimizations :none
          :pretty-print true
          :compiler-options {:devcards true})))

(deftask build-docs
  []
  (comp
    (cljs :optimizations :advanced
          :pretty-print false
          :compiler-options {:devcards true})))

(deftask dev
  []
  (comp
    (watch)
    (reload)
    (build-dev)
    (serve :dir "target")))

(deftask docs
  []
  (comp
    (build-docs)))
