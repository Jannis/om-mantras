(ns om-mantras.docs
  (:require [devcards.core :refer-macros [defcard start-devcard-ui!]]
            [om-mantras.docs.selectable]
            [om-mantras.docs.sortable]))

(enable-console-print!)

(start-devcard-ui!)

(defcard
  "# Om Mantras

  Om Mantras are a collection of truly reusable, generic components for
  Om (Next). Often, generic components are released with predefined styles,
  expectations on what the data should look like, or even assumptions about
  your app state and its structure.

  Om Mantras make none of these assumptions. They follow three principles:

  1. They come unstyled by default, but provide logical CSS classes to give
     you full freedom to style them the way you want.
  2. They accept generic data (either single data items or collections of them)
     and allow you to extract the bits needed for items to be identified and
     rendered via your own functions.
  3. They operate in isolation from your app state but allow you to integrate
     them into your apps by defining callbacks that can then mutate your app
     state.

  ## Example interface

  ```
  (sortable {:items <any ordered collection of arbitary data>
             :key-fn (fn [item] <code to return a unique key for the item>)
             :element-fn (fn [item] <code to return a React element for the item>)
             :change-fn (fn [items] <code to do something with the reordered items>)})
  ```

  ## Usage

  First, you have to add the following dependency to your project, e.g.
  in `project.clj` or `build.boot`:

  ```
  [\"om-mantras\" \"0.1.0-alpha1-SNAPSHOT\"]
  ```

  To use the components in your app, require `om-mantras.<component>` and
  create components just like you would do with any other components written
  using Om (Next):

  ```
  (ns yourapp.some-ns
    (:require [om-mantras.sortable :refer [sortable]]))

  (defui YourComponent
    Object
    (render [this]
      (dom/div nil
        (sortable {:items ...
                   :key-fn ...
                   :element-fn ...
                   :change-fn ...}))))
  ```")
