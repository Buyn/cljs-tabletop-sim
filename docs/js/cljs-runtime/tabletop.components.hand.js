goog.provide('tabletop.components.hand');
if((typeof tabletop !== 'undefined') && (typeof tabletop.components !== 'undefined') && (typeof tabletop.components.hand !== 'undefined') && (typeof tabletop.components.hand.hand_ref !== 'undefined')){
} else {
tabletop.components.hand.hand_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
tabletop.components.hand.hand_area_rect = (function tabletop$components$hand$hand_area_rect(){
var temp__5804__auto__ = cljs.core.deref(tabletop.components.hand.hand_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return el.getBoundingClientRect();
} else {
return null;
}
});
tabletop.components.hand.hand_drop_zone_QMARK_ = (function tabletop$components$hand$hand_drop_zone_QMARK_(p__31046){
var vec__31051 = p__31046;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31051,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31051,(1),null);
var temp__5804__auto__ = tabletop.components.hand.hand_area_rect();
if(cljs.core.truth_(temp__5804__auto__)){
var r = temp__5804__auto__;
return (((x >= r.left)) && ((((x <= r.right)) && ((((y >= r.top)) && ((y <= r.bottom)))))));
} else {
return null;
}
});
tabletop.components.hand.card_w = (70);
tabletop.components.hand.card_h = (100);
tabletop.components.hand.strip_h = (120);
tabletop.components.hand.max_overlap = (40);
tabletop.components.hand.hover_scale = (3);
/**
 * Step between card left edges. No overlap when space allows; overlap only when needed.
 */
