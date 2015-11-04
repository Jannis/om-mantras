(ns om-mantras.docs.sortable
  (:require [clojure.string :refer [split]]
            [devcards.core :refer-macros [defcard]]
            [garden.core :refer [css]]
            [om.dom :as dom]
            [om-mantras.sortable :refer [sortable]]))

(defcard
  "# Sortable

  Sortable is a reusable Om Next component for rendering an ordered
  collection of items as a vertical or horizontal list and reordering
  its items using drag and drop. Sortable can be used in flexible ways,
  preserves all freedom of styling and allows custom elements to be
  defined for the items. It also supports a callback to to notify the
  outside world whenever the order of items has changed.")

(defcard
  "## Interface")

(defcard
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
  transformations (opacity, scaling etc.) to it.")

(defcard
  "### No styles, vertical"
  (fn [state _]
    (sortable {:items (:items @state)
               :change-fn #(swap! state assoc :items %)}))
  {:items (split "First Second Third Fourth Fifth" " ")}
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
  "### Styled sortable and items, excluding the dragged item

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
  {:items (split "First Second Third Fourth Fifth" " ")}
  {:inspect-data true :history true})

(defn style-container2 [child]
  (dom/div #js {:className "style-container2"}
    (dom/style nil
      (css [:.style-container2 {}
            [[:.sortable {:border "thin solid #eee"}]
             [:.sortable-item {:margin "10px"
                               :padding "10px"
                               :border "thin solid #ddd"
                               :background "#f8f8f8"}]
             [:.sortable-item-dragged {:opacity "0"}]]]))
    child))

(defcard
  "### Styled sortable and items, hiding the dragged item

  ```
  .sortable {
    border: thin solid #eee;
  }

  .sortable-item {
    margin: 10px;
    padding: 10px;
    border: thin solid #ddd;
    background: #f8f8f8;
  }

  .sortable-item-dragged {
    opacity: 0;
  }
  ```"
  (fn [state _]
    (style-container2
      (sortable {:items (:items @state)
                 :change-fn #(swap! state assoc :items %)})))
  {:items (split "First Second Third Fourth Fifth" " ")}
  {:inspect-data true :history true})

(defn style-container3 [child]
  (dom/div #js {:className "style-container3"}
    (dom/style nil
      (css [:.style-container3 {}
            [[:.sortable {:border "thin solid #eee"}]
             [:.sortable-item {:margin "10px"
                               :padding "10px"
                               :border "thin solid #ddd"
                               :background "#f8f8f8"}]
             [:.sortable-item-dragged {:border "thin solid transparent"}
              [:* {:opacity "0"}]]]]))
    child))

(defcard
  "### Styled sortable and items, hiding the dragged item

  ```
  .sortable {
    border: thin solid #eee;
  }

  .sortable-item {
    margin: 10px;
    padding: 10px;
    border: thin solid #ddd;
    background: #f8f8f8;
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
  {:items (split "First Second Third Fourth Fifth" " ")}
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
                               :transition "transform 0.1s ease-in"}]
             [:.sortable-item-dragged {:opacity "0.5"
                                       :transform "scale(0.8, 0.8)"}]]]))
    child))

(defcard
  "### Styled sortable and items, hiding the dragged item

  ```
  .sortable {
    padding: 10px;
  }

  .sortable-item {
    margin: 10px;
    padding: 10px;
    background: #00b8d4;
    color: #fff;
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
  {:items (split "First Second Third Fourth Fifth" " ")}
  {:inspect-data true :history true})

(defcard
  "## Usage")

(defcard
  "## Examples")
