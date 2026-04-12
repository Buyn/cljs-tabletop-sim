goog.provide('tabletop.components.tile_piece');
tabletop.components.tile_piece.tile_piece = (function tabletop$components$tile_piece$tile_piece(p__31161){
var map__31162 = p__31161;
var map__31162__$1 = cljs.core.__destructure_map(map__31162);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31162__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__31192){
var map__31194 = p__31192;
var map__31194__$1 = cljs.core.__destructure_map(map__31194);
var piece__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var map__31196 = piece__$1;
var map__31196__$1 = cljs.core.__destructure_map(map__31196);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tile_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"tile-idx","tile-idx",-422120350));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var idx0 = (tile_idx - (1));
var col = cljs.core.mod(idx0,cols);
var row = cljs.core.quot(idx0,rows);
var w = (function (){var or__5002__auto__ = tile_w;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var h = (function (){var or__5002__auto__ = tile_h;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''),"grab",["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"')"].join(''),((selected_QMARK_)?"2px solid cyan":null),"absolute","no-repeat",["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((col * w)),"px -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((row * h)),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cols * w)),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rows * h)),"px"].join(''),"none",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')]),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

cljs.core.reset_BANG_(start_cx,e.clientX);

cljs.core.reset_BANG_(start_cy,e.clientY);

var rect_31336 = e.currentTarget.getBoundingClientRect();
var z_31337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_31336.left) / z_31337));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_31336.top) / z_31337));

e.currentTarget.setPointerCapture(e.pointerId);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx_31338 = (e.clientX - cljs.core.deref(start_cx));
var dy_31339 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_31338 * dx_31338) + (dy_31339 * dy_31339))) > (4))){
cljs.core.reset_BANG_(drag_moved_QMARK_,true);
} else {
}

if(cljs.core.truth_(cljs.core.deref(drag_moved_QMARK_))){
var z = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect = e.currentTarget.offsetParent.getBoundingClientRect();
var new_x = (((e.clientX - parent_rect.left) / z) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - parent_rect.top) / z) - cljs.core.deref(offset_y));
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ddx = (new_x - x);
var ddy = (new_y - y);
if(cljs.core.contains_QMARK_(sel,id)){
var seq__31236 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__31238 = null;
var count__31239 = (0);
var i__31240 = (0);
while(true){
if((i__31240 < count__31239)){
var c = chunk__31238.cljs$core$IIndexed$_nth$arity$2(null,i__31240);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31340 = seq__31236;
var G__31341 = chunk__31238;
var G__31342 = count__31239;
var G__31343 = (i__31240 + (1));
seq__31236 = G__31340;
chunk__31238 = G__31341;
count__31239 = G__31342;
i__31240 = G__31343;
continue;
} else {
var G__31344 = seq__31236;
var G__31345 = chunk__31238;
var G__31346 = count__31239;
var G__31347 = (i__31240 + (1));
seq__31236 = G__31344;
chunk__31238 = G__31345;
count__31239 = G__31346;
i__31240 = G__31347;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31236);
if(temp__5804__auto__){
var seq__31236__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31236__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31236__$1);
var G__31348 = cljs.core.chunk_rest(seq__31236__$1);
var G__31349 = c__5525__auto__;
var G__31350 = cljs.core.count(c__5525__auto__);
var G__31351 = (0);
seq__31236 = G__31348;
chunk__31238 = G__31349;
count__31239 = G__31350;
i__31240 = G__31351;
continue;
} else {
var c = cljs.core.first(seq__31236__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31353 = cljs.core.next(seq__31236__$1);
var G__31354 = null;
var G__31355 = (0);
var G__31356 = (0);
seq__31236 = G__31353;
chunk__31238 = G__31354;
count__31239 = G__31355;
i__31240 = G__31356;
continue;
} else {
var G__31357 = cljs.core.next(seq__31236__$1);
var G__31358 = null;
var G__31359 = (0);
var G__31360 = (0);
seq__31236 = G__31357;
chunk__31238 = G__31358;
count__31239 = G__31359;
i__31240 = G__31360;
continue;
}
}
} else {
return null;
}
}
break;
}
} else {
return tabletop.state.move_component_BANG_(id,new_x,new_y);
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

e.currentTarget.releasePointerCapture(e.pointerId);

if(cljs.core.truth_(cljs.core.deref(drag_moved_QMARK_))){
} else {
if(cljs.core.truth_(e.shiftKey)){
tabletop.state.add_to_selection_BANG_(id);
} else {
tabletop.state.clear_selection_BANG_();
}
}

return cljs.core.reset_BANG_(drag_moved_QMARK_,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

return e.currentTarget.releasePointerCapture(e.pointerId);
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id)){
} else {
tabletop.state.add_to_selection_BANG_(id);
}

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(piece__$1));
})], null)], null);
});
});

//# sourceMappingURL=tabletop.components.tile_piece.js.map
