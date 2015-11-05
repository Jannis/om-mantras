// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async20105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20105 = (function (fn_handler,f,meta20106){
this.fn_handler = fn_handler;
this.f = f;
this.meta20106 = meta20106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20107,meta20106__$1){
var self__ = this;
var _20107__$1 = this;
return (new cljs.core.async.t_cljs$core$async20105(self__.fn_handler,self__.f,meta20106__$1));
});

cljs.core.async.t_cljs$core$async20105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20107){
var self__ = this;
var _20107__$1 = this;
return self__.meta20106;
});

cljs.core.async.t_cljs$core$async20105.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta20106], null);
});

cljs.core.async.t_cljs$core$async20105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20105";

cljs.core.async.t_cljs$core$async20105.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async20105");
});

cljs.core.async.__GT_t_cljs$core$async20105 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async20105(fn_handler__$1,f__$1,meta20106){
return (new cljs.core.async.t_cljs$core$async20105(fn_handler__$1,f__$1,meta20106));
});

}

return (new cljs.core.async.t_cljs$core$async20105(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args20110 = [];
var len__6152__auto___20113 = arguments.length;
var i__6153__auto___20114 = (0);
while(true){
if((i__6153__auto___20114 < len__6152__auto___20113)){
args20110.push((arguments[i__6153__auto___20114]));

var G__20115 = (i__6153__auto___20114 + (1));
i__6153__auto___20114 = G__20115;
continue;
} else {
}
break;
}

var G__20112 = args20110.length;
switch (G__20112) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20110.length)].join('')));

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
var args20117 = [];
var len__6152__auto___20120 = arguments.length;
var i__6153__auto___20121 = (0);
while(true){
if((i__6153__auto___20121 < len__6152__auto___20120)){
args20117.push((arguments[i__6153__auto___20121]));

var G__20122 = (i__6153__auto___20121 + (1));
i__6153__auto___20121 = G__20122;
continue;
} else {
}
break;
}

var G__20119 = args20117.length;
switch (G__20119) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20117.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_20124 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20124) : fn1.call(null,val_20124));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20124,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20124) : fn1.call(null,val_20124));
});})(val_20124,ret))
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
var args20125 = [];
var len__6152__auto___20128 = arguments.length;
var i__6153__auto___20129 = (0);
while(true){
if((i__6153__auto___20129 < len__6152__auto___20128)){
args20125.push((arguments[i__6153__auto___20129]));

var G__20130 = (i__6153__auto___20129 + (1));
i__6153__auto___20129 = G__20130;
continue;
} else {
}
break;
}

var G__20127 = args20125.length;
switch (G__20127) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20125.length)].join('')));

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
var n__5997__auto___20132 = n;
var x_20133 = (0);
while(true){
if((x_20133 < n__5997__auto___20132)){
(a[x_20133] = (0));

var G__20134 = (x_20133 + (1));
x_20133 = G__20134;
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

var G__20135 = (i + (1));
i = G__20135;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async20139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20139 = (function (alt_flag,flag,meta20140){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20140 = meta20140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20141,meta20140__$1){
var self__ = this;
var _20141__$1 = this;
return (new cljs.core.async.t_cljs$core$async20139(self__.alt_flag,self__.flag,meta20140__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20141){
var self__ = this;
var _20141__$1 = this;
return self__.meta20140;
});})(flag))
;

cljs.core.async.t_cljs$core$async20139.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async20139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20139.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta20140], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20139";

cljs.core.async.t_cljs$core$async20139.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async20139");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20139 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20139(alt_flag__$1,flag__$1,meta20140){
return (new cljs.core.async.t_cljs$core$async20139(alt_flag__$1,flag__$1,meta20140));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20139(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20145 = (function (alt_handler,flag,cb,meta20146){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20146 = meta20146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20147,meta20146__$1){
var self__ = this;
var _20147__$1 = this;
return (new cljs.core.async.t_cljs$core$async20145(self__.alt_handler,self__.flag,self__.cb,meta20146__$1));
});

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20147){
var self__ = this;
var _20147__$1 = this;
return self__.meta20146;
});

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta20146], null);
});

cljs.core.async.t_cljs$core$async20145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20145";

cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async20145");
});

cljs.core.async.__GT_t_cljs$core$async20145 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20145(alt_handler__$1,flag__$1,cb__$1,meta20146){
return (new cljs.core.async.t_cljs$core$async20145(alt_handler__$1,flag__$1,cb__$1,meta20146));
});

}

