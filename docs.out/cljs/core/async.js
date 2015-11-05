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
if(typeof cljs.core.async.t_cljs$core$async18079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18079 = (function (fn_handler,f,meta18080){
this.fn_handler = fn_handler;
this.f = f;
this.meta18080 = meta18080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18081,meta18080__$1){
var self__ = this;
var _18081__$1 = this;
return (new cljs.core.async.t_cljs$core$async18079(self__.fn_handler,self__.f,meta18080__$1));
});

cljs.core.async.t_cljs$core$async18079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18081){
var self__ = this;
var _18081__$1 = this;
return self__.meta18080;
});

cljs.core.async.t_cljs$core$async18079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta18080","meta18080",-13145485,null)], null);
});

cljs.core.async.t_cljs$core$async18079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18079";

cljs.core.async.t_cljs$core$async18079.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18079");
});

cljs.core.async.__GT_t_cljs$core$async18079 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async18079(fn_handler__$1,f__$1,meta18080){
return (new cljs.core.async.t_cljs$core$async18079(fn_handler__$1,f__$1,meta18080));
});

}

return (new cljs.core.async.t_cljs$core$async18079(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args18084 = [];
var len__6152__auto___18087 = arguments.length;
var i__6153__auto___18088 = (0);
while(true){
if((i__6153__auto___18088 < len__6152__auto___18087)){
args18084.push((arguments[i__6153__auto___18088]));

var G__18089 = (i__6153__auto___18088 + (1));
i__6153__auto___18088 = G__18089;
continue;
} else {
}
break;
}

var G__18086 = args18084.length;
switch (G__18086) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18084.length)].join('')));

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
var args18091 = [];
var len__6152__auto___18094 = arguments.length;
var i__6153__auto___18095 = (0);
while(true){
if((i__6153__auto___18095 < len__6152__auto___18094)){
args18091.push((arguments[i__6153__auto___18095]));

var G__18096 = (i__6153__auto___18095 + (1));
i__6153__auto___18095 = G__18096;
continue;
} else {
}
break;
}

var G__18093 = args18091.length;
switch (G__18093) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18091.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18098 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18098);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18098,ret){
return (function (){
return fn1.call(null,val_18098);
});})(val_18098,ret))
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
var args18099 = [];
var len__6152__auto___18102 = arguments.length;
var i__6153__auto___18103 = (0);
while(true){
if((i__6153__auto___18103 < len__6152__auto___18102)){
args18099.push((arguments[i__6153__auto___18103]));

var G__18104 = (i__6153__auto___18103 + (1));
i__6153__auto___18103 = G__18104;
continue;
} else {
}
break;
}

var G__18101 = args18099.length;
switch (G__18101) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18099.length)].join('')));

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
var n__5997__auto___18106 = n;
var x_18107 = (0);
while(true){
if((x_18107 < n__5997__auto___18106)){
(a[x_18107] = (0));

var G__18108 = (x_18107 + (1));
x_18107 = G__18108;
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

var G__18109 = (i + (1));
i = G__18109;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18113 = (function (alt_flag,flag,meta18114){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18114 = meta18114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18115,meta18114__$1){
var self__ = this;
var _18115__$1 = this;
return (new cljs.core.async.t_cljs$core$async18113(self__.alt_flag,self__.flag,meta18114__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18115){
var self__ = this;
var _18115__$1 = this;
return self__.meta18114;
});})(flag))
;

cljs.core.async.t_cljs$core$async18113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18113.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18114","meta18114",-1047146035,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18113";

cljs.core.async.t_cljs$core$async18113.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18113");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18113 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18113(alt_flag__$1,flag__$1,meta18114){
return (new cljs.core.async.t_cljs$core$async18113(alt_flag__$1,flag__$1,meta18114));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18113(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18119 = (function (alt_handler,flag,cb,meta18120){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18120 = meta18120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18121,meta18120__$1){
var self__ = this;
var _18121__$1 = this;
return (new cljs.core.async.t_cljs$core$async18119(self__.alt_handler,self__.flag,self__.cb,meta18120__$1));
});

cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18121){
var self__ = this;
var _18121__$1 = this;
return self__.meta18120;
});

cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18120","meta18120",1814073951,null)], null);
});

cljs.core.async.t_cljs$core$async18119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18119";

cljs.core.async.t_cljs$core$async18119.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18119");
});

cljs.core.async.__GT_t_cljs$core$async18119 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18119(alt_handler__$1,flag__$1,cb__$1,meta18120){
return (new cljs.core.async.t_cljs$core$async18119(alt_handler__$1,flag__$1,cb__$1,meta18120));
});

}

