goog.provide('tabletop.components.die');
tabletop.components.die.die_colors = new cljs.core.PersistentArrayMap(null, 7, [(4),"bg-red-500 text-white",(6),"bg-blue-500 text-white",(8),"bg-green-500 text-white",(10),"bg-purple-500 text-white",(12),"bg-orange-500 text-white",(20),"bg-yellow-400 text-gray-900",(100),"bg-pink-500 text-white"], null);
tabletop.components.die.die = (function tabletop$components$die$die(p__33151){
var map__33152 = p__33151;
var map__33152__$1 = cljs.core.__destructure_map(map__33152);
var die = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33152__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__33162){
var map__33163 = p__33162;
var map__33163__$1 = cljs.core.__destructure_map(map__33163);
var die__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33163__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var map__33164 = die__$1;
var map__33164__$1 = cljs.core.__destructure_map(map__33164);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33164__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33164__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded shadow-md cursor-pointer ","w-[37px] h-[37px] flex flex-col items-center justify-center ","font-bold text-[13px] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tabletop.components.die.die_colors,faces,"bg-gray-500 text-white")),((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(moved_QMARK_,false);

cljs.core.reset_BANG_(dragging_QMARK_,true);

cljs.core.reset_BANG_(start_x,e.clientX);

cljs.core.reset_BANG_(start_y,e.clientY);

var rect_33227 = e.currentTarget.getBoundingClientRect();
var z_33228 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_33227.left) / z_33228));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_33227.top) / z_33228));

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
var seq__33195 = cljs.core.seq(sel);
var chunk__33196 = null;
var count__33197 = (0);
var i__33198 = (0);
while(true){
if((i__33198 < count__33197)){
var sid = chunk__33196.cljs$core$IIndexed$_nth$arity$2(null,i__33198);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__33255 = seq__33195;
var G__33256 = chunk__33196;
var G__33257 = count__33197;
var G__33258 = (i__33198 + (1));
seq__33195 = G__33255;
chunk__33196 = G__33256;
count__33197 = G__33257;
i__33198 = G__33258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33195);
if(temp__5804__auto__){
var seq__33195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33195__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33195__$1);
var G__33263 = cljs.core.chunk_rest(seq__33195__$1);
var G__33264 = c__5525__auto__;
var G__33265 = cljs.core.count(c__5525__auto__);
var G__33266 = (0);
seq__33195 = G__33263;
chunk__33196 = G__33264;
count__33197 = G__33265;
i__33198 = G__33266;
continue;
} else {
var sid = cljs.core.first(seq__33195__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__33271 = cljs.core.next(seq__33195__$1);
var G__33272 = null;
var G__33273 = (0);
var G__33274 = (0);
seq__33195 = G__33271;
chunk__33196 = G__33272;
count__33197 = G__33273;
i__33198 = G__33274;
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
var seq__33203 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__33205 = null;
var count__33206 = (0);
var i__33207 = (0);
while(true){
if((i__33207 < count__33206)){
var c = chunk__33205.cljs$core$IIndexed$_nth$arity$2(null,i__33207);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33275 = seq__33203;
var G__33276 = chunk__33205;
var G__33277 = count__33206;
var G__33278 = (i__33207 + (1));
seq__33203 = G__33275;
chunk__33205 = G__33276;
count__33206 = G__33277;
i__33207 = G__33278;
continue;
} else {
var G__33283 = seq__33203;
var G__33285 = chunk__33205;
var G__33286 = count__33206;
var G__33287 = (i__33207 + (1));
seq__33203 = G__33283;
chunk__33205 = G__33285;
count__33206 = G__33286;
i__33207 = G__33287;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33203);
if(temp__5804__auto__){
var seq__33203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33203__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33203__$1);
var G__33289 = cljs.core.chunk_rest(seq__33203__$1);
var G__33290 = c__5525__auto__;
var G__33291 = cljs.core.count(c__5525__auto__);
var G__33292 = (0);
seq__33203 = G__33289;
chunk__33205 = G__33290;
count__33206 = G__33291;
i__33207 = G__33292;
continue;
} else {
var c = cljs.core.first(seq__33203__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33293 = cljs.core.next(seq__33203__$1);
var G__33294 = null;
var G__33295 = (0);
var G__33296 = (0);
seq__33203 = G__33293;
chunk__33205 = G__33294;
count__33206 = G__33295;
i__33207 = G__33296;
continue;
} else {
var G__33297 = cljs.core.next(seq__33203__$1);
var G__33298 = null;
var G__33299 = (0);
var G__33300 = (0);
seq__33203 = G__33297;
chunk__33205 = G__33298;
count__33206 = G__33299;
i__33207 = G__33300;
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
