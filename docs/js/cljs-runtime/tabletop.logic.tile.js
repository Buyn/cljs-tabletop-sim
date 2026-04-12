goog.provide('tabletop.logic.tile');
/**
 * Parse '1,3-5,7' into a seq of 1-based ints. Returns nil if blank (= all).
 */
tabletop.logic.tile.parse_indices = (function tabletop$logic$tile$parse_indices(s){
var s__$1 = clojure.string.trim(s);
if(cljs.core.seq(s__$1)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (part){
var part__$1 = clojure.string.trim(part);
if(clojure.string.includes_QMARK_(part__$1,"-")){
var vec__31456 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31455_SHARP_){
return parseInt(p1__31455_SHARP_,(10));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(part__$1,/-/));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(1),null);
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(b + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(part__$1,(10))], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/,/)], 0));
} else {
return null;
}
});
/**
 * Returns a vec of tile-piece component maps placed adjacent (row-major).
 * tile-w/tile-h are the pixel dimensions of each tile.
 * config: {:src :cols :rows :indices-str :tile-w :tile-h :x :y}
 */
tabletop.logic.tile.make_tile_pieces = (function tabletop$logic$tile$make_tile_pieces(p__31459){
var map__31460 = p__31459;
var map__31460__$1 = cljs.core.__destructure_map(map__31460);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var indices_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"indices-str","indices-str",-2055270712));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var total = (cols * rows);
var indices = (function (){var or__5002__auto__ = tabletop.logic.tile.parse_indices(indices_str);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(total + (1)));
}
})();
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,idx){
var col = cljs.core.mod(i,cols);
var row = cljs.core.quot(i,cols);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"tile-idx","tile-idx",-422120350),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"tile-w","tile-w",2051289999),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"tile-h","tile-h",356807408),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185)],[(y + (row * tile_h)),idx,new cljs.core.Keyword(null,"tile-piece","tile-piece",1225101561),src,tile_w,rows,tile_h,cols,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(x + (col * tile_w))]);
}),indices));
});

//# sourceMappingURL=tabletop.logic.tile.js.map
