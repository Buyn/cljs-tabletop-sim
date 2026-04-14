(ns tabletop.components.die
  (:require [tabletop.state :refer [app-state add-to-selection! clear-selection!
                                    emit! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(def die-colors
  {4   "bg-red-500 text-white"
   6   "bg-blue-500 text-white"
   8   "bg-green-500 text-white"
   10  "bg-purple-500 text-white"
   12  "bg-orange-500 text-white"
   20  "bg-yellow-400 text-gray-900"
   100 "bg-pink-500 text-white"})

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn die [{:keys [die]}]
  (fn [{:keys [die]}]
    (let [{:keys [id faces result x y locked?]} die
          selected? (contains? (:selection @app-state) id)]
      [:div
       {:class (str "absolute select-none rounded shadow-md "
                    "w-[37px] h-[37px] flex flex-col items-center justify-center "
                    "font-bold text-[13px] "
                    (get die-colors faces "bg-gray-500 text-white")
                    (if locked? " cursor-not-allowed opacity-80" " cursor-pointer")
                    (when selected? " ring-2 ring-cyan-400"))
        :style {:left (str x "px") :top (str y "px")}

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
                (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                  (let [sel (:selection @app-state)
                        ids (if (contains? sel id) sel #{id})]
                    (doseq [sid ids] (emit! :card/move-to-hand sid))
                    (emit! :interaction/end))
                  (emit! :interaction/update-pointer tx ty (.now js/Date)))))))

        :on-pointer-up
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when (= :pending (:mode iact))
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (do (clear-selection!)
                      (emit! :die/roll id))))
              (emit! :interaction/end))))

        :on-pointer-cancel
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (emit! :interaction/end))))

        :on-context-menu
        (fn [e]
          (.preventDefault e)
          (.stopPropagation e)
          (when-not (contains? (:selection @app-state) id)
            (add-to-selection! id))
          (open-context-menu! (.-clientX e) (.-clientY e) (component-actions die)))}

       [:span {:class "leading-none opacity-70"} (str "d" faces)]
       [:span {:class "leading-none font-black"} (str result)]])))
