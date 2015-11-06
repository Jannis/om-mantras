// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.edn_renderer');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('devcards.util.utils');
devcards.util.edn_renderer.html;
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (!(cljs.core.seq_QMARK_(x))) && (!(cljs.core.coll_QMARK_(x)));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var attrs22321 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22321))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["seperator"], null)], null),attrs22321], 0))):{"className": "seperator"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22321))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22321)], null))));
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var attrs22331 = devcards.util.edn_renderer.separator_STAR_(s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22331))?sablono.interpreter.attributes(attrs22331):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22331))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22336 = "span";
var G__22337 = {"className": "clearfix"};
return React.createElement(G__22336,G__22337);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22331),(function (){var G__22338 = "span";
var G__22339 = {"className": "clearfix"};
return React.createElement(G__22338,G__22339);
})()], null))));
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
if(!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__22343 = "span";
var G__22344 = {"className": class$};
var G__22345 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return React.createElement(G__22343,G__22344,G__22345);
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html,coll),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__22346){
var vec__22352 = p__22346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22352,(1),null);
var G__22353 = "span";
var G__22354 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0)), "className": "keyval"};
var G__22355 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__22356 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__22353,G__22354,G__22355,G__22356);
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__22368 = "span";
var G__22369 = {"className": class_str};
var G__22370 = (function (){var attrs22365 = opener;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22365))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opener"], null)], null),attrs22365], 0))):{"className": "opener"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22365))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22365)], null))));
})();
var G__22371 = (function (){var attrs22366 = rct_coll;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22366))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs22366], 0))):{"className": "contents"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22366))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22366)], null))));
})();
var G__22372 = (function (){var attrs22367 = closer;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22367))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["closer"], null)], null),attrs22367], 0))):{"className": "closer"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22367))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22367)], null))));
})();
return React.createElement(G__22368,G__22369,G__22370,G__22371,G__22372);
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close([cljs.core.str("collection "),cljs.core.str(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var attrs22374 = devcards.util.edn_renderer.html(e);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22374))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-rendered-edn","com-rigsomelight-devcards-typog"], null)], null),attrs22374], 0))):{"className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22374))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22374)], null))));
});
