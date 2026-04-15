(ns tabletop.state
  (:require [reagent.core :as r]
            [tabletop.logic.shuffle :refer [shuffle-vec]]))

(def initial-state
  {:view              :start
   :table             {:pan-x 0 :pan-y 0 :zoom 1.0}
   :components        []
   :hand              []
   :context-menu      nil
   :error             nil
   :menu-open         true
   :menu-section      nil
   :selection         #{}
   :copy-list         []
   :last-middle-click nil
   :interaction       nil})

(defonce general-settings (r/atom {:rotation-step 45 :scale-step 1.25}))

(defonce app-state (r/atom initial-state))

;; ---------------------------------------------------------------------------
;; Pure state helpers
;; ---------------------------------------------------------------------------

(defn add-component [state component]
  (update state :components conj component))

(defn remove-component [state id]
  (update state :components (fn [cs] (vec (remove #(= (:id %) id) cs)))))

(defn move-component [state id x y]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (assoc % :x x :y y) %) cs))))

(defn move-card-to-hand [state id]
  (let [card (some #(when (= (:id %) id) %) (:components state))]
    (if card
      (-> state
          (update :components (fn [cs] (vec (remove #(= (:id %) id) cs))))
          (update :hand conj card))
      state)))

(defn move-card-to-table [state id x y]
  (let [card (some #(when (= (:id %) id) %) (:hand state))]
    (if card
      (-> state
          (update :hand (fn [h] (vec (remove #(= (:id %) id) h))))
          (update :components conj (assoc card :x x :y y)))
      state)))

(defn pan-table [state dx dy]
  (-> state
      (update-in [:table :pan-x] + dx)
      (update-in [:table :pan-y] + dy)))

(defn zoom-table [state delta]
  (update-in state [:table :zoom] (fn [z] (max 0.1 (min 10.0 (+ z delta))))))

;; ---------------------------------------------------------------------------
;; Event system
;; ---------------------------------------------------------------------------

(defmulti handle-event (fn [_ event & _] event))

(defmethod handle-event :default [state & _] state)

(defn emit! [event & args]
  (swap! app-state #(apply handle-event % event args)))

;; ---------------------------------------------------------------------------
;; Selection
;; ---------------------------------------------------------------------------

(defmethod handle-event :selection/set   [state _ ids]  (assoc state :selection (set ids)))
(defmethod handle-event :selection/add   [state _ id]   (update state :selection conj id))
(defmethod handle-event :selection/clear [state _]      (assoc state :selection #{}))

(defn set-selection!    [ids] (emit! :selection/set ids))
(defn clear-selection!  []    (emit! :selection/clear))
(defn add-to-selection! [id]  (emit! :selection/add id))

;; ---------------------------------------------------------------------------
;; Selection-aware dispatch
;; ---------------------------------------------------------------------------

(defmethod handle-event :selection/apply
  [state _ action id & args]
  (let [sel (:selection state)
        ids (if (contains? sel id) sel #{id})]
    (reduce (fn [s sid] (apply handle-event s action sid args)) state ids)))

;; ---------------------------------------------------------------------------
;; Table
;; ---------------------------------------------------------------------------

(defmethod handle-event :table/pan  [state _ dx dy]    (pan-table state dx dy))
(defmethod handle-event :table/zoom [state _ delta]    (zoom-table state delta))
(defmethod handle-event :table/set-last-middle-click [state _ tx ty]
  (assoc state :last-middle-click [tx ty]))

(defn pan-table!              [dx dy]  (emit! :table/pan dx dy))
(defn zoom-table!             [delta]  (emit! :table/zoom delta))
(defn set-last-middle-click!  [tx ty]  (emit! :table/set-last-middle-click tx ty))

(def move-threshold 6) ; px in table-space

;; ---------------------------------------------------------------------------
;; Component movement
;; ---------------------------------------------------------------------------

(defmethod handle-event :component/move [state _ id x y] (move-component state id x y))
(defmethod handle-event :component/add  [state _ c]      (add-component state c))
(defmethod handle-event :component/remove [state _ id]   (remove-component state id))

(defn add-component!    [c]      (emit! :component/add c))
(defn remove-component! [id]     (emit! :component/remove id))
(defn move-component!   [id x y] (emit! :component/move id x y))

;; ---------------------------------------------------------------------------
;; Hand
;; ---------------------------------------------------------------------------

(defmethod handle-event :card/move-to-hand  [state _ id]     (move-card-to-hand state id))
(defmethod handle-event :component/move-to-hand [state _ id] (move-card-to-hand state id))
(defmethod handle-event :card/move-to-table [state _ id x y] (move-card-to-table state id x y))

(defn move-card-to-hand!  [id]     (emit! :card/move-to-hand id))
(defn move-card-to-table! [id x y] (emit! :card/move-to-table id x y))

;; ---------------------------------------------------------------------------
;; Clipboard
;; ---------------------------------------------------------------------------

(defmethod handle-event :clipboard/copy [state _ ids]
  (let [id-set (set ids)]
    (assoc state :copy-list (vec (filter #(id-set (:id %)) (:components state))))))

(defmethod handle-event :clipboard/copy-single [state _ id]
  (if-let [c (some #(when (= (:id %) id) %) (:components state))]
    (assoc state :copy-list [c])
    state))

(defmethod handle-event :clipboard/paste [state _ cx cy]
  (let [items (:copy-list state)]
    (if (seq items)
      (let [base-x (:x (first items) 0)
            base-y (:y (first items) 0)]
        (reduce (fn [s item]
                  (add-component s (assoc item
                                          :id (str (random-uuid))
                                          :x (+ cx (- (:x item 0) base-x))
                                          :y (+ cy (- (:y item 0) base-y)))))
                state items))
      state)))

(defmethod handle-event :clipboard/paste-to-hand [state _]
  (reduce (fn [s item]
            (update s :hand conj (assoc item :id (str (random-uuid)))))
          state (:copy-list state)))

(defn copy-objects-to-list! [ids]     (emit! :clipboard/copy ids))
(defn copy-single-to-list!  [id]      (emit! :clipboard/copy-single id))
(defn paste-from-list!      [cx cy]   (emit! :clipboard/paste cx cy))
(defn paste-to-hand!        []        (emit! :clipboard/paste-to-hand))

;; ---------------------------------------------------------------------------
;; Import / Export
;; ---------------------------------------------------------------------------

(defmethod handle-event :component/export [state _ ids]
  (let [id-set (set ids)
        comps  (filter #(id-set (:id %)) (:components state))
        payload {"version" 1 "components" comps "hand" []}
        json   (js/JSON.stringify (clj->js payload))
        blob   (js/Blob. #js [json] #js {:type "application/json"})
        url    (js/URL.createObjectURL blob)
        a      (.createElement js/document "a")]
    (set! (.-href a) url)
    (set! (.-download a) "tabletop-component.json")
    (.appendChild (.-body js/document) a)
    (.click a)
    (.removeChild (.-body js/document) a)
    (js/URL.revokeObjectURL url)
    state))

(defmethod handle-event :component/import [state _ data]
  ;; data is already a parsed clj map (keywordized)
  (let [comps (mapv (fn [c]
                      (try
                        (cond-> c
                          (string? (:type c)) (update :type keyword)
                          true (assoc :id (str (random-uuid))))
                        (catch :default _ nil)))
                    (get data :components []))
        valid  (filterv some? comps)
        ;; Place relative to last-middle-click or viewport center
        [px py] (or (:last-middle-click state)
                    (let [{:keys [pan-x pan-y zoom]} (:table state)
                          vw (.-innerWidth js/window)
                          vh (.-innerHeight js/window)]
                      [(/ (- (/ vw 2) pan-x) zoom)
                       (/ (- (/ vh 2) pan-y) zoom)]))
        base-x  (:x (first valid) 0)
        base-y  (:y (first valid) 0)
        placed  (mapv #(assoc % :x (+ px (- (:x % 0) base-x))
                                :y (+ py (- (:y % 0) base-y))) valid)
        hand-in (mapv (fn [c]
                        (try (cond-> c
                               (string? (:type c)) (update :type keyword)
                               true (assoc :id (str (random-uuid))))
                             (catch :default _ nil)))
                      (get data :hand []))]
    (-> state
        (update :components into placed)
        (update :hand into (filterv some? hand-in)))))

;; ---------------------------------------------------------------------------
;; Placement helper
;; ---------------------------------------------------------------------------

(defn placement-pos []
  (or (:last-middle-click @app-state)
      (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
            vw (.-innerWidth js/window)
            vh (.-innerHeight js/window)]
        [(/ (- (/ vw 2) pan-x) zoom)
         (/ (- (/ vh 2) pan-y) zoom)])))

;; ---------------------------------------------------------------------------
;; Deck collapse helper
;; ---------------------------------------------------------------------------

(defn- collapse-deck [state id]
  (let [deck (some #(when (= (:id %) id) %) (:components state))]
    (if-not deck
      state
      (let [n (count (:cards deck))]
        (cond
          (zero? n)
          (remove-component state id)

          (= 1 n)
          (let [card     (first (:cards deck))
                new-card (assoc card :id (str (random-uuid)) :type :card
                                     :x (:x deck 0) :y (:y deck 0))]
            (-> state (remove-component id) (add-component new-card)))

          :else state)))))

(defn- find-and-rest [id cs]
  (reduce (fn [[found others] c]
            (if (= (:id c) id) [c others] [found (conj others c)]))
          [nil []] cs))

;; ---------------------------------------------------------------------------
;; Interaction state machine
;; ---------------------------------------------------------------------------
;;
;; :interaction shape:
;;   {:type       :deck-press | :component-press
;;    :id         component-id being interacted with
;;    :start-time ms
;;    :start-pos  [tx ty]   — table-space coords at press
;;    :offset     [ox oy]   — cursor offset from component origin
;;    :mode       :pending | :drag | :card-drag | :deck-drag
;;    ;; deck-only:
;;    :deck-id    id
;;    :card-id    nil | id}

(defmethod handle-event :interaction/start-deck-press
  [state _ deck-id tx ty t]
  (let [deck (some #(when (= (:id %) deck-id) %) (:components state))]
    (assoc state :interaction {:type       :deck-press
                                :id         deck-id
                                :deck-id    deck-id
                                :start-time t
                                :start-pos  [tx ty]
                                :offset     [(- tx (:x deck 0)) (- ty (:y deck 0))]
                                :mode       :pending
                                :card-id    nil})))

(defmethod handle-event :interaction/start-component-press
  [state _ id tx ty t]
  (let [c (some #(when (= (:id %) id) %) (:components state))]
    (assoc state :interaction {:type       :component-press
                                :id         id
                                :start-time t
                                :start-pos  [tx ty]
                                :offset     [(- tx (:x c 0)) (- ty (:y c 0))]
                                :mode       :pending})))

(defmethod handle-event :interaction/start-card-drag
  [state _]
  (let [{:keys [deck-id start-pos]} (:interaction state)
        deck     (some #(when (= (:id %) deck-id) %) (:components state))
        top-card (peek (:cards deck))
        [sx sy]  start-pos
        new-id   (str (random-uuid))
        card     (assoc top-card :type :card :face-up? false :id new-id :x sx :y sy)]
    (-> state
        (update :components #(mapv (fn [c] (if (= (:id c) deck-id)
                                             (update c :cards (comp vec butlast)) c)) %))
        (update :components conj card)
        (collapse-deck deck-id)
        (assoc-in [:interaction :mode] :card-drag)
        (assoc-in [:interaction :card-id] new-id))))

(defmethod handle-event :interaction/start-deck-drag
  [state _]
  (assoc-in state [:interaction :mode] :deck-drag))

(defn- apply-group-drag
  "Move all selected components by the same delta as the dragged component."
  [state id tx ty]
  (let [c   (some #(when (= (:id %) id) %) (:components state))
        sel (:selection state)
        ddx (- tx (:x c 0))
        ddy (- ty (:y c 0))]
    (if (contains? sel id)
      (reduce (fn [s c2]
                (if (contains? sel (:id c2))
                  (move-component s (:id c2) (+ (:x c2 0) ddx) (+ (:y c2 0) ddy))
                  s))
              state (:components state))
      (move-component state id tx ty))))

(defmethod handle-event :interaction/update-pointer
  [state _ tx ty now]
  (let [{:keys [type mode start-pos start-time id deck-id card-id offset]} (:interaction state)
        [sx sy] start-pos
        [ox oy] (or offset [0 0])
        dt      (- now start-time)
        dist    (Math/hypot (- tx sx) (- ty sy))
        ;; target position = pointer minus cursor offset
        cx      (- tx ox)
        cy      (- ty oy)]
    (case type
      :deck-press
      (cond
        (and (= mode :pending) (> dist move-threshold))
        (handle-event state :interaction/start-card-drag)

        (and (= mode :pending) (> dt 1000))
        (handle-event state :interaction/start-deck-drag)

        (= mode :card-drag)
        (move-component state card-id cx cy)

        (= mode :deck-drag)
        (move-component state deck-id cx cy)

        :else state)

      :component-press
      (cond
        (and (= mode :pending) (> dist move-threshold))
        (-> state
            (assoc-in [:interaction :mode] :drag)
            (apply-group-drag id cx cy))

        (= mode :drag)
        (apply-group-drag state id cx cy)

        :else state)

      state)))

(defmethod handle-event :interaction/end
  [state _]
  (assoc state :interaction nil))

;; ---------------------------------------------------------------------------
;; Deck events
;; ---------------------------------------------------------------------------

(defmethod handle-event :deck/shuffle [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :cards shuffle-vec) %) cs))))

(defmethod handle-event :deck/draw-to-hand [state _ id]
  (let [[deck others] (find-and-rest id (:components state))
        card (last (:cards deck))]
    (if card
      (-> state
          (assoc :components (conj (vec others) (update deck :cards (comp vec butlast))))
          (update :hand conj (assoc card :type :card))
          (collapse-deck id))
      state)))

(defmethod handle-event :deck/draw-to-table [state _ id x y]
  (let [[deck others] (find-and-rest id (:components state))
        card (last (:cards deck))]
    (if card
      (-> (assoc state :components
                 (conj (vec others)
                       (update deck :cards (comp vec butlast))
                       (assoc card :type :card :x x :y y :face-up? true)))
          (collapse-deck id))
      state)))

(defmethod handle-event :deck/draw-card-silent [state _ id]
  (let [[deck others] (find-and-rest id (:components state))]
    (if (seq (:cards deck))
      (-> state
          (assoc :components (conj (vec others) (update deck :cards (comp vec butlast))))
          (collapse-deck id))
      state)))

(defmethod handle-event :deck/draw-bottom [state _ id]
  (let [[deck others] (find-and-rest id (:components state))
        card (first (:cards deck))]
    (if card
      (-> state
          (assoc :components (conj (vec others) (update deck :cards (comp vec rest))))
          (update :hand conj (assoc card :type :card))
          (collapse-deck id))
      state)))

(defmethod handle-event :deck/split [state _ id n-parts]
  (let [[deck others] (find-and-rest id (:components state))
        cards  (:cards deck)
        total  (count cards)
        size   (quot total n-parts)
        rem    (mod total n-parts)
        sizes  (mapv #(+ size (if (< % rem) 1 0)) (range n-parts))
        parts  (loop [remaining cards result [] i 0]
                 (if (= i n-parts)
                   result
                   (recur (drop (nth sizes i) remaining)
                          (conj result (vec (take (nth sizes i) remaining)))
                          (inc i))))]
    (assoc state :components
           (into (vec others)
                 (map-indexed
                  (fn [i part-cards]
                    (assoc deck
                           :id    (if (zero? i) id (str (random-uuid)))
                           :cards part-cards
                           :x     (+ (:x deck 0) (* i 80))))
                  parts)))))

(defmethod handle-event :deck/flip [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (update % :cards (fn [cards] (mapv (fn [c] (update c :face-up? not)) cards)))
                            %) cs))))

(defmethod handle-event :deck/merge-onto [state _ src-id tgt-id]
  (let [src (some #(when (= (:id %) src-id) %) (:components state))
        tgt (some #(when (= (:id %) tgt-id) %) (:components state))]
    (if (and src tgt)
      (-> state
          (remove-component src-id)
          (update :components
                  (fn [cs] (mapv #(if (= (:id %) tgt-id)
                                    (update % :cards into (:cards src))
                                    %) cs))))
      state)))

;; ---------------------------------------------------------------------------
;; Card events
;; ---------------------------------------------------------------------------

(defmethod handle-event :card/flip [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :face-up? not) %) cs))))

(defmethod handle-event :card/drop-on-deck [state _ card-id deck-id]
  (let [card (some #(when (= (:id %) card-id) %) (:components state))]
    (if card
      (-> state
          (remove-component card-id)
          (update :components
                  (fn [cs] (mapv #(if (= (:id %) deck-id)
                                    (update % :cards conj (dissoc card :id :type :x :y))
                                    %) cs))))
      state)))

;; ---------------------------------------------------------------------------
;; Die events
;; ---------------------------------------------------------------------------

(defmethod handle-event :die/roll [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (assoc % :result (inc (rand-int (:faces % 6))))
                            %) cs))))

(defmethod handle-event :die/increment [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (let [faces (:faces % 6) r (or (:result %) 1)]
                              (assoc % :result (if (>= r faces) 1 (inc r))))
                            %) cs))))

(defmethod handle-event :die/decrement [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (let [faces (:faces % 6) r (or (:result %) 1)]
                              (assoc % :result (if (<= r 1) faces (dec r))))
                            %) cs))))

;; ---------------------------------------------------------------------------
;; Generic component events (all types)
;; ---------------------------------------------------------------------------

(defmethod handle-event :component/rotate [state _ id deg]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :rotation (fnil + 0) deg) %) cs))))

(defmethod handle-event :component/lock [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :locked? not) %) cs))))

(defmethod handle-event :component/scale-up [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :scale (fnil * 1.0) 1.25) %) cs))))

(defmethod handle-event :component/scale-down [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :scale (fnil * 1.0) (/ 1.0 1.25)) %) cs))))

