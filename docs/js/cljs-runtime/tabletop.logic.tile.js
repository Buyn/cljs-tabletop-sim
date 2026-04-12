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
var vec__32095 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32094_SHARP_){
return parseInt(p1__32094_SHARP_,(10));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(part__$1,/-/));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095,(1),null);
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
 * config: {:src :cols :rows :indices-str :tile-w :tile-h :x :y
 *          :outer-crop {:top :bottom :left :right}
 *          :inner-crop {:top :bottom :left :right}
 *          :shape :rectangle|:ellipse|:hexagon
 *          :corner-radius number}
 */
tabletop.logic.tile.make_tile_pieces = (function tabletop$logic$tile$make_tile_pieces(p__32098){
var map__32099 = p__32098;
var map__32099__$1 = cljs.core.__destructure_map(map__32099);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var corner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32099__$1,new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527),(0));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32099__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32099__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var indices_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"indices-str","indices-str",-2055270712));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32099__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"rectangle","rectangle",293163262));
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.Keyword(null,"tile-idx","tile-idx",-422120350),new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"tile-w","tile-w",2051289999),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"tile-h","tile-h",356807408),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527)],[(y + (row * tile_h)),inner_crop,idx,outer_crop,new cljs.core.Keyword(null,"tile-piece","tile-piece",1225101561),src,tile_w,rows,tile_h,cols,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),shape,(x + (col * tile_w)),corner_radius]);
}),indices));
});

//# sourceMappingURL=tabletop.logic.tile.js.map
