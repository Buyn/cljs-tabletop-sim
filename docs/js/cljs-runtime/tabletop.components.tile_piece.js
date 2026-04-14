goog.provide('tabletop.components.tile_piece');
tabletop.components.tile_piece.ellipse_clip = (function tabletop$components$tile_piece$ellipse_clip(w,h){
return ["ellipse(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w / (2))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (2))),"px at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((w / (2))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((h / (2))),"px)"].join('');
});
tabletop.components.tile_piece.hexagon_clip = (function tabletop$components$tile_piece$hexagon_clip(w,h){
var cx = (w / (2));
var cy = (h / (2));
var rx = (w / (2));
var ry = (h / (2));
var pts = (function (){var iter__5480__auto__ = (function tabletop$components$tile_piece$hexagon_clip_$_iter__57185(s__57186){
return (new cljs.core.LazySeq(null,(function (){
var s__57186__$1 = s__57186;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57186__$1);
if(temp__5804__auto__){
var s__57186__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57186__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__57186__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__57188 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__57187 = (0);
while(true){
if((i__57187 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__57187);
cljs.core.chunk_append(b__57188,(function (){var angle = (((Math.PI / (3)) * i) + (Math.PI / (6)));
var px = (cx + (rx * Math.cos(angle)));
var py = (cy + (ry * Math.sin(angle)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py),"px"].join('');
})());

var G__57271 = (i__57187 + (1));
i__57187 = G__57271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57188),tabletop$components$tile_piece$hexagon_clip_$_iter__57185(cljs.core.chunk_rest(s__57186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57188),null);
}
} else {
var i = cljs.core.first(s__57186__$2);
return cljs.core.cons((function (){var angle = (((Math.PI / (3)) * i) + (Math.PI / (6)));
var px = (cx + (rx * Math.cos(angle)));
var py = (cy + (ry * Math.sin(angle)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py),"px"].join('');
})(),tabletop$components$tile_piece$hexagon_clip_$_iter__57185(cljs.core.rest(s__57186__$2)));
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
var G__57207 = shape;
var G__57207__$1 = (((G__57207 instanceof cljs.core.Keyword))?G__57207.fqn:null);
switch (G__57207__$1) {
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
tabletop.components.tile_piece.tile_bg_style = (function tabletop$components$tile_piece$tile_bg_style(p__57213){
var map__57214 = p__57213;
var map__57214__$1 = cljs.core.__destructure_map(map__57214);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var tile_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"tile-idx","tile-idx",-422120350));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57214__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57214__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57214__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
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
tabletop.components.tile_piece.tile_piece = (function tabletop$components$tile_piece$tile_piece(p__57223){
var map__57224 = p__57223;
var map__57224__$1 = cljs.core.__destructure_map(map__57224);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57224__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__57230){
var map__57231 = p__57230;
var map__57231__$1 = cljs.core.__destructure_map(map__57231);
var piece__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57231__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var map__57233 = piece__$1;
var map__57233__$1 = cljs.core.__destructure_map(map__57233);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var corner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57233__$1,new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527),(0));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57233__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57233__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null));
var tile_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999));
var tile_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword(null,"tile-h","tile-h",356807408));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57233__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"rectangle","rectangle",293163262));
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

var map__57240_57311 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__57240_57312__$1 = cljs.core.__destructure_map(map__57240_57311);
var pan_x_57313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240_57312__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y_57314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240_57312__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom_57315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240_57312__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
cljs.core.reset_BANG_(offset_x,(((e.clientX - pan_x_57313) / zoom_57315) - x));

cljs.core.reset_BANG_(offset_y,(((e.clientY - pan_y_57314) / zoom_57315) - y));

e.currentTarget.setPointerCapture(e.pointerId);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx_57320 = (e.clientX - cljs.core.deref(start_cx));
var dy_57321 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_57320 * dx_57320) + (dy_57321 * dy_57321))) > (4))){
cljs.core.reset_BANG_(drag_moved_QMARK_,true);
} else {
}

var map__57249 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__57249__$1 = cljs.core.__destructure_map(map__57249);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var new_x = (((e.clientX - pan_x) / zoom) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - pan_y) / zoom) - cljs.core.deref(offset_y));
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ddx = (new_x - x);
var ddy = (new_y - y);
if(cljs.core.contains_QMARK_(sel,id)){
var seq__57250 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__57252 = null;
var count__57253 = (0);
var i__57254 = (0);
while(true){
if((i__57254 < count__57253)){
var c = chunk__57252.cljs$core$IIndexed$_nth$arity$2(null,i__57254);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57342 = seq__57250;
var G__57343 = chunk__57252;
var G__57344 = count__57253;
var G__57345 = (i__57254 + (1));
seq__57250 = G__57342;
chunk__57252 = G__57343;
count__57253 = G__57344;
i__57254 = G__57345;
continue;
} else {
var G__57351 = seq__57250;
var G__57352 = chunk__57252;
var G__57353 = count__57253;
var G__57354 = (i__57254 + (1));
seq__57250 = G__57351;
chunk__57252 = G__57352;
count__57253 = G__57353;
i__57254 = G__57354;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57250);
if(temp__5804__auto__){
var seq__57250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57250__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57250__$1);
var G__57356 = cljs.core.chunk_rest(seq__57250__$1);
var G__57357 = c__5525__auto__;
var G__57358 = cljs.core.count(c__5525__auto__);
var G__57359 = (0);
seq__57250 = G__57356;
chunk__57252 = G__57357;
count__57253 = G__57358;
i__57254 = G__57359;
continue;
} else {
var c = cljs.core.first(seq__57250__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57368 = cljs.core.next(seq__57250__$1);
var G__57369 = null;
var G__57370 = (0);
var G__57371 = (0);
seq__57250 = G__57368;
chunk__57252 = G__57369;
count__57253 = G__57370;
i__57254 = G__57371;
continue;
} else {
var G__57372 = cljs.core.next(seq__57250__$1);
var G__57373 = null;
var G__57374 = (0);
var G__57375 = (0);
seq__57250 = G__57372;
chunk__57252 = G__57373;
count__57253 = G__57374;
i__57254 = G__57375;
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
