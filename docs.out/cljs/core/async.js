// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async15347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15347 = (function (fn_handler,f,meta15348){
this.fn_handler = fn_handler;
this.f = f;
this.meta15348 = meta15348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15349,meta15348__$1){
var self__ = this;
var _15349__$1 = this;
return (new cljs.core.async.t_cljs$core$async15347(self__.fn_handler,self__.f,meta15348__$1));
});

cljs.core.async.t_cljs$core$async15347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15349){
var self__ = this;
var _15349__$1 = this;
return self__.meta15348;
});

cljs.core.async.t_cljs$core$async15347.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta15348], null);
});

cljs.core.async.t_cljs$core$async15347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15347";

cljs.core.async.t_cljs$core$async15347.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async15347");
});

cljs.core.async.__GT_t_cljs$core$async15347 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async15347(fn_handler__$1,f__$1,meta15348){
return (new cljs.core.async.t_cljs$core$async15347(fn_handler__$1,f__$1,meta15348));
});

}

return (new cljs.core.async.t_cljs$core$async15347(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args15352 = [];
var len__6226__auto___15355 = arguments.length;
var i__6227__auto___15356 = (0);
while(true){
if((i__6227__auto___15356 < len__6226__auto___15355)){
args15352.push((arguments[i__6227__auto___15356]));

var G__15357 = (i__6227__auto___15356 + (1));
i__6227__auto___15356 = G__15357;
continue;
} else {
}
break;
}

var G__15354 = args15352.length;
switch (G__15354) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15352.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
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
var args15359 = [];
var len__6226__auto___15362 = arguments.length;
var i__6227__auto___15363 = (0);
while(true){
if((i__6227__auto___15363 < len__6226__auto___15362)){
args15359.push((arguments[i__6227__auto___15363]));

var G__15364 = (i__6227__auto___15363 + (1));
i__6227__auto___15363 = G__15364;
continue;
} else {
}
break;
}

var G__15361 = args15359.length;
switch (G__15361) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15359.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_15366 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15366) : fn1.call(null,val_15366));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15366,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15366) : fn1.call(null,val_15366));
});})(val_15366,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15367 = [];
var len__6226__auto___15370 = arguments.length;
var i__6227__auto___15371 = (0);
while(true){
if((i__6227__auto___15371 < len__6226__auto___15370)){
args15367.push((arguments[i__6227__auto___15371]));

var G__15372 = (i__6227__auto___15371 + (1));
i__6227__auto___15371 = G__15372;
continue;
} else {
}
break;
}

var G__15369 = args15367.length;
switch (G__15369) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15367.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6071__auto___15374 = n;
var x_15375 = (0);
while(true){
if((x_15375 < n__6071__auto___15374)){
(a[x_15375] = (0));

var G__15376 = (x_15375 + (1));
x_15375 = G__15376;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15377 = (i + (1));
i = G__15377;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15381 = (function (alt_flag,flag,meta15382){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15382 = meta15382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15383,meta15382__$1){
var self__ = this;
var _15383__$1 = this;
return (new cljs.core.async.t_cljs$core$async15381(self__.alt_flag,self__.flag,meta15382__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15383){
var self__ = this;
var _15383__$1 = this;
return self__.meta15382;
});})(flag))
;

cljs.core.async.t_cljs$core$async15381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15381.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15382], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15381";

cljs.core.async.t_cljs$core$async15381.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async15381");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15381 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15381(alt_flag__$1,flag__$1,meta15382){
return (new cljs.core.async.t_cljs$core$async15381(alt_flag__$1,flag__$1,meta15382));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15381(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15387 = (function (alt_handler,flag,cb,meta15388){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15388 = meta15388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15389,meta15388__$1){
var self__ = this;
var _15389__$1 = this;
return (new cljs.core.async.t_cljs$core$async15387(self__.alt_handler,self__.flag,self__.cb,meta15388__$1));
});

cljs.core.async.t_cljs$core$async15387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15389){
var self__ = this;
var _15389__$1 = this;
return self__.meta15388;
});

cljs.core.async.t_cljs$core$async15387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15388], null);
});

cljs.core.async.t_cljs$core$async15387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15387";

cljs.core.async.t_cljs$core$async15387.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async15387");
});

cljs.core.async.__GT_t_cljs$core$async15387 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15387(alt_handler__$1,flag__$1,cb__$1,meta15388){
return (new cljs.core.async.t_cljs$core$async15387(alt_handler__$1,flag__$1,cb__$1,meta15388));
});

}

