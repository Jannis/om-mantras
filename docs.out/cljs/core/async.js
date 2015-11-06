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
if(typeof cljs.core.async.t_cljs$core$async22809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22809 = (function (fn_handler,f,meta22810){
this.fn_handler = fn_handler;
this.f = f;
this.meta22810 = meta22810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22811,meta22810__$1){
var self__ = this;
var _22811__$1 = this;
return (new cljs.core.async.t_cljs$core$async22809(self__.fn_handler,self__.f,meta22810__$1));
});

cljs.core.async.t_cljs$core$async22809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22811){
var self__ = this;
var _22811__$1 = this;
return self__.meta22810;
});

cljs.core.async.t_cljs$core$async22809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta22810], null);
});

cljs.core.async.t_cljs$core$async22809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22809";

cljs.core.async.t_cljs$core$async22809.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22809");
});

cljs.core.async.__GT_t_cljs$core$async22809 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22809(fn_handler__$1,f__$1,meta22810){
return (new cljs.core.async.t_cljs$core$async22809(fn_handler__$1,f__$1,meta22810));
});

}

return (new cljs.core.async.t_cljs$core$async22809(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args22814 = [];
var len__6152__auto___22817 = arguments.length;
var i__6153__auto___22818 = (0);
while(true){
if((i__6153__auto___22818 < len__6152__auto___22817)){
args22814.push((arguments[i__6153__auto___22818]));

var G__22819 = (i__6153__auto___22818 + (1));
i__6153__auto___22818 = G__22819;
continue;
} else {
}
break;
}

var G__22816 = args22814.length;
switch (G__22816) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22814.length)].join('')));

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
var args22821 = [];
var len__6152__auto___22824 = arguments.length;
var i__6153__auto___22825 = (0);
while(true){
if((i__6153__auto___22825 < len__6152__auto___22824)){
args22821.push((arguments[i__6153__auto___22825]));

var G__22826 = (i__6153__auto___22825 + (1));
i__6153__auto___22825 = G__22826;
continue;
} else {
}
break;
}

var G__22823 = args22821.length;
switch (G__22823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22821.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_22828 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22828) : fn1.call(null,val_22828));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22828,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22828) : fn1.call(null,val_22828));
});})(val_22828,ret))
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
var args22829 = [];
var len__6152__auto___22832 = arguments.length;
var i__6153__auto___22833 = (0);
while(true){
if((i__6153__auto___22833 < len__6152__auto___22832)){
args22829.push((arguments[i__6153__auto___22833]));

var G__22834 = (i__6153__auto___22833 + (1));
i__6153__auto___22833 = G__22834;
continue;
} else {
}
break;
}

var G__22831 = args22829.length;
switch (G__22831) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22829.length)].join('')));

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
var n__5997__auto___22836 = n;
var x_22837 = (0);
while(true){
if((x_22837 < n__5997__auto___22836)){
(a[x_22837] = (0));

var G__22838 = (x_22837 + (1));
x_22837 = G__22838;
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

var G__22839 = (i + (1));
i = G__22839;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async22843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22843 = (function (alt_flag,flag,meta22844){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22844 = meta22844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22845,meta22844__$1){
var self__ = this;
var _22845__$1 = this;
return (new cljs.core.async.t_cljs$core$async22843(self__.alt_flag,self__.flag,meta22844__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22845){
var self__ = this;
var _22845__$1 = this;
return self__.meta22844;
});})(flag))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22843.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22844], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22843";

cljs.core.async.t_cljs$core$async22843.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22843");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22843 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22843(alt_flag__$1,flag__$1,meta22844){
return (new cljs.core.async.t_cljs$core$async22843(alt_flag__$1,flag__$1,meta22844));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22843(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22849 = (function (alt_handler,flag,cb,meta22850){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22850 = meta22850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22851,meta22850__$1){
var self__ = this;
var _22851__$1 = this;
return (new cljs.core.async.t_cljs$core$async22849(self__.alt_handler,self__.flag,self__.cb,meta22850__$1));
});

cljs.core.async.t_cljs$core$async22849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22851){
var self__ = this;
var _22851__$1 = this;
return self__.meta22850;
});

cljs.core.async.t_cljs$core$async22849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22850], null);
});

cljs.core.async.t_cljs$core$async22849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22849";

cljs.core.async.t_cljs$core$async22849.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async22849");
});

cljs.core.async.__GT_t_cljs$core$async22849 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22849(alt_handler__$1,flag__$1,cb__$1,meta22850){
return (new cljs.core.async.t_cljs$core$async22849(alt_handler__$1,flag__$1,cb__$1,meta22850));
});

}

