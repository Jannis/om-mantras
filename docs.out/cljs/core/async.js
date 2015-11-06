// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async18340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18340 = (function (fn_handler,f,meta18341){
this.fn_handler = fn_handler;
this.f = f;
this.meta18341 = meta18341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18342,meta18341__$1){
var self__ = this;
var _18342__$1 = this;
return (new cljs.core.async.t_cljs$core$async18340(self__.fn_handler,self__.f,meta18341__$1));
});

cljs.core.async.t_cljs$core$async18340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18342){
var self__ = this;
var _18342__$1 = this;
return self__.meta18341;
});

cljs.core.async.t_cljs$core$async18340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta18341","meta18341",-1317690581,null)], null);
});

cljs.core.async.t_cljs$core$async18340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18340";

cljs.core.async.t_cljs$core$async18340.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18340");
});

cljs.core.async.__GT_t_cljs$core$async18340 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async18340(fn_handler__$1,f__$1,meta18341){
return (new cljs.core.async.t_cljs$core$async18340(fn_handler__$1,f__$1,meta18341));
});

}

return (new cljs.core.async.t_cljs$core$async18340(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args18345 = [];
var len__6152__auto___18348 = arguments.length;
var i__6153__auto___18349 = (0);
while(true){
if((i__6153__auto___18349 < len__6152__auto___18348)){
args18345.push((arguments[i__6153__auto___18349]));

var G__18350 = (i__6153__auto___18349 + (1));
i__6153__auto___18349 = G__18350;
continue;
} else {
}
break;
}

var G__18347 = args18345.length;
switch (G__18347) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18345.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args18352 = [];
var len__6152__auto___18355 = arguments.length;
var i__6153__auto___18356 = (0);
while(true){
if((i__6153__auto___18356 < len__6152__auto___18355)){
args18352.push((arguments[i__6153__auto___18356]));

var G__18357 = (i__6153__auto___18356 + (1));
i__6153__auto___18356 = G__18357;
continue;
} else {
}
break;
}

var G__18354 = args18352.length;
switch (G__18354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18352.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18359 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18359);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18359,ret){
return (function (){
return fn1.call(null,val_18359);
});})(val_18359,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args18360 = [];
var len__6152__auto___18363 = arguments.length;
var i__6153__auto___18364 = (0);
while(true){
if((i__6153__auto___18364 < len__6152__auto___18363)){
args18360.push((arguments[i__6153__auto___18364]));

var G__18365 = (i__6153__auto___18364 + (1));
i__6153__auto___18364 = G__18365;
continue;
} else {
}
break;
}

var G__18362 = args18360.length;
switch (G__18362) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18360.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5997__auto___18367 = n;
var x_18368 = (0);
while(true){
if((x_18368 < n__5997__auto___18367)){
(a[x_18368] = (0));

var G__18369 = (x_18368 + (1));
x_18368 = G__18369;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18370 = (i + (1));
i = G__18370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18374 = (function (alt_flag,flag,meta18375){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18375 = meta18375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18376,meta18375__$1){
var self__ = this;
var _18376__$1 = this;
return (new cljs.core.async.t_cljs$core$async18374(self__.alt_flag,self__.flag,meta18375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18376){
var self__ = this;
var _18376__$1 = this;
return self__.meta18375;
});})(flag))
;

cljs.core.async.t_cljs$core$async18374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18375","meta18375",-682659662,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18374";

cljs.core.async.t_cljs$core$async18374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18374");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18374(alt_flag__$1,flag__$1,meta18375){
return (new cljs.core.async.t_cljs$core$async18374(alt_flag__$1,flag__$1,meta18375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18374(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18380 = (function (alt_handler,flag,cb,meta18381){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18381 = meta18381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18382,meta18381__$1){
var self__ = this;
var _18382__$1 = this;
return (new cljs.core.async.t_cljs$core$async18380(self__.alt_handler,self__.flag,self__.cb,meta18381__$1));
});

cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18382){
var self__ = this;
var _18382__$1 = this;
return self__.meta18381;
});

cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18381","meta18381",623553470,null)], null);
});

cljs.core.async.t_cljs$core$async18380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18380";

cljs.core.async.t_cljs$core$async18380.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18380");
});

cljs.core.async.__GT_t_cljs$core$async18380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18380(alt_handler__$1,flag__$1,cb__$1,meta18381){
return (new cljs.core.async.t_cljs$core$async18380(alt_handler__$1,flag__$1,cb__$1,meta18381));
});

}

