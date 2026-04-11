goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15147 = (function (f,blockable,meta15148){
this.f = f;
this.blockable = blockable;
this.meta15148 = meta15148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15149,meta15148__$1){
var self__ = this;
var _15149__$1 = this;
return (new cljs.core.async.t_cljs$core$async15147(self__.f,self__.blockable,meta15148__$1));
}));

(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15149){
var self__ = this;
var _15149__$1 = this;
return self__.meta15148;
}));

(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15148","meta15148",-1762020650,null)], null);
}));

(cljs.core.async.t_cljs$core$async15147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15147");

(cljs.core.async.t_cljs$core$async15147.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15147.
 */
cljs.core.async.__GT_t_cljs$core$async15147 = (function cljs$core$async$__GT_t_cljs$core$async15147(f,blockable,meta15148){
return (new cljs.core.async.t_cljs$core$async15147(f,blockable,meta15148));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15144 = arguments.length;
switch (G__15144) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15147(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15177 = arguments.length;
switch (G__15177) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15202 = arguments.length;
switch (G__15202) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15223 = arguments.length;
switch (G__15223) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19333 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19333) : fn1.call(null,val_19333));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19333) : fn1.call(null,val_19333));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15244 = arguments.length;
switch (G__15244) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19349 = n;
var x_19350 = (0);
while(true){
if((x_19350 < n__5593__auto___19349)){
(a[x_19350] = x_19350);

var G__19353 = (x_19350 + (1));
x_19350 = G__19353;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15293 = (function (flag,meta15294){
this.flag = flag;
this.meta15294 = meta15294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15295,meta15294__$1){
var self__ = this;
var _15295__$1 = this;
return (new cljs.core.async.t_cljs$core$async15293(self__.flag,meta15294__$1));
}));

(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15295){
var self__ = this;
var _15295__$1 = this;
return self__.meta15294;
}));

(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15294","meta15294",1364404700,null)], null);
}));

