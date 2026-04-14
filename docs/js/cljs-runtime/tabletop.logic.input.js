goog.provide('tabletop.logic.input');
if((typeof tabletop !== 'undefined') && (typeof tabletop.logic !== 'undefined') && (typeof tabletop.logic.input !== 'undefined') && (typeof tabletop.logic.input.last_mouse_pos !== 'undefined')){
} else {
tabletop.logic.input.last_mouse_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
tabletop.logic.input.input_focused_QMARK_ = (function tabletop$logic$input$input_focused_QMARK_(e){
var G__57175 = e.target.tagName;
var fexpr__57174 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null);
return (fexpr__57174.cljs$core$IFn$_invoke$arity$1 ? fexpr__57174.cljs$core$IFn$_invoke$arity$1(G__57175) : fexpr__57174.call(null,G__57175));
});
tabletop.logic.input.table_pos = (function tabletop$logic$input$table_pos(){
var vec__57176 = cljs.core.deref(tabletop.logic.input.last_mouse_pos);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57176,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57176,(1),null);
var map__57179 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__57179__$1 = cljs.core.__destructure_map(map__57179);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57179__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57179__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57179__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cx - pan_x) / zoom),((cy - pan_y) / zoom)], null);
});
tabletop.logic.input.target_ids = (function tabletop$logic$input$target_ids(){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.seq(sel)){
return cljs.core.vec(sel);
} else {
var vec__57181 = tabletop.logic.input.table_pos();
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57181,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57181,(1),null);
var temp__5804__auto__ = tabletop.state.component_at(tx,ty);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
}
});
tabletop.logic.input.unlocked_targets = (function tabletop$logic$input$unlocked_targets(){
var temp__5804__auto__ = tabletop.logic.input.target_ids();
if(cljs.core.truth_(temp__5804__auto__)){
var ids = temp__5804__auto__;
var comps = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.not(new cljs.core.Keyword(null,"locked?","locked?",995448757).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__57184_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57184_SHARP_),id)){
return p1__57184_SHARP_;
} else {
return null;
}
}),comps)));
}),ids));
} else {
return null;
}
});
tabletop.logic.input.component_type = (function tabletop$logic$input$component_type(id){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__57189_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57189_SHARP_),id)){
return p1__57189_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state))));
});
tabletop.logic.input.handle_key = (function tabletop$logic$input$handle_key(e){
if(cljs.core.truth_(tabletop.logic.input.input_focused_QMARK_(e))){
return null;
} else {
var k = e.key;
var act = tabletop.logic.keybindings.action_for(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"copy","copy",-1077617309))){
e.preventDefault();

var temp__5804__auto__ = tabletop.logic.input.target_ids();
if(cljs.core.truth_(temp__5804__auto__)){
var ids = temp__5804__auto__;
return tabletop.state.copy_objects_to_list_BANG_(ids);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"cut","cut",-1042666209))){
e.preventDefault();

var temp__5804__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(temp__5804__auto__)){
var ids = temp__5804__auto__;
tabletop.state.copy_objects_to_list_BANG_(ids);

var seq__57193 = cljs.core.seq(ids);
var chunk__57194 = null;
var count__57195 = (0);
var i__57196 = (0);
while(true){
if((i__57196 < count__57195)){
var id = chunk__57194.cljs$core$IIndexed$_nth$arity$2(null,i__57196);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57283 = seq__57193;
var G__57284 = chunk__57194;
var G__57285 = count__57195;
var G__57286 = (i__57196 + (1));
seq__57193 = G__57283;
chunk__57194 = G__57284;
count__57195 = G__57285;
i__57196 = G__57286;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__57193);
if(temp__5804__auto____$1){
var seq__57193__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__57193__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57193__$1);
var G__57287 = cljs.core.chunk_rest(seq__57193__$1);
var G__57288 = c__5525__auto__;
var G__57289 = cljs.core.count(c__5525__auto__);
var G__57290 = (0);
seq__57193 = G__57287;
chunk__57194 = G__57288;
count__57195 = G__57289;
i__57196 = G__57290;
continue;
} else {
var id = cljs.core.first(seq__57193__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57291 = cljs.core.next(seq__57193__$1);
var G__57292 = null;
var G__57293 = (0);
var G__57294 = (0);
seq__57193 = G__57291;
chunk__57194 = G__57292;
count__57195 = G__57293;
i__57196 = G__57294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"paste","paste",1975741548))){
e.preventDefault();

var vec__57197 = cljs.core.deref(tabletop.logic.input.last_mouse_pos);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57197,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57197,(1),null);
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)))){
return tabletop.state.paste_to_hand_BANG_();
} else {
var vec__57200 = tabletop.logic.input.table_pos();
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57200,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57200,(1),null);
return tabletop.state.paste_from_list_BANG_(tx,ty);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937))){
e.preventDefault();

var step = new cljs.core.Keyword(null,"rotation-step","rotation-step",-282249642).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tabletop.state.general_settings),(45));
var seq__57203 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57204 = null;
var count__57205 = (0);
var i__57206 = (0);
while(true){
if((i__57206 < count__57205)){
var id = chunk__57204.cljs$core$IIndexed$_nth$arity$2(null,i__57206);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"die","die",-547192252),tabletop.logic.input.component_type(id))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","decrement","die/decrement",-725512551),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","rotate","component/rotate",-683067716),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,step], 0));
}