return (new cljs.core.async.t_cljs$core$async18119(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18122_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18122_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18123_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18123_SHARP_,port], null));
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
var G__18124 = (i + (1));
i = G__18124;
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
var len__6152__auto___18130 = arguments.length;
var i__6153__auto___18131 = (0);
while(true){
if((i__6153__auto___18131 < len__6152__auto___18130)){
args__6159__auto__.push((arguments[i__6153__auto___18131]));

var G__18132 = (i__6153__auto___18131 + (1));
i__6153__auto___18131 = G__18132;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18127){
var map__18128 = p__18127;
var map__18128__$1 = ((((!((map__18128 == null)))?((((map__18128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18128):map__18128);
var opts = map__18128__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18125){
var G__18126 = cljs.core.first.call(null,seq18125);
var seq18125__$1 = cljs.core.next.call(null,seq18125);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18126,seq18125__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18133 = [];
var len__6152__auto___18183 = arguments.length;
var i__6153__auto___18184 = (0);
while(true){
if((i__6153__auto___18184 < len__6152__auto___18183)){
args18133.push((arguments[i__6153__auto___18184]));

var G__18185 = (i__6153__auto___18184 + (1));
i__6153__auto___18184 = G__18185;
continue;
} else {
}
break;
}

var G__18135 = args18133.length;
switch (G__18135) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18133.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8399__auto___18187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18187){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18187){
return (function (state_18159){
var state_val_18160 = (state_18159[(1)]);
if((state_val_18160 === (7))){
var inst_18155 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18161_18188 = state_18159__$1;
(statearr_18161_18188[(2)] = inst_18155);

(statearr_18161_18188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (1))){
var state_18159__$1 = state_18159;
var statearr_18162_18189 = state_18159__$1;
(statearr_18162_18189[(2)] = null);

(statearr_18162_18189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (4))){
var inst_18138 = (state_18159[(7)]);
var inst_18138__$1 = (state_18159[(2)]);
var inst_18139 = (inst_18138__$1 == null);
var state_18159__$1 = (function (){var statearr_18163 = state_18159;
(statearr_18163[(7)] = inst_18138__$1);

return statearr_18163;
})();
if(cljs.core.truth_(inst_18139)){
var statearr_18164_18190 = state_18159__$1;
(statearr_18164_18190[(1)] = (5));

} else {
var statearr_18165_18191 = state_18159__$1;
(statearr_18165_18191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (13))){
var state_18159__$1 = state_18159;
var statearr_18166_18192 = state_18159__$1;
(statearr_18166_18192[(2)] = null);

(statearr_18166_18192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (6))){
var inst_18138 = (state_18159[(7)]);
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18159__$1,(11),to,inst_18138);
} else {
if((state_val_18160 === (3))){
var inst_18157 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18159__$1,inst_18157);
} else {
if((state_val_18160 === (12))){
var state_18159__$1 = state_18159;
var statearr_18167_18193 = state_18159__$1;
(statearr_18167_18193[(2)] = null);

(statearr_18167_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (2))){
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18159__$1,(4),from);
} else {
if((state_val_18160 === (11))){
var inst_18148 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
if(cljs.core.truth_(inst_18148)){
var statearr_18168_18194 = state_18159__$1;
(statearr_18168_18194[(1)] = (12));

} else {
var statearr_18169_18195 = state_18159__$1;
(statearr_18169_18195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (9))){
var state_18159__$1 = state_18159;
var statearr_18170_18196 = state_18159__$1;
(statearr_18170_18196[(2)] = null);

(statearr_18170_18196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (5))){
var state_18159__$1 = state_18159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18171_18197 = state_18159__$1;
(statearr_18171_18197[(1)] = (8));

} else {
var statearr_18172_18198 = state_18159__$1;
(statearr_18172_18198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (14))){
var inst_18153 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18173_18199 = state_18159__$1;
(statearr_18173_18199[(2)] = inst_18153);

(statearr_18173_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (10))){
var inst_18145 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18174_18200 = state_18159__$1;
(statearr_18174_18200[(2)] = inst_18145);

(statearr_18174_18200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (8))){
var inst_18142 = cljs.core.async.close_BANG_.call(null,to);
var state_18159__$1 = state_18159;
var statearr_18175_18201 = state_18159__$1;
(statearr_18175_18201[(2)] = inst_18142);

(statearr_18175_18201[(1)] = (10));


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
});})(c__8399__auto___18187))
;
return ((function (switch__8334__auto__,c__8399__auto___18187){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18179 = [null,null,null,null,null,null,null,null];
(statearr_18179[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18179[(1)] = (1));

return statearr_18179;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18159){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18180){if((e18180 instanceof Object)){
var ex__8338__auto__ = e18180;
var statearr_18181_18202 = state_18159;
(statearr_18181_18202[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18203 = state_18159;
state_18159 = G__18203;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18187))
})();
var state__8401__auto__ = (function (){var statearr_18182 = f__8400__auto__.call(null);
(statearr_18182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18187);

return statearr_18182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18187))
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
return (function (p__18387){
var vec__18388 = p__18387;
var v = cljs.core.nth.call(null,vec__18388,(0),null);
var p = cljs.core.nth.call(null,vec__18388,(1),null);
var job = vec__18388;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8399__auto___18570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results){
return (function (state_18393){
var state_val_18394 = (state_18393[(1)]);
if((state_val_18394 === (1))){
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18393__$1,(2),res,v);
} else {
if((state_val_18394 === (2))){
var inst_18390 = (state_18393[(2)]);
var inst_18391 = cljs.core.async.close_BANG_.call(null,res);
var state_18393__$1 = (function (){var statearr_18395 = state_18393;
(statearr_18395[(7)] = inst_18390);

return statearr_18395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18393__$1,inst_18391);
} else {
return null;
}
}
});})(c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results))
;
return ((function (switch__8334__auto__,c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18399 = [null,null,null,null,null,null,null,null];
(statearr_18399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18399[(1)] = (1));

return statearr_18399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18393){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18400){if((e18400 instanceof Object)){
var ex__8338__auto__ = e18400;
var statearr_18401_18571 = state_18393;
(statearr_18401_18571[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_18393;
state_18393 = G__18572;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results))
})();
var state__8401__auto__ = (function (){var statearr_18402 = f__8400__auto__.call(null);
(statearr_18402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18570);

return statearr_18402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18570,res,vec__18388,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18403){
var vec__18404 = p__18403;
var v = cljs.core.nth.call(null,vec__18404,(0),null);
var p = cljs.core.nth.call(null,vec__18404,(1),null);
var job = vec__18404;
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
var n__5997__auto___18573 = n;
var __18574 = (0);
while(true){
if((__18574 < n__5997__auto___18573)){
var G__18405_18575 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18405_18575) {
case "compute":
var c__8399__auto___18577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18574,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18574,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function (state_18418){
var state_val_18419 = (state_18418[(1)]);
if((state_val_18419 === (1))){
var state_18418__$1 = state_18418;
var statearr_18420_18578 = state_18418__$1;
(statearr_18420_18578[(2)] = null);

(statearr_18420_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (2))){
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18418__$1,(4),jobs);
} else {
if((state_val_18419 === (3))){
var inst_18416 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18418__$1,inst_18416);
} else {
if((state_val_18419 === (4))){
var inst_18408 = (state_18418[(2)]);
var inst_18409 = process.call(null,inst_18408);
var state_18418__$1 = state_18418;
if(cljs.core.truth_(inst_18409)){
var statearr_18421_18579 = state_18418__$1;
(statearr_18421_18579[(1)] = (5));

} else {
var statearr_18422_18580 = state_18418__$1;
(statearr_18422_18580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (5))){
var state_18418__$1 = state_18418;
var statearr_18423_18581 = state_18418__$1;
(statearr_18423_18581[(2)] = null);

(statearr_18423_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (6))){
var state_18418__$1 = state_18418;
var statearr_18424_18582 = state_18418__$1;
(statearr_18424_18582[(2)] = null);

(statearr_18424_18582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (7))){
var inst_18414 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
var statearr_18425_18583 = state_18418__$1;
(statearr_18425_18583[(2)] = inst_18414);

(statearr_18425_18583[(1)] = (3));


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
});})(__18574,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
;
return ((function (__18574,switch__8334__auto__,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18429 = [null,null,null,null,null,null,null];
(statearr_18429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18429[(1)] = (1));

return statearr_18429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18418){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18430){if((e18430 instanceof Object)){
var ex__8338__auto__ = e18430;
var statearr_18431_18584 = state_18418;
(statearr_18431_18584[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18585 = state_18418;
state_18418 = G__18585;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18574,switch__8334__auto__,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18432 = f__8400__auto__.call(null);
(statearr_18432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18577);

return statearr_18432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18574,c__8399__auto___18577,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
);


break;
case "async":
var c__8399__auto___18586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18574,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18574,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function (state_18445){
var state_val_18446 = (state_18445[(1)]);
if((state_val_18446 === (1))){
var state_18445__$1 = state_18445;
var statearr_18447_18587 = state_18445__$1;
(statearr_18447_18587[(2)] = null);

(statearr_18447_18587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (2))){
var state_18445__$1 = state_18445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18445__$1,(4),jobs);
} else {
if((state_val_18446 === (3))){
var inst_18443 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18445__$1,inst_18443);
} else {
if((state_val_18446 === (4))){
var inst_18435 = (state_18445[(2)]);
var inst_18436 = async.call(null,inst_18435);
var state_18445__$1 = state_18445;
if(cljs.core.truth_(inst_18436)){
var statearr_18448_18588 = state_18445__$1;
(statearr_18448_18588[(1)] = (5));

} else {
var statearr_18449_18589 = state_18445__$1;
(statearr_18449_18589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (5))){
var state_18445__$1 = state_18445;
var statearr_18450_18590 = state_18445__$1;
(statearr_18450_18590[(2)] = null);

(statearr_18450_18590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (6))){
var state_18445__$1 = state_18445;
var statearr_18451_18591 = state_18445__$1;
(statearr_18451_18591[(2)] = null);

(statearr_18451_18591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18446 === (7))){
var inst_18441 = (state_18445[(2)]);
var state_18445__$1 = state_18445;
var statearr_18452_18592 = state_18445__$1;
(statearr_18452_18592[(2)] = inst_18441);

(statearr_18452_18592[(1)] = (3));


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
});})(__18574,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
;
return ((function (__18574,switch__8334__auto__,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18456 = [null,null,null,null,null,null,null];
(statearr_18456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18456[(1)] = (1));

return statearr_18456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18445){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18457){if((e18457 instanceof Object)){
var ex__8338__auto__ = e18457;
var statearr_18458_18593 = state_18445;
(statearr_18458_18593[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18594 = state_18445;
state_18445 = G__18594;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18574,switch__8334__auto__,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18459 = f__8400__auto__.call(null);
(statearr_18459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18586);

return statearr_18459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18574,c__8399__auto___18586,G__18405_18575,n__5997__auto___18573,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18595 = (__18574 + (1));
__18574 = G__18595;
continue;
} else {
}
break;
}

var c__8399__auto___18596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18596,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18596,jobs,results,process,async){
return (function (state_18481){
var state_val_18482 = (state_18481[(1)]);
if((state_val_18482 === (1))){
var state_18481__$1 = state_18481;
var statearr_18483_18597 = state_18481__$1;
(statearr_18483_18597[(2)] = null);

(statearr_18483_18597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18482 === (2))){
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18481__$1,(4),from);
} else {
if((state_val_18482 === (3))){
var inst_18479 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18481__$1,inst_18479);
} else {
if((state_val_18482 === (4))){
var inst_18462 = (state_18481[(7)]);
var inst_18462__$1 = (state_18481[(2)]);
var inst_18463 = (inst_18462__$1 == null);
var state_18481__$1 = (function (){var statearr_18484 = state_18481;
(statearr_18484[(7)] = inst_18462__$1);

return statearr_18484;
})();
if(cljs.core.truth_(inst_18463)){
var statearr_18485_18598 = state_18481__$1;
(statearr_18485_18598[(1)] = (5));

} else {
var statearr_18486_18599 = state_18481__$1;
(statearr_18486_18599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18482 === (5))){
var inst_18465 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18481__$1 = state_18481;
var statearr_18487_18600 = state_18481__$1;
(statearr_18487_18600[(2)] = inst_18465);

(statearr_18487_18600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18482 === (6))){
var inst_18462 = (state_18481[(7)]);
var inst_18467 = (state_18481[(8)]);
var inst_18467__$1 = cljs.core.async.chan.call(null,(1));
var inst_18468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18469 = [inst_18462,inst_18467__$1];
var inst_18470 = (new cljs.core.PersistentVector(null,2,(5),inst_18468,inst_18469,null));
var state_18481__$1 = (function (){var statearr_18488 = state_18481;
(statearr_18488[(8)] = inst_18467__$1);

return statearr_18488;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18481__$1,(8),jobs,inst_18470);
} else {
if((state_val_18482 === (7))){
var inst_18477 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18489_18601 = state_18481__$1;
(statearr_18489_18601[(2)] = inst_18477);

(statearr_18489_18601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18482 === (8))){
var inst_18467 = (state_18481[(8)]);
var inst_18472 = (state_18481[(2)]);
var state_18481__$1 = (function (){var statearr_18490 = state_18481;
(statearr_18490[(9)] = inst_18472);

return statearr_18490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18481__$1,(9),results,inst_18467);
} else {
if((state_val_18482 === (9))){
var inst_18474 = (state_18481[(2)]);
var state_18481__$1 = (function (){var statearr_18491 = state_18481;
(statearr_18491[(10)] = inst_18474);

return statearr_18491;
})();
var statearr_18492_18602 = state_18481__$1;
(statearr_18492_18602[(2)] = null);

(statearr_18492_18602[(1)] = (2));


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
});})(c__8399__auto___18596,jobs,results,process,async))
;
return ((function (switch__8334__auto__,c__8399__auto___18596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18496[(1)] = (1));

return statearr_18496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18481){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object)){
var ex__8338__auto__ = e18497;
var statearr_18498_18603 = state_18481;
(statearr_18498_18603[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18604 = state_18481;
state_18481 = G__18604;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18596,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18499 = f__8400__auto__.call(null);
(statearr_18499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18596);

return statearr_18499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18596,jobs,results,process,async))
);


var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__,jobs,results,process,async){
return (function (state_18537){
var state_val_18538 = (state_18537[(1)]);
if((state_val_18538 === (7))){
var inst_18533 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18539_18605 = state_18537__$1;
(statearr_18539_18605[(2)] = inst_18533);

(statearr_18539_18605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (20))){
var state_18537__$1 = state_18537;
var statearr_18540_18606 = state_18537__$1;
(statearr_18540_18606[(2)] = null);

(statearr_18540_18606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (1))){
var state_18537__$1 = state_18537;
var statearr_18541_18607 = state_18537__$1;
(statearr_18541_18607[(2)] = null);

(statearr_18541_18607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (4))){
var inst_18502 = (state_18537[(7)]);
var inst_18502__$1 = (state_18537[(2)]);
var inst_18503 = (inst_18502__$1 == null);
var state_18537__$1 = (function (){var statearr_18542 = state_18537;
(statearr_18542[(7)] = inst_18502__$1);

return statearr_18542;
})();
if(cljs.core.truth_(inst_18503)){
var statearr_18543_18608 = state_18537__$1;
(statearr_18543_18608[(1)] = (5));

} else {
var statearr_18544_18609 = state_18537__$1;
(statearr_18544_18609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (15))){
var inst_18515 = (state_18537[(8)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18537__$1,(18),to,inst_18515);
} else {
if((state_val_18538 === (21))){
var inst_18528 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18545_18610 = state_18537__$1;
(statearr_18545_18610[(2)] = inst_18528);

(statearr_18545_18610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (13))){
var inst_18530 = (state_18537[(2)]);
var state_18537__$1 = (function (){var statearr_18546 = state_18537;
(statearr_18546[(9)] = inst_18530);

return statearr_18546;
})();
var statearr_18547_18611 = state_18537__$1;
(statearr_18547_18611[(2)] = null);

(statearr_18547_18611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (6))){
var inst_18502 = (state_18537[(7)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18537__$1,(11),inst_18502);
} else {
if((state_val_18538 === (17))){
var inst_18523 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18523)){
var statearr_18548_18612 = state_18537__$1;
(statearr_18548_18612[(1)] = (19));

} else {
var statearr_18549_18613 = state_18537__$1;
(statearr_18549_18613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (3))){
var inst_18535 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18537__$1,inst_18535);
} else {
if((state_val_18538 === (12))){
var inst_18512 = (state_18537[(10)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18537__$1,(14),inst_18512);
} else {
if((state_val_18538 === (2))){
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18537__$1,(4),results);
} else {
if((state_val_18538 === (19))){
var state_18537__$1 = state_18537;
var statearr_18550_18614 = state_18537__$1;
(statearr_18550_18614[(2)] = null);

(statearr_18550_18614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (11))){
var inst_18512 = (state_18537[(2)]);
var state_18537__$1 = (function (){var statearr_18551 = state_18537;
(statearr_18551[(10)] = inst_18512);

return statearr_18551;
})();
var statearr_18552_18615 = state_18537__$1;
(statearr_18552_18615[(2)] = null);

(statearr_18552_18615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (9))){
var state_18537__$1 = state_18537;
var statearr_18553_18616 = state_18537__$1;
(statearr_18553_18616[(2)] = null);

(statearr_18553_18616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (5))){
var state_18537__$1 = state_18537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18554_18617 = state_18537__$1;
(statearr_18554_18617[(1)] = (8));

} else {
var statearr_18555_18618 = state_18537__$1;
(statearr_18555_18618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (14))){
var inst_18517 = (state_18537[(11)]);
var inst_18515 = (state_18537[(8)]);
var inst_18515__$1 = (state_18537[(2)]);
var inst_18516 = (inst_18515__$1 == null);
var inst_18517__$1 = cljs.core.not.call(null,inst_18516);
var state_18537__$1 = (function (){var statearr_18556 = state_18537;
(statearr_18556[(11)] = inst_18517__$1);

(statearr_18556[(8)] = inst_18515__$1);

return statearr_18556;
})();
if(inst_18517__$1){
var statearr_18557_18619 = state_18537__$1;
(statearr_18557_18619[(1)] = (15));

} else {
var statearr_18558_18620 = state_18537__$1;
(statearr_18558_18620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (16))){
var inst_18517 = (state_18537[(11)]);
var state_18537__$1 = state_18537;
var statearr_18559_18621 = state_18537__$1;
(statearr_18559_18621[(2)] = inst_18517);

(statearr_18559_18621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (10))){
var inst_18509 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18560_18622 = state_18537__$1;
(statearr_18560_18622[(2)] = inst_18509);

(statearr_18560_18622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (18))){
var inst_18520 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18561_18623 = state_18537__$1;
(statearr_18561_18623[(2)] = inst_18520);

(statearr_18561_18623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (8))){
var inst_18506 = cljs.core.async.close_BANG_.call(null,to);
var state_18537__$1 = state_18537;
var statearr_18562_18624 = state_18537__$1;
(statearr_18562_18624[(2)] = inst_18506);

(statearr_18562_18624[(1)] = (10));


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
var statearr_18566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18566[(1)] = (1));

return statearr_18566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18537){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18567){if((e18567 instanceof Object)){
var ex__8338__auto__ = e18567;
var statearr_18568_18625 = state_18537;
(statearr_18568_18625[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18626 = state_18537;
state_18537 = G__18626;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18569 = f__8400__auto__.call(null);
(statearr_18569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18569;
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
var args18627 = [];
var len__6152__auto___18630 = arguments.length;
var i__6153__auto___18631 = (0);
while(true){
if((i__6153__auto___18631 < len__6152__auto___18630)){
args18627.push((arguments[i__6153__auto___18631]));

var G__18632 = (i__6153__auto___18631 + (1));
i__6153__auto___18631 = G__18632;
continue;
} else {
}
break;
}

var G__18629 = args18627.length;
switch (G__18629) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18627.length)].join('')));

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
var args18634 = [];
var len__6152__auto___18637 = arguments.length;
var i__6153__auto___18638 = (0);
while(true){
if((i__6153__auto___18638 < len__6152__auto___18637)){
args18634.push((arguments[i__6153__auto___18638]));

var G__18639 = (i__6153__auto___18638 + (1));
i__6153__auto___18638 = G__18639;
continue;
} else {
}
break;
}

var G__18636 = args18634.length;
switch (G__18636) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18634.length)].join('')));

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
var args18641 = [];
var len__6152__auto___18694 = arguments.length;
var i__6153__auto___18695 = (0);
while(true){
if((i__6153__auto___18695 < len__6152__auto___18694)){
args18641.push((arguments[i__6153__auto___18695]));

var G__18696 = (i__6153__auto___18695 + (1));
i__6153__auto___18695 = G__18696;
continue;
} else {
}
break;
}

var G__18643 = args18641.length;
switch (G__18643) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18641.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8399__auto___18698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18698,tc,fc){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18698,tc,fc){
return (function (state_18669){
var state_val_18670 = (state_18669[(1)]);
if((state_val_18670 === (7))){
var inst_18665 = (state_18669[(2)]);
var state_18669__$1 = state_18669;
var statearr_18671_18699 = state_18669__$1;
(statearr_18671_18699[(2)] = inst_18665);

(statearr_18671_18699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (1))){
var state_18669__$1 = state_18669;
var statearr_18672_18700 = state_18669__$1;
(statearr_18672_18700[(2)] = null);

(statearr_18672_18700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (4))){
var inst_18646 = (state_18669[(7)]);
var inst_18646__$1 = (state_18669[(2)]);
var inst_18647 = (inst_18646__$1 == null);
var state_18669__$1 = (function (){var statearr_18673 = state_18669;
(statearr_18673[(7)] = inst_18646__$1);

return statearr_18673;
})();
if(cljs.core.truth_(inst_18647)){
var statearr_18674_18701 = state_18669__$1;
(statearr_18674_18701[(1)] = (5));

} else {
var statearr_18675_18702 = state_18669__$1;
(statearr_18675_18702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (13))){
var state_18669__$1 = state_18669;
var statearr_18676_18703 = state_18669__$1;
(statearr_18676_18703[(2)] = null);

(statearr_18676_18703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (6))){
var inst_18646 = (state_18669[(7)]);
var inst_18652 = p.call(null,inst_18646);
var state_18669__$1 = state_18669;
if(cljs.core.truth_(inst_18652)){
var statearr_18677_18704 = state_18669__$1;
(statearr_18677_18704[(1)] = (9));

} else {
var statearr_18678_18705 = state_18669__$1;
(statearr_18678_18705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (3))){
var inst_18667 = (state_18669[(2)]);
var state_18669__$1 = state_18669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18669__$1,inst_18667);
} else {
if((state_val_18670 === (12))){
var state_18669__$1 = state_18669;
var statearr_18679_18706 = state_18669__$1;
(statearr_18679_18706[(2)] = null);

(statearr_18679_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (2))){
var state_18669__$1 = state_18669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18669__$1,(4),ch);
} else {
if((state_val_18670 === (11))){
var inst_18646 = (state_18669[(7)]);
var inst_18656 = (state_18669[(2)]);
var state_18669__$1 = state_18669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18669__$1,(8),inst_18656,inst_18646);
} else {
if((state_val_18670 === (9))){
var state_18669__$1 = state_18669;
var statearr_18680_18707 = state_18669__$1;
(statearr_18680_18707[(2)] = tc);

(statearr_18680_18707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (5))){
var inst_18649 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18650 = cljs.core.async.close_BANG_.call(null,fc);
var state_18669__$1 = (function (){var statearr_18681 = state_18669;
(statearr_18681[(8)] = inst_18649);

return statearr_18681;
})();
var statearr_18682_18708 = state_18669__$1;
(statearr_18682_18708[(2)] = inst_18650);

(statearr_18682_18708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (14))){
var inst_18663 = (state_18669[(2)]);
var state_18669__$1 = state_18669;
var statearr_18683_18709 = state_18669__$1;
(statearr_18683_18709[(2)] = inst_18663);

(statearr_18683_18709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (10))){
var state_18669__$1 = state_18669;
var statearr_18684_18710 = state_18669__$1;
(statearr_18684_18710[(2)] = fc);

(statearr_18684_18710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18670 === (8))){
var inst_18658 = (state_18669[(2)]);
var state_18669__$1 = state_18669;
if(cljs.core.truth_(inst_18658)){
var statearr_18685_18711 = state_18669__$1;
(statearr_18685_18711[(1)] = (12));

} else {
var statearr_18686_18712 = state_18669__$1;
(statearr_18686_18712[(1)] = (13));

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
});})(c__8399__auto___18698,tc,fc))
;
return ((function (switch__8334__auto__,c__8399__auto___18698,tc,fc){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18690 = [null,null,null,null,null,null,null,null,null];
(statearr_18690[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18690[(1)] = (1));

return statearr_18690;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18669){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18691){if((e18691 instanceof Object)){
var ex__8338__auto__ = e18691;
var statearr_18692_18713 = state_18669;
(statearr_18692_18713[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18714 = state_18669;
state_18669 = G__18714;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18698,tc,fc))
})();
var state__8401__auto__ = (function (){var statearr_18693 = f__8400__auto__.call(null);
(statearr_18693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18698);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18698,tc,fc))
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
return (function (state_18761){
var state_val_18762 = (state_18761[(1)]);
if((state_val_18762 === (1))){
var inst_18747 = init;
var state_18761__$1 = (function (){var statearr_18763 = state_18761;
(statearr_18763[(7)] = inst_18747);

return statearr_18763;
})();
var statearr_18764_18779 = state_18761__$1;
(statearr_18764_18779[(2)] = null);

(statearr_18764_18779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (2))){
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18761__$1,(4),ch);
} else {
if((state_val_18762 === (3))){
var inst_18759 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18761__$1,inst_18759);
} else {
if((state_val_18762 === (4))){
var inst_18750 = (state_18761[(8)]);
var inst_18750__$1 = (state_18761[(2)]);
var inst_18751 = (inst_18750__$1 == null);
var state_18761__$1 = (function (){var statearr_18765 = state_18761;
(statearr_18765[(8)] = inst_18750__$1);

return statearr_18765;
})();
if(cljs.core.truth_(inst_18751)){
var statearr_18766_18780 = state_18761__$1;
(statearr_18766_18780[(1)] = (5));

} else {
var statearr_18767_18781 = state_18761__$1;
(statearr_18767_18781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (5))){
var inst_18747 = (state_18761[(7)]);
var state_18761__$1 = state_18761;
var statearr_18768_18782 = state_18761__$1;
(statearr_18768_18782[(2)] = inst_18747);

(statearr_18768_18782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (6))){
var inst_18747 = (state_18761[(7)]);
var inst_18750 = (state_18761[(8)]);
var inst_18754 = f.call(null,inst_18747,inst_18750);
var inst_18747__$1 = inst_18754;
var state_18761__$1 = (function (){var statearr_18769 = state_18761;
(statearr_18769[(7)] = inst_18747__$1);

return statearr_18769;
})();
var statearr_18770_18783 = state_18761__$1;
(statearr_18770_18783[(2)] = null);

(statearr_18770_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (7))){
var inst_18757 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18771_18784 = state_18761__$1;
(statearr_18771_18784[(2)] = inst_18757);

(statearr_18771_18784[(1)] = (3));


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
var statearr_18775 = [null,null,null,null,null,null,null,null,null];
(statearr_18775[(0)] = cljs$core$async$reduce_$_state_machine__8335__auto__);

(statearr_18775[(1)] = (1));

return statearr_18775;
});
var cljs$core$async$reduce_$_state_machine__8335__auto____1 = (function (state_18761){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18776){if((e18776 instanceof Object)){
var ex__8338__auto__ = e18776;
var statearr_18777_18785 = state_18761;
(statearr_18777_18785[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18786 = state_18761;
state_18761 = G__18786;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8335__auto__ = function(state_18761){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8335__auto____1.call(this,state_18761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8335__auto____0;
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8335__auto____1;
return cljs$core$async$reduce_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_18778 = f__8400__auto__.call(null);
(statearr_18778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18778;
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
var args18787 = [];
var len__6152__auto___18839 = arguments.length;
var i__6153__auto___18840 = (0);
while(true){
if((i__6153__auto___18840 < len__6152__auto___18839)){
args18787.push((arguments[i__6153__auto___18840]));

var G__18841 = (i__6153__auto___18840 + (1));
i__6153__auto___18840 = G__18841;
continue;
} else {
}
break;
}

var G__18789 = args18787.length;
switch (G__18789) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18787.length)].join('')));

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
return (function (state_18814){
var state_val_18815 = (state_18814[(1)]);
if((state_val_18815 === (7))){
var inst_18796 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18816_18843 = state_18814__$1;
(statearr_18816_18843[(2)] = inst_18796);

(statearr_18816_18843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (1))){
var inst_18790 = cljs.core.seq.call(null,coll);
var inst_18791 = inst_18790;
var state_18814__$1 = (function (){var statearr_18817 = state_18814;
(statearr_18817[(7)] = inst_18791);

return statearr_18817;
})();
var statearr_18818_18844 = state_18814__$1;
(statearr_18818_18844[(2)] = null);

(statearr_18818_18844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (4))){
var inst_18791 = (state_18814[(7)]);
var inst_18794 = cljs.core.first.call(null,inst_18791);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18814__$1,(7),ch,inst_18794);
} else {
if((state_val_18815 === (13))){
var inst_18808 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18819_18845 = state_18814__$1;
(statearr_18819_18845[(2)] = inst_18808);

(statearr_18819_18845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (6))){
var inst_18799 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18799)){
var statearr_18820_18846 = state_18814__$1;
(statearr_18820_18846[(1)] = (8));

} else {
var statearr_18821_18847 = state_18814__$1;
(statearr_18821_18847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (3))){
var inst_18812 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18814__$1,inst_18812);
} else {
if((state_val_18815 === (12))){
var state_18814__$1 = state_18814;
var statearr_18822_18848 = state_18814__$1;
(statearr_18822_18848[(2)] = null);

(statearr_18822_18848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (2))){
var inst_18791 = (state_18814[(7)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18791)){
var statearr_18823_18849 = state_18814__$1;
(statearr_18823_18849[(1)] = (4));

} else {
var statearr_18824_18850 = state_18814__$1;
(statearr_18824_18850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (11))){
var inst_18805 = cljs.core.async.close_BANG_.call(null,ch);
var state_18814__$1 = state_18814;
var statearr_18825_18851 = state_18814__$1;
(statearr_18825_18851[(2)] = inst_18805);

(statearr_18825_18851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (9))){
var state_18814__$1 = state_18814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18826_18852 = state_18814__$1;
(statearr_18826_18852[(1)] = (11));

} else {
var statearr_18827_18853 = state_18814__$1;
(statearr_18827_18853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (5))){
var inst_18791 = (state_18814[(7)]);
var state_18814__$1 = state_18814;
var statearr_18828_18854 = state_18814__$1;
(statearr_18828_18854[(2)] = inst_18791);

(statearr_18828_18854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (10))){
var inst_18810 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18829_18855 = state_18814__$1;
(statearr_18829_18855[(2)] = inst_18810);

(statearr_18829_18855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (8))){
var inst_18791 = (state_18814[(7)]);
var inst_18801 = cljs.core.next.call(null,inst_18791);
var inst_18791__$1 = inst_18801;
var state_18814__$1 = (function (){var statearr_18830 = state_18814;
(statearr_18830[(7)] = inst_18791__$1);

return statearr_18830;
})();
var statearr_18831_18856 = state_18814__$1;
(statearr_18831_18856[(2)] = null);

(statearr_18831_18856[(1)] = (2));


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
var statearr_18835 = [null,null,null,null,null,null,null,null];
(statearr_18835[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18835[(1)] = (1));

return statearr_18835;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18814){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18836){if((e18836 instanceof Object)){
var ex__8338__auto__ = e18836;
var statearr_18837_18857 = state_18814;
(statearr_18837_18857[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18858 = state_18814;
state_18814 = G__18858;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_18838 = f__8400__auto__.call(null);
(statearr_18838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18838;
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
if(typeof cljs.core.async.t_cljs$core$async19080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19080 = (function (mult,ch,cs,meta19081){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19081 = meta19081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19082,meta19081__$1){
var self__ = this;
var _19082__$1 = this;
return (new cljs.core.async.t_cljs$core$async19080(self__.mult,self__.ch,self__.cs,meta19081__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19082){
var self__ = this;
var _19082__$1 = this;
return self__.meta19081;
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19081","meta19081",-2109233454,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19080";

cljs.core.async.t_cljs$core$async19080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19080");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19080 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19080(mult__$1,ch__$1,cs__$1,meta19081){
return (new cljs.core.async.t_cljs$core$async19080(mult__$1,ch__$1,cs__$1,meta19081));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19080(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8399__auto___19301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19301,cs,m,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19301,cs,m,dchan,dctr,done){
return (function (state_19213){
var state_val_19214 = (state_19213[(1)]);
if((state_val_19214 === (7))){
var inst_19209 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19215_19302 = state_19213__$1;
(statearr_19215_19302[(2)] = inst_19209);

(statearr_19215_19302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (20))){
var inst_19114 = (state_19213[(7)]);
var inst_19124 = cljs.core.first.call(null,inst_19114);
var inst_19125 = cljs.core.nth.call(null,inst_19124,(0),null);
var inst_19126 = cljs.core.nth.call(null,inst_19124,(1),null);
var state_19213__$1 = (function (){var statearr_19216 = state_19213;
(statearr_19216[(8)] = inst_19125);

return statearr_19216;
})();
if(cljs.core.truth_(inst_19126)){
var statearr_19217_19303 = state_19213__$1;
(statearr_19217_19303[(1)] = (22));

} else {
var statearr_19218_19304 = state_19213__$1;
(statearr_19218_19304[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (27))){
var inst_19154 = (state_19213[(9)]);
var inst_19085 = (state_19213[(10)]);
var inst_19156 = (state_19213[(11)]);
var inst_19161 = (state_19213[(12)]);
var inst_19161__$1 = cljs.core._nth.call(null,inst_19154,inst_19156);
var inst_19162 = cljs.core.async.put_BANG_.call(null,inst_19161__$1,inst_19085,done);
var state_19213__$1 = (function (){var statearr_19219 = state_19213;
(statearr_19219[(12)] = inst_19161__$1);

return statearr_19219;
})();
if(cljs.core.truth_(inst_19162)){
var statearr_19220_19305 = state_19213__$1;
(statearr_19220_19305[(1)] = (30));

} else {
var statearr_19221_19306 = state_19213__$1;
(statearr_19221_19306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (1))){
var state_19213__$1 = state_19213;
var statearr_19222_19307 = state_19213__$1;
(statearr_19222_19307[(2)] = null);

(statearr_19222_19307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (24))){
var inst_19114 = (state_19213[(7)]);
var inst_19131 = (state_19213[(2)]);
var inst_19132 = cljs.core.next.call(null,inst_19114);
var inst_19094 = inst_19132;
var inst_19095 = null;
var inst_19096 = (0);
var inst_19097 = (0);
var state_19213__$1 = (function (){var statearr_19223 = state_19213;
(statearr_19223[(13)] = inst_19097);

(statearr_19223[(14)] = inst_19096);

(statearr_19223[(15)] = inst_19094);

(statearr_19223[(16)] = inst_19095);

(statearr_19223[(17)] = inst_19131);

return statearr_19223;
})();
var statearr_19224_19308 = state_19213__$1;
(statearr_19224_19308[(2)] = null);

(statearr_19224_19308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (39))){
var state_19213__$1 = state_19213;
var statearr_19228_19309 = state_19213__$1;
(statearr_19228_19309[(2)] = null);

(statearr_19228_19309[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (4))){
var inst_19085 = (state_19213[(10)]);
var inst_19085__$1 = (state_19213[(2)]);
var inst_19086 = (inst_19085__$1 == null);
var state_19213__$1 = (function (){var statearr_19229 = state_19213;
(statearr_19229[(10)] = inst_19085__$1);

return statearr_19229;
})();
if(cljs.core.truth_(inst_19086)){
var statearr_19230_19310 = state_19213__$1;
(statearr_19230_19310[(1)] = (5));

} else {
var statearr_19231_19311 = state_19213__$1;
(statearr_19231_19311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (15))){
var inst_19097 = (state_19213[(13)]);
var inst_19096 = (state_19213[(14)]);
var inst_19094 = (state_19213[(15)]);
var inst_19095 = (state_19213[(16)]);
var inst_19110 = (state_19213[(2)]);
var inst_19111 = (inst_19097 + (1));
var tmp19225 = inst_19096;
var tmp19226 = inst_19094;
var tmp19227 = inst_19095;
var inst_19094__$1 = tmp19226;
var inst_19095__$1 = tmp19227;
var inst_19096__$1 = tmp19225;
var inst_19097__$1 = inst_19111;
var state_19213__$1 = (function (){var statearr_19232 = state_19213;
(statearr_19232[(13)] = inst_19097__$1);

(statearr_19232[(14)] = inst_19096__$1);

(statearr_19232[(15)] = inst_19094__$1);

(statearr_19232[(16)] = inst_19095__$1);

(statearr_19232[(18)] = inst_19110);

return statearr_19232;
})();
var statearr_19233_19312 = state_19213__$1;
(statearr_19233_19312[(2)] = null);

(statearr_19233_19312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (21))){
var inst_19135 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19237_19313 = state_19213__$1;
(statearr_19237_19313[(2)] = inst_19135);

(statearr_19237_19313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (31))){
var inst_19161 = (state_19213[(12)]);
var inst_19165 = done.call(null,null);
var inst_19166 = cljs.core.async.untap_STAR_.call(null,m,inst_19161);
var state_19213__$1 = (function (){var statearr_19238 = state_19213;
(statearr_19238[(19)] = inst_19165);

return statearr_19238;
})();
var statearr_19239_19314 = state_19213__$1;
(statearr_19239_19314[(2)] = inst_19166);

(statearr_19239_19314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (32))){
var inst_19153 = (state_19213[(20)]);
var inst_19154 = (state_19213[(9)]);
var inst_19155 = (state_19213[(21)]);
var inst_19156 = (state_19213[(11)]);
var inst_19168 = (state_19213[(2)]);
var inst_19169 = (inst_19156 + (1));
var tmp19234 = inst_19153;
var tmp19235 = inst_19154;
var tmp19236 = inst_19155;
var inst_19153__$1 = tmp19234;
var inst_19154__$1 = tmp19235;
var inst_19155__$1 = tmp19236;
var inst_19156__$1 = inst_19169;
var state_19213__$1 = (function (){var statearr_19240 = state_19213;
(statearr_19240[(20)] = inst_19153__$1);

(statearr_19240[(22)] = inst_19168);

(statearr_19240[(9)] = inst_19154__$1);

(statearr_19240[(21)] = inst_19155__$1);

(statearr_19240[(11)] = inst_19156__$1);

return statearr_19240;
})();
var statearr_19241_19315 = state_19213__$1;
(statearr_19241_19315[(2)] = null);

(statearr_19241_19315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (40))){
var inst_19181 = (state_19213[(23)]);
var inst_19185 = done.call(null,null);
var inst_19186 = cljs.core.async.untap_STAR_.call(null,m,inst_19181);
var state_19213__$1 = (function (){var statearr_19242 = state_19213;
(statearr_19242[(24)] = inst_19185);

return statearr_19242;
})();
var statearr_19243_19316 = state_19213__$1;
(statearr_19243_19316[(2)] = inst_19186);

(statearr_19243_19316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (33))){
var inst_19172 = (state_19213[(25)]);
var inst_19174 = cljs.core.chunked_seq_QMARK_.call(null,inst_19172);
var state_19213__$1 = state_19213;
if(inst_19174){
var statearr_19244_19317 = state_19213__$1;
(statearr_19244_19317[(1)] = (36));

} else {
var statearr_19245_19318 = state_19213__$1;
(statearr_19245_19318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (13))){
var inst_19104 = (state_19213[(26)]);
var inst_19107 = cljs.core.async.close_BANG_.call(null,inst_19104);
var state_19213__$1 = state_19213;
var statearr_19246_19319 = state_19213__$1;
(statearr_19246_19319[(2)] = inst_19107);

(statearr_19246_19319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (22))){
var inst_19125 = (state_19213[(8)]);
var inst_19128 = cljs.core.async.close_BANG_.call(null,inst_19125);
var state_19213__$1 = state_19213;
var statearr_19247_19320 = state_19213__$1;
(statearr_19247_19320[(2)] = inst_19128);

(statearr_19247_19320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (36))){
var inst_19172 = (state_19213[(25)]);
var inst_19176 = cljs.core.chunk_first.call(null,inst_19172);
var inst_19177 = cljs.core.chunk_rest.call(null,inst_19172);
var inst_19178 = cljs.core.count.call(null,inst_19176);
var inst_19153 = inst_19177;
var inst_19154 = inst_19176;
var inst_19155 = inst_19178;
var inst_19156 = (0);
var state_19213__$1 = (function (){var statearr_19248 = state_19213;
(statearr_19248[(20)] = inst_19153);

(statearr_19248[(9)] = inst_19154);

(statearr_19248[(21)] = inst_19155);

(statearr_19248[(11)] = inst_19156);

return statearr_19248;
})();
var statearr_19249_19321 = state_19213__$1;
(statearr_19249_19321[(2)] = null);

(statearr_19249_19321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (41))){
var inst_19172 = (state_19213[(25)]);
var inst_19188 = (state_19213[(2)]);
var inst_19189 = cljs.core.next.call(null,inst_19172);
var inst_19153 = inst_19189;
var inst_19154 = null;
var inst_19155 = (0);
var inst_19156 = (0);
var state_19213__$1 = (function (){var statearr_19250 = state_19213;
(statearr_19250[(20)] = inst_19153);

(statearr_19250[(9)] = inst_19154);

(statearr_19250[(21)] = inst_19155);

(statearr_19250[(11)] = inst_19156);

(statearr_19250[(27)] = inst_19188);

return statearr_19250;
})();
var statearr_19251_19322 = state_19213__$1;
(statearr_19251_19322[(2)] = null);

(statearr_19251_19322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (43))){
var state_19213__$1 = state_19213;
var statearr_19252_19323 = state_19213__$1;
(statearr_19252_19323[(2)] = null);

(statearr_19252_19323[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (29))){
var inst_19197 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19253_19324 = state_19213__$1;
(statearr_19253_19324[(2)] = inst_19197);

(statearr_19253_19324[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (44))){
var inst_19206 = (state_19213[(2)]);
var state_19213__$1 = (function (){var statearr_19254 = state_19213;
(statearr_19254[(28)] = inst_19206);

return statearr_19254;
})();
var statearr_19255_19325 = state_19213__$1;
(statearr_19255_19325[(2)] = null);

(statearr_19255_19325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (6))){
var inst_19145 = (state_19213[(29)]);
var inst_19144 = cljs.core.deref.call(null,cs);
var inst_19145__$1 = cljs.core.keys.call(null,inst_19144);
var inst_19146 = cljs.core.count.call(null,inst_19145__$1);
var inst_19147 = cljs.core.reset_BANG_.call(null,dctr,inst_19146);
var inst_19152 = cljs.core.seq.call(null,inst_19145__$1);
var inst_19153 = inst_19152;
var inst_19154 = null;
var inst_19155 = (0);
var inst_19156 = (0);
var state_19213__$1 = (function (){var statearr_19256 = state_19213;
(statearr_19256[(20)] = inst_19153);

(statearr_19256[(9)] = inst_19154);

(statearr_19256[(21)] = inst_19155);

(statearr_19256[(29)] = inst_19145__$1);

(statearr_19256[(11)] = inst_19156);

(statearr_19256[(30)] = inst_19147);

return statearr_19256;
})();
var statearr_19257_19326 = state_19213__$1;
(statearr_19257_19326[(2)] = null);

(statearr_19257_19326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (28))){
var inst_19153 = (state_19213[(20)]);
var inst_19172 = (state_19213[(25)]);
var inst_19172__$1 = cljs.core.seq.call(null,inst_19153);
var state_19213__$1 = (function (){var statearr_19258 = state_19213;
(statearr_19258[(25)] = inst_19172__$1);

return statearr_19258;
})();
if(inst_19172__$1){
var statearr_19259_19327 = state_19213__$1;
(statearr_19259_19327[(1)] = (33));

} else {
var statearr_19260_19328 = state_19213__$1;
(statearr_19260_19328[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (25))){
var inst_19155 = (state_19213[(21)]);
var inst_19156 = (state_19213[(11)]);
var inst_19158 = (inst_19156 < inst_19155);
var inst_19159 = inst_19158;
var state_19213__$1 = state_19213;
if(cljs.core.truth_(inst_19159)){
var statearr_19261_19329 = state_19213__$1;
(statearr_19261_19329[(1)] = (27));

} else {
var statearr_19262_19330 = state_19213__$1;
(statearr_19262_19330[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (34))){
var state_19213__$1 = state_19213;
var statearr_19263_19331 = state_19213__$1;
(statearr_19263_19331[(2)] = null);

(statearr_19263_19331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (17))){
var state_19213__$1 = state_19213;
var statearr_19264_19332 = state_19213__$1;
(statearr_19264_19332[(2)] = null);

(statearr_19264_19332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (3))){
var inst_19211 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19213__$1,inst_19211);
} else {
if((state_val_19214 === (12))){
var inst_19140 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19265_19333 = state_19213__$1;
(statearr_19265_19333[(2)] = inst_19140);

(statearr_19265_19333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (2))){
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19213__$1,(4),ch);
} else {
if((state_val_19214 === (23))){
var state_19213__$1 = state_19213;
var statearr_19266_19334 = state_19213__$1;
(statearr_19266_19334[(2)] = null);

(statearr_19266_19334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (35))){
var inst_19195 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19267_19335 = state_19213__$1;
(statearr_19267_19335[(2)] = inst_19195);

(statearr_19267_19335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (19))){
var inst_19114 = (state_19213[(7)]);
var inst_19118 = cljs.core.chunk_first.call(null,inst_19114);
var inst_19119 = cljs.core.chunk_rest.call(null,inst_19114);
var inst_19120 = cljs.core.count.call(null,inst_19118);
var inst_19094 = inst_19119;
var inst_19095 = inst_19118;
var inst_19096 = inst_19120;
var inst_19097 = (0);
var state_19213__$1 = (function (){var statearr_19268 = state_19213;
(statearr_19268[(13)] = inst_19097);

(statearr_19268[(14)] = inst_19096);

(statearr_19268[(15)] = inst_19094);

(statearr_19268[(16)] = inst_19095);

return statearr_19268;
})();
var statearr_19269_19336 = state_19213__$1;
(statearr_19269_19336[(2)] = null);

(statearr_19269_19336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (11))){
var inst_19094 = (state_19213[(15)]);
var inst_19114 = (state_19213[(7)]);
var inst_19114__$1 = cljs.core.seq.call(null,inst_19094);
var state_19213__$1 = (function (){var statearr_19270 = state_19213;
(statearr_19270[(7)] = inst_19114__$1);

return statearr_19270;
})();
if(inst_19114__$1){
var statearr_19271_19337 = state_19213__$1;
(statearr_19271_19337[(1)] = (16));

} else {
var statearr_19272_19338 = state_19213__$1;
(statearr_19272_19338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (9))){
var inst_19142 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19273_19339 = state_19213__$1;
(statearr_19273_19339[(2)] = inst_19142);

(statearr_19273_19339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (5))){
var inst_19092 = cljs.core.deref.call(null,cs);
var inst_19093 = cljs.core.seq.call(null,inst_19092);
var inst_19094 = inst_19093;
var inst_19095 = null;
var inst_19096 = (0);
var inst_19097 = (0);
var state_19213__$1 = (function (){var statearr_19274 = state_19213;
(statearr_19274[(13)] = inst_19097);

(statearr_19274[(14)] = inst_19096);

(statearr_19274[(15)] = inst_19094);

(statearr_19274[(16)] = inst_19095);

return statearr_19274;
})();
var statearr_19275_19340 = state_19213__$1;
(statearr_19275_19340[(2)] = null);

(statearr_19275_19340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (14))){
var state_19213__$1 = state_19213;
var statearr_19276_19341 = state_19213__$1;
(statearr_19276_19341[(2)] = null);

(statearr_19276_19341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (45))){
var inst_19203 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19277_19342 = state_19213__$1;
(statearr_19277_19342[(2)] = inst_19203);

(statearr_19277_19342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (26))){
var inst_19145 = (state_19213[(29)]);
var inst_19199 = (state_19213[(2)]);
var inst_19200 = cljs.core.seq.call(null,inst_19145);
var state_19213__$1 = (function (){var statearr_19278 = state_19213;
(statearr_19278[(31)] = inst_19199);

return statearr_19278;
})();
if(inst_19200){
var statearr_19279_19343 = state_19213__$1;
(statearr_19279_19343[(1)] = (42));

} else {
var statearr_19280_19344 = state_19213__$1;
(statearr_19280_19344[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (16))){
var inst_19114 = (state_19213[(7)]);
var inst_19116 = cljs.core.chunked_seq_QMARK_.call(null,inst_19114);
var state_19213__$1 = state_19213;
if(inst_19116){
var statearr_19281_19345 = state_19213__$1;
(statearr_19281_19345[(1)] = (19));

} else {
var statearr_19282_19346 = state_19213__$1;
(statearr_19282_19346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (38))){
var inst_19192 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19283_19347 = state_19213__$1;
(statearr_19283_19347[(2)] = inst_19192);

(statearr_19283_19347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (30))){
var state_19213__$1 = state_19213;
var statearr_19284_19348 = state_19213__$1;
(statearr_19284_19348[(2)] = null);

(statearr_19284_19348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (10))){
var inst_19097 = (state_19213[(13)]);
var inst_19095 = (state_19213[(16)]);
var inst_19103 = cljs.core._nth.call(null,inst_19095,inst_19097);
var inst_19104 = cljs.core.nth.call(null,inst_19103,(0),null);
var inst_19105 = cljs.core.nth.call(null,inst_19103,(1),null);
var state_19213__$1 = (function (){var statearr_19285 = state_19213;
(statearr_19285[(26)] = inst_19104);

return statearr_19285;
})();
if(cljs.core.truth_(inst_19105)){
var statearr_19286_19349 = state_19213__$1;
(statearr_19286_19349[(1)] = (13));

} else {
var statearr_19287_19350 = state_19213__$1;
(statearr_19287_19350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (18))){
var inst_19138 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19288_19351 = state_19213__$1;
(statearr_19288_19351[(2)] = inst_19138);

(statearr_19288_19351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (42))){
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19213__$1,(45),dchan);
} else {
if((state_val_19214 === (37))){
var inst_19181 = (state_19213[(23)]);
var inst_19172 = (state_19213[(25)]);
var inst_19085 = (state_19213[(10)]);
var inst_19181__$1 = cljs.core.first.call(null,inst_19172);
var inst_19182 = cljs.core.async.put_BANG_.call(null,inst_19181__$1,inst_19085,done);
var state_19213__$1 = (function (){var statearr_19289 = state_19213;
(statearr_19289[(23)] = inst_19181__$1);

return statearr_19289;
})();
if(cljs.core.truth_(inst_19182)){
var statearr_19290_19352 = state_19213__$1;
(statearr_19290_19352[(1)] = (39));

} else {
var statearr_19291_19353 = state_19213__$1;
(statearr_19291_19353[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (8))){
var inst_19097 = (state_19213[(13)]);
var inst_19096 = (state_19213[(14)]);
var inst_19099 = (inst_19097 < inst_19096);
var inst_19100 = inst_19099;
var state_19213__$1 = state_19213;
if(cljs.core.truth_(inst_19100)){
var statearr_19292_19354 = state_19213__$1;
(statearr_19292_19354[(1)] = (10));

} else {
var statearr_19293_19355 = state_19213__$1;
(statearr_19293_19355[(1)] = (11));

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
});})(c__8399__auto___19301,cs,m,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___19301,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8335__auto__ = null;
var cljs$core$async$mult_$_state_machine__8335__auto____0 = (function (){
var statearr_19297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19297[(0)] = cljs$core$async$mult_$_state_machine__8335__auto__);

(statearr_19297[(1)] = (1));

return statearr_19297;
});
var cljs$core$async$mult_$_state_machine__8335__auto____1 = (function (state_19213){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19298){if((e19298 instanceof Object)){
var ex__8338__auto__ = e19298;
var statearr_19299_19356 = state_19213;
(statearr_19299_19356[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19357 = state_19213;
state_19213 = G__19357;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8335__auto__ = function(state_19213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8335__auto____1.call(this,state_19213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8335__auto____0;
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8335__auto____1;
return cljs$core$async$mult_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19301,cs,m,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_19300 = f__8400__auto__.call(null);
(statearr_19300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19301);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19301,cs,m,dchan,dctr,done))
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
var args19358 = [];
var len__6152__auto___19361 = arguments.length;
var i__6153__auto___19362 = (0);
while(true){
if((i__6153__auto___19362 < len__6152__auto___19361)){
args19358.push((arguments[i__6153__auto___19362]));

var G__19363 = (i__6153__auto___19362 + (1));
i__6153__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var G__19360 = args19358.length;
switch (G__19360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19358.length)].join('')));

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
var len__6152__auto___19375 = arguments.length;
var i__6153__auto___19376 = (0);
while(true){
if((i__6153__auto___19376 < len__6152__auto___19375)){
args__6159__auto__.push((arguments[i__6153__auto___19376]));

var G__19377 = (i__6153__auto___19376 + (1));
i__6153__auto___19376 = G__19377;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19369){
var map__19370 = p__19369;
var map__19370__$1 = ((((!((map__19370 == null)))?((((map__19370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19370):map__19370);
var opts = map__19370__$1;
var statearr_19372_19378 = state;
(statearr_19372_19378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19370,map__19370__$1,opts){
return (function (val){
var statearr_19373_19379 = state;
(statearr_19373_19379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19370,map__19370__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19374_19380 = state;
(statearr_19374_19380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19365){
var G__19366 = cljs.core.first.call(null,seq19365);
var seq19365__$1 = cljs.core.next.call(null,seq19365);
var G__19367 = cljs.core.first.call(null,seq19365__$1);
var seq19365__$2 = cljs.core.next.call(null,seq19365__$1);
var G__19368 = cljs.core.first.call(null,seq19365__$2);
var seq19365__$3 = cljs.core.next.call(null,seq19365__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19366,G__19367,G__19368,seq19365__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19544 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19545){
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
this.meta19545 = meta19545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19546,meta19545__$1){
var self__ = this;
var _19546__$1 = this;
return (new cljs.core.async.t_cljs$core$async19544(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19545__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19546){
var self__ = this;
var _19546__$1 = this;
return self__.meta19545;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19544.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19545","meta19545",1569883502,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19544";

cljs.core.async.t_cljs$core$async19544.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19544");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19544 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19545){
return (new cljs.core.async.t_cljs$core$async19544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19545));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19544(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___19707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19644){
var state_val_19645 = (state_19644[(1)]);
if((state_val_19645 === (7))){
var inst_19562 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19646_19708 = state_19644__$1;
(statearr_19646_19708[(2)] = inst_19562);

(statearr_19646_19708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (20))){
var inst_19574 = (state_19644[(7)]);
var state_19644__$1 = state_19644;
var statearr_19647_19709 = state_19644__$1;
(statearr_19647_19709[(2)] = inst_19574);

(statearr_19647_19709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (27))){
var state_19644__$1 = state_19644;
var statearr_19648_19710 = state_19644__$1;
(statearr_19648_19710[(2)] = null);

(statearr_19648_19710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (1))){
var inst_19550 = (state_19644[(8)]);
var inst_19550__$1 = calc_state.call(null);
var inst_19552 = (inst_19550__$1 == null);
var inst_19553 = cljs.core.not.call(null,inst_19552);
var state_19644__$1 = (function (){var statearr_19649 = state_19644;
(statearr_19649[(8)] = inst_19550__$1);

return statearr_19649;
})();
if(inst_19553){
var statearr_19650_19711 = state_19644__$1;
(statearr_19650_19711[(1)] = (2));

} else {
var statearr_19651_19712 = state_19644__$1;
(statearr_19651_19712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (24))){
var inst_19597 = (state_19644[(9)]);
var inst_19618 = (state_19644[(10)]);
var inst_19604 = (state_19644[(11)]);
var inst_19618__$1 = inst_19597.call(null,inst_19604);
var state_19644__$1 = (function (){var statearr_19652 = state_19644;
(statearr_19652[(10)] = inst_19618__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19618__$1)){
var statearr_19653_19713 = state_19644__$1;
(statearr_19653_19713[(1)] = (29));

} else {
var statearr_19654_19714 = state_19644__$1;
(statearr_19654_19714[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (4))){
var inst_19565 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19565)){
var statearr_19655_19715 = state_19644__$1;
(statearr_19655_19715[(1)] = (8));

} else {
var statearr_19656_19716 = state_19644__$1;
(statearr_19656_19716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (15))){
var inst_19591 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19591)){
var statearr_19657_19717 = state_19644__$1;
(statearr_19657_19717[(1)] = (19));

} else {
var statearr_19658_19718 = state_19644__$1;
(statearr_19658_19718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (21))){
var inst_19596 = (state_19644[(12)]);
var inst_19596__$1 = (state_19644[(2)]);
var inst_19597 = cljs.core.get.call(null,inst_19596__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19598 = cljs.core.get.call(null,inst_19596__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19599 = cljs.core.get.call(null,inst_19596__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19644__$1 = (function (){var statearr_19659 = state_19644;
(statearr_19659[(9)] = inst_19597);

(statearr_19659[(13)] = inst_19598);

(statearr_19659[(12)] = inst_19596__$1);

return statearr_19659;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19644__$1,(22),inst_19599);
} else {
if((state_val_19645 === (31))){
var inst_19626 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19626)){
var statearr_19660_19719 = state_19644__$1;
(statearr_19660_19719[(1)] = (32));

} else {
var statearr_19661_19720 = state_19644__$1;
(statearr_19661_19720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (32))){
var inst_19603 = (state_19644[(14)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19644__$1,(35),out,inst_19603);
} else {
if((state_val_19645 === (33))){
var inst_19596 = (state_19644[(12)]);
var inst_19574 = inst_19596;
var state_19644__$1 = (function (){var statearr_19662 = state_19644;
(statearr_19662[(7)] = inst_19574);

return statearr_19662;
})();
var statearr_19663_19721 = state_19644__$1;
(statearr_19663_19721[(2)] = null);

(statearr_19663_19721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (13))){
var inst_19574 = (state_19644[(7)]);
var inst_19581 = inst_19574.cljs$lang$protocol_mask$partition0$;
var inst_19582 = (inst_19581 & (64));
var inst_19583 = inst_19574.cljs$core$ISeq$;
var inst_19584 = (inst_19582) || (inst_19583);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19584)){
var statearr_19664_19722 = state_19644__$1;
(statearr_19664_19722[(1)] = (16));

} else {
var statearr_19665_19723 = state_19644__$1;
(statearr_19665_19723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (22))){
var inst_19603 = (state_19644[(14)]);
var inst_19604 = (state_19644[(11)]);
var inst_19602 = (state_19644[(2)]);
var inst_19603__$1 = cljs.core.nth.call(null,inst_19602,(0),null);
var inst_19604__$1 = cljs.core.nth.call(null,inst_19602,(1),null);
var inst_19605 = (inst_19603__$1 == null);
var inst_19606 = cljs.core._EQ_.call(null,inst_19604__$1,change);
var inst_19607 = (inst_19605) || (inst_19606);
var state_19644__$1 = (function (){var statearr_19666 = state_19644;
(statearr_19666[(14)] = inst_19603__$1);

(statearr_19666[(11)] = inst_19604__$1);

return statearr_19666;
})();
if(cljs.core.truth_(inst_19607)){
var statearr_19667_19724 = state_19644__$1;
(statearr_19667_19724[(1)] = (23));

} else {
var statearr_19668_19725 = state_19644__$1;
(statearr_19668_19725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (36))){
var inst_19596 = (state_19644[(12)]);
var inst_19574 = inst_19596;
var state_19644__$1 = (function (){var statearr_19669 = state_19644;
(statearr_19669[(7)] = inst_19574);

return statearr_19669;
})();
var statearr_19670_19726 = state_19644__$1;
(statearr_19670_19726[(2)] = null);

(statearr_19670_19726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (29))){
var inst_19618 = (state_19644[(10)]);
var state_19644__$1 = state_19644;
var statearr_19671_19727 = state_19644__$1;
(statearr_19671_19727[(2)] = inst_19618);

(statearr_19671_19727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (6))){
var state_19644__$1 = state_19644;
var statearr_19672_19728 = state_19644__$1;
(statearr_19672_19728[(2)] = false);

(statearr_19672_19728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (28))){
var inst_19614 = (state_19644[(2)]);
var inst_19615 = calc_state.call(null);
var inst_19574 = inst_19615;
var state_19644__$1 = (function (){var statearr_19673 = state_19644;
(statearr_19673[(7)] = inst_19574);

(statearr_19673[(15)] = inst_19614);

return statearr_19673;
})();
var statearr_19674_19729 = state_19644__$1;
(statearr_19674_19729[(2)] = null);

(statearr_19674_19729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (25))){
var inst_19640 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19675_19730 = state_19644__$1;
(statearr_19675_19730[(2)] = inst_19640);

(statearr_19675_19730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (34))){
var inst_19638 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19676_19731 = state_19644__$1;
(statearr_19676_19731[(2)] = inst_19638);

(statearr_19676_19731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (17))){
var state_19644__$1 = state_19644;
var statearr_19677_19732 = state_19644__$1;
(statearr_19677_19732[(2)] = false);

(statearr_19677_19732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (3))){
var state_19644__$1 = state_19644;
var statearr_19678_19733 = state_19644__$1;
(statearr_19678_19733[(2)] = false);

(statearr_19678_19733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (12))){
var inst_19642 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19644__$1,inst_19642);
} else {
if((state_val_19645 === (2))){
var inst_19550 = (state_19644[(8)]);
var inst_19555 = inst_19550.cljs$lang$protocol_mask$partition0$;
var inst_19556 = (inst_19555 & (64));
var inst_19557 = inst_19550.cljs$core$ISeq$;
var inst_19558 = (inst_19556) || (inst_19557);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19558)){
var statearr_19679_19734 = state_19644__$1;
(statearr_19679_19734[(1)] = (5));

} else {
var statearr_19680_19735 = state_19644__$1;
(statearr_19680_19735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (23))){
var inst_19603 = (state_19644[(14)]);
var inst_19609 = (inst_19603 == null);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19609)){
var statearr_19681_19736 = state_19644__$1;
(statearr_19681_19736[(1)] = (26));

} else {
var statearr_19682_19737 = state_19644__$1;
(statearr_19682_19737[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (35))){
var inst_19629 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19629)){
var statearr_19683_19738 = state_19644__$1;
(statearr_19683_19738[(1)] = (36));

} else {
var statearr_19684_19739 = state_19644__$1;
(statearr_19684_19739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (19))){
var inst_19574 = (state_19644[(7)]);
var inst_19593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19574);
var state_19644__$1 = state_19644;
var statearr_19685_19740 = state_19644__$1;
(statearr_19685_19740[(2)] = inst_19593);

(statearr_19685_19740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (11))){
var inst_19574 = (state_19644[(7)]);
var inst_19578 = (inst_19574 == null);
var inst_19579 = cljs.core.not.call(null,inst_19578);
var state_19644__$1 = state_19644;
if(inst_19579){
var statearr_19686_19741 = state_19644__$1;
(statearr_19686_19741[(1)] = (13));

} else {
var statearr_19687_19742 = state_19644__$1;
(statearr_19687_19742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (9))){
var inst_19550 = (state_19644[(8)]);
var state_19644__$1 = state_19644;
var statearr_19688_19743 = state_19644__$1;
(statearr_19688_19743[(2)] = inst_19550);

(statearr_19688_19743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (5))){
var state_19644__$1 = state_19644;
var statearr_19689_19744 = state_19644__$1;
(statearr_19689_19744[(2)] = true);

(statearr_19689_19744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (14))){
var state_19644__$1 = state_19644;
var statearr_19690_19745 = state_19644__$1;
(statearr_19690_19745[(2)] = false);

(statearr_19690_19745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (26))){
var inst_19604 = (state_19644[(11)]);
var inst_19611 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19604);
var state_19644__$1 = state_19644;
var statearr_19691_19746 = state_19644__$1;
(statearr_19691_19746[(2)] = inst_19611);

(statearr_19691_19746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (16))){
var state_19644__$1 = state_19644;
var statearr_19692_19747 = state_19644__$1;
(statearr_19692_19747[(2)] = true);

(statearr_19692_19747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (38))){
var inst_19634 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19693_19748 = state_19644__$1;
(statearr_19693_19748[(2)] = inst_19634);

(statearr_19693_19748[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (30))){
var inst_19597 = (state_19644[(9)]);
var inst_19598 = (state_19644[(13)]);
var inst_19604 = (state_19644[(11)]);
var inst_19621 = cljs.core.empty_QMARK_.call(null,inst_19597);
var inst_19622 = inst_19598.call(null,inst_19604);
var inst_19623 = cljs.core.not.call(null,inst_19622);
var inst_19624 = (inst_19621) && (inst_19623);
var state_19644__$1 = state_19644;
var statearr_19694_19749 = state_19644__$1;
(statearr_19694_19749[(2)] = inst_19624);

(statearr_19694_19749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (10))){
var inst_19550 = (state_19644[(8)]);
var inst_19570 = (state_19644[(2)]);
var inst_19571 = cljs.core.get.call(null,inst_19570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19572 = cljs.core.get.call(null,inst_19570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19573 = cljs.core.get.call(null,inst_19570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19574 = inst_19550;
var state_19644__$1 = (function (){var statearr_19695 = state_19644;
(statearr_19695[(7)] = inst_19574);

(statearr_19695[(16)] = inst_19571);

(statearr_19695[(17)] = inst_19572);

(statearr_19695[(18)] = inst_19573);

return statearr_19695;
})();
var statearr_19696_19750 = state_19644__$1;
(statearr_19696_19750[(2)] = null);

(statearr_19696_19750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (18))){
var inst_19588 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19697_19751 = state_19644__$1;
(statearr_19697_19751[(2)] = inst_19588);

(statearr_19697_19751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (37))){
var state_19644__$1 = state_19644;
var statearr_19698_19752 = state_19644__$1;
(statearr_19698_19752[(2)] = null);

(statearr_19698_19752[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (8))){
var inst_19550 = (state_19644[(8)]);
var inst_19567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19550);
var state_19644__$1 = state_19644;
var statearr_19699_19753 = state_19644__$1;
(statearr_19699_19753[(2)] = inst_19567);

(statearr_19699_19753[(1)] = (10));


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
});})(c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8334__auto__,c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8335__auto__ = null;
var cljs$core$async$mix_$_state_machine__8335__auto____0 = (function (){
var statearr_19703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19703[(0)] = cljs$core$async$mix_$_state_machine__8335__auto__);

(statearr_19703[(1)] = (1));

return statearr_19703;
});
var cljs$core$async$mix_$_state_machine__8335__auto____1 = (function (state_19644){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19704){if((e19704 instanceof Object)){
var ex__8338__auto__ = e19704;
var statearr_19705_19754 = state_19644;
(statearr_19705_19754[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19755 = state_19644;
state_19644 = G__19755;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8335__auto__ = function(state_19644){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8335__auto____1.call(this,state_19644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8335__auto____0;
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8335__auto____1;
return cljs$core$async$mix_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8401__auto__ = (function (){var statearr_19706 = f__8400__auto__.call(null);
(statearr_19706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19707);

return statearr_19706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19756 = [];
var len__6152__auto___19759 = arguments.length;
var i__6153__auto___19760 = (0);
while(true){
if((i__6153__auto___19760 < len__6152__auto___19759)){
args19756.push((arguments[i__6153__auto___19760]));

var G__19761 = (i__6153__auto___19760 + (1));
i__6153__auto___19760 = G__19761;
continue;
} else {
}
break;
}

var G__19758 = args19756.length;
switch (G__19758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19756.length)].join('')));

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
var args19764 = [];
var len__6152__auto___19889 = arguments.length;
var i__6153__auto___19890 = (0);
while(true){
if((i__6153__auto___19890 < len__6152__auto___19889)){
args19764.push((arguments[i__6153__auto___19890]));

var G__19891 = (i__6153__auto___19890 + (1));
i__6153__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var G__19766 = args19764.length;
switch (G__19766) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19764.length)].join('')));

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
return (function (p1__19763_SHARP_){
if(cljs.core.truth_(p1__19763_SHARP_.call(null,topic))){
return p1__19763_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19763_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19767 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19768){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19768 = meta19768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19769,meta19768__$1){
var self__ = this;
var _19769__$1 = this;
return (new cljs.core.async.t_cljs$core$async19767(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19768__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19769){
var self__ = this;
var _19769__$1 = this;
return self__.meta19768;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19768","meta19768",1825980419,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19767";

cljs.core.async.t_cljs$core$async19767.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19767");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19767 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19768){
return (new cljs.core.async.t_cljs$core$async19767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19768));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19767(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___19893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19893,mults,ensure_mult,p){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19893,mults,ensure_mult,p){
return (function (state_19841){
var state_val_19842 = (state_19841[(1)]);
if((state_val_19842 === (7))){
var inst_19837 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19843_19894 = state_19841__$1;
(statearr_19843_19894[(2)] = inst_19837);

(statearr_19843_19894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (20))){
var state_19841__$1 = state_19841;
var statearr_19844_19895 = state_19841__$1;
(statearr_19844_19895[(2)] = null);

(statearr_19844_19895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (1))){
var state_19841__$1 = state_19841;
var statearr_19845_19896 = state_19841__$1;
(statearr_19845_19896[(2)] = null);

(statearr_19845_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (24))){
var inst_19820 = (state_19841[(7)]);
var inst_19829 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19820);
var state_19841__$1 = state_19841;
var statearr_19846_19897 = state_19841__$1;
(statearr_19846_19897[(2)] = inst_19829);

(statearr_19846_19897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (4))){
var inst_19772 = (state_19841[(8)]);
var inst_19772__$1 = (state_19841[(2)]);
var inst_19773 = (inst_19772__$1 == null);
var state_19841__$1 = (function (){var statearr_19847 = state_19841;
(statearr_19847[(8)] = inst_19772__$1);

return statearr_19847;
})();
if(cljs.core.truth_(inst_19773)){
var statearr_19848_19898 = state_19841__$1;
(statearr_19848_19898[(1)] = (5));

} else {
var statearr_19849_19899 = state_19841__$1;
(statearr_19849_19899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (15))){
var inst_19814 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19850_19900 = state_19841__$1;
(statearr_19850_19900[(2)] = inst_19814);

(statearr_19850_19900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (21))){
var inst_19834 = (state_19841[(2)]);
var state_19841__$1 = (function (){var statearr_19851 = state_19841;
(statearr_19851[(9)] = inst_19834);

return statearr_19851;
})();
var statearr_19852_19901 = state_19841__$1;
(statearr_19852_19901[(2)] = null);

(statearr_19852_19901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (13))){
var inst_19796 = (state_19841[(10)]);
var inst_19798 = cljs.core.chunked_seq_QMARK_.call(null,inst_19796);
var state_19841__$1 = state_19841;
if(inst_19798){
var statearr_19853_19902 = state_19841__$1;
(statearr_19853_19902[(1)] = (16));

} else {
var statearr_19854_19903 = state_19841__$1;
(statearr_19854_19903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (22))){
var inst_19826 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
if(cljs.core.truth_(inst_19826)){
var statearr_19855_19904 = state_19841__$1;
(statearr_19855_19904[(1)] = (23));

} else {
var statearr_19856_19905 = state_19841__$1;
(statearr_19856_19905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (6))){
var inst_19822 = (state_19841[(11)]);
var inst_19820 = (state_19841[(7)]);
var inst_19772 = (state_19841[(8)]);
var inst_19820__$1 = topic_fn.call(null,inst_19772);
var inst_19821 = cljs.core.deref.call(null,mults);
var inst_19822__$1 = cljs.core.get.call(null,inst_19821,inst_19820__$1);
var state_19841__$1 = (function (){var statearr_19857 = state_19841;
(statearr_19857[(11)] = inst_19822__$1);

(statearr_19857[(7)] = inst_19820__$1);

return statearr_19857;
})();
if(cljs.core.truth_(inst_19822__$1)){
var statearr_19858_19906 = state_19841__$1;
(statearr_19858_19906[(1)] = (19));

} else {
var statearr_19859_19907 = state_19841__$1;
(statearr_19859_19907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (25))){
var inst_19831 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19860_19908 = state_19841__$1;
(statearr_19860_19908[(2)] = inst_19831);

(statearr_19860_19908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (17))){
var inst_19796 = (state_19841[(10)]);
var inst_19805 = cljs.core.first.call(null,inst_19796);
var inst_19806 = cljs.core.async.muxch_STAR_.call(null,inst_19805);
var inst_19807 = cljs.core.async.close_BANG_.call(null,inst_19806);
var inst_19808 = cljs.core.next.call(null,inst_19796);
var inst_19782 = inst_19808;
var inst_19783 = null;
var inst_19784 = (0);
var inst_19785 = (0);
var state_19841__$1 = (function (){var statearr_19861 = state_19841;
(statearr_19861[(12)] = inst_19807);

(statearr_19861[(13)] = inst_19783);

(statearr_19861[(14)] = inst_19785);

(statearr_19861[(15)] = inst_19782);

(statearr_19861[(16)] = inst_19784);

return statearr_19861;
})();
var statearr_19862_19909 = state_19841__$1;
(statearr_19862_19909[(2)] = null);

(statearr_19862_19909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (3))){
var inst_19839 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19841__$1,inst_19839);
} else {
if((state_val_19842 === (12))){
var inst_19816 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19863_19910 = state_19841__$1;
(statearr_19863_19910[(2)] = inst_19816);

(statearr_19863_19910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (2))){
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19841__$1,(4),ch);
} else {
if((state_val_19842 === (23))){
var state_19841__$1 = state_19841;
var statearr_19864_19911 = state_19841__$1;
(statearr_19864_19911[(2)] = null);

(statearr_19864_19911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (19))){
var inst_19822 = (state_19841[(11)]);
var inst_19772 = (state_19841[(8)]);
var inst_19824 = cljs.core.async.muxch_STAR_.call(null,inst_19822);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19841__$1,(22),inst_19824,inst_19772);
} else {
if((state_val_19842 === (11))){
var inst_19796 = (state_19841[(10)]);
var inst_19782 = (state_19841[(15)]);
var inst_19796__$1 = cljs.core.seq.call(null,inst_19782);
var state_19841__$1 = (function (){var statearr_19865 = state_19841;
(statearr_19865[(10)] = inst_19796__$1);

return statearr_19865;
})();
if(inst_19796__$1){
var statearr_19866_19912 = state_19841__$1;
(statearr_19866_19912[(1)] = (13));

} else {
var statearr_19867_19913 = state_19841__$1;
(statearr_19867_19913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (9))){
var inst_19818 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19868_19914 = state_19841__$1;
(statearr_19868_19914[(2)] = inst_19818);

(statearr_19868_19914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (5))){
var inst_19779 = cljs.core.deref.call(null,mults);
var inst_19780 = cljs.core.vals.call(null,inst_19779);
var inst_19781 = cljs.core.seq.call(null,inst_19780);
var inst_19782 = inst_19781;
var inst_19783 = null;
var inst_19784 = (0);
var inst_19785 = (0);
var state_19841__$1 = (function (){var statearr_19869 = state_19841;
(statearr_19869[(13)] = inst_19783);

(statearr_19869[(14)] = inst_19785);

(statearr_19869[(15)] = inst_19782);

(statearr_19869[(16)] = inst_19784);

return statearr_19869;
})();
var statearr_19870_19915 = state_19841__$1;
(statearr_19870_19915[(2)] = null);

(statearr_19870_19915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (14))){
var state_19841__$1 = state_19841;
var statearr_19874_19916 = state_19841__$1;
(statearr_19874_19916[(2)] = null);

(statearr_19874_19916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (16))){
var inst_19796 = (state_19841[(10)]);
var inst_19800 = cljs.core.chunk_first.call(null,inst_19796);
var inst_19801 = cljs.core.chunk_rest.call(null,inst_19796);
var inst_19802 = cljs.core.count.call(null,inst_19800);
var inst_19782 = inst_19801;
var inst_19783 = inst_19800;
var inst_19784 = inst_19802;
var inst_19785 = (0);
var state_19841__$1 = (function (){var statearr_19875 = state_19841;
(statearr_19875[(13)] = inst_19783);

(statearr_19875[(14)] = inst_19785);

(statearr_19875[(15)] = inst_19782);

(statearr_19875[(16)] = inst_19784);

return statearr_19875;
})();
var statearr_19876_19917 = state_19841__$1;
(statearr_19876_19917[(2)] = null);

(statearr_19876_19917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (10))){
var inst_19783 = (state_19841[(13)]);
var inst_19785 = (state_19841[(14)]);
var inst_19782 = (state_19841[(15)]);
var inst_19784 = (state_19841[(16)]);
var inst_19790 = cljs.core._nth.call(null,inst_19783,inst_19785);
var inst_19791 = cljs.core.async.muxch_STAR_.call(null,inst_19790);
var inst_19792 = cljs.core.async.close_BANG_.call(null,inst_19791);
var inst_19793 = (inst_19785 + (1));
var tmp19871 = inst_19783;
var tmp19872 = inst_19782;
var tmp19873 = inst_19784;
var inst_19782__$1 = tmp19872;
var inst_19783__$1 = tmp19871;
var inst_19784__$1 = tmp19873;
var inst_19785__$1 = inst_19793;
var state_19841__$1 = (function (){var statearr_19877 = state_19841;
(statearr_19877[(13)] = inst_19783__$1);

(statearr_19877[(14)] = inst_19785__$1);

(statearr_19877[(15)] = inst_19782__$1);

(statearr_19877[(17)] = inst_19792);

(statearr_19877[(16)] = inst_19784__$1);

return statearr_19877;
})();
var statearr_19878_19918 = state_19841__$1;
(statearr_19878_19918[(2)] = null);

(statearr_19878_19918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (18))){
var inst_19811 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19879_19919 = state_19841__$1;
(statearr_19879_19919[(2)] = inst_19811);

(statearr_19879_19919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (8))){
var inst_19785 = (state_19841[(14)]);
var inst_19784 = (state_19841[(16)]);
var inst_19787 = (inst_19785 < inst_19784);
var inst_19788 = inst_19787;
var state_19841__$1 = state_19841;
if(cljs.core.truth_(inst_19788)){
var statearr_19880_19920 = state_19841__$1;
(statearr_19880_19920[(1)] = (10));

} else {
var statearr_19881_19921 = state_19841__$1;
(statearr_19881_19921[(1)] = (11));

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
});})(c__8399__auto___19893,mults,ensure_mult,p))
;
return ((function (switch__8334__auto__,c__8399__auto___19893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_19885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19885[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_19885[(1)] = (1));

return statearr_19885;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_19841){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19886){if((e19886 instanceof Object)){
var ex__8338__auto__ = e19886;
var statearr_19887_19922 = state_19841;
(statearr_19887_19922[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19923 = state_19841;
state_19841 = G__19923;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_19841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_19841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19893,mults,ensure_mult,p))
})();
var state__8401__auto__ = (function (){var statearr_19888 = f__8400__auto__.call(null);
(statearr_19888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19893);

return statearr_19888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19893,mults,ensure_mult,p))
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
var args19924 = [];
var len__6152__auto___19927 = arguments.length;
var i__6153__auto___19928 = (0);
while(true){
if((i__6153__auto___19928 < len__6152__auto___19927)){
args19924.push((arguments[i__6153__auto___19928]));

var G__19929 = (i__6153__auto___19928 + (1));
i__6153__auto___19928 = G__19929;
continue;
} else {
}
break;
}

var G__19926 = args19924.length;
switch (G__19926) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19924.length)].join('')));

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
var args19931 = [];
var len__6152__auto___19934 = arguments.length;
var i__6153__auto___19935 = (0);
while(true){
if((i__6153__auto___19935 < len__6152__auto___19934)){
args19931.push((arguments[i__6153__auto___19935]));

var G__19936 = (i__6153__auto___19935 + (1));
i__6153__auto___19935 = G__19936;
continue;
} else {
}
break;
}

var G__19933 = args19931.length;
switch (G__19933) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19931.length)].join('')));

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
var args19938 = [];
var len__6152__auto___20009 = arguments.length;
var i__6153__auto___20010 = (0);
while(true){
if((i__6153__auto___20010 < len__6152__auto___20009)){
args19938.push((arguments[i__6153__auto___20010]));

var G__20011 = (i__6153__auto___20010 + (1));
i__6153__auto___20010 = G__20011;
continue;
} else {
}
break;
}

var G__19940 = args19938.length;
switch (G__19940) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19938.length)].join('')));

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
var c__8399__auto___20013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19979){
var state_val_19980 = (state_19979[(1)]);
if((state_val_19980 === (7))){
var state_19979__$1 = state_19979;
var statearr_19981_20014 = state_19979__$1;
(statearr_19981_20014[(2)] = null);

(statearr_19981_20014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (1))){
var state_19979__$1 = state_19979;
var statearr_19982_20015 = state_19979__$1;
(statearr_19982_20015[(2)] = null);

(statearr_19982_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (4))){
var inst_19943 = (state_19979[(7)]);
var inst_19945 = (inst_19943 < cnt);
var state_19979__$1 = state_19979;
if(cljs.core.truth_(inst_19945)){
var statearr_19983_20016 = state_19979__$1;
(statearr_19983_20016[(1)] = (6));

} else {
var statearr_19984_20017 = state_19979__$1;
(statearr_19984_20017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (15))){
var inst_19975 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_19985_20018 = state_19979__$1;
(statearr_19985_20018[(2)] = inst_19975);

(statearr_19985_20018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (13))){
var inst_19968 = cljs.core.async.close_BANG_.call(null,out);
var state_19979__$1 = state_19979;
var statearr_19986_20019 = state_19979__$1;
(statearr_19986_20019[(2)] = inst_19968);

(statearr_19986_20019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (6))){
var state_19979__$1 = state_19979;
var statearr_19987_20020 = state_19979__$1;
(statearr_19987_20020[(2)] = null);

(statearr_19987_20020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (3))){
var inst_19977 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19979__$1,inst_19977);
} else {
if((state_val_19980 === (12))){
var inst_19965 = (state_19979[(8)]);
var inst_19965__$1 = (state_19979[(2)]);
var inst_19966 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19965__$1);
var state_19979__$1 = (function (){var statearr_19988 = state_19979;
(statearr_19988[(8)] = inst_19965__$1);

return statearr_19988;
})();
if(cljs.core.truth_(inst_19966)){
var statearr_19989_20021 = state_19979__$1;
(statearr_19989_20021[(1)] = (13));

} else {
var statearr_19990_20022 = state_19979__$1;
(statearr_19990_20022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (2))){
var inst_19942 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19943 = (0);
var state_19979__$1 = (function (){var statearr_19991 = state_19979;
(statearr_19991[(9)] = inst_19942);

(statearr_19991[(7)] = inst_19943);

return statearr_19991;
})();
var statearr_19992_20023 = state_19979__$1;
(statearr_19992_20023[(2)] = null);

(statearr_19992_20023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (11))){
var inst_19943 = (state_19979[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19979,(10),Object,null,(9));
var inst_19952 = chs__$1.call(null,inst_19943);
var inst_19953 = done.call(null,inst_19943);
var inst_19954 = cljs.core.async.take_BANG_.call(null,inst_19952,inst_19953);
var state_19979__$1 = state_19979;
var statearr_19993_20024 = state_19979__$1;
(statearr_19993_20024[(2)] = inst_19954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (9))){
var inst_19943 = (state_19979[(7)]);
var inst_19956 = (state_19979[(2)]);
var inst_19957 = (inst_19943 + (1));
var inst_19943__$1 = inst_19957;
var state_19979__$1 = (function (){var statearr_19994 = state_19979;
(statearr_19994[(10)] = inst_19956);

(statearr_19994[(7)] = inst_19943__$1);

return statearr_19994;
})();
var statearr_19995_20025 = state_19979__$1;
(statearr_19995_20025[(2)] = null);

(statearr_19995_20025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (5))){
var inst_19963 = (state_19979[(2)]);
var state_19979__$1 = (function (){var statearr_19996 = state_19979;
(statearr_19996[(11)] = inst_19963);

return statearr_19996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19979__$1,(12),dchan);
} else {
if((state_val_19980 === (14))){
var inst_19965 = (state_19979[(8)]);
var inst_19970 = cljs.core.apply.call(null,f,inst_19965);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19979__$1,(16),out,inst_19970);
} else {
if((state_val_19980 === (16))){
var inst_19972 = (state_19979[(2)]);
var state_19979__$1 = (function (){var statearr_19997 = state_19979;
(statearr_19997[(12)] = inst_19972);

return statearr_19997;
})();
var statearr_19998_20026 = state_19979__$1;
(statearr_19998_20026[(2)] = null);

(statearr_19998_20026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (10))){
var inst_19947 = (state_19979[(2)]);
var inst_19948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19979__$1 = (function (){var statearr_19999 = state_19979;
(statearr_19999[(13)] = inst_19947);

return statearr_19999;
})();
var statearr_20000_20027 = state_19979__$1;
(statearr_20000_20027[(2)] = inst_19948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (8))){
var inst_19961 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_20001_20028 = state_19979__$1;
(statearr_20001_20028[(2)] = inst_19961);

(statearr_20001_20028[(1)] = (5));


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
});})(c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20005[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20005[(1)] = (1));

return statearr_20005;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_19979){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20006){if((e20006 instanceof Object)){
var ex__8338__auto__ = e20006;
var statearr_20007_20029 = state_19979;
(statearr_20007_20029[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20030 = state_19979;
state_19979 = G__20030;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_19979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_19979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_20008 = f__8400__auto__.call(null);
(statearr_20008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20013);

return statearr_20008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20013,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20032 = [];
var len__6152__auto___20088 = arguments.length;
var i__6153__auto___20089 = (0);
while(true){
if((i__6153__auto___20089 < len__6152__auto___20088)){
args20032.push((arguments[i__6153__auto___20089]));

var G__20090 = (i__6153__auto___20089 + (1));
i__6153__auto___20089 = G__20090;
continue;
} else {
}
break;
}

var G__20034 = args20032.length;
switch (G__20034) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20032.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20092,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20092,out){
return (function (state_20064){
var state_val_20065 = (state_20064[(1)]);
if((state_val_20065 === (7))){
var inst_20044 = (state_20064[(7)]);
var inst_20043 = (state_20064[(8)]);
var inst_20043__$1 = (state_20064[(2)]);
var inst_20044__$1 = cljs.core.nth.call(null,inst_20043__$1,(0),null);
var inst_20045 = cljs.core.nth.call(null,inst_20043__$1,(1),null);
var inst_20046 = (inst_20044__$1 == null);
var state_20064__$1 = (function (){var statearr_20066 = state_20064;
(statearr_20066[(7)] = inst_20044__$1);

(statearr_20066[(9)] = inst_20045);

(statearr_20066[(8)] = inst_20043__$1);

return statearr_20066;
})();
if(cljs.core.truth_(inst_20046)){
var statearr_20067_20093 = state_20064__$1;
(statearr_20067_20093[(1)] = (8));

} else {
var statearr_20068_20094 = state_20064__$1;
(statearr_20068_20094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (1))){
var inst_20035 = cljs.core.vec.call(null,chs);
var inst_20036 = inst_20035;
var state_20064__$1 = (function (){var statearr_20069 = state_20064;
(statearr_20069[(10)] = inst_20036);

return statearr_20069;
})();
var statearr_20070_20095 = state_20064__$1;
(statearr_20070_20095[(2)] = null);

(statearr_20070_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (4))){
var inst_20036 = (state_20064[(10)]);
var state_20064__$1 = state_20064;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20064__$1,(7),inst_20036);
} else {
if((state_val_20065 === (6))){
var inst_20060 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20071_20096 = state_20064__$1;
(statearr_20071_20096[(2)] = inst_20060);

(statearr_20071_20096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (3))){
var inst_20062 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20064__$1,inst_20062);
} else {
if((state_val_20065 === (2))){
var inst_20036 = (state_20064[(10)]);
var inst_20038 = cljs.core.count.call(null,inst_20036);
var inst_20039 = (inst_20038 > (0));
var state_20064__$1 = state_20064;
if(cljs.core.truth_(inst_20039)){
var statearr_20073_20097 = state_20064__$1;
(statearr_20073_20097[(1)] = (4));

} else {
var statearr_20074_20098 = state_20064__$1;
(statearr_20074_20098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (11))){
var inst_20036 = (state_20064[(10)]);
var inst_20053 = (state_20064[(2)]);
var tmp20072 = inst_20036;
var inst_20036__$1 = tmp20072;
var state_20064__$1 = (function (){var statearr_20075 = state_20064;
(statearr_20075[(11)] = inst_20053);

(statearr_20075[(10)] = inst_20036__$1);

return statearr_20075;
})();
var statearr_20076_20099 = state_20064__$1;
(statearr_20076_20099[(2)] = null);

(statearr_20076_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (9))){
var inst_20044 = (state_20064[(7)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20064__$1,(11),out,inst_20044);
} else {
if((state_val_20065 === (5))){
var inst_20058 = cljs.core.async.close_BANG_.call(null,out);
var state_20064__$1 = state_20064;
var statearr_20077_20100 = state_20064__$1;
(statearr_20077_20100[(2)] = inst_20058);

(statearr_20077_20100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (10))){
var inst_20056 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20078_20101 = state_20064__$1;
(statearr_20078_20101[(2)] = inst_20056);

(statearr_20078_20101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (8))){
var inst_20044 = (state_20064[(7)]);
var inst_20036 = (state_20064[(10)]);
var inst_20045 = (state_20064[(9)]);
var inst_20043 = (state_20064[(8)]);
var inst_20048 = (function (){var cs = inst_20036;
var vec__20041 = inst_20043;
var v = inst_20044;
var c = inst_20045;
return ((function (cs,vec__20041,v,c,inst_20044,inst_20036,inst_20045,inst_20043,state_val_20065,c__8399__auto___20092,out){
return (function (p1__20031_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20031_SHARP_);
});
;})(cs,vec__20041,v,c,inst_20044,inst_20036,inst_20045,inst_20043,state_val_20065,c__8399__auto___20092,out))
})();
var inst_20049 = cljs.core.filterv.call(null,inst_20048,inst_20036);
var inst_20036__$1 = inst_20049;
var state_20064__$1 = (function (){var statearr_20079 = state_20064;
(statearr_20079[(10)] = inst_20036__$1);

return statearr_20079;
})();
var statearr_20080_20102 = state_20064__$1;
(statearr_20080_20102[(2)] = null);

(statearr_20080_20102[(1)] = (2));


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
});})(c__8399__auto___20092,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20092,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20084[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20084[(1)] = (1));

return statearr_20084;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20064){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20085){if((e20085 instanceof Object)){
var ex__8338__auto__ = e20085;
var statearr_20086_20103 = state_20064;
(statearr_20086_20103[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20104 = state_20064;
state_20064 = G__20104;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20092,out))
})();
var state__8401__auto__ = (function (){var statearr_20087 = f__8400__auto__.call(null);
(statearr_20087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20092);

return statearr_20087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20092,out))
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
var args20105 = [];
var len__6152__auto___20154 = arguments.length;
var i__6153__auto___20155 = (0);
while(true){
if((i__6153__auto___20155 < len__6152__auto___20154)){
args20105.push((arguments[i__6153__auto___20155]));

var G__20156 = (i__6153__auto___20155 + (1));
i__6153__auto___20155 = G__20156;
continue;
} else {
}
break;
}

var G__20107 = args20105.length;
switch (G__20107) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20105.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20158,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20158,out){
return (function (state_20131){
var state_val_20132 = (state_20131[(1)]);
if((state_val_20132 === (7))){
var inst_20113 = (state_20131[(7)]);
var inst_20113__$1 = (state_20131[(2)]);
var inst_20114 = (inst_20113__$1 == null);
var inst_20115 = cljs.core.not.call(null,inst_20114);
var state_20131__$1 = (function (){var statearr_20133 = state_20131;
(statearr_20133[(7)] = inst_20113__$1);

return statearr_20133;
})();
if(inst_20115){
var statearr_20134_20159 = state_20131__$1;
(statearr_20134_20159[(1)] = (8));

} else {
var statearr_20135_20160 = state_20131__$1;
(statearr_20135_20160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (1))){
var inst_20108 = (0);
var state_20131__$1 = (function (){var statearr_20136 = state_20131;
(statearr_20136[(8)] = inst_20108);

return statearr_20136;
})();
var statearr_20137_20161 = state_20131__$1;
(statearr_20137_20161[(2)] = null);

(statearr_20137_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (4))){
var state_20131__$1 = state_20131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20131__$1,(7),ch);
} else {
if((state_val_20132 === (6))){
var inst_20126 = (state_20131[(2)]);
var state_20131__$1 = state_20131;
var statearr_20138_20162 = state_20131__$1;
(statearr_20138_20162[(2)] = inst_20126);

(statearr_20138_20162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (3))){
var inst_20128 = (state_20131[(2)]);
var inst_20129 = cljs.core.async.close_BANG_.call(null,out);
var state_20131__$1 = (function (){var statearr_20139 = state_20131;
(statearr_20139[(9)] = inst_20128);

return statearr_20139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20131__$1,inst_20129);
} else {
if((state_val_20132 === (2))){
var inst_20108 = (state_20131[(8)]);
var inst_20110 = (inst_20108 < n);
var state_20131__$1 = state_20131;
if(cljs.core.truth_(inst_20110)){
var statearr_20140_20163 = state_20131__$1;
(statearr_20140_20163[(1)] = (4));

} else {
var statearr_20141_20164 = state_20131__$1;
(statearr_20141_20164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (11))){
var inst_20108 = (state_20131[(8)]);
var inst_20118 = (state_20131[(2)]);
var inst_20119 = (inst_20108 + (1));
var inst_20108__$1 = inst_20119;
var state_20131__$1 = (function (){var statearr_20142 = state_20131;
(statearr_20142[(10)] = inst_20118);

(statearr_20142[(8)] = inst_20108__$1);

return statearr_20142;
})();
var statearr_20143_20165 = state_20131__$1;
(statearr_20143_20165[(2)] = null);

(statearr_20143_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (9))){
var state_20131__$1 = state_20131;
var statearr_20144_20166 = state_20131__$1;
(statearr_20144_20166[(2)] = null);

(statearr_20144_20166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (5))){
var state_20131__$1 = state_20131;
var statearr_20145_20167 = state_20131__$1;
(statearr_20145_20167[(2)] = null);

(statearr_20145_20167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (10))){
var inst_20123 = (state_20131[(2)]);
var state_20131__$1 = state_20131;
var statearr_20146_20168 = state_20131__$1;
(statearr_20146_20168[(2)] = inst_20123);

(statearr_20146_20168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20132 === (8))){
var inst_20113 = (state_20131[(7)]);
var state_20131__$1 = state_20131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20131__$1,(11),out,inst_20113);
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
});})(c__8399__auto___20158,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20158,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20150[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20150[(1)] = (1));

return statearr_20150;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20131){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20151){if((e20151 instanceof Object)){
var ex__8338__auto__ = e20151;
var statearr_20152_20169 = state_20131;
(statearr_20152_20169[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20170 = state_20131;
state_20131 = G__20170;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20158,out))
})();
var state__8401__auto__ = (function (){var statearr_20153 = f__8400__auto__.call(null);
(statearr_20153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20158);

return statearr_20153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20158,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20178 = (function (map_LT_,f,ch,meta20179){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20179 = meta20179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20180,meta20179__$1){
var self__ = this;
var _20180__$1 = this;
return (new cljs.core.async.t_cljs$core$async20178(self__.map_LT_,self__.f,self__.ch,meta20179__$1));
});

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20180){
var self__ = this;
var _20180__$1 = this;
return self__.meta20179;
});

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20181 = (function (map_LT_,f,ch,meta20179,_,fn1,meta20182){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20179 = meta20179;
this._ = _;
this.fn1 = fn1;
this.meta20182 = meta20182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20183,meta20182__$1){
var self__ = this;
var _20183__$1 = this;
return (new cljs.core.async.t_cljs$core$async20181(self__.map_LT_,self__.f,self__.ch,self__.meta20179,self__._,self__.fn1,meta20182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20183){
var self__ = this;
var _20183__$1 = this;
return self__.meta20182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20171_SHARP_){
return f1.call(null,(((p1__20171_SHARP_ == null))?null:self__.f.call(null,p1__20171_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20179","meta20179",-458939620,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20178","cljs.core.async/t_cljs$core$async20178",1981622562,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20182","meta20182",1681034360,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20181";

cljs.core.async.t_cljs$core$async20181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20181");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20181(map_LT___$1,f__$1,ch__$1,meta20179__$1,___$2,fn1__$1,meta20182){
return (new cljs.core.async.t_cljs$core$async20181(map_LT___$1,f__$1,ch__$1,meta20179__$1,___$2,fn1__$1,meta20182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20181(self__.map_LT_,self__.f,self__.ch,self__.meta20179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20179","meta20179",-458939620,null)], null);
});

cljs.core.async.t_cljs$core$async20178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20178";

cljs.core.async.t_cljs$core$async20178.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20178");
});

cljs.core.async.__GT_t_cljs$core$async20178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20178(map_LT___$1,f__$1,ch__$1,meta20179){
return (new cljs.core.async.t_cljs$core$async20178(map_LT___$1,f__$1,ch__$1,meta20179));
});

}

return (new cljs.core.async.t_cljs$core$async20178(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20187 = (function (map_GT_,f,ch,meta20188){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20188 = meta20188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20189,meta20188__$1){
var self__ = this;
var _20189__$1 = this;
return (new cljs.core.async.t_cljs$core$async20187(self__.map_GT_,self__.f,self__.ch,meta20188__$1));
});

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20189){
var self__ = this;
var _20189__$1 = this;
return self__.meta20188;
});

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20188","meta20188",-1852773814,null)], null);
});

cljs.core.async.t_cljs$core$async20187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20187";

cljs.core.async.t_cljs$core$async20187.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20187");
});

cljs.core.async.__GT_t_cljs$core$async20187 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20187(map_GT___$1,f__$1,ch__$1,meta20188){
return (new cljs.core.async.t_cljs$core$async20187(map_GT___$1,f__$1,ch__$1,meta20188));
});

}

return (new cljs.core.async.t_cljs$core$async20187(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20193 = (function (filter_GT_,p,ch,meta20194){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20194 = meta20194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20195,meta20194__$1){
var self__ = this;
var _20195__$1 = this;
return (new cljs.core.async.t_cljs$core$async20193(self__.filter_GT_,self__.p,self__.ch,meta20194__$1));
});

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20195){
var self__ = this;
var _20195__$1 = this;
return self__.meta20194;
});

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20194","meta20194",1226610112,null)], null);
});

cljs.core.async.t_cljs$core$async20193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20193";

cljs.core.async.t_cljs$core$async20193.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20193");
});

cljs.core.async.__GT_t_cljs$core$async20193 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20193(filter_GT___$1,p__$1,ch__$1,meta20194){
return (new cljs.core.async.t_cljs$core$async20193(filter_GT___$1,p__$1,ch__$1,meta20194));
});

}

return (new cljs.core.async.t_cljs$core$async20193(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20196 = [];
var len__6152__auto___20240 = arguments.length;
var i__6153__auto___20241 = (0);
while(true){
if((i__6153__auto___20241 < len__6152__auto___20240)){
args20196.push((arguments[i__6153__auto___20241]));

var G__20242 = (i__6153__auto___20241 + (1));
i__6153__auto___20241 = G__20242;
continue;
} else {
}
break;
}

var G__20198 = args20196.length;
switch (G__20198) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20196.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20244,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20244,out){
return (function (state_20219){
var state_val_20220 = (state_20219[(1)]);
if((state_val_20220 === (7))){
var inst_20215 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20221_20245 = state_20219__$1;
(statearr_20221_20245[(2)] = inst_20215);

(statearr_20221_20245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (1))){
var state_20219__$1 = state_20219;
var statearr_20222_20246 = state_20219__$1;
(statearr_20222_20246[(2)] = null);

(statearr_20222_20246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (4))){
var inst_20201 = (state_20219[(7)]);
var inst_20201__$1 = (state_20219[(2)]);
var inst_20202 = (inst_20201__$1 == null);
var state_20219__$1 = (function (){var statearr_20223 = state_20219;
(statearr_20223[(7)] = inst_20201__$1);

return statearr_20223;
})();
if(cljs.core.truth_(inst_20202)){
var statearr_20224_20247 = state_20219__$1;
(statearr_20224_20247[(1)] = (5));

} else {
var statearr_20225_20248 = state_20219__$1;
(statearr_20225_20248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (6))){
var inst_20201 = (state_20219[(7)]);
var inst_20206 = p.call(null,inst_20201);
var state_20219__$1 = state_20219;
if(cljs.core.truth_(inst_20206)){
var statearr_20226_20249 = state_20219__$1;
(statearr_20226_20249[(1)] = (8));

} else {
var statearr_20227_20250 = state_20219__$1;
(statearr_20227_20250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (3))){
var inst_20217 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20219__$1,inst_20217);
} else {
if((state_val_20220 === (2))){
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20219__$1,(4),ch);
} else {
if((state_val_20220 === (11))){
var inst_20209 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20228_20251 = state_20219__$1;
(statearr_20228_20251[(2)] = inst_20209);

(statearr_20228_20251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (9))){
var state_20219__$1 = state_20219;
var statearr_20229_20252 = state_20219__$1;
(statearr_20229_20252[(2)] = null);

(statearr_20229_20252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (5))){
var inst_20204 = cljs.core.async.close_BANG_.call(null,out);
var state_20219__$1 = state_20219;
var statearr_20230_20253 = state_20219__$1;
(statearr_20230_20253[(2)] = inst_20204);

(statearr_20230_20253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (10))){
var inst_20212 = (state_20219[(2)]);
var state_20219__$1 = (function (){var statearr_20231 = state_20219;
(statearr_20231[(8)] = inst_20212);

return statearr_20231;
})();
var statearr_20232_20254 = state_20219__$1;
(statearr_20232_20254[(2)] = null);

(statearr_20232_20254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (8))){
var inst_20201 = (state_20219[(7)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20219__$1,(11),out,inst_20201);
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
});})(c__8399__auto___20244,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20244,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20236 = [null,null,null,null,null,null,null,null,null];
(statearr_20236[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20236[(1)] = (1));

return statearr_20236;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20219){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20237){if((e20237 instanceof Object)){
var ex__8338__auto__ = e20237;
var statearr_20238_20255 = state_20219;
(statearr_20238_20255[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20256 = state_20219;
state_20219 = G__20256;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20244,out))
})();
var state__8401__auto__ = (function (){var statearr_20239 = f__8400__auto__.call(null);
(statearr_20239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20244);

return statearr_20239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20244,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20257 = [];
var len__6152__auto___20260 = arguments.length;
var i__6153__auto___20261 = (0);
while(true){
if((i__6153__auto___20261 < len__6152__auto___20260)){
args20257.push((arguments[i__6153__auto___20261]));

var G__20262 = (i__6153__auto___20261 + (1));
i__6153__auto___20261 = G__20262;
continue;
} else {
}
break;
}

var G__20259 = args20257.length;
switch (G__20259) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20257.length)].join('')));

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
return (function (state_20429){
var state_val_20430 = (state_20429[(1)]);
if((state_val_20430 === (7))){
var inst_20425 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20431_20472 = state_20429__$1;
(statearr_20431_20472[(2)] = inst_20425);

(statearr_20431_20472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (20))){
var inst_20395 = (state_20429[(7)]);
var inst_20406 = (state_20429[(2)]);
var inst_20407 = cljs.core.next.call(null,inst_20395);
var inst_20381 = inst_20407;
var inst_20382 = null;
var inst_20383 = (0);
var inst_20384 = (0);
var state_20429__$1 = (function (){var statearr_20432 = state_20429;
(statearr_20432[(8)] = inst_20382);

(statearr_20432[(9)] = inst_20406);

(statearr_20432[(10)] = inst_20383);

(statearr_20432[(11)] = inst_20384);

(statearr_20432[(12)] = inst_20381);

return statearr_20432;
})();
var statearr_20433_20473 = state_20429__$1;
(statearr_20433_20473[(2)] = null);

(statearr_20433_20473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (1))){
var state_20429__$1 = state_20429;
var statearr_20434_20474 = state_20429__$1;
(statearr_20434_20474[(2)] = null);

(statearr_20434_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (4))){
var inst_20370 = (state_20429[(13)]);
var inst_20370__$1 = (state_20429[(2)]);
var inst_20371 = (inst_20370__$1 == null);
var state_20429__$1 = (function (){var statearr_20435 = state_20429;
(statearr_20435[(13)] = inst_20370__$1);

return statearr_20435;
})();
if(cljs.core.truth_(inst_20371)){
var statearr_20436_20475 = state_20429__$1;
(statearr_20436_20475[(1)] = (5));

} else {
var statearr_20437_20476 = state_20429__$1;
(statearr_20437_20476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (15))){
var state_20429__$1 = state_20429;
var statearr_20441_20477 = state_20429__$1;
(statearr_20441_20477[(2)] = null);

(statearr_20441_20477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (21))){
var state_20429__$1 = state_20429;
var statearr_20442_20478 = state_20429__$1;
(statearr_20442_20478[(2)] = null);

(statearr_20442_20478[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (13))){
var inst_20382 = (state_20429[(8)]);
var inst_20383 = (state_20429[(10)]);
var inst_20384 = (state_20429[(11)]);
var inst_20381 = (state_20429[(12)]);
var inst_20391 = (state_20429[(2)]);
var inst_20392 = (inst_20384 + (1));
var tmp20438 = inst_20382;
var tmp20439 = inst_20383;
var tmp20440 = inst_20381;
var inst_20381__$1 = tmp20440;
var inst_20382__$1 = tmp20438;
var inst_20383__$1 = tmp20439;
var inst_20384__$1 = inst_20392;
var state_20429__$1 = (function (){var statearr_20443 = state_20429;
(statearr_20443[(14)] = inst_20391);

(statearr_20443[(8)] = inst_20382__$1);

(statearr_20443[(10)] = inst_20383__$1);

(statearr_20443[(11)] = inst_20384__$1);

(statearr_20443[(12)] = inst_20381__$1);

return statearr_20443;
})();
var statearr_20444_20479 = state_20429__$1;
(statearr_20444_20479[(2)] = null);

(statearr_20444_20479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (22))){
var state_20429__$1 = state_20429;
var statearr_20445_20480 = state_20429__$1;
(statearr_20445_20480[(2)] = null);

(statearr_20445_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (6))){
var inst_20370 = (state_20429[(13)]);
var inst_20379 = f.call(null,inst_20370);
var inst_20380 = cljs.core.seq.call(null,inst_20379);
var inst_20381 = inst_20380;
var inst_20382 = null;
var inst_20383 = (0);
var inst_20384 = (0);
var state_20429__$1 = (function (){var statearr_20446 = state_20429;
(statearr_20446[(8)] = inst_20382);

(statearr_20446[(10)] = inst_20383);

(statearr_20446[(11)] = inst_20384);

(statearr_20446[(12)] = inst_20381);

return statearr_20446;
})();
var statearr_20447_20481 = state_20429__$1;
(statearr_20447_20481[(2)] = null);

(statearr_20447_20481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (17))){
var inst_20395 = (state_20429[(7)]);
var inst_20399 = cljs.core.chunk_first.call(null,inst_20395);
var inst_20400 = cljs.core.chunk_rest.call(null,inst_20395);
var inst_20401 = cljs.core.count.call(null,inst_20399);
var inst_20381 = inst_20400;
var inst_20382 = inst_20399;
var inst_20383 = inst_20401;
var inst_20384 = (0);
var state_20429__$1 = (function (){var statearr_20448 = state_20429;
(statearr_20448[(8)] = inst_20382);

(statearr_20448[(10)] = inst_20383);

(statearr_20448[(11)] = inst_20384);

(statearr_20448[(12)] = inst_20381);

return statearr_20448;
})();
var statearr_20449_20482 = state_20429__$1;
(statearr_20449_20482[(2)] = null);

(statearr_20449_20482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (3))){
var inst_20427 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20429__$1,inst_20427);
} else {
if((state_val_20430 === (12))){
var inst_20415 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20450_20483 = state_20429__$1;
(statearr_20450_20483[(2)] = inst_20415);

(statearr_20450_20483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (2))){
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20429__$1,(4),in$);
} else {
if((state_val_20430 === (23))){
var inst_20423 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20451_20484 = state_20429__$1;
(statearr_20451_20484[(2)] = inst_20423);

(statearr_20451_20484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (19))){
var inst_20410 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20452_20485 = state_20429__$1;
(statearr_20452_20485[(2)] = inst_20410);

(statearr_20452_20485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (11))){
var inst_20381 = (state_20429[(12)]);
var inst_20395 = (state_20429[(7)]);
var inst_20395__$1 = cljs.core.seq.call(null,inst_20381);
var state_20429__$1 = (function (){var statearr_20453 = state_20429;
(statearr_20453[(7)] = inst_20395__$1);

return statearr_20453;
})();
if(inst_20395__$1){
var statearr_20454_20486 = state_20429__$1;
(statearr_20454_20486[(1)] = (14));

} else {
var statearr_20455_20487 = state_20429__$1;
(statearr_20455_20487[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (9))){
var inst_20417 = (state_20429[(2)]);
var inst_20418 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20429__$1 = (function (){var statearr_20456 = state_20429;
(statearr_20456[(15)] = inst_20417);

return statearr_20456;
})();
if(cljs.core.truth_(inst_20418)){
var statearr_20457_20488 = state_20429__$1;
(statearr_20457_20488[(1)] = (21));

} else {
var statearr_20458_20489 = state_20429__$1;
(statearr_20458_20489[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (5))){
var inst_20373 = cljs.core.async.close_BANG_.call(null,out);
var state_20429__$1 = state_20429;
var statearr_20459_20490 = state_20429__$1;
(statearr_20459_20490[(2)] = inst_20373);

(statearr_20459_20490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (14))){
var inst_20395 = (state_20429[(7)]);
var inst_20397 = cljs.core.chunked_seq_QMARK_.call(null,inst_20395);
var state_20429__$1 = state_20429;
if(inst_20397){
var statearr_20460_20491 = state_20429__$1;
(statearr_20460_20491[(1)] = (17));

} else {
var statearr_20461_20492 = state_20429__$1;
(statearr_20461_20492[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (16))){
var inst_20413 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20462_20493 = state_20429__$1;
(statearr_20462_20493[(2)] = inst_20413);

(statearr_20462_20493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (10))){
var inst_20382 = (state_20429[(8)]);
var inst_20384 = (state_20429[(11)]);
var inst_20389 = cljs.core._nth.call(null,inst_20382,inst_20384);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20429__$1,(13),out,inst_20389);
} else {
if((state_val_20430 === (18))){
var inst_20395 = (state_20429[(7)]);
var inst_20404 = cljs.core.first.call(null,inst_20395);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20429__$1,(20),out,inst_20404);
} else {
if((state_val_20430 === (8))){
var inst_20383 = (state_20429[(10)]);
var inst_20384 = (state_20429[(11)]);
var inst_20386 = (inst_20384 < inst_20383);
var inst_20387 = inst_20386;
var state_20429__$1 = state_20429;
if(cljs.core.truth_(inst_20387)){
var statearr_20463_20494 = state_20429__$1;
(statearr_20463_20494[(1)] = (10));

} else {
var statearr_20464_20495 = state_20429__$1;
(statearr_20464_20495[(1)] = (11));

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
var statearr_20468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20468[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__);

(statearr_20468[(1)] = (1));

return statearr_20468;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1 = (function (state_20429){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20469){if((e20469 instanceof Object)){
var ex__8338__auto__ = e20469;
var statearr_20470_20496 = state_20429;
(statearr_20470_20496[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20497 = state_20429;
state_20429 = G__20497;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__ = function(state_20429){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1.call(this,state_20429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_20471 = f__8400__auto__.call(null);
(statearr_20471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_20471;
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
var args20498 = [];
var len__6152__auto___20501 = arguments.length;
var i__6153__auto___20502 = (0);
while(true){
if((i__6153__auto___20502 < len__6152__auto___20501)){
args20498.push((arguments[i__6153__auto___20502]));

var G__20503 = (i__6153__auto___20502 + (1));
i__6153__auto___20502 = G__20503;
continue;
} else {
}
break;
}

var G__20500 = args20498.length;
switch (G__20500) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20498.length)].join('')));

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
var args20505 = [];
var len__6152__auto___20508 = arguments.length;
var i__6153__auto___20509 = (0);
while(true){
if((i__6153__auto___20509 < len__6152__auto___20508)){
args20505.push((arguments[i__6153__auto___20509]));

var G__20510 = (i__6153__auto___20509 + (1));
i__6153__auto___20509 = G__20510;
continue;
} else {
}
break;
}

var G__20507 = args20505.length;
switch (G__20507) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20505.length)].join('')));

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
var args20512 = [];
var len__6152__auto___20563 = arguments.length;
var i__6153__auto___20564 = (0);
while(true){
if((i__6153__auto___20564 < len__6152__auto___20563)){
args20512.push((arguments[i__6153__auto___20564]));

var G__20565 = (i__6153__auto___20564 + (1));
i__6153__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var G__20514 = args20512.length;
switch (G__20514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20512.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20567,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20567,out){
return (function (state_20538){
var state_val_20539 = (state_20538[(1)]);
if((state_val_20539 === (7))){
var inst_20533 = (state_20538[(2)]);
var state_20538__$1 = state_20538;
var statearr_20540_20568 = state_20538__$1;
(statearr_20540_20568[(2)] = inst_20533);

(statearr_20540_20568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (1))){
var inst_20515 = null;
var state_20538__$1 = (function (){var statearr_20541 = state_20538;
(statearr_20541[(7)] = inst_20515);

return statearr_20541;
})();
var statearr_20542_20569 = state_20538__$1;
(statearr_20542_20569[(2)] = null);

(statearr_20542_20569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (4))){
var inst_20518 = (state_20538[(8)]);
var inst_20518__$1 = (state_20538[(2)]);
var inst_20519 = (inst_20518__$1 == null);
var inst_20520 = cljs.core.not.call(null,inst_20519);
var state_20538__$1 = (function (){var statearr_20543 = state_20538;
(statearr_20543[(8)] = inst_20518__$1);

return statearr_20543;
})();
if(inst_20520){
var statearr_20544_20570 = state_20538__$1;
(statearr_20544_20570[(1)] = (5));

} else {
var statearr_20545_20571 = state_20538__$1;
(statearr_20545_20571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (6))){
var state_20538__$1 = state_20538;
var statearr_20546_20572 = state_20538__$1;
(statearr_20546_20572[(2)] = null);

(statearr_20546_20572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (3))){
var inst_20535 = (state_20538[(2)]);
var inst_20536 = cljs.core.async.close_BANG_.call(null,out);
var state_20538__$1 = (function (){var statearr_20547 = state_20538;
(statearr_20547[(9)] = inst_20535);

return statearr_20547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20538__$1,inst_20536);
} else {
if((state_val_20539 === (2))){
var state_20538__$1 = state_20538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20538__$1,(4),ch);
} else {
if((state_val_20539 === (11))){
var inst_20518 = (state_20538[(8)]);
var inst_20527 = (state_20538[(2)]);
var inst_20515 = inst_20518;
var state_20538__$1 = (function (){var statearr_20548 = state_20538;
(statearr_20548[(7)] = inst_20515);

(statearr_20548[(10)] = inst_20527);

return statearr_20548;
})();
var statearr_20549_20573 = state_20538__$1;
(statearr_20549_20573[(2)] = null);

(statearr_20549_20573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (9))){
var inst_20518 = (state_20538[(8)]);
var state_20538__$1 = state_20538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20538__$1,(11),out,inst_20518);
} else {
if((state_val_20539 === (5))){
var inst_20518 = (state_20538[(8)]);
var inst_20515 = (state_20538[(7)]);
var inst_20522 = cljs.core._EQ_.call(null,inst_20518,inst_20515);
var state_20538__$1 = state_20538;
if(inst_20522){
var statearr_20551_20574 = state_20538__$1;
(statearr_20551_20574[(1)] = (8));

} else {
var statearr_20552_20575 = state_20538__$1;
(statearr_20552_20575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (10))){
var inst_20530 = (state_20538[(2)]);
var state_20538__$1 = state_20538;
var statearr_20553_20576 = state_20538__$1;
(statearr_20553_20576[(2)] = inst_20530);

(statearr_20553_20576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20539 === (8))){
var inst_20515 = (state_20538[(7)]);
var tmp20550 = inst_20515;
var inst_20515__$1 = tmp20550;
var state_20538__$1 = (function (){var statearr_20554 = state_20538;
(statearr_20554[(7)] = inst_20515__$1);

return statearr_20554;
})();
var statearr_20555_20577 = state_20538__$1;
(statearr_20555_20577[(2)] = null);

(statearr_20555_20577[(1)] = (2));


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
});})(c__8399__auto___20567,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20567,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20559[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20559[(1)] = (1));

return statearr_20559;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20538){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20560){if((e20560 instanceof Object)){
var ex__8338__auto__ = e20560;
var statearr_20561_20578 = state_20538;
(statearr_20561_20578[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20579 = state_20538;
state_20538 = G__20579;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20567,out))
})();
var state__8401__auto__ = (function (){var statearr_20562 = f__8400__auto__.call(null);
(statearr_20562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20567);

return statearr_20562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20567,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20580 = [];
var len__6152__auto___20650 = arguments.length;
var i__6153__auto___20651 = (0);
while(true){
if((i__6153__auto___20651 < len__6152__auto___20650)){
args20580.push((arguments[i__6153__auto___20651]));

var G__20652 = (i__6153__auto___20651 + (1));
i__6153__auto___20651 = G__20652;
continue;
} else {
}
break;
}

var G__20582 = args20580.length;
switch (G__20582) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20580.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20654,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20654,out){
return (function (state_20620){
var state_val_20621 = (state_20620[(1)]);
if((state_val_20621 === (7))){
var inst_20616 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
var statearr_20622_20655 = state_20620__$1;
(statearr_20622_20655[(2)] = inst_20616);

(statearr_20622_20655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (1))){
var inst_20583 = (new Array(n));
var inst_20584 = inst_20583;
var inst_20585 = (0);
var state_20620__$1 = (function (){var statearr_20623 = state_20620;
(statearr_20623[(7)] = inst_20584);

(statearr_20623[(8)] = inst_20585);

return statearr_20623;
})();
var statearr_20624_20656 = state_20620__$1;
(statearr_20624_20656[(2)] = null);

(statearr_20624_20656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (4))){
var inst_20588 = (state_20620[(9)]);
var inst_20588__$1 = (state_20620[(2)]);
var inst_20589 = (inst_20588__$1 == null);
var inst_20590 = cljs.core.not.call(null,inst_20589);
var state_20620__$1 = (function (){var statearr_20625 = state_20620;
(statearr_20625[(9)] = inst_20588__$1);

return statearr_20625;
})();
if(inst_20590){
var statearr_20626_20657 = state_20620__$1;
(statearr_20626_20657[(1)] = (5));

} else {
var statearr_20627_20658 = state_20620__$1;
(statearr_20627_20658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (15))){
var inst_20610 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
var statearr_20628_20659 = state_20620__$1;
(statearr_20628_20659[(2)] = inst_20610);

(statearr_20628_20659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (13))){
var state_20620__$1 = state_20620;
var statearr_20629_20660 = state_20620__$1;
(statearr_20629_20660[(2)] = null);

(statearr_20629_20660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (6))){
var inst_20585 = (state_20620[(8)]);
var inst_20606 = (inst_20585 > (0));
var state_20620__$1 = state_20620;
if(cljs.core.truth_(inst_20606)){
var statearr_20630_20661 = state_20620__$1;
(statearr_20630_20661[(1)] = (12));

} else {
var statearr_20631_20662 = state_20620__$1;
(statearr_20631_20662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (3))){
var inst_20618 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20620__$1,inst_20618);
} else {
if((state_val_20621 === (12))){
var inst_20584 = (state_20620[(7)]);
var inst_20608 = cljs.core.vec.call(null,inst_20584);
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20620__$1,(15),out,inst_20608);
} else {
if((state_val_20621 === (2))){
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20620__$1,(4),ch);
} else {
if((state_val_20621 === (11))){
var inst_20600 = (state_20620[(2)]);
var inst_20601 = (new Array(n));
var inst_20584 = inst_20601;
var inst_20585 = (0);
var state_20620__$1 = (function (){var statearr_20632 = state_20620;
(statearr_20632[(7)] = inst_20584);

(statearr_20632[(10)] = inst_20600);

(statearr_20632[(8)] = inst_20585);

return statearr_20632;
})();
var statearr_20633_20663 = state_20620__$1;
(statearr_20633_20663[(2)] = null);

(statearr_20633_20663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (9))){
var inst_20584 = (state_20620[(7)]);
var inst_20598 = cljs.core.vec.call(null,inst_20584);
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20620__$1,(11),out,inst_20598);
} else {
if((state_val_20621 === (5))){
var inst_20584 = (state_20620[(7)]);
var inst_20593 = (state_20620[(11)]);
var inst_20588 = (state_20620[(9)]);
var inst_20585 = (state_20620[(8)]);
var inst_20592 = (inst_20584[inst_20585] = inst_20588);
var inst_20593__$1 = (inst_20585 + (1));
var inst_20594 = (inst_20593__$1 < n);
var state_20620__$1 = (function (){var statearr_20634 = state_20620;
(statearr_20634[(11)] = inst_20593__$1);

(statearr_20634[(12)] = inst_20592);

return statearr_20634;
})();
if(cljs.core.truth_(inst_20594)){
var statearr_20635_20664 = state_20620__$1;
(statearr_20635_20664[(1)] = (8));

} else {
var statearr_20636_20665 = state_20620__$1;
(statearr_20636_20665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (14))){
var inst_20613 = (state_20620[(2)]);
var inst_20614 = cljs.core.async.close_BANG_.call(null,out);
var state_20620__$1 = (function (){var statearr_20638 = state_20620;
(statearr_20638[(13)] = inst_20613);

return statearr_20638;
})();
var statearr_20639_20666 = state_20620__$1;
(statearr_20639_20666[(2)] = inst_20614);

(statearr_20639_20666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (10))){
var inst_20604 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
var statearr_20640_20667 = state_20620__$1;
(statearr_20640_20667[(2)] = inst_20604);

(statearr_20640_20667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (8))){
var inst_20584 = (state_20620[(7)]);
var inst_20593 = (state_20620[(11)]);
var tmp20637 = inst_20584;
var inst_20584__$1 = tmp20637;
var inst_20585 = inst_20593;
var state_20620__$1 = (function (){var statearr_20641 = state_20620;
(statearr_20641[(7)] = inst_20584__$1);

(statearr_20641[(8)] = inst_20585);

return statearr_20641;
})();
var statearr_20642_20668 = state_20620__$1;
(statearr_20642_20668[(2)] = null);

(statearr_20642_20668[(1)] = (2));


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
});})(c__8399__auto___20654,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20654,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20646[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20646[(1)] = (1));

return statearr_20646;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20620){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20647){if((e20647 instanceof Object)){
var ex__8338__auto__ = e20647;
var statearr_20648_20669 = state_20620;
(statearr_20648_20669[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20670 = state_20620;
state_20620 = G__20670;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20654,out))
})();
var state__8401__auto__ = (function (){var statearr_20649 = f__8400__auto__.call(null);
(statearr_20649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20654);

return statearr_20649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20654,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20671 = [];
var len__6152__auto___20745 = arguments.length;
var i__6153__auto___20746 = (0);
while(true){
if((i__6153__auto___20746 < len__6152__auto___20745)){
args20671.push((arguments[i__6153__auto___20746]));

var G__20747 = (i__6153__auto___20746 + (1));
i__6153__auto___20746 = G__20747;
continue;
} else {
}
break;
}

var G__20673 = args20671.length;
switch (G__20673) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20671.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20749,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20749,out){
return (function (state_20715){
var state_val_20716 = (state_20715[(1)]);
if((state_val_20716 === (7))){
var inst_20711 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20717_20750 = state_20715__$1;
(statearr_20717_20750[(2)] = inst_20711);

(statearr_20717_20750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (1))){
var inst_20674 = [];
var inst_20675 = inst_20674;
var inst_20676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20715__$1 = (function (){var statearr_20718 = state_20715;
(statearr_20718[(7)] = inst_20675);

(statearr_20718[(8)] = inst_20676);

return statearr_20718;
})();
var statearr_20719_20751 = state_20715__$1;
(statearr_20719_20751[(2)] = null);

(statearr_20719_20751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (4))){
var inst_20679 = (state_20715[(9)]);
var inst_20679__$1 = (state_20715[(2)]);
var inst_20680 = (inst_20679__$1 == null);
var inst_20681 = cljs.core.not.call(null,inst_20680);
var state_20715__$1 = (function (){var statearr_20720 = state_20715;
(statearr_20720[(9)] = inst_20679__$1);

return statearr_20720;
})();
if(inst_20681){
var statearr_20721_20752 = state_20715__$1;
(statearr_20721_20752[(1)] = (5));

} else {
var statearr_20722_20753 = state_20715__$1;
(statearr_20722_20753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (15))){
var inst_20705 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20723_20754 = state_20715__$1;
(statearr_20723_20754[(2)] = inst_20705);

(statearr_20723_20754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (13))){
var state_20715__$1 = state_20715;
var statearr_20724_20755 = state_20715__$1;
(statearr_20724_20755[(2)] = null);

(statearr_20724_20755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (6))){
var inst_20675 = (state_20715[(7)]);
var inst_20700 = inst_20675.length;
var inst_20701 = (inst_20700 > (0));
var state_20715__$1 = state_20715;
if(cljs.core.truth_(inst_20701)){
var statearr_20725_20756 = state_20715__$1;
(statearr_20725_20756[(1)] = (12));

} else {
var statearr_20726_20757 = state_20715__$1;
(statearr_20726_20757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (3))){
var inst_20713 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20715__$1,inst_20713);
} else {
if((state_val_20716 === (12))){
var inst_20675 = (state_20715[(7)]);
var inst_20703 = cljs.core.vec.call(null,inst_20675);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20715__$1,(15),out,inst_20703);
} else {
if((state_val_20716 === (2))){
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20715__$1,(4),ch);
} else {
if((state_val_20716 === (11))){
var inst_20679 = (state_20715[(9)]);
var inst_20683 = (state_20715[(10)]);
var inst_20693 = (state_20715[(2)]);
var inst_20694 = [];
var inst_20695 = inst_20694.push(inst_20679);
var inst_20675 = inst_20694;
var inst_20676 = inst_20683;
var state_20715__$1 = (function (){var statearr_20727 = state_20715;
(statearr_20727[(11)] = inst_20693);

(statearr_20727[(7)] = inst_20675);

(statearr_20727[(8)] = inst_20676);

(statearr_20727[(12)] = inst_20695);

return statearr_20727;
})();
var statearr_20728_20758 = state_20715__$1;
(statearr_20728_20758[(2)] = null);

(statearr_20728_20758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (9))){
var inst_20675 = (state_20715[(7)]);
var inst_20691 = cljs.core.vec.call(null,inst_20675);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20715__$1,(11),out,inst_20691);
} else {
if((state_val_20716 === (5))){
var inst_20679 = (state_20715[(9)]);
var inst_20676 = (state_20715[(8)]);
var inst_20683 = (state_20715[(10)]);
var inst_20683__$1 = f.call(null,inst_20679);
var inst_20684 = cljs.core._EQ_.call(null,inst_20683__$1,inst_20676);
var inst_20685 = cljs.core.keyword_identical_QMARK_.call(null,inst_20676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20686 = (inst_20684) || (inst_20685);
var state_20715__$1 = (function (){var statearr_20729 = state_20715;
(statearr_20729[(10)] = inst_20683__$1);

return statearr_20729;
})();
if(cljs.core.truth_(inst_20686)){
var statearr_20730_20759 = state_20715__$1;
(statearr_20730_20759[(1)] = (8));

} else {
var statearr_20731_20760 = state_20715__$1;
(statearr_20731_20760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (14))){
var inst_20708 = (state_20715[(2)]);
var inst_20709 = cljs.core.async.close_BANG_.call(null,out);
var state_20715__$1 = (function (){var statearr_20733 = state_20715;
(statearr_20733[(13)] = inst_20708);

return statearr_20733;
})();
var statearr_20734_20761 = state_20715__$1;
(statearr_20734_20761[(2)] = inst_20709);

(statearr_20734_20761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (10))){
var inst_20698 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20735_20762 = state_20715__$1;
(statearr_20735_20762[(2)] = inst_20698);

(statearr_20735_20762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (8))){
var inst_20679 = (state_20715[(9)]);
var inst_20675 = (state_20715[(7)]);
var inst_20683 = (state_20715[(10)]);
var inst_20688 = inst_20675.push(inst_20679);
var tmp20732 = inst_20675;
var inst_20675__$1 = tmp20732;
var inst_20676 = inst_20683;
var state_20715__$1 = (function (){var statearr_20736 = state_20715;
(statearr_20736[(14)] = inst_20688);

(statearr_20736[(7)] = inst_20675__$1);

(statearr_20736[(8)] = inst_20676);

return statearr_20736;
})();
var statearr_20737_20763 = state_20715__$1;
(statearr_20737_20763[(2)] = null);

(statearr_20737_20763[(1)] = (2));


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
});})(c__8399__auto___20749,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20749,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20741[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20741[(1)] = (1));

return statearr_20741;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20715){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20742){if((e20742 instanceof Object)){
var ex__8338__auto__ = e20742;
var statearr_20743_20764 = state_20715;
(statearr_20743_20764[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20765 = state_20715;
state_20715 = G__20765;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20749,out))
})();
var state__8401__auto__ = (function (){var statearr_20744 = f__8400__auto__.call(null);
(statearr_20744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20749);

return statearr_20744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20749,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map