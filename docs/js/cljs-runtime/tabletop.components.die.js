goog.provide('tabletop.components.die');
tabletop.components.die.die_colors = new cljs.core.PersistentArrayMap(null, 7, [(4),"bg-red-500 text-white",(6),"bg-blue-500 text-white",(8),"bg-green-500 text-white",(10),"bg-purple-500 text-white",(12),"bg-orange-500 text-white",(20),"bg-yellow-400 text-gray-900",(100),"bg-pink-500 text-white"], null);
tabletop.components.die.die = (function tabletop$components$die$die(p__31167){
var map__31168 = p__31167;
var map__31168__$1 = cljs.core.__destructure_map(map__31168);
var die = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__31186){
var map__31187 = p__31186;
var map__31187__$1 = cljs.core.__destructure_map(map__31187);
var die__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31187__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var map__31193 = die__$1;
var map__31193__$1 = cljs.core.__destructure_map(map__31193);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded shadow-md cursor-pointer ","w-[37px] h-[37px] flex flex-col items-center justify-center ","font-bold text-[13px] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tabletop.components.die.die_colors,faces,"bg-gray-500 text-white")),((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(moved_QMARK_,false);

cljs.core.reset_BANG_(dragging_QMARK_,true);

cljs.core.reset_BANG_(start_x,e.clientX);

cljs.core.reset_BANG_(start_y,e.clientY);

var rect_31246 = e.currentTarget.getBoundingClientRect();
var z_31247 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_31246.left) / z_31247));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_31246.top) / z_31247));

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
var seq__31210 = cljs.core.seq(sel);
var chunk__31211 = null;
var count__31212 = (0);
var i__31213 = (0);
while(true){
if((i__31213 < count__31212)){
var sid = chunk__31211.cljs$core$IIndexed$_nth$arity$2(null,i__31213);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__31248 = seq__31210;
var G__31249 = chunk__31211;
var G__31250 = count__31212;
var G__31251 = (i__31213 + (1));
seq__31210 = G__31248;
chunk__31211 = G__31249;
count__31212 = G__31250;
i__31213 = G__31251;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31210);
if(temp__5804__auto__){
var seq__31210__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31210__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31210__$1);
var G__31252 = cljs.core.chunk_rest(seq__31210__$1);
var G__31253 = c__5525__auto__;
var G__31254 = cljs.core.count(c__5525__auto__);
var G__31255 = (0);
seq__31210 = G__31252;
chunk__31211 = G__31253;
count__31212 = G__31254;
i__31213 = G__31255;
continue;
} else {
var sid = cljs.core.first(seq__31210__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__31256 = cljs.core.next(seq__31210__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__31210 = G__31256;
chunk__31211 = G__31257;
count__31212 = G__31258;
i__31213 = G__31259;
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
var seq__31216 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__31218 = null;
var count__31219 = (0);
var i__31220 = (0);
while(true){
if((i__31220 < count__31219)){
var c = chunk__31218.cljs$core$IIndexed$_nth$arity$2(null,i__31220);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31260 = seq__31216;
var G__31261 = chunk__31218;
var G__31262 = count__31219;
var G__31263 = (i__31220 + (1));
seq__31216 = G__31260;
chunk__31218 = G__31261;
count__31219 = G__31262;
i__31220 = G__31263;
continue;
} else {
var G__31264 = seq__31216;
var G__31265 = chunk__31218;
var G__31266 = count__31219;
var G__31267 = (i__31220 + (1));
seq__31216 = G__31264;
chunk__31218 = G__31265;
count__31219 = G__31266;
i__31220 = G__31267;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31216);
if(temp__5804__auto__){
var seq__31216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31216__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31216__$1);
var G__31268 = cljs.core.chunk_rest(seq__31216__$1);
var G__31269 = c__5525__auto__;
var G__31270 = cljs.core.count(c__5525__auto__);
var G__31271 = (0);
seq__31216 = G__31268;
chunk__31218 = G__31269;
count__31219 = G__31270;
i__31220 = G__31271;
continue;
} else {
var c = cljs.core.first(seq__31216__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31272 = cljs.core.next(seq__31216__$1);
var G__31273 = null;
var G__31274 = (0);
var G__31275 = (0);
seq__31216 = G__31272;
chunk__31218 = G__31273;
count__31219 = G__31274;
i__31220 = G__31275;
continue;
} else {
var G__31276 = cljs.core.next(seq__31216__$1);
var G__31277 = null;
var G__31278 = (0);
var G__31279 = (0);
seq__31216 = G__31276;
chunk__31218 = G__31277;
count__31219 = G__31278;
i__31220 = G__31279;
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
