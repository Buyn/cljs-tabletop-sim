(ns tabletop.components.hand
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-card-to-table!]]))

(defonce hand-ref (atom nil))

(defn hand-area-rect []
  (when-let [el @hand-ref] (.getBoundingClientRect el)))

(defn hand-drop-zone? [[x y]]
  (when-let [r (hand-area-rect)]
    (and (>= x (.-left r)) (<= x (.-right r))
         (>= y (.-top r))  (<= y (.-bottom r)))))

;; ─── constants ───────────────────────────────────────────────────────────────

(def card-w       70)
(def card-h       100)
(def base-overlap 20)  ; px cards overlap at rest
(def hover-lift   60)  ; px hovered card rises
(def spread-extra 28)  ; extra px each neighbor shifts outward per proximity tier

;; ─── layout ──────────────────────────────────────────────────────────────────

(defn- card-positions
  "Returns [{:tx :ty :z}] for each card index, centered in strip-w."
  [n hovered-idx strip-w]
  (let [step     (- card-w base-overlap)
        total-w  (+ card-w (* (dec n) step))
        origin-x (/ (- strip-w total-w) 2)]
    (vec
     (for [i (range n)]
       (let [base-x (+ origin-x (* i step))]
         (if (nil? hovered-idx)
           {:tx base-x :ty 0 :z i}
           (let [dist (Math/abs (- i hovered-idx))
                 dir  (if (< i hovered-idx) -1 1)
                 tx   (if (= i hovered-idx)
                        base-x
                        (+ base-x (* dir dist (/ spread-extra 2))))
                 ty   (if (= i hovered-idx) (- hover-lift) 0)
                 z    (if (= i hovered-idx) 1000 (- 500 dist))]
             {:tx tx :ty ty :z z})))))))

;; ─── hand card ───────────────────────────────────────────────────────────────

(defn- hand-card
  [card idx hovered-idx strip-w n on-reorder]
  (let [dragging? (r/atom false)]
    (fn [{:keys [id suit rank color]} idx hovered-idx strip-w n on-reorder]
      (let [{:keys [tx ty z]} (nth (card-positions n @hovered-idx strip-w) idx {:tx 0 :ty 0 :z idx})]
        [:div
         {:style         {:position   "absolute"
                          :left       (str tx "px")
                          :bottom     (str (- ty) "px")
                          :width      (str card-w "px")
                          :height     (str card-h "px")
                          :z-index    z
                          :transition "left 0.15s ease, bottom 0.15s ease"
                          :cursor     "grab"}
          :class         (str "select-none rounded-lg border border-gray-300 shadow-md "
                              "flex items-center justify-center font-bold overflow-hidden "
                              color)
          :on-mouse-enter #(reset! hovered-idx idx)
          :on-mouse-leave #(when (= @hovered-idx idx) (reset! hovered-idx nil))

          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (reset! dragging? true)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [rect  (hand-area-rect)
                    cx    (- (.-clientX e) (.-left rect))
                    step  (- card-w base-overlap)
                    total (+ card-w (* (dec n) step))
                    ox    (/ (- (.-width rect) total) 2)
                    new-i (-> (/ (- cx ox) step) Math/round (max 0) (min (dec n)))]
                (when (not= new-i idx)
                  (on-reorder idx new-i)))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      tx (/ (- (.-clientX e) pan-x) zoom)
                      ty (/ (- (.-clientY e) pan-y) zoom)]
                  (move-card-to-table! id tx ty)))))

          :on-pointer-cancel
          (fn [e]
            (reset! dragging? false)
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))}

         [:div {:class "flex flex-col items-center justify-center w-full h-full pointer-events-none"}
          [:span {:class "text-lg leading-none"} rank]
          [:span {:class "text-xl leading-none"} suit]]]))))

;; ─── hand area ───────────────────────────────────────────────────────────────

(defn hand-area []
  (let [hovered?    (r/atom false)
        hovered-idx (r/atom nil)
        strip-w     (r/atom 800)]
    (fn []
      (let [hand      (:hand @app-state)
            n         (count hand)
            collapsed (and (not @hovered?) (nil? @hovered-idx))]
        [:div
         {:ref   (fn [el]
                   (reset! hand-ref el)
                   (when el (reset! strip-w (.-offsetWidth el))))
          :class "fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-600 z-10"
          :style {:height     "120px"
                  :overflow   "visible"
                  :transform  (str "translateY(" (if collapsed 108 0) "px)")
                  :transition "transform 0.2s ease"}
          :on-mouse-enter (fn [] (reset! hovered? true))
          :on-mouse-leave (fn [] (reset! hovered? false) (reset! hovered-idx nil))}

         (if (empty? hand)
           [:span {:class "absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-500 text-sm italic"}
            "Hand is empty"]

           [:div {:style {:position "relative" :width "100%" :height "100%"}}
            (doall
             (map-indexed
              (fn [i c]
                ^{:key (:id c)}
                [hand-card c i hovered-idx @strip-w n
                 (fn [from to]
                   (swap! app-state update :hand
                          (fn [h]
                            (let [card (nth h from)
                                  h'   (vec (concat (subvec h 0 from) (subvec h (inc from))))]
                              (vec (concat (subvec h' 0 to) [card] (subvec h' to))))))
                   (reset! hovered-idx to))])
              hand))])]))))
