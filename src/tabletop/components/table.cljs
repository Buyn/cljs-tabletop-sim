(ns tabletop.components.table
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state pan-table! zoom-table!
                                    set-selection! clear-selection!
                                    paste-from-list!
                                    set-last-middle-click!]]
            [tabletop.components.card :as card]
            [tabletop.components.deck :as deck]
            [tabletop.components.die :as die]
            [tabletop.components.hand :as hand]
            [tabletop.components.tile-piece :as tile-piece]
            [tabletop.components.context-menu :refer [open-context-menu!]]
            [tabletop.logic.keybindings :as kb]))

;; Track last known mouse position (also tracked in input.cljs — kept for context-menu paste)
(defonce last-mouse-pos (atom [0 0]))

(defonce ^:private mouse-tracker
  (do (.addEventListener js/document "mousemove"
                         (fn [e] (reset! last-mouse-pos [(.-clientX e) (.-clientY e)])))
      true))

;; Space fast-pan: track held state and last position
(defonce ^:private space-pan-state (atom {:active false :last-x 0 :last-y 0}))

(defonce ^:private space-pan-handlers
  (do
    (.addEventListener js/document "keydown"
                       (fn [e]
                         (when (and (= (.-key e) (kb/key-for :camera-pan))
                                    (not (#{"INPUT" "TEXTAREA"} (.-tagName (.-target e))))
                                    (not (:active @space-pan-state)))
                           (.preventDefault e)
                           (let [[cx cy] @last-mouse-pos]
                             (swap! space-pan-state assoc :active true :last-x cx :last-y cy)))))
    (.addEventListener js/document "keyup"
                       (fn [e]
                         (when (= (.-key e) (kb/key-for :camera-pan))
                           (swap! space-pan-state assoc :active false))))
    (.addEventListener js/document "mousemove"
                       (fn [e]
                         (when (:active @space-pan-state)
                           (let [cx  (.-clientX e)
                                 cy  (.-clientY e)
                                 dx  (* -5 (- cx (:last-x @space-pan-state)))
                                 dy  (* -5 (- cy (:last-y @space-pan-state)))]
                             (pan-table! dx dy)
                             (swap! space-pan-state assoc :last-x cx :last-y cy)))))
    true))

(defn- client->table [cx cy pan-x pan-y zoom]
  [(/ (- cx pan-x) zoom)
   (/ (- cy pan-y) zoom)])

(defn- rect-intersects? [rx1 ry1 rx2 ry2 c]
  (let [cx1 (:x c 0)
        cy1 (:y c 0)
        cw  (if (= (:type c) :die) 70 70)
        ch  (if (= (:type c) :die) 70 100)
        cx2 (+ cx1 cw)
        cy2 (+ cy1 ch)]
    (and (< rx1 cx2) (> rx2 cx1)
         (< ry1 cy2) (> ry2 cy1))))

(defn table []
  (let [panning?   (r/atom false)
        last-x     (r/atom 0)
        last-y     (r/atom 0)
        selecting? (r/atom false)
        sel-start  (r/atom nil)
        sel-end    (r/atom nil)]
    (fn []
      (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
            components                 (:components @app-state)
            [sx1 sy1]  (or @sel-start [0 0])
            [sx2 sy2]  (or @sel-end [0 0])
            rect-x1    (min sx1 sx2)
            rect-y1    (min sy1 sy2)
            rect-x2    (max sx1 sx2)
            rect-y2    (max sy1 sy2)
            screen-x1  (+ pan-x (* rect-x1 zoom))
            screen-y1  (+ pan-y (* rect-y1 zoom))
            screen-w   (* (- rect-x2 rect-x1) zoom)
            screen-h   (* (- rect-y2 rect-y1) zoom)]
        [:div
         {:class           "w-full h-full bg-green-900 overflow-hidden relative"
          :on-pointer-down (fn [e]
                             (when (= (.-target e) (.-currentTarget e))
                               (cond
                                 (= (.-button e) 0)
                                 ;; Left click on empty table → drag select
                                 (do
                                   (reset! selecting? true)
                                   (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                                   (let [[tx ty] (client->table (.-clientX e) (.-clientY e) pan-x pan-y zoom)]
                                     (reset! sel-start [tx ty])
                                     (reset! sel-end [tx ty])))

                                 (= (.-button e) 1)
                                 ;; Middle click → pan + record position
                                 (do
                                   (let [[tx ty] (client->table (.-clientX e) (.-clientY e) pan-x pan-y zoom)]
                                     (set-last-middle-click! tx ty))
                                   (reset! panning? true)
                                   (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                                   (reset! last-x (.-clientX e))
                                   (reset! last-y (.-clientY e))))))
          :on-pointer-move (fn [e]
                             (cond
                               @selecting?
                               (let [[tx ty] (client->table (.-clientX e) (.-clientY e) pan-x pan-y zoom)]
                                 (reset! sel-end [tx ty]))

                               @panning?
                               (let [dx (- (.-clientX e) @last-x)
                                     dy (- (.-clientY e) @last-y)]
                                 (pan-table! dx dy)
                                 (reset! last-x (.-clientX e))
                                 (reset! last-y (.-clientY e)))))
          :on-pointer-up   (fn [e]
                             (cond
                               @selecting?
                               (do
                                 (reset! selecting? false)
                                 (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
                                 (let [selected-ids
                                       (->> components
                                            (filter #(rect-intersects? rect-x1 rect-y1 rect-x2 rect-y2 %))
                                            (map :id))]
                                   (set-selection! selected-ids))
                                 (reset! sel-start nil)
                                 (reset! sel-end nil))

                               @panning?
                               (do
                                 (reset! panning? false)
                                 (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))))
          :on-pointer-cancel (fn [e]
                               (reset! selecting? false)
                               (reset! panning? false)
                               (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
                               (reset! sel-start nil)
                               (reset! sel-end nil))
          :on-wheel        (fn [e]
                             (.preventDefault e)
                             (zoom-table! (* -0.001 (.-deltaY e))))
          :on-context-menu (fn [e]
                             (when (= (.-target e) (.-currentTarget e))
                               (.preventDefault e)
                               (let [cx (.-clientX e)
                                     cy (.-clientY e)
                                     [tx ty] (client->table cx cy pan-x pan-y zoom)]
                                 (open-context-menu!
                                  cx cy
                                  [{:label "Paste"
                                    :action #(paste-from-list! tx ty)}]))))}

         [:div
          {:style {:position         "absolute"
                   :transform        (str "translate(" pan-x "px, " pan-y "px) scale(" zoom ")")
                   :transform-origin "0 0"}}
          (for [component components]
            (case (:type component)
              :deck ^{:key (:id component)} [deck/deck {:deck component}]
              :card ^{:key (:id component)} [card/card {:card component}]
              :die  ^{:key (:id component)} [die/die  {:die  component}]
              :tile-piece ^{:key (:id component)} [tile-piece/tile-piece {:piece component}]
              ^{:key (:id component)} [:div {:class "absolute bg-red-500 text-white text-xs p-1 rounded"
                                             :style {:left (str (:x component 0) "px")
                                                     :top  (str (:y component 0) "px")}}
                                       (str "Unknown type: " (:type component))]))]

         ;; Drag-select rectangle overlay
         (when (and @selecting? @sel-start @sel-end (> screen-w 2) (> screen-h 2))
           [:div {:style {:position       "absolute"
                          :left           (str screen-x1 "px")
                          :top            (str screen-y1 "px")
                          :width          (str screen-w "px")
                          :height         (str screen-h "px")
                          :border         "2px solid rgba(99,179,237,0.9)"
                          :background     "rgba(99,179,237,0.15)"
                          :pointer-events "none"
                          :z-index        100}}])]))))
