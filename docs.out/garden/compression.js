// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('garden.compression');
goog.require('cljs.core');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__11966){
var vec__11968 = p__11966;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(1),null);
return ((function (vec__11968,tag,re){
return (function (s){
var temp__4425__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var chunk = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$chunk,chunk,cljs.core.cst$kw$size,cljs.core.count(chunk)], null);
} else {
return null;
}
});
;})(vec__11968,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__6233__auto__ = [];
var len__6226__auto___11971 = arguments.length;
var i__6227__auto___11972 = (0);
while(true){
if((i__6227__auto___11972 < len__6226__auto___11971)){
args__6233__auto__.push((arguments[i__6227__auto___11972]));

var G__11973 = (i__6227__auto___11972 + (1));
i__6227__auto___11972 = G__11973;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some(((function (fs){
return (function (p1__11969_SHARP_){
return (p1__11969_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11969_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__11969_SHARP_.call(null,s));
});})(fs))
,fs);
});
;})(fs))
});

garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

garden.compression.tokenizer.cljs$lang$applyTo = (function (seq11970){
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11970));
});
/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_brace,/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_brace,/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_paren,/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_paren,/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colon,/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$semicolon,/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$space_PLUS_,/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$white_DASH_space_PLUS_,/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$any,/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__4423__auto__ = (garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__4423__auto__)){
var map__11977 = temp__4423__auto__;
var map__11977__$1 = ((((!((map__11977 == null)))?((((map__11977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11977):map__11977);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977__$1,cljs.core.cst$kw$tag);
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977__$1,cljs.core.cst$kw$chunk);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977__$1,cljs.core.cst$kw$size);
var G__11980 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__11981 = [cljs.core.str(s2),cljs.core.str((function (){var G__11979 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);
switch (G__11979) {
case "l-brace":
return "}";

break;
case "l-paren":
return ")";

break;
case "space+":
return " ";

break;
case "comma":
return ",";

break;
case "white-space+":
return "";

break;
case "string":
return chunk;

break;
case "colon":
return ":";

break;
case "semi-comma":
return ";";

break;
case "r-brace":
return "{";

break;
case "r-paren":
return "(";

break;
default:
return chunk;

}
})())].join('');
s1 = G__11980;
s2 = G__11981;
continue;
} else {
return s2;
}
break;
}
});
