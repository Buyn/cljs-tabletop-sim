goog.provide('tabletop.components.deck_customizer');
tabletop.components.deck_customizer.default_suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2660",new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2665",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2666",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u2663",new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null)], null);
tabletop.components.deck_customizer.default_ranks = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","2","3","4","5","6","7","8","9","10","J","Q","K"], null);
tabletop.components.deck_customizer.palette = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#fef08a","#bbf7d0","#bfdbfe","#fecaca","#e9d5ff","#fed7aa","#f5f5f4","#1e293b"], null);
tabletop.components.deck_customizer.color_picker = (function tabletop$components$deck_customizer$color_picker(selected,on_pick){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-1","div.flex.flex-wrap.gap-1",1063862912),(function (){var iter__5480__auto__ = (function tabletop$components$deck_customizer$color_picker_$_iter__56806(s__56807){
return (new cljs.core.LazySeq(null,(function (){
var s__56807__$1 = s__56807;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56807__$1);
if(temp__5804__auto__){
var s__56807__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56807__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__56807__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__56809 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__56808 = (0);
while(true){
if((i__56808 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__56808);
cljs.core.chunk_append(b__56809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-6.h-6.rounded-full.border-2.transition-all","button.w-6.h-6.rounded-full.border-2.transition-all",1073965035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,selected))?"#3b82f6":"#d1d5db")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56808,c,c__5478__auto__,size__5479__auto__,b__56809,s__56807__$2,temp__5804__auto__){
return (function (){
return (on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(c) : on_pick.call(null,c));
});})(i__56808,c,c__5478__auto__,size__5479__auto__,b__56809,s__56807__$2,temp__5804__auto__))
], null)], null));

var G__56971 = (i__56808 + (1));
i__56808 = G__56971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56809),tabletop$components$deck_customizer$color_picker_$_iter__56806(cljs.core.chunk_rest(s__56807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56809),null);
}
} else {
var c = cljs.core.first(s__56807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-6.h-6.rounded-full.border-2.transition-all","button.w-6.h-6.rounded-full.border-2.transition-all",1073965035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,selected))?"#3b82f6":"#d1d5db")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__56807__$2,temp__5804__auto__){
return (function (){
return (on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(c) : on_pick.call(null,c));
});})(c,s__56807__$2,temp__5804__auto__))
], null)], null),tabletop$components$deck_customizer$color_picker_$_iter__56806(cljs.core.rest(s__56807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabletop.components.deck_customizer.palette);
})()], null);
});
tabletop.components.deck_customizer.deck_customizer = (function tabletop$components$deck_customizer$deck_customizer(p__56855){
var map__56856 = p__56855;
var map__56856__$1 = cljs.core.__destructure_map(map__56856);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suits","suits",-426777515),cljs.core.vec(tabletop.components.deck_customizer.default_suits),new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.vec(tabletop.components.deck_customizer.default_ranks),new cljs.core.Keyword(null,"total-count","total-count",-1999441386),(13),new cljs.core.Keyword(null,"face-color","face-color",-919913463),"#ffffff",new cljs.core.Keyword(null,"back-color","back-color",-672417547),"#1e3a5f",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"#111111"], null));
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__56858){
var map__56859 = p__56858;
var map__56859__$1 = cljs.core.__destructure_map(map__56859);
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__56863 = cljs.core.deref(form);
var map__56863__$1 = cljs.core.__destructure_map(map__56863);
var suits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"suits","suits",-426777515));
var ranks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"ranks","ranks",-1802584866));
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"total-count","total-count",-1999441386));
var face_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"face-color","face-color",-919913463));
var back_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"back-color","back-color",-672417547));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var map__56864 = (function (){var or__5002__auto__ = cljs.core.deref(errors);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__56864__$1 = cljs.core.__destructure_map(map__56864);
var suit_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56864__$1,new cljs.core.Keyword(null,"suit-errors","suit-errors",-1927910250));
var rank_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56864__$1,new cljs.core.Keyword(null,"rank-errors","rank-errors",1753146222));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-0.flex.items-center.justify-center.z-50","div.fixed.inset-0.flex.items-center.justify-center.z-50",-1902175422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.5)"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.rounded-lg.shadow-xl.w-full.max-w-lg.flex.flex-col","div.bg-white.rounded-lg.shadow-xl.w-full.max-w-lg.flex.flex-col",-367105014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"90vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-6.py-4.border-b","div.px-6.py-4.border-b",-1209882696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-semibold","h2.text-lg.font-semibold",-2017038774),"Customize Deck"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-auto.px-6.py-4.flex-1","div.overflow-y-auto.px-6.py-4.flex-1",-638228094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-6","section.mb-6",88777537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2","h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2",-1179057006),"Suits (4)"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__56879){
var map__56880 = p__56879;
var map__56880__$1 = cljs.core.__destructure_map(map__56880);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.mb-2","div.flex.items-center.gap-2.mb-2",1764808081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.w-16.text-gray-600","label.text-sm.w-16.text-gray-600",-700380134),["Suit ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.px-2.py-1.text-sm.w-24.text-gray-600","input.border.rounded.px-2.py-1.text-sm.w-24.text-gray-600",-1963822725),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),(20),new cljs.core.Keyword(null,"value","value",305978217),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56841_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),i,new cljs.core.Keyword(null,"label","label",1718410804)], null),p1__56841_SHARP_.target.value);
})], null)], null),(function (){var iter__5480__auto__ = (function tabletop$components$deck_customizer$deck_customizer_$_iter__56891(s__56892){
return (new cljs.core.LazySeq(null,(function (){
var s__56892__$1 = s__56892;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56892__$1);
if(temp__5804__auto__){
var s__56892__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56892__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__56892__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__56894 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__56893 = (0);
while(true){
if((i__56893 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__56893);
cljs.core.chunk_append(b__56894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-5.h-5.rounded-full.border-2.transition-all","button.w-5.h-5.rounded-full.border-2.transition-all",1139203765),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,color))?"#3b82f6":"#d1d5db")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56893,c,c__5478__auto__,size__5479__auto__,b__56894,s__56892__$2,temp__5804__auto__,map__56880,map__56880__$1,label,color,map__56863,map__56863__$1,suits,ranks,total_count,face_color,back_color,text_color,map__56864,map__56864__$1,suit_errors,rank_errors,map__56859,map__56859__$1,on_close__$1,form,errors,map__56856,map__56856__$1,on_close){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),i,new cljs.core.Keyword(null,"color","color",1011675173)], null),c);
});})(i__56893,c,c__5478__auto__,size__5479__auto__,b__56894,s__56892__$2,temp__5804__auto__,map__56880,map__56880__$1,label,color,map__56863,map__56863__$1,suits,ranks,total_count,face_color,back_color,text_color,map__56864,map__56864__$1,suit_errors,rank_errors,map__56859,map__56859__$1,on_close__$1,form,errors,map__56856,map__56856__$1,on_close))
], null)], null));

var G__56992 = (i__56893 + (1));
i__56893 = G__56992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56894),tabletop$components$deck_customizer$deck_customizer_$_iter__56891(cljs.core.chunk_rest(s__56892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56894),null);
}
} else {
var c = cljs.core.first(s__56892__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-5.h-5.rounded-full.border-2.transition-all","button.w-5.h-5.rounded-full.border-2.transition-all",1139203765),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,color))?"#3b82f6":"#d1d5db")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__56892__$2,temp__5804__auto__,map__56880,map__56880__$1,label,color,map__56863,map__56863__$1,suits,ranks,total_count,face_color,back_color,text_color,map__56864,map__56864__$1,suit_errors,rank_errors,map__56859,map__56859__$1,on_close__$1,form,errors,map__56856,map__56856__$1,on_close){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),i,new cljs.core.Keyword(null,"color","color",1011675173)], null),c);
});})(c,s__56892__$2,temp__5804__auto__,map__56880,map__56880__$1,label,color,map__56863,map__56863__$1,suits,ranks,total_count,face_color,back_color,text_color,map__56864,map__56864__$1,suit_errors,rank_errors,map__56859,map__56859__$1,on_close__$1,form,errors,map__56856,map__56856__$1,on_close))
], null)], null),tabletop$components$deck_customizer$deck_customizer_$_iter__56891(cljs.core.rest(s__56892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabletop.components.deck_customizer.palette);
})(),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(suit_errors,i))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-500.text-xs","span.text-red-500.text-xs",-709960611),cljs.core.get.cljs$core$IFn$_invoke$arity$2(suit_errors,i)], null):null)], null);
}),suits)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-4","section.mb-4",-1639068268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2","h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2",-1179057006),"Cards per suit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.px-2.py-1.text-sm.w-20","input.border.rounded.px-2.py-1.text-sm.w-20",1174618429),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(52),new cljs.core.Keyword(null,"value","value",305978217),total_count,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56842_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"total-count","total-count",-1999441386),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (function (){var x__5090__auto__ = (52);
var y__5091__auto__ = parseInt(p1__56842_SHARP_.target.value,(10));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400.ml-2","span.text-xs.text-gray-400.ml-2",385906630),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((4) * total_count))," cards"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-6","section.mb-6",88777537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2","h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2",-1179057006),["Ranks (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_count),") \u2014 leave blank to auto-fill"].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,rank){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.mb-2","div.flex.items-center.gap-2.mb-2",1764808081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.w-16.text-gray-600","label.text-sm.w-16.text-gray-600",-700380134),["Rank ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.px-2.py-1.text-sm.flex-1.text-gray-600","input.border.rounded.px-2.py-1.text-sm.flex-1.text-gray-600",2084349755),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10),new cljs.core.Keyword(null,"value","value",305978217),rank,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56843_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),i], null),p1__56843_SHARP_.target.value);
})], null)], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rank_errors,i))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-500.text-xs","span.text-red-500.text-xs",-709960611),cljs.core.get.cljs$core$IFn$_invoke$arity$2(rank_errors,i)], null):null)], null);
}),(function (){var padded = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(total_count,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ranks,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(""))));
return padded;
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-4","section.mb-4",-1639068268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2","h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2",-1179057006),"Card Colors"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.w-28.text-gray-600","span.text-sm.w-28.text-gray-600",-1464634493),"Face background"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck_customizer.color_picker,face_color,(function (p1__56844_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"face-color","face-color",-919913463),p1__56844_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.w-28.text-gray-600","span.text-sm.w-28.text-gray-600",-1464634493),"Face-down back"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck_customizer.color_picker,back_color,(function (p1__56846_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"back-color","back-color",-672417547),p1__56846_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.w-28.text-gray-600","span.text-sm.w-28.text-gray-600",-1464634493),"Text color"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck_customizer.color_picker,text_color,(function (p1__56848_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"text-color","text-color",1728708298),p1__56848_SHARP_);
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-6.py-4.border-t.flex.justify-end.gap-3","div.px-6.py-4.border-t.flex.justify-end.gap-3",-755691849),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.bg-gray-200.hover:bg-gray-300.text-sm","button.px-4.py-2.rounded.bg-gray-200.hover:bg-gray-300.text-sm",263414224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close__$1], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.bg-blue-600.hover:bg-blue-700.text-white.text-sm","button.px-4.py-2.rounded.bg-blue-600.hover:bg-blue-700.text-white.text-sm",1404170890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var cfg = cljs.core.deref(form);
var cfg_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cfg,new cljs.core.Keyword(null,"ranks","ranks",-1802584866),(function (p1__56849_SHARP_){
return tabletop.logic.shuffle.auto_fill_ranks(p1__56849_SHARP_,new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$1(cfg));
}));
var errs = tabletop.logic.validation.validate_deck_config(cfg_SINGLEQUOTE_);
if(cljs.core.truth_(errs)){
return cljs.core.reset_BANG_(errors,errs);
} else {
cljs.core.reset_BANG_(errors,null);

var vec__56948_57030 = tabletop.state.placement_pos();
var px_57031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56948_57030,(0),null);
var py_57032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56948_57030,(1),null);
tabletop.state.add_component_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"x","x",2099068185),px_57031,new cljs.core.Keyword(null,"y","y",-1757859776),py_57032,new cljs.core.Keyword(null,"cards","cards",169174038),tabletop.logic.shuffle.make_custom_deck(cfg_SINGLEQUOTE_),new cljs.core.Keyword(null,"custom?","custom?",-124620022),true], null));

return (on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));
}
})], null),"Confirm"], null)], null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.deck_customizer.js.map
