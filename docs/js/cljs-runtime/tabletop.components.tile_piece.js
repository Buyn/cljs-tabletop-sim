goog.provide('tabletop.components.tile_piece');
tabletop.components.tile_piece.ellipse_clip = (function tabletop$components$tile_piece$ellipse_clip(w,h){
return ["ellipse(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w / (2))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (2))),"px at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w / (2))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (2))),"px)"].join('');
});
tabletop.components.tile_piece.hexagon_clip = (function tabletop$components$tile_piece$hexagon_clip(w,h){
var cx = (w / (2));
var cy = (h / (2));
var rx = (w / (2));
var ry = (h / (2));
var pts = (function (){var iter__5480__auto__ = (function tabletop$components$tile_piece$hexagon_clip_$_iter__33356(s__33357){
return (new cljs.core.LazySeq(null,(function (){
var s__33357__$1 = s__33357;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33357__$1);
if(temp__5804__auto__){
var s__33357__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33357__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33357__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33359 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33358 = (0);
while(true){
if((i__33358 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__33358);
cljs.core.chunk_append(b__33359,(function (){var angle = (((Math.PI / (3)) * i) + (Math.PI / (6)));
var px = (cx + (rx * Math.cos(angle)));
var py = (cy + (ry * Math.sin(angle)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py),"px"].join('');
})());

var G__33375 = (i__33358 + (1));
i__33358 = G__33375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33359),tabletop$components$tile_piece$hexagon_clip_$_iter__33356(cljs.core.chunk_rest(s__33357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33359),null);
}
} else {
var i = cljs.core.first(s__33357__$2);
return cljs.core.cons((function (){var angle = (((Math.PI / (3)) * i) + (Math.PI / (6)));
var px = (cx + (rx * Math.cos(angle)));
var py = (cy + (ry * Math.sin(angle)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py),"px"].join('');
})(),tabletop$components$tile_piece$hexagon_clip_$_iter__33356(cljs.core.rest(s__33357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return ["polygon(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",pts),")"].join('');
});
tabletop.components.tile_piece.shape_clip = (function tabletop$components$tile_piece$shape_clip(shape,w,h,corner_radius){
var G__33361 = shape;
var G__33361__$1 = (((G__33361 instanceof cljs.core.Keyword))?G__33361.fqn:null);
switch (G__33361__$1) {
case "ellipse":
return tabletop.components.tile_piece.ellipse_clip(w,h);

break;
case "hexagon":
return tabletop.components.tile_piece.hexagon_clip(w,h);

break;
default:
return null;

}
});
/**
 * Computes background-image CSS properties to show the correct tile fragment.
 * Accounts for outer-crop (global margins) and inner-crop (per-tile borders).
 */
tabletop.components.tile_piece.tile_bg_style = (function tabletop$components$tile_piece$tile_bg_style(p__33362){
var map__33363 = p__33362;
var map__33363__$1 = cljs.core.__destructure_map(map__33363);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var tile_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"tile-idx","tile-idx",-422120350));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33363__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33363__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33363__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var idx0 = (tile_idx - (1));
var col = cljs.core.mod(idx0,cols);
var row = cljs.core.quot(idx0,cols);
var oc_l = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(outer_crop,(0));
var oc_t = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(outer_crop,(0));
var ic_l = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_t = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_r = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_b = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var vis_w = ((tile_w - ic_l) - ic_r);
var vis_h = ((tile_h - ic_t) - ic_b);
var bg_w = (cols * tile_w);
var bg_h = (rows * tile_h);
var bp_x = (- ((oc_l + (col * tile_w)) + ic_l));
var bp_y = (- ((oc_t + (row * tile_h)) + ic_t));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"')"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_w),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_h),"px"].join(''),new cljs.core.Keyword(null,"background-position","background-position",1112702746),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bp_x),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bp_y),"px"].join(''),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(vis_w),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(vis_h),"px"].join('')], null);
});
tabletop.components.tile_piece.tile_piece = (function tabletop$components$tile_piece$tile_piece(p__33364){
var map__33365 = p__33364;
var map__33365__$1 = cljs.core.__destructure_map(map__33365);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33365__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__33366){
var map__33367 = p__33366;
var map__33367__$1 = cljs.core.__destructure_map(map__33367);
var piece__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33367__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var map__33368 = piece__$1;
var map__33368__$1 = cljs.core.__destructure_map(map__33368);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33368__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var corner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33368__$1,new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527),(0));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33368__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33368__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33368__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33368__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33368__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33368__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"rectangle","rectangle",293163262));
var ic_l = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_t = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_r = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var ic_b = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(inner_crop,(0));
var vis_w = (((function (){var or__5002__auto__ = tile_w;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})() - ic_l) - ic_r);
var vis_h = (((function (){var or__5002__auto__ = tile_h;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})() - ic_t) - ic_b);
var clip = tabletop.components.tile_piece.shape_clip(shape,vis_w,vis_h,corner_radius);
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
var bg = tabletop.components.tile_piece.tile_bg_style(piece__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bg,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),clip,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"rectangle","rectangle",293163262))) && ((corner_radius > (0)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(corner_radius),"px"].join(''):null),new cljs.core.Keyword(null,"outline","outline",793464534),((selected_QMARK_)?"2px solid cyan":null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grab",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

cljs.core.reset_BANG_(start_cx,e.clientX);

cljs.core.reset_BANG_(start_cy,e.clientY);

var rect_33382 = e.currentTarget.getBoundingClientRect();
var z_33383 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_33382.left) / z_33383));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_33382.top) / z_33383));

e.currentTarget.setPointerCapture(e.pointerId);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx_33384 = (e.clientX - cljs.core.deref(start_cx));
var dy_33385 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_33384 * dx_33384) + (dy_33385 * dy_33385))) > (4))){
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
var seq__33369 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__33371 = null;
var count__33372 = (0);
var i__33373 = (0);
while(true){
if((i__33373 < count__33372)){
var c = chunk__33371.cljs$core$IIndexed$_nth$arity$2(null,i__33373);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33393 = seq__33369;
var G__33394 = chunk__33371;
var G__33395 = count__33372;
var G__33396 = (i__33373 + (1));
seq__33369 = G__33393;
chunk__33371 = G__33394;
count__33372 = G__33395;
i__33373 = G__33396;
continue;
} else {
var G__33397 = seq__33369;
var G__33398 = chunk__33371;
var G__33399 = count__33372;
var G__33400 = (i__33373 + (1));
seq__33369 = G__33397;
chunk__33371 = G__33398;
count__33372 = G__33399;
i__33373 = G__33400;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33369);
if(temp__5804__auto__){
var seq__33369__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33369__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33369__$1);
var G__33404 = cljs.core.chunk_rest(seq__33369__$1);
var G__33405 = c__5525__auto__;
var G__33406 = cljs.core.count(c__5525__auto__);
var G__33407 = (0);
seq__33369 = G__33404;
chunk__33371 = G__33405;
count__33372 = G__33406;
i__33373 = G__33407;
continue;
} else {
var c = cljs.core.first(seq__33369__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33411 = cljs.core.next(seq__33369__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__33369 = G__33411;
chunk__33371 = G__33412;
count__33372 = G__33413;
i__33373 = G__33414;
continue;
} else {
var G__33415 = cljs.core.next(seq__33369__$1);
var G__33416 = null;
var G__33417 = (0);
var G__33418 = (0);
seq__33369 = G__33415;
chunk__33371 = G__33416;
count__33372 = G__33417;
i__33373 = G__33418;
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
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)))){
tabletop.state.move_card_to_hand_BANG_(id);
} else {
}
} else {
}

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
