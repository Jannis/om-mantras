#!/usr/bin/env boot

(set-env!
  :source-paths #{"src/docs" "src/main"}
  :resource-paths #{"resources" "src/main"}
  :dependencies '[; Boot setup
                  [adzerk/boot-cljs "1.7.170-1"]
                  [adzerk/boot-reload "0.4.1"]
                  [adzerk/bootlaces "0.1.13"]
                  [pandeiro/boot-http "0.7.0-SNAPSHOT"]

                  ; Library dependencies
                  [org.clojure/clojurescript "1.7.170"]
                  [org.omcljs/om "1.0.0-alpha14-SNAPSHOT"]

                  ; Development dependencies
                  [devcards "0.2.0-8"]
                  [garden "1.3.0-SNAPSHOT"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.bootlaces :refer :all]
         '[adzerk.boot-reload :refer [reload]]
         '[boot.git :refer [last-commit]]
         '[pandeiro.boot-http :refer [serve]])

(def version "0.1.0-alpha3")

(bootlaces! version)

(task-options!
  push {:repo "deploy"
        :ensure-branch "master"
        :ensure-clean true
        :ensure-tag (last-commit)
        :ensure-version version}
  pom {:project 'om-mantras
       :version version
       :description "A collection of truly reusable components for Om (Next)"
       :url "https://github.com/jannis/om-mantras"
       :scm {:url "https://github.com/jannis/om-mantras"}
       :license {"GNU Affero General Public License Version 3"
                 "http://www.gnu.org/licenses/agpl-3.0.en.html"}})

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
