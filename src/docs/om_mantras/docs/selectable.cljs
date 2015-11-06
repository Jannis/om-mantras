(ns om-mantras.docs.selectable
  (:require [clojure.string :refer [split]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [garden.core :refer [css]]
            [om.dom :as dom]
            [om-mantras.selectable :refer [selectable]]))

(defcard-doc
  "# Selectable

  Selectable is a reusable Om Next component for selecting items from
  a list, similar to a `<select>` element but with support for multiple
  selected items, text input, matching suggestions and more.")

(defcard-doc
  "## Known issues

  * When the user clicks somewhere outside the Selectable, the matches
    popup should disappear.")

(defcard-doc
  "## Interface

  Selectable is created as follows:

  ```
  (selectable {:items ...
               :key-fn ...
               :element-fn ...
               :match-fn ...
               :match-element-fn ...
               :change-fn ...})
  ```

  ### Parameters
  ")

(defcard-doc
  "## Usage examples")

(defcard
  "Selectable with a list of numbers

  ```
  (selectable {:items (:numbers @state)
               :key-fn identity
               :match-fn #(re-matches (re-pattern (str \".*\" %2 \".*\"))
                                      (str %1))
               :change-fn #(swap! state assoc :selected %)})
  ```"
  (fn [state _]
    (selectable {:items (:numbers @state)
                 :key-fn identity
                 :match-fn #(re-matches (re-pattern (str ".*" %2 ".*"))
                                        (str %1))
                 :change-fn #(swap! state assoc :selected %)}))
  {:numbers [1 10 100 1000 2 25 250 1025 3330 130]}
  {:inspect-data true :history false})

  (defn style-container1 [child]
    (dom/div #js {:className "style-container1"}
      (dom/style nil
        (css [:.style-container1 {}
               [[:.selectable {:box-sizing "border-box"
                               :border "thin solid #ddd"
                               :position "relative"
                               :padding "5px"
                               :padding-left "5px"}]
                [:.selectable-selected-item {:display "inline-block"
                                             :padding "5px"
                                             :margin-right "5px"
                                             :background "#00b8d4"
                                             :color "#fff"}]
                [:.selectable-input-box {:display "inline-block"}]
                [:.selectable-input {:padding "5px"
                                     :padding-left "0px"
                                     :margin "0"}]
                [:.selectable-matches {:position "absolute"
                                       :top "100%"
                                       :left 0
                                       :box-sizing "border-box"
                                       :width "100%"
                                       :background "#fff"
                                       :border-left "thin solid #ddd"
                                       :border-right "thin solid #ddd"
                                       :border-bottom "thin solid #ddd"}]
                [:.selectable-match {:padding "5px"}]
                [:.selectable-match-active {:background "#eee"}]]]))
      child))

(defcard
  "Basic styling

  ```
  .selectable {
    position: relative;
    box-sizing: border-box;
    border: thin solid #ddd;
    padding: 5px;
    padding-left: 5px;
  }

  .selectable-selected-item {
    display: inline-block;
    margin-right: 5px;
    padding: 5px;
    background: #00b8d4;
    color: #fff;
  }

  .selectable-input-box {
    display: inline-block;
  }

  .selectable-input {
    margin: 0;
    padding: 5px;
    padding-left: 0px;
  }

  .selectable-matches {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    box-sizing: border-box;
    border-bottom: thin solid #ddd;
    border-left: thin solid #ddd;
    border-right: thin solid #ddd;
    background: #fff;
  }

  .selectable-match {
    padding: 5px;
  }

  .selectable-match-active {
    background: #eee;
  }
  ```"
  (fn [state _]
    (style-container1
      (selectable {:items (:items @state)
                   :key-fn identity
                   :match-fn #(re-matches (re-pattern (str ".*" %2 ".*")) %1)
                   :change-fn #(swap! state assoc :selected %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history false})
