(ns tabletop.logic.keybindings
  (:require [reagent.core :as r]))

(def default-bindings
  {:copy           "c"
   :cut            "x"
   :paste          "v"
   :rotate-cw      "w"
   :rotate-ccw     "r"
   :flip           "a"
   :to-hand        "q"
   :roll-shuffle   "t"
   :lock           "h"
   :group          "g"
   :scale-up       "Z"
   :scale-down     "z"
   :bring-to-front "O"
   :send-to-back   "o"
   :delete         "Delete"
   :properties     "m"
   :camera-pan     " "})

(defonce bindings (r/atom default-bindings))

(defn key-for [action] (get @bindings action))

(defn action-for [key]
  (some (fn [[action k]] (when (= k key) action)) @bindings))

(defn serialize [] (clj->js @bindings))
(defn deserialize [js-obj] (reset! bindings (js->clj js-obj :keywordize-keys true)))
