goog.provide('tabletop.components.keybindings_panel');
tabletop.components.keybindings_panel.action_labels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"roll-shuffle","roll-shuffle",-609911199),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"flip","flip",2033871302),new cljs.core.Keyword(null,"send-to-back","send-to-back",-1507083770),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"scale-down","scale-down",-900427832),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"to-hand","to-hand",-2118444439),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"bring-to-front","bring-to-front",663160304),new cljs.core.Keyword(null,"camera-pan","camera-pan",1077013555),new cljs.core.Keyword(null,"scale-up","scale-up",827332505),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"cut","cut",-1042666209)],["Properties Editor","Roll / Shuffle","Copy","Group","Flip","Send to Back","Rotate CCW","Scale Down","Rotate CW","To Hand","Paste","Delete","Bring to Front","Fast Camera Pan","Scale Up","Lock / Unlock","Cut"]);
tabletop.components.keybindings_panel.save_bindings_BANG_ = (function tabletop$components$keybindings_panel$save_bindings_BANG_(){
var json = JSON.stringify(tabletop.logic.keybindings.serialize());
var blob = (new Blob([json],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = "keybindings.json");

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

return URL.revokeObjectURL(url);
});
tabletop.components.keybindings_panel.load_bindings_BANG_ = (function tabletop$components$keybindings_panel$load_bindings_BANG_(file){
if(cljs.core.truth_(file)){
var reader = (new FileReader());
(reader.onload = (function (ev){
return tabletop.logic.keybindings.deserialize(JSON.parse(ev.target.result));
}));

return reader.readAsText(file);
} else {
return null;
}
});
tabletop.components.keybindings_panel.keybindings_panel = (function tabletop$components$keybindings_panel$keybindings_panel(p__40968){
var map__40969 = p__40968;
var map__40969__$1 = cljs.core.__destructure_map(map__40969);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40969__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var panel_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((300));
var panel_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((80));
var dragging = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_ox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_oy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__40970){
var map__40971 = p__40970;
var map__40971__$1 = cljs.core.__destructure_map(map__40971);
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40971__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["0 4px 24px rgba(0,0,0,0.5)","white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_y)),"px"].join(''),"280px","#1f2937",(60),"fixed","8px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_x)),"px"].join('')]),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging))){
cljs.core.reset_BANG_(panel_x,(e.clientX - cljs.core.deref(drag_ox)));

return cljs.core.reset_BANG_(panel_y,(e.clientY - cljs.core.deref(drag_oy)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (){
return cljs.core.reset_BANG_(dragging,false);
}),new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380),(function (){
return cljs.core.reset_BANG_(dragging,false);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grab",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px 8px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
e.currentTarget.setPointerCapture(e.pointerId);

cljs.core.reset_BANG_(dragging,true);

cljs.core.reset_BANG_(drag_ox,(e.clientX - cljs.core.deref(panel_x)));

return cljs.core.reset_BANG_(drag_oy,(e.clientY - cljs.core.deref(panel_y)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Keybindings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__40966_SHARP_){
return p1__40966_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"70vh",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),(function (){var iter__5480__auto__ = (function tabletop$components$keybindings_panel$keybindings_panel_$_iter__40972(s__40973){
return (new cljs.core.LazySeq(null,(function (){
var s__40973__$1 = s__40973;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40973__$1);
if(temp__5804__auto__){
var s__40973__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40973__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40973__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40975 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40974 = (0);
while(true){
if((i__40974 < size__5479__auto__)){
var vec__40976 = cljs.core._nth(c__5478__auto__,i__40974);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40976,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40976,(1),null);
cljs.core.chunk_append(b__40975,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),action,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(editing),action))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #60a5fa",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"key",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (i__40974,vec__40976,action,label,c__5478__auto__,size__5479__auto__,b__40975,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close){
return (function (e){
e.preventDefault();

var k = e.key;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,"Escape")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.logic.keybindings.bindings,cljs.core.assoc,action,k.toLowerCase());
} else {
}

return cljs.core.reset_BANG_(editing,null);
});})(i__40974,vec__40976,action,label,c__5478__auto__,size__5479__auto__,b__40975,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close))
], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40974,vec__40976,action,label,c__5478__auto__,size__5479__auto__,b__40975,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close){
return (function (){
return cljs.core.reset_BANG_(editing,action);
});})(i__40974,vec__40976,action,label,c__5478__auto__,size__5479__auto__,b__40975,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"40px"], null)], null),(function (){var or__5002__auto__ = tabletop.logic.keybindings.key_for(action);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u2014";
}
})()], null))], null));

var G__40983 = (i__40974 + (1));
i__40974 = G__40983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40975),tabletop$components$keybindings_panel$keybindings_panel_$_iter__40972(cljs.core.chunk_rest(s__40973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40975),null);
}
} else {
var vec__40979 = cljs.core.first(s__40973__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40979,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40979,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),action,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),label], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(editing),action))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #60a5fa",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"key",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (vec__40979,action,label,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close){
return (function (e){
e.preventDefault();

var k = e.key;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,"Escape")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.logic.keybindings.bindings,cljs.core.assoc,action,k.toLowerCase());
} else {
}

return cljs.core.reset_BANG_(editing,null);
});})(vec__40979,action,label,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close))
], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__40979,action,label,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close){
return (function (){
return cljs.core.reset_BANG_(editing,action);
});})(vec__40979,action,label,s__40973__$2,temp__5804__auto__,map__40971,map__40971__$1,on_close__$1,panel_x,panel_y,dragging,drag_ox,drag_oy,editing,map__40969,map__40969__$1,on_close))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"40px"], null)], null),(function (){var or__5002__auto__ = tabletop.logic.keybindings.key_for(action);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u2014";
}
})()], null))], null),tabletop$components$keybindings_panel$keybindings_panel_$_iter__40972(cljs.core.rest(s__40973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabletop.components.keybindings_panel.action_labels);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"6px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tabletop.components.keybindings_panel.save_bindings_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),"Save"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["white","center","12px","#374151","pointer",(1),"5px","1px solid #4b5563","4px"])], null),"Load",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".json",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40967_SHARP_){
return tabletop.components.keybindings_panel.load_bindings_BANG_((p1__40967_SHARP_.target.files[(0)]));
})], null)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.keybindings_panel.js.map
