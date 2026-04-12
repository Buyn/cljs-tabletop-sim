goog.provide('tabletop.components.card');
/**
 * Return the first deck whose bounding box contains table point [tx ty].
 */
tabletop.components.card.find_deck_at = (function tabletop$components$card$find_deck_at(tx,ty,exclude_id){
return cljs.core.some((function (c){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),exclude_id)) && ((((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) < tx)) && ((tx < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + (70)))))) && ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) < ty)) && ((ty < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + (100)))))))))))){
return c;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
});
tabletop.components.card.card = (function tabletop$components$card$card(p__31214){
var map__31215 = p__31214;
var map__31215__$1 = cljs.core.__destructure_map(map__31215);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_hand_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__31227){
var map__31228 = p__31227;
var map__31228__$1 = cljs.core.__destructure_map(map__31228);
var card__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31228__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31228__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var map__31229 = card__$1;
var map__31229__$1 = cljs.core.__destructure_map(map__31229);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var suit_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var face_up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
var face_up_QMARK___$1 = cljs.core.boolean$(face_up_QMARK_);
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded-lg border shadow-md cursor-grab ","w-[70px] h-[100px] flex items-center justify-center ","text-sm font-bold overflow-hidden",((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),((face_up_QMARK___$1)?(function (){var or__5002__auto__ = face_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#ffffff";
}
})():(function (){var or__5002__auto__ = back_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#1e3a5f";
}
})()),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((face_up_QMARK___$1)?"#d1d5db":"#4b5563"),new cljs.core.Keyword(null,"color","color",1011675173),((face_up_QMARK___$1)?(function (){var or__5002__auto__ = text_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#111111";
}
})():"transparent"),new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(cljs.core.deref(over_hand_QMARK_))?"scale(0.33)":null),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"top left"], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

cljs.core.reset_BANG_(start_cx,e.clientX);

cljs.core.reset_BANG_(start_cy,e.clientY);

var rect_31369 = e.currentTarget.getBoundingClientRect();
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_31369.left) / zoom));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_31369.top) / zoom));

cljs.core.reset_BANG_(dragging_QMARK_,true);

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
var dx_31373 = (e.clientX - cljs.core.deref(start_cx));
var dy_31374 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_31373 * dx_31373) + (dy_31374 * dy_31374))) > (4))){
cljs.core.reset_BANG_(drag_moved_QMARK_,true);
} else {
}

var z = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect = e.currentTarget.offsetParent.getBoundingClientRect();
var new_x = (((e.clientX - parent_rect.left) / z) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - parent_rect.top) / z) - cljs.core.deref(offset_y));
var card_bottom = (e.clientY + (((100) - (cljs.core.deref(offset_y) * z)) * z));
var in_hand_QMARK_ = tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,card_bottom], null));
cljs.core.reset_BANG_(over_hand_QMARK_,in_hand_QMARK_);

