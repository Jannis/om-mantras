// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19329 = arguments.length;
var i__6153__auto___19330 = (0);
while(true){
if((i__6153__auto___19330 < len__6152__auto___19329)){
args__6159__auto__.push((arguments[i__6153__auto___19330]));

var G__19331 = (i__6153__auto___19330 + (1));
i__6153__auto___19330 = G__19331;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq19327){
var G__19328 = cljs.core.first(seq19327);
var seq19327__$1 = cljs.core.next(seq19327);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__19328,seq19327__$1);
});

/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (garden.util.to_str[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (garden.util.to_str["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19333 = arguments.length;
var i__6153__auto___19334 = (0);
while(true){
if((i__6153__auto___19334 < len__6152__auto___19333)){
args__6159__auto__.push((arguments[i__6153__auto___19334]));

var G__19335 = (i__6153__auto___19334 + (1));
i__6153__auto___19334 = G__19335;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq19332){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19332));
});
/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19340 = arguments.length;
var i__6153__auto___19341 = (0);
while(true){
if((i__6153__auto___19341 < len__6152__auto___19340)){
args__6159__auto__.push((arguments[i__6153__auto___19341]));

var G__19342 = (i__6153__auto___19341 + (1));
i__6153__auto___19341 = G__19342;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__19338){
var vec__19339 = p__19338;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(0),null);
var radix__$1 = (function (){var or__5094__auto__ = radix;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq19336){
var G__19337 = cljs.core.first(seq19336);
var seq19336__$1 = cljs.core.next(seq19336);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__19337,seq19336__$1);
});
/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19347 = arguments.length;
var i__6153__auto___19348 = (0);
while(true){
if((i__6153__auto___19348 < len__6152__auto___19347)){
args__6159__auto__.push((arguments[i__6153__auto___19348]));

var G__19349 = (i__6153__auto___19348 + (1));
i__6153__auto___19348 = G__19349;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__19345){
var vec__19346 = p__19345;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(0),null);
var radix__$1 = (function (){var or__5094__auto__ = radix;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq19343){
var G__19344 = cljs.core.first(seq19343);
var seq19343__$1 = cljs.core.next(seq19343);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__19344,seq19343__$1);
});
/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__5866__auto__ = (function garden$util$comma_join_$_iter__19356(s__19357){
return (new cljs.core.LazySeq(null,(function (){
var s__19357__$1 = s__19357;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19357__$1);
if(temp__4425__auto__){
var s__19357__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19357__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19357__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19359 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19358 = (0);
while(true){
if((i__19358 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19358);
cljs.core.chunk_append(b__19359,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__19362 = (i__19358 + (1));
i__19358 = G__19362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19359),garden$util$comma_join_$_iter__19356(cljs.core.chunk_rest(s__19357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19359),null);
}
} else {
var x = cljs.core.first(s__19357__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__19356(cljs.core.rest(s__19357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__5082__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__5082__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__5082__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__5082__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__5082__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__5082__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix([cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_(n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5432__auto__ = a;
var y__5433__auto__ = b;
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})();
var top = (function (){var x__5425__auto__ = a;
var y__5426__auto__ = b;
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__19364 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19364,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19364,(1),null);
var x__5425__auto__ = a__$1;
var y__5426__auto__ = (function (){var x__5432__auto__ = b__$1;
var y__5433__auto__ = n;
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})();
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19368 = arguments.length;
var i__6153__auto___19369 = (0);
while(true){
if((i__6153__auto___19369 < len__6152__auto___19368)){
args__6159__auto__.push((arguments[i__6153__auto___19369]));

var G__19370 = (i__6153__auto___19369 + (1));
i__6153__auto___19369 = G__19370;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((2) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((2)),(0))):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6160__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq19365){
var G__19366 = cljs.core.first(seq19365);
var seq19365__$1 = cljs.core.next(seq19365);
var G__19367 = cljs.core.first(seq19365__$1);
var seq19365__$2 = cljs.core.next(seq19365__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__19366,G__19367,seq19365__$2);
});
/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19373 = arguments.length;
var i__6153__auto___19374 = (0);
while(true){
if((i__6153__auto___19374 < len__6152__auto___19373)){
args__6159__auto__.push((arguments[i__6153__auto___19374]));

var G__19375 = (i__6153__auto___19374 + (1));
i__6153__auto___19374 = G__19375;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__4423__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__4423__auto__){
var rst = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__19376 = (i - (1));
var G__19377 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__19376;
v_seqs__$2 = G__19377;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq19371){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19371));
});
