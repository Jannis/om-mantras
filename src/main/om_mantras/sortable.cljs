(ns om-mantras.sortable
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-mantras.util :refer [index-of]]))

(defn sortable-key [x]
  (let [props (cond-> x (om/component? x) om/props)
        key-fn (:key-fn props)]
    (if key-fn
      (key-fn (:item props))
      (:item props))))

(defui SortableItem
  Object
  (render [this]
    (let [{:keys [item dragged element-fn drag-fns]} (om/props this)]
      (dom/div #js {:className (str "sortable-item"
                                    (when dragged
                                      " sortable-item-dragged"))
                    :draggable true
                    ; :style #js {:opacity (if dragged "0.0" "1.0")}
                    :onDragStart #(some-> drag-fns :start (apply [% this]))
                    :onDrag #(some-> drag-fns :drag (apply [% this]))
                    :onDragEnd #(some-> drag-fns :end (apply [% this]))
                    :onDragOver #(some-> drag-fns :over (apply [% this]))
                    :onDrop #(some-> drag-fns :drop (apply [% this]))}
        (cond-> item element-fn element-fn)))))

(def sortable-item (om/factory SortableItem {:keyfn sortable-key}))

(defui Sortable
  Object
  (drag-start [this e child]
    (.. e -dataTransfer (setData "text/plain" (sortable-key child)))
    (let [item (-> child om/props :item)]
      (om/update-state! this assoc :drag-item item)))

  (drag [this e child]
    (om/update-state! this assoc :dragging true))

  (drag-over [this e]
    (-> e .-dataTransfer .-dropEffect (set! "move"))
    (.preventDefault e))

  (reorder-items [this drag-item target-item after? items]
    (->> items
         (split-at (-> target-item
                       (index-of items)
                       (cond-> after? inc)))
         (map #(remove #{drag-item} %))
         ((fn [[before after]] (concat before [drag-item] after)))))

  (drag-over-child [this e child]
    (-> e .-dataTransfer .-dropEffect (set! "move"))
    (.preventDefault e)
    (let [drag-item (:drag-item (om/get-state this))
          target-item (:item (om/props child))]
      (when (and drag-item (not= drag-item target-item))
        (let [x (.-clientX e)
              y (.-clientY e)
              rect (-> child dom/node (.getBoundingClientRect))
              center-x (-> (.-left rect) (+ (.-right rect)) (/ 2))
              center-y (-> (.-top rect) (+ (.-bottom rect)) (/ 2))
              after? (if (-> this om/props :direction (= :horizontal))
                        (>= x center-x)
                        (>= y center-y))
              items (or (:items (om/get-state this))
                        (:items (om/props this)))]
          (->> items
               (.reorder-items this drag-item target-item after?)
               (om/update-state! this assoc :items))))))

  (drag-end [this e child]
    (.preventDefault e)
    (let [items (or (:items (om/get-state this))
                    (:items (om/props this)))]
      (some-> this om/props :change-fn (apply [items])))
    (om/update-state! this (fn [state] (-> state
                                           (dissoc :drag-item)
                                           (dissoc :dragging)))))

  (drop [this e]
    (.preventDefault e))

  (componentWillReceiveProps [this new-props]
    (om/update-state! this (fn [state] (-> state
                                           (dissoc :items)
                                           (dissoc :drag-item)
                                           (dissoc :dragging)))))

  (render [this]
    (let [{:keys [key-fn element-fn]} (om/props this)
          {:keys [dragging drag-item]} (om/get-state this)]
      (dom/div #js {:className "sortable"
                    :dragOver #(.drag-over this %)
                    :drop #(.drop this %)}
        (for [item (or (:items (om/get-state this))
                       (:items (om/props this)))]
          (sortable-item
            {:item item
             :dragged (and dragging drag-item (= item drag-item))
             :key-fn key-fn
             :element-fn element-fn
             :drag-fns {:start #(.drag-start this %1 %2)
                        :drag #(.drag this %1 %2)
                        :end #(.drag-end this %1 %2)
                        :over #(.drag-over-child this %1 %2)
                        :drop #(.drop this %1)}}))))))

(def sortable (om/factory Sortable))
