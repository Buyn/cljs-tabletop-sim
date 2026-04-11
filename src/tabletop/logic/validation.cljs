(ns tabletop.logic.validation)

(defn- blank?
  "Returns true if s is nil, empty, or contains only whitespace."
  [s]
  (or (nil? s)
      (not (string? s))
      (empty? (clojure.string/trim s))))

(defn validate-deck-config
  "Validates a deck config map.
   suits is [{:label :color} ...], ranks is [string ...].
   Returns nil if valid, or {:suit-errors {i msg} :rank-errors {i msg}} if invalid."
  [{:keys [suits ranks]}]
  (let [suit-labels  (mapv :label suits)
        suit-errors  (into {}
                       (concat
                         ;; blank checks
                         (keep-indexed (fn [i s] (when (blank? s) [i "Must not be empty"])) suit-labels)
                         ;; uniqueness checks
                         (keep-indexed (fn [i s]
                                         (when (and (not (blank? s))
                                                    (< 1 (count (filter #(= s %) suit-labels))))
                                           [i "Must be unique"]))
                                       suit-labels)))
        ;; Only validate ranks that are non-empty (empty ones will be auto-filled)
        rank-errors  (into {}
                       (concat
                         (keep-indexed (fn [i r]
                                         (when (and (not (blank? r))
                                                    (< 1 (count (filter #(= r %) ranks))))
                                           [i "Must be unique"]))
                                       ranks)))]
    (when (or (seq suit-errors) (seq rank-errors))
      {:suit-errors suit-errors
       :rank-errors rank-errors})))

(defn validate-save-file
  "Validates a parsed save file map (keys already keywordized).
   Returns nil if valid, or a descriptive error string if invalid.
   Checks:
   - :version is present and equals 1
   - :table is a map with numeric :pan-x, :pan-y, :zoom
   - :components is a vector (or sequential)
   - :hand is a vector (or sequential)"
  [data]
  (cond
    (not (map? data))
    "Save file must be a JSON object"

    (not (contains? data :version))
    "Save file is missing required field: version"

    (not= (:version data) 1)
    (str "Unsupported save file version: " (:version data) " (expected 1)")

    (not (contains? data :table))
    "Save file is missing required field: table"

    (not (map? (:table data)))
    "Save file field 'table' must be an object"

    (not (number? (:pan-x (:table data))))
    "Save file field 'table.pan-x' must be a number"

    (not (number? (:pan-y (:table data))))
    "Save file field 'table.pan-y' must be a number"

    (not (number? (:zoom (:table data))))
    "Save file field 'table.zoom' must be a number"

    (not (contains? data :components))
    "Save file is missing required field: components"

    (not (sequential? (:components data)))
    "Save file field 'components' must be an array"

    (not (contains? data :hand))
    "Save file is missing required field: hand"

    (not (sequential? (:hand data)))
    "Save file field 'hand' must be an array"

    :else nil))
