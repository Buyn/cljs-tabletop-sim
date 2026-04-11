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

(def card-w      70)
(def card-h      100)
(def strip-h     120)
(def max-overlap 40)   ; max px cards may overlap each other
(def hover-scale 3)    ; hovered card CSS scale factor

;; ─── layout ──────────────────────────────────────────────────────────────────

(defn- compute-step
  "Step between card left edges. No overlap when space allows; overlap only when needed."
  [n strip-w]
  (if (<= n 1)
    0
    (min card-w
         (max (- card-w max-overlap)
              (/ (- strip-w card-w) (dec n))))))

(defn- card-positions
  "Returns [{:tx :z}] for each card index, centered in strip-w.
   At rest: cards centered with uniform step.
   On hover:
   - hovered card stays at base-x (scales via CSS)
   - right neighbors placed from hovered-right-edge outward at natural step
     (closest neighbor has zero overlap with hovered, farther ones keep natural overlap)
   - left neighbors mirrored
   - if cards would overflow strip edges, far cards are compressed first"
  [n hovered-idx strip-w]
  (let [step     (compute-step n strip-w)
        total-w  (+ card-w (* (dec n) step))
        origin-x (/ (- strip-w total-w) 2)]
    (if (nil? hovered-idx)
      (vec (for [i (range n)]
             {:tx (+ origin-x (* i step)) :z i}))
      (let [base-hovered (+ origin-x (* hovered-idx step))
            ;; Right edge of scaled hovered card
            hov-right    (+ base-hovered card-w (/ (* card-w (dec hover-scale)) 2))
            ;; Left edge of scaled hovered card
            hov-left     (- base-hovered (/ (* card-w (dec hover-scale)) 2))
            ;; Place right neighbors: H+1 at hov-right, then each at +step
            right-count  (- n hovered-idx 1)
            right-txs    (vec (for [k (range 1 (inc right-count))]
                                (min (- strip-w card-w)
                                     (+ hov-right (* (dec k) step)))))
            ;; Place left neighbors: H-1 at hov-left - card-w, then each at -step
            left-count   hovered-idx
            left-txs     (vec (for [k (range 1 (inc left-count))]
                                (max 0
                                     (- hov-left card-w (* (dec k) step)))))]
        (vec (for [i (range n)]
               (cond
                 (= i hovered-idx)
                 {:tx base-hovered :z 1000}

                 (> i hovered-idx)
                 (let [k    (- i hovered-idx)
                       dist k]
                   {:tx (nth right-txs (dec k)) :z (- 500 dist)})

                 :else
                 (let [k    (- hovered-idx i)
                       dist k]
                   {:tx (nth left-txs (dec k)) :z (- 500 dist)}))))))))

;; ─── hand card ───────────────────────────────────────────────────────────────

(defn- hand-card
  [card idx hovered-idx strip-w n on-reorder]
  (let [dragging?      (r/atom false)
        drag-outside?  (r/atom false)]
    (fn [{:keys [id suit rank face-color back-color text-color suit-color face-up?]} idx hovered-idx strip-w n on-reorder]
      (let [{:keys [tx z]} (nth (card-positions n @hovered-idx strip-w) idx {:tx 0 :z idx})
            is-hovered     (= @hovered-idx idx)]
        [:div
         {:style         {:position         "absolute"
                          :left             (str tx "px")
                          :bottom           "0px"
                          :width            (str card-w "px")
                          :height           (str card-h "px")
                          :z-index          z
                          :background-color (or face-color "#ffffff")
                          :border           "1px solid #d1d5db"
                          :color            (or text-color "#111111")
                          :transform        (cond @drag-outside?  "scale(1)"
                                                  is-hovered      (str "scale(" hover-scale ")")
                                                  :else           "scale(1)")
                          :transform-origin "bottom center"
                          :transition       "left 0.15s ease, transform 0.15s ease"
                          :cursor           "grab"}
          :class         "select-none rounded-lg shadow-md flex items-center justify-center font-bold overflow-hidden"
          :on-mouse-enter #(when-not @dragging? (reset! hovered-idx idx))
          :on-mouse-leave #(when (= @hovered-idx idx) (reset! hovered-idx nil))

          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (reset! dragging? true)
            (reset! drag-outside? false)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [in-hand? (hand-drop-zone? [(.-clientX e) (.-clientY e)])]
                (reset! drag-outside? (not in-hand?))
                (when in-hand?
                  (let [rect  (hand-area-rect)
                        cx    (- (.-clientX e) (.-left rect))
                        step  (compute-step n strip-w)
                        total (+ card-w (* (dec n) step))
                        ox    (/ (- (.-width rect) total) 2)
                        new-i (-> (/ (- cx ox) step) Math/round (max 0) (min (dec n)))]
                    (when (not= new-i idx)
                      (on-reorder idx new-i)))))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (reset! drag-outside? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      tx (/ (- (.-clientX e) pan-x) zoom)
                      ty (/ (- (.-clientY e) pan-y) zoom)]
                  (move-card-to-table! id tx ty)))))

          :on-pointer-cancel
          (fn [e]
            (reset! dragging? false)
            (reset! drag-outside? false)
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))}

         [:div {:class "flex flex-col items-center justify-center w-full h-full pointer-events-none"}
          [:span {:class "text-lg leading-none"} rank]
          [:span {:class "text-xl leading-none"
                  :style {:color (or suit-color text-color "#111111")}} suit]]]))))


;; ─── hand area ───────────────────────────────────────────────────────────────

(defn hand-area []
  (let [hovered?    (r/atom false)
        hovered-idx (r/atom nil)
        strip-w     (r/atom 800)
        slide       (* strip-h 0.9)]
    (fn []
      (let [hand      (:hand @app-state)
            n         (count hand)
            collapsed (and (not @hovered?) (nil? @hovered-idx))
            on-enter  (fn [] (reset! hovered? true))
            on-leave  (fn [] (reset! hovered? false) (reset! hovered-idx nil))
            on-reorder (fn [from to]
                         (swap! app-state update :hand
                                (fn [h]
                                  (let [card (nth h from)
                                        h'   (vec (concat (subvec h 0 from) (subvec h (inc from))))]
                                    (vec (concat (subvec h' 0 to) [card] (subvec h' to))))))
                         (reset! hovered-idx to))]
        [:<>
         [:div
          {:class "fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-600 z-10"
           :style {:height     (str strip-h "px")
                   :transform  (str "translateY(" (if collapsed slide 0) "px)")
                   :transition "transform 0.2s ease"}
           :on-mouse-enter on-enter
           :on-mouse-leave on-leave}]
         [:div
          {:ref   (fn [el]
                    (reset! hand-ref el)
                    (when el (reset! strip-w (.-offsetWidth el))))
           :class "fixed bottom-0 left-0 right-0 z-20"
           :style {:height         (str strip-h "px")
                   :overflow       "visible"
                   :pointer-events (if collapsed "none" "auto")}
           :on-mouse-enter on-enter
           :on-mouse-leave on-leave}
          (if (empty? hand)
            [:span {:class "absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-500 text-sm italic"}
             "Hand is empty"]
            [:div {:style {:position "relative" :width "100%" :height "100%"}}
             (doall
              (map-indexed
               (fn [i c]
                 ^{:key (:id c)}
                 [hand-card c i hovered-idx @strip-w n on-reorder])
               hand))])]]))))
