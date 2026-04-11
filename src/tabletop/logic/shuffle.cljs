(ns tabletop.logic.shuffle)

(defn shuffle-vec
  "Returns a new vector with the elements of v shuffled using the Fisher-Yates algorithm."
  [v]
  (let [arr (to-array v)
        n   (count arr)]
    (loop [i (dec n)]
      (when (pos? i)
        (let [j (js/Math.floor (* (js/Math.random) (inc i)))
              tmp (aget arr i)]
          (aset arr i (aget arr j))
          (aset arr j tmp))
        (recur (dec i))))
    (vec arr)))

(def ^:private standard-suits
  [{:label "♠" :color "#000000"}
   {:label "♥" :color "#dc2626"}
   {:label "♦" :color "#dc2626"}
   {:label "♣" :color "#000000"}])

(def ^:private standard-ranks ["A" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K"])

(defn make-standard-deck []
  (shuffle-vec
   (vec (for [{:keys [label color]} standard-suits
              rank standard-ranks]
          {:id         (str (random-uuid))
           :suit       label
           :suit-color color
           :rank       rank
           :face-color "#ffffff"
           :back-color "#1e3a5f"
           :text-color "#111111"
           :face-up?   false}))))

(defn auto-fill-ranks
  "Fills a ranks vector to total-count. Existing entries kept; gaps filled with incrementing numbers."
  [ranks total-count]
  (let [n (count ranks)]
    (if (>= n total-count)
      (vec (take total-count ranks))
      (vec (concat ranks
                   (map str (range (inc n) (+ (inc n) (- total-count n)))))))))

(defn make-custom-deck
  "Builds a shuffled deck from config:
   {:suits [{:label :color} ...] :ranks [...] :total-count n
    :face-color :back-color :text-color}"
  [{:keys [suits ranks total-count face-color back-color text-color]}]
  (let [filled-ranks (auto-fill-ranks ranks total-count)]
    (shuffle-vec
     (vec (for [{:keys [label color]} suits
                rank filled-ranks]
            {:id         (str (random-uuid))
             :suit       label
             :suit-color color
             :rank       rank
             :face-color face-color
             :back-color back-color
             :text-color text-color
             :face-up?   false})))))
