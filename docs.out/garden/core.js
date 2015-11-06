// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18899 = arguments.length;
var i__6153__auto___18900 = (0);
while(true){
if((i__6153__auto___18900 < len__6152__auto___18899)){
args__6159__auto__.push((arguments[i__6153__auto___18900]));

var G__18901 = (i__6153__auto___18900 + (1));
i__6153__auto___18900 = G__18901;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq18898){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18898));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18903 = arguments.length;
var i__6153__auto___18904 = (0);
while(true){
if((i__6153__auto___18904 < len__6152__auto___18903)){
args__6159__auto__.push((arguments[i__6153__auto___18904]));

var G__18905 = (i__6153__auto___18904 + (1));
i__6153__auto___18904 = G__18905;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq18902){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18902));
});