return (new cljs.core.async.t_cljs$core$async15387(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15390_SHARP_){
var G__15394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15390_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15394) : fret.call(null,G__15394));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15391_SHARP_){
var G__15395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15391_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15395) : fret.call(null,G__15395));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15396 = (i + (1));
i = G__15396;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5168__auto__ = ret;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__6233__auto__ = [];
var len__6226__auto___15402 = arguments.length;
var i__6227__auto___15403 = (0);
while(true){
if((i__6227__auto___15403 < len__6226__auto___15402)){
args__6233__auto__.push((arguments[i__6227__auto___15403]));

var G__15404 = (i__6227__auto___15403 + (1));
i__6227__auto___15403 = G__15404;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15399){
var map__15400 = p__15399;
var map__15400__$1 = ((((!((map__15400 == null)))?((((map__15400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15400):map__15400);
var opts = map__15400__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15397){
var G__15398 = cljs.core.first(seq15397);
var seq15397__$1 = cljs.core.next(seq15397);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15398,seq15397__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15405 = [];
var len__6226__auto___15455 = arguments.length;
var i__6227__auto___15456 = (0);
while(true){
if((i__6227__auto___15456 < len__6226__auto___15455)){
args15405.push((arguments[i__6227__auto___15456]));

var G__15457 = (i__6227__auto___15456 + (1));
i__6227__auto___15456 = G__15457;
continue;
} else {
}
break;
}

var G__15407 = args15405.length;
switch (G__15407) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15405.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15299__auto___15459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___15459){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___15459){
return (function (state_15431){
var state_val_15432 = (state_15431[(1)]);
if((state_val_15432 === (7))){
var inst_15427 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15433_15460 = state_15431__$1;
(statearr_15433_15460[(2)] = inst_15427);

(statearr_15433_15460[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (1))){
var state_15431__$1 = state_15431;
var statearr_15434_15461 = state_15431__$1;
(statearr_15434_15461[(2)] = null);

(statearr_15434_15461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (4))){
var inst_15410 = (state_15431[(7)]);
var inst_15410__$1 = (state_15431[(2)]);
var inst_15411 = (inst_15410__$1 == null);
var state_15431__$1 = (function (){var statearr_15435 = state_15431;
(statearr_15435[(7)] = inst_15410__$1);

return statearr_15435;
})();
if(cljs.core.truth_(inst_15411)){
var statearr_15436_15462 = state_15431__$1;
(statearr_15436_15462[(1)] = (5));

} else {
var statearr_15437_15463 = state_15431__$1;
(statearr_15437_15463[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (13))){
var state_15431__$1 = state_15431;
var statearr_15438_15464 = state_15431__$1;
(statearr_15438_15464[(2)] = null);

(statearr_15438_15464[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (6))){
var inst_15410 = (state_15431[(7)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15431__$1,(11),to,inst_15410);
} else {
if((state_val_15432 === (3))){
var inst_15429 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15431__$1,inst_15429);
} else {
if((state_val_15432 === (12))){
var state_15431__$1 = state_15431;
var statearr_15439_15465 = state_15431__$1;
(statearr_15439_15465[(2)] = null);

(statearr_15439_15465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (2))){
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15431__$1,(4),from);
} else {
if((state_val_15432 === (11))){
var inst_15420 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
if(cljs.core.truth_(inst_15420)){
var statearr_15440_15466 = state_15431__$1;
(statearr_15440_15466[(1)] = (12));

} else {
var statearr_15441_15467 = state_15431__$1;
(statearr_15441_15467[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (9))){
var state_15431__$1 = state_15431;
var statearr_15442_15468 = state_15431__$1;
(statearr_15442_15468[(2)] = null);

(statearr_15442_15468[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (5))){
var state_15431__$1 = state_15431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15443_15469 = state_15431__$1;
(statearr_15443_15469[(1)] = (8));

} else {
var statearr_15444_15470 = state_15431__$1;
(statearr_15444_15470[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (14))){
var inst_15425 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15445_15471 = state_15431__$1;
(statearr_15445_15471[(2)] = inst_15425);

(statearr_15445_15471[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (10))){
var inst_15417 = (state_15431[(2)]);
var state_15431__$1 = state_15431;
var statearr_15446_15472 = state_15431__$1;
(statearr_15446_15472[(2)] = inst_15417);

(statearr_15446_15472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15432 === (8))){
var inst_15414 = cljs.core.async.close_BANG_(to);
var state_15431__$1 = state_15431;
var statearr_15447_15473 = state_15431__$1;
(statearr_15447_15473[(2)] = inst_15414);

(statearr_15447_15473[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___15459))
;
return ((function (switch__15185__auto__,c__15299__auto___15459){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_15451 = [null,null,null,null,null,null,null,null];
(statearr_15451[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_15451[(1)] = (1));

return statearr_15451;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_15431){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15431);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15452){if((e15452 instanceof Object)){
var ex__15189__auto__ = e15452;
var statearr_15453_15474 = state_15431;
(statearr_15453_15474[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15431);

return cljs.core.cst$kw$recur;
} else {
throw e15452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15475 = state_15431;
state_15431 = G__15475;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_15431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_15431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___15459))
})();
var state__15301__auto__ = (function (){var statearr_15454 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15459);

return statearr_15454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___15459))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15659){
var vec__15660 = p__15659;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(1),null);
var job = vec__15660;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15299__auto___15842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results){
return (function (state_15665){
var state_val_15666 = (state_15665[(1)]);
if((state_val_15666 === (1))){
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15665__$1,(2),res,v);
} else {
if((state_val_15666 === (2))){
var inst_15662 = (state_15665[(2)]);
var inst_15663 = cljs.core.async.close_BANG_(res);
var state_15665__$1 = (function (){var statearr_15667 = state_15665;
(statearr_15667[(7)] = inst_15662);

return statearr_15667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15665__$1,inst_15663);
} else {
return null;
}
}
});})(c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results))
;
return ((function (switch__15185__auto__,c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_15671 = [null,null,null,null,null,null,null,null];
(statearr_15671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__);

(statearr_15671[(1)] = (1));

return statearr_15671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1 = (function (state_15665){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15665);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15672){if((e15672 instanceof Object)){
var ex__15189__auto__ = e15672;
var statearr_15673_15843 = state_15665;
(statearr_15673_15843[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15665);

return cljs.core.cst$kw$recur;
} else {
throw e15672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15844 = state_15665;
state_15665 = G__15844;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = function(state_15665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1.call(this,state_15665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results))
})();
var state__15301__auto__ = (function (){var statearr_15674 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15842);

return statearr_15674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___15842,res,vec__15660,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15675){
var vec__15676 = p__15675;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676,(1),null);
var job = vec__15676;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6071__auto___15845 = n;
var __15846 = (0);
while(true){
if((__15846 < n__6071__auto___15845)){
var G__15677_15847 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15677_15847) {
case "compute":
var c__15299__auto___15849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15846,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (__15846,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function (state_15690){
var state_val_15691 = (state_15690[(1)]);
if((state_val_15691 === (1))){
var state_15690__$1 = state_15690;
var statearr_15692_15850 = state_15690__$1;
(statearr_15692_15850[(2)] = null);

(statearr_15692_15850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15691 === (2))){
var state_15690__$1 = state_15690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15690__$1,(4),jobs);
} else {
if((state_val_15691 === (3))){
var inst_15688 = (state_15690[(2)]);
var state_15690__$1 = state_15690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15690__$1,inst_15688);
} else {
if((state_val_15691 === (4))){
var inst_15680 = (state_15690[(2)]);
var inst_15681 = process(inst_15680);
var state_15690__$1 = state_15690;
if(cljs.core.truth_(inst_15681)){
var statearr_15693_15851 = state_15690__$1;
(statearr_15693_15851[(1)] = (5));

} else {
var statearr_15694_15852 = state_15690__$1;
(statearr_15694_15852[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15691 === (5))){
var state_15690__$1 = state_15690;
var statearr_15695_15853 = state_15690__$1;
(statearr_15695_15853[(2)] = null);

(statearr_15695_15853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15691 === (6))){
var state_15690__$1 = state_15690;
var statearr_15696_15854 = state_15690__$1;
(statearr_15696_15854[(2)] = null);

(statearr_15696_15854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15691 === (7))){
var inst_15686 = (state_15690[(2)]);
var state_15690__$1 = state_15690;
var statearr_15697_15855 = state_15690__$1;
(statearr_15697_15855[(2)] = inst_15686);

(statearr_15697_15855[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15846,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
;
return ((function (__15846,switch__15185__auto__,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_15701 = [null,null,null,null,null,null,null];
(statearr_15701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__);

(statearr_15701[(1)] = (1));

return statearr_15701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1 = (function (state_15690){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15690);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15702){if((e15702 instanceof Object)){
var ex__15189__auto__ = e15702;
var statearr_15703_15856 = state_15690;
(statearr_15703_15856[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15690);

return cljs.core.cst$kw$recur;
} else {
throw e15702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15857 = state_15690;
state_15690 = G__15857;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = function(state_15690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1.call(this,state_15690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__;
})()
;})(__15846,switch__15185__auto__,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
})();
var state__15301__auto__ = (function (){var statearr_15704 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15849);

return statearr_15704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(__15846,c__15299__auto___15849,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
);


break;
case "async":
var c__15299__auto___15858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15846,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (__15846,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function (state_15717){
var state_val_15718 = (state_15717[(1)]);
if((state_val_15718 === (1))){
var state_15717__$1 = state_15717;
var statearr_15719_15859 = state_15717__$1;
(statearr_15719_15859[(2)] = null);

(statearr_15719_15859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15718 === (2))){
var state_15717__$1 = state_15717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15717__$1,(4),jobs);
} else {
if((state_val_15718 === (3))){
var inst_15715 = (state_15717[(2)]);
var state_15717__$1 = state_15717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15717__$1,inst_15715);
} else {
if((state_val_15718 === (4))){
var inst_15707 = (state_15717[(2)]);
var inst_15708 = async(inst_15707);
var state_15717__$1 = state_15717;
if(cljs.core.truth_(inst_15708)){
var statearr_15720_15860 = state_15717__$1;
(statearr_15720_15860[(1)] = (5));

} else {
var statearr_15721_15861 = state_15717__$1;
(statearr_15721_15861[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15718 === (5))){
var state_15717__$1 = state_15717;
var statearr_15722_15862 = state_15717__$1;
(statearr_15722_15862[(2)] = null);

(statearr_15722_15862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15718 === (6))){
var state_15717__$1 = state_15717;
var statearr_15723_15863 = state_15717__$1;
(statearr_15723_15863[(2)] = null);

(statearr_15723_15863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15718 === (7))){
var inst_15713 = (state_15717[(2)]);
var state_15717__$1 = state_15717;
var statearr_15724_15864 = state_15717__$1;
(statearr_15724_15864[(2)] = inst_15713);

(statearr_15724_15864[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15846,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
;
return ((function (__15846,switch__15185__auto__,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1 = (function (state_15717){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15717);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15729){if((e15729 instanceof Object)){
var ex__15189__auto__ = e15729;
var statearr_15730_15865 = state_15717;
(statearr_15730_15865[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15717);

return cljs.core.cst$kw$recur;
} else {
throw e15729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15866 = state_15717;
state_15717 = G__15866;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = function(state_15717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1.call(this,state_15717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__;
})()
;})(__15846,switch__15185__auto__,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
})();
var state__15301__auto__ = (function (){var statearr_15731 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15858);

return statearr_15731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(__15846,c__15299__auto___15858,G__15677_15847,n__6071__auto___15845,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15867 = (__15846 + (1));
__15846 = G__15867;
continue;
} else {
}
break;
}

var c__15299__auto___15868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___15868,jobs,results,process,async){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___15868,jobs,results,process,async){
return (function (state_15753){
var state_val_15754 = (state_15753[(1)]);
if((state_val_15754 === (1))){
var state_15753__$1 = state_15753;
var statearr_15755_15869 = state_15753__$1;
(statearr_15755_15869[(2)] = null);

(statearr_15755_15869[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (2))){
var state_15753__$1 = state_15753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15753__$1,(4),from);
} else {
if((state_val_15754 === (3))){
var inst_15751 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15753__$1,inst_15751);
} else {
if((state_val_15754 === (4))){
var inst_15734 = (state_15753[(7)]);
var inst_15734__$1 = (state_15753[(2)]);
var inst_15735 = (inst_15734__$1 == null);
var state_15753__$1 = (function (){var statearr_15756 = state_15753;
(statearr_15756[(7)] = inst_15734__$1);

return statearr_15756;
})();
if(cljs.core.truth_(inst_15735)){
var statearr_15757_15870 = state_15753__$1;
(statearr_15757_15870[(1)] = (5));

} else {
var statearr_15758_15871 = state_15753__$1;
(statearr_15758_15871[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (5))){
var inst_15737 = cljs.core.async.close_BANG_(jobs);
var state_15753__$1 = state_15753;
var statearr_15759_15872 = state_15753__$1;
(statearr_15759_15872[(2)] = inst_15737);

(statearr_15759_15872[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (6))){
var inst_15739 = (state_15753[(8)]);
var inst_15734 = (state_15753[(7)]);
var inst_15739__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15741 = [inst_15734,inst_15739__$1];
var inst_15742 = (new cljs.core.PersistentVector(null,2,(5),inst_15740,inst_15741,null));
var state_15753__$1 = (function (){var statearr_15760 = state_15753;
(statearr_15760[(8)] = inst_15739__$1);

return statearr_15760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15753__$1,(8),jobs,inst_15742);
} else {
if((state_val_15754 === (7))){
var inst_15749 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15761_15873 = state_15753__$1;
(statearr_15761_15873[(2)] = inst_15749);

(statearr_15761_15873[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (8))){
var inst_15739 = (state_15753[(8)]);
var inst_15744 = (state_15753[(2)]);
var state_15753__$1 = (function (){var statearr_15762 = state_15753;
(statearr_15762[(9)] = inst_15744);

return statearr_15762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15753__$1,(9),results,inst_15739);
} else {
if((state_val_15754 === (9))){
var inst_15746 = (state_15753[(2)]);
var state_15753__$1 = (function (){var statearr_15763 = state_15753;
(statearr_15763[(10)] = inst_15746);

return statearr_15763;
})();
var statearr_15764_15874 = state_15753__$1;
(statearr_15764_15874[(2)] = null);

(statearr_15764_15874[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___15868,jobs,results,process,async))
;
return ((function (switch__15185__auto__,c__15299__auto___15868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_15768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__);

(statearr_15768[(1)] = (1));

return statearr_15768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1 = (function (state_15753){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15753);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15769){if((e15769 instanceof Object)){
var ex__15189__auto__ = e15769;
var statearr_15770_15875 = state_15753;
(statearr_15770_15875[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15753);

return cljs.core.cst$kw$recur;
} else {
throw e15769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15876 = state_15753;
state_15753 = G__15876;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = function(state_15753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1.call(this,state_15753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___15868,jobs,results,process,async))
})();
var state__15301__auto__ = (function (){var statearr_15771 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15868);

return statearr_15771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___15868,jobs,results,process,async))
);


var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__,jobs,results,process,async){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__,jobs,results,process,async){
return (function (state_15809){
var state_val_15810 = (state_15809[(1)]);
if((state_val_15810 === (7))){
var inst_15805 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15811_15877 = state_15809__$1;
(statearr_15811_15877[(2)] = inst_15805);

(statearr_15811_15877[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (20))){
var state_15809__$1 = state_15809;
var statearr_15812_15878 = state_15809__$1;
(statearr_15812_15878[(2)] = null);

(statearr_15812_15878[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (1))){
var state_15809__$1 = state_15809;
var statearr_15813_15879 = state_15809__$1;
(statearr_15813_15879[(2)] = null);

(statearr_15813_15879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (4))){
var inst_15774 = (state_15809[(7)]);
var inst_15774__$1 = (state_15809[(2)]);
var inst_15775 = (inst_15774__$1 == null);
var state_15809__$1 = (function (){var statearr_15814 = state_15809;
(statearr_15814[(7)] = inst_15774__$1);

return statearr_15814;
})();
if(cljs.core.truth_(inst_15775)){
var statearr_15815_15880 = state_15809__$1;
(statearr_15815_15880[(1)] = (5));

} else {
var statearr_15816_15881 = state_15809__$1;
(statearr_15816_15881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (15))){
var inst_15787 = (state_15809[(8)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15809__$1,(18),to,inst_15787);
} else {
if((state_val_15810 === (21))){
var inst_15800 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15817_15882 = state_15809__$1;
(statearr_15817_15882[(2)] = inst_15800);

(statearr_15817_15882[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (13))){
var inst_15802 = (state_15809[(2)]);
var state_15809__$1 = (function (){var statearr_15818 = state_15809;
(statearr_15818[(9)] = inst_15802);

return statearr_15818;
})();
var statearr_15819_15883 = state_15809__$1;
(statearr_15819_15883[(2)] = null);

(statearr_15819_15883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (6))){
var inst_15774 = (state_15809[(7)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(11),inst_15774);
} else {
if((state_val_15810 === (17))){
var inst_15795 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
if(cljs.core.truth_(inst_15795)){
var statearr_15820_15884 = state_15809__$1;
(statearr_15820_15884[(1)] = (19));

} else {
var statearr_15821_15885 = state_15809__$1;
(statearr_15821_15885[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (3))){
var inst_15807 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15809__$1,inst_15807);
} else {
if((state_val_15810 === (12))){
var inst_15784 = (state_15809[(10)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(14),inst_15784);
} else {
if((state_val_15810 === (2))){
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(4),results);
} else {
if((state_val_15810 === (19))){
var state_15809__$1 = state_15809;
var statearr_15822_15886 = state_15809__$1;
(statearr_15822_15886[(2)] = null);

(statearr_15822_15886[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (11))){
var inst_15784 = (state_15809[(2)]);
var state_15809__$1 = (function (){var statearr_15823 = state_15809;
(statearr_15823[(10)] = inst_15784);

return statearr_15823;
})();
var statearr_15824_15887 = state_15809__$1;
(statearr_15824_15887[(2)] = null);

(statearr_15824_15887[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (9))){
var state_15809__$1 = state_15809;
var statearr_15825_15888 = state_15809__$1;
(statearr_15825_15888[(2)] = null);

(statearr_15825_15888[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (5))){
var state_15809__$1 = state_15809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15826_15889 = state_15809__$1;
(statearr_15826_15889[(1)] = (8));

} else {
var statearr_15827_15890 = state_15809__$1;
(statearr_15827_15890[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (14))){
var inst_15789 = (state_15809[(11)]);
var inst_15787 = (state_15809[(8)]);
var inst_15787__$1 = (state_15809[(2)]);
var inst_15788 = (inst_15787__$1 == null);
var inst_15789__$1 = cljs.core.not(inst_15788);
var state_15809__$1 = (function (){var statearr_15828 = state_15809;
(statearr_15828[(11)] = inst_15789__$1);

(statearr_15828[(8)] = inst_15787__$1);

return statearr_15828;
})();
if(inst_15789__$1){
var statearr_15829_15891 = state_15809__$1;
(statearr_15829_15891[(1)] = (15));

} else {
var statearr_15830_15892 = state_15809__$1;
(statearr_15830_15892[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (16))){
var inst_15789 = (state_15809[(11)]);
var state_15809__$1 = state_15809;
var statearr_15831_15893 = state_15809__$1;
(statearr_15831_15893[(2)] = inst_15789);

(statearr_15831_15893[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (10))){
var inst_15781 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15832_15894 = state_15809__$1;
(statearr_15832_15894[(2)] = inst_15781);

(statearr_15832_15894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (18))){
var inst_15792 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
var statearr_15833_15895 = state_15809__$1;
(statearr_15833_15895[(2)] = inst_15792);

(statearr_15833_15895[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15810 === (8))){
var inst_15778 = cljs.core.async.close_BANG_(to);
var state_15809__$1 = state_15809;
var statearr_15834_15896 = state_15809__$1;
(statearr_15834_15896[(2)] = inst_15778);

(statearr_15834_15896[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto__,jobs,results,process,async))
;
return ((function (switch__15185__auto__,c__15299__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_15838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__);

(statearr_15838[(1)] = (1));

return statearr_15838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1 = (function (state_15809){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15809);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15839){if((e15839 instanceof Object)){
var ex__15189__auto__ = e15839;
var statearr_15840_15897 = state_15809;
(statearr_15840_15897[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15809);

return cljs.core.cst$kw$recur;
} else {
throw e15839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15898 = state_15809;
state_15809 = G__15898;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__ = function(state_15809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1.call(this,state_15809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__,jobs,results,process,async))
})();
var state__15301__auto__ = (function (){var statearr_15841 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_15841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__,jobs,results,process,async))
);

return c__15299__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15899 = [];
var len__6226__auto___15902 = arguments.length;
var i__6227__auto___15903 = (0);
while(true){
if((i__6227__auto___15903 < len__6226__auto___15902)){
args15899.push((arguments[i__6227__auto___15903]));

var G__15904 = (i__6227__auto___15903 + (1));
i__6227__auto___15903 = G__15904;
continue;
} else {
}
break;
}

var G__15901 = args15899.length;
switch (G__15901) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15899.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args15906 = [];
var len__6226__auto___15909 = arguments.length;
var i__6227__auto___15910 = (0);
while(true){
if((i__6227__auto___15910 < len__6226__auto___15909)){
args15906.push((arguments[i__6227__auto___15910]));

var G__15911 = (i__6227__auto___15910 + (1));
i__6227__auto___15910 = G__15911;
continue;
} else {
}
break;
}

var G__15908 = args15906.length;
switch (G__15908) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15906.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args15913 = [];
var len__6226__auto___15966 = arguments.length;
var i__6227__auto___15967 = (0);
while(true){
if((i__6227__auto___15967 < len__6226__auto___15966)){
args15913.push((arguments[i__6227__auto___15967]));

var G__15968 = (i__6227__auto___15967 + (1));
i__6227__auto___15967 = G__15968;
continue;
} else {
}
break;
}

var G__15915 = args15913.length;
switch (G__15915) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15913.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15299__auto___15970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___15970,tc,fc){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___15970,tc,fc){
return (function (state_15941){
var state_val_15942 = (state_15941[(1)]);
if((state_val_15942 === (7))){
var inst_15937 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
var statearr_15943_15971 = state_15941__$1;
(statearr_15943_15971[(2)] = inst_15937);

(statearr_15943_15971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (1))){
var state_15941__$1 = state_15941;
var statearr_15944_15972 = state_15941__$1;
(statearr_15944_15972[(2)] = null);

(statearr_15944_15972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (4))){
var inst_15918 = (state_15941[(7)]);
var inst_15918__$1 = (state_15941[(2)]);
var inst_15919 = (inst_15918__$1 == null);
var state_15941__$1 = (function (){var statearr_15945 = state_15941;
(statearr_15945[(7)] = inst_15918__$1);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15919)){
var statearr_15946_15973 = state_15941__$1;
(statearr_15946_15973[(1)] = (5));

} else {
var statearr_15947_15974 = state_15941__$1;
(statearr_15947_15974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (13))){
var state_15941__$1 = state_15941;
var statearr_15948_15975 = state_15941__$1;
(statearr_15948_15975[(2)] = null);

(statearr_15948_15975[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (6))){
var inst_15918 = (state_15941[(7)]);
var inst_15924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15918) : p.call(null,inst_15918));
var state_15941__$1 = state_15941;
if(cljs.core.truth_(inst_15924)){
var statearr_15949_15976 = state_15941__$1;
(statearr_15949_15976[(1)] = (9));

} else {
var statearr_15950_15977 = state_15941__$1;
(statearr_15950_15977[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (3))){
var inst_15939 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15941__$1,inst_15939);
} else {
if((state_val_15942 === (12))){
var state_15941__$1 = state_15941;
var statearr_15951_15978 = state_15941__$1;
(statearr_15951_15978[(2)] = null);

(statearr_15951_15978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (2))){
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15941__$1,(4),ch);
} else {
if((state_val_15942 === (11))){
var inst_15918 = (state_15941[(7)]);
var inst_15928 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15941__$1,(8),inst_15928,inst_15918);
} else {
if((state_val_15942 === (9))){
var state_15941__$1 = state_15941;
var statearr_15952_15979 = state_15941__$1;
(statearr_15952_15979[(2)] = tc);

(statearr_15952_15979[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (5))){
var inst_15921 = cljs.core.async.close_BANG_(tc);
var inst_15922 = cljs.core.async.close_BANG_(fc);
var state_15941__$1 = (function (){var statearr_15953 = state_15941;
(statearr_15953[(8)] = inst_15921);

return statearr_15953;
})();
var statearr_15954_15980 = state_15941__$1;
(statearr_15954_15980[(2)] = inst_15922);

(statearr_15954_15980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (14))){
var inst_15935 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
var statearr_15955_15981 = state_15941__$1;
(statearr_15955_15981[(2)] = inst_15935);

(statearr_15955_15981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (10))){
var state_15941__$1 = state_15941;
var statearr_15956_15982 = state_15941__$1;
(statearr_15956_15982[(2)] = fc);

(statearr_15956_15982[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15942 === (8))){
var inst_15930 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
if(cljs.core.truth_(inst_15930)){
var statearr_15957_15983 = state_15941__$1;
(statearr_15957_15983[(1)] = (12));

} else {
var statearr_15958_15984 = state_15941__$1;
(statearr_15958_15984[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___15970,tc,fc))
;
return ((function (switch__15185__auto__,c__15299__auto___15970,tc,fc){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_15962 = [null,null,null,null,null,null,null,null,null];
(statearr_15962[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_15962[(1)] = (1));

return statearr_15962;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_15941){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_15941);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e15963){if((e15963 instanceof Object)){
var ex__15189__auto__ = e15963;
var statearr_15964_15985 = state_15941;
(statearr_15964_15985[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15941);

return cljs.core.cst$kw$recur;
} else {
throw e15963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__15986 = state_15941;
state_15941 = G__15986;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_15941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_15941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___15970,tc,fc))
})();
var state__15301__auto__ = (function (){var statearr_15965 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_15965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___15970);

return statearr_15965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___15970,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__){
return (function (state_16033){
var state_val_16034 = (state_16033[(1)]);
if((state_val_16034 === (1))){
var inst_16019 = init;
var state_16033__$1 = (function (){var statearr_16035 = state_16033;
(statearr_16035[(7)] = inst_16019);

return statearr_16035;
})();
var statearr_16036_16051 = state_16033__$1;
(statearr_16036_16051[(2)] = null);

(statearr_16036_16051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16034 === (2))){
var state_16033__$1 = state_16033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16033__$1,(4),ch);
} else {
if((state_val_16034 === (3))){
var inst_16031 = (state_16033[(2)]);
var state_16033__$1 = state_16033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16033__$1,inst_16031);
} else {
if((state_val_16034 === (4))){
var inst_16022 = (state_16033[(8)]);
var inst_16022__$1 = (state_16033[(2)]);
var inst_16023 = (inst_16022__$1 == null);
var state_16033__$1 = (function (){var statearr_16037 = state_16033;
(statearr_16037[(8)] = inst_16022__$1);

return statearr_16037;
})();
if(cljs.core.truth_(inst_16023)){
var statearr_16038_16052 = state_16033__$1;
(statearr_16038_16052[(1)] = (5));

} else {
var statearr_16039_16053 = state_16033__$1;
(statearr_16039_16053[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16034 === (5))){
var inst_16019 = (state_16033[(7)]);
var state_16033__$1 = state_16033;
var statearr_16040_16054 = state_16033__$1;
(statearr_16040_16054[(2)] = inst_16019);

(statearr_16040_16054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16034 === (6))){
var inst_16019 = (state_16033[(7)]);
var inst_16022 = (state_16033[(8)]);
var inst_16026 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16019,inst_16022) : f.call(null,inst_16019,inst_16022));
var inst_16019__$1 = inst_16026;
var state_16033__$1 = (function (){var statearr_16041 = state_16033;
(statearr_16041[(7)] = inst_16019__$1);

return statearr_16041;
})();
var statearr_16042_16055 = state_16033__$1;
(statearr_16042_16055[(2)] = null);

(statearr_16042_16055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16034 === (7))){
var inst_16029 = (state_16033[(2)]);
var state_16033__$1 = state_16033;
var statearr_16043_16056 = state_16033__$1;
(statearr_16043_16056[(2)] = inst_16029);

(statearr_16043_16056[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__15299__auto__))
;
return ((function (switch__15185__auto__,c__15299__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15186__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15186__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null,null,null];
(statearr_16047[(0)] = cljs$core$async$reduce_$_state_machine__15186__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var cljs$core$async$reduce_$_state_machine__15186__auto____1 = (function (state_16033){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_16033);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e16048){if((e16048 instanceof Object)){
var ex__15189__auto__ = e16048;
var statearr_16049_16057 = state_16033;
(statearr_16049_16057[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16033);

return cljs.core.cst$kw$recur;
} else {
throw e16048;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__16058 = state_16033;
state_16033 = G__16058;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15186__auto__ = function(state_16033){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15186__auto____1.call(this,state_16033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15186__auto____0;
cljs$core$async$reduce_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15186__auto____1;
return cljs$core$async$reduce_$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__))
})();
var state__15301__auto__ = (function (){var statearr_16050 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_16050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_16050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__))
);

return c__15299__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args16059 = [];
var len__6226__auto___16111 = arguments.length;
var i__6227__auto___16112 = (0);
while(true){
if((i__6227__auto___16112 < len__6226__auto___16111)){
args16059.push((arguments[i__6227__auto___16112]));

var G__16113 = (i__6227__auto___16112 + (1));
i__6227__auto___16112 = G__16113;
continue;
} else {
}
break;
}

var G__16061 = args16059.length;
switch (G__16061) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16059.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__){
return (function (state_16086){
var state_val_16087 = (state_16086[(1)]);
if((state_val_16087 === (7))){
var inst_16068 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16088_16115 = state_16086__$1;
(statearr_16088_16115[(2)] = inst_16068);

(statearr_16088_16115[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (1))){
var inst_16062 = cljs.core.seq(coll);
var inst_16063 = inst_16062;
var state_16086__$1 = (function (){var statearr_16089 = state_16086;
(statearr_16089[(7)] = inst_16063);

return statearr_16089;
})();
var statearr_16090_16116 = state_16086__$1;
(statearr_16090_16116[(2)] = null);

(statearr_16090_16116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (4))){
var inst_16063 = (state_16086[(7)]);
var inst_16066 = cljs.core.first(inst_16063);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16086__$1,(7),ch,inst_16066);
} else {
if((state_val_16087 === (13))){
var inst_16080 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16091_16117 = state_16086__$1;
(statearr_16091_16117[(2)] = inst_16080);

(statearr_16091_16117[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (6))){
var inst_16071 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
if(cljs.core.truth_(inst_16071)){
var statearr_16092_16118 = state_16086__$1;
(statearr_16092_16118[(1)] = (8));

} else {
var statearr_16093_16119 = state_16086__$1;
(statearr_16093_16119[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (3))){
var inst_16084 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16086__$1,inst_16084);
} else {
if((state_val_16087 === (12))){
var state_16086__$1 = state_16086;
var statearr_16094_16120 = state_16086__$1;
(statearr_16094_16120[(2)] = null);

(statearr_16094_16120[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (2))){
var inst_16063 = (state_16086[(7)]);
var state_16086__$1 = state_16086;
if(cljs.core.truth_(inst_16063)){
var statearr_16095_16121 = state_16086__$1;
(statearr_16095_16121[(1)] = (4));

} else {
var statearr_16096_16122 = state_16086__$1;
(statearr_16096_16122[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (11))){
var inst_16077 = cljs.core.async.close_BANG_(ch);
var state_16086__$1 = state_16086;
var statearr_16097_16123 = state_16086__$1;
(statearr_16097_16123[(2)] = inst_16077);

(statearr_16097_16123[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (9))){
var state_16086__$1 = state_16086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16098_16124 = state_16086__$1;
(statearr_16098_16124[(1)] = (11));

} else {
var statearr_16099_16125 = state_16086__$1;
(statearr_16099_16125[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (5))){
var inst_16063 = (state_16086[(7)]);
var state_16086__$1 = state_16086;
var statearr_16100_16126 = state_16086__$1;
(statearr_16100_16126[(2)] = inst_16063);

(statearr_16100_16126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (10))){
var inst_16082 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16101_16127 = state_16086__$1;
(statearr_16101_16127[(2)] = inst_16082);

(statearr_16101_16127[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (8))){
var inst_16063 = (state_16086[(7)]);
var inst_16073 = cljs.core.next(inst_16063);
var inst_16063__$1 = inst_16073;
var state_16086__$1 = (function (){var statearr_16102 = state_16086;
(statearr_16102[(7)] = inst_16063__$1);

return statearr_16102;
})();
var statearr_16103_16128 = state_16086__$1;
(statearr_16103_16128[(2)] = null);

(statearr_16103_16128[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto__))
;
return ((function (switch__15185__auto__,c__15299__auto__){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_16107 = [null,null,null,null,null,null,null,null];
(statearr_16107[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_16107[(1)] = (1));

return statearr_16107;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_16086){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_16086);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e16108){if((e16108 instanceof Object)){
var ex__15189__auto__ = e16108;
var statearr_16109_16129 = state_16086;
(statearr_16109_16129[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16086);

return cljs.core.cst$kw$recur;
} else {
throw e16108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__16130 = state_16086;
state_16086 = G__16130;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__))
})();
var state__15301__auto__ = (function (){var statearr_16110 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_16110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__))
);

return c__15299__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto__.call(null,_));
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var cs = (function (){var G__16355 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16355) : cljs.core.atom.call(null,G__16355));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16356 = (function (mult,ch,cs,meta16357){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16357 = meta16357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16358,meta16357__$1){
var self__ = this;
var _16358__$1 = this;
return (new cljs.core.async.t_cljs$core$async16356(self__.mult,self__.ch,self__.cs,meta16357__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16358){
var self__ = this;
var _16358__$1 = this;
return self__.meta16357;
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16359_16579 = self__.cs;
var G__16360_16580 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16359_16579,G__16360_16580) : cljs.core.reset_BANG_.call(null,G__16359_16579,G__16360_16580));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16357], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16356";

cljs.core.async.t_cljs$core$async16356.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async16356");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16356 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16356(mult__$1,ch__$1,cs__$1,meta16357){
return (new cljs.core.async.t_cljs$core$async16356(mult__$1,ch__$1,cs__$1,meta16357));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16356(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15299__auto___16581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___16581,cs,m,dchan,dctr,done){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___16581,cs,m,dchan,dctr,done){
return (function (state_16491){
var state_val_16492 = (state_16491[(1)]);
if((state_val_16492 === (7))){
var inst_16487 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16493_16582 = state_16491__$1;
(statearr_16493_16582[(2)] = inst_16487);

(statearr_16493_16582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (20))){
var inst_16392 = (state_16491[(7)]);
var inst_16402 = cljs.core.first(inst_16392);
var inst_16403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16402,(0),null);
var inst_16404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16402,(1),null);
var state_16491__$1 = (function (){var statearr_16494 = state_16491;
(statearr_16494[(8)] = inst_16403);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16404)){
var statearr_16495_16583 = state_16491__$1;
(statearr_16495_16583[(1)] = (22));

} else {
var statearr_16496_16584 = state_16491__$1;
(statearr_16496_16584[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (27))){
var inst_16439 = (state_16491[(9)]);
var inst_16432 = (state_16491[(10)]);
var inst_16363 = (state_16491[(11)]);
var inst_16434 = (state_16491[(12)]);
var inst_16439__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16432,inst_16434);
var inst_16440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16439__$1,inst_16363,done);
var state_16491__$1 = (function (){var statearr_16497 = state_16491;
(statearr_16497[(9)] = inst_16439__$1);

return statearr_16497;
})();
if(cljs.core.truth_(inst_16440)){
var statearr_16498_16585 = state_16491__$1;
(statearr_16498_16585[(1)] = (30));

} else {
var statearr_16499_16586 = state_16491__$1;
(statearr_16499_16586[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (1))){
var state_16491__$1 = state_16491;
var statearr_16500_16587 = state_16491__$1;
(statearr_16500_16587[(2)] = null);

(statearr_16500_16587[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (24))){
var inst_16392 = (state_16491[(7)]);
var inst_16409 = (state_16491[(2)]);
var inst_16410 = cljs.core.next(inst_16392);
var inst_16372 = inst_16410;
var inst_16373 = null;
var inst_16374 = (0);
var inst_16375 = (0);
var state_16491__$1 = (function (){var statearr_16501 = state_16491;
(statearr_16501[(13)] = inst_16409);

(statearr_16501[(14)] = inst_16372);

(statearr_16501[(15)] = inst_16375);

(statearr_16501[(16)] = inst_16374);

(statearr_16501[(17)] = inst_16373);

return statearr_16501;
})();
var statearr_16502_16588 = state_16491__$1;
(statearr_16502_16588[(2)] = null);

(statearr_16502_16588[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (39))){
var state_16491__$1 = state_16491;
var statearr_16506_16589 = state_16491__$1;
(statearr_16506_16589[(2)] = null);

(statearr_16506_16589[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (4))){
var inst_16363 = (state_16491[(11)]);
var inst_16363__$1 = (state_16491[(2)]);
var inst_16364 = (inst_16363__$1 == null);
var state_16491__$1 = (function (){var statearr_16507 = state_16491;
(statearr_16507[(11)] = inst_16363__$1);

return statearr_16507;
})();
if(cljs.core.truth_(inst_16364)){
var statearr_16508_16590 = state_16491__$1;
(statearr_16508_16590[(1)] = (5));

} else {
var statearr_16509_16591 = state_16491__$1;
(statearr_16509_16591[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (15))){
var inst_16372 = (state_16491[(14)]);
var inst_16375 = (state_16491[(15)]);
var inst_16374 = (state_16491[(16)]);
var inst_16373 = (state_16491[(17)]);
var inst_16388 = (state_16491[(2)]);
var inst_16389 = (inst_16375 + (1));
var tmp16503 = inst_16372;
var tmp16504 = inst_16374;
var tmp16505 = inst_16373;
var inst_16372__$1 = tmp16503;
var inst_16373__$1 = tmp16505;
var inst_16374__$1 = tmp16504;
var inst_16375__$1 = inst_16389;
var state_16491__$1 = (function (){var statearr_16510 = state_16491;
(statearr_16510[(14)] = inst_16372__$1);

(statearr_16510[(15)] = inst_16375__$1);

(statearr_16510[(16)] = inst_16374__$1);

(statearr_16510[(18)] = inst_16388);

(statearr_16510[(17)] = inst_16373__$1);

return statearr_16510;
})();
var statearr_16511_16592 = state_16491__$1;
(statearr_16511_16592[(2)] = null);

(statearr_16511_16592[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (21))){
var inst_16413 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16515_16593 = state_16491__$1;
(statearr_16515_16593[(2)] = inst_16413);

(statearr_16515_16593[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (31))){
var inst_16439 = (state_16491[(9)]);
var inst_16443 = done(null);
var inst_16444 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16439);
var state_16491__$1 = (function (){var statearr_16516 = state_16491;
(statearr_16516[(19)] = inst_16443);

return statearr_16516;
})();
var statearr_16517_16594 = state_16491__$1;
(statearr_16517_16594[(2)] = inst_16444);

(statearr_16517_16594[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (32))){
var inst_16431 = (state_16491[(20)]);
var inst_16433 = (state_16491[(21)]);
var inst_16432 = (state_16491[(10)]);
var inst_16434 = (state_16491[(12)]);
var inst_16446 = (state_16491[(2)]);
var inst_16447 = (inst_16434 + (1));
var tmp16512 = inst_16431;
var tmp16513 = inst_16433;
var tmp16514 = inst_16432;
var inst_16431__$1 = tmp16512;
var inst_16432__$1 = tmp16514;
var inst_16433__$1 = tmp16513;
var inst_16434__$1 = inst_16447;
var state_16491__$1 = (function (){var statearr_16518 = state_16491;
(statearr_16518[(20)] = inst_16431__$1);

(statearr_16518[(21)] = inst_16433__$1);

(statearr_16518[(22)] = inst_16446);

(statearr_16518[(10)] = inst_16432__$1);

(statearr_16518[(12)] = inst_16434__$1);

return statearr_16518;
})();
var statearr_16519_16595 = state_16491__$1;
(statearr_16519_16595[(2)] = null);

(statearr_16519_16595[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (40))){
var inst_16459 = (state_16491[(23)]);
var inst_16463 = done(null);
var inst_16464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16459);
var state_16491__$1 = (function (){var statearr_16520 = state_16491;
(statearr_16520[(24)] = inst_16463);

return statearr_16520;
})();
var statearr_16521_16596 = state_16491__$1;
(statearr_16521_16596[(2)] = inst_16464);

(statearr_16521_16596[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (33))){
var inst_16450 = (state_16491[(25)]);
var inst_16452 = cljs.core.chunked_seq_QMARK_(inst_16450);
var state_16491__$1 = state_16491;
if(inst_16452){
var statearr_16522_16597 = state_16491__$1;
(statearr_16522_16597[(1)] = (36));

} else {
var statearr_16523_16598 = state_16491__$1;
(statearr_16523_16598[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (13))){
var inst_16382 = (state_16491[(26)]);
var inst_16385 = cljs.core.async.close_BANG_(inst_16382);
var state_16491__$1 = state_16491;
var statearr_16524_16599 = state_16491__$1;
(statearr_16524_16599[(2)] = inst_16385);

(statearr_16524_16599[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (22))){
var inst_16403 = (state_16491[(8)]);
var inst_16406 = cljs.core.async.close_BANG_(inst_16403);
var state_16491__$1 = state_16491;
var statearr_16525_16600 = state_16491__$1;
(statearr_16525_16600[(2)] = inst_16406);

(statearr_16525_16600[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (36))){
var inst_16450 = (state_16491[(25)]);
var inst_16454 = cljs.core.chunk_first(inst_16450);
var inst_16455 = cljs.core.chunk_rest(inst_16450);
var inst_16456 = cljs.core.count(inst_16454);
var inst_16431 = inst_16455;
var inst_16432 = inst_16454;
var inst_16433 = inst_16456;
var inst_16434 = (0);
var state_16491__$1 = (function (){var statearr_16526 = state_16491;
(statearr_16526[(20)] = inst_16431);

(statearr_16526[(21)] = inst_16433);

(statearr_16526[(10)] = inst_16432);

(statearr_16526[(12)] = inst_16434);

return statearr_16526;
})();
var statearr_16527_16601 = state_16491__$1;
(statearr_16527_16601[(2)] = null);

(statearr_16527_16601[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (41))){
var inst_16450 = (state_16491[(25)]);
var inst_16466 = (state_16491[(2)]);
var inst_16467 = cljs.core.next(inst_16450);
var inst_16431 = inst_16467;
var inst_16432 = null;
var inst_16433 = (0);
var inst_16434 = (0);
var state_16491__$1 = (function (){var statearr_16528 = state_16491;
(statearr_16528[(20)] = inst_16431);

(statearr_16528[(21)] = inst_16433);

(statearr_16528[(27)] = inst_16466);

(statearr_16528[(10)] = inst_16432);

(statearr_16528[(12)] = inst_16434);

return statearr_16528;
})();
var statearr_16529_16602 = state_16491__$1;
(statearr_16529_16602[(2)] = null);

(statearr_16529_16602[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (43))){
var state_16491__$1 = state_16491;
var statearr_16530_16603 = state_16491__$1;
(statearr_16530_16603[(2)] = null);

(statearr_16530_16603[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (29))){
var inst_16475 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16531_16604 = state_16491__$1;
(statearr_16531_16604[(2)] = inst_16475);

(statearr_16531_16604[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (44))){
var inst_16484 = (state_16491[(2)]);
var state_16491__$1 = (function (){var statearr_16532 = state_16491;
(statearr_16532[(28)] = inst_16484);

return statearr_16532;
})();
var statearr_16533_16605 = state_16491__$1;
(statearr_16533_16605[(2)] = null);

(statearr_16533_16605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (6))){
var inst_16423 = (state_16491[(29)]);
var inst_16422 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16423__$1 = cljs.core.keys(inst_16422);
var inst_16424 = cljs.core.count(inst_16423__$1);
var inst_16425 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16424) : cljs.core.reset_BANG_.call(null,dctr,inst_16424));
var inst_16430 = cljs.core.seq(inst_16423__$1);
var inst_16431 = inst_16430;
var inst_16432 = null;
var inst_16433 = (0);
var inst_16434 = (0);
var state_16491__$1 = (function (){var statearr_16534 = state_16491;
(statearr_16534[(20)] = inst_16431);

(statearr_16534[(21)] = inst_16433);

(statearr_16534[(29)] = inst_16423__$1);

(statearr_16534[(10)] = inst_16432);

(statearr_16534[(12)] = inst_16434);

(statearr_16534[(30)] = inst_16425);

return statearr_16534;
})();
var statearr_16535_16606 = state_16491__$1;
(statearr_16535_16606[(2)] = null);

(statearr_16535_16606[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (28))){
var inst_16431 = (state_16491[(20)]);
var inst_16450 = (state_16491[(25)]);
var inst_16450__$1 = cljs.core.seq(inst_16431);
var state_16491__$1 = (function (){var statearr_16536 = state_16491;
(statearr_16536[(25)] = inst_16450__$1);

return statearr_16536;
})();
if(inst_16450__$1){
var statearr_16537_16607 = state_16491__$1;
(statearr_16537_16607[(1)] = (33));

} else {
var statearr_16538_16608 = state_16491__$1;
(statearr_16538_16608[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (25))){
var inst_16433 = (state_16491[(21)]);
var inst_16434 = (state_16491[(12)]);
var inst_16436 = (inst_16434 < inst_16433);
var inst_16437 = inst_16436;
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16437)){
var statearr_16539_16609 = state_16491__$1;
(statearr_16539_16609[(1)] = (27));

} else {
var statearr_16540_16610 = state_16491__$1;
(statearr_16540_16610[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (34))){
var state_16491__$1 = state_16491;
var statearr_16541_16611 = state_16491__$1;
(statearr_16541_16611[(2)] = null);

(statearr_16541_16611[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (17))){
var state_16491__$1 = state_16491;
var statearr_16542_16612 = state_16491__$1;
(statearr_16542_16612[(2)] = null);

(statearr_16542_16612[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (3))){
var inst_16489 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16491__$1,inst_16489);
} else {
if((state_val_16492 === (12))){
var inst_16418 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16543_16613 = state_16491__$1;
(statearr_16543_16613[(2)] = inst_16418);

(statearr_16543_16613[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (2))){
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(4),ch);
} else {
if((state_val_16492 === (23))){
var state_16491__$1 = state_16491;
var statearr_16544_16614 = state_16491__$1;
(statearr_16544_16614[(2)] = null);

(statearr_16544_16614[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (35))){
var inst_16473 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16545_16615 = state_16491__$1;
(statearr_16545_16615[(2)] = inst_16473);

(statearr_16545_16615[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (19))){
var inst_16392 = (state_16491[(7)]);
var inst_16396 = cljs.core.chunk_first(inst_16392);
var inst_16397 = cljs.core.chunk_rest(inst_16392);
var inst_16398 = cljs.core.count(inst_16396);
var inst_16372 = inst_16397;
var inst_16373 = inst_16396;
var inst_16374 = inst_16398;
var inst_16375 = (0);
var state_16491__$1 = (function (){var statearr_16546 = state_16491;
(statearr_16546[(14)] = inst_16372);

(statearr_16546[(15)] = inst_16375);

(statearr_16546[(16)] = inst_16374);

(statearr_16546[(17)] = inst_16373);

return statearr_16546;
})();
var statearr_16547_16616 = state_16491__$1;
(statearr_16547_16616[(2)] = null);

(statearr_16547_16616[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (11))){
var inst_16392 = (state_16491[(7)]);
var inst_16372 = (state_16491[(14)]);
var inst_16392__$1 = cljs.core.seq(inst_16372);
var state_16491__$1 = (function (){var statearr_16548 = state_16491;
(statearr_16548[(7)] = inst_16392__$1);

return statearr_16548;
})();
if(inst_16392__$1){
var statearr_16549_16617 = state_16491__$1;
(statearr_16549_16617[(1)] = (16));

} else {
var statearr_16550_16618 = state_16491__$1;
(statearr_16550_16618[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (9))){
var inst_16420 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16551_16619 = state_16491__$1;
(statearr_16551_16619[(2)] = inst_16420);

(statearr_16551_16619[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (5))){
var inst_16370 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16371 = cljs.core.seq(inst_16370);
var inst_16372 = inst_16371;
var inst_16373 = null;
var inst_16374 = (0);
var inst_16375 = (0);
var state_16491__$1 = (function (){var statearr_16552 = state_16491;
(statearr_16552[(14)] = inst_16372);

(statearr_16552[(15)] = inst_16375);

(statearr_16552[(16)] = inst_16374);

(statearr_16552[(17)] = inst_16373);

return statearr_16552;
})();
var statearr_16553_16620 = state_16491__$1;
(statearr_16553_16620[(2)] = null);

(statearr_16553_16620[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (14))){
var state_16491__$1 = state_16491;
var statearr_16554_16621 = state_16491__$1;
(statearr_16554_16621[(2)] = null);

(statearr_16554_16621[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (45))){
var inst_16481 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16555_16622 = state_16491__$1;
(statearr_16555_16622[(2)] = inst_16481);

(statearr_16555_16622[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (26))){
var inst_16423 = (state_16491[(29)]);
var inst_16477 = (state_16491[(2)]);
var inst_16478 = cljs.core.seq(inst_16423);
var state_16491__$1 = (function (){var statearr_16556 = state_16491;
(statearr_16556[(31)] = inst_16477);

return statearr_16556;
})();
if(inst_16478){
var statearr_16557_16623 = state_16491__$1;
(statearr_16557_16623[(1)] = (42));

} else {
var statearr_16558_16624 = state_16491__$1;
(statearr_16558_16624[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (16))){
var inst_16392 = (state_16491[(7)]);
var inst_16394 = cljs.core.chunked_seq_QMARK_(inst_16392);
var state_16491__$1 = state_16491;
if(inst_16394){
var statearr_16559_16625 = state_16491__$1;
(statearr_16559_16625[(1)] = (19));

} else {
var statearr_16560_16626 = state_16491__$1;
(statearr_16560_16626[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (38))){
var inst_16470 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16561_16627 = state_16491__$1;
(statearr_16561_16627[(2)] = inst_16470);

(statearr_16561_16627[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (30))){
var state_16491__$1 = state_16491;
var statearr_16562_16628 = state_16491__$1;
(statearr_16562_16628[(2)] = null);

(statearr_16562_16628[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (10))){
var inst_16375 = (state_16491[(15)]);
var inst_16373 = (state_16491[(17)]);
var inst_16381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16373,inst_16375);
var inst_16382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16381,(0),null);
var inst_16383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16381,(1),null);
var state_16491__$1 = (function (){var statearr_16563 = state_16491;
(statearr_16563[(26)] = inst_16382);

return statearr_16563;
})();
if(cljs.core.truth_(inst_16383)){
var statearr_16564_16629 = state_16491__$1;
(statearr_16564_16629[(1)] = (13));

} else {
var statearr_16565_16630 = state_16491__$1;
(statearr_16565_16630[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (18))){
var inst_16416 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16566_16631 = state_16491__$1;
(statearr_16566_16631[(2)] = inst_16416);

(statearr_16566_16631[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (42))){
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(45),dchan);
} else {
if((state_val_16492 === (37))){
var inst_16450 = (state_16491[(25)]);
var inst_16363 = (state_16491[(11)]);
var inst_16459 = (state_16491[(23)]);
var inst_16459__$1 = cljs.core.first(inst_16450);
var inst_16460 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16459__$1,inst_16363,done);
var state_16491__$1 = (function (){var statearr_16567 = state_16491;
(statearr_16567[(23)] = inst_16459__$1);

return statearr_16567;
})();
if(cljs.core.truth_(inst_16460)){
var statearr_16568_16632 = state_16491__$1;
(statearr_16568_16632[(1)] = (39));

} else {
var statearr_16569_16633 = state_16491__$1;
(statearr_16569_16633[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (8))){
var inst_16375 = (state_16491[(15)]);
var inst_16374 = (state_16491[(16)]);
var inst_16377 = (inst_16375 < inst_16374);
var inst_16378 = inst_16377;
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16378)){
var statearr_16570_16634 = state_16491__$1;
(statearr_16570_16634[(1)] = (10));

} else {
var statearr_16571_16635 = state_16491__$1;
(statearr_16571_16635[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___16581,cs,m,dchan,dctr,done))
;
return ((function (switch__15185__auto__,c__15299__auto___16581,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15186__auto__ = null;
var cljs$core$async$mult_$_state_machine__15186__auto____0 = (function (){
var statearr_16575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16575[(0)] = cljs$core$async$mult_$_state_machine__15186__auto__);

(statearr_16575[(1)] = (1));

return statearr_16575;
});
var cljs$core$async$mult_$_state_machine__15186__auto____1 = (function (state_16491){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_16491);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e16576){if((e16576 instanceof Object)){
var ex__15189__auto__ = e16576;
var statearr_16577_16636 = state_16491;
(statearr_16577_16636[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16491);

return cljs.core.cst$kw$recur;
} else {
throw e16576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__16637 = state_16491;
state_16491 = G__16637;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15186__auto__ = function(state_16491){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15186__auto____1.call(this,state_16491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15186__auto____0;
cljs$core$async$mult_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15186__auto____1;
return cljs$core$async$mult_$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___16581,cs,m,dchan,dctr,done))
})();
var state__15301__auto__ = (function (){var statearr_16578 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_16578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___16581);

return statearr_16578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___16581,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16638 = [];
var len__6226__auto___16641 = arguments.length;
var i__6227__auto___16642 = (0);
while(true){
if((i__6227__auto___16642 < len__6226__auto___16641)){
args16638.push((arguments[i__6227__auto___16642]));

var G__16643 = (i__6227__auto___16642 + (1));
i__6227__auto___16642 = G__16643;
continue;
} else {
}
break;
}

var G__16640 = args16638.length;
switch (G__16640) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16638.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto__.call(null,m,state_map));
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto__.call(null,m,mode));
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16655 = arguments.length;
var i__6227__auto___16656 = (0);
while(true){
if((i__6227__auto___16656 < len__6226__auto___16655)){
args__6233__auto__.push((arguments[i__6227__auto___16656]));

var G__16657 = (i__6227__auto___16656 + (1));
i__6227__auto___16656 = G__16657;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16649){
var map__16650 = p__16649;
var map__16650__$1 = ((((!((map__16650 == null)))?((((map__16650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16650):map__16650);
var opts = map__16650__$1;
var statearr_16652_16658 = state;
(statearr_16652_16658[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__16650,map__16650__$1,opts){
return (function (val){
var statearr_16653_16659 = state;
(statearr_16653_16659[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16650,map__16650__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_16654_16660 = state;
(statearr_16654_16660[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16645){
var G__16646 = cljs.core.first(seq16645);
var seq16645__$1 = cljs.core.next(seq16645);
var G__16647 = cljs.core.first(seq16645__$1);
var seq16645__$2 = cljs.core.next(seq16645__$1);
var G__16648 = cljs.core.first(seq16645__$2);
var seq16645__$3 = cljs.core.next(seq16645__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16646,G__16647,G__16648,seq16645__$3);
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
var cs = (function (){var G__16827 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16827) : cljs.core.atom.call(null,G__16827));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16829){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16829 = meta16829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16830,meta16829__$1){
var self__ = this;
var _16830__$1 = this;
return (new cljs.core.async.t_cljs$core$async16828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16830){
var self__ = this;
var _16830__$1 = this;
return self__.meta16829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16831_16993 = self__.cs;
var G__16832_16994 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16831_16993,G__16832_16994) : cljs.core.reset_BANG_.call(null,G__16831_16993,G__16832_16994));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16829], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16828";

cljs.core.async.t_cljs$core$async16828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async16828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16829){
return (new cljs.core.async.t_cljs$core$async16828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16828(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15299__auto___16995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16930){
var state_val_16931 = (state_16930[(1)]);
if((state_val_16931 === (7))){
var inst_16848 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16932_16996 = state_16930__$1;
(statearr_16932_16996[(2)] = inst_16848);

(statearr_16932_16996[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (20))){
var inst_16860 = (state_16930[(7)]);
var state_16930__$1 = state_16930;
var statearr_16933_16997 = state_16930__$1;
(statearr_16933_16997[(2)] = inst_16860);

(statearr_16933_16997[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (27))){
var state_16930__$1 = state_16930;
var statearr_16934_16998 = state_16930__$1;
(statearr_16934_16998[(2)] = null);

(statearr_16934_16998[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (1))){
var inst_16836 = (state_16930[(8)]);
var inst_16836__$1 = calc_state();
var inst_16838 = (inst_16836__$1 == null);
var inst_16839 = cljs.core.not(inst_16838);
var state_16930__$1 = (function (){var statearr_16935 = state_16930;
(statearr_16935[(8)] = inst_16836__$1);

return statearr_16935;
})();
if(inst_16839){
var statearr_16936_16999 = state_16930__$1;
(statearr_16936_16999[(1)] = (2));

} else {
var statearr_16937_17000 = state_16930__$1;
(statearr_16937_17000[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (24))){
var inst_16890 = (state_16930[(9)]);
var inst_16883 = (state_16930[(10)]);
var inst_16904 = (state_16930[(11)]);
var inst_16904__$1 = (inst_16883.cljs$core$IFn$_invoke$arity$1 ? inst_16883.cljs$core$IFn$_invoke$arity$1(inst_16890) : inst_16883.call(null,inst_16890));
var state_16930__$1 = (function (){var statearr_16938 = state_16930;
(statearr_16938[(11)] = inst_16904__$1);

return statearr_16938;
})();
if(cljs.core.truth_(inst_16904__$1)){
var statearr_16939_17001 = state_16930__$1;
(statearr_16939_17001[(1)] = (29));

} else {
var statearr_16940_17002 = state_16930__$1;
(statearr_16940_17002[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (4))){
var inst_16851 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16851)){
var statearr_16941_17003 = state_16930__$1;
(statearr_16941_17003[(1)] = (8));

} else {
var statearr_16942_17004 = state_16930__$1;
(statearr_16942_17004[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (15))){
var inst_16877 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16877)){
var statearr_16943_17005 = state_16930__$1;
(statearr_16943_17005[(1)] = (19));

} else {
var statearr_16944_17006 = state_16930__$1;
(statearr_16944_17006[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (21))){
var inst_16882 = (state_16930[(12)]);
var inst_16882__$1 = (state_16930[(2)]);
var inst_16883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16882__$1,cljs.core.cst$kw$solos);
var inst_16884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16882__$1,cljs.core.cst$kw$mutes);
var inst_16885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16882__$1,cljs.core.cst$kw$reads);
var state_16930__$1 = (function (){var statearr_16945 = state_16930;
(statearr_16945[(13)] = inst_16884);

(statearr_16945[(10)] = inst_16883);

(statearr_16945[(12)] = inst_16882__$1);

return statearr_16945;
})();
return cljs.core.async.ioc_alts_BANG_(state_16930__$1,(22),inst_16885);
} else {
if((state_val_16931 === (31))){
var inst_16912 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16912)){
var statearr_16946_17007 = state_16930__$1;
(statearr_16946_17007[(1)] = (32));

} else {
var statearr_16947_17008 = state_16930__$1;
(statearr_16947_17008[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (32))){
var inst_16889 = (state_16930[(14)]);
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16930__$1,(35),out,inst_16889);
} else {
if((state_val_16931 === (33))){
var inst_16882 = (state_16930[(12)]);
var inst_16860 = inst_16882;
var state_16930__$1 = (function (){var statearr_16948 = state_16930;
(statearr_16948[(7)] = inst_16860);

return statearr_16948;
})();
var statearr_16949_17009 = state_16930__$1;
(statearr_16949_17009[(2)] = null);

(statearr_16949_17009[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (13))){
var inst_16860 = (state_16930[(7)]);
var inst_16867 = inst_16860.cljs$lang$protocol_mask$partition0$;
var inst_16868 = (inst_16867 & (64));
var inst_16869 = inst_16860.cljs$core$ISeq$;
var inst_16870 = (inst_16868) || (inst_16869);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16870)){
var statearr_16950_17010 = state_16930__$1;
(statearr_16950_17010[(1)] = (16));

} else {
var statearr_16951_17011 = state_16930__$1;
(statearr_16951_17011[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (22))){
var inst_16889 = (state_16930[(14)]);
var inst_16890 = (state_16930[(9)]);
var inst_16888 = (state_16930[(2)]);
var inst_16889__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(0),null);
var inst_16890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(1),null);
var inst_16891 = (inst_16889__$1 == null);
var inst_16892 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16890__$1,change);
var inst_16893 = (inst_16891) || (inst_16892);
var state_16930__$1 = (function (){var statearr_16952 = state_16930;
(statearr_16952[(14)] = inst_16889__$1);

(statearr_16952[(9)] = inst_16890__$1);

return statearr_16952;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16953_17012 = state_16930__$1;
(statearr_16953_17012[(1)] = (23));

} else {
var statearr_16954_17013 = state_16930__$1;
(statearr_16954_17013[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (36))){
var inst_16882 = (state_16930[(12)]);
var inst_16860 = inst_16882;
var state_16930__$1 = (function (){var statearr_16955 = state_16930;
(statearr_16955[(7)] = inst_16860);

return statearr_16955;
})();
var statearr_16956_17014 = state_16930__$1;
(statearr_16956_17014[(2)] = null);

(statearr_16956_17014[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (29))){
var inst_16904 = (state_16930[(11)]);
var state_16930__$1 = state_16930;
var statearr_16957_17015 = state_16930__$1;
(statearr_16957_17015[(2)] = inst_16904);

(statearr_16957_17015[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (6))){
var state_16930__$1 = state_16930;
var statearr_16958_17016 = state_16930__$1;
(statearr_16958_17016[(2)] = false);

(statearr_16958_17016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (28))){
var inst_16900 = (state_16930[(2)]);
var inst_16901 = calc_state();
var inst_16860 = inst_16901;
var state_16930__$1 = (function (){var statearr_16959 = state_16930;
(statearr_16959[(15)] = inst_16900);

(statearr_16959[(7)] = inst_16860);

return statearr_16959;
})();
var statearr_16960_17017 = state_16930__$1;
(statearr_16960_17017[(2)] = null);

(statearr_16960_17017[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (25))){
var inst_16926 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16961_17018 = state_16930__$1;
(statearr_16961_17018[(2)] = inst_16926);

(statearr_16961_17018[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (34))){
var inst_16924 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16962_17019 = state_16930__$1;
(statearr_16962_17019[(2)] = inst_16924);

(statearr_16962_17019[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (17))){
var state_16930__$1 = state_16930;
var statearr_16963_17020 = state_16930__$1;
(statearr_16963_17020[(2)] = false);

(statearr_16963_17020[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (3))){
var state_16930__$1 = state_16930;
var statearr_16964_17021 = state_16930__$1;
(statearr_16964_17021[(2)] = false);

(statearr_16964_17021[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (12))){
var inst_16928 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16930__$1,inst_16928);
} else {
if((state_val_16931 === (2))){
var inst_16836 = (state_16930[(8)]);
var inst_16841 = inst_16836.cljs$lang$protocol_mask$partition0$;
var inst_16842 = (inst_16841 & (64));
var inst_16843 = inst_16836.cljs$core$ISeq$;
var inst_16844 = (inst_16842) || (inst_16843);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16844)){
var statearr_16965_17022 = state_16930__$1;
(statearr_16965_17022[(1)] = (5));

} else {
var statearr_16966_17023 = state_16930__$1;
(statearr_16966_17023[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (23))){
var inst_16889 = (state_16930[(14)]);
var inst_16895 = (inst_16889 == null);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16895)){
var statearr_16967_17024 = state_16930__$1;
(statearr_16967_17024[(1)] = (26));

} else {
var statearr_16968_17025 = state_16930__$1;
(statearr_16968_17025[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (35))){
var inst_16915 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16915)){
var statearr_16969_17026 = state_16930__$1;
(statearr_16969_17026[(1)] = (36));

} else {
var statearr_16970_17027 = state_16930__$1;
(statearr_16970_17027[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (19))){
var inst_16860 = (state_16930[(7)]);
var inst_16879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16860);
var state_16930__$1 = state_16930;
var statearr_16971_17028 = state_16930__$1;
(statearr_16971_17028[(2)] = inst_16879);

(statearr_16971_17028[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (11))){
var inst_16860 = (state_16930[(7)]);
var inst_16864 = (inst_16860 == null);
var inst_16865 = cljs.core.not(inst_16864);
var state_16930__$1 = state_16930;
if(inst_16865){
var statearr_16972_17029 = state_16930__$1;
(statearr_16972_17029[(1)] = (13));

} else {
var statearr_16973_17030 = state_16930__$1;
(statearr_16973_17030[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (9))){
var inst_16836 = (state_16930[(8)]);
var state_16930__$1 = state_16930;
var statearr_16974_17031 = state_16930__$1;
(statearr_16974_17031[(2)] = inst_16836);

(statearr_16974_17031[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (5))){
var state_16930__$1 = state_16930;
var statearr_16975_17032 = state_16930__$1;
(statearr_16975_17032[(2)] = true);

(statearr_16975_17032[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (14))){
var state_16930__$1 = state_16930;
var statearr_16976_17033 = state_16930__$1;
(statearr_16976_17033[(2)] = false);

(statearr_16976_17033[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (26))){
var inst_16890 = (state_16930[(9)]);
var inst_16897 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16890);
var state_16930__$1 = state_16930;
var statearr_16977_17034 = state_16930__$1;
(statearr_16977_17034[(2)] = inst_16897);

(statearr_16977_17034[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (16))){
var state_16930__$1 = state_16930;
var statearr_16978_17035 = state_16930__$1;
(statearr_16978_17035[(2)] = true);

(statearr_16978_17035[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (38))){
var inst_16920 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16979_17036 = state_16930__$1;
(statearr_16979_17036[(2)] = inst_16920);

(statearr_16979_17036[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (30))){
var inst_16884 = (state_16930[(13)]);
var inst_16890 = (state_16930[(9)]);
var inst_16883 = (state_16930[(10)]);
var inst_16907 = cljs.core.empty_QMARK_(inst_16883);
var inst_16908 = (inst_16884.cljs$core$IFn$_invoke$arity$1 ? inst_16884.cljs$core$IFn$_invoke$arity$1(inst_16890) : inst_16884.call(null,inst_16890));
var inst_16909 = cljs.core.not(inst_16908);
var inst_16910 = (inst_16907) && (inst_16909);
var state_16930__$1 = state_16930;
var statearr_16980_17037 = state_16930__$1;
(statearr_16980_17037[(2)] = inst_16910);

(statearr_16980_17037[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (10))){
var inst_16836 = (state_16930[(8)]);
var inst_16856 = (state_16930[(2)]);
var inst_16857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856,cljs.core.cst$kw$solos);
var inst_16858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856,cljs.core.cst$kw$mutes);
var inst_16859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856,cljs.core.cst$kw$reads);
var inst_16860 = inst_16836;
var state_16930__$1 = (function (){var statearr_16981 = state_16930;
(statearr_16981[(7)] = inst_16860);

(statearr_16981[(16)] = inst_16859);

(statearr_16981[(17)] = inst_16858);

(statearr_16981[(18)] = inst_16857);

return statearr_16981;
})();
var statearr_16982_17038 = state_16930__$1;
(statearr_16982_17038[(2)] = null);

(statearr_16982_17038[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (18))){
var inst_16874 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16983_17039 = state_16930__$1;
(statearr_16983_17039[(2)] = inst_16874);

(statearr_16983_17039[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (37))){
var state_16930__$1 = state_16930;
var statearr_16984_17040 = state_16930__$1;
(statearr_16984_17040[(2)] = null);

(statearr_16984_17040[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (8))){
var inst_16836 = (state_16930[(8)]);
var inst_16853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16836);
var state_16930__$1 = state_16930;
var statearr_16985_17041 = state_16930__$1;
(statearr_16985_17041[(2)] = inst_16853);

(statearr_16985_17041[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15185__auto__,c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15186__auto__ = null;
var cljs$core$async$mix_$_state_machine__15186__auto____0 = (function (){
var statearr_16989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16989[(0)] = cljs$core$async$mix_$_state_machine__15186__auto__);

(statearr_16989[(1)] = (1));

return statearr_16989;
});
var cljs$core$async$mix_$_state_machine__15186__auto____1 = (function (state_16930){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_16930);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e16990){if((e16990 instanceof Object)){
var ex__15189__auto__ = e16990;
var statearr_16991_17042 = state_16930;
(statearr_16991_17042[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16930);

return cljs.core.cst$kw$recur;
} else {
throw e16990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17043 = state_16930;
state_16930 = G__17043;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15186__auto__ = function(state_16930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15186__auto____1.call(this,state_16930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15186__auto____0;
cljs$core$async$mix_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15186__auto____1;
return cljs$core$async$mix_$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15301__auto__ = (function (){var statearr_16992 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_16992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___16995);

return statearr_16992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___16995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto__.call(null,p,v,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17044 = [];
var len__6226__auto___17047 = arguments.length;
var i__6227__auto___17048 = (0);
while(true){
if((i__6227__auto___17048 < len__6226__auto___17047)){
args17044.push((arguments[i__6227__auto___17048]));

var G__17049 = (i__6227__auto___17048 + (1));
i__6227__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var G__17046 = args17044.length;
switch (G__17046) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17044.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto__.call(null,p));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto__.call(null,p,v));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args17052 = [];
var len__6226__auto___17180 = arguments.length;
var i__6227__auto___17181 = (0);
while(true){
if((i__6227__auto___17181 < len__6226__auto___17180)){
args17052.push((arguments[i__6227__auto___17181]));

var G__17182 = (i__6227__auto___17181 + (1));
i__6227__auto___17181 = G__17182;
continue;
} else {
}
break;
}

var G__17054 = args17052.length;
switch (G__17054) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17052.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17055 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17055) : cljs.core.atom.call(null,G__17055));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5168__auto__,mults){
return (function (p1__17051_SHARP_){
if(cljs.core.truth_((p1__17051_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17051_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17051_SHARP_.call(null,topic)))){
return p1__17051_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17051_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17056 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17057){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17057 = meta17057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17058,meta17057__$1){
var self__ = this;
var _17058__$1 = this;
return (new cljs.core.async.t_cljs$core$async17056(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17057__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17058){
var self__ = this;
var _17058__$1 = this;
return self__.meta17057;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17059 = self__.mults;
var G__17060 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17059,G__17060) : cljs.core.reset_BANG_.call(null,G__17059,G__17060));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17057], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17056";

cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17056");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17056 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17057){
return (new cljs.core.async.t_cljs$core$async17056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17057));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17056(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15299__auto___17184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17184,mults,ensure_mult,p){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17184,mults,ensure_mult,p){
return (function (state_17132){
var state_val_17133 = (state_17132[(1)]);
if((state_val_17133 === (7))){
var inst_17128 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17134_17185 = state_17132__$1;
(statearr_17134_17185[(2)] = inst_17128);

(statearr_17134_17185[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (20))){
var state_17132__$1 = state_17132;
var statearr_17135_17186 = state_17132__$1;
(statearr_17135_17186[(2)] = null);

(statearr_17135_17186[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (1))){
var state_17132__$1 = state_17132;
var statearr_17136_17187 = state_17132__$1;
(statearr_17136_17187[(2)] = null);

(statearr_17136_17187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (24))){
var inst_17111 = (state_17132[(7)]);
var inst_17120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17111);
var state_17132__$1 = state_17132;
var statearr_17137_17188 = state_17132__$1;
(statearr_17137_17188[(2)] = inst_17120);

(statearr_17137_17188[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (4))){
var inst_17063 = (state_17132[(8)]);
var inst_17063__$1 = (state_17132[(2)]);
var inst_17064 = (inst_17063__$1 == null);
var state_17132__$1 = (function (){var statearr_17138 = state_17132;
(statearr_17138[(8)] = inst_17063__$1);

return statearr_17138;
})();
if(cljs.core.truth_(inst_17064)){
var statearr_17139_17189 = state_17132__$1;
(statearr_17139_17189[(1)] = (5));

} else {
var statearr_17140_17190 = state_17132__$1;
(statearr_17140_17190[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (15))){
var inst_17105 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17141_17191 = state_17132__$1;
(statearr_17141_17191[(2)] = inst_17105);

(statearr_17141_17191[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (21))){
var inst_17125 = (state_17132[(2)]);
var state_17132__$1 = (function (){var statearr_17142 = state_17132;
(statearr_17142[(9)] = inst_17125);

return statearr_17142;
})();
var statearr_17143_17192 = state_17132__$1;
(statearr_17143_17192[(2)] = null);

(statearr_17143_17192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (13))){
var inst_17087 = (state_17132[(10)]);
var inst_17089 = cljs.core.chunked_seq_QMARK_(inst_17087);
var state_17132__$1 = state_17132;
if(inst_17089){
var statearr_17144_17193 = state_17132__$1;
(statearr_17144_17193[(1)] = (16));

} else {
var statearr_17145_17194 = state_17132__$1;
(statearr_17145_17194[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (22))){
var inst_17117 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
if(cljs.core.truth_(inst_17117)){
var statearr_17146_17195 = state_17132__$1;
(statearr_17146_17195[(1)] = (23));

} else {
var statearr_17147_17196 = state_17132__$1;
(statearr_17147_17196[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (6))){
var inst_17111 = (state_17132[(7)]);
var inst_17063 = (state_17132[(8)]);
var inst_17113 = (state_17132[(11)]);
var inst_17111__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17063) : topic_fn.call(null,inst_17063));
var inst_17112 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17112,inst_17111__$1);
var state_17132__$1 = (function (){var statearr_17148 = state_17132;
(statearr_17148[(7)] = inst_17111__$1);

(statearr_17148[(11)] = inst_17113__$1);

return statearr_17148;
})();
if(cljs.core.truth_(inst_17113__$1)){
var statearr_17149_17197 = state_17132__$1;
(statearr_17149_17197[(1)] = (19));

} else {
var statearr_17150_17198 = state_17132__$1;
(statearr_17150_17198[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (25))){
var inst_17122 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17151_17199 = state_17132__$1;
(statearr_17151_17199[(2)] = inst_17122);

(statearr_17151_17199[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (17))){
var inst_17087 = (state_17132[(10)]);
var inst_17096 = cljs.core.first(inst_17087);
var inst_17097 = cljs.core.async.muxch_STAR_(inst_17096);
var inst_17098 = cljs.core.async.close_BANG_(inst_17097);
var inst_17099 = cljs.core.next(inst_17087);
var inst_17073 = inst_17099;
var inst_17074 = null;
var inst_17075 = (0);
var inst_17076 = (0);
var state_17132__$1 = (function (){var statearr_17152 = state_17132;
(statearr_17152[(12)] = inst_17098);

(statearr_17152[(13)] = inst_17074);

(statearr_17152[(14)] = inst_17075);

(statearr_17152[(15)] = inst_17073);

(statearr_17152[(16)] = inst_17076);

return statearr_17152;
})();
var statearr_17153_17200 = state_17132__$1;
(statearr_17153_17200[(2)] = null);

(statearr_17153_17200[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (3))){
var inst_17130 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17132__$1,inst_17130);
} else {
if((state_val_17133 === (12))){
var inst_17107 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17154_17201 = state_17132__$1;
(statearr_17154_17201[(2)] = inst_17107);

(statearr_17154_17201[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (2))){
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17132__$1,(4),ch);
} else {
if((state_val_17133 === (23))){
var state_17132__$1 = state_17132;
var statearr_17155_17202 = state_17132__$1;
(statearr_17155_17202[(2)] = null);

(statearr_17155_17202[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (19))){
var inst_17063 = (state_17132[(8)]);
var inst_17113 = (state_17132[(11)]);
var inst_17115 = cljs.core.async.muxch_STAR_(inst_17113);
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17132__$1,(22),inst_17115,inst_17063);
} else {
if((state_val_17133 === (11))){
var inst_17073 = (state_17132[(15)]);
var inst_17087 = (state_17132[(10)]);
var inst_17087__$1 = cljs.core.seq(inst_17073);
var state_17132__$1 = (function (){var statearr_17156 = state_17132;
(statearr_17156[(10)] = inst_17087__$1);

return statearr_17156;
})();
if(inst_17087__$1){
var statearr_17157_17203 = state_17132__$1;
(statearr_17157_17203[(1)] = (13));

} else {
var statearr_17158_17204 = state_17132__$1;
(statearr_17158_17204[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (9))){
var inst_17109 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17159_17205 = state_17132__$1;
(statearr_17159_17205[(2)] = inst_17109);

(statearr_17159_17205[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (5))){
var inst_17070 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17071 = cljs.core.vals(inst_17070);
var inst_17072 = cljs.core.seq(inst_17071);
var inst_17073 = inst_17072;
var inst_17074 = null;
var inst_17075 = (0);
var inst_17076 = (0);
var state_17132__$1 = (function (){var statearr_17160 = state_17132;
(statearr_17160[(13)] = inst_17074);

(statearr_17160[(14)] = inst_17075);

(statearr_17160[(15)] = inst_17073);

(statearr_17160[(16)] = inst_17076);

return statearr_17160;
})();
var statearr_17161_17206 = state_17132__$1;
(statearr_17161_17206[(2)] = null);

(statearr_17161_17206[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (14))){
var state_17132__$1 = state_17132;
var statearr_17165_17207 = state_17132__$1;
(statearr_17165_17207[(2)] = null);

(statearr_17165_17207[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (16))){
var inst_17087 = (state_17132[(10)]);
var inst_17091 = cljs.core.chunk_first(inst_17087);
var inst_17092 = cljs.core.chunk_rest(inst_17087);
var inst_17093 = cljs.core.count(inst_17091);
var inst_17073 = inst_17092;
var inst_17074 = inst_17091;
var inst_17075 = inst_17093;
var inst_17076 = (0);
var state_17132__$1 = (function (){var statearr_17166 = state_17132;
(statearr_17166[(13)] = inst_17074);

(statearr_17166[(14)] = inst_17075);

(statearr_17166[(15)] = inst_17073);

(statearr_17166[(16)] = inst_17076);

return statearr_17166;
})();
var statearr_17167_17208 = state_17132__$1;
(statearr_17167_17208[(2)] = null);

(statearr_17167_17208[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (10))){
var inst_17074 = (state_17132[(13)]);
var inst_17075 = (state_17132[(14)]);
var inst_17073 = (state_17132[(15)]);
var inst_17076 = (state_17132[(16)]);
var inst_17081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17074,inst_17076);
var inst_17082 = cljs.core.async.muxch_STAR_(inst_17081);
var inst_17083 = cljs.core.async.close_BANG_(inst_17082);
var inst_17084 = (inst_17076 + (1));
var tmp17162 = inst_17074;
var tmp17163 = inst_17075;
var tmp17164 = inst_17073;
var inst_17073__$1 = tmp17164;
var inst_17074__$1 = tmp17162;
var inst_17075__$1 = tmp17163;
var inst_17076__$1 = inst_17084;
var state_17132__$1 = (function (){var statearr_17168 = state_17132;
(statearr_17168[(13)] = inst_17074__$1);

(statearr_17168[(17)] = inst_17083);

(statearr_17168[(14)] = inst_17075__$1);

(statearr_17168[(15)] = inst_17073__$1);

(statearr_17168[(16)] = inst_17076__$1);

return statearr_17168;
})();
var statearr_17169_17209 = state_17132__$1;
(statearr_17169_17209[(2)] = null);

(statearr_17169_17209[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (18))){
var inst_17102 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17170_17210 = state_17132__$1;
(statearr_17170_17210[(2)] = inst_17102);

(statearr_17170_17210[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17133 === (8))){
var inst_17075 = (state_17132[(14)]);
var inst_17076 = (state_17132[(16)]);
var inst_17078 = (inst_17076 < inst_17075);
var inst_17079 = inst_17078;
var state_17132__$1 = state_17132;
if(cljs.core.truth_(inst_17079)){
var statearr_17171_17211 = state_17132__$1;
(statearr_17171_17211[(1)] = (10));

} else {
var statearr_17172_17212 = state_17132__$1;
(statearr_17172_17212[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___17184,mults,ensure_mult,p))
;
return ((function (switch__15185__auto__,c__15299__auto___17184,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17176[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17176[(1)] = (1));

return statearr_17176;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17132){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17132);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17177){if((e17177 instanceof Object)){
var ex__15189__auto__ = e17177;
var statearr_17178_17213 = state_17132;
(statearr_17178_17213[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17132);

return cljs.core.cst$kw$recur;
} else {
throw e17177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17214 = state_17132;
state_17132 = G__17214;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17184,mults,ensure_mult,p))
})();
var state__15301__auto__ = (function (){var statearr_17179 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17184);

return statearr_17179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17184,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args17215 = [];
var len__6226__auto___17218 = arguments.length;
var i__6227__auto___17219 = (0);
while(true){
if((i__6227__auto___17219 < len__6226__auto___17218)){
args17215.push((arguments[i__6227__auto___17219]));

var G__17220 = (i__6227__auto___17219 + (1));
i__6227__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var G__17217 = args17215.length;
switch (G__17217) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17215.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
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
var args17222 = [];
var len__6226__auto___17225 = arguments.length;
var i__6227__auto___17226 = (0);
while(true){
if((i__6227__auto___17226 < len__6226__auto___17225)){
args17222.push((arguments[i__6227__auto___17226]));

var G__17227 = (i__6227__auto___17226 + (1));
i__6227__auto___17226 = G__17227;
continue;
} else {
}
break;
}

var G__17224 = args17222.length;
switch (G__17224) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17222.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args17229 = [];
var len__6226__auto___17300 = arguments.length;
var i__6227__auto___17301 = (0);
while(true){
if((i__6227__auto___17301 < len__6226__auto___17300)){
args17229.push((arguments[i__6227__auto___17301]));

var G__17302 = (i__6227__auto___17301 + (1));
i__6227__auto___17301 = G__17302;
continue;
} else {
}
break;
}

var G__17231 = args17229.length;
switch (G__17231) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17229.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15299__auto___17304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (7))){
var state_17270__$1 = state_17270;
var statearr_17272_17305 = state_17270__$1;
(statearr_17272_17305[(2)] = null);

(statearr_17272_17305[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (1))){
var state_17270__$1 = state_17270;
var statearr_17273_17306 = state_17270__$1;
(statearr_17273_17306[(2)] = null);

(statearr_17273_17306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (4))){
var inst_17234 = (state_17270[(7)]);
var inst_17236 = (inst_17234 < cnt);
var state_17270__$1 = state_17270;
if(cljs.core.truth_(inst_17236)){
var statearr_17274_17307 = state_17270__$1;
(statearr_17274_17307[(1)] = (6));

} else {
var statearr_17275_17308 = state_17270__$1;
(statearr_17275_17308[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (15))){
var inst_17266 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17276_17309 = state_17270__$1;
(statearr_17276_17309[(2)] = inst_17266);

(statearr_17276_17309[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (13))){
var inst_17259 = cljs.core.async.close_BANG_(out);
var state_17270__$1 = state_17270;
var statearr_17277_17310 = state_17270__$1;
(statearr_17277_17310[(2)] = inst_17259);

(statearr_17277_17310[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (6))){
var state_17270__$1 = state_17270;
var statearr_17278_17311 = state_17270__$1;
(statearr_17278_17311[(2)] = null);

(statearr_17278_17311[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (3))){
var inst_17268 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17270__$1,inst_17268);
} else {
if((state_val_17271 === (12))){
var inst_17256 = (state_17270[(8)]);
var inst_17256__$1 = (state_17270[(2)]);
var inst_17257 = cljs.core.some(cljs.core.nil_QMARK_,inst_17256__$1);
var state_17270__$1 = (function (){var statearr_17279 = state_17270;
(statearr_17279[(8)] = inst_17256__$1);

return statearr_17279;
})();
if(cljs.core.truth_(inst_17257)){
var statearr_17280_17312 = state_17270__$1;
(statearr_17280_17312[(1)] = (13));

} else {
var statearr_17281_17313 = state_17270__$1;
(statearr_17281_17313[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (2))){
var inst_17233 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17234 = (0);
var state_17270__$1 = (function (){var statearr_17282 = state_17270;
(statearr_17282[(9)] = inst_17233);

(statearr_17282[(7)] = inst_17234);

return statearr_17282;
})();
var statearr_17283_17314 = state_17270__$1;
(statearr_17283_17314[(2)] = null);

(statearr_17283_17314[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (11))){
var inst_17234 = (state_17270[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17270,(10),Object,null,(9));
var inst_17243 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17234) : chs__$1.call(null,inst_17234));
var inst_17244 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17234) : done.call(null,inst_17234));
var inst_17245 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17243,inst_17244);
var state_17270__$1 = state_17270;
var statearr_17284_17315 = state_17270__$1;
(statearr_17284_17315[(2)] = inst_17245);


cljs.core.async.impl.ioc_helpers.process_exception(state_17270__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (9))){
var inst_17234 = (state_17270[(7)]);
var inst_17247 = (state_17270[(2)]);
var inst_17248 = (inst_17234 + (1));
var inst_17234__$1 = inst_17248;
var state_17270__$1 = (function (){var statearr_17285 = state_17270;
(statearr_17285[(10)] = inst_17247);

(statearr_17285[(7)] = inst_17234__$1);

return statearr_17285;
})();
var statearr_17286_17316 = state_17270__$1;
(statearr_17286_17316[(2)] = null);

(statearr_17286_17316[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (5))){
var inst_17254 = (state_17270[(2)]);
var state_17270__$1 = (function (){var statearr_17287 = state_17270;
(statearr_17287[(11)] = inst_17254);

return statearr_17287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17270__$1,(12),dchan);
} else {
if((state_val_17271 === (14))){
var inst_17256 = (state_17270[(8)]);
var inst_17261 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17256);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(16),out,inst_17261);
} else {
if((state_val_17271 === (16))){
var inst_17263 = (state_17270[(2)]);
var state_17270__$1 = (function (){var statearr_17288 = state_17270;
(statearr_17288[(12)] = inst_17263);

return statearr_17288;
})();
var statearr_17289_17317 = state_17270__$1;
(statearr_17289_17317[(2)] = null);

(statearr_17289_17317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (10))){
var inst_17238 = (state_17270[(2)]);
var inst_17239 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17270__$1 = (function (){var statearr_17290 = state_17270;
(statearr_17290[(13)] = inst_17238);

return statearr_17290;
})();
var statearr_17291_17318 = state_17270__$1;
(statearr_17291_17318[(2)] = inst_17239);


cljs.core.async.impl.ioc_helpers.process_exception(state_17270__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17271 === (8))){
var inst_17252 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17292_17319 = state_17270__$1;
(statearr_17292_17319[(2)] = inst_17252);

(statearr_17292_17319[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15185__auto__,c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17270){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17270);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17297){if((e17297 instanceof Object)){
var ex__15189__auto__ = e17297;
var statearr_17298_17320 = state_17270;
(statearr_17298_17320[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17270);

return cljs.core.cst$kw$recur;
} else {
throw e17297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17321 = state_17270;
state_17270 = G__17321;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15301__auto__ = (function (){var statearr_17299 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17304);

return statearr_17299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17304,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args17323 = [];
var len__6226__auto___17379 = arguments.length;
var i__6227__auto___17380 = (0);
while(true){
if((i__6227__auto___17380 < len__6226__auto___17379)){
args17323.push((arguments[i__6227__auto___17380]));

var G__17381 = (i__6227__auto___17380 + (1));
i__6227__auto___17380 = G__17381;
continue;
} else {
}
break;
}

var G__17325 = args17323.length;
switch (G__17325) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17323.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___17383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17383,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17383,out){
return (function (state_17355){
var state_val_17356 = (state_17355[(1)]);
if((state_val_17356 === (7))){
var inst_17335 = (state_17355[(7)]);
var inst_17334 = (state_17355[(8)]);
var inst_17334__$1 = (state_17355[(2)]);
var inst_17335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17334__$1,(0),null);
var inst_17336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17334__$1,(1),null);
var inst_17337 = (inst_17335__$1 == null);
var state_17355__$1 = (function (){var statearr_17357 = state_17355;
(statearr_17357[(7)] = inst_17335__$1);

(statearr_17357[(9)] = inst_17336);

(statearr_17357[(8)] = inst_17334__$1);

return statearr_17357;
})();
if(cljs.core.truth_(inst_17337)){
var statearr_17358_17384 = state_17355__$1;
(statearr_17358_17384[(1)] = (8));

} else {
var statearr_17359_17385 = state_17355__$1;
(statearr_17359_17385[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (1))){
var inst_17326 = cljs.core.vec(chs);
var inst_17327 = inst_17326;
var state_17355__$1 = (function (){var statearr_17360 = state_17355;
(statearr_17360[(10)] = inst_17327);

return statearr_17360;
})();
var statearr_17361_17386 = state_17355__$1;
(statearr_17361_17386[(2)] = null);

(statearr_17361_17386[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (4))){
var inst_17327 = (state_17355[(10)]);
var state_17355__$1 = state_17355;
return cljs.core.async.ioc_alts_BANG_(state_17355__$1,(7),inst_17327);
} else {
if((state_val_17356 === (6))){
var inst_17351 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
var statearr_17362_17387 = state_17355__$1;
(statearr_17362_17387[(2)] = inst_17351);

(statearr_17362_17387[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (3))){
var inst_17353 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17355__$1,inst_17353);
} else {
if((state_val_17356 === (2))){
var inst_17327 = (state_17355[(10)]);
var inst_17329 = cljs.core.count(inst_17327);
var inst_17330 = (inst_17329 > (0));
var state_17355__$1 = state_17355;
if(cljs.core.truth_(inst_17330)){
var statearr_17364_17388 = state_17355__$1;
(statearr_17364_17388[(1)] = (4));

} else {
var statearr_17365_17389 = state_17355__$1;
(statearr_17365_17389[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (11))){
var inst_17327 = (state_17355[(10)]);
var inst_17344 = (state_17355[(2)]);
var tmp17363 = inst_17327;
var inst_17327__$1 = tmp17363;
var state_17355__$1 = (function (){var statearr_17366 = state_17355;
(statearr_17366[(10)] = inst_17327__$1);

(statearr_17366[(11)] = inst_17344);

return statearr_17366;
})();
var statearr_17367_17390 = state_17355__$1;
(statearr_17367_17390[(2)] = null);

(statearr_17367_17390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (9))){
var inst_17335 = (state_17355[(7)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17355__$1,(11),out,inst_17335);
} else {
if((state_val_17356 === (5))){
var inst_17349 = cljs.core.async.close_BANG_(out);
var state_17355__$1 = state_17355;
var statearr_17368_17391 = state_17355__$1;
(statearr_17368_17391[(2)] = inst_17349);

(statearr_17368_17391[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (10))){
var inst_17347 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
var statearr_17369_17392 = state_17355__$1;
(statearr_17369_17392[(2)] = inst_17347);

(statearr_17369_17392[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17356 === (8))){
var inst_17335 = (state_17355[(7)]);
var inst_17336 = (state_17355[(9)]);
var inst_17327 = (state_17355[(10)]);
var inst_17334 = (state_17355[(8)]);
var inst_17339 = (function (){var cs = inst_17327;
var vec__17332 = inst_17334;
var v = inst_17335;
var c = inst_17336;
return ((function (cs,vec__17332,v,c,inst_17335,inst_17336,inst_17327,inst_17334,state_val_17356,c__15299__auto___17383,out){
return (function (p1__17322_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17322_SHARP_);
});
;})(cs,vec__17332,v,c,inst_17335,inst_17336,inst_17327,inst_17334,state_val_17356,c__15299__auto___17383,out))
})();
var inst_17340 = cljs.core.filterv(inst_17339,inst_17327);
var inst_17327__$1 = inst_17340;
var state_17355__$1 = (function (){var statearr_17370 = state_17355;
(statearr_17370[(10)] = inst_17327__$1);

return statearr_17370;
})();
var statearr_17371_17393 = state_17355__$1;
(statearr_17371_17393[(2)] = null);

(statearr_17371_17393[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___17383,out))
;
return ((function (switch__15185__auto__,c__15299__auto___17383,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17375[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17375[(1)] = (1));

return statearr_17375;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17355){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17355);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17376){if((e17376 instanceof Object)){
var ex__15189__auto__ = e17376;
var statearr_17377_17394 = state_17355;
(statearr_17377_17394[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17355);

return cljs.core.cst$kw$recur;
} else {
throw e17376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17395 = state_17355;
state_17355 = G__17395;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17383,out))
})();
var state__15301__auto__ = (function (){var statearr_17378 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17383);

return statearr_17378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17383,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
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
var args17396 = [];
var len__6226__auto___17445 = arguments.length;
var i__6227__auto___17446 = (0);
while(true){
if((i__6227__auto___17446 < len__6226__auto___17445)){
args17396.push((arguments[i__6227__auto___17446]));

var G__17447 = (i__6227__auto___17446 + (1));
i__6227__auto___17446 = G__17447;
continue;
} else {
}
break;
}

var G__17398 = args17396.length;
switch (G__17398) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17396.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___17449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17449,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17449,out){
return (function (state_17422){
var state_val_17423 = (state_17422[(1)]);
if((state_val_17423 === (7))){
var inst_17404 = (state_17422[(7)]);
var inst_17404__$1 = (state_17422[(2)]);
var inst_17405 = (inst_17404__$1 == null);
var inst_17406 = cljs.core.not(inst_17405);
var state_17422__$1 = (function (){var statearr_17424 = state_17422;
(statearr_17424[(7)] = inst_17404__$1);

return statearr_17424;
})();
if(inst_17406){
var statearr_17425_17450 = state_17422__$1;
(statearr_17425_17450[(1)] = (8));

} else {
var statearr_17426_17451 = state_17422__$1;
(statearr_17426_17451[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (1))){
var inst_17399 = (0);
var state_17422__$1 = (function (){var statearr_17427 = state_17422;
(statearr_17427[(8)] = inst_17399);

return statearr_17427;
})();
var statearr_17428_17452 = state_17422__$1;
(statearr_17428_17452[(2)] = null);

(statearr_17428_17452[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (4))){
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17422__$1,(7),ch);
} else {
if((state_val_17423 === (6))){
var inst_17417 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17429_17453 = state_17422__$1;
(statearr_17429_17453[(2)] = inst_17417);

(statearr_17429_17453[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (3))){
var inst_17419 = (state_17422[(2)]);
var inst_17420 = cljs.core.async.close_BANG_(out);
var state_17422__$1 = (function (){var statearr_17430 = state_17422;
(statearr_17430[(9)] = inst_17419);

return statearr_17430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17422__$1,inst_17420);
} else {
if((state_val_17423 === (2))){
var inst_17399 = (state_17422[(8)]);
var inst_17401 = (inst_17399 < n);
var state_17422__$1 = state_17422;
if(cljs.core.truth_(inst_17401)){
var statearr_17431_17454 = state_17422__$1;
(statearr_17431_17454[(1)] = (4));

} else {
var statearr_17432_17455 = state_17422__$1;
(statearr_17432_17455[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (11))){
var inst_17399 = (state_17422[(8)]);
var inst_17409 = (state_17422[(2)]);
var inst_17410 = (inst_17399 + (1));
var inst_17399__$1 = inst_17410;
var state_17422__$1 = (function (){var statearr_17433 = state_17422;
(statearr_17433[(10)] = inst_17409);

(statearr_17433[(8)] = inst_17399__$1);

return statearr_17433;
})();
var statearr_17434_17456 = state_17422__$1;
(statearr_17434_17456[(2)] = null);

(statearr_17434_17456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (9))){
var state_17422__$1 = state_17422;
var statearr_17435_17457 = state_17422__$1;
(statearr_17435_17457[(2)] = null);

(statearr_17435_17457[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (5))){
var state_17422__$1 = state_17422;
var statearr_17436_17458 = state_17422__$1;
(statearr_17436_17458[(2)] = null);

(statearr_17436_17458[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (10))){
var inst_17414 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17437_17459 = state_17422__$1;
(statearr_17437_17459[(2)] = inst_17414);

(statearr_17437_17459[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17423 === (8))){
var inst_17404 = (state_17422[(7)]);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17422__$1,(11),out,inst_17404);
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
});})(c__15299__auto___17449,out))
;
return ((function (switch__15185__auto__,c__15299__auto___17449,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17441[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17441[(1)] = (1));

return statearr_17441;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17422){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17422);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17442){if((e17442 instanceof Object)){
var ex__15189__auto__ = e17442;
var statearr_17443_17460 = state_17422;
(statearr_17443_17460[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17422);

return cljs.core.cst$kw$recur;
} else {
throw e17442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17461 = state_17422;
state_17422 = G__17461;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17449,out))
})();
var state__15301__auto__ = (function (){var statearr_17444 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17449);

return statearr_17444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17449,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17471 = (function (map_LT_,f,ch,meta17472){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17472 = meta17472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17473,meta17472__$1){
var self__ = this;
var _17473__$1 = this;
return (new cljs.core.async.t_cljs$core$async17471(self__.map_LT_,self__.f,self__.ch,meta17472__$1));
});

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17473){
var self__ = this;
var _17473__$1 = this;
return self__.meta17472;
});

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17474 = (function (map_LT_,f,ch,meta17472,_,fn1,meta17475){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17472 = meta17472;
this._ = _;
this.fn1 = fn1;
this.meta17475 = meta17475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17476,meta17475__$1){
var self__ = this;
var _17476__$1 = this;
return (new cljs.core.async.t_cljs$core$async17474(self__.map_LT_,self__.f,self__.ch,self__.meta17472,self__._,self__.fn1,meta17475__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17476){
var self__ = this;
var _17476__$1 = this;
return self__.meta17475;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17462_SHARP_){
var G__17477 = (((p1__17462_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17462_SHARP_) : self__.f.call(null,p1__17462_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17477) : f1.call(null,G__17477));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17474.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17472,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17471], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17475], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17474";

cljs.core.async.t_cljs$core$async17474.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17474");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17474 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17474(map_LT___$1,f__$1,ch__$1,meta17472__$1,___$2,fn1__$1,meta17475){
return (new cljs.core.async.t_cljs$core$async17474(map_LT___$1,f__$1,ch__$1,meta17472__$1,___$2,fn1__$1,meta17475));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17474(self__.map_LT_,self__.f,self__.ch,self__.meta17472,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17478 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17478) : self__.f.call(null,G__17478));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17472], null);
});

cljs.core.async.t_cljs$core$async17471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17471";

cljs.core.async.t_cljs$core$async17471.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17471");
});

cljs.core.async.__GT_t_cljs$core$async17471 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17471(map_LT___$1,f__$1,ch__$1,meta17472){
return (new cljs.core.async.t_cljs$core$async17471(map_LT___$1,f__$1,ch__$1,meta17472));
});

}

return (new cljs.core.async.t_cljs$core$async17471(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17482 = (function (map_GT_,f,ch,meta17483){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17483 = meta17483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17484,meta17483__$1){
var self__ = this;
var _17484__$1 = this;
return (new cljs.core.async.t_cljs$core$async17482(self__.map_GT_,self__.f,self__.ch,meta17483__$1));
});

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17484){
var self__ = this;
var _17484__$1 = this;
return self__.meta17483;
});

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17483], null);
});

cljs.core.async.t_cljs$core$async17482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17482";

cljs.core.async.t_cljs$core$async17482.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17482");
});

cljs.core.async.__GT_t_cljs$core$async17482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17482(map_GT___$1,f__$1,ch__$1,meta17483){
return (new cljs.core.async.t_cljs$core$async17482(map_GT___$1,f__$1,ch__$1,meta17483));
});

}

return (new cljs.core.async.t_cljs$core$async17482(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17488 = (function (filter_GT_,p,ch,meta17489){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17489 = meta17489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17490,meta17489__$1){
var self__ = this;
var _17490__$1 = this;
return (new cljs.core.async.t_cljs$core$async17488(self__.filter_GT_,self__.p,self__.ch,meta17489__$1));
});

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17490){
var self__ = this;
var _17490__$1 = this;
return self__.meta17489;
});

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17489], null);
});

cljs.core.async.t_cljs$core$async17488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17488";

cljs.core.async.t_cljs$core$async17488.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17488");
});

cljs.core.async.__GT_t_cljs$core$async17488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17488(filter_GT___$1,p__$1,ch__$1,meta17489){
return (new cljs.core.async.t_cljs$core$async17488(filter_GT___$1,p__$1,ch__$1,meta17489));
});

}

return (new cljs.core.async.t_cljs$core$async17488(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17491 = [];
var len__6226__auto___17535 = arguments.length;
var i__6227__auto___17536 = (0);
while(true){
if((i__6227__auto___17536 < len__6226__auto___17535)){
args17491.push((arguments[i__6227__auto___17536]));

var G__17537 = (i__6227__auto___17536 + (1));
i__6227__auto___17536 = G__17537;
continue;
} else {
}
break;
}

var G__17493 = args17491.length;
switch (G__17493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17491.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___17539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17539,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17539,out){
return (function (state_17514){
var state_val_17515 = (state_17514[(1)]);
if((state_val_17515 === (7))){
var inst_17510 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
var statearr_17516_17540 = state_17514__$1;
(statearr_17516_17540[(2)] = inst_17510);

(statearr_17516_17540[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (1))){
var state_17514__$1 = state_17514;
var statearr_17517_17541 = state_17514__$1;
(statearr_17517_17541[(2)] = null);

(statearr_17517_17541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (4))){
var inst_17496 = (state_17514[(7)]);
var inst_17496__$1 = (state_17514[(2)]);
var inst_17497 = (inst_17496__$1 == null);
var state_17514__$1 = (function (){var statearr_17518 = state_17514;
(statearr_17518[(7)] = inst_17496__$1);

return statearr_17518;
})();
if(cljs.core.truth_(inst_17497)){
var statearr_17519_17542 = state_17514__$1;
(statearr_17519_17542[(1)] = (5));

} else {
var statearr_17520_17543 = state_17514__$1;
(statearr_17520_17543[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (6))){
var inst_17496 = (state_17514[(7)]);
var inst_17501 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17496) : p.call(null,inst_17496));
var state_17514__$1 = state_17514;
if(cljs.core.truth_(inst_17501)){
var statearr_17521_17544 = state_17514__$1;
(statearr_17521_17544[(1)] = (8));

} else {
var statearr_17522_17545 = state_17514__$1;
(statearr_17522_17545[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (3))){
var inst_17512 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17514__$1,inst_17512);
} else {
if((state_val_17515 === (2))){
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17514__$1,(4),ch);
} else {
if((state_val_17515 === (11))){
var inst_17504 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
var statearr_17523_17546 = state_17514__$1;
(statearr_17523_17546[(2)] = inst_17504);

(statearr_17523_17546[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (9))){
var state_17514__$1 = state_17514;
var statearr_17524_17547 = state_17514__$1;
(statearr_17524_17547[(2)] = null);

(statearr_17524_17547[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (5))){
var inst_17499 = cljs.core.async.close_BANG_(out);
var state_17514__$1 = state_17514;
var statearr_17525_17548 = state_17514__$1;
(statearr_17525_17548[(2)] = inst_17499);

(statearr_17525_17548[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (10))){
var inst_17507 = (state_17514[(2)]);
var state_17514__$1 = (function (){var statearr_17526 = state_17514;
(statearr_17526[(8)] = inst_17507);

return statearr_17526;
})();
var statearr_17527_17549 = state_17514__$1;
(statearr_17527_17549[(2)] = null);

(statearr_17527_17549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17515 === (8))){
var inst_17496 = (state_17514[(7)]);
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17514__$1,(11),out,inst_17496);
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
});})(c__15299__auto___17539,out))
;
return ((function (switch__15185__auto__,c__15299__auto___17539,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17531 = [null,null,null,null,null,null,null,null,null];
(statearr_17531[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17531[(1)] = (1));

return statearr_17531;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17514){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17514);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17532){if((e17532 instanceof Object)){
var ex__15189__auto__ = e17532;
var statearr_17533_17550 = state_17514;
(statearr_17533_17550[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17514);

return cljs.core.cst$kw$recur;
} else {
throw e17532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17551 = state_17514;
state_17514 = G__17551;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17539,out))
})();
var state__15301__auto__ = (function (){var statearr_17534 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17539);

return statearr_17534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17539,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17552 = [];
var len__6226__auto___17555 = arguments.length;
var i__6227__auto___17556 = (0);
while(true){
if((i__6227__auto___17556 < len__6226__auto___17555)){
args17552.push((arguments[i__6227__auto___17556]));

var G__17557 = (i__6227__auto___17556 + (1));
i__6227__auto___17556 = G__17557;
continue;
} else {
}
break;
}

var G__17554 = args17552.length;
switch (G__17554) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17552.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__){
return (function (state_17724){
var state_val_17725 = (state_17724[(1)]);
if((state_val_17725 === (7))){
var inst_17720 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17726_17767 = state_17724__$1;
(statearr_17726_17767[(2)] = inst_17720);

(statearr_17726_17767[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (20))){
var inst_17690 = (state_17724[(7)]);
var inst_17701 = (state_17724[(2)]);
var inst_17702 = cljs.core.next(inst_17690);
var inst_17676 = inst_17702;
var inst_17677 = null;
var inst_17678 = (0);
var inst_17679 = (0);
var state_17724__$1 = (function (){var statearr_17727 = state_17724;
(statearr_17727[(8)] = inst_17678);

(statearr_17727[(9)] = inst_17676);

(statearr_17727[(10)] = inst_17677);

(statearr_17727[(11)] = inst_17701);

(statearr_17727[(12)] = inst_17679);

return statearr_17727;
})();
var statearr_17728_17768 = state_17724__$1;
(statearr_17728_17768[(2)] = null);

(statearr_17728_17768[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (1))){
var state_17724__$1 = state_17724;
var statearr_17729_17769 = state_17724__$1;
(statearr_17729_17769[(2)] = null);

(statearr_17729_17769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (4))){
var inst_17665 = (state_17724[(13)]);
var inst_17665__$1 = (state_17724[(2)]);
var inst_17666 = (inst_17665__$1 == null);
var state_17724__$1 = (function (){var statearr_17730 = state_17724;
(statearr_17730[(13)] = inst_17665__$1);

return statearr_17730;
})();
if(cljs.core.truth_(inst_17666)){
var statearr_17731_17770 = state_17724__$1;
(statearr_17731_17770[(1)] = (5));

} else {
var statearr_17732_17771 = state_17724__$1;
(statearr_17732_17771[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (15))){
var state_17724__$1 = state_17724;
var statearr_17736_17772 = state_17724__$1;
(statearr_17736_17772[(2)] = null);

(statearr_17736_17772[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (21))){
var state_17724__$1 = state_17724;
var statearr_17737_17773 = state_17724__$1;
(statearr_17737_17773[(2)] = null);

(statearr_17737_17773[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (13))){
var inst_17678 = (state_17724[(8)]);
var inst_17676 = (state_17724[(9)]);
var inst_17677 = (state_17724[(10)]);
var inst_17679 = (state_17724[(12)]);
var inst_17686 = (state_17724[(2)]);
var inst_17687 = (inst_17679 + (1));
var tmp17733 = inst_17678;
var tmp17734 = inst_17676;
var tmp17735 = inst_17677;
var inst_17676__$1 = tmp17734;
var inst_17677__$1 = tmp17735;
var inst_17678__$1 = tmp17733;
var inst_17679__$1 = inst_17687;
var state_17724__$1 = (function (){var statearr_17738 = state_17724;
(statearr_17738[(8)] = inst_17678__$1);

(statearr_17738[(9)] = inst_17676__$1);

(statearr_17738[(10)] = inst_17677__$1);

(statearr_17738[(14)] = inst_17686);

(statearr_17738[(12)] = inst_17679__$1);

return statearr_17738;
})();
var statearr_17739_17774 = state_17724__$1;
(statearr_17739_17774[(2)] = null);

(statearr_17739_17774[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (22))){
var state_17724__$1 = state_17724;
var statearr_17740_17775 = state_17724__$1;
(statearr_17740_17775[(2)] = null);

(statearr_17740_17775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (6))){
var inst_17665 = (state_17724[(13)]);
var inst_17674 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17665) : f.call(null,inst_17665));
var inst_17675 = cljs.core.seq(inst_17674);
var inst_17676 = inst_17675;
var inst_17677 = null;
var inst_17678 = (0);
var inst_17679 = (0);
var state_17724__$1 = (function (){var statearr_17741 = state_17724;
(statearr_17741[(8)] = inst_17678);

(statearr_17741[(9)] = inst_17676);

(statearr_17741[(10)] = inst_17677);

(statearr_17741[(12)] = inst_17679);

return statearr_17741;
})();
var statearr_17742_17776 = state_17724__$1;
(statearr_17742_17776[(2)] = null);

(statearr_17742_17776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (17))){
var inst_17690 = (state_17724[(7)]);
var inst_17694 = cljs.core.chunk_first(inst_17690);
var inst_17695 = cljs.core.chunk_rest(inst_17690);
var inst_17696 = cljs.core.count(inst_17694);
var inst_17676 = inst_17695;
var inst_17677 = inst_17694;
var inst_17678 = inst_17696;
var inst_17679 = (0);
var state_17724__$1 = (function (){var statearr_17743 = state_17724;
(statearr_17743[(8)] = inst_17678);

(statearr_17743[(9)] = inst_17676);

(statearr_17743[(10)] = inst_17677);

(statearr_17743[(12)] = inst_17679);

return statearr_17743;
})();
var statearr_17744_17777 = state_17724__$1;
(statearr_17744_17777[(2)] = null);

(statearr_17744_17777[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (3))){
var inst_17722 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17724__$1,inst_17722);
} else {
if((state_val_17725 === (12))){
var inst_17710 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17745_17778 = state_17724__$1;
(statearr_17745_17778[(2)] = inst_17710);

(statearr_17745_17778[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (2))){
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17724__$1,(4),in$);
} else {
if((state_val_17725 === (23))){
var inst_17718 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17746_17779 = state_17724__$1;
(statearr_17746_17779[(2)] = inst_17718);

(statearr_17746_17779[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (19))){
var inst_17705 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17747_17780 = state_17724__$1;
(statearr_17747_17780[(2)] = inst_17705);

(statearr_17747_17780[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (11))){
var inst_17690 = (state_17724[(7)]);
var inst_17676 = (state_17724[(9)]);
var inst_17690__$1 = cljs.core.seq(inst_17676);
var state_17724__$1 = (function (){var statearr_17748 = state_17724;
(statearr_17748[(7)] = inst_17690__$1);

return statearr_17748;
})();
if(inst_17690__$1){
var statearr_17749_17781 = state_17724__$1;
(statearr_17749_17781[(1)] = (14));

} else {
var statearr_17750_17782 = state_17724__$1;
(statearr_17750_17782[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (9))){
var inst_17712 = (state_17724[(2)]);
var inst_17713 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17724__$1 = (function (){var statearr_17751 = state_17724;
(statearr_17751[(15)] = inst_17712);

return statearr_17751;
})();
if(cljs.core.truth_(inst_17713)){
var statearr_17752_17783 = state_17724__$1;
(statearr_17752_17783[(1)] = (21));

} else {
var statearr_17753_17784 = state_17724__$1;
(statearr_17753_17784[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (5))){
var inst_17668 = cljs.core.async.close_BANG_(out);
var state_17724__$1 = state_17724;
var statearr_17754_17785 = state_17724__$1;
(statearr_17754_17785[(2)] = inst_17668);

(statearr_17754_17785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (14))){
var inst_17690 = (state_17724[(7)]);
var inst_17692 = cljs.core.chunked_seq_QMARK_(inst_17690);
var state_17724__$1 = state_17724;
if(inst_17692){
var statearr_17755_17786 = state_17724__$1;
(statearr_17755_17786[(1)] = (17));

} else {
var statearr_17756_17787 = state_17724__$1;
(statearr_17756_17787[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (16))){
var inst_17708 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17757_17788 = state_17724__$1;
(statearr_17757_17788[(2)] = inst_17708);

(statearr_17757_17788[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (10))){
var inst_17677 = (state_17724[(10)]);
var inst_17679 = (state_17724[(12)]);
var inst_17684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17677,inst_17679);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17724__$1,(13),out,inst_17684);
} else {
if((state_val_17725 === (18))){
var inst_17690 = (state_17724[(7)]);
var inst_17699 = cljs.core.first(inst_17690);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17724__$1,(20),out,inst_17699);
} else {
if((state_val_17725 === (8))){
var inst_17678 = (state_17724[(8)]);
var inst_17679 = (state_17724[(12)]);
var inst_17681 = (inst_17679 < inst_17678);
var inst_17682 = inst_17681;
var state_17724__$1 = state_17724;
if(cljs.core.truth_(inst_17682)){
var statearr_17758_17789 = state_17724__$1;
(statearr_17758_17789[(1)] = (10));

} else {
var statearr_17759_17790 = state_17724__$1;
(statearr_17759_17790[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15299__auto__))
;
return ((function (switch__15185__auto__,c__15299__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____0 = (function (){
var statearr_17763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17763[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__);

(statearr_17763[(1)] = (1));

return statearr_17763;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____1 = (function (state_17724){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17724);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17764){if((e17764 instanceof Object)){
var ex__15189__auto__ = e17764;
var statearr_17765_17791 = state_17724;
(statearr_17765_17791[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17724);

return cljs.core.cst$kw$recur;
} else {
throw e17764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17792 = state_17724;
state_17724 = G__17792;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__ = function(state_17724){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____1.call(this,state_17724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15186__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__))
})();
var state__15301__auto__ = (function (){var statearr_17766 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_17766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__))
);

return c__15299__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17793 = [];
var len__6226__auto___17796 = arguments.length;
var i__6227__auto___17797 = (0);
while(true){
if((i__6227__auto___17797 < len__6226__auto___17796)){
args17793.push((arguments[i__6227__auto___17797]));

var G__17798 = (i__6227__auto___17797 + (1));
i__6227__auto___17797 = G__17798;
continue;
} else {
}
break;
}

var G__17795 = args17793.length;
switch (G__17795) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17793.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17800 = [];
var len__6226__auto___17803 = arguments.length;
var i__6227__auto___17804 = (0);
while(true){
if((i__6227__auto___17804 < len__6226__auto___17803)){
args17800.push((arguments[i__6227__auto___17804]));

var G__17805 = (i__6227__auto___17804 + (1));
i__6227__auto___17804 = G__17805;
continue;
} else {
}
break;
}

var G__17802 = args17800.length;
switch (G__17802) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17800.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17807 = [];
var len__6226__auto___17858 = arguments.length;
var i__6227__auto___17859 = (0);
while(true){
if((i__6227__auto___17859 < len__6226__auto___17858)){
args17807.push((arguments[i__6227__auto___17859]));

var G__17860 = (i__6227__auto___17859 + (1));
i__6227__auto___17859 = G__17860;
continue;
} else {
}
break;
}

var G__17809 = args17807.length;
switch (G__17809) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17807.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17862,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17862,out){
return (function (state_17833){
var state_val_17834 = (state_17833[(1)]);
if((state_val_17834 === (7))){
var inst_17828 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17835_17863 = state_17833__$1;
(statearr_17835_17863[(2)] = inst_17828);

(statearr_17835_17863[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (1))){
var inst_17810 = null;
var state_17833__$1 = (function (){var statearr_17836 = state_17833;
(statearr_17836[(7)] = inst_17810);

return statearr_17836;
})();
var statearr_17837_17864 = state_17833__$1;
(statearr_17837_17864[(2)] = null);

(statearr_17837_17864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (4))){
var inst_17813 = (state_17833[(8)]);
var inst_17813__$1 = (state_17833[(2)]);
var inst_17814 = (inst_17813__$1 == null);
var inst_17815 = cljs.core.not(inst_17814);
var state_17833__$1 = (function (){var statearr_17838 = state_17833;
(statearr_17838[(8)] = inst_17813__$1);

return statearr_17838;
})();
if(inst_17815){
var statearr_17839_17865 = state_17833__$1;
(statearr_17839_17865[(1)] = (5));

} else {
var statearr_17840_17866 = state_17833__$1;
(statearr_17840_17866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (6))){
var state_17833__$1 = state_17833;
var statearr_17841_17867 = state_17833__$1;
(statearr_17841_17867[(2)] = null);

(statearr_17841_17867[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (3))){
var inst_17830 = (state_17833[(2)]);
var inst_17831 = cljs.core.async.close_BANG_(out);
var state_17833__$1 = (function (){var statearr_17842 = state_17833;
(statearr_17842[(9)] = inst_17830);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17833__$1,inst_17831);
} else {
if((state_val_17834 === (2))){
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17833__$1,(4),ch);
} else {
if((state_val_17834 === (11))){
var inst_17813 = (state_17833[(8)]);
var inst_17822 = (state_17833[(2)]);
var inst_17810 = inst_17813;
var state_17833__$1 = (function (){var statearr_17843 = state_17833;
(statearr_17843[(10)] = inst_17822);

(statearr_17843[(7)] = inst_17810);

return statearr_17843;
})();
var statearr_17844_17868 = state_17833__$1;
(statearr_17844_17868[(2)] = null);

(statearr_17844_17868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (9))){
var inst_17813 = (state_17833[(8)]);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17833__$1,(11),out,inst_17813);
} else {
if((state_val_17834 === (5))){
var inst_17813 = (state_17833[(8)]);
var inst_17810 = (state_17833[(7)]);
var inst_17817 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17813,inst_17810);
var state_17833__$1 = state_17833;
if(inst_17817){
var statearr_17846_17869 = state_17833__$1;
(statearr_17846_17869[(1)] = (8));

} else {
var statearr_17847_17870 = state_17833__$1;
(statearr_17847_17870[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (10))){
var inst_17825 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17848_17871 = state_17833__$1;
(statearr_17848_17871[(2)] = inst_17825);

(statearr_17848_17871[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17834 === (8))){
var inst_17810 = (state_17833[(7)]);
var tmp17845 = inst_17810;
var inst_17810__$1 = tmp17845;
var state_17833__$1 = (function (){var statearr_17849 = state_17833;
(statearr_17849[(7)] = inst_17810__$1);

return statearr_17849;
})();
var statearr_17850_17872 = state_17833__$1;
(statearr_17850_17872[(2)] = null);

(statearr_17850_17872[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___17862,out))
;
return ((function (switch__15185__auto__,c__15299__auto___17862,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17854[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17854[(1)] = (1));

return statearr_17854;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17833){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17833);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17855){if((e17855 instanceof Object)){
var ex__15189__auto__ = e17855;
var statearr_17856_17873 = state_17833;
(statearr_17856_17873[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17833);

return cljs.core.cst$kw$recur;
} else {
throw e17855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17874 = state_17833;
state_17833 = G__17874;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17862,out))
})();
var state__15301__auto__ = (function (){var statearr_17857 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17862);

return statearr_17857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17862,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17875 = [];
var len__6226__auto___17945 = arguments.length;
var i__6227__auto___17946 = (0);
while(true){
if((i__6227__auto___17946 < len__6226__auto___17945)){
args17875.push((arguments[i__6227__auto___17946]));

var G__17947 = (i__6227__auto___17946 + (1));
i__6227__auto___17946 = G__17947;
continue;
} else {
}
break;
}

var G__17877 = args17875.length;
switch (G__17877) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17875.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___17949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___17949,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___17949,out){
return (function (state_17915){
var state_val_17916 = (state_17915[(1)]);
if((state_val_17916 === (7))){
var inst_17911 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17917_17950 = state_17915__$1;
(statearr_17917_17950[(2)] = inst_17911);

(statearr_17917_17950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (1))){
var inst_17878 = (new Array(n));
var inst_17879 = inst_17878;
var inst_17880 = (0);
var state_17915__$1 = (function (){var statearr_17918 = state_17915;
(statearr_17918[(7)] = inst_17879);

(statearr_17918[(8)] = inst_17880);

return statearr_17918;
})();
var statearr_17919_17951 = state_17915__$1;
(statearr_17919_17951[(2)] = null);

(statearr_17919_17951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (4))){
var inst_17883 = (state_17915[(9)]);
var inst_17883__$1 = (state_17915[(2)]);
var inst_17884 = (inst_17883__$1 == null);
var inst_17885 = cljs.core.not(inst_17884);
var state_17915__$1 = (function (){var statearr_17920 = state_17915;
(statearr_17920[(9)] = inst_17883__$1);

return statearr_17920;
})();
if(inst_17885){
var statearr_17921_17952 = state_17915__$1;
(statearr_17921_17952[(1)] = (5));

} else {
var statearr_17922_17953 = state_17915__$1;
(statearr_17922_17953[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (15))){
var inst_17905 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17923_17954 = state_17915__$1;
(statearr_17923_17954[(2)] = inst_17905);

(statearr_17923_17954[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (13))){
var state_17915__$1 = state_17915;
var statearr_17924_17955 = state_17915__$1;
(statearr_17924_17955[(2)] = null);

(statearr_17924_17955[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (6))){
var inst_17880 = (state_17915[(8)]);
var inst_17901 = (inst_17880 > (0));
var state_17915__$1 = state_17915;
if(cljs.core.truth_(inst_17901)){
var statearr_17925_17956 = state_17915__$1;
(statearr_17925_17956[(1)] = (12));

} else {
var statearr_17926_17957 = state_17915__$1;
(statearr_17926_17957[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (3))){
var inst_17913 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17915__$1,inst_17913);
} else {
if((state_val_17916 === (12))){
var inst_17879 = (state_17915[(7)]);
var inst_17903 = cljs.core.vec(inst_17879);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17915__$1,(15),out,inst_17903);
} else {
if((state_val_17916 === (2))){
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17915__$1,(4),ch);
} else {
if((state_val_17916 === (11))){
var inst_17895 = (state_17915[(2)]);
var inst_17896 = (new Array(n));
var inst_17879 = inst_17896;
var inst_17880 = (0);
var state_17915__$1 = (function (){var statearr_17927 = state_17915;
(statearr_17927[(7)] = inst_17879);

(statearr_17927[(10)] = inst_17895);

(statearr_17927[(8)] = inst_17880);

return statearr_17927;
})();
var statearr_17928_17958 = state_17915__$1;
(statearr_17928_17958[(2)] = null);

(statearr_17928_17958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (9))){
var inst_17879 = (state_17915[(7)]);
var inst_17893 = cljs.core.vec(inst_17879);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17915__$1,(11),out,inst_17893);
} else {
if((state_val_17916 === (5))){
var inst_17879 = (state_17915[(7)]);
var inst_17880 = (state_17915[(8)]);
var inst_17888 = (state_17915[(11)]);
var inst_17883 = (state_17915[(9)]);
var inst_17887 = (inst_17879[inst_17880] = inst_17883);
var inst_17888__$1 = (inst_17880 + (1));
var inst_17889 = (inst_17888__$1 < n);
var state_17915__$1 = (function (){var statearr_17929 = state_17915;
(statearr_17929[(11)] = inst_17888__$1);

(statearr_17929[(12)] = inst_17887);

return statearr_17929;
})();
if(cljs.core.truth_(inst_17889)){
var statearr_17930_17959 = state_17915__$1;
(statearr_17930_17959[(1)] = (8));

} else {
var statearr_17931_17960 = state_17915__$1;
(statearr_17931_17960[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (14))){
var inst_17908 = (state_17915[(2)]);
var inst_17909 = cljs.core.async.close_BANG_(out);
var state_17915__$1 = (function (){var statearr_17933 = state_17915;
(statearr_17933[(13)] = inst_17908);

return statearr_17933;
})();
var statearr_17934_17961 = state_17915__$1;
(statearr_17934_17961[(2)] = inst_17909);

(statearr_17934_17961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (10))){
var inst_17899 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17935_17962 = state_17915__$1;
(statearr_17935_17962[(2)] = inst_17899);

(statearr_17935_17962[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17916 === (8))){
var inst_17879 = (state_17915[(7)]);
var inst_17888 = (state_17915[(11)]);
var tmp17932 = inst_17879;
var inst_17879__$1 = tmp17932;
var inst_17880 = inst_17888;
var state_17915__$1 = (function (){var statearr_17936 = state_17915;
(statearr_17936[(7)] = inst_17879__$1);

(statearr_17936[(8)] = inst_17880);

return statearr_17936;
})();
var statearr_17937_17963 = state_17915__$1;
(statearr_17937_17963[(2)] = null);

(statearr_17937_17963[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___17949,out))
;
return ((function (switch__15185__auto__,c__15299__auto___17949,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_17915){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_17915);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e17942){if((e17942 instanceof Object)){
var ex__15189__auto__ = e17942;
var statearr_17943_17964 = state_17915;
(statearr_17943_17964[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17915);

return cljs.core.cst$kw$recur;
} else {
throw e17942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__17965 = state_17915;
state_17915 = G__17965;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_17915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_17915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___17949,out))
})();
var state__15301__auto__ = (function (){var statearr_17944 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_17944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___17949);

return statearr_17944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___17949,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17966 = [];
var len__6226__auto___18040 = arguments.length;
var i__6227__auto___18041 = (0);
while(true){
if((i__6227__auto___18041 < len__6226__auto___18040)){
args17966.push((arguments[i__6227__auto___18041]));

var G__18042 = (i__6227__auto___18041 + (1));
i__6227__auto___18041 = G__18042;
continue;
} else {
}
break;
}

var G__17968 = args17966.length;
switch (G__17968) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17966.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15299__auto___18044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto___18044,out){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto___18044,out){
return (function (state_18010){
var state_val_18011 = (state_18010[(1)]);
if((state_val_18011 === (7))){
var inst_18006 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18012_18045 = state_18010__$1;
(statearr_18012_18045[(2)] = inst_18006);

(statearr_18012_18045[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (1))){
var inst_17969 = [];
var inst_17970 = inst_17969;
var inst_17971 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18010__$1 = (function (){var statearr_18013 = state_18010;
(statearr_18013[(7)] = inst_17970);

(statearr_18013[(8)] = inst_17971);

return statearr_18013;
})();
var statearr_18014_18046 = state_18010__$1;
(statearr_18014_18046[(2)] = null);

(statearr_18014_18046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (4))){
var inst_17974 = (state_18010[(9)]);
var inst_17974__$1 = (state_18010[(2)]);
var inst_17975 = (inst_17974__$1 == null);
var inst_17976 = cljs.core.not(inst_17975);
var state_18010__$1 = (function (){var statearr_18015 = state_18010;
(statearr_18015[(9)] = inst_17974__$1);

return statearr_18015;
})();
if(inst_17976){
var statearr_18016_18047 = state_18010__$1;
(statearr_18016_18047[(1)] = (5));

} else {
var statearr_18017_18048 = state_18010__$1;
(statearr_18017_18048[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (15))){
var inst_18000 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18018_18049 = state_18010__$1;
(statearr_18018_18049[(2)] = inst_18000);

(statearr_18018_18049[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (13))){
var state_18010__$1 = state_18010;
var statearr_18019_18050 = state_18010__$1;
(statearr_18019_18050[(2)] = null);

(statearr_18019_18050[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (6))){
var inst_17970 = (state_18010[(7)]);
var inst_17995 = inst_17970.length;
var inst_17996 = (inst_17995 > (0));
var state_18010__$1 = state_18010;
if(cljs.core.truth_(inst_17996)){
var statearr_18020_18051 = state_18010__$1;
(statearr_18020_18051[(1)] = (12));

} else {
var statearr_18021_18052 = state_18010__$1;
(statearr_18021_18052[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (3))){
var inst_18008 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18010__$1,inst_18008);
} else {
if((state_val_18011 === (12))){
var inst_17970 = (state_18010[(7)]);
var inst_17998 = cljs.core.vec(inst_17970);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18010__$1,(15),out,inst_17998);
} else {
if((state_val_18011 === (2))){
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18010__$1,(4),ch);
} else {
if((state_val_18011 === (11))){
var inst_17974 = (state_18010[(9)]);
var inst_17978 = (state_18010[(10)]);
var inst_17988 = (state_18010[(2)]);
var inst_17989 = [];
var inst_17990 = inst_17989.push(inst_17974);
var inst_17970 = inst_17989;
var inst_17971 = inst_17978;
var state_18010__$1 = (function (){var statearr_18022 = state_18010;
(statearr_18022[(11)] = inst_17990);

(statearr_18022[(12)] = inst_17988);

(statearr_18022[(7)] = inst_17970);

(statearr_18022[(8)] = inst_17971);

return statearr_18022;
})();
var statearr_18023_18053 = state_18010__$1;
(statearr_18023_18053[(2)] = null);

(statearr_18023_18053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (9))){
var inst_17970 = (state_18010[(7)]);
var inst_17986 = cljs.core.vec(inst_17970);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18010__$1,(11),out,inst_17986);
} else {
if((state_val_18011 === (5))){
var inst_17974 = (state_18010[(9)]);
var inst_17978 = (state_18010[(10)]);
var inst_17971 = (state_18010[(8)]);
var inst_17978__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17974) : f.call(null,inst_17974));
var inst_17979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17978__$1,inst_17971);
var inst_17980 = cljs.core.keyword_identical_QMARK_(inst_17971,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17981 = (inst_17979) || (inst_17980);
var state_18010__$1 = (function (){var statearr_18024 = state_18010;
(statearr_18024[(10)] = inst_17978__$1);

return statearr_18024;
})();
if(cljs.core.truth_(inst_17981)){
var statearr_18025_18054 = state_18010__$1;
(statearr_18025_18054[(1)] = (8));

} else {
var statearr_18026_18055 = state_18010__$1;
(statearr_18026_18055[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (14))){
var inst_18003 = (state_18010[(2)]);
var inst_18004 = cljs.core.async.close_BANG_(out);
var state_18010__$1 = (function (){var statearr_18028 = state_18010;
(statearr_18028[(13)] = inst_18003);

return statearr_18028;
})();
var statearr_18029_18056 = state_18010__$1;
(statearr_18029_18056[(2)] = inst_18004);

(statearr_18029_18056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (10))){
var inst_17993 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18030_18057 = state_18010__$1;
(statearr_18030_18057[(2)] = inst_17993);

(statearr_18030_18057[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18011 === (8))){
var inst_17974 = (state_18010[(9)]);
var inst_17978 = (state_18010[(10)]);
var inst_17970 = (state_18010[(7)]);
var inst_17983 = inst_17970.push(inst_17974);
var tmp18027 = inst_17970;
var inst_17970__$1 = tmp18027;
var inst_17971 = inst_17978;
var state_18010__$1 = (function (){var statearr_18031 = state_18010;
(statearr_18031[(14)] = inst_17983);

(statearr_18031[(7)] = inst_17970__$1);

(statearr_18031[(8)] = inst_17971);

return statearr_18031;
})();
var statearr_18032_18058 = state_18010__$1;
(statearr_18032_18058[(2)] = null);

(statearr_18032_18058[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15299__auto___18044,out))
;
return ((function (switch__15185__auto__,c__15299__auto___18044,out){
return (function() {
var cljs$core$async$state_machine__15186__auto__ = null;
var cljs$core$async$state_machine__15186__auto____0 = (function (){
var statearr_18036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18036[(0)] = cljs$core$async$state_machine__15186__auto__);

(statearr_18036[(1)] = (1));

return statearr_18036;
});
var cljs$core$async$state_machine__15186__auto____1 = (function (state_18010){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_18010);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e18037){if((e18037 instanceof Object)){
var ex__15189__auto__ = e18037;
var statearr_18038_18059 = state_18010;
(statearr_18038_18059[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18010);

return cljs.core.cst$kw$recur;
} else {
throw e18037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__18060 = state_18010;
state_18010 = G__18060;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
cljs$core$async$state_machine__15186__auto__ = function(state_18010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15186__auto____1.call(this,state_18010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15186__auto____0;
cljs$core$async$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15186__auto____1;
return cljs$core$async$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto___18044,out))
})();
var state__15301__auto__ = (function (){var statearr_18039 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_18039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto___18044);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto___18044,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
