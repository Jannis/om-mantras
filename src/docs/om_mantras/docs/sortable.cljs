(ns om-mantras.docs.sortable
  (:require [clojure.string :refer [split]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [garden.core :refer [css]]
            [om.dom :as dom]
            [om-mantras.sortable :refer [sortable]]))

(defcard-doc
  "# Sortable

  Sortable is a reusable Om Next component for rendering an ordered
  collection of items as a vertical or horizontal list and reordering
  its items using drag and drop. Sortable can be used in flexible ways,
  preserves all freedom of styling and allows custom elements to be
  defined for the items. It also supports a callback to to notify the
  outside world whenever the order of items has changed.")

(defcard-doc
  "## Interface

  Sortable is created as follows:

  ```
  (sortable {:items ...
             :direction ...
             :key-fn ...
             :element-fn ...
             :change-fn ...})
  ```

  ### Parameters

  * `items` (mandatory) - an ordered collection of items; these can be anything:
    numbers, strings, maps, vectors, it doesn't matter
  * `direction` (optional) - the direction along which the items are rendered;
    either `:vertical` (default) or `:horizontal`; this has no effect on
    rendering, it only affects how the drag position is calculated
  * `key-fn` (optional but recommended) - a function that takes one argument,
    an item, and must return a unique key for the item in the collection; can
    be omitted if the items themselves are distinct strings or numbers
  * `element-fn` (optional but recommended) - a function that takes one
    argument, an item, and must return a React element for the item; inside
    Sortable, the returned elements are each wrapped in a
    `<div class=\"sortable-item\">`; can be optional if the items are strings,
    numbers or anything else that converts to a string that browsers can
    display
  * `change-fn` (optional) - a function that takes one argument, a reordered
    collection of the input items; this function is called whenever the items
    are reordered using drag and drop; it can be used to sync the change to
    your application state")

(defcard-doc
  "## Usage examples")

(defcard
  "Sortable list of numbers

  ```
  (sortable {:items (:numbers @state)
             :key-fn identity
             :change-fn (fn [items]
                          (js/alert items)
                          (swap! state assoc :numbers items))})
  ```"
  (fn [state _]
    (sortable {:items (:numbers @state)
               :change-fn (fn [items]
                            (js/alert items)
                            (swap! state assoc :numbers items))}))
  {:numbers [1 2 3 4]}
  {:inspect-data true :history true})

(defcard
  "Sortable list of maps

  ```
  (sortable {:items (:maps @state)
             :key-fn :id
             :element-fn #(dom/span nil (str (:id %) \" - \" (:text %)))
             :change-fn (fn [items]
                          (swap! state assoc :maps items))})
  ```"
  (fn [state _]
    (sortable {:items (:maps @state)
               :key-fn :id
               :element-fn #(dom/span nil (str (:id %) " - " (:text %)))
               :change-fn (fn [items]
                            (swap! state assoc :maps items))}))
  {:maps [{:id 1 :text "Foo"} {:id 2 :text "Bar"} {:id 3 :text "Baz"}]}
  {:inspect-data true :history true})

(defcard
  "Sortable list of vectors

  ```
  (sortable {:items (:vectors @state)
             :key-fn first
             :element-fn #(dom/span nil (str (first %) \" - \" (second %)))
             :change-fn (fn [items]
                          (swap! state assoc :vectors items))})
  ```"
  (fn [state _]
    (sortable {:items (:vectors @state)
               :key-fn first
               :element-fn #(dom/span nil (str (first %) " - " (second %)))
               :change-fn (fn [items]
                            (swap! state assoc :vectors items))}))
  {:vectors [[1 "Foo"] [2 "Bar"] [3 "Baz"]]}
  {:inspect-data true :history true})

(defcard-doc
  "## Styling

  Sortable can be styled freely. It defines three CSS classes that you
  can customize to whatever degree you like. They are:

  * `.sortable` - set on the sortable container (a `div`)
  * `.sortable-item` - set on the items (`div`) that wrap the elements
    created for each item in the collection
  * `.sortable-item-dragged` - set on the item that is currently being
    dragged

  In addition, the selector `.sortable-item-dragged *` is often useful
  to hide the content of the item currently being dragged or apply other
  transformations (opacity, scaling etc.) to it.

  ### Vertical vs. horizontal

  Styling is entirely up to your app. The `:direction` parameter that can
  be passed to Sortable does not affect rendering in any way. The HTML element
  structure of Sortable looks like this:

  ```
  <div class=\"sortable\">
    <div class=\"sortable-item\">
      Some item
    </div>
    <div class=\"sortable-item\">
      Another item
    </div>
    <div class=\"sortable-item sortable-item-dragged\">
      Dragged item
    </div>
  </div>
  ```

  Since `div`s are, by default, rendered as block elements, the default
  rendering is vertical. To change Sortable to be horizontal, your app
  can employ style hints like

  ```
  .sortable-item { display: inline-block; }
  ```

  or even

  ```
  .sortable      { display: table; }
  .sortable-item { display: table-cell; }
  ```")

(defcard-doc
  "### Styling examples")

(defcard
  "No styling at all"
  (fn [state _]
    (sortable {:items (:items @state)
               :change-fn #(swap! state assoc :items %)}))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})

(defn style-container1 [child]
  (dom/div #js {:className "style-container1"}
    (dom/style nil
      (css [:.style-container1 {}
             [[:.sortable {:border "thin solid #eee"}]
              [:.sortable-item {:margin "10px"
                                :padding "10px"
                                :border "thin solid #ddd"
                                :background "#f8f8f8"
                                :cursor "move"}]]]))
    child))

(defcard
  "Basic styling, excluding the dragged item

  ```
  .sortable {
    border: thin solid #eee;
  }
  .sortable-item {
    margin: 10px;
    padding: 10px;
    border: thin solid #ddd;
    background: #f8f8f8;
    cursor: move;
  }
  ```"
  (fn [state _]
    (style-container1
      (sortable {:items (:items @state)
                 :change-fn #(swap! state assoc :items %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})

(defn style-container2 [child]
  (dom/div #js {:className "style-container2"}
    (dom/style nil
      (css [:.style-container2 {}
            [[:.sortable {:border "thin solid #eee"}]
             [:.sortable-item {:margin "10px"
                               :padding "10px"
                               :border "thin solid #ddd"
                               :background "#f8f8f8"
                               :cursor "move"}]
             [:.sortable-item-dragged {:opacity "0"}]]]))
    child))

(defcard
  "Hiding the dragged item to make it look like other items are
  pushed out of the way.

  ```
  .sortable {
    border: thin solid #eee;
  }
  .sortable-item {
    margin: 10px;
    padding: 10px;
    border: thin solid #ddd;
    background: #f8f8f8;
    cursor: move;
  }
  .sortable-item-dragged {
    opacity: 0;
  }
  ```"
  (fn [state _]
    (style-container2
      (sortable {:items (:items @state)
                 :change-fn #(swap! state assoc :items %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})

(defn style-container3 [child]
  (dom/div #js {:className "style-container3"}
    (dom/style nil
      (css [:.style-container3 {}
            [[:.sortable {:border "thin solid #eee"}]
             [:.sortable-item {:margin "10px"
                               :padding "10px"
                               :border "thin solid #ddd"
                               :background "#f8f8f8"
                               :cursor "move"}]
             [:.sortable-item-dragged {:border "thin solid transparent"}
              [:* {:opacity "0"}]]]]))
    child))

(defcard
  "Hiding the contents of the dragged item to make it look like a drop area.

  ```
  .sortable {
    border: thin solid #eee;
  }
  .sortable-item {
    margin: 10px;
    padding: 10px;
    border: thin solid #ddd;
    background: #f8f8f8;
    cursor: move;
  }
  .sortable-item-dragged {
    border: thin solid transparent;
    * {
      opacity: 0;
    }
  }
  ```"
  (fn [state _]
    (style-container3
      (sortable {:items (:items @state)
                 :element-fn #(dom/span nil %)
                 :change-fn #(swap! state assoc :items %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})

(defn style-container4 [child]
  (dom/div #js {:className "style-container4"}
    (dom/style nil
      (css [:.style-container4 {}
            [[:.sortable {:padding "10px"}]
             [:.sortable-item {:margin "10px"
                               :padding "10px"
                               :background "#00b8d4"
                               :color "#fff"
                               :cursor "move"
                               :transition "transform 0.1s ease-in"}]
             [:.sortable-item-dragged {:opacity "0.5"
                                       :transform "scale(0.8, 0.8)"}]]]))
    child))

(defcard
  "Applying a scale transition to the dragged item

  ```
  .sortable {
    padding: 10px;
  }
  .sortable-item {
    margin: 10px;
    padding: 10px;
    background: #00b8d4;
    color: #fff;
    cursor: move;
    transition: transform 0.1s ease-in;
  }
  .sortable-item-dragged {
    opacity: 0.5;
    transform: scale(0.8, 0.8);
  }
  ```"
  (fn [state _]
    (style-container4
      (sortable {:items (:items @state)
                 :element-fn #(dom/span nil %)
                 :change-fn #(swap! state assoc :items %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})

(defn style-container5 [child]
  (dom/div #js {:className "style-container5"}
    (dom/style nil
      (css [:.style-container5 {}
            [[:.sortable {:padding "10px"}]
             [:.sortable-item {:display "inline-block"
                               :margin "10px"
                               :background "#eee"
                               :cursor "move"}
               [:* {:display "inline-block"
                    :padding "10px"
                    :background "#00b8d4"
                    :color "#fff"}]]
             [:.sortable-item-dragged {}
               [:* {:opacity "0"}]]]]))
    child))

(defcard
  "Horizontal sortable with drop area look

  ```
  .sortable {
    padding: 10px;
  }
  .sortable-item {
    display: inline-block;
    margin: 10px;
    background: #eee;
    cursor: move;
    * {
      display: inline-block;
      padding: 10px;
      background: #00b8d4;
      color: #fff;
    }
  }
  .sortable-item-dragged {
    * { opacity: 0; }
  }
  ```"
  (fn [state _]
    (style-container5
      (sortable {:items (:items @state)
                 :direction :horizontal
                 :element-fn #(dom/span nil %)
                 :change-fn #(swap! state assoc :items %)})))
  {:items ["First" "Second" "Third" "Fourth" "Fifth"]}
  {:inspect-data true :history true})
