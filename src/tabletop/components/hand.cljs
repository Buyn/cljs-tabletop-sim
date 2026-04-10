(ns tabletop.components.hand
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-card-to-table!]]))

(defonce hand-ref (atom nil))

(defn hand-area-rect []
  (when-let [el @hand-ref]
    (.getBoundingClientRect el)))

(defn hand-drop-zone? [[x y]]
  (when-let [rect (hand-area-rect)]
    (and (>= x (.-left rect))
         (<= x (.-right rect))
         (>= y (.-top rect))
         (<= y (.-bottom rect)))))

;; ─── constants ───────────────────────────────────────────────────────────────

(def hand-height 120)
;; Collapsed: strip sinks 108px (90%), leaving 12px (10%) visible.
;; Cards (100px) are raised 58px extra so 50px of each card peeks above the strip.
(def collapsed-strip-translate 108)
(def collapsed-card-raise 58)

;; ─── hand card ───────────────────────────────────────────────────────────────

(defn hand-card [{:keys [id suit rank color]} hovered-id]
  (let [dragging? (r/atom false)]
    (fn [{:keys [id suit rank color]} hovered-id]
      (let [is-hovered? (= @hovered-id id)
            neighbour?  (and @hovered-id (not is-hovered?))]
        [:div
         {:class         (str "relative select-none rounded-lg border border-gray-300 shadow-md "
                              "flex-shrink-0 flex items-center justify-center "
                              "text-sm font-bold overflow-hidden cursor-grab "
                              color)
          :style         {:width            "70px"
                          :height           "100px"
                          :transform        (if is-hovered? "scale(3)" "scale(1)")
                          :transform-origin "bottom center"
                          :transition       "transform 0.2s ease, margin-left 0.15s ease"
                          :margin-left      (if neighbour? "40px" "-8px")
                          :z-index          (if is-hovered? 10 1)}
          :on-mouse-enter #(reset! hovered-id id)
          :on-mouse-leave #(when (= @hovered-id id) (reset! hovered-id nil))
          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (reset! dragging? true)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e)))
          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      table-x (/ (- (.-clientX e) pan-x) zoom)
                      table-y (/ (- (.-clientY e) pan-y) zoom)]
                  (move-card-to-table! id table-x table-y)))))
          :on-pointer-cancel
          (fn [e]
            (reset! dragging? false)
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))}
         [:div {:class "flex flex-col items-center justify-center w-full h-full"}
          [:span {:class "text-lg leading-none"} rank]
          [:span {:class "text-xl leading-none"} suit]]]))))

;; ─── hand area ───────────────────────────────────────────────────────────────

(defn hand-area []
  (let [hovered?   (r/atom false)
        hovered-id (r/atom nil)]
    (fn []
      (let [hand      (:hand @app-state)
            collapsed (and (not @hovered?) (not @hovered-id))]
        [:div
         {:ref            #(reset! hand-ref %)
          :class          "fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-600
                           flex items-end px-4 z-10"
          :style          {:height   (str hand-height "px")
                           :overflow "visible"
                           :transform  (str "translateY(" (if collapsed collapsed-strip-translate 0) "px)")
                           :transition "transform 0.2s ease"}
          :on-mouse-enter (fn [] (reset! hovered? true))
          :on-mouse-leave (fn [] (reset! hovered? false) (reset! hovered-id nil))}
         (if (empty? hand)
           [:span {:class "text-gray-500 text-sm italic mb-3"} "Hand is empty"]
           [:div {:class "flex items-end pb-2"
                  :style {:transform  (str "translateY(" (if collapsed (- collapsed-card-raise) 0) "px)")
                          :transition "transform 0.2s ease"}}
            (for [c hand]
              ^{:key (:id c)}
              [hand-card c hovered-id])])]))))