(defmethod handle-event :component/bring-to-front [state _ id]
  (let [c (some #(when (= (:id %) id) %) (:components state))]
    (if c
      (update state :components (fn [cs] (conj (vec (remove #(= (:id %) id) cs)) c)))
      state)))

(defmethod handle-event :component/send-to-back [state _ id]
  (let [c (some #(when (= (:id %) id) %) (:components state))]
    (if c
      (update state :components (fn [cs] (into [c] (remove #(= (:id %) id) cs))))
      state)))

;; ---------------------------------------------------------------------------
;; Grouping
;; ---------------------------------------------------------------------------

(defn- grid-layout
  "Arrange `items` (each with :x :y) in a compact grid around their centroid.
   Returns items with updated :x :y."
  [items w h gap]
  (let [n    (count items)
        cols (max 1 (int (Math/ceil (Math/sqrt n))))
        rows (int (Math/ceil (/ n cols)))
        cx   (/ (reduce + (map :x items)) n)
        cy   (/ (reduce + (map :y items)) n)
        ;; top-left of grid so it's centered on centroid
        ox   (- cx (* 0.5 (- (* cols (+ w gap)) gap)))
        oy   (- cy (* 0.5 (- (* rows (+ h gap)) gap)))]
    (map-indexed
     (fn [i item]
       (let [col (mod i cols)
             row (quot i cols)]
         (assoc item :x (+ ox (* col (+ w gap)))
                     :y (+ oy (* row (+ h gap))))))
     items)))

(defmethod handle-event :selection/group [state _]
  (let [sel      (:selection state)
        selected (filter #(contains? sel (:id %)) (:components state))]
    (if (<= (count selected) 1)
      state
      (let [cards    (filter #(= :card (:type %)) selected)
            decks    (filter #(= :deck (:type %)) selected)
            others   (filter #(not (#{:card :deck} (:type %))) selected)
            ;; Cards + decks → merge into one deck
            card-deck-state
            (if (seq (concat cards decks))
              (let [anchor    (first (concat decks cards))
                    all-cards (vec (concat (mapcat :cards decks)
                                           (map #(dissoc % :id :type :x :y) cards)))
                    new-deck  {:id    (str (random-uuid))
                               :type  :deck
                               :x     (:x anchor 0)
                               :y     (:y anchor 0)
                               :cards all-cards}]
                (-> (reduce #(remove-component %1 (:id %2)) state (concat cards decks))
                    (add-component new-deck)))
              state)
            ;; Others → grid layout, no stacking
            final-state
            (if (seq others)
              (let [laid-out (grid-layout others 70 100 8)]
                (reduce (fn [s {:keys [id x y]}]
                          (move-component s id x y))
                        card-deck-state laid-out))
              card-deck-state)]
        final-state))))

(defn group-selection! [] (emit! :selection/group))

;; ---------------------------------------------------------------------------
;; Component under cursor
;; ---------------------------------------------------------------------------

(defn component-at [tx ty]
  (last (filter (fn [c]
                  (let [cw (if (= (:type c) :die) 37 70)
                        ch (if (= (:type c) :die) 37 100)]
                    (and (>= tx (:x c 0)) (<= tx (+ (:x c 0) cw))
                         (>= ty (:y c 0)) (<= ty (+ (:y c 0) ch)))))
                (:components @app-state))))

;; ---------------------------------------------------------------------------
;; Context menu actions (data-driven, emit! based)
;; ---------------------------------------------------------------------------

(defmulti component-actions :type)

(defn- common-actions [id]
  (let [sel     (:selection @app-state)
        ids     (if (contains? sel id) (vec sel) [id])
        locked? (:locked? (some #(when (= (:id %) id) %) (:components @app-state)))]
    (cond-> [{:label (if locked? "Unlock" "Lock")
              :action #(doseq [i ids] (emit! :component/lock i))}
             {:label "Bring to Front"
              :action #(doseq [i ids] (emit! :component/bring-to-front i))}
             {:label "Send to Back"
              :action #(doseq [i ids] (emit! :component/send-to-back i))}
             {:label "Copy"
              :action #(emit! :clipboard/copy ids)}
             {:label "Save Component"
              :action #(emit! :component/export ids)}
             {:label "Remove"
              :action #(doseq [i ids] (emit! :component/remove i))}]
      (> (count sel) 1)
      (conj {:label "Group" :action #(emit! :selection/group)}))))

(defmethod component-actions :deck [{:keys [id x y cards]}]
  (let [empty? (empty? cards)
        n      (count cards)]
    (into (cond-> []
            (not empty?) (conj {:label "Draw to Table"    :action #(emit! :deck/draw-to-table id (+ x 80) y)})
            (not empty?) (conj {:label "Draw to Hand"     :action #(emit! :deck/draw-to-hand id)})
            (not empty?) (conj {:label "Draw Bottom Card" :action #(emit! :deck/draw-bottom id)})
            true         (conj {:label "Shuffle"          :action #(emit! :deck/shuffle id)})
            true         (conj {:label "Flip Deck"        :action #(emit! :selection/apply :deck/flip id)})
            (>= n 2)     (conj {:label "Split Deck (2)"   :action #(emit! :deck/split id 2)})
            (>= n 3)     (conj {:label "Split Deck (3)"   :action #(emit! :deck/split id 3)}))
          (common-actions id))))

(defmethod component-actions :card [{:keys [id]}]
  (into [{:label "Flip" :action #(emit! :selection/apply :card/flip id)}]
        (common-actions id)))

(defmethod component-actions :die [{:keys [id]}]
  (into [{:label "Roll" :action #(emit! :selection/apply :die/roll id)}]
        (common-actions id)))

(defmethod component-actions :tile-piece [{:keys [id]}]
  (common-actions id))

(defmethod component-actions :default [c] (common-actions (:id c)))
