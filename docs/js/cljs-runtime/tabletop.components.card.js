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
tabletop.components.card.card = (function tabletop$components$card$card(p__56920){
var map__56921 = p__56920;
var map__56921__$1 = cljs.core.__destructure_map(map__56921);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_hand_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__56931){
var map__56932 = p__56931;
var map__56932__$1 = cljs.core.__destructure_map(map__56932);
var card__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var on_drag_end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var map__56933 = card__$1;
var map__56933__$1 = cljs.core.__destructure_map(map__56933);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var suit_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var face_up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
var face_up_QMARK___$1 = cljs.core.boolean$(face_up_QMARK_);
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
var transform = [(cljs.core.truth_(rotation)?["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation),"deg) "].join(''):null),(cljs.core.truth_((function (){var and__5000__auto__ = scale;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(scale,1.0);
} else {
return and__5000__auto__;
}
})())?["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),")"].join(''):null)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded-lg border shadow-md ","w-[70px] h-[100px] flex items-center justify-center ","text-sm font-bold overflow-hidden",(cljs.core.truth_(locked_QMARK_)?" cursor-not-allowed opacity-80":" cursor-grab"),((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),((face_up_QMARK___$1)?(function (){var or__5002__auto__ = face_color;
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
})():"transparent"),new cljs.core.Keyword(null,"transform","transform",1381301764),[(cljs.core.truth_(cljs.core.deref(over_hand_QMARK_))?"scale(0.33) ":null),transform].join(''),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center center"], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))) && (cljs.core.not(locked_QMARK_)))){
e.stopPropagation();

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

cljs.core.reset_BANG_(start_cx,e.clientX);

cljs.core.reset_BANG_(start_cy,e.clientY);

var map__56954_57094 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56954_57095__$1 = cljs.core.__destructure_map(map__56954_57094);
var pan_x_57096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954_57095__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y_57097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954_57095__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom_57098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954_57095__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
cljs.core.reset_BANG_(offset_x,(((e.clientX - pan_x_57096) / zoom_57098__$1) - x));

cljs.core.reset_BANG_(offset_y,(((e.clientY - pan_y_57097) / zoom_57098__$1) - y));

cljs.core.reset_BANG_(dragging_QMARK_,true);

return e.currentTarget.setPointerCapture(e.pointerId);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx_57099 = (e.clientX - cljs.core.deref(start_cx));
var dy_57100 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_57099 * dx_57099) + (dy_57100 * dy_57100))) > (4))){
cljs.core.reset_BANG_(drag_moved_QMARK_,true);
} else {
}

var map__56965 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56965__$1 = cljs.core.__destructure_map(map__56965);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var new_x = (((e.clientX - pan_x) / zoom__$1) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - pan_y) / zoom__$1) - cljs.core.deref(offset_y));
var card_bottom = (e.clientY + (((100) - (cljs.core.deref(offset_y) * zoom__$1)) * zoom__$1));
var in_hand_QMARK_ = tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,card_bottom], null));
cljs.core.reset_BANG_(over_hand_QMARK_,in_hand_QMARK_);

