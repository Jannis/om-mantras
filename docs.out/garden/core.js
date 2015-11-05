// Compiled by ClojureScript 1.7.145 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__6159__auto__ = [];
var len__6152__auto___23216 = arguments.length;
var i__6153__auto___23217 = (0);
while(true){
if((i__6153__auto___23217 < len__6152__auto___23216)){
args__6159__auto__.push((arguments[i__6153__auto___23217]));

var G__23218 = (i__6153__auto___23217 + (1));
i__6153__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq23215){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23215));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__6159__auto__ = [];
var len__6152__auto___23220 = arguments.length;
var i__6153__auto___23221 = (0);
while(true){
if((i__6153__auto___23221 < len__6152__auto___23220)){
args__6159__auto__.push((arguments[i__6153__auto___23221]));

var G__23222 = (i__6153__auto___23221 + (1));
i__6153__auto___23221 = G__23222;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq23219){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23219));
});

//# sourceMappingURL=core.js.map