tabletop.components.hand.compute_step = (function tabletop$components$hand$compute_step(n,strip_w){
if((n <= (1))){
return (0);
} else {
var x__5090__auto__ = tabletop.components.hand.card_w;
var y__5091__auto__ = (function (){var x__5087__auto__ = (tabletop.components.hand.card_w - tabletop.components.hand.max_overlap);
var y__5088__auto__ = ((strip_w - tabletop.components.hand.card_w) / (n - (1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
}
});
/**
 * Returns [{:tx :z}] for each card index, centered in strip-w.
 * At rest: cards centered with uniform step.
 * On hover:
 * - hovered card stays at base-x (scales via CSS)
 * - right neighbors placed from hovered-right-edge outward at natural step
 *   (closest neighbor has zero overlap with hovered, farther ones keep natural overlap)
 * - left neighbors mirrored
 * - if cards would overflow strip edges, far cards are compressed first
 */
tabletop.components.hand.card_positions = (function tabletop$components$hand$card_positions(n,hovered_idx,strip_w){
var step = tabletop.components.hand.compute_step(n,strip_w);
var total_w = (tabletop.components.hand.card_w + ((n - (1)) * step));
var origin_x = ((strip_w - total_w) / (2));
if((hovered_idx == null)){
return cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$components$hand$card_positions_$_iter__31131(s__31132){
return (new cljs.core.LazySeq(null,(function (){
var s__31132__$1 = s__31132;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31132__$1);
if(temp__5804__auto__){
var s__31132__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31132__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31132__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31134 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31133 = (0);
while(true){
if((i__31133 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__31133);
cljs.core.chunk_append(b__31134,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),(origin_x + (i * step)),new cljs.core.Keyword(null,"z","z",-789527183),i], null));

var G__31352 = (i__31133 + (1));
i__31133 = G__31352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31134),tabletop$components$hand$card_positions_$_iter__31131(cljs.core.chunk_rest(s__31132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31134),null);
}
} else {
var i = cljs.core.first(s__31132__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),(origin_x + (i * step)),new cljs.core.Keyword(null,"z","z",-789527183),i], null),tabletop$components$hand$card_positions_$_iter__31131(cljs.core.rest(s__31132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
} else {
var base_hovered = (origin_x + (hovered_idx * step));
var hov_right = ((base_hovered + tabletop.components.hand.card_w) + ((tabletop.components.hand.card_w * (tabletop.components.hand.hover_scale - (1))) / (2)));
var hov_left = (base_hovered - ((tabletop.components.hand.card_w * (tabletop.components.hand.hover_scale - (1))) / (2)));
var right_count = ((n - hovered_idx) - (1));
var right_txs = cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$components$hand$card_positions_$_iter__31153(s__31154){
return (new cljs.core.LazySeq(null,(function (){
var s__31154__$1 = s__31154;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31154__$1);
if(temp__5804__auto__){
var s__31154__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31154__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31154__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31156 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31155 = (0);
while(true){
if((i__31155 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__31155);
cljs.core.chunk_append(b__31156,(function (){var x__5090__auto__ = (strip_w - tabletop.components.hand.card_w);
var y__5091__auto__ = (hov_right + ((k - (1)) * step));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());

var G__31361 = (i__31155 + (1));
i__31155 = G__31361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31156),tabletop$components$hand$card_positions_$_iter__31153(cljs.core.chunk_rest(s__31154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31156),null);
}
} else {
var k = cljs.core.first(s__31154__$2);
return cljs.core.cons((function (){var x__5090__auto__ = (strip_w - tabletop.components.hand.card_w);
var y__5091__auto__ = (hov_right + ((k - (1)) * step));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})(),tabletop$components$hand$card_positions_$_iter__31153(cljs.core.rest(s__31154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(right_count + (1))));
})());
var left_count = hovered_idx;
var left_txs = cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$components$hand$card_positions_$_iter__31182(s__31183){
return (new cljs.core.LazySeq(null,(function (){
var s__31183__$1 = s__31183;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31183__$1);
if(temp__5804__auto__){
var s__31183__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31183__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31183__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31185 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31184 = (0);
while(true){
if((i__31184 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__31184);
cljs.core.chunk_append(b__31185,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = ((hov_left - tabletop.components.hand.card_w) - ((k - (1)) * step));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

var G__31366 = (i__31184 + (1));
i__31184 = G__31366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31185),tabletop$components$hand$card_positions_$_iter__31182(cljs.core.chunk_rest(s__31183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31185),null);
}
} else {
var k = cljs.core.first(s__31183__$2);
return cljs.core.cons((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = ((hov_left - tabletop.components.hand.card_w) - ((k - (1)) * step));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),tabletop$components$hand$card_positions_$_iter__31182(cljs.core.rest(s__31183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(left_count + (1))));
})());
return cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$components$hand$card_positions_$_iter__31202(s__31203){
return (new cljs.core.LazySeq(null,(function (){
var s__31203__$1 = s__31203;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31203__$1);
if(temp__5804__auto__){
var s__31203__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31203__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31203__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31205 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31204 = (0);
while(true){
if((i__31204 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__31204);
cljs.core.chunk_append(b__31205,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,hovered_idx))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),base_hovered,new cljs.core.Keyword(null,"z","z",-789527183),(1000)], null):(((i > hovered_idx))?(function (){var k = (i - hovered_idx);
var dist = k;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(right_txs,(k - (1))),new cljs.core.Keyword(null,"z","z",-789527183),((500) - dist)], null);
})():(function (){var k = (hovered_idx - i);
var dist = k;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(left_txs,(k - (1))),new cljs.core.Keyword(null,"z","z",-789527183),((500) - dist)], null);
})()
)));

var G__31367 = (i__31204 + (1));
i__31204 = G__31367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31205),tabletop$components$hand$card_positions_$_iter__31202(cljs.core.chunk_rest(s__31203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31205),null);
}
} else {
var i = cljs.core.first(s__31203__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,hovered_idx))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),base_hovered,new cljs.core.Keyword(null,"z","z",-789527183),(1000)], null):(((i > hovered_idx))?(function (){var k = (i - hovered_idx);
var dist = k;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(right_txs,(k - (1))),new cljs.core.Keyword(null,"z","z",-789527183),((500) - dist)], null);
})():(function (){var k = (hovered_idx - i);
var dist = k;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(left_txs,(k - (1))),new cljs.core.Keyword(null,"z","z",-789527183),((500) - dist)], null);
})()
)),tabletop$components$hand$card_positions_$_iter__31202(cljs.core.rest(s__31203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
}
});
tabletop.components.hand.hand_card = (function tabletop$components$hand$hand_card(card,idx,hovered_idx,strip_w,n,on_reorder){
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_outside_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__31242,idx__$1,hovered_idx__$1,strip_w__$1,n__$1,on_reorder__$1){
var map__31243 = p__31242;
var map__31243__$1 = cljs.core.__destructure_map(map__31243);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var suit_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960));
var face_up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117));
var map__31244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(tabletop.components.hand.card_positions(n__$1,cljs.core.deref(hovered_idx__$1),strip_w__$1),idx__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"z","z",-789527183),idx__$1], null));
var map__31244__$1 = cljs.core.__destructure_map(map__31244);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31244__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31244__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var is_hovered = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered_idx__$1),idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[(cljs.core.truth_(cljs.core.deref(drag_outside_QMARK_))?"scale(1)":((is_hovered)?["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabletop.components.hand.hover_scale),")"].join(''):"scale(1)"
)),(function (){var or__5002__auto__ = text_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#111111";
}
})(),"0px","left 0.15s ease, transform 0.15s ease",(function (){var or__5002__auto__ = face_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#ffffff";
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabletop.components.hand.card_w),"px"].join(''),"grab",z,"bottom center","absolute","1px solid #d1d5db",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabletop.components.hand.card_h),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),"px"].join('')]),new cljs.core.Keyword(null,"class","class",-2030961996),"select-none rounded-lg shadow-md flex items-center justify-center font-bold overflow-hidden",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(hovered_idx__$1,idx__$1);
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered_idx__$1),idx__$1)){
return cljs.core.reset_BANG_(hovered_idx__$1,null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
e.stopPropagation();

cljs.core.reset_BANG_(dragging_QMARK_,true);

cljs.core.reset_BANG_(drag_outside_QMARK_,false);

return e.currentTarget.setPointerCapture(e.pointerId);
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var in_hand_QMARK_ = tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
cljs.core.reset_BANG_(drag_outside_QMARK_,cljs.core.not(in_hand_QMARK_));

if(cljs.core.truth_(in_hand_QMARK_)){
var rect = tabletop.components.hand.hand_area_rect();
var cx = (e.clientX - rect.left);
var step = tabletop.components.hand.compute_step(n__$1,strip_w__$1);
var total = (tabletop.components.hand.card_w + ((n__$1 - (1)) * step));
var ox = ((rect.width - total) / (2));
var new_i = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = Math.round(((cx - ox) / step));
var y__5088__auto__ = (0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = (n__$1 - (1));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_i,idx__$1)){
return (on_reorder__$1.cljs$core$IFn$_invoke$arity$2 ? on_reorder__$1.cljs$core$IFn$_invoke$arity$2(idx__$1,new_i) : on_reorder__$1.call(null,idx__$1,new_i));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(drag_outside_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)))){
return null;
} else {
var map__31280 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__31280__$1 = cljs.core.__destructure_map(map__31280);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var tx__$1 = ((e.clientX - pan_x) / zoom);
var ty = ((e.clientY - pan_y) / zoom);
return tabletop.state.move_card_to_table_BANG_(id,tx__$1,ty);
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(drag_outside_QMARK_,false);

return e.currentTarget.releasePointerCapture(e.pointerId);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center w-full h-full pointer-events-none"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg leading-none"], null),rank], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl leading-none",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5002__auto__ = suit_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = text_color;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "#111111";
}
}
})()], null)], null),suit], null)], null)], null);
});
});
tabletop.components.hand.hand_area = (function tabletop$components$hand$hand_area(){
var hovered_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var hovered_idx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var strip_w = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((800));
var slide = (tabletop.components.hand.strip_h * 0.9);
return (function (){
var hand = new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var n = cljs.core.count(hand);
var collapsed = ((cljs.core.not(cljs.core.deref(hovered_QMARK_))) && ((cljs.core.deref(hovered_idx) == null)));
var on_enter = (function (){
return cljs.core.reset_BANG_(hovered_QMARK_,true);
});
var on_leave = (function (){
cljs.core.reset_BANG_(hovered_QMARK_,false);

return cljs.core.reset_BANG_(hovered_idx,null);
});
var on_reorder = (function (from,to){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"hand","hand",791601933),(function (h){
var card = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h,from);
var h_SINGLEQUOTE_ = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(h,(0),from),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(h,(from + (1)))));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(h_SINGLEQUOTE_,(0),to),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(h_SINGLEQUOTE_,to)], 0)));
}));

return cljs.core.reset_BANG_(hovered_idx,to);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-600 z-10",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabletop.components.hand.strip_h),"px"].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((collapsed)?slide:(0))),"px)"].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.2s ease"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),on_enter,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),on_leave], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
cljs.core.reset_BANG_(tabletop.components.hand.hand_ref,el);

if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(strip_w,el.offsetWidth);
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-0 left-0 right-0 z-20",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabletop.components.hand.strip_h),"px"].join(''),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),((collapsed)?"none":"auto")], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),on_enter,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),on_leave], null),((cljs.core.empty_QMARK_(hand))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-500 text-sm italic"], null),"Hand is empty"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.hand.hand_card,c,i,hovered_idx,cljs.core.deref(strip_w),n,on_reorder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null));
}),hand))], null))], null)], null);
});
});

//# sourceMappingURL=tabletop.components.hand.js.map
