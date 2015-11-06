(ns om-mantras.selectable
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-mantras.util :refer [index-of]]))

(defn selectable-key [x]
  (let [props (cond-> x (om/component? x) om/props)
        key-fn (:key-fn props)]
    (if key-fn
      (key-fn (:item props))
      (:item props))))

(defui SelectableMatch
  Object
  (render [this]
    (let [{:keys [item key-fn match-element-fn hover-fn select-fn active?]}
            (om/props this)]
      (dom/div #js {:className (str "selectable-match"
                                    (when active? " selectable-match-active"))
                    :style #js {:cursor "pointer"}
                    :key (cond-> item key-fn key-fn)
                    :onMouseOver #(some-> hover-fn (apply [this]))
                    :onClick #(some-> select-fn (apply [this]))}
        (cond-> item match-element-fn match-element-fn)))))

(def selectable-match (om/factory SelectableMatch {:keyfn selectable-key}))

(defui SelectableInput
  Object
  (set-width [this n]
    (om/update-state! this assoc :width n))

  (componentDidMount [this]
    (let [width (-> this (om/react-ref :input/hidden) .-offsetWidth)]
      (.set-width this width)))

  (componentDidUpdate [this old-props old-state]
    (let [width (-> this (om/react-ref :input/hidden) .-offsetWidth)]
      (when-not (= width (:width (om/get-state this)))
        (.set-width this width))))

  (render [this]
    (let [{:keys [ref text key-down-fn change-fn]} (om/props this)
          {:keys [width]} (om/get-state this)]
      (dom/div #js {:ref ref
                    :className "selectable-input-box"}
        (dom/span #js {:ref :input/hidden
                       :style #js {:position "absolute"
                                   :left -9999
                                   :visibility "hidden"}}
          text)
        (dom/input #js {:ref :input/input
                        :className "selectable-input"
                        :style #js {:font "inherit"
                                    :border "none"
                                    :outline "none"
                                    :MozOutline "none"
                                    :WebkitOutline "none"
                                    :width (max 5 width)}
                        :value text
                        :onKeyDown #(some-> key-down-fn (apply [this %]))
                        :onChange (fn [e]
                                    (some-> change-fn
                                            (apply [this (.. e -target -value)]))
                                    (.preventDefault e))})))))

(def selectable-input (om/factory SelectableInput))

(defui Selectable
  Object
  (matches-for-text [this text]
    (if (empty? text)
      (->> this om/props :items)
      (let [match-fn (:match-fn (om/props this))]
        (->> this om/props :items
             (filter #(cond-> % match-fn (match-fn text)))))))

  (update-matches [this]
    (->> this om/get-state :text
         (.matches-for-text this)
         (remove #(some #{%} (:selected (om/get-state this))))
         (into [])
         (om/update-state! this assoc :matches)))

  (recalculate-active-match [this]
    (let [matches (:matches (om/get-state this))]
      (om/update-state! this update :active-match
                        #(if (some #{%} matches) % (first matches)))))

  (update-text [this text]
    (om/update-state! this assoc :text text)
    (.update-matches this)
    (.recalculate-active-match this)
    (.show-matches this true))

  (update-selected [this items]
    (om/update-state! this assoc :selected items)
    (some-> this om/props :change-fn (apply [items])))

  (select-match [this match]
    (let [match (cond-> match (om/component? match) (-> om/props :item))
          selected (:selected (om/get-state this))
          caret (:caret (om/get-state this))]
      (let [[before after] (split-at caret selected)]
        (->> (concat before [match] after)
             (into [])
             (.update-selected this)))
      (.update-caret this inc)
      (.update-text this "")))

  (show-matches [this show?]
    (om/update-state! this assoc :show-matches show?))

  (focus [this e]
    (-> this
        (om/react-ref :input/box)
        (om/react-ref :input/input)
        dom/node
        .focus)
    (.show-matches this true))

  (set-active-match [this child]
    (om/update-state! this assoc :active-match (-> child om/props :item)))

  (update-caret [this f]
    (let [selected (:selected (om/get-state this))]
      (om/update-state! this update :caret
                        (fn [caret]
                          (-> (f caret)
                              (max 0)
                              (min (count selected)))))))

  (key-backspace [this e]
    (when (empty? (:text (om/get-state this)))
      (let [selected (:selected (om/get-state this))
            caret (:caret (om/get-state this))]
        (let [[before after] (split-at caret selected)]
          (->> (concat (butlast before) after)
               (into [])
               (.update-selected this)))
        (.update-caret this dec)
        (.update-text this ""))))

  (key-left [this e]
    (when (empty? (:text (om/get-state this)))
      (.update-caret this dec)))

  (key-right [this e]
    (when (empty? (:text (om/get-state this)))
      (.update-caret this inc)))

  (key-escape [this e]
    (.show-matches this false))

  (key-up [this e]
    (let [{:keys [matches active-match]} (om/get-state this)
          index (index-of active-match matches)]
      (->> (max (dec index) 0)
           (get matches)
           (om/update-state! this assoc :active-match)))
    (.preventDefault e))

  (key-down [this e]
    (let [{:keys [matches active-match]} (om/get-state this)
          index (index-of active-match matches)]
      (->> (min (inc index) (-> matches count (- 1)))
           (get matches)
           (om/update-state! this assoc :active-match)))
    (.preventDefault e))

  (key-return [this e]
    (some->> this om/get-state :active-match (.select-match this)))

  (key-press [this e]
    (case (.-keyCode e)
      8  (.key-backspace this e)
      27 (.key-escape this e)
      38 (.key-up this e)
      40 (.key-down this e)
      13 (.key-return this e)
      37 (.key-left this e)
      39 (.key-right this e)
         true))

  (componentWillMount [this]
    (.update-text this "")
    (.update-selected this [])
    (.update-caret this (constantly 0))
    (.show-matches this false))

  (componentWillReceiveProps [this props]
    (.update-matches this))

  (render [this]
    (let [{:keys [key-fn element-fn match-element-fn]} (om/props this)
          {:keys [text selected show-matches matches active-match caret]}
            (om/get-state this)]
      (dom/div #js {:className "selectable"
                    :style #js {:cursor "text"}
                    :onClick #(.focus this)}
        (for [item (take caret selected)]
          (dom/div #js {:className "selectable-selected-item"
                        :key (cond-> item key-fn key-fn)}
            (cond-> item element-fn element-fn)))
        (selectable-input {:text text
                           :ref :input/box
                           :key-down-fn #(.key-press this %2)
                           :change-fn #(.update-text this %2)})
        (for [item (drop caret selected)]
          (dom/div #js {:className "selectable-selected-item"
                        :key (cond-> item key-fn key-fn)}
            (cond-> item element-fn element-fn)))
        (when (and show-matches matches)
          (dom/div #js {:className "selectable-matches"}
            (for [match (remove #(some #{%} (or selected [])) matches)]
              (selectable-match {:item match
                                 :active? (and active-match
                                               (= active-match match))
                                 :key-fn key-fn
                                 :match-element-fn match-element-fn
                                 :hover-fn #(.set-active-match this %)
                                 :select-fn #(.select-match this %)}))))))))

(def selectable (om/factory Selectable))
