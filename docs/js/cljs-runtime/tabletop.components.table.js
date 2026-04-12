goog.provide('tabletop.components.table');
if((typeof tabletop !== 'undefined') && (typeof tabletop.components !== 'undefined') && (typeof tabletop.components.table !== 'undefined') && (typeof tabletop.components.table.last_mouse_pos !== 'undefined')){
} else {
tabletop.components.table.last_mouse_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
if((typeof tabletop !== 'undefined') && (typeof tabletop.components !== 'undefined') && (typeof tabletop.components.table !== 'undefined') && (typeof tabletop.components.table.mouse_tracker !== 'undefined')){
} else {
tabletop.components.table.mouse_tracker = (function (){
document.addEventListener("mousemove",(function (e){
return cljs.core.reset_BANG_(tabletop.components.table.last_mouse_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
}));

return true;
})()
;
}
if((typeof tabletop !== 'undefined') && (typeof tabletop.components !== 'undefined') && (typeof tabletop.components.table !== 'undefined') && (typeof tabletop.components.table.ctrl_v_handler !== 'undefined')){
} else {
tabletop.components.table.ctrl_v_handler = (function (){
document.addEventListener("keydown",(function (e){
if(cljs.core.truth_((function (){var and__5000__auto__ = e.ctrlKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"v");
} else {
return and__5000__auto__;
}
})())){
e.preventDefault();

var vec__33377 = cljs.core.deref(tabletop.components.table.last_mouse_pos);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33377,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33377,(1),null);
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)))){
return tabletop.state.paste_to_hand_BANG_();
} else {
var map__33380 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__33380__$1 = cljs.core.__destructure_map(map__33380);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33380__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33380__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33380__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var tx = ((cx - pan_x) / zoom);
var ty = ((cy - pan_y) / zoom);
return tabletop.state.paste_from_list_BANG_(tx,ty);
}
} else {
return null;
}
}));

return true;
})()
;
}
tabletop.components.table.client__GT_table = (function tabletop$components$table$client__GT_table(cx,cy,pan_x,pan_y,zoom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cx - pan_x) / zoom),((cy - pan_y) / zoom)], null);
});
tabletop.components.table.rect_intersects_QMARK_ = (function tabletop$components$table$rect_intersects_QMARK_(rx1,ry1,rx2,ry2,c){
var cx1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0));
var cy1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0));
var cw = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"die","die",-547192252)))?(70):(70));
var ch = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"die","die",-547192252)))?(70):(100));
var cx2 = (cx1 + cw);
var cy2 = (cy1 + ch);
return (((rx1 < cx2)) && ((((rx2 > cx1)) && ((((ry1 < cy2)) && ((ry2 > cy1)))))));
});
tabletop.components.table.table = (function tabletop$components$table$table(){
var panning_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var last_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var last_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selecting_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var sel_start = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var map__33386 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__33386__$1 = cljs.core.__destructure_map(map__33386);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var vec__33387 = (function (){var or__5002__auto__ = cljs.core.deref(sel_start);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})();
var sx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(0),null);
var sy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(1),null);
var vec__33390 = (function (){var or__5002__auto__ = cljs.core.deref(sel_end);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})();
var sx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33390,(0),null);
var sy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33390,(1),null);
var rect_x1 = (function (){var x__5090__auto__ = sx1;
var y__5091__auto__ = sx2;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var rect_y1 = (function (){var x__5090__auto__ = sy1;
var y__5091__auto__ = sy2;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var rect_x2 = (function (){var x__5087__auto__ = sx1;
var y__5088__auto__ = sx2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var rect_y2 = (function (){var x__5087__auto__ = sy1;
var y__5088__auto__ = sy2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var screen_x1 = (pan_x + (rect_x1 * zoom));
var screen_y1 = (pan_y + (rect_y1 * zoom));
var screen_w = ((rect_x2 - rect_x1) * zoom);
var screen_h = ((rect_y2 - rect_y1) * zoom);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full bg-green-900 overflow-hidden relative",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,e.currentTarget)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
cljs.core.reset_BANG_(selecting_QMARK_,true);

e.currentTarget.setPointerCapture(e.pointerId);

var vec__33401 = tabletop.components.table.client__GT_table(e.clientX,e.clientY,pan_x,pan_y,zoom);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33401,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33401,(1),null);
cljs.core.reset_BANG_(sel_start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));

return cljs.core.reset_BANG_(sel_end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1))){
var vec__33408_33431 = tabletop.components.table.client__GT_table(e.clientX,e.clientY,pan_x,pan_y,zoom);
var tx_33432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408_33431,(0),null);
var ty_33433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408_33431,(1),null);
tabletop.state.set_last_middle_click_BANG_(tx_33432,ty_33433);

cljs.core.reset_BANG_(panning_QMARK_,true);

e.currentTarget.setPointerCapture(e.pointerId);

cljs.core.reset_BANG_(last_x,e.clientX);

return cljs.core.reset_BANG_(last_y,e.clientY);
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(selecting_QMARK_))){
var vec__33419 = tabletop.components.table.client__GT_table(e.clientX,e.clientY,pan_x,pan_y,zoom);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(1),null);
return cljs.core.reset_BANG_(sel_end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
} else {
if(cljs.core.truth_(cljs.core.deref(panning_QMARK_))){
var dx = (e.clientX - cljs.core.deref(last_x));
var dy = (e.clientY - cljs.core.deref(last_y));
tabletop.state.pan_table_BANG_(dx,dy);

cljs.core.reset_BANG_(last_x,e.clientX);

return cljs.core.reset_BANG_(last_y,e.clientY);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core.truth_(cljs.core.deref(selecting_QMARK_))){
cljs.core.reset_BANG_(selecting_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

var selected_ids_33434 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33381_SHARP_){
return tabletop.components.table.rect_intersects_QMARK_(rect_x1,rect_y1,rect_x2,rect_y2,p1__33381_SHARP_);
}),components));
tabletop.state.set_selection_BANG_(selected_ids_33434);

