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
if(typeof cljs.core.async.t_cljs$core$async18036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18036 = (function (fn_handler,f,meta18037){
this.fn_handler = fn_handler;
this.f = f;
this.meta18037 = meta18037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18038,meta18037__$1){
var self__ = this;
var _18038__$1 = this;
return (new cljs.core.async.t_cljs$core$async18036(self__.fn_handler,self__.f,meta18037__$1));
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18038){
var self__ = this;
var _18038__$1 = this;
return self__.meta18037;
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta18037","meta18037",613595759,null)], null);
});

cljs.core.async.t_cljs$core$async18036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18036";

cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18036");
});

cljs.core.async.__GT_t_cljs$core$async18036 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async18036(fn_handler__$1,f__$1,meta18037){
return (new cljs.core.async.t_cljs$core$async18036(fn_handler__$1,f__$1,meta18037));
});

}

return (new cljs.core.async.t_cljs$core$async18036(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args18041 = [];
var len__6152__auto___18044 = arguments.length;
var i__6153__auto___18045 = (0);
while(true){
if((i__6153__auto___18045 < len__6152__auto___18044)){
args18041.push((arguments[i__6153__auto___18045]));

var G__18046 = (i__6153__auto___18045 + (1));
i__6153__auto___18045 = G__18046;
continue;
} else {
}
break;
}

var G__18043 = args18041.length;
switch (G__18043) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18041.length)].join('')));

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
var args18048 = [];
var len__6152__auto___18051 = arguments.length;
var i__6153__auto___18052 = (0);
while(true){
if((i__6153__auto___18052 < len__6152__auto___18051)){
args18048.push((arguments[i__6153__auto___18052]));

var G__18053 = (i__6153__auto___18052 + (1));
i__6153__auto___18052 = G__18053;
continue;
} else {
}
break;
}

var G__18050 = args18048.length;
switch (G__18050) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18048.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18055 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18055);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18055,ret){
return (function (){
return fn1.call(null,val_18055);
});})(val_18055,ret))
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
var args18056 = [];
var len__6152__auto___18059 = arguments.length;
var i__6153__auto___18060 = (0);
while(true){
if((i__6153__auto___18060 < len__6152__auto___18059)){
args18056.push((arguments[i__6153__auto___18060]));

var G__18061 = (i__6153__auto___18060 + (1));
i__6153__auto___18060 = G__18061;
continue;
} else {
}
break;
}

var G__18058 = args18056.length;
switch (G__18058) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18056.length)].join('')));

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
var n__5997__auto___18063 = n;
var x_18064 = (0);
while(true){
if((x_18064 < n__5997__auto___18063)){
(a[x_18064] = (0));

var G__18065 = (x_18064 + (1));
x_18064 = G__18065;
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

var G__18066 = (i + (1));
i = G__18066;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18070 = (function (alt_flag,flag,meta18071){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18071 = meta18071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18072,meta18071__$1){
var self__ = this;
var _18072__$1 = this;
return (new cljs.core.async.t_cljs$core$async18070(self__.alt_flag,self__.flag,meta18071__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18072){
var self__ = this;
var _18072__$1 = this;
return self__.meta18071;
});})(flag))
;

cljs.core.async.t_cljs$core$async18070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18070.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18071","meta18071",957187935,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18070";

cljs.core.async.t_cljs$core$async18070.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18070");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18070 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18070(alt_flag__$1,flag__$1,meta18071){
return (new cljs.core.async.t_cljs$core$async18070(alt_flag__$1,flag__$1,meta18071));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18070(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18076 = (function (alt_handler,flag,cb,meta18077){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18077 = meta18077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18078,meta18077__$1){
var self__ = this;
var _18078__$1 = this;
return (new cljs.core.async.t_cljs$core$async18076(self__.alt_handler,self__.flag,self__.cb,meta18077__$1));
});

cljs.core.async.t_cljs$core$async18076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18078){
var self__ = this;
var _18078__$1 = this;
return self__.meta18077;
});

cljs.core.async.t_cljs$core$async18076.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18077","meta18077",-1706854079,null)], null);
});

cljs.core.async.t_cljs$core$async18076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18076";

cljs.core.async.t_cljs$core$async18076.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18076");
});

cljs.core.async.__GT_t_cljs$core$async18076 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18076(alt_handler__$1,flag__$1,cb__$1,meta18077){
return (new cljs.core.async.t_cljs$core$async18076(alt_handler__$1,flag__$1,cb__$1,meta18077));
});

}