return (new cljs.core.async.t_cljs$core$async22849(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22852_SHARP_){
var G__22856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22852_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22856) : fret.call(null,G__22856));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22853_SHARP_){
var G__22857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22853_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22857) : fret.call(null,G__22857));
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
var G__22858 = (i + (1));
i = G__22858;
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
var len__6152__auto___22864 = arguments.length;
var i__6153__auto___22865 = (0);
while(true){
if((i__6153__auto___22865 < len__6152__auto___22864)){
args__6159__auto__.push((arguments[i__6153__auto___22865]));

var G__22866 = (i__6153__auto___22865 + (1));
i__6153__auto___22865 = G__22866;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22861){
var map__22862 = p__22861;
var map__22862__$1 = ((((!((map__22862 == null)))?((((map__22862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22862):map__22862);
var opts = map__22862__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22859){
var G__22860 = cljs.core.first(seq22859);
var seq22859__$1 = cljs.core.next(seq22859);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22860,seq22859__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22867 = [];
var len__6152__auto___22917 = arguments.length;
var i__6153__auto___22918 = (0);
while(true){
if((i__6153__auto___22918 < len__6152__auto___22917)){
args22867.push((arguments[i__6153__auto___22918]));

var G__22919 = (i__6153__auto___22918 + (1));
i__6153__auto___22918 = G__22919;
continue;
} else {
}
break;
}

var G__22869 = args22867.length;
switch (G__22869) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22867.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10081__auto___22921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___22921){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___22921){
return (function (state_22893){
var state_val_22894 = (state_22893[(1)]);
if((state_val_22894 === (7))){
var inst_22889 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22895_22922 = state_22893__$1;
(statearr_22895_22922[(2)] = inst_22889);

(statearr_22895_22922[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (1))){
var state_22893__$1 = state_22893;
var statearr_22896_22923 = state_22893__$1;
(statearr_22896_22923[(2)] = null);

(statearr_22896_22923[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (4))){
var inst_22872 = (state_22893[(7)]);
var inst_22872__$1 = (state_22893[(2)]);
var inst_22873 = (inst_22872__$1 == null);
var state_22893__$1 = (function (){var statearr_22897 = state_22893;
(statearr_22897[(7)] = inst_22872__$1);

return statearr_22897;
})();
if(cljs.core.truth_(inst_22873)){
var statearr_22898_22924 = state_22893__$1;
(statearr_22898_22924[(1)] = (5));

} else {
var statearr_22899_22925 = state_22893__$1;
(statearr_22899_22925[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (13))){
var state_22893__$1 = state_22893;
var statearr_22900_22926 = state_22893__$1;
(statearr_22900_22926[(2)] = null);

(statearr_22900_22926[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (6))){
var inst_22872 = (state_22893[(7)]);
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22893__$1,(11),to,inst_22872);
} else {
if((state_val_22894 === (3))){
var inst_22891 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22893__$1,inst_22891);
} else {
if((state_val_22894 === (12))){
var state_22893__$1 = state_22893;
var statearr_22901_22927 = state_22893__$1;
(statearr_22901_22927[(2)] = null);

(statearr_22901_22927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (2))){
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22893__$1,(4),from);
} else {
if((state_val_22894 === (11))){
var inst_22882 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
if(cljs.core.truth_(inst_22882)){
var statearr_22902_22928 = state_22893__$1;
(statearr_22902_22928[(1)] = (12));

} else {
var statearr_22903_22929 = state_22893__$1;
(statearr_22903_22929[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (9))){
var state_22893__$1 = state_22893;
var statearr_22904_22930 = state_22893__$1;
(statearr_22904_22930[(2)] = null);

(statearr_22904_22930[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (5))){
var state_22893__$1 = state_22893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22905_22931 = state_22893__$1;
(statearr_22905_22931[(1)] = (8));

} else {
var statearr_22906_22932 = state_22893__$1;
(statearr_22906_22932[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (14))){
var inst_22887 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22907_22933 = state_22893__$1;
(statearr_22907_22933[(2)] = inst_22887);

(statearr_22907_22933[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (10))){
var inst_22879 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22908_22934 = state_22893__$1;
(statearr_22908_22934[(2)] = inst_22879);

(statearr_22908_22934[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22894 === (8))){
var inst_22876 = cljs.core.async.close_BANG_(to);
var state_22893__$1 = state_22893;
var statearr_22909_22935 = state_22893__$1;
(statearr_22909_22935[(2)] = inst_22876);

(statearr_22909_22935[(1)] = (10));


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
});})(c__10081__auto___22921))
;
return ((function (switch__10014__auto__,c__10081__auto___22921){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_22913 = [null,null,null,null,null,null,null,null];
(statearr_22913[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_22913[(1)] = (1));

return statearr_22913;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_22893){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22893);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22914){if((e22914 instanceof Object)){
var ex__10018__auto__ = e22914;
var statearr_22915_22936 = state_22893;
(statearr_22915_22936[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22893);

return cljs.core.cst$kw$recur;
} else {
throw e22914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22937 = state_22893;
state_22893 = G__22937;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_22893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_22893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___22921))
})();
var state__10083__auto__ = (function (){var statearr_22916 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___22921);

return statearr_22916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___22921))
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
return (function (p__23121){
var vec__23122 = p__23121;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23122,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23122,(1),null);
var job = vec__23122;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10081__auto___23304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results){
return (function (state_23127){
var state_val_23128 = (state_23127[(1)]);
if((state_val_23128 === (1))){
var state_23127__$1 = state_23127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23127__$1,(2),res,v);
} else {
if((state_val_23128 === (2))){
var inst_23124 = (state_23127[(2)]);
var inst_23125 = cljs.core.async.close_BANG_(res);
var state_23127__$1 = (function (){var statearr_23129 = state_23127;
(statearr_23129[(7)] = inst_23124);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23127__$1,inst_23125);
} else {
return null;
}
}
});})(c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results))
;
return ((function (switch__10014__auto__,c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_23133 = [null,null,null,null,null,null,null,null];
(statearr_23133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_23133[(1)] = (1));

return statearr_23133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_23127){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23127);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23134){if((e23134 instanceof Object)){
var ex__10018__auto__ = e23134;
var statearr_23135_23305 = state_23127;
(statearr_23135_23305[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23127);

return cljs.core.cst$kw$recur;
} else {
throw e23134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23306 = state_23127;
state_23127 = G__23306;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_23127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_23127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results))
})();
var state__10083__auto__ = (function (){var statearr_23136 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___23304);

return statearr_23136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___23304,res,vec__23122,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23137){
var vec__23138 = p__23137;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23138,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23138,(1),null);
var job = vec__23138;
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
var n__5997__auto___23307 = n;
var __23308 = (0);
while(true){
if((__23308 < n__5997__auto___23307)){
var G__23139_23309 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23139_23309) {
case "compute":
var c__10081__auto___23311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23308,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (__23308,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function (state_23152){
var state_val_23153 = (state_23152[(1)]);
if((state_val_23153 === (1))){
var state_23152__$1 = state_23152;
var statearr_23154_23312 = state_23152__$1;
(statearr_23154_23312[(2)] = null);

(statearr_23154_23312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23153 === (2))){
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23152__$1,(4),jobs);
} else {
if((state_val_23153 === (3))){
var inst_23150 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23152__$1,inst_23150);
} else {
if((state_val_23153 === (4))){
var inst_23142 = (state_23152[(2)]);
var inst_23143 = process(inst_23142);
var state_23152__$1 = state_23152;
if(cljs.core.truth_(inst_23143)){
var statearr_23155_23313 = state_23152__$1;
(statearr_23155_23313[(1)] = (5));

} else {
var statearr_23156_23314 = state_23152__$1;
(statearr_23156_23314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23153 === (5))){
var state_23152__$1 = state_23152;
var statearr_23157_23315 = state_23152__$1;
(statearr_23157_23315[(2)] = null);

(statearr_23157_23315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23153 === (6))){
var state_23152__$1 = state_23152;
var statearr_23158_23316 = state_23152__$1;
(statearr_23158_23316[(2)] = null);

(statearr_23158_23316[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23153 === (7))){
var inst_23148 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23159_23317 = state_23152__$1;
(statearr_23159_23317[(2)] = inst_23148);

(statearr_23159_23317[(1)] = (3));


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
});})(__23308,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
;
return ((function (__23308,switch__10014__auto__,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_23163 = [null,null,null,null,null,null,null];
(statearr_23163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_23163[(1)] = (1));

return statearr_23163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_23152){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23152);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object)){
var ex__10018__auto__ = e23164;
var statearr_23165_23318 = state_23152;
(statearr_23165_23318[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23152);

return cljs.core.cst$kw$recur;
} else {
throw e23164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23319 = state_23152;
state_23152 = G__23319;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_23152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_23152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__23308,switch__10014__auto__,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_23166 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___23311);

return statearr_23166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(__23308,c__10081__auto___23311,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
);


break;
case "async":
var c__10081__auto___23320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23308,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (__23308,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (1))){
var state_23179__$1 = state_23179;
var statearr_23181_23321 = state_23179__$1;
(statearr_23181_23321[(2)] = null);

(statearr_23181_23321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23180 === (2))){
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23179__$1,(4),jobs);
} else {
if((state_val_23180 === (3))){
var inst_23177 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23179__$1,inst_23177);
} else {
if((state_val_23180 === (4))){
var inst_23169 = (state_23179[(2)]);
var inst_23170 = async(inst_23169);
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23170)){
var statearr_23182_23322 = state_23179__$1;
(statearr_23182_23322[(1)] = (5));

} else {
var statearr_23183_23323 = state_23179__$1;
(statearr_23183_23323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23180 === (5))){
var state_23179__$1 = state_23179;
var statearr_23184_23324 = state_23179__$1;
(statearr_23184_23324[(2)] = null);

(statearr_23184_23324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23180 === (6))){
var state_23179__$1 = state_23179;
var statearr_23185_23325 = state_23179__$1;
(statearr_23185_23325[(2)] = null);

(statearr_23185_23325[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23180 === (7))){
var inst_23175 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23186_23326 = state_23179__$1;
(statearr_23186_23326[(2)] = inst_23175);

(statearr_23186_23326[(1)] = (3));


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
});})(__23308,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
;
return ((function (__23308,switch__10014__auto__,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_23190 = [null,null,null,null,null,null,null];
(statearr_23190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_23190[(1)] = (1));

return statearr_23190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_23179){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23179);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23191){if((e23191 instanceof Object)){
var ex__10018__auto__ = e23191;
var statearr_23192_23327 = state_23179;
(statearr_23192_23327[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23179);

return cljs.core.cst$kw$recur;
} else {
throw e23191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23328 = state_23179;
state_23179 = G__23328;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__23308,switch__10014__auto__,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_23193 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___23320);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(__23308,c__10081__auto___23320,G__23139_23309,n__5997__auto___23307,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23329 = (__23308 + (1));
__23308 = G__23329;
continue;
} else {
}
break;
}

var c__10081__auto___23330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___23330,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___23330,jobs,results,process,async){
return (function (state_23215){
var state_val_23216 = (state_23215[(1)]);
if((state_val_23216 === (1))){
var state_23215__$1 = state_23215;
var statearr_23217_23331 = state_23215__$1;
(statearr_23217_23331[(2)] = null);

(statearr_23217_23331[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23216 === (2))){
var state_23215__$1 = state_23215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23215__$1,(4),from);
} else {
if((state_val_23216 === (3))){
var inst_23213 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23215__$1,inst_23213);
} else {
if((state_val_23216 === (4))){
var inst_23196 = (state_23215[(7)]);
var inst_23196__$1 = (state_23215[(2)]);
var inst_23197 = (inst_23196__$1 == null);
var state_23215__$1 = (function (){var statearr_23218 = state_23215;
(statearr_23218[(7)] = inst_23196__$1);

return statearr_23218;
})();
if(cljs.core.truth_(inst_23197)){
var statearr_23219_23332 = state_23215__$1;
(statearr_23219_23332[(1)] = (5));

} else {
var statearr_23220_23333 = state_23215__$1;
(statearr_23220_23333[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23216 === (5))){
var inst_23199 = cljs.core.async.close_BANG_(jobs);
var state_23215__$1 = state_23215;
var statearr_23221_23334 = state_23215__$1;
(statearr_23221_23334[(2)] = inst_23199);

(statearr_23221_23334[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23216 === (6))){
var inst_23196 = (state_23215[(7)]);
var inst_23201 = (state_23215[(8)]);
var inst_23201__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23203 = [inst_23196,inst_23201__$1];
var inst_23204 = (new cljs.core.PersistentVector(null,2,(5),inst_23202,inst_23203,null));
var state_23215__$1 = (function (){var statearr_23222 = state_23215;
(statearr_23222[(8)] = inst_23201__$1);

return statearr_23222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23215__$1,(8),jobs,inst_23204);
} else {
if((state_val_23216 === (7))){
var inst_23211 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
var statearr_23223_23335 = state_23215__$1;
(statearr_23223_23335[(2)] = inst_23211);

(statearr_23223_23335[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23216 === (8))){
var inst_23201 = (state_23215[(8)]);
var inst_23206 = (state_23215[(2)]);
var state_23215__$1 = (function (){var statearr_23224 = state_23215;
(statearr_23224[(9)] = inst_23206);

return statearr_23224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23215__$1,(9),results,inst_23201);
} else {
if((state_val_23216 === (9))){
var inst_23208 = (state_23215[(2)]);
var state_23215__$1 = (function (){var statearr_23225 = state_23215;
(statearr_23225[(10)] = inst_23208);

return statearr_23225;
})();
var statearr_23226_23336 = state_23215__$1;
(statearr_23226_23336[(2)] = null);

(statearr_23226_23336[(1)] = (2));


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
});})(c__10081__auto___23330,jobs,results,process,async))
;
return ((function (switch__10014__auto__,c__10081__auto___23330,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_23230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_23230[(1)] = (1));

return statearr_23230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_23215){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23215);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23231){if((e23231 instanceof Object)){
var ex__10018__auto__ = e23231;
var statearr_23232_23337 = state_23215;
(statearr_23232_23337[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23215);

return cljs.core.cst$kw$recur;
} else {
throw e23231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23338 = state_23215;
state_23215 = G__23338;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_23215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_23215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___23330,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_23233 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___23330);

return statearr_23233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___23330,jobs,results,process,async))
);


var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__,jobs,results,process,async){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__,jobs,results,process,async){
return (function (state_23271){
var state_val_23272 = (state_23271[(1)]);
if((state_val_23272 === (7))){
var inst_23267 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23273_23339 = state_23271__$1;
(statearr_23273_23339[(2)] = inst_23267);

(statearr_23273_23339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (20))){
var state_23271__$1 = state_23271;
var statearr_23274_23340 = state_23271__$1;
(statearr_23274_23340[(2)] = null);

(statearr_23274_23340[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (1))){
var state_23271__$1 = state_23271;
var statearr_23275_23341 = state_23271__$1;
(statearr_23275_23341[(2)] = null);

(statearr_23275_23341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (4))){
var inst_23236 = (state_23271[(7)]);
var inst_23236__$1 = (state_23271[(2)]);
var inst_23237 = (inst_23236__$1 == null);
var state_23271__$1 = (function (){var statearr_23276 = state_23271;
(statearr_23276[(7)] = inst_23236__$1);

return statearr_23276;
})();
if(cljs.core.truth_(inst_23237)){
var statearr_23277_23342 = state_23271__$1;
(statearr_23277_23342[(1)] = (5));

} else {
var statearr_23278_23343 = state_23271__$1;
(statearr_23278_23343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (15))){
var inst_23249 = (state_23271[(8)]);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23271__$1,(18),to,inst_23249);
} else {
if((state_val_23272 === (21))){
var inst_23262 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23279_23344 = state_23271__$1;
(statearr_23279_23344[(2)] = inst_23262);

(statearr_23279_23344[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (13))){
var inst_23264 = (state_23271[(2)]);
var state_23271__$1 = (function (){var statearr_23280 = state_23271;
(statearr_23280[(9)] = inst_23264);

return statearr_23280;
})();
var statearr_23281_23345 = state_23271__$1;
(statearr_23281_23345[(2)] = null);

(statearr_23281_23345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (6))){
var inst_23236 = (state_23271[(7)]);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23271__$1,(11),inst_23236);
} else {
if((state_val_23272 === (17))){
var inst_23257 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
if(cljs.core.truth_(inst_23257)){
var statearr_23282_23346 = state_23271__$1;
(statearr_23282_23346[(1)] = (19));

} else {
var statearr_23283_23347 = state_23271__$1;
(statearr_23283_23347[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (3))){
var inst_23269 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23271__$1,inst_23269);
} else {
if((state_val_23272 === (12))){
var inst_23246 = (state_23271[(10)]);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23271__$1,(14),inst_23246);
} else {
if((state_val_23272 === (2))){
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23271__$1,(4),results);
} else {
if((state_val_23272 === (19))){
var state_23271__$1 = state_23271;
var statearr_23284_23348 = state_23271__$1;
(statearr_23284_23348[(2)] = null);

(statearr_23284_23348[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (11))){
var inst_23246 = (state_23271[(2)]);
var state_23271__$1 = (function (){var statearr_23285 = state_23271;
(statearr_23285[(10)] = inst_23246);

return statearr_23285;
})();
var statearr_23286_23349 = state_23271__$1;
(statearr_23286_23349[(2)] = null);

(statearr_23286_23349[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (9))){
var state_23271__$1 = state_23271;
var statearr_23287_23350 = state_23271__$1;
(statearr_23287_23350[(2)] = null);

(statearr_23287_23350[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (5))){
var state_23271__$1 = state_23271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23288_23351 = state_23271__$1;
(statearr_23288_23351[(1)] = (8));

} else {
var statearr_23289_23352 = state_23271__$1;
(statearr_23289_23352[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (14))){
var inst_23249 = (state_23271[(8)]);
var inst_23251 = (state_23271[(11)]);
var inst_23249__$1 = (state_23271[(2)]);
var inst_23250 = (inst_23249__$1 == null);
var inst_23251__$1 = cljs.core.not(inst_23250);
var state_23271__$1 = (function (){var statearr_23290 = state_23271;
(statearr_23290[(8)] = inst_23249__$1);

(statearr_23290[(11)] = inst_23251__$1);

return statearr_23290;
})();
if(inst_23251__$1){
var statearr_23291_23353 = state_23271__$1;
(statearr_23291_23353[(1)] = (15));

} else {
var statearr_23292_23354 = state_23271__$1;
(statearr_23292_23354[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (16))){
var inst_23251 = (state_23271[(11)]);
var state_23271__$1 = state_23271;
var statearr_23293_23355 = state_23271__$1;
(statearr_23293_23355[(2)] = inst_23251);

(statearr_23293_23355[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (10))){
var inst_23243 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23294_23356 = state_23271__$1;
(statearr_23294_23356[(2)] = inst_23243);

(statearr_23294_23356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (18))){
var inst_23254 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23295_23357 = state_23271__$1;
(statearr_23295_23357[(2)] = inst_23254);

(statearr_23295_23357[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (8))){
var inst_23240 = cljs.core.async.close_BANG_(to);
var state_23271__$1 = state_23271;
var statearr_23296_23358 = state_23271__$1;
(statearr_23296_23358[(2)] = inst_23240);

(statearr_23296_23358[(1)] = (10));


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
var statearr_23300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_23300[(1)] = (1));

return statearr_23300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_23271){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23271);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23301){if((e23301 instanceof Object)){
var ex__10018__auto__ = e23301;
var statearr_23302_23359 = state_23271;
(statearr_23302_23359[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23271);

return cljs.core.cst$kw$recur;
} else {
throw e23301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23360 = state_23271;
state_23271 = G__23360;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_23271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_23271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__,jobs,results,process,async))
})();
var state__10083__auto__ = (function (){var statearr_23303 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_23303;
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
var args23361 = [];
var len__6152__auto___23364 = arguments.length;
var i__6153__auto___23365 = (0);
while(true){
if((i__6153__auto___23365 < len__6152__auto___23364)){
args23361.push((arguments[i__6153__auto___23365]));

var G__23366 = (i__6153__auto___23365 + (1));
i__6153__auto___23365 = G__23366;
continue;
} else {
}
break;
}

var G__23363 = args23361.length;
switch (G__23363) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23361.length)].join('')));

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
var args23368 = [];
var len__6152__auto___23371 = arguments.length;
var i__6153__auto___23372 = (0);
while(true){
if((i__6153__auto___23372 < len__6152__auto___23371)){
args23368.push((arguments[i__6153__auto___23372]));

var G__23373 = (i__6153__auto___23372 + (1));
i__6153__auto___23372 = G__23373;
continue;
} else {
}
break;
}

var G__23370 = args23368.length;
switch (G__23370) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23368.length)].join('')));

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
var args23375 = [];
var len__6152__auto___23428 = arguments.length;
var i__6153__auto___23429 = (0);
while(true){
if((i__6153__auto___23429 < len__6152__auto___23428)){
args23375.push((arguments[i__6153__auto___23429]));

var G__23430 = (i__6153__auto___23429 + (1));
i__6153__auto___23429 = G__23430;
continue;
} else {
}
break;
}

var G__23377 = args23375.length;
switch (G__23377) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23375.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10081__auto___23432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___23432,tc,fc){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___23432,tc,fc){
return (function (state_23403){
var state_val_23404 = (state_23403[(1)]);
if((state_val_23404 === (7))){
var inst_23399 = (state_23403[(2)]);
var state_23403__$1 = state_23403;
var statearr_23405_23433 = state_23403__$1;
(statearr_23405_23433[(2)] = inst_23399);

(statearr_23405_23433[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (1))){
var state_23403__$1 = state_23403;
var statearr_23406_23434 = state_23403__$1;
(statearr_23406_23434[(2)] = null);

(statearr_23406_23434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (4))){
var inst_23380 = (state_23403[(7)]);
var inst_23380__$1 = (state_23403[(2)]);
var inst_23381 = (inst_23380__$1 == null);
var state_23403__$1 = (function (){var statearr_23407 = state_23403;
(statearr_23407[(7)] = inst_23380__$1);

return statearr_23407;
})();
if(cljs.core.truth_(inst_23381)){
var statearr_23408_23435 = state_23403__$1;
(statearr_23408_23435[(1)] = (5));

} else {
var statearr_23409_23436 = state_23403__$1;
(statearr_23409_23436[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (13))){
var state_23403__$1 = state_23403;
var statearr_23410_23437 = state_23403__$1;
(statearr_23410_23437[(2)] = null);

(statearr_23410_23437[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (6))){
var inst_23380 = (state_23403[(7)]);
var inst_23386 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23380) : p.call(null,inst_23380));
var state_23403__$1 = state_23403;
if(cljs.core.truth_(inst_23386)){
var statearr_23411_23438 = state_23403__$1;
(statearr_23411_23438[(1)] = (9));

} else {
var statearr_23412_23439 = state_23403__$1;
(statearr_23412_23439[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (3))){
var inst_23401 = (state_23403[(2)]);
var state_23403__$1 = state_23403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23403__$1,inst_23401);
} else {
if((state_val_23404 === (12))){
var state_23403__$1 = state_23403;
var statearr_23413_23440 = state_23403__$1;
(statearr_23413_23440[(2)] = null);

(statearr_23413_23440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (2))){
var state_23403__$1 = state_23403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23403__$1,(4),ch);
} else {
if((state_val_23404 === (11))){
var inst_23380 = (state_23403[(7)]);
var inst_23390 = (state_23403[(2)]);
var state_23403__$1 = state_23403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23403__$1,(8),inst_23390,inst_23380);
} else {
if((state_val_23404 === (9))){
var state_23403__$1 = state_23403;
var statearr_23414_23441 = state_23403__$1;
(statearr_23414_23441[(2)] = tc);

(statearr_23414_23441[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (5))){
var inst_23383 = cljs.core.async.close_BANG_(tc);
var inst_23384 = cljs.core.async.close_BANG_(fc);
var state_23403__$1 = (function (){var statearr_23415 = state_23403;
(statearr_23415[(8)] = inst_23383);

return statearr_23415;
})();
var statearr_23416_23442 = state_23403__$1;
(statearr_23416_23442[(2)] = inst_23384);

(statearr_23416_23442[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (14))){
var inst_23397 = (state_23403[(2)]);
var state_23403__$1 = state_23403;
var statearr_23417_23443 = state_23403__$1;
(statearr_23417_23443[(2)] = inst_23397);

(statearr_23417_23443[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (10))){
var state_23403__$1 = state_23403;
var statearr_23418_23444 = state_23403__$1;
(statearr_23418_23444[(2)] = fc);

(statearr_23418_23444[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23404 === (8))){
var inst_23392 = (state_23403[(2)]);
var state_23403__$1 = state_23403;
if(cljs.core.truth_(inst_23392)){
var statearr_23419_23445 = state_23403__$1;
(statearr_23419_23445[(1)] = (12));

} else {
var statearr_23420_23446 = state_23403__$1;
(statearr_23420_23446[(1)] = (13));

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
});})(c__10081__auto___23432,tc,fc))
;
return ((function (switch__10014__auto__,c__10081__auto___23432,tc,fc){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_23403){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23403);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__10018__auto__ = e23425;
var statearr_23426_23447 = state_23403;
(statearr_23426_23447[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23403);

return cljs.core.cst$kw$recur;
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23448 = state_23403;
state_23403 = G__23448;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_23403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_23403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___23432,tc,fc))
})();
var state__10083__auto__ = (function (){var statearr_23427 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___23432);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___23432,tc,fc))
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
return (function (state_23495){
var state_val_23496 = (state_23495[(1)]);
if((state_val_23496 === (1))){
var inst_23481 = init;
var state_23495__$1 = (function (){var statearr_23497 = state_23495;
(statearr_23497[(7)] = inst_23481);

return statearr_23497;
})();
var statearr_23498_23513 = state_23495__$1;
(statearr_23498_23513[(2)] = null);

(statearr_23498_23513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23496 === (2))){
var state_23495__$1 = state_23495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23495__$1,(4),ch);
} else {
if((state_val_23496 === (3))){
var inst_23493 = (state_23495[(2)]);
var state_23495__$1 = state_23495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23495__$1,inst_23493);
} else {
if((state_val_23496 === (4))){
var inst_23484 = (state_23495[(8)]);
var inst_23484__$1 = (state_23495[(2)]);
var inst_23485 = (inst_23484__$1 == null);
var state_23495__$1 = (function (){var statearr_23499 = state_23495;
(statearr_23499[(8)] = inst_23484__$1);

return statearr_23499;
})();
if(cljs.core.truth_(inst_23485)){
var statearr_23500_23514 = state_23495__$1;
(statearr_23500_23514[(1)] = (5));

} else {
var statearr_23501_23515 = state_23495__$1;
(statearr_23501_23515[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23496 === (5))){
var inst_23481 = (state_23495[(7)]);
var state_23495__$1 = state_23495;
var statearr_23502_23516 = state_23495__$1;
(statearr_23502_23516[(2)] = inst_23481);

(statearr_23502_23516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23496 === (6))){
var inst_23481 = (state_23495[(7)]);
var inst_23484 = (state_23495[(8)]);
var inst_23488 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23481,inst_23484) : f.call(null,inst_23481,inst_23484));
var inst_23481__$1 = inst_23488;
var state_23495__$1 = (function (){var statearr_23503 = state_23495;
(statearr_23503[(7)] = inst_23481__$1);

return statearr_23503;
})();
var statearr_23504_23517 = state_23495__$1;
(statearr_23504_23517[(2)] = null);

(statearr_23504_23517[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23496 === (7))){
var inst_23491 = (state_23495[(2)]);
var state_23495__$1 = state_23495;
var statearr_23505_23518 = state_23495__$1;
(statearr_23505_23518[(2)] = inst_23491);

(statearr_23505_23518[(1)] = (3));


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
var statearr_23509 = [null,null,null,null,null,null,null,null,null];
(statearr_23509[(0)] = cljs$core$async$reduce_$_state_machine__10015__auto__);

(statearr_23509[(1)] = (1));

return statearr_23509;
});
var cljs$core$async$reduce_$_state_machine__10015__auto____1 = (function (state_23495){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23495);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23510){if((e23510 instanceof Object)){
var ex__10018__auto__ = e23510;
var statearr_23511_23519 = state_23495;
(statearr_23511_23519[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23495);

return cljs.core.cst$kw$recur;
} else {
throw e23510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23520 = state_23495;
state_23495 = G__23520;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10015__auto__ = function(state_23495){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10015__auto____1.call(this,state_23495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10015__auto____0;
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10015__auto____1;
return cljs$core$async$reduce_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_23512 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_23512;
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
var args23521 = [];
var len__6152__auto___23573 = arguments.length;
var i__6153__auto___23574 = (0);
while(true){
if((i__6153__auto___23574 < len__6152__auto___23573)){
args23521.push((arguments[i__6153__auto___23574]));

var G__23575 = (i__6153__auto___23574 + (1));
i__6153__auto___23574 = G__23575;
continue;
} else {
}
break;
}

var G__23523 = args23521.length;
switch (G__23523) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23521.length)].join('')));

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
return (function (state_23548){
var state_val_23549 = (state_23548[(1)]);
if((state_val_23549 === (7))){
var inst_23530 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23550_23577 = state_23548__$1;
(statearr_23550_23577[(2)] = inst_23530);

(statearr_23550_23577[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (1))){
var inst_23524 = cljs.core.seq(coll);
var inst_23525 = inst_23524;
var state_23548__$1 = (function (){var statearr_23551 = state_23548;
(statearr_23551[(7)] = inst_23525);

return statearr_23551;
})();
var statearr_23552_23578 = state_23548__$1;
(statearr_23552_23578[(2)] = null);

(statearr_23552_23578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (4))){
var inst_23525 = (state_23548[(7)]);
var inst_23528 = cljs.core.first(inst_23525);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23548__$1,(7),ch,inst_23528);
} else {
if((state_val_23549 === (13))){
var inst_23542 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23553_23579 = state_23548__$1;
(statearr_23553_23579[(2)] = inst_23542);

(statearr_23553_23579[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (6))){
var inst_23533 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
if(cljs.core.truth_(inst_23533)){
var statearr_23554_23580 = state_23548__$1;
(statearr_23554_23580[(1)] = (8));

} else {
var statearr_23555_23581 = state_23548__$1;
(statearr_23555_23581[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (3))){
var inst_23546 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23548__$1,inst_23546);
} else {
if((state_val_23549 === (12))){
var state_23548__$1 = state_23548;
var statearr_23556_23582 = state_23548__$1;
(statearr_23556_23582[(2)] = null);

(statearr_23556_23582[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (2))){
var inst_23525 = (state_23548[(7)]);
var state_23548__$1 = state_23548;
if(cljs.core.truth_(inst_23525)){
var statearr_23557_23583 = state_23548__$1;
(statearr_23557_23583[(1)] = (4));

} else {
var statearr_23558_23584 = state_23548__$1;
(statearr_23558_23584[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (11))){
var inst_23539 = cljs.core.async.close_BANG_(ch);
var state_23548__$1 = state_23548;
var statearr_23559_23585 = state_23548__$1;
(statearr_23559_23585[(2)] = inst_23539);

(statearr_23559_23585[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (9))){
var state_23548__$1 = state_23548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23560_23586 = state_23548__$1;
(statearr_23560_23586[(1)] = (11));

} else {
var statearr_23561_23587 = state_23548__$1;
(statearr_23561_23587[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (5))){
var inst_23525 = (state_23548[(7)]);
var state_23548__$1 = state_23548;
var statearr_23562_23588 = state_23548__$1;
(statearr_23562_23588[(2)] = inst_23525);

(statearr_23562_23588[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (10))){
var inst_23544 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23563_23589 = state_23548__$1;
(statearr_23563_23589[(2)] = inst_23544);

(statearr_23563_23589[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23549 === (8))){
var inst_23525 = (state_23548[(7)]);
var inst_23535 = cljs.core.next(inst_23525);
var inst_23525__$1 = inst_23535;
var state_23548__$1 = (function (){var statearr_23564 = state_23548;
(statearr_23564[(7)] = inst_23525__$1);

return statearr_23564;
})();
var statearr_23565_23590 = state_23548__$1;
(statearr_23565_23590[(2)] = null);

(statearr_23565_23590[(1)] = (2));


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
var statearr_23569 = [null,null,null,null,null,null,null,null];
(statearr_23569[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_23569[(1)] = (1));

return statearr_23569;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_23548){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23548);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e23570){if((e23570 instanceof Object)){
var ex__10018__auto__ = e23570;
var statearr_23571_23591 = state_23548;
(statearr_23571_23591[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23548);

return cljs.core.cst$kw$recur;
} else {
throw e23570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__23592 = state_23548;
state_23548 = G__23592;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_23548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_23548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_23572 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_23572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_23572;
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
var cs = (function (){var G__23817 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23817) : cljs.core.atom.call(null,G__23817));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23818 = (function (mult,ch,cs,meta23819){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23819 = meta23819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23820,meta23819__$1){
var self__ = this;
var _23820__$1 = this;
return (new cljs.core.async.t_cljs$core$async23818(self__.mult,self__.ch,self__.cs,meta23819__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23820){
var self__ = this;
var _23820__$1 = this;
return self__.meta23819;
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23821_24041 = self__.cs;
var G__23822_24042 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23821_24041,G__23822_24042) : cljs.core.reset_BANG_.call(null,G__23821_24041,G__23822_24042));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23819], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23818";

cljs.core.async.t_cljs$core$async23818.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async23818");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23818 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23818(mult__$1,ch__$1,cs__$1,meta23819){
return (new cljs.core.async.t_cljs$core$async23818(mult__$1,ch__$1,cs__$1,meta23819));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23818(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10081__auto___24043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24043,cs,m,dchan,dctr,done){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24043,cs,m,dchan,dctr,done){
return (function (state_23953){
var state_val_23954 = (state_23953[(1)]);
if((state_val_23954 === (7))){
var inst_23949 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23955_24044 = state_23953__$1;
(statearr_23955_24044[(2)] = inst_23949);

(statearr_23955_24044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (20))){
var inst_23854 = (state_23953[(7)]);
var inst_23864 = cljs.core.first(inst_23854);
var inst_23865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23864,(0),null);
var inst_23866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23864,(1),null);
var state_23953__$1 = (function (){var statearr_23956 = state_23953;
(statearr_23956[(8)] = inst_23865);

return statearr_23956;
})();
if(cljs.core.truth_(inst_23866)){
var statearr_23957_24045 = state_23953__$1;
(statearr_23957_24045[(1)] = (22));

} else {
var statearr_23958_24046 = state_23953__$1;
(statearr_23958_24046[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (27))){
var inst_23894 = (state_23953[(9)]);
var inst_23901 = (state_23953[(10)]);
var inst_23825 = (state_23953[(11)]);
var inst_23896 = (state_23953[(12)]);
var inst_23901__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23894,inst_23896);
var inst_23902 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23901__$1,inst_23825,done);
var state_23953__$1 = (function (){var statearr_23959 = state_23953;
(statearr_23959[(10)] = inst_23901__$1);

return statearr_23959;
})();
if(cljs.core.truth_(inst_23902)){
var statearr_23960_24047 = state_23953__$1;
(statearr_23960_24047[(1)] = (30));

} else {
var statearr_23961_24048 = state_23953__$1;
(statearr_23961_24048[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (1))){
var state_23953__$1 = state_23953;
var statearr_23962_24049 = state_23953__$1;
(statearr_23962_24049[(2)] = null);

(statearr_23962_24049[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (24))){
var inst_23854 = (state_23953[(7)]);
var inst_23871 = (state_23953[(2)]);
var inst_23872 = cljs.core.next(inst_23854);
var inst_23834 = inst_23872;
var inst_23835 = null;
var inst_23836 = (0);
var inst_23837 = (0);
var state_23953__$1 = (function (){var statearr_23963 = state_23953;
(statearr_23963[(13)] = inst_23871);

(statearr_23963[(14)] = inst_23836);

(statearr_23963[(15)] = inst_23837);

(statearr_23963[(16)] = inst_23834);

(statearr_23963[(17)] = inst_23835);

return statearr_23963;
})();
var statearr_23964_24050 = state_23953__$1;
(statearr_23964_24050[(2)] = null);

(statearr_23964_24050[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (39))){
var state_23953__$1 = state_23953;
var statearr_23968_24051 = state_23953__$1;
(statearr_23968_24051[(2)] = null);

(statearr_23968_24051[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (4))){
var inst_23825 = (state_23953[(11)]);
var inst_23825__$1 = (state_23953[(2)]);
var inst_23826 = (inst_23825__$1 == null);
var state_23953__$1 = (function (){var statearr_23969 = state_23953;
(statearr_23969[(11)] = inst_23825__$1);

return statearr_23969;
})();
if(cljs.core.truth_(inst_23826)){
var statearr_23970_24052 = state_23953__$1;
(statearr_23970_24052[(1)] = (5));

} else {
var statearr_23971_24053 = state_23953__$1;
(statearr_23971_24053[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (15))){
var inst_23836 = (state_23953[(14)]);
var inst_23837 = (state_23953[(15)]);
var inst_23834 = (state_23953[(16)]);
var inst_23835 = (state_23953[(17)]);
var inst_23850 = (state_23953[(2)]);
var inst_23851 = (inst_23837 + (1));
var tmp23965 = inst_23836;
var tmp23966 = inst_23834;
var tmp23967 = inst_23835;
var inst_23834__$1 = tmp23966;
var inst_23835__$1 = tmp23967;
var inst_23836__$1 = tmp23965;
var inst_23837__$1 = inst_23851;
var state_23953__$1 = (function (){var statearr_23972 = state_23953;
(statearr_23972[(14)] = inst_23836__$1);

(statearr_23972[(15)] = inst_23837__$1);

(statearr_23972[(16)] = inst_23834__$1);

(statearr_23972[(18)] = inst_23850);

(statearr_23972[(17)] = inst_23835__$1);

return statearr_23972;
})();
var statearr_23973_24054 = state_23953__$1;
(statearr_23973_24054[(2)] = null);

(statearr_23973_24054[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (21))){
var inst_23875 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23977_24055 = state_23953__$1;
(statearr_23977_24055[(2)] = inst_23875);

(statearr_23977_24055[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (31))){
var inst_23901 = (state_23953[(10)]);
var inst_23905 = done(null);
var inst_23906 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23901);
var state_23953__$1 = (function (){var statearr_23978 = state_23953;
(statearr_23978[(19)] = inst_23905);

return statearr_23978;
})();
var statearr_23979_24056 = state_23953__$1;
(statearr_23979_24056[(2)] = inst_23906);

(statearr_23979_24056[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (32))){
var inst_23894 = (state_23953[(9)]);
var inst_23896 = (state_23953[(12)]);
var inst_23895 = (state_23953[(20)]);
var inst_23893 = (state_23953[(21)]);
var inst_23908 = (state_23953[(2)]);
var inst_23909 = (inst_23896 + (1));
var tmp23974 = inst_23894;
var tmp23975 = inst_23895;
var tmp23976 = inst_23893;
var inst_23893__$1 = tmp23976;
var inst_23894__$1 = tmp23974;
var inst_23895__$1 = tmp23975;
var inst_23896__$1 = inst_23909;
var state_23953__$1 = (function (){var statearr_23980 = state_23953;
(statearr_23980[(9)] = inst_23894__$1);

(statearr_23980[(12)] = inst_23896__$1);

(statearr_23980[(22)] = inst_23908);

(statearr_23980[(20)] = inst_23895__$1);

(statearr_23980[(21)] = inst_23893__$1);

return statearr_23980;
})();
var statearr_23981_24057 = state_23953__$1;
(statearr_23981_24057[(2)] = null);

(statearr_23981_24057[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (40))){
var inst_23921 = (state_23953[(23)]);
var inst_23925 = done(null);
var inst_23926 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23921);
var state_23953__$1 = (function (){var statearr_23982 = state_23953;
(statearr_23982[(24)] = inst_23925);

return statearr_23982;
})();
var statearr_23983_24058 = state_23953__$1;
(statearr_23983_24058[(2)] = inst_23926);

(statearr_23983_24058[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (33))){
var inst_23912 = (state_23953[(25)]);
var inst_23914 = cljs.core.chunked_seq_QMARK_(inst_23912);
var state_23953__$1 = state_23953;
if(inst_23914){
var statearr_23984_24059 = state_23953__$1;
(statearr_23984_24059[(1)] = (36));

} else {
var statearr_23985_24060 = state_23953__$1;
(statearr_23985_24060[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (13))){
var inst_23844 = (state_23953[(26)]);
var inst_23847 = cljs.core.async.close_BANG_(inst_23844);
var state_23953__$1 = state_23953;
var statearr_23986_24061 = state_23953__$1;
(statearr_23986_24061[(2)] = inst_23847);

(statearr_23986_24061[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (22))){
var inst_23865 = (state_23953[(8)]);
var inst_23868 = cljs.core.async.close_BANG_(inst_23865);
var state_23953__$1 = state_23953;
var statearr_23987_24062 = state_23953__$1;
(statearr_23987_24062[(2)] = inst_23868);

(statearr_23987_24062[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (36))){
var inst_23912 = (state_23953[(25)]);
var inst_23916 = cljs.core.chunk_first(inst_23912);
var inst_23917 = cljs.core.chunk_rest(inst_23912);
var inst_23918 = cljs.core.count(inst_23916);
var inst_23893 = inst_23917;
var inst_23894 = inst_23916;
var inst_23895 = inst_23918;
var inst_23896 = (0);
var state_23953__$1 = (function (){var statearr_23988 = state_23953;
(statearr_23988[(9)] = inst_23894);

(statearr_23988[(12)] = inst_23896);

(statearr_23988[(20)] = inst_23895);

(statearr_23988[(21)] = inst_23893);

return statearr_23988;
})();
var statearr_23989_24063 = state_23953__$1;
(statearr_23989_24063[(2)] = null);

(statearr_23989_24063[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (41))){
var inst_23912 = (state_23953[(25)]);
var inst_23928 = (state_23953[(2)]);
var inst_23929 = cljs.core.next(inst_23912);
var inst_23893 = inst_23929;
var inst_23894 = null;
var inst_23895 = (0);
var inst_23896 = (0);
var state_23953__$1 = (function (){var statearr_23990 = state_23953;
(statearr_23990[(9)] = inst_23894);

(statearr_23990[(12)] = inst_23896);

(statearr_23990[(20)] = inst_23895);

(statearr_23990[(27)] = inst_23928);

(statearr_23990[(21)] = inst_23893);

return statearr_23990;
})();
var statearr_23991_24064 = state_23953__$1;
(statearr_23991_24064[(2)] = null);

(statearr_23991_24064[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (43))){
var state_23953__$1 = state_23953;
var statearr_23992_24065 = state_23953__$1;
(statearr_23992_24065[(2)] = null);

(statearr_23992_24065[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (29))){
var inst_23937 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23993_24066 = state_23953__$1;
(statearr_23993_24066[(2)] = inst_23937);

(statearr_23993_24066[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (44))){
var inst_23946 = (state_23953[(2)]);
var state_23953__$1 = (function (){var statearr_23994 = state_23953;
(statearr_23994[(28)] = inst_23946);

return statearr_23994;
})();
var statearr_23995_24067 = state_23953__$1;
(statearr_23995_24067[(2)] = null);

(statearr_23995_24067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (6))){
var inst_23885 = (state_23953[(29)]);
var inst_23884 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23885__$1 = cljs.core.keys(inst_23884);
var inst_23886 = cljs.core.count(inst_23885__$1);
var inst_23887 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_23886) : cljs.core.reset_BANG_.call(null,dctr,inst_23886));
var inst_23892 = cljs.core.seq(inst_23885__$1);
var inst_23893 = inst_23892;
var inst_23894 = null;
var inst_23895 = (0);
var inst_23896 = (0);
var state_23953__$1 = (function (){var statearr_23996 = state_23953;
(statearr_23996[(29)] = inst_23885__$1);

(statearr_23996[(30)] = inst_23887);

(statearr_23996[(9)] = inst_23894);

(statearr_23996[(12)] = inst_23896);

(statearr_23996[(20)] = inst_23895);

(statearr_23996[(21)] = inst_23893);

return statearr_23996;
})();
var statearr_23997_24068 = state_23953__$1;
(statearr_23997_24068[(2)] = null);

(statearr_23997_24068[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (28))){
var inst_23912 = (state_23953[(25)]);
var inst_23893 = (state_23953[(21)]);
var inst_23912__$1 = cljs.core.seq(inst_23893);
var state_23953__$1 = (function (){var statearr_23998 = state_23953;
(statearr_23998[(25)] = inst_23912__$1);

return statearr_23998;
})();
if(inst_23912__$1){
var statearr_23999_24069 = state_23953__$1;
(statearr_23999_24069[(1)] = (33));

} else {
var statearr_24000_24070 = state_23953__$1;
(statearr_24000_24070[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (25))){
var inst_23896 = (state_23953[(12)]);
var inst_23895 = (state_23953[(20)]);
var inst_23898 = (inst_23896 < inst_23895);
var inst_23899 = inst_23898;
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23899)){
var statearr_24001_24071 = state_23953__$1;
(statearr_24001_24071[(1)] = (27));

} else {
var statearr_24002_24072 = state_23953__$1;
(statearr_24002_24072[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (34))){
var state_23953__$1 = state_23953;
var statearr_24003_24073 = state_23953__$1;
(statearr_24003_24073[(2)] = null);

(statearr_24003_24073[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (17))){
var state_23953__$1 = state_23953;
var statearr_24004_24074 = state_23953__$1;
(statearr_24004_24074[(2)] = null);

(statearr_24004_24074[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (3))){
var inst_23951 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23953__$1,inst_23951);
} else {
if((state_val_23954 === (12))){
var inst_23880 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24005_24075 = state_23953__$1;
(statearr_24005_24075[(2)] = inst_23880);

(statearr_24005_24075[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (2))){
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23953__$1,(4),ch);
} else {
if((state_val_23954 === (23))){
var state_23953__$1 = state_23953;
var statearr_24006_24076 = state_23953__$1;
(statearr_24006_24076[(2)] = null);

(statearr_24006_24076[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (35))){
var inst_23935 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24007_24077 = state_23953__$1;
(statearr_24007_24077[(2)] = inst_23935);

(statearr_24007_24077[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (19))){
var inst_23854 = (state_23953[(7)]);
var inst_23858 = cljs.core.chunk_first(inst_23854);
var inst_23859 = cljs.core.chunk_rest(inst_23854);
var inst_23860 = cljs.core.count(inst_23858);
var inst_23834 = inst_23859;
var inst_23835 = inst_23858;
var inst_23836 = inst_23860;
var inst_23837 = (0);
var state_23953__$1 = (function (){var statearr_24008 = state_23953;
(statearr_24008[(14)] = inst_23836);

(statearr_24008[(15)] = inst_23837);

(statearr_24008[(16)] = inst_23834);

(statearr_24008[(17)] = inst_23835);

return statearr_24008;
})();
var statearr_24009_24078 = state_23953__$1;
(statearr_24009_24078[(2)] = null);

(statearr_24009_24078[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (11))){
var inst_23854 = (state_23953[(7)]);
var inst_23834 = (state_23953[(16)]);
var inst_23854__$1 = cljs.core.seq(inst_23834);
var state_23953__$1 = (function (){var statearr_24010 = state_23953;
(statearr_24010[(7)] = inst_23854__$1);

return statearr_24010;
})();
if(inst_23854__$1){
var statearr_24011_24079 = state_23953__$1;
(statearr_24011_24079[(1)] = (16));

} else {
var statearr_24012_24080 = state_23953__$1;
(statearr_24012_24080[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (9))){
var inst_23882 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24013_24081 = state_23953__$1;
(statearr_24013_24081[(2)] = inst_23882);

(statearr_24013_24081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (5))){
var inst_23832 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23833 = cljs.core.seq(inst_23832);
var inst_23834 = inst_23833;
var inst_23835 = null;
var inst_23836 = (0);
var inst_23837 = (0);
var state_23953__$1 = (function (){var statearr_24014 = state_23953;
(statearr_24014[(14)] = inst_23836);

(statearr_24014[(15)] = inst_23837);

(statearr_24014[(16)] = inst_23834);

(statearr_24014[(17)] = inst_23835);

return statearr_24014;
})();
var statearr_24015_24082 = state_23953__$1;
(statearr_24015_24082[(2)] = null);

(statearr_24015_24082[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (14))){
var state_23953__$1 = state_23953;
var statearr_24016_24083 = state_23953__$1;
(statearr_24016_24083[(2)] = null);

(statearr_24016_24083[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (45))){
var inst_23943 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24017_24084 = state_23953__$1;
(statearr_24017_24084[(2)] = inst_23943);

(statearr_24017_24084[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (26))){
var inst_23885 = (state_23953[(29)]);
var inst_23939 = (state_23953[(2)]);
var inst_23940 = cljs.core.seq(inst_23885);
var state_23953__$1 = (function (){var statearr_24018 = state_23953;
(statearr_24018[(31)] = inst_23939);

return statearr_24018;
})();
if(inst_23940){
var statearr_24019_24085 = state_23953__$1;
(statearr_24019_24085[(1)] = (42));

} else {
var statearr_24020_24086 = state_23953__$1;
(statearr_24020_24086[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (16))){
var inst_23854 = (state_23953[(7)]);
var inst_23856 = cljs.core.chunked_seq_QMARK_(inst_23854);
var state_23953__$1 = state_23953;
if(inst_23856){
var statearr_24021_24087 = state_23953__$1;
(statearr_24021_24087[(1)] = (19));

} else {
var statearr_24022_24088 = state_23953__$1;
(statearr_24022_24088[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (38))){
var inst_23932 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24023_24089 = state_23953__$1;
(statearr_24023_24089[(2)] = inst_23932);

(statearr_24023_24089[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (30))){
var state_23953__$1 = state_23953;
var statearr_24024_24090 = state_23953__$1;
(statearr_24024_24090[(2)] = null);

(statearr_24024_24090[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (10))){
var inst_23837 = (state_23953[(15)]);
var inst_23835 = (state_23953[(17)]);
var inst_23843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23835,inst_23837);
var inst_23844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23843,(0),null);
var inst_23845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23843,(1),null);
var state_23953__$1 = (function (){var statearr_24025 = state_23953;
(statearr_24025[(26)] = inst_23844);

return statearr_24025;
})();
if(cljs.core.truth_(inst_23845)){
var statearr_24026_24091 = state_23953__$1;
(statearr_24026_24091[(1)] = (13));

} else {
var statearr_24027_24092 = state_23953__$1;
(statearr_24027_24092[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (18))){
var inst_23878 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_24028_24093 = state_23953__$1;
(statearr_24028_24093[(2)] = inst_23878);

(statearr_24028_24093[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (42))){
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23953__$1,(45),dchan);
} else {
if((state_val_23954 === (37))){
var inst_23912 = (state_23953[(25)]);
var inst_23921 = (state_23953[(23)]);
var inst_23825 = (state_23953[(11)]);
var inst_23921__$1 = cljs.core.first(inst_23912);
var inst_23922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23921__$1,inst_23825,done);
var state_23953__$1 = (function (){var statearr_24029 = state_23953;
(statearr_24029[(23)] = inst_23921__$1);

return statearr_24029;
})();
if(cljs.core.truth_(inst_23922)){
var statearr_24030_24094 = state_23953__$1;
(statearr_24030_24094[(1)] = (39));

} else {
var statearr_24031_24095 = state_23953__$1;
(statearr_24031_24095[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23954 === (8))){
var inst_23836 = (state_23953[(14)]);
var inst_23837 = (state_23953[(15)]);
var inst_23839 = (inst_23837 < inst_23836);
var inst_23840 = inst_23839;
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23840)){
var statearr_24032_24096 = state_23953__$1;
(statearr_24032_24096[(1)] = (10));

} else {
var statearr_24033_24097 = state_23953__$1;
(statearr_24033_24097[(1)] = (11));

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
});})(c__10081__auto___24043,cs,m,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10081__auto___24043,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10015__auto__ = null;
var cljs$core$async$mult_$_state_machine__10015__auto____0 = (function (){
var statearr_24037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24037[(0)] = cljs$core$async$mult_$_state_machine__10015__auto__);

(statearr_24037[(1)] = (1));

return statearr_24037;
});
var cljs$core$async$mult_$_state_machine__10015__auto____1 = (function (state_23953){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_23953);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24038){if((e24038 instanceof Object)){
var ex__10018__auto__ = e24038;
var statearr_24039_24098 = state_23953;
(statearr_24039_24098[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23953);

return cljs.core.cst$kw$recur;
} else {
throw e24038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24099 = state_23953;
state_23953 = G__24099;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10015__auto__ = function(state_23953){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10015__auto____1.call(this,state_23953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10015__auto____0;
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10015__auto____1;
return cljs$core$async$mult_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24043,cs,m,dchan,dctr,done))
})();
var state__10083__auto__ = (function (){var statearr_24040 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24043);

return statearr_24040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24043,cs,m,dchan,dctr,done))
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
var args24100 = [];
var len__6152__auto___24103 = arguments.length;
var i__6153__auto___24104 = (0);
while(true){
if((i__6153__auto___24104 < len__6152__auto___24103)){
args24100.push((arguments[i__6153__auto___24104]));

var G__24105 = (i__6153__auto___24104 + (1));
i__6153__auto___24104 = G__24105;
continue;
} else {
}
break;
}

var G__24102 = args24100.length;
switch (G__24102) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24100.length)].join('')));

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
var len__6152__auto___24117 = arguments.length;
var i__6153__auto___24118 = (0);
while(true){
if((i__6153__auto___24118 < len__6152__auto___24117)){
args__6159__auto__.push((arguments[i__6153__auto___24118]));

var G__24119 = (i__6153__auto___24118 + (1));
i__6153__auto___24118 = G__24119;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24111){
var map__24112 = p__24111;
var map__24112__$1 = ((((!((map__24112 == null)))?((((map__24112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24112):map__24112);
var opts = map__24112__$1;
var statearr_24114_24120 = state;
(statearr_24114_24120[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__24112,map__24112__$1,opts){
return (function (val){
var statearr_24115_24121 = state;
(statearr_24115_24121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24112,map__24112__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24116_24122 = state;
(statearr_24116_24122[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24107){
var G__24108 = cljs.core.first(seq24107);
var seq24107__$1 = cljs.core.next(seq24107);
var G__24109 = cljs.core.first(seq24107__$1);
var seq24107__$2 = cljs.core.next(seq24107__$1);
var G__24110 = cljs.core.first(seq24107__$2);
var seq24107__$3 = cljs.core.next(seq24107__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24108,G__24109,G__24110,seq24107__$3);
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
var cs = (function (){var G__24289 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24289) : cljs.core.atom.call(null,G__24289));
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
if(typeof cljs.core.async.t_cljs$core$async24290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24290 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24291){
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
this.meta24291 = meta24291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24292,meta24291__$1){
var self__ = this;
var _24292__$1 = this;
return (new cljs.core.async.t_cljs$core$async24290(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24291__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24292){
var self__ = this;
var _24292__$1 = this;
return self__.meta24291;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24293_24455 = self__.cs;
var G__24294_24456 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24293_24455,G__24294_24456) : cljs.core.reset_BANG_.call(null,G__24293_24455,G__24294_24456));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24290.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta24291], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24290";

cljs.core.async.t_cljs$core$async24290.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24290");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24290 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24290(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24291){
return (new cljs.core.async.t_cljs$core$async24290(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24291));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24290(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10081__auto___24457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24392){
var state_val_24393 = (state_24392[(1)]);
if((state_val_24393 === (7))){
var inst_24310 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24394_24458 = state_24392__$1;
(statearr_24394_24458[(2)] = inst_24310);

(statearr_24394_24458[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (20))){
var inst_24322 = (state_24392[(7)]);
var state_24392__$1 = state_24392;
var statearr_24395_24459 = state_24392__$1;
(statearr_24395_24459[(2)] = inst_24322);

(statearr_24395_24459[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (27))){
var state_24392__$1 = state_24392;
var statearr_24396_24460 = state_24392__$1;
(statearr_24396_24460[(2)] = null);

(statearr_24396_24460[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (1))){
var inst_24298 = (state_24392[(8)]);
var inst_24298__$1 = calc_state();
var inst_24300 = (inst_24298__$1 == null);
var inst_24301 = cljs.core.not(inst_24300);
var state_24392__$1 = (function (){var statearr_24397 = state_24392;
(statearr_24397[(8)] = inst_24298__$1);

return statearr_24397;
})();
if(inst_24301){
var statearr_24398_24461 = state_24392__$1;
(statearr_24398_24461[(1)] = (2));

} else {
var statearr_24399_24462 = state_24392__$1;
(statearr_24399_24462[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (24))){
var inst_24366 = (state_24392[(9)]);
var inst_24352 = (state_24392[(10)]);
var inst_24345 = (state_24392[(11)]);
var inst_24366__$1 = (inst_24345.cljs$core$IFn$_invoke$arity$1 ? inst_24345.cljs$core$IFn$_invoke$arity$1(inst_24352) : inst_24345.call(null,inst_24352));
var state_24392__$1 = (function (){var statearr_24400 = state_24392;
(statearr_24400[(9)] = inst_24366__$1);

return statearr_24400;
})();
if(cljs.core.truth_(inst_24366__$1)){
var statearr_24401_24463 = state_24392__$1;
(statearr_24401_24463[(1)] = (29));

} else {
var statearr_24402_24464 = state_24392__$1;
(statearr_24402_24464[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (4))){
var inst_24313 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24313)){
var statearr_24403_24465 = state_24392__$1;
(statearr_24403_24465[(1)] = (8));

} else {
var statearr_24404_24466 = state_24392__$1;
(statearr_24404_24466[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (15))){
var inst_24339 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24339)){
var statearr_24405_24467 = state_24392__$1;
(statearr_24405_24467[(1)] = (19));

} else {
var statearr_24406_24468 = state_24392__$1;
(statearr_24406_24468[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (21))){
var inst_24344 = (state_24392[(12)]);
var inst_24344__$1 = (state_24392[(2)]);
var inst_24345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24344__$1,cljs.core.cst$kw$solos);
var inst_24346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24344__$1,cljs.core.cst$kw$mutes);
var inst_24347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24344__$1,cljs.core.cst$kw$reads);
var state_24392__$1 = (function (){var statearr_24407 = state_24392;
(statearr_24407[(12)] = inst_24344__$1);

(statearr_24407[(11)] = inst_24345);

(statearr_24407[(13)] = inst_24346);

return statearr_24407;
})();
return cljs.core.async.ioc_alts_BANG_(state_24392__$1,(22),inst_24347);
} else {
if((state_val_24393 === (31))){
var inst_24374 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24374)){
var statearr_24408_24469 = state_24392__$1;
(statearr_24408_24469[(1)] = (32));

} else {
var statearr_24409_24470 = state_24392__$1;
(statearr_24409_24470[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (32))){
var inst_24351 = (state_24392[(14)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24392__$1,(35),out,inst_24351);
} else {
if((state_val_24393 === (33))){
var inst_24344 = (state_24392[(12)]);
var inst_24322 = inst_24344;
var state_24392__$1 = (function (){var statearr_24410 = state_24392;
(statearr_24410[(7)] = inst_24322);

return statearr_24410;
})();
var statearr_24411_24471 = state_24392__$1;
(statearr_24411_24471[(2)] = null);

(statearr_24411_24471[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (13))){
var inst_24322 = (state_24392[(7)]);
var inst_24329 = inst_24322.cljs$lang$protocol_mask$partition0$;
var inst_24330 = (inst_24329 & (64));
var inst_24331 = inst_24322.cljs$core$ISeq$;
var inst_24332 = (inst_24330) || (inst_24331);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24332)){
var statearr_24412_24472 = state_24392__$1;
(statearr_24412_24472[(1)] = (16));

} else {
var statearr_24413_24473 = state_24392__$1;
(statearr_24413_24473[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (22))){
var inst_24352 = (state_24392[(10)]);
var inst_24351 = (state_24392[(14)]);
var inst_24350 = (state_24392[(2)]);
var inst_24351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24350,(0),null);
var inst_24352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24350,(1),null);
var inst_24353 = (inst_24351__$1 == null);
var inst_24354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24352__$1,change);
var inst_24355 = (inst_24353) || (inst_24354);
var state_24392__$1 = (function (){var statearr_24414 = state_24392;
(statearr_24414[(10)] = inst_24352__$1);

(statearr_24414[(14)] = inst_24351__$1);

return statearr_24414;
})();
if(cljs.core.truth_(inst_24355)){
var statearr_24415_24474 = state_24392__$1;
(statearr_24415_24474[(1)] = (23));

} else {
var statearr_24416_24475 = state_24392__$1;
(statearr_24416_24475[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (36))){
var inst_24344 = (state_24392[(12)]);
var inst_24322 = inst_24344;
var state_24392__$1 = (function (){var statearr_24417 = state_24392;
(statearr_24417[(7)] = inst_24322);

return statearr_24417;
})();
var statearr_24418_24476 = state_24392__$1;
(statearr_24418_24476[(2)] = null);

(statearr_24418_24476[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (29))){
var inst_24366 = (state_24392[(9)]);
var state_24392__$1 = state_24392;
var statearr_24419_24477 = state_24392__$1;
(statearr_24419_24477[(2)] = inst_24366);

(statearr_24419_24477[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (6))){
var state_24392__$1 = state_24392;
var statearr_24420_24478 = state_24392__$1;
(statearr_24420_24478[(2)] = false);

(statearr_24420_24478[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (28))){
var inst_24362 = (state_24392[(2)]);
var inst_24363 = calc_state();
var inst_24322 = inst_24363;
var state_24392__$1 = (function (){var statearr_24421 = state_24392;
(statearr_24421[(7)] = inst_24322);

(statearr_24421[(15)] = inst_24362);

return statearr_24421;
})();
var statearr_24422_24479 = state_24392__$1;
(statearr_24422_24479[(2)] = null);

(statearr_24422_24479[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (25))){
var inst_24388 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24423_24480 = state_24392__$1;
(statearr_24423_24480[(2)] = inst_24388);

(statearr_24423_24480[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (34))){
var inst_24386 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24424_24481 = state_24392__$1;
(statearr_24424_24481[(2)] = inst_24386);

(statearr_24424_24481[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (17))){
var state_24392__$1 = state_24392;
var statearr_24425_24482 = state_24392__$1;
(statearr_24425_24482[(2)] = false);

(statearr_24425_24482[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (3))){
var state_24392__$1 = state_24392;
var statearr_24426_24483 = state_24392__$1;
(statearr_24426_24483[(2)] = false);

(statearr_24426_24483[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (12))){
var inst_24390 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24392__$1,inst_24390);
} else {
if((state_val_24393 === (2))){
var inst_24298 = (state_24392[(8)]);
var inst_24303 = inst_24298.cljs$lang$protocol_mask$partition0$;
var inst_24304 = (inst_24303 & (64));
var inst_24305 = inst_24298.cljs$core$ISeq$;
var inst_24306 = (inst_24304) || (inst_24305);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24306)){
var statearr_24427_24484 = state_24392__$1;
(statearr_24427_24484[(1)] = (5));

} else {
var statearr_24428_24485 = state_24392__$1;
(statearr_24428_24485[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (23))){
var inst_24351 = (state_24392[(14)]);
var inst_24357 = (inst_24351 == null);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24357)){
var statearr_24429_24486 = state_24392__$1;
(statearr_24429_24486[(1)] = (26));

} else {
var statearr_24430_24487 = state_24392__$1;
(statearr_24430_24487[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (35))){
var inst_24377 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24377)){
var statearr_24431_24488 = state_24392__$1;
(statearr_24431_24488[(1)] = (36));

} else {
var statearr_24432_24489 = state_24392__$1;
(statearr_24432_24489[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (19))){
var inst_24322 = (state_24392[(7)]);
var inst_24341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24322);
var state_24392__$1 = state_24392;
var statearr_24433_24490 = state_24392__$1;
(statearr_24433_24490[(2)] = inst_24341);

(statearr_24433_24490[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (11))){
var inst_24322 = (state_24392[(7)]);
var inst_24326 = (inst_24322 == null);
var inst_24327 = cljs.core.not(inst_24326);
var state_24392__$1 = state_24392;
if(inst_24327){
var statearr_24434_24491 = state_24392__$1;
(statearr_24434_24491[(1)] = (13));

} else {
var statearr_24435_24492 = state_24392__$1;
(statearr_24435_24492[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (9))){
var inst_24298 = (state_24392[(8)]);
var state_24392__$1 = state_24392;
var statearr_24436_24493 = state_24392__$1;
(statearr_24436_24493[(2)] = inst_24298);

(statearr_24436_24493[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (5))){
var state_24392__$1 = state_24392;
var statearr_24437_24494 = state_24392__$1;
(statearr_24437_24494[(2)] = true);

(statearr_24437_24494[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (14))){
var state_24392__$1 = state_24392;
var statearr_24438_24495 = state_24392__$1;
(statearr_24438_24495[(2)] = false);

(statearr_24438_24495[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (26))){
var inst_24352 = (state_24392[(10)]);
var inst_24359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24352);
var state_24392__$1 = state_24392;
var statearr_24439_24496 = state_24392__$1;
(statearr_24439_24496[(2)] = inst_24359);

(statearr_24439_24496[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (16))){
var state_24392__$1 = state_24392;
var statearr_24440_24497 = state_24392__$1;
(statearr_24440_24497[(2)] = true);

(statearr_24440_24497[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (38))){
var inst_24382 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24441_24498 = state_24392__$1;
(statearr_24441_24498[(2)] = inst_24382);

(statearr_24441_24498[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (30))){
var inst_24352 = (state_24392[(10)]);
var inst_24345 = (state_24392[(11)]);
var inst_24346 = (state_24392[(13)]);
var inst_24369 = cljs.core.empty_QMARK_(inst_24345);
var inst_24370 = (inst_24346.cljs$core$IFn$_invoke$arity$1 ? inst_24346.cljs$core$IFn$_invoke$arity$1(inst_24352) : inst_24346.call(null,inst_24352));
var inst_24371 = cljs.core.not(inst_24370);
var inst_24372 = (inst_24369) && (inst_24371);
var state_24392__$1 = state_24392;
var statearr_24442_24499 = state_24392__$1;
(statearr_24442_24499[(2)] = inst_24372);

(statearr_24442_24499[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (10))){
var inst_24298 = (state_24392[(8)]);
var inst_24318 = (state_24392[(2)]);
var inst_24319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24318,cljs.core.cst$kw$solos);
var inst_24320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24318,cljs.core.cst$kw$mutes);
var inst_24321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24318,cljs.core.cst$kw$reads);
var inst_24322 = inst_24298;
var state_24392__$1 = (function (){var statearr_24443 = state_24392;
(statearr_24443[(16)] = inst_24320);

(statearr_24443[(17)] = inst_24319);

(statearr_24443[(7)] = inst_24322);

(statearr_24443[(18)] = inst_24321);

return statearr_24443;
})();
var statearr_24444_24500 = state_24392__$1;
(statearr_24444_24500[(2)] = null);

(statearr_24444_24500[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (18))){
var inst_24336 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24445_24501 = state_24392__$1;
(statearr_24445_24501[(2)] = inst_24336);

(statearr_24445_24501[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (37))){
var state_24392__$1 = state_24392;
var statearr_24446_24502 = state_24392__$1;
(statearr_24446_24502[(2)] = null);

(statearr_24446_24502[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24393 === (8))){
var inst_24298 = (state_24392[(8)]);
var inst_24315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24298);
var state_24392__$1 = state_24392;
var statearr_24447_24503 = state_24392__$1;
(statearr_24447_24503[(2)] = inst_24315);

(statearr_24447_24503[(1)] = (10));


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
});})(c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10014__auto__,c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10015__auto__ = null;
var cljs$core$async$mix_$_state_machine__10015__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = cljs$core$async$mix_$_state_machine__10015__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var cljs$core$async$mix_$_state_machine__10015__auto____1 = (function (state_24392){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24392);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__10018__auto__ = e24452;
var statearr_24453_24504 = state_24392;
(statearr_24453_24504[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24392);

return cljs.core.cst$kw$recur;
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24505 = state_24392;
state_24392 = G__24505;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10015__auto__ = function(state_24392){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10015__auto____1.call(this,state_24392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10015__auto____0;
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10015__auto____1;
return cljs$core$async$mix_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10083__auto__ = (function (){var statearr_24454 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24457);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24506 = [];
var len__6152__auto___24509 = arguments.length;
var i__6153__auto___24510 = (0);
while(true){
if((i__6153__auto___24510 < len__6152__auto___24509)){
args24506.push((arguments[i__6153__auto___24510]));

var G__24511 = (i__6153__auto___24510 + (1));
i__6153__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var G__24508 = args24506.length;
switch (G__24508) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24506.length)].join('')));

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
var args24514 = [];
var len__6152__auto___24642 = arguments.length;
var i__6153__auto___24643 = (0);
while(true){
if((i__6153__auto___24643 < len__6152__auto___24642)){
args24514.push((arguments[i__6153__auto___24643]));

var G__24644 = (i__6153__auto___24643 + (1));
i__6153__auto___24643 = G__24644;
continue;
} else {
}
break;
}

var G__24516 = args24514.length;
switch (G__24516) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24514.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__24517 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24517) : cljs.core.atom.call(null,G__24517));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5094__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5094__auto__,mults){
return (function (p1__24513_SHARP_){
if(cljs.core.truth_((p1__24513_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24513_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24513_SHARP_.call(null,topic)))){
return p1__24513_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24513_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24518 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24519){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24519 = meta24519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24520,meta24519__$1){
var self__ = this;
var _24520__$1 = this;
return (new cljs.core.async.t_cljs$core$async24518(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24519__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24520){
var self__ = this;
var _24520__$1 = this;
return self__.meta24519;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24521 = self__.mults;
var G__24522 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24521,G__24522) : cljs.core.reset_BANG_.call(null,G__24521,G__24522));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24519], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24518";

cljs.core.async.t_cljs$core$async24518.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24518");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24518 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24519){
return (new cljs.core.async.t_cljs$core$async24518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24519));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24518(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10081__auto___24646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24646,mults,ensure_mult,p){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24646,mults,ensure_mult,p){
return (function (state_24594){
var state_val_24595 = (state_24594[(1)]);
if((state_val_24595 === (7))){
var inst_24590 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24596_24647 = state_24594__$1;
(statearr_24596_24647[(2)] = inst_24590);

(statearr_24596_24647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (20))){
var state_24594__$1 = state_24594;
var statearr_24597_24648 = state_24594__$1;
(statearr_24597_24648[(2)] = null);

(statearr_24597_24648[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (1))){
var state_24594__$1 = state_24594;
var statearr_24598_24649 = state_24594__$1;
(statearr_24598_24649[(2)] = null);

(statearr_24598_24649[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (24))){
var inst_24573 = (state_24594[(7)]);
var inst_24582 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24573);
var state_24594__$1 = state_24594;
var statearr_24599_24650 = state_24594__$1;
(statearr_24599_24650[(2)] = inst_24582);

(statearr_24599_24650[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (4))){
var inst_24525 = (state_24594[(8)]);
var inst_24525__$1 = (state_24594[(2)]);
var inst_24526 = (inst_24525__$1 == null);
var state_24594__$1 = (function (){var statearr_24600 = state_24594;
(statearr_24600[(8)] = inst_24525__$1);

return statearr_24600;
})();
if(cljs.core.truth_(inst_24526)){
var statearr_24601_24651 = state_24594__$1;
(statearr_24601_24651[(1)] = (5));

} else {
var statearr_24602_24652 = state_24594__$1;
(statearr_24602_24652[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (15))){
var inst_24567 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24603_24653 = state_24594__$1;
(statearr_24603_24653[(2)] = inst_24567);

(statearr_24603_24653[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (21))){
var inst_24587 = (state_24594[(2)]);
var state_24594__$1 = (function (){var statearr_24604 = state_24594;
(statearr_24604[(9)] = inst_24587);

return statearr_24604;
})();
var statearr_24605_24654 = state_24594__$1;
(statearr_24605_24654[(2)] = null);

(statearr_24605_24654[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (13))){
var inst_24549 = (state_24594[(10)]);
var inst_24551 = cljs.core.chunked_seq_QMARK_(inst_24549);
var state_24594__$1 = state_24594;
if(inst_24551){
var statearr_24606_24655 = state_24594__$1;
(statearr_24606_24655[(1)] = (16));

} else {
var statearr_24607_24656 = state_24594__$1;
(statearr_24607_24656[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (22))){
var inst_24579 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24579)){
var statearr_24608_24657 = state_24594__$1;
(statearr_24608_24657[(1)] = (23));

} else {
var statearr_24609_24658 = state_24594__$1;
(statearr_24609_24658[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (6))){
var inst_24575 = (state_24594[(11)]);
var inst_24525 = (state_24594[(8)]);
var inst_24573 = (state_24594[(7)]);
var inst_24573__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24525) : topic_fn.call(null,inst_24525));
var inst_24574 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24575__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24574,inst_24573__$1);
var state_24594__$1 = (function (){var statearr_24610 = state_24594;
(statearr_24610[(11)] = inst_24575__$1);

(statearr_24610[(7)] = inst_24573__$1);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24575__$1)){
var statearr_24611_24659 = state_24594__$1;
(statearr_24611_24659[(1)] = (19));

} else {
var statearr_24612_24660 = state_24594__$1;
(statearr_24612_24660[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (25))){
var inst_24584 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24613_24661 = state_24594__$1;
(statearr_24613_24661[(2)] = inst_24584);

(statearr_24613_24661[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (17))){
var inst_24549 = (state_24594[(10)]);
var inst_24558 = cljs.core.first(inst_24549);
var inst_24559 = cljs.core.async.muxch_STAR_(inst_24558);
var inst_24560 = cljs.core.async.close_BANG_(inst_24559);
var inst_24561 = cljs.core.next(inst_24549);
var inst_24535 = inst_24561;
var inst_24536 = null;
var inst_24537 = (0);
var inst_24538 = (0);
var state_24594__$1 = (function (){var statearr_24614 = state_24594;
(statearr_24614[(12)] = inst_24536);

(statearr_24614[(13)] = inst_24535);

(statearr_24614[(14)] = inst_24537);

(statearr_24614[(15)] = inst_24538);

(statearr_24614[(16)] = inst_24560);

return statearr_24614;
})();
var statearr_24615_24662 = state_24594__$1;
(statearr_24615_24662[(2)] = null);

(statearr_24615_24662[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (3))){
var inst_24592 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24594__$1,inst_24592);
} else {
if((state_val_24595 === (12))){
var inst_24569 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24616_24663 = state_24594__$1;
(statearr_24616_24663[(2)] = inst_24569);

(statearr_24616_24663[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (2))){
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24594__$1,(4),ch);
} else {
if((state_val_24595 === (23))){
var state_24594__$1 = state_24594;
var statearr_24617_24664 = state_24594__$1;
(statearr_24617_24664[(2)] = null);

(statearr_24617_24664[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (19))){
var inst_24575 = (state_24594[(11)]);
var inst_24525 = (state_24594[(8)]);
var inst_24577 = cljs.core.async.muxch_STAR_(inst_24575);
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24594__$1,(22),inst_24577,inst_24525);
} else {
if((state_val_24595 === (11))){
var inst_24549 = (state_24594[(10)]);
var inst_24535 = (state_24594[(13)]);
var inst_24549__$1 = cljs.core.seq(inst_24535);
var state_24594__$1 = (function (){var statearr_24618 = state_24594;
(statearr_24618[(10)] = inst_24549__$1);

return statearr_24618;
})();
if(inst_24549__$1){
var statearr_24619_24665 = state_24594__$1;
(statearr_24619_24665[(1)] = (13));

} else {
var statearr_24620_24666 = state_24594__$1;
(statearr_24620_24666[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (9))){
var inst_24571 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24621_24667 = state_24594__$1;
(statearr_24621_24667[(2)] = inst_24571);

(statearr_24621_24667[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (5))){
var inst_24532 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24533 = cljs.core.vals(inst_24532);
var inst_24534 = cljs.core.seq(inst_24533);
var inst_24535 = inst_24534;
var inst_24536 = null;
var inst_24537 = (0);
var inst_24538 = (0);
var state_24594__$1 = (function (){var statearr_24622 = state_24594;
(statearr_24622[(12)] = inst_24536);

(statearr_24622[(13)] = inst_24535);

(statearr_24622[(14)] = inst_24537);

(statearr_24622[(15)] = inst_24538);

return statearr_24622;
})();
var statearr_24623_24668 = state_24594__$1;
(statearr_24623_24668[(2)] = null);

(statearr_24623_24668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (14))){
var state_24594__$1 = state_24594;
var statearr_24627_24669 = state_24594__$1;
(statearr_24627_24669[(2)] = null);

(statearr_24627_24669[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (16))){
var inst_24549 = (state_24594[(10)]);
var inst_24553 = cljs.core.chunk_first(inst_24549);
var inst_24554 = cljs.core.chunk_rest(inst_24549);
var inst_24555 = cljs.core.count(inst_24553);
var inst_24535 = inst_24554;
var inst_24536 = inst_24553;
var inst_24537 = inst_24555;
var inst_24538 = (0);
var state_24594__$1 = (function (){var statearr_24628 = state_24594;
(statearr_24628[(12)] = inst_24536);

(statearr_24628[(13)] = inst_24535);

(statearr_24628[(14)] = inst_24537);

(statearr_24628[(15)] = inst_24538);

return statearr_24628;
})();
var statearr_24629_24670 = state_24594__$1;
(statearr_24629_24670[(2)] = null);

(statearr_24629_24670[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (10))){
var inst_24536 = (state_24594[(12)]);
var inst_24535 = (state_24594[(13)]);
var inst_24537 = (state_24594[(14)]);
var inst_24538 = (state_24594[(15)]);
var inst_24543 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24536,inst_24538);
var inst_24544 = cljs.core.async.muxch_STAR_(inst_24543);
var inst_24545 = cljs.core.async.close_BANG_(inst_24544);
var inst_24546 = (inst_24538 + (1));
var tmp24624 = inst_24536;
var tmp24625 = inst_24535;
var tmp24626 = inst_24537;
var inst_24535__$1 = tmp24625;
var inst_24536__$1 = tmp24624;
var inst_24537__$1 = tmp24626;
var inst_24538__$1 = inst_24546;
var state_24594__$1 = (function (){var statearr_24630 = state_24594;
(statearr_24630[(12)] = inst_24536__$1);

(statearr_24630[(13)] = inst_24535__$1);

(statearr_24630[(14)] = inst_24537__$1);

(statearr_24630[(15)] = inst_24538__$1);

(statearr_24630[(17)] = inst_24545);

return statearr_24630;
})();
var statearr_24631_24671 = state_24594__$1;
(statearr_24631_24671[(2)] = null);

(statearr_24631_24671[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (18))){
var inst_24564 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24632_24672 = state_24594__$1;
(statearr_24632_24672[(2)] = inst_24564);

(statearr_24632_24672[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24595 === (8))){
var inst_24537 = (state_24594[(14)]);
var inst_24538 = (state_24594[(15)]);
var inst_24540 = (inst_24538 < inst_24537);
var inst_24541 = inst_24540;
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24541)){
var statearr_24633_24673 = state_24594__$1;
(statearr_24633_24673[(1)] = (10));

} else {
var statearr_24634_24674 = state_24594__$1;
(statearr_24634_24674[(1)] = (11));

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
});})(c__10081__auto___24646,mults,ensure_mult,p))
;
return ((function (switch__10014__auto__,c__10081__auto___24646,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24638[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_24594){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24594);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__10018__auto__ = e24639;
var statearr_24640_24675 = state_24594;
(statearr_24640_24675[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24594);

return cljs.core.cst$kw$recur;
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24676 = state_24594;
state_24594 = G__24676;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_24594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_24594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24646,mults,ensure_mult,p))
})();
var state__10083__auto__ = (function (){var statearr_24641 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24646);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24646,mults,ensure_mult,p))
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
var args24677 = [];
var len__6152__auto___24680 = arguments.length;
var i__6153__auto___24681 = (0);
while(true){
if((i__6153__auto___24681 < len__6152__auto___24680)){
args24677.push((arguments[i__6153__auto___24681]));

var G__24682 = (i__6153__auto___24681 + (1));
i__6153__auto___24681 = G__24682;
continue;
} else {
}
break;
}

var G__24679 = args24677.length;
switch (G__24679) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24677.length)].join('')));

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
var args24684 = [];
var len__6152__auto___24687 = arguments.length;
var i__6153__auto___24688 = (0);
while(true){
if((i__6153__auto___24688 < len__6152__auto___24687)){
args24684.push((arguments[i__6153__auto___24688]));

var G__24689 = (i__6153__auto___24688 + (1));
i__6153__auto___24688 = G__24689;
continue;
} else {
}
break;
}

var G__24686 = args24684.length;
switch (G__24686) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24684.length)].join('')));

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
var args24691 = [];
var len__6152__auto___24762 = arguments.length;
var i__6153__auto___24763 = (0);
while(true){
if((i__6153__auto___24763 < len__6152__auto___24762)){
args24691.push((arguments[i__6153__auto___24763]));

var G__24764 = (i__6153__auto___24763 + (1));
i__6153__auto___24763 = G__24764;
continue;
} else {
}
break;
}

var G__24693 = args24691.length;
switch (G__24693) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24691.length)].join('')));

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
var c__10081__auto___24766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (7))){
var state_24732__$1 = state_24732;
var statearr_24734_24767 = state_24732__$1;
(statearr_24734_24767[(2)] = null);

(statearr_24734_24767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (1))){
var state_24732__$1 = state_24732;
var statearr_24735_24768 = state_24732__$1;
(statearr_24735_24768[(2)] = null);

(statearr_24735_24768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (4))){
var inst_24696 = (state_24732[(7)]);
var inst_24698 = (inst_24696 < cnt);
var state_24732__$1 = state_24732;
if(cljs.core.truth_(inst_24698)){
var statearr_24736_24769 = state_24732__$1;
(statearr_24736_24769[(1)] = (6));

} else {
var statearr_24737_24770 = state_24732__$1;
(statearr_24737_24770[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (15))){
var inst_24728 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24738_24771 = state_24732__$1;
(statearr_24738_24771[(2)] = inst_24728);

(statearr_24738_24771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (13))){
var inst_24721 = cljs.core.async.close_BANG_(out);
var state_24732__$1 = state_24732;
var statearr_24739_24772 = state_24732__$1;
(statearr_24739_24772[(2)] = inst_24721);

(statearr_24739_24772[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (6))){
var state_24732__$1 = state_24732;
var statearr_24740_24773 = state_24732__$1;
(statearr_24740_24773[(2)] = null);

(statearr_24740_24773[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (3))){
var inst_24730 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24732__$1,inst_24730);
} else {
if((state_val_24733 === (12))){
var inst_24718 = (state_24732[(8)]);
var inst_24718__$1 = (state_24732[(2)]);
var inst_24719 = cljs.core.some(cljs.core.nil_QMARK_,inst_24718__$1);
var state_24732__$1 = (function (){var statearr_24741 = state_24732;
(statearr_24741[(8)] = inst_24718__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24742_24774 = state_24732__$1;
(statearr_24742_24774[(1)] = (13));

} else {
var statearr_24743_24775 = state_24732__$1;
(statearr_24743_24775[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (2))){
var inst_24695 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_24696 = (0);
var state_24732__$1 = (function (){var statearr_24744 = state_24732;
(statearr_24744[(7)] = inst_24696);

(statearr_24744[(9)] = inst_24695);

return statearr_24744;
})();
var statearr_24745_24776 = state_24732__$1;
(statearr_24745_24776[(2)] = null);

(statearr_24745_24776[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (11))){
var inst_24696 = (state_24732[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24732,(10),Object,null,(9));
var inst_24705 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24696) : chs__$1.call(null,inst_24696));
var inst_24706 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24696) : done.call(null,inst_24696));
var inst_24707 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24705,inst_24706);
var state_24732__$1 = state_24732;
var statearr_24746_24777 = state_24732__$1;
(statearr_24746_24777[(2)] = inst_24707);


cljs.core.async.impl.ioc_helpers.process_exception(state_24732__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (9))){
var inst_24696 = (state_24732[(7)]);
var inst_24709 = (state_24732[(2)]);
var inst_24710 = (inst_24696 + (1));
var inst_24696__$1 = inst_24710;
var state_24732__$1 = (function (){var statearr_24747 = state_24732;
(statearr_24747[(7)] = inst_24696__$1);

(statearr_24747[(10)] = inst_24709);

return statearr_24747;
})();
var statearr_24748_24778 = state_24732__$1;
(statearr_24748_24778[(2)] = null);

(statearr_24748_24778[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (5))){
var inst_24716 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24749 = state_24732;
(statearr_24749[(11)] = inst_24716);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24732__$1,(12),dchan);
} else {
if((state_val_24733 === (14))){
var inst_24718 = (state_24732[(8)]);
var inst_24723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24718);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24732__$1,(16),out,inst_24723);
} else {
if((state_val_24733 === (16))){
var inst_24725 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24750 = state_24732;
(statearr_24750[(12)] = inst_24725);

return statearr_24750;
})();
var statearr_24751_24779 = state_24732__$1;
(statearr_24751_24779[(2)] = null);

(statearr_24751_24779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (10))){
var inst_24700 = (state_24732[(2)]);
var inst_24701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24732__$1 = (function (){var statearr_24752 = state_24732;
(statearr_24752[(13)] = inst_24700);

return statearr_24752;
})();
var statearr_24753_24780 = state_24732__$1;
(statearr_24753_24780[(2)] = inst_24701);


cljs.core.async.impl.ioc_helpers.process_exception(state_24732__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24733 === (8))){
var inst_24714 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24754_24781 = state_24732__$1;
(statearr_24754_24781[(2)] = inst_24714);

(statearr_24754_24781[(1)] = (5));


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
});})(c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_24758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24758[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_24758[(1)] = (1));

return statearr_24758;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_24732){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24732);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24759){if((e24759 instanceof Object)){
var ex__10018__auto__ = e24759;
var statearr_24760_24782 = state_24732;
(statearr_24760_24782[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24732);

return cljs.core.cst$kw$recur;
} else {
throw e24759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24783 = state_24732;
state_24732 = G__24783;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10083__auto__ = (function (){var statearr_24761 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24766);

return statearr_24761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24766,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24785 = [];
var len__6152__auto___24841 = arguments.length;
var i__6153__auto___24842 = (0);
while(true){
if((i__6153__auto___24842 < len__6152__auto___24841)){
args24785.push((arguments[i__6153__auto___24842]));

var G__24843 = (i__6153__auto___24842 + (1));
i__6153__auto___24842 = G__24843;
continue;
} else {
}
break;
}

var G__24787 = args24785.length;
switch (G__24787) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24785.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___24845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24845,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24845,out){
return (function (state_24817){
var state_val_24818 = (state_24817[(1)]);
if((state_val_24818 === (7))){
var inst_24797 = (state_24817[(7)]);
var inst_24796 = (state_24817[(8)]);
var inst_24796__$1 = (state_24817[(2)]);
var inst_24797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24796__$1,(0),null);
var inst_24798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24796__$1,(1),null);
var inst_24799 = (inst_24797__$1 == null);
var state_24817__$1 = (function (){var statearr_24819 = state_24817;
(statearr_24819[(7)] = inst_24797__$1);

(statearr_24819[(8)] = inst_24796__$1);

(statearr_24819[(9)] = inst_24798);

return statearr_24819;
})();
if(cljs.core.truth_(inst_24799)){
var statearr_24820_24846 = state_24817__$1;
(statearr_24820_24846[(1)] = (8));

} else {
var statearr_24821_24847 = state_24817__$1;
(statearr_24821_24847[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (1))){
var inst_24788 = cljs.core.vec(chs);
var inst_24789 = inst_24788;
var state_24817__$1 = (function (){var statearr_24822 = state_24817;
(statearr_24822[(10)] = inst_24789);

return statearr_24822;
})();
var statearr_24823_24848 = state_24817__$1;
(statearr_24823_24848[(2)] = null);

(statearr_24823_24848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (4))){
var inst_24789 = (state_24817[(10)]);
var state_24817__$1 = state_24817;
return cljs.core.async.ioc_alts_BANG_(state_24817__$1,(7),inst_24789);
} else {
if((state_val_24818 === (6))){
var inst_24813 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
var statearr_24824_24849 = state_24817__$1;
(statearr_24824_24849[(2)] = inst_24813);

(statearr_24824_24849[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (3))){
var inst_24815 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24817__$1,inst_24815);
} else {
if((state_val_24818 === (2))){
var inst_24789 = (state_24817[(10)]);
var inst_24791 = cljs.core.count(inst_24789);
var inst_24792 = (inst_24791 > (0));
var state_24817__$1 = state_24817;
if(cljs.core.truth_(inst_24792)){
var statearr_24826_24850 = state_24817__$1;
(statearr_24826_24850[(1)] = (4));

} else {
var statearr_24827_24851 = state_24817__$1;
(statearr_24827_24851[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (11))){
var inst_24789 = (state_24817[(10)]);
var inst_24806 = (state_24817[(2)]);
var tmp24825 = inst_24789;
var inst_24789__$1 = tmp24825;
var state_24817__$1 = (function (){var statearr_24828 = state_24817;
(statearr_24828[(10)] = inst_24789__$1);

(statearr_24828[(11)] = inst_24806);

return statearr_24828;
})();
var statearr_24829_24852 = state_24817__$1;
(statearr_24829_24852[(2)] = null);

(statearr_24829_24852[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (9))){
var inst_24797 = (state_24817[(7)]);
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24817__$1,(11),out,inst_24797);
} else {
if((state_val_24818 === (5))){
var inst_24811 = cljs.core.async.close_BANG_(out);
var state_24817__$1 = state_24817;
var statearr_24830_24853 = state_24817__$1;
(statearr_24830_24853[(2)] = inst_24811);

(statearr_24830_24853[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (10))){
var inst_24809 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
var statearr_24831_24854 = state_24817__$1;
(statearr_24831_24854[(2)] = inst_24809);

(statearr_24831_24854[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24818 === (8))){
var inst_24789 = (state_24817[(10)]);
var inst_24797 = (state_24817[(7)]);
var inst_24796 = (state_24817[(8)]);
var inst_24798 = (state_24817[(9)]);
var inst_24801 = (function (){var cs = inst_24789;
var vec__24794 = inst_24796;
var v = inst_24797;
var c = inst_24798;
return ((function (cs,vec__24794,v,c,inst_24789,inst_24797,inst_24796,inst_24798,state_val_24818,c__10081__auto___24845,out){
return (function (p1__24784_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24784_SHARP_);
});
;})(cs,vec__24794,v,c,inst_24789,inst_24797,inst_24796,inst_24798,state_val_24818,c__10081__auto___24845,out))
})();
var inst_24802 = cljs.core.filterv(inst_24801,inst_24789);
var inst_24789__$1 = inst_24802;
var state_24817__$1 = (function (){var statearr_24832 = state_24817;
(statearr_24832[(10)] = inst_24789__$1);

return statearr_24832;
})();
var statearr_24833_24855 = state_24817__$1;
(statearr_24833_24855[(2)] = null);

(statearr_24833_24855[(1)] = (2));


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
});})(c__10081__auto___24845,out))
;
return ((function (switch__10014__auto__,c__10081__auto___24845,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_24837 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24837[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_24837[(1)] = (1));

return statearr_24837;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_24817){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24817);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24838){if((e24838 instanceof Object)){
var ex__10018__auto__ = e24838;
var statearr_24839_24856 = state_24817;
(statearr_24839_24856[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24817);

return cljs.core.cst$kw$recur;
} else {
throw e24838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24857 = state_24817;
state_24817 = G__24857;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_24817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_24817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24845,out))
})();
var state__10083__auto__ = (function (){var statearr_24840 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24845);

return statearr_24840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24845,out))
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
var args24858 = [];
var len__6152__auto___24907 = arguments.length;
var i__6153__auto___24908 = (0);
while(true){
if((i__6153__auto___24908 < len__6152__auto___24907)){
args24858.push((arguments[i__6153__auto___24908]));

var G__24909 = (i__6153__auto___24908 + (1));
i__6153__auto___24908 = G__24909;
continue;
} else {
}
break;
}

var G__24860 = args24858.length;
switch (G__24860) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24858.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___24911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___24911,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___24911,out){
return (function (state_24884){
var state_val_24885 = (state_24884[(1)]);
if((state_val_24885 === (7))){
var inst_24866 = (state_24884[(7)]);
var inst_24866__$1 = (state_24884[(2)]);
var inst_24867 = (inst_24866__$1 == null);
var inst_24868 = cljs.core.not(inst_24867);
var state_24884__$1 = (function (){var statearr_24886 = state_24884;
(statearr_24886[(7)] = inst_24866__$1);

return statearr_24886;
})();
if(inst_24868){
var statearr_24887_24912 = state_24884__$1;
(statearr_24887_24912[(1)] = (8));

} else {
var statearr_24888_24913 = state_24884__$1;
(statearr_24888_24913[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (1))){
var inst_24861 = (0);
var state_24884__$1 = (function (){var statearr_24889 = state_24884;
(statearr_24889[(8)] = inst_24861);

return statearr_24889;
})();
var statearr_24890_24914 = state_24884__$1;
(statearr_24890_24914[(2)] = null);

(statearr_24890_24914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (4))){
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24884__$1,(7),ch);
} else {
if((state_val_24885 === (6))){
var inst_24879 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24891_24915 = state_24884__$1;
(statearr_24891_24915[(2)] = inst_24879);

(statearr_24891_24915[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (3))){
var inst_24881 = (state_24884[(2)]);
var inst_24882 = cljs.core.async.close_BANG_(out);
var state_24884__$1 = (function (){var statearr_24892 = state_24884;
(statearr_24892[(9)] = inst_24881);

return statearr_24892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24884__$1,inst_24882);
} else {
if((state_val_24885 === (2))){
var inst_24861 = (state_24884[(8)]);
var inst_24863 = (inst_24861 < n);
var state_24884__$1 = state_24884;
if(cljs.core.truth_(inst_24863)){
var statearr_24893_24916 = state_24884__$1;
(statearr_24893_24916[(1)] = (4));

} else {
var statearr_24894_24917 = state_24884__$1;
(statearr_24894_24917[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (11))){
var inst_24861 = (state_24884[(8)]);
var inst_24871 = (state_24884[(2)]);
var inst_24872 = (inst_24861 + (1));
var inst_24861__$1 = inst_24872;
var state_24884__$1 = (function (){var statearr_24895 = state_24884;
(statearr_24895[(10)] = inst_24871);

(statearr_24895[(8)] = inst_24861__$1);

return statearr_24895;
})();
var statearr_24896_24918 = state_24884__$1;
(statearr_24896_24918[(2)] = null);

(statearr_24896_24918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (9))){
var state_24884__$1 = state_24884;
var statearr_24897_24919 = state_24884__$1;
(statearr_24897_24919[(2)] = null);

(statearr_24897_24919[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (5))){
var state_24884__$1 = state_24884;
var statearr_24898_24920 = state_24884__$1;
(statearr_24898_24920[(2)] = null);

(statearr_24898_24920[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (10))){
var inst_24876 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24899_24921 = state_24884__$1;
(statearr_24899_24921[(2)] = inst_24876);

(statearr_24899_24921[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24885 === (8))){
var inst_24866 = (state_24884[(7)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24884__$1,(11),out,inst_24866);
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
});})(c__10081__auto___24911,out))
;
return ((function (switch__10014__auto__,c__10081__auto___24911,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_24903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24903[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_24903[(1)] = (1));

return statearr_24903;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_24884){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24884);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24904){if((e24904 instanceof Object)){
var ex__10018__auto__ = e24904;
var statearr_24905_24922 = state_24884;
(statearr_24905_24922[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24884);

return cljs.core.cst$kw$recur;
} else {
throw e24904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__24923 = state_24884;
state_24884 = G__24923;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_24884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_24884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___24911,out))
})();
var state__10083__auto__ = (function (){var statearr_24906 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___24911);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___24911,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24933 = (function (map_LT_,f,ch,meta24934){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){
var self__ = this;
var _24935__$1 = this;
return (new cljs.core.async.t_cljs$core$async24933(self__.map_LT_,self__.f,self__.ch,meta24934__$1));
});

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){
var self__ = this;
var _24935__$1 = this;
return self__.meta24934;
});

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24936 = (function (map_LT_,f,ch,meta24934,_,fn1,meta24937){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24934 = meta24934;
this._ = _;
this.fn1 = fn1;
this.meta24937 = meta24937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24938,meta24937__$1){
var self__ = this;
var _24938__$1 = this;
return (new cljs.core.async.t_cljs$core$async24936(self__.map_LT_,self__.f,self__.ch,self__.meta24934,self__._,self__.fn1,meta24937__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24938){
var self__ = this;
var _24938__$1 = this;
return self__.meta24937;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24924_SHARP_){
var G__24939 = (((p1__24924_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24924_SHARP_) : self__.f.call(null,p1__24924_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24939) : f1.call(null,G__24939));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24936.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24934,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async24933], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta24937], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24936";

cljs.core.async.t_cljs$core$async24936.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24936");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24936 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24936(map_LT___$1,f__$1,ch__$1,meta24934__$1,___$2,fn1__$1,meta24937){
return (new cljs.core.async.t_cljs$core$async24936(map_LT___$1,f__$1,ch__$1,meta24934__$1,___$2,fn1__$1,meta24937));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24936(self__.map_LT_,self__.f,self__.ch,self__.meta24934,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5082__auto__ = ret;
if(cljs.core.truth_(and__5082__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5082__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24940 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24940) : self__.f.call(null,G__24940));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24934], null);
});

cljs.core.async.t_cljs$core$async24933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24933";

cljs.core.async.t_cljs$core$async24933.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24933");
});

cljs.core.async.__GT_t_cljs$core$async24933 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24933(map_LT___$1,f__$1,ch__$1,meta24934){
return (new cljs.core.async.t_cljs$core$async24933(map_LT___$1,f__$1,ch__$1,meta24934));
});

}

return (new cljs.core.async.t_cljs$core$async24933(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24944 = (function (map_GT_,f,ch,meta24945){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24945 = meta24945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24946,meta24945__$1){
var self__ = this;
var _24946__$1 = this;
return (new cljs.core.async.t_cljs$core$async24944(self__.map_GT_,self__.f,self__.ch,meta24945__$1));
});

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24946){
var self__ = this;
var _24946__$1 = this;
return self__.meta24945;
});

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async24944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24945], null);
});

cljs.core.async.t_cljs$core$async24944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24944";

cljs.core.async.t_cljs$core$async24944.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24944");
});

cljs.core.async.__GT_t_cljs$core$async24944 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24944(map_GT___$1,f__$1,ch__$1,meta24945){
return (new cljs.core.async.t_cljs$core$async24944(map_GT___$1,f__$1,ch__$1,meta24945));
});

}

return (new cljs.core.async.t_cljs$core$async24944(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24950 = (function (filter_GT_,p,ch,meta24951){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24951 = meta24951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24952,meta24951__$1){
var self__ = this;
var _24952__$1 = this;
return (new cljs.core.async.t_cljs$core$async24950(self__.filter_GT_,self__.p,self__.ch,meta24951__$1));
});

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24952){
var self__ = this;
var _24952__$1 = this;
return self__.meta24951;
});

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24951], null);
});

cljs.core.async.t_cljs$core$async24950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24950";

cljs.core.async.t_cljs$core$async24950.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"cljs.core.async/t_cljs$core$async24950");
});

cljs.core.async.__GT_t_cljs$core$async24950 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24950(filter_GT___$1,p__$1,ch__$1,meta24951){
return (new cljs.core.async.t_cljs$core$async24950(filter_GT___$1,p__$1,ch__$1,meta24951));
});

}

return (new cljs.core.async.t_cljs$core$async24950(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24953 = [];
var len__6152__auto___24997 = arguments.length;
var i__6153__auto___24998 = (0);
while(true){
if((i__6153__auto___24998 < len__6152__auto___24997)){
args24953.push((arguments[i__6153__auto___24998]));

var G__24999 = (i__6153__auto___24998 + (1));
i__6153__auto___24998 = G__24999;
continue;
} else {
}
break;
}

var G__24955 = args24953.length;
switch (G__24955) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24953.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___25001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___25001,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___25001,out){
return (function (state_24976){
var state_val_24977 = (state_24976[(1)]);
if((state_val_24977 === (7))){
var inst_24972 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
var statearr_24978_25002 = state_24976__$1;
(statearr_24978_25002[(2)] = inst_24972);

(statearr_24978_25002[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (1))){
var state_24976__$1 = state_24976;
var statearr_24979_25003 = state_24976__$1;
(statearr_24979_25003[(2)] = null);

(statearr_24979_25003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (4))){
var inst_24958 = (state_24976[(7)]);
var inst_24958__$1 = (state_24976[(2)]);
var inst_24959 = (inst_24958__$1 == null);
var state_24976__$1 = (function (){var statearr_24980 = state_24976;
(statearr_24980[(7)] = inst_24958__$1);

return statearr_24980;
})();
if(cljs.core.truth_(inst_24959)){
var statearr_24981_25004 = state_24976__$1;
(statearr_24981_25004[(1)] = (5));

} else {
var statearr_24982_25005 = state_24976__$1;
(statearr_24982_25005[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (6))){
var inst_24958 = (state_24976[(7)]);
var inst_24963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24958) : p.call(null,inst_24958));
var state_24976__$1 = state_24976;
if(cljs.core.truth_(inst_24963)){
var statearr_24983_25006 = state_24976__$1;
(statearr_24983_25006[(1)] = (8));

} else {
var statearr_24984_25007 = state_24976__$1;
(statearr_24984_25007[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (3))){
var inst_24974 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24976__$1,inst_24974);
} else {
if((state_val_24977 === (2))){
var state_24976__$1 = state_24976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24976__$1,(4),ch);
} else {
if((state_val_24977 === (11))){
var inst_24966 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
var statearr_24985_25008 = state_24976__$1;
(statearr_24985_25008[(2)] = inst_24966);

(statearr_24985_25008[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (9))){
var state_24976__$1 = state_24976;
var statearr_24986_25009 = state_24976__$1;
(statearr_24986_25009[(2)] = null);

(statearr_24986_25009[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (5))){
var inst_24961 = cljs.core.async.close_BANG_(out);
var state_24976__$1 = state_24976;
var statearr_24987_25010 = state_24976__$1;
(statearr_24987_25010[(2)] = inst_24961);

(statearr_24987_25010[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (10))){
var inst_24969 = (state_24976[(2)]);
var state_24976__$1 = (function (){var statearr_24988 = state_24976;
(statearr_24988[(8)] = inst_24969);

return statearr_24988;
})();
var statearr_24989_25011 = state_24976__$1;
(statearr_24989_25011[(2)] = null);

(statearr_24989_25011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24977 === (8))){
var inst_24958 = (state_24976[(7)]);
var state_24976__$1 = state_24976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24976__$1,(11),out,inst_24958);
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
});})(c__10081__auto___25001,out))
;
return ((function (switch__10014__auto__,c__10081__auto___25001,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_24993 = [null,null,null,null,null,null,null,null,null];
(statearr_24993[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_24993[(1)] = (1));

return statearr_24993;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_24976){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_24976);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e24994){if((e24994 instanceof Object)){
var ex__10018__auto__ = e24994;
var statearr_24995_25012 = state_24976;
(statearr_24995_25012[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24976);

return cljs.core.cst$kw$recur;
} else {
throw e24994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__25013 = state_24976;
state_24976 = G__25013;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_24976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_24976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___25001,out))
})();
var state__10083__auto__ = (function (){var statearr_24996 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_24996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___25001);

return statearr_24996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___25001,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25014 = [];
var len__6152__auto___25017 = arguments.length;
var i__6153__auto___25018 = (0);
while(true){
if((i__6153__auto___25018 < len__6152__auto___25017)){
args25014.push((arguments[i__6153__auto___25018]));

var G__25019 = (i__6153__auto___25018 + (1));
i__6153__auto___25018 = G__25019;
continue;
} else {
}
break;
}

var G__25016 = args25014.length;
switch (G__25016) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25014.length)].join('')));

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
return (function (state_25186){
var state_val_25187 = (state_25186[(1)]);
if((state_val_25187 === (7))){
var inst_25182 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25188_25229 = state_25186__$1;
(statearr_25188_25229[(2)] = inst_25182);

(statearr_25188_25229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (20))){
var inst_25152 = (state_25186[(7)]);
var inst_25163 = (state_25186[(2)]);
var inst_25164 = cljs.core.next(inst_25152);
var inst_25138 = inst_25164;
var inst_25139 = null;
var inst_25140 = (0);
var inst_25141 = (0);
var state_25186__$1 = (function (){var statearr_25189 = state_25186;
(statearr_25189[(8)] = inst_25140);

(statearr_25189[(9)] = inst_25138);

(statearr_25189[(10)] = inst_25141);

(statearr_25189[(11)] = inst_25139);

(statearr_25189[(12)] = inst_25163);

return statearr_25189;
})();
var statearr_25190_25230 = state_25186__$1;
(statearr_25190_25230[(2)] = null);

(statearr_25190_25230[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (1))){
var state_25186__$1 = state_25186;
var statearr_25191_25231 = state_25186__$1;
(statearr_25191_25231[(2)] = null);

(statearr_25191_25231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (4))){
var inst_25127 = (state_25186[(13)]);
var inst_25127__$1 = (state_25186[(2)]);
var inst_25128 = (inst_25127__$1 == null);
var state_25186__$1 = (function (){var statearr_25192 = state_25186;
(statearr_25192[(13)] = inst_25127__$1);

return statearr_25192;
})();
if(cljs.core.truth_(inst_25128)){
var statearr_25193_25232 = state_25186__$1;
(statearr_25193_25232[(1)] = (5));

} else {
var statearr_25194_25233 = state_25186__$1;
(statearr_25194_25233[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (15))){
var state_25186__$1 = state_25186;
var statearr_25198_25234 = state_25186__$1;
(statearr_25198_25234[(2)] = null);

(statearr_25198_25234[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (21))){
var state_25186__$1 = state_25186;
var statearr_25199_25235 = state_25186__$1;
(statearr_25199_25235[(2)] = null);

(statearr_25199_25235[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (13))){
var inst_25140 = (state_25186[(8)]);
var inst_25138 = (state_25186[(9)]);
var inst_25141 = (state_25186[(10)]);
var inst_25139 = (state_25186[(11)]);
var inst_25148 = (state_25186[(2)]);
var inst_25149 = (inst_25141 + (1));
var tmp25195 = inst_25140;
var tmp25196 = inst_25138;
var tmp25197 = inst_25139;
var inst_25138__$1 = tmp25196;
var inst_25139__$1 = tmp25197;
var inst_25140__$1 = tmp25195;
var inst_25141__$1 = inst_25149;
var state_25186__$1 = (function (){var statearr_25200 = state_25186;
(statearr_25200[(8)] = inst_25140__$1);

(statearr_25200[(9)] = inst_25138__$1);

(statearr_25200[(10)] = inst_25141__$1);

(statearr_25200[(14)] = inst_25148);

(statearr_25200[(11)] = inst_25139__$1);

return statearr_25200;
})();
var statearr_25201_25236 = state_25186__$1;
(statearr_25201_25236[(2)] = null);

(statearr_25201_25236[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (22))){
var state_25186__$1 = state_25186;
var statearr_25202_25237 = state_25186__$1;
(statearr_25202_25237[(2)] = null);

(statearr_25202_25237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (6))){
var inst_25127 = (state_25186[(13)]);
var inst_25136 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25127) : f.call(null,inst_25127));
var inst_25137 = cljs.core.seq(inst_25136);
var inst_25138 = inst_25137;
var inst_25139 = null;
var inst_25140 = (0);
var inst_25141 = (0);
var state_25186__$1 = (function (){var statearr_25203 = state_25186;
(statearr_25203[(8)] = inst_25140);

(statearr_25203[(9)] = inst_25138);

(statearr_25203[(10)] = inst_25141);

(statearr_25203[(11)] = inst_25139);

return statearr_25203;
})();
var statearr_25204_25238 = state_25186__$1;
(statearr_25204_25238[(2)] = null);

(statearr_25204_25238[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (17))){
var inst_25152 = (state_25186[(7)]);
var inst_25156 = cljs.core.chunk_first(inst_25152);
var inst_25157 = cljs.core.chunk_rest(inst_25152);
var inst_25158 = cljs.core.count(inst_25156);
var inst_25138 = inst_25157;
var inst_25139 = inst_25156;
var inst_25140 = inst_25158;
var inst_25141 = (0);
var state_25186__$1 = (function (){var statearr_25205 = state_25186;
(statearr_25205[(8)] = inst_25140);

(statearr_25205[(9)] = inst_25138);

(statearr_25205[(10)] = inst_25141);

(statearr_25205[(11)] = inst_25139);

return statearr_25205;
})();
var statearr_25206_25239 = state_25186__$1;
(statearr_25206_25239[(2)] = null);

(statearr_25206_25239[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (3))){
var inst_25184 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25186__$1,inst_25184);
} else {
if((state_val_25187 === (12))){
var inst_25172 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25207_25240 = state_25186__$1;
(statearr_25207_25240[(2)] = inst_25172);

(statearr_25207_25240[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (2))){
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25186__$1,(4),in$);
} else {
if((state_val_25187 === (23))){
var inst_25180 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25208_25241 = state_25186__$1;
(statearr_25208_25241[(2)] = inst_25180);

(statearr_25208_25241[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (19))){
var inst_25167 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25209_25242 = state_25186__$1;
(statearr_25209_25242[(2)] = inst_25167);

(statearr_25209_25242[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (11))){
var inst_25152 = (state_25186[(7)]);
var inst_25138 = (state_25186[(9)]);
var inst_25152__$1 = cljs.core.seq(inst_25138);
var state_25186__$1 = (function (){var statearr_25210 = state_25186;
(statearr_25210[(7)] = inst_25152__$1);

return statearr_25210;
})();
if(inst_25152__$1){
var statearr_25211_25243 = state_25186__$1;
(statearr_25211_25243[(1)] = (14));

} else {
var statearr_25212_25244 = state_25186__$1;
(statearr_25212_25244[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (9))){
var inst_25174 = (state_25186[(2)]);
var inst_25175 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25186__$1 = (function (){var statearr_25213 = state_25186;
(statearr_25213[(15)] = inst_25174);

return statearr_25213;
})();
if(cljs.core.truth_(inst_25175)){
var statearr_25214_25245 = state_25186__$1;
(statearr_25214_25245[(1)] = (21));

} else {
var statearr_25215_25246 = state_25186__$1;
(statearr_25215_25246[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (5))){
var inst_25130 = cljs.core.async.close_BANG_(out);
var state_25186__$1 = state_25186;
var statearr_25216_25247 = state_25186__$1;
(statearr_25216_25247[(2)] = inst_25130);

(statearr_25216_25247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (14))){
var inst_25152 = (state_25186[(7)]);
var inst_25154 = cljs.core.chunked_seq_QMARK_(inst_25152);
var state_25186__$1 = state_25186;
if(inst_25154){
var statearr_25217_25248 = state_25186__$1;
(statearr_25217_25248[(1)] = (17));

} else {
var statearr_25218_25249 = state_25186__$1;
(statearr_25218_25249[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (16))){
var inst_25170 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25219_25250 = state_25186__$1;
(statearr_25219_25250[(2)] = inst_25170);

(statearr_25219_25250[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25187 === (10))){
var inst_25141 = (state_25186[(10)]);
var inst_25139 = (state_25186[(11)]);
var inst_25146 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25139,inst_25141);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25186__$1,(13),out,inst_25146);
} else {
if((state_val_25187 === (18))){
var inst_25152 = (state_25186[(7)]);
var inst_25161 = cljs.core.first(inst_25152);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25186__$1,(20),out,inst_25161);
} else {
if((state_val_25187 === (8))){
var inst_25140 = (state_25186[(8)]);
var inst_25141 = (state_25186[(10)]);
var inst_25143 = (inst_25141 < inst_25140);
var inst_25144 = inst_25143;
var state_25186__$1 = state_25186;
if(cljs.core.truth_(inst_25144)){
var statearr_25220_25251 = state_25186__$1;
(statearr_25220_25251[(1)] = (10));

} else {
var statearr_25221_25252 = state_25186__$1;
(statearr_25221_25252[(1)] = (11));

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
var statearr_25225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25225[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__);

(statearr_25225[(1)] = (1));

return statearr_25225;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1 = (function (state_25186){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_25186);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e25226){if((e25226 instanceof Object)){
var ex__10018__auto__ = e25226;
var statearr_25227_25253 = state_25186;
(statearr_25227_25253[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25186);

return cljs.core.cst$kw$recur;
} else {
throw e25226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__25254 = state_25186;
state_25186 = G__25254;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__ = function(state_25186){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1.call(this,state_25186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_25228 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_25228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_25228;
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
var args25255 = [];
var len__6152__auto___25258 = arguments.length;
var i__6153__auto___25259 = (0);
while(true){
if((i__6153__auto___25259 < len__6152__auto___25258)){
args25255.push((arguments[i__6153__auto___25259]));

var G__25260 = (i__6153__auto___25259 + (1));
i__6153__auto___25259 = G__25260;
continue;
} else {
}
break;
}

var G__25257 = args25255.length;
switch (G__25257) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25255.length)].join('')));

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
var args25262 = [];
var len__6152__auto___25265 = arguments.length;
var i__6153__auto___25266 = (0);
while(true){
if((i__6153__auto___25266 < len__6152__auto___25265)){
args25262.push((arguments[i__6153__auto___25266]));

var G__25267 = (i__6153__auto___25266 + (1));
i__6153__auto___25266 = G__25267;
continue;
} else {
}
break;
}

var G__25264 = args25262.length;
switch (G__25264) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25262.length)].join('')));

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
var args25269 = [];
var len__6152__auto___25320 = arguments.length;
var i__6153__auto___25321 = (0);
while(true){
if((i__6153__auto___25321 < len__6152__auto___25320)){
args25269.push((arguments[i__6153__auto___25321]));

var G__25322 = (i__6153__auto___25321 + (1));
i__6153__auto___25321 = G__25322;
continue;
} else {
}
break;
}

var G__25271 = args25269.length;
switch (G__25271) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25269.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___25324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___25324,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___25324,out){
return (function (state_25295){
var state_val_25296 = (state_25295[(1)]);
if((state_val_25296 === (7))){
var inst_25290 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
var statearr_25297_25325 = state_25295__$1;
(statearr_25297_25325[(2)] = inst_25290);

(statearr_25297_25325[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (1))){
var inst_25272 = null;
var state_25295__$1 = (function (){var statearr_25298 = state_25295;
(statearr_25298[(7)] = inst_25272);

return statearr_25298;
})();
var statearr_25299_25326 = state_25295__$1;
(statearr_25299_25326[(2)] = null);

(statearr_25299_25326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (4))){
var inst_25275 = (state_25295[(8)]);
var inst_25275__$1 = (state_25295[(2)]);
var inst_25276 = (inst_25275__$1 == null);
var inst_25277 = cljs.core.not(inst_25276);
var state_25295__$1 = (function (){var statearr_25300 = state_25295;
(statearr_25300[(8)] = inst_25275__$1);

return statearr_25300;
})();
if(inst_25277){
var statearr_25301_25327 = state_25295__$1;
(statearr_25301_25327[(1)] = (5));

} else {
var statearr_25302_25328 = state_25295__$1;
(statearr_25302_25328[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (6))){
var state_25295__$1 = state_25295;
var statearr_25303_25329 = state_25295__$1;
(statearr_25303_25329[(2)] = null);

(statearr_25303_25329[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (3))){
var inst_25292 = (state_25295[(2)]);
var inst_25293 = cljs.core.async.close_BANG_(out);
var state_25295__$1 = (function (){var statearr_25304 = state_25295;
(statearr_25304[(9)] = inst_25292);

return statearr_25304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25295__$1,inst_25293);
} else {
if((state_val_25296 === (2))){
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25295__$1,(4),ch);
} else {
if((state_val_25296 === (11))){
var inst_25275 = (state_25295[(8)]);
var inst_25284 = (state_25295[(2)]);
var inst_25272 = inst_25275;
var state_25295__$1 = (function (){var statearr_25305 = state_25295;
(statearr_25305[(10)] = inst_25284);

(statearr_25305[(7)] = inst_25272);

return statearr_25305;
})();
var statearr_25306_25330 = state_25295__$1;
(statearr_25306_25330[(2)] = null);

(statearr_25306_25330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (9))){
var inst_25275 = (state_25295[(8)]);
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25295__$1,(11),out,inst_25275);
} else {
if((state_val_25296 === (5))){
var inst_25272 = (state_25295[(7)]);
var inst_25275 = (state_25295[(8)]);
var inst_25279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25275,inst_25272);
var state_25295__$1 = state_25295;
if(inst_25279){
var statearr_25308_25331 = state_25295__$1;
(statearr_25308_25331[(1)] = (8));

} else {
var statearr_25309_25332 = state_25295__$1;
(statearr_25309_25332[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (10))){
var inst_25287 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
var statearr_25310_25333 = state_25295__$1;
(statearr_25310_25333[(2)] = inst_25287);

(statearr_25310_25333[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25296 === (8))){
var inst_25272 = (state_25295[(7)]);
var tmp25307 = inst_25272;
var inst_25272__$1 = tmp25307;
var state_25295__$1 = (function (){var statearr_25311 = state_25295;
(statearr_25311[(7)] = inst_25272__$1);

return statearr_25311;
})();
var statearr_25312_25334 = state_25295__$1;
(statearr_25312_25334[(2)] = null);

(statearr_25312_25334[(1)] = (2));


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
});})(c__10081__auto___25324,out))
;
return ((function (switch__10014__auto__,c__10081__auto___25324,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_25316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25316[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_25316[(1)] = (1));

return statearr_25316;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_25295){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_25295);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e25317){if((e25317 instanceof Object)){
var ex__10018__auto__ = e25317;
var statearr_25318_25335 = state_25295;
(statearr_25318_25335[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25295);

return cljs.core.cst$kw$recur;
} else {
throw e25317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__25336 = state_25295;
state_25295 = G__25336;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_25295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_25295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___25324,out))
})();
var state__10083__auto__ = (function (){var statearr_25319 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_25319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___25324);

return statearr_25319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___25324,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25337 = [];
var len__6152__auto___25407 = arguments.length;
var i__6153__auto___25408 = (0);
while(true){
if((i__6153__auto___25408 < len__6152__auto___25407)){
args25337.push((arguments[i__6153__auto___25408]));

var G__25409 = (i__6153__auto___25408 + (1));
i__6153__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var G__25339 = args25337.length;
switch (G__25339) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25337.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___25411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___25411,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___25411,out){
return (function (state_25377){
var state_val_25378 = (state_25377[(1)]);
if((state_val_25378 === (7))){
var inst_25373 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25379_25412 = state_25377__$1;
(statearr_25379_25412[(2)] = inst_25373);

(statearr_25379_25412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (1))){
var inst_25340 = (new Array(n));
var inst_25341 = inst_25340;
var inst_25342 = (0);
var state_25377__$1 = (function (){var statearr_25380 = state_25377;
(statearr_25380[(7)] = inst_25341);

(statearr_25380[(8)] = inst_25342);

return statearr_25380;
})();
var statearr_25381_25413 = state_25377__$1;
(statearr_25381_25413[(2)] = null);

(statearr_25381_25413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (4))){
var inst_25345 = (state_25377[(9)]);
var inst_25345__$1 = (state_25377[(2)]);
var inst_25346 = (inst_25345__$1 == null);
var inst_25347 = cljs.core.not(inst_25346);
var state_25377__$1 = (function (){var statearr_25382 = state_25377;
(statearr_25382[(9)] = inst_25345__$1);

return statearr_25382;
})();
if(inst_25347){
var statearr_25383_25414 = state_25377__$1;
(statearr_25383_25414[(1)] = (5));

} else {
var statearr_25384_25415 = state_25377__$1;
(statearr_25384_25415[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (15))){
var inst_25367 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25385_25416 = state_25377__$1;
(statearr_25385_25416[(2)] = inst_25367);

(statearr_25385_25416[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (13))){
var state_25377__$1 = state_25377;
var statearr_25386_25417 = state_25377__$1;
(statearr_25386_25417[(2)] = null);

(statearr_25386_25417[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (6))){
var inst_25342 = (state_25377[(8)]);
var inst_25363 = (inst_25342 > (0));
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25363)){
var statearr_25387_25418 = state_25377__$1;
(statearr_25387_25418[(1)] = (12));

} else {
var statearr_25388_25419 = state_25377__$1;
(statearr_25388_25419[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (3))){
var inst_25375 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25377__$1,inst_25375);
} else {
if((state_val_25378 === (12))){
var inst_25341 = (state_25377[(7)]);
var inst_25365 = cljs.core.vec(inst_25341);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25377__$1,(15),out,inst_25365);
} else {
if((state_val_25378 === (2))){
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25377__$1,(4),ch);
} else {
if((state_val_25378 === (11))){
var inst_25357 = (state_25377[(2)]);
var inst_25358 = (new Array(n));
var inst_25341 = inst_25358;
var inst_25342 = (0);
var state_25377__$1 = (function (){var statearr_25389 = state_25377;
(statearr_25389[(10)] = inst_25357);

(statearr_25389[(7)] = inst_25341);

(statearr_25389[(8)] = inst_25342);

return statearr_25389;
})();
var statearr_25390_25420 = state_25377__$1;
(statearr_25390_25420[(2)] = null);

(statearr_25390_25420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (9))){
var inst_25341 = (state_25377[(7)]);
var inst_25355 = cljs.core.vec(inst_25341);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25377__$1,(11),out,inst_25355);
} else {
if((state_val_25378 === (5))){
var inst_25341 = (state_25377[(7)]);
var inst_25345 = (state_25377[(9)]);
var inst_25350 = (state_25377[(11)]);
var inst_25342 = (state_25377[(8)]);
var inst_25349 = (inst_25341[inst_25342] = inst_25345);
var inst_25350__$1 = (inst_25342 + (1));
var inst_25351 = (inst_25350__$1 < n);
var state_25377__$1 = (function (){var statearr_25391 = state_25377;
(statearr_25391[(12)] = inst_25349);

(statearr_25391[(11)] = inst_25350__$1);

return statearr_25391;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25392_25421 = state_25377__$1;
(statearr_25392_25421[(1)] = (8));

} else {
var statearr_25393_25422 = state_25377__$1;
(statearr_25393_25422[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (14))){
var inst_25370 = (state_25377[(2)]);
var inst_25371 = cljs.core.async.close_BANG_(out);
var state_25377__$1 = (function (){var statearr_25395 = state_25377;
(statearr_25395[(13)] = inst_25370);

return statearr_25395;
})();
var statearr_25396_25423 = state_25377__$1;
(statearr_25396_25423[(2)] = inst_25371);

(statearr_25396_25423[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (10))){
var inst_25361 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25397_25424 = state_25377__$1;
(statearr_25397_25424[(2)] = inst_25361);

(statearr_25397_25424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25378 === (8))){
var inst_25341 = (state_25377[(7)]);
var inst_25350 = (state_25377[(11)]);
var tmp25394 = inst_25341;
var inst_25341__$1 = tmp25394;
var inst_25342 = inst_25350;
var state_25377__$1 = (function (){var statearr_25398 = state_25377;
(statearr_25398[(7)] = inst_25341__$1);

(statearr_25398[(8)] = inst_25342);

return statearr_25398;
})();
var statearr_25399_25425 = state_25377__$1;
(statearr_25399_25425[(2)] = null);

(statearr_25399_25425[(1)] = (2));


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
});})(c__10081__auto___25411,out))
;
return ((function (switch__10014__auto__,c__10081__auto___25411,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25403[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_25403[(1)] = (1));

return statearr_25403;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_25377){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_25377);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object)){
var ex__10018__auto__ = e25404;
var statearr_25405_25426 = state_25377;
(statearr_25405_25426[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25377);

return cljs.core.cst$kw$recur;
} else {
throw e25404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__25427 = state_25377;
state_25377 = G__25427;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___25411,out))
})();
var state__10083__auto__ = (function (){var statearr_25406 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___25411);

return statearr_25406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___25411,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25428 = [];
var len__6152__auto___25502 = arguments.length;
var i__6153__auto___25503 = (0);
while(true){
if((i__6153__auto___25503 < len__6152__auto___25502)){
args25428.push((arguments[i__6153__auto___25503]));

var G__25504 = (i__6153__auto___25503 + (1));
i__6153__auto___25503 = G__25504;
continue;
} else {
}
break;
}

var G__25430 = args25428.length;
switch (G__25430) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25428.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10081__auto___25506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto___25506,out){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto___25506,out){
return (function (state_25472){
var state_val_25473 = (state_25472[(1)]);
if((state_val_25473 === (7))){
var inst_25468 = (state_25472[(2)]);
var state_25472__$1 = state_25472;
var statearr_25474_25507 = state_25472__$1;
(statearr_25474_25507[(2)] = inst_25468);

(statearr_25474_25507[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (1))){
var inst_25431 = [];
var inst_25432 = inst_25431;
var inst_25433 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25472__$1 = (function (){var statearr_25475 = state_25472;
(statearr_25475[(7)] = inst_25433);

(statearr_25475[(8)] = inst_25432);

return statearr_25475;
})();
var statearr_25476_25508 = state_25472__$1;
(statearr_25476_25508[(2)] = null);

(statearr_25476_25508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (4))){
var inst_25436 = (state_25472[(9)]);
var inst_25436__$1 = (state_25472[(2)]);
var inst_25437 = (inst_25436__$1 == null);
var inst_25438 = cljs.core.not(inst_25437);
var state_25472__$1 = (function (){var statearr_25477 = state_25472;
(statearr_25477[(9)] = inst_25436__$1);

return statearr_25477;
})();
if(inst_25438){
var statearr_25478_25509 = state_25472__$1;
(statearr_25478_25509[(1)] = (5));

} else {
var statearr_25479_25510 = state_25472__$1;
(statearr_25479_25510[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (15))){
var inst_25462 = (state_25472[(2)]);
var state_25472__$1 = state_25472;
var statearr_25480_25511 = state_25472__$1;
(statearr_25480_25511[(2)] = inst_25462);

(statearr_25480_25511[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (13))){
var state_25472__$1 = state_25472;
var statearr_25481_25512 = state_25472__$1;
(statearr_25481_25512[(2)] = null);

(statearr_25481_25512[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (6))){
var inst_25432 = (state_25472[(8)]);
var inst_25457 = inst_25432.length;
var inst_25458 = (inst_25457 > (0));
var state_25472__$1 = state_25472;
if(cljs.core.truth_(inst_25458)){
var statearr_25482_25513 = state_25472__$1;
(statearr_25482_25513[(1)] = (12));

} else {
var statearr_25483_25514 = state_25472__$1;
(statearr_25483_25514[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (3))){
var inst_25470 = (state_25472[(2)]);
var state_25472__$1 = state_25472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25472__$1,inst_25470);
} else {
if((state_val_25473 === (12))){
var inst_25432 = (state_25472[(8)]);
var inst_25460 = cljs.core.vec(inst_25432);
var state_25472__$1 = state_25472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25472__$1,(15),out,inst_25460);
} else {
if((state_val_25473 === (2))){
var state_25472__$1 = state_25472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25472__$1,(4),ch);
} else {
if((state_val_25473 === (11))){
var inst_25436 = (state_25472[(9)]);
var inst_25440 = (state_25472[(10)]);
var inst_25450 = (state_25472[(2)]);
var inst_25451 = [];
var inst_25452 = inst_25451.push(inst_25436);
var inst_25432 = inst_25451;
var inst_25433 = inst_25440;
var state_25472__$1 = (function (){var statearr_25484 = state_25472;
(statearr_25484[(7)] = inst_25433);

(statearr_25484[(8)] = inst_25432);

(statearr_25484[(11)] = inst_25450);

(statearr_25484[(12)] = inst_25452);

return statearr_25484;
})();
var statearr_25485_25515 = state_25472__$1;
(statearr_25485_25515[(2)] = null);

(statearr_25485_25515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (9))){
var inst_25432 = (state_25472[(8)]);
var inst_25448 = cljs.core.vec(inst_25432);
var state_25472__$1 = state_25472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25472__$1,(11),out,inst_25448);
} else {
if((state_val_25473 === (5))){
var inst_25433 = (state_25472[(7)]);
var inst_25436 = (state_25472[(9)]);
var inst_25440 = (state_25472[(10)]);
var inst_25440__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25436) : f.call(null,inst_25436));
var inst_25441 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25440__$1,inst_25433);
var inst_25442 = cljs.core.keyword_identical_QMARK_(inst_25433,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25443 = (inst_25441) || (inst_25442);
var state_25472__$1 = (function (){var statearr_25486 = state_25472;
(statearr_25486[(10)] = inst_25440__$1);

return statearr_25486;
})();
if(cljs.core.truth_(inst_25443)){
var statearr_25487_25516 = state_25472__$1;
(statearr_25487_25516[(1)] = (8));

} else {
var statearr_25488_25517 = state_25472__$1;
(statearr_25488_25517[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (14))){
var inst_25465 = (state_25472[(2)]);
var inst_25466 = cljs.core.async.close_BANG_(out);
var state_25472__$1 = (function (){var statearr_25490 = state_25472;
(statearr_25490[(13)] = inst_25465);

return statearr_25490;
})();
var statearr_25491_25518 = state_25472__$1;
(statearr_25491_25518[(2)] = inst_25466);

(statearr_25491_25518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (10))){
var inst_25455 = (state_25472[(2)]);
var state_25472__$1 = state_25472;
var statearr_25492_25519 = state_25472__$1;
(statearr_25492_25519[(2)] = inst_25455);

(statearr_25492_25519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25473 === (8))){
var inst_25432 = (state_25472[(8)]);
var inst_25436 = (state_25472[(9)]);
var inst_25440 = (state_25472[(10)]);
var inst_25445 = inst_25432.push(inst_25436);
var tmp25489 = inst_25432;
var inst_25432__$1 = tmp25489;
var inst_25433 = inst_25440;
var state_25472__$1 = (function (){var statearr_25493 = state_25472;
(statearr_25493[(7)] = inst_25433);

(statearr_25493[(8)] = inst_25432__$1);

(statearr_25493[(14)] = inst_25445);

return statearr_25493;
})();
var statearr_25494_25520 = state_25472__$1;
(statearr_25494_25520[(2)] = null);

(statearr_25494_25520[(1)] = (2));


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
});})(c__10081__auto___25506,out))
;
return ((function (switch__10014__auto__,c__10081__auto___25506,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_25472){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_25472);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__10018__auto__ = e25499;
var statearr_25500_25521 = state_25472;
(statearr_25500_25521[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25472);

return cljs.core.cst$kw$recur;
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__25522 = state_25472;
state_25472 = G__25522;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_25472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_25472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto___25506,out))
})();
var state__10083__auto__ = (function (){var statearr_25501 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_25501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto___25506);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto___25506,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
