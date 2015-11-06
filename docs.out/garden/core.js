// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__6233__auto__ = [];
var len__6226__auto___12492 = arguments.length;
var i__6227__auto___12493 = (0);
while(true){
if((i__6227__auto___12493 < len__6226__auto___12492)){
args__6233__auto__.push((arguments[i__6227__auto___12493]));

var G__12494 = (i__6227__auto___12493 + (1));
i__6227__auto___12493 = G__12494;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq12491){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12491));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__6233__auto__ = [];
var len__6226__auto___12496 = arguments.length;
var i__6227__auto___12497 = (0);
while(true){
if((i__6227__auto___12497 < len__6226__auto___12496)){
args__6233__auto__.push((arguments[i__6227__auto___12497]));

var G__12498 = (i__6227__auto___12497 + (1));
i__6227__auto___12497 = G__12498;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq12495){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12495));
});
