(ns tabletop.logic.tile
  (:require [clojure.string :as str]))

(defn parse-indices
  "Parse '1,3-5,7' into a seq of 1-based ints. Returns nil if blank (= all)."
  [s]
  (let [s (str/trim s)]
    (when (seq s)
      (mapcat (fn [part]
                (let [part (str/trim part)]
                  (if (str/includes? part "-")
                    (let [[a b] (map #(js/parseInt % 10) (str/split part #"-"))]
                      (range a (inc b)))
                    [(js/parseInt part 10)])))
              (str/split s #",")))))

(defn make-tile-pieces
  "Returns a vec of tile-piece component maps placed adjacent (row-major).
   config: {:src :cols :rows :indices-str :tile-w :tile-h :x :y
            :outer-crop {:top :bottom :left :right}
            :inner-crop {:top :bottom :left :right}
            :shape :rectangle|:ellipse|:hexagon
            :corner-radius number}"
  [{:keys [src cols rows indices-str tile-w tile-h x y
           outer-crop inner-crop shape corner-radius]
    :or   {outer-crop {:top 0 :bottom 0 :left 0 :right 0}
           inner-crop {:top 0 :bottom 0 :left 0 :right 0}
           shape      :rectangle
           corner-radius 0}}]
  (let [total   (* cols rows)
        indices (or (parse-indices indices-str) (range 1 (inc total)))]
    (vec
     (map-indexed
      (fn [i idx]
        (let [col (mod i cols)
              row (quot i cols)]
          {:id            (str (random-uuid))
           :type          :tile-piece
           :src           src
           :cols          cols
           :rows          rows
           :tile-idx      idx
           :tile-w        tile-w
           :tile-h        tile-h
           :outer-crop    outer-crop
           :inner-crop    inner-crop
           :shape         shape
           :corner-radius corner-radius
           :x             (+ x (* col tile-w))
           :y             (+ y (* row tile-h))}))
      indices))))