cljs.core.reset_BANG_(sel_start,null);

return cljs.core.reset_BANG_(sel_end,null);
} else {
if(cljs.core.truth_(cljs.core.deref(panning_QMARK_))){
cljs.core.reset_BANG_(panning_QMARK_,false);

return e.currentTarget.releasePointerCapture(e.pointerId);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
cljs.core.reset_BANG_(selecting_QMARK_,false);

cljs.core.reset_BANG_(panning_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

cljs.core.reset_BANG_(sel_start,null);

return cljs.core.reset_BANG_(sel_end,null);
}),new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),(function (e){
e.preventDefault();

return tabletop.state.zoom_table_BANG_((-0.001 * e.deltaY));
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,e.currentTarget)){
e.preventDefault();

var cx = e.clientX;
var cy = e.clientY;
var vec__33422 = tabletop.components.table.client__GT_table(cx,cy,pan_x,pan_y,zoom);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,(1),null);
return tabletop.components.context_menu.open_context_menu_BANG_(cx,cy,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Paste",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.paste_from_list_BANG_(tx,ty);
})], null)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pan_x),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pan_y),"px) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zoom),")"].join(''),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"0 0"], null)], null),(function (){var iter__5480__auto__ = (function tabletop$components$table$table_$_iter__33425(s__33426){
return (new cljs.core.LazySeq(null,(function (){
var s__33426__$1 = s__33426;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33426__$1);
if(temp__5804__auto__){
var s__33426__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33426__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33426__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33428 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33427 = (0);
while(true){
if((i__33427 < size__5479__auto__)){
var component = cljs.core._nth(c__5478__auto__,i__33427);
cljs.core.chunk_append(b__33428,(function (){var G__33429 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(component);
var G__33429__$1 = (((G__33429 instanceof cljs.core.Keyword))?G__33429.fqn:null);
switch (G__33429__$1) {
case "deck":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck.deck,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deck","deck",1145325705),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "card":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.card.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card","card",-1430355152),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "die":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.die.die,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"die","die",-547192252),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "tile-piece":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_piece.tile_piece,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece","piece",1396691784),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
default:
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bg-red-500 text-white text-xs p-1 rounded",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(component,(0))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(component,(0))),"px"].join('')], null)], null),["Unknown type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(component))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

}
})());

var G__33437 = (i__33427 + (1));
i__33427 = G__33437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33428),tabletop$components$table$table_$_iter__33425(cljs.core.chunk_rest(s__33426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33428),null);
}
} else {
var component = cljs.core.first(s__33426__$2);
return cljs.core.cons((function (){var G__33430 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(component);
var G__33430__$1 = (((G__33430 instanceof cljs.core.Keyword))?G__33430.fqn:null);
switch (G__33430__$1) {
case "deck":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck.deck,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deck","deck",1145325705),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "card":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.card.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card","card",-1430355152),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "die":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.die.die,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"die","die",-547192252),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
case "tile-piece":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_piece.tile_piece,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece","piece",1396691784),component], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

break;
default:
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bg-red-500 text-white text-xs p-1 rounded",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(component,(0))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(component,(0))),"px"].join('')], null)], null),["Unknown type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(component))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));

}
})(),tabletop$components$table$table_$_iter__33425(cljs.core.rest(s__33426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(components);
})()], null),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(selecting_QMARK_);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.deref(sel_start);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.deref(sel_end);
if(cljs.core.truth_(and__5000__auto____$2)){
return (((screen_w > (2))) && ((screen_h > (2))));
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_y1),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_w),"px"].join(''),"rgba(99,179,237,0.15)",(100),"absolute","2px solid rgba(99,179,237,0.9)","none",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_h),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_x1),"px"].join('')])], null)], null):null)], null);
});
});

//# sourceMappingURL=tabletop.components.table.js.map