return (new cljs.core.async.t_cljs$core$async20145(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20148_SHARP_){
var G__20152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20148_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20152) : fret.call(null,G__20152));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20149_SHARP_){
var G__20153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20149_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20153) : fret.call(null,G__20153));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5094__auto__ = wport;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20154 = (i + (1));
i = G__20154;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5094__auto__ = ret;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__5082__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5082__auto__;
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
var args__6159__auto__ = [];
var len__6152__auto___20160 = arguments.length;
var i__6153__auto___20161 = (0);
while(true){
if((i__6153__auto___20161 < len__6152__auto___20160)){
args__6159__auto__.push((arguments[i__6153__auto___20161]));

var G__20162 = (i__6153__auto___20161 + (1));
i__6153__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20157){
var map__20158 = p__20157;
var map__20158__$1 = ((((!((map__20158 == null)))?((((map__20158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20158):map__20158);
var opts = map__20158__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20155){
var G__20156 = cljs.core.first(seq20155);
var seq20155__$1 = cljs.core.next(seq20155);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20156,seq20155__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20163 = [];
var len__6152__auto___20213 = arguments.length;
var i__6153__auto___20214 = (0);
while(true){
if((i__6153__auto___20214 < len__6152__auto___20213)){
args20163.push((arguments[i__6153__auto___20214]));

var G__20215 = (i__6153__auto___20214 + (1));
i__6153__auto___20214 = G__20215;
continue;
} else {
}
break;
}

var G__20165 = args20163.length;
switch (G__20165) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20163.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10081__auto___20217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___20217){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___20217){
return (function (state_20189){
var state_val_20190 = (state_20189[(1)]);
if((state_val_20190 === (7))){
var inst_20185 = (state_20189[(2)]);
var state_20189__$1 = state_20189;
var statearr_20191_20218 = state_20189__$1;
(statearr_20191_20218[(2)] = inst_20185);

(statearr_20191_20218[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (1))){
var state_20189__$1 = state_20189;
var statearr_20192_20219 = state_20189__$1;
(statearr_20192_20219[(2)] = null);

(statearr_20192_20219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (4))){
var inst_20168 = (state_20189[(7)]);
var inst_20168__$1 = (state_20189[(2)]);
var inst_20169 = (inst_20168__$1 == null);
var state_20189__$1 = (function (){var statearr_20193 = state_20189;
(statearr_20193[(7)] = inst_20168__$1);

return statearr_20193;
})();
if(cljs.core.truth_(inst_20169)){
var statearr_20194_20220 = state_20189__$1;
(statearr_20194_20220[(1)] = (5));

} else {
var statearr_20195_20221 = state_20189__$1;
(statearr_20195_20221[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (13))){
var state_20189__$1 = state_20189;
var statearr_20196_20222 = state_20189__$1;
(statearr_20196_20222[(2)] = null);

(statearr_20196_20222[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (6))){
var inst_20168 = (state_20189[(7)]);
var state_20189__$1 = state_20189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20189__$1,(11),to,inst_20168);
} else {
if((state_val_20190 === (3))){
var inst_20187 = (state_20189[(2)]);
var state_20189__$1 = state_20189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20189__$1,inst_20187);
} else {
if((state_val_20190 === (12))){
var state_20189__$1 = state_20189;
var statearr_20197_20223 = state_20189__$1;
(statearr_20197_20223[(2)] = null);

(statearr_20197_20223[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (2))){
var state_20189__$1 = state_20189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20189__$1,(4),from);
} else {
if((state_val_20190 === (11))){
var inst_20178 = (state_20189[(2)]);
var state_20189__$1 = state_20189;
if(cljs.core.truth_(inst_20178)){
var statearr_20198_20224 = state_20189__$1;
(statearr_20198_20224[(1)] = (12));

} else {
var statearr_20199_20225 = state_20189__$1;
(statearr_20199_20225[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (9))){
var state_20189__$1 = state_20189;
var statearr_20200_20226 = state_20189__$1;
(statearr_20200_20226[(2)] = null);

(statearr_20200_20226[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (5))){
var state_20189__$1 = state_20189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20201_20227 = state_20189__$1;
(statearr_20201_20227[(1)] = (8));

} else {
var statearr_20202_20228 = state_20189__$1;
(statearr_20202_20228[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (14))){
var inst_20183 = (state_20189[(2)]);
var state_20189__$1 = state_20189;
var statearr_20203_20229 = state_20189__$1;
(statearr_20203_20229[(2)] = inst_20183);

(statearr_20203_20229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (10))){
var inst_20175 = (state_20189[(2)]);
var state_20189__$1 = state_20189;
var statearr_20204_20230 = state_20189__$1;
(statearr_20204_20230[(2)] = inst_20175);

(statearr_20204_20230[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20190 === (8))){
var inst_20172 = cljs.core.async.close_BANG_(to);
var state_20189__$1 = state_20189;
var statearr_20205_20231 = state_20189__$1;
(statearr_20205_20231[(2)] = inst_20172);

(statearr_20205_20231[(1)] = (10));


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
});})(c__10081__auto___20217))
;
return ((function (switch__10014__auto__,c__10081__auto___20217){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_20209 = [null,null,null,null,null,null,null,null];
(statearr_20209[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_20209[(1)] = (1));

return statearr_20209;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_20189){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20189);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20210){if((e20210 instanceof Object)){
var ex__10018__auto__ = e20210;
var statearr_20211_20232 = state_20189;
(statearr_20211_20232[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20189);

return cljs.core.cst$kw$recur;
} else {
throw e20210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20233 = state_20189;
state_20189 = G__20233;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_20189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_20189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___20217))
})();
var state__10083__auto__ = (function (){var statearr_20212 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20217);

return statearr_20212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___20217))
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
return (function (p__20417){
var vec__20418 = p__20417;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20418,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20418,(1),null);
var job = vec__20418;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10081__auto___20600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results){
return (function (state_20423){
var state_val_20424 = (state_20423[(1)]);
if((state_val_20424 === (1))){
var state_20423__$1 = state_20423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20423__$1,(2),res,v);
} else {
if((state_val_20424 === (2))){
var inst_20420 = (state_20423[(2)]);
var inst_20421 = cljs.core.async.close_BANG_(res);
var state_20423__$1 = (function (){var statearr_20425 = state_20423;
(statearr_20425[(7)] = inst_20420);

return statearr_20425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20423__$1,inst_20421);
} else {
return null;
}
}
});})(c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results))
;
return ((function (switch__10014__auto__,c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_20429 = [null,null,null,null,null,null,null,null];
(statearr_20429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_20429[(1)] = (1));

return statearr_20429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_20423){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20423);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20430){if((e20430 instanceof Object)){
var ex__10018__auto__ = e20430;
var statearr_20431_20601 = state_20423;
(statearr_20431_20601[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20423);

return cljs.core.cst$kw$recur;
} else {
throw e20430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20602 = state_20423;
state_20423 = G__20602;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_20423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_20423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results))
})();
var state__10083__auto__ = (function (){var statearr_20432 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20600);

return statearr_20432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___20600,res,vec__20418,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20433){
var vec__20434 = p__20433;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20434,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20434,(1),null);
var job = vec__20434;
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
var n__5997__auto___20603 = n;
var __20604 = (0);
while(true){
if((__20604 < n__5997__auto___20603)){
var G__20435_20605 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20435_20605) {
case "compute":
var c__10081__auto___20607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20604,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (__20604,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function (state_20448){
var state_val_20449 = (state_20448[(1)]);
if((state_val_20449 === (1))){
var state_20448__$1 = state_20448;
var statearr_20450_20608 = state_20448__$1;
(statearr_20450_20608[(2)] = null);

(statearr_20450_20608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20449 === (2))){
var state_20448__$1 = state_20448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20448__$1,(4),jobs);
} else {
if((state_val_20449 === (3))){
var inst_20446 = (state_20448[(2)]);
var state_20448__$1 = state_20448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20448__$1,inst_20446);
} else {
if((state_val_20449 === (4))){
var inst_20438 = (state_20448[(2)]);
var inst_20439 = process(inst_20438);
var state_20448__$1 = state_20448;
if(cljs.core.truth_(inst_20439)){
var statearr_20451_20609 = state_20448__$1;
(statearr_20451_20609[(1)] = (5));

} else {
var statearr_20452_20610 = state_20448__$1;
(statearr_20452_20610[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20449 === (5))){
var state_20448__$1 = state_20448;
var statearr_20453_20611 = state_20448__$1;
(statearr_20453_20611[(2)] = null);

(statearr_20453_20611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20449 === (6))){
var state_20448__$1 = state_20448;
var statearr_20454_20612 = state_20448__$1;
(statearr_20454_20612[(2)] = null);

(statearr_20454_20612[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20449 === (7))){
var inst_20444 = (state_20448[(2)]);
var state_20448__$1 = state_20448;
var statearr_20455_20613 = state_20448__$1;
(statearr_20455_20613[(2)] = inst_20444);

(statearr_20455_20613[(1)] = (3));


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
});})(__20604,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
;
return ((function (__20604,switch__10014__auto__,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_20459 = [null,null,null,null,null,null,null];
(statearr_20459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_20459[(1)] = (1));

return statearr_20459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_20448){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20448);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20460){if((e20460 instanceof Object)){
var ex__10018__auto__ = e20460;
var statearr_20461_20614 = state_20448;
(statearr_20461_20614[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20448);

return cljs.core.cst$kw$recur;
} else {
throw e20460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20615 = state_20448;
state_20448 = G__20615;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_20448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_20448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__20604,switch__10014__auto__,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_20462 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20607);

return statearr_20462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(__20604,c__10081__auto___20607,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
);


break;
case "async":
var c__10081__auto___20616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20604,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (__20604,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function (state_20475){
var state_val_20476 = (state_20475[(1)]);
if((state_val_20476 === (1))){
var state_20475__$1 = state_20475;
var statearr_20477_20617 = state_20475__$1;
(statearr_20477_20617[(2)] = null);

(statearr_20477_20617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20476 === (2))){
var state_20475__$1 = state_20475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20475__$1,(4),jobs);
} else {
if((state_val_20476 === (3))){
var inst_20473 = (state_20475[(2)]);
var state_20475__$1 = state_20475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20475__$1,inst_20473);
} else {
if((state_val_20476 === (4))){
var inst_20465 = (state_20475[(2)]);
var inst_20466 = async(inst_20465);
var state_20475__$1 = state_20475;
if(cljs.core.truth_(inst_20466)){
var statearr_20478_20618 = state_20475__$1;
(statearr_20478_20618[(1)] = (5));

} else {
var statearr_20479_20619 = state_20475__$1;
(statearr_20479_20619[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20476 === (5))){
var state_20475__$1 = state_20475;
var statearr_20480_20620 = state_20475__$1;
(statearr_20480_20620[(2)] = null);

(statearr_20480_20620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20476 === (6))){
var state_20475__$1 = state_20475;
var statearr_20481_20621 = state_20475__$1;
(statearr_20481_20621[(2)] = null);

(statearr_20481_20621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20476 === (7))){
var inst_20471 = (state_20475[(2)]);
var state_20475__$1 = state_20475;
var statearr_20482_20622 = state_20475__$1;
(statearr_20482_20622[(2)] = inst_20471);

(statearr_20482_20622[(1)] = (3));


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
});})(__20604,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
;
return ((function (__20604,switch__10014__auto__,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_20486 = [null,null,null,null,null,null,null];
(statearr_20486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_20486[(1)] = (1));

return statearr_20486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_20475){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20475);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20487){if((e20487 instanceof Object)){
var ex__10018__auto__ = e20487;
var statearr_20488_20623 = state_20475;
(statearr_20488_20623[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20475);

return cljs.core.cst$kw$recur;
} else {
throw e20487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20624 = state_20475;
state_20475 = G__20624;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_20475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_20475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__20604,switch__10014__auto__,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_20489 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20616);

return statearr_20489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(__20604,c__10081__auto___20616,G__20435_20605,n__5997__auto___20603,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20625 = (__20604 + (1));
__20604 = G__20625;
continue;
} else {
}
break;
}

var c__10081__auto___20626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___20626,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___20626,jobs,results,process,async){
return (function (state_20511){
var state_val_20512 = (state_20511[(1)]);
if((state_val_20512 === (1))){
var state_20511__$1 = state_20511;
var statearr_20513_20627 = state_20511__$1;
(statearr_20513_20627[(2)] = null);

(statearr_20513_20627[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (2))){
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20511__$1,(4),from);
} else {
if((state_val_20512 === (3))){
var inst_20509 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20511__$1,inst_20509);
} else {
if((state_val_20512 === (4))){
var inst_20492 = (state_20511[(7)]);
var inst_20492__$1 = (state_20511[(2)]);
var inst_20493 = (inst_20492__$1 == null);
var state_20511__$1 = (function (){var statearr_20514 = state_20511;
(statearr_20514[(7)] = inst_20492__$1);

return statearr_20514;
})();
if(cljs.core.truth_(inst_20493)){
var statearr_20515_20628 = state_20511__$1;
(statearr_20515_20628[(1)] = (5));

} else {
var statearr_20516_20629 = state_20511__$1;
(statearr_20516_20629[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (5))){
var inst_20495 = cljs.core.async.close_BANG_(jobs);
var state_20511__$1 = state_20511;
var statearr_20517_20630 = state_20511__$1;
(statearr_20517_20630[(2)] = inst_20495);

(statearr_20517_20630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (6))){
var inst_20497 = (state_20511[(8)]);
var inst_20492 = (state_20511[(7)]);
var inst_20497__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20499 = [inst_20492,inst_20497__$1];
var inst_20500 = (new cljs.core.PersistentVector(null,2,(5),inst_20498,inst_20499,null));
var state_20511__$1 = (function (){var statearr_20518 = state_20511;
(statearr_20518[(8)] = inst_20497__$1);

return statearr_20518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20511__$1,(8),jobs,inst_20500);
} else {
if((state_val_20512 === (7))){
var inst_20507 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20519_20631 = state_20511__$1;
(statearr_20519_20631[(2)] = inst_20507);

(statearr_20519_20631[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (8))){
var inst_20497 = (state_20511[(8)]);
var inst_20502 = (state_20511[(2)]);
var state_20511__$1 = (function (){var statearr_20520 = state_20511;
(statearr_20520[(9)] = inst_20502);

return statearr_20520;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20511__$1,(9),results,inst_20497);
} else {
if((state_val_20512 === (9))){
var inst_20504 = (state_20511[(2)]);
var state_20511__$1 = (function (){var statearr_20521 = state_20511;
(statearr_20521[(10)] = inst_20504);

return statearr_20521;
})();
var statearr_20522_20632 = state_20511__$1;
(statearr_20522_20632[(2)] = null);

(statearr_20522_20632[(1)] = (2));


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
});})(c__10081__auto___20626,jobs,results,process,async))
;
return ((function (switch__10014__auto__,c__10081__auto___20626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_20526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_20526[(1)] = (1));

return statearr_20526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_20511){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20511);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20527){if((e20527 instanceof Object)){
var ex__10018__auto__ = e20527;
var statearr_20528_20633 = state_20511;
(statearr_20528_20633[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20511);

return cljs.core.cst$kw$recur;
} else {
throw e20527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20634 = state_20511;
state_20511 = G__20634;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_20511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_20511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___20626,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_20529 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20626);

return statearr_20529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___20626,jobs,results,process,async))
);


var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__,jobs,results,process,async){
return (function (state_20567){
var state_val_20568 = (state_20567[(1)]);
if((state_val_20568 === (7))){
var inst_20563 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20569_20635 = state_20567__$1;
(statearr_20569_20635[(2)] = inst_20563);

(statearr_20569_20635[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (20))){
var state_20567__$1 = state_20567;
var statearr_20570_20636 = state_20567__$1;
(statearr_20570_20636[(2)] = null);

(statearr_20570_20636[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (1))){
var state_20567__$1 = state_20567;
var statearr_20571_20637 = state_20567__$1;
(statearr_20571_20637[(2)] = null);

(statearr_20571_20637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (4))){
var inst_20532 = (state_20567[(7)]);
var inst_20532__$1 = (state_20567[(2)]);
var inst_20533 = (inst_20532__$1 == null);
var state_20567__$1 = (function (){var statearr_20572 = state_20567;
(statearr_20572[(7)] = inst_20532__$1);

return statearr_20572;
})();
if(cljs.core.truth_(inst_20533)){
var statearr_20573_20638 = state_20567__$1;
(statearr_20573_20638[(1)] = (5));

} else {
var statearr_20574_20639 = state_20567__$1;
(statearr_20574_20639[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (15))){
var inst_20545 = (state_20567[(8)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20567__$1,(18),to,inst_20545);
} else {
if((state_val_20568 === (21))){
var inst_20558 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20575_20640 = state_20567__$1;
(statearr_20575_20640[(2)] = inst_20558);

(statearr_20575_20640[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (13))){
var inst_20560 = (state_20567[(2)]);
var state_20567__$1 = (function (){var statearr_20576 = state_20567;
(statearr_20576[(9)] = inst_20560);

return statearr_20576;
})();
var statearr_20577_20641 = state_20567__$1;
(statearr_20577_20641[(2)] = null);

(statearr_20577_20641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (6))){
var inst_20532 = (state_20567[(7)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20567__$1,(11),inst_20532);
} else {
if((state_val_20568 === (17))){
var inst_20553 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
if(cljs.core.truth_(inst_20553)){
var statearr_20578_20642 = state_20567__$1;
(statearr_20578_20642[(1)] = (19));

} else {
var statearr_20579_20643 = state_20567__$1;
(statearr_20579_20643[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (3))){
var inst_20565 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20567__$1,inst_20565);
} else {
if((state_val_20568 === (12))){
var inst_20542 = (state_20567[(10)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20567__$1,(14),inst_20542);
} else {
if((state_val_20568 === (2))){
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20567__$1,(4),results);
} else {
if((state_val_20568 === (19))){
var state_20567__$1 = state_20567;
var statearr_20580_20644 = state_20567__$1;
(statearr_20580_20644[(2)] = null);

(statearr_20580_20644[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (11))){
var inst_20542 = (state_20567[(2)]);
var state_20567__$1 = (function (){var statearr_20581 = state_20567;
(statearr_20581[(10)] = inst_20542);

return statearr_20581;
})();
var statearr_20582_20645 = state_20567__$1;
(statearr_20582_20645[(2)] = null);

(statearr_20582_20645[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (9))){
var state_20567__$1 = state_20567;
var statearr_20583_20646 = state_20567__$1;
(statearr_20583_20646[(2)] = null);

(statearr_20583_20646[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (5))){
var state_20567__$1 = state_20567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20584_20647 = state_20567__$1;
(statearr_20584_20647[(1)] = (8));

} else {
var statearr_20585_20648 = state_20567__$1;
(statearr_20585_20648[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (14))){
var inst_20545 = (state_20567[(8)]);
var inst_20547 = (state_20567[(11)]);
var inst_20545__$1 = (state_20567[(2)]);
var inst_20546 = (inst_20545__$1 == null);
var inst_20547__$1 = cljs.core.not(inst_20546);
var state_20567__$1 = (function (){var statearr_20586 = state_20567;
(statearr_20586[(8)] = inst_20545__$1);

(statearr_20586[(11)] = inst_20547__$1);

return statearr_20586;
})();
if(inst_20547__$1){
var statearr_20587_20649 = state_20567__$1;
(statearr_20587_20649[(1)] = (15));

} else {
var statearr_20588_20650 = state_20567__$1;
(statearr_20588_20650[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (16))){
var inst_20547 = (state_20567[(11)]);
var state_20567__$1 = state_20567;
var statearr_20589_20651 = state_20567__$1;
(statearr_20589_20651[(2)] = inst_20547);

(statearr_20589_20651[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (10))){
var inst_20539 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20590_20652 = state_20567__$1;
(statearr_20590_20652[(2)] = inst_20539);

(statearr_20590_20652[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (18))){
var inst_20550 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20591_20653 = state_20567__$1;
(statearr_20591_20653[(2)] = inst_20550);

(statearr_20591_20653[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20568 === (8))){
var inst_20536 = cljs.core.async.close_BANG_(to);
var state_20567__$1 = state_20567;
var statearr_20592_20654 = state_20567__$1;
(statearr_20592_20654[(2)] = inst_20536);

(statearr_20592_20654[(1)] = (10));


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
});})(c__10081__auto__,jobs,results,process,async))
;
return ((function (switch__10014__auto__,c__10081__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_20567){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20567);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20597){if((e20597 instanceof Object)){
var ex__10018__auto__ = e20597;
var statearr_20598_20655 = state_20567;
(statearr_20598_20655[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20567);

return cljs.core.cst$kw$recur;
} else {
throw e20597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20656 = state_20567;
state_20567 = G__20656;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_20567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_20567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_20599 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_20599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__,jobs,results,process,async))
);

return c__10081__auto__;
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
var args20657 = [];
var len__6152__auto___20660 = arguments.length;
var i__6153__auto___20661 = (0);
while(true){
if((i__6153__auto___20661 < len__6152__auto___20660)){
args20657.push((arguments[i__6153__auto___20661]));

var G__20662 = (i__6153__auto___20661 + (1));
i__6153__auto___20661 = G__20662;
continue;
} else {
}
break;
}

var G__20659 = args20657.length;
switch (G__20659) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20657.length)].join('')));

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
var args20664 = [];
var len__6152__auto___20667 = arguments.length;
var i__6153__auto___20668 = (0);
while(true){
if((i__6153__auto___20668 < len__6152__auto___20667)){
args20664.push((arguments[i__6153__auto___20668]));

var G__20669 = (i__6153__auto___20668 + (1));
i__6153__auto___20668 = G__20669;
continue;
} else {
}
break;
}

var G__20666 = args20664.length;
switch (G__20666) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20664.length)].join('')));

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
var args20671 = [];
var len__6152__auto___20724 = arguments.length;
var i__6153__auto___20725 = (0);
while(true){
if((i__6153__auto___20725 < len__6152__auto___20724)){
args20671.push((arguments[i__6153__auto___20725]));

var G__20726 = (i__6153__auto___20725 + (1));
i__6153__auto___20725 = G__20726;
continue;
} else {
}
break;
}

var G__20673 = args20671.length;
switch (G__20673) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20671.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10081__auto___20728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___20728,tc,fc){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___20728,tc,fc){
return (function (state_20699){
var state_val_20700 = (state_20699[(1)]);
if((state_val_20700 === (7))){
var inst_20695 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20701_20729 = state_20699__$1;
(statearr_20701_20729[(2)] = inst_20695);

(statearr_20701_20729[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (1))){
var state_20699__$1 = state_20699;
var statearr_20702_20730 = state_20699__$1;
(statearr_20702_20730[(2)] = null);

(statearr_20702_20730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (4))){
var inst_20676 = (state_20699[(7)]);
var inst_20676__$1 = (state_20699[(2)]);
var inst_20677 = (inst_20676__$1 == null);
var state_20699__$1 = (function (){var statearr_20703 = state_20699;
(statearr_20703[(7)] = inst_20676__$1);

return statearr_20703;
})();
if(cljs.core.truth_(inst_20677)){
var statearr_20704_20731 = state_20699__$1;
(statearr_20704_20731[(1)] = (5));

} else {
var statearr_20705_20732 = state_20699__$1;
(statearr_20705_20732[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (13))){
var state_20699__$1 = state_20699;
var statearr_20706_20733 = state_20699__$1;
(statearr_20706_20733[(2)] = null);

(statearr_20706_20733[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (6))){
var inst_20676 = (state_20699[(7)]);
var inst_20682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20676) : p.call(null,inst_20676));
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20682)){
var statearr_20707_20734 = state_20699__$1;
(statearr_20707_20734[(1)] = (9));

} else {
var statearr_20708_20735 = state_20699__$1;
(statearr_20708_20735[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (3))){
var inst_20697 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20699__$1,inst_20697);
} else {
if((state_val_20700 === (12))){
var state_20699__$1 = state_20699;
var statearr_20709_20736 = state_20699__$1;
(statearr_20709_20736[(2)] = null);

(statearr_20709_20736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (2))){
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20699__$1,(4),ch);
} else {
if((state_val_20700 === (11))){
var inst_20676 = (state_20699[(7)]);
var inst_20686 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20699__$1,(8),inst_20686,inst_20676);
} else {
if((state_val_20700 === (9))){
var state_20699__$1 = state_20699;
var statearr_20710_20737 = state_20699__$1;
(statearr_20710_20737[(2)] = tc);

(statearr_20710_20737[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (5))){
var inst_20679 = cljs.core.async.close_BANG_(tc);
var inst_20680 = cljs.core.async.close_BANG_(fc);
var state_20699__$1 = (function (){var statearr_20711 = state_20699;
(statearr_20711[(8)] = inst_20679);

return statearr_20711;
})();
var statearr_20712_20738 = state_20699__$1;
(statearr_20712_20738[(2)] = inst_20680);

(statearr_20712_20738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (14))){
var inst_20693 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
var statearr_20713_20739 = state_20699__$1;
(statearr_20713_20739[(2)] = inst_20693);

(statearr_20713_20739[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (10))){
var state_20699__$1 = state_20699;
var statearr_20714_20740 = state_20699__$1;
(statearr_20714_20740[(2)] = fc);

(statearr_20714_20740[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20700 === (8))){
var inst_20688 = (state_20699[(2)]);
var state_20699__$1 = state_20699;
if(cljs.core.truth_(inst_20688)){
var statearr_20715_20741 = state_20699__$1;
(statearr_20715_20741[(1)] = (12));

} else {
var statearr_20716_20742 = state_20699__$1;
(statearr_20716_20742[(1)] = (13));

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
});})(c__10081__auto___20728,tc,fc))
;
return ((function (switch__10014__auto__,c__10081__auto___20728,tc,fc){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_20720 = [null,null,null,null,null,null,null,null,null];
(statearr_20720[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_20720[(1)] = (1));

return statearr_20720;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_20699){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20699);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20721){if((e20721 instanceof Object)){
var ex__10018__auto__ = e20721;
var statearr_20722_20743 = state_20699;
(statearr_20722_20743[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20699);

return cljs.core.cst$kw$recur;
} else {
throw e20721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20744 = state_20699;
state_20699 = G__20744;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_20699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_20699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___20728,tc,fc))
})();
var state__10083__auto__ = (function (){var statearr_20723 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___20728);

return statearr_20723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___20728,tc,fc))
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
var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__){
return (function (state_20791){
var state_val_20792 = (state_20791[(1)]);
if((state_val_20792 === (1))){
var inst_20777 = init;
var state_20791__$1 = (function (){var statearr_20793 = state_20791;
(statearr_20793[(7)] = inst_20777);

return statearr_20793;
})();
var statearr_20794_20809 = state_20791__$1;
(statearr_20794_20809[(2)] = null);

(statearr_20794_20809[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20792 === (2))){
var state_20791__$1 = state_20791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20791__$1,(4),ch);
} else {
if((state_val_20792 === (3))){
var inst_20789 = (state_20791[(2)]);
var state_20791__$1 = state_20791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20791__$1,inst_20789);
} else {
if((state_val_20792 === (4))){
var inst_20780 = (state_20791[(8)]);
var inst_20780__$1 = (state_20791[(2)]);
var inst_20781 = (inst_20780__$1 == null);
var state_20791__$1 = (function (){var statearr_20795 = state_20791;
(statearr_20795[(8)] = inst_20780__$1);

return statearr_20795;
})();
if(cljs.core.truth_(inst_20781)){
var statearr_20796_20810 = state_20791__$1;
(statearr_20796_20810[(1)] = (5));

} else {
var statearr_20797_20811 = state_20791__$1;
(statearr_20797_20811[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20792 === (5))){
var inst_20777 = (state_20791[(7)]);
var state_20791__$1 = state_20791;
var statearr_20798_20812 = state_20791__$1;
(statearr_20798_20812[(2)] = inst_20777);

(statearr_20798_20812[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20792 === (6))){
var inst_20777 = (state_20791[(7)]);
var inst_20780 = (state_20791[(8)]);
var inst_20784 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20777,inst_20780) : f.call(null,inst_20777,inst_20780));
var inst_20777__$1 = inst_20784;
var state_20791__$1 = (function (){var statearr_20799 = state_20791;
(statearr_20799[(7)] = inst_20777__$1);

return statearr_20799;
})();
var statearr_20800_20813 = state_20791__$1;
(statearr_20800_20813[(2)] = null);

(statearr_20800_20813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20792 === (7))){
var inst_20787 = (state_20791[(2)]);
var state_20791__$1 = state_20791;
var statearr_20801_20814 = state_20791__$1;
(statearr_20801_20814[(2)] = inst_20787);

(statearr_20801_20814[(1)] = (3));


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
});})(c__10081__auto__))
;
return ((function (switch__10014__auto__,c__10081__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10015__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10015__auto____0 = (function (){
var statearr_20805 = [null,null,null,null,null,null,null,null,null];
(statearr_20805[(0)] = cljs$core$async$reduce_$_state_machine__10015__auto__);

(statearr_20805[(1)] = (1));

return statearr_20805;
});
var cljs$core$async$reduce_$_state_machine__10015__auto____1 = (function (state_20791){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20791);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20806){if((e20806 instanceof Object)){
var ex__10018__auto__ = e20806;
var statearr_20807_20815 = state_20791;
(statearr_20807_20815[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20791);

return cljs.core.cst$kw$recur;
} else {
throw e20806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20816 = state_20791;
state_20791 = G__20816;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10015__auto__ = function(state_20791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10015__auto____1.call(this,state_20791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10015__auto____0;
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10015__auto____1;
return cljs$core$async$reduce_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_20808 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_20808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__))
);

return c__10081__auto__;
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
var args20817 = [];
var len__6152__auto___20869 = arguments.length;
var i__6153__auto___20870 = (0);
while(true){
if((i__6153__auto___20870 < len__6152__auto___20869)){
args20817.push((arguments[i__6153__auto___20870]));

var G__20871 = (i__6153__auto___20870 + (1));
i__6153__auto___20870 = G__20871;
continue;
} else {
}
break;
}

var G__20819 = args20817.length;
switch (G__20819) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20817.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__){
return (function (state_20844){
var state_val_20845 = (state_20844[(1)]);
if((state_val_20845 === (7))){
var inst_20826 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20846_20873 = state_20844__$1;
(statearr_20846_20873[(2)] = inst_20826);

(statearr_20846_20873[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (1))){
var inst_20820 = cljs.core.seq(coll);
var inst_20821 = inst_20820;
var state_20844__$1 = (function (){var statearr_20847 = state_20844;
(statearr_20847[(7)] = inst_20821);

return statearr_20847;
})();
var statearr_20848_20874 = state_20844__$1;
(statearr_20848_20874[(2)] = null);

(statearr_20848_20874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (4))){
var inst_20821 = (state_20844[(7)]);
var inst_20824 = cljs.core.first(inst_20821);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20844__$1,(7),ch,inst_20824);
} else {
if((state_val_20845 === (13))){
var inst_20838 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20849_20875 = state_20844__$1;
(statearr_20849_20875[(2)] = inst_20838);

(statearr_20849_20875[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (6))){
var inst_20829 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
if(cljs.core.truth_(inst_20829)){
var statearr_20850_20876 = state_20844__$1;
(statearr_20850_20876[(1)] = (8));

} else {
var statearr_20851_20877 = state_20844__$1;
(statearr_20851_20877[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (3))){
var inst_20842 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20844__$1,inst_20842);
} else {
if((state_val_20845 === (12))){
var state_20844__$1 = state_20844;
var statearr_20852_20878 = state_20844__$1;
(statearr_20852_20878[(2)] = null);

(statearr_20852_20878[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (2))){
var inst_20821 = (state_20844[(7)]);
var state_20844__$1 = state_20844;
if(cljs.core.truth_(inst_20821)){
var statearr_20853_20879 = state_20844__$1;
(statearr_20853_20879[(1)] = (4));

} else {
var statearr_20854_20880 = state_20844__$1;
(statearr_20854_20880[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (11))){
var inst_20835 = cljs.core.async.close_BANG_(ch);
var state_20844__$1 = state_20844;
var statearr_20855_20881 = state_20844__$1;
(statearr_20855_20881[(2)] = inst_20835);

(statearr_20855_20881[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (9))){
var state_20844__$1 = state_20844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20856_20882 = state_20844__$1;
(statearr_20856_20882[(1)] = (11));

} else {
var statearr_20857_20883 = state_20844__$1;
(statearr_20857_20883[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (5))){
var inst_20821 = (state_20844[(7)]);
var state_20844__$1 = state_20844;
var statearr_20858_20884 = state_20844__$1;
(statearr_20858_20884[(2)] = inst_20821);

(statearr_20858_20884[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (10))){
var inst_20840 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20859_20885 = state_20844__$1;
(statearr_20859_20885[(2)] = inst_20840);

(statearr_20859_20885[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20845 === (8))){
var inst_20821 = (state_20844[(7)]);
var inst_20831 = cljs.core.next(inst_20821);
var inst_20821__$1 = inst_20831;
var state_20844__$1 = (function (){var statearr_20860 = state_20844;
(statearr_20860[(7)] = inst_20821__$1);

return statearr_20860;
})();
var statearr_20861_20886 = state_20844__$1;
(statearr_20861_20886[(2)] = null);

(statearr_20861_20886[(1)] = (2));


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
});})(c__10081__auto__))
;
return ((function (switch__10014__auto__,c__10081__auto__){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_20865 = [null,null,null,null,null,null,null,null];
(statearr_20865[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_20865[(1)] = (1));

return statearr_20865;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_20844){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_20844);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e20866){if((e20866 instanceof Object)){
var ex__10018__auto__ = e20866;
var statearr_20867_20887 = state_20844;
(statearr_20867_20887[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20844);

return cljs.core.cst$kw$recur;
} else {
throw e20866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__20888 = state_20844;
state_20844 = G__20888;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_20844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_20844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_20868 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_20868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_20868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__))
);

return c__10081__auto__;
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
var x__5749__auto__ = (((_ == null))?null:_);
var m__5750__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5750__auto__.call(null,_));
} else {
var m__5750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5750__auto____$1.call(null,_));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5750__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5750__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto__.call(null,m,ch));
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto____$1.call(null,m,ch));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5750__auto__.call(null,m));
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5750__auto____$1.call(null,m));
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
var cs = (function (){var G__21113 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21113) : cljs.core.atom.call(null,G__21113));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21114 = (function (mult,ch,cs,meta21115){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21115 = meta21115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21116,meta21115__$1){
var self__ = this;
var _21116__$1 = this;
return (new cljs.core.async.t_cljs$core$async21114(self__.mult,self__.ch,self__.cs,meta21115__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21116){
var self__ = this;
var _21116__$1 = this;
return self__.meta21115;
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21117_21337 = self__.cs;
var G__21118_21338 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21117_21337,G__21118_21338) : cljs.core.reset_BANG_.call(null,G__21117_21337,G__21118_21338));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta21115], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21114";

cljs.core.async.t_cljs$core$async21114.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async21114");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21114 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21114(mult__$1,ch__$1,cs__$1,meta21115){
return (new cljs.core.async.t_cljs$core$async21114(mult__$1,ch__$1,cs__$1,meta21115));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21114(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10081__auto___21339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___21339,cs,m,dchan,dctr,done){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___21339,cs,m,dchan,dctr,done){
return (function (state_21249){
var state_val_21250 = (state_21249[(1)]);
if((state_val_21250 === (7))){
var inst_21245 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21251_21340 = state_21249__$1;
(statearr_21251_21340[(2)] = inst_21245);

(statearr_21251_21340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (20))){
var inst_21150 = (state_21249[(7)]);
var inst_21160 = cljs.core.first(inst_21150);
var inst_21161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21160,(0),null);
var inst_21162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21160,(1),null);
var state_21249__$1 = (function (){var statearr_21252 = state_21249;
(statearr_21252[(8)] = inst_21161);

return statearr_21252;
})();
if(cljs.core.truth_(inst_21162)){
var statearr_21253_21341 = state_21249__$1;
(statearr_21253_21341[(1)] = (22));

} else {
var statearr_21254_21342 = state_21249__$1;
(statearr_21254_21342[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (27))){
var inst_21190 = (state_21249[(9)]);
var inst_21197 = (state_21249[(10)]);
var inst_21121 = (state_21249[(11)]);
var inst_21192 = (state_21249[(12)]);
var inst_21197__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21190,inst_21192);
var inst_21198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21197__$1,inst_21121,done);
var state_21249__$1 = (function (){var statearr_21255 = state_21249;
(statearr_21255[(10)] = inst_21197__$1);

return statearr_21255;
})();
if(cljs.core.truth_(inst_21198)){
var statearr_21256_21343 = state_21249__$1;
(statearr_21256_21343[(1)] = (30));

} else {
var statearr_21257_21344 = state_21249__$1;
(statearr_21257_21344[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (1))){
var state_21249__$1 = state_21249;
var statearr_21258_21345 = state_21249__$1;
(statearr_21258_21345[(2)] = null);

(statearr_21258_21345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (24))){
var inst_21150 = (state_21249[(7)]);
var inst_21167 = (state_21249[(2)]);
var inst_21168 = cljs.core.next(inst_21150);
var inst_21130 = inst_21168;
var inst_21131 = null;
var inst_21132 = (0);
var inst_21133 = (0);
var state_21249__$1 = (function (){var statearr_21259 = state_21249;
(statearr_21259[(13)] = inst_21131);

(statearr_21259[(14)] = inst_21132);

(statearr_21259[(15)] = inst_21167);

(statearr_21259[(16)] = inst_21130);

(statearr_21259[(17)] = inst_21133);

return statearr_21259;
})();
var statearr_21260_21346 = state_21249__$1;
(statearr_21260_21346[(2)] = null);

(statearr_21260_21346[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (39))){
var state_21249__$1 = state_21249;
var statearr_21264_21347 = state_21249__$1;
(statearr_21264_21347[(2)] = null);

(statearr_21264_21347[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (4))){
var inst_21121 = (state_21249[(11)]);
var inst_21121__$1 = (state_21249[(2)]);
var inst_21122 = (inst_21121__$1 == null);
var state_21249__$1 = (function (){var statearr_21265 = state_21249;
(statearr_21265[(11)] = inst_21121__$1);

return statearr_21265;
})();
if(cljs.core.truth_(inst_21122)){
var statearr_21266_21348 = state_21249__$1;
(statearr_21266_21348[(1)] = (5));

} else {
var statearr_21267_21349 = state_21249__$1;
(statearr_21267_21349[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (15))){
var inst_21131 = (state_21249[(13)]);
var inst_21132 = (state_21249[(14)]);
var inst_21130 = (state_21249[(16)]);
var inst_21133 = (state_21249[(17)]);
var inst_21146 = (state_21249[(2)]);
var inst_21147 = (inst_21133 + (1));
var tmp21261 = inst_21131;
var tmp21262 = inst_21132;
var tmp21263 = inst_21130;
var inst_21130__$1 = tmp21263;
var inst_21131__$1 = tmp21261;
var inst_21132__$1 = tmp21262;
var inst_21133__$1 = inst_21147;
var state_21249__$1 = (function (){var statearr_21268 = state_21249;
(statearr_21268[(13)] = inst_21131__$1);

(statearr_21268[(14)] = inst_21132__$1);

(statearr_21268[(18)] = inst_21146);

(statearr_21268[(16)] = inst_21130__$1);

(statearr_21268[(17)] = inst_21133__$1);

return statearr_21268;
})();
var statearr_21269_21350 = state_21249__$1;
(statearr_21269_21350[(2)] = null);

(statearr_21269_21350[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (21))){
var inst_21171 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21273_21351 = state_21249__$1;
(statearr_21273_21351[(2)] = inst_21171);

(statearr_21273_21351[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (31))){
var inst_21197 = (state_21249[(10)]);
var inst_21201 = done(null);
var inst_21202 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21197);
var state_21249__$1 = (function (){var statearr_21274 = state_21249;
(statearr_21274[(19)] = inst_21201);

return statearr_21274;
})();
var statearr_21275_21352 = state_21249__$1;
(statearr_21275_21352[(2)] = inst_21202);

(statearr_21275_21352[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (32))){
var inst_21190 = (state_21249[(9)]);
var inst_21191 = (state_21249[(20)]);
var inst_21192 = (state_21249[(12)]);
var inst_21189 = (state_21249[(21)]);
var inst_21204 = (state_21249[(2)]);
var inst_21205 = (inst_21192 + (1));
var tmp21270 = inst_21190;
var tmp21271 = inst_21191;
var tmp21272 = inst_21189;
var inst_21189__$1 = tmp21272;
var inst_21190__$1 = tmp21270;
var inst_21191__$1 = tmp21271;
var inst_21192__$1 = inst_21205;
var state_21249__$1 = (function (){var statearr_21276 = state_21249;
(statearr_21276[(9)] = inst_21190__$1);

(statearr_21276[(20)] = inst_21191__$1);

(statearr_21276[(12)] = inst_21192__$1);

(statearr_21276[(22)] = inst_21204);

(statearr_21276[(21)] = inst_21189__$1);

return statearr_21276;
})();
var statearr_21277_21353 = state_21249__$1;
(statearr_21277_21353[(2)] = null);

(statearr_21277_21353[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (40))){
var inst_21217 = (state_21249[(23)]);
var inst_21221 = done(null);
var inst_21222 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21217);
var state_21249__$1 = (function (){var statearr_21278 = state_21249;
(statearr_21278[(24)] = inst_21221);

return statearr_21278;
})();
var statearr_21279_21354 = state_21249__$1;
(statearr_21279_21354[(2)] = inst_21222);

(statearr_21279_21354[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (33))){
var inst_21208 = (state_21249[(25)]);
var inst_21210 = cljs.core.chunked_seq_QMARK_(inst_21208);
var state_21249__$1 = state_21249;
if(inst_21210){
var statearr_21280_21355 = state_21249__$1;
(statearr_21280_21355[(1)] = (36));

} else {
var statearr_21281_21356 = state_21249__$1;
(statearr_21281_21356[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (13))){
var inst_21140 = (state_21249[(26)]);
var inst_21143 = cljs.core.async.close_BANG_(inst_21140);
var state_21249__$1 = state_21249;
var statearr_21282_21357 = state_21249__$1;
(statearr_21282_21357[(2)] = inst_21143);

(statearr_21282_21357[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (22))){
var inst_21161 = (state_21249[(8)]);
var inst_21164 = cljs.core.async.close_BANG_(inst_21161);
var state_21249__$1 = state_21249;
var statearr_21283_21358 = state_21249__$1;
(statearr_21283_21358[(2)] = inst_21164);

(statearr_21283_21358[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (36))){
var inst_21208 = (state_21249[(25)]);
var inst_21212 = cljs.core.chunk_first(inst_21208);
var inst_21213 = cljs.core.chunk_rest(inst_21208);
var inst_21214 = cljs.core.count(inst_21212);
var inst_21189 = inst_21213;
var inst_21190 = inst_21212;
var inst_21191 = inst_21214;
var inst_21192 = (0);
var state_21249__$1 = (function (){var statearr_21284 = state_21249;
(statearr_21284[(9)] = inst_21190);

(statearr_21284[(20)] = inst_21191);

(statearr_21284[(12)] = inst_21192);

(statearr_21284[(21)] = inst_21189);

return statearr_21284;
})();
var statearr_21285_21359 = state_21249__$1;
(statearr_21285_21359[(2)] = null);

(statearr_21285_21359[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (41))){
var inst_21208 = (state_21249[(25)]);
var inst_21224 = (state_21249[(2)]);
var inst_21225 = cljs.core.next(inst_21208);
var inst_21189 = inst_21225;
var inst_21190 = null;
var inst_21191 = (0);
var inst_21192 = (0);
var state_21249__$1 = (function (){var statearr_21286 = state_21249;
(statearr_21286[(9)] = inst_21190);

(statearr_21286[(20)] = inst_21191);

(statearr_21286[(12)] = inst_21192);

(statearr_21286[(21)] = inst_21189);

(statearr_21286[(27)] = inst_21224);

return statearr_21286;
})();
var statearr_21287_21360 = state_21249__$1;
(statearr_21287_21360[(2)] = null);

(statearr_21287_21360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (43))){
var state_21249__$1 = state_21249;
var statearr_21288_21361 = state_21249__$1;
(statearr_21288_21361[(2)] = null);

(statearr_21288_21361[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (29))){
var inst_21233 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21289_21362 = state_21249__$1;
(statearr_21289_21362[(2)] = inst_21233);

(statearr_21289_21362[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (44))){
var inst_21242 = (state_21249[(2)]);
var state_21249__$1 = (function (){var statearr_21290 = state_21249;
(statearr_21290[(28)] = inst_21242);

return statearr_21290;
})();
var statearr_21291_21363 = state_21249__$1;
(statearr_21291_21363[(2)] = null);

(statearr_21291_21363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (6))){
var inst_21181 = (state_21249[(29)]);
var inst_21180 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_21181__$1 = cljs.core.keys(inst_21180);
var inst_21182 = cljs.core.count(inst_21181__$1);
var inst_21183 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_21182) : cljs.core.reset_BANG_.call(null,dctr,inst_21182));
var inst_21188 = cljs.core.seq(inst_21181__$1);
var inst_21189 = inst_21188;
var inst_21190 = null;
var inst_21191 = (0);
var inst_21192 = (0);
var state_21249__$1 = (function (){var statearr_21292 = state_21249;
(statearr_21292[(9)] = inst_21190);

(statearr_21292[(30)] = inst_21183);

(statearr_21292[(20)] = inst_21191);

(statearr_21292[(12)] = inst_21192);

(statearr_21292[(21)] = inst_21189);

(statearr_21292[(29)] = inst_21181__$1);

return statearr_21292;
})();
var statearr_21293_21364 = state_21249__$1;
(statearr_21293_21364[(2)] = null);

(statearr_21293_21364[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (28))){
var inst_21208 = (state_21249[(25)]);
var inst_21189 = (state_21249[(21)]);
var inst_21208__$1 = cljs.core.seq(inst_21189);
var state_21249__$1 = (function (){var statearr_21294 = state_21249;
(statearr_21294[(25)] = inst_21208__$1);

return statearr_21294;
})();
if(inst_21208__$1){
var statearr_21295_21365 = state_21249__$1;
(statearr_21295_21365[(1)] = (33));

} else {
var statearr_21296_21366 = state_21249__$1;
(statearr_21296_21366[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (25))){
var inst_21191 = (state_21249[(20)]);
var inst_21192 = (state_21249[(12)]);
var inst_21194 = (inst_21192 < inst_21191);
var inst_21195 = inst_21194;
var state_21249__$1 = state_21249;
if(cljs.core.truth_(inst_21195)){
var statearr_21297_21367 = state_21249__$1;
(statearr_21297_21367[(1)] = (27));

} else {
var statearr_21298_21368 = state_21249__$1;
(statearr_21298_21368[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (34))){
var state_21249__$1 = state_21249;
var statearr_21299_21369 = state_21249__$1;
(statearr_21299_21369[(2)] = null);

(statearr_21299_21369[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (17))){
var state_21249__$1 = state_21249;
var statearr_21300_21370 = state_21249__$1;
(statearr_21300_21370[(2)] = null);

(statearr_21300_21370[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (3))){
var inst_21247 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21249__$1,inst_21247);
} else {
if((state_val_21250 === (12))){
var inst_21176 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21301_21371 = state_21249__$1;
(statearr_21301_21371[(2)] = inst_21176);

(statearr_21301_21371[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (2))){
var state_21249__$1 = state_21249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21249__$1,(4),ch);
} else {
if((state_val_21250 === (23))){
var state_21249__$1 = state_21249;
var statearr_21302_21372 = state_21249__$1;
(statearr_21302_21372[(2)] = null);

(statearr_21302_21372[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (35))){
var inst_21231 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21303_21373 = state_21249__$1;
(statearr_21303_21373[(2)] = inst_21231);

(statearr_21303_21373[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (19))){
var inst_21150 = (state_21249[(7)]);
var inst_21154 = cljs.core.chunk_first(inst_21150);
var inst_21155 = cljs.core.chunk_rest(inst_21150);
var inst_21156 = cljs.core.count(inst_21154);
var inst_21130 = inst_21155;
var inst_21131 = inst_21154;
var inst_21132 = inst_21156;
var inst_21133 = (0);
var state_21249__$1 = (function (){var statearr_21304 = state_21249;
(statearr_21304[(13)] = inst_21131);

(statearr_21304[(14)] = inst_21132);

(statearr_21304[(16)] = inst_21130);

(statearr_21304[(17)] = inst_21133);

return statearr_21304;
})();
var statearr_21305_21374 = state_21249__$1;
(statearr_21305_21374[(2)] = null);

(statearr_21305_21374[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (11))){
var inst_21150 = (state_21249[(7)]);
var inst_21130 = (state_21249[(16)]);
var inst_21150__$1 = cljs.core.seq(inst_21130);
var state_21249__$1 = (function (){var statearr_21306 = state_21249;
(statearr_21306[(7)] = inst_21150__$1);

return statearr_21306;
})();
if(inst_21150__$1){
var statearr_21307_21375 = state_21249__$1;
(statearr_21307_21375[(1)] = (16));

} else {
var statearr_21308_21376 = state_21249__$1;
(statearr_21308_21376[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (9))){
var inst_21178 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21309_21377 = state_21249__$1;
(statearr_21309_21377[(2)] = inst_21178);

(statearr_21309_21377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (5))){
var inst_21128 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_21129 = cljs.core.seq(inst_21128);
var inst_21130 = inst_21129;
var inst_21131 = null;
var inst_21132 = (0);
var inst_21133 = (0);
var state_21249__$1 = (function (){var statearr_21310 = state_21249;
(statearr_21310[(13)] = inst_21131);

(statearr_21310[(14)] = inst_21132);

(statearr_21310[(16)] = inst_21130);

(statearr_21310[(17)] = inst_21133);

return statearr_21310;
})();
var statearr_21311_21378 = state_21249__$1;
(statearr_21311_21378[(2)] = null);

(statearr_21311_21378[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (14))){
var state_21249__$1 = state_21249;
var statearr_21312_21379 = state_21249__$1;
(statearr_21312_21379[(2)] = null);

(statearr_21312_21379[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (45))){
var inst_21239 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21313_21380 = state_21249__$1;
(statearr_21313_21380[(2)] = inst_21239);

(statearr_21313_21380[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (26))){
var inst_21181 = (state_21249[(29)]);
var inst_21235 = (state_21249[(2)]);
var inst_21236 = cljs.core.seq(inst_21181);
var state_21249__$1 = (function (){var statearr_21314 = state_21249;
(statearr_21314[(31)] = inst_21235);

return statearr_21314;
})();
if(inst_21236){
var statearr_21315_21381 = state_21249__$1;
(statearr_21315_21381[(1)] = (42));

} else {
var statearr_21316_21382 = state_21249__$1;
(statearr_21316_21382[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (16))){
var inst_21150 = (state_21249[(7)]);
var inst_21152 = cljs.core.chunked_seq_QMARK_(inst_21150);
var state_21249__$1 = state_21249;
if(inst_21152){
var statearr_21317_21383 = state_21249__$1;
(statearr_21317_21383[(1)] = (19));

} else {
var statearr_21318_21384 = state_21249__$1;
(statearr_21318_21384[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (38))){
var inst_21228 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21319_21385 = state_21249__$1;
(statearr_21319_21385[(2)] = inst_21228);

(statearr_21319_21385[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (30))){
var state_21249__$1 = state_21249;
var statearr_21320_21386 = state_21249__$1;
(statearr_21320_21386[(2)] = null);

(statearr_21320_21386[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (10))){
var inst_21131 = (state_21249[(13)]);
var inst_21133 = (state_21249[(17)]);
var inst_21139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21131,inst_21133);
var inst_21140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21139,(0),null);
var inst_21141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21139,(1),null);
var state_21249__$1 = (function (){var statearr_21321 = state_21249;
(statearr_21321[(26)] = inst_21140);

return statearr_21321;
})();
if(cljs.core.truth_(inst_21141)){
var statearr_21322_21387 = state_21249__$1;
(statearr_21322_21387[(1)] = (13));

} else {
var statearr_21323_21388 = state_21249__$1;
(statearr_21323_21388[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (18))){
var inst_21174 = (state_21249[(2)]);
var state_21249__$1 = state_21249;
var statearr_21324_21389 = state_21249__$1;
(statearr_21324_21389[(2)] = inst_21174);

(statearr_21324_21389[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (42))){
var state_21249__$1 = state_21249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21249__$1,(45),dchan);
} else {
if((state_val_21250 === (37))){
var inst_21208 = (state_21249[(25)]);
var inst_21217 = (state_21249[(23)]);
var inst_21121 = (state_21249[(11)]);
var inst_21217__$1 = cljs.core.first(inst_21208);
var inst_21218 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21217__$1,inst_21121,done);
var state_21249__$1 = (function (){var statearr_21325 = state_21249;
(statearr_21325[(23)] = inst_21217__$1);

return statearr_21325;
})();
if(cljs.core.truth_(inst_21218)){
var statearr_21326_21390 = state_21249__$1;
(statearr_21326_21390[(1)] = (39));

} else {
var statearr_21327_21391 = state_21249__$1;
(statearr_21327_21391[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21250 === (8))){
var inst_21132 = (state_21249[(14)]);
var inst_21133 = (state_21249[(17)]);
var inst_21135 = (inst_21133 < inst_21132);
var inst_21136 = inst_21135;
var state_21249__$1 = state_21249;
if(cljs.core.truth_(inst_21136)){
var statearr_21328_21392 = state_21249__$1;
(statearr_21328_21392[(1)] = (10));

} else {
var statearr_21329_21393 = state_21249__$1;
(statearr_21329_21393[(1)] = (11));

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
});})(c__10081__auto___21339,cs,m,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10081__auto___21339,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10015__auto__ = null;
var cljs$core$async$mult_$_state_machine__10015__auto____0 = (function (){
var statearr_21333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21333[(0)] = cljs$core$async$mult_$_state_machine__10015__auto__);

(statearr_21333[(1)] = (1));

return statearr_21333;
});
var cljs$core$async$mult_$_state_machine__10015__auto____1 = (function (state_21249){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_21249);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e21334){if((e21334 instanceof Object)){
var ex__10018__auto__ = e21334;
var statearr_21335_21394 = state_21249;
(statearr_21335_21394[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21249);

return cljs.core.cst$kw$recur;
} else {
throw e21334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__21395 = state_21249;
state_21249 = G__21395;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10015__auto__ = function(state_21249){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10015__auto____1.call(this,state_21249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10015__auto____0;
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10015__auto____1;
return cljs$core$async$mult_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___21339,cs,m,dchan,dctr,done))
})();
var state__10083__auto__ = (function (){var statearr_21336 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_21336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___21339);

return statearr_21336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___21339,cs,m,dchan,dctr,done))
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
var args21396 = [];
var len__6152__auto___21399 = arguments.length;
var i__6153__auto___21400 = (0);
while(true){
if((i__6153__auto___21400 < len__6152__auto___21399)){
args21396.push((arguments[i__6153__auto___21400]));

var G__21401 = (i__6153__auto___21400 + (1));
i__6153__auto___21400 = G__21401;
continue;
} else {
}
break;
}

var G__21398 = args21396.length;
switch (G__21398) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21396.length)].join('')));

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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto__.call(null,m,ch));
} else {
var m__5750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto____$1.call(null,m,ch));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto__.call(null,m,ch));
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5750__auto____$1.call(null,m,ch));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5750__auto__.call(null,m));
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5750__auto____$1.call(null,m));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5750__auto__.call(null,m,state_map));
} else {
var m__5750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5750__auto____$1.call(null,m,state_map));
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5750__auto__.call(null,m,mode));
} else {
var m__5750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5750__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___21413 = arguments.length;
var i__6153__auto___21414 = (0);
while(true){
if((i__6153__auto___21414 < len__6152__auto___21413)){
args__6159__auto__.push((arguments[i__6153__auto___21414]));

var G__21415 = (i__6153__auto___21414 + (1));
i__6153__auto___21414 = G__21415;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21407){
var map__21408 = p__21407;
var map__21408__$1 = ((((!((map__21408 == null)))?((((map__21408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21408):map__21408);
var opts = map__21408__$1;
var statearr_21410_21416 = state;
(statearr_21410_21416[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__21408,map__21408__$1,opts){
return (function (val){
var statearr_21411_21417 = state;
(statearr_21411_21417[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21408,map__21408__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21412_21418 = state;
(statearr_21412_21418[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21403){
var G__21404 = cljs.core.first(seq21403);
var seq21403__$1 = cljs.core.next(seq21403);
var G__21405 = cljs.core.first(seq21403__$1);
var seq21403__$2 = cljs.core.next(seq21403__$1);
var G__21406 = cljs.core.first(seq21403__$2);
var seq21403__$3 = cljs.core.next(seq21403__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21404,G__21405,G__21406,seq21403__$3);
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
var cs = (function (){var G__21585 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21585) : cljs.core.atom.call(null,G__21585));
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
if(typeof cljs.core.async.t_cljs$core$async21586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21586 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21587){
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
this.meta21587 = meta21587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21588,meta21587__$1){
var self__ = this;
var _21588__$1 = this;
return (new cljs.core.async.t_cljs$core$async21586(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21587__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21588){
var self__ = this;
var _21588__$1 = this;
return self__.meta21587;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21589_21751 = self__.cs;
var G__21590_21752 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21589_21751,G__21590_21752) : cljs.core.reset_BANG_.call(null,G__21589_21751,G__21590_21752));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21586.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta21587], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21586";

cljs.core.async.t_cljs$core$async21586.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async21586");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21586 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21586(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21587){
return (new cljs.core.async.t_cljs$core$async21586(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21587));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21586(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10081__auto___21753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21688){
var state_val_21689 = (state_21688[(1)]);
if((state_val_21689 === (7))){
var inst_21606 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21690_21754 = state_21688__$1;
(statearr_21690_21754[(2)] = inst_21606);

(statearr_21690_21754[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (20))){
var inst_21618 = (state_21688[(7)]);
var state_21688__$1 = state_21688;
var statearr_21691_21755 = state_21688__$1;
(statearr_21691_21755[(2)] = inst_21618);

(statearr_21691_21755[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (27))){
var state_21688__$1 = state_21688;
var statearr_21692_21756 = state_21688__$1;
(statearr_21692_21756[(2)] = null);

(statearr_21692_21756[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (1))){
var inst_21594 = (state_21688[(8)]);
var inst_21594__$1 = calc_state();
var inst_21596 = (inst_21594__$1 == null);
var inst_21597 = cljs.core.not(inst_21596);
var state_21688__$1 = (function (){var statearr_21693 = state_21688;
(statearr_21693[(8)] = inst_21594__$1);

return statearr_21693;
})();
if(inst_21597){
var statearr_21694_21757 = state_21688__$1;
(statearr_21694_21757[(1)] = (2));

} else {
var statearr_21695_21758 = state_21688__$1;
(statearr_21695_21758[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (24))){
var inst_21648 = (state_21688[(9)]);
var inst_21662 = (state_21688[(10)]);
var inst_21641 = (state_21688[(11)]);
var inst_21662__$1 = (inst_21641.cljs$core$IFn$_invoke$arity$1 ? inst_21641.cljs$core$IFn$_invoke$arity$1(inst_21648) : inst_21641.call(null,inst_21648));
var state_21688__$1 = (function (){var statearr_21696 = state_21688;
(statearr_21696[(10)] = inst_21662__$1);

return statearr_21696;
})();
if(cljs.core.truth_(inst_21662__$1)){
var statearr_21697_21759 = state_21688__$1;
(statearr_21697_21759[(1)] = (29));

} else {
var statearr_21698_21760 = state_21688__$1;
(statearr_21698_21760[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (4))){
var inst_21609 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21609)){
var statearr_21699_21761 = state_21688__$1;
(statearr_21699_21761[(1)] = (8));

} else {
var statearr_21700_21762 = state_21688__$1;
(statearr_21700_21762[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (15))){
var inst_21635 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21635)){
var statearr_21701_21763 = state_21688__$1;
(statearr_21701_21763[(1)] = (19));

} else {
var statearr_21702_21764 = state_21688__$1;
(statearr_21702_21764[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (21))){
var inst_21640 = (state_21688[(12)]);
var inst_21640__$1 = (state_21688[(2)]);
var inst_21641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21640__$1,cljs.core.cst$kw$solos);
var inst_21642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21640__$1,cljs.core.cst$kw$mutes);
var inst_21643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21640__$1,cljs.core.cst$kw$reads);
var state_21688__$1 = (function (){var statearr_21703 = state_21688;
(statearr_21703[(13)] = inst_21642);

(statearr_21703[(12)] = inst_21640__$1);

(statearr_21703[(11)] = inst_21641);

return statearr_21703;
})();
return cljs.core.async.ioc_alts_BANG_(state_21688__$1,(22),inst_21643);
} else {
if((state_val_21689 === (31))){
var inst_21670 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21670)){
var statearr_21704_21765 = state_21688__$1;
(statearr_21704_21765[(1)] = (32));

} else {
var statearr_21705_21766 = state_21688__$1;
(statearr_21705_21766[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (32))){
var inst_21647 = (state_21688[(14)]);
var state_21688__$1 = state_21688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21688__$1,(35),out,inst_21647);
} else {
if((state_val_21689 === (33))){
var inst_21640 = (state_21688[(12)]);
var inst_21618 = inst_21640;
var state_21688__$1 = (function (){var statearr_21706 = state_21688;
(statearr_21706[(7)] = inst_21618);

return statearr_21706;
})();
var statearr_21707_21767 = state_21688__$1;
(statearr_21707_21767[(2)] = null);

(statearr_21707_21767[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (13))){
var inst_21618 = (state_21688[(7)]);
var inst_21625 = inst_21618.cljs$lang$protocol_mask$partition0$;
var inst_21626 = (inst_21625 & (64));
var inst_21627 = inst_21618.cljs$core$ISeq$;
var inst_21628 = (inst_21626) || (inst_21627);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21628)){
var statearr_21708_21768 = state_21688__$1;
(statearr_21708_21768[(1)] = (16));

} else {
var statearr_21709_21769 = state_21688__$1;
(statearr_21709_21769[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (22))){
var inst_21648 = (state_21688[(9)]);
var inst_21647 = (state_21688[(14)]);
var inst_21646 = (state_21688[(2)]);
var inst_21647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21646,(0),null);
var inst_21648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21646,(1),null);
var inst_21649 = (inst_21647__$1 == null);
var inst_21650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21648__$1,change);
var inst_21651 = (inst_21649) || (inst_21650);
var state_21688__$1 = (function (){var statearr_21710 = state_21688;
(statearr_21710[(9)] = inst_21648__$1);

(statearr_21710[(14)] = inst_21647__$1);

return statearr_21710;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21711_21770 = state_21688__$1;
(statearr_21711_21770[(1)] = (23));

} else {
var statearr_21712_21771 = state_21688__$1;
(statearr_21712_21771[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (36))){
var inst_21640 = (state_21688[(12)]);
var inst_21618 = inst_21640;
var state_21688__$1 = (function (){var statearr_21713 = state_21688;
(statearr_21713[(7)] = inst_21618);

return statearr_21713;
})();
var statearr_21714_21772 = state_21688__$1;
(statearr_21714_21772[(2)] = null);

(statearr_21714_21772[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (29))){
var inst_21662 = (state_21688[(10)]);
var state_21688__$1 = state_21688;
var statearr_21715_21773 = state_21688__$1;
(statearr_21715_21773[(2)] = inst_21662);

(statearr_21715_21773[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (6))){
var state_21688__$1 = state_21688;
var statearr_21716_21774 = state_21688__$1;
(statearr_21716_21774[(2)] = false);

(statearr_21716_21774[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (28))){
var inst_21658 = (state_21688[(2)]);
var inst_21659 = calc_state();
var inst_21618 = inst_21659;
var state_21688__$1 = (function (){var statearr_21717 = state_21688;
(statearr_21717[(15)] = inst_21658);

(statearr_21717[(7)] = inst_21618);

return statearr_21717;
})();
var statearr_21718_21775 = state_21688__$1;
(statearr_21718_21775[(2)] = null);

(statearr_21718_21775[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (25))){
var inst_21684 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21719_21776 = state_21688__$1;
(statearr_21719_21776[(2)] = inst_21684);

(statearr_21719_21776[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (34))){
var inst_21682 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21720_21777 = state_21688__$1;
(statearr_21720_21777[(2)] = inst_21682);

(statearr_21720_21777[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (17))){
var state_21688__$1 = state_21688;
var statearr_21721_21778 = state_21688__$1;
(statearr_21721_21778[(2)] = false);

(statearr_21721_21778[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (3))){
var state_21688__$1 = state_21688;
var statearr_21722_21779 = state_21688__$1;
(statearr_21722_21779[(2)] = false);

(statearr_21722_21779[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (12))){
var inst_21686 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21688__$1,inst_21686);
} else {
if((state_val_21689 === (2))){
var inst_21594 = (state_21688[(8)]);
var inst_21599 = inst_21594.cljs$lang$protocol_mask$partition0$;
var inst_21600 = (inst_21599 & (64));
var inst_21601 = inst_21594.cljs$core$ISeq$;
var inst_21602 = (inst_21600) || (inst_21601);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21602)){
var statearr_21723_21780 = state_21688__$1;
(statearr_21723_21780[(1)] = (5));

} else {
var statearr_21724_21781 = state_21688__$1;
(statearr_21724_21781[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (23))){
var inst_21647 = (state_21688[(14)]);
var inst_21653 = (inst_21647 == null);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21653)){
var statearr_21725_21782 = state_21688__$1;
(statearr_21725_21782[(1)] = (26));

} else {
var statearr_21726_21783 = state_21688__$1;
(statearr_21726_21783[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (35))){
var inst_21673 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21673)){
var statearr_21727_21784 = state_21688__$1;
(statearr_21727_21784[(1)] = (36));

} else {
var statearr_21728_21785 = state_21688__$1;
(statearr_21728_21785[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (19))){
var inst_21618 = (state_21688[(7)]);
var inst_21637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21618);
var state_21688__$1 = state_21688;
var statearr_21729_21786 = state_21688__$1;
(statearr_21729_21786[(2)] = inst_21637);

(statearr_21729_21786[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (11))){
var inst_21618 = (state_21688[(7)]);
var inst_21622 = (inst_21618 == null);
var inst_21623 = cljs.core.not(inst_21622);
var state_21688__$1 = state_21688;
if(inst_21623){
var statearr_21730_21787 = state_21688__$1;
(statearr_21730_21787[(1)] = (13));

} else {
var statearr_21731_21788 = state_21688__$1;
(statearr_21731_21788[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (9))){
var inst_21594 = (state_21688[(8)]);
var state_21688__$1 = state_21688;
var statearr_21732_21789 = state_21688__$1;
(statearr_21732_21789[(2)] = inst_21594);

(statearr_21732_21789[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (5))){
var state_21688__$1 = state_21688;
var statearr_21733_21790 = state_21688__$1;
(statearr_21733_21790[(2)] = true);

(statearr_21733_21790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (14))){
var state_21688__$1 = state_21688;
var statearr_21734_21791 = state_21688__$1;
(statearr_21734_21791[(2)] = false);

(statearr_21734_21791[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (26))){
var inst_21648 = (state_21688[(9)]);
var inst_21655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21648);
var state_21688__$1 = state_21688;
var statearr_21735_21792 = state_21688__$1;
(statearr_21735_21792[(2)] = inst_21655);

(statearr_21735_21792[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (16))){
var state_21688__$1 = state_21688;
var statearr_21736_21793 = state_21688__$1;
(statearr_21736_21793[(2)] = true);

(statearr_21736_21793[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (38))){
var inst_21678 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21737_21794 = state_21688__$1;
(statearr_21737_21794[(2)] = inst_21678);

(statearr_21737_21794[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (30))){
var inst_21642 = (state_21688[(13)]);
var inst_21648 = (state_21688[(9)]);
var inst_21641 = (state_21688[(11)]);
var inst_21665 = cljs.core.empty_QMARK_(inst_21641);
var inst_21666 = (inst_21642.cljs$core$IFn$_invoke$arity$1 ? inst_21642.cljs$core$IFn$_invoke$arity$1(inst_21648) : inst_21642.call(null,inst_21648));
var inst_21667 = cljs.core.not(inst_21666);
var inst_21668 = (inst_21665) && (inst_21667);
var state_21688__$1 = state_21688;
var statearr_21738_21795 = state_21688__$1;
(statearr_21738_21795[(2)] = inst_21668);

(statearr_21738_21795[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (10))){
var inst_21594 = (state_21688[(8)]);
var inst_21614 = (state_21688[(2)]);
var inst_21615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21614,cljs.core.cst$kw$solos);
var inst_21616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21614,cljs.core.cst$kw$mutes);
var inst_21617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21614,cljs.core.cst$kw$reads);
var inst_21618 = inst_21594;
var state_21688__$1 = (function (){var statearr_21739 = state_21688;
(statearr_21739[(7)] = inst_21618);

(statearr_21739[(16)] = inst_21616);

(statearr_21739[(17)] = inst_21617);

(statearr_21739[(18)] = inst_21615);

return statearr_21739;
})();
var statearr_21740_21796 = state_21688__$1;
(statearr_21740_21796[(2)] = null);

(statearr_21740_21796[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (18))){
var inst_21632 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21741_21797 = state_21688__$1;
(statearr_21741_21797[(2)] = inst_21632);

(statearr_21741_21797[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (37))){
var state_21688__$1 = state_21688;
var statearr_21742_21798 = state_21688__$1;
(statearr_21742_21798[(2)] = null);

(statearr_21742_21798[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21689 === (8))){
var inst_21594 = (state_21688[(8)]);
var inst_21611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21594);
var state_21688__$1 = state_21688;
var statearr_21743_21799 = state_21688__$1;
(statearr_21743_21799[(2)] = inst_21611);

(statearr_21743_21799[(1)] = (10));


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
});})(c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10014__auto__,c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10015__auto__ = null;
var cljs$core$async$mix_$_state_machine__10015__auto____0 = (function (){
var statearr_21747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21747[(0)] = cljs$core$async$mix_$_state_machine__10015__auto__);

(statearr_21747[(1)] = (1));

return statearr_21747;
});
var cljs$core$async$mix_$_state_machine__10015__auto____1 = (function (state_21688){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_21688);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e21748){if((e21748 instanceof Object)){
var ex__10018__auto__ = e21748;
var statearr_21749_21800 = state_21688;
(statearr_21749_21800[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21688);

return cljs.core.cst$kw$recur;
} else {
throw e21748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__21801 = state_21688;
state_21688 = G__21801;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10015__auto__ = function(state_21688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10015__auto____1.call(this,state_21688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10015__auto____0;
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10015__auto____1;
return cljs$core$async$mix_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10083__auto__ = (function (){var statearr_21750 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_21750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___21753);

return statearr_21750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___21753,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5750__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5750__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5750__auto__.call(null,p,v,ch));
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5750__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21802 = [];
var len__6152__auto___21805 = arguments.length;
var i__6153__auto___21806 = (0);
while(true){
if((i__6153__auto___21806 < len__6152__auto___21805)){
args21802.push((arguments[i__6153__auto___21806]));

var G__21807 = (i__6153__auto___21806 + (1));
i__6153__auto___21806 = G__21807;
continue;
} else {
}
break;
}

var G__21804 = args21802.length;
switch (G__21804) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21802.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5750__auto__.call(null,p));
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5750__auto____$1.call(null,p));
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5750__auto__.call(null,p,v));
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5750__auto____$1.call(null,p,v));
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
var args21810 = [];
var len__6152__auto___21938 = arguments.length;
var i__6153__auto___21939 = (0);
while(true){
if((i__6153__auto___21939 < len__6152__auto___21938)){
args21810.push((arguments[i__6153__auto___21939]));

var G__21940 = (i__6153__auto___21939 + (1));
i__6153__auto___21939 = G__21940;
continue;
} else {
}
break;
}

var G__21812 = args21810.length;
switch (G__21812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21810.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__21813 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21813) : cljs.core.atom.call(null,G__21813));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5094__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5094__auto__,mults){
return (function (p1__21809_SHARP_){
if(cljs.core.truth_((p1__21809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21809_SHARP_.call(null,topic)))){
return p1__21809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21814 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21815){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21815 = meta21815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21816,meta21815__$1){
var self__ = this;
var _21816__$1 = this;
return (new cljs.core.async.t_cljs$core$async21814(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21815__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21816){
var self__ = this;
var _21816__$1 = this;
return self__.meta21815;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21817 = self__.mults;
var G__21818 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21817,G__21818) : cljs.core.reset_BANG_.call(null,G__21817,G__21818));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta21815], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21814";

cljs.core.async.t_cljs$core$async21814.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async21814");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21814 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21814(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21815){
return (new cljs.core.async.t_cljs$core$async21814(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21815));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21814(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10081__auto___21942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___21942,mults,ensure_mult,p){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___21942,mults,ensure_mult,p){
return (function (state_21890){
var state_val_21891 = (state_21890[(1)]);
if((state_val_21891 === (7))){
var inst_21886 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21892_21943 = state_21890__$1;
(statearr_21892_21943[(2)] = inst_21886);

(statearr_21892_21943[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (20))){
var state_21890__$1 = state_21890;
var statearr_21893_21944 = state_21890__$1;
(statearr_21893_21944[(2)] = null);

(statearr_21893_21944[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (1))){
var state_21890__$1 = state_21890;
var statearr_21894_21945 = state_21890__$1;
(statearr_21894_21945[(2)] = null);

(statearr_21894_21945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (24))){
var inst_21869 = (state_21890[(7)]);
var inst_21878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21869);
var state_21890__$1 = state_21890;
var statearr_21895_21946 = state_21890__$1;
(statearr_21895_21946[(2)] = inst_21878);

(statearr_21895_21946[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (4))){
var inst_21821 = (state_21890[(8)]);
var inst_21821__$1 = (state_21890[(2)]);
var inst_21822 = (inst_21821__$1 == null);
var state_21890__$1 = (function (){var statearr_21896 = state_21890;
(statearr_21896[(8)] = inst_21821__$1);

return statearr_21896;
})();
if(cljs.core.truth_(inst_21822)){
var statearr_21897_21947 = state_21890__$1;
(statearr_21897_21947[(1)] = (5));

} else {
var statearr_21898_21948 = state_21890__$1;
(statearr_21898_21948[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (15))){
var inst_21863 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21899_21949 = state_21890__$1;
(statearr_21899_21949[(2)] = inst_21863);

(statearr_21899_21949[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (21))){
var inst_21883 = (state_21890[(2)]);
var state_21890__$1 = (function (){var statearr_21900 = state_21890;
(statearr_21900[(9)] = inst_21883);

return statearr_21900;
})();
var statearr_21901_21950 = state_21890__$1;
(statearr_21901_21950[(2)] = null);

(statearr_21901_21950[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (13))){
var inst_21845 = (state_21890[(10)]);
var inst_21847 = cljs.core.chunked_seq_QMARK_(inst_21845);
var state_21890__$1 = state_21890;
if(inst_21847){
var statearr_21902_21951 = state_21890__$1;
(statearr_21902_21951[(1)] = (16));

} else {
var statearr_21903_21952 = state_21890__$1;
(statearr_21903_21952[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (22))){
var inst_21875 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
if(cljs.core.truth_(inst_21875)){
var statearr_21904_21953 = state_21890__$1;
(statearr_21904_21953[(1)] = (23));

} else {
var statearr_21905_21954 = state_21890__$1;
(statearr_21905_21954[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (6))){
var inst_21869 = (state_21890[(7)]);
var inst_21871 = (state_21890[(11)]);
var inst_21821 = (state_21890[(8)]);
var inst_21869__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21821) : topic_fn.call(null,inst_21821));
var inst_21870 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_21871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21870,inst_21869__$1);
var state_21890__$1 = (function (){var statearr_21906 = state_21890;
(statearr_21906[(7)] = inst_21869__$1);

(statearr_21906[(11)] = inst_21871__$1);

return statearr_21906;
})();
if(cljs.core.truth_(inst_21871__$1)){
var statearr_21907_21955 = state_21890__$1;
(statearr_21907_21955[(1)] = (19));

} else {
var statearr_21908_21956 = state_21890__$1;
(statearr_21908_21956[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (25))){
var inst_21880 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21909_21957 = state_21890__$1;
(statearr_21909_21957[(2)] = inst_21880);

(statearr_21909_21957[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (17))){
var inst_21845 = (state_21890[(10)]);
var inst_21854 = cljs.core.first(inst_21845);
var inst_21855 = cljs.core.async.muxch_STAR_(inst_21854);
var inst_21856 = cljs.core.async.close_BANG_(inst_21855);
var inst_21857 = cljs.core.next(inst_21845);
var inst_21831 = inst_21857;
var inst_21832 = null;
var inst_21833 = (0);
var inst_21834 = (0);
var state_21890__$1 = (function (){var statearr_21910 = state_21890;
(statearr_21910[(12)] = inst_21856);

(statearr_21910[(13)] = inst_21832);

(statearr_21910[(14)] = inst_21831);

(statearr_21910[(15)] = inst_21833);

(statearr_21910[(16)] = inst_21834);

return statearr_21910;
})();
var statearr_21911_21958 = state_21890__$1;
(statearr_21911_21958[(2)] = null);

(statearr_21911_21958[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (3))){
var inst_21888 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21890__$1,inst_21888);
} else {
if((state_val_21891 === (12))){
var inst_21865 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21912_21959 = state_21890__$1;
(statearr_21912_21959[(2)] = inst_21865);

(statearr_21912_21959[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (2))){
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21890__$1,(4),ch);
} else {
if((state_val_21891 === (23))){
var state_21890__$1 = state_21890;
var statearr_21913_21960 = state_21890__$1;
(statearr_21913_21960[(2)] = null);

(statearr_21913_21960[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (19))){
var inst_21871 = (state_21890[(11)]);
var inst_21821 = (state_21890[(8)]);
var inst_21873 = cljs.core.async.muxch_STAR_(inst_21871);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21890__$1,(22),inst_21873,inst_21821);
} else {
if((state_val_21891 === (11))){
var inst_21845 = (state_21890[(10)]);
var inst_21831 = (state_21890[(14)]);
var inst_21845__$1 = cljs.core.seq(inst_21831);
var state_21890__$1 = (function (){var statearr_21914 = state_21890;
(statearr_21914[(10)] = inst_21845__$1);

return statearr_21914;
})();
if(inst_21845__$1){
var statearr_21915_21961 = state_21890__$1;
(statearr_21915_21961[(1)] = (13));

} else {
var statearr_21916_21962 = state_21890__$1;
(statearr_21916_21962[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (9))){
var inst_21867 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21917_21963 = state_21890__$1;
(statearr_21917_21963[(2)] = inst_21867);

(statearr_21917_21963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (5))){
var inst_21828 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_21829 = cljs.core.vals(inst_21828);
var inst_21830 = cljs.core.seq(inst_21829);
var inst_21831 = inst_21830;
var inst_21832 = null;
var inst_21833 = (0);
var inst_21834 = (0);
var state_21890__$1 = (function (){var statearr_21918 = state_21890;
(statearr_21918[(13)] = inst_21832);

(statearr_21918[(14)] = inst_21831);

(statearr_21918[(15)] = inst_21833);

(statearr_21918[(16)] = inst_21834);

return statearr_21918;
})();
var statearr_21919_21964 = state_21890__$1;
(statearr_21919_21964[(2)] = null);

(statearr_21919_21964[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (14))){
var state_21890__$1 = state_21890;
var statearr_21923_21965 = state_21890__$1;
(statearr_21923_21965[(2)] = null);

(statearr_21923_21965[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (16))){
var inst_21845 = (state_21890[(10)]);
var inst_21849 = cljs.core.chunk_first(inst_21845);
var inst_21850 = cljs.core.chunk_rest(inst_21845);
var inst_21851 = cljs.core.count(inst_21849);
var inst_21831 = inst_21850;
var inst_21832 = inst_21849;
var inst_21833 = inst_21851;
var inst_21834 = (0);
var state_21890__$1 = (function (){var statearr_21924 = state_21890;
(statearr_21924[(13)] = inst_21832);

(statearr_21924[(14)] = inst_21831);

(statearr_21924[(15)] = inst_21833);

(statearr_21924[(16)] = inst_21834);

return statearr_21924;
})();
var statearr_21925_21966 = state_21890__$1;
(statearr_21925_21966[(2)] = null);

(statearr_21925_21966[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (10))){
var inst_21832 = (state_21890[(13)]);
var inst_21831 = (state_21890[(14)]);
var inst_21833 = (state_21890[(15)]);
var inst_21834 = (state_21890[(16)]);
var inst_21839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21832,inst_21834);
var inst_21840 = cljs.core.async.muxch_STAR_(inst_21839);
var inst_21841 = cljs.core.async.close_BANG_(inst_21840);
var inst_21842 = (inst_21834 + (1));
var tmp21920 = inst_21832;
var tmp21921 = inst_21831;
var tmp21922 = inst_21833;
var inst_21831__$1 = tmp21921;
var inst_21832__$1 = tmp21920;
var inst_21833__$1 = tmp21922;
var inst_21834__$1 = inst_21842;
var state_21890__$1 = (function (){var statearr_21926 = state_21890;
(statearr_21926[(13)] = inst_21832__$1);

(statearr_21926[(14)] = inst_21831__$1);

(statearr_21926[(17)] = inst_21841);

(statearr_21926[(15)] = inst_21833__$1);

(statearr_21926[(16)] = inst_21834__$1);

return statearr_21926;
})();
var statearr_21927_21967 = state_21890__$1;
(statearr_21927_21967[(2)] = null);

(statearr_21927_21967[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (18))){
var inst_21860 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21928_21968 = state_21890__$1;
(statearr_21928_21968[(2)] = inst_21860);

(statearr_21928_21968[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21891 === (8))){
var inst_21833 = (state_21890[(15)]);
var inst_21834 = (state_21890[(16)]);
var inst_21836 = (inst_21834 < inst_21833);
var inst_21837 = inst_21836;
var state_21890__$1 = state_21890;
if(cljs.core.truth_(inst_21837)){
var statearr_21929_21969 = state_21890__$1;
(statearr_21929_21969[(1)] = (10));

} else {
var statearr_21930_21970 = state_21890__$1;
(statearr_21930_21970[(1)] = (11));

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
});})(c__10081__auto___21942,mults,ensure_mult,p))
;
return ((function (switch__10014__auto__,c__10081__auto___21942,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_21934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21934[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_21934[(1)] = (1));

return statearr_21934;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_21890){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_21890);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e21935){if((e21935 instanceof Object)){
var ex__10018__auto__ = e21935;
var statearr_21936_21971 = state_21890;
(statearr_21936_21971[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21890);

return cljs.core.cst$kw$recur;
} else {
throw e21935;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__21972 = state_21890;
state_21890 = G__21972;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_21890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_21890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___21942,mults,ensure_mult,p))
})();
var state__10083__auto__ = (function (){var statearr_21937 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_21937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___21942);

return statearr_21937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___21942,mults,ensure_mult,p))
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
var args21973 = [];
var len__6152__auto___21976 = arguments.length;
var i__6153__auto___21977 = (0);
while(true){
if((i__6153__auto___21977 < len__6152__auto___21976)){
args21973.push((arguments[i__6153__auto___21977]));

var G__21978 = (i__6153__auto___21977 + (1));
i__6153__auto___21977 = G__21978;
continue;
} else {
}
break;
}

var G__21975 = args21973.length;
switch (G__21975) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21973.length)].join('')));

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
var args21980 = [];
var len__6152__auto___21983 = arguments.length;
var i__6153__auto___21984 = (0);
while(true){
if((i__6153__auto___21984 < len__6152__auto___21983)){
args21980.push((arguments[i__6153__auto___21984]));

var G__21985 = (i__6153__auto___21984 + (1));
i__6153__auto___21984 = G__21985;
continue;
} else {
}
break;
}

var G__21982 = args21980.length;
switch (G__21982) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21980.length)].join('')));

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
var args21987 = [];
var len__6152__auto___22058 = arguments.length;
var i__6153__auto___22059 = (0);
while(true){
if((i__6153__auto___22059 < len__6152__auto___22058)){
args21987.push((arguments[i__6153__auto___22059]));

var G__22060 = (i__6153__auto___22059 + (1));
i__6153__auto___22059 = G__22060;
continue;
} else {
}
break;
}

var G__21989 = args21987.length;
switch (G__21989) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21987.length)].join('')));

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
var c__10081__auto___22062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22028){
var state_val_22029 = (state_22028[(1)]);
if((state_val_22029 === (7))){
var state_22028__$1 = state_22028;
var statearr_22030_22063 = state_22028__$1;
(statearr_22030_22063[(2)] = null);

(statearr_22030_22063[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (1))){
var state_22028__$1 = state_22028;
var statearr_22031_22064 = state_22028__$1;
(statearr_22031_22064[(2)] = null);

(statearr_22031_22064[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (4))){
var inst_21992 = (state_22028[(7)]);
var inst_21994 = (inst_21992 < cnt);
var state_22028__$1 = state_22028;
if(cljs.core.truth_(inst_21994)){
var statearr_22032_22065 = state_22028__$1;
(statearr_22032_22065[(1)] = (6));

} else {
var statearr_22033_22066 = state_22028__$1;
(statearr_22033_22066[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (15))){
var inst_22024 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
var statearr_22034_22067 = state_22028__$1;
(statearr_22034_22067[(2)] = inst_22024);

(statearr_22034_22067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (13))){
var inst_22017 = cljs.core.async.close_BANG_(out);
var state_22028__$1 = state_22028;
var statearr_22035_22068 = state_22028__$1;
(statearr_22035_22068[(2)] = inst_22017);

(statearr_22035_22068[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (6))){
var state_22028__$1 = state_22028;
var statearr_22036_22069 = state_22028__$1;
(statearr_22036_22069[(2)] = null);

(statearr_22036_22069[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (3))){
var inst_22026 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22028__$1,inst_22026);
} else {
if((state_val_22029 === (12))){
var inst_22014 = (state_22028[(8)]);
var inst_22014__$1 = (state_22028[(2)]);
var inst_22015 = cljs.core.some(cljs.core.nil_QMARK_,inst_22014__$1);
var state_22028__$1 = (function (){var statearr_22037 = state_22028;
(statearr_22037[(8)] = inst_22014__$1);

return statearr_22037;
})();
if(cljs.core.truth_(inst_22015)){
var statearr_22038_22070 = state_22028__$1;
(statearr_22038_22070[(1)] = (13));

} else {
var statearr_22039_22071 = state_22028__$1;
(statearr_22039_22071[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (2))){
var inst_21991 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_21992 = (0);
var state_22028__$1 = (function (){var statearr_22040 = state_22028;
(statearr_22040[(7)] = inst_21992);

(statearr_22040[(9)] = inst_21991);

return statearr_22040;
})();
var statearr_22041_22072 = state_22028__$1;
(statearr_22041_22072[(2)] = null);

(statearr_22041_22072[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (11))){
var inst_21992 = (state_22028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22028,(10),Object,null,(9));
var inst_22001 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_21992) : chs__$1.call(null,inst_21992));
var inst_22002 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_21992) : done.call(null,inst_21992));
var inst_22003 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22001,inst_22002);
var state_22028__$1 = state_22028;
var statearr_22042_22073 = state_22028__$1;
(statearr_22042_22073[(2)] = inst_22003);


cljs.core.async.impl.ioc_helpers.process_exception(state_22028__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (9))){
var inst_21992 = (state_22028[(7)]);
var inst_22005 = (state_22028[(2)]);
var inst_22006 = (inst_21992 + (1));
var inst_21992__$1 = inst_22006;
var state_22028__$1 = (function (){var statearr_22043 = state_22028;
(statearr_22043[(7)] = inst_21992__$1);

(statearr_22043[(10)] = inst_22005);

return statearr_22043;
})();
var statearr_22044_22074 = state_22028__$1;
(statearr_22044_22074[(2)] = null);

(statearr_22044_22074[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (5))){
var inst_22012 = (state_22028[(2)]);
var state_22028__$1 = (function (){var statearr_22045 = state_22028;
(statearr_22045[(11)] = inst_22012);

return statearr_22045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22028__$1,(12),dchan);
} else {
if((state_val_22029 === (14))){
var inst_22014 = (state_22028[(8)]);
var inst_22019 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22014);
var state_22028__$1 = state_22028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22028__$1,(16),out,inst_22019);
} else {
if((state_val_22029 === (16))){
var inst_22021 = (state_22028[(2)]);
var state_22028__$1 = (function (){var statearr_22046 = state_22028;
(statearr_22046[(12)] = inst_22021);

return statearr_22046;
})();
var statearr_22047_22075 = state_22028__$1;
(statearr_22047_22075[(2)] = null);

(statearr_22047_22075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (10))){
var inst_21996 = (state_22028[(2)]);
var inst_21997 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22028__$1 = (function (){var statearr_22048 = state_22028;
(statearr_22048[(13)] = inst_21996);

return statearr_22048;
})();
var statearr_22049_22076 = state_22028__$1;
(statearr_22049_22076[(2)] = inst_21997);


cljs.core.async.impl.ioc_helpers.process_exception(state_22028__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22029 === (8))){
var inst_22010 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
var statearr_22050_22077 = state_22028__$1;
(statearr_22050_22077[(2)] = inst_22010);

(statearr_22050_22077[(1)] = (5));


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
});})(c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22028){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22028);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__10018__auto__ = e22055;
var statearr_22056_22078 = state_22028;
(statearr_22056_22078[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22028);

return cljs.core.cst$kw$recur;
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22079 = state_22028;
state_22028 = G__22079;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10083__auto__ = (function (){var statearr_22057 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22062);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22081 = [];
var len__6152__auto___22137 = arguments.length;
var i__6153__auto___22138 = (0);
while(true){
if((i__6153__auto___22138 < len__6152__auto___22137)){
args22081.push((arguments[i__6153__auto___22138]));

var G__22139 = (i__6153__auto___22138 + (1));
i__6153__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var G__22083 = args22081.length;
switch (G__22083) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22081.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22141,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22141,out){
return (function (state_22113){
var state_val_22114 = (state_22113[(1)]);
if((state_val_22114 === (7))){
var inst_22092 = (state_22113[(7)]);
var inst_22093 = (state_22113[(8)]);
var inst_22092__$1 = (state_22113[(2)]);
var inst_22093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22092__$1,(0),null);
var inst_22094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22092__$1,(1),null);
var inst_22095 = (inst_22093__$1 == null);
var state_22113__$1 = (function (){var statearr_22115 = state_22113;
(statearr_22115[(7)] = inst_22092__$1);

(statearr_22115[(8)] = inst_22093__$1);

(statearr_22115[(9)] = inst_22094);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22095)){
var statearr_22116_22142 = state_22113__$1;
(statearr_22116_22142[(1)] = (8));

} else {
var statearr_22117_22143 = state_22113__$1;
(statearr_22117_22143[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (1))){
var inst_22084 = cljs.core.vec(chs);
var inst_22085 = inst_22084;
var state_22113__$1 = (function (){var statearr_22118 = state_22113;
(statearr_22118[(10)] = inst_22085);

return statearr_22118;
})();
var statearr_22119_22144 = state_22113__$1;
(statearr_22119_22144[(2)] = null);

(statearr_22119_22144[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (4))){
var inst_22085 = (state_22113[(10)]);
var state_22113__$1 = state_22113;
return cljs.core.async.ioc_alts_BANG_(state_22113__$1,(7),inst_22085);
} else {
if((state_val_22114 === (6))){
var inst_22109 = (state_22113[(2)]);
var state_22113__$1 = state_22113;
var statearr_22120_22145 = state_22113__$1;
(statearr_22120_22145[(2)] = inst_22109);

(statearr_22120_22145[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (3))){
var inst_22111 = (state_22113[(2)]);
var state_22113__$1 = state_22113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22113__$1,inst_22111);
} else {
if((state_val_22114 === (2))){
var inst_22085 = (state_22113[(10)]);
var inst_22087 = cljs.core.count(inst_22085);
var inst_22088 = (inst_22087 > (0));
var state_22113__$1 = state_22113;
if(cljs.core.truth_(inst_22088)){
var statearr_22122_22146 = state_22113__$1;
(statearr_22122_22146[(1)] = (4));

} else {
var statearr_22123_22147 = state_22113__$1;
(statearr_22123_22147[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (11))){
var inst_22085 = (state_22113[(10)]);
var inst_22102 = (state_22113[(2)]);
var tmp22121 = inst_22085;
var inst_22085__$1 = tmp22121;
var state_22113__$1 = (function (){var statearr_22124 = state_22113;
(statearr_22124[(10)] = inst_22085__$1);

(statearr_22124[(11)] = inst_22102);

return statearr_22124;
})();
var statearr_22125_22148 = state_22113__$1;
(statearr_22125_22148[(2)] = null);

(statearr_22125_22148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (9))){
var inst_22093 = (state_22113[(8)]);
var state_22113__$1 = state_22113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22113__$1,(11),out,inst_22093);
} else {
if((state_val_22114 === (5))){
var inst_22107 = cljs.core.async.close_BANG_(out);
var state_22113__$1 = state_22113;
var statearr_22126_22149 = state_22113__$1;
(statearr_22126_22149[(2)] = inst_22107);

(statearr_22126_22149[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (10))){
var inst_22105 = (state_22113[(2)]);
var state_22113__$1 = state_22113;
var statearr_22127_22150 = state_22113__$1;
(statearr_22127_22150[(2)] = inst_22105);

(statearr_22127_22150[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22114 === (8))){
var inst_22092 = (state_22113[(7)]);
var inst_22093 = (state_22113[(8)]);
var inst_22094 = (state_22113[(9)]);
var inst_22085 = (state_22113[(10)]);
var inst_22097 = (function (){var cs = inst_22085;
var vec__22090 = inst_22092;
var v = inst_22093;
var c = inst_22094;
return ((function (cs,vec__22090,v,c,inst_22092,inst_22093,inst_22094,inst_22085,state_val_22114,c__10081__auto___22141,out){
return (function (p1__22080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22080_SHARP_);
});
;})(cs,vec__22090,v,c,inst_22092,inst_22093,inst_22094,inst_22085,state_val_22114,c__10081__auto___22141,out))
})();
var inst_22098 = cljs.core.filterv(inst_22097,inst_22085);
var inst_22085__$1 = inst_22098;
var state_22113__$1 = (function (){var statearr_22128 = state_22113;
(statearr_22128[(10)] = inst_22085__$1);

return statearr_22128;
})();
var statearr_22129_22151 = state_22113__$1;
(statearr_22129_22151[(2)] = null);

(statearr_22129_22151[(1)] = (2));


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
});})(c__10081__auto___22141,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22141,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22133 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22133[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22133[(1)] = (1));

return statearr_22133;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22113){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22113);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22134){if((e22134 instanceof Object)){
var ex__10018__auto__ = e22134;
var statearr_22135_22152 = state_22113;
(statearr_22135_22152[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22113);

return cljs.core.cst$kw$recur;
} else {
throw e22134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22153 = state_22113;
state_22113 = G__22153;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22141,out))
})();
var state__10083__auto__ = (function (){var statearr_22136 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22141);

return statearr_22136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22141,out))
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
var args22154 = [];
var len__6152__auto___22203 = arguments.length;
var i__6153__auto___22204 = (0);
while(true){
if((i__6153__auto___22204 < len__6152__auto___22203)){
args22154.push((arguments[i__6153__auto___22204]));

var G__22205 = (i__6153__auto___22204 + (1));
i__6153__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var G__22156 = args22154.length;
switch (G__22156) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22154.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22207,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22207,out){
return (function (state_22180){
var state_val_22181 = (state_22180[(1)]);
if((state_val_22181 === (7))){
var inst_22162 = (state_22180[(7)]);
var inst_22162__$1 = (state_22180[(2)]);
var inst_22163 = (inst_22162__$1 == null);
var inst_22164 = cljs.core.not(inst_22163);
var state_22180__$1 = (function (){var statearr_22182 = state_22180;
(statearr_22182[(7)] = inst_22162__$1);

return statearr_22182;
})();
if(inst_22164){
var statearr_22183_22208 = state_22180__$1;
(statearr_22183_22208[(1)] = (8));

} else {
var statearr_22184_22209 = state_22180__$1;
(statearr_22184_22209[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (1))){
var inst_22157 = (0);
var state_22180__$1 = (function (){var statearr_22185 = state_22180;
(statearr_22185[(8)] = inst_22157);

return statearr_22185;
})();
var statearr_22186_22210 = state_22180__$1;
(statearr_22186_22210[(2)] = null);

(statearr_22186_22210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (4))){
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22180__$1,(7),ch);
} else {
if((state_val_22181 === (6))){
var inst_22175 = (state_22180[(2)]);
var state_22180__$1 = state_22180;
var statearr_22187_22211 = state_22180__$1;
(statearr_22187_22211[(2)] = inst_22175);

(statearr_22187_22211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (3))){
var inst_22177 = (state_22180[(2)]);
var inst_22178 = cljs.core.async.close_BANG_(out);
var state_22180__$1 = (function (){var statearr_22188 = state_22180;
(statearr_22188[(9)] = inst_22177);

return statearr_22188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22180__$1,inst_22178);
} else {
if((state_val_22181 === (2))){
var inst_22157 = (state_22180[(8)]);
var inst_22159 = (inst_22157 < n);
var state_22180__$1 = state_22180;
if(cljs.core.truth_(inst_22159)){
var statearr_22189_22212 = state_22180__$1;
(statearr_22189_22212[(1)] = (4));

} else {
var statearr_22190_22213 = state_22180__$1;
(statearr_22190_22213[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (11))){
var inst_22157 = (state_22180[(8)]);
var inst_22167 = (state_22180[(2)]);
var inst_22168 = (inst_22157 + (1));
var inst_22157__$1 = inst_22168;
var state_22180__$1 = (function (){var statearr_22191 = state_22180;
(statearr_22191[(10)] = inst_22167);

(statearr_22191[(8)] = inst_22157__$1);

return statearr_22191;
})();
var statearr_22192_22214 = state_22180__$1;
(statearr_22192_22214[(2)] = null);

(statearr_22192_22214[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (9))){
var state_22180__$1 = state_22180;
var statearr_22193_22215 = state_22180__$1;
(statearr_22193_22215[(2)] = null);

(statearr_22193_22215[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (5))){
var state_22180__$1 = state_22180;
var statearr_22194_22216 = state_22180__$1;
(statearr_22194_22216[(2)] = null);

(statearr_22194_22216[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (10))){
var inst_22172 = (state_22180[(2)]);
var state_22180__$1 = state_22180;
var statearr_22195_22217 = state_22180__$1;
(statearr_22195_22217[(2)] = inst_22172);

(statearr_22195_22217[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (8))){
var inst_22162 = (state_22180[(7)]);
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22180__$1,(11),out,inst_22162);
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
});})(c__10081__auto___22207,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22207,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22199[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22199[(1)] = (1));

return statearr_22199;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22180){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22180);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22200){if((e22200 instanceof Object)){
var ex__10018__auto__ = e22200;
var statearr_22201_22218 = state_22180;
(statearr_22201_22218[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22180);

return cljs.core.cst$kw$recur;
} else {
throw e22200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22219 = state_22180;
state_22180 = G__22219;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22207,out))
})();
var state__10083__auto__ = (function (){var statearr_22202 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22207);

return statearr_22202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22207,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22229 = (function (map_LT_,f,ch,meta22230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22230 = meta22230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22231,meta22230__$1){
var self__ = this;
var _22231__$1 = this;
return (new cljs.core.async.t_cljs$core$async22229(self__.map_LT_,self__.f,self__.ch,meta22230__$1));
});

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22231){
var self__ = this;
var _22231__$1 = this;
return self__.meta22230;
});

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22232 = (function (map_LT_,f,ch,meta22230,_,fn1,meta22233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22230 = meta22230;
this._ = _;
this.fn1 = fn1;
this.meta22233 = meta22233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22234,meta22233__$1){
var self__ = this;
var _22234__$1 = this;
return (new cljs.core.async.t_cljs$core$async22232(self__.map_LT_,self__.f,self__.ch,self__.meta22230,self__._,self__.fn1,meta22233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22234){
var self__ = this;
var _22234__$1 = this;
return self__.meta22233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22220_SHARP_){
var G__22235 = (((p1__22220_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22220_SHARP_) : self__.f.call(null,p1__22220_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22235) : f1.call(null,G__22235));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22230,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async22229], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta22233], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22232";

cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22232(map_LT___$1,f__$1,ch__$1,meta22230__$1,___$2,fn1__$1,meta22233){
return (new cljs.core.async.t_cljs$core$async22232(map_LT___$1,f__$1,ch__$1,meta22230__$1,___$2,fn1__$1,meta22233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22232(self__.map_LT_,self__.f,self__.ch,self__.meta22230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5082__auto__ = ret;
if(cljs.core.truth_(and__5082__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5082__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22236 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22236) : self__.f.call(null,G__22236));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22230], null);
});

cljs.core.async.t_cljs$core$async22229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22229";

cljs.core.async.t_cljs$core$async22229.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22229");
});

cljs.core.async.__GT_t_cljs$core$async22229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22229(map_LT___$1,f__$1,ch__$1,meta22230){
return (new cljs.core.async.t_cljs$core$async22229(map_LT___$1,f__$1,ch__$1,meta22230));
});

}

return (new cljs.core.async.t_cljs$core$async22229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22240 = (function (map_GT_,f,ch,meta22241){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22241 = meta22241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22242,meta22241__$1){
var self__ = this;
var _22242__$1 = this;
return (new cljs.core.async.t_cljs$core$async22240(self__.map_GT_,self__.f,self__.ch,meta22241__$1));
});

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22242){
var self__ = this;
var _22242__$1 = this;
return self__.meta22241;
});

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async22240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22241], null);
});

cljs.core.async.t_cljs$core$async22240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22240";

cljs.core.async.t_cljs$core$async22240.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22240");
});

cljs.core.async.__GT_t_cljs$core$async22240 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22240(map_GT___$1,f__$1,ch__$1,meta22241){
return (new cljs.core.async.t_cljs$core$async22240(map_GT___$1,f__$1,ch__$1,meta22241));
});

}

return (new cljs.core.async.t_cljs$core$async22240(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22246 = (function (filter_GT_,p,ch,meta22247){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22247 = meta22247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22248,meta22247__$1){
var self__ = this;
var _22248__$1 = this;
return (new cljs.core.async.t_cljs$core$async22246(self__.filter_GT_,self__.p,self__.ch,meta22247__$1));
});

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22248){
var self__ = this;
var _22248__$1 = this;
return self__.meta22247;
});

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22247], null);
});

cljs.core.async.t_cljs$core$async22246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22246";

cljs.core.async.t_cljs$core$async22246.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22246");
});

cljs.core.async.__GT_t_cljs$core$async22246 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22246(filter_GT___$1,p__$1,ch__$1,meta22247){
return (new cljs.core.async.t_cljs$core$async22246(filter_GT___$1,p__$1,ch__$1,meta22247));
});

}

return (new cljs.core.async.t_cljs$core$async22246(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22249 = [];
var len__6152__auto___22293 = arguments.length;
var i__6153__auto___22294 = (0);
while(true){
if((i__6153__auto___22294 < len__6152__auto___22293)){
args22249.push((arguments[i__6153__auto___22294]));

var G__22295 = (i__6153__auto___22294 + (1));
i__6153__auto___22294 = G__22295;
continue;
} else {
}
break;
}

var G__22251 = args22249.length;
switch (G__22251) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22249.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22297,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22297,out){
return (function (state_22272){
var state_val_22273 = (state_22272[(1)]);
if((state_val_22273 === (7))){
var inst_22268 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
var statearr_22274_22298 = state_22272__$1;
(statearr_22274_22298[(2)] = inst_22268);

(statearr_22274_22298[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (1))){
var state_22272__$1 = state_22272;
var statearr_22275_22299 = state_22272__$1;
(statearr_22275_22299[(2)] = null);

(statearr_22275_22299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (4))){
var inst_22254 = (state_22272[(7)]);
var inst_22254__$1 = (state_22272[(2)]);
var inst_22255 = (inst_22254__$1 == null);
var state_22272__$1 = (function (){var statearr_22276 = state_22272;
(statearr_22276[(7)] = inst_22254__$1);

return statearr_22276;
})();
if(cljs.core.truth_(inst_22255)){
var statearr_22277_22300 = state_22272__$1;
(statearr_22277_22300[(1)] = (5));

} else {
var statearr_22278_22301 = state_22272__$1;
(statearr_22278_22301[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (6))){
var inst_22254 = (state_22272[(7)]);
var inst_22259 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22254) : p.call(null,inst_22254));
var state_22272__$1 = state_22272;
if(cljs.core.truth_(inst_22259)){
var statearr_22279_22302 = state_22272__$1;
(statearr_22279_22302[(1)] = (8));

} else {
var statearr_22280_22303 = state_22272__$1;
(statearr_22280_22303[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (3))){
var inst_22270 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22272__$1,inst_22270);
} else {
if((state_val_22273 === (2))){
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22272__$1,(4),ch);
} else {
if((state_val_22273 === (11))){
var inst_22262 = (state_22272[(2)]);
var state_22272__$1 = state_22272;
var statearr_22281_22304 = state_22272__$1;
(statearr_22281_22304[(2)] = inst_22262);

(statearr_22281_22304[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (9))){
var state_22272__$1 = state_22272;
var statearr_22282_22305 = state_22272__$1;
(statearr_22282_22305[(2)] = null);

(statearr_22282_22305[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (5))){
var inst_22257 = cljs.core.async.close_BANG_(out);
var state_22272__$1 = state_22272;
var statearr_22283_22306 = state_22272__$1;
(statearr_22283_22306[(2)] = inst_22257);

(statearr_22283_22306[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (10))){
var inst_22265 = (state_22272[(2)]);
var state_22272__$1 = (function (){var statearr_22284 = state_22272;
(statearr_22284[(8)] = inst_22265);

return statearr_22284;
})();
var statearr_22285_22307 = state_22272__$1;
(statearr_22285_22307[(2)] = null);

(statearr_22285_22307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22273 === (8))){
var inst_22254 = (state_22272[(7)]);
var state_22272__$1 = state_22272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22272__$1,(11),out,inst_22254);
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
});})(c__10081__auto___22297,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22297,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22289 = [null,null,null,null,null,null,null,null,null];
(statearr_22289[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22289[(1)] = (1));

return statearr_22289;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22272){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22272);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22290){if((e22290 instanceof Object)){
var ex__10018__auto__ = e22290;
var statearr_22291_22308 = state_22272;
(statearr_22291_22308[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22272);

return cljs.core.cst$kw$recur;
} else {
throw e22290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22309 = state_22272;
state_22272 = G__22309;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22297,out))
})();
var state__10083__auto__ = (function (){var statearr_22292 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22297);

return statearr_22292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22297,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22310 = [];
var len__6152__auto___22313 = arguments.length;
var i__6153__auto___22314 = (0);
while(true){
if((i__6153__auto___22314 < len__6152__auto___22313)){
args22310.push((arguments[i__6153__auto___22314]));

var G__22315 = (i__6153__auto___22314 + (1));
i__6153__auto___22314 = G__22315;
continue;
} else {
}
break;
}

var G__22312 = args22310.length;
switch (G__22312) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22310.length)].join('')));

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
var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__){
return (function (state_22482){
var state_val_22483 = (state_22482[(1)]);
if((state_val_22483 === (7))){
var inst_22478 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
var statearr_22484_22525 = state_22482__$1;
(statearr_22484_22525[(2)] = inst_22478);

(statearr_22484_22525[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (20))){
var inst_22448 = (state_22482[(7)]);
var inst_22459 = (state_22482[(2)]);
var inst_22460 = cljs.core.next(inst_22448);
var inst_22434 = inst_22460;
var inst_22435 = null;
var inst_22436 = (0);
var inst_22437 = (0);
var state_22482__$1 = (function (){var statearr_22485 = state_22482;
(statearr_22485[(8)] = inst_22436);

(statearr_22485[(9)] = inst_22459);

(statearr_22485[(10)] = inst_22434);

(statearr_22485[(11)] = inst_22437);

(statearr_22485[(12)] = inst_22435);

return statearr_22485;
})();
var statearr_22486_22526 = state_22482__$1;
(statearr_22486_22526[(2)] = null);

(statearr_22486_22526[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (1))){
var state_22482__$1 = state_22482;
var statearr_22487_22527 = state_22482__$1;
(statearr_22487_22527[(2)] = null);

(statearr_22487_22527[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (4))){
var inst_22423 = (state_22482[(13)]);
var inst_22423__$1 = (state_22482[(2)]);
var inst_22424 = (inst_22423__$1 == null);
var state_22482__$1 = (function (){var statearr_22488 = state_22482;
(statearr_22488[(13)] = inst_22423__$1);

return statearr_22488;
})();
if(cljs.core.truth_(inst_22424)){
var statearr_22489_22528 = state_22482__$1;
(statearr_22489_22528[(1)] = (5));

} else {
var statearr_22490_22529 = state_22482__$1;
(statearr_22490_22529[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (15))){
var state_22482__$1 = state_22482;
var statearr_22494_22530 = state_22482__$1;
(statearr_22494_22530[(2)] = null);

(statearr_22494_22530[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (21))){
var state_22482__$1 = state_22482;
var statearr_22495_22531 = state_22482__$1;
(statearr_22495_22531[(2)] = null);

(statearr_22495_22531[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (13))){
var inst_22436 = (state_22482[(8)]);
var inst_22434 = (state_22482[(10)]);
var inst_22437 = (state_22482[(11)]);
var inst_22435 = (state_22482[(12)]);
var inst_22444 = (state_22482[(2)]);
var inst_22445 = (inst_22437 + (1));
var tmp22491 = inst_22436;
var tmp22492 = inst_22434;
var tmp22493 = inst_22435;
var inst_22434__$1 = tmp22492;
var inst_22435__$1 = tmp22493;
var inst_22436__$1 = tmp22491;
var inst_22437__$1 = inst_22445;
var state_22482__$1 = (function (){var statearr_22496 = state_22482;
(statearr_22496[(14)] = inst_22444);

(statearr_22496[(8)] = inst_22436__$1);

(statearr_22496[(10)] = inst_22434__$1);

(statearr_22496[(11)] = inst_22437__$1);

(statearr_22496[(12)] = inst_22435__$1);

return statearr_22496;
})();
var statearr_22497_22532 = state_22482__$1;
(statearr_22497_22532[(2)] = null);

(statearr_22497_22532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (22))){
var state_22482__$1 = state_22482;
var statearr_22498_22533 = state_22482__$1;
(statearr_22498_22533[(2)] = null);

(statearr_22498_22533[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (6))){
var inst_22423 = (state_22482[(13)]);
var inst_22432 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22423) : f.call(null,inst_22423));
var inst_22433 = cljs.core.seq(inst_22432);
var inst_22434 = inst_22433;
var inst_22435 = null;
var inst_22436 = (0);
var inst_22437 = (0);
var state_22482__$1 = (function (){var statearr_22499 = state_22482;
(statearr_22499[(8)] = inst_22436);

(statearr_22499[(10)] = inst_22434);

(statearr_22499[(11)] = inst_22437);

(statearr_22499[(12)] = inst_22435);

return statearr_22499;
})();
var statearr_22500_22534 = state_22482__$1;
(statearr_22500_22534[(2)] = null);

(statearr_22500_22534[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (17))){
var inst_22448 = (state_22482[(7)]);
var inst_22452 = cljs.core.chunk_first(inst_22448);
var inst_22453 = cljs.core.chunk_rest(inst_22448);
var inst_22454 = cljs.core.count(inst_22452);
var inst_22434 = inst_22453;
var inst_22435 = inst_22452;
var inst_22436 = inst_22454;
var inst_22437 = (0);
var state_22482__$1 = (function (){var statearr_22501 = state_22482;
(statearr_22501[(8)] = inst_22436);

(statearr_22501[(10)] = inst_22434);

(statearr_22501[(11)] = inst_22437);

(statearr_22501[(12)] = inst_22435);

return statearr_22501;
})();
var statearr_22502_22535 = state_22482__$1;
(statearr_22502_22535[(2)] = null);

(statearr_22502_22535[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (3))){
var inst_22480 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22482__$1,inst_22480);
} else {
if((state_val_22483 === (12))){
var inst_22468 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
var statearr_22503_22536 = state_22482__$1;
(statearr_22503_22536[(2)] = inst_22468);

(statearr_22503_22536[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (2))){
var state_22482__$1 = state_22482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22482__$1,(4),in$);
} else {
if((state_val_22483 === (23))){
var inst_22476 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
var statearr_22504_22537 = state_22482__$1;
(statearr_22504_22537[(2)] = inst_22476);

(statearr_22504_22537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (19))){
var inst_22463 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
var statearr_22505_22538 = state_22482__$1;
(statearr_22505_22538[(2)] = inst_22463);

(statearr_22505_22538[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (11))){
var inst_22448 = (state_22482[(7)]);
var inst_22434 = (state_22482[(10)]);
var inst_22448__$1 = cljs.core.seq(inst_22434);
var state_22482__$1 = (function (){var statearr_22506 = state_22482;
(statearr_22506[(7)] = inst_22448__$1);

return statearr_22506;
})();
if(inst_22448__$1){
var statearr_22507_22539 = state_22482__$1;
(statearr_22507_22539[(1)] = (14));

} else {
var statearr_22508_22540 = state_22482__$1;
(statearr_22508_22540[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (9))){
var inst_22470 = (state_22482[(2)]);
var inst_22471 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22482__$1 = (function (){var statearr_22509 = state_22482;
(statearr_22509[(15)] = inst_22470);

return statearr_22509;
})();
if(cljs.core.truth_(inst_22471)){
var statearr_22510_22541 = state_22482__$1;
(statearr_22510_22541[(1)] = (21));

} else {
var statearr_22511_22542 = state_22482__$1;
(statearr_22511_22542[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (5))){
var inst_22426 = cljs.core.async.close_BANG_(out);
var state_22482__$1 = state_22482;
var statearr_22512_22543 = state_22482__$1;
(statearr_22512_22543[(2)] = inst_22426);

(statearr_22512_22543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (14))){
var inst_22448 = (state_22482[(7)]);
var inst_22450 = cljs.core.chunked_seq_QMARK_(inst_22448);
var state_22482__$1 = state_22482;
if(inst_22450){
var statearr_22513_22544 = state_22482__$1;
(statearr_22513_22544[(1)] = (17));

} else {
var statearr_22514_22545 = state_22482__$1;
(statearr_22514_22545[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (16))){
var inst_22466 = (state_22482[(2)]);
var state_22482__$1 = state_22482;
var statearr_22515_22546 = state_22482__$1;
(statearr_22515_22546[(2)] = inst_22466);

(statearr_22515_22546[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22483 === (10))){
var inst_22437 = (state_22482[(11)]);
var inst_22435 = (state_22482[(12)]);
var inst_22442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22435,inst_22437);
var state_22482__$1 = state_22482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22482__$1,(13),out,inst_22442);
} else {
if((state_val_22483 === (18))){
var inst_22448 = (state_22482[(7)]);
var inst_22457 = cljs.core.first(inst_22448);
var state_22482__$1 = state_22482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22482__$1,(20),out,inst_22457);
} else {
if((state_val_22483 === (8))){
var inst_22436 = (state_22482[(8)]);
var inst_22437 = (state_22482[(11)]);
var inst_22439 = (inst_22437 < inst_22436);
var inst_22440 = inst_22439;
var state_22482__$1 = state_22482;
if(cljs.core.truth_(inst_22440)){
var statearr_22516_22547 = state_22482__$1;
(statearr_22516_22547[(1)] = (10));

} else {
var statearr_22517_22548 = state_22482__$1;
(statearr_22517_22548[(1)] = (11));

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
});})(c__10081__auto__))
;
return ((function (switch__10014__auto__,c__10081__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_22521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22521[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__);

(statearr_22521[(1)] = (1));

return statearr_22521;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1 = (function (state_22482){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22482);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22522){if((e22522 instanceof Object)){
var ex__10018__auto__ = e22522;
var statearr_22523_22549 = state_22482;
(statearr_22523_22549[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22482);

return cljs.core.cst$kw$recur;
} else {
throw e22522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22550 = state_22482;
state_22482 = G__22550;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__ = function(state_22482){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1.call(this,state_22482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_22524 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_22524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__))
);

return c__10081__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22551 = [];
var len__6152__auto___22554 = arguments.length;
var i__6153__auto___22555 = (0);
while(true){
if((i__6153__auto___22555 < len__6152__auto___22554)){
args22551.push((arguments[i__6153__auto___22555]));

var G__22556 = (i__6153__auto___22555 + (1));
i__6153__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var G__22553 = args22551.length;
switch (G__22553) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22551.length)].join('')));

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
var args22558 = [];
var len__6152__auto___22561 = arguments.length;
var i__6153__auto___22562 = (0);
while(true){
if((i__6153__auto___22562 < len__6152__auto___22561)){
args22558.push((arguments[i__6153__auto___22562]));

var G__22563 = (i__6153__auto___22562 + (1));
i__6153__auto___22562 = G__22563;
continue;
} else {
}
break;
}

var G__22560 = args22558.length;
switch (G__22560) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22558.length)].join('')));

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
var args22565 = [];
var len__6152__auto___22616 = arguments.length;
var i__6153__auto___22617 = (0);
while(true){
if((i__6153__auto___22617 < len__6152__auto___22616)){
args22565.push((arguments[i__6153__auto___22617]));

var G__22618 = (i__6153__auto___22617 + (1));
i__6153__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var G__22567 = args22565.length;
switch (G__22567) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22565.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22620,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22620,out){
return (function (state_22591){
var state_val_22592 = (state_22591[(1)]);
if((state_val_22592 === (7))){
var inst_22586 = (state_22591[(2)]);
var state_22591__$1 = state_22591;
var statearr_22593_22621 = state_22591__$1;
(statearr_22593_22621[(2)] = inst_22586);

(statearr_22593_22621[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (1))){
var inst_22568 = null;
var state_22591__$1 = (function (){var statearr_22594 = state_22591;
(statearr_22594[(7)] = inst_22568);

return statearr_22594;
})();
var statearr_22595_22622 = state_22591__$1;
(statearr_22595_22622[(2)] = null);

(statearr_22595_22622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (4))){
var inst_22571 = (state_22591[(8)]);
var inst_22571__$1 = (state_22591[(2)]);
var inst_22572 = (inst_22571__$1 == null);
var inst_22573 = cljs.core.not(inst_22572);
var state_22591__$1 = (function (){var statearr_22596 = state_22591;
(statearr_22596[(8)] = inst_22571__$1);

return statearr_22596;
})();
if(inst_22573){
var statearr_22597_22623 = state_22591__$1;
(statearr_22597_22623[(1)] = (5));

} else {
var statearr_22598_22624 = state_22591__$1;
(statearr_22598_22624[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (6))){
var state_22591__$1 = state_22591;
var statearr_22599_22625 = state_22591__$1;
(statearr_22599_22625[(2)] = null);

(statearr_22599_22625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (3))){
var inst_22588 = (state_22591[(2)]);
var inst_22589 = cljs.core.async.close_BANG_(out);
var state_22591__$1 = (function (){var statearr_22600 = state_22591;
(statearr_22600[(9)] = inst_22588);

return statearr_22600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22591__$1,inst_22589);
} else {
if((state_val_22592 === (2))){
var state_22591__$1 = state_22591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22591__$1,(4),ch);
} else {
if((state_val_22592 === (11))){
var inst_22571 = (state_22591[(8)]);
var inst_22580 = (state_22591[(2)]);
var inst_22568 = inst_22571;
var state_22591__$1 = (function (){var statearr_22601 = state_22591;
(statearr_22601[(10)] = inst_22580);

(statearr_22601[(7)] = inst_22568);

return statearr_22601;
})();
var statearr_22602_22626 = state_22591__$1;
(statearr_22602_22626[(2)] = null);

(statearr_22602_22626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (9))){
var inst_22571 = (state_22591[(8)]);
var state_22591__$1 = state_22591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22591__$1,(11),out,inst_22571);
} else {
if((state_val_22592 === (5))){
var inst_22571 = (state_22591[(8)]);
var inst_22568 = (state_22591[(7)]);
var inst_22575 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22571,inst_22568);
var state_22591__$1 = state_22591;
if(inst_22575){
var statearr_22604_22627 = state_22591__$1;
(statearr_22604_22627[(1)] = (8));

} else {
var statearr_22605_22628 = state_22591__$1;
(statearr_22605_22628[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (10))){
var inst_22583 = (state_22591[(2)]);
var state_22591__$1 = state_22591;
var statearr_22606_22629 = state_22591__$1;
(statearr_22606_22629[(2)] = inst_22583);

(statearr_22606_22629[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22592 === (8))){
var inst_22568 = (state_22591[(7)]);
var tmp22603 = inst_22568;
var inst_22568__$1 = tmp22603;
var state_22591__$1 = (function (){var statearr_22607 = state_22591;
(statearr_22607[(7)] = inst_22568__$1);

return statearr_22607;
})();
var statearr_22608_22630 = state_22591__$1;
(statearr_22608_22630[(2)] = null);

(statearr_22608_22630[(1)] = (2));


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
});})(c__10081__auto___22620,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22620,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22612[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22612[(1)] = (1));

return statearr_22612;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22591){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22591);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22613){if((e22613 instanceof Object)){
var ex__10018__auto__ = e22613;
var statearr_22614_22631 = state_22591;
(statearr_22614_22631[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22591);

return cljs.core.cst$kw$recur;
} else {
throw e22613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22632 = state_22591;
state_22591 = G__22632;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22620,out))
})();
var state__10083__auto__ = (function (){var statearr_22615 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22620);

return statearr_22615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22620,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22633 = [];
var len__6152__auto___22703 = arguments.length;
var i__6153__auto___22704 = (0);
while(true){
if((i__6153__auto___22704 < len__6152__auto___22703)){
args22633.push((arguments[i__6153__auto___22704]));

var G__22705 = (i__6153__auto___22704 + (1));
i__6153__auto___22704 = G__22705;
continue;
} else {
}
break;
}

var G__22635 = args22633.length;
switch (G__22635) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22633.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22707,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22707,out){
return (function (state_22673){
var state_val_22674 = (state_22673[(1)]);
if((state_val_22674 === (7))){
var inst_22669 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
var statearr_22675_22708 = state_22673__$1;
(statearr_22675_22708[(2)] = inst_22669);

(statearr_22675_22708[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (1))){
var inst_22636 = (new Array(n));
var inst_22637 = inst_22636;
var inst_22638 = (0);
var state_22673__$1 = (function (){var statearr_22676 = state_22673;
(statearr_22676[(7)] = inst_22638);

(statearr_22676[(8)] = inst_22637);

return statearr_22676;
})();
var statearr_22677_22709 = state_22673__$1;
(statearr_22677_22709[(2)] = null);

(statearr_22677_22709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (4))){
var inst_22641 = (state_22673[(9)]);
var inst_22641__$1 = (state_22673[(2)]);
var inst_22642 = (inst_22641__$1 == null);
var inst_22643 = cljs.core.not(inst_22642);
var state_22673__$1 = (function (){var statearr_22678 = state_22673;
(statearr_22678[(9)] = inst_22641__$1);

return statearr_22678;
})();
if(inst_22643){
var statearr_22679_22710 = state_22673__$1;
(statearr_22679_22710[(1)] = (5));

} else {
var statearr_22680_22711 = state_22673__$1;
(statearr_22680_22711[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (15))){
var inst_22663 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
var statearr_22681_22712 = state_22673__$1;
(statearr_22681_22712[(2)] = inst_22663);

(statearr_22681_22712[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (13))){
var state_22673__$1 = state_22673;
var statearr_22682_22713 = state_22673__$1;
(statearr_22682_22713[(2)] = null);

(statearr_22682_22713[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (6))){
var inst_22638 = (state_22673[(7)]);
var inst_22659 = (inst_22638 > (0));
var state_22673__$1 = state_22673;
if(cljs.core.truth_(inst_22659)){
var statearr_22683_22714 = state_22673__$1;
(statearr_22683_22714[(1)] = (12));

} else {
var statearr_22684_22715 = state_22673__$1;
(statearr_22684_22715[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (3))){
var inst_22671 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22673__$1,inst_22671);
} else {
if((state_val_22674 === (12))){
var inst_22637 = (state_22673[(8)]);
var inst_22661 = cljs.core.vec(inst_22637);
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22673__$1,(15),out,inst_22661);
} else {
if((state_val_22674 === (2))){
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22673__$1,(4),ch);
} else {
if((state_val_22674 === (11))){
var inst_22653 = (state_22673[(2)]);
var inst_22654 = (new Array(n));
var inst_22637 = inst_22654;
var inst_22638 = (0);
var state_22673__$1 = (function (){var statearr_22685 = state_22673;
(statearr_22685[(7)] = inst_22638);

(statearr_22685[(8)] = inst_22637);

(statearr_22685[(10)] = inst_22653);

return statearr_22685;
})();
var statearr_22686_22716 = state_22673__$1;
(statearr_22686_22716[(2)] = null);

(statearr_22686_22716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (9))){
var inst_22637 = (state_22673[(8)]);
var inst_22651 = cljs.core.vec(inst_22637);
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22673__$1,(11),out,inst_22651);
} else {
if((state_val_22674 === (5))){
var inst_22646 = (state_22673[(11)]);
var inst_22638 = (state_22673[(7)]);
var inst_22637 = (state_22673[(8)]);
var inst_22641 = (state_22673[(9)]);
var inst_22645 = (inst_22637[inst_22638] = inst_22641);
var inst_22646__$1 = (inst_22638 + (1));
var inst_22647 = (inst_22646__$1 < n);
var state_22673__$1 = (function (){var statearr_22687 = state_22673;
(statearr_22687[(11)] = inst_22646__$1);

(statearr_22687[(12)] = inst_22645);

return statearr_22687;
})();
if(cljs.core.truth_(inst_22647)){
var statearr_22688_22717 = state_22673__$1;
(statearr_22688_22717[(1)] = (8));

} else {
var statearr_22689_22718 = state_22673__$1;
(statearr_22689_22718[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (14))){
var inst_22666 = (state_22673[(2)]);
var inst_22667 = cljs.core.async.close_BANG_(out);
var state_22673__$1 = (function (){var statearr_22691 = state_22673;
(statearr_22691[(13)] = inst_22666);

return statearr_22691;
})();
var statearr_22692_22719 = state_22673__$1;
(statearr_22692_22719[(2)] = inst_22667);

(statearr_22692_22719[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (10))){
var inst_22657 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
var statearr_22693_22720 = state_22673__$1;
(statearr_22693_22720[(2)] = inst_22657);

(statearr_22693_22720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22674 === (8))){
var inst_22646 = (state_22673[(11)]);
var inst_22637 = (state_22673[(8)]);
var tmp22690 = inst_22637;
var inst_22637__$1 = tmp22690;
var inst_22638 = inst_22646;
var state_22673__$1 = (function (){var statearr_22694 = state_22673;
(statearr_22694[(7)] = inst_22638);

(statearr_22694[(8)] = inst_22637__$1);

return statearr_22694;
})();
var statearr_22695_22721 = state_22673__$1;
(statearr_22695_22721[(2)] = null);

(statearr_22695_22721[(1)] = (2));


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
});})(c__10081__auto___22707,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22707,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22699[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22699[(1)] = (1));

return statearr_22699;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22673){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22673);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22700){if((e22700 instanceof Object)){
var ex__10018__auto__ = e22700;
var statearr_22701_22722 = state_22673;
(statearr_22701_22722[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22673);

return cljs.core.cst$kw$recur;
} else {
throw e22700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22723 = state_22673;
state_22673 = G__22723;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22707,out))
})();
var state__10083__auto__ = (function (){var statearr_22702 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22707);

return statearr_22702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22707,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22724 = [];
var len__6152__auto___22798 = arguments.length;
var i__6153__auto___22799 = (0);
while(true){
if((i__6153__auto___22799 < len__6152__auto___22798)){
args22724.push((arguments[i__6153__auto___22799]));

var G__22800 = (i__6153__auto___22799 + (1));
i__6153__auto___22799 = G__22800;
continue;
} else {
}
break;
}

var G__22726 = args22724.length;
switch (G__22726) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22724.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___22802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22802,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22802,out){
return (function (state_22768){
var state_val_22769 = (state_22768[(1)]);
if((state_val_22769 === (7))){
var inst_22764 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22770_22803 = state_22768__$1;
(statearr_22770_22803[(2)] = inst_22764);

(statearr_22770_22803[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (1))){
var inst_22727 = [];
var inst_22728 = inst_22727;
var inst_22729 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_22768__$1 = (function (){var statearr_22771 = state_22768;
(statearr_22771[(7)] = inst_22728);

(statearr_22771[(8)] = inst_22729);

return statearr_22771;
})();
var statearr_22772_22804 = state_22768__$1;
(statearr_22772_22804[(2)] = null);

(statearr_22772_22804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (4))){
var inst_22732 = (state_22768[(9)]);
var inst_22732__$1 = (state_22768[(2)]);
var inst_22733 = (inst_22732__$1 == null);
var inst_22734 = cljs.core.not(inst_22733);
var state_22768__$1 = (function (){var statearr_22773 = state_22768;
(statearr_22773[(9)] = inst_22732__$1);

return statearr_22773;
})();
if(inst_22734){
var statearr_22774_22805 = state_22768__$1;
(statearr_22774_22805[(1)] = (5));

} else {
var statearr_22775_22806 = state_22768__$1;
(statearr_22775_22806[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (15))){
var inst_22758 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22776_22807 = state_22768__$1;
(statearr_22776_22807[(2)] = inst_22758);

(statearr_22776_22807[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (13))){
var state_22768__$1 = state_22768;
var statearr_22777_22808 = state_22768__$1;
(statearr_22777_22808[(2)] = null);

(statearr_22777_22808[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (6))){
var inst_22728 = (state_22768[(7)]);
var inst_22753 = inst_22728.length;
var inst_22754 = (inst_22753 > (0));
var state_22768__$1 = state_22768;
if(cljs.core.truth_(inst_22754)){
var statearr_22778_22809 = state_22768__$1;
(statearr_22778_22809[(1)] = (12));

} else {
var statearr_22779_22810 = state_22768__$1;
(statearr_22779_22810[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (3))){
var inst_22766 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22768__$1,inst_22766);
} else {
if((state_val_22769 === (12))){
var inst_22728 = (state_22768[(7)]);
var inst_22756 = cljs.core.vec(inst_22728);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22768__$1,(15),out,inst_22756);
} else {
if((state_val_22769 === (2))){
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22768__$1,(4),ch);
} else {
if((state_val_22769 === (11))){
var inst_22736 = (state_22768[(10)]);
var inst_22732 = (state_22768[(9)]);
var inst_22746 = (state_22768[(2)]);
var inst_22747 = [];
var inst_22748 = inst_22747.push(inst_22732);
var inst_22728 = inst_22747;
var inst_22729 = inst_22736;
var state_22768__$1 = (function (){var statearr_22780 = state_22768;
(statearr_22780[(7)] = inst_22728);

(statearr_22780[(11)] = inst_22746);

(statearr_22780[(8)] = inst_22729);

(statearr_22780[(12)] = inst_22748);

return statearr_22780;
})();
var statearr_22781_22811 = state_22768__$1;
(statearr_22781_22811[(2)] = null);

(statearr_22781_22811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (9))){
var inst_22728 = (state_22768[(7)]);
var inst_22744 = cljs.core.vec(inst_22728);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22768__$1,(11),out,inst_22744);
} else {
if((state_val_22769 === (5))){
var inst_22729 = (state_22768[(8)]);
var inst_22736 = (state_22768[(10)]);
var inst_22732 = (state_22768[(9)]);
var inst_22736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22732) : f.call(null,inst_22732));
var inst_22737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22736__$1,inst_22729);
var inst_22738 = cljs.core.keyword_identical_QMARK_(inst_22729,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_22739 = (inst_22737) || (inst_22738);
var state_22768__$1 = (function (){var statearr_22782 = state_22768;
(statearr_22782[(10)] = inst_22736__$1);

return statearr_22782;
})();
if(cljs.core.truth_(inst_22739)){
var statearr_22783_22812 = state_22768__$1;
(statearr_22783_22812[(1)] = (8));

} else {
var statearr_22784_22813 = state_22768__$1;
(statearr_22784_22813[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (14))){
var inst_22761 = (state_22768[(2)]);
var inst_22762 = cljs.core.async.close_BANG_(out);
var state_22768__$1 = (function (){var statearr_22786 = state_22768;
(statearr_22786[(13)] = inst_22761);

return statearr_22786;
})();
var statearr_22787_22814 = state_22768__$1;
(statearr_22787_22814[(2)] = inst_22762);

(statearr_22787_22814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (10))){
var inst_22751 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22788_22815 = state_22768__$1;
(statearr_22788_22815[(2)] = inst_22751);

(statearr_22788_22815[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22769 === (8))){
var inst_22728 = (state_22768[(7)]);
var inst_22736 = (state_22768[(10)]);
var inst_22732 = (state_22768[(9)]);
var inst_22741 = inst_22728.push(inst_22732);
var tmp22785 = inst_22728;
var inst_22728__$1 = tmp22785;
var inst_22729 = inst_22736;
var state_22768__$1 = (function (){var statearr_22789 = state_22768;
(statearr_22789[(14)] = inst_22741);

(statearr_22789[(7)] = inst_22728__$1);

(statearr_22789[(8)] = inst_22729);

return statearr_22789;
})();
var statearr_22790_22816 = state_22768__$1;
(statearr_22790_22816[(2)] = null);

(statearr_22790_22816[(1)] = (2));


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
});})(c__10081__auto___22802,out))
;
return ((function (switch__10014__auto__,c__10081__auto___22802,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22794[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22794[(1)] = (1));

return statearr_22794;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22768){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22768);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22795){if((e22795 instanceof Object)){
var ex__10018__auto__ = e22795;
var statearr_22796_22817 = state_22768;
(statearr_22796_22817[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22768);

return cljs.core.cst$kw$recur;
} else {
throw e22795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22818 = state_22768;
state_22768 = G__22818;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22802,out))
})();
var state__10083__auto__ = (function (){var statearr_22797 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22802);

return statearr_22797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22802,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