if(cljs.core.truth_(in_hand_QMARK_)){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.contains_QMARK_(sel,id)){
var seq__56966 = cljs.core.seq(sel);
var chunk__56967 = null;
var count__56968 = (0);
var i__56969 = (0);
while(true){
if((i__56969 < count__56968)){
var sid = chunk__56967.cljs$core$IIndexed$_nth$arity$2(null,i__56969);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__57103 = seq__56966;
var G__57104 = chunk__56967;
var G__57105 = count__56968;
var G__57106 = (i__56969 + (1));
seq__56966 = G__57103;
chunk__56967 = G__57104;
count__56968 = G__57105;
i__56969 = G__57106;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56966);
if(temp__5804__auto__){
var seq__56966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56966__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56966__$1);
var G__57110 = cljs.core.chunk_rest(seq__56966__$1);
var G__57111 = c__5525__auto__;
var G__57112 = cljs.core.count(c__5525__auto__);
var G__57113 = (0);
seq__56966 = G__57110;
chunk__56967 = G__57111;
count__56968 = G__57112;
i__56969 = G__57113;
continue;
} else {
var sid = cljs.core.first(seq__56966__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__57114 = cljs.core.next(seq__56966__$1);
var G__57115 = null;
var G__57116 = (0);
var G__57117 = (0);
seq__56966 = G__57114;
chunk__56967 = G__57115;
count__56968 = G__57116;
i__56969 = G__57117;
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
var seq__56973 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__56975 = null;
var count__56976 = (0);
var i__56977 = (0);
while(true){
if((i__56977 < count__56976)){
var c = chunk__56975.cljs$core$IIndexed$_nth$arity$2(null,i__56977);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57118 = seq__56973;
var G__57119 = chunk__56975;
var G__57120 = count__56976;
var G__57121 = (i__56977 + (1));
seq__56973 = G__57118;
chunk__56975 = G__57119;
count__56976 = G__57120;
i__56977 = G__57121;
continue;
} else {
var G__57123 = seq__56973;
var G__57124 = chunk__56975;
var G__57125 = count__56976;
var G__57126 = (i__56977 + (1));
seq__56973 = G__57123;
chunk__56975 = G__57124;
count__56976 = G__57125;
i__56977 = G__57126;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56973);
if(temp__5804__auto__){
var seq__56973__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56973__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56973__$1);
var G__57127 = cljs.core.chunk_rest(seq__56973__$1);
var G__57128 = c__5525__auto__;
var G__57129 = cljs.core.count(c__5525__auto__);
var G__57130 = (0);
seq__56973 = G__57127;
chunk__56975 = G__57128;
count__56976 = G__57129;
i__56977 = G__57130;
continue;
} else {
var c = cljs.core.first(seq__56973__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57131 = cljs.core.next(seq__56973__$1);
var G__57132 = null;
var G__57133 = (0);
var G__57134 = (0);
seq__56973 = G__57131;
chunk__56975 = G__57132;
count__56976 = G__57133;
i__56977 = G__57134;
continue;
} else {
var G__57135 = cljs.core.next(seq__56973__$1);
var G__57136 = null;
var G__57137 = (0);
var G__57138 = (0);
seq__56973 = G__57135;
chunk__56975 = G__57136;
count__56976 = G__57137;
i__56977 = G__57138;
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
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(over_hand_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

var map__56993 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56993__$1 = cljs.core.__destructure_map(map__56993);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56993__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56993__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56993__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var final_x = (((e.clientX - pan_x) / zoom__$1) - cljs.core.deref(offset_x));
var final_y = (((e.clientY - pan_y) / zoom__$1) - cljs.core.deref(offset_y));
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
var seq__57006 = cljs.core.seq(card_ids);
var chunk__57007 = null;
var count__57008 = (0);
var i__57009 = (0);
while(true){
if((i__57009 < count__57008)){
var cid = chunk__57007.cljs$core$IIndexed$_nth$arity$2(null,i__57009);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__57006,chunk__57007,count__57008,i__57009,cid,target_deck,sel,card_ids,map__56993,map__56993__$1,pan_x,pan_y,zoom__$1,final_x,final_y,map__56933,map__56933__$1,x,suit,y,rotation,scale,suit_color,face_color,text_color,rank,face_up_QMARK_,id,locked_QMARK_,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,transform,map__56932,map__56932__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,map__56921,map__56921__$1,card,on_drag_end){
return (function (p1__56913_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56913_SHARP_),cid)){
return p1__56913_SHARP_;
} else {
return null;
}
});})(seq__57006,chunk__57007,count__57008,i__57009,cid,target_deck,sel,card_ids,map__56993,map__56993__$1,pan_x,pan_y,zoom__$1,final_x,final_y,map__56933,map__56933__$1,x,suit,y,rotation,scale,suit_color,face_color,text_color,rank,face_up_QMARK_,id,locked_QMARK_,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,transform,map__56932,map__56932__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,map__56921,map__56921__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","drop-on-deck","card/drop-on-deck",192135585),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__57139 = seq__57006;
var G__57140 = chunk__57007;
var G__57141 = count__57008;
var G__57142 = (i__57009 + (1));
seq__57006 = G__57139;
chunk__57007 = G__57140;
count__57008 = G__57141;
i__57009 = G__57142;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57006);
if(temp__5804__auto__){
var seq__57006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57006__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__57006__$1);
var G__57143 = cljs.core.chunk_rest(seq__57006__$1);
var G__57144 = c__5525__auto__;
var G__57145 = cljs.core.count(c__5525__auto__);
var G__57146 = (0);
seq__57006 = G__57143;
chunk__57007 = G__57144;
count__57008 = G__57145;
i__57009 = G__57146;
continue;
} else {
var cid = cljs.core.first(seq__57006__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some(((function (seq__57006,chunk__57007,count__57008,i__57009,cid,seq__57006__$1,temp__5804__auto__,target_deck,sel,card_ids,map__56993,map__56993__$1,pan_x,pan_y,zoom__$1,final_x,final_y,map__56933,map__56933__$1,x,suit,y,rotation,scale,suit_color,face_color,text_color,rank,face_up_QMARK_,id,locked_QMARK_,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,transform,map__56932,map__56932__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,map__56921,map__56921__$1,card,on_drag_end){
return (function (p1__56913_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56913_SHARP_),cid)){
return p1__56913_SHARP_;
} else {
return null;
}
});})(seq__57006,chunk__57007,count__57008,i__57009,cid,seq__57006__$1,temp__5804__auto__,target_deck,sel,card_ids,map__56993,map__56993__$1,pan_x,pan_y,zoom__$1,final_x,final_y,map__56933,map__56933__$1,x,suit,y,rotation,scale,suit_color,face_color,text_color,rank,face_up_QMARK_,id,locked_QMARK_,back_color,face_up_QMARK___$1,zoom,selected_QMARK_,transform,map__56932,map__56932__$1,card__$1,on_drag_end__$1,dragging_QMARK_,over_hand_QMARK_,offset_x,offset_y,drag_moved_QMARK_,start_cx,start_cy,map__56921,map__56921__$1,card,on_drag_end))
,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","drop-on-deck","card/drop-on-deck",192135585),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_deck)], 0));
} else {
}


var G__57147 = cljs.core.next(seq__57006__$1);
var G__57148 = null;
var G__57149 = (0);
var G__57150 = (0);
seq__57006 = G__57147;
chunk__57007 = G__57148;
count__57008 = G__57149;
i__57009 = G__57150;
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
var G__57035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_x,final_y], null);
return (on_drag_end__$1.cljs$core$IFn$_invoke$arity$1 ? on_drag_end__$1.cljs$core$IFn$_invoke$arity$1(G__57035) : on_drag_end__$1.call(null,G__57035));
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (e){
e.stopPropagation();

return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","apply","selection/apply",-924111031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("card","flip","card/flip",2037053110),id], 0));
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