(cljs.core.async.t_cljs$core$async15293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15293");

(cljs.core.async.t_cljs$core$async15293.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15293.
 */
cljs.core.async.__GT_t_cljs$core$async15293 = (function cljs$core$async$__GT_t_cljs$core$async15293(flag,meta15294){
return (new cljs.core.async.t_cljs$core$async15293(flag,meta15294));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15293(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15328 = (function (flag,cb,meta15329){
this.flag = flag;
this.cb = cb;
this.meta15329 = meta15329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15330,meta15329__$1){
var self__ = this;
var _15330__$1 = this;
return (new cljs.core.async.t_cljs$core$async15328(self__.flag,self__.cb,meta15329__$1));
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15330){
var self__ = this;
var _15330__$1 = this;
return self__.meta15329;
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15329","meta15329",1880080164,null)], null);
}));

(cljs.core.async.t_cljs$core$async15328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15328");

(cljs.core.async.t_cljs$core$async15328.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15328.
 */
cljs.core.async.__GT_t_cljs$core$async15328 = (function cljs$core$async$__GT_t_cljs$core$async15328(flag,cb,meta15329){
return (new cljs.core.async.t_cljs$core$async15328(flag,cb,meta15329));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15328(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15358_SHARP_){
var G__15371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15358_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15371) : fret.call(null,G__15371));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15359_SHARP_){
var G__15373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15359_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15373) : fret.call(null,G__15373));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19384 = (i + (1));
i = G__19384;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19391 = arguments.length;
var i__5727__auto___19393 = (0);
while(true){
if((i__5727__auto___19393 < len__5726__auto___19391)){
args__5732__auto__.push((arguments[i__5727__auto___19393]));

var G__19394 = (i__5727__auto___19393 + (1));
i__5727__auto___19393 = G__19394;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15408){
var map__15409 = p__15408;
var map__15409__$1 = cljs.core.__destructure_map(map__15409);
var opts = map__15409__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15386){
var G__15387 = cljs.core.first(seq15386);
var seq15386__$1 = cljs.core.next(seq15386);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15387,seq15386__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15431 = arguments.length;
switch (G__15431) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15025__auto___19407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_15473){
var state_val_15474 = (state_15473[(1)]);
if((state_val_15474 === (7))){
var inst_15469 = (state_15473[(2)]);
var state_15473__$1 = state_15473;
var statearr_15482_19408 = state_15473__$1;
(statearr_15482_19408[(2)] = inst_15469);

(statearr_15482_19408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (1))){
var state_15473__$1 = state_15473;
var statearr_15484_19409 = state_15473__$1;
(statearr_15484_19409[(2)] = null);

(statearr_15484_19409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (4))){
var inst_15444 = (state_15473[(7)]);
var inst_15444__$1 = (state_15473[(2)]);
var inst_15452 = (inst_15444__$1 == null);
var state_15473__$1 = (function (){var statearr_15489 = state_15473;
(statearr_15489[(7)] = inst_15444__$1);

return statearr_15489;
})();
if(cljs.core.truth_(inst_15452)){
var statearr_15490_19410 = state_15473__$1;
(statearr_15490_19410[(1)] = (5));

} else {
var statearr_15491_19411 = state_15473__$1;
(statearr_15491_19411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (13))){
var state_15473__$1 = state_15473;
var statearr_15499_19412 = state_15473__$1;
(statearr_15499_19412[(2)] = null);

(statearr_15499_19412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (6))){
var inst_15444 = (state_15473[(7)]);
var state_15473__$1 = state_15473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15473__$1,(11),to,inst_15444);
} else {
if((state_val_15474 === (3))){
var inst_15471 = (state_15473[(2)]);
var state_15473__$1 = state_15473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15473__$1,inst_15471);
} else {
if((state_val_15474 === (12))){
var state_15473__$1 = state_15473;
var statearr_15511_19414 = state_15473__$1;
(statearr_15511_19414[(2)] = null);

(statearr_15511_19414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (2))){
var state_15473__$1 = state_15473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15473__$1,(4),from);
} else {
if((state_val_15474 === (11))){
var inst_15462 = (state_15473[(2)]);
var state_15473__$1 = state_15473;
if(cljs.core.truth_(inst_15462)){
var statearr_15516_19418 = state_15473__$1;
(statearr_15516_19418[(1)] = (12));

} else {
var statearr_15517_19419 = state_15473__$1;
(statearr_15517_19419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (9))){
var state_15473__$1 = state_15473;
var statearr_15522_19420 = state_15473__$1;
(statearr_15522_19420[(2)] = null);

(statearr_15522_19420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (5))){
var state_15473__$1 = state_15473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15523_19421 = state_15473__$1;
(statearr_15523_19421[(1)] = (8));

} else {
var statearr_15525_19422 = state_15473__$1;
(statearr_15525_19422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (14))){
var inst_15467 = (state_15473[(2)]);
var state_15473__$1 = state_15473;
var statearr_15531_19423 = state_15473__$1;
(statearr_15531_19423[(2)] = inst_15467);

(statearr_15531_19423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (10))){
var inst_15459 = (state_15473[(2)]);
var state_15473__$1 = state_15473;
var statearr_15534_19433 = state_15473__$1;
(statearr_15534_19433[(2)] = inst_15459);

(statearr_15534_19433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (8))){
var inst_15455 = cljs.core.async.close_BANG_(to);
var state_15473__$1 = state_15473;
var statearr_15535_19435 = state_15473__$1;
(statearr_15535_19435[(2)] = inst_15455);

(statearr_15535_19435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_15536 = [null,null,null,null,null,null,null,null];
(statearr_15536[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_15536[(1)] = (1));

return statearr_15536;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_15473){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15473);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15540){var ex__13616__auto__ = e15540;
var statearr_15543_19446 = state_15473;
(statearr_15543_19446[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15473[(4)]))){
var statearr_15544_19451 = state_15473;
(statearr_15544_19451[(1)] = cljs.core.first((state_15473[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19456 = state_15473;
state_15473 = G__19456;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_15473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_15473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_15552 = f__15026__auto__();
(statearr_15552[(6)] = c__15025__auto___19407);

return statearr_15552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15564){
var vec__15565 = p__15564;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(1),null);
var job = vec__15565;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15025__auto___19463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_15582){
var state_val_15583 = (state_15582[(1)]);
if((state_val_15583 === (1))){
var state_15582__$1 = state_15582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15582__$1,(2),res,v);
} else {
if((state_val_15583 === (2))){
var inst_15577 = (state_15582[(2)]);
var inst_15578 = cljs.core.async.close_BANG_(res);
var state_15582__$1 = (function (){var statearr_15585 = state_15582;
(statearr_15585[(7)] = inst_15577);

return statearr_15585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15582__$1,inst_15578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_15588 = [null,null,null,null,null,null,null,null];
(statearr_15588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__);

(statearr_15588[(1)] = (1));

return statearr_15588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1 = (function (state_15582){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15582);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15592){var ex__13616__auto__ = e15592;
var statearr_15593_19465 = state_15582;
(statearr_15593_19465[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15582[(4)]))){
var statearr_15594_19466 = state_15582;
(statearr_15594_19466[(1)] = cljs.core.first((state_15582[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19471 = state_15582;
state_15582 = G__19471;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = function(state_15582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1.call(this,state_15582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_15601 = f__15026__auto__();
(statearr_15601[(6)] = c__15025__auto___19463);

return statearr_15601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15613){
var vec__15614 = p__15613;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15614,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15614,(1),null);
var job = vec__15614;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19484 = n;
var __19485 = (0);
while(true){
if((__19485 < n__5593__auto___19484)){
var G__15624_19486 = type;
var G__15624_19487__$1 = (((G__15624_19486 instanceof cljs.core.Keyword))?G__15624_19486.fqn:null);
switch (G__15624_19487__$1) {
case "compute":
var c__15025__auto___19493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19485,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = ((function (__19485,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function (state_15650){
var state_val_15651 = (state_15650[(1)]);
if((state_val_15651 === (1))){
var state_15650__$1 = state_15650;
var statearr_15660_19502 = state_15650__$1;
(statearr_15660_19502[(2)] = null);

(statearr_15660_19502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (2))){
var state_15650__$1 = state_15650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15650__$1,(4),jobs);
} else {
if((state_val_15651 === (3))){
var inst_15645 = (state_15650[(2)]);
var state_15650__$1 = state_15650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15650__$1,inst_15645);
} else {
if((state_val_15651 === (4))){
var inst_15631 = (state_15650[(2)]);
var inst_15634 = process__$1(inst_15631);
var state_15650__$1 = state_15650;
if(cljs.core.truth_(inst_15634)){
var statearr_15664_19510 = state_15650__$1;
(statearr_15664_19510[(1)] = (5));

} else {
var statearr_15665_19511 = state_15650__$1;
(statearr_15665_19511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (5))){
var state_15650__$1 = state_15650;
var statearr_15666_19516 = state_15650__$1;
(statearr_15666_19516[(2)] = null);

(statearr_15666_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (6))){
var state_15650__$1 = state_15650;
var statearr_15671_19517 = state_15650__$1;
(statearr_15671_19517[(2)] = null);

(statearr_15671_19517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (7))){
var inst_15642 = (state_15650[(2)]);
var state_15650__$1 = state_15650;
var statearr_15672_19518 = state_15650__$1;
(statearr_15672_19518[(2)] = inst_15642);

(statearr_15672_19518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19485,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
;
return ((function (__19485,switch__13612__auto__,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_15674 = [null,null,null,null,null,null,null];
(statearr_15674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__);

(statearr_15674[(1)] = (1));

return statearr_15674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1 = (function (state_15650){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15650);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15676){var ex__13616__auto__ = e15676;
var statearr_15678_19524 = state_15650;
(statearr_15678_19524[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15650[(4)]))){
var statearr_15679_19527 = state_15650;
(statearr_15679_19527[(1)] = cljs.core.first((state_15650[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19532 = state_15650;
state_15650 = G__19532;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = function(state_15650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1.call(this,state_15650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__;
})()
;})(__19485,switch__13612__auto__,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
})();
var state__15027__auto__ = (function (){var statearr_15690 = f__15026__auto__();
(statearr_15690[(6)] = c__15025__auto___19493);

return statearr_15690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
});})(__19485,c__15025__auto___19493,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
);


break;
case "async":
var c__15025__auto___19535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19485,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = ((function (__19485,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function (state_15705){
var state_val_15706 = (state_15705[(1)]);
if((state_val_15706 === (1))){
var state_15705__$1 = state_15705;
var statearr_15712_19544 = state_15705__$1;
(statearr_15712_19544[(2)] = null);

(statearr_15712_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (2))){
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15705__$1,(4),jobs);
} else {
if((state_val_15706 === (3))){
var inst_15703 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15705__$1,inst_15703);
} else {
if((state_val_15706 === (4))){
var inst_15695 = (state_15705[(2)]);
var inst_15696 = async(inst_15695);
var state_15705__$1 = state_15705;
if(cljs.core.truth_(inst_15696)){
var statearr_15714_19547 = state_15705__$1;
(statearr_15714_19547[(1)] = (5));

} else {
var statearr_15715_19548 = state_15705__$1;
(statearr_15715_19548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (5))){
var state_15705__$1 = state_15705;
var statearr_15718_19549 = state_15705__$1;
(statearr_15718_19549[(2)] = null);

(statearr_15718_19549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (6))){
var state_15705__$1 = state_15705;
var statearr_15720_19550 = state_15705__$1;
(statearr_15720_19550[(2)] = null);

(statearr_15720_19550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (7))){
var inst_15701 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15725_19552 = state_15705__$1;
(statearr_15725_19552[(2)] = inst_15701);

(statearr_15725_19552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19485,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
;
return ((function (__19485,switch__13612__auto__,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1 = (function (state_15705){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15705);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15733){var ex__13616__auto__ = e15733;
var statearr_15734_19554 = state_15705;
(statearr_15734_19554[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15705[(4)]))){
var statearr_15738_19555 = state_15705;
(statearr_15738_19555[(1)] = cljs.core.first((state_15705[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19559 = state_15705;
state_15705 = G__19559;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = function(state_15705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1.call(this,state_15705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__;
})()
;})(__19485,switch__13612__auto__,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
})();
var state__15027__auto__ = (function (){var statearr_15747 = f__15026__auto__();
(statearr_15747[(6)] = c__15025__auto___19535);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
});})(__19485,c__15025__auto___19535,G__15624_19486,G__15624_19487__$1,n__5593__auto___19484,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15624_19487__$1)].join('')));

}

var G__19560 = (__19485 + (1));
__19485 = G__19560;
continue;
} else {
}
break;
}

var c__15025__auto___19561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_15771){
var state_val_15772 = (state_15771[(1)]);
if((state_val_15772 === (7))){
var inst_15767 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
var statearr_15796_19564 = state_15771__$1;
(statearr_15796_19564[(2)] = inst_15767);

(statearr_15796_19564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15772 === (1))){
var state_15771__$1 = state_15771;
var statearr_15798_19565 = state_15771__$1;
(statearr_15798_19565[(2)] = null);

(statearr_15798_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15772 === (4))){
var inst_15752 = (state_15771[(7)]);
var inst_15752__$1 = (state_15771[(2)]);
var inst_15753 = (inst_15752__$1 == null);
var state_15771__$1 = (function (){var statearr_15799 = state_15771;
(statearr_15799[(7)] = inst_15752__$1);

return statearr_15799;
})();
if(cljs.core.truth_(inst_15753)){
var statearr_15801_19566 = state_15771__$1;
(statearr_15801_19566[(1)] = (5));

} else {
var statearr_15802_19570 = state_15771__$1;
(statearr_15802_19570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15772 === (6))){
var inst_15752 = (state_15771[(7)]);
var inst_15757 = (state_15771[(8)]);
var inst_15757__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15759 = [inst_15752,inst_15757__$1];
var inst_15760 = (new cljs.core.PersistentVector(null,2,(5),inst_15758,inst_15759,null));
var state_15771__$1 = (function (){var statearr_15805 = state_15771;
(statearr_15805[(8)] = inst_15757__$1);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15771__$1,(8),jobs,inst_15760);
} else {
if((state_val_15772 === (3))){
var inst_15769 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15771__$1,inst_15769);
} else {
if((state_val_15772 === (2))){
var state_15771__$1 = state_15771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15771__$1,(4),from);
} else {
if((state_val_15772 === (9))){
var inst_15764 = (state_15771[(2)]);
var state_15771__$1 = (function (){var statearr_15807 = state_15771;
(statearr_15807[(9)] = inst_15764);

return statearr_15807;
})();
var statearr_15808_19571 = state_15771__$1;
(statearr_15808_19571[(2)] = null);

(statearr_15808_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15772 === (5))){
var inst_15755 = cljs.core.async.close_BANG_(jobs);
var state_15771__$1 = state_15771;
var statearr_15820_19572 = state_15771__$1;
(statearr_15820_19572[(2)] = inst_15755);

(statearr_15820_19572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15772 === (8))){
var inst_15757 = (state_15771[(8)]);
var inst_15762 = (state_15771[(2)]);
var state_15771__$1 = (function (){var statearr_15823 = state_15771;
(statearr_15823[(10)] = inst_15762);

return statearr_15823;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15771__$1,(9),results,inst_15757);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_15829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__);

(statearr_15829[(1)] = (1));

return statearr_15829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1 = (function (state_15771){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15771);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15830){var ex__13616__auto__ = e15830;
var statearr_15833_19577 = state_15771;
(statearr_15833_19577[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15771[(4)]))){
var statearr_15835_19579 = state_15771;
(statearr_15835_19579[(1)] = cljs.core.first((state_15771[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19580 = state_15771;
state_15771 = G__19580;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = function(state_15771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1.call(this,state_15771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_15839 = f__15026__auto__();
(statearr_15839[(6)] = c__15025__auto___19561);

return statearr_15839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


var c__15025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_15888){
var state_val_15889 = (state_15888[(1)]);
if((state_val_15889 === (7))){
var inst_15883 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
var statearr_15896_19584 = state_15888__$1;
(statearr_15896_19584[(2)] = inst_15883);

(statearr_15896_19584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (20))){
var state_15888__$1 = state_15888;
var statearr_15903_19585 = state_15888__$1;
(statearr_15903_19585[(2)] = null);

(statearr_15903_19585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (1))){
var state_15888__$1 = state_15888;
var statearr_15906_19586 = state_15888__$1;
(statearr_15906_19586[(2)] = null);

(statearr_15906_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (4))){
var inst_15846 = (state_15888[(7)]);
var inst_15846__$1 = (state_15888[(2)]);
var inst_15847 = (inst_15846__$1 == null);
var state_15888__$1 = (function (){var statearr_15907 = state_15888;
(statearr_15907[(7)] = inst_15846__$1);

return statearr_15907;
})();
if(cljs.core.truth_(inst_15847)){
var statearr_15908_19590 = state_15888__$1;
(statearr_15908_19590[(1)] = (5));

} else {
var statearr_15909_19592 = state_15888__$1;
(statearr_15909_19592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (15))){
var inst_15863 = (state_15888[(8)]);
var state_15888__$1 = state_15888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15888__$1,(18),to,inst_15863);
} else {
if((state_val_15889 === (21))){
var inst_15878 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
var statearr_15915_19594 = state_15888__$1;
(statearr_15915_19594[(2)] = inst_15878);

(statearr_15915_19594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (13))){
var inst_15880 = (state_15888[(2)]);
var state_15888__$1 = (function (){var statearr_15920 = state_15888;
(statearr_15920[(9)] = inst_15880);

return statearr_15920;
})();
var statearr_15925_19595 = state_15888__$1;
(statearr_15925_19595[(2)] = null);

(statearr_15925_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (6))){
var inst_15846 = (state_15888[(7)]);
var state_15888__$1 = state_15888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15888__$1,(11),inst_15846);
} else {
if((state_val_15889 === (17))){
var inst_15873 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
if(cljs.core.truth_(inst_15873)){
var statearr_15934_19601 = state_15888__$1;
(statearr_15934_19601[(1)] = (19));

} else {
var statearr_15935_19602 = state_15888__$1;
(statearr_15935_19602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (3))){
var inst_15885 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15888__$1,inst_15885);
} else {
if((state_val_15889 === (12))){
var inst_15860 = (state_15888[(10)]);
var state_15888__$1 = state_15888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15888__$1,(14),inst_15860);
} else {
if((state_val_15889 === (2))){
var state_15888__$1 = state_15888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15888__$1,(4),results);
} else {
if((state_val_15889 === (19))){
var state_15888__$1 = state_15888;
var statearr_15937_19607 = state_15888__$1;
(statearr_15937_19607[(2)] = null);

(statearr_15937_19607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (11))){
var inst_15860 = (state_15888[(2)]);
var state_15888__$1 = (function (){var statearr_15938 = state_15888;
(statearr_15938[(10)] = inst_15860);

return statearr_15938;
})();
var statearr_15943_19609 = state_15888__$1;
(statearr_15943_19609[(2)] = null);

(statearr_15943_19609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (9))){
var state_15888__$1 = state_15888;
var statearr_15953_19610 = state_15888__$1;
(statearr_15953_19610[(2)] = null);

(statearr_15953_19610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (5))){
var state_15888__$1 = state_15888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15961_19611 = state_15888__$1;
(statearr_15961_19611[(1)] = (8));

} else {
var statearr_15967_19612 = state_15888__$1;
(statearr_15967_19612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (14))){
var inst_15866 = (state_15888[(11)]);
var inst_15863 = (state_15888[(8)]);
var inst_15863__$1 = (state_15888[(2)]);
var inst_15865 = (inst_15863__$1 == null);
var inst_15866__$1 = cljs.core.not(inst_15865);
var state_15888__$1 = (function (){var statearr_15978 = state_15888;
(statearr_15978[(11)] = inst_15866__$1);

(statearr_15978[(8)] = inst_15863__$1);

return statearr_15978;
})();
if(inst_15866__$1){
var statearr_15981_19613 = state_15888__$1;
(statearr_15981_19613[(1)] = (15));

} else {
var statearr_15983_19614 = state_15888__$1;
(statearr_15983_19614[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (16))){
var inst_15866 = (state_15888[(11)]);
var state_15888__$1 = state_15888;
var statearr_15985_19615 = state_15888__$1;
(statearr_15985_19615[(2)] = inst_15866);

(statearr_15985_19615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (10))){
var inst_15856 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
var statearr_15989_19620 = state_15888__$1;
(statearr_15989_19620[(2)] = inst_15856);

(statearr_15989_19620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (18))){
var inst_15870 = (state_15888[(2)]);
var state_15888__$1 = state_15888;
var statearr_15990_19621 = state_15888__$1;
(statearr_15990_19621[(2)] = inst_15870);

(statearr_15990_19621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15889 === (8))){
var inst_15853 = cljs.core.async.close_BANG_(to);
var state_15888__$1 = state_15888;
var statearr_15992_19626 = state_15888__$1;
(statearr_15992_19626[(2)] = inst_15853);

(statearr_15992_19626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_15996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__);

(statearr_15996[(1)] = (1));

return statearr_15996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1 = (function (state_15888){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_15888);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e15997){var ex__13616__auto__ = e15997;
var statearr_15999_19627 = state_15888;
(statearr_15999_19627[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_15888[(4)]))){
var statearr_16000_19628 = state_15888;
(statearr_16000_19628[(1)] = cljs.core.first((state_15888[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19632 = state_15888;
state_15888 = G__19632;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__ = function(state_15888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1.call(this,state_15888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_16001 = f__15026__auto__();
(statearr_16001[(6)] = c__15025__auto__);

return statearr_16001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

return c__15025__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16005 = arguments.length;
switch (G__16005) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16016 = arguments.length;
switch (G__16016) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16079 = arguments.length;
switch (G__16079) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15025__auto___19640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_16136){
var state_val_16137 = (state_16136[(1)]);
if((state_val_16137 === (7))){
var inst_16127 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16150_19641 = state_16136__$1;
(statearr_16150_19641[(2)] = inst_16127);

(statearr_16150_19641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (1))){
var state_16136__$1 = state_16136;
var statearr_16154_19642 = state_16136__$1;
(statearr_16154_19642[(2)] = null);

(statearr_16154_19642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (4))){
var inst_16106 = (state_16136[(7)]);
var inst_16106__$1 = (state_16136[(2)]);
var inst_16107 = (inst_16106__$1 == null);
var state_16136__$1 = (function (){var statearr_16161 = state_16136;
(statearr_16161[(7)] = inst_16106__$1);

return statearr_16161;
})();
if(cljs.core.truth_(inst_16107)){
var statearr_16162_19646 = state_16136__$1;
(statearr_16162_19646[(1)] = (5));

} else {
var statearr_16163_19647 = state_16136__$1;
(statearr_16163_19647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (13))){
var state_16136__$1 = state_16136;
var statearr_16165_19648 = state_16136__$1;
(statearr_16165_19648[(2)] = null);

(statearr_16165_19648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (6))){
var inst_16106 = (state_16136[(7)]);
var inst_16112 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16106) : p.call(null,inst_16106));
var state_16136__$1 = state_16136;
if(cljs.core.truth_(inst_16112)){
var statearr_16172_19649 = state_16136__$1;
(statearr_16172_19649[(1)] = (9));

} else {
var statearr_16173_19650 = state_16136__$1;
(statearr_16173_19650[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (3))){
var inst_16129 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16136__$1,inst_16129);
} else {
if((state_val_16137 === (12))){
var state_16136__$1 = state_16136;
var statearr_16175_19652 = state_16136__$1;
(statearr_16175_19652[(2)] = null);

(statearr_16175_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (2))){
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16136__$1,(4),ch);
} else {
if((state_val_16137 === (11))){
var inst_16106 = (state_16136[(7)]);
var inst_16116 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16136__$1,(8),inst_16116,inst_16106);
} else {
if((state_val_16137 === (9))){
var state_16136__$1 = state_16136;
var statearr_16182_19653 = state_16136__$1;
(statearr_16182_19653[(2)] = tc);

(statearr_16182_19653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (5))){
var inst_16109 = cljs.core.async.close_BANG_(tc);
var inst_16110 = cljs.core.async.close_BANG_(fc);
var state_16136__$1 = (function (){var statearr_16186 = state_16136;
(statearr_16186[(8)] = inst_16109);

return statearr_16186;
})();
var statearr_16187_19656 = state_16136__$1;
(statearr_16187_19656[(2)] = inst_16110);

(statearr_16187_19656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (14))){
var inst_16125 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16195_19657 = state_16136__$1;
(statearr_16195_19657[(2)] = inst_16125);

(statearr_16195_19657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (10))){
var state_16136__$1 = state_16136;
var statearr_16202_19659 = state_16136__$1;
(statearr_16202_19659[(2)] = fc);

(statearr_16202_19659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (8))){
var inst_16118 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
if(cljs.core.truth_(inst_16118)){
var statearr_16209_19662 = state_16136__$1;
(statearr_16209_19662[(1)] = (12));

} else {
var statearr_16214_19663 = state_16136__$1;
(statearr_16214_19663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_16223 = [null,null,null,null,null,null,null,null,null];
(statearr_16223[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_16223[(1)] = (1));

return statearr_16223;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_16136){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_16136);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e16229){var ex__13616__auto__ = e16229;
var statearr_16231_19675 = state_16136;
(statearr_16231_19675[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_16136[(4)]))){
var statearr_16238_19676 = state_16136;
(statearr_16238_19676[(1)] = cljs.core.first((state_16136[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19677 = state_16136;
state_16136 = G__19677;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_16136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_16136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_16250 = f__15026__auto__();
(statearr_16250[(6)] = c__15025__auto___19640);

return statearr_16250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_16277){
var state_val_16278 = (state_16277[(1)]);
if((state_val_16278 === (7))){
var inst_16273 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16279_19680 = state_16277__$1;
(statearr_16279_19680[(2)] = inst_16273);

(statearr_16279_19680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (1))){
var inst_16254 = init;
var inst_16255 = inst_16254;
var state_16277__$1 = (function (){var statearr_16287 = state_16277;
(statearr_16287[(7)] = inst_16255);

return statearr_16287;
})();
var statearr_16289_19681 = state_16277__$1;
(statearr_16289_19681[(2)] = null);

(statearr_16289_19681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (4))){
var inst_16258 = (state_16277[(8)]);
var inst_16258__$1 = (state_16277[(2)]);
var inst_16259 = (inst_16258__$1 == null);
var state_16277__$1 = (function (){var statearr_16307 = state_16277;
(statearr_16307[(8)] = inst_16258__$1);

return statearr_16307;
})();
if(cljs.core.truth_(inst_16259)){
var statearr_16308_19682 = state_16277__$1;
(statearr_16308_19682[(1)] = (5));

} else {
var statearr_16309_19683 = state_16277__$1;
(statearr_16309_19683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (6))){
var inst_16262 = (state_16277[(9)]);
var inst_16258 = (state_16277[(8)]);
var inst_16255 = (state_16277[(7)]);
var inst_16262__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16255,inst_16258) : f.call(null,inst_16255,inst_16258));
var inst_16265 = cljs.core.reduced_QMARK_(inst_16262__$1);
var state_16277__$1 = (function (){var statearr_16313 = state_16277;
(statearr_16313[(9)] = inst_16262__$1);

return statearr_16313;
})();
if(inst_16265){
var statearr_16315_19684 = state_16277__$1;
(statearr_16315_19684[(1)] = (8));

} else {
var statearr_16316_19685 = state_16277__$1;
(statearr_16316_19685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (3))){
var inst_16275 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16277__$1,inst_16275);
} else {
if((state_val_16278 === (2))){
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16277__$1,(4),ch);
} else {
if((state_val_16278 === (9))){
var inst_16262 = (state_16277[(9)]);
var inst_16255 = inst_16262;
var state_16277__$1 = (function (){var statearr_16325 = state_16277;
(statearr_16325[(7)] = inst_16255);

return statearr_16325;
})();
var statearr_16326_19686 = state_16277__$1;
(statearr_16326_19686[(2)] = null);

(statearr_16326_19686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (5))){
var inst_16255 = (state_16277[(7)]);
var state_16277__$1 = state_16277;
var statearr_16328_19690 = state_16277__$1;
(statearr_16328_19690[(2)] = inst_16255);

(statearr_16328_19690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (10))){
var inst_16271 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16329_19691 = state_16277__$1;
(statearr_16329_19691[(2)] = inst_16271);

(statearr_16329_19691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (8))){
var inst_16262 = (state_16277[(9)]);
var inst_16267 = cljs.core.deref(inst_16262);
var state_16277__$1 = state_16277;
var statearr_16332_19692 = state_16277__$1;
(statearr_16332_19692[(2)] = inst_16267);

(statearr_16332_19692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13613__auto____0 = (function (){
var statearr_16334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16334[(0)] = cljs$core$async$reduce_$_state_machine__13613__auto__);

(statearr_16334[(1)] = (1));

return statearr_16334;
});
var cljs$core$async$reduce_$_state_machine__13613__auto____1 = (function (state_16277){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_16277);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e16335){var ex__13616__auto__ = e16335;
var statearr_16336_19694 = state_16277;
(statearr_16336_19694[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_16277[(4)]))){
var statearr_16337_19695 = state_16277;
(statearr_16337_19695[(1)] = cljs.core.first((state_16277[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19696 = state_16277;
state_16277 = G__19696;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13613__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13613__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13613__auto____0;
cljs$core$async$reduce_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13613__auto____1;
return cljs$core$async$reduce_$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_16338 = f__15026__auto__();
(statearr_16338[(6)] = c__15025__auto__);

return statearr_16338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

return c__15025__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_16353){
var state_val_16354 = (state_16353[(1)]);
if((state_val_16354 === (1))){
var inst_16344 = cljs.core.async.reduce(f__$1,init,ch);
var state_16353__$1 = state_16353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16353__$1,(2),inst_16344);
} else {
if((state_val_16354 === (2))){
var inst_16346 = (state_16353[(2)]);
var inst_16350 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16346) : f__$1.call(null,inst_16346));
var state_16353__$1 = state_16353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16353__$1,inst_16350);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13613__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13613__auto____0 = (function (){
var statearr_16362 = [null,null,null,null,null,null,null];
(statearr_16362[(0)] = cljs$core$async$transduce_$_state_machine__13613__auto__);

(statearr_16362[(1)] = (1));

return statearr_16362;
});
var cljs$core$async$transduce_$_state_machine__13613__auto____1 = (function (state_16353){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_16353);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e16367){var ex__13616__auto__ = e16367;
var statearr_16368_19701 = state_16353;
(statearr_16368_19701[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_16353[(4)]))){
var statearr_16369_19702 = state_16353;
(statearr_16369_19702[(1)] = cljs.core.first((state_16353[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19703 = state_16353;
state_16353 = G__19703;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13613__auto__ = function(state_16353){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13613__auto____1.call(this,state_16353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13613__auto____0;
cljs$core$async$transduce_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13613__auto____1;
return cljs$core$async$transduce_$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_16370 = f__15026__auto__();
(statearr_16370[(6)] = c__15025__auto__);

return statearr_16370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

return c__15025__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16372 = arguments.length;
switch (G__16372) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_16400){
var state_val_16401 = (state_16400[(1)]);
if((state_val_16401 === (7))){
var inst_16380 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16402_19710 = state_16400__$1;
(statearr_16402_19710[(2)] = inst_16380);

(statearr_16402_19710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (1))){
var inst_16374 = cljs.core.seq(coll);
var inst_16375 = inst_16374;
var state_16400__$1 = (function (){var statearr_16405 = state_16400;
(statearr_16405[(7)] = inst_16375);

return statearr_16405;
})();
var statearr_16406_19711 = state_16400__$1;
(statearr_16406_19711[(2)] = null);

(statearr_16406_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (4))){
var inst_16375 = (state_16400[(7)]);
var inst_16378 = cljs.core.first(inst_16375);
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16400__$1,(7),ch,inst_16378);
} else {
if((state_val_16401 === (13))){
var inst_16394 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16411_19712 = state_16400__$1;
(statearr_16411_19712[(2)] = inst_16394);

(statearr_16411_19712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (6))){
var inst_16383 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
if(cljs.core.truth_(inst_16383)){
var statearr_16412_19715 = state_16400__$1;
(statearr_16412_19715[(1)] = (8));

} else {
var statearr_16413_19716 = state_16400__$1;
(statearr_16413_19716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (3))){
var inst_16398 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16400__$1,inst_16398);
} else {
if((state_val_16401 === (12))){
var state_16400__$1 = state_16400;
var statearr_16416_19717 = state_16400__$1;
(statearr_16416_19717[(2)] = null);

(statearr_16416_19717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (2))){
var inst_16375 = (state_16400[(7)]);
var state_16400__$1 = state_16400;
if(cljs.core.truth_(inst_16375)){
var statearr_16419_19718 = state_16400__$1;
(statearr_16419_19718[(1)] = (4));

} else {
var statearr_16426_19719 = state_16400__$1;
(statearr_16426_19719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (11))){
var inst_16391 = cljs.core.async.close_BANG_(ch);
var state_16400__$1 = state_16400;
var statearr_16427_19720 = state_16400__$1;
(statearr_16427_19720[(2)] = inst_16391);

(statearr_16427_19720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (9))){
var state_16400__$1 = state_16400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16428_19722 = state_16400__$1;
(statearr_16428_19722[(1)] = (11));

} else {
var statearr_16429_19723 = state_16400__$1;
(statearr_16429_19723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (5))){
var inst_16375 = (state_16400[(7)]);
var state_16400__$1 = state_16400;
var statearr_16430_19724 = state_16400__$1;
(statearr_16430_19724[(2)] = inst_16375);

(statearr_16430_19724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (10))){
var inst_16396 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16431_19726 = state_16400__$1;
(statearr_16431_19726[(2)] = inst_16396);

(statearr_16431_19726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (8))){
var inst_16375 = (state_16400[(7)]);
var inst_16385 = cljs.core.next(inst_16375);
var inst_16375__$1 = inst_16385;
var state_16400__$1 = (function (){var statearr_16433 = state_16400;
(statearr_16433[(7)] = inst_16375__$1);

return statearr_16433;
})();
var statearr_16437_19730 = state_16400__$1;
(statearr_16437_19730[(2)] = null);

(statearr_16437_19730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_16440 = [null,null,null,null,null,null,null,null];
(statearr_16440[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_16440[(1)] = (1));

return statearr_16440;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_16400){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_16400);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e16445){var ex__13616__auto__ = e16445;
var statearr_16449_19731 = state_16400;
(statearr_16449_19731[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_16400[(4)]))){
var statearr_16450_19734 = state_16400;
(statearr_16450_19734[(1)] = cljs.core.first((state_16400[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19736 = state_16400;
state_16400 = G__19736;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_16400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_16400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_16453 = f__15026__auto__();
(statearr_16453[(6)] = c__15025__auto__);

return statearr_16453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

return c__15025__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16458 = arguments.length;
switch (G__16458) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19741 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19741(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19742 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19742(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19749 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19749(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19754 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19754(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16601 = (function (ch,cs,meta16602){
this.ch = ch;
this.cs = cs;
this.meta16602 = meta16602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16603,meta16602__$1){
var self__ = this;
var _16603__$1 = this;
return (new cljs.core.async.t_cljs$core$async16601(self__.ch,self__.cs,meta16602__$1));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16603){
var self__ = this;
var _16603__$1 = this;
return self__.meta16602;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16602","meta16602",2029699167,null)], null);
}));

(cljs.core.async.t_cljs$core$async16601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16601");

(cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16601.
 */
cljs.core.async.__GT_t_cljs$core$async16601 = (function cljs$core$async$__GT_t_cljs$core$async16601(ch,cs,meta16602){
return (new cljs.core.async.t_cljs$core$async16601(ch,cs,meta16602));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16601(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15025__auto___19763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_16803){
var state_val_16804 = (state_16803[(1)]);
if((state_val_16804 === (7))){
var inst_16797 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16810_19766 = state_16803__$1;
(statearr_16810_19766[(2)] = inst_16797);

(statearr_16810_19766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (20))){
var inst_16659 = (state_16803[(7)]);
var inst_16696 = cljs.core.first(inst_16659);
var inst_16697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16696,(0),null);
var inst_16698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16696,(1),null);
var state_16803__$1 = (function (){var statearr_16813 = state_16803;
(statearr_16813[(8)] = inst_16697);

return statearr_16813;
})();
if(cljs.core.truth_(inst_16698)){
var statearr_16814_19771 = state_16803__$1;
(statearr_16814_19771[(1)] = (22));

} else {
var statearr_16815_19774 = state_16803__$1;
(statearr_16815_19774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (27))){
var inst_16740 = (state_16803[(9)]);
var inst_16729 = (state_16803[(10)]);
var inst_16622 = (state_16803[(11)]);
var inst_16731 = (state_16803[(12)]);
var inst_16740__$1 = cljs.core._nth(inst_16729,inst_16731);
var inst_16742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16740__$1,inst_16622,done);
var state_16803__$1 = (function (){var statearr_16817 = state_16803;
(statearr_16817[(9)] = inst_16740__$1);

return statearr_16817;
})();
if(cljs.core.truth_(inst_16742)){
var statearr_16818_19779 = state_16803__$1;
(statearr_16818_19779[(1)] = (30));

} else {
var statearr_16819_19781 = state_16803__$1;
(statearr_16819_19781[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (1))){
var state_16803__$1 = state_16803;
var statearr_16827_19782 = state_16803__$1;
(statearr_16827_19782[(2)] = null);

(statearr_16827_19782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (24))){
var inst_16659 = (state_16803[(7)]);
var inst_16703 = (state_16803[(2)]);
var inst_16704 = cljs.core.next(inst_16659);
var inst_16634 = inst_16704;
var inst_16635 = null;
var inst_16636 = (0);
var inst_16637 = (0);
var state_16803__$1 = (function (){var statearr_16829 = state_16803;
(statearr_16829[(13)] = inst_16703);

(statearr_16829[(14)] = inst_16634);

(statearr_16829[(15)] = inst_16637);

(statearr_16829[(16)] = inst_16636);

(statearr_16829[(17)] = inst_16635);

return statearr_16829;
})();
var statearr_16830_19787 = state_16803__$1;
(statearr_16830_19787[(2)] = null);

(statearr_16830_19787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (39))){
var state_16803__$1 = state_16803;
var statearr_16842_19788 = state_16803__$1;
(statearr_16842_19788[(2)] = null);

(statearr_16842_19788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (4))){
var inst_16622 = (state_16803[(11)]);
var inst_16622__$1 = (state_16803[(2)]);
var inst_16624 = (inst_16622__$1 == null);
var state_16803__$1 = (function (){var statearr_16844 = state_16803;
(statearr_16844[(11)] = inst_16622__$1);

return statearr_16844;
})();
if(cljs.core.truth_(inst_16624)){
var statearr_16845_19793 = state_16803__$1;
(statearr_16845_19793[(1)] = (5));

} else {
var statearr_16846_19796 = state_16803__$1;
(statearr_16846_19796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (15))){
var inst_16634 = (state_16803[(14)]);
var inst_16637 = (state_16803[(15)]);
var inst_16636 = (state_16803[(16)]);
var inst_16635 = (state_16803[(17)]);
var inst_16655 = (state_16803[(2)]);
var inst_16656 = (inst_16637 + (1));
var tmp16835 = inst_16634;
var tmp16836 = inst_16636;
var tmp16837 = inst_16635;
var inst_16634__$1 = tmp16835;
var inst_16635__$1 = tmp16837;
var inst_16636__$1 = tmp16836;
var inst_16637__$1 = inst_16656;
var state_16803__$1 = (function (){var statearr_16849 = state_16803;
(statearr_16849[(14)] = inst_16634__$1);

(statearr_16849[(15)] = inst_16637__$1);

(statearr_16849[(16)] = inst_16636__$1);

(statearr_16849[(17)] = inst_16635__$1);

(statearr_16849[(18)] = inst_16655);

return statearr_16849;
})();
var statearr_16851_19801 = state_16803__$1;
(statearr_16851_19801[(2)] = null);

(statearr_16851_19801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (21))){
var inst_16707 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16855_19802 = state_16803__$1;
(statearr_16855_19802[(2)] = inst_16707);

(statearr_16855_19802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (31))){
var inst_16740 = (state_16803[(9)]);
var inst_16747 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16740);
var state_16803__$1 = state_16803;
var statearr_16864_19810 = state_16803__$1;
(statearr_16864_19810[(2)] = inst_16747);

(statearr_16864_19810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (32))){
var inst_16729 = (state_16803[(10)]);
var inst_16728 = (state_16803[(19)]);
var inst_16731 = (state_16803[(12)]);
var inst_16730 = (state_16803[(20)]);
var inst_16749 = (state_16803[(2)]);
var inst_16750 = (inst_16731 + (1));
var tmp16852 = inst_16729;
var tmp16853 = inst_16728;
var tmp16854 = inst_16730;
var inst_16728__$1 = tmp16853;
var inst_16729__$1 = tmp16852;
var inst_16730__$1 = tmp16854;
var inst_16731__$1 = inst_16750;
var state_16803__$1 = (function (){var statearr_16866 = state_16803;
(statearr_16866[(10)] = inst_16729__$1);

(statearr_16866[(21)] = inst_16749);

(statearr_16866[(19)] = inst_16728__$1);

(statearr_16866[(12)] = inst_16731__$1);

(statearr_16866[(20)] = inst_16730__$1);

return statearr_16866;
})();
var statearr_16872_19832 = state_16803__$1;
(statearr_16872_19832[(2)] = null);

(statearr_16872_19832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (40))){
var inst_16767 = (state_16803[(22)]);
var inst_16771 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16767);
var state_16803__$1 = state_16803;
var statearr_16878_19838 = state_16803__$1;
(statearr_16878_19838[(2)] = inst_16771);

(statearr_16878_19838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (33))){
var inst_16753 = (state_16803[(23)]);
var inst_16757 = cljs.core.chunked_seq_QMARK_(inst_16753);
var state_16803__$1 = state_16803;
if(inst_16757){
var statearr_16888_19850 = state_16803__$1;
(statearr_16888_19850[(1)] = (36));

} else {
var statearr_16893_19852 = state_16803__$1;
(statearr_16893_19852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (13))){
var inst_16648 = (state_16803[(24)]);
var inst_16651 = cljs.core.async.close_BANG_(inst_16648);
var state_16803__$1 = state_16803;
var statearr_16902_19857 = state_16803__$1;
(statearr_16902_19857[(2)] = inst_16651);

(statearr_16902_19857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (22))){
var inst_16697 = (state_16803[(8)]);
var inst_16700 = cljs.core.async.close_BANG_(inst_16697);
var state_16803__$1 = state_16803;
var statearr_16909_19859 = state_16803__$1;
(statearr_16909_19859[(2)] = inst_16700);

(statearr_16909_19859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (36))){
var inst_16753 = (state_16803[(23)]);
var inst_16762 = cljs.core.chunk_first(inst_16753);
var inst_16763 = cljs.core.chunk_rest(inst_16753);
var inst_16764 = cljs.core.count(inst_16762);
var inst_16728 = inst_16763;
var inst_16729 = inst_16762;
var inst_16730 = inst_16764;
var inst_16731 = (0);
var state_16803__$1 = (function (){var statearr_16913 = state_16803;
(statearr_16913[(10)] = inst_16729);

(statearr_16913[(19)] = inst_16728);

(statearr_16913[(12)] = inst_16731);

(statearr_16913[(20)] = inst_16730);

return statearr_16913;
})();
var statearr_16914_19863 = state_16803__$1;
(statearr_16914_19863[(2)] = null);

(statearr_16914_19863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (41))){
var inst_16753 = (state_16803[(23)]);
var inst_16773 = (state_16803[(2)]);
var inst_16774 = cljs.core.next(inst_16753);
var inst_16728 = inst_16774;
var inst_16729 = null;
var inst_16730 = (0);
var inst_16731 = (0);
var state_16803__$1 = (function (){var statearr_16916 = state_16803;
(statearr_16916[(25)] = inst_16773);

(statearr_16916[(10)] = inst_16729);

(statearr_16916[(19)] = inst_16728);

(statearr_16916[(12)] = inst_16731);

(statearr_16916[(20)] = inst_16730);

return statearr_16916;
})();
var statearr_16917_19868 = state_16803__$1;
(statearr_16917_19868[(2)] = null);

(statearr_16917_19868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (43))){
var state_16803__$1 = state_16803;
var statearr_16919_19869 = state_16803__$1;
(statearr_16919_19869[(2)] = null);

(statearr_16919_19869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (29))){
var inst_16783 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16921_19879 = state_16803__$1;
(statearr_16921_19879[(2)] = inst_16783);

(statearr_16921_19879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (44))){
var inst_16794 = (state_16803[(2)]);
var state_16803__$1 = (function (){var statearr_16922 = state_16803;
(statearr_16922[(26)] = inst_16794);

return statearr_16922;
})();
var statearr_16923_19880 = state_16803__$1;
(statearr_16923_19880[(2)] = null);

(statearr_16923_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (6))){
var inst_16720 = (state_16803[(27)]);
var inst_16719 = cljs.core.deref(cs);
var inst_16720__$1 = cljs.core.keys(inst_16719);
var inst_16721 = cljs.core.count(inst_16720__$1);
var inst_16722 = cljs.core.reset_BANG_(dctr,inst_16721);
var inst_16727 = cljs.core.seq(inst_16720__$1);
var inst_16728 = inst_16727;
var inst_16729 = null;
var inst_16730 = (0);
var inst_16731 = (0);
var state_16803__$1 = (function (){var statearr_16935 = state_16803;
(statearr_16935[(10)] = inst_16729);

(statearr_16935[(19)] = inst_16728);

(statearr_16935[(12)] = inst_16731);

(statearr_16935[(28)] = inst_16722);

(statearr_16935[(20)] = inst_16730);

(statearr_16935[(27)] = inst_16720__$1);

return statearr_16935;
})();
var statearr_16946_19884 = state_16803__$1;
(statearr_16946_19884[(2)] = null);

(statearr_16946_19884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (28))){
var inst_16753 = (state_16803[(23)]);
var inst_16728 = (state_16803[(19)]);
var inst_16753__$1 = cljs.core.seq(inst_16728);
var state_16803__$1 = (function (){var statearr_16956 = state_16803;
(statearr_16956[(23)] = inst_16753__$1);

return statearr_16956;
})();
if(inst_16753__$1){
var statearr_16966_19885 = state_16803__$1;
(statearr_16966_19885[(1)] = (33));

} else {
var statearr_16970_19886 = state_16803__$1;
(statearr_16970_19886[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (25))){
var inst_16731 = (state_16803[(12)]);
var inst_16730 = (state_16803[(20)]);
var inst_16737 = (inst_16731 < inst_16730);
var inst_16738 = inst_16737;
var state_16803__$1 = state_16803;
if(cljs.core.truth_(inst_16738)){
var statearr_16972_19891 = state_16803__$1;
(statearr_16972_19891[(1)] = (27));

} else {
var statearr_16976_19892 = state_16803__$1;
(statearr_16976_19892[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (34))){
var state_16803__$1 = state_16803;
var statearr_16980_19893 = state_16803__$1;
(statearr_16980_19893[(2)] = null);

(statearr_16980_19893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (17))){
var state_16803__$1 = state_16803;
var statearr_16981_19894 = state_16803__$1;
(statearr_16981_19894[(2)] = null);

(statearr_16981_19894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (3))){
var inst_16799 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16803__$1,inst_16799);
} else {
if((state_val_16804 === (12))){
var inst_16714 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16982_19896 = state_16803__$1;
(statearr_16982_19896[(2)] = inst_16714);

(statearr_16982_19896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (2))){
var state_16803__$1 = state_16803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16803__$1,(4),ch);
} else {
if((state_val_16804 === (23))){
var state_16803__$1 = state_16803;
var statearr_16983_19897 = state_16803__$1;
(statearr_16983_19897[(2)] = null);

(statearr_16983_19897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (35))){
var inst_16780 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_17001_19900 = state_16803__$1;
(statearr_17001_19900[(2)] = inst_16780);

(statearr_17001_19900[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (19))){
var inst_16659 = (state_16803[(7)]);
var inst_16687 = cljs.core.chunk_first(inst_16659);
var inst_16688 = cljs.core.chunk_rest(inst_16659);
var inst_16689 = cljs.core.count(inst_16687);
var inst_16634 = inst_16688;
var inst_16635 = inst_16687;
var inst_16636 = inst_16689;
var inst_16637 = (0);
var state_16803__$1 = (function (){var statearr_17004 = state_16803;
(statearr_17004[(14)] = inst_16634);

(statearr_17004[(15)] = inst_16637);

(statearr_17004[(16)] = inst_16636);

(statearr_17004[(17)] = inst_16635);

return statearr_17004;
})();
var statearr_17011_19904 = state_16803__$1;
(statearr_17011_19904[(2)] = null);

(statearr_17011_19904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (11))){
var inst_16659 = (state_16803[(7)]);
var inst_16634 = (state_16803[(14)]);
var inst_16659__$1 = cljs.core.seq(inst_16634);
var state_16803__$1 = (function (){var statearr_17012 = state_16803;
(statearr_17012[(7)] = inst_16659__$1);

return statearr_17012;
})();
if(inst_16659__$1){
var statearr_17013_19907 = state_16803__$1;
(statearr_17013_19907[(1)] = (16));

} else {
var statearr_17016_19911 = state_16803__$1;
(statearr_17016_19911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (9))){
var inst_16716 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_17020_19913 = state_16803__$1;
(statearr_17020_19913[(2)] = inst_16716);

(statearr_17020_19913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (5))){
var inst_16632 = cljs.core.deref(cs);
var inst_16633 = cljs.core.seq(inst_16632);
var inst_16634 = inst_16633;
var inst_16635 = null;
var inst_16636 = (0);
var inst_16637 = (0);
var state_16803__$1 = (function (){var statearr_17028 = state_16803;
(statearr_17028[(14)] = inst_16634);

(statearr_17028[(15)] = inst_16637);

(statearr_17028[(16)] = inst_16636);

(statearr_17028[(17)] = inst_16635);

return statearr_17028;
})();
var statearr_17035_19914 = state_16803__$1;
(statearr_17035_19914[(2)] = null);

(statearr_17035_19914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (14))){
var state_16803__$1 = state_16803;
var statearr_17036_19916 = state_16803__$1;
(statearr_17036_19916[(2)] = null);

(statearr_17036_19916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (45))){
var inst_16790 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_17038_19917 = state_16803__$1;
(statearr_17038_19917[(2)] = inst_16790);

(statearr_17038_19917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (26))){
var inst_16720 = (state_16803[(27)]);
var inst_16785 = (state_16803[(2)]);
var inst_16787 = cljs.core.seq(inst_16720);
var state_16803__$1 = (function (){var statearr_17044 = state_16803;
(statearr_17044[(29)] = inst_16785);

return statearr_17044;
})();
if(inst_16787){
var statearr_17045_19918 = state_16803__$1;
(statearr_17045_19918[(1)] = (42));

} else {
var statearr_17046_19919 = state_16803__$1;
(statearr_17046_19919[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (16))){
var inst_16659 = (state_16803[(7)]);
var inst_16685 = cljs.core.chunked_seq_QMARK_(inst_16659);
var state_16803__$1 = state_16803;
if(inst_16685){
var statearr_17051_19920 = state_16803__$1;
(statearr_17051_19920[(1)] = (19));

} else {
var statearr_17052_19921 = state_16803__$1;
(statearr_17052_19921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (38))){
var inst_16777 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_17054_19922 = state_16803__$1;
(statearr_17054_19922[(2)] = inst_16777);

(statearr_17054_19922[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (30))){
var state_16803__$1 = state_16803;
var statearr_17055_19923 = state_16803__$1;
(statearr_17055_19923[(2)] = null);

(statearr_17055_19923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (10))){
var inst_16637 = (state_16803[(15)]);
var inst_16635 = (state_16803[(17)]);
var inst_16647 = cljs.core._nth(inst_16635,inst_16637);
var inst_16648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16647,(0),null);
var inst_16649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16647,(1),null);
var state_16803__$1 = (function (){var statearr_17056 = state_16803;
(statearr_17056[(24)] = inst_16648);

return statearr_17056;
})();
if(cljs.core.truth_(inst_16649)){
var statearr_17058_19924 = state_16803__$1;
(statearr_17058_19924[(1)] = (13));

} else {
var statearr_17059_19925 = state_16803__$1;
(statearr_17059_19925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (18))){
var inst_16711 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_17064_19926 = state_16803__$1;
(statearr_17064_19926[(2)] = inst_16711);

(statearr_17064_19926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (42))){
var state_16803__$1 = state_16803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16803__$1,(45),dchan);
} else {
if((state_val_16804 === (37))){
var inst_16767 = (state_16803[(22)]);
var inst_16753 = (state_16803[(23)]);
var inst_16622 = (state_16803[(11)]);
var inst_16767__$1 = cljs.core.first(inst_16753);
var inst_16768 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16767__$1,inst_16622,done);
var state_16803__$1 = (function (){var statearr_17069 = state_16803;
(statearr_17069[(22)] = inst_16767__$1);

return statearr_17069;
})();
if(cljs.core.truth_(inst_16768)){
var statearr_17070_19928 = state_16803__$1;
(statearr_17070_19928[(1)] = (39));

} else {
var statearr_17071_19930 = state_16803__$1;
(statearr_17071_19930[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (8))){
var inst_16637 = (state_16803[(15)]);
var inst_16636 = (state_16803[(16)]);
var inst_16639 = (inst_16637 < inst_16636);
var inst_16640 = inst_16639;
var state_16803__$1 = state_16803;
if(cljs.core.truth_(inst_16640)){
var statearr_17072_19932 = state_16803__$1;
(statearr_17072_19932[(1)] = (10));

} else {
var statearr_17073_19933 = state_16803__$1;
(statearr_17073_19933[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$mult_$_state_machine__13613__auto__ = null;
var cljs$core$async$mult_$_state_machine__13613__auto____0 = (function (){
var statearr_17074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17074[(0)] = cljs$core$async$mult_$_state_machine__13613__auto__);

(statearr_17074[(1)] = (1));

return statearr_17074;
});
var cljs$core$async$mult_$_state_machine__13613__auto____1 = (function (state_16803){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_16803);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e17076){var ex__13616__auto__ = e17076;
var statearr_17077_19934 = state_16803;
(statearr_17077_19934[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_16803[(4)]))){
var statearr_17079_19936 = state_16803;
(statearr_17079_19936[(1)] = cljs.core.first((state_16803[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19937 = state_16803;
state_16803 = G__19937;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13613__auto__ = function(state_16803){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13613__auto____1.call(this,state_16803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13613__auto____0;
cljs$core$async$mult_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13613__auto____1;
return cljs$core$async$mult_$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_17082 = f__15026__auto__();
(statearr_17082[(6)] = c__15025__auto___19763);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17088 = arguments.length;
switch (G__17088) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19943 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19943(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19945 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19945(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19947 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19947(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19949 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19949(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19951 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19951(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19955 = arguments.length;
var i__5727__auto___19956 = (0);
while(true){
if((i__5727__auto___19956 < len__5726__auto___19955)){
args__5732__auto__.push((arguments[i__5727__auto___19956]));

var G__19957 = (i__5727__auto___19956 + (1));
i__5727__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17156){
var map__17159 = p__17156;
var map__17159__$1 = cljs.core.__destructure_map(map__17159);
var opts = map__17159__$1;
var statearr_17160_19961 = state;
(statearr_17160_19961[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17162_19962 = state;
(statearr_17162_19962[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17166_19963 = state;
(statearr_17166_19963[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17149){
var G__17150 = cljs.core.first(seq17149);
var seq17149__$1 = cljs.core.next(seq17149);
var G__17151 = cljs.core.first(seq17149__$1);
var seq17149__$2 = cljs.core.next(seq17149__$1);
var G__17152 = cljs.core.first(seq17149__$2);
var seq17149__$3 = cljs.core.next(seq17149__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17150,G__17151,G__17152,seq17149__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17193 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17194){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17194 = meta17194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17195,meta17194__$1){
var self__ = this;
var _17195__$1 = this;
return (new cljs.core.async.t_cljs$core$async17193(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17194__$1));
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17195){
var self__ = this;
var _17195__$1 = this;
return self__.meta17194;
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17193.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17194","meta17194",579428205,null)], null);
}));

(cljs.core.async.t_cljs$core$async17193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17193");

(cljs.core.async.t_cljs$core$async17193.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17193.
 */
cljs.core.async.__GT_t_cljs$core$async17193 = (function cljs$core$async$__GT_t_cljs$core$async17193(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17194){
return (new cljs.core.async.t_cljs$core$async17193(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17194));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17193(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15025__auto___19980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_17298){
var state_val_17299 = (state_17298[(1)]);
if((state_val_17299 === (7))){
var inst_17256 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17256)){
var statearr_17304_19983 = state_17298__$1;
(statearr_17304_19983[(1)] = (8));

} else {
var statearr_17305_19984 = state_17298__$1;
(statearr_17305_19984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (20))){
var inst_17249 = (state_17298[(7)]);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17298__$1,(23),out,inst_17249);
} else {
if((state_val_17299 === (1))){
var inst_17230 = calc_state();
var inst_17231 = cljs.core.__destructure_map(inst_17230);
var inst_17232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17231,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17231,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17235 = inst_17230;
var state_17298__$1 = (function (){var statearr_17311 = state_17298;
(statearr_17311[(8)] = inst_17235);

(statearr_17311[(9)] = inst_17233);

(statearr_17311[(10)] = inst_17232);

(statearr_17311[(11)] = inst_17234);

return statearr_17311;
})();
var statearr_17314_19986 = state_17298__$1;
(statearr_17314_19986[(2)] = null);

(statearr_17314_19986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (24))){
var inst_17238 = (state_17298[(12)]);
var inst_17235 = inst_17238;
var state_17298__$1 = (function (){var statearr_17318 = state_17298;
(statearr_17318[(8)] = inst_17235);

return statearr_17318;
})();
var statearr_17319_19991 = state_17298__$1;
(statearr_17319_19991[(2)] = null);

(statearr_17319_19991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (4))){
var inst_17251 = (state_17298[(13)]);
var inst_17249 = (state_17298[(7)]);
var inst_17248 = (state_17298[(2)]);
var inst_17249__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17248,(0),null);
var inst_17250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17248,(1),null);
var inst_17251__$1 = (inst_17249__$1 == null);
var state_17298__$1 = (function (){var statearr_17320 = state_17298;
(statearr_17320[(13)] = inst_17251__$1);

(statearr_17320[(14)] = inst_17250);

(statearr_17320[(7)] = inst_17249__$1);

return statearr_17320;
})();
if(cljs.core.truth_(inst_17251__$1)){
var statearr_17323_19992 = state_17298__$1;
(statearr_17323_19992[(1)] = (5));

} else {
var statearr_17327_19994 = state_17298__$1;
(statearr_17327_19994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (15))){
var inst_17270 = (state_17298[(15)]);
var inst_17240 = (state_17298[(16)]);
var inst_17270__$1 = cljs.core.empty_QMARK_(inst_17240);
var state_17298__$1 = (function (){var statearr_17332 = state_17298;
(statearr_17332[(15)] = inst_17270__$1);

return statearr_17332;
})();
if(inst_17270__$1){
var statearr_17336_19995 = state_17298__$1;
(statearr_17336_19995[(1)] = (17));

} else {
var statearr_17337_19996 = state_17298__$1;
(statearr_17337_19996[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (21))){
var inst_17238 = (state_17298[(12)]);
var inst_17235 = inst_17238;
var state_17298__$1 = (function (){var statearr_17341 = state_17298;
(statearr_17341[(8)] = inst_17235);

return statearr_17341;
})();
var statearr_17342_19997 = state_17298__$1;
(statearr_17342_19997[(2)] = null);

(statearr_17342_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (13))){
var inst_17263 = (state_17298[(2)]);
var inst_17264 = calc_state();
var inst_17235 = inst_17264;
var state_17298__$1 = (function (){var statearr_17343 = state_17298;
(statearr_17343[(8)] = inst_17235);

(statearr_17343[(17)] = inst_17263);

return statearr_17343;
})();
var statearr_17344_19998 = state_17298__$1;
(statearr_17344_19998[(2)] = null);

(statearr_17344_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (22))){
var inst_17292 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17345_19999 = state_17298__$1;
(statearr_17345_19999[(2)] = inst_17292);

(statearr_17345_19999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (6))){
var inst_17250 = (state_17298[(14)]);
var inst_17254 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17250,change);
var state_17298__$1 = state_17298;
var statearr_17346_20001 = state_17298__$1;
(statearr_17346_20001[(2)] = inst_17254);

(statearr_17346_20001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (25))){
var state_17298__$1 = state_17298;
var statearr_17351_20003 = state_17298__$1;
(statearr_17351_20003[(2)] = null);

(statearr_17351_20003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (17))){
var inst_17250 = (state_17298[(14)]);
var inst_17241 = (state_17298[(18)]);
var inst_17272 = (inst_17241.cljs$core$IFn$_invoke$arity$1 ? inst_17241.cljs$core$IFn$_invoke$arity$1(inst_17250) : inst_17241.call(null,inst_17250));
var inst_17273 = cljs.core.not(inst_17272);
var state_17298__$1 = state_17298;
var statearr_17355_20009 = state_17298__$1;
(statearr_17355_20009[(2)] = inst_17273);

(statearr_17355_20009[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (3))){
var inst_17296 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17298__$1,inst_17296);
} else {
if((state_val_17299 === (12))){
var state_17298__$1 = state_17298;
var statearr_17359_20013 = state_17298__$1;
(statearr_17359_20013[(2)] = null);

(statearr_17359_20013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (2))){
var inst_17235 = (state_17298[(8)]);
var inst_17238 = (state_17298[(12)]);
var inst_17238__$1 = cljs.core.__destructure_map(inst_17235);
var inst_17240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17298__$1 = (function (){var statearr_17360 = state_17298;
(statearr_17360[(12)] = inst_17238__$1);

(statearr_17360[(16)] = inst_17240);

(statearr_17360[(18)] = inst_17241);

return statearr_17360;
})();
return cljs.core.async.ioc_alts_BANG_(state_17298__$1,(4),inst_17242);
} else {
if((state_val_17299 === (23))){
var inst_17281 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17281)){
var statearr_17365_20014 = state_17298__$1;
(statearr_17365_20014[(1)] = (24));

} else {
var statearr_17370_20015 = state_17298__$1;
(statearr_17370_20015[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (19))){
var inst_17276 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17374_20023 = state_17298__$1;
(statearr_17374_20023[(2)] = inst_17276);

(statearr_17374_20023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (11))){
var inst_17250 = (state_17298[(14)]);
var inst_17260 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17250);
var state_17298__$1 = state_17298;
var statearr_17382_20026 = state_17298__$1;
(statearr_17382_20026[(2)] = inst_17260);

(statearr_17382_20026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (9))){
var inst_17250 = (state_17298[(14)]);
var inst_17240 = (state_17298[(16)]);
var inst_17267 = (state_17298[(19)]);
var inst_17267__$1 = (inst_17240.cljs$core$IFn$_invoke$arity$1 ? inst_17240.cljs$core$IFn$_invoke$arity$1(inst_17250) : inst_17240.call(null,inst_17250));
var state_17298__$1 = (function (){var statearr_17387 = state_17298;
(statearr_17387[(19)] = inst_17267__$1);

return statearr_17387;
})();
if(cljs.core.truth_(inst_17267__$1)){
var statearr_17388_20027 = state_17298__$1;
(statearr_17388_20027[(1)] = (14));

} else {
var statearr_17389_20029 = state_17298__$1;
(statearr_17389_20029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (5))){
var inst_17251 = (state_17298[(13)]);
var state_17298__$1 = state_17298;
var statearr_17395_20034 = state_17298__$1;
(statearr_17395_20034[(2)] = inst_17251);

(statearr_17395_20034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (14))){
var inst_17267 = (state_17298[(19)]);
var state_17298__$1 = state_17298;
var statearr_17398_20036 = state_17298__$1;
(statearr_17398_20036[(2)] = inst_17267);

(statearr_17398_20036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (26))){
var inst_17288 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17399_20037 = state_17298__$1;
(statearr_17399_20037[(2)] = inst_17288);

(statearr_17399_20037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (16))){
var inst_17278 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17278)){
var statearr_17400_20038 = state_17298__$1;
(statearr_17400_20038[(1)] = (20));

} else {
var statearr_17401_20039 = state_17298__$1;
(statearr_17401_20039[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (10))){
var inst_17294 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17402_20040 = state_17298__$1;
(statearr_17402_20040[(2)] = inst_17294);

(statearr_17402_20040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (18))){
var inst_17270 = (state_17298[(15)]);
var state_17298__$1 = state_17298;
var statearr_17404_20042 = state_17298__$1;
(statearr_17404_20042[(2)] = inst_17270);

(statearr_17404_20042[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17299 === (8))){
var inst_17249 = (state_17298[(7)]);
var inst_17258 = (inst_17249 == null);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17258)){
var statearr_17405_20043 = state_17298__$1;
(statearr_17405_20043[(1)] = (11));

} else {
var statearr_17406_20044 = state_17298__$1;
(statearr_17406_20044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13613__auto__ = null;
var cljs$core$async$mix_$_state_machine__13613__auto____0 = (function (){
var statearr_17411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17411[(0)] = cljs$core$async$mix_$_state_machine__13613__auto__);

(statearr_17411[(1)] = (1));

return statearr_17411;
});
var cljs$core$async$mix_$_state_machine__13613__auto____1 = (function (state_17298){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_17298);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e17414){var ex__13616__auto__ = e17414;
var statearr_17415_20046 = state_17298;
(statearr_17415_20046[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_17298[(4)]))){
var statearr_17416_20047 = state_17298;
(statearr_17416_20047[(1)] = cljs.core.first((state_17298[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20048 = state_17298;
state_17298 = G__20048;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13613__auto__ = function(state_17298){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13613__auto____1.call(this,state_17298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13613__auto____0;
cljs$core$async$mix_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13613__auto____1;
return cljs$core$async$mix_$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_17418 = f__15026__auto__();
(statearr_17418[(6)] = c__15025__auto___19980);

return statearr_17418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20050 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20050(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20052 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20052(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20058 = (function() {
var G__20059 = null;
var G__20059__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20059__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20059 = function(p,v){
switch(arguments.length){
case 1:
return G__20059__1.call(this,p);
case 2:
return G__20059__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20059.cljs$core$IFn$_invoke$arity$1 = G__20059__1;
G__20059.cljs$core$IFn$_invoke$arity$2 = G__20059__2;
return G__20059;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17464 = arguments.length;
switch (G__17464) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20058(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20058(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17480 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17481){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17481 = meta17481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17482,meta17481__$1){
var self__ = this;
var _17482__$1 = this;
return (new cljs.core.async.t_cljs$core$async17480(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17481__$1));
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17482){
var self__ = this;
var _17482__$1 = this;
return self__.meta17481;
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17481","meta17481",1948834947,null)], null);
}));

(cljs.core.async.t_cljs$core$async17480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17480");

(cljs.core.async.t_cljs$core$async17480.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17480.
 */
cljs.core.async.__GT_t_cljs$core$async17480 = (function cljs$core$async$__GT_t_cljs$core$async17480(ch,topic_fn,buf_fn,mults,ensure_mult,meta17481){
return (new cljs.core.async.t_cljs$core$async17480(ch,topic_fn,buf_fn,mults,ensure_mult,meta17481));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17473 = arguments.length;
switch (G__17473) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17471_SHARP_){
if(cljs.core.truth_((p1__17471_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17471_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17471_SHARP_.call(null,topic)))){
return p1__17471_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17471_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17480(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15025__auto___20072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_17581){
var state_val_17582 = (state_17581[(1)]);
if((state_val_17582 === (7))){
var inst_17574 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17590_20073 = state_17581__$1;
(statearr_17590_20073[(2)] = inst_17574);

(statearr_17590_20073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (20))){
var state_17581__$1 = state_17581;
var statearr_17591_20074 = state_17581__$1;
(statearr_17591_20074[(2)] = null);

(statearr_17591_20074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (1))){
var state_17581__$1 = state_17581;
var statearr_17592_20075 = state_17581__$1;
(statearr_17592_20075[(2)] = null);

(statearr_17592_20075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (24))){
var inst_17556 = (state_17581[(7)]);
var inst_17566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17556);
var state_17581__$1 = state_17581;
var statearr_17593_20076 = state_17581__$1;
(statearr_17593_20076[(2)] = inst_17566);

(statearr_17593_20076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (4))){
var inst_17494 = (state_17581[(8)]);
var inst_17494__$1 = (state_17581[(2)]);
var inst_17495 = (inst_17494__$1 == null);
var state_17581__$1 = (function (){var statearr_17594 = state_17581;
(statearr_17594[(8)] = inst_17494__$1);

return statearr_17594;
})();
if(cljs.core.truth_(inst_17495)){
var statearr_17595_20077 = state_17581__$1;
(statearr_17595_20077[(1)] = (5));

} else {
var statearr_17596_20078 = state_17581__$1;
(statearr_17596_20078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (15))){
var inst_17549 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17597_20079 = state_17581__$1;
(statearr_17597_20079[(2)] = inst_17549);

(statearr_17597_20079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (21))){
var inst_17571 = (state_17581[(2)]);
var state_17581__$1 = (function (){var statearr_17599 = state_17581;
(statearr_17599[(9)] = inst_17571);

return statearr_17599;
})();
var statearr_17600_20085 = state_17581__$1;
(statearr_17600_20085[(2)] = null);

(statearr_17600_20085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (13))){
var inst_17521 = (state_17581[(10)]);
var inst_17523 = cljs.core.chunked_seq_QMARK_(inst_17521);
var state_17581__$1 = state_17581;
if(inst_17523){
var statearr_17602_20086 = state_17581__$1;
(statearr_17602_20086[(1)] = (16));

} else {
var statearr_17605_20087 = state_17581__$1;
(statearr_17605_20087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (22))){
var inst_17562 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
if(cljs.core.truth_(inst_17562)){
var statearr_17606_20088 = state_17581__$1;
(statearr_17606_20088[(1)] = (23));

} else {
var statearr_17609_20089 = state_17581__$1;
(statearr_17609_20089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (6))){
var inst_17558 = (state_17581[(11)]);
var inst_17494 = (state_17581[(8)]);
var inst_17556 = (state_17581[(7)]);
var inst_17556__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17494) : topic_fn.call(null,inst_17494));
var inst_17557 = cljs.core.deref(mults);
var inst_17558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17557,inst_17556__$1);
var state_17581__$1 = (function (){var statearr_17610 = state_17581;
(statearr_17610[(11)] = inst_17558__$1);

(statearr_17610[(7)] = inst_17556__$1);

return statearr_17610;
})();
if(cljs.core.truth_(inst_17558__$1)){
var statearr_17611_20091 = state_17581__$1;
(statearr_17611_20091[(1)] = (19));

} else {
var statearr_17612_20092 = state_17581__$1;
(statearr_17612_20092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (25))){
var inst_17568 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17613_20094 = state_17581__$1;
(statearr_17613_20094[(2)] = inst_17568);

(statearr_17613_20094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (17))){
var inst_17521 = (state_17581[(10)]);
var inst_17540 = cljs.core.first(inst_17521);
var inst_17541 = cljs.core.async.muxch_STAR_(inst_17540);
var inst_17542 = cljs.core.async.close_BANG_(inst_17541);
var inst_17543 = cljs.core.next(inst_17521);
var inst_17504 = inst_17543;
var inst_17505 = null;
var inst_17506 = (0);
var inst_17507 = (0);
var state_17581__$1 = (function (){var statearr_17615 = state_17581;
(statearr_17615[(12)] = inst_17542);

(statearr_17615[(13)] = inst_17505);

(statearr_17615[(14)] = inst_17507);

(statearr_17615[(15)] = inst_17506);

(statearr_17615[(16)] = inst_17504);

return statearr_17615;
})();
var statearr_17629_20099 = state_17581__$1;
(statearr_17629_20099[(2)] = null);

(statearr_17629_20099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (3))){
var inst_17576 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17581__$1,inst_17576);
} else {
if((state_val_17582 === (12))){
var inst_17551 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17638_20100 = state_17581__$1;
(statearr_17638_20100[(2)] = inst_17551);

(statearr_17638_20100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (2))){
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17581__$1,(4),ch);
} else {
if((state_val_17582 === (23))){
var state_17581__$1 = state_17581;
var statearr_17643_20101 = state_17581__$1;
(statearr_17643_20101[(2)] = null);

(statearr_17643_20101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (19))){
var inst_17558 = (state_17581[(11)]);
var inst_17494 = (state_17581[(8)]);
var inst_17560 = cljs.core.async.muxch_STAR_(inst_17558);
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17581__$1,(22),inst_17560,inst_17494);
} else {
if((state_val_17582 === (11))){
var inst_17521 = (state_17581[(10)]);
var inst_17504 = (state_17581[(16)]);
var inst_17521__$1 = cljs.core.seq(inst_17504);
var state_17581__$1 = (function (){var statearr_17645 = state_17581;
(statearr_17645[(10)] = inst_17521__$1);

return statearr_17645;
})();
if(inst_17521__$1){
var statearr_17646_20102 = state_17581__$1;
(statearr_17646_20102[(1)] = (13));

} else {
var statearr_17647_20103 = state_17581__$1;
(statearr_17647_20103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (9))){
var inst_17553 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17648_20104 = state_17581__$1;
(statearr_17648_20104[(2)] = inst_17553);

(statearr_17648_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (5))){
var inst_17501 = cljs.core.deref(mults);
var inst_17502 = cljs.core.vals(inst_17501);
var inst_17503 = cljs.core.seq(inst_17502);
var inst_17504 = inst_17503;
var inst_17505 = null;
var inst_17506 = (0);
var inst_17507 = (0);
var state_17581__$1 = (function (){var statearr_17656 = state_17581;
(statearr_17656[(13)] = inst_17505);

(statearr_17656[(14)] = inst_17507);

(statearr_17656[(15)] = inst_17506);

(statearr_17656[(16)] = inst_17504);

return statearr_17656;
})();
var statearr_17657_20105 = state_17581__$1;
(statearr_17657_20105[(2)] = null);

(statearr_17657_20105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (14))){
var state_17581__$1 = state_17581;
var statearr_17662_20106 = state_17581__$1;
(statearr_17662_20106[(2)] = null);

(statearr_17662_20106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (16))){
var inst_17521 = (state_17581[(10)]);
var inst_17534 = cljs.core.chunk_first(inst_17521);
var inst_17536 = cljs.core.chunk_rest(inst_17521);
var inst_17537 = cljs.core.count(inst_17534);
var inst_17504 = inst_17536;
var inst_17505 = inst_17534;
var inst_17506 = inst_17537;
var inst_17507 = (0);
var state_17581__$1 = (function (){var statearr_17663 = state_17581;
(statearr_17663[(13)] = inst_17505);

(statearr_17663[(14)] = inst_17507);

(statearr_17663[(15)] = inst_17506);

(statearr_17663[(16)] = inst_17504);

return statearr_17663;
})();
var statearr_17664_20111 = state_17581__$1;
(statearr_17664_20111[(2)] = null);

(statearr_17664_20111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (10))){
var inst_17505 = (state_17581[(13)]);
var inst_17507 = (state_17581[(14)]);
var inst_17506 = (state_17581[(15)]);
var inst_17504 = (state_17581[(16)]);
var inst_17515 = cljs.core._nth(inst_17505,inst_17507);
var inst_17516 = cljs.core.async.muxch_STAR_(inst_17515);
var inst_17517 = cljs.core.async.close_BANG_(inst_17516);
var inst_17518 = (inst_17507 + (1));
var tmp17659 = inst_17505;
var tmp17660 = inst_17506;
var tmp17661 = inst_17504;
var inst_17504__$1 = tmp17661;
var inst_17505__$1 = tmp17659;
var inst_17506__$1 = tmp17660;
var inst_17507__$1 = inst_17518;
var state_17581__$1 = (function (){var statearr_17675 = state_17581;
(statearr_17675[(13)] = inst_17505__$1);

(statearr_17675[(17)] = inst_17517);

(statearr_17675[(14)] = inst_17507__$1);

(statearr_17675[(15)] = inst_17506__$1);

(statearr_17675[(16)] = inst_17504__$1);

return statearr_17675;
})();
var statearr_17678_20113 = state_17581__$1;
(statearr_17678_20113[(2)] = null);

(statearr_17678_20113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (18))){
var inst_17546 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17680_20118 = state_17581__$1;
(statearr_17680_20118[(2)] = inst_17546);

(statearr_17680_20118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (8))){
var inst_17507 = (state_17581[(14)]);
var inst_17506 = (state_17581[(15)]);
var inst_17509 = (inst_17507 < inst_17506);
var inst_17510 = inst_17509;
var state_17581__$1 = state_17581;
if(cljs.core.truth_(inst_17510)){
var statearr_17685_20119 = state_17581__$1;
(statearr_17685_20119[(1)] = (10));

} else {
var statearr_17686_20120 = state_17581__$1;
(statearr_17686_20120[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_17697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17697[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_17697[(1)] = (1));

return statearr_17697;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_17581){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_17581);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e17710){var ex__13616__auto__ = e17710;
var statearr_17711_20121 = state_17581;
(statearr_17711_20121[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_17581[(4)]))){
var statearr_17712_20122 = state_17581;
(statearr_17712_20122[(1)] = cljs.core.first((state_17581[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20123 = state_17581;
state_17581 = G__20123;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_17581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_17581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_17724 = f__15026__auto__();
(statearr_17724[(6)] = c__15025__auto___20072);

return statearr_17724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17728 = arguments.length;
switch (G__17728) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17738 = arguments.length;
switch (G__17738) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17747 = arguments.length;
switch (G__17747) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15025__auto___20139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_17823){
var state_val_17824 = (state_17823[(1)]);
if((state_val_17824 === (7))){
var state_17823__$1 = state_17823;
var statearr_17833_20144 = state_17823__$1;
(statearr_17833_20144[(2)] = null);

(statearr_17833_20144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (1))){
var state_17823__$1 = state_17823;
var statearr_17835_20145 = state_17823__$1;
(statearr_17835_20145[(2)] = null);

(statearr_17835_20145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (4))){
var inst_17766 = (state_17823[(7)]);
var inst_17767 = (state_17823[(8)]);
var inst_17769 = (inst_17767 < inst_17766);
var state_17823__$1 = state_17823;
if(cljs.core.truth_(inst_17769)){
var statearr_17836_20146 = state_17823__$1;
(statearr_17836_20146[(1)] = (6));

} else {
var statearr_17837_20147 = state_17823__$1;
(statearr_17837_20147[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (15))){
var inst_17796 = (state_17823[(9)]);
var inst_17801 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17796);
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17823__$1,(17),out,inst_17801);
} else {
if((state_val_17824 === (13))){
var inst_17796 = (state_17823[(9)]);
var inst_17796__$1 = (state_17823[(2)]);
var inst_17797 = cljs.core.some(cljs.core.nil_QMARK_,inst_17796__$1);
var state_17823__$1 = (function (){var statearr_17841 = state_17823;
(statearr_17841[(9)] = inst_17796__$1);

return statearr_17841;
})();
if(cljs.core.truth_(inst_17797)){
var statearr_17844_20152 = state_17823__$1;
(statearr_17844_20152[(1)] = (14));

} else {
var statearr_17846_20153 = state_17823__$1;
(statearr_17846_20153[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (6))){
var state_17823__$1 = state_17823;
var statearr_17849_20154 = state_17823__$1;
(statearr_17849_20154[(2)] = null);

(statearr_17849_20154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (17))){
var inst_17803 = (state_17823[(2)]);
var state_17823__$1 = (function (){var statearr_17857 = state_17823;
(statearr_17857[(10)] = inst_17803);

return statearr_17857;
})();
var statearr_17858_20156 = state_17823__$1;
(statearr_17858_20156[(2)] = null);

(statearr_17858_20156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (3))){
var inst_17808 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17823__$1,inst_17808);
} else {
if((state_val_17824 === (12))){
var _ = (function (){var statearr_17865 = state_17823;
(statearr_17865[(4)] = cljs.core.rest((state_17823[(4)])));

return statearr_17865;
})();
var state_17823__$1 = state_17823;
var ex17855 = (state_17823__$1[(2)]);
var statearr_17869_20157 = state_17823__$1;
(statearr_17869_20157[(5)] = ex17855);


if((ex17855 instanceof Object)){
var statearr_17873_20158 = state_17823__$1;
(statearr_17873_20158[(1)] = (11));

(statearr_17873_20158[(5)] = null);

} else {
throw ex17855;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (2))){
var inst_17765 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17766 = cnt;
var inst_17767 = (0);
var state_17823__$1 = (function (){var statearr_17886 = state_17823;
(statearr_17886[(7)] = inst_17766);

(statearr_17886[(8)] = inst_17767);

(statearr_17886[(11)] = inst_17765);

return statearr_17886;
})();
var statearr_17888_20159 = state_17823__$1;
(statearr_17888_20159[(2)] = null);

(statearr_17888_20159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (11))){
var inst_17772 = (state_17823[(2)]);
var inst_17773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17823__$1 = (function (){var statearr_17889 = state_17823;
(statearr_17889[(12)] = inst_17772);

return statearr_17889;
})();
var statearr_17890_20164 = state_17823__$1;
(statearr_17890_20164[(2)] = inst_17773);

(statearr_17890_20164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (9))){
var inst_17767 = (state_17823[(8)]);
var _ = (function (){var statearr_17892 = state_17823;
(statearr_17892[(4)] = cljs.core.cons((12),(state_17823[(4)])));

return statearr_17892;
})();
var inst_17779 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17767) : chs__$1.call(null,inst_17767));
var inst_17780 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17767) : done.call(null,inst_17767));
var inst_17781 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17779,inst_17780);
var ___$1 = (function (){var statearr_17904 = state_17823;
(statearr_17904[(4)] = cljs.core.rest((state_17823[(4)])));

return statearr_17904;
})();
var state_17823__$1 = state_17823;
var statearr_17907_20167 = state_17823__$1;
(statearr_17907_20167[(2)] = inst_17781);

(statearr_17907_20167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (5))){
var inst_17792 = (state_17823[(2)]);
var state_17823__$1 = (function (){var statearr_17908 = state_17823;
(statearr_17908[(13)] = inst_17792);

return statearr_17908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17823__$1,(13),dchan);
} else {
if((state_val_17824 === (14))){
var inst_17799 = cljs.core.async.close_BANG_(out);
var state_17823__$1 = state_17823;
var statearr_17910_20168 = state_17823__$1;
(statearr_17910_20168[(2)] = inst_17799);

(statearr_17910_20168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (16))){
var inst_17806 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17915_20169 = state_17823__$1;
(statearr_17915_20169[(2)] = inst_17806);

(statearr_17915_20169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (10))){
var inst_17767 = (state_17823[(8)]);
var inst_17784 = (state_17823[(2)]);
var inst_17786 = (inst_17767 + (1));
var inst_17767__$1 = inst_17786;
var state_17823__$1 = (function (){var statearr_17918 = state_17823;
(statearr_17918[(8)] = inst_17767__$1);

(statearr_17918[(14)] = inst_17784);

return statearr_17918;
})();
var statearr_17921_20172 = state_17823__$1;
(statearr_17921_20172[(2)] = null);

(statearr_17921_20172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (8))){
var inst_17790 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17930_20173 = state_17823__$1;
(statearr_17930_20173[(2)] = inst_17790);

(statearr_17930_20173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_17934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17934[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_17934[(1)] = (1));

return statearr_17934;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_17823){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_17823);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e17935){var ex__13616__auto__ = e17935;
var statearr_17936_20176 = state_17823;
(statearr_17936_20176[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_17823[(4)]))){
var statearr_17937_20177 = state_17823;
(statearr_17937_20177[(1)] = cljs.core.first((state_17823[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20181 = state_17823;
state_17823 = G__20181;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_17823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_17823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_17942 = f__15026__auto__();
(statearr_17942[(6)] = c__15025__auto___20139);

return statearr_17942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17956 = arguments.length;
switch (G__17956) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18009){
var state_val_18010 = (state_18009[(1)]);
if((state_val_18010 === (7))){
var inst_17979 = (state_18009[(7)]);
var inst_17980 = (state_18009[(8)]);
var inst_17979__$1 = (state_18009[(2)]);
var inst_17980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17979__$1,(0),null);
var inst_17981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17979__$1,(1),null);
var inst_17982 = (inst_17980__$1 == null);
var state_18009__$1 = (function (){var statearr_18019 = state_18009;
(statearr_18019[(7)] = inst_17979__$1);

(statearr_18019[(9)] = inst_17981);

(statearr_18019[(8)] = inst_17980__$1);

return statearr_18019;
})();
if(cljs.core.truth_(inst_17982)){
var statearr_18020_20185 = state_18009__$1;
(statearr_18020_20185[(1)] = (8));

} else {
var statearr_18024_20186 = state_18009__$1;
(statearr_18024_20186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (1))){
var inst_17969 = cljs.core.vec(chs);
var inst_17970 = inst_17969;
var state_18009__$1 = (function (){var statearr_18027 = state_18009;
(statearr_18027[(10)] = inst_17970);

return statearr_18027;
})();
var statearr_18029_20187 = state_18009__$1;
(statearr_18029_20187[(2)] = null);

(statearr_18029_20187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (4))){
var inst_17970 = (state_18009[(10)]);
var state_18009__$1 = state_18009;
return cljs.core.async.ioc_alts_BANG_(state_18009__$1,(7),inst_17970);
} else {
if((state_val_18010 === (6))){
var inst_18003 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18030_20188 = state_18009__$1;
(statearr_18030_20188[(2)] = inst_18003);

(statearr_18030_20188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (3))){
var inst_18005 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18009__$1,inst_18005);
} else {
if((state_val_18010 === (2))){
var inst_17970 = (state_18009[(10)]);
var inst_17972 = cljs.core.count(inst_17970);
var inst_17973 = (inst_17972 > (0));
var state_18009__$1 = state_18009;
if(cljs.core.truth_(inst_17973)){
var statearr_18035_20189 = state_18009__$1;
(statearr_18035_20189[(1)] = (4));

} else {
var statearr_18036_20190 = state_18009__$1;
(statearr_18036_20190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (11))){
var inst_17970 = (state_18009[(10)]);
var inst_17996 = (state_18009[(2)]);
var tmp18031 = inst_17970;
var inst_17970__$1 = tmp18031;
var state_18009__$1 = (function (){var statearr_18040 = state_18009;
(statearr_18040[(11)] = inst_17996);

(statearr_18040[(10)] = inst_17970__$1);

return statearr_18040;
})();
var statearr_18041_20191 = state_18009__$1;
(statearr_18041_20191[(2)] = null);

(statearr_18041_20191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (9))){
var inst_17980 = (state_18009[(8)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18009__$1,(11),out,inst_17980);
} else {
if((state_val_18010 === (5))){
var inst_18001 = cljs.core.async.close_BANG_(out);
var state_18009__$1 = state_18009;
var statearr_18055_20195 = state_18009__$1;
(statearr_18055_20195[(2)] = inst_18001);

(statearr_18055_20195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (10))){
var inst_17999 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18059_20197 = state_18009__$1;
(statearr_18059_20197[(2)] = inst_17999);

(statearr_18059_20197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (8))){
var inst_17979 = (state_18009[(7)]);
var inst_17981 = (state_18009[(9)]);
var inst_17980 = (state_18009[(8)]);
var inst_17970 = (state_18009[(10)]);
var inst_17991 = (function (){var cs = inst_17970;
var vec__17975 = inst_17979;
var v = inst_17980;
var c = inst_17981;
return (function (p1__17945_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17945_SHARP_);
});
})();
var inst_17992 = cljs.core.filterv(inst_17991,inst_17970);
var inst_17970__$1 = inst_17992;
var state_18009__$1 = (function (){var statearr_18072 = state_18009;
(statearr_18072[(10)] = inst_17970__$1);

return statearr_18072;
})();
var statearr_18073_20198 = state_18009__$1;
(statearr_18073_20198[(2)] = null);

(statearr_18073_20198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_18077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18077[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_18077[(1)] = (1));

return statearr_18077;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_18009){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18009);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18078){var ex__13616__auto__ = e18078;
var statearr_18079_20199 = state_18009;
(statearr_18079_20199[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18009[(4)]))){
var statearr_18081_20200 = state_18009;
(statearr_18081_20200[(1)] = cljs.core.first((state_18009[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20201 = state_18009;
state_18009 = G__20201;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18085 = f__15026__auto__();
(statearr_18085[(6)] = c__15025__auto___20183);

return statearr_18085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18091 = arguments.length;
switch (G__18091) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18155){
var state_val_18156 = (state_18155[(1)]);
if((state_val_18156 === (7))){
var inst_18136 = (state_18155[(7)]);
var inst_18136__$1 = (state_18155[(2)]);
var inst_18137 = (inst_18136__$1 == null);
var inst_18138 = cljs.core.not(inst_18137);
var state_18155__$1 = (function (){var statearr_18164 = state_18155;
(statearr_18164[(7)] = inst_18136__$1);

return statearr_18164;
})();
if(inst_18138){
var statearr_18168_20206 = state_18155__$1;
(statearr_18168_20206[(1)] = (8));

} else {
var statearr_18172_20207 = state_18155__$1;
(statearr_18172_20207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (1))){
var inst_18122 = (0);
var state_18155__$1 = (function (){var statearr_18173 = state_18155;
(statearr_18173[(8)] = inst_18122);

return statearr_18173;
})();
var statearr_18174_20208 = state_18155__$1;
(statearr_18174_20208[(2)] = null);

(statearr_18174_20208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (4))){
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18155__$1,(7),ch);
} else {
if((state_val_18156 === (6))){
var inst_18150 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18175_20209 = state_18155__$1;
(statearr_18175_20209[(2)] = inst_18150);

(statearr_18175_20209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (3))){
var inst_18152 = (state_18155[(2)]);
var inst_18153 = cljs.core.async.close_BANG_(out);
var state_18155__$1 = (function (){var statearr_18191 = state_18155;
(statearr_18191[(9)] = inst_18152);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18155__$1,inst_18153);
} else {
if((state_val_18156 === (2))){
var inst_18122 = (state_18155[(8)]);
var inst_18127 = (inst_18122 < n);
var state_18155__$1 = state_18155;
if(cljs.core.truth_(inst_18127)){
var statearr_18196_20210 = state_18155__$1;
(statearr_18196_20210[(1)] = (4));

} else {
var statearr_18198_20211 = state_18155__$1;
(statearr_18198_20211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (11))){
var inst_18122 = (state_18155[(8)]);
var inst_18141 = (state_18155[(2)]);
var inst_18143 = (inst_18122 + (1));
var inst_18122__$1 = inst_18143;
var state_18155__$1 = (function (){var statearr_18205 = state_18155;
(statearr_18205[(10)] = inst_18141);

(statearr_18205[(8)] = inst_18122__$1);

return statearr_18205;
})();
var statearr_18206_20213 = state_18155__$1;
(statearr_18206_20213[(2)] = null);

(statearr_18206_20213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (9))){
var state_18155__$1 = state_18155;
var statearr_18210_20215 = state_18155__$1;
(statearr_18210_20215[(2)] = null);

(statearr_18210_20215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (5))){
var state_18155__$1 = state_18155;
var statearr_18211_20216 = state_18155__$1;
(statearr_18211_20216[(2)] = null);

(statearr_18211_20216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (10))){
var inst_18147 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18212_20221 = state_18155__$1;
(statearr_18212_20221[(2)] = inst_18147);

(statearr_18212_20221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18156 === (8))){
var inst_18136 = (state_18155[(7)]);
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18155__$1,(11),out,inst_18136);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_18216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18216[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_18216[(1)] = (1));

return statearr_18216;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_18155){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18155);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18217){var ex__13616__auto__ = e18217;
var statearr_18219_20225 = state_18155;
(statearr_18219_20225[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18155[(4)]))){
var statearr_18224_20226 = state_18155;
(statearr_18224_20226[(1)] = cljs.core.first((state_18155[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20227 = state_18155;
state_18155 = G__20227;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_18155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_18155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18231 = f__15026__auto__();
(statearr_18231[(6)] = c__15025__auto___20203);

return statearr_18231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18253 = (function (f,ch,meta18247,_,fn1,meta18254){
this.f = f;
this.ch = ch;
this.meta18247 = meta18247;
this._ = _;
this.fn1 = fn1;
this.meta18254 = meta18254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18255,meta18254__$1){
var self__ = this;
var _18255__$1 = this;
return (new cljs.core.async.t_cljs$core$async18253(self__.f,self__.ch,self__.meta18247,self__._,self__.fn1,meta18254__$1));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18255){
var self__ = this;
var _18255__$1 = this;
return self__.meta18254;
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18242_SHARP_){
var G__18266 = (((p1__18242_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18242_SHARP_) : self__.f.call(null,p1__18242_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18266) : f1.call(null,G__18266));
});
}));

(cljs.core.async.t_cljs$core$async18253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18247","meta18247",241116735,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18246","cljs.core.async/t_cljs$core$async18246",949834217,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18254","meta18254",-1297680767,null)], null);
}));

(cljs.core.async.t_cljs$core$async18253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18253");

(cljs.core.async.t_cljs$core$async18253.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18253.
 */
cljs.core.async.__GT_t_cljs$core$async18253 = (function cljs$core$async$__GT_t_cljs$core$async18253(f,ch,meta18247,_,fn1,meta18254){
return (new cljs.core.async.t_cljs$core$async18253(f,ch,meta18247,_,fn1,meta18254));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18246 = (function (f,ch,meta18247){
this.f = f;
this.ch = ch;
this.meta18247 = meta18247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18248,meta18247__$1){
var self__ = this;
var _18248__$1 = this;
return (new cljs.core.async.t_cljs$core$async18246(self__.f,self__.ch,meta18247__$1));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18248){
var self__ = this;
var _18248__$1 = this;
return self__.meta18247;
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18253(self__.f,self__.ch,self__.meta18247,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18274 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18274) : self__.f.call(null,G__18274));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18247","meta18247",241116735,null)], null);
}));

(cljs.core.async.t_cljs$core$async18246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18246");

(cljs.core.async.t_cljs$core$async18246.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18246.
 */
cljs.core.async.__GT_t_cljs$core$async18246 = (function cljs$core$async$__GT_t_cljs$core$async18246(f,ch,meta18247){
return (new cljs.core.async.t_cljs$core$async18246(f,ch,meta18247));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18246(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18280 = (function (f,ch,meta18281){
this.f = f;
this.ch = ch;
this.meta18281 = meta18281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18282,meta18281__$1){
var self__ = this;
var _18282__$1 = this;
return (new cljs.core.async.t_cljs$core$async18280(self__.f,self__.ch,meta18281__$1));
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18282){
var self__ = this;
var _18282__$1 = this;
return self__.meta18281;
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18281","meta18281",1183070134,null)], null);
}));

(cljs.core.async.t_cljs$core$async18280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18280");

(cljs.core.async.t_cljs$core$async18280.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18280.
 */
cljs.core.async.__GT_t_cljs$core$async18280 = (function cljs$core$async$__GT_t_cljs$core$async18280(f,ch,meta18281){
return (new cljs.core.async.t_cljs$core$async18280(f,ch,meta18281));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18280(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18297 = (function (p,ch,meta18298){
this.p = p;
this.ch = ch;
this.meta18298 = meta18298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18299,meta18298__$1){
var self__ = this;
var _18299__$1 = this;
return (new cljs.core.async.t_cljs$core$async18297(self__.p,self__.ch,meta18298__$1));
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18299){
var self__ = this;
var _18299__$1 = this;
return self__.meta18298;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18298","meta18298",942845983,null)], null);
}));

(cljs.core.async.t_cljs$core$async18297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18297");

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18297.
 */
cljs.core.async.__GT_t_cljs$core$async18297 = (function cljs$core$async$__GT_t_cljs$core$async18297(p,ch,meta18298){
return (new cljs.core.async.t_cljs$core$async18297(p,ch,meta18298));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18297(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18343 = arguments.length;
switch (G__18343) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18374){
var state_val_18375 = (state_18374[(1)]);
if((state_val_18375 === (7))){
var inst_18370 = (state_18374[(2)]);
var state_18374__$1 = state_18374;
var statearr_18376_20256 = state_18374__$1;
(statearr_18376_20256[(2)] = inst_18370);

(statearr_18376_20256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (1))){
var state_18374__$1 = state_18374;
var statearr_18381_20257 = state_18374__$1;
(statearr_18381_20257[(2)] = null);

(statearr_18381_20257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (4))){
var inst_18356 = (state_18374[(7)]);
var inst_18356__$1 = (state_18374[(2)]);
var inst_18357 = (inst_18356__$1 == null);
var state_18374__$1 = (function (){var statearr_18395 = state_18374;
(statearr_18395[(7)] = inst_18356__$1);

return statearr_18395;
})();
if(cljs.core.truth_(inst_18357)){
var statearr_18396_20259 = state_18374__$1;
(statearr_18396_20259[(1)] = (5));

} else {
var statearr_18401_20264 = state_18374__$1;
(statearr_18401_20264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (6))){
var inst_18356 = (state_18374[(7)]);
var inst_18361 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18356) : p.call(null,inst_18356));
var state_18374__$1 = state_18374;
if(cljs.core.truth_(inst_18361)){
var statearr_18402_20265 = state_18374__$1;
(statearr_18402_20265[(1)] = (8));

} else {
var statearr_18403_20270 = state_18374__$1;
(statearr_18403_20270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (3))){
var inst_18372 = (state_18374[(2)]);
var state_18374__$1 = state_18374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18374__$1,inst_18372);
} else {
if((state_val_18375 === (2))){
var state_18374__$1 = state_18374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18374__$1,(4),ch);
} else {
if((state_val_18375 === (11))){
var inst_18364 = (state_18374[(2)]);
var state_18374__$1 = state_18374;
var statearr_18406_20277 = state_18374__$1;
(statearr_18406_20277[(2)] = inst_18364);

(statearr_18406_20277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (9))){
var state_18374__$1 = state_18374;
var statearr_18408_20278 = state_18374__$1;
(statearr_18408_20278[(2)] = null);

(statearr_18408_20278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (5))){
var inst_18359 = cljs.core.async.close_BANG_(out);
var state_18374__$1 = state_18374;
var statearr_18410_20279 = state_18374__$1;
(statearr_18410_20279[(2)] = inst_18359);

(statearr_18410_20279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (10))){
var inst_18367 = (state_18374[(2)]);
var state_18374__$1 = (function (){var statearr_18414 = state_18374;
(statearr_18414[(8)] = inst_18367);

return statearr_18414;
})();
var statearr_18416_20284 = state_18374__$1;
(statearr_18416_20284[(2)] = null);

(statearr_18416_20284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18375 === (8))){
var inst_18356 = (state_18374[(7)]);
var state_18374__$1 = state_18374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18374__$1,(11),out,inst_18356);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_18417 = [null,null,null,null,null,null,null,null,null];
(statearr_18417[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_18417[(1)] = (1));

return statearr_18417;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_18374){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18374);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18420){var ex__13616__auto__ = e18420;
var statearr_18421_20285 = state_18374;
(statearr_18421_20285[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18374[(4)]))){
var statearr_18425_20286 = state_18374;
(statearr_18425_20286[(1)] = cljs.core.first((state_18374[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20287 = state_18374;
state_18374 = G__20287;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_18374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_18374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18429 = f__15026__auto__();
(statearr_18429[(6)] = c__15025__auto___20255);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18436 = arguments.length;
switch (G__18436) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18539){
var state_val_18541 = (state_18539[(1)]);
if((state_val_18541 === (7))){
var inst_18529 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
var statearr_18557_20295 = state_18539__$1;
(statearr_18557_20295[(2)] = inst_18529);

(statearr_18557_20295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (20))){
var inst_18486 = (state_18539[(7)]);
var inst_18505 = (state_18539[(2)]);
var inst_18507 = cljs.core.next(inst_18486);
var inst_18463 = inst_18507;
var inst_18464 = null;
var inst_18465 = (0);
var inst_18466 = (0);
var state_18539__$1 = (function (){var statearr_18578 = state_18539;
(statearr_18578[(8)] = inst_18465);

(statearr_18578[(9)] = inst_18464);

(statearr_18578[(10)] = inst_18505);

(statearr_18578[(11)] = inst_18463);

(statearr_18578[(12)] = inst_18466);

return statearr_18578;
})();
var statearr_18584_20296 = state_18539__$1;
(statearr_18584_20296[(2)] = null);

(statearr_18584_20296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (1))){
var state_18539__$1 = state_18539;
var statearr_18598_20297 = state_18539__$1;
(statearr_18598_20297[(2)] = null);

(statearr_18598_20297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (4))){
var inst_18451 = (state_18539[(13)]);
var inst_18451__$1 = (state_18539[(2)]);
var inst_18452 = (inst_18451__$1 == null);
var state_18539__$1 = (function (){var statearr_18602 = state_18539;
(statearr_18602[(13)] = inst_18451__$1);

return statearr_18602;
})();
if(cljs.core.truth_(inst_18452)){
var statearr_18603_20308 = state_18539__$1;
(statearr_18603_20308[(1)] = (5));

} else {
var statearr_18604_20309 = state_18539__$1;
(statearr_18604_20309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (15))){
var state_18539__$1 = state_18539;
var statearr_18614_20310 = state_18539__$1;
(statearr_18614_20310[(2)] = null);

(statearr_18614_20310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (21))){
var state_18539__$1 = state_18539;
var statearr_18619_20312 = state_18539__$1;
(statearr_18619_20312[(2)] = null);

(statearr_18619_20312[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (13))){
var inst_18465 = (state_18539[(8)]);
var inst_18464 = (state_18539[(9)]);
var inst_18463 = (state_18539[(11)]);
var inst_18466 = (state_18539[(12)]);
var inst_18478 = (state_18539[(2)]);
var inst_18483 = (inst_18466 + (1));
var tmp18608 = inst_18465;
var tmp18610 = inst_18464;
var tmp18611 = inst_18463;
var inst_18463__$1 = tmp18611;
var inst_18464__$1 = tmp18610;
var inst_18465__$1 = tmp18608;
var inst_18466__$1 = inst_18483;
var state_18539__$1 = (function (){var statearr_18623 = state_18539;
(statearr_18623[(8)] = inst_18465__$1);

(statearr_18623[(9)] = inst_18464__$1);

(statearr_18623[(14)] = inst_18478);

(statearr_18623[(11)] = inst_18463__$1);

(statearr_18623[(12)] = inst_18466__$1);

return statearr_18623;
})();
var statearr_18625_20313 = state_18539__$1;
(statearr_18625_20313[(2)] = null);

(statearr_18625_20313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (22))){
var state_18539__$1 = state_18539;
var statearr_18627_20317 = state_18539__$1;
(statearr_18627_20317[(2)] = null);

(statearr_18627_20317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (6))){
var inst_18451 = (state_18539[(13)]);
var inst_18460 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18451) : f.call(null,inst_18451));
var inst_18461 = cljs.core.seq(inst_18460);
var inst_18463 = inst_18461;
var inst_18464 = null;
var inst_18465 = (0);
var inst_18466 = (0);
var state_18539__$1 = (function (){var statearr_18629 = state_18539;
(statearr_18629[(8)] = inst_18465);

(statearr_18629[(9)] = inst_18464);

(statearr_18629[(11)] = inst_18463);

(statearr_18629[(12)] = inst_18466);

return statearr_18629;
})();
var statearr_18630_20318 = state_18539__$1;
(statearr_18630_20318[(2)] = null);

(statearr_18630_20318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (17))){
var inst_18486 = (state_18539[(7)]);
var inst_18498 = cljs.core.chunk_first(inst_18486);
var inst_18499 = cljs.core.chunk_rest(inst_18486);
var inst_18500 = cljs.core.count(inst_18498);
var inst_18463 = inst_18499;
var inst_18464 = inst_18498;
var inst_18465 = inst_18500;
var inst_18466 = (0);
var state_18539__$1 = (function (){var statearr_18637 = state_18539;
(statearr_18637[(8)] = inst_18465);

(statearr_18637[(9)] = inst_18464);

(statearr_18637[(11)] = inst_18463);

(statearr_18637[(12)] = inst_18466);

return statearr_18637;
})();
var statearr_18638_20322 = state_18539__$1;
(statearr_18638_20322[(2)] = null);

(statearr_18638_20322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (3))){
var inst_18531 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18539__$1,inst_18531);
} else {
if((state_val_18541 === (12))){
var inst_18515 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
var statearr_18642_20324 = state_18539__$1;
(statearr_18642_20324[(2)] = inst_18515);

(statearr_18642_20324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (2))){
var state_18539__$1 = state_18539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18539__$1,(4),in$);
} else {
if((state_val_18541 === (23))){
var inst_18527 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
var statearr_18644_20325 = state_18539__$1;
(statearr_18644_20325[(2)] = inst_18527);

(statearr_18644_20325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (19))){
var inst_18510 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
var statearr_18648_20326 = state_18539__$1;
(statearr_18648_20326[(2)] = inst_18510);

(statearr_18648_20326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (11))){
var inst_18486 = (state_18539[(7)]);
var inst_18463 = (state_18539[(11)]);
var inst_18486__$1 = cljs.core.seq(inst_18463);
var state_18539__$1 = (function (){var statearr_18650 = state_18539;
(statearr_18650[(7)] = inst_18486__$1);

return statearr_18650;
})();
if(inst_18486__$1){
var statearr_18652_20331 = state_18539__$1;
(statearr_18652_20331[(1)] = (14));

} else {
var statearr_18653_20332 = state_18539__$1;
(statearr_18653_20332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (9))){
var inst_18517 = (state_18539[(2)]);
var inst_18519 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18539__$1 = (function (){var statearr_18655 = state_18539;
(statearr_18655[(15)] = inst_18517);

return statearr_18655;
})();
if(cljs.core.truth_(inst_18519)){
var statearr_18656_20334 = state_18539__$1;
(statearr_18656_20334[(1)] = (21));

} else {
var statearr_18657_20335 = state_18539__$1;
(statearr_18657_20335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (5))){
var inst_18454 = cljs.core.async.close_BANG_(out);
var state_18539__$1 = state_18539;
var statearr_18658_20336 = state_18539__$1;
(statearr_18658_20336[(2)] = inst_18454);

(statearr_18658_20336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (14))){
var inst_18486 = (state_18539[(7)]);
var inst_18491 = cljs.core.chunked_seq_QMARK_(inst_18486);
var state_18539__$1 = state_18539;
if(inst_18491){
var statearr_18659_20337 = state_18539__$1;
(statearr_18659_20337[(1)] = (17));

} else {
var statearr_18660_20338 = state_18539__$1;
(statearr_18660_20338[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (16))){
var inst_18513 = (state_18539[(2)]);
var state_18539__$1 = state_18539;
var statearr_18662_20339 = state_18539__$1;
(statearr_18662_20339[(2)] = inst_18513);

(statearr_18662_20339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18541 === (10))){
var inst_18464 = (state_18539[(9)]);
var inst_18466 = (state_18539[(12)]);
var inst_18476 = cljs.core._nth(inst_18464,inst_18466);
var state_18539__$1 = state_18539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18539__$1,(13),out,inst_18476);
} else {
if((state_val_18541 === (18))){
var inst_18486 = (state_18539[(7)]);
var inst_18503 = cljs.core.first(inst_18486);
var state_18539__$1 = state_18539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18539__$1,(20),out,inst_18503);
} else {
if((state_val_18541 === (8))){
var inst_18465 = (state_18539[(8)]);
var inst_18466 = (state_18539[(12)]);
var inst_18471 = (inst_18466 < inst_18465);
var inst_18472 = inst_18471;
var state_18539__$1 = state_18539;
if(cljs.core.truth_(inst_18472)){
var statearr_18666_20342 = state_18539__$1;
(statearr_18666_20342[(1)] = (10));

} else {
var statearr_18667_20343 = state_18539__$1;
(statearr_18667_20343[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____0 = (function (){
var statearr_18669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__);

(statearr_18669[(1)] = (1));

return statearr_18669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____1 = (function (state_18539){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18539);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18670){var ex__13616__auto__ = e18670;
var statearr_18671_20344 = state_18539;
(statearr_18671_20344[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18539[(4)]))){
var statearr_18672_20346 = state_18539;
(statearr_18672_20346[(1)] = cljs.core.first((state_18539[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20347 = state_18539;
state_18539 = G__20347;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__ = function(state_18539){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____1.call(this,state_18539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18673 = f__15026__auto__();
(statearr_18673[(6)] = c__15025__auto__);

return statearr_18673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));

return c__15025__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18675 = arguments.length;
switch (G__18675) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18680 = arguments.length;
switch (G__18680) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18684 = arguments.length;
switch (G__18684) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18713){
var state_val_18714 = (state_18713[(1)]);
if((state_val_18714 === (7))){
var inst_18708 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
var statearr_18721_20356 = state_18713__$1;
(statearr_18721_20356[(2)] = inst_18708);

(statearr_18721_20356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (1))){
var inst_18685 = null;
var state_18713__$1 = (function (){var statearr_18722 = state_18713;
(statearr_18722[(7)] = inst_18685);

return statearr_18722;
})();
var statearr_18723_20357 = state_18713__$1;
(statearr_18723_20357[(2)] = null);

(statearr_18723_20357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (4))){
var inst_18688 = (state_18713[(8)]);
var inst_18688__$1 = (state_18713[(2)]);
var inst_18689 = (inst_18688__$1 == null);
var inst_18690 = cljs.core.not(inst_18689);
var state_18713__$1 = (function (){var statearr_18724 = state_18713;
(statearr_18724[(8)] = inst_18688__$1);

return statearr_18724;
})();
if(inst_18690){
var statearr_18725_20358 = state_18713__$1;
(statearr_18725_20358[(1)] = (5));

} else {
var statearr_18726_20359 = state_18713__$1;
(statearr_18726_20359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (6))){
var state_18713__$1 = state_18713;
var statearr_18727_20364 = state_18713__$1;
(statearr_18727_20364[(2)] = null);

(statearr_18727_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (3))){
var inst_18710 = (state_18713[(2)]);
var inst_18711 = cljs.core.async.close_BANG_(out);
var state_18713__$1 = (function (){var statearr_18732 = state_18713;
(statearr_18732[(9)] = inst_18710);

return statearr_18732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18713__$1,inst_18711);
} else {
if((state_val_18714 === (2))){
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18713__$1,(4),ch);
} else {
if((state_val_18714 === (11))){
var inst_18688 = (state_18713[(8)]);
var inst_18702 = (state_18713[(2)]);
var inst_18685 = inst_18688;
var state_18713__$1 = (function (){var statearr_18739 = state_18713;
(statearr_18739[(7)] = inst_18685);

(statearr_18739[(10)] = inst_18702);

return statearr_18739;
})();
var statearr_18740_20366 = state_18713__$1;
(statearr_18740_20366[(2)] = null);

(statearr_18740_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (9))){
var inst_18688 = (state_18713[(8)]);
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18713__$1,(11),out,inst_18688);
} else {
if((state_val_18714 === (5))){
var inst_18685 = (state_18713[(7)]);
var inst_18688 = (state_18713[(8)]);
var inst_18694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18688,inst_18685);
var state_18713__$1 = state_18713;
if(inst_18694){
var statearr_18742_20367 = state_18713__$1;
(statearr_18742_20367[(1)] = (8));

} else {
var statearr_18745_20368 = state_18713__$1;
(statearr_18745_20368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (10))){
var inst_18705 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
var statearr_18746_20369 = state_18713__$1;
(statearr_18746_20369[(2)] = inst_18705);

(statearr_18746_20369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (8))){
var inst_18685 = (state_18713[(7)]);
var tmp18741 = inst_18685;
var inst_18685__$1 = tmp18741;
var state_18713__$1 = (function (){var statearr_18747 = state_18713;
(statearr_18747[(7)] = inst_18685__$1);

return statearr_18747;
})();
var statearr_18748_20370 = state_18713__$1;
(statearr_18748_20370[(2)] = null);

(statearr_18748_20370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_18751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18751[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_18751[(1)] = (1));

return statearr_18751;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_18713){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18713);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18752){var ex__13616__auto__ = e18752;
var statearr_18754_20372 = state_18713;
(statearr_18754_20372[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18713[(4)]))){
var statearr_18756_20373 = state_18713;
(statearr_18756_20373[(1)] = cljs.core.first((state_18713[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20374 = state_18713;
state_18713 = G__20374;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_18713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_18713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18763 = f__15026__auto__();
(statearr_18763[(6)] = c__15025__auto___20355);

return statearr_18763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18775 = arguments.length;
switch (G__18775) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_18853){
var state_val_18854 = (state_18853[(1)]);
if((state_val_18854 === (7))){
var inst_18840 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18862_20381 = state_18853__$1;
(statearr_18862_20381[(2)] = inst_18840);

(statearr_18862_20381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (1))){
var inst_18796 = (new Array(n));
var inst_18798 = inst_18796;
var inst_18800 = (0);
var state_18853__$1 = (function (){var statearr_18864 = state_18853;
(statearr_18864[(7)] = inst_18800);

(statearr_18864[(8)] = inst_18798);

return statearr_18864;
})();
var statearr_18865_20382 = state_18853__$1;
(statearr_18865_20382[(2)] = null);

(statearr_18865_20382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (4))){
var inst_18804 = (state_18853[(9)]);
var inst_18804__$1 = (state_18853[(2)]);
var inst_18805 = (inst_18804__$1 == null);
var inst_18806 = cljs.core.not(inst_18805);
var state_18853__$1 = (function (){var statearr_18866 = state_18853;
(statearr_18866[(9)] = inst_18804__$1);

return statearr_18866;
})();
if(inst_18806){
var statearr_18867_20383 = state_18853__$1;
(statearr_18867_20383[(1)] = (5));

} else {
var statearr_18872_20384 = state_18853__$1;
(statearr_18872_20384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (15))){
var inst_18833 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18873_20388 = state_18853__$1;
(statearr_18873_20388[(2)] = inst_18833);

(statearr_18873_20388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (13))){
var state_18853__$1 = state_18853;
var statearr_18874_20390 = state_18853__$1;
(statearr_18874_20390[(2)] = null);

(statearr_18874_20390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (6))){
var inst_18800 = (state_18853[(7)]);
var inst_18828 = (inst_18800 > (0));
var state_18853__$1 = state_18853;
if(cljs.core.truth_(inst_18828)){
var statearr_18877_20391 = state_18853__$1;
(statearr_18877_20391[(1)] = (12));

} else {
var statearr_18878_20392 = state_18853__$1;
(statearr_18878_20392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (3))){
var inst_18845 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18853__$1,inst_18845);
} else {
if((state_val_18854 === (12))){
var inst_18798 = (state_18853[(8)]);
var inst_18831 = cljs.core.vec(inst_18798);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18853__$1,(15),out,inst_18831);
} else {
if((state_val_18854 === (2))){
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18853__$1,(4),ch);
} else {
if((state_val_18854 === (11))){
var inst_18822 = (state_18853[(2)]);
var inst_18823 = (new Array(n));
var inst_18798 = inst_18823;
var inst_18800 = (0);
var state_18853__$1 = (function (){var statearr_18906 = state_18853;
(statearr_18906[(10)] = inst_18822);

(statearr_18906[(7)] = inst_18800);

(statearr_18906[(8)] = inst_18798);

return statearr_18906;
})();
var statearr_18908_20397 = state_18853__$1;
(statearr_18908_20397[(2)] = null);

(statearr_18908_20397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (9))){
var inst_18798 = (state_18853[(8)]);
var inst_18820 = cljs.core.vec(inst_18798);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18853__$1,(11),out,inst_18820);
} else {
if((state_val_18854 === (5))){
var inst_18800 = (state_18853[(7)]);
var inst_18798 = (state_18853[(8)]);
var inst_18811 = (state_18853[(11)]);
var inst_18804 = (state_18853[(9)]);
var inst_18810 = (inst_18798[inst_18800] = inst_18804);
var inst_18811__$1 = (inst_18800 + (1));
var inst_18812 = (inst_18811__$1 < n);
var state_18853__$1 = (function (){var statearr_18923 = state_18853;
(statearr_18923[(11)] = inst_18811__$1);

(statearr_18923[(12)] = inst_18810);

return statearr_18923;
})();
if(cljs.core.truth_(inst_18812)){
var statearr_18926_20401 = state_18853__$1;
(statearr_18926_20401[(1)] = (8));

} else {
var statearr_18928_20402 = state_18853__$1;
(statearr_18928_20402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (14))){
var inst_18836 = (state_18853[(2)]);
var inst_18837 = cljs.core.async.close_BANG_(out);
var state_18853__$1 = (function (){var statearr_18937 = state_18853;
(statearr_18937[(13)] = inst_18836);

return statearr_18937;
})();
var statearr_18938_20406 = state_18853__$1;
(statearr_18938_20406[(2)] = inst_18837);

(statearr_18938_20406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (10))){
var inst_18826 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18944_20407 = state_18853__$1;
(statearr_18944_20407[(2)] = inst_18826);

(statearr_18944_20407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (8))){
var inst_18798 = (state_18853[(8)]);
var inst_18811 = (state_18853[(11)]);
var tmp18929 = inst_18798;
var inst_18798__$1 = tmp18929;
var inst_18800 = inst_18811;
var state_18853__$1 = (function (){var statearr_18948 = state_18853;
(statearr_18948[(7)] = inst_18800);

(statearr_18948[(8)] = inst_18798__$1);

return statearr_18948;
})();
var statearr_18955_20409 = state_18853__$1;
(statearr_18955_20409[(2)] = null);

(statearr_18955_20409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_18959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18959[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_18959[(1)] = (1));

return statearr_18959;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_18853){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_18853);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e18964){var ex__13616__auto__ = e18964;
var statearr_18965_20410 = state_18853;
(statearr_18965_20410[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_18853[(4)]))){
var statearr_18968_20412 = state_18853;
(statearr_18968_20412[(1)] = cljs.core.first((state_18853[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20415 = state_18853;
state_18853 = G__20415;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_18853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_18853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_18973 = f__15026__auto__();
(statearr_18973[(6)] = c__15025__auto___20376);

return statearr_18973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18985 = arguments.length;
switch (G__18985) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15025__auto___20424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15026__auto__ = (function (){var switch__13612__auto__ = (function (state_19069){
var state_val_19070 = (state_19069[(1)]);
if((state_val_19070 === (7))){
var inst_19065 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19093_20425 = state_19069__$1;
(statearr_19093_20425[(2)] = inst_19065);

(statearr_19093_20425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (1))){
var inst_19003 = [];
var inst_19009 = inst_19003;
var inst_19010 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19069__$1 = (function (){var statearr_19102 = state_19069;
(statearr_19102[(7)] = inst_19009);

(statearr_19102[(8)] = inst_19010);

return statearr_19102;
})();
var statearr_19116_20426 = state_19069__$1;
(statearr_19116_20426[(2)] = null);

(statearr_19116_20426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (4))){
var inst_19022 = (state_19069[(9)]);
var inst_19022__$1 = (state_19069[(2)]);
var inst_19023 = (inst_19022__$1 == null);
var inst_19024 = cljs.core.not(inst_19023);
var state_19069__$1 = (function (){var statearr_19124 = state_19069;
(statearr_19124[(9)] = inst_19022__$1);

return statearr_19124;
})();
if(inst_19024){
var statearr_19126_20431 = state_19069__$1;
(statearr_19126_20431[(1)] = (5));

} else {
var statearr_19127_20432 = state_19069__$1;
(statearr_19127_20432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (15))){
var inst_19009 = (state_19069[(7)]);
var inst_19057 = cljs.core.vec(inst_19009);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19069__$1,(18),out,inst_19057);
} else {
if((state_val_19070 === (13))){
var inst_19044 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19141_20436 = state_19069__$1;
(statearr_19141_20436[(2)] = inst_19044);

(statearr_19141_20436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (6))){
var inst_19009 = (state_19069[(7)]);
var inst_19050 = inst_19009.length;
var inst_19051 = (inst_19050 > (0));
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19051)){
var statearr_19159_20439 = state_19069__$1;
(statearr_19159_20439[(1)] = (15));

} else {
var statearr_19164_20440 = state_19069__$1;
(statearr_19164_20440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (17))){
var inst_19062 = (state_19069[(2)]);
var inst_19063 = cljs.core.async.close_BANG_(out);
var state_19069__$1 = (function (){var statearr_19167 = state_19069;
(statearr_19167[(10)] = inst_19062);

return statearr_19167;
})();
var statearr_19172_20445 = state_19069__$1;
(statearr_19172_20445[(2)] = inst_19063);

(statearr_19172_20445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (3))){
var inst_19067 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19069__$1,inst_19067);
} else {
if((state_val_19070 === (12))){
var inst_19009 = (state_19069[(7)]);
var inst_19037 = cljs.core.vec(inst_19009);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19069__$1,(14),out,inst_19037);
} else {
if((state_val_19070 === (2))){
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19069__$1,(4),ch);
} else {
if((state_val_19070 === (11))){
var inst_19009 = (state_19069[(7)]);
var inst_19026 = (state_19069[(11)]);
var inst_19022 = (state_19069[(9)]);
var inst_19034 = inst_19009.push(inst_19022);
var tmp19186 = inst_19009;
var inst_19009__$1 = tmp19186;
var inst_19010 = inst_19026;
var state_19069__$1 = (function (){var statearr_19206 = state_19069;
(statearr_19206[(12)] = inst_19034);

(statearr_19206[(7)] = inst_19009__$1);

(statearr_19206[(8)] = inst_19010);

return statearr_19206;
})();
var statearr_19208_20456 = state_19069__$1;
(statearr_19208_20456[(2)] = null);

(statearr_19208_20456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (9))){
var inst_19010 = (state_19069[(8)]);
var inst_19030 = cljs.core.keyword_identical_QMARK_(inst_19010,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19069__$1 = state_19069;
var statearr_19212_20464 = state_19069__$1;
(statearr_19212_20464[(2)] = inst_19030);

(statearr_19212_20464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (5))){
var inst_19027 = (state_19069[(13)]);
var inst_19026 = (state_19069[(11)]);
var inst_19022 = (state_19069[(9)]);
var inst_19010 = (state_19069[(8)]);
var inst_19026__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19022) : f.call(null,inst_19022));
var inst_19027__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19026__$1,inst_19010);
var state_19069__$1 = (function (){var statearr_19219 = state_19069;
(statearr_19219[(13)] = inst_19027__$1);

(statearr_19219[(11)] = inst_19026__$1);

return statearr_19219;
})();
if(inst_19027__$1){
var statearr_19220_20469 = state_19069__$1;
(statearr_19220_20469[(1)] = (8));

} else {
var statearr_19221_20474 = state_19069__$1;
(statearr_19221_20474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (14))){
var inst_19026 = (state_19069[(11)]);
var inst_19022 = (state_19069[(9)]);
var inst_19039 = (state_19069[(2)]);
var inst_19040 = [];
var inst_19041 = inst_19040.push(inst_19022);
var inst_19009 = inst_19040;
var inst_19010 = inst_19026;
var state_19069__$1 = (function (){var statearr_19236 = state_19069;
(statearr_19236[(14)] = inst_19039);

(statearr_19236[(15)] = inst_19041);

(statearr_19236[(7)] = inst_19009);

(statearr_19236[(8)] = inst_19010);

return statearr_19236;
})();
var statearr_19238_20476 = state_19069__$1;
(statearr_19238_20476[(2)] = null);

(statearr_19238_20476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (16))){
var state_19069__$1 = state_19069;
var statearr_19239_20484 = state_19069__$1;
(statearr_19239_20484[(2)] = null);

(statearr_19239_20484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (10))){
var inst_19032 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19032)){
var statearr_19241_20485 = state_19069__$1;
(statearr_19241_20485[(1)] = (11));

} else {
var statearr_19242_20487 = state_19069__$1;
(statearr_19242_20487[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (18))){
var inst_19059 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19243_20489 = state_19069__$1;
(statearr_19243_20489[(2)] = inst_19059);

(statearr_19243_20489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (8))){
var inst_19027 = (state_19069[(13)]);
var state_19069__$1 = state_19069;
var statearr_19244_20491 = state_19069__$1;
(statearr_19244_20491[(2)] = inst_19027);

(statearr_19244_20491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$state_machine__13613__auto__ = null;
var cljs$core$async$state_machine__13613__auto____0 = (function (){
var statearr_19250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19250[(0)] = cljs$core$async$state_machine__13613__auto__);

(statearr_19250[(1)] = (1));

return statearr_19250;
});
var cljs$core$async$state_machine__13613__auto____1 = (function (state_19069){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__(state_19069);
if(cljs.core.keyword_identical_QMARK_(result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e19252){var ex__13616__auto__ = e19252;
var statearr_19254_20497 = state_19069;
(statearr_19254_20497[(2)] = ex__13616__auto__);


if(cljs.core.seq((state_19069[(4)]))){
var statearr_19258_20498 = state_19069;
(statearr_19258_20498[(1)] = cljs.core.first((state_19069[(4)])));

} else {
throw ex__13616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20499 = state_19069;
state_19069 = G__20499;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
cljs$core$async$state_machine__13613__auto__ = function(state_19069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13613__auto____1.call(this,state_19069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13613__auto____0;
cljs$core$async$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13613__auto____1;
return cljs$core$async$state_machine__13613__auto__;
})()
})();
var state__15027__auto__ = (function (){var statearr_19264 = f__15026__auto__();
(statearr_19264[(6)] = c__15025__auto___20424);

return statearr_19264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15027__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
