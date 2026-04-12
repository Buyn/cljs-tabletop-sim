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
tabletop.components.card.card = (function tabletop$components$card$card(p__33159){
var map__33161 = p__33159;
var map__33161__$1 = cljs.core.__destructure_map(map__33161);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33161__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33161__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_hand_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__33165){
var map__33167 = p__33165;
var map__33167__$1 = cljs.core.__destructure_map(map__33167);
var card__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33167__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33167__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var map__33170 = card__$1;
var map__33170__$1 = cljs.core.__destructure_map(map__33170);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var suit_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var face_up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
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

var rect_33288 = e.currentTarget.getBoundingClientRect();
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_33288.left) / zoom));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_33288.top) / zoom));

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
var dx_33301 = (e.clientX - cljs.core.deref(start_cx));
var dy_33302 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_33301 * dx_33301) + (dy_33302 * dy_33302))) > (4))){
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
var seq__33175 = cljs.core.seq(sel);
var chunk__33176 = null;
var count__33177 = (0);
var i__33178 = (0);
while(true){
if((i__33178 < count__33177)){
var sid = chunk__33176.cljs$core$IIndexed$_nth$arity$2(null,i__33178);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__33305 = seq__33175;
var G__33306 = chunk__33176;
var G__33307 = count__33177;
var G__33308 = (i__33178 + (1));
seq__33175 = G__33305;
chunk__33176 = G__33306;
count__33177 = G__33307;
i__33178 = G__33308;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33175);
if(temp__5804__auto__){
var seq__33175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33175__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33175__$1);
var G__33309 = cljs.core.chunk_rest(seq__33175__$1);
var G__33310 = c__5525__auto__;
var G__33311 = cljs.core.count(c__5525__auto__);
var G__33312 = (0);
seq__33175 = G__33309;
chunk__33176 = G__33310;
count__33177 = G__33311;
i__33178 = G__33312;
continue;
} else {
var sid = cljs.core.first(seq__33175__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__33313 = cljs.core.next(seq__33175__$1);
var G__33314 = null;
var G__33315 = (0);
var G__33316 = (0);
seq__33175 = G__33313;
chunk__33176 = G__33314;
count__33177 = G__33315;
i__33178 = G__33316;
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
var seq__33189 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__33191 = null;
var count__33192 = (0);
var i__33193 = (0);
while(true){
if((i__33193 < count__33192)){
var c = chunk__33191.cljs$core$IIndexed$_nth$arity$2(null,i__33193);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33317 = seq__33189;
var G__33318 = chunk__33191;
var G__33319 = count__33192;
var G__33320 = (i__33193 + (1));
seq__33189 = G__33317;
chunk__33191 = G__33318;
count__33192 = G__33319;
i__33193 = G__33320;
continue;
} else {
var G__33321 = seq__33189;
var G__33322 = chunk__33191;
var G__33323 = count__33192;
var G__33324 = (i__33193 + (1));
seq__33189 = G__33321;
chunk__33191 = G__33322;
count__33192 = G__33323;
i__33193 = G__33324;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33189);
if(temp__5804__auto__){
var seq__33189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33189__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33189__$1);
var G__33325 = cljs.core.chunk_rest(seq__33189__$1);
var G__33326 = c__5525__auto__;
var G__33327 = cljs.core.count(c__5525__auto__);
var G__33328 = (0);
seq__33189 = G__33325;
chunk__33191 = G__33326;
count__33192 = G__33327;
i__33193 = G__33328;
continue;
} else {
var c = cljs.core.first(seq__33189__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__33329 = cljs.core.next(seq__33189__$1);
var G__33330 = null;
var G__33331 = (0);
var G__33332 = (0);
seq__33189 = G__33329;
chunk__33191 = G__33330;
count__33192 = G__33331;
i__33193 = G__33332;
continue;
} else {
var G__33333 = cljs.core.next(seq__33189__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__33189 = G__33333;
chunk__33191 = G__33334;
count__33192 = G__33335;
i__33193 = G__33336;
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
var seq__33209 = cljs.core.seq(card_ids);
var chunk__33210 = null;
var count__33211 = (0);
var i__33212 = (0);
while(true){
if((i__33212 < count__33211)){
var cid = chunk__33210.cljs$core$IIndexed$_nth$arity$2(null,i__33212);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__33209,chunk__33210,count__33211,i__33212,cid,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__33170,map__33170__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__33167,map__33167__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__33161,map__33161__$1,card,on_drag_end){
return (function (p1__33154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33154_SHARP_),cid)){
return p1__33154_SHARP_;
} else {
return null;
}
});})(seq__33209,chunk__33210,count__33211,i__33212,cid,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__33170,map__33170__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__33167,map__33167__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__33161,map__33161__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(cid,new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__33340 = seq__33209;
var G__33341 = chunk__33210;
var G__33342 = count__33211;
var G__33343 = (i__33212 + (1));
seq__33209 = G__33340;
chunk__33210 = G__33341;
count__33211 = G__33342;
i__33212 = G__33343;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33209);
if(temp__5804__auto__){
var seq__33209__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33209__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33209__$1);
var G__33344 = cljs.core.chunk_rest(seq__33209__$1);
var G__33345 = c__5525__auto__;
var G__33346 = cljs.core.count(c__5525__auto__);
var G__33347 = (0);
seq__33209 = G__33344;
chunk__33210 = G__33345;
count__33211 = G__33346;
i__33212 = G__33347;
continue;
} else {
var cid = cljs.core.first(seq__33209__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__33209,chunk__33210,count__33211,i__33212,cid,seq__33209__$1,temp__5804__auto__,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__33170,map__33170__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__33167,map__33167__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__33161,map__33161__$1,card,on_drag_end){
return (function (p1__33154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33154_SHARP_),cid)){
return p1__33154_SHARP_;
} else {
return null;
}
});})(seq__33209,chunk__33210,count__33211,i__33212,cid,seq__33209__$1,temp__5804__auto__,target_deck,sel,card_ids,z,parent_rect,final_x,final_y,map__33170,map__33170__$1,x,suit,y,suit_color,face_color,text_color,rank,face_up_QMARK_,id,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,map__33167,map__33167__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,key_handler,map__33161,map__33161__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(cid,new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__33348 = cljs.core.next(seq__33209__$1);
var G__33349 = null;
var G__33350 = (0);
var G__33351 = (0);
seq__33209 = G__33348;
chunk__33210 = G__33349;
count__33211 = G__33350;
i__33212 = G__33351;
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
var G__33221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_x,final_y], null);
return (on_drag_end__$1.cljs$core$IFn$_invoke$arity$1 ? on_drag_end__$1.cljs$core$IFn$_invoke$arity$1(G__33221) : on_drag_end__$1.call(null,G__33221));
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
