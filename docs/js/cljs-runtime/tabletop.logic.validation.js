goog.provide('tabletop.logic.validation');
/**
 * Returns true if s is nil, empty, or contains only whitespace.
 */
tabletop.logic.validation.blank_QMARK_ = (function tabletop$logic$validation$blank_QMARK_(s){
return (((s == null)) || ((((!(typeof s === 'string'))) || (cljs.core.empty_QMARK_(clojure.string.trim(s))))));
});
/**
 * Validates a deck config map.
 * suits is [{:label :color} ...], ranks is [string ...].
 * Returns nil if valid, or {:suit-errors {i msg} :rank-errors {i msg}} if invalid.
 */
tabletop.logic.validation.validate_deck_config = (function tabletop$logic$validation$validate_deck_config(p__23581){
var map__23582 = p__23581;
var map__23582__$1 = cljs.core.__destructure_map(map__23582);
var suits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,new cljs.core.Keyword(null,"suits","suits",-426777515));
var ranks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,new cljs.core.Keyword(null,"ranks","ranks",-1802584866));
var suit_labels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),suits);
var suit_errors = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,s){
if(tabletop.logic.validation.blank_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,"Must not be empty"], null);
} else {
return null;
}
}),suit_labels),cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,s){
if((((!(tabletop.logic.validation.blank_QMARK_(s)))) && (((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23573_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,p1__23573_SHARP_);
}),suit_labels)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,"Must be unique"], null);
} else {
return null;
}
}),suit_labels)));
var rank_errors = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,r){
if((((!(tabletop.logic.validation.blank_QMARK_(r)))) && (((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23574_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,p1__23574_SHARP_);
}),ranks)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,"Must be unique"], null);
} else {
return null;
}
}),ranks)));
if(((cljs.core.seq(suit_errors)) || (cljs.core.seq(rank_errors)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit-errors","suit-errors",-1927910250),suit_errors,new cljs.core.Keyword(null,"rank-errors","rank-errors",1753146222),rank_errors], null);
} else {
return null;
}
});
/**
 * Validates a parsed save file map (keys already keywordized).
 * Returns nil if valid, or a descriptive error string if invalid.
 * Checks:
 * - :version is present and equals 1
 * - :table is a map with numeric :pan-x, :pan-y, :zoom
 * - :components is a vector (or sequential)
 * - :hand is a vector (or sequential)
 */
tabletop.logic.validation.validate_save_file = (function tabletop$logic$validation$validate_save_file(data){
if((!(cljs.core.map_QMARK_(data)))){
return "Save file must be a JSON object";
} else {
if((!(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"version","version",425292698))))){
return "Save file is missing required field: version";
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(data),(1))){
return ["Unsupported save file version: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(data))," (expected 1)"].join('');
} else {
if((!(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"table","table",-564943036))))){
return "Save file is missing required field: table";
} else {
if((!(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(data))))){
return "Save file field 'table' must be an object";
} else {
if((!(typeof new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(data)) === 'number'))){
return "Save file field 'table.pan-x' must be a number";
} else {
if((!(typeof new cljs.core.Keyword(null,"pan-y","pan-y",915543213).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(data)) === 'number'))){
return "Save file field 'table.pan-y' must be a number";
} else {
if((!(typeof new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(data)) === 'number'))){
return "Save file field 'table.zoom' must be a number";
} else {
if((!(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"components","components",-1073188942))))){
return "Save file is missing required field: components";
} else {
if((!(cljs.core.sequential_QMARK_(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data))))){
return "Save file field 'components' must be an array";
} else {
if((!(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"hand","hand",791601933))))){
return "Save file is missing required field: hand";
} else {
if((!(cljs.core.sequential_QMARK_(new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(data))))){
return "Save file field 'hand' must be an array";
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=tabletop.logic.validation.js.map
