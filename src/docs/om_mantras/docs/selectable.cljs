(ns om-mantras.docs.selectable
  (:require [clojure.string :refer [join split]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [garden.core :refer [css]]
            [om.dom :as dom]
            [om-mantras.selectable :refer [selectable]]))

(defcard-doc
  "# Selectable

  Selectable is a reusable Om Next component for selecting multiple items
  from a collection. It is based on text input and provides a mechanism to
  filter matches rendered in a popup. Selectable can be used in flexible
  ways, preserves all freedom of styling and allows custom elements to be
  defined for the items and matches in the popup. It also supports a callback
  to notify the outside world whenever the selected items have changed.")

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

  * `items` (mandatory) - a collection of items; these can be anything:
    numbers, strings, maps, vectors, it doesn't matter
  * `key-fn` (optional but recommended) - a function that takes one argument,
    an item, and must return a unique key for the item in the collection; can
    be omitted if the items themselves are distinct strings or numbers
  * `element-fn` (optional but recommended) - a function that takes one
    argument, an item, and must return a React element for the item; inside
    Selectable, the returned elements are each wrapped in a
    `<div class=\"selectable-item\">`; can be omitted if the items are
    strings, numbers or anything else that converts to a string that browsers
    can display
  * `match-fn` (optional but recommended) - a function that takes two
    arguments, an item and the text currently entered into the Selectable;
    the function must return a true-ish value if the item is to be included
    in the matches for the text
  * `match-element-fn` (optional but recommended) - a function that takes
    on argument, an item, and must return a React element for the item; this
    element is then rendered inside a `<div class=\"selectable-match\">` in
    the popup showing the matches for the current text; can be omitted if the
    items are strings, numbers or anything else that converts to a string that
    browsers can display
  * `change-fn` (optional) - a function that takes one argument, an ordered
    collection of a subset of the input items; this function is called
    whenever the selected items change; it can be used to sync the change to
    your application state")

(defcard
  "## Keyboard navigation

  In addition to typing text into the selectable, special behaviour is
  defined for the following keys:

  * *Backspace* - removes the selected item before the caret
  * *Delete* - removes the selected item after the caret
  * *Escape* - hides the matches popup
  * *Return* - adds the highlighted match in the popup to the selection
  * *Up* - highlights the previous match in the popup
  * *Down* - highlights the next match in the popup
  * *Left* - moves the caret to the left
  * *Right* - moves the caret to the right
  * *Home* - moves the caret to the beginning of the selection
  * *End* - moves the caret to the end of the selection")

(defcard-doc
  "## Usage examples")

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
                                     :z-index 99
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
  "Selectable list of numbers

  ```
  (selectable {:items (:numbers @state)
               :key-fn identity
               :match-fn #(re-matches (re-pattern (str \".*\" %2 \".*\"))
                                      (str %1))
               :change-fn #(swap! state assoc :selected %)})
  ```"
  (fn [state _]
    (style-container1
      (selectable {:items (:numbers @state)
                   :key-fn identity
                   :match-fn #(re-matches (re-pattern (str ".*" %2 ".*"))
                                          (str %1))
                   :change-fn #(swap! state assoc :selected %)})))
  {:numbers [1 10 100 1000 2 25 250 1025 3330 130]}
  {:inspect-data true :history false})

(defcard
  "Selectable list of maps (blog posts), matched by tags.

  ```
  (selectable {:items (:maps @state)
               :key-fn :id
               :element-fn #(dom/button nil (:title %))
               :match-element-fn
               (fn [item]
                 (dom/p nil
                   (dom/strong nil (:title item))
                   (dom/span #js {:style #js {:marginLeft \"10px\"}}
                     \"Tags: \" (join \", \" (:tags item)))))
               :match-fn
               (fn [item text]
                 (let [pattern (re-pattern (str \".*\" text \".*\"))]
                   (some #(re-matches pattern %) (:tags item))))
               :change-fn #(swap! state assoc :selected %)})))
  ```"
  (fn [state _]
    (style-container1
      (selectable {:items (:maps @state)
                   :key-fn :id
                   :element-fn #(dom/button nil (:title %))
                   :match-element-fn
                   (fn [item]
                     (dom/p nil
                       (dom/strong nil (:title item))
                       (dom/span #js {:style #js {:marginLeft "10px"}}
                         "Tags: " (join ", " (:tags item)))))
                   :match-fn
                   (fn [item text]
                     (let [pattern (re-pattern (str ".*" text ".*"))]
                       (some #(re-matches pattern %) (:tags item))))
                   :change-fn #(swap! state assoc :selected %)})))
  {:maps [{:id 1 :title "Post 1" :tags ["personal" "work"]}
          {:id 2 :title "Post 3" :tags ["work"]}
          {:id 3 :title "Post 4" :tags ["personal" "work" "community"]}]}
  {:inspect-data true :history false})

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
    z-index: 99;
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