if(cljs.core.truth_(in_hand_QMARK_)){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.contains_QMARK_(sel,id)){
var seq__31287 = cljs.core.seq(sel);
var chunk__31288 = null;
var count__31289 = (0);
var i__31290 = (0);
while(true){
if((i__31290 < count__31289)){
var sid = chunk__31288.cljs$core$IIndexed$_nth$arity$2(null,i__31290);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__31376 = seq__31287;
var G__31377 = chunk__31288;
var G__31378 = count__31289;
var G__31379 = (i__31290 + (1));
seq__31287 = G__31376;
chunk__31288 = G__31377;
count__31289 = G__31378;
i__31290 = G__31379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31287);
if(temp__5804__auto__){
var seq__31287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31287__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31287__$1);
var G__31380 = cljs.core.chunk_rest(seq__31287__$1);
var G__31381 = c__5525__auto__;
var G__31382 = cljs.core.count(c__5525__auto__);
var G__31383 = (0);
seq__31287 = G__31380;
chunk__31288 = G__31381;
count__31289 = G__31382;
i__31290 = G__31383;
continue;
} else {
var sid = cljs.core.first(seq__31287__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__31384 = cljs.core.next(seq__31287__$1);
var G__31385 = null;
var G__31386 = (0);
var G__31387 = (0);
seq__31287 = G__31384;
chunk__31288 = G__31385;
count__31289 = G__31386;
i__31290 = G__31387;
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
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var old_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(card__$1,x);
var old_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(card__$1,y);
var ddx = (new_x - old_x);
var ddy = (new_y - old_y);
if(cljs.core.contains_QMARK_(sel,id)){
var seq__31330 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__31332 = null;
var count__31333 = (0);
var i__31334 = (0);
while(true){
if((i__31334 < count__31333)){
var c = chunk__31332.cljs$core$IIndexed$_nth$arity$2(null,i__31334);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31388 = seq__31330;
var G__31389 = chunk__31332;
var G__31390 = count__31333;
var G__31391 = (i__31334 + (1));
seq__31330 = G__31388;
chunk__31332 = G__31389;
count__31333 = G__31390;
i__31334 = G__31391;
continue;
} else {
var G__31392 = seq__31330;
var G__31393 = chunk__31332;
var G__31394 = count__31333;
var G__31395 = (i__31334 + (1));
seq__31330 = G__31392;
chunk__31332 = G__31393;
count__31333 = G__31394;
i__31334 = G__31395;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31330);
if(temp__5804__auto__){
var seq__31330__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31330__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31330__$1);
var G__31396 = cljs.core.chunk_rest(seq__31330__$1);
var G__31397 = c__5525__auto__;
var G__31398 = cljs.core.count(c__5525__auto__);
var G__31399 = (0);
seq__31330 = G__31396;
chunk__31332 = G__31397;
count__31333 = G__31398;
i__31334 = G__31399;
continue;
} else {
var c = cljs.core.first(seq__31330__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__31400 = cljs.core.next(seq__31330__$1);
var G__31401 = null;
var G__31402 = (0);
var G__31403 = (0);
seq__31330 = G__31400;
chunk__31332 = G__31401;
count__31333 = G__31402;
i__31334 = G__31403;
continue;
} else {
var G__31404 = cljs.core.next(seq__31330__$1);
var G__31405 = null;
var G__31406 = (0);
var G__31407 = (0);
seq__31330 = G__31404;
chunk__31332 = G__31405;
count__31333 = G__31406;
i__31334 = G__31407;
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
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core.truth_(cljs.core.deref(key_handler))){
document.removeEventListener("keydown",cljs.core.deref(key_handler));

cljs.core.reset_BANG_(key_handler,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(over_hand_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

var z = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect = e.currentTarget.offsetParent.getBoundingClientRect();
var final_x = (((e.clientX - parent_rect.left) / z) - cljs.core.deref(offset_x));
var final_y = (((e.clientY - parent_rect.top) / z) - cljs.core.deref(offset_y));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(drag_moved_QMARK_);
if(cljs.core.truth_(and__5000__auto__)){
return tabletop.components.card.find_deck_at(final_x,final_y,id);
} else {
return and__5000__auto__;
}
})())){
var target_deck = tabletop.components.card.find_deck_at(final_x,final_y,id);
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var card_ids = ((cljs.core.contains_QMARK_(sel,id))?sel:cljs.core.PersistentHashSet.createAsIfByAssoc([id]));
var seq__31362 = cljs.core.seq(card_ids);
var chunk__31363 = null;
var count__31364 = (0);
var i__31365 = (0);
while(true){
if((i__31365 < count__31364)){
var cid = chunk__31363.cljs$core$IIndexed$_nth$arity$2(null,i__31365);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__31362,chunk__31363,count__31364,i__31365,cid,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__31229,map__31229__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__31228,map__31228__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__31215,map__31215__$1,card,on_drag_end){
return (function (p1__31209_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31209_SHARP_),cid)){
return p1__31209_SHARP_;
} else {
return null;
}
});})(seq__31362,chunk__31363,count__31364,i__31365,cid,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__31229,map__31229__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__31228,map__31228__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__31215,map__31215__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(cid,new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__31408 = seq__31362;
var G__31409 = chunk__31363;
var G__31410 = count__31364;
var G__31411 = (i__31365 + (1));
seq__31362 = G__31408;
chunk__31363 = G__31409;
count__31364 = G__31410;
i__31365 = G__31411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31362);
if(temp__5804__auto__){
var seq__31362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31362__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31362__$1);
var G__31412 = cljs.core.chunk_rest(seq__31362__$1);
var G__31413 = c__5525__auto__;
var G__31414 = cljs.core.count(c__5525__auto__);
var G__31415 = (0);
seq__31362 = G__31412;
chunk__31363 = G__31413;
count__31364 = G__31414;
i__31365 = G__31415;
continue;
} else {
var cid = cljs.core.first(seq__31362__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__31362,chunk__31363,count__31364,i__31365,cid,seq__31362__$1,temp__5804__auto__,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__31229,map__31229__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__31228,map__31228__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__31215,map__31215__$1,card,on_drag_end){
return (function (p1__31209_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31209_SHARP_),cid)){
return p1__31209_SHARP_;
} else {
return null;
}
});})(seq__31362,chunk__31363,count__31364,i__31365,cid,seq__31362__$1,temp__5804__auto__,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__31229,map__31229__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__31228,map__31228__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__31215,map__31215__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(cid,new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__31417 = cljs.core.next(seq__31362__$1);
var G__31418 = null;
var G__31419 = (0);
var G__31420 = (0);
seq__31362 = G__31417;
chunk__31363 = G__31418;
count__31364 = G__31419;
i__31365 = G__31420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.deref(drag_moved_QMARK_))){
} else {
if(cljs.core.truth_(e.shiftKey)){
tabletop.state.add_to_selection_BANG_(id);
} else {
tabletop.state.clear_selection_BANG_();
}
}

if(cljs.core.truth_(on_drag_end__$1)){
var G__31368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_x,final_y], null);
return (on_drag_end__$1.cljs$core$IFn$_invoke$arity$1 ? on_drag_end__$1.cljs$core$IFn$_invoke$arity$1(G__31368) : on_drag_end__$1.call(null,G__31368));
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (e){
e.stopPropagation();

return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"flip","flip",2033871302));
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id)){
} else {
tabletop.state.add_to_selection_BANG_(id);
}

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(card__$1));
})], null),((face_up_QMARK___$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center w-full h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg leading-none"], null),rank], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl leading-none",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5002__auto__ = suit_color;
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
})()], null)], null),suit], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full flex items-center justify-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),["repeating-linear-gradient(45deg,","#2563eb,#2563eb 2px,transparent 2px,transparent 8px)"].join('')], null)], null)], null)], null))], null);
});
});

//# sourceMappingURL=tabletop.components.card.js.map
