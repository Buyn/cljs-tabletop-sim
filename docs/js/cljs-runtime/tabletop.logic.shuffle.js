goog.provide('tabletop.logic.shuffle');
/**
 * Returns a new vector with the elements of v shuffled using the Fisher-Yates algorithm.
 */
tabletop.logic.shuffle.shuffle_vec = (function tabletop$logic$shuffle$shuffle_vec(v){
var arr = cljs.core.to_array(v);
var n = ((arr).length);
var i_23593 = (n - (1));
while(true){
if((i_23593 > (0))){
var j_23594 = Math.floor((Math.random() * (i_23593 + (1))));
var tmp_23595 = (arr[i_23593]);
(arr[i_23593] = (arr[j_23594]));

(arr[j_23594] = tmp_23595);

var G__23596 = (i_23593 - (1));
i_23593 = G__23596;
continue;
} else {
}
break;
}

return cljs.core.vec(arr);
});
tabletop.logic.shuffle.standard_suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2660",new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2665",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2666",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2663",new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null)], null);
tabletop.logic.shuffle.standard_ranks = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","2","3","4","5","6","7","8","9","10","J","Q","K"], null);
tabletop.logic.shuffle.make_standard_deck = (function tabletop$logic$shuffle$make_standard_deck(){
return tabletop.logic.shuffle.shuffle_vec(cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$logic$shuffle$make_standard_deck_$_iter__23575(s__23576){
return (new cljs.core.LazySeq(null,(function (){
var s__23576__$1 = s__23576;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23576__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23583 = cljs.core.first(xs__6360__auto__);
var map__23583__$1 = cljs.core.__destructure_map(map__23583);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var iterys__5476__auto__ = ((function (s__23576__$1,map__23583,map__23583__$1,label,color,xs__6360__auto__,temp__5804__auto__){
return (function tabletop$logic$shuffle$make_standard_deck_$_iter__23575_$_iter__23577(s__23578){
return (new cljs.core.LazySeq(null,((function (s__23576__$1,map__23583,map__23583__$1,label,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__23578__$1 = s__23578;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23578__$1);
if(temp__5804__auto____$1){
var s__23578__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23578__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23578__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23580 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23579 = (0);
while(true){
if((i__23579 < size__5479__auto__)){
var rank = cljs.core._nth(c__5478__auto__,i__23579);
cljs.core.chunk_append(b__23580,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"suit","suit",-869827520),label,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960),color,new cljs.core.Keyword(null,"rank","rank",-1706728502),rank,new cljs.core.Keyword(null,"face-color","face-color",-919913463),"#ffffff",new cljs.core.Keyword(null,"back-color","back-color",-672417547),"#1e3a5f",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"#111111",new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),false], null));

var G__23597 = (i__23579 + (1));
i__23579 = G__23597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23580),tabletop$logic$shuffle$make_standard_deck_$_iter__23575_$_iter__23577(cljs.core.chunk_rest(s__23578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23580),null);
}
} else {
var rank = cljs.core.first(s__23578__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"suit","suit",-869827520),label,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960),color,new cljs.core.Keyword(null,"rank","rank",-1706728502),rank,new cljs.core.Keyword(null,"face-color","face-color",-919913463),"#ffffff",new cljs.core.Keyword(null,"back-color","back-color",-672417547),"#1e3a5f",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"#111111",new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),false], null),tabletop$logic$shuffle$make_standard_deck_$_iter__23575_$_iter__23577(cljs.core.rest(s__23578__$2)));
}
} else {
return null;
}
break;
}
});})(s__23576__$1,map__23583,map__23583__$1,label,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__23576__$1,map__23583,map__23583__$1,label,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(tabletop.logic.shuffle.standard_ranks));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tabletop$logic$shuffle$make_standard_deck_$_iter__23575(cljs.core.rest(s__23576__$1)));
} else {
var G__23598 = cljs.core.rest(s__23576__$1);
s__23576__$1 = G__23598;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabletop.logic.shuffle.standard_suits);
})()));
});
/**
 * Fills a ranks vector to total-count. Existing entries kept; gaps filled with incrementing numbers.
 */
