goog.provide('tabletop.components.die');
tabletop.components.die.die_colors = new cljs.core.PersistentArrayMap(null, 7, [(4),"bg-red-500 text-white",(6),"bg-blue-500 text-white",(8),"bg-green-500 text-white",(10),"bg-purple-500 text-white",(12),"bg-orange-500 text-white",(20),"bg-yellow-400 text-gray-900",(100),"bg-pink-500 text-white"], null);
tabletop.components.die.die = (function tabletop$components$die$die(p__26308){
var map__26309 = p__26308;
var map__26309__$1 = cljs.core.__destructure_map(map__26309);
var die = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26309__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__26314){
var map__26315 = p__26314;
var map__26315__$1 = cljs.core.__destructure_map(map__26315);
var die__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26315__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var map__26316 = die__$1;
var map__26316__$1 = cljs.core.__destructure_map(map__26316);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded shadow-md cursor-pointer ","w-[37px] h-[37px] flex flex-col items-center justify-center ","font-bold text-[13px] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tabletop.components.die.die_colors,faces,"bg-gray-500 text-white")),((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(moved_QMARK_,false);

cljs.core.reset_BANG_(dragging_QMARK_,true);

cljs.core.reset_BANG_(start_x,e.clientX);

cljs.core.reset_BANG_(start_y,e.clientY);

var rect_26346 = e.currentTarget.getBoundingClientRect();
var z_26347 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_26346.left) / z_26347));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_26346.top) / z_26347));

e.currentTarget.setPointerCapture(e.pointerId);

var handler = (function (ke){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
if(cljs.core.truth_((function (){var and__5000__auto__ = ke.ctrlKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ke.key,"c");
} else {
return and__5000__auto__;
}
})())){
ke.preventDefault();

return tabletop.state.copy_single_to_list_BANG_(id);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ke.ctrlKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ke.key,"x");
} else {
return and__5000__auto__;
}
})())){
ke.preventDefault();

tabletop.state.copy_single_to_list_BANG_(id);

tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"remove","remove",-131428414));

return cljs.core.reset_BANG_(dragging_QMARK_,false);
} else {
return null;
}
}
} else {
return null;
}
});
cljs.core.reset_BANG_(key_handler,handler);

return document.addEventListener("keydown",handler);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx = (e.clientX - cljs.core.deref(start_x));
var dy = (e.clientY - cljs.core.deref(start_y));
if((Math.sqrt(((dx * dx) + (dy * dy))) > (5))){
cljs.core.reset_BANG_(moved_QMARK_,true);

var z = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect = e.currentTarget.offsetParent.getBoundingClientRect();
var new_x = (((e.clientX - parent_rect.left) / z) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - parent_rect.top) / z) - cljs.core.deref(offset_y));
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ddx = (new_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(die__$1,x));
var ddy = (new_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(die__$1,y));
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)))){
if(cljs.core.contains_QMARK_(sel,id)){
var seq__26330 = cljs.core.seq(sel);
var chunk__26331 = null;
var count__26332 = (0);
var i__26333 = (0);
while(true){
if((i__26333 < count__26332)){
var sid = chunk__26331.cljs$core$IIndexed$_nth$arity$2(null,i__26333);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__26349 = seq__26330;
var G__26350 = chunk__26331;
var G__26351 = count__26332;
var G__26352 = (i__26333 + (1));
seq__26330 = G__26349;
chunk__26331 = G__26350;
count__26332 = G__26351;
i__26333 = G__26352;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26330);
if(temp__5804__auto__){
var seq__26330__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26330__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26330__$1);
var G__26353 = cljs.core.chunk_rest(seq__26330__$1);
var G__26354 = c__5525__auto__;
var G__26355 = cljs.core.count(c__5525__auto__);
var G__26356 = (0);
seq__26330 = G__26353;
chunk__26331 = G__26354;
count__26332 = G__26355;
i__26333 = G__26356;
continue;
} else {
var sid = cljs.core.first(seq__26330__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__26357 = cljs.core.next(seq__26330__$1);
var G__26358 = null;
var G__26359 = (0);
var G__26360 = (0);
seq__26330 = G__26357;
chunk__26331 = G__26358;
count__26332 = G__26359;
i__26333 = G__26360;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return tabletop.state.move_card_to_hand_BANG_(id);
}
} else {
if(cljs.core.contains_QMARK_(sel,id)){
var seq__26335 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__26337 = null;
var count__26338 = (0);
var i__26339 = (0);
while(true){
if((i__26339 < count__26338)){
var c = chunk__26337.cljs$core$IIndexed$_nth$arity$2(null,i__26339);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__26363 = seq__26335;
var G__26364 = chunk__26337;
var G__26365 = count__26338;
var G__26366 = (i__26339 + (1));
seq__26335 = G__26363;
chunk__26337 = G__26364;
count__26338 = G__26365;
i__26339 = G__26366;
continue;
} else {
var G__26367 = seq__26335;
var G__26368 = chunk__26337;
var G__26369 = count__26338;
var G__26370 = (i__26339 + (1));
seq__26335 = G__26367;
chunk__26337 = G__26368;
count__26338 = G__26369;
i__26339 = G__26370;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26335);
if(temp__5804__auto__){
var seq__26335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26335__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26335__$1);
var G__26371 = cljs.core.chunk_rest(seq__26335__$1);
var G__26372 = c__5525__auto__;
var G__26373 = cljs.core.count(c__5525__auto__);
var G__26374 = (0);
seq__26335 = G__26371;
chunk__26337 = G__26372;
count__26338 = G__26373;
i__26339 = G__26374;
continue;
} else {
var c = cljs.core.first(seq__26335__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__26378 = cljs.core.next(seq__26335__$1);
var G__26379 = null;
var G__26380 = (0);
var G__26381 = (0);
seq__26335 = G__26378;
chunk__26337 = G__26379;
count__26338 = G__26380;
i__26339 = G__26381;
continue;
} else {
var G__26382 = cljs.core.next(seq__26335__$1);
var G__26383 = null;
var G__26384 = (0);
var G__26385 = (0);
seq__26335 = G__26382;
chunk__26337 = G__26383;
count__26338 = G__26384;
i__26339 = G__26385;
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
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core.truth_(cljs.core.deref(key_handler))){
document.removeEventListener("keydown",cljs.core.deref(key_handler));

cljs.core.reset_BANG_(key_handler,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

if(cljs.core.truth_(cljs.core.deref(moved_QMARK_))){
return null;
} else {
if(cljs.core.truth_(e.shiftKey)){
return tabletop.state.add_to_selection_BANG_(id);
} else {
tabletop.state.clear_selection_BANG_();

return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"roll","roll",11266999));
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id)){
} else {
tabletop.state.add_to_selection_BANG_(id);
}

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(die__$1));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-none opacity-70"], null),["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(faces)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-none font-black"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.die.js.map
