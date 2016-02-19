(ns om-mantras.progressive-image
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-mantras.util :refer [delay-call]]))

(defui ProgressiveImage
  Object
  (version-loaded [this image]
    (let [versions (:versions (om/get-state this))
          version (first (filter #(= image (:image %)) versions))]
      (delay-call (:delay version)
                  (fn []
                    (om/update-state!
                      this update :versions
                      (fn [versions]
                        (map #(cond-> %
                                (= image (:image %))
                                (assoc :loaded? true))
                             versions)))))))

  (create-versions [this props]
    (letfn [(create-version [{:keys [url filter delay]}]
              (let [image (js/Image.)]
                (set! (.-src image) url)
                (set! (.-onload image) #(.version-loaded this image))
                {:image image
                 :url url
                 :filter filter
                 :delay (or delay 0)
                 :loaded? false}))]
      (om/set-state! this {:versions (->> (:versions props)
                                          (map create-version))})))

  (componentWillMount [this]
    (.create-versions this (om/props this)))

  (componentWillReceiveProps [this new-props]
    (.create-versions this new-props))

  (render [this]
    (let [{:keys [background?]} (om/props this)
          versions (:versions (om/get-state this))
          loaded (filter :loaded? versions)
          last-loaded (or (last loaded) (first versions))
          url (.-src (:image last-loaded))
          style (merge (if background?
                         {:backgroundImage (str "url(" url ")")}
                         {})
                       (if (:filter last-loaded)
                         {:filter (:filter last-loaded)
                              :WebkitFilter (:filter last-loaded)}
                         {}))]
      (dom/div #js {:className "progressive-image"
                    :style (clj->js style)}
        (when-not background?
          (dom/img #js {:src (.-src (:image last-loaded))}))))))

(def progressive-image (om/factory ProgressiveImage))