var G__57301 = seq__57203;
var G__57302 = chunk__57204;
var G__57303 = count__57205;
var G__57304 = (i__57206 + (1));
seq__57203 = G__57301;
chunk__57204 = G__57302;
count__57205 = G__57303;
i__57206 = G__57304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57203);
if(temp__5804__auto__){
var seq__57203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57203__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57203__$1);
var G__57305 = cljs.core.chunk_rest(seq__57203__$1);
var G__57306 = c__5525__auto__;
var G__57307 = cljs.core.count(c__5525__auto__);
var G__57308 = (0);
seq__57203 = G__57305;
chunk__57204 = G__57306;
count__57205 = G__57307;
i__57206 = G__57308;
continue;
} else {
var id = cljs.core.first(seq__57203__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"die","die",-547192252),tabletop.logic.input.component_type(id))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","decrement","die/decrement",-725512551),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","rotate","component/rotate",-683067716),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,step], 0));
}


var G__57316 = cljs.core.next(seq__57203__$1);
var G__57317 = null;
var G__57318 = (0);
var G__57319 = (0);
seq__57203 = G__57316;
chunk__57204 = G__57317;
count__57205 = G__57318;
i__57206 = G__57319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263))){
e.preventDefault();

var step = new cljs.core.Keyword(null,"rotation-step","rotation-step",-282249642).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tabletop.state.general_settings),(45));
var seq__57209 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57210 = null;
var count__57211 = (0);
var i__57212 = (0);
while(true){
if((i__57212 < count__57211)){
var id = chunk__57210.cljs$core$IIndexed$_nth$arity$2(null,i__57212);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"die","die",-547192252),tabletop.logic.input.component_type(id))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","increment","die/increment",-1558995708),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","rotate","component/rotate",-683067716),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(- step)], 0));
}


var G__57322 = seq__57209;
var G__57323 = chunk__57210;
var G__57324 = count__57211;
var G__57325 = (i__57212 + (1));
seq__57209 = G__57322;
chunk__57210 = G__57323;
count__57211 = G__57324;
i__57212 = G__57325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57209);
if(temp__5804__auto__){
var seq__57209__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57209__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57209__$1);
var G__57326 = cljs.core.chunk_rest(seq__57209__$1);
var G__57327 = c__5525__auto__;
var G__57328 = cljs.core.count(c__5525__auto__);
var G__57329 = (0);
seq__57209 = G__57326;
chunk__57210 = G__57327;
count__57211 = G__57328;
i__57212 = G__57329;
continue;
} else {
var id = cljs.core.first(seq__57209__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"die","die",-547192252),tabletop.logic.input.component_type(id))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","increment","die/increment",-1558995708),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","rotate","component/rotate",-683067716),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(- step)], 0));
}


