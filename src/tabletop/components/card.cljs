(ns tabletop.components.card
  (:require [tabletop.state :refer [app-state add-to-selection! clear-selection!
                                    emit! component-actions]]
            [tabletop.components.hand :refer [hand-drop-zone?]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn- find-deck-at [tx ty exclude-id]
  (some (fn [c]
          (when (and (= :deck (:type c))
                     (not= (:id c) exclude-id)
                     (< (:x c 0) tx (+ (:x c 0) 70))
                     (< (:y c 0) ty (+ (:y c 0) 100)))
            c))
        (:components @app-state)))

(defn card [{:keys [card on-drag-end]}]
  (fn [{:keys [card on-drag-end]}]
    (let [{:keys [id face-color back-color text-color suit-color
                  suit rank face-up? x y rotation scale locked?
                  face-src back-src corner-radius]} card
          face-up?  (boolean face-up?)
          selected? (contains? (:selection @app-state) id)
          iact      (:interaction @app-state)
          transform (str (when rotation (str "rotate(" rotation "deg) "))
                         (when (and scale (not= scale 1.0)) (str "scale(" scale ")")))]
      [:div
       {:class (str "absolute select-none rounded-lg border shadow-md "
                    "w-[70px] h-[100px] flex items-center justify-center "
                    "text-sm font-bold overflow-hidden"
                    (if locked? " cursor-not-allowed opacity-80" " cursor-grab")
                    (when selected? " ring-2 ring-cyan-400"))
        :style {:left             (str x "px")
                :top              (str y "px")
                :background-color (if face-up? (or face-color "#ffffff") (or back-color "#1e3a5f"))
                :border-color     (if face-up? "#d1d5db" "#4b5563")
                :color            (if face-up? (or text-color "#111111") "transparent")
                :transform        transform
                :transform-origin "center center"}

        :on-pointer-down
        (fn [e]
          (when (and (= (.-button e) 0) (not locked?))
            (.stopPropagation e)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e))
            (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
              (emit! :interaction/start-component-press id tx ty (.now js/Date)))))

        :on-pointer-move
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
                (when (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                  (let [sel (:selection @app-state)
                        ids (if (contains? sel id) sel #{id})]
                    (doseq [sid ids] (emit! :card/move-to-hand sid))))
                (emit! :interaction/update-pointer tx ty (.now js/Date))))))

        :on-pointer-up
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))
                    mode    (:mode iact)]
                (if (= mode :pending)
                  ;; Click
                  (if (.-shiftKey e)
                    (add-to-selection! id)
                    (clear-selection!))
                  ;; Drag ended — check deck drop
                  (when-let [deck (find-deck-at tx ty id)]
                    (let [sel        (:selection @app-state)
                          ids        (if (contains? sel id) sel #{id})
                          comp-by-id (into {} (map (juxt :id identity) (:components @app-state)))]
                      (doseq [cid ids]
                        (when (= :card (:type (comp-by-id cid)))
                          (emit! :card/drop-on-deck cid (:id deck)))))))
                (when on-drag-end (on-drag-end [tx ty]))
                (emit! :interaction/end)))))

        :on-pointer-cancel
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (emit! :interaction/end))))

        :on-double-click
        (fn [e]
          (.stopPropagation e)
          (emit! :selection/apply :card/flip id))

        :on-context-menu
        (fn [e]
          (.preventDefault e)
          (.stopPropagation e)
          (when-not (contains? (:selection @app-state) id)
            (add-to-selection! id))
          (open-context-menu! (.-clientX e) (.-clientY e) (component-actions card)))}

       (cond
         (and face-up? face-src)
         [:img {:src face-src :style {:width "100%" :height "100%" :object-fit "cover"
                                      :border-radius (when corner-radius (str corner-radius "px"))}}]

         face-up?
         [:div {:class "flex flex-col items-center justify-center w-full h-full"}
          [:span {:class "text-lg leading-none"} rank]
          [:span {:class "text-xl leading-none"
                  :style {:color (or suit-color text-color "#111111")}} suit]]

         back-src
         [:img {:src back-src :style {:width "100%" :height "100%" :object-fit "cover"
                                      :border-radius (when corner-radius (str corner-radius "px"))}}]

         :else
         [:div {:class "w-full h-full flex items-center justify-center"}
          [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40"
                 :style {:background (str "repeating-linear-gradient(45deg,"
                                          "#2563eb,#2563eb 2px,transparent 2px,transparent 8px)")}}]])]))))
