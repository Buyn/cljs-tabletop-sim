goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15800 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15800(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15804 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15804(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13678 = coll;
var G__13679 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13678,G__13679) : shadow.dom.lazy_native_coll_seq.call(null,G__13678,G__13679));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13762 = arguments.length;
switch (G__13762) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13778 = arguments.length;
switch (G__13778) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13794 = arguments.length;
switch (G__13794) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13809 = arguments.length;
switch (G__13809) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13850 = arguments.length;
switch (G__13850) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13883 = arguments.length;
switch (G__13883) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13912){if((e13912 instanceof Object)){
var e = e13912;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13912;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13935 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13936 = null;
var count__13937 = (0);
var i__13938 = (0);
while(true){
if((i__13938 < count__13937)){
var el = chunk__13936.cljs$core$IIndexed$_nth$arity$2(null,i__13938);
var handler_15914__$1 = ((function (seq__13935,chunk__13936,count__13937,i__13938,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13935,chunk__13936,count__13937,i__13938,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15914__$1);


var G__15916 = seq__13935;
var G__15917 = chunk__13936;
var G__15918 = count__13937;
var G__15919 = (i__13938 + (1));
seq__13935 = G__15916;
chunk__13936 = G__15917;
count__13937 = G__15918;
i__13938 = G__15919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13935);
if(temp__5804__auto__){
var seq__13935__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13935__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13935__$1);
var G__15921 = cljs.core.chunk_rest(seq__13935__$1);
var G__15922 = c__5525__auto__;
var G__15923 = cljs.core.count(c__5525__auto__);
var G__15924 = (0);
seq__13935 = G__15921;
chunk__13936 = G__15922;
count__13937 = G__15923;
i__13938 = G__15924;
continue;
} else {
var el = cljs.core.first(seq__13935__$1);
var handler_15926__$1 = ((function (seq__13935,chunk__13936,count__13937,i__13938,el,seq__13935__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13935,chunk__13936,count__13937,i__13938,el,seq__13935__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15926__$1);


var G__15928 = cljs.core.next(seq__13935__$1);
var G__15929 = null;
var G__15930 = (0);
var G__15931 = (0);
seq__13935 = G__15928;
chunk__13936 = G__15929;
count__13937 = G__15930;
i__13938 = G__15931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14054 = arguments.length;
switch (G__14054) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14097 = cljs.core.seq(events);
var chunk__14098 = null;
var count__14099 = (0);
var i__14100 = (0);
while(true){
if((i__14100 < count__14099)){
var vec__14130 = chunk__14098.cljs$core$IIndexed$_nth$arity$2(null,i__14100);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15939 = seq__14097;
var G__15940 = chunk__14098;
var G__15941 = count__14099;
var G__15942 = (i__14100 + (1));
seq__14097 = G__15939;
chunk__14098 = G__15940;
count__14099 = G__15941;
i__14100 = G__15942;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14097);
if(temp__5804__auto__){
var seq__14097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14097__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14097__$1);
var G__15944 = cljs.core.chunk_rest(seq__14097__$1);
var G__15945 = c__5525__auto__;
var G__15946 = cljs.core.count(c__5525__auto__);
var G__15947 = (0);
seq__14097 = G__15944;
chunk__14098 = G__15945;
count__14099 = G__15946;
i__14100 = G__15947;
continue;
} else {
var vec__14142 = cljs.core.first(seq__14097__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14142,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15954 = cljs.core.next(seq__14097__$1);
var G__15955 = null;
var G__15956 = (0);
var G__15957 = (0);
seq__14097 = G__15954;
chunk__14098 = G__15955;
count__14099 = G__15956;
i__14100 = G__15957;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14156 = cljs.core.seq(styles);
var chunk__14157 = null;
var count__14158 = (0);
var i__14159 = (0);
while(true){
if((i__14159 < count__14158)){
var vec__14195 = chunk__14157.cljs$core$IIndexed$_nth$arity$2(null,i__14159);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15963 = seq__14156;
var G__15964 = chunk__14157;
var G__15965 = count__14158;
var G__15966 = (i__14159 + (1));
seq__14156 = G__15963;
chunk__14157 = G__15964;
count__14158 = G__15965;
i__14159 = G__15966;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14156);
if(temp__5804__auto__){
var seq__14156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14156__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14156__$1);
var G__15968 = cljs.core.chunk_rest(seq__14156__$1);
var G__15969 = c__5525__auto__;
var G__15970 = cljs.core.count(c__5525__auto__);
var G__15971 = (0);
seq__14156 = G__15968;
chunk__14157 = G__15969;
count__14158 = G__15970;
i__14159 = G__15971;
continue;
} else {
var vec__14213 = cljs.core.first(seq__14156__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15974 = cljs.core.next(seq__14156__$1);
var G__15975 = null;
var G__15976 = (0);
var G__15977 = (0);
seq__14156 = G__15974;
chunk__14157 = G__15975;
count__14158 = G__15976;
i__14159 = G__15977;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14229_15979 = key;
var G__14229_15980__$1 = (((G__14229_15979 instanceof cljs.core.Keyword))?G__14229_15979.fqn:null);
switch (G__14229_15980__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15991 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15991,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15991,"aria-");
}
})())){
el.setAttribute(ks_15991,value);
} else {
(el[ks_15991] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14306){
var map__14307 = p__14306;
var map__14307__$1 = cljs.core.__destructure_map(map__14307);
var props = map__14307__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14307__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14316 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14323 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14323,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14323;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14345 = arguments.length;
switch (G__14345) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14389){
var vec__14395 = p__14389;
var seq__14396 = cljs.core.seq(vec__14395);
var first__14397 = cljs.core.first(seq__14396);
var seq__14396__$1 = cljs.core.next(seq__14396);
var nn = first__14397;
var first__14397__$1 = cljs.core.first(seq__14396__$1);
var seq__14396__$2 = cljs.core.next(seq__14396__$1);
var np = first__14397__$1;
var nc = seq__14396__$2;
var node = vec__14395;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14406 = nn;
var G__14407 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14406,G__14407) : create_fn.call(null,G__14406,G__14407));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14409 = nn;
var G__14410 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14409,G__14410) : create_fn.call(null,G__14409,G__14410));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14439 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439,(1),null);
var seq__14452_16012 = cljs.core.seq(node_children);
var chunk__14453_16013 = null;
var count__14454_16014 = (0);
var i__14455_16015 = (0);
while(true){
if((i__14455_16015 < count__14454_16014)){
var child_struct_16017 = chunk__14453_16013.cljs$core$IIndexed$_nth$arity$2(null,i__14455_16015);
var children_16018 = shadow.dom.dom_node(child_struct_16017);
if(cljs.core.seq_QMARK_(children_16018)){
var seq__14540_16019 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16018));
var chunk__14542_16020 = null;
var count__14543_16021 = (0);
var i__14544_16022 = (0);
while(true){
if((i__14544_16022 < count__14543_16021)){
var child_16023 = chunk__14542_16020.cljs$core$IIndexed$_nth$arity$2(null,i__14544_16022);
if(cljs.core.truth_(child_16023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16023);


var G__16025 = seq__14540_16019;
var G__16026 = chunk__14542_16020;
var G__16027 = count__14543_16021;
var G__16028 = (i__14544_16022 + (1));
seq__14540_16019 = G__16025;
chunk__14542_16020 = G__16026;
count__14543_16021 = G__16027;
i__14544_16022 = G__16028;
continue;
} else {
var G__16029 = seq__14540_16019;
var G__16030 = chunk__14542_16020;
var G__16031 = count__14543_16021;
var G__16032 = (i__14544_16022 + (1));
seq__14540_16019 = G__16029;
chunk__14542_16020 = G__16030;
count__14543_16021 = G__16031;
i__14544_16022 = G__16032;
continue;
}
} else {
var temp__5804__auto___16035 = cljs.core.seq(seq__14540_16019);
if(temp__5804__auto___16035){
var seq__14540_16036__$1 = temp__5804__auto___16035;
if(cljs.core.chunked_seq_QMARK_(seq__14540_16036__$1)){
var c__5525__auto___16038 = cljs.core.chunk_first(seq__14540_16036__$1);
var G__16039 = cljs.core.chunk_rest(seq__14540_16036__$1);
var G__16040 = c__5525__auto___16038;
var G__16041 = cljs.core.count(c__5525__auto___16038);
var G__16042 = (0);
seq__14540_16019 = G__16039;
chunk__14542_16020 = G__16040;
count__14543_16021 = G__16041;
i__14544_16022 = G__16042;
continue;
} else {
var child_16043 = cljs.core.first(seq__14540_16036__$1);
if(cljs.core.truth_(child_16043)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16043);


var G__16044 = cljs.core.next(seq__14540_16036__$1);
var G__16045 = null;
var G__16046 = (0);
var G__16047 = (0);
seq__14540_16019 = G__16044;
chunk__14542_16020 = G__16045;
count__14543_16021 = G__16046;
i__14544_16022 = G__16047;
continue;
} else {
var G__16048 = cljs.core.next(seq__14540_16036__$1);
var G__16049 = null;
var G__16050 = (0);
var G__16051 = (0);
seq__14540_16019 = G__16048;
chunk__14542_16020 = G__16049;
count__14543_16021 = G__16050;
i__14544_16022 = G__16051;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16018);
}


var G__16052 = seq__14452_16012;
var G__16053 = chunk__14453_16013;
var G__16054 = count__14454_16014;
var G__16055 = (i__14455_16015 + (1));
seq__14452_16012 = G__16052;
chunk__14453_16013 = G__16053;
count__14454_16014 = G__16054;
i__14455_16015 = G__16055;
continue;
} else {
var temp__5804__auto___16056 = cljs.core.seq(seq__14452_16012);
if(temp__5804__auto___16056){
var seq__14452_16057__$1 = temp__5804__auto___16056;
if(cljs.core.chunked_seq_QMARK_(seq__14452_16057__$1)){
var c__5525__auto___16058 = cljs.core.chunk_first(seq__14452_16057__$1);
var G__16059 = cljs.core.chunk_rest(seq__14452_16057__$1);
var G__16060 = c__5525__auto___16058;
var G__16061 = cljs.core.count(c__5525__auto___16058);
var G__16062 = (0);
seq__14452_16012 = G__16059;
chunk__14453_16013 = G__16060;
count__14454_16014 = G__16061;
i__14455_16015 = G__16062;
continue;
} else {
var child_struct_16063 = cljs.core.first(seq__14452_16057__$1);
var children_16064 = shadow.dom.dom_node(child_struct_16063);
if(cljs.core.seq_QMARK_(children_16064)){
var seq__14569_16065 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16064));
var chunk__14571_16066 = null;
var count__14572_16067 = (0);
var i__14573_16068 = (0);
while(true){
if((i__14573_16068 < count__14572_16067)){
var child_16069 = chunk__14571_16066.cljs$core$IIndexed$_nth$arity$2(null,i__14573_16068);
if(cljs.core.truth_(child_16069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16069);


var G__16071 = seq__14569_16065;
var G__16072 = chunk__14571_16066;
var G__16073 = count__14572_16067;
var G__16074 = (i__14573_16068 + (1));
seq__14569_16065 = G__16071;
chunk__14571_16066 = G__16072;
count__14572_16067 = G__16073;
i__14573_16068 = G__16074;
continue;
} else {
var G__16075 = seq__14569_16065;
var G__16076 = chunk__14571_16066;
var G__16077 = count__14572_16067;
var G__16078 = (i__14573_16068 + (1));
seq__14569_16065 = G__16075;
chunk__14571_16066 = G__16076;
count__14572_16067 = G__16077;
i__14573_16068 = G__16078;
continue;
}
} else {
var temp__5804__auto___16080__$1 = cljs.core.seq(seq__14569_16065);
if(temp__5804__auto___16080__$1){
var seq__14569_16081__$1 = temp__5804__auto___16080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14569_16081__$1)){
var c__5525__auto___16082 = cljs.core.chunk_first(seq__14569_16081__$1);
var G__16084 = cljs.core.chunk_rest(seq__14569_16081__$1);
var G__16085 = c__5525__auto___16082;
var G__16086 = cljs.core.count(c__5525__auto___16082);
var G__16087 = (0);
seq__14569_16065 = G__16084;
chunk__14571_16066 = G__16085;
count__14572_16067 = G__16086;
i__14573_16068 = G__16087;
continue;
} else {
var child_16088 = cljs.core.first(seq__14569_16081__$1);
if(cljs.core.truth_(child_16088)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16088);


var G__16089 = cljs.core.next(seq__14569_16081__$1);
var G__16090 = null;
var G__16091 = (0);
var G__16092 = (0);
seq__14569_16065 = G__16089;
chunk__14571_16066 = G__16090;
count__14572_16067 = G__16091;
i__14573_16068 = G__16092;
continue;
} else {
var G__16094 = cljs.core.next(seq__14569_16081__$1);
var G__16095 = null;
var G__16096 = (0);
var G__16097 = (0);
seq__14569_16065 = G__16094;
chunk__14571_16066 = G__16095;
count__14572_16067 = G__16096;
i__14573_16068 = G__16097;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16064);
}


var G__16099 = cljs.core.next(seq__14452_16057__$1);
var G__16100 = null;
var G__16101 = (0);
var G__16102 = (0);
seq__14452_16012 = G__16099;
chunk__14453_16013 = G__16100;
count__14454_16014 = G__16101;
i__14455_16015 = G__16102;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14600 = cljs.core.seq(node);
var chunk__14601 = null;
var count__14602 = (0);
var i__14603 = (0);
while(true){
if((i__14603 < count__14602)){
var n = chunk__14601.cljs$core$IIndexed$_nth$arity$2(null,i__14603);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16132 = seq__14600;
var G__16133 = chunk__14601;
var G__16134 = count__14602;
var G__16135 = (i__14603 + (1));
seq__14600 = G__16132;
chunk__14601 = G__16133;
count__14602 = G__16134;
i__14603 = G__16135;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14600);
if(temp__5804__auto__){
var seq__14600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14600__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14600__$1);
var G__16141 = cljs.core.chunk_rest(seq__14600__$1);
var G__16142 = c__5525__auto__;
var G__16143 = cljs.core.count(c__5525__auto__);
var G__16144 = (0);
seq__14600 = G__16141;
chunk__14601 = G__16142;
count__14602 = G__16143;
i__14603 = G__16144;
continue;
} else {
var n = cljs.core.first(seq__14600__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16146 = cljs.core.next(seq__14600__$1);
var G__16147 = null;
var G__16148 = (0);
var G__16149 = (0);
seq__14600 = G__16146;
chunk__14601 = G__16147;
count__14602 = G__16148;
i__14603 = G__16149;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14615 = arguments.length;
switch (G__14615) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14624 = arguments.length;
switch (G__14624) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14660 = arguments.length;
switch (G__14660) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16183 = arguments.length;
var i__5727__auto___16184 = (0);
while(true){
if((i__5727__auto___16184 < len__5726__auto___16183)){
args__5732__auto__.push((arguments[i__5727__auto___16184]));

var G__16185 = (i__5727__auto___16184 + (1));
i__5727__auto___16184 = G__16185;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14749_16189 = cljs.core.seq(nodes);
var chunk__14750_16190 = null;
var count__14751_16191 = (0);
var i__14752_16192 = (0);
while(true){
if((i__14752_16192 < count__14751_16191)){
var node_16194 = chunk__14750_16190.cljs$core$IIndexed$_nth$arity$2(null,i__14752_16192);
fragment.appendChild(shadow.dom._to_dom(node_16194));


var G__16196 = seq__14749_16189;
var G__16197 = chunk__14750_16190;
var G__16198 = count__14751_16191;
var G__16199 = (i__14752_16192 + (1));
seq__14749_16189 = G__16196;
chunk__14750_16190 = G__16197;
count__14751_16191 = G__16198;
i__14752_16192 = G__16199;
continue;
} else {
var temp__5804__auto___16200 = cljs.core.seq(seq__14749_16189);
if(temp__5804__auto___16200){
var seq__14749_16201__$1 = temp__5804__auto___16200;
if(cljs.core.chunked_seq_QMARK_(seq__14749_16201__$1)){
var c__5525__auto___16203 = cljs.core.chunk_first(seq__14749_16201__$1);
var G__16204 = cljs.core.chunk_rest(seq__14749_16201__$1);
var G__16205 = c__5525__auto___16203;
var G__16206 = cljs.core.count(c__5525__auto___16203);
var G__16207 = (0);
seq__14749_16189 = G__16204;
chunk__14750_16190 = G__16205;
count__14751_16191 = G__16206;
i__14752_16192 = G__16207;
continue;
} else {
var node_16208 = cljs.core.first(seq__14749_16201__$1);
fragment.appendChild(shadow.dom._to_dom(node_16208));


var G__16210 = cljs.core.next(seq__14749_16201__$1);
var G__16211 = null;
var G__16212 = (0);
var G__16213 = (0);
seq__14749_16189 = G__16210;
chunk__14750_16190 = G__16211;
count__14751_16191 = G__16212;
i__14752_16192 = G__16213;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14723){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14723));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14847_16216 = cljs.core.seq(scripts);
var chunk__14848_16217 = null;
var count__14849_16218 = (0);
var i__14850_16219 = (0);
while(true){
if((i__14850_16219 < count__14849_16218)){
var vec__14872_16220 = chunk__14848_16217.cljs$core$IIndexed$_nth$arity$2(null,i__14850_16219);
var script_tag_16221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14872_16220,(0),null);
var script_body_16222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14872_16220,(1),null);
eval(script_body_16222);


var G__16224 = seq__14847_16216;
var G__16225 = chunk__14848_16217;
var G__16226 = count__14849_16218;
var G__16227 = (i__14850_16219 + (1));
seq__14847_16216 = G__16224;
chunk__14848_16217 = G__16225;
count__14849_16218 = G__16226;
i__14850_16219 = G__16227;
continue;
} else {
var temp__5804__auto___16228 = cljs.core.seq(seq__14847_16216);
if(temp__5804__auto___16228){
var seq__14847_16230__$1 = temp__5804__auto___16228;
if(cljs.core.chunked_seq_QMARK_(seq__14847_16230__$1)){
var c__5525__auto___16233 = cljs.core.chunk_first(seq__14847_16230__$1);
var G__16234 = cljs.core.chunk_rest(seq__14847_16230__$1);
var G__16235 = c__5525__auto___16233;
var G__16236 = cljs.core.count(c__5525__auto___16233);
var G__16237 = (0);
seq__14847_16216 = G__16234;
chunk__14848_16217 = G__16235;
count__14849_16218 = G__16236;
i__14850_16219 = G__16237;
continue;
} else {
var vec__14884_16239 = cljs.core.first(seq__14847_16230__$1);
var script_tag_16240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884_16239,(0),null);
var script_body_16241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884_16239,(1),null);
eval(script_body_16241);


var G__16244 = cljs.core.next(seq__14847_16230__$1);
var G__16245 = null;
var G__16246 = (0);
var G__16247 = (0);
seq__14847_16216 = G__16244;
chunk__14848_16217 = G__16245;
count__14849_16218 = G__16246;
i__14850_16219 = G__16247;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14894){
var vec__14895 = p__14894;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14895,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14926 = arguments.length;
switch (G__14926) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14946 = cljs.core.seq(style_keys);
var chunk__14947 = null;
var count__14948 = (0);
var i__14949 = (0);
while(true){
if((i__14949 < count__14948)){
var it = chunk__14947.cljs$core$IIndexed$_nth$arity$2(null,i__14949);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16280 = seq__14946;
var G__16281 = chunk__14947;
var G__16282 = count__14948;
var G__16283 = (i__14949 + (1));
seq__14946 = G__16280;
chunk__14947 = G__16281;
count__14948 = G__16282;
i__14949 = G__16283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14946);
if(temp__5804__auto__){
var seq__14946__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14946__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14946__$1);
var G__16297 = cljs.core.chunk_rest(seq__14946__$1);
var G__16298 = c__5525__auto__;
var G__16299 = cljs.core.count(c__5525__auto__);
var G__16300 = (0);
seq__14946 = G__16297;
chunk__14947 = G__16298;
count__14948 = G__16299;
i__14949 = G__16300;
continue;
} else {
var it = cljs.core.first(seq__14946__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16303 = cljs.core.next(seq__14946__$1);
var G__16304 = null;
var G__16305 = (0);
var G__16306 = (0);
seq__14946 = G__16303;
chunk__14947 = G__16304;
count__14948 = G__16305;
i__14949 = G__16306;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14970,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15003 = k14970;
var G__15003__$1 = (((G__15003 instanceof cljs.core.Keyword))?G__15003.fqn:null);
switch (G__15003__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14970,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15018){
var vec__15022 = p__15018;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14969){
var self__ = this;
var G__14969__$1 = this;
return (new cljs.core.RecordIter((0),G__14969__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14972,other14973){
var self__ = this;
var this14972__$1 = this;
return (((!((other14973 == null)))) && ((((this14972__$1.constructor === other14973.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14972__$1.x,other14973.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14972__$1.y,other14973.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14972__$1.__extmap,other14973.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14970){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15116 = k14970;
var G__15116__$1 = (((G__15116 instanceof cljs.core.Keyword))?G__15116.fqn:null);
switch (G__15116__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14970);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14969){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15128 = cljs.core.keyword_identical_QMARK_;
var expr__15129 = k__5309__auto__;
if(cljs.core.truth_((pred__15128.cljs$core$IFn$_invoke$arity$2 ? pred__15128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15129) : pred__15128.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15129)))){
return (new shadow.dom.Coordinate(G__14969,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15128.cljs$core$IFn$_invoke$arity$2 ? pred__15128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15129) : pred__15128.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15129)))){
return (new shadow.dom.Coordinate(self__.x,G__14969,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14969),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14969){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14969,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14979){
var extmap__5342__auto__ = (function (){var G__15151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14979,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15151);
} else {
return G__15151;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14979),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14979),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15170,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15195 = k15170;
var G__15195__$1 = (((G__15195 instanceof cljs.core.Keyword))?G__15195.fqn:null);
switch (G__15195__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15170,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15207){
var vec__15209 = p__15207;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15169){
var self__ = this;
var G__15169__$1 = this;
return (new cljs.core.RecordIter((0),G__15169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15171,other15172){
var self__ = this;
var this15171__$1 = this;
return (((!((other15172 == null)))) && ((((this15171__$1.constructor === other15172.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15171__$1.w,other15172.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15171__$1.h,other15172.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15171__$1.__extmap,other15172.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15170){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15274 = k15170;
var G__15274__$1 = (((G__15274 instanceof cljs.core.Keyword))?G__15274.fqn:null);
switch (G__15274__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15170);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15169){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15288 = cljs.core.keyword_identical_QMARK_;
var expr__15289 = k__5309__auto__;
if(cljs.core.truth_((pred__15288.cljs$core$IFn$_invoke$arity$2 ? pred__15288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15289) : pred__15288.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15289)))){
return (new shadow.dom.Size(G__15169,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15288.cljs$core$IFn$_invoke$arity$2 ? pred__15288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15289) : pred__15288.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15289)))){
return (new shadow.dom.Size(self__.w,G__15169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15169),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15169){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15169,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15178){
var extmap__5342__auto__ = (function (){var G__15335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15178,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15335);
} else {
return G__15335;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15178),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15178),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16451 = (i + (1));
var G__16452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16451;
ret = G__16452;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15416){
var vec__15417 = p__15416;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15429 = arguments.length;
switch (G__15429) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16459 = ps;
var G__16460 = (i + (1));
el__$1 = G__16459;
i = G__16460;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15496 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15496,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15496,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15496,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15501_16465 = cljs.core.seq(props);
var chunk__15502_16466 = null;
var count__15503_16467 = (0);
var i__15504_16468 = (0);
while(true){
if((i__15504_16468 < count__15503_16467)){
var vec__15528_16469 = chunk__15502_16466.cljs$core$IIndexed$_nth$arity$2(null,i__15504_16468);
var k_16470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528_16469,(0),null);
var v_16471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528_16469,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16470);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16470),v_16471);


var G__16472 = seq__15501_16465;
var G__16473 = chunk__15502_16466;
var G__16474 = count__15503_16467;
var G__16475 = (i__15504_16468 + (1));
seq__15501_16465 = G__16472;
chunk__15502_16466 = G__16473;
count__15503_16467 = G__16474;
i__15504_16468 = G__16475;
continue;
} else {
var temp__5804__auto___16476 = cljs.core.seq(seq__15501_16465);
if(temp__5804__auto___16476){
var seq__15501_16477__$1 = temp__5804__auto___16476;
if(cljs.core.chunked_seq_QMARK_(seq__15501_16477__$1)){
var c__5525__auto___16478 = cljs.core.chunk_first(seq__15501_16477__$1);
var G__16479 = cljs.core.chunk_rest(seq__15501_16477__$1);
var G__16480 = c__5525__auto___16478;
var G__16481 = cljs.core.count(c__5525__auto___16478);
var G__16482 = (0);
seq__15501_16465 = G__16479;
chunk__15502_16466 = G__16480;
count__15503_16467 = G__16481;
i__15504_16468 = G__16482;
continue;
} else {
var vec__15537_16483 = cljs.core.first(seq__15501_16477__$1);
var k_16484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537_16483,(0),null);
var v_16485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537_16483,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16484);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16484),v_16485);


var G__16486 = cljs.core.next(seq__15501_16477__$1);
var G__16487 = null;
var G__16488 = (0);
var G__16489 = (0);
seq__15501_16465 = G__16486;
chunk__15502_16466 = G__16487;
count__15503_16467 = G__16488;
i__15504_16468 = G__16489;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15554 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(1),null);
var seq__15557_16490 = cljs.core.seq(node_children);
var chunk__15559_16491 = null;
var count__15560_16492 = (0);
var i__15561_16493 = (0);
while(true){
if((i__15561_16493 < count__15560_16492)){
var child_struct_16494 = chunk__15559_16491.cljs$core$IIndexed$_nth$arity$2(null,i__15561_16493);
if((!((child_struct_16494 == null)))){
if(typeof child_struct_16494 === 'string'){
var text_16495 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16495),child_struct_16494].join(''));
} else {
var children_16497 = shadow.dom.svg_node(child_struct_16494);
if(cljs.core.seq_QMARK_(children_16497)){
var seq__15653_16498 = cljs.core.seq(children_16497);
var chunk__15655_16499 = null;
var count__15656_16500 = (0);
var i__15657_16501 = (0);
while(true){
if((i__15657_16501 < count__15656_16500)){
var child_16502 = chunk__15655_16499.cljs$core$IIndexed$_nth$arity$2(null,i__15657_16501);
if(cljs.core.truth_(child_16502)){
node.appendChild(child_16502);


var G__16503 = seq__15653_16498;
var G__16504 = chunk__15655_16499;
var G__16505 = count__15656_16500;
var G__16506 = (i__15657_16501 + (1));
seq__15653_16498 = G__16503;
chunk__15655_16499 = G__16504;
count__15656_16500 = G__16505;
i__15657_16501 = G__16506;
continue;
} else {
var G__16507 = seq__15653_16498;
var G__16508 = chunk__15655_16499;
var G__16509 = count__15656_16500;
var G__16510 = (i__15657_16501 + (1));
seq__15653_16498 = G__16507;
chunk__15655_16499 = G__16508;
count__15656_16500 = G__16509;
i__15657_16501 = G__16510;
continue;
}
} else {
var temp__5804__auto___16511 = cljs.core.seq(seq__15653_16498);
if(temp__5804__auto___16511){
var seq__15653_16513__$1 = temp__5804__auto___16511;
if(cljs.core.chunked_seq_QMARK_(seq__15653_16513__$1)){
var c__5525__auto___16514 = cljs.core.chunk_first(seq__15653_16513__$1);
var G__16515 = cljs.core.chunk_rest(seq__15653_16513__$1);
var G__16516 = c__5525__auto___16514;
var G__16517 = cljs.core.count(c__5525__auto___16514);
var G__16518 = (0);
seq__15653_16498 = G__16515;
chunk__15655_16499 = G__16516;
count__15656_16500 = G__16517;
i__15657_16501 = G__16518;
continue;
} else {
var child_16519 = cljs.core.first(seq__15653_16513__$1);
if(cljs.core.truth_(child_16519)){
node.appendChild(child_16519);


var G__16520 = cljs.core.next(seq__15653_16513__$1);
var G__16521 = null;
var G__16522 = (0);
var G__16523 = (0);
seq__15653_16498 = G__16520;
chunk__15655_16499 = G__16521;
count__15656_16500 = G__16522;
i__15657_16501 = G__16523;
continue;
} else {
var G__16524 = cljs.core.next(seq__15653_16513__$1);
var G__16525 = null;
var G__16526 = (0);
var G__16527 = (0);
seq__15653_16498 = G__16524;
chunk__15655_16499 = G__16525;
count__15656_16500 = G__16526;
i__15657_16501 = G__16527;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16497);
}
}


var G__16528 = seq__15557_16490;
var G__16529 = chunk__15559_16491;
var G__16530 = count__15560_16492;
var G__16531 = (i__15561_16493 + (1));
seq__15557_16490 = G__16528;
chunk__15559_16491 = G__16529;
count__15560_16492 = G__16530;
i__15561_16493 = G__16531;
continue;
} else {
var G__16532 = seq__15557_16490;
var G__16533 = chunk__15559_16491;
var G__16534 = count__15560_16492;
var G__16535 = (i__15561_16493 + (1));
seq__15557_16490 = G__16532;
chunk__15559_16491 = G__16533;
count__15560_16492 = G__16534;
i__15561_16493 = G__16535;
continue;
}
} else {
var temp__5804__auto___16536 = cljs.core.seq(seq__15557_16490);
if(temp__5804__auto___16536){
var seq__15557_16537__$1 = temp__5804__auto___16536;
if(cljs.core.chunked_seq_QMARK_(seq__15557_16537__$1)){
var c__5525__auto___16538 = cljs.core.chunk_first(seq__15557_16537__$1);
var G__16539 = cljs.core.chunk_rest(seq__15557_16537__$1);
var G__16540 = c__5525__auto___16538;
var G__16541 = cljs.core.count(c__5525__auto___16538);
var G__16542 = (0);
seq__15557_16490 = G__16539;
chunk__15559_16491 = G__16540;
count__15560_16492 = G__16541;
i__15561_16493 = G__16542;
continue;
} else {
var child_struct_16543 = cljs.core.first(seq__15557_16537__$1);
if((!((child_struct_16543 == null)))){
if(typeof child_struct_16543 === 'string'){
var text_16544 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16544),child_struct_16543].join(''));
} else {
var children_16545 = shadow.dom.svg_node(child_struct_16543);
if(cljs.core.seq_QMARK_(children_16545)){
var seq__15684_16548 = cljs.core.seq(children_16545);
var chunk__15686_16549 = null;
var count__15687_16550 = (0);
var i__15688_16551 = (0);
while(true){
if((i__15688_16551 < count__15687_16550)){
var child_16554 = chunk__15686_16549.cljs$core$IIndexed$_nth$arity$2(null,i__15688_16551);
if(cljs.core.truth_(child_16554)){
node.appendChild(child_16554);


var G__16555 = seq__15684_16548;
var G__16556 = chunk__15686_16549;
var G__16557 = count__15687_16550;
var G__16558 = (i__15688_16551 + (1));
seq__15684_16548 = G__16555;
chunk__15686_16549 = G__16556;
count__15687_16550 = G__16557;
i__15688_16551 = G__16558;
continue;
} else {
var G__16559 = seq__15684_16548;
var G__16560 = chunk__15686_16549;
var G__16561 = count__15687_16550;
var G__16562 = (i__15688_16551 + (1));
seq__15684_16548 = G__16559;
chunk__15686_16549 = G__16560;
count__15687_16550 = G__16561;
i__15688_16551 = G__16562;
continue;
}
} else {
var temp__5804__auto___16563__$1 = cljs.core.seq(seq__15684_16548);
if(temp__5804__auto___16563__$1){
var seq__15684_16564__$1 = temp__5804__auto___16563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15684_16564__$1)){
var c__5525__auto___16565 = cljs.core.chunk_first(seq__15684_16564__$1);
var G__16566 = cljs.core.chunk_rest(seq__15684_16564__$1);
var G__16567 = c__5525__auto___16565;
var G__16568 = cljs.core.count(c__5525__auto___16565);
var G__16569 = (0);
seq__15684_16548 = G__16566;
chunk__15686_16549 = G__16567;
count__15687_16550 = G__16568;
i__15688_16551 = G__16569;
continue;
} else {
var child_16570 = cljs.core.first(seq__15684_16564__$1);
if(cljs.core.truth_(child_16570)){
node.appendChild(child_16570);


var G__16571 = cljs.core.next(seq__15684_16564__$1);
var G__16572 = null;
var G__16573 = (0);
var G__16574 = (0);
seq__15684_16548 = G__16571;
chunk__15686_16549 = G__16572;
count__15687_16550 = G__16573;
i__15688_16551 = G__16574;
continue;
} else {
var G__16575 = cljs.core.next(seq__15684_16564__$1);
var G__16576 = null;
var G__16577 = (0);
var G__16578 = (0);
seq__15684_16548 = G__16575;
chunk__15686_16549 = G__16576;
count__15687_16550 = G__16577;
i__15688_16551 = G__16578;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16545);
}
}


var G__16579 = cljs.core.next(seq__15557_16537__$1);
var G__16580 = null;
var G__16581 = (0);
var G__16582 = (0);
seq__15557_16490 = G__16579;
chunk__15559_16491 = G__16580;
count__15560_16492 = G__16581;
i__15561_16493 = G__16582;
continue;
} else {
var G__16586 = cljs.core.next(seq__15557_16537__$1);
var G__16587 = null;
var G__16588 = (0);
var G__16589 = (0);
seq__15557_16490 = G__16586;
chunk__15559_16491 = G__16587;
count__15560_16492 = G__16588;
i__15561_16493 = G__16589;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16596 = arguments.length;
var i__5727__auto___16597 = (0);
while(true){
if((i__5727__auto___16597 < len__5726__auto___16596)){
args__5732__auto__.push((arguments[i__5727__auto___16597]));

var G__16598 = (i__5727__auto___16597 + (1));
i__5727__auto___16597 = G__16598;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15744){
var G__15745 = cljs.core.first(seq15744);
var seq15744__$1 = cljs.core.next(seq15744);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15745,seq15744__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