return (new cljs.core.async.t_cljs$core$async18076(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18079_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18080_SHARP_,port], null));
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
var G__18081 = (i + (1));
i = G__18081;
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
var len__6152__auto___18087 = arguments.length;
var i__6153__auto___18088 = (0);
while(true){
if((i__6153__auto___18088 < len__6152__auto___18087)){
args__6159__auto__.push((arguments[i__6153__auto___18088]));

var G__18089 = (i__6153__auto___18088 + (1));
i__6153__auto___18088 = G__18089;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18084){
var map__18085 = p__18084;
var map__18085__$1 = ((((!((map__18085 == null)))?((((map__18085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18085):map__18085);
var opts = map__18085__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18082){
var G__18083 = cljs.core.first.call(null,seq18082);
var seq18082__$1 = cljs.core.next.call(null,seq18082);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18083,seq18082__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18090 = [];
var len__6152__auto___18140 = arguments.length;
var i__6153__auto___18141 = (0);
while(true){
if((i__6153__auto___18141 < len__6152__auto___18140)){
args18090.push((arguments[i__6153__auto___18141]));

var G__18142 = (i__6153__auto___18141 + (1));
i__6153__auto___18141 = G__18142;
continue;
} else {
}
break;
}

var G__18092 = args18090.length;
switch (G__18092) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18090.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8399__auto___18144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18144){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18144){
return (function (state_18116){
var state_val_18117 = (state_18116[(1)]);
if((state_val_18117 === (7))){
var inst_18112 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18118_18145 = state_18116__$1;
(statearr_18118_18145[(2)] = inst_18112);

(statearr_18118_18145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (1))){
var state_18116__$1 = state_18116;
var statearr_18119_18146 = state_18116__$1;
(statearr_18119_18146[(2)] = null);

(statearr_18119_18146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (4))){
var inst_18095 = (state_18116[(7)]);
var inst_18095__$1 = (state_18116[(2)]);
var inst_18096 = (inst_18095__$1 == null);
var state_18116__$1 = (function (){var statearr_18120 = state_18116;
(statearr_18120[(7)] = inst_18095__$1);

return statearr_18120;
})();
if(cljs.core.truth_(inst_18096)){
var statearr_18121_18147 = state_18116__$1;
(statearr_18121_18147[(1)] = (5));

} else {
var statearr_18122_18148 = state_18116__$1;
(statearr_18122_18148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (13))){
var state_18116__$1 = state_18116;
var statearr_18123_18149 = state_18116__$1;
(statearr_18123_18149[(2)] = null);

(statearr_18123_18149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (6))){
var inst_18095 = (state_18116[(7)]);
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18116__$1,(11),to,inst_18095);
} else {
if((state_val_18117 === (3))){
var inst_18114 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18116__$1,inst_18114);
} else {
if((state_val_18117 === (12))){
var state_18116__$1 = state_18116;
var statearr_18124_18150 = state_18116__$1;
(statearr_18124_18150[(2)] = null);

(statearr_18124_18150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (2))){
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18116__$1,(4),from);
} else {
if((state_val_18117 === (11))){
var inst_18105 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
if(cljs.core.truth_(inst_18105)){
var statearr_18125_18151 = state_18116__$1;
(statearr_18125_18151[(1)] = (12));

} else {
var statearr_18126_18152 = state_18116__$1;
(statearr_18126_18152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (9))){
var state_18116__$1 = state_18116;
var statearr_18127_18153 = state_18116__$1;
(statearr_18127_18153[(2)] = null);

(statearr_18127_18153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (5))){
var state_18116__$1 = state_18116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18128_18154 = state_18116__$1;
(statearr_18128_18154[(1)] = (8));

} else {
var statearr_18129_18155 = state_18116__$1;
(statearr_18129_18155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (14))){
var inst_18110 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18130_18156 = state_18116__$1;
(statearr_18130_18156[(2)] = inst_18110);

(statearr_18130_18156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (10))){
var inst_18102 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18131_18157 = state_18116__$1;
(statearr_18131_18157[(2)] = inst_18102);

(statearr_18131_18157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (8))){
var inst_18099 = cljs.core.async.close_BANG_.call(null,to);
var state_18116__$1 = state_18116;
var statearr_18132_18158 = state_18116__$1;
(statearr_18132_18158[(2)] = inst_18099);

(statearr_18132_18158[(1)] = (10));


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
});})(c__8399__auto___18144))
;
return ((function (switch__8334__auto__,c__8399__auto___18144){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18136 = [null,null,null,null,null,null,null,null];
(statearr_18136[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18136[(1)] = (1));

return statearr_18136;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18116){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18137){if((e18137 instanceof Object)){
var ex__8338__auto__ = e18137;
var statearr_18138_18159 = state_18116;
(statearr_18138_18159[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18160 = state_18116;
state_18116 = G__18160;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18144))
})();
var state__8401__auto__ = (function (){var statearr_18139 = f__8400__auto__.call(null);
(statearr_18139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18144);

return statearr_18139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18144))
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
return (function (p__18344){
var vec__18345 = p__18344;
var v = cljs.core.nth.call(null,vec__18345,(0),null);
var p = cljs.core.nth.call(null,vec__18345,(1),null);
var job = vec__18345;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8399__auto___18527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results){
return (function (state_18350){
var state_val_18351 = (state_18350[(1)]);
if((state_val_18351 === (1))){
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18350__$1,(2),res,v);
} else {
if((state_val_18351 === (2))){
var inst_18347 = (state_18350[(2)]);
var inst_18348 = cljs.core.async.close_BANG_.call(null,res);
var state_18350__$1 = (function (){var statearr_18352 = state_18350;
(statearr_18352[(7)] = inst_18347);

return statearr_18352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18350__$1,inst_18348);
} else {
return null;
}
}
});})(c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results))
;
return ((function (switch__8334__auto__,c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18356 = [null,null,null,null,null,null,null,null];
(statearr_18356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18356[(1)] = (1));

return statearr_18356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18350){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18357){if((e18357 instanceof Object)){
var ex__8338__auto__ = e18357;
var statearr_18358_18528 = state_18350;
(statearr_18358_18528[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_18350;
state_18350 = G__18529;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results))
})();
var state__8401__auto__ = (function (){var statearr_18359 = f__8400__auto__.call(null);
(statearr_18359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18527);

return statearr_18359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18527,res,vec__18345,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18360){
var vec__18361 = p__18360;
var v = cljs.core.nth.call(null,vec__18361,(0),null);
var p = cljs.core.nth.call(null,vec__18361,(1),null);
var job = vec__18361;
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
var n__5997__auto___18530 = n;
var __18531 = (0);
while(true){
if((__18531 < n__5997__auto___18530)){
var G__18362_18532 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18362_18532) {
case "compute":
var c__8399__auto___18534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18531,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18531,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function (state_18375){
var state_val_18376 = (state_18375[(1)]);
if((state_val_18376 === (1))){
var state_18375__$1 = state_18375;
var statearr_18377_18535 = state_18375__$1;
(statearr_18377_18535[(2)] = null);

(statearr_18377_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (2))){
var state_18375__$1 = state_18375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18375__$1,(4),jobs);
} else {
if((state_val_18376 === (3))){
var inst_18373 = (state_18375[(2)]);
var state_18375__$1 = state_18375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18375__$1,inst_18373);
} else {
if((state_val_18376 === (4))){
var inst_18365 = (state_18375[(2)]);
var inst_18366 = process.call(null,inst_18365);
var state_18375__$1 = state_18375;
if(cljs.core.truth_(inst_18366)){
var statearr_18378_18536 = state_18375__$1;
(statearr_18378_18536[(1)] = (5));

} else {
var statearr_18379_18537 = state_18375__$1;
(statearr_18379_18537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (5))){
var state_18375__$1 = state_18375;
var statearr_18380_18538 = state_18375__$1;
(statearr_18380_18538[(2)] = null);

(statearr_18380_18538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (6))){
var state_18375__$1 = state_18375;
var statearr_18381_18539 = state_18375__$1;
(statearr_18381_18539[(2)] = null);

(statearr_18381_18539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18376 === (7))){
var inst_18371 = (state_18375[(2)]);
var state_18375__$1 = state_18375;
var statearr_18382_18540 = state_18375__$1;
(statearr_18382_18540[(2)] = inst_18371);

(statearr_18382_18540[(1)] = (3));


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
});})(__18531,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
;
return ((function (__18531,switch__8334__auto__,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18386 = [null,null,null,null,null,null,null];
(statearr_18386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18386[(1)] = (1));

return statearr_18386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18375){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18387){if((e18387 instanceof Object)){
var ex__8338__auto__ = e18387;
var statearr_18388_18541 = state_18375;
(statearr_18388_18541[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18542 = state_18375;
state_18375 = G__18542;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18531,switch__8334__auto__,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18389 = f__8400__auto__.call(null);
(statearr_18389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18534);

return statearr_18389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18531,c__8399__auto___18534,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
);


break;
case "async":
var c__8399__auto___18543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18531,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (__18531,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function (state_18402){
var state_val_18403 = (state_18402[(1)]);
if((state_val_18403 === (1))){
var state_18402__$1 = state_18402;
var statearr_18404_18544 = state_18402__$1;
(statearr_18404_18544[(2)] = null);

(statearr_18404_18544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18403 === (2))){
var state_18402__$1 = state_18402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18402__$1,(4),jobs);
} else {
if((state_val_18403 === (3))){
var inst_18400 = (state_18402[(2)]);
var state_18402__$1 = state_18402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18402__$1,inst_18400);
} else {
if((state_val_18403 === (4))){
var inst_18392 = (state_18402[(2)]);
var inst_18393 = async.call(null,inst_18392);
var state_18402__$1 = state_18402;
if(cljs.core.truth_(inst_18393)){
var statearr_18405_18545 = state_18402__$1;
(statearr_18405_18545[(1)] = (5));

} else {
var statearr_18406_18546 = state_18402__$1;
(statearr_18406_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18403 === (5))){
var state_18402__$1 = state_18402;
var statearr_18407_18547 = state_18402__$1;
(statearr_18407_18547[(2)] = null);

(statearr_18407_18547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18403 === (6))){
var state_18402__$1 = state_18402;
var statearr_18408_18548 = state_18402__$1;
(statearr_18408_18548[(2)] = null);

(statearr_18408_18548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18403 === (7))){
var inst_18398 = (state_18402[(2)]);
var state_18402__$1 = state_18402;
var statearr_18409_18549 = state_18402__$1;
(statearr_18409_18549[(2)] = inst_18398);

(statearr_18409_18549[(1)] = (3));


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
});})(__18531,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
;
return ((function (__18531,switch__8334__auto__,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18413 = [null,null,null,null,null,null,null];
(statearr_18413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18413[(1)] = (1));

return statearr_18413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18402){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18414){if((e18414 instanceof Object)){
var ex__8338__auto__ = e18414;
var statearr_18415_18550 = state_18402;
(statearr_18415_18550[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18551 = state_18402;
state_18402 = G__18551;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(__18531,switch__8334__auto__,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18416 = f__8400__auto__.call(null);
(statearr_18416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18543);

return statearr_18416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(__18531,c__8399__auto___18543,G__18362_18532,n__5997__auto___18530,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18552 = (__18531 + (1));
__18531 = G__18552;
continue;
} else {
}
break;
}

var c__8399__auto___18553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18553,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18553,jobs,results,process,async){
return (function (state_18438){
var state_val_18439 = (state_18438[(1)]);
if((state_val_18439 === (1))){
var state_18438__$1 = state_18438;
var statearr_18440_18554 = state_18438__$1;
(statearr_18440_18554[(2)] = null);

(statearr_18440_18554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18439 === (2))){
var state_18438__$1 = state_18438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18438__$1,(4),from);
} else {
if((state_val_18439 === (3))){
var inst_18436 = (state_18438[(2)]);
var state_18438__$1 = state_18438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18438__$1,inst_18436);
} else {
if((state_val_18439 === (4))){
var inst_18419 = (state_18438[(7)]);
var inst_18419__$1 = (state_18438[(2)]);
var inst_18420 = (inst_18419__$1 == null);
var state_18438__$1 = (function (){var statearr_18441 = state_18438;
(statearr_18441[(7)] = inst_18419__$1);

return statearr_18441;
})();
if(cljs.core.truth_(inst_18420)){
var statearr_18442_18555 = state_18438__$1;
(statearr_18442_18555[(1)] = (5));

} else {
var statearr_18443_18556 = state_18438__$1;
(statearr_18443_18556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18439 === (5))){
var inst_18422 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18438__$1 = state_18438;
var statearr_18444_18557 = state_18438__$1;
(statearr_18444_18557[(2)] = inst_18422);

(statearr_18444_18557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18439 === (6))){
var inst_18424 = (state_18438[(8)]);
var inst_18419 = (state_18438[(7)]);
var inst_18424__$1 = cljs.core.async.chan.call(null,(1));
var inst_18425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18426 = [inst_18419,inst_18424__$1];
var inst_18427 = (new cljs.core.PersistentVector(null,2,(5),inst_18425,inst_18426,null));
var state_18438__$1 = (function (){var statearr_18445 = state_18438;
(statearr_18445[(8)] = inst_18424__$1);

return statearr_18445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18438__$1,(8),jobs,inst_18427);
} else {
if((state_val_18439 === (7))){
var inst_18434 = (state_18438[(2)]);
var state_18438__$1 = state_18438;
var statearr_18446_18558 = state_18438__$1;
(statearr_18446_18558[(2)] = inst_18434);

(statearr_18446_18558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18439 === (8))){
var inst_18424 = (state_18438[(8)]);
var inst_18429 = (state_18438[(2)]);
var state_18438__$1 = (function (){var statearr_18447 = state_18438;
(statearr_18447[(9)] = inst_18429);

return statearr_18447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18438__$1,(9),results,inst_18424);
} else {
if((state_val_18439 === (9))){
var inst_18431 = (state_18438[(2)]);
var state_18438__$1 = (function (){var statearr_18448 = state_18438;
(statearr_18448[(10)] = inst_18431);

return statearr_18448;
})();
var statearr_18449_18559 = state_18438__$1;
(statearr_18449_18559[(2)] = null);

(statearr_18449_18559[(1)] = (2));


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
});})(c__8399__auto___18553,jobs,results,process,async))
;
return ((function (switch__8334__auto__,c__8399__auto___18553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0 = (function (){
var statearr_18453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18453[(1)] = (1));

return statearr_18453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18438){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18454){if((e18454 instanceof Object)){
var ex__8338__auto__ = e18454;
var statearr_18455_18560 = state_18438;
(statearr_18455_18560[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18561 = state_18438;
state_18438 = G__18561;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18553,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18456 = f__8400__auto__.call(null);
(statearr_18456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18553);

return statearr_18456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18553,jobs,results,process,async))
);


var c__8399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto__,jobs,results,process,async){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto__,jobs,results,process,async){
return (function (state_18494){
var state_val_18495 = (state_18494[(1)]);
if((state_val_18495 === (7))){
var inst_18490 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
var statearr_18496_18562 = state_18494__$1;
(statearr_18496_18562[(2)] = inst_18490);

(statearr_18496_18562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (20))){
var state_18494__$1 = state_18494;
var statearr_18497_18563 = state_18494__$1;
(statearr_18497_18563[(2)] = null);

(statearr_18497_18563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (1))){
var state_18494__$1 = state_18494;
var statearr_18498_18564 = state_18494__$1;
(statearr_18498_18564[(2)] = null);

(statearr_18498_18564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (4))){
var inst_18459 = (state_18494[(7)]);
var inst_18459__$1 = (state_18494[(2)]);
var inst_18460 = (inst_18459__$1 == null);
var state_18494__$1 = (function (){var statearr_18499 = state_18494;
(statearr_18499[(7)] = inst_18459__$1);

return statearr_18499;
})();
if(cljs.core.truth_(inst_18460)){
var statearr_18500_18565 = state_18494__$1;
(statearr_18500_18565[(1)] = (5));

} else {
var statearr_18501_18566 = state_18494__$1;
(statearr_18501_18566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (15))){
var inst_18472 = (state_18494[(8)]);
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18494__$1,(18),to,inst_18472);
} else {
if((state_val_18495 === (21))){
var inst_18485 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
var statearr_18502_18567 = state_18494__$1;
(statearr_18502_18567[(2)] = inst_18485);

(statearr_18502_18567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (13))){
var inst_18487 = (state_18494[(2)]);
var state_18494__$1 = (function (){var statearr_18503 = state_18494;
(statearr_18503[(9)] = inst_18487);

return statearr_18503;
})();
var statearr_18504_18568 = state_18494__$1;
(statearr_18504_18568[(2)] = null);

(statearr_18504_18568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (6))){
var inst_18459 = (state_18494[(7)]);
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18494__$1,(11),inst_18459);
} else {
if((state_val_18495 === (17))){
var inst_18480 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
if(cljs.core.truth_(inst_18480)){
var statearr_18505_18569 = state_18494__$1;
(statearr_18505_18569[(1)] = (19));

} else {
var statearr_18506_18570 = state_18494__$1;
(statearr_18506_18570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (3))){
var inst_18492 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18494__$1,inst_18492);
} else {
if((state_val_18495 === (12))){
var inst_18469 = (state_18494[(10)]);
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18494__$1,(14),inst_18469);
} else {
if((state_val_18495 === (2))){
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18494__$1,(4),results);
} else {
if((state_val_18495 === (19))){
var state_18494__$1 = state_18494;
var statearr_18507_18571 = state_18494__$1;
(statearr_18507_18571[(2)] = null);

(statearr_18507_18571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (11))){
var inst_18469 = (state_18494[(2)]);
var state_18494__$1 = (function (){var statearr_18508 = state_18494;
(statearr_18508[(10)] = inst_18469);

return statearr_18508;
})();
var statearr_18509_18572 = state_18494__$1;
(statearr_18509_18572[(2)] = null);

(statearr_18509_18572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (9))){
var state_18494__$1 = state_18494;
var statearr_18510_18573 = state_18494__$1;
(statearr_18510_18573[(2)] = null);

(statearr_18510_18573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (5))){
var state_18494__$1 = state_18494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18511_18574 = state_18494__$1;
(statearr_18511_18574[(1)] = (8));

} else {
var statearr_18512_18575 = state_18494__$1;
(statearr_18512_18575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (14))){
var inst_18474 = (state_18494[(11)]);
var inst_18472 = (state_18494[(8)]);
var inst_18472__$1 = (state_18494[(2)]);
var inst_18473 = (inst_18472__$1 == null);
var inst_18474__$1 = cljs.core.not.call(null,inst_18473);
var state_18494__$1 = (function (){var statearr_18513 = state_18494;
(statearr_18513[(11)] = inst_18474__$1);

(statearr_18513[(8)] = inst_18472__$1);

return statearr_18513;
})();
if(inst_18474__$1){
var statearr_18514_18576 = state_18494__$1;
(statearr_18514_18576[(1)] = (15));

} else {
var statearr_18515_18577 = state_18494__$1;
(statearr_18515_18577[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (16))){
var inst_18474 = (state_18494[(11)]);
var state_18494__$1 = state_18494;
var statearr_18516_18578 = state_18494__$1;
(statearr_18516_18578[(2)] = inst_18474);

(statearr_18516_18578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (10))){
var inst_18466 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
var statearr_18517_18579 = state_18494__$1;
(statearr_18517_18579[(2)] = inst_18466);

(statearr_18517_18579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (18))){
var inst_18477 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
var statearr_18518_18580 = state_18494__$1;
(statearr_18518_18580[(2)] = inst_18477);

(statearr_18518_18580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18495 === (8))){
var inst_18463 = cljs.core.async.close_BANG_.call(null,to);
var state_18494__$1 = state_18494;
var statearr_18519_18581 = state_18494__$1;
(statearr_18519_18581[(2)] = inst_18463);

(statearr_18519_18581[(1)] = (10));


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
var statearr_18523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__);

(statearr_18523[(1)] = (1));

return statearr_18523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1 = (function (state_18494){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18524){if((e18524 instanceof Object)){
var ex__8338__auto__ = e18524;
var statearr_18525_18582 = state_18494;
(statearr_18525_18582[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18583 = state_18494;
state_18494 = G__18583;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__ = function(state_18494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1.call(this,state_18494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__,jobs,results,process,async))
})();
var state__8401__auto__ = (function (){var statearr_18526 = f__8400__auto__.call(null);
(statearr_18526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18526;
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
var args18584 = [];
var len__6152__auto___18587 = arguments.length;
var i__6153__auto___18588 = (0);
while(true){
if((i__6153__auto___18588 < len__6152__auto___18587)){
args18584.push((arguments[i__6153__auto___18588]));

var G__18589 = (i__6153__auto___18588 + (1));
i__6153__auto___18588 = G__18589;
continue;
} else {
}
break;
}

var G__18586 = args18584.length;
switch (G__18586) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18584.length)].join('')));

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
var args18591 = [];
var len__6152__auto___18594 = arguments.length;
var i__6153__auto___18595 = (0);
while(true){
if((i__6153__auto___18595 < len__6152__auto___18594)){
args18591.push((arguments[i__6153__auto___18595]));

var G__18596 = (i__6153__auto___18595 + (1));
i__6153__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var G__18593 = args18591.length;
switch (G__18593) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18591.length)].join('')));

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
var args18598 = [];
var len__6152__auto___18651 = arguments.length;
var i__6153__auto___18652 = (0);
while(true){
if((i__6153__auto___18652 < len__6152__auto___18651)){
args18598.push((arguments[i__6153__auto___18652]));

var G__18653 = (i__6153__auto___18652 + (1));
i__6153__auto___18652 = G__18653;
continue;
} else {
}
break;
}

var G__18600 = args18598.length;
switch (G__18600) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18598.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8399__auto___18655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___18655,tc,fc){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___18655,tc,fc){
return (function (state_18626){
var state_val_18627 = (state_18626[(1)]);
if((state_val_18627 === (7))){
var inst_18622 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18628_18656 = state_18626__$1;
(statearr_18628_18656[(2)] = inst_18622);

(statearr_18628_18656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (1))){
var state_18626__$1 = state_18626;
var statearr_18629_18657 = state_18626__$1;
(statearr_18629_18657[(2)] = null);

(statearr_18629_18657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (4))){
var inst_18603 = (state_18626[(7)]);
var inst_18603__$1 = (state_18626[(2)]);
var inst_18604 = (inst_18603__$1 == null);
var state_18626__$1 = (function (){var statearr_18630 = state_18626;
(statearr_18630[(7)] = inst_18603__$1);

return statearr_18630;
})();
if(cljs.core.truth_(inst_18604)){
var statearr_18631_18658 = state_18626__$1;
(statearr_18631_18658[(1)] = (5));

} else {
var statearr_18632_18659 = state_18626__$1;
(statearr_18632_18659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (13))){
var state_18626__$1 = state_18626;
var statearr_18633_18660 = state_18626__$1;
(statearr_18633_18660[(2)] = null);

(statearr_18633_18660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (6))){
var inst_18603 = (state_18626[(7)]);
var inst_18609 = p.call(null,inst_18603);
var state_18626__$1 = state_18626;
if(cljs.core.truth_(inst_18609)){
var statearr_18634_18661 = state_18626__$1;
(statearr_18634_18661[(1)] = (9));

} else {
var statearr_18635_18662 = state_18626__$1;
(statearr_18635_18662[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (3))){
var inst_18624 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18626__$1,inst_18624);
} else {
if((state_val_18627 === (12))){
var state_18626__$1 = state_18626;
var statearr_18636_18663 = state_18626__$1;
(statearr_18636_18663[(2)] = null);

(statearr_18636_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (2))){
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18626__$1,(4),ch);
} else {
if((state_val_18627 === (11))){
var inst_18603 = (state_18626[(7)]);
var inst_18613 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18626__$1,(8),inst_18613,inst_18603);
} else {
if((state_val_18627 === (9))){
var state_18626__$1 = state_18626;
var statearr_18637_18664 = state_18626__$1;
(statearr_18637_18664[(2)] = tc);

(statearr_18637_18664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (5))){
var inst_18606 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18607 = cljs.core.async.close_BANG_.call(null,fc);
var state_18626__$1 = (function (){var statearr_18638 = state_18626;
(statearr_18638[(8)] = inst_18606);

return statearr_18638;
})();
var statearr_18639_18665 = state_18626__$1;
(statearr_18639_18665[(2)] = inst_18607);

(statearr_18639_18665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (14))){
var inst_18620 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18640_18666 = state_18626__$1;
(statearr_18640_18666[(2)] = inst_18620);

(statearr_18640_18666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (10))){
var state_18626__$1 = state_18626;
var statearr_18641_18667 = state_18626__$1;
(statearr_18641_18667[(2)] = fc);

(statearr_18641_18667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (8))){
var inst_18615 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
if(cljs.core.truth_(inst_18615)){
var statearr_18642_18668 = state_18626__$1;
(statearr_18642_18668[(1)] = (12));

} else {
var statearr_18643_18669 = state_18626__$1;
(statearr_18643_18669[(1)] = (13));

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
});})(c__8399__auto___18655,tc,fc))
;
return ((function (switch__8334__auto__,c__8399__auto___18655,tc,fc){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_18647 = [null,null,null,null,null,null,null,null,null];
(statearr_18647[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18647[(1)] = (1));

return statearr_18647;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18626){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18648){if((e18648 instanceof Object)){
var ex__8338__auto__ = e18648;
var statearr_18649_18670 = state_18626;
(statearr_18649_18670[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18671 = state_18626;
state_18626 = G__18671;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___18655,tc,fc))
})();
var state__8401__auto__ = (function (){var statearr_18650 = f__8400__auto__.call(null);
(statearr_18650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___18655);

return statearr_18650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___18655,tc,fc))
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
return (function (state_18718){
var state_val_18719 = (state_18718[(1)]);
if((state_val_18719 === (1))){
var inst_18704 = init;
var state_18718__$1 = (function (){var statearr_18720 = state_18718;
(statearr_18720[(7)] = inst_18704);

return statearr_18720;
})();
var statearr_18721_18736 = state_18718__$1;
(statearr_18721_18736[(2)] = null);

(statearr_18721_18736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (2))){
var state_18718__$1 = state_18718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18718__$1,(4),ch);
} else {
if((state_val_18719 === (3))){
var inst_18716 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18718__$1,inst_18716);
} else {
if((state_val_18719 === (4))){
var inst_18707 = (state_18718[(8)]);
var inst_18707__$1 = (state_18718[(2)]);
var inst_18708 = (inst_18707__$1 == null);
var state_18718__$1 = (function (){var statearr_18722 = state_18718;
(statearr_18722[(8)] = inst_18707__$1);

return statearr_18722;
})();
if(cljs.core.truth_(inst_18708)){
var statearr_18723_18737 = state_18718__$1;
(statearr_18723_18737[(1)] = (5));

} else {
var statearr_18724_18738 = state_18718__$1;
(statearr_18724_18738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (5))){
var inst_18704 = (state_18718[(7)]);
var state_18718__$1 = state_18718;
var statearr_18725_18739 = state_18718__$1;
(statearr_18725_18739[(2)] = inst_18704);

(statearr_18725_18739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (6))){
var inst_18707 = (state_18718[(8)]);
var inst_18704 = (state_18718[(7)]);
var inst_18711 = f.call(null,inst_18704,inst_18707);
var inst_18704__$1 = inst_18711;
var state_18718__$1 = (function (){var statearr_18726 = state_18718;
(statearr_18726[(7)] = inst_18704__$1);

return statearr_18726;
})();
var statearr_18727_18740 = state_18718__$1;
(statearr_18727_18740[(2)] = null);

(statearr_18727_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (7))){
var inst_18714 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18728_18741 = state_18718__$1;
(statearr_18728_18741[(2)] = inst_18714);

(statearr_18728_18741[(1)] = (3));


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
var statearr_18732 = [null,null,null,null,null,null,null,null,null];
(statearr_18732[(0)] = cljs$core$async$reduce_$_state_machine__8335__auto__);

(statearr_18732[(1)] = (1));

return statearr_18732;
});
var cljs$core$async$reduce_$_state_machine__8335__auto____1 = (function (state_18718){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18733){if((e18733 instanceof Object)){
var ex__8338__auto__ = e18733;
var statearr_18734_18742 = state_18718;
(statearr_18734_18742[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18743 = state_18718;
state_18718 = G__18743;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8335__auto__ = function(state_18718){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8335__auto____1.call(this,state_18718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8335__auto____0;
cljs$core$async$reduce_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8335__auto____1;
return cljs$core$async$reduce_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_18735 = f__8400__auto__.call(null);
(statearr_18735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18735;
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
var args18744 = [];
var len__6152__auto___18796 = arguments.length;
var i__6153__auto___18797 = (0);
while(true){
if((i__6153__auto___18797 < len__6152__auto___18796)){
args18744.push((arguments[i__6153__auto___18797]));

var G__18798 = (i__6153__auto___18797 + (1));
i__6153__auto___18797 = G__18798;
continue;
} else {
}
break;
}

var G__18746 = args18744.length;
switch (G__18746) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18744.length)].join('')));

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
return (function (state_18771){
var state_val_18772 = (state_18771[(1)]);
if((state_val_18772 === (7))){
var inst_18753 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18773_18800 = state_18771__$1;
(statearr_18773_18800[(2)] = inst_18753);

(statearr_18773_18800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (1))){
var inst_18747 = cljs.core.seq.call(null,coll);
var inst_18748 = inst_18747;
var state_18771__$1 = (function (){var statearr_18774 = state_18771;
(statearr_18774[(7)] = inst_18748);

return statearr_18774;
})();
var statearr_18775_18801 = state_18771__$1;
(statearr_18775_18801[(2)] = null);

(statearr_18775_18801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (4))){
var inst_18748 = (state_18771[(7)]);
var inst_18751 = cljs.core.first.call(null,inst_18748);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18771__$1,(7),ch,inst_18751);
} else {
if((state_val_18772 === (13))){
var inst_18765 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18776_18802 = state_18771__$1;
(statearr_18776_18802[(2)] = inst_18765);

(statearr_18776_18802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (6))){
var inst_18756 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
if(cljs.core.truth_(inst_18756)){
var statearr_18777_18803 = state_18771__$1;
(statearr_18777_18803[(1)] = (8));

} else {
var statearr_18778_18804 = state_18771__$1;
(statearr_18778_18804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (3))){
var inst_18769 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18771__$1,inst_18769);
} else {
if((state_val_18772 === (12))){
var state_18771__$1 = state_18771;
var statearr_18779_18805 = state_18771__$1;
(statearr_18779_18805[(2)] = null);

(statearr_18779_18805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (2))){
var inst_18748 = (state_18771[(7)]);
var state_18771__$1 = state_18771;
if(cljs.core.truth_(inst_18748)){
var statearr_18780_18806 = state_18771__$1;
(statearr_18780_18806[(1)] = (4));

} else {
var statearr_18781_18807 = state_18771__$1;
(statearr_18781_18807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (11))){
var inst_18762 = cljs.core.async.close_BANG_.call(null,ch);
var state_18771__$1 = state_18771;
var statearr_18782_18808 = state_18771__$1;
(statearr_18782_18808[(2)] = inst_18762);

(statearr_18782_18808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (9))){
var state_18771__$1 = state_18771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18783_18809 = state_18771__$1;
(statearr_18783_18809[(1)] = (11));

} else {
var statearr_18784_18810 = state_18771__$1;
(statearr_18784_18810[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (5))){
var inst_18748 = (state_18771[(7)]);
var state_18771__$1 = state_18771;
var statearr_18785_18811 = state_18771__$1;
(statearr_18785_18811[(2)] = inst_18748);

(statearr_18785_18811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (10))){
var inst_18767 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18786_18812 = state_18771__$1;
(statearr_18786_18812[(2)] = inst_18767);

(statearr_18786_18812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (8))){
var inst_18748 = (state_18771[(7)]);
var inst_18758 = cljs.core.next.call(null,inst_18748);
var inst_18748__$1 = inst_18758;
var state_18771__$1 = (function (){var statearr_18787 = state_18771;
(statearr_18787[(7)] = inst_18748__$1);

return statearr_18787;
})();
var statearr_18788_18813 = state_18771__$1;
(statearr_18788_18813[(2)] = null);

(statearr_18788_18813[(1)] = (2));


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
var statearr_18792 = [null,null,null,null,null,null,null,null];
(statearr_18792[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_18792[(1)] = (1));

return statearr_18792;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_18771){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_18771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e18793){if((e18793 instanceof Object)){
var ex__8338__auto__ = e18793;
var statearr_18794_18814 = state_18771;
(statearr_18794_18814[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18815 = state_18771;
state_18771 = G__18815;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_18771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_18771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_18795 = f__8400__auto__.call(null);
(statearr_18795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_18795;
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
if(typeof cljs.core.async.t_cljs$core$async19037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19037 = (function (mult,ch,cs,meta19038){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19038 = meta19038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19039,meta19038__$1){
var self__ = this;
var _19039__$1 = this;
return (new cljs.core.async.t_cljs$core$async19037(self__.mult,self__.ch,self__.cs,meta19038__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19039){
var self__ = this;
var _19039__$1 = this;
return self__.meta19038;
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19038","meta19038",1316445289,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19037";

cljs.core.async.t_cljs$core$async19037.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19037");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19037 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19037(mult__$1,ch__$1,cs__$1,meta19038){
return (new cljs.core.async.t_cljs$core$async19037(mult__$1,ch__$1,cs__$1,meta19038));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19037(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8399__auto___19258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19258,cs,m,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19258,cs,m,dchan,dctr,done){
return (function (state_19170){
var state_val_19171 = (state_19170[(1)]);
if((state_val_19171 === (7))){
var inst_19166 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19172_19259 = state_19170__$1;
(statearr_19172_19259[(2)] = inst_19166);

(statearr_19172_19259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (20))){
var inst_19071 = (state_19170[(7)]);
var inst_19081 = cljs.core.first.call(null,inst_19071);
var inst_19082 = cljs.core.nth.call(null,inst_19081,(0),null);
var inst_19083 = cljs.core.nth.call(null,inst_19081,(1),null);
var state_19170__$1 = (function (){var statearr_19173 = state_19170;
(statearr_19173[(8)] = inst_19082);

return statearr_19173;
})();
if(cljs.core.truth_(inst_19083)){
var statearr_19174_19260 = state_19170__$1;
(statearr_19174_19260[(1)] = (22));

} else {
var statearr_19175_19261 = state_19170__$1;
(statearr_19175_19261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (27))){
var inst_19118 = (state_19170[(9)]);
var inst_19113 = (state_19170[(10)]);
var inst_19042 = (state_19170[(11)]);
var inst_19111 = (state_19170[(12)]);
var inst_19118__$1 = cljs.core._nth.call(null,inst_19111,inst_19113);
var inst_19119 = cljs.core.async.put_BANG_.call(null,inst_19118__$1,inst_19042,done);
var state_19170__$1 = (function (){var statearr_19176 = state_19170;
(statearr_19176[(9)] = inst_19118__$1);

return statearr_19176;
})();
if(cljs.core.truth_(inst_19119)){
var statearr_19177_19262 = state_19170__$1;
(statearr_19177_19262[(1)] = (30));

} else {
var statearr_19178_19263 = state_19170__$1;
(statearr_19178_19263[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (1))){
var state_19170__$1 = state_19170;
var statearr_19179_19264 = state_19170__$1;
(statearr_19179_19264[(2)] = null);

(statearr_19179_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (24))){
var inst_19071 = (state_19170[(7)]);
var inst_19088 = (state_19170[(2)]);
var inst_19089 = cljs.core.next.call(null,inst_19071);
var inst_19051 = inst_19089;
var inst_19052 = null;
var inst_19053 = (0);
var inst_19054 = (0);
var state_19170__$1 = (function (){var statearr_19180 = state_19170;
(statearr_19180[(13)] = inst_19053);

(statearr_19180[(14)] = inst_19054);

(statearr_19180[(15)] = inst_19052);

(statearr_19180[(16)] = inst_19051);

(statearr_19180[(17)] = inst_19088);

return statearr_19180;
})();
var statearr_19181_19265 = state_19170__$1;
(statearr_19181_19265[(2)] = null);

(statearr_19181_19265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (39))){
var state_19170__$1 = state_19170;
var statearr_19185_19266 = state_19170__$1;
(statearr_19185_19266[(2)] = null);

(statearr_19185_19266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (4))){
var inst_19042 = (state_19170[(11)]);
var inst_19042__$1 = (state_19170[(2)]);
var inst_19043 = (inst_19042__$1 == null);
var state_19170__$1 = (function (){var statearr_19186 = state_19170;
(statearr_19186[(11)] = inst_19042__$1);

return statearr_19186;
})();
if(cljs.core.truth_(inst_19043)){
var statearr_19187_19267 = state_19170__$1;
(statearr_19187_19267[(1)] = (5));

} else {
var statearr_19188_19268 = state_19170__$1;
(statearr_19188_19268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (15))){
var inst_19053 = (state_19170[(13)]);
var inst_19054 = (state_19170[(14)]);
var inst_19052 = (state_19170[(15)]);
var inst_19051 = (state_19170[(16)]);
var inst_19067 = (state_19170[(2)]);
var inst_19068 = (inst_19054 + (1));
var tmp19182 = inst_19053;
var tmp19183 = inst_19052;
var tmp19184 = inst_19051;
var inst_19051__$1 = tmp19184;
var inst_19052__$1 = tmp19183;
var inst_19053__$1 = tmp19182;
var inst_19054__$1 = inst_19068;
var state_19170__$1 = (function (){var statearr_19189 = state_19170;
(statearr_19189[(13)] = inst_19053__$1);

(statearr_19189[(14)] = inst_19054__$1);

(statearr_19189[(15)] = inst_19052__$1);

(statearr_19189[(16)] = inst_19051__$1);

(statearr_19189[(18)] = inst_19067);

return statearr_19189;
})();
var statearr_19190_19269 = state_19170__$1;
(statearr_19190_19269[(2)] = null);

(statearr_19190_19269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (21))){
var inst_19092 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19194_19270 = state_19170__$1;
(statearr_19194_19270[(2)] = inst_19092);

(statearr_19194_19270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (31))){
var inst_19118 = (state_19170[(9)]);
var inst_19122 = done.call(null,null);
var inst_19123 = cljs.core.async.untap_STAR_.call(null,m,inst_19118);
var state_19170__$1 = (function (){var statearr_19195 = state_19170;
(statearr_19195[(19)] = inst_19122);

return statearr_19195;
})();
var statearr_19196_19271 = state_19170__$1;
(statearr_19196_19271[(2)] = inst_19123);

(statearr_19196_19271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (32))){
var inst_19113 = (state_19170[(10)]);
var inst_19110 = (state_19170[(20)]);
var inst_19111 = (state_19170[(12)]);
var inst_19112 = (state_19170[(21)]);
var inst_19125 = (state_19170[(2)]);
var inst_19126 = (inst_19113 + (1));
var tmp19191 = inst_19110;
var tmp19192 = inst_19111;
var tmp19193 = inst_19112;
var inst_19110__$1 = tmp19191;
var inst_19111__$1 = tmp19192;
var inst_19112__$1 = tmp19193;
var inst_19113__$1 = inst_19126;
var state_19170__$1 = (function (){var statearr_19197 = state_19170;
(statearr_19197[(10)] = inst_19113__$1);

(statearr_19197[(20)] = inst_19110__$1);

(statearr_19197[(12)] = inst_19111__$1);

(statearr_19197[(21)] = inst_19112__$1);

(statearr_19197[(22)] = inst_19125);

return statearr_19197;
})();
var statearr_19198_19272 = state_19170__$1;
(statearr_19198_19272[(2)] = null);

(statearr_19198_19272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (40))){
var inst_19138 = (state_19170[(23)]);
var inst_19142 = done.call(null,null);
var inst_19143 = cljs.core.async.untap_STAR_.call(null,m,inst_19138);
var state_19170__$1 = (function (){var statearr_19199 = state_19170;
(statearr_19199[(24)] = inst_19142);

return statearr_19199;
})();
var statearr_19200_19273 = state_19170__$1;
(statearr_19200_19273[(2)] = inst_19143);

(statearr_19200_19273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (33))){
var inst_19129 = (state_19170[(25)]);
var inst_19131 = cljs.core.chunked_seq_QMARK_.call(null,inst_19129);
var state_19170__$1 = state_19170;
if(inst_19131){
var statearr_19201_19274 = state_19170__$1;
(statearr_19201_19274[(1)] = (36));

} else {
var statearr_19202_19275 = state_19170__$1;
(statearr_19202_19275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (13))){
var inst_19061 = (state_19170[(26)]);
var inst_19064 = cljs.core.async.close_BANG_.call(null,inst_19061);
var state_19170__$1 = state_19170;
var statearr_19203_19276 = state_19170__$1;
(statearr_19203_19276[(2)] = inst_19064);

(statearr_19203_19276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (22))){
var inst_19082 = (state_19170[(8)]);
var inst_19085 = cljs.core.async.close_BANG_.call(null,inst_19082);
var state_19170__$1 = state_19170;
var statearr_19204_19277 = state_19170__$1;
(statearr_19204_19277[(2)] = inst_19085);

(statearr_19204_19277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (36))){
var inst_19129 = (state_19170[(25)]);
var inst_19133 = cljs.core.chunk_first.call(null,inst_19129);
var inst_19134 = cljs.core.chunk_rest.call(null,inst_19129);
var inst_19135 = cljs.core.count.call(null,inst_19133);
var inst_19110 = inst_19134;
var inst_19111 = inst_19133;
var inst_19112 = inst_19135;
var inst_19113 = (0);
var state_19170__$1 = (function (){var statearr_19205 = state_19170;
(statearr_19205[(10)] = inst_19113);

(statearr_19205[(20)] = inst_19110);

(statearr_19205[(12)] = inst_19111);

(statearr_19205[(21)] = inst_19112);

return statearr_19205;
})();
var statearr_19206_19278 = state_19170__$1;
(statearr_19206_19278[(2)] = null);

(statearr_19206_19278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (41))){
var inst_19129 = (state_19170[(25)]);
var inst_19145 = (state_19170[(2)]);
var inst_19146 = cljs.core.next.call(null,inst_19129);
var inst_19110 = inst_19146;
var inst_19111 = null;
var inst_19112 = (0);
var inst_19113 = (0);
var state_19170__$1 = (function (){var statearr_19207 = state_19170;
(statearr_19207[(10)] = inst_19113);

(statearr_19207[(20)] = inst_19110);

(statearr_19207[(27)] = inst_19145);

(statearr_19207[(12)] = inst_19111);

(statearr_19207[(21)] = inst_19112);

return statearr_19207;
})();
var statearr_19208_19279 = state_19170__$1;
(statearr_19208_19279[(2)] = null);

(statearr_19208_19279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (43))){
var state_19170__$1 = state_19170;
var statearr_19209_19280 = state_19170__$1;
(statearr_19209_19280[(2)] = null);

(statearr_19209_19280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (29))){
var inst_19154 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19210_19281 = state_19170__$1;
(statearr_19210_19281[(2)] = inst_19154);

(statearr_19210_19281[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (44))){
var inst_19163 = (state_19170[(2)]);
var state_19170__$1 = (function (){var statearr_19211 = state_19170;
(statearr_19211[(28)] = inst_19163);

return statearr_19211;
})();
var statearr_19212_19282 = state_19170__$1;
(statearr_19212_19282[(2)] = null);

(statearr_19212_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (6))){
var inst_19102 = (state_19170[(29)]);
var inst_19101 = cljs.core.deref.call(null,cs);
var inst_19102__$1 = cljs.core.keys.call(null,inst_19101);
var inst_19103 = cljs.core.count.call(null,inst_19102__$1);
var inst_19104 = cljs.core.reset_BANG_.call(null,dctr,inst_19103);
var inst_19109 = cljs.core.seq.call(null,inst_19102__$1);
var inst_19110 = inst_19109;
var inst_19111 = null;
var inst_19112 = (0);
var inst_19113 = (0);
var state_19170__$1 = (function (){var statearr_19213 = state_19170;
(statearr_19213[(10)] = inst_19113);

(statearr_19213[(29)] = inst_19102__$1);

(statearr_19213[(20)] = inst_19110);

(statearr_19213[(12)] = inst_19111);

(statearr_19213[(21)] = inst_19112);

(statearr_19213[(30)] = inst_19104);

return statearr_19213;
})();
var statearr_19214_19283 = state_19170__$1;
(statearr_19214_19283[(2)] = null);

(statearr_19214_19283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (28))){
var inst_19129 = (state_19170[(25)]);
var inst_19110 = (state_19170[(20)]);
var inst_19129__$1 = cljs.core.seq.call(null,inst_19110);
var state_19170__$1 = (function (){var statearr_19215 = state_19170;
(statearr_19215[(25)] = inst_19129__$1);

return statearr_19215;
})();
if(inst_19129__$1){
var statearr_19216_19284 = state_19170__$1;
(statearr_19216_19284[(1)] = (33));

} else {
var statearr_19217_19285 = state_19170__$1;
(statearr_19217_19285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (25))){
var inst_19113 = (state_19170[(10)]);
var inst_19112 = (state_19170[(21)]);
var inst_19115 = (inst_19113 < inst_19112);
var inst_19116 = inst_19115;
var state_19170__$1 = state_19170;
if(cljs.core.truth_(inst_19116)){
var statearr_19218_19286 = state_19170__$1;
(statearr_19218_19286[(1)] = (27));

} else {
var statearr_19219_19287 = state_19170__$1;
(statearr_19219_19287[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (34))){
var state_19170__$1 = state_19170;
var statearr_19220_19288 = state_19170__$1;
(statearr_19220_19288[(2)] = null);

(statearr_19220_19288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (17))){
var state_19170__$1 = state_19170;
var statearr_19221_19289 = state_19170__$1;
(statearr_19221_19289[(2)] = null);

(statearr_19221_19289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (3))){
var inst_19168 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19170__$1,inst_19168);
} else {
if((state_val_19171 === (12))){
var inst_19097 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19222_19290 = state_19170__$1;
(statearr_19222_19290[(2)] = inst_19097);

(statearr_19222_19290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (2))){
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19170__$1,(4),ch);
} else {
if((state_val_19171 === (23))){
var state_19170__$1 = state_19170;
var statearr_19223_19291 = state_19170__$1;
(statearr_19223_19291[(2)] = null);

(statearr_19223_19291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (35))){
var inst_19152 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19224_19292 = state_19170__$1;
(statearr_19224_19292[(2)] = inst_19152);

(statearr_19224_19292[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (19))){
var inst_19071 = (state_19170[(7)]);
var inst_19075 = cljs.core.chunk_first.call(null,inst_19071);
var inst_19076 = cljs.core.chunk_rest.call(null,inst_19071);
var inst_19077 = cljs.core.count.call(null,inst_19075);
var inst_19051 = inst_19076;
var inst_19052 = inst_19075;
var inst_19053 = inst_19077;
var inst_19054 = (0);
var state_19170__$1 = (function (){var statearr_19225 = state_19170;
(statearr_19225[(13)] = inst_19053);

(statearr_19225[(14)] = inst_19054);

(statearr_19225[(15)] = inst_19052);

(statearr_19225[(16)] = inst_19051);

return statearr_19225;
})();
var statearr_19226_19293 = state_19170__$1;
(statearr_19226_19293[(2)] = null);

(statearr_19226_19293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (11))){
var inst_19071 = (state_19170[(7)]);
var inst_19051 = (state_19170[(16)]);
var inst_19071__$1 = cljs.core.seq.call(null,inst_19051);
var state_19170__$1 = (function (){var statearr_19227 = state_19170;
(statearr_19227[(7)] = inst_19071__$1);

return statearr_19227;
})();
if(inst_19071__$1){
var statearr_19228_19294 = state_19170__$1;
(statearr_19228_19294[(1)] = (16));

} else {
var statearr_19229_19295 = state_19170__$1;
(statearr_19229_19295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (9))){
var inst_19099 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19230_19296 = state_19170__$1;
(statearr_19230_19296[(2)] = inst_19099);

(statearr_19230_19296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (5))){
var inst_19049 = cljs.core.deref.call(null,cs);
var inst_19050 = cljs.core.seq.call(null,inst_19049);
var inst_19051 = inst_19050;
var inst_19052 = null;
var inst_19053 = (0);
var inst_19054 = (0);
var state_19170__$1 = (function (){var statearr_19231 = state_19170;
(statearr_19231[(13)] = inst_19053);

(statearr_19231[(14)] = inst_19054);

(statearr_19231[(15)] = inst_19052);

(statearr_19231[(16)] = inst_19051);

return statearr_19231;
})();
var statearr_19232_19297 = state_19170__$1;
(statearr_19232_19297[(2)] = null);

(statearr_19232_19297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (14))){
var state_19170__$1 = state_19170;
var statearr_19233_19298 = state_19170__$1;
(statearr_19233_19298[(2)] = null);

(statearr_19233_19298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (45))){
var inst_19160 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19234_19299 = state_19170__$1;
(statearr_19234_19299[(2)] = inst_19160);

(statearr_19234_19299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (26))){
var inst_19102 = (state_19170[(29)]);
var inst_19156 = (state_19170[(2)]);
var inst_19157 = cljs.core.seq.call(null,inst_19102);
var state_19170__$1 = (function (){var statearr_19235 = state_19170;
(statearr_19235[(31)] = inst_19156);

return statearr_19235;
})();
if(inst_19157){
var statearr_19236_19300 = state_19170__$1;
(statearr_19236_19300[(1)] = (42));

} else {
var statearr_19237_19301 = state_19170__$1;
(statearr_19237_19301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (16))){
var inst_19071 = (state_19170[(7)]);
var inst_19073 = cljs.core.chunked_seq_QMARK_.call(null,inst_19071);
var state_19170__$1 = state_19170;
if(inst_19073){
var statearr_19238_19302 = state_19170__$1;
(statearr_19238_19302[(1)] = (19));

} else {
var statearr_19239_19303 = state_19170__$1;
(statearr_19239_19303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (38))){
var inst_19149 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19240_19304 = state_19170__$1;
(statearr_19240_19304[(2)] = inst_19149);

(statearr_19240_19304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (30))){
var state_19170__$1 = state_19170;
var statearr_19241_19305 = state_19170__$1;
(statearr_19241_19305[(2)] = null);

(statearr_19241_19305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (10))){
var inst_19054 = (state_19170[(14)]);
var inst_19052 = (state_19170[(15)]);
var inst_19060 = cljs.core._nth.call(null,inst_19052,inst_19054);
var inst_19061 = cljs.core.nth.call(null,inst_19060,(0),null);
var inst_19062 = cljs.core.nth.call(null,inst_19060,(1),null);
var state_19170__$1 = (function (){var statearr_19242 = state_19170;
(statearr_19242[(26)] = inst_19061);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19062)){
var statearr_19243_19306 = state_19170__$1;
(statearr_19243_19306[(1)] = (13));

} else {
var statearr_19244_19307 = state_19170__$1;
(statearr_19244_19307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (18))){
var inst_19095 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19245_19308 = state_19170__$1;
(statearr_19245_19308[(2)] = inst_19095);

(statearr_19245_19308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (42))){
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19170__$1,(45),dchan);
} else {
if((state_val_19171 === (37))){
var inst_19129 = (state_19170[(25)]);
var inst_19042 = (state_19170[(11)]);
var inst_19138 = (state_19170[(23)]);
var inst_19138__$1 = cljs.core.first.call(null,inst_19129);
var inst_19139 = cljs.core.async.put_BANG_.call(null,inst_19138__$1,inst_19042,done);
var state_19170__$1 = (function (){var statearr_19246 = state_19170;
(statearr_19246[(23)] = inst_19138__$1);

return statearr_19246;
})();
if(cljs.core.truth_(inst_19139)){
var statearr_19247_19309 = state_19170__$1;
(statearr_19247_19309[(1)] = (39));

} else {
var statearr_19248_19310 = state_19170__$1;
(statearr_19248_19310[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (8))){
var inst_19053 = (state_19170[(13)]);
var inst_19054 = (state_19170[(14)]);
var inst_19056 = (inst_19054 < inst_19053);
var inst_19057 = inst_19056;
var state_19170__$1 = state_19170;
if(cljs.core.truth_(inst_19057)){
var statearr_19249_19311 = state_19170__$1;
(statearr_19249_19311[(1)] = (10));

} else {
var statearr_19250_19312 = state_19170__$1;
(statearr_19250_19312[(1)] = (11));

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
});})(c__8399__auto___19258,cs,m,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___19258,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8335__auto__ = null;
var cljs$core$async$mult_$_state_machine__8335__auto____0 = (function (){
var statearr_19254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19254[(0)] = cljs$core$async$mult_$_state_machine__8335__auto__);

(statearr_19254[(1)] = (1));

return statearr_19254;
});
var cljs$core$async$mult_$_state_machine__8335__auto____1 = (function (state_19170){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19255){if((e19255 instanceof Object)){
var ex__8338__auto__ = e19255;
var statearr_19256_19313 = state_19170;
(statearr_19256_19313[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19314 = state_19170;
state_19170 = G__19314;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8335__auto__ = function(state_19170){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8335__auto____1.call(this,state_19170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8335__auto____0;
cljs$core$async$mult_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8335__auto____1;
return cljs$core$async$mult_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19258,cs,m,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_19257 = f__8400__auto__.call(null);
(statearr_19257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19258);

return statearr_19257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19258,cs,m,dchan,dctr,done))
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
var args19315 = [];
var len__6152__auto___19318 = arguments.length;
var i__6153__auto___19319 = (0);
while(true){
if((i__6153__auto___19319 < len__6152__auto___19318)){
args19315.push((arguments[i__6153__auto___19319]));

var G__19320 = (i__6153__auto___19319 + (1));
i__6153__auto___19319 = G__19320;
continue;
} else {
}
break;
}

var G__19317 = args19315.length;
switch (G__19317) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19315.length)].join('')));

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
var len__6152__auto___19332 = arguments.length;
var i__6153__auto___19333 = (0);
while(true){
if((i__6153__auto___19333 < len__6152__auto___19332)){
args__6159__auto__.push((arguments[i__6153__auto___19333]));

var G__19334 = (i__6153__auto___19333 + (1));
i__6153__auto___19333 = G__19334;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19326){
var map__19327 = p__19326;
var map__19327__$1 = ((((!((map__19327 == null)))?((((map__19327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19327):map__19327);
var opts = map__19327__$1;
var statearr_19329_19335 = state;
(statearr_19329_19335[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19327,map__19327__$1,opts){
return (function (val){
var statearr_19330_19336 = state;
(statearr_19330_19336[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19327,map__19327__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19331_19337 = state;
(statearr_19331_19337[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19322){
var G__19323 = cljs.core.first.call(null,seq19322);
var seq19322__$1 = cljs.core.next.call(null,seq19322);
var G__19324 = cljs.core.first.call(null,seq19322__$1);
var seq19322__$2 = cljs.core.next.call(null,seq19322__$1);
var G__19325 = cljs.core.first.call(null,seq19322__$2);
var seq19322__$3 = cljs.core.next.call(null,seq19322__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19323,G__19324,G__19325,seq19322__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19501 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19502){
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
this.meta19502 = meta19502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19503,meta19502__$1){
var self__ = this;
var _19503__$1 = this;
return (new cljs.core.async.t_cljs$core$async19501(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19502__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19503){
var self__ = this;
var _19503__$1 = this;
return self__.meta19502;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19501.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19502","meta19502",-182880143,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19501";

cljs.core.async.t_cljs$core$async19501.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19501");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19501 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19501(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19502){
return (new cljs.core.async.t_cljs$core$async19501(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19502));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19501(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___19664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19519 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19603_19665 = state_19601__$1;
(statearr_19603_19665[(2)] = inst_19519);

(statearr_19603_19665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (20))){
var inst_19531 = (state_19601[(7)]);
var state_19601__$1 = state_19601;
var statearr_19604_19666 = state_19601__$1;
(statearr_19604_19666[(2)] = inst_19531);

(statearr_19604_19666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (27))){
var state_19601__$1 = state_19601;
var statearr_19605_19667 = state_19601__$1;
(statearr_19605_19667[(2)] = null);

(statearr_19605_19667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var inst_19507 = (state_19601[(8)]);
var inst_19507__$1 = calc_state.call(null);
var inst_19509 = (inst_19507__$1 == null);
var inst_19510 = cljs.core.not.call(null,inst_19509);
var state_19601__$1 = (function (){var statearr_19606 = state_19601;
(statearr_19606[(8)] = inst_19507__$1);

return statearr_19606;
})();
if(inst_19510){
var statearr_19607_19668 = state_19601__$1;
(statearr_19607_19668[(1)] = (2));

} else {
var statearr_19608_19669 = state_19601__$1;
(statearr_19608_19669[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (24))){
var inst_19561 = (state_19601[(9)]);
var inst_19554 = (state_19601[(10)]);
var inst_19575 = (state_19601[(11)]);
var inst_19575__$1 = inst_19554.call(null,inst_19561);
var state_19601__$1 = (function (){var statearr_19609 = state_19601;
(statearr_19609[(11)] = inst_19575__$1);

return statearr_19609;
})();
if(cljs.core.truth_(inst_19575__$1)){
var statearr_19610_19670 = state_19601__$1;
(statearr_19610_19670[(1)] = (29));

} else {
var statearr_19611_19671 = state_19601__$1;
(statearr_19611_19671[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19522 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19522)){
var statearr_19612_19672 = state_19601__$1;
(statearr_19612_19672[(1)] = (8));

} else {
var statearr_19613_19673 = state_19601__$1;
(statearr_19613_19673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (15))){
var inst_19548 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19548)){
var statearr_19614_19674 = state_19601__$1;
(statearr_19614_19674[(1)] = (19));

} else {
var statearr_19615_19675 = state_19601__$1;
(statearr_19615_19675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (21))){
var inst_19553 = (state_19601[(12)]);
var inst_19553__$1 = (state_19601[(2)]);
var inst_19554 = cljs.core.get.call(null,inst_19553__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19555 = cljs.core.get.call(null,inst_19553__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19556 = cljs.core.get.call(null,inst_19553__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19601__$1 = (function (){var statearr_19616 = state_19601;
(statearr_19616[(13)] = inst_19555);

(statearr_19616[(10)] = inst_19554);

(statearr_19616[(12)] = inst_19553__$1);

return statearr_19616;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19601__$1,(22),inst_19556);
} else {
if((state_val_19602 === (31))){
var inst_19583 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19583)){
var statearr_19617_19676 = state_19601__$1;
(statearr_19617_19676[(1)] = (32));

} else {
var statearr_19618_19677 = state_19601__$1;
(statearr_19618_19677[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (32))){
var inst_19560 = (state_19601[(14)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(35),out,inst_19560);
} else {
if((state_val_19602 === (33))){
var inst_19553 = (state_19601[(12)]);
var inst_19531 = inst_19553;
var state_19601__$1 = (function (){var statearr_19619 = state_19601;
(statearr_19619[(7)] = inst_19531);

return statearr_19619;
})();
var statearr_19620_19678 = state_19601__$1;
(statearr_19620_19678[(2)] = null);

(statearr_19620_19678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (13))){
var inst_19531 = (state_19601[(7)]);
var inst_19538 = inst_19531.cljs$lang$protocol_mask$partition0$;
var inst_19539 = (inst_19538 & (64));
var inst_19540 = inst_19531.cljs$core$ISeq$;
var inst_19541 = (inst_19539) || (inst_19540);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19541)){
var statearr_19621_19679 = state_19601__$1;
(statearr_19621_19679[(1)] = (16));

} else {
var statearr_19622_19680 = state_19601__$1;
(statearr_19622_19680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (22))){
var inst_19561 = (state_19601[(9)]);
var inst_19560 = (state_19601[(14)]);
var inst_19559 = (state_19601[(2)]);
var inst_19560__$1 = cljs.core.nth.call(null,inst_19559,(0),null);
var inst_19561__$1 = cljs.core.nth.call(null,inst_19559,(1),null);
var inst_19562 = (inst_19560__$1 == null);
var inst_19563 = cljs.core._EQ_.call(null,inst_19561__$1,change);
var inst_19564 = (inst_19562) || (inst_19563);
var state_19601__$1 = (function (){var statearr_19623 = state_19601;
(statearr_19623[(9)] = inst_19561__$1);

(statearr_19623[(14)] = inst_19560__$1);

return statearr_19623;
})();
if(cljs.core.truth_(inst_19564)){
var statearr_19624_19681 = state_19601__$1;
(statearr_19624_19681[(1)] = (23));

} else {
var statearr_19625_19682 = state_19601__$1;
(statearr_19625_19682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (36))){
var inst_19553 = (state_19601[(12)]);
var inst_19531 = inst_19553;
var state_19601__$1 = (function (){var statearr_19626 = state_19601;
(statearr_19626[(7)] = inst_19531);

return statearr_19626;
})();
var statearr_19627_19683 = state_19601__$1;
(statearr_19627_19683[(2)] = null);

(statearr_19627_19683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (29))){
var inst_19575 = (state_19601[(11)]);
var state_19601__$1 = state_19601;
var statearr_19628_19684 = state_19601__$1;
(statearr_19628_19684[(2)] = inst_19575);

(statearr_19628_19684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var state_19601__$1 = state_19601;
var statearr_19629_19685 = state_19601__$1;
(statearr_19629_19685[(2)] = false);

(statearr_19629_19685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (28))){
var inst_19571 = (state_19601[(2)]);
var inst_19572 = calc_state.call(null);
var inst_19531 = inst_19572;
var state_19601__$1 = (function (){var statearr_19630 = state_19601;
(statearr_19630[(7)] = inst_19531);

(statearr_19630[(15)] = inst_19571);

return statearr_19630;
})();
var statearr_19631_19686 = state_19601__$1;
(statearr_19631_19686[(2)] = null);

(statearr_19631_19686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (25))){
var inst_19597 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19632_19687 = state_19601__$1;
(statearr_19632_19687[(2)] = inst_19597);

(statearr_19632_19687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (34))){
var inst_19595 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19633_19688 = state_19601__$1;
(statearr_19633_19688[(2)] = inst_19595);

(statearr_19633_19688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (17))){
var state_19601__$1 = state_19601;
var statearr_19634_19689 = state_19601__$1;
(statearr_19634_19689[(2)] = false);

(statearr_19634_19689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var state_19601__$1 = state_19601;
var statearr_19635_19690 = state_19601__$1;
(statearr_19635_19690[(2)] = false);

(statearr_19635_19690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (12))){
var inst_19599 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (2))){
var inst_19507 = (state_19601[(8)]);
var inst_19512 = inst_19507.cljs$lang$protocol_mask$partition0$;
var inst_19513 = (inst_19512 & (64));
var inst_19514 = inst_19507.cljs$core$ISeq$;
var inst_19515 = (inst_19513) || (inst_19514);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19515)){
var statearr_19636_19691 = state_19601__$1;
(statearr_19636_19691[(1)] = (5));

} else {
var statearr_19637_19692 = state_19601__$1;
(statearr_19637_19692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (23))){
var inst_19560 = (state_19601[(14)]);
var inst_19566 = (inst_19560 == null);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19566)){
var statearr_19638_19693 = state_19601__$1;
(statearr_19638_19693[(1)] = (26));

} else {
var statearr_19639_19694 = state_19601__$1;
(statearr_19639_19694[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (35))){
var inst_19586 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19586)){
var statearr_19640_19695 = state_19601__$1;
(statearr_19640_19695[(1)] = (36));

} else {
var statearr_19641_19696 = state_19601__$1;
(statearr_19641_19696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (19))){
var inst_19531 = (state_19601[(7)]);
var inst_19550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19531);
var state_19601__$1 = state_19601;
var statearr_19642_19697 = state_19601__$1;
(statearr_19642_19697[(2)] = inst_19550);

(statearr_19642_19697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (11))){
var inst_19531 = (state_19601[(7)]);
var inst_19535 = (inst_19531 == null);
var inst_19536 = cljs.core.not.call(null,inst_19535);
var state_19601__$1 = state_19601;
if(inst_19536){
var statearr_19643_19698 = state_19601__$1;
(statearr_19643_19698[(1)] = (13));

} else {
var statearr_19644_19699 = state_19601__$1;
(statearr_19644_19699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var inst_19507 = (state_19601[(8)]);
var state_19601__$1 = state_19601;
var statearr_19645_19700 = state_19601__$1;
(statearr_19645_19700[(2)] = inst_19507);

(statearr_19645_19700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (5))){
var state_19601__$1 = state_19601;
var statearr_19646_19701 = state_19601__$1;
(statearr_19646_19701[(2)] = true);

(statearr_19646_19701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (14))){
var state_19601__$1 = state_19601;
var statearr_19647_19702 = state_19601__$1;
(statearr_19647_19702[(2)] = false);

(statearr_19647_19702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (26))){
var inst_19561 = (state_19601[(9)]);
var inst_19568 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19561);
var state_19601__$1 = state_19601;
var statearr_19648_19703 = state_19601__$1;
(statearr_19648_19703[(2)] = inst_19568);

(statearr_19648_19703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (16))){
var state_19601__$1 = state_19601;
var statearr_19649_19704 = state_19601__$1;
(statearr_19649_19704[(2)] = true);

(statearr_19649_19704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (38))){
var inst_19591 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19650_19705 = state_19601__$1;
(statearr_19650_19705[(2)] = inst_19591);

(statearr_19650_19705[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (30))){
var inst_19561 = (state_19601[(9)]);
var inst_19555 = (state_19601[(13)]);
var inst_19554 = (state_19601[(10)]);
var inst_19578 = cljs.core.empty_QMARK_.call(null,inst_19554);
var inst_19579 = inst_19555.call(null,inst_19561);
var inst_19580 = cljs.core.not.call(null,inst_19579);
var inst_19581 = (inst_19578) && (inst_19580);
var state_19601__$1 = state_19601;
var statearr_19651_19706 = state_19601__$1;
(statearr_19651_19706[(2)] = inst_19581);

(statearr_19651_19706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19507 = (state_19601[(8)]);
var inst_19527 = (state_19601[(2)]);
var inst_19528 = cljs.core.get.call(null,inst_19527,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19529 = cljs.core.get.call(null,inst_19527,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19530 = cljs.core.get.call(null,inst_19527,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19531 = inst_19507;
var state_19601__$1 = (function (){var statearr_19652 = state_19601;
(statearr_19652[(7)] = inst_19531);

(statearr_19652[(16)] = inst_19528);

(statearr_19652[(17)] = inst_19529);

(statearr_19652[(18)] = inst_19530);

return statearr_19652;
})();
var statearr_19653_19707 = state_19601__$1;
(statearr_19653_19707[(2)] = null);

(statearr_19653_19707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (18))){
var inst_19545 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19654_19708 = state_19601__$1;
(statearr_19654_19708[(2)] = inst_19545);

(statearr_19654_19708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (37))){
var state_19601__$1 = state_19601;
var statearr_19655_19709 = state_19601__$1;
(statearr_19655_19709[(2)] = null);

(statearr_19655_19709[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (8))){
var inst_19507 = (state_19601[(8)]);
var inst_19524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19507);
var state_19601__$1 = state_19601;
var statearr_19656_19710 = state_19601__$1;
(statearr_19656_19710[(2)] = inst_19524);

(statearr_19656_19710[(1)] = (10));


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
});})(c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8334__auto__,c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8335__auto__ = null;
var cljs$core$async$mix_$_state_machine__8335__auto____0 = (function (){
var statearr_19660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19660[(0)] = cljs$core$async$mix_$_state_machine__8335__auto__);

(statearr_19660[(1)] = (1));

return statearr_19660;
});
var cljs$core$async$mix_$_state_machine__8335__auto____1 = (function (state_19601){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19661){if((e19661 instanceof Object)){
var ex__8338__auto__ = e19661;
var statearr_19662_19711 = state_19601;
(statearr_19662_19711[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19712 = state_19601;
state_19601 = G__19712;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8335__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8335__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8335__auto____0;
cljs$core$async$mix_$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8335__auto____1;
return cljs$core$async$mix_$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8401__auto__ = (function (){var statearr_19663 = f__8400__auto__.call(null);
(statearr_19663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19664);

return statearr_19663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19713 = [];
var len__6152__auto___19716 = arguments.length;
var i__6153__auto___19717 = (0);
while(true){
if((i__6153__auto___19717 < len__6152__auto___19716)){
args19713.push((arguments[i__6153__auto___19717]));

var G__19718 = (i__6153__auto___19717 + (1));
i__6153__auto___19717 = G__19718;
continue;
} else {
}
break;
}

var G__19715 = args19713.length;
switch (G__19715) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19713.length)].join('')));

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
var args19721 = [];
var len__6152__auto___19846 = arguments.length;
var i__6153__auto___19847 = (0);
while(true){
if((i__6153__auto___19847 < len__6152__auto___19846)){
args19721.push((arguments[i__6153__auto___19847]));

var G__19848 = (i__6153__auto___19847 + (1));
i__6153__auto___19847 = G__19848;
continue;
} else {
}
break;
}

var G__19723 = args19721.length;
switch (G__19723) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19721.length)].join('')));

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
return (function (p1__19720_SHARP_){
if(cljs.core.truth_(p1__19720_SHARP_.call(null,topic))){
return p1__19720_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19720_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19724 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19725){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19725 = meta19725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19726,meta19725__$1){
var self__ = this;
var _19726__$1 = this;
return (new cljs.core.async.t_cljs$core$async19724(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19725__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19726){
var self__ = this;
var _19726__$1 = this;
return self__.meta19725;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19725","meta19725",49146593,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19724";

cljs.core.async.t_cljs$core$async19724.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19724");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19724 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19725){
return (new cljs.core.async.t_cljs$core$async19724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19725));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19724(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8399__auto___19850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19850,mults,ensure_mult,p){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19850,mults,ensure_mult,p){
return (function (state_19798){
var state_val_19799 = (state_19798[(1)]);
if((state_val_19799 === (7))){
var inst_19794 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19800_19851 = state_19798__$1;
(statearr_19800_19851[(2)] = inst_19794);

(statearr_19800_19851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (20))){
var state_19798__$1 = state_19798;
var statearr_19801_19852 = state_19798__$1;
(statearr_19801_19852[(2)] = null);

(statearr_19801_19852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (1))){
var state_19798__$1 = state_19798;
var statearr_19802_19853 = state_19798__$1;
(statearr_19802_19853[(2)] = null);

(statearr_19802_19853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (24))){
var inst_19777 = (state_19798[(7)]);
var inst_19786 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19777);
var state_19798__$1 = state_19798;
var statearr_19803_19854 = state_19798__$1;
(statearr_19803_19854[(2)] = inst_19786);

(statearr_19803_19854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (4))){
var inst_19729 = (state_19798[(8)]);
var inst_19729__$1 = (state_19798[(2)]);
var inst_19730 = (inst_19729__$1 == null);
var state_19798__$1 = (function (){var statearr_19804 = state_19798;
(statearr_19804[(8)] = inst_19729__$1);

return statearr_19804;
})();
if(cljs.core.truth_(inst_19730)){
var statearr_19805_19855 = state_19798__$1;
(statearr_19805_19855[(1)] = (5));

} else {
var statearr_19806_19856 = state_19798__$1;
(statearr_19806_19856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (15))){
var inst_19771 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19807_19857 = state_19798__$1;
(statearr_19807_19857[(2)] = inst_19771);

(statearr_19807_19857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (21))){
var inst_19791 = (state_19798[(2)]);
var state_19798__$1 = (function (){var statearr_19808 = state_19798;
(statearr_19808[(9)] = inst_19791);

return statearr_19808;
})();
var statearr_19809_19858 = state_19798__$1;
(statearr_19809_19858[(2)] = null);

(statearr_19809_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (13))){
var inst_19753 = (state_19798[(10)]);
var inst_19755 = cljs.core.chunked_seq_QMARK_.call(null,inst_19753);
var state_19798__$1 = state_19798;
if(inst_19755){
var statearr_19810_19859 = state_19798__$1;
(statearr_19810_19859[(1)] = (16));

} else {
var statearr_19811_19860 = state_19798__$1;
(statearr_19811_19860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (22))){
var inst_19783 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19783)){
var statearr_19812_19861 = state_19798__$1;
(statearr_19812_19861[(1)] = (23));

} else {
var statearr_19813_19862 = state_19798__$1;
(statearr_19813_19862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (6))){
var inst_19779 = (state_19798[(11)]);
var inst_19729 = (state_19798[(8)]);
var inst_19777 = (state_19798[(7)]);
var inst_19777__$1 = topic_fn.call(null,inst_19729);
var inst_19778 = cljs.core.deref.call(null,mults);
var inst_19779__$1 = cljs.core.get.call(null,inst_19778,inst_19777__$1);
var state_19798__$1 = (function (){var statearr_19814 = state_19798;
(statearr_19814[(11)] = inst_19779__$1);

(statearr_19814[(7)] = inst_19777__$1);

return statearr_19814;
})();
if(cljs.core.truth_(inst_19779__$1)){
var statearr_19815_19863 = state_19798__$1;
(statearr_19815_19863[(1)] = (19));

} else {
var statearr_19816_19864 = state_19798__$1;
(statearr_19816_19864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (25))){
var inst_19788 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19817_19865 = state_19798__$1;
(statearr_19817_19865[(2)] = inst_19788);

(statearr_19817_19865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (17))){
var inst_19753 = (state_19798[(10)]);
var inst_19762 = cljs.core.first.call(null,inst_19753);
var inst_19763 = cljs.core.async.muxch_STAR_.call(null,inst_19762);
var inst_19764 = cljs.core.async.close_BANG_.call(null,inst_19763);
var inst_19765 = cljs.core.next.call(null,inst_19753);
var inst_19739 = inst_19765;
var inst_19740 = null;
var inst_19741 = (0);
var inst_19742 = (0);
var state_19798__$1 = (function (){var statearr_19818 = state_19798;
(statearr_19818[(12)] = inst_19764);

(statearr_19818[(13)] = inst_19740);

(statearr_19818[(14)] = inst_19739);

(statearr_19818[(15)] = inst_19741);

(statearr_19818[(16)] = inst_19742);

return statearr_19818;
})();
var statearr_19819_19866 = state_19798__$1;
(statearr_19819_19866[(2)] = null);

(statearr_19819_19866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (3))){
var inst_19796 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19798__$1,inst_19796);
} else {
if((state_val_19799 === (12))){
var inst_19773 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19820_19867 = state_19798__$1;
(statearr_19820_19867[(2)] = inst_19773);

(statearr_19820_19867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (2))){
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19798__$1,(4),ch);
} else {
if((state_val_19799 === (23))){
var state_19798__$1 = state_19798;
var statearr_19821_19868 = state_19798__$1;
(statearr_19821_19868[(2)] = null);

(statearr_19821_19868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (19))){
var inst_19779 = (state_19798[(11)]);
var inst_19729 = (state_19798[(8)]);
var inst_19781 = cljs.core.async.muxch_STAR_.call(null,inst_19779);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19798__$1,(22),inst_19781,inst_19729);
} else {
if((state_val_19799 === (11))){
var inst_19739 = (state_19798[(14)]);
var inst_19753 = (state_19798[(10)]);
var inst_19753__$1 = cljs.core.seq.call(null,inst_19739);
var state_19798__$1 = (function (){var statearr_19822 = state_19798;
(statearr_19822[(10)] = inst_19753__$1);

return statearr_19822;
})();
if(inst_19753__$1){
var statearr_19823_19869 = state_19798__$1;
(statearr_19823_19869[(1)] = (13));

} else {
var statearr_19824_19870 = state_19798__$1;
(statearr_19824_19870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (9))){
var inst_19775 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19825_19871 = state_19798__$1;
(statearr_19825_19871[(2)] = inst_19775);

(statearr_19825_19871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (5))){
var inst_19736 = cljs.core.deref.call(null,mults);
var inst_19737 = cljs.core.vals.call(null,inst_19736);
var inst_19738 = cljs.core.seq.call(null,inst_19737);
var inst_19739 = inst_19738;
var inst_19740 = null;
var inst_19741 = (0);
var inst_19742 = (0);
var state_19798__$1 = (function (){var statearr_19826 = state_19798;
(statearr_19826[(13)] = inst_19740);

(statearr_19826[(14)] = inst_19739);

(statearr_19826[(15)] = inst_19741);

(statearr_19826[(16)] = inst_19742);

return statearr_19826;
})();
var statearr_19827_19872 = state_19798__$1;
(statearr_19827_19872[(2)] = null);

(statearr_19827_19872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (14))){
var state_19798__$1 = state_19798;
var statearr_19831_19873 = state_19798__$1;
(statearr_19831_19873[(2)] = null);

(statearr_19831_19873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (16))){
var inst_19753 = (state_19798[(10)]);
var inst_19757 = cljs.core.chunk_first.call(null,inst_19753);
var inst_19758 = cljs.core.chunk_rest.call(null,inst_19753);
var inst_19759 = cljs.core.count.call(null,inst_19757);
var inst_19739 = inst_19758;
var inst_19740 = inst_19757;
var inst_19741 = inst_19759;
var inst_19742 = (0);
var state_19798__$1 = (function (){var statearr_19832 = state_19798;
(statearr_19832[(13)] = inst_19740);

(statearr_19832[(14)] = inst_19739);

(statearr_19832[(15)] = inst_19741);

(statearr_19832[(16)] = inst_19742);

return statearr_19832;
})();
var statearr_19833_19874 = state_19798__$1;
(statearr_19833_19874[(2)] = null);

(statearr_19833_19874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (10))){
var inst_19740 = (state_19798[(13)]);
var inst_19739 = (state_19798[(14)]);
var inst_19741 = (state_19798[(15)]);
var inst_19742 = (state_19798[(16)]);
var inst_19747 = cljs.core._nth.call(null,inst_19740,inst_19742);
var inst_19748 = cljs.core.async.muxch_STAR_.call(null,inst_19747);
var inst_19749 = cljs.core.async.close_BANG_.call(null,inst_19748);
var inst_19750 = (inst_19742 + (1));
var tmp19828 = inst_19740;
var tmp19829 = inst_19739;
var tmp19830 = inst_19741;
var inst_19739__$1 = tmp19829;
var inst_19740__$1 = tmp19828;
var inst_19741__$1 = tmp19830;
var inst_19742__$1 = inst_19750;
var state_19798__$1 = (function (){var statearr_19834 = state_19798;
(statearr_19834[(17)] = inst_19749);

(statearr_19834[(13)] = inst_19740__$1);

(statearr_19834[(14)] = inst_19739__$1);

(statearr_19834[(15)] = inst_19741__$1);

(statearr_19834[(16)] = inst_19742__$1);

return statearr_19834;
})();
var statearr_19835_19875 = state_19798__$1;
(statearr_19835_19875[(2)] = null);

(statearr_19835_19875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (18))){
var inst_19768 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19836_19876 = state_19798__$1;
(statearr_19836_19876[(2)] = inst_19768);

(statearr_19836_19876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (8))){
var inst_19741 = (state_19798[(15)]);
var inst_19742 = (state_19798[(16)]);
var inst_19744 = (inst_19742 < inst_19741);
var inst_19745 = inst_19744;
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19745)){
var statearr_19837_19877 = state_19798__$1;
(statearr_19837_19877[(1)] = (10));

} else {
var statearr_19838_19878 = state_19798__$1;
(statearr_19838_19878[(1)] = (11));

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
});})(c__8399__auto___19850,mults,ensure_mult,p))
;
return ((function (switch__8334__auto__,c__8399__auto___19850,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_19842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19842[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_19842[(1)] = (1));

return statearr_19842;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_19798){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19843){if((e19843 instanceof Object)){
var ex__8338__auto__ = e19843;
var statearr_19844_19879 = state_19798;
(statearr_19844_19879[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19880 = state_19798;
state_19798 = G__19880;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_19798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_19798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19850,mults,ensure_mult,p))
})();
var state__8401__auto__ = (function (){var statearr_19845 = f__8400__auto__.call(null);
(statearr_19845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19850);

return statearr_19845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19850,mults,ensure_mult,p))
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
var args19881 = [];
var len__6152__auto___19884 = arguments.length;
var i__6153__auto___19885 = (0);
while(true){
if((i__6153__auto___19885 < len__6152__auto___19884)){
args19881.push((arguments[i__6153__auto___19885]));

var G__19886 = (i__6153__auto___19885 + (1));
i__6153__auto___19885 = G__19886;
continue;
} else {
}
break;
}

var G__19883 = args19881.length;
switch (G__19883) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19881.length)].join('')));

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
var args19888 = [];
var len__6152__auto___19891 = arguments.length;
var i__6153__auto___19892 = (0);
while(true){
if((i__6153__auto___19892 < len__6152__auto___19891)){
args19888.push((arguments[i__6153__auto___19892]));

var G__19893 = (i__6153__auto___19892 + (1));
i__6153__auto___19892 = G__19893;
continue;
} else {
}
break;
}

var G__19890 = args19888.length;
switch (G__19890) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19888.length)].join('')));

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
var args19895 = [];
var len__6152__auto___19966 = arguments.length;
var i__6153__auto___19967 = (0);
while(true){
if((i__6153__auto___19967 < len__6152__auto___19966)){
args19895.push((arguments[i__6153__auto___19967]));

var G__19968 = (i__6153__auto___19967 + (1));
i__6153__auto___19967 = G__19968;
continue;
} else {
}
break;
}

var G__19897 = args19895.length;
switch (G__19897) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19895.length)].join('')));

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
var c__8399__auto___19970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19936){
var state_val_19937 = (state_19936[(1)]);
if((state_val_19937 === (7))){
var state_19936__$1 = state_19936;
var statearr_19938_19971 = state_19936__$1;
(statearr_19938_19971[(2)] = null);

(statearr_19938_19971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (1))){
var state_19936__$1 = state_19936;
var statearr_19939_19972 = state_19936__$1;
(statearr_19939_19972[(2)] = null);

(statearr_19939_19972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (4))){
var inst_19900 = (state_19936[(7)]);
var inst_19902 = (inst_19900 < cnt);
var state_19936__$1 = state_19936;
if(cljs.core.truth_(inst_19902)){
var statearr_19940_19973 = state_19936__$1;
(statearr_19940_19973[(1)] = (6));

} else {
var statearr_19941_19974 = state_19936__$1;
(statearr_19941_19974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (15))){
var inst_19932 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
var statearr_19942_19975 = state_19936__$1;
(statearr_19942_19975[(2)] = inst_19932);

(statearr_19942_19975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (13))){
var inst_19925 = cljs.core.async.close_BANG_.call(null,out);
var state_19936__$1 = state_19936;
var statearr_19943_19976 = state_19936__$1;
(statearr_19943_19976[(2)] = inst_19925);

(statearr_19943_19976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (6))){
var state_19936__$1 = state_19936;
var statearr_19944_19977 = state_19936__$1;
(statearr_19944_19977[(2)] = null);

(statearr_19944_19977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (3))){
var inst_19934 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19936__$1,inst_19934);
} else {
if((state_val_19937 === (12))){
var inst_19922 = (state_19936[(8)]);
var inst_19922__$1 = (state_19936[(2)]);
var inst_19923 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19922__$1);
var state_19936__$1 = (function (){var statearr_19945 = state_19936;
(statearr_19945[(8)] = inst_19922__$1);

return statearr_19945;
})();
if(cljs.core.truth_(inst_19923)){
var statearr_19946_19978 = state_19936__$1;
(statearr_19946_19978[(1)] = (13));

} else {
var statearr_19947_19979 = state_19936__$1;
(statearr_19947_19979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (2))){
var inst_19899 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19900 = (0);
var state_19936__$1 = (function (){var statearr_19948 = state_19936;
(statearr_19948[(9)] = inst_19899);

(statearr_19948[(7)] = inst_19900);

return statearr_19948;
})();
var statearr_19949_19980 = state_19936__$1;
(statearr_19949_19980[(2)] = null);

(statearr_19949_19980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (11))){
var inst_19900 = (state_19936[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19936,(10),Object,null,(9));
var inst_19909 = chs__$1.call(null,inst_19900);
var inst_19910 = done.call(null,inst_19900);
var inst_19911 = cljs.core.async.take_BANG_.call(null,inst_19909,inst_19910);
var state_19936__$1 = state_19936;
var statearr_19950_19981 = state_19936__$1;
(statearr_19950_19981[(2)] = inst_19911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (9))){
var inst_19900 = (state_19936[(7)]);
var inst_19913 = (state_19936[(2)]);
var inst_19914 = (inst_19900 + (1));
var inst_19900__$1 = inst_19914;
var state_19936__$1 = (function (){var statearr_19951 = state_19936;
(statearr_19951[(10)] = inst_19913);

(statearr_19951[(7)] = inst_19900__$1);

return statearr_19951;
})();
var statearr_19952_19982 = state_19936__$1;
(statearr_19952_19982[(2)] = null);

(statearr_19952_19982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (5))){
var inst_19920 = (state_19936[(2)]);
var state_19936__$1 = (function (){var statearr_19953 = state_19936;
(statearr_19953[(11)] = inst_19920);

return statearr_19953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19936__$1,(12),dchan);
} else {
if((state_val_19937 === (14))){
var inst_19922 = (state_19936[(8)]);
var inst_19927 = cljs.core.apply.call(null,f,inst_19922);
var state_19936__$1 = state_19936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19936__$1,(16),out,inst_19927);
} else {
if((state_val_19937 === (16))){
var inst_19929 = (state_19936[(2)]);
var state_19936__$1 = (function (){var statearr_19954 = state_19936;
(statearr_19954[(12)] = inst_19929);

return statearr_19954;
})();
var statearr_19955_19983 = state_19936__$1;
(statearr_19955_19983[(2)] = null);

(statearr_19955_19983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (10))){
var inst_19904 = (state_19936[(2)]);
var inst_19905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19936__$1 = (function (){var statearr_19956 = state_19936;
(statearr_19956[(13)] = inst_19904);

return statearr_19956;
})();
var statearr_19957_19984 = state_19936__$1;
(statearr_19957_19984[(2)] = inst_19905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19937 === (8))){
var inst_19918 = (state_19936[(2)]);
var state_19936__$1 = state_19936;
var statearr_19958_19985 = state_19936__$1;
(statearr_19958_19985[(2)] = inst_19918);

(statearr_19958_19985[(1)] = (5));


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
});})(c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8334__auto__,c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_19962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19962[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_19962[(1)] = (1));

return statearr_19962;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_19936){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_19936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e19963){if((e19963 instanceof Object)){
var ex__8338__auto__ = e19963;
var statearr_19964_19986 = state_19936;
(statearr_19964_19986[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19987 = state_19936;
state_19936 = G__19987;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_19936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_19936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8401__auto__ = (function (){var statearr_19965 = f__8400__auto__.call(null);
(statearr_19965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___19970);

return statearr_19965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___19970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19989 = [];
var len__6152__auto___20045 = arguments.length;
var i__6153__auto___20046 = (0);
while(true){
if((i__6153__auto___20046 < len__6152__auto___20045)){
args19989.push((arguments[i__6153__auto___20046]));

var G__20047 = (i__6153__auto___20046 + (1));
i__6153__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var G__19991 = args19989.length;
switch (G__19991) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19989.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20049,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20049,out){
return (function (state_20021){
var state_val_20022 = (state_20021[(1)]);
if((state_val_20022 === (7))){
var inst_20001 = (state_20021[(7)]);
var inst_20000 = (state_20021[(8)]);
var inst_20000__$1 = (state_20021[(2)]);
var inst_20001__$1 = cljs.core.nth.call(null,inst_20000__$1,(0),null);
var inst_20002 = cljs.core.nth.call(null,inst_20000__$1,(1),null);
var inst_20003 = (inst_20001__$1 == null);
var state_20021__$1 = (function (){var statearr_20023 = state_20021;
(statearr_20023[(7)] = inst_20001__$1);

(statearr_20023[(9)] = inst_20002);

(statearr_20023[(8)] = inst_20000__$1);

return statearr_20023;
})();
if(cljs.core.truth_(inst_20003)){
var statearr_20024_20050 = state_20021__$1;
(statearr_20024_20050[(1)] = (8));

} else {
var statearr_20025_20051 = state_20021__$1;
(statearr_20025_20051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (1))){
var inst_19992 = cljs.core.vec.call(null,chs);
var inst_19993 = inst_19992;
var state_20021__$1 = (function (){var statearr_20026 = state_20021;
(statearr_20026[(10)] = inst_19993);

return statearr_20026;
})();
var statearr_20027_20052 = state_20021__$1;
(statearr_20027_20052[(2)] = null);

(statearr_20027_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (4))){
var inst_19993 = (state_20021[(10)]);
var state_20021__$1 = state_20021;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20021__$1,(7),inst_19993);
} else {
if((state_val_20022 === (6))){
var inst_20017 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20028_20053 = state_20021__$1;
(statearr_20028_20053[(2)] = inst_20017);

(statearr_20028_20053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (3))){
var inst_20019 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20021__$1,inst_20019);
} else {
if((state_val_20022 === (2))){
var inst_19993 = (state_20021[(10)]);
var inst_19995 = cljs.core.count.call(null,inst_19993);
var inst_19996 = (inst_19995 > (0));
var state_20021__$1 = state_20021;
if(cljs.core.truth_(inst_19996)){
var statearr_20030_20054 = state_20021__$1;
(statearr_20030_20054[(1)] = (4));

} else {
var statearr_20031_20055 = state_20021__$1;
(statearr_20031_20055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (11))){
var inst_19993 = (state_20021[(10)]);
var inst_20010 = (state_20021[(2)]);
var tmp20029 = inst_19993;
var inst_19993__$1 = tmp20029;
var state_20021__$1 = (function (){var statearr_20032 = state_20021;
(statearr_20032[(10)] = inst_19993__$1);

(statearr_20032[(11)] = inst_20010);

return statearr_20032;
})();
var statearr_20033_20056 = state_20021__$1;
(statearr_20033_20056[(2)] = null);

(statearr_20033_20056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (9))){
var inst_20001 = (state_20021[(7)]);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20021__$1,(11),out,inst_20001);
} else {
if((state_val_20022 === (5))){
var inst_20015 = cljs.core.async.close_BANG_.call(null,out);
var state_20021__$1 = state_20021;
var statearr_20034_20057 = state_20021__$1;
(statearr_20034_20057[(2)] = inst_20015);

(statearr_20034_20057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (10))){
var inst_20013 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20035_20058 = state_20021__$1;
(statearr_20035_20058[(2)] = inst_20013);

(statearr_20035_20058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20022 === (8))){
var inst_20001 = (state_20021[(7)]);
var inst_20002 = (state_20021[(9)]);
var inst_20000 = (state_20021[(8)]);
var inst_19993 = (state_20021[(10)]);
var inst_20005 = (function (){var cs = inst_19993;
var vec__19998 = inst_20000;
var v = inst_20001;
var c = inst_20002;
return ((function (cs,vec__19998,v,c,inst_20001,inst_20002,inst_20000,inst_19993,state_val_20022,c__8399__auto___20049,out){
return (function (p1__19988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19988_SHARP_);
});
;})(cs,vec__19998,v,c,inst_20001,inst_20002,inst_20000,inst_19993,state_val_20022,c__8399__auto___20049,out))
})();
var inst_20006 = cljs.core.filterv.call(null,inst_20005,inst_19993);
var inst_19993__$1 = inst_20006;
var state_20021__$1 = (function (){var statearr_20036 = state_20021;
(statearr_20036[(10)] = inst_19993__$1);

return statearr_20036;
})();
var statearr_20037_20059 = state_20021__$1;
(statearr_20037_20059[(2)] = null);

(statearr_20037_20059[(1)] = (2));


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
});})(c__8399__auto___20049,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20049,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20041 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20041[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20041[(1)] = (1));

return statearr_20041;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20021){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20042){if((e20042 instanceof Object)){
var ex__8338__auto__ = e20042;
var statearr_20043_20060 = state_20021;
(statearr_20043_20060[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20061 = state_20021;
state_20021 = G__20061;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20049,out))
})();
var state__8401__auto__ = (function (){var statearr_20044 = f__8400__auto__.call(null);
(statearr_20044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20049);

return statearr_20044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20049,out))
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
var args20062 = [];
var len__6152__auto___20111 = arguments.length;
var i__6153__auto___20112 = (0);
while(true){
if((i__6153__auto___20112 < len__6152__auto___20111)){
args20062.push((arguments[i__6153__auto___20112]));

var G__20113 = (i__6153__auto___20112 + (1));
i__6153__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var G__20064 = args20062.length;
switch (G__20064) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20062.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20115,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20115,out){
return (function (state_20088){
var state_val_20089 = (state_20088[(1)]);
if((state_val_20089 === (7))){
var inst_20070 = (state_20088[(7)]);
var inst_20070__$1 = (state_20088[(2)]);
var inst_20071 = (inst_20070__$1 == null);
var inst_20072 = cljs.core.not.call(null,inst_20071);
var state_20088__$1 = (function (){var statearr_20090 = state_20088;
(statearr_20090[(7)] = inst_20070__$1);

return statearr_20090;
})();
if(inst_20072){
var statearr_20091_20116 = state_20088__$1;
(statearr_20091_20116[(1)] = (8));

} else {
var statearr_20092_20117 = state_20088__$1;
(statearr_20092_20117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (1))){
var inst_20065 = (0);
var state_20088__$1 = (function (){var statearr_20093 = state_20088;
(statearr_20093[(8)] = inst_20065);

return statearr_20093;
})();
var statearr_20094_20118 = state_20088__$1;
(statearr_20094_20118[(2)] = null);

(statearr_20094_20118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (4))){
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20088__$1,(7),ch);
} else {
if((state_val_20089 === (6))){
var inst_20083 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20095_20119 = state_20088__$1;
(statearr_20095_20119[(2)] = inst_20083);

(statearr_20095_20119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (3))){
var inst_20085 = (state_20088[(2)]);
var inst_20086 = cljs.core.async.close_BANG_.call(null,out);
var state_20088__$1 = (function (){var statearr_20096 = state_20088;
(statearr_20096[(9)] = inst_20085);

return statearr_20096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20088__$1,inst_20086);
} else {
if((state_val_20089 === (2))){
var inst_20065 = (state_20088[(8)]);
var inst_20067 = (inst_20065 < n);
var state_20088__$1 = state_20088;
if(cljs.core.truth_(inst_20067)){
var statearr_20097_20120 = state_20088__$1;
(statearr_20097_20120[(1)] = (4));

} else {
var statearr_20098_20121 = state_20088__$1;
(statearr_20098_20121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (11))){
var inst_20065 = (state_20088[(8)]);
var inst_20075 = (state_20088[(2)]);
var inst_20076 = (inst_20065 + (1));
var inst_20065__$1 = inst_20076;
var state_20088__$1 = (function (){var statearr_20099 = state_20088;
(statearr_20099[(8)] = inst_20065__$1);

(statearr_20099[(10)] = inst_20075);

return statearr_20099;
})();
var statearr_20100_20122 = state_20088__$1;
(statearr_20100_20122[(2)] = null);

(statearr_20100_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (9))){
var state_20088__$1 = state_20088;
var statearr_20101_20123 = state_20088__$1;
(statearr_20101_20123[(2)] = null);

(statearr_20101_20123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (5))){
var state_20088__$1 = state_20088;
var statearr_20102_20124 = state_20088__$1;
(statearr_20102_20124[(2)] = null);

(statearr_20102_20124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (10))){
var inst_20080 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20103_20125 = state_20088__$1;
(statearr_20103_20125[(2)] = inst_20080);

(statearr_20103_20125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (8))){
var inst_20070 = (state_20088[(7)]);
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20088__$1,(11),out,inst_20070);
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
});})(c__8399__auto___20115,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20115,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20107[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20107[(1)] = (1));

return statearr_20107;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20088){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20108){if((e20108 instanceof Object)){
var ex__8338__auto__ = e20108;
var statearr_20109_20126 = state_20088;
(statearr_20109_20126[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20127 = state_20088;
state_20088 = G__20127;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20115,out))
})();
var state__8401__auto__ = (function (){var statearr_20110 = f__8400__auto__.call(null);
(statearr_20110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20115);

return statearr_20110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20115,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20135 = (function (map_LT_,f,ch,meta20136){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20136 = meta20136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20137,meta20136__$1){
var self__ = this;
var _20137__$1 = this;
return (new cljs.core.async.t_cljs$core$async20135(self__.map_LT_,self__.f,self__.ch,meta20136__$1));
});

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20137){
var self__ = this;
var _20137__$1 = this;
return self__.meta20136;
});

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20138 = (function (map_LT_,f,ch,meta20136,_,fn1,meta20139){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20136 = meta20136;
this._ = _;
this.fn1 = fn1;
this.meta20139 = meta20139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20140,meta20139__$1){
var self__ = this;
var _20140__$1 = this;
return (new cljs.core.async.t_cljs$core$async20138(self__.map_LT_,self__.f,self__.ch,self__.meta20136,self__._,self__.fn1,meta20139__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20140){
var self__ = this;
var _20140__$1 = this;
return self__.meta20139;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20128_SHARP_){
return f1.call(null,(((p1__20128_SHARP_ == null))?null:self__.f.call(null,p1__20128_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20138.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20136","meta20136",1005984722,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20135","cljs.core.async/t_cljs$core$async20135",-399056478,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20139","meta20139",152084626,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20138";

cljs.core.async.t_cljs$core$async20138.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20138");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20138 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20138(map_LT___$1,f__$1,ch__$1,meta20136__$1,___$2,fn1__$1,meta20139){
return (new cljs.core.async.t_cljs$core$async20138(map_LT___$1,f__$1,ch__$1,meta20136__$1,___$2,fn1__$1,meta20139));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20138(self__.map_LT_,self__.f,self__.ch,self__.meta20136,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20136","meta20136",1005984722,null)], null);
});

cljs.core.async.t_cljs$core$async20135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20135";

cljs.core.async.t_cljs$core$async20135.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20135");
});

cljs.core.async.__GT_t_cljs$core$async20135 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20135(map_LT___$1,f__$1,ch__$1,meta20136){
return (new cljs.core.async.t_cljs$core$async20135(map_LT___$1,f__$1,ch__$1,meta20136));
});

}

return (new cljs.core.async.t_cljs$core$async20135(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20144 = (function (map_GT_,f,ch,meta20145){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20145 = meta20145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20146,meta20145__$1){
var self__ = this;
var _20146__$1 = this;
return (new cljs.core.async.t_cljs$core$async20144(self__.map_GT_,self__.f,self__.ch,meta20145__$1));
});

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20146){
var self__ = this;
var _20146__$1 = this;
return self__.meta20145;
});

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20145","meta20145",892078825,null)], null);
});

cljs.core.async.t_cljs$core$async20144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20144";

cljs.core.async.t_cljs$core$async20144.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20144");
});

cljs.core.async.__GT_t_cljs$core$async20144 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20144(map_GT___$1,f__$1,ch__$1,meta20145){
return (new cljs.core.async.t_cljs$core$async20144(map_GT___$1,f__$1,ch__$1,meta20145));
});

}

return (new cljs.core.async.t_cljs$core$async20144(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20150 = (function (filter_GT_,p,ch,meta20151){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20151 = meta20151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20152,meta20151__$1){
var self__ = this;
var _20152__$1 = this;
return (new cljs.core.async.t_cljs$core$async20150(self__.filter_GT_,self__.p,self__.ch,meta20151__$1));
});

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20152){
var self__ = this;
var _20152__$1 = this;
return self__.meta20151;
});

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20151","meta20151",1033663236,null)], null);
});

cljs.core.async.t_cljs$core$async20150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20150";

cljs.core.async.t_cljs$core$async20150.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async20150");
});

cljs.core.async.__GT_t_cljs$core$async20150 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20150(filter_GT___$1,p__$1,ch__$1,meta20151){
return (new cljs.core.async.t_cljs$core$async20150(filter_GT___$1,p__$1,ch__$1,meta20151));
});

}

return (new cljs.core.async.t_cljs$core$async20150(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20153 = [];
var len__6152__auto___20197 = arguments.length;
var i__6153__auto___20198 = (0);
while(true){
if((i__6153__auto___20198 < len__6152__auto___20197)){
args20153.push((arguments[i__6153__auto___20198]));

var G__20199 = (i__6153__auto___20198 + (1));
i__6153__auto___20198 = G__20199;
continue;
} else {
}
break;
}

var G__20155 = args20153.length;
switch (G__20155) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20153.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20201,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20201,out){
return (function (state_20176){
var state_val_20177 = (state_20176[(1)]);
if((state_val_20177 === (7))){
var inst_20172 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
var statearr_20178_20202 = state_20176__$1;
(statearr_20178_20202[(2)] = inst_20172);

(statearr_20178_20202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (1))){
var state_20176__$1 = state_20176;
var statearr_20179_20203 = state_20176__$1;
(statearr_20179_20203[(2)] = null);

(statearr_20179_20203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (4))){
var inst_20158 = (state_20176[(7)]);
var inst_20158__$1 = (state_20176[(2)]);
var inst_20159 = (inst_20158__$1 == null);
var state_20176__$1 = (function (){var statearr_20180 = state_20176;
(statearr_20180[(7)] = inst_20158__$1);

return statearr_20180;
})();
if(cljs.core.truth_(inst_20159)){
var statearr_20181_20204 = state_20176__$1;
(statearr_20181_20204[(1)] = (5));

} else {
var statearr_20182_20205 = state_20176__$1;
(statearr_20182_20205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (6))){
var inst_20158 = (state_20176[(7)]);
var inst_20163 = p.call(null,inst_20158);
var state_20176__$1 = state_20176;
if(cljs.core.truth_(inst_20163)){
var statearr_20183_20206 = state_20176__$1;
(statearr_20183_20206[(1)] = (8));

} else {
var statearr_20184_20207 = state_20176__$1;
(statearr_20184_20207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (3))){
var inst_20174 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20176__$1,inst_20174);
} else {
if((state_val_20177 === (2))){
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20176__$1,(4),ch);
} else {
if((state_val_20177 === (11))){
var inst_20166 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
var statearr_20185_20208 = state_20176__$1;
(statearr_20185_20208[(2)] = inst_20166);

(statearr_20185_20208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (9))){
var state_20176__$1 = state_20176;
var statearr_20186_20209 = state_20176__$1;
(statearr_20186_20209[(2)] = null);

(statearr_20186_20209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (5))){
var inst_20161 = cljs.core.async.close_BANG_.call(null,out);
var state_20176__$1 = state_20176;
var statearr_20187_20210 = state_20176__$1;
(statearr_20187_20210[(2)] = inst_20161);

(statearr_20187_20210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (10))){
var inst_20169 = (state_20176[(2)]);
var state_20176__$1 = (function (){var statearr_20188 = state_20176;
(statearr_20188[(8)] = inst_20169);

return statearr_20188;
})();
var statearr_20189_20211 = state_20176__$1;
(statearr_20189_20211[(2)] = null);

(statearr_20189_20211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (8))){
var inst_20158 = (state_20176[(7)]);
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20176__$1,(11),out,inst_20158);
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
});})(c__8399__auto___20201,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20201,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20193 = [null,null,null,null,null,null,null,null,null];
(statearr_20193[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20193[(1)] = (1));

return statearr_20193;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20176){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20194){if((e20194 instanceof Object)){
var ex__8338__auto__ = e20194;
var statearr_20195_20212 = state_20176;
(statearr_20195_20212[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20213 = state_20176;
state_20176 = G__20213;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20201,out))
})();
var state__8401__auto__ = (function (){var statearr_20196 = f__8400__auto__.call(null);
(statearr_20196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20201);

return statearr_20196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20201,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20214 = [];
var len__6152__auto___20217 = arguments.length;
var i__6153__auto___20218 = (0);
while(true){
if((i__6153__auto___20218 < len__6152__auto___20217)){
args20214.push((arguments[i__6153__auto___20218]));

var G__20219 = (i__6153__auto___20218 + (1));
i__6153__auto___20218 = G__20219;
continue;
} else {
}
break;
}

var G__20216 = args20214.length;
switch (G__20216) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20214.length)].join('')));

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
return (function (state_20386){
var state_val_20387 = (state_20386[(1)]);
if((state_val_20387 === (7))){
var inst_20382 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
var statearr_20388_20429 = state_20386__$1;
(statearr_20388_20429[(2)] = inst_20382);

(statearr_20388_20429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (20))){
var inst_20352 = (state_20386[(7)]);
var inst_20363 = (state_20386[(2)]);
var inst_20364 = cljs.core.next.call(null,inst_20352);
var inst_20338 = inst_20364;
var inst_20339 = null;
var inst_20340 = (0);
var inst_20341 = (0);
var state_20386__$1 = (function (){var statearr_20389 = state_20386;
(statearr_20389[(8)] = inst_20363);

(statearr_20389[(9)] = inst_20338);

(statearr_20389[(10)] = inst_20341);

(statearr_20389[(11)] = inst_20339);

(statearr_20389[(12)] = inst_20340);

return statearr_20389;
})();
var statearr_20390_20430 = state_20386__$1;
(statearr_20390_20430[(2)] = null);

(statearr_20390_20430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (1))){
var state_20386__$1 = state_20386;
var statearr_20391_20431 = state_20386__$1;
(statearr_20391_20431[(2)] = null);

(statearr_20391_20431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (4))){
var inst_20327 = (state_20386[(13)]);
var inst_20327__$1 = (state_20386[(2)]);
var inst_20328 = (inst_20327__$1 == null);
var state_20386__$1 = (function (){var statearr_20392 = state_20386;
(statearr_20392[(13)] = inst_20327__$1);

return statearr_20392;
})();
if(cljs.core.truth_(inst_20328)){
var statearr_20393_20432 = state_20386__$1;
(statearr_20393_20432[(1)] = (5));

} else {
var statearr_20394_20433 = state_20386__$1;
(statearr_20394_20433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (15))){
var state_20386__$1 = state_20386;
var statearr_20398_20434 = state_20386__$1;
(statearr_20398_20434[(2)] = null);

(statearr_20398_20434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (21))){
var state_20386__$1 = state_20386;
var statearr_20399_20435 = state_20386__$1;
(statearr_20399_20435[(2)] = null);

(statearr_20399_20435[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (13))){
var inst_20338 = (state_20386[(9)]);
var inst_20341 = (state_20386[(10)]);
var inst_20339 = (state_20386[(11)]);
var inst_20340 = (state_20386[(12)]);
var inst_20348 = (state_20386[(2)]);
var inst_20349 = (inst_20341 + (1));
var tmp20395 = inst_20338;
var tmp20396 = inst_20339;
var tmp20397 = inst_20340;
var inst_20338__$1 = tmp20395;
var inst_20339__$1 = tmp20396;
var inst_20340__$1 = tmp20397;
var inst_20341__$1 = inst_20349;
var state_20386__$1 = (function (){var statearr_20400 = state_20386;
(statearr_20400[(14)] = inst_20348);

(statearr_20400[(9)] = inst_20338__$1);

(statearr_20400[(10)] = inst_20341__$1);

(statearr_20400[(11)] = inst_20339__$1);

(statearr_20400[(12)] = inst_20340__$1);

return statearr_20400;
})();
var statearr_20401_20436 = state_20386__$1;
(statearr_20401_20436[(2)] = null);

(statearr_20401_20436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (22))){
var state_20386__$1 = state_20386;
var statearr_20402_20437 = state_20386__$1;
(statearr_20402_20437[(2)] = null);

(statearr_20402_20437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (6))){
var inst_20327 = (state_20386[(13)]);
var inst_20336 = f.call(null,inst_20327);
var inst_20337 = cljs.core.seq.call(null,inst_20336);
var inst_20338 = inst_20337;
var inst_20339 = null;
var inst_20340 = (0);
var inst_20341 = (0);
var state_20386__$1 = (function (){var statearr_20403 = state_20386;
(statearr_20403[(9)] = inst_20338);

(statearr_20403[(10)] = inst_20341);

(statearr_20403[(11)] = inst_20339);

(statearr_20403[(12)] = inst_20340);

return statearr_20403;
})();
var statearr_20404_20438 = state_20386__$1;
(statearr_20404_20438[(2)] = null);

(statearr_20404_20438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (17))){
var inst_20352 = (state_20386[(7)]);
var inst_20356 = cljs.core.chunk_first.call(null,inst_20352);
var inst_20357 = cljs.core.chunk_rest.call(null,inst_20352);
var inst_20358 = cljs.core.count.call(null,inst_20356);
var inst_20338 = inst_20357;
var inst_20339 = inst_20356;
var inst_20340 = inst_20358;
var inst_20341 = (0);
var state_20386__$1 = (function (){var statearr_20405 = state_20386;
(statearr_20405[(9)] = inst_20338);

(statearr_20405[(10)] = inst_20341);

(statearr_20405[(11)] = inst_20339);

(statearr_20405[(12)] = inst_20340);

return statearr_20405;
})();
var statearr_20406_20439 = state_20386__$1;
(statearr_20406_20439[(2)] = null);

(statearr_20406_20439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (3))){
var inst_20384 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20386__$1,inst_20384);
} else {
if((state_val_20387 === (12))){
var inst_20372 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
var statearr_20407_20440 = state_20386__$1;
(statearr_20407_20440[(2)] = inst_20372);

(statearr_20407_20440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (2))){
var state_20386__$1 = state_20386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20386__$1,(4),in$);
} else {
if((state_val_20387 === (23))){
var inst_20380 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
var statearr_20408_20441 = state_20386__$1;
(statearr_20408_20441[(2)] = inst_20380);

(statearr_20408_20441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (19))){
var inst_20367 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
var statearr_20409_20442 = state_20386__$1;
(statearr_20409_20442[(2)] = inst_20367);

(statearr_20409_20442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (11))){
var inst_20338 = (state_20386[(9)]);
var inst_20352 = (state_20386[(7)]);
var inst_20352__$1 = cljs.core.seq.call(null,inst_20338);
var state_20386__$1 = (function (){var statearr_20410 = state_20386;
(statearr_20410[(7)] = inst_20352__$1);

return statearr_20410;
})();
if(inst_20352__$1){
var statearr_20411_20443 = state_20386__$1;
(statearr_20411_20443[(1)] = (14));

} else {
var statearr_20412_20444 = state_20386__$1;
(statearr_20412_20444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (9))){
var inst_20374 = (state_20386[(2)]);
var inst_20375 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20386__$1 = (function (){var statearr_20413 = state_20386;
(statearr_20413[(15)] = inst_20374);

return statearr_20413;
})();
if(cljs.core.truth_(inst_20375)){
var statearr_20414_20445 = state_20386__$1;
(statearr_20414_20445[(1)] = (21));

} else {
var statearr_20415_20446 = state_20386__$1;
(statearr_20415_20446[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (5))){
var inst_20330 = cljs.core.async.close_BANG_.call(null,out);
var state_20386__$1 = state_20386;
var statearr_20416_20447 = state_20386__$1;
(statearr_20416_20447[(2)] = inst_20330);

(statearr_20416_20447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (14))){
var inst_20352 = (state_20386[(7)]);
var inst_20354 = cljs.core.chunked_seq_QMARK_.call(null,inst_20352);
var state_20386__$1 = state_20386;
if(inst_20354){
var statearr_20417_20448 = state_20386__$1;
(statearr_20417_20448[(1)] = (17));

} else {
var statearr_20418_20449 = state_20386__$1;
(statearr_20418_20449[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (16))){
var inst_20370 = (state_20386[(2)]);
var state_20386__$1 = state_20386;
var statearr_20419_20450 = state_20386__$1;
(statearr_20419_20450[(2)] = inst_20370);

(statearr_20419_20450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20387 === (10))){
var inst_20341 = (state_20386[(10)]);
var inst_20339 = (state_20386[(11)]);
var inst_20346 = cljs.core._nth.call(null,inst_20339,inst_20341);
var state_20386__$1 = state_20386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20386__$1,(13),out,inst_20346);
} else {
if((state_val_20387 === (18))){
var inst_20352 = (state_20386[(7)]);
var inst_20361 = cljs.core.first.call(null,inst_20352);
var state_20386__$1 = state_20386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20386__$1,(20),out,inst_20361);
} else {
if((state_val_20387 === (8))){
var inst_20341 = (state_20386[(10)]);
var inst_20340 = (state_20386[(12)]);
var inst_20343 = (inst_20341 < inst_20340);
var inst_20344 = inst_20343;
var state_20386__$1 = state_20386;
if(cljs.core.truth_(inst_20344)){
var statearr_20420_20451 = state_20386__$1;
(statearr_20420_20451[(1)] = (10));

} else {
var statearr_20421_20452 = state_20386__$1;
(statearr_20421_20452[(1)] = (11));

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
var statearr_20425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__);

(statearr_20425[(1)] = (1));

return statearr_20425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1 = (function (state_20386){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20426){if((e20426 instanceof Object)){
var ex__8338__auto__ = e20426;
var statearr_20427_20453 = state_20386;
(statearr_20427_20453[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20454 = state_20386;
state_20386 = G__20454;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__ = function(state_20386){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1.call(this,state_20386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto__))
})();
var state__8401__auto__ = (function (){var statearr_20428 = f__8400__auto__.call(null);
(statearr_20428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto__);

return statearr_20428;
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
var args20455 = [];
var len__6152__auto___20458 = arguments.length;
var i__6153__auto___20459 = (0);
while(true){
if((i__6153__auto___20459 < len__6152__auto___20458)){
args20455.push((arguments[i__6153__auto___20459]));

var G__20460 = (i__6153__auto___20459 + (1));
i__6153__auto___20459 = G__20460;
continue;
} else {
}
break;
}

var G__20457 = args20455.length;
switch (G__20457) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20455.length)].join('')));

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
var args20462 = [];
var len__6152__auto___20465 = arguments.length;
var i__6153__auto___20466 = (0);
while(true){
if((i__6153__auto___20466 < len__6152__auto___20465)){
args20462.push((arguments[i__6153__auto___20466]));

var G__20467 = (i__6153__auto___20466 + (1));
i__6153__auto___20466 = G__20467;
continue;
} else {
}
break;
}

var G__20464 = args20462.length;
switch (G__20464) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20462.length)].join('')));

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
var args20469 = [];
var len__6152__auto___20520 = arguments.length;
var i__6153__auto___20521 = (0);
while(true){
if((i__6153__auto___20521 < len__6152__auto___20520)){
args20469.push((arguments[i__6153__auto___20521]));

var G__20522 = (i__6153__auto___20521 + (1));
i__6153__auto___20521 = G__20522;
continue;
} else {
}
break;
}

var G__20471 = args20469.length;
switch (G__20471) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20469.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20524,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20524,out){
return (function (state_20495){
var state_val_20496 = (state_20495[(1)]);
if((state_val_20496 === (7))){
var inst_20490 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20497_20525 = state_20495__$1;
(statearr_20497_20525[(2)] = inst_20490);

(statearr_20497_20525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (1))){
var inst_20472 = null;
var state_20495__$1 = (function (){var statearr_20498 = state_20495;
(statearr_20498[(7)] = inst_20472);

return statearr_20498;
})();
var statearr_20499_20526 = state_20495__$1;
(statearr_20499_20526[(2)] = null);

(statearr_20499_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (4))){
var inst_20475 = (state_20495[(8)]);
var inst_20475__$1 = (state_20495[(2)]);
var inst_20476 = (inst_20475__$1 == null);
var inst_20477 = cljs.core.not.call(null,inst_20476);
var state_20495__$1 = (function (){var statearr_20500 = state_20495;
(statearr_20500[(8)] = inst_20475__$1);

return statearr_20500;
})();
if(inst_20477){
var statearr_20501_20527 = state_20495__$1;
(statearr_20501_20527[(1)] = (5));

} else {
var statearr_20502_20528 = state_20495__$1;
(statearr_20502_20528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (6))){
var state_20495__$1 = state_20495;
var statearr_20503_20529 = state_20495__$1;
(statearr_20503_20529[(2)] = null);

(statearr_20503_20529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (3))){
var inst_20492 = (state_20495[(2)]);
var inst_20493 = cljs.core.async.close_BANG_.call(null,out);
var state_20495__$1 = (function (){var statearr_20504 = state_20495;
(statearr_20504[(9)] = inst_20492);

return statearr_20504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20495__$1,inst_20493);
} else {
if((state_val_20496 === (2))){
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20495__$1,(4),ch);
} else {
if((state_val_20496 === (11))){
var inst_20475 = (state_20495[(8)]);
var inst_20484 = (state_20495[(2)]);
var inst_20472 = inst_20475;
var state_20495__$1 = (function (){var statearr_20505 = state_20495;
(statearr_20505[(7)] = inst_20472);

(statearr_20505[(10)] = inst_20484);

return statearr_20505;
})();
var statearr_20506_20530 = state_20495__$1;
(statearr_20506_20530[(2)] = null);

(statearr_20506_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (9))){
var inst_20475 = (state_20495[(8)]);
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20495__$1,(11),out,inst_20475);
} else {
if((state_val_20496 === (5))){
var inst_20472 = (state_20495[(7)]);
var inst_20475 = (state_20495[(8)]);
var inst_20479 = cljs.core._EQ_.call(null,inst_20475,inst_20472);
var state_20495__$1 = state_20495;
if(inst_20479){
var statearr_20508_20531 = state_20495__$1;
(statearr_20508_20531[(1)] = (8));

} else {
var statearr_20509_20532 = state_20495__$1;
(statearr_20509_20532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (10))){
var inst_20487 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20510_20533 = state_20495__$1;
(statearr_20510_20533[(2)] = inst_20487);

(statearr_20510_20533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (8))){
var inst_20472 = (state_20495[(7)]);
var tmp20507 = inst_20472;
var inst_20472__$1 = tmp20507;
var state_20495__$1 = (function (){var statearr_20511 = state_20495;
(statearr_20511[(7)] = inst_20472__$1);

return statearr_20511;
})();
var statearr_20512_20534 = state_20495__$1;
(statearr_20512_20534[(2)] = null);

(statearr_20512_20534[(1)] = (2));


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
});})(c__8399__auto___20524,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20524,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20516[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20516[(1)] = (1));

return statearr_20516;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20495){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20517){if((e20517 instanceof Object)){
var ex__8338__auto__ = e20517;
var statearr_20518_20535 = state_20495;
(statearr_20518_20535[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20536 = state_20495;
state_20495 = G__20536;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20524,out))
})();
var state__8401__auto__ = (function (){var statearr_20519 = f__8400__auto__.call(null);
(statearr_20519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20524);

return statearr_20519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20524,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20537 = [];
var len__6152__auto___20607 = arguments.length;
var i__6153__auto___20608 = (0);
while(true){
if((i__6153__auto___20608 < len__6152__auto___20607)){
args20537.push((arguments[i__6153__auto___20608]));

var G__20609 = (i__6153__auto___20608 + (1));
i__6153__auto___20608 = G__20609;
continue;
} else {
}
break;
}

var G__20539 = args20537.length;
switch (G__20539) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20537.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20611,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20611,out){
return (function (state_20577){
var state_val_20578 = (state_20577[(1)]);
if((state_val_20578 === (7))){
var inst_20573 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
var statearr_20579_20612 = state_20577__$1;
(statearr_20579_20612[(2)] = inst_20573);

(statearr_20579_20612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (1))){
var inst_20540 = (new Array(n));
var inst_20541 = inst_20540;
var inst_20542 = (0);
var state_20577__$1 = (function (){var statearr_20580 = state_20577;
(statearr_20580[(7)] = inst_20542);

(statearr_20580[(8)] = inst_20541);

return statearr_20580;
})();
var statearr_20581_20613 = state_20577__$1;
(statearr_20581_20613[(2)] = null);

(statearr_20581_20613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (4))){
var inst_20545 = (state_20577[(9)]);
var inst_20545__$1 = (state_20577[(2)]);
var inst_20546 = (inst_20545__$1 == null);
var inst_20547 = cljs.core.not.call(null,inst_20546);
var state_20577__$1 = (function (){var statearr_20582 = state_20577;
(statearr_20582[(9)] = inst_20545__$1);

return statearr_20582;
})();
if(inst_20547){
var statearr_20583_20614 = state_20577__$1;
(statearr_20583_20614[(1)] = (5));

} else {
var statearr_20584_20615 = state_20577__$1;
(statearr_20584_20615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (15))){
var inst_20567 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
var statearr_20585_20616 = state_20577__$1;
(statearr_20585_20616[(2)] = inst_20567);

(statearr_20585_20616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (13))){
var state_20577__$1 = state_20577;
var statearr_20586_20617 = state_20577__$1;
(statearr_20586_20617[(2)] = null);

(statearr_20586_20617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (6))){
var inst_20542 = (state_20577[(7)]);
var inst_20563 = (inst_20542 > (0));
var state_20577__$1 = state_20577;
if(cljs.core.truth_(inst_20563)){
var statearr_20587_20618 = state_20577__$1;
(statearr_20587_20618[(1)] = (12));

} else {
var statearr_20588_20619 = state_20577__$1;
(statearr_20588_20619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (3))){
var inst_20575 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20577__$1,inst_20575);
} else {
if((state_val_20578 === (12))){
var inst_20541 = (state_20577[(8)]);
var inst_20565 = cljs.core.vec.call(null,inst_20541);
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20577__$1,(15),out,inst_20565);
} else {
if((state_val_20578 === (2))){
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20577__$1,(4),ch);
} else {
if((state_val_20578 === (11))){
var inst_20557 = (state_20577[(2)]);
var inst_20558 = (new Array(n));
var inst_20541 = inst_20558;
var inst_20542 = (0);
var state_20577__$1 = (function (){var statearr_20589 = state_20577;
(statearr_20589[(7)] = inst_20542);

(statearr_20589[(10)] = inst_20557);

(statearr_20589[(8)] = inst_20541);

return statearr_20589;
})();
var statearr_20590_20620 = state_20577__$1;
(statearr_20590_20620[(2)] = null);

(statearr_20590_20620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (9))){
var inst_20541 = (state_20577[(8)]);
var inst_20555 = cljs.core.vec.call(null,inst_20541);
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20577__$1,(11),out,inst_20555);
} else {
if((state_val_20578 === (5))){
var inst_20542 = (state_20577[(7)]);
var inst_20545 = (state_20577[(9)]);
var inst_20550 = (state_20577[(11)]);
var inst_20541 = (state_20577[(8)]);
var inst_20549 = (inst_20541[inst_20542] = inst_20545);
var inst_20550__$1 = (inst_20542 + (1));
var inst_20551 = (inst_20550__$1 < n);
var state_20577__$1 = (function (){var statearr_20591 = state_20577;
(statearr_20591[(11)] = inst_20550__$1);

(statearr_20591[(12)] = inst_20549);

return statearr_20591;
})();
if(cljs.core.truth_(inst_20551)){
var statearr_20592_20621 = state_20577__$1;
(statearr_20592_20621[(1)] = (8));

} else {
var statearr_20593_20622 = state_20577__$1;
(statearr_20593_20622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (14))){
var inst_20570 = (state_20577[(2)]);
var inst_20571 = cljs.core.async.close_BANG_.call(null,out);
var state_20577__$1 = (function (){var statearr_20595 = state_20577;
(statearr_20595[(13)] = inst_20570);

return statearr_20595;
})();
var statearr_20596_20623 = state_20577__$1;
(statearr_20596_20623[(2)] = inst_20571);

(statearr_20596_20623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (10))){
var inst_20561 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
var statearr_20597_20624 = state_20577__$1;
(statearr_20597_20624[(2)] = inst_20561);

(statearr_20597_20624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (8))){
var inst_20550 = (state_20577[(11)]);
var inst_20541 = (state_20577[(8)]);
var tmp20594 = inst_20541;
var inst_20541__$1 = tmp20594;
var inst_20542 = inst_20550;
var state_20577__$1 = (function (){var statearr_20598 = state_20577;
(statearr_20598[(7)] = inst_20542);

(statearr_20598[(8)] = inst_20541__$1);

return statearr_20598;
})();
var statearr_20599_20625 = state_20577__$1;
(statearr_20599_20625[(2)] = null);

(statearr_20599_20625[(1)] = (2));


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
});})(c__8399__auto___20611,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20611,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20603[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20603[(1)] = (1));

return statearr_20603;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20577){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20604){if((e20604 instanceof Object)){
var ex__8338__auto__ = e20604;
var statearr_20605_20626 = state_20577;
(statearr_20605_20626[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20627 = state_20577;
state_20577 = G__20627;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20611,out))
})();
var state__8401__auto__ = (function (){var statearr_20606 = f__8400__auto__.call(null);
(statearr_20606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20611);

return statearr_20606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20611,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20628 = [];
var len__6152__auto___20702 = arguments.length;
var i__6153__auto___20703 = (0);
while(true){
if((i__6153__auto___20703 < len__6152__auto___20702)){
args20628.push((arguments[i__6153__auto___20703]));

var G__20704 = (i__6153__auto___20703 + (1));
i__6153__auto___20703 = G__20704;
continue;
} else {
}
break;
}

var G__20630 = args20628.length;
switch (G__20630) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20628.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8399__auto___20706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8399__auto___20706,out){
return (function (){
var f__8400__auto__ = (function (){var switch__8334__auto__ = ((function (c__8399__auto___20706,out){
return (function (state_20672){
var state_val_20673 = (state_20672[(1)]);
if((state_val_20673 === (7))){
var inst_20668 = (state_20672[(2)]);
var state_20672__$1 = state_20672;
var statearr_20674_20707 = state_20672__$1;
(statearr_20674_20707[(2)] = inst_20668);

(statearr_20674_20707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (1))){
var inst_20631 = [];
var inst_20632 = inst_20631;
var inst_20633 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20672__$1 = (function (){var statearr_20675 = state_20672;
(statearr_20675[(7)] = inst_20632);

(statearr_20675[(8)] = inst_20633);

return statearr_20675;
})();
var statearr_20676_20708 = state_20672__$1;
(statearr_20676_20708[(2)] = null);

(statearr_20676_20708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (4))){
var inst_20636 = (state_20672[(9)]);
var inst_20636__$1 = (state_20672[(2)]);
var inst_20637 = (inst_20636__$1 == null);
var inst_20638 = cljs.core.not.call(null,inst_20637);
var state_20672__$1 = (function (){var statearr_20677 = state_20672;
(statearr_20677[(9)] = inst_20636__$1);

return statearr_20677;
})();
if(inst_20638){
var statearr_20678_20709 = state_20672__$1;
(statearr_20678_20709[(1)] = (5));

} else {
var statearr_20679_20710 = state_20672__$1;
(statearr_20679_20710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (15))){
var inst_20662 = (state_20672[(2)]);
var state_20672__$1 = state_20672;
var statearr_20680_20711 = state_20672__$1;
(statearr_20680_20711[(2)] = inst_20662);

(statearr_20680_20711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (13))){
var state_20672__$1 = state_20672;
var statearr_20681_20712 = state_20672__$1;
(statearr_20681_20712[(2)] = null);

(statearr_20681_20712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (6))){
var inst_20632 = (state_20672[(7)]);
var inst_20657 = inst_20632.length;
var inst_20658 = (inst_20657 > (0));
var state_20672__$1 = state_20672;
if(cljs.core.truth_(inst_20658)){
var statearr_20682_20713 = state_20672__$1;
(statearr_20682_20713[(1)] = (12));

} else {
var statearr_20683_20714 = state_20672__$1;
(statearr_20683_20714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (3))){
var inst_20670 = (state_20672[(2)]);
var state_20672__$1 = state_20672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20672__$1,inst_20670);
} else {
if((state_val_20673 === (12))){
var inst_20632 = (state_20672[(7)]);
var inst_20660 = cljs.core.vec.call(null,inst_20632);
var state_20672__$1 = state_20672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20672__$1,(15),out,inst_20660);
} else {
if((state_val_20673 === (2))){
var state_20672__$1 = state_20672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20672__$1,(4),ch);
} else {
if((state_val_20673 === (11))){
var inst_20636 = (state_20672[(9)]);
var inst_20640 = (state_20672[(10)]);
var inst_20650 = (state_20672[(2)]);
var inst_20651 = [];
var inst_20652 = inst_20651.push(inst_20636);
var inst_20632 = inst_20651;
var inst_20633 = inst_20640;
var state_20672__$1 = (function (){var statearr_20684 = state_20672;
(statearr_20684[(7)] = inst_20632);

(statearr_20684[(8)] = inst_20633);

(statearr_20684[(11)] = inst_20650);

(statearr_20684[(12)] = inst_20652);

return statearr_20684;
})();
var statearr_20685_20715 = state_20672__$1;
(statearr_20685_20715[(2)] = null);

(statearr_20685_20715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (9))){
var inst_20632 = (state_20672[(7)]);
var inst_20648 = cljs.core.vec.call(null,inst_20632);
var state_20672__$1 = state_20672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20672__$1,(11),out,inst_20648);
} else {
if((state_val_20673 === (5))){
var inst_20633 = (state_20672[(8)]);
var inst_20636 = (state_20672[(9)]);
var inst_20640 = (state_20672[(10)]);
var inst_20640__$1 = f.call(null,inst_20636);
var inst_20641 = cljs.core._EQ_.call(null,inst_20640__$1,inst_20633);
var inst_20642 = cljs.core.keyword_identical_QMARK_.call(null,inst_20633,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20643 = (inst_20641) || (inst_20642);
var state_20672__$1 = (function (){var statearr_20686 = state_20672;
(statearr_20686[(10)] = inst_20640__$1);

return statearr_20686;
})();
if(cljs.core.truth_(inst_20643)){
var statearr_20687_20716 = state_20672__$1;
(statearr_20687_20716[(1)] = (8));

} else {
var statearr_20688_20717 = state_20672__$1;
(statearr_20688_20717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (14))){
var inst_20665 = (state_20672[(2)]);
var inst_20666 = cljs.core.async.close_BANG_.call(null,out);
var state_20672__$1 = (function (){var statearr_20690 = state_20672;
(statearr_20690[(13)] = inst_20665);

return statearr_20690;
})();
var statearr_20691_20718 = state_20672__$1;
(statearr_20691_20718[(2)] = inst_20666);

(statearr_20691_20718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (10))){
var inst_20655 = (state_20672[(2)]);
var state_20672__$1 = state_20672;
var statearr_20692_20719 = state_20672__$1;
(statearr_20692_20719[(2)] = inst_20655);

(statearr_20692_20719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20673 === (8))){
var inst_20632 = (state_20672[(7)]);
var inst_20636 = (state_20672[(9)]);
var inst_20640 = (state_20672[(10)]);
var inst_20645 = inst_20632.push(inst_20636);
var tmp20689 = inst_20632;
var inst_20632__$1 = tmp20689;
var inst_20633 = inst_20640;
var state_20672__$1 = (function (){var statearr_20693 = state_20672;
(statearr_20693[(14)] = inst_20645);

(statearr_20693[(7)] = inst_20632__$1);

(statearr_20693[(8)] = inst_20633);

return statearr_20693;
})();
var statearr_20694_20720 = state_20672__$1;
(statearr_20694_20720[(2)] = null);

(statearr_20694_20720[(1)] = (2));


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
});})(c__8399__auto___20706,out))
;
return ((function (switch__8334__auto__,c__8399__auto___20706,out){
return (function() {
var cljs$core$async$state_machine__8335__auto__ = null;
var cljs$core$async$state_machine__8335__auto____0 = (function (){
var statearr_20698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20698[(0)] = cljs$core$async$state_machine__8335__auto__);

(statearr_20698[(1)] = (1));

return statearr_20698;
});
var cljs$core$async$state_machine__8335__auto____1 = (function (state_20672){
while(true){
var ret_value__8336__auto__ = (function (){try{while(true){
var result__8337__auto__ = switch__8334__auto__.call(null,state_20672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8337__auto__;
}
break;
}
}catch (e20699){if((e20699 instanceof Object)){
var ex__8338__auto__ = e20699;
var statearr_20700_20721 = state_20672;
(statearr_20700_20721[(5)] = ex__8338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20722 = state_20672;
state_20672 = G__20722;
continue;
} else {
return ret_value__8336__auto__;
}
break;
}
});
cljs$core$async$state_machine__8335__auto__ = function(state_20672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8335__auto____1.call(this,state_20672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8335__auto____0;
cljs$core$async$state_machine__8335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8335__auto____1;
return cljs$core$async$state_machine__8335__auto__;
})()
;})(switch__8334__auto__,c__8399__auto___20706,out))
})();
var state__8401__auto__ = (function (){var statearr_20701 = f__8400__auto__.call(null);
(statearr_20701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8399__auto___20706);

return statearr_20701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8401__auto__);
});})(c__8399__auto___20706,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map