var G__57330 = cljs.core.next(seq__57209__$1);
var G__57331 = null;
var G__57332 = (0);
var G__57333 = (0);
seq__57209 = G__57330;
chunk__57210 = G__57331;
count__57211 = G__57332;
i__57212 = G__57333;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"flip","flip",2033871302))){
e.preventDefault();

var seq__57215 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57216 = null;
var count__57217 = (0);
var i__57218 = (0);
while(true){
if((i__57218 < count__57217)){
var id = chunk__57216.cljs$core$IIndexed$_nth$arity$2(null,i__57218);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","flip","card/flip",2037053110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57334 = seq__57215;
var G__57335 = chunk__57216;
var G__57336 = count__57217;
var G__57337 = (i__57218 + (1));
seq__57215 = G__57334;
chunk__57216 = G__57335;
count__57217 = G__57336;
i__57218 = G__57337;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57215);
if(temp__5804__auto__){
var seq__57215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57215__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57215__$1);
var G__57338 = cljs.core.chunk_rest(seq__57215__$1);
var G__57339 = c__5525__auto__;
var G__57340 = cljs.core.count(c__5525__auto__);
var G__57341 = (0);
seq__57215 = G__57338;
chunk__57216 = G__57339;
count__57217 = G__57340;
i__57218 = G__57341;
continue;
} else {
var id = cljs.core.first(seq__57215__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","flip","card/flip",2037053110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57347 = cljs.core.next(seq__57215__$1);
var G__57348 = null;
var G__57349 = (0);
var G__57350 = (0);
seq__57215 = G__57347;
chunk__57216 = G__57348;
count__57217 = G__57349;
i__57218 = G__57350;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"to-hand","to-hand",-2118444439))){
e.preventDefault();

var seq__57219 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57220 = null;
var count__57221 = (0);
var i__57222 = (0);
while(true){
if((i__57222 < count__57221)){
var id = chunk__57220.cljs$core$IIndexed$_nth$arity$2(null,i__57222);
tabletop.state.move_card_to_hand_BANG_(id);


var G__57360 = seq__57219;
var G__57361 = chunk__57220;
var G__57362 = count__57221;
var G__57363 = (i__57222 + (1));
seq__57219 = G__57360;
chunk__57220 = G__57361;
count__57221 = G__57362;
i__57222 = G__57363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57219);
if(temp__5804__auto__){
var seq__57219__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57219__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57219__$1);
var G__57364 = cljs.core.chunk_rest(seq__57219__$1);
var G__57365 = c__5525__auto__;
var G__57366 = cljs.core.count(c__5525__auto__);
var G__57367 = (0);
seq__57219 = G__57364;
chunk__57220 = G__57365;
count__57221 = G__57366;
i__57222 = G__57367;
continue;
} else {
var id = cljs.core.first(seq__57219__$1);
tabletop.state.move_card_to_hand_BANG_(id);


var G__57377 = cljs.core.next(seq__57219__$1);
var G__57378 = null;
var G__57379 = (0);
var G__57380 = (0);
seq__57219 = G__57377;
chunk__57220 = G__57378;
count__57221 = G__57379;
i__57222 = G__57380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"roll-shuffle","roll-shuffle",-609911199))){
e.preventDefault();

var seq__57225 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57226 = null;
var count__57227 = (0);
var i__57228 = (0);
while(true){
if((i__57228 < count__57227)){
var id = chunk__57226.cljs$core$IIndexed$_nth$arity$2(null,i__57228);
var G__57234_57381 = tabletop.logic.input.component_type(id);
var G__57234_57382__$1 = (((G__57234_57381 instanceof cljs.core.Keyword))?G__57234_57381.fqn:null);
switch (G__57234_57382__$1) {
case "die":
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","roll","die/roll",11366199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

break;
case "deck":
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","shuffle","deck/shuffle",1255056549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

break;
default:

}


var G__57384 = seq__57225;
var G__57385 = chunk__57226;
var G__57386 = count__57227;
var G__57387 = (i__57228 + (1));
seq__57225 = G__57384;
chunk__57226 = G__57385;
count__57227 = G__57386;
i__57228 = G__57387;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57225);
if(temp__5804__auto__){
var seq__57225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57225__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57225__$1);
var G__57388 = cljs.core.chunk_rest(seq__57225__$1);
var G__57389 = c__5525__auto__;
var G__57390 = cljs.core.count(c__5525__auto__);
var G__57391 = (0);
seq__57225 = G__57388;
chunk__57226 = G__57389;
count__57227 = G__57390;
i__57228 = G__57391;
continue;
} else {
var id = cljs.core.first(seq__57225__$1);
var G__57235_57392 = tabletop.logic.input.component_type(id);
var G__57235_57393__$1 = (((G__57235_57392 instanceof cljs.core.Keyword))?G__57235_57392.fqn:null);
switch (G__57235_57393__$1) {
case "die":
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","roll","die/roll",11366199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

break;
case "deck":
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","shuffle","deck/shuffle",1255056549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

break;
default:

}


var G__57402 = cljs.core.next(seq__57225__$1);
var G__57403 = null;
var G__57404 = (0);
var G__57405 = (0);
seq__57225 = G__57402;
chunk__57226 = G__57403;
count__57227 = G__57404;
i__57228 = G__57405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"lock","lock",-488188066))){
e.preventDefault();

var seq__57236 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.target_ids();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57237 = null;
var count__57238 = (0);
var i__57239 = (0);
while(true){
if((i__57239 < count__57238)){
var id = chunk__57237.cljs$core$IIndexed$_nth$arity$2(null,i__57239);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","lock","component/lock",930559067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57406 = seq__57236;
var G__57407 = chunk__57237;
var G__57408 = count__57238;
var G__57409 = (i__57239 + (1));
seq__57236 = G__57406;
chunk__57237 = G__57407;
count__57238 = G__57408;
i__57239 = G__57409;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57236);
if(temp__5804__auto__){
var seq__57236__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57236__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57236__$1);
var G__57410 = cljs.core.chunk_rest(seq__57236__$1);
var G__57411 = c__5525__auto__;
var G__57412 = cljs.core.count(c__5525__auto__);
var G__57413 = (0);
seq__57236 = G__57410;
chunk__57237 = G__57411;
count__57238 = G__57412;
i__57239 = G__57413;
continue;
} else {
var id = cljs.core.first(seq__57236__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","lock","component/lock",930559067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57414 = cljs.core.next(seq__57236__$1);
var G__57415 = null;
var G__57416 = (0);
var G__57417 = (0);
seq__57236 = G__57414;
chunk__57237 = G__57415;
count__57238 = G__57416;
i__57239 = G__57417;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"group","group",582596132))){
e.preventDefault();

return tabletop.state.group_selection_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"scale-up","scale-up",827332505))){
e.preventDefault();

var seq__57241 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57242 = null;
var count__57243 = (0);
var i__57244 = (0);
while(true){
if((i__57244 < count__57243)){
var id = chunk__57242.cljs$core$IIndexed$_nth$arity$2(null,i__57244);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","scale-up","component/scale-up",-459199842),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57418 = seq__57241;
var G__57419 = chunk__57242;
var G__57420 = count__57243;
var G__57421 = (i__57244 + (1));
seq__57241 = G__57418;
chunk__57242 = G__57419;
count__57243 = G__57420;
i__57244 = G__57421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57241);
if(temp__5804__auto__){
var seq__57241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57241__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57241__$1);
var G__57422 = cljs.core.chunk_rest(seq__57241__$1);
var G__57423 = c__5525__auto__;
var G__57424 = cljs.core.count(c__5525__auto__);
var G__57425 = (0);
seq__57241 = G__57422;
chunk__57242 = G__57423;
count__57243 = G__57424;
i__57244 = G__57425;
continue;
} else {
var id = cljs.core.first(seq__57241__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","scale-up","component/scale-up",-459199842),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57426 = cljs.core.next(seq__57241__$1);
var G__57427 = null;
var G__57428 = (0);
var G__57429 = (0);
seq__57241 = G__57426;
chunk__57242 = G__57427;
count__57243 = G__57428;
i__57244 = G__57429;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"scale-down","scale-down",-900427832))){
e.preventDefault();

var seq__57245 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57246 = null;
var count__57247 = (0);
var i__57248 = (0);
while(true){
if((i__57248 < count__57247)){
var id = chunk__57246.cljs$core$IIndexed$_nth$arity$2(null,i__57248);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","scale-down","component/scale-down",-557551941),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57433 = seq__57245;
var G__57434 = chunk__57246;
var G__57435 = count__57247;
var G__57436 = (i__57248 + (1));
seq__57245 = G__57433;
chunk__57246 = G__57434;
count__57247 = G__57435;
i__57248 = G__57436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57245);
if(temp__5804__auto__){
var seq__57245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57245__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57245__$1);
var G__57440 = cljs.core.chunk_rest(seq__57245__$1);
var G__57441 = c__5525__auto__;
var G__57442 = cljs.core.count(c__5525__auto__);
var G__57443 = (0);
seq__57245 = G__57440;
chunk__57246 = G__57441;
count__57247 = G__57442;
i__57248 = G__57443;
continue;
} else {
var id = cljs.core.first(seq__57245__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","scale-down","component/scale-down",-557551941),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57444 = cljs.core.next(seq__57245__$1);
var G__57445 = null;
var G__57446 = (0);
var G__57447 = (0);
seq__57245 = G__57444;
chunk__57246 = G__57445;
count__57247 = G__57446;
i__57248 = G__57447;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"bring-to-front","bring-to-front",663160304))){
e.preventDefault();

var seq__57256 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.target_ids();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57257 = null;
var count__57258 = (0);
var i__57259 = (0);
while(true){
if((i__57259 < count__57258)){
var id = chunk__57257.cljs$core$IIndexed$_nth$arity$2(null,i__57259);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","bring-to-front","component/bring-to-front",2081432307),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57448 = seq__57256;
var G__57449 = chunk__57257;
var G__57450 = count__57258;
var G__57451 = (i__57259 + (1));
seq__57256 = G__57448;
chunk__57257 = G__57449;
count__57258 = G__57450;
i__57259 = G__57451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57256);
if(temp__5804__auto__){
var seq__57256__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57256__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57256__$1);
var G__57455 = cljs.core.chunk_rest(seq__57256__$1);
var G__57456 = c__5525__auto__;
var G__57457 = cljs.core.count(c__5525__auto__);
var G__57458 = (0);
seq__57256 = G__57455;
chunk__57257 = G__57456;
count__57258 = G__57457;
i__57259 = G__57458;
continue;
} else {
var id = cljs.core.first(seq__57256__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","bring-to-front","component/bring-to-front",2081432307),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57459 = cljs.core.next(seq__57256__$1);
var G__57460 = null;
var G__57461 = (0);
var G__57462 = (0);
seq__57256 = G__57459;
chunk__57257 = G__57460;
count__57258 = G__57461;
i__57259 = G__57462;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"send-to-back","send-to-back",-1507083770))){
e.preventDefault();

var seq__57260 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.target_ids();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57261 = null;
var count__57262 = (0);
var i__57263 = (0);
while(true){
if((i__57263 < count__57262)){
var id = chunk__57261.cljs$core$IIndexed$_nth$arity$2(null,i__57263);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","send-to-back","component/send-to-back",-155279613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57463 = seq__57260;
var G__57464 = chunk__57261;
var G__57465 = count__57262;
var G__57466 = (i__57263 + (1));
seq__57260 = G__57463;
chunk__57261 = G__57464;
count__57262 = G__57465;
i__57263 = G__57466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57260);
if(temp__5804__auto__){
var seq__57260__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57260__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57260__$1);
var G__57467 = cljs.core.chunk_rest(seq__57260__$1);
var G__57468 = c__5525__auto__;
var G__57469 = cljs.core.count(c__5525__auto__);
var G__57470 = (0);
seq__57260 = G__57467;
chunk__57261 = G__57468;
count__57262 = G__57469;
i__57263 = G__57470;
continue;
} else {
var id = cljs.core.first(seq__57260__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","send-to-back","component/send-to-back",-155279613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57471 = cljs.core.next(seq__57260__$1);
var G__57472 = null;
var G__57473 = (0);
var G__57474 = (0);
seq__57260 = G__57471;
chunk__57261 = G__57472;
count__57262 = G__57473;
i__57263 = G__57474;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"delete","delete",-1768633620))){
e.preventDefault();

var seq__57264 = cljs.core.seq((function (){var or__5002__auto__ = tabletop.logic.input.unlocked_targets();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__57265 = null;
var count__57266 = (0);
var i__57267 = (0);
while(true){
if((i__57267 < count__57266)){
var id = chunk__57265.cljs$core$IIndexed$_nth$arity$2(null,i__57267);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57475 = seq__57264;
var G__57476 = chunk__57265;
var G__57477 = count__57266;
var G__57478 = (i__57267 + (1));
seq__57264 = G__57475;
chunk__57265 = G__57476;
count__57266 = G__57477;
i__57267 = G__57478;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57264);
if(temp__5804__auto__){
var seq__57264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57264__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57264__$1);
var G__57479 = cljs.core.chunk_rest(seq__57264__$1);
var G__57480 = c__5525__auto__;
var G__57481 = cljs.core.count(c__5525__auto__);
var G__57482 = (0);
seq__57264 = G__57479;
chunk__57265 = G__57480;
count__57266 = G__57481;
i__57267 = G__57482;
continue;
} else {
var id = cljs.core.first(seq__57264__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));


var G__57483 = cljs.core.next(seq__57264__$1);
var G__57484 = null;
var G__57485 = (0);
var G__57486 = (0);
seq__57264 = G__57483;
chunk__57265 = G__57484;
count__57266 = G__57485;
i__57267 = G__57486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(act,new cljs.core.Keyword(null,"properties","properties",685819552))){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-properties?","show-properties?",1469925954),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"properties-text","properties-text",-1386231690),null], 0));
} else {
if(cljs.core.truth_(cljs.core.re_matches(/[0-9]/,k))){
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"0"))?(10):parseInt(k,(10)));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",791601933),(n - (1))], null)))){
e.preventDefault();

var vec__57268 = tabletop.logic.input.table_pos();
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57268,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57268,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (s){
var card = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",791601933),(n - (1))], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"hand","hand",791601933),(function (p1__57191_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),p1__57191_SHARP_),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,p1__57191_SHARP_)));
})),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"x","x",2099068185),tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),ty], 0)));
}));
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
if((typeof tabletop !== 'undefined') && (typeof tabletop.logic !== 'undefined') && (typeof tabletop.logic.input !== 'undefined') && (typeof tabletop.logic.input._installed !== 'undefined')){
} else {
tabletop.logic.input._installed = (function (){
document.addEventListener("mousemove",(function (e){
return cljs.core.reset_BANG_(tabletop.logic.input.last_mouse_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
}));

document.addEventListener("keydown",tabletop.logic.input.handle_key);

return true;
})()
;
}

//# sourceMappingURL=tabletop.logic.input.js.map
