(ns om-mantras.docs.progressive-image
  (:require [clojure.string :refer [split]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [garden.core :refer [css]]
            [om.dom :as dom]
            [om-mantras.progressive-image :refer [progressive-image]]))

(defcard-doc
  "# Progressive Image

  ProgressiveImage is a reusable Om Next component for loading
  high resolution images progressively by loading a low resolution
  version first, then incrementally moving towards higher resolution
  versions until the final full-size image has loaded.

  ProgressiveImage supports an arbitrary number of image versions
  as well as specifying a CSS filter for each of them.")

(defcard-doc
  "## Interface

  ProgressiveImage is created as follows:

  ```
  (progressive-image {:versions [{:url \"/path/to/lo-res.svg\"
                                  :filter \"blur()\"}
                                 {:url \"/path/to/hi-res.svg\"}]})
  ```

  ### Parameters

  * `versions` - http://www.w3.org/TR/filter-effects-1/

  ...")

(defcard-doc
  "## Usage examples")

(defcard
  "Single image, no progressive loading

  ```
  (progressive-image {:versions (:versions @state)})
  ```"
  (fn [state _]
    (progressive-image {:versions (:versions @state)}))
  {:versions [{:url "/img/lo-res.jpg"}]}
  {:inspect-data true :history true})

(defcard
  "Single image with blur filter, no progressive loading

  ```
  (progressive-image {:versions (:versions @state)})
  ```"
  (fn [state _]
    (progressive-image {:versions (:versions @state)}))
  {:versions [{:url "/img/lo-res.jpg"
               :filter "blur(10px)"}]}
  {:inspect-data true :history true})

(defcard
  "Progressive loading with two images but no filters or delays

  ```
  (progressive-image {:versions (:versions @state)})
  ```"
  (fn [state _]
    (dom/div nil
      (dom/div nil
        (progressive-image {:versions (:versions @state)}))
      (dom/div nil
        (dom/button #js {:onClick #(swap! state update :counter inc)}
          "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"}
              {:url "/img/med-res.jpg"}]}
  {:inspect-data true :history true})

(defcard
  "Progressive loading with three images but no filters or delays"
  (fn [state _]
    (dom/div nil
      (dom/div nil
        (progressive-image {:versions (:versions @state)}))
      (dom/div nil
        (dom/button #js {:onClick #(swap! state update :counter inc)}
          "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"}
              {:url "/img/med-res.jpg"
               :delay 500}
              {:url "/img/hi-res.jpg"
               :delay 1000}]}
  {:inspect-data true :history true})

(defcard
  "Progressive loading with two images, a blur filter and a 2s delay

  ```
  (progressive-image {:versions (:versions @state)})
  ```"
  (fn [state _]
    (dom/div nil
      (dom/div nil
        (progressive-image {:versions (:versions @state)}))
      (dom/div nil
        (dom/button #js {:onClick #(swap! state update :counter inc)}
          "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"
               :filter "blur(20px)"}
              {:url "/img/med-res.jpg"
               :delay 2000}]}
  {:inspect-data true :history true})

(defcard
  "Progressive loading with three images, blur filters and delays

  ```
  (progressive-image {:versions (:versions @state)})
  ```"
  (fn [state _]
    (dom/div nil
      (dom/div nil
        (progressive-image {:versions (:versions @state)}))
      (dom/div nil
        (dom/button #js {:onClick #(swap! state update :counter inc)}
          "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"
               :filter "blur(10px)"}
              {:url "/img/med-res.jpg"
               :filter "blur(10px)"
               :delay 1000}
              {:url "/img/med-res.jpg"
               :delay 2000}]}
  {:inspect-data true :history true})

(defcard
  "Progressive loading as a background image, with three images, blur
  filters and delays.

  ```
  (progressive-image {:versions (:versions @state)
                      :background? true})
  ```"
  (fn [state _]
    (dom/div nil
      (dom/div #js {:style #js {:width 500
                                :height 300}}
        (progressive-image {:versions (:versions @state)
                            :background? true}))
      (dom/div nil
        (dom/button #js {:onClick #(swap! state update :counter inc)}
          "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"
               :filter "blur(10px)"}
              {:url "/img/med-res.jpg"
               :filter "blur(10px)"
               :delay 1000}
              {:url "/img/med-res.jpg"
               :delay 2000}]}
  {:inspect-data true :history true})

(defcard
  "## Styling

  ProgressiveImage creates an `<img>` tag with exactly one CSS class:
  `.progressive-image`. This can be styled freely.")

(defcard
  "### Styling examples")

(defcard
  "Fixed size and transition for animating filters

  ```
  .progressive-image {
    width: 660px;
    height: 439px;
    transition: all 0.5s ease-in;
  }
  ```"
  (fn [state _]
    (dom/div nil
     (dom/div #js {:className "style-container1"}
       (dom/style nil
         (css [:.style-container1 {}
               [:.progressive-image {:width "660px"
                                     :height "439px"
                                     :transition "all 0.25s ease-in"}]]))
       (progressive-image {:versions (:versions @state)}))
     (dom/div nil
       (dom/button #js {:onClick #(swap! state update :counter inc)}
         "Reload"))))
  {:versions [{:url "/img/lo-res.jpg"
               :filter "blur(10px)"}
              {:url "/img/med-res.jpg"
               :filter "blur(5px)"
               :delay 500}
              {:url "/img/hi-res.jpg"
               :delay 1000}]}
  {:inspect-data true :history true})