tabletop.logic.shuffle.auto_fill_ranks = (function tabletop$logic$shuffle$auto_fill_ranks(ranks,total_count){
var n = cljs.core.count(ranks);
if((n >= total_count)){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(total_count,ranks));
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ranks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2((n + (1)),((n + (1)) + (total_count - n))))));
}
});
/**
 * Builds a shuffled deck from config:
 * {:suits [{:label :color} ...] :ranks [...] :total-count n
 *  :face-color :back-color :text-color}
 */
tabletop.logic.shuffle.make_custom_deck = (function tabletop$logic$shuffle$make_custom_deck(p__23584){
var map__23585 = p__23584;
var map__23585__$1 = cljs.core.__destructure_map(map__23585);
var suits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"suits","suits",-426777515));
var ranks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"ranks","ranks",-1802584866));
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"total-count","total-count",-1999441386));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var filled_ranks = tabletop.logic.shuffle.auto_fill_ranks(ranks,total_count);
return tabletop.logic.shuffle.shuffle_vec(cljs.core.vec((function (){var iter__5480__auto__ = (function tabletop$logic$shuffle$make_custom_deck_$_iter__23586(s__23587){
return (new cljs.core.LazySeq(null,(function (){
var s__23587__$1 = s__23587;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23587__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23592 = cljs.core.first(xs__6360__auto__);
var map__23592__$1 = cljs.core.__destructure_map(map__23592);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var iterys__5476__auto__ = ((function (s__23587__$1,map__23592,map__23592__$1,label,color,xs__6360__auto__,temp__5804__auto__,filled_ranks,map__23585,map__23585__$1,suits,ranks,total_count,face_color,back_color,text_color){
return (function tabletop$logic$shuffle$make_custom_deck_$_iter__23586_$_iter__23588(s__23589){
return (new cljs.core.LazySeq(null,((function (s__23587__$1,map__23592,map__23592__$1,label,color,xs__6360__auto__,temp__5804__auto__,filled_ranks,map__23585,map__23585__$1,suits,ranks,total_count,face_color,back_color,text_color){
return (function (){
var s__23589__$1 = s__23589;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23589__$1);
if(temp__5804__auto____$1){
var s__23589__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23589__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23589__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23591 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23590 = (0);
while(true){
if((i__23590 < size__5479__auto__)){
var rank = cljs.core._nth(c__5478__auto__,i__23590);
cljs.core.chunk_append(b__23591,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"suit","suit",-869827520),label,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960),color,new cljs.core.Keyword(null,"rank","rank",-1706728502),rank,new cljs.core.Keyword(null,"face-color","face-color",-919913463),face_color,new cljs.core.Keyword(null,"back-color","back-color",-672417547),back_color,new cljs.core.Keyword(null,"text-color","text-color",1728708298),text_color,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),false], null));

var G__23599 = (i__23590 + (1));
i__23590 = G__23599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23591),tabletop$logic$shuffle$make_custom_deck_$_iter__23586_$_iter__23588(cljs.core.chunk_rest(s__23589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23591),null);
}
} else {
var rank = cljs.core.first(s__23589__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"suit","suit",-869827520),label,new cljs.core.Keyword(null,"suit-color","suit-color",1331901960),color,new cljs.core.Keyword(null,"rank","rank",-1706728502),rank,new cljs.core.Keyword(null,"face-color","face-color",-919913463),face_color,new cljs.core.Keyword(null,"back-color","back-color",-672417547),back_color,new cljs.core.Keyword(null,"text-color","text-color",1728708298),text_color,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),false], null),tabletop$logic$shuffle$make_custom_deck_$_iter__23586_$_iter__23588(cljs.core.rest(s__23589__$2)));
}
} else {
return null;
}
break;
}
});})(s__23587__$1,map__23592,map__23592__$1,label,color,xs__6360__auto__,temp__5804__auto__,filled_ranks,map__23585,map__23585__$1,suits,ranks,total_count,face_color,back_color,text_color))
,null,null));
});})(s__23587__$1,map__23592,map__23592__$1,label,color,xs__6360__auto__,temp__5804__auto__,filled_ranks,map__23585,map__23585__$1,suits,ranks,total_count,face_color,back_color,text_color))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(filled_ranks));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tabletop$logic$shuffle$make_custom_deck_$_iter__23586(cljs.core.rest(s__23587__$1)));
} else {
var G__23601 = cljs.core.rest(s__23587__$1);
s__23587__$1 = G__23601;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(suits);
})()));
});

//# sourceMappingURL=tabletop.logic.shuffle.js.map