return (new cljs.core.async.t_cljs$core$async18380(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18383_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18384_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18384_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5094__auto__ = wport;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18385 = (i + (1));
i = G__18385;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5082__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__6152__auto___18391 = arguments.length;
var i__6153__auto___18392 = (0);
while(true){
if((i__6153__auto___18392 < len__6152__auto___18391)){
args__6159__auto__.push((arguments[i__6153__auto___18392]));

var G__18393 = (i__6153__auto___18392 + (1));
i__6153__auto___18392 = G__18393;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18388){
var map__18389 = p__18388;
var map__18389__$1 = ((((!((map__18389 == null)))?((((map__18389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18389):map__18389);
var opts = map__18389__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18386){
var G__18387 = cljs.core.first.call(null,seq18386);
var seq18386__$1 = cljs.core.next.call(null,seq18386);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18387,seq18386__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18394 = [];
var len__6152__auto___18444 = arguments.length;
var i__6153__auto___18445 = (0);
while(true){
if((i__6153__auto___18445 < len__6152__auto___18444)){
args18394.push((arguments[i__6153__auto___18445]));

var G__18446 = (i__6153__auto___18445 + (1));
i__6153__auto___18445 = G__18446;
continue;
} else {
}
break;
}

var G__18396 = args18394.length;
switch (G__18396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18394.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8399__auto___18448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18448){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18448){
return (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (7))){
var inst_18416 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18422_18449 = state_18420__$1;
(statearr_18422_18449[(2)] = inst_18416);

(statearr_18422_18449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (1))){
var state_18420__$1 = state_18420;
var statearr_18423_18450 = state_18420__$1;
(statearr_18423_18450[(2)] = null);

(statearr_18423_18450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (4))){
var inst_18399 = (state_18420[(7)]);
var inst_18399__$1 = (state_18420[(2)]);
var inst_18400 = (inst_18399__$1 == null);
var state_18420__$1 = (function (){var statearr_18424 = state_18420;
(statearr_18424[(7)] = inst_18399__$1);

return statearr_18424;
})();
if(cljs.core.truth_(inst_18400)){
var statearr_18425_18451 = state_18420__$1;
(statearr_18425_18451[(1)] = (5));

} else {
var statearr_18426_18452 = state_18420__$1;
(statearr_18426_18452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (13))){
var state_18420__$1 = state_18420;
var statearr_18427_18453 = state_18420__$1;
(statearr_18427_18453[(2)] = null);

(statearr_18427_18453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (6))){
var inst_18399 = (state_18420[(7)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18420__$1,(11),to,inst_18399);
} else {
if((state_val_18421 === (3))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18420__$1,inst_18418);
} else {
if((state_val_18421 === (12))){
var state_18420__$1 = state_18420;
var statearr_18428_18454 = state_18420__$1;
(statearr_18428_18454[(2)] = null);

(statearr_18428_18454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (2))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18420__$1,(4),from);
} else {
if((state_val_18421 === (11))){
var inst_18409 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
if(cljs.core.truth_(inst_18409)){
var statearr_18429_18455 = state_18420__$1;
(statearr_18429_18455[(1)] = (12));

} else {
var statearr_18430_18456 = state_18420__$1;
(statearr_18430_18456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (9))){
var state_18420__$1 = state_18420;
var statearr_18431_18457 = state_18420__$1;
(statearr_18431_18457[(2)] = null);

(statearr_18431_18457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (5))){
var state_18420__$1 = state_18420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18432_18458 = state_18420__$1;
(statearr_18432_18458[(1)] = (8));

} else {
var statearr_18433_18459 = state_18420__$1;
(statearr_18433_18459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (14))){
var inst_18414 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18434_18460 = state_18420__$1;
(statearr_18434_18460[(2)] = inst_18414);

(statearr_18434_18460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (10))){
var inst_18406 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18435_18461 = state_18420__$1;
(statearr_18435_18461[(2)] = inst_18406);

(statearr_18435_18461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (8))){
var inst_18403 = cljs.core.async.close_BANG_.call(null,to);
var state_18420__$1 = state_18420;
var statearr_18436_18462 = state_18420__$1;
(statearr_18436_18462[(2)] = inst_18403);

(statearr_18436_18462[(1)] = (10));


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
});})(c__8399__auto___18448))
;
return ((function (switch__8334__auto__,c__8399__auto___18448){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18440 = [null,null,null,null,null,null,null,null];
(statearr_18440[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18440[(1)] = (1));

return statearr_18440;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18420){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18441){if((e18441 instanceof Object)){
var ex__8338__auto__ = e18441;
var statearr_18442_18463 = state_18420;
(statearr_18442_18463[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_18420;
state_18420 = G__18464;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18448))
})();
var state__8401__auto__ = (function (){var statearr_18443 = f__8400__auto__.call(null);
(statearr_18443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18448);

return statearr_18443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18448))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18648){
var vec__18649 = p__18648;
var v = cljs.core.nth.call(null,vec__18649,(0),null);
var p = cljs.core.nth.call(null,vec__18649,(1),null);
var job = vec__18649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8399__auto___18831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results){
return (function (state_18654){
var state_val_18655 = (state_18654[(1)]);
if((state_val_18655 === (1))){
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18654__$1,(2),res,v);
} else {
if((state_val_18655 === (2))){
var inst_18651 = (state_18654[(2)]);
var inst_18652 = cljs.core.async.close_BANG_.call(null,res);
var state_18654__$1 = (function (){var statearr_18656 = state_18654;
(statearr_18656[(7)] = inst_18651);

return statearr_18656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18654__$1,inst_18652);
} else {
return null;
}
}
});})(c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results))
;
return ((function (switch__8334__auto__,c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18660 = [null,null,null,null,null,null,null,null];
(statearr_18660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18660[(1)] = (1));

return statearr_18660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18654){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18661){if((e18661 instanceof Object)){
var ex__8338__auto__ = e18661;
var statearr_18662_18832 = state_18654;
(statearr_18662_18832[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18833 = state_18654;
state_18654 = G__18833;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results))
})();
var state__8401__auto__ = (function (){var statearr_18663 = f__8400__auto__.call(null);
(statearr_18663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18831);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18831,res,vec__18649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18664){
var vec__18665 = p__18664;
var v = cljs.core.nth.call(null,vec__18665,(0),null);
var p = cljs.core.nth.call(null,vec__18665,(1),null);
var job = vec__18665;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5997__auto___18834 = n;
var __18835 = (0);
while(true){
if((__18835 < n__5997__auto___18834)){
var G__18666_18836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18666_18836) {
case "compute":
var c__8399__auto___18838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18835,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18835,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function (state_18679){
var state_val_18680 = (state_18679[(1)]);
if((state_val_18680 === (1))){
var state_18679__$1 = state_18679;
var statearr_18681_18839 = state_18679__$1;
(statearr_18681_18839[(2)] = null);

(statearr_18681_18839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (2))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18679__$1,(4),jobs);
} else {
if((state_val_18680 === (3))){
var inst_18677 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18679__$1,inst_18677);
} else {
if((state_val_18680 === (4))){
var inst_18669 = (state_18679[(2)]);
var inst_18670 = process.call(null,inst_18669);
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18670)){
var statearr_18682_18840 = state_18679__$1;
(statearr_18682_18840[(1)] = (5));

} else {
var statearr_18683_18841 = state_18679__$1;
(statearr_18683_18841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (5))){
var state_18679__$1 = state_18679;
var statearr_18684_18842 = state_18679__$1;
(statearr_18684_18842[(2)] = null);

(statearr_18684_18842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (6))){
var state_18679__$1 = state_18679;
var statearr_18685_18843 = state_18679__$1;
(statearr_18685_18843[(2)] = null);

(statearr_18685_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (7))){
var inst_18675 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18686_18844 = state_18679__$1;
(statearr_18686_18844[(2)] = inst_18675);

(statearr_18686_18844[(1)] = (3));


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
});})(__18835,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
;
return ((function (__18835,switch__8334__auto__,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18690 = [null,null,null,null,null,null,null];
(statearr_18690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18690[(1)] = (1));

return statearr_18690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18679){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18691){if((e18691 instanceof Object)){
var ex__8338__auto__ = e18691;
var statearr_18692_18845 = state_18679;
(statearr_18692_18845[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18846 = state_18679;
state_18679 = G__18846;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18835,switch__8334__auto__,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18693 = f__8400__auto__.call(null);
(statearr_18693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18838);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18835,c__8399__auto___18838,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
);


break;
case "async":
var c__8399__auto___18847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18835,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18835,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function (state_18706){
var state_val_18707 = (state_18706[(1)]);
if((state_val_18707 === (1))){
var state_18706__$1 = state_18706;
var statearr_18708_18848 = state_18706__$1;
(statearr_18708_18848[(2)] = null);

(statearr_18708_18848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (2))){
var state_18706__$1 = state_18706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18706__$1,(4),jobs);
} else {
if((state_val_18707 === (3))){
var inst_18704 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18706__$1,inst_18704);
} else {
if((state_val_18707 === (4))){
var inst_18696 = (state_18706[(2)]);
var inst_18697 = async.call(null,inst_18696);
var state_18706__$1 = state_18706;
if(cljs.core.truth_(inst_18697)){
var statearr_18709_18849 = state_18706__$1;
(statearr_18709_18849[(1)] = (5));

} else {
var statearr_18710_18850 = state_18706__$1;
(statearr_18710_18850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (5))){
var state_18706__$1 = state_18706;
var statearr_18711_18851 = state_18706__$1;
(statearr_18711_18851[(2)] = null);

(statearr_18711_18851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (6))){
var state_18706__$1 = state_18706;
var statearr_18712_18852 = state_18706__$1;
(statearr_18712_18852[(2)] = null);

(statearr_18712_18852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18707 === (7))){
var inst_18702 = (state_18706[(2)]);
var state_18706__$1 = state_18706;
var statearr_18713_18853 = state_18706__$1;
(statearr_18713_18853[(2)] = inst_18702);

(statearr_18713_18853[(1)] = (3));


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
});})(__18835,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
;
return ((function (__18835,switch__8334__auto__,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18717 = [null,null,null,null,null,null,null];
(statearr_18717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18717[(1)] = (1));

return statearr_18717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18706){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18718){if((e18718 instanceof Object)){
var ex__8338__auto__ = e18718;
var statearr_18719_18854 = state_18706;
(statearr_18719_18854[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18855 = state_18706;
state_18706 = G__18855;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18835,switch__8334__auto__,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18720 = f__8400__auto__.call(null);
(statearr_18720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18847);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18835,c__8399__auto___18847,G__18666_18836,n__5997__auto___18834,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18856 = (__18835 + (1));
__18835 = G__18856;
continue;
} else {
}
break;
}

var c__8399__auto___18857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18857,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18857,jobs,results,process,async){
return (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (1))){
var state_18742__$1 = state_18742;
var statearr_18744_18858 = state_18742__$1;
(statearr_18744_18858[(2)] = null);

(statearr_18744_18858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (2))){
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18742__$1,(4),from);
} else {
if((state_val_18743 === (3))){
var inst_18740 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (4))){
var inst_18723 = (state_18742[(7)]);
var inst_18723__$1 = (state_18742[(2)]);
var inst_18724 = (inst_18723__$1 == null);
var state_18742__$1 = (function (){var statearr_18745 = state_18742;
(statearr_18745[(7)] = inst_18723__$1);

return statearr_18745;
})();
if(cljs.core.truth_(inst_18724)){
var statearr_18746_18859 = state_18742__$1;
(statearr_18746_18859[(1)] = (5));

} else {
var statearr_18747_18860 = state_18742__$1;
(statearr_18747_18860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (5))){
var inst_18726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18742__$1 = state_18742;
var statearr_18748_18861 = state_18742__$1;
(statearr_18748_18861[(2)] = inst_18726);

(statearr_18748_18861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (6))){
var inst_18728 = (state_18742[(8)]);
var inst_18723 = (state_18742[(7)]);
var inst_18728__$1 = cljs.core.async.chan.call(null,(1));
var inst_18729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18730 = [inst_18723,inst_18728__$1];
var inst_18731 = (new cljs.core.PersistentVector(null,2,(5),inst_18729,inst_18730,null));
var state_18742__$1 = (function (){var statearr_18749 = state_18742;
(statearr_18749[(8)] = inst_18728__$1);

return statearr_18749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18742__$1,(8),jobs,inst_18731);
} else {
if((state_val_18743 === (7))){
var inst_18738 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18750_18862 = state_18742__$1;
(statearr_18750_18862[(2)] = inst_18738);

(statearr_18750_18862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18728 = (state_18742[(8)]);
var inst_18733 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18751 = state_18742;
(statearr_18751[(9)] = inst_18733);

return statearr_18751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18742__$1,(9),results,inst_18728);
} else {
if((state_val_18743 === (9))){
var inst_18735 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18752 = state_18742;
(statearr_18752[(10)] = inst_18735);

return statearr_18752;
})();
var statearr_18753_18863 = state_18742__$1;
(statearr_18753_18863[(2)] = null);

(statearr_18753_18863[(1)] = (2));


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
});})(c__8399__auto___18857,jobs,results,process,async))
;
return ((function (switch__8334__auto__,c__8399__auto___18857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18757[(1)] = (1));

return statearr_18757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18742){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18758){if((e18758 instanceof Object)){
var ex__8338__auto__ = e18758;
var statearr_18759_18864 = state_18742;
(statearr_18759_18864[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18865 = state_18742;
state_18742 = G__18865;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18857,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18760 = f__8400__auto__.call(null);
(statearr_18760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18857);

return statearr_18760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18857,jobs,results,process,async))
);


var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__,jobs,results,process,async){
return (function (state_18798){
var state_val_18799 = (state_18798[(1)]);
if((state_val_18799 === (7))){
var inst_18794 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18800_18866 = state_18798__$1;
(statearr_18800_18866[(2)] = inst_18794);

(statearr_18800_18866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (20))){
var state_18798__$1 = state_18798;
var statearr_18801_18867 = state_18798__$1;
(statearr_18801_18867[(2)] = null);

(statearr_18801_18867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (1))){
var state_18798__$1 = state_18798;
var statearr_18802_18868 = state_18798__$1;
(statearr_18802_18868[(2)] = null);

(statearr_18802_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (4))){
var inst_18763 = (state_18798[(7)]);
var inst_18763__$1 = (state_18798[(2)]);
var inst_18764 = (inst_18763__$1 == null);
var state_18798__$1 = (function (){var statearr_18803 = state_18798;
(statearr_18803[(7)] = inst_18763__$1);

return statearr_18803;
})();
if(cljs.core.truth_(inst_18764)){
var statearr_18804_18869 = state_18798__$1;
(statearr_18804_18869[(1)] = (5));

} else {
var statearr_18805_18870 = state_18798__$1;
(statearr_18805_18870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (15))){
var inst_18776 = (state_18798[(8)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18798__$1,(18),to,inst_18776);
} else {
if((state_val_18799 === (21))){
var inst_18789 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18806_18871 = state_18798__$1;
(statearr_18806_18871[(2)] = inst_18789);

(statearr_18806_18871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (13))){
var inst_18791 = (state_18798[(2)]);
var state_18798__$1 = (function (){var statearr_18807 = state_18798;
(statearr_18807[(9)] = inst_18791);

return statearr_18807;
})();
var statearr_18808_18872 = state_18798__$1;
(statearr_18808_18872[(2)] = null);

(statearr_18808_18872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (6))){
var inst_18763 = (state_18798[(7)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18798__$1,(11),inst_18763);
} else {
if((state_val_18799 === (17))){
var inst_18784 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
if(cljs.core.truth_(inst_18784)){
var statearr_18809_18873 = state_18798__$1;
(statearr_18809_18873[(1)] = (19));

} else {
var statearr_18810_18874 = state_18798__$1;
(statearr_18810_18874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (3))){
var inst_18796 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18798__$1,inst_18796);
} else {
if((state_val_18799 === (12))){
var inst_18773 = (state_18798[(10)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18798__$1,(14),inst_18773);
} else {
if((state_val_18799 === (2))){
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18798__$1,(4),results);
} else {
if((state_val_18799 === (19))){
var state_18798__$1 = state_18798;
var statearr_18811_18875 = state_18798__$1;
(statearr_18811_18875[(2)] = null);

(statearr_18811_18875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (11))){
var inst_18773 = (state_18798[(2)]);
var state_18798__$1 = (function (){var statearr_18812 = state_18798;
(statearr_18812[(10)] = inst_18773);

return statearr_18812;
})();
var statearr_18813_18876 = state_18798__$1;
(statearr_18813_18876[(2)] = null);

(statearr_18813_18876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (9))){
var state_18798__$1 = state_18798;
var statearr_18814_18877 = state_18798__$1;
(statearr_18814_18877[(2)] = null);

(statearr_18814_18877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (5))){
var state_18798__$1 = state_18798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18815_18878 = state_18798__$1;
(statearr_18815_18878[(1)] = (8));

} else {
var statearr_18816_18879 = state_18798__$1;
(statearr_18816_18879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (14))){
var inst_18776 = (state_18798[(8)]);
var inst_18778 = (state_18798[(11)]);
var inst_18776__$1 = (state_18798[(2)]);
var inst_18777 = (inst_18776__$1 == null);
var inst_18778__$1 = cljs.core.not.call(null,inst_18777);
var state_18798__$1 = (function (){var statearr_18817 = state_18798;
(statearr_18817[(8)] = inst_18776__$1);

(statearr_18817[(11)] = inst_18778__$1);

return statearr_18817;
})();
if(inst_18778__$1){
var statearr_18818_18880 = state_18798__$1;
(statearr_18818_18880[(1)] = (15));

} else {
var statearr_18819_18881 = state_18798__$1;
(statearr_18819_18881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (16))){
var inst_18778 = (state_18798[(11)]);
var state_18798__$1 = state_18798;
var statearr_18820_18882 = state_18798__$1;
(statearr_18820_18882[(2)] = inst_18778);

(statearr_18820_18882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (10))){
var inst_18770 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18821_18883 = state_18798__$1;
(statearr_18821_18883[(2)] = inst_18770);

(statearr_18821_18883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (18))){
var inst_18781 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18822_18884 = state_18798__$1;
(statearr_18822_18884[(2)] = inst_18781);

(statearr_18822_18884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (8))){
var inst_18767 = cljs.core.async.close_BANG_.call(null,to);
var state_18798__$1 = state_18798;
var statearr_18823_18885 = state_18798__$1;
(statearr_18823_18885[(2)] = inst_18767);

(statearr_18823_18885[(1)] = (10));


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
});})(c__8399__auto__,jobs,results,process,async))
;
return ((function (switch__8334__auto__,c__8399__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18827[(1)] = (1));

return statearr_18827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18798){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18828){if((e18828 instanceof Object)){
var ex__8338__auto__ = e18828;
var statearr_18829_18886 = state_18798;
(statearr_18829_18886[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_18798;
state_18798 = G__18887;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18830 = f__8400__auto__.call(null);
(statearr_18830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto__,jobs,results,process,async))
);

return c__8399__auto__;
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
var args18888 = [];
var len__6152__auto___18891 = arguments.length;
var i__6153__auto___18892 = (0);
while(true){
if((i__6153__auto___18892 < len__6152__auto___18891)){
args18888.push((arguments[i__6153__auto___18892]));

var G__18893 = (i__6153__auto___18892 + (1));
i__6153__auto___18892 = G__18893;
continue;
} else {
}
break;
}

var G__18890 = args18888.length;
switch (G__18890) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18888.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args18895 = [];
var len__6152__auto___18898 = arguments.length;
var i__6153__auto___18899 = (0);
while(true){
if((i__6153__auto___18899 < len__6152__auto___18898)){
args18895.push((arguments[i__6153__auto___18899]));

var G__18900 = (i__6153__auto___18899 + (1));
i__6153__auto___18899 = G__18900;
continue;
} else {
}
break;
}

var G__18897 = args18895.length;
switch (G__18897) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18895.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args18902 = [];
var len__6152__auto___18955 = arguments.length;
var i__6153__auto___18956 = (0);
while(true){
if((i__6153__auto___18956 < len__6152__auto___18955)){
args18902.push((arguments[i__6153__auto___18956]));

var G__18957 = (i__6153__auto___18956 + (1));
i__6153__auto___18956 = G__18957;
continue;
} else {
}
break;
}

var G__18904 = args18902.length;
switch (G__18904) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18902.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8399__auto___18959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18959,tc,fc){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18959,tc,fc){
return (function (state_18930){
var state_val_18931 = (state_18930[(1)]);
if((state_val_18931 === (7))){
var inst_18926 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18932_18960 = state_18930__$1;
(statearr_18932_18960[(2)] = inst_18926);

(statearr_18932_18960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (1))){
var state_18930__$1 = state_18930;
var statearr_18933_18961 = state_18930__$1;
(statearr_18933_18961[(2)] = null);

(statearr_18933_18961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (4))){
var inst_18907 = (state_18930[(7)]);
var inst_18907__$1 = (state_18930[(2)]);
var inst_18908 = (inst_18907__$1 == null);
var state_18930__$1 = (function (){var statearr_18934 = state_18930;
(statearr_18934[(7)] = inst_18907__$1);

return statearr_18934;
})();
if(cljs.core.truth_(inst_18908)){
var statearr_18935_18962 = state_18930__$1;
(statearr_18935_18962[(1)] = (5));

} else {
var statearr_18936_18963 = state_18930__$1;
(statearr_18936_18963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (13))){
var state_18930__$1 = state_18930;
var statearr_18937_18964 = state_18930__$1;
(statearr_18937_18964[(2)] = null);

(statearr_18937_18964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (6))){
var inst_18907 = (state_18930[(7)]);
var inst_18913 = p.call(null,inst_18907);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18913)){
var statearr_18938_18965 = state_18930__$1;
(statearr_18938_18965[(1)] = (9));

} else {
var statearr_18939_18966 = state_18930__$1;
(statearr_18939_18966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (3))){
var inst_18928 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18930__$1,inst_18928);
} else {
if((state_val_18931 === (12))){
var state_18930__$1 = state_18930;
var statearr_18940_18967 = state_18930__$1;
(statearr_18940_18967[(2)] = null);

(statearr_18940_18967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (2))){
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18930__$1,(4),ch);
} else {
if((state_val_18931 === (11))){
var inst_18907 = (state_18930[(7)]);
var inst_18917 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18930__$1,(8),inst_18917,inst_18907);
} else {
if((state_val_18931 === (9))){
var state_18930__$1 = state_18930;
var statearr_18941_18968 = state_18930__$1;
(statearr_18941_18968[(2)] = tc);

(statearr_18941_18968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (5))){
var inst_18910 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18911 = cljs.core.async.close_BANG_.call(null,fc);
var state_18930__$1 = (function (){var statearr_18942 = state_18930;
(statearr_18942[(8)] = inst_18910);

return statearr_18942;
})();
var statearr_18943_18969 = state_18930__$1;
(statearr_18943_18969[(2)] = inst_18911);

(statearr_18943_18969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (14))){
var inst_18924 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18944_18970 = state_18930__$1;
(statearr_18944_18970[(2)] = inst_18924);

(statearr_18944_18970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (10))){
var state_18930__$1 = state_18930;
var statearr_18945_18971 = state_18930__$1;
(statearr_18945_18971[(2)] = fc);

(statearr_18945_18971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (8))){
var inst_18919 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18919)){
var statearr_18946_18972 = state_18930__$1;
(statearr_18946_18972[(1)] = (12));

} else {
var statearr_18947_18973 = state_18930__$1;
(statearr_18947_18973[(1)] = (13));

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
});})(c__8399__auto___18959,tc,fc))
;
return ((function (switch__8334__auto__,c__8399__auto___18959,tc,fc){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18951 = [null,null,null,null,null,null,null,null,null];
(statearr_18951[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18951[(1)] = (1));

return statearr_18951;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18930){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18952){if((e18952 instanceof Object)){
var ex__8338__auto__ = e18952;
var statearr_18953_18974 = state_18930;
(statearr_18953_18974[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18975 = state_18930;
state_18930 = G__18975;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18959,tc,fc))
})();
var state__8401__auto__ = (function (){var statearr_18954 = f__8400__auto__.call(null);
(statearr_18954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18959);

return statearr_18954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18959,tc,fc))
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
var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__){
return (function (state_19022){
var state_val_19023 = (state_19022[(1)]);
if((state_val_19023 === (1))){
var inst_19008 = init;
var state_19022__$1 = (function (){var statearr_19024 = state_19022;
(statearr_19024[(7)] = inst_19008);

return statearr_19024;
})();
var statearr_19025_19040 = state_19022__$1;
(statearr_19025_19040[(2)] = null);

(statearr_19025_19040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (2))){
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19022__$1,(4),ch);
} else {
if((state_val_19023 === (3))){
var inst_19020 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19022__$1,inst_19020);
} else {
if((state_val_19023 === (4))){
var inst_19011 = (state_19022[(8)]);
var inst_19011__$1 = (state_19022[(2)]);
var inst_19012 = (inst_19011__$1 == null);
var state_19022__$1 = (function (){var statearr_19026 = state_19022;
(statearr_19026[(8)] = inst_19011__$1);

return statearr_19026;
})();
if(cljs.core.truth_(inst_19012)){
var statearr_19027_19041 = state_19022__$1;
(statearr_19027_19041[(1)] = (5));

} else {
var statearr_19028_19042 = state_19022__$1;
(statearr_19028_19042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (5))){
var inst_19008 = (state_19022[(7)]);
var state_19022__$1 = state_19022;
var statearr_19029_19043 = state_19022__$1;
(statearr_19029_19043[(2)] = inst_19008);

(statearr_19029_19043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (6))){
var inst_19011 = (state_19022[(8)]);
var inst_19008 = (state_19022[(7)]);
var inst_19015 = f.call(null,inst_19008,inst_19011);
var inst_19008__$1 = inst_19015;
var state_19022__$1 = (function (){var statearr_19030 = state_19022;
(statearr_19030[(7)] = inst_19008__$1);

return statearr_19030;
})();
var statearr_19031_19044 = state_19022__$1;
(statearr_19031_19044[(2)] = null);

(statearr_19031_19044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (7))){
var inst_19018 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19032_19045 = state_19022__$1;
(statearr_19032_19045[(2)] = inst_19018);

(statearr_19032_19045[(1)] = (3));


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
});})(c__8399__auto__))
;
return ((function (switch__8334__auto__,c__8399__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8335__auto____0 = (function (){
var statearr_19036 = [null,null,null,null,null,null,null,null,null];
(statearr_19036[(0)] = cljs$core$async$reduce_$_state_machine__8335__auto__);

(statearr_19036[(1)] = (1));

return statearr_19036;
});
var cljs$core$async$reduce_$_state_machine__8335__auto____1 = (function (state_19022){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19037){if((e19037 instanceof Object)){
var ex__8338__auto__ = e19037;
var statearr_19038_19046 = state_19022;
(statearr_19038_19046[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19047 = state_19022;
state_19022 = G__19047;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8335__auto__ = function(state_19022){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8335__auto____1.call(this,state_19022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8335__auto____0;
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8335__auto____1;
return cljs$core$async$reduce_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_19039 = f__8400__auto__.call(null);
(statearr_19039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_19039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto__))
);

return c__8399__auto__;
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
var args19048 = [];
var len__6152__auto___19100 = arguments.length;
var i__6153__auto___19101 = (0);
while(true){
if((i__6153__auto___19101 < len__6152__auto___19100)){
args19048.push((arguments[i__6153__auto___19101]));

var G__19102 = (i__6153__auto___19101 + (1));
i__6153__auto___19101 = G__19102;
continue;
} else {
}
break;
}

var G__19050 = args19048.length;
switch (G__19050) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19048.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__){
return (function (state_19075){
var state_val_19076 = (state_19075[(1)]);
if((state_val_19076 === (7))){
var inst_19057 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19077_19104 = state_19075__$1;
(statearr_19077_19104[(2)] = inst_19057);

(statearr_19077_19104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (1))){
var inst_19051 = cljs.core.seq.call(null,coll);
var inst_19052 = inst_19051;
var state_19075__$1 = (function (){var statearr_19078 = state_19075;
(statearr_19078[(7)] = inst_19052);

return statearr_19078;
})();
var statearr_19079_19105 = state_19075__$1;
(statearr_19079_19105[(2)] = null);

(statearr_19079_19105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (4))){
var inst_19052 = (state_19075[(7)]);
var inst_19055 = cljs.core.first.call(null,inst_19052);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19075__$1,(7),ch,inst_19055);
} else {
if((state_val_19076 === (13))){
var inst_19069 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19080_19106 = state_19075__$1;
(statearr_19080_19106[(2)] = inst_19069);

(statearr_19080_19106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (6))){
var inst_19060 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
if(cljs.core.truth_(inst_19060)){
var statearr_19081_19107 = state_19075__$1;
(statearr_19081_19107[(1)] = (8));

} else {
var statearr_19082_19108 = state_19075__$1;
(statearr_19082_19108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (3))){
var inst_19073 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19075__$1,inst_19073);
} else {
if((state_val_19076 === (12))){
var state_19075__$1 = state_19075;
var statearr_19083_19109 = state_19075__$1;
(statearr_19083_19109[(2)] = null);

(statearr_19083_19109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (2))){
var inst_19052 = (state_19075[(7)]);
var state_19075__$1 = state_19075;
if(cljs.core.truth_(inst_19052)){
var statearr_19084_19110 = state_19075__$1;
(statearr_19084_19110[(1)] = (4));

} else {
var statearr_19085_19111 = state_19075__$1;
(statearr_19085_19111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (11))){
var inst_19066 = cljs.core.async.close_BANG_.call(null,ch);
var state_19075__$1 = state_19075;
var statearr_19086_19112 = state_19075__$1;
(statearr_19086_19112[(2)] = inst_19066);

(statearr_19086_19112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (9))){
var state_19075__$1 = state_19075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19087_19113 = state_19075__$1;
(statearr_19087_19113[(1)] = (11));

} else {
var statearr_19088_19114 = state_19075__$1;
(statearr_19088_19114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (5))){
var inst_19052 = (state_19075[(7)]);
var state_19075__$1 = state_19075;
var statearr_19089_19115 = state_19075__$1;
(statearr_19089_19115[(2)] = inst_19052);

(statearr_19089_19115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (10))){
var inst_19071 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19090_19116 = state_19075__$1;
(statearr_19090_19116[(2)] = inst_19071);

(statearr_19090_19116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (8))){
var inst_19052 = (state_19075[(7)]);
var inst_19062 = cljs.core.next.call(null,inst_19052);
var inst_19052__$1 = inst_19062;
var state_19075__$1 = (function (){var statearr_19091 = state_19075;
(statearr_19091[(7)] = inst_19052__$1);

return statearr_19091;
})();
var statearr_19092_19117 = state_19075__$1;
(statearr_19092_19117[(2)] = null);

(statearr_19092_19117[(1)] = (2));


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
});})(c__8399__auto__))
;
return ((function (switch__8334__auto__,c__8399__auto__){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_19096 = [null,null,null,null,null,null,null,null];
(statearr_19096[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_19096[(1)] = (1));

return statearr_19096;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_19075){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19097){if((e19097 instanceof Object)){
var ex__8338__auto__ = e19097;
var statearr_19098_19118 = state_19075;
(statearr_19098_19118[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19119 = state_19075;
state_19075 = G__19119;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_19075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_19075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_19099 = f__8400__auto__.call(null);
(statearr_19099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_19099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto__))
);

return c__8399__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__5750__auto__.call(null,_);
} else {
var m__5750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__5750__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19341 = (function (mult,ch,cs,meta19342){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19342 = meta19342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19343,meta19342__$1){
var self__ = this;
var _19343__$1 = this;
return (new cljs.core.async.t_cljs$core$async19341(self__.mult,self__.ch,self__.cs,meta19342__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19343){
var self__ = this;
var _19343__$1 = this;
return self__.meta19342;
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19342","meta19342",-1207796130,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19341";

cljs.core.async.t_cljs$core$async19341.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19341");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19341 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19341(mult__$1,ch__$1,cs__$1,meta19342){
return (new cljs.core.async.t_cljs$core$async19341(mult__$1,ch__$1,cs__$1,meta19342));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19341(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8399__auto___19562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19562,cs,m,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19562,cs,m,dchan,dctr,done){
return (function (state_19474){
var state_val_19475 = (state_19474[(1)]);
if((state_val_19475 === (7))){
var inst_19470 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19476_19563 = state_19474__$1;
(statearr_19476_19563[(2)] = inst_19470);

(statearr_19476_19563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (20))){
var inst_19375 = (state_19474[(7)]);
var inst_19385 = cljs.core.first.call(null,inst_19375);
var inst_19386 = cljs.core.nth.call(null,inst_19385,(0),null);
var inst_19387 = cljs.core.nth.call(null,inst_19385,(1),null);
var state_19474__$1 = (function (){var statearr_19477 = state_19474;
(statearr_19477[(8)] = inst_19386);

return statearr_19477;
})();
if(cljs.core.truth_(inst_19387)){
var statearr_19478_19564 = state_19474__$1;
(statearr_19478_19564[(1)] = (22));

} else {
var statearr_19479_19565 = state_19474__$1;
(statearr_19479_19565[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (27))){
var inst_19346 = (state_19474[(9)]);
var inst_19417 = (state_19474[(10)]);
var inst_19422 = (state_19474[(11)]);
var inst_19415 = (state_19474[(12)]);
var inst_19422__$1 = cljs.core._nth.call(null,inst_19415,inst_19417);
var inst_19423 = cljs.core.async.put_BANG_.call(null,inst_19422__$1,inst_19346,done);
var state_19474__$1 = (function (){var statearr_19480 = state_19474;
(statearr_19480[(11)] = inst_19422__$1);

return statearr_19480;
})();
if(cljs.core.truth_(inst_19423)){
var statearr_19481_19566 = state_19474__$1;
(statearr_19481_19566[(1)] = (30));

} else {
var statearr_19482_19567 = state_19474__$1;
(statearr_19482_19567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (1))){
var state_19474__$1 = state_19474;
var statearr_19483_19568 = state_19474__$1;
(statearr_19483_19568[(2)] = null);

(statearr_19483_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (24))){
var inst_19375 = (state_19474[(7)]);
var inst_19392 = (state_19474[(2)]);
var inst_19393 = cljs.core.next.call(null,inst_19375);
var inst_19355 = inst_19393;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19484 = state_19474;
(statearr_19484[(13)] = inst_19355);

(statearr_19484[(14)] = inst_19392);

(statearr_19484[(15)] = inst_19356);

(statearr_19484[(16)] = inst_19357);

(statearr_19484[(17)] = inst_19358);

return statearr_19484;
})();
var statearr_19485_19569 = state_19474__$1;
(statearr_19485_19569[(2)] = null);

(statearr_19485_19569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (39))){
var state_19474__$1 = state_19474;
var statearr_19489_19570 = state_19474__$1;
(statearr_19489_19570[(2)] = null);

(statearr_19489_19570[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (4))){
var inst_19346 = (state_19474[(9)]);
var inst_19346__$1 = (state_19474[(2)]);
var inst_19347 = (inst_19346__$1 == null);
var state_19474__$1 = (function (){var statearr_19490 = state_19474;
(statearr_19490[(9)] = inst_19346__$1);

return statearr_19490;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19491_19571 = state_19474__$1;
(statearr_19491_19571[(1)] = (5));

} else {
var statearr_19492_19572 = state_19474__$1;
(statearr_19492_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (15))){
var inst_19355 = (state_19474[(13)]);
var inst_19356 = (state_19474[(15)]);
var inst_19357 = (state_19474[(16)]);
var inst_19358 = (state_19474[(17)]);
var inst_19371 = (state_19474[(2)]);
var inst_19372 = (inst_19358 + (1));
var tmp19486 = inst_19355;
var tmp19487 = inst_19356;
var tmp19488 = inst_19357;
var inst_19355__$1 = tmp19486;
var inst_19356__$1 = tmp19487;
var inst_19357__$1 = tmp19488;
var inst_19358__$1 = inst_19372;
var state_19474__$1 = (function (){var statearr_19493 = state_19474;
(statearr_19493[(13)] = inst_19355__$1);

(statearr_19493[(18)] = inst_19371);

(statearr_19493[(15)] = inst_19356__$1);

(statearr_19493[(16)] = inst_19357__$1);

(statearr_19493[(17)] = inst_19358__$1);

return statearr_19493;
})();
var statearr_19494_19573 = state_19474__$1;
(statearr_19494_19573[(2)] = null);

(statearr_19494_19573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (21))){
var inst_19396 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19498_19574 = state_19474__$1;
(statearr_19498_19574[(2)] = inst_19396);

(statearr_19498_19574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (31))){
var inst_19422 = (state_19474[(11)]);
var inst_19426 = done.call(null,null);
var inst_19427 = cljs.core.async.untap_STAR_.call(null,m,inst_19422);
var state_19474__$1 = (function (){var statearr_19499 = state_19474;
(statearr_19499[(19)] = inst_19426);

return statearr_19499;
})();
var statearr_19500_19575 = state_19474__$1;
(statearr_19500_19575[(2)] = inst_19427);

(statearr_19500_19575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (32))){
var inst_19416 = (state_19474[(20)]);
var inst_19417 = (state_19474[(10)]);
var inst_19415 = (state_19474[(12)]);
var inst_19414 = (state_19474[(21)]);
var inst_19429 = (state_19474[(2)]);
var inst_19430 = (inst_19417 + (1));
var tmp19495 = inst_19416;
var tmp19496 = inst_19415;
var tmp19497 = inst_19414;
var inst_19414__$1 = tmp19497;
var inst_19415__$1 = tmp19496;
var inst_19416__$1 = tmp19495;
var inst_19417__$1 = inst_19430;
var state_19474__$1 = (function (){var statearr_19501 = state_19474;
(statearr_19501[(20)] = inst_19416__$1);

(statearr_19501[(22)] = inst_19429);

(statearr_19501[(10)] = inst_19417__$1);

(statearr_19501[(12)] = inst_19415__$1);

(statearr_19501[(21)] = inst_19414__$1);

return statearr_19501;
})();
var statearr_19502_19576 = state_19474__$1;
(statearr_19502_19576[(2)] = null);

(statearr_19502_19576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (40))){
var inst_19442 = (state_19474[(23)]);
var inst_19446 = done.call(null,null);
var inst_19447 = cljs.core.async.untap_STAR_.call(null,m,inst_19442);
var state_19474__$1 = (function (){var statearr_19503 = state_19474;
(statearr_19503[(24)] = inst_19446);

return statearr_19503;
})();
var statearr_19504_19577 = state_19474__$1;
(statearr_19504_19577[(2)] = inst_19447);

(statearr_19504_19577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (33))){
var inst_19433 = (state_19474[(25)]);
var inst_19435 = cljs.core.chunked_seq_QMARK_.call(null,inst_19433);
var state_19474__$1 = state_19474;
if(inst_19435){
var statearr_19505_19578 = state_19474__$1;
(statearr_19505_19578[(1)] = (36));

} else {
var statearr_19506_19579 = state_19474__$1;
(statearr_19506_19579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (13))){
var inst_19365 = (state_19474[(26)]);
var inst_19368 = cljs.core.async.close_BANG_.call(null,inst_19365);
var state_19474__$1 = state_19474;
var statearr_19507_19580 = state_19474__$1;
(statearr_19507_19580[(2)] = inst_19368);

(statearr_19507_19580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (22))){
var inst_19386 = (state_19474[(8)]);
var inst_19389 = cljs.core.async.close_BANG_.call(null,inst_19386);
var state_19474__$1 = state_19474;
var statearr_19508_19581 = state_19474__$1;
(statearr_19508_19581[(2)] = inst_19389);

(statearr_19508_19581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (36))){
var inst_19433 = (state_19474[(25)]);
var inst_19437 = cljs.core.chunk_first.call(null,inst_19433);
var inst_19438 = cljs.core.chunk_rest.call(null,inst_19433);
var inst_19439 = cljs.core.count.call(null,inst_19437);
var inst_19414 = inst_19438;
var inst_19415 = inst_19437;
var inst_19416 = inst_19439;
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19509 = state_19474;
(statearr_19509[(20)] = inst_19416);

(statearr_19509[(10)] = inst_19417);

(statearr_19509[(12)] = inst_19415);

(statearr_19509[(21)] = inst_19414);

return statearr_19509;
})();
var statearr_19510_19582 = state_19474__$1;
(statearr_19510_19582[(2)] = null);

(statearr_19510_19582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (41))){
var inst_19433 = (state_19474[(25)]);
var inst_19449 = (state_19474[(2)]);
var inst_19450 = cljs.core.next.call(null,inst_19433);
var inst_19414 = inst_19450;
var inst_19415 = null;
var inst_19416 = (0);
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19511 = state_19474;
(statearr_19511[(20)] = inst_19416);

(statearr_19511[(27)] = inst_19449);

(statearr_19511[(10)] = inst_19417);

(statearr_19511[(12)] = inst_19415);

(statearr_19511[(21)] = inst_19414);

return statearr_19511;
})();
var statearr_19512_19583 = state_19474__$1;
(statearr_19512_19583[(2)] = null);

(statearr_19512_19583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (43))){
var state_19474__$1 = state_19474;
var statearr_19513_19584 = state_19474__$1;
(statearr_19513_19584[(2)] = null);

(statearr_19513_19584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (29))){
var inst_19458 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19514_19585 = state_19474__$1;
(statearr_19514_19585[(2)] = inst_19458);

(statearr_19514_19585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (44))){
var inst_19467 = (state_19474[(2)]);
var state_19474__$1 = (function (){var statearr_19515 = state_19474;
(statearr_19515[(28)] = inst_19467);

return statearr_19515;
})();
var statearr_19516_19586 = state_19474__$1;
(statearr_19516_19586[(2)] = null);

(statearr_19516_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (6))){
var inst_19406 = (state_19474[(29)]);
var inst_19405 = cljs.core.deref.call(null,cs);
var inst_19406__$1 = cljs.core.keys.call(null,inst_19405);
var inst_19407 = cljs.core.count.call(null,inst_19406__$1);
var inst_19408 = cljs.core.reset_BANG_.call(null,dctr,inst_19407);
var inst_19413 = cljs.core.seq.call(null,inst_19406__$1);
var inst_19414 = inst_19413;
var inst_19415 = null;
var inst_19416 = (0);
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19517 = state_19474;
(statearr_19517[(20)] = inst_19416);

(statearr_19517[(10)] = inst_19417);

(statearr_19517[(30)] = inst_19408);

(statearr_19517[(29)] = inst_19406__$1);

(statearr_19517[(12)] = inst_19415);

(statearr_19517[(21)] = inst_19414);

return statearr_19517;
})();
var statearr_19518_19587 = state_19474__$1;
(statearr_19518_19587[(2)] = null);

(statearr_19518_19587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (28))){
var inst_19433 = (state_19474[(25)]);
var inst_19414 = (state_19474[(21)]);
var inst_19433__$1 = cljs.core.seq.call(null,inst_19414);
var state_19474__$1 = (function (){var statearr_19519 = state_19474;
(statearr_19519[(25)] = inst_19433__$1);

return statearr_19519;
})();
if(inst_19433__$1){
var statearr_19520_19588 = state_19474__$1;
(statearr_19520_19588[(1)] = (33));

} else {
var statearr_19521_19589 = state_19474__$1;
(statearr_19521_19589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (25))){
var inst_19416 = (state_19474[(20)]);
var inst_19417 = (state_19474[(10)]);
var inst_19419 = (inst_19417 < inst_19416);
var inst_19420 = inst_19419;
var state_19474__$1 = state_19474;
if(cljs.core.truth_(inst_19420)){
var statearr_19522_19590 = state_19474__$1;
(statearr_19522_19590[(1)] = (27));

} else {
var statearr_19523_19591 = state_19474__$1;
(statearr_19523_19591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (34))){
var state_19474__$1 = state_19474;
var statearr_19524_19592 = state_19474__$1;
(statearr_19524_19592[(2)] = null);

(statearr_19524_19592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (17))){
var state_19474__$1 = state_19474;
var statearr_19525_19593 = state_19474__$1;
(statearr_19525_19593[(2)] = null);

(statearr_19525_19593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (3))){
var inst_19472 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19474__$1,inst_19472);
} else {
if((state_val_19475 === (12))){
var inst_19401 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19526_19594 = state_19474__$1;
(statearr_19526_19594[(2)] = inst_19401);

(statearr_19526_19594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (2))){
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19474__$1,(4),ch);
} else {
if((state_val_19475 === (23))){
var state_19474__$1 = state_19474;
var statearr_19527_19595 = state_19474__$1;
(statearr_19527_19595[(2)] = null);

(statearr_19527_19595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (35))){
var inst_19456 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19528_19596 = state_19474__$1;
(statearr_19528_19596[(2)] = inst_19456);

(statearr_19528_19596[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (19))){
var inst_19375 = (state_19474[(7)]);
var inst_19379 = cljs.core.chunk_first.call(null,inst_19375);
var inst_19380 = cljs.core.chunk_rest.call(null,inst_19375);
var inst_19381 = cljs.core.count.call(null,inst_19379);
var inst_19355 = inst_19380;
var inst_19356 = inst_19379;
var inst_19357 = inst_19381;
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19529 = state_19474;
(statearr_19529[(13)] = inst_19355);

(statearr_19529[(15)] = inst_19356);

(statearr_19529[(16)] = inst_19357);

(statearr_19529[(17)] = inst_19358);

return statearr_19529;
})();
var statearr_19530_19597 = state_19474__$1;
(statearr_19530_19597[(2)] = null);

(statearr_19530_19597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (11))){
var inst_19355 = (state_19474[(13)]);
var inst_19375 = (state_19474[(7)]);
var inst_19375__$1 = cljs.core.seq.call(null,inst_19355);
var state_19474__$1 = (function (){var statearr_19531 = state_19474;
(statearr_19531[(7)] = inst_19375__$1);

return statearr_19531;
})();
if(inst_19375__$1){
var statearr_19532_19598 = state_19474__$1;
(statearr_19532_19598[(1)] = (16));

} else {
var statearr_19533_19599 = state_19474__$1;
(statearr_19533_19599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (9))){
var inst_19403 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19534_19600 = state_19474__$1;
(statearr_19534_19600[(2)] = inst_19403);

(statearr_19534_19600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (5))){
var inst_19353 = cljs.core.deref.call(null,cs);
var inst_19354 = cljs.core.seq.call(null,inst_19353);
var inst_19355 = inst_19354;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19535 = state_19474;
(statearr_19535[(13)] = inst_19355);

(statearr_19535[(15)] = inst_19356);

(statearr_19535[(16)] = inst_19357);

(statearr_19535[(17)] = inst_19358);

return statearr_19535;
})();
var statearr_19536_19601 = state_19474__$1;
(statearr_19536_19601[(2)] = null);

(statearr_19536_19601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (14))){
var state_19474__$1 = state_19474;
var statearr_19537_19602 = state_19474__$1;
(statearr_19537_19602[(2)] = null);

(statearr_19537_19602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (45))){
var inst_19464 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19538_19603 = state_19474__$1;
(statearr_19538_19603[(2)] = inst_19464);

(statearr_19538_19603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (26))){
var inst_19406 = (state_19474[(29)]);
var inst_19460 = (state_19474[(2)]);
var inst_19461 = cljs.core.seq.call(null,inst_19406);
var state_19474__$1 = (function (){var statearr_19539 = state_19474;
(statearr_19539[(31)] = inst_19460);

return statearr_19539;
})();
if(inst_19461){
var statearr_19540_19604 = state_19474__$1;
(statearr_19540_19604[(1)] = (42));

} else {
var statearr_19541_19605 = state_19474__$1;
(statearr_19541_19605[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (16))){
var inst_19375 = (state_19474[(7)]);
var inst_19377 = cljs.core.chunked_seq_QMARK_.call(null,inst_19375);
var state_19474__$1 = state_19474;
if(inst_19377){
var statearr_19542_19606 = state_19474__$1;
(statearr_19542_19606[(1)] = (19));

} else {
var statearr_19543_19607 = state_19474__$1;
(statearr_19543_19607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (38))){
var inst_19453 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19544_19608 = state_19474__$1;
(statearr_19544_19608[(2)] = inst_19453);

(statearr_19544_19608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (30))){
var state_19474__$1 = state_19474;
var statearr_19545_19609 = state_19474__$1;
(statearr_19545_19609[(2)] = null);

(statearr_19545_19609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (10))){
var inst_19356 = (state_19474[(15)]);
var inst_19358 = (state_19474[(17)]);
var inst_19364 = cljs.core._nth.call(null,inst_19356,inst_19358);
var inst_19365 = cljs.core.nth.call(null,inst_19364,(0),null);
var inst_19366 = cljs.core.nth.call(null,inst_19364,(1),null);
var state_19474__$1 = (function (){var statearr_19546 = state_19474;
(statearr_19546[(26)] = inst_19365);

return statearr_19546;
})();
if(cljs.core.truth_(inst_19366)){
var statearr_19547_19610 = state_19474__$1;
(statearr_19547_19610[(1)] = (13));

} else {
var statearr_19548_19611 = state_19474__$1;
(statearr_19548_19611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (18))){
var inst_19399 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19549_19612 = state_19474__$1;
(statearr_19549_19612[(2)] = inst_19399);

(statearr_19549_19612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (42))){
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19474__$1,(45),dchan);
} else {
if((state_val_19475 === (37))){
var inst_19442 = (state_19474[(23)]);
var inst_19346 = (state_19474[(9)]);
var inst_19433 = (state_19474[(25)]);
var inst_19442__$1 = cljs.core.first.call(null,inst_19433);
var inst_19443 = cljs.core.async.put_BANG_.call(null,inst_19442__$1,inst_19346,done);
var state_19474__$1 = (function (){var statearr_19550 = state_19474;
(statearr_19550[(23)] = inst_19442__$1);

return statearr_19550;
})();
if(cljs.core.truth_(inst_19443)){
var statearr_19551_19613 = state_19474__$1;
(statearr_19551_19613[(1)] = (39));

} else {
var statearr_19552_19614 = state_19474__$1;
(statearr_19552_19614[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (8))){
var inst_19357 = (state_19474[(16)]);
var inst_19358 = (state_19474[(17)]);
var inst_19360 = (inst_19358 < inst_19357);
var inst_19361 = inst_19360;
var state_19474__$1 = state_19474;
if(cljs.core.truth_(inst_19361)){
var statearr_19553_19615 = state_19474__$1;
(statearr_19553_19615[(1)] = (10));

} else {
var statearr_19554_19616 = state_19474__$1;
(statearr_19554_19616[(1)] = (11));

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
});})(c__8399__auto___19562,cs,m,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___19562,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8335__auto__ = null;
var cljs$core$async$mult_$_state_machine__8335__auto____0 = (function (){
var statearr_19558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19558[(0)] = cljs$core$async$mult_$_state_machine__8335__auto__);

(statearr_19558[(1)] = (1));

return statearr_19558;
});
var cljs$core$async$mult_$_state_machine__8335__auto____1 = (function (state_19474){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19559){if((e19559 instanceof Object)){
var ex__8338__auto__ = e19559;
var statearr_19560_19617 = state_19474;
(statearr_19560_19617[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19618 = state_19474;
state_19474 = G__19618;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8335__auto__ = function(state_19474){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8335__auto____1.call(this,state_19474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8335__auto____0;
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8335__auto____1;
return cljs$core$async$mult_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19562,cs,m,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_19561 = f__8400__auto__.call(null);
(statearr_19561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19562);

return statearr_19561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19562,cs,m,dchan,dctr,done))
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
var args19619 = [];
var len__6152__auto___19622 = arguments.length;
var i__6153__auto___19623 = (0);
while(true){
if((i__6153__auto___19623 < len__6152__auto___19622)){
args19619.push((arguments[i__6153__auto___19623]));

var G__19624 = (i__6153__auto___19623 + (1));
i__6153__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var G__19621 = args19619.length;
switch (G__19621) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19619.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__5750__auto__.call(null,m,state_map);
} else {
var m__5750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__5750__auto__.call(null,m,mode);
} else {
var m__5750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19636 = arguments.length;
var i__6153__auto___19637 = (0);
while(true){
if((i__6153__auto___19637 < len__6152__auto___19636)){
args__6159__auto__.push((arguments[i__6153__auto___19637]));

var G__19638 = (i__6153__auto___19637 + (1));
i__6153__auto___19637 = G__19638;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19630){
var map__19631 = p__19630;
var map__19631__$1 = ((((!((map__19631 == null)))?((((map__19631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19631):map__19631);
var opts = map__19631__$1;
var statearr_19633_19639 = state;
(statearr_19633_19639[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19631,map__19631__$1,opts){
return (function (val){
var statearr_19634_19640 = state;
(statearr_19634_19640[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19631,map__19631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19635_19641 = state;
(statearr_19635_19641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19626){
var G__19627 = cljs.core.first.call(null,seq19626);
var seq19626__$1 = cljs.core.next.call(null,seq19626);
var G__19628 = cljs.core.first.call(null,seq19626__$1);
var seq19626__$2 = cljs.core.next.call(null,seq19626__$1);
var G__19629 = cljs.core.first.call(null,seq19626__$2);
var seq19626__$3 = cljs.core.next.call(null,seq19626__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19627,G__19628,G__19629,seq19626__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19805 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19806){
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
this.meta19806 = meta19806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19807,meta19806__$1){
var self__ = this;
var _19807__$1 = this;
return (new cljs.core.async.t_cljs$core$async19805(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19806__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19807){
var self__ = this;
var _19807__$1 = this;
return self__.meta19806;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19806","meta19806",583976901,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19805";

cljs.core.async.t_cljs$core$async19805.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19805");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19805 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19805(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19806){
return (new cljs.core.async.t_cljs$core$async19805(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19806));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19805(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___19968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19905){
var state_val_19906 = (state_19905[(1)]);
if((state_val_19906 === (7))){
var inst_19823 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
var statearr_19907_19969 = state_19905__$1;
(statearr_19907_19969[(2)] = inst_19823);

(statearr_19907_19969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (20))){
var inst_19835 = (state_19905[(7)]);
var state_19905__$1 = state_19905;
var statearr_19908_19970 = state_19905__$1;
(statearr_19908_19970[(2)] = inst_19835);

(statearr_19908_19970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (27))){
var state_19905__$1 = state_19905;
var statearr_19909_19971 = state_19905__$1;
(statearr_19909_19971[(2)] = null);

(statearr_19909_19971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (1))){
var inst_19811 = (state_19905[(8)]);
var inst_19811__$1 = calc_state.call(null);
var inst_19813 = (inst_19811__$1 == null);
var inst_19814 = cljs.core.not.call(null,inst_19813);
var state_19905__$1 = (function (){var statearr_19910 = state_19905;
(statearr_19910[(8)] = inst_19811__$1);

return statearr_19910;
})();
if(inst_19814){
var statearr_19911_19972 = state_19905__$1;
(statearr_19911_19972[(1)] = (2));

} else {
var statearr_19912_19973 = state_19905__$1;
(statearr_19912_19973[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (24))){
var inst_19858 = (state_19905[(9)]);
var inst_19879 = (state_19905[(10)]);
var inst_19865 = (state_19905[(11)]);
var inst_19879__$1 = inst_19858.call(null,inst_19865);
var state_19905__$1 = (function (){var statearr_19913 = state_19905;
(statearr_19913[(10)] = inst_19879__$1);

return statearr_19913;
})();
if(cljs.core.truth_(inst_19879__$1)){
var statearr_19914_19974 = state_19905__$1;
(statearr_19914_19974[(1)] = (29));

} else {
var statearr_19915_19975 = state_19905__$1;
(statearr_19915_19975[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (4))){
var inst_19826 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19826)){
var statearr_19916_19976 = state_19905__$1;
(statearr_19916_19976[(1)] = (8));

} else {
var statearr_19917_19977 = state_19905__$1;
(statearr_19917_19977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (15))){
var inst_19852 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19852)){
var statearr_19918_19978 = state_19905__$1;
(statearr_19918_19978[(1)] = (19));

} else {
var statearr_19919_19979 = state_19905__$1;
(statearr_19919_19979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (21))){
var inst_19857 = (state_19905[(12)]);
var inst_19857__$1 = (state_19905[(2)]);
var inst_19858 = cljs.core.get.call(null,inst_19857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19859 = cljs.core.get.call(null,inst_19857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19860 = cljs.core.get.call(null,inst_19857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19905__$1 = (function (){var statearr_19920 = state_19905;
(statearr_19920[(12)] = inst_19857__$1);

(statearr_19920[(13)] = inst_19859);

(statearr_19920[(9)] = inst_19858);

return statearr_19920;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19905__$1,(22),inst_19860);
} else {
if((state_val_19906 === (31))){
var inst_19887 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19887)){
var statearr_19921_19980 = state_19905__$1;
(statearr_19921_19980[(1)] = (32));

} else {
var statearr_19922_19981 = state_19905__$1;
(statearr_19922_19981[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (32))){
var inst_19864 = (state_19905[(14)]);
var state_19905__$1 = state_19905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19905__$1,(35),out,inst_19864);
} else {
if((state_val_19906 === (33))){
var inst_19857 = (state_19905[(12)]);
var inst_19835 = inst_19857;
var state_19905__$1 = (function (){var statearr_19923 = state_19905;
(statearr_19923[(7)] = inst_19835);

return statearr_19923;
})();
var statearr_19924_19982 = state_19905__$1;
(statearr_19924_19982[(2)] = null);

(statearr_19924_19982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (13))){
var inst_19835 = (state_19905[(7)]);
var inst_19842 = inst_19835.cljs$lang$protocol_mask$partition0$;
var inst_19843 = (inst_19842 & (64));
var inst_19844 = inst_19835.cljs$core$ISeq$;
var inst_19845 = (inst_19843) || (inst_19844);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19845)){
var statearr_19925_19983 = state_19905__$1;
(statearr_19925_19983[(1)] = (16));

} else {
var statearr_19926_19984 = state_19905__$1;
(statearr_19926_19984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (22))){
var inst_19864 = (state_19905[(14)]);
var inst_19865 = (state_19905[(11)]);
var inst_19863 = (state_19905[(2)]);
var inst_19864__$1 = cljs.core.nth.call(null,inst_19863,(0),null);
var inst_19865__$1 = cljs.core.nth.call(null,inst_19863,(1),null);
var inst_19866 = (inst_19864__$1 == null);
var inst_19867 = cljs.core._EQ_.call(null,inst_19865__$1,change);
var inst_19868 = (inst_19866) || (inst_19867);
var state_19905__$1 = (function (){var statearr_19927 = state_19905;
(statearr_19927[(14)] = inst_19864__$1);

(statearr_19927[(11)] = inst_19865__$1);

return statearr_19927;
})();
if(cljs.core.truth_(inst_19868)){
var statearr_19928_19985 = state_19905__$1;
(statearr_19928_19985[(1)] = (23));

} else {
var statearr_19929_19986 = state_19905__$1;
(statearr_19929_19986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (36))){
var inst_19857 = (state_19905[(12)]);
var inst_19835 = inst_19857;
var state_19905__$1 = (function (){var statearr_19930 = state_19905;
(statearr_19930[(7)] = inst_19835);

return statearr_19930;
})();
var statearr_19931_19987 = state_19905__$1;
(statearr_19931_19987[(2)] = null);

(statearr_19931_19987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (29))){
var inst_19879 = (state_19905[(10)]);
var state_19905__$1 = state_19905;
var statearr_19932_19988 = state_19905__$1;
(statearr_19932_19988[(2)] = inst_19879);

(statearr_19932_19988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (6))){
var state_19905__$1 = state_19905;
var statearr_19933_19989 = state_19905__$1;
(statearr_19933_19989[(2)] = false);

(statearr_19933_19989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (28))){
var inst_19875 = (state_19905[(2)]);
var inst_19876 = calc_state.call(null);
var inst_19835 = inst_19876;
var state_19905__$1 = (function (){var statearr_19934 = state_19905;
(statearr_19934[(7)] = inst_19835);

(statearr_19934[(15)] = inst_19875);

return statearr_19934;
})();
var statearr_19935_19990 = state_19905__$1;
(statearr_19935_19990[(2)] = null);

(statearr_19935_19990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (25))){
var inst_19901 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
var statearr_19936_19991 = state_19905__$1;
(statearr_19936_19991[(2)] = inst_19901);

(statearr_19936_19991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (34))){
var inst_19899 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
var statearr_19937_19992 = state_19905__$1;
(statearr_19937_19992[(2)] = inst_19899);

(statearr_19937_19992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (17))){
var state_19905__$1 = state_19905;
var statearr_19938_19993 = state_19905__$1;
(statearr_19938_19993[(2)] = false);

(statearr_19938_19993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (3))){
var state_19905__$1 = state_19905;
var statearr_19939_19994 = state_19905__$1;
(statearr_19939_19994[(2)] = false);

(statearr_19939_19994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (12))){
var inst_19903 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19905__$1,inst_19903);
} else {
if((state_val_19906 === (2))){
var inst_19811 = (state_19905[(8)]);
var inst_19816 = inst_19811.cljs$lang$protocol_mask$partition0$;
var inst_19817 = (inst_19816 & (64));
var inst_19818 = inst_19811.cljs$core$ISeq$;
var inst_19819 = (inst_19817) || (inst_19818);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19819)){
var statearr_19940_19995 = state_19905__$1;
(statearr_19940_19995[(1)] = (5));

} else {
var statearr_19941_19996 = state_19905__$1;
(statearr_19941_19996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (23))){
var inst_19864 = (state_19905[(14)]);
var inst_19870 = (inst_19864 == null);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19870)){
var statearr_19942_19997 = state_19905__$1;
(statearr_19942_19997[(1)] = (26));

} else {
var statearr_19943_19998 = state_19905__$1;
(statearr_19943_19998[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (35))){
var inst_19890 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
if(cljs.core.truth_(inst_19890)){
var statearr_19944_19999 = state_19905__$1;
(statearr_19944_19999[(1)] = (36));

} else {
var statearr_19945_20000 = state_19905__$1;
(statearr_19945_20000[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (19))){
var inst_19835 = (state_19905[(7)]);
var inst_19854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19835);
var state_19905__$1 = state_19905;
var statearr_19946_20001 = state_19905__$1;
(statearr_19946_20001[(2)] = inst_19854);

(statearr_19946_20001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (11))){
var inst_19835 = (state_19905[(7)]);
var inst_19839 = (inst_19835 == null);
var inst_19840 = cljs.core.not.call(null,inst_19839);
var state_19905__$1 = state_19905;
if(inst_19840){
var statearr_19947_20002 = state_19905__$1;
(statearr_19947_20002[(1)] = (13));

} else {
var statearr_19948_20003 = state_19905__$1;
(statearr_19948_20003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (9))){
var inst_19811 = (state_19905[(8)]);
var state_19905__$1 = state_19905;
var statearr_19949_20004 = state_19905__$1;
(statearr_19949_20004[(2)] = inst_19811);

(statearr_19949_20004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (5))){
var state_19905__$1 = state_19905;
var statearr_19950_20005 = state_19905__$1;
(statearr_19950_20005[(2)] = true);

(statearr_19950_20005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (14))){
var state_19905__$1 = state_19905;
var statearr_19951_20006 = state_19905__$1;
(statearr_19951_20006[(2)] = false);

(statearr_19951_20006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (26))){
var inst_19865 = (state_19905[(11)]);
var inst_19872 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19865);
var state_19905__$1 = state_19905;
var statearr_19952_20007 = state_19905__$1;
(statearr_19952_20007[(2)] = inst_19872);

(statearr_19952_20007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (16))){
var state_19905__$1 = state_19905;
var statearr_19953_20008 = state_19905__$1;
(statearr_19953_20008[(2)] = true);

(statearr_19953_20008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (38))){
var inst_19895 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
var statearr_19954_20009 = state_19905__$1;
(statearr_19954_20009[(2)] = inst_19895);

(statearr_19954_20009[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (30))){
var inst_19859 = (state_19905[(13)]);
var inst_19858 = (state_19905[(9)]);
var inst_19865 = (state_19905[(11)]);
var inst_19882 = cljs.core.empty_QMARK_.call(null,inst_19858);
var inst_19883 = inst_19859.call(null,inst_19865);
var inst_19884 = cljs.core.not.call(null,inst_19883);
var inst_19885 = (inst_19882) && (inst_19884);
var state_19905__$1 = state_19905;
var statearr_19955_20010 = state_19905__$1;
(statearr_19955_20010[(2)] = inst_19885);

(statearr_19955_20010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (10))){
var inst_19811 = (state_19905[(8)]);
var inst_19831 = (state_19905[(2)]);
var inst_19832 = cljs.core.get.call(null,inst_19831,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19833 = cljs.core.get.call(null,inst_19831,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19834 = cljs.core.get.call(null,inst_19831,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19835 = inst_19811;
var state_19905__$1 = (function (){var statearr_19956 = state_19905;
(statearr_19956[(16)] = inst_19834);

(statearr_19956[(7)] = inst_19835);

(statearr_19956[(17)] = inst_19833);

(statearr_19956[(18)] = inst_19832);

return statearr_19956;
})();
var statearr_19957_20011 = state_19905__$1;
(statearr_19957_20011[(2)] = null);

(statearr_19957_20011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (18))){
var inst_19849 = (state_19905[(2)]);
var state_19905__$1 = state_19905;
var statearr_19958_20012 = state_19905__$1;
(statearr_19958_20012[(2)] = inst_19849);

(statearr_19958_20012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (37))){
var state_19905__$1 = state_19905;
var statearr_19959_20013 = state_19905__$1;
(statearr_19959_20013[(2)] = null);

(statearr_19959_20013[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19906 === (8))){
var inst_19811 = (state_19905[(8)]);
var inst_19828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19811);
var state_19905__$1 = state_19905;
var statearr_19960_20014 = state_19905__$1;
(statearr_19960_20014[(2)] = inst_19828);

(statearr_19960_20014[(1)] = (10));


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
});})(c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8334__auto__,c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8335__auto__ = null;
var cljs$core$async$mix_$_state_machine__8335__auto____0 = (function (){
var statearr_19964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs$core$async$mix_$_state_machine__8335__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs$core$async$mix_$_state_machine__8335__auto____1 = (function (state_19905){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19965){if((e19965 instanceof Object)){
var ex__8338__auto__ = e19965;
var statearr_19966_20015 = state_19905;
(statearr_19966_20015[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20016 = state_19905;
state_19905 = G__20016;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8335__auto__ = function(state_19905){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8335__auto____1.call(this,state_19905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8335__auto____0;
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8335__auto____1;
return cljs$core$async$mix_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8401__auto__ = (function (){var statearr_19967 = f__8400__auto__.call(null);
(statearr_19967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19968);

return statearr_19967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__5750__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__5750__auto__.call(null,p,v,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20017 = [];
var len__6152__auto___20020 = arguments.length;
var i__6153__auto___20021 = (0);
while(true){
if((i__6153__auto___20021 < len__6152__auto___20020)){
args20017.push((arguments[i__6153__auto___20021]));

var G__20022 = (i__6153__auto___20021 + (1));
i__6153__auto___20021 = G__20022;
continue;
} else {
}
break;
}

var G__20019 = args20017.length;
switch (G__20019) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20017.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__5750__auto__.call(null,p,v);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args20025 = [];
var len__6152__auto___20150 = arguments.length;
var i__6153__auto___20151 = (0);
while(true){
if((i__6153__auto___20151 < len__6152__auto___20150)){
args20025.push((arguments[i__6153__auto___20151]));

var G__20152 = (i__6153__auto___20151 + (1));
i__6153__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var G__20027 = args20025.length;
switch (G__20027) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20025.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5094__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5094__auto__,mults){
return (function (p1__20024_SHARP_){
if(cljs.core.truth_(p1__20024_SHARP_.call(null,topic))){
return p1__20024_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20024_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20028 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20029){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20029 = meta20029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20030,meta20029__$1){
var self__ = this;
var _20030__$1 = this;
return (new cljs.core.async.t_cljs$core$async20028(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20029__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20030){
var self__ = this;
var _20030__$1 = this;
return self__.meta20029;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20029","meta20029",875679944,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20028";

cljs.core.async.t_cljs$core$async20028.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20028");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20028 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20028(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20029){
return (new cljs.core.async.t_cljs$core$async20028(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20029));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20028(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___20154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20154,mults,ensure_mult,p){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20154,mults,ensure_mult,p){
return (function (state_20102){
var state_val_20103 = (state_20102[(1)]);
if((state_val_20103 === (7))){
var inst_20098 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20104_20155 = state_20102__$1;
(statearr_20104_20155[(2)] = inst_20098);

(statearr_20104_20155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (20))){
var state_20102__$1 = state_20102;
var statearr_20105_20156 = state_20102__$1;
(statearr_20105_20156[(2)] = null);

(statearr_20105_20156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (1))){
var state_20102__$1 = state_20102;
var statearr_20106_20157 = state_20102__$1;
(statearr_20106_20157[(2)] = null);

(statearr_20106_20157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (24))){
var inst_20081 = (state_20102[(7)]);
var inst_20090 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20081);
var state_20102__$1 = state_20102;
var statearr_20107_20158 = state_20102__$1;
(statearr_20107_20158[(2)] = inst_20090);

(statearr_20107_20158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (4))){
var inst_20033 = (state_20102[(8)]);
var inst_20033__$1 = (state_20102[(2)]);
var inst_20034 = (inst_20033__$1 == null);
var state_20102__$1 = (function (){var statearr_20108 = state_20102;
(statearr_20108[(8)] = inst_20033__$1);

return statearr_20108;
})();
if(cljs.core.truth_(inst_20034)){
var statearr_20109_20159 = state_20102__$1;
(statearr_20109_20159[(1)] = (5));

} else {
var statearr_20110_20160 = state_20102__$1;
(statearr_20110_20160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (15))){
var inst_20075 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20111_20161 = state_20102__$1;
(statearr_20111_20161[(2)] = inst_20075);

(statearr_20111_20161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (21))){
var inst_20095 = (state_20102[(2)]);
var state_20102__$1 = (function (){var statearr_20112 = state_20102;
(statearr_20112[(9)] = inst_20095);

return statearr_20112;
})();
var statearr_20113_20162 = state_20102__$1;
(statearr_20113_20162[(2)] = null);

(statearr_20113_20162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (13))){
var inst_20057 = (state_20102[(10)]);
var inst_20059 = cljs.core.chunked_seq_QMARK_.call(null,inst_20057);
var state_20102__$1 = state_20102;
if(inst_20059){
var statearr_20114_20163 = state_20102__$1;
(statearr_20114_20163[(1)] = (16));

} else {
var statearr_20115_20164 = state_20102__$1;
(statearr_20115_20164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (22))){
var inst_20087 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20087)){
var statearr_20116_20165 = state_20102__$1;
(statearr_20116_20165[(1)] = (23));

} else {
var statearr_20117_20166 = state_20102__$1;
(statearr_20117_20166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (6))){
var inst_20083 = (state_20102[(11)]);
var inst_20081 = (state_20102[(7)]);
var inst_20033 = (state_20102[(8)]);
var inst_20081__$1 = topic_fn.call(null,inst_20033);
var inst_20082 = cljs.core.deref.call(null,mults);
var inst_20083__$1 = cljs.core.get.call(null,inst_20082,inst_20081__$1);
var state_20102__$1 = (function (){var statearr_20118 = state_20102;
(statearr_20118[(11)] = inst_20083__$1);

(statearr_20118[(7)] = inst_20081__$1);

return statearr_20118;
})();
if(cljs.core.truth_(inst_20083__$1)){
var statearr_20119_20167 = state_20102__$1;
(statearr_20119_20167[(1)] = (19));

} else {
var statearr_20120_20168 = state_20102__$1;
(statearr_20120_20168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (25))){
var inst_20092 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20121_20169 = state_20102__$1;
(statearr_20121_20169[(2)] = inst_20092);

(statearr_20121_20169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (17))){
var inst_20057 = (state_20102[(10)]);
var inst_20066 = cljs.core.first.call(null,inst_20057);
var inst_20067 = cljs.core.async.muxch_STAR_.call(null,inst_20066);
var inst_20068 = cljs.core.async.close_BANG_.call(null,inst_20067);
var inst_20069 = cljs.core.next.call(null,inst_20057);
var inst_20043 = inst_20069;
var inst_20044 = null;
var inst_20045 = (0);
var inst_20046 = (0);
var state_20102__$1 = (function (){var statearr_20122 = state_20102;
(statearr_20122[(12)] = inst_20044);

(statearr_20122[(13)] = inst_20068);

(statearr_20122[(14)] = inst_20046);

(statearr_20122[(15)] = inst_20045);

(statearr_20122[(16)] = inst_20043);

return statearr_20122;
})();
var statearr_20123_20170 = state_20102__$1;
(statearr_20123_20170[(2)] = null);

(statearr_20123_20170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (3))){
var inst_20100 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20102__$1,inst_20100);
} else {
if((state_val_20103 === (12))){
var inst_20077 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20124_20171 = state_20102__$1;
(statearr_20124_20171[(2)] = inst_20077);

(statearr_20124_20171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (2))){
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20102__$1,(4),ch);
} else {
if((state_val_20103 === (23))){
var state_20102__$1 = state_20102;
var statearr_20125_20172 = state_20102__$1;
(statearr_20125_20172[(2)] = null);

(statearr_20125_20172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (19))){
var inst_20083 = (state_20102[(11)]);
var inst_20033 = (state_20102[(8)]);
var inst_20085 = cljs.core.async.muxch_STAR_.call(null,inst_20083);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20102__$1,(22),inst_20085,inst_20033);
} else {
if((state_val_20103 === (11))){
var inst_20057 = (state_20102[(10)]);
var inst_20043 = (state_20102[(16)]);
var inst_20057__$1 = cljs.core.seq.call(null,inst_20043);
var state_20102__$1 = (function (){var statearr_20126 = state_20102;
(statearr_20126[(10)] = inst_20057__$1);

return statearr_20126;
})();
if(inst_20057__$1){
var statearr_20127_20173 = state_20102__$1;
(statearr_20127_20173[(1)] = (13));

} else {
var statearr_20128_20174 = state_20102__$1;
(statearr_20128_20174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (9))){
var inst_20079 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20129_20175 = state_20102__$1;
(statearr_20129_20175[(2)] = inst_20079);

(statearr_20129_20175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (5))){
var inst_20040 = cljs.core.deref.call(null,mults);
var inst_20041 = cljs.core.vals.call(null,inst_20040);
var inst_20042 = cljs.core.seq.call(null,inst_20041);
var inst_20043 = inst_20042;
var inst_20044 = null;
var inst_20045 = (0);
var inst_20046 = (0);
var state_20102__$1 = (function (){var statearr_20130 = state_20102;
(statearr_20130[(12)] = inst_20044);

(statearr_20130[(14)] = inst_20046);

(statearr_20130[(15)] = inst_20045);

(statearr_20130[(16)] = inst_20043);

return statearr_20130;
})();
var statearr_20131_20176 = state_20102__$1;
(statearr_20131_20176[(2)] = null);

(statearr_20131_20176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (14))){
var state_20102__$1 = state_20102;
var statearr_20135_20177 = state_20102__$1;
(statearr_20135_20177[(2)] = null);

(statearr_20135_20177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (16))){
var inst_20057 = (state_20102[(10)]);
var inst_20061 = cljs.core.chunk_first.call(null,inst_20057);
var inst_20062 = cljs.core.chunk_rest.call(null,inst_20057);
var inst_20063 = cljs.core.count.call(null,inst_20061);
var inst_20043 = inst_20062;
var inst_20044 = inst_20061;
var inst_20045 = inst_20063;
var inst_20046 = (0);
var state_20102__$1 = (function (){var statearr_20136 = state_20102;
(statearr_20136[(12)] = inst_20044);

(statearr_20136[(14)] = inst_20046);

(statearr_20136[(15)] = inst_20045);

(statearr_20136[(16)] = inst_20043);

return statearr_20136;
})();
var statearr_20137_20178 = state_20102__$1;
(statearr_20137_20178[(2)] = null);

(statearr_20137_20178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (10))){
var inst_20044 = (state_20102[(12)]);
var inst_20046 = (state_20102[(14)]);
var inst_20045 = (state_20102[(15)]);
var inst_20043 = (state_20102[(16)]);
var inst_20051 = cljs.core._nth.call(null,inst_20044,inst_20046);
var inst_20052 = cljs.core.async.muxch_STAR_.call(null,inst_20051);
var inst_20053 = cljs.core.async.close_BANG_.call(null,inst_20052);
var inst_20054 = (inst_20046 + (1));
var tmp20132 = inst_20044;
var tmp20133 = inst_20045;
var tmp20134 = inst_20043;
var inst_20043__$1 = tmp20134;
var inst_20044__$1 = tmp20132;
var inst_20045__$1 = tmp20133;
var inst_20046__$1 = inst_20054;
var state_20102__$1 = (function (){var statearr_20138 = state_20102;
(statearr_20138[(12)] = inst_20044__$1);

(statearr_20138[(17)] = inst_20053);

(statearr_20138[(14)] = inst_20046__$1);

(statearr_20138[(15)] = inst_20045__$1);

(statearr_20138[(16)] = inst_20043__$1);

return statearr_20138;
})();
var statearr_20139_20179 = state_20102__$1;
(statearr_20139_20179[(2)] = null);

(statearr_20139_20179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (18))){
var inst_20072 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20140_20180 = state_20102__$1;
(statearr_20140_20180[(2)] = inst_20072);

(statearr_20140_20180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (8))){
var inst_20046 = (state_20102[(14)]);
var inst_20045 = (state_20102[(15)]);
var inst_20048 = (inst_20046 < inst_20045);
var inst_20049 = inst_20048;
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20049)){
var statearr_20141_20181 = state_20102__$1;
(statearr_20141_20181[(1)] = (10));

} else {
var statearr_20142_20182 = state_20102__$1;
(statearr_20142_20182[(1)] = (11));

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
});})(c__8399__auto___20154,mults,ensure_mult,p))
;
return ((function (switch__8334__auto__,c__8399__auto___20154,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20146[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20146[(1)] = (1));

return statearr_20146;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20102){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20147){if((e20147 instanceof Object)){
var ex__8338__auto__ = e20147;
var statearr_20148_20183 = state_20102;
(statearr_20148_20183[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_20102;
state_20102 = G__20184;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20154,mults,ensure_mult,p))
})();
var state__8401__auto__ = (function (){var statearr_20149 = f__8400__auto__.call(null);
(statearr_20149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20154);

return statearr_20149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20154,mults,ensure_mult,p))
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
var args20185 = [];
var len__6152__auto___20188 = arguments.length;
var i__6153__auto___20189 = (0);
while(true){
if((i__6153__auto___20189 < len__6152__auto___20188)){
args20185.push((arguments[i__6153__auto___20189]));

var G__20190 = (i__6153__auto___20189 + (1));
i__6153__auto___20189 = G__20190;
continue;
} else {
}
break;
}

var G__20187 = args20185.length;
switch (G__20187) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20185.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20192 = [];
var len__6152__auto___20195 = arguments.length;
var i__6153__auto___20196 = (0);
while(true){
if((i__6153__auto___20196 < len__6152__auto___20195)){
args20192.push((arguments[i__6153__auto___20196]));

var G__20197 = (i__6153__auto___20196 + (1));
i__6153__auto___20196 = G__20197;
continue;
} else {
}
break;
}

var G__20194 = args20192.length;
switch (G__20194) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20192.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args20199 = [];
var len__6152__auto___20270 = arguments.length;
var i__6153__auto___20271 = (0);
while(true){
if((i__6153__auto___20271 < len__6152__auto___20270)){
args20199.push((arguments[i__6153__auto___20271]));

var G__20272 = (i__6153__auto___20271 + (1));
i__6153__auto___20271 = G__20272;
continue;
} else {
}
break;
}

var G__20201 = args20199.length;
switch (G__20201) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20199.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8399__auto___20274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20240){
var state_val_20241 = (state_20240[(1)]);
if((state_val_20241 === (7))){
var state_20240__$1 = state_20240;
var statearr_20242_20275 = state_20240__$1;
(statearr_20242_20275[(2)] = null);

(statearr_20242_20275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (1))){
var state_20240__$1 = state_20240;
var statearr_20243_20276 = state_20240__$1;
(statearr_20243_20276[(2)] = null);

(statearr_20243_20276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (4))){
var inst_20204 = (state_20240[(7)]);
var inst_20206 = (inst_20204 < cnt);
var state_20240__$1 = state_20240;
if(cljs.core.truth_(inst_20206)){
var statearr_20244_20277 = state_20240__$1;
(statearr_20244_20277[(1)] = (6));

} else {
var statearr_20245_20278 = state_20240__$1;
(statearr_20245_20278[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (15))){
var inst_20236 = (state_20240[(2)]);
var state_20240__$1 = state_20240;
var statearr_20246_20279 = state_20240__$1;
(statearr_20246_20279[(2)] = inst_20236);

(statearr_20246_20279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (13))){
var inst_20229 = cljs.core.async.close_BANG_.call(null,out);
var state_20240__$1 = state_20240;
var statearr_20247_20280 = state_20240__$1;
(statearr_20247_20280[(2)] = inst_20229);

(statearr_20247_20280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (6))){
var state_20240__$1 = state_20240;
var statearr_20248_20281 = state_20240__$1;
(statearr_20248_20281[(2)] = null);

(statearr_20248_20281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (3))){
var inst_20238 = (state_20240[(2)]);
var state_20240__$1 = state_20240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20240__$1,inst_20238);
} else {
if((state_val_20241 === (12))){
var inst_20226 = (state_20240[(8)]);
var inst_20226__$1 = (state_20240[(2)]);
var inst_20227 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20226__$1);
var state_20240__$1 = (function (){var statearr_20249 = state_20240;
(statearr_20249[(8)] = inst_20226__$1);

return statearr_20249;
})();
if(cljs.core.truth_(inst_20227)){
var statearr_20250_20282 = state_20240__$1;
(statearr_20250_20282[(1)] = (13));

} else {
var statearr_20251_20283 = state_20240__$1;
(statearr_20251_20283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (2))){
var inst_20203 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20204 = (0);
var state_20240__$1 = (function (){var statearr_20252 = state_20240;
(statearr_20252[(9)] = inst_20203);

(statearr_20252[(7)] = inst_20204);

return statearr_20252;
})();
var statearr_20253_20284 = state_20240__$1;
(statearr_20253_20284[(2)] = null);

(statearr_20253_20284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (11))){
var inst_20204 = (state_20240[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20240,(10),Object,null,(9));
var inst_20213 = chs__$1.call(null,inst_20204);
var inst_20214 = done.call(null,inst_20204);
var inst_20215 = cljs.core.async.take_BANG_.call(null,inst_20213,inst_20214);
var state_20240__$1 = state_20240;
var statearr_20254_20285 = state_20240__$1;
(statearr_20254_20285[(2)] = inst_20215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20240__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (9))){
var inst_20204 = (state_20240[(7)]);
var inst_20217 = (state_20240[(2)]);
var inst_20218 = (inst_20204 + (1));
var inst_20204__$1 = inst_20218;
var state_20240__$1 = (function (){var statearr_20255 = state_20240;
(statearr_20255[(7)] = inst_20204__$1);

(statearr_20255[(10)] = inst_20217);

return statearr_20255;
})();
var statearr_20256_20286 = state_20240__$1;
(statearr_20256_20286[(2)] = null);

(statearr_20256_20286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (5))){
var inst_20224 = (state_20240[(2)]);
var state_20240__$1 = (function (){var statearr_20257 = state_20240;
(statearr_20257[(11)] = inst_20224);

return statearr_20257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20240__$1,(12),dchan);
} else {
if((state_val_20241 === (14))){
var inst_20226 = (state_20240[(8)]);
var inst_20231 = cljs.core.apply.call(null,f,inst_20226);
var state_20240__$1 = state_20240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20240__$1,(16),out,inst_20231);
} else {
if((state_val_20241 === (16))){
var inst_20233 = (state_20240[(2)]);
var state_20240__$1 = (function (){var statearr_20258 = state_20240;
(statearr_20258[(12)] = inst_20233);

return statearr_20258;
})();
var statearr_20259_20287 = state_20240__$1;
(statearr_20259_20287[(2)] = null);

(statearr_20259_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (10))){
var inst_20208 = (state_20240[(2)]);
var inst_20209 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20240__$1 = (function (){var statearr_20260 = state_20240;
(statearr_20260[(13)] = inst_20208);

return statearr_20260;
})();
var statearr_20261_20288 = state_20240__$1;
(statearr_20261_20288[(2)] = inst_20209);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20240__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20241 === (8))){
var inst_20222 = (state_20240[(2)]);
var state_20240__$1 = state_20240;
var statearr_20262_20289 = state_20240__$1;
(statearr_20262_20289[(2)] = inst_20222);

(statearr_20262_20289[(1)] = (5));


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
});})(c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20266[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20266[(1)] = (1));

return statearr_20266;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20240){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20267){if((e20267 instanceof Object)){
var ex__8338__auto__ = e20267;
var statearr_20268_20290 = state_20240;
(statearr_20268_20290[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20291 = state_20240;
state_20240 = G__20291;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_20269 = f__8400__auto__.call(null);
(statearr_20269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20274);

return statearr_20269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20274,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20293 = [];
var len__6152__auto___20349 = arguments.length;
var i__6153__auto___20350 = (0);
while(true){
if((i__6153__auto___20350 < len__6152__auto___20349)){
args20293.push((arguments[i__6153__auto___20350]));

var G__20351 = (i__6153__auto___20350 + (1));
i__6153__auto___20350 = G__20351;
continue;
} else {
}
break;
}

var G__20295 = args20293.length;
switch (G__20295) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20293.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20353,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20353,out){
return (function (state_20325){
var state_val_20326 = (state_20325[(1)]);
if((state_val_20326 === (7))){
var inst_20305 = (state_20325[(7)]);
var inst_20304 = (state_20325[(8)]);
var inst_20304__$1 = (state_20325[(2)]);
var inst_20305__$1 = cljs.core.nth.call(null,inst_20304__$1,(0),null);
var inst_20306 = cljs.core.nth.call(null,inst_20304__$1,(1),null);
var inst_20307 = (inst_20305__$1 == null);
var state_20325__$1 = (function (){var statearr_20327 = state_20325;
(statearr_20327[(7)] = inst_20305__$1);

(statearr_20327[(9)] = inst_20306);

(statearr_20327[(8)] = inst_20304__$1);

return statearr_20327;
})();
if(cljs.core.truth_(inst_20307)){
var statearr_20328_20354 = state_20325__$1;
(statearr_20328_20354[(1)] = (8));

} else {
var statearr_20329_20355 = state_20325__$1;
(statearr_20329_20355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (1))){
var inst_20296 = cljs.core.vec.call(null,chs);
var inst_20297 = inst_20296;
var state_20325__$1 = (function (){var statearr_20330 = state_20325;
(statearr_20330[(10)] = inst_20297);

return statearr_20330;
})();
var statearr_20331_20356 = state_20325__$1;
(statearr_20331_20356[(2)] = null);

(statearr_20331_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (4))){
var inst_20297 = (state_20325[(10)]);
var state_20325__$1 = state_20325;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20325__$1,(7),inst_20297);
} else {
if((state_val_20326 === (6))){
var inst_20321 = (state_20325[(2)]);
var state_20325__$1 = state_20325;
var statearr_20332_20357 = state_20325__$1;
(statearr_20332_20357[(2)] = inst_20321);

(statearr_20332_20357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (3))){
var inst_20323 = (state_20325[(2)]);
var state_20325__$1 = state_20325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20325__$1,inst_20323);
} else {
if((state_val_20326 === (2))){
var inst_20297 = (state_20325[(10)]);
var inst_20299 = cljs.core.count.call(null,inst_20297);
var inst_20300 = (inst_20299 > (0));
var state_20325__$1 = state_20325;
if(cljs.core.truth_(inst_20300)){
var statearr_20334_20358 = state_20325__$1;
(statearr_20334_20358[(1)] = (4));

} else {
var statearr_20335_20359 = state_20325__$1;
(statearr_20335_20359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (11))){
var inst_20297 = (state_20325[(10)]);
var inst_20314 = (state_20325[(2)]);
var tmp20333 = inst_20297;
var inst_20297__$1 = tmp20333;
var state_20325__$1 = (function (){var statearr_20336 = state_20325;
(statearr_20336[(11)] = inst_20314);

(statearr_20336[(10)] = inst_20297__$1);

return statearr_20336;
})();
var statearr_20337_20360 = state_20325__$1;
(statearr_20337_20360[(2)] = null);

(statearr_20337_20360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (9))){
var inst_20305 = (state_20325[(7)]);
var state_20325__$1 = state_20325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20325__$1,(11),out,inst_20305);
} else {
if((state_val_20326 === (5))){
var inst_20319 = cljs.core.async.close_BANG_.call(null,out);
var state_20325__$1 = state_20325;
var statearr_20338_20361 = state_20325__$1;
(statearr_20338_20361[(2)] = inst_20319);

(statearr_20338_20361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (10))){
var inst_20317 = (state_20325[(2)]);
var state_20325__$1 = state_20325;
var statearr_20339_20362 = state_20325__$1;
(statearr_20339_20362[(2)] = inst_20317);

(statearr_20339_20362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20326 === (8))){
var inst_20305 = (state_20325[(7)]);
var inst_20306 = (state_20325[(9)]);
var inst_20297 = (state_20325[(10)]);
var inst_20304 = (state_20325[(8)]);
var inst_20309 = (function (){var cs = inst_20297;
var vec__20302 = inst_20304;
var v = inst_20305;
var c = inst_20306;
return ((function (cs,vec__20302,v,c,inst_20305,inst_20306,inst_20297,inst_20304,state_val_20326,c__8399__auto___20353,out){
return (function (p1__20292_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20292_SHARP_);
});
;})(cs,vec__20302,v,c,inst_20305,inst_20306,inst_20297,inst_20304,state_val_20326,c__8399__auto___20353,out))
})();
var inst_20310 = cljs.core.filterv.call(null,inst_20309,inst_20297);
var inst_20297__$1 = inst_20310;
var state_20325__$1 = (function (){var statearr_20340 = state_20325;
(statearr_20340[(10)] = inst_20297__$1);

return statearr_20340;
})();
var statearr_20341_20363 = state_20325__$1;
(statearr_20341_20363[(2)] = null);

(statearr_20341_20363[(1)] = (2));


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
});})(c__8399__auto___20353,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20353,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20345[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20345[(1)] = (1));

return statearr_20345;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20325){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20346){if((e20346 instanceof Object)){
var ex__8338__auto__ = e20346;
var statearr_20347_20364 = state_20325;
(statearr_20347_20364[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20365 = state_20325;
state_20325 = G__20365;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20353,out))
})();
var state__8401__auto__ = (function (){var statearr_20348 = f__8400__auto__.call(null);
(statearr_20348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20353);

return statearr_20348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20353,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args20366 = [];
var len__6152__auto___20415 = arguments.length;
var i__6153__auto___20416 = (0);
while(true){
if((i__6153__auto___20416 < len__6152__auto___20415)){
args20366.push((arguments[i__6153__auto___20416]));

var G__20417 = (i__6153__auto___20416 + (1));
i__6153__auto___20416 = G__20417;
continue;
} else {
}
break;
}

var G__20368 = args20366.length;
switch (G__20368) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20366.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20419,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20419,out){
return (function (state_20392){
var state_val_20393 = (state_20392[(1)]);
if((state_val_20393 === (7))){
var inst_20374 = (state_20392[(7)]);
var inst_20374__$1 = (state_20392[(2)]);
var inst_20375 = (inst_20374__$1 == null);
var inst_20376 = cljs.core.not.call(null,inst_20375);
var state_20392__$1 = (function (){var statearr_20394 = state_20392;
(statearr_20394[(7)] = inst_20374__$1);

return statearr_20394;
})();
if(inst_20376){
var statearr_20395_20420 = state_20392__$1;
(statearr_20395_20420[(1)] = (8));

} else {
var statearr_20396_20421 = state_20392__$1;
(statearr_20396_20421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (1))){
var inst_20369 = (0);
var state_20392__$1 = (function (){var statearr_20397 = state_20392;
(statearr_20397[(8)] = inst_20369);

return statearr_20397;
})();
var statearr_20398_20422 = state_20392__$1;
(statearr_20398_20422[(2)] = null);

(statearr_20398_20422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (4))){
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20392__$1,(7),ch);
} else {
if((state_val_20393 === (6))){
var inst_20387 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20399_20423 = state_20392__$1;
(statearr_20399_20423[(2)] = inst_20387);

(statearr_20399_20423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (3))){
var inst_20389 = (state_20392[(2)]);
var inst_20390 = cljs.core.async.close_BANG_.call(null,out);
var state_20392__$1 = (function (){var statearr_20400 = state_20392;
(statearr_20400[(9)] = inst_20389);

return statearr_20400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20392__$1,inst_20390);
} else {
if((state_val_20393 === (2))){
var inst_20369 = (state_20392[(8)]);
var inst_20371 = (inst_20369 < n);
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20371)){
var statearr_20401_20424 = state_20392__$1;
(statearr_20401_20424[(1)] = (4));

} else {
var statearr_20402_20425 = state_20392__$1;
(statearr_20402_20425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (11))){
var inst_20369 = (state_20392[(8)]);
var inst_20379 = (state_20392[(2)]);
var inst_20380 = (inst_20369 + (1));
var inst_20369__$1 = inst_20380;
var state_20392__$1 = (function (){var statearr_20403 = state_20392;
(statearr_20403[(8)] = inst_20369__$1);

(statearr_20403[(10)] = inst_20379);

return statearr_20403;
})();
var statearr_20404_20426 = state_20392__$1;
(statearr_20404_20426[(2)] = null);

(statearr_20404_20426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (9))){
var state_20392__$1 = state_20392;
var statearr_20405_20427 = state_20392__$1;
(statearr_20405_20427[(2)] = null);

(statearr_20405_20427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (5))){
var state_20392__$1 = state_20392;
var statearr_20406_20428 = state_20392__$1;
(statearr_20406_20428[(2)] = null);

(statearr_20406_20428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (10))){
var inst_20384 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20407_20429 = state_20392__$1;
(statearr_20407_20429[(2)] = inst_20384);

(statearr_20407_20429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (8))){
var inst_20374 = (state_20392[(7)]);
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20392__$1,(11),out,inst_20374);
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
});})(c__8399__auto___20419,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20419,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20411[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20411[(1)] = (1));

return statearr_20411;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20392){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20412){if((e20412 instanceof Object)){
var ex__8338__auto__ = e20412;
var statearr_20413_20430 = state_20392;
(statearr_20413_20430[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20431 = state_20392;
state_20392 = G__20431;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20419,out))
})();
var state__8401__auto__ = (function (){var statearr_20414 = f__8400__auto__.call(null);
(statearr_20414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20419);

return statearr_20414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20419,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20439 = (function (map_LT_,f,ch,meta20440){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20440 = meta20440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20441,meta20440__$1){
var self__ = this;
var _20441__$1 = this;
return (new cljs.core.async.t_cljs$core$async20439(self__.map_LT_,self__.f,self__.ch,meta20440__$1));
});

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20441){
var self__ = this;
var _20441__$1 = this;
return self__.meta20440;
});

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20442 = (function (map_LT_,f,ch,meta20440,_,fn1,meta20443){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20440 = meta20440;
this._ = _;
this.fn1 = fn1;
this.meta20443 = meta20443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20444,meta20443__$1){
var self__ = this;
var _20444__$1 = this;
return (new cljs.core.async.t_cljs$core$async20442(self__.map_LT_,self__.f,self__.ch,self__.meta20440,self__._,self__.fn1,meta20443__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20444){
var self__ = this;
var _20444__$1 = this;
return self__.meta20443;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20432_SHARP_){
return f1.call(null,(((p1__20432_SHARP_ == null))?null:self__.f.call(null,p1__20432_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20442.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20440","meta20440",971000844,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20439","cljs.core.async/t_cljs$core$async20439",1361448143,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20443","meta20443",-340809928,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20442";

cljs.core.async.t_cljs$core$async20442.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20442");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20442 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20442(map_LT___$1,f__$1,ch__$1,meta20440__$1,___$2,fn1__$1,meta20443){
return (new cljs.core.async.t_cljs$core$async20442(map_LT___$1,f__$1,ch__$1,meta20440__$1,___$2,fn1__$1,meta20443));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20442(self__.map_LT_,self__.f,self__.ch,self__.meta20440,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5082__auto__ = ret;
if(cljs.core.truth_(and__5082__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5082__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20440","meta20440",971000844,null)], null);
});

cljs.core.async.t_cljs$core$async20439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20439";

cljs.core.async.t_cljs$core$async20439.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20439");
});

cljs.core.async.__GT_t_cljs$core$async20439 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20439(map_LT___$1,f__$1,ch__$1,meta20440){
return (new cljs.core.async.t_cljs$core$async20439(map_LT___$1,f__$1,ch__$1,meta20440));
});

}

return (new cljs.core.async.t_cljs$core$async20439(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20448 = (function (map_GT_,f,ch,meta20449){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20449 = meta20449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20450,meta20449__$1){
var self__ = this;
var _20450__$1 = this;
return (new cljs.core.async.t_cljs$core$async20448(self__.map_GT_,self__.f,self__.ch,meta20449__$1));
});

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20450){
var self__ = this;
var _20450__$1 = this;
return self__.meta20449;
});

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20449","meta20449",1630787374,null)], null);
});

cljs.core.async.t_cljs$core$async20448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20448";

cljs.core.async.t_cljs$core$async20448.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20448");
});

cljs.core.async.__GT_t_cljs$core$async20448 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20448(map_GT___$1,f__$1,ch__$1,meta20449){
return (new cljs.core.async.t_cljs$core$async20448(map_GT___$1,f__$1,ch__$1,meta20449));
});

}

return (new cljs.core.async.t_cljs$core$async20448(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20454 = (function (filter_GT_,p,ch,meta20455){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20455 = meta20455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20456,meta20455__$1){
var self__ = this;
var _20456__$1 = this;
return (new cljs.core.async.t_cljs$core$async20454(self__.filter_GT_,self__.p,self__.ch,meta20455__$1));
});

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20456){
var self__ = this;
var _20456__$1 = this;
return self__.meta20455;
});

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20455","meta20455",-195716557,null)], null);
});

cljs.core.async.t_cljs$core$async20454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20454";

cljs.core.async.t_cljs$core$async20454.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20454");
});

cljs.core.async.__GT_t_cljs$core$async20454 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20454(filter_GT___$1,p__$1,ch__$1,meta20455){
return (new cljs.core.async.t_cljs$core$async20454(filter_GT___$1,p__$1,ch__$1,meta20455));
});

}

return (new cljs.core.async.t_cljs$core$async20454(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args20457 = [];
var len__6152__auto___20501 = arguments.length;
var i__6153__auto___20502 = (0);
while(true){
if((i__6153__auto___20502 < len__6152__auto___20501)){
args20457.push((arguments[i__6153__auto___20502]));

var G__20503 = (i__6153__auto___20502 + (1));
i__6153__auto___20502 = G__20503;
continue;
} else {
}
break;
}

var G__20459 = args20457.length;
switch (G__20459) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20457.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20505,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20505,out){
return (function (state_20480){
var state_val_20481 = (state_20480[(1)]);
if((state_val_20481 === (7))){
var inst_20476 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20482_20506 = state_20480__$1;
(statearr_20482_20506[(2)] = inst_20476);

(statearr_20482_20506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (1))){
var state_20480__$1 = state_20480;
var statearr_20483_20507 = state_20480__$1;
(statearr_20483_20507[(2)] = null);

(statearr_20483_20507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (4))){
var inst_20462 = (state_20480[(7)]);
var inst_20462__$1 = (state_20480[(2)]);
var inst_20463 = (inst_20462__$1 == null);
var state_20480__$1 = (function (){var statearr_20484 = state_20480;
(statearr_20484[(7)] = inst_20462__$1);

return statearr_20484;
})();
if(cljs.core.truth_(inst_20463)){
var statearr_20485_20508 = state_20480__$1;
(statearr_20485_20508[(1)] = (5));

} else {
var statearr_20486_20509 = state_20480__$1;
(statearr_20486_20509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (6))){
var inst_20462 = (state_20480[(7)]);
var inst_20467 = p.call(null,inst_20462);
var state_20480__$1 = state_20480;
if(cljs.core.truth_(inst_20467)){
var statearr_20487_20510 = state_20480__$1;
(statearr_20487_20510[(1)] = (8));

} else {
var statearr_20488_20511 = state_20480__$1;
(statearr_20488_20511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (3))){
var inst_20478 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20480__$1,inst_20478);
} else {
if((state_val_20481 === (2))){
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20480__$1,(4),ch);
} else {
if((state_val_20481 === (11))){
var inst_20470 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20489_20512 = state_20480__$1;
(statearr_20489_20512[(2)] = inst_20470);

(statearr_20489_20512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (9))){
var state_20480__$1 = state_20480;
var statearr_20490_20513 = state_20480__$1;
(statearr_20490_20513[(2)] = null);

(statearr_20490_20513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (5))){
var inst_20465 = cljs.core.async.close_BANG_.call(null,out);
var state_20480__$1 = state_20480;
var statearr_20491_20514 = state_20480__$1;
(statearr_20491_20514[(2)] = inst_20465);

(statearr_20491_20514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (10))){
var inst_20473 = (state_20480[(2)]);
var state_20480__$1 = (function (){var statearr_20492 = state_20480;
(statearr_20492[(8)] = inst_20473);

return statearr_20492;
})();
var statearr_20493_20515 = state_20480__$1;
(statearr_20493_20515[(2)] = null);

(statearr_20493_20515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (8))){
var inst_20462 = (state_20480[(7)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20480__$1,(11),out,inst_20462);
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
});})(c__8399__auto___20505,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20505,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20497 = [null,null,null,null,null,null,null,null,null];
(statearr_20497[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20497[(1)] = (1));

return statearr_20497;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20480){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20498){if((e20498 instanceof Object)){
var ex__8338__auto__ = e20498;
var statearr_20499_20516 = state_20480;
(statearr_20499_20516[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20517 = state_20480;
state_20480 = G__20517;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20505,out))
})();
var state__8401__auto__ = (function (){var statearr_20500 = f__8400__auto__.call(null);
(statearr_20500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20505);

return statearr_20500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20505,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20518 = [];
var len__6152__auto___20521 = arguments.length;
var i__6153__auto___20522 = (0);
while(true){
if((i__6153__auto___20522 < len__6152__auto___20521)){
args20518.push((arguments[i__6153__auto___20522]));

var G__20523 = (i__6153__auto___20522 + (1));
i__6153__auto___20522 = G__20523;
continue;
} else {
}
break;
}

var G__20520 = args20518.length;
switch (G__20520) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20518.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__){
return (function (state_20690){
var state_val_20691 = (state_20690[(1)]);
if((state_val_20691 === (7))){
var inst_20686 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20692_20733 = state_20690__$1;
(statearr_20692_20733[(2)] = inst_20686);

(statearr_20692_20733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (20))){
var inst_20656 = (state_20690[(7)]);
var inst_20667 = (state_20690[(2)]);
var inst_20668 = cljs.core.next.call(null,inst_20656);
var inst_20642 = inst_20668;
var inst_20643 = null;
var inst_20644 = (0);
var inst_20645 = (0);
var state_20690__$1 = (function (){var statearr_20693 = state_20690;
(statearr_20693[(8)] = inst_20645);

(statearr_20693[(9)] = inst_20643);

(statearr_20693[(10)] = inst_20642);

(statearr_20693[(11)] = inst_20667);

(statearr_20693[(12)] = inst_20644);

return statearr_20693;
})();
var statearr_20694_20734 = state_20690__$1;
(statearr_20694_20734[(2)] = null);

(statearr_20694_20734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (1))){
var state_20690__$1 = state_20690;
var statearr_20695_20735 = state_20690__$1;
(statearr_20695_20735[(2)] = null);

(statearr_20695_20735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (4))){
var inst_20631 = (state_20690[(13)]);
var inst_20631__$1 = (state_20690[(2)]);
var inst_20632 = (inst_20631__$1 == null);
var state_20690__$1 = (function (){var statearr_20696 = state_20690;
(statearr_20696[(13)] = inst_20631__$1);

return statearr_20696;
})();
if(cljs.core.truth_(inst_20632)){
var statearr_20697_20736 = state_20690__$1;
(statearr_20697_20736[(1)] = (5));

} else {
var statearr_20698_20737 = state_20690__$1;
(statearr_20698_20737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (15))){
var state_20690__$1 = state_20690;
var statearr_20702_20738 = state_20690__$1;
(statearr_20702_20738[(2)] = null);

(statearr_20702_20738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (21))){
var state_20690__$1 = state_20690;
var statearr_20703_20739 = state_20690__$1;
(statearr_20703_20739[(2)] = null);

(statearr_20703_20739[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (13))){
var inst_20645 = (state_20690[(8)]);
var inst_20643 = (state_20690[(9)]);
var inst_20642 = (state_20690[(10)]);
var inst_20644 = (state_20690[(12)]);
var inst_20652 = (state_20690[(2)]);
var inst_20653 = (inst_20645 + (1));
var tmp20699 = inst_20643;
var tmp20700 = inst_20642;
var tmp20701 = inst_20644;
var inst_20642__$1 = tmp20700;
var inst_20643__$1 = tmp20699;
var inst_20644__$1 = tmp20701;
var inst_20645__$1 = inst_20653;
var state_20690__$1 = (function (){var statearr_20704 = state_20690;
(statearr_20704[(8)] = inst_20645__$1);

(statearr_20704[(9)] = inst_20643__$1);

(statearr_20704[(10)] = inst_20642__$1);

(statearr_20704[(12)] = inst_20644__$1);

(statearr_20704[(14)] = inst_20652);

return statearr_20704;
})();
var statearr_20705_20740 = state_20690__$1;
(statearr_20705_20740[(2)] = null);

(statearr_20705_20740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (22))){
var state_20690__$1 = state_20690;
var statearr_20706_20741 = state_20690__$1;
(statearr_20706_20741[(2)] = null);

(statearr_20706_20741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (6))){
var inst_20631 = (state_20690[(13)]);
var inst_20640 = f.call(null,inst_20631);
var inst_20641 = cljs.core.seq.call(null,inst_20640);
var inst_20642 = inst_20641;
var inst_20643 = null;
var inst_20644 = (0);
var inst_20645 = (0);
var state_20690__$1 = (function (){var statearr_20707 = state_20690;
(statearr_20707[(8)] = inst_20645);

(statearr_20707[(9)] = inst_20643);

(statearr_20707[(10)] = inst_20642);

(statearr_20707[(12)] = inst_20644);

return statearr_20707;
})();
var statearr_20708_20742 = state_20690__$1;
(statearr_20708_20742[(2)] = null);

(statearr_20708_20742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (17))){
var inst_20656 = (state_20690[(7)]);
var inst_20660 = cljs.core.chunk_first.call(null,inst_20656);
var inst_20661 = cljs.core.chunk_rest.call(null,inst_20656);
var inst_20662 = cljs.core.count.call(null,inst_20660);
var inst_20642 = inst_20661;
var inst_20643 = inst_20660;
var inst_20644 = inst_20662;
var inst_20645 = (0);
var state_20690__$1 = (function (){var statearr_20709 = state_20690;
(statearr_20709[(8)] = inst_20645);

(statearr_20709[(9)] = inst_20643);

(statearr_20709[(10)] = inst_20642);

(statearr_20709[(12)] = inst_20644);

return statearr_20709;
})();
var statearr_20710_20743 = state_20690__$1;
(statearr_20710_20743[(2)] = null);

(statearr_20710_20743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (3))){
var inst_20688 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20690__$1,inst_20688);
} else {
if((state_val_20691 === (12))){
var inst_20676 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20711_20744 = state_20690__$1;
(statearr_20711_20744[(2)] = inst_20676);

(statearr_20711_20744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (2))){
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20690__$1,(4),in$);
} else {
if((state_val_20691 === (23))){
var inst_20684 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20712_20745 = state_20690__$1;
(statearr_20712_20745[(2)] = inst_20684);

(statearr_20712_20745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (19))){
var inst_20671 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20713_20746 = state_20690__$1;
(statearr_20713_20746[(2)] = inst_20671);

(statearr_20713_20746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (11))){
var inst_20656 = (state_20690[(7)]);
var inst_20642 = (state_20690[(10)]);
var inst_20656__$1 = cljs.core.seq.call(null,inst_20642);
var state_20690__$1 = (function (){var statearr_20714 = state_20690;
(statearr_20714[(7)] = inst_20656__$1);

return statearr_20714;
})();
if(inst_20656__$1){
var statearr_20715_20747 = state_20690__$1;
(statearr_20715_20747[(1)] = (14));

} else {
var statearr_20716_20748 = state_20690__$1;
(statearr_20716_20748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (9))){
var inst_20678 = (state_20690[(2)]);
var inst_20679 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20690__$1 = (function (){var statearr_20717 = state_20690;
(statearr_20717[(15)] = inst_20678);

return statearr_20717;
})();
if(cljs.core.truth_(inst_20679)){
var statearr_20718_20749 = state_20690__$1;
(statearr_20718_20749[(1)] = (21));

} else {
var statearr_20719_20750 = state_20690__$1;
(statearr_20719_20750[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (5))){
var inst_20634 = cljs.core.async.close_BANG_.call(null,out);
var state_20690__$1 = state_20690;
var statearr_20720_20751 = state_20690__$1;
(statearr_20720_20751[(2)] = inst_20634);

(statearr_20720_20751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (14))){
var inst_20656 = (state_20690[(7)]);
var inst_20658 = cljs.core.chunked_seq_QMARK_.call(null,inst_20656);
var state_20690__$1 = state_20690;
if(inst_20658){
var statearr_20721_20752 = state_20690__$1;
(statearr_20721_20752[(1)] = (17));

} else {
var statearr_20722_20753 = state_20690__$1;
(statearr_20722_20753[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (16))){
var inst_20674 = (state_20690[(2)]);
var state_20690__$1 = state_20690;
var statearr_20723_20754 = state_20690__$1;
(statearr_20723_20754[(2)] = inst_20674);

(statearr_20723_20754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20691 === (10))){
var inst_20645 = (state_20690[(8)]);
var inst_20643 = (state_20690[(9)]);
var inst_20650 = cljs.core._nth.call(null,inst_20643,inst_20645);
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20690__$1,(13),out,inst_20650);
} else {
if((state_val_20691 === (18))){
var inst_20656 = (state_20690[(7)]);
var inst_20665 = cljs.core.first.call(null,inst_20656);
var state_20690__$1 = state_20690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20690__$1,(20),out,inst_20665);
} else {
if((state_val_20691 === (8))){
var inst_20645 = (state_20690[(8)]);
var inst_20644 = (state_20690[(12)]);
var inst_20647 = (inst_20645 < inst_20644);
var inst_20648 = inst_20647;
var state_20690__$1 = state_20690;
if(cljs.core.truth_(inst_20648)){
var statearr_20724_20755 = state_20690__$1;
(statearr_20724_20755[(1)] = (10));

} else {
var statearr_20725_20756 = state_20690__$1;
(statearr_20725_20756[(1)] = (11));

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
});})(c__8399__auto__))
;
return ((function (switch__8334__auto__,c__8399__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_20729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__);

(statearr_20729[(1)] = (1));

return statearr_20729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1 = (function (state_20690){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20730){if((e20730 instanceof Object)){
var ex__8338__auto__ = e20730;
var statearr_20731_20757 = state_20690;
(statearr_20731_20757[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20758 = state_20690;
state_20690 = G__20758;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__ = function(state_20690){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1.call(this,state_20690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_20732 = f__8400__auto__.call(null);
(statearr_20732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_20732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto__))
);

return c__8399__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20759 = [];
var len__6152__auto___20762 = arguments.length;
var i__6153__auto___20763 = (0);
while(true){
if((i__6153__auto___20763 < len__6152__auto___20762)){
args20759.push((arguments[i__6153__auto___20763]));

var G__20764 = (i__6153__auto___20763 + (1));
i__6153__auto___20763 = G__20764;
continue;
} else {
}
break;
}

var G__20761 = args20759.length;
switch (G__20761) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20759.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args20766 = [];
var len__6152__auto___20769 = arguments.length;
var i__6153__auto___20770 = (0);
while(true){
if((i__6153__auto___20770 < len__6152__auto___20769)){
args20766.push((arguments[i__6153__auto___20770]));

var G__20771 = (i__6153__auto___20770 + (1));
i__6153__auto___20770 = G__20771;
continue;
} else {
}
break;
}

var G__20768 = args20766.length;
switch (G__20768) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20766.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args20773 = [];
var len__6152__auto___20824 = arguments.length;
var i__6153__auto___20825 = (0);
while(true){
if((i__6153__auto___20825 < len__6152__auto___20824)){
args20773.push((arguments[i__6153__auto___20825]));

var G__20826 = (i__6153__auto___20825 + (1));
i__6153__auto___20825 = G__20826;
continue;
} else {
}
break;
}

var G__20775 = args20773.length;
switch (G__20775) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20773.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20828,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20828,out){
return (function (state_20799){
var state_val_20800 = (state_20799[(1)]);
if((state_val_20800 === (7))){
var inst_20794 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
var statearr_20801_20829 = state_20799__$1;
(statearr_20801_20829[(2)] = inst_20794);

(statearr_20801_20829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (1))){
var inst_20776 = null;
var state_20799__$1 = (function (){var statearr_20802 = state_20799;
(statearr_20802[(7)] = inst_20776);

return statearr_20802;
})();
var statearr_20803_20830 = state_20799__$1;
(statearr_20803_20830[(2)] = null);

(statearr_20803_20830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (4))){
var inst_20779 = (state_20799[(8)]);
var inst_20779__$1 = (state_20799[(2)]);
var inst_20780 = (inst_20779__$1 == null);
var inst_20781 = cljs.core.not.call(null,inst_20780);
var state_20799__$1 = (function (){var statearr_20804 = state_20799;
(statearr_20804[(8)] = inst_20779__$1);

return statearr_20804;
})();
if(inst_20781){
var statearr_20805_20831 = state_20799__$1;
(statearr_20805_20831[(1)] = (5));

} else {
var statearr_20806_20832 = state_20799__$1;
(statearr_20806_20832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (6))){
var state_20799__$1 = state_20799;
var statearr_20807_20833 = state_20799__$1;
(statearr_20807_20833[(2)] = null);

(statearr_20807_20833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (3))){
var inst_20796 = (state_20799[(2)]);
var inst_20797 = cljs.core.async.close_BANG_.call(null,out);
var state_20799__$1 = (function (){var statearr_20808 = state_20799;
(statearr_20808[(9)] = inst_20796);

return statearr_20808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20799__$1,inst_20797);
} else {
if((state_val_20800 === (2))){
var state_20799__$1 = state_20799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20799__$1,(4),ch);
} else {
if((state_val_20800 === (11))){
var inst_20779 = (state_20799[(8)]);
var inst_20788 = (state_20799[(2)]);
var inst_20776 = inst_20779;
var state_20799__$1 = (function (){var statearr_20809 = state_20799;
(statearr_20809[(7)] = inst_20776);

(statearr_20809[(10)] = inst_20788);

return statearr_20809;
})();
var statearr_20810_20834 = state_20799__$1;
(statearr_20810_20834[(2)] = null);

(statearr_20810_20834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (9))){
var inst_20779 = (state_20799[(8)]);
var state_20799__$1 = state_20799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20799__$1,(11),out,inst_20779);
} else {
if((state_val_20800 === (5))){
var inst_20776 = (state_20799[(7)]);
var inst_20779 = (state_20799[(8)]);
var inst_20783 = cljs.core._EQ_.call(null,inst_20779,inst_20776);
var state_20799__$1 = state_20799;
if(inst_20783){
var statearr_20812_20835 = state_20799__$1;
(statearr_20812_20835[(1)] = (8));

} else {
var statearr_20813_20836 = state_20799__$1;
(statearr_20813_20836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (10))){
var inst_20791 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
var statearr_20814_20837 = state_20799__$1;
(statearr_20814_20837[(2)] = inst_20791);

(statearr_20814_20837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (8))){
var inst_20776 = (state_20799[(7)]);
var tmp20811 = inst_20776;
var inst_20776__$1 = tmp20811;
var state_20799__$1 = (function (){var statearr_20815 = state_20799;
(statearr_20815[(7)] = inst_20776__$1);

return statearr_20815;
})();
var statearr_20816_20838 = state_20799__$1;
(statearr_20816_20838[(2)] = null);

(statearr_20816_20838[(1)] = (2));


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
});})(c__8399__auto___20828,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20828,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20820[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20820[(1)] = (1));

return statearr_20820;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20799){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20821){if((e20821 instanceof Object)){
var ex__8338__auto__ = e20821;
var statearr_20822_20839 = state_20799;
(statearr_20822_20839[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20840 = state_20799;
state_20799 = G__20840;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20828,out))
})();
var state__8401__auto__ = (function (){var statearr_20823 = f__8400__auto__.call(null);
(statearr_20823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20828);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20828,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20841 = [];
var len__6152__auto___20911 = arguments.length;
var i__6153__auto___20912 = (0);
while(true){
if((i__6153__auto___20912 < len__6152__auto___20911)){
args20841.push((arguments[i__6153__auto___20912]));

var G__20913 = (i__6153__auto___20912 + (1));
i__6153__auto___20912 = G__20913;
continue;
} else {
}
break;
}

var G__20843 = args20841.length;
switch (G__20843) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20841.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20915,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20915,out){
return (function (state_20881){
var state_val_20882 = (state_20881[(1)]);
if((state_val_20882 === (7))){
var inst_20877 = (state_20881[(2)]);
var state_20881__$1 = state_20881;
var statearr_20883_20916 = state_20881__$1;
(statearr_20883_20916[(2)] = inst_20877);

(statearr_20883_20916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (1))){
var inst_20844 = (new Array(n));
var inst_20845 = inst_20844;
var inst_20846 = (0);
var state_20881__$1 = (function (){var statearr_20884 = state_20881;
(statearr_20884[(7)] = inst_20846);

(statearr_20884[(8)] = inst_20845);

return statearr_20884;
})();
var statearr_20885_20917 = state_20881__$1;
(statearr_20885_20917[(2)] = null);

(statearr_20885_20917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (4))){
var inst_20849 = (state_20881[(9)]);
var inst_20849__$1 = (state_20881[(2)]);
var inst_20850 = (inst_20849__$1 == null);
var inst_20851 = cljs.core.not.call(null,inst_20850);
var state_20881__$1 = (function (){var statearr_20886 = state_20881;
(statearr_20886[(9)] = inst_20849__$1);

return statearr_20886;
})();
if(inst_20851){
var statearr_20887_20918 = state_20881__$1;
(statearr_20887_20918[(1)] = (5));

} else {
var statearr_20888_20919 = state_20881__$1;
(statearr_20888_20919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (15))){
var inst_20871 = (state_20881[(2)]);
var state_20881__$1 = state_20881;
var statearr_20889_20920 = state_20881__$1;
(statearr_20889_20920[(2)] = inst_20871);

(statearr_20889_20920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (13))){
var state_20881__$1 = state_20881;
var statearr_20890_20921 = state_20881__$1;
(statearr_20890_20921[(2)] = null);

(statearr_20890_20921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (6))){
var inst_20846 = (state_20881[(7)]);
var inst_20867 = (inst_20846 > (0));
var state_20881__$1 = state_20881;
if(cljs.core.truth_(inst_20867)){
var statearr_20891_20922 = state_20881__$1;
(statearr_20891_20922[(1)] = (12));

} else {
var statearr_20892_20923 = state_20881__$1;
(statearr_20892_20923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (3))){
var inst_20879 = (state_20881[(2)]);
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20881__$1,inst_20879);
} else {
if((state_val_20882 === (12))){
var inst_20845 = (state_20881[(8)]);
var inst_20869 = cljs.core.vec.call(null,inst_20845);
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20881__$1,(15),out,inst_20869);
} else {
if((state_val_20882 === (2))){
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20881__$1,(4),ch);
} else {
if((state_val_20882 === (11))){
var inst_20861 = (state_20881[(2)]);
var inst_20862 = (new Array(n));
var inst_20845 = inst_20862;
var inst_20846 = (0);
var state_20881__$1 = (function (){var statearr_20893 = state_20881;
(statearr_20893[(7)] = inst_20846);

(statearr_20893[(10)] = inst_20861);

(statearr_20893[(8)] = inst_20845);

return statearr_20893;
})();
var statearr_20894_20924 = state_20881__$1;
(statearr_20894_20924[(2)] = null);

(statearr_20894_20924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (9))){
var inst_20845 = (state_20881[(8)]);
var inst_20859 = cljs.core.vec.call(null,inst_20845);
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20881__$1,(11),out,inst_20859);
} else {
if((state_val_20882 === (5))){
var inst_20846 = (state_20881[(7)]);
var inst_20854 = (state_20881[(11)]);
var inst_20845 = (state_20881[(8)]);
var inst_20849 = (state_20881[(9)]);
var inst_20853 = (inst_20845[inst_20846] = inst_20849);
var inst_20854__$1 = (inst_20846 + (1));
var inst_20855 = (inst_20854__$1 < n);
var state_20881__$1 = (function (){var statearr_20895 = state_20881;
(statearr_20895[(11)] = inst_20854__$1);

(statearr_20895[(12)] = inst_20853);

return statearr_20895;
})();
if(cljs.core.truth_(inst_20855)){
var statearr_20896_20925 = state_20881__$1;
(statearr_20896_20925[(1)] = (8));

} else {
var statearr_20897_20926 = state_20881__$1;
(statearr_20897_20926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (14))){
var inst_20874 = (state_20881[(2)]);
var inst_20875 = cljs.core.async.close_BANG_.call(null,out);
var state_20881__$1 = (function (){var statearr_20899 = state_20881;
(statearr_20899[(13)] = inst_20874);

return statearr_20899;
})();
var statearr_20900_20927 = state_20881__$1;
(statearr_20900_20927[(2)] = inst_20875);

(statearr_20900_20927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (10))){
var inst_20865 = (state_20881[(2)]);
var state_20881__$1 = state_20881;
var statearr_20901_20928 = state_20881__$1;
(statearr_20901_20928[(2)] = inst_20865);

(statearr_20901_20928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (8))){
var inst_20854 = (state_20881[(11)]);
var inst_20845 = (state_20881[(8)]);
var tmp20898 = inst_20845;
var inst_20845__$1 = tmp20898;
var inst_20846 = inst_20854;
var state_20881__$1 = (function (){var statearr_20902 = state_20881;
(statearr_20902[(7)] = inst_20846);

(statearr_20902[(8)] = inst_20845__$1);

return statearr_20902;
})();
var statearr_20903_20929 = state_20881__$1;
(statearr_20903_20929[(2)] = null);

(statearr_20903_20929[(1)] = (2));


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
});})(c__8399__auto___20915,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20915,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20907[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20907[(1)] = (1));

return statearr_20907;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20881){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20908){if((e20908 instanceof Object)){
var ex__8338__auto__ = e20908;
var statearr_20909_20930 = state_20881;
(statearr_20909_20930[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20931 = state_20881;
state_20881 = G__20931;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20915,out))
})();
var state__8401__auto__ = (function (){var statearr_20910 = f__8400__auto__.call(null);
(statearr_20910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20915);

return statearr_20910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20915,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20932 = [];
var len__6152__auto___21006 = arguments.length;
var i__6153__auto___21007 = (0);
while(true){
if((i__6153__auto___21007 < len__6152__auto___21006)){
args20932.push((arguments[i__6153__auto___21007]));

var G__21008 = (i__6153__auto___21007 + (1));
i__6153__auto___21007 = G__21008;
continue;
} else {
}
break;
}

var G__20934 = args20932.length;
switch (G__20934) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20932.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___21010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___21010,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___21010,out){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (7))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20978_21011 = state_20976__$1;
(statearr_20978_21011[(2)] = inst_20972);

(statearr_20978_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (1))){
var inst_20935 = [];
var inst_20936 = inst_20935;
var inst_20937 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20976__$1 = (function (){var statearr_20979 = state_20976;
(statearr_20979[(7)] = inst_20936);

(statearr_20979[(8)] = inst_20937);

return statearr_20979;
})();
var statearr_20980_21012 = state_20976__$1;
(statearr_20980_21012[(2)] = null);

(statearr_20980_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (4))){
var inst_20940 = (state_20976[(9)]);
var inst_20940__$1 = (state_20976[(2)]);
var inst_20941 = (inst_20940__$1 == null);
var inst_20942 = cljs.core.not.call(null,inst_20941);
var state_20976__$1 = (function (){var statearr_20981 = state_20976;
(statearr_20981[(9)] = inst_20940__$1);

return statearr_20981;
})();
if(inst_20942){
var statearr_20982_21013 = state_20976__$1;
(statearr_20982_21013[(1)] = (5));

} else {
var statearr_20983_21014 = state_20976__$1;
(statearr_20983_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (15))){
var inst_20966 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20984_21015 = state_20976__$1;
(statearr_20984_21015[(2)] = inst_20966);

(statearr_20984_21015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (13))){
var state_20976__$1 = state_20976;
var statearr_20985_21016 = state_20976__$1;
(statearr_20985_21016[(2)] = null);

(statearr_20985_21016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20936 = (state_20976[(7)]);
var inst_20961 = inst_20936.length;
var inst_20962 = (inst_20961 > (0));
var state_20976__$1 = state_20976;
if(cljs.core.truth_(inst_20962)){
var statearr_20986_21017 = state_20976__$1;
(statearr_20986_21017[(1)] = (12));

} else {
var statearr_20987_21018 = state_20976__$1;
(statearr_20987_21018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (12))){
var inst_20936 = (state_20976[(7)]);
var inst_20964 = cljs.core.vec.call(null,inst_20936);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(15),out,inst_20964);
} else {
if((state_val_20977 === (2))){
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(4),ch);
} else {
if((state_val_20977 === (11))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20954 = (state_20976[(2)]);
var inst_20955 = [];
var inst_20956 = inst_20955.push(inst_20940);
var inst_20936 = inst_20955;
var inst_20937 = inst_20944;
var state_20976__$1 = (function (){var statearr_20988 = state_20976;
(statearr_20988[(11)] = inst_20956);

(statearr_20988[(7)] = inst_20936);

(statearr_20988[(12)] = inst_20954);

(statearr_20988[(8)] = inst_20937);

return statearr_20988;
})();
var statearr_20989_21019 = state_20976__$1;
(statearr_20989_21019[(2)] = null);

(statearr_20989_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (9))){
var inst_20936 = (state_20976[(7)]);
var inst_20952 = cljs.core.vec.call(null,inst_20936);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(11),out,inst_20952);
} else {
if((state_val_20977 === (5))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20937 = (state_20976[(8)]);
var inst_20944__$1 = f.call(null,inst_20940);
var inst_20945 = cljs.core._EQ_.call(null,inst_20944__$1,inst_20937);
var inst_20946 = cljs.core.keyword_identical_QMARK_.call(null,inst_20937,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20947 = (inst_20945) || (inst_20946);
var state_20976__$1 = (function (){var statearr_20990 = state_20976;
(statearr_20990[(10)] = inst_20944__$1);

return statearr_20990;
})();
if(cljs.core.truth_(inst_20947)){
var statearr_20991_21020 = state_20976__$1;
(statearr_20991_21020[(1)] = (8));

} else {
var statearr_20992_21021 = state_20976__$1;
(statearr_20992_21021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (14))){
var inst_20969 = (state_20976[(2)]);
var inst_20970 = cljs.core.async.close_BANG_.call(null,out);
var state_20976__$1 = (function (){var statearr_20994 = state_20976;
(statearr_20994[(13)] = inst_20969);

return statearr_20994;
})();
var statearr_20995_21022 = state_20976__$1;
(statearr_20995_21022[(2)] = inst_20970);

(statearr_20995_21022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (10))){
var inst_20959 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20996_21023 = state_20976__$1;
(statearr_20996_21023[(2)] = inst_20959);

(statearr_20996_21023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (8))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20936 = (state_20976[(7)]);
var inst_20949 = inst_20936.push(inst_20940);
var tmp20993 = inst_20936;
var inst_20936__$1 = tmp20993;
var inst_20937 = inst_20944;
var state_20976__$1 = (function (){var statearr_20997 = state_20976;
(statearr_20997[(7)] = inst_20936__$1);

(statearr_20997[(8)] = inst_20937);

(statearr_20997[(14)] = inst_20949);

return statearr_20997;
})();
var statearr_20998_21024 = state_20976__$1;
(statearr_20998_21024[(2)] = null);

(statearr_20998_21024[(1)] = (2));


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
});})(c__8399__auto___21010,out))
;
return ((function (switch__8334__auto__,c__8399__auto___21010,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_21002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21002[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_21002[(1)] = (1));

return statearr_21002;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20976){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e21003){if((e21003 instanceof Object)){
var ex__8338__auto__ = e21003;
var statearr_21004_21025 = state_20976;
(statearr_21004_21025[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21026 = state_20976;
state_20976 = G__21026;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___21010,out))
})();
var state__8401__auto__ = (function (){var statearr_21005 = f__8400__auto__.call(null);
(statearr_21005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___21010);

return statearr_21005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___21010,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map