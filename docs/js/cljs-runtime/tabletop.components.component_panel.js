goog.provide('tabletop.components.component_panel');
tabletop.components.component_panel.add_standard_deck_BANG_ = (function tabletop$components$component_panel$add_standard_deck_BANG_(){
var vec__26768 = tabletop.state.placement_pos();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(1),null);
return tabletop.state.add_component_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"cards","cards",169174038),tabletop.logic.shuffle.make_standard_deck(),new cljs.core.Keyword(null,"custom?","custom?",-124620022),false], null));
});
tabletop.components.component_panel.die_types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(8),(10),(12),(20),(100)], null);
tabletop.components.component_panel.toggle_section_BANG_ = (function tabletop$components$component_panel$toggle_section_BANG_(section){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"menu-section","menu-section",1290407139),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"menu-section","menu-section",1290407139).cljs$core$IFn$_invoke$arity$1(s),section))?section:null));
}));
});
tabletop.components.component_panel.section_header = (function tabletop$components$component_panel$section_header(label,section_key){
var open_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"menu-section","menu-section",1290407139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),section_key);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex justify-between items-center px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-sm font-semibold mb-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tabletop.components.component_panel.toggle_section_BANG_(section_key);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((open_QMARK_)?"\u25B2":"\u25BC")], null)], null);
});
tabletop.components.component_panel.save_game_BANG_ = (function tabletop$components$component_panel$save_game_BANG_(){
var json_str = tabletop.logic.serialization.serialize_state(cljs.core.deref(tabletop.state.app_state));
var blob = (new Blob([json_str],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var anchor = document.createElement("a");
(anchor.href = url);

(anchor.download = "tabletop-save.json");

document.body.appendChild(anchor);

anchor.click();

document.body.removeChild(anchor);

return URL.revokeObjectURL(url);
});
tabletop.components.component_panel.load_game_BANG_ = (function tabletop$components$component_panel$load_game_BANG_(file){
if(cljs.core.truth_(file)){
var reader = (new FileReader());
(reader.onload = (function (ev){
var text = ev.target.result;
try{var deserialized = tabletop.logic.serialization.deserialize_state(text);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (p1__26839_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26839_SHARP_,deserialized], 0)),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
}catch (e26842){var ex = e26842;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),["Failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex.message)].join(''));
}}));

return reader.readAsText(file);
} else {
return null;
}
});
tabletop.components.component_panel.component_panel = (function tabletop$components$component_panel$component_panel(p__26873){
var map__26875 = p__26873;
var map__26875__$1 = cljs.core.__destructure_map(map__26875);
var on_open_customizer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26875__$1,new cljs.core.Keyword(null,"on-open-customizer","on-open-customizer",1557307706));
var file_input = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__26882){
var map__26883 = p__26882;
var map__26883__$1 = cljs.core.__destructure_map(map__26883);
var on_open_customizer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26883__$1,new cljs.core.Keyword(null,"on-open-customizer","on-open-customizer",1557307706));
var map__26884 = cljs.core.deref(tabletop.state.app_state);
var map__26884__$1 = cljs.core.__destructure_map(map__26884);
var menu_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295));
var menu_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"menu-section","menu-section",1290407139));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed left-0 top-0 z-20 menu-panel",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"m-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-lg leading-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),cljs.core.not);
})], null),"\u2630"], null),(cljs.core.truth_(menu_open)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-0 left-0 w-48 bg-gray-800 text-white flex flex-col overflow-y-auto shadow-xl",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2.5rem",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.component_panel.section_header,"Decks",new cljs.core.Keyword(null,"decks","decks",-1740305496)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_section,new cljs.core.Keyword(null,"decks","decks",-1740305496)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tabletop.components.component_panel.add_standard_deck_BANG_], null),"Add Standard Deck"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_open_customizer__$1], null),"Add Custom Deck"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.component_panel.section_header,"Dice",new cljs.core.Keyword(null,"dice","dice",707777434)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_section,new cljs.core.Keyword(null,"dice","dice",707777434)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2"], null),(function (){var iter__5480__auto__ = (function tabletop$components$component_panel$component_panel_$_iter__26889(s__26890){
return (new cljs.core.LazySeq(null,(function (){
var s__26890__$1 = s__26890;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26890__$1);
if(temp__5804__auto__){
var s__26890__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26890__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26890__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26892 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26891 = (0);
while(true){
if((i__26891 < size__5479__auto__)){
var faces = cljs.core._nth(c__5478__auto__,i__26891);
cljs.core.chunk_append(b__26892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),faces,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26891,faces,c__5478__auto__,size__5479__auto__,b__26892,s__26890__$2,temp__5804__auto__,map__26884,map__26884__$1,menu_open,menu_section,map__26883,map__26883__$1,on_open_customizer__$1,file_input,map__26875,map__26875__$1,on_open_customizer){
return (function (){
var vec__26893 = tabletop.state.placement_pos();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(1),null);
return tabletop.state.add_component_BANG_(tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$3(faces,x,y));
});})(i__26891,faces,c__5478__auto__,size__5479__auto__,b__26892,s__26890__$2,temp__5804__auto__,map__26884,map__26884__$1,menu_open,menu_section,map__26883,map__26883__$1,on_open_customizer__$1,file_input,map__26875,map__26875__$1,on_open_customizer))
], null),["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(faces)].join('')], null));

var G__26944 = (i__26891 + (1));
i__26891 = G__26944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26892),tabletop$components$component_panel$component_panel_$_iter__26889(cljs.core.chunk_rest(s__26890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26892),null);
}
} else {
var faces = cljs.core.first(s__26890__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),faces,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (faces,s__26890__$2,temp__5804__auto__,map__26884,map__26884__$1,menu_open,menu_section,map__26883,map__26883__$1,on_open_customizer__$1,file_input,map__26875,map__26875__$1,on_open_customizer){
return (function (){
var vec__26896 = tabletop.state.placement_pos();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26896,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26896,(1),null);
return tabletop.state.add_component_BANG_(tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$3(faces,x,y));
});})(faces,s__26890__$2,temp__5804__auto__,map__26884,map__26884__$1,menu_open,menu_section,map__26883,map__26883__$1,on_open_customizer__$1,file_input,map__26875,map__26875__$1,on_open_customizer))
], null),["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(faces)].join('')], null),tabletop$components$component_panel$component_panel_$_iter__26889(cljs.core.rest(s__26890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabletop.components.component_panel.die_types);
})()], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.component_panel.section_header,"Save / Load",new cljs.core.Keyword(null,"save","save",1850079149)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_section,new cljs.core.Keyword(null,"save","save",1850079149)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tabletop.components.component_panel.save_game_BANG_], null),"Save Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm","button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm",-1720407992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(file_input))){
return cljs.core.deref(file_input).click();
} else {
return null;
}
})], null),"Load Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".json",new cljs.core.Keyword(null,"class","class",-2030961996),"hidden",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__26860_SHARP_){
return cljs.core.reset_BANG_(file_input,p1__26860_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return tabletop.components.component_panel.load_game_BANG_((e.target.files[(0)]));
})], null)], null)], null):null)], null):null)], null);
});
});

//# sourceMappingURL=tabletop.components.component_panel.js.map
