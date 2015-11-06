// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__5168__auto__ = (function (){var and__5156__auto__ = typeof Symbol !== 'undefined';
if(and__5156__auto__){
var and__5156__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__5156__auto____$1){
var and__5156__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__5156__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__5156__auto____$2;
}
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__19874_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__19874_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5156__auto__ = cljs.core.map_QMARK_(c);
if(and__5156__auto__){
var map__19881 = c;
var map__19881__$1 = ((((!((map__19881 == null)))?((((map__19881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19881):map__19881);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__5156__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$card_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__19009__auto___19893 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__19883 = "pre";
var G__19884 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__19885 = (function (){var G__19886 = "code";
var G__19887 = {"className": (function (){var or__5168__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__19888 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__19886,G__19887,G__19888);
})();
return React.createElement(G__19883,G__19884,G__19885);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__19009__auto___19893);
}

var seq__19889_19894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__19890_19895 = null;
var count__19891_19896 = (0);
var i__19892_19897 = (0);
while(true){
if((i__19892_19897 < count__19891_19896)){
var property__19010__auto___19898 = chunk__19890_19895.cljs$core$IIndexed$_nth$arity$2(null,i__19892_19897);
if(cljs.core.truth_((base__19009__auto___19893[property__19010__auto___19898]))){
(devcards.core.CodeHighlight.prototype[property__19010__auto___19898] = (base__19009__auto___19893[property__19010__auto___19898]));
} else {
}

var G__19899 = seq__19889_19894;
var G__19900 = chunk__19890_19895;
var G__19901 = count__19891_19896;
var G__19902 = (i__19892_19897 + (1));
seq__19889_19894 = G__19899;
chunk__19890_19895 = G__19900;
count__19891_19896 = G__19901;
i__19892_19897 = G__19902;
continue;
} else {
var temp__4425__auto___19903 = cljs.core.seq(seq__19889_19894);
if(temp__4425__auto___19903){
var seq__19889_19904__$1 = temp__4425__auto___19903;
if(cljs.core.chunked_seq_QMARK_(seq__19889_19904__$1)){
var c__5971__auto___19905 = cljs.core.chunk_first(seq__19889_19904__$1);
var G__19906 = cljs.core.chunk_rest(seq__19889_19904__$1);
var G__19907 = c__5971__auto___19905;
var G__19908 = cljs.core.count(c__5971__auto___19905);
var G__19909 = (0);
seq__19889_19894 = G__19906;
chunk__19890_19895 = G__19907;
count__19891_19896 = G__19908;
i__19892_19897 = G__19909;
continue;
} else {
var property__19010__auto___19910 = cljs.core.first(seq__19889_19904__$1);
if(cljs.core.truth_((base__19009__auto___19893[property__19010__auto___19910]))){
(devcards.core.CodeHighlight.prototype[property__19010__auto___19910] = (base__19009__auto___19893[property__19010__auto___19910]));
} else {
}

var G__19911 = cljs.core.next(seq__19889_19904__$1);
var G__19912 = null;
var G__19913 = (0);
var G__19914 = (0);
seq__19889_19894 = G__19911;
chunk__19890_19895 = G__19912;
count__19891_19896 = G__19913;
i__19892_19897 = G__19914;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__19917 = devcards.core.CodeHighlight;
var G__19918 = {"code": code_str, "lang": lang};
return React.createElement(G__19917,G__19918);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__6081__auto__ = (function (){var G__19919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19919) : cljs.core.atom.call(null,G__19919));
})();
var prefer_table__6082__auto__ = (function (){var G__19920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19920) : cljs.core.atom.call(null,G__19920));
})();
var method_cache__6083__auto__ = (function (){var G__19921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19921) : cljs.core.atom.call(null,G__19921));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__19922 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19922) : cljs.core.atom.call(null,G__19922));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__19923){
var map__19924 = p__19923;
var map__19924__$1 = ((((!((map__19924 == null)))?((((map__19924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19924):map__19924);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__19926){
var map__19927 = p__19926;
var map__19927__$1 = ((((!((map__19927 == null)))?((((map__19927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19927):map__19927);
var block = map__19927__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19927__$1,cljs.core.cst$kw$content);
var G__19929 = devcards.core.CodeHighlight;
var G__19930 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__19929,G__19930);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6233__auto__ = [];
var len__6226__auto___19936 = arguments.length;
var i__6227__auto___19937 = (0);
while(true){
if((i__6227__auto___19937 < len__6226__auto___19936)){
args__6233__auto__.push((arguments[i__6227__auto___19937]));

var G__19938 = (i__6227__auto___19937 + (1));
i__6227__auto___19937 = G__19938;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var attrs19932 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19932))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs19932], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19932)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__19933 = "div";
var G__19934 = {"style": {"color": "#a94442"}};
var G__19935 = sablono.interpreter.interpret(message);
return React.createElement(G__19933,G__19934,G__19935);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq19931){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19931));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__19945 = "div";
var G__19946 = {"className": (function (){var G__19948 = devcards.system.devcards_rendered_card_class;
var G__19948__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__19948),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__19948);
var G__19948__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__19948__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__19948__$1);
return G__19948__$2;
})()};
var G__19947 = sablono.interpreter.interpret(children);
return React.createElement(G__19945,G__19946,G__19947);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args19949 = [];
var len__6226__auto___19969 = arguments.length;
var i__6227__auto___19970 = (0);
while(true){
if((i__6227__auto___19970 < len__6226__auto___19969)){
args19949.push((arguments[i__6227__auto___19970]));

var G__19971 = (i__6227__auto___19970 + (1));
i__6227__auto___19970 = G__19971;
continue;
} else {
}
break;
}

var G__19951 = args19949.length;
switch (G__19951) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19949.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__19952 = card;
var map__19952__$1 = ((((!((map__19952 == null)))?((((map__19952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19952):map__19952);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__19954 = "div";
var G__19955 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__19956 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__19954,G__19955,G__19956);
} else {
var G__19958 = "div";
var G__19959 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__19960 = (function (){var attrs19957 = (cljs.core.truth_(path)?(function (){var G__19962 = "a";
var G__19963 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__19962,G__19958,G__19959,map__19952,map__19952__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__19962,G__19958,G__19959,map__19952,map__19952__$1,path,options))
)};
var G__19964 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__19965 = " ";
return React.createElement(G__19962,G__19963,G__19964,G__19965);
})():(function (){var attrs19966 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19966))?sablono.interpreter.attributes(attrs19966):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19966)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19957))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs19957], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19957))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19957)], null))));
})();
var G__19961 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__19958,G__19959,G__19960,G__19961);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto__.call(null,this$,devcard_opts));
} else {
var m__5824__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (devcards.core._devcard[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto__.call(null,this$,devcard_opts));
} else {
var m__5824__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__5168__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.atom_like_QMARK_;
var base__19009__auto___19983 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__5168__auto__ = (function (){var and__5156__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__5156__auto__)){
return this$.state;
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data(this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__5156__auto__ = data_atom;
if(cljs.core.truth_(and__5156__auto__)){
return id;
} else {
return and__5156__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,this$) : m.call(null,data_atom,this$));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4425__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs19975 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19975))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs19975], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19975))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19975)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__19976 = "div";
var G__19977 = {"className": "com-rigsomelight-devcards-frameless"};
var G__19978 = sablono.interpreter.interpret(children);
return React.createElement(G__19976,G__19977,G__19978);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__19009__auto___19983);
}

var seq__19979_19984 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__19980_19985 = null;
var count__19981_19986 = (0);
var i__19982_19987 = (0);
while(true){
if((i__19982_19987 < count__19981_19986)){
var property__19010__auto___19988 = chunk__19980_19985.cljs$core$IIndexed$_nth$arity$2(null,i__19982_19987);
if(cljs.core.truth_((base__19009__auto___19983[property__19010__auto___19988]))){
(devcards.core.DevcardBase.prototype[property__19010__auto___19988] = (base__19009__auto___19983[property__19010__auto___19988]));
} else {
}

var G__19989 = seq__19979_19984;
var G__19990 = chunk__19980_19985;
var G__19991 = count__19981_19986;
var G__19992 = (i__19982_19987 + (1));
seq__19979_19984 = G__19989;
chunk__19980_19985 = G__19990;
count__19981_19986 = G__19991;
i__19982_19987 = G__19992;
continue;
} else {
var temp__4425__auto___19993 = cljs.core.seq(seq__19979_19984);
if(temp__4425__auto___19993){
var seq__19979_19994__$1 = temp__4425__auto___19993;
if(cljs.core.chunked_seq_QMARK_(seq__19979_19994__$1)){
var c__5971__auto___19995 = cljs.core.chunk_first(seq__19979_19994__$1);
var G__19996 = cljs.core.chunk_rest(seq__19979_19994__$1);
var G__19997 = c__5971__auto___19995;
var G__19998 = cljs.core.count(c__5971__auto___19995);
var G__19999 = (0);
seq__19979_19984 = G__19996;
chunk__19980_19985 = G__19997;
count__19981_19986 = G__19998;
i__19982_19987 = G__19999;
continue;
} else {
var property__19010__auto___20000 = cljs.core.first(seq__19979_19994__$1);
if(cljs.core.truth_((base__19009__auto___19983[property__19010__auto___20000]))){
(devcards.core.DevcardBase.prototype[property__19010__auto___20000] = (base__19009__auto___19983[property__19010__auto___20000]));
} else {
}

var G__20001 = cljs.core.next(seq__19979_19994__$1);
var G__20002 = null;
var G__20003 = (0);
var G__20004 = (0);
seq__19979_19984 = G__20001;
chunk__19980_19985 = G__20002;
count__19981_19986 = G__20003;
i__19982_19987 = G__20004;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
var G__20005 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20006 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__20005,G__20006) : node_fn.call(null,G__20005,G__20006));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__19009__auto___20013 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__5156__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__20007 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__20008 = "Card has not mounted DOM node.";
return React.DOM.div(G__20007,G__20008);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__19009__auto___20013);
}

var seq__20009_20014 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20010_20015 = null;
var count__20011_20016 = (0);
var i__20012_20017 = (0);
while(true){
if((i__20012_20017 < count__20011_20016)){
var property__19010__auto___20018 = chunk__20010_20015.cljs$core$IIndexed$_nth$arity$2(null,i__20012_20017);
if(cljs.core.truth_((base__19009__auto___20013[property__19010__auto___20018]))){
(devcards.core.DomComponent.prototype[property__19010__auto___20018] = (base__19009__auto___20013[property__19010__auto___20018]));
} else {
}

var G__20019 = seq__20009_20014;
var G__20020 = chunk__20010_20015;
var G__20021 = count__20011_20016;
var G__20022 = (i__20012_20017 + (1));
seq__20009_20014 = G__20019;
chunk__20010_20015 = G__20020;
count__20011_20016 = G__20021;
i__20012_20017 = G__20022;
continue;
} else {
var temp__4425__auto___20023 = cljs.core.seq(seq__20009_20014);
if(temp__4425__auto___20023){
var seq__20009_20024__$1 = temp__4425__auto___20023;
if(cljs.core.chunked_seq_QMARK_(seq__20009_20024__$1)){
var c__5971__auto___20025 = cljs.core.chunk_first(seq__20009_20024__$1);
var G__20026 = cljs.core.chunk_rest(seq__20009_20024__$1);
var G__20027 = c__5971__auto___20025;
var G__20028 = cljs.core.count(c__5971__auto___20025);
var G__20029 = (0);
seq__20009_20014 = G__20026;
chunk__20010_20015 = G__20027;
count__20011_20016 = G__20028;
i__20012_20017 = G__20029;
continue;
} else {
var property__19010__auto___20030 = cljs.core.first(seq__20009_20024__$1);
if(cljs.core.truth_((base__19009__auto___20013[property__19010__auto___20030]))){
(devcards.core.DomComponent.prototype[property__19010__auto___20030] = (base__19009__auto___20013[property__19010__auto___20030]));
} else {
}

var G__20031 = cljs.core.next(seq__20009_20024__$1);
var G__20032 = null;
var G__20033 = (0);
var G__20034 = (0);
seq__20009_20014 = G__20031;
chunk__20010_20015 = G__20032;
count__20011_20016 = G__20033;
i__20012_20017 = G__20034;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5168__auto__ = x === true;
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = x === false;
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
var or__5168__auto____$2 = (x == null);
if(or__5168__auto____$2){
return or__5168__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5168__auto__ = typeof x === 'string';
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (x == null);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__5168__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__20035_SHARP_){
return !(p1__20035_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__20044 = opts;
var map__20044__$1 = ((((!((map__20044 == null)))?((((map__20044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20044):map__20044);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20044__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20044__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20044__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20044__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5168__auto__ = cljs.core.map_QMARK_(options);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (options == null);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__5168__auto__ = (initial_data == null);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
var or__5168__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__5168__auto____$2){
return or__5168__auto____$2;
} else {
var or__5168__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__5168__auto____$3){
return or__5168__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__20044,map__20044__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__20036_SHARP_){
return devcards.core.booler_QMARK_(p1__20036_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__20044,map__20044__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__20068 = "div";
var G__20069 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__20070 = sablono.interpreter.interpret((function (){var G__20073 = "code";
var G__20074 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__20075 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__20073,G__20074,G__20075);
})());
var G__20071 = (function (){var G__20076 = "span";
var G__20077 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__20078 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__20076,G__20077,G__20078);
})();
var G__20072 = (function (){var G__20079 = "span";
var G__20080 = {"style": {"flex": "1 100px"}};
var G__20081 = " Received: ";
var G__20082 = (function (){var attrs20067 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20067))?sablono.interpreter.attributes(attrs20067):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20067))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20067)], null))));
})();
return React.createElement(G__20079,G__20080,G__20081,G__20082);
})();
return React.createElement(G__20068,G__20069,G__20070,G__20071,G__20072);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__20096 = "div";
var G__20097 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__20098 = (function (){var attrs20095 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20095))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs20095], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20095))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20095)], null))));
})();
var G__20099 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__20102 = "div";
var G__20103 = null;
var G__20104 = (function (){var attrs20100 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20100))?sablono.interpreter.attributes(attrs20100):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20100)], null))));
})();
var G__20105 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs20106 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20106))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20106], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20106)], null))));
})():null));
return React.createElement(G__20102,G__20103,G__20104,G__20105);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__20096,G__20097,G__20098,G__20099);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__20107_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__20107_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__20110 = devcards.core.DevcardBase;
var G__20111 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__20110,G__20111);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20113,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20115 = (((k20113 instanceof cljs.core.Keyword))?k20113.fqn:null);
switch (G__20115) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20113,else__5785__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20112){
var self__ = this;
var G__20112__$1 = this;
return (new cljs.core.RecordIter((0),G__20112__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20112){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20116 = cljs.core.keyword_identical_QMARK_;
var expr__20117 = k__5790__auto__;
if(cljs.core.truth_((pred__20116.cljs$core$IFn$_invoke$arity$2 ? pred__20116.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20117) : pred__20116.call(null,cljs.core.cst$kw$obj,expr__20117)))){
return (new devcards.core.IdentiyOptions(G__20112,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20112),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20112){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__20112,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__20114){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20114),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20114,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__20120){
var map__20123 = p__20120;
var map__20123__$1 = ((((!((map__20123 == null)))?((((map__20123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20123):map__20123);
var devcard_opts = map__20123__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20123__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__20123,map__20123__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__20123,map__20123__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20126,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20128 = (((k20126 instanceof cljs.core.Keyword))?k20126.fqn:null);
switch (G__20128) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20126,else__5785__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20125){
var self__ = this;
var G__20125__$1 = this;
return (new cljs.core.RecordIter((0),G__20125__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20125){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20129 = cljs.core.keyword_identical_QMARK_;
var expr__20130 = k__5790__auto__;
if(cljs.core.truth_((pred__20129.cljs$core$IFn$_invoke$arity$2 ? pred__20129.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20130) : pred__20129.call(null,cljs.core.cst$kw$obj,expr__20130)))){
return (new devcards.core.AtomLikeOptions(G__20125,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20125),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20125){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__20125,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__20127){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20127),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20127,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20136,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20138 = (((k20136 instanceof cljs.core.Keyword))?k20136.fqn:null);
switch (G__20138) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20136,else__5785__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20135){
var self__ = this;
var G__20135__$1 = this;
return (new cljs.core.RecordIter((0),G__20135__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20135){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20139 = cljs.core.keyword_identical_QMARK_;
var expr__20140 = k__5790__auto__;
if(cljs.core.truth_((pred__20139.cljs$core$IFn$_invoke$arity$2 ? pred__20139.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20140) : pred__20139.call(null,cljs.core.cst$kw$obj,expr__20140)))){
return (new devcards.core.EdnLikeOptions(G__20135,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20135),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20135){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__20135,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__20137){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20137),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20137,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__5156__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__5156__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__5156__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__20154 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__20154 == null))){
if((false) || (G__20154.devcards$core$IDevcard$)){
return true;
} else {
if((!G__20154.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20154);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20154);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__20157 = devcards.core.DomComponent;
var G__20158 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__20157,G__20158);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__20162 = (function (){var G__20163 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20163) : cljs.core.deref.call(null,G__20163));
})();
var map__20162__$1 = ((((!((map__20162 == null)))?((((map__20162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20162):map__20162);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20166 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20166) : cljs.core.deref.call(null,G__20166));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20168 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20168) : cljs.core.deref.call(null,G__20168));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20173 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20173__$1 = ((((!((map__20173 == null)))?((((map__20173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20173):map__20173);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20173__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20173__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20175_20177 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20176_20178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20175_20177,G__20176_20178) : cljs.core.reset_BANG_.call(null,G__20175_20177,G__20176_20178));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20183 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20183__$1 = ((((!((map__20183 == null)))?((((map__20183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20183):map__20183);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20183__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20183__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20185_20187 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20186_20188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20185_20187,G__20186_20188) : cljs.core.reset_BANG_.call(null,G__20185_20187,G__20186_20188));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20193 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20193__$1 = ((((!((map__20193 == null)))?((((map__20193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20193):map__20193);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20195_20197 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20196_20198 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20195_20197,G__20196_20198) : cljs.core.reset_BANG_.call(null,G__20195_20197,G__20196_20198));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__20253 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__20254 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20254) : cljs.core.atom.call(null,G__20254));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__20255 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20255) : cljs.core.deref.call(null,G__20255));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__5156__auto__ = data_atom;
if(cljs.core.truth_(and__5156__auto__)){
return id;
} else {
return and__5156__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__20256){
var map__20257 = p__20256;
var map__20257__$1 = ((((!((map__20257 == null)))?((((map__20257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20257):map__20257);
var ha = map__20257__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20257__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20257__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20257__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__5168__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__20259 = "div";
var G__20260 = {"style": {"display": (cljs.core.truth_((function (){var or__5168__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__20261 = sablono.interpreter.interpret((function (){var action = ((function (G__20259,G__20260,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__20259,G__20260,this$))
;
var G__20267 = "button";
var G__20268 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__20269 = (function (){var G__20270 = "span";
var G__20271 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__20272 = "";
return React.createElement(G__20270,G__20271,G__20272);
})();
return React.createElement(G__20267,G__20268,G__20269);
})());
var G__20262 = sablono.interpreter.interpret((function (){var action = ((function (G__20259,G__20260,G__20261,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20273 = data_atom;
var G__20274 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20273,G__20274) : cljs.core.reset_BANG_.call(null,G__20273,G__20274));
});})(G__20259,G__20260,G__20261,this$))
;
var G__20277 = "button";
var G__20278 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__20279 = (function (){var G__20280 = "span";
var G__20281 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__20282 = "";
return React.createElement(G__20280,G__20281,G__20282);
})();
return React.createElement(G__20277,G__20278,G__20279);
})());
var G__20263 = sablono.interpreter.interpret((function (){var action = ((function (G__20259,G__20260,G__20261,G__20262,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__20259,G__20260,G__20261,G__20262,this$))
;
var G__20285 = "button";
var G__20286 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__20287 = (function (){var G__20288 = "span";
var G__20289 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__20290 = "";
return React.createElement(G__20288,G__20289,G__20290);
})();
return React.createElement(G__20285,G__20286,G__20287);
})());
var G__20264 = sablono.interpreter.interpret((function (){var listener = ((function (G__20259,G__20260,G__20261,G__20262,G__20263,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__20259,G__20260,G__20261,G__20262,G__20263,this$))
;
var G__20297 = "button";
var G__20298 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__20299 = (function (){var G__20302 = "span";
var G__20303 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__20302,G__20303);
})();
var G__20300 = (function (){var G__20304 = "span";
var G__20305 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__20304,G__20305);
})();
var G__20301 = (function (){var G__20306 = "span";
var G__20307 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__20306,G__20307);
})();
return React.createElement(G__20297,G__20298,G__20299,G__20300,G__20301);
})());
return React.createElement(G__20259,G__20260,G__20261,G__20262,G__20263,G__20264);
} else {
return null;
}
})};
return React.createClass(G__20253);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__20310 = devcards.core.HistoryComponent;
var G__20311 = {"data_atom": data_atom};
return React.createElement(G__20310,G__20311);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_20313 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_20313;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__6081__auto__ = (function (){var G__20314 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20314) : cljs.core.atom.call(null,G__20314));
})();
var prefer_table__6082__auto__ = (function (){var G__20315 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20315) : cljs.core.atom.call(null,G__20315));
})();
var method_cache__6083__auto__ = (function (){var G__20316 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20316) : cljs.core.atom.call(null,G__20316));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__20317 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20317) : cljs.core.atom.call(null,G__20317));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs20318 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20318))?sablono.interpreter.attributes(attrs20318):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20318))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20318)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__20319,body){
var map__20327 = p__20319;
var map__20327__$1 = ((((!((map__20327 == null)))?((((map__20327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20327):map__20327);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__20330 = "div";
var G__20331 = null;
var G__20332 = (function (){var attrs20329 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs20329))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs20329], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20329))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20329)], null))));
})();
var G__20333 = sablono.interpreter.interpret(body);
return React.createElement(G__20330,G__20331,G__20332,G__20333);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__20334){
var map__20339 = p__20334;
var map__20339__$1 = ((((!((map__20339 == null)))?((((map__20339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20339):map__20339);
var m = map__20339__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20339__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__20341 = devcards.core.CodeHighlight;
var G__20342 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__20341,G__20342);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__20346 = "div";
var G__20347 = null;
var G__20348 = React.createElement("strong",null,"Error: ");
var G__20349 = (function (){var attrs20345 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20345))?sablono.interpreter.attributes(attrs20345):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20345))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20345)], null))));
})();
return React.createElement(G__20346,G__20347,G__20348,G__20349);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs20350 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20350))?sablono.interpreter.attributes(attrs20350):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20350))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20350)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__20351){
var map__20352 = p__20351;
var map__20352__$1 = ((((!((map__20352 == null)))?((((map__20352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20352):map__20352);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20352__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs20354 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20352,map__20352__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__20352,map__20352__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20354))?sablono.interpreter.attributes(attrs20354):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20354)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__20356 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__20356) : cljs.test.report.call(null,G__20356));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs20361 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20362,t){
var map__20363 = p__20362;
var map__20363__$1 = ((((!((map__20363 == null)))?((((map__20363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20363):map__20363);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20361))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs20361], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20361)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__20408){
var map__20409 = p__20408;
var map__20409__$1 = ((((!((map__20409 == null)))?((((map__20409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20409):map__20409);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__20407 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__20407__$1 = ((((!((map__20407 == null)))?((((map__20407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20407):map__20407);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20407__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20407__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20407__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__20412 = "div";
var G__20413 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__20414 = (function (){var G__20416 = "div";
var G__20417 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__20418 = (function (){var G__20422 = "a";
var G__20423 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__20422,G__20416,G__20417,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__20422,G__20416,G__20417,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
)};
var G__20424 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__20422,G__20423,G__20424);
})();
var G__20419 = (function (){var G__20425 = "button";
var G__20426 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__20425,G__20416,G__20417,G__20418,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__20425,G__20416,G__20417,G__20418,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__20427 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__20425,G__20426,G__20427);
})();
var G__20420 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__20431 = "button";
var G__20432 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__20431,G__20416,G__20417,G__20418,G__20419,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__20431,G__20416,G__20417,G__20418,G__20419,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (p__20434){
var map__20435 = p__20434;
var map__20435__$1 = ((((!((map__20435 == null)))?((((map__20435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20435):map__20435);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20435__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__20431,G__20416,G__20417,G__20418,G__20419,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
});
});})(G__20431,G__20416,G__20417,G__20418,G__20419,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__20433 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__20431,G__20432,G__20433);
})()));
var G__20421 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__20440 = "button";
var G__20441 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__20440,G__20416,G__20417,G__20418,G__20419,G__20420,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__20440,G__20416,G__20417,G__20418,G__20419,G__20420,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1){
return (function (p__20443){
var map__20444 = p__20443;
var map__20444__$1 = ((((!((map__20444 == null)))?((((map__20444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20444):map__20444);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__20440,G__20416,G__20417,G__20418,G__20419,G__20420,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
});
});})(G__20440,G__20416,G__20417,G__20418,G__20419,G__20420,G__20412,G__20413,error_QMARK_,tests,some_tests,total_tests,map__20407,map__20407__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__20442 = sablono.interpreter.interpret(pass);
return React.createElement(G__20440,G__20441,G__20442);
})()));
return React.createElement(G__20416,G__20417,G__20418,G__20419,G__20420,G__20421);
})();
var G__20415 = (function (){var G__20446 = "div";
var G__20447 = {"className": devcards.system.devcards_rendered_card_class};
var G__20448 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__5168__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__20446,G__20447,G__20448);
})();
return React.createElement(G__20412,G__20413,G__20414,G__20415);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__){
return (function (state_20535){
var state_val_20536 = (state_20535[(1)]);
if((state_val_20536 === (7))){
var state_20535__$1 = state_20535;
var statearr_20537_20586 = state_20535__$1;
(statearr_20537_20586[(2)] = false);

(statearr_20537_20586[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (20))){
var inst_20476 = (state_20535[(7)]);
var inst_20495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20476);
var state_20535__$1 = state_20535;
var statearr_20538_20587 = state_20535__$1;
(statearr_20538_20587[(2)] = inst_20495);

(statearr_20538_20587[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (27))){
var inst_20510 = (state_20535[(8)]);
var inst_20500 = (state_20535[(9)]);
var inst_20514 = (inst_20500.cljs$core$IFn$_invoke$arity$1 ? inst_20500.cljs$core$IFn$_invoke$arity$1(inst_20510) : inst_20500.call(null,inst_20510));
var state_20535__$1 = state_20535;
var statearr_20539_20588 = state_20535__$1;
(statearr_20539_20588[(2)] = inst_20514);

(statearr_20539_20588[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (1))){
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20535__$1,(2),devcards.core.test_channel);
} else {
if((state_val_20536 === (24))){
var state_20535__$1 = state_20535;
var statearr_20540_20589 = state_20535__$1;
(statearr_20540_20589[(2)] = null);

(statearr_20540_20589[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (4))){
var state_20535__$1 = state_20535;
var statearr_20541_20590 = state_20535__$1;
(statearr_20541_20590[(2)] = false);

(statearr_20541_20590[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (15))){
var state_20535__$1 = state_20535;
var statearr_20542_20591 = state_20535__$1;
(statearr_20542_20591[(2)] = false);

(statearr_20542_20591[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (21))){
var inst_20476 = (state_20535[(7)]);
var state_20535__$1 = state_20535;
var statearr_20543_20592 = state_20535__$1;
(statearr_20543_20592[(2)] = inst_20476);

(statearr_20543_20592[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (13))){
var inst_20533 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20535__$1,inst_20533);
} else {
if((state_val_20536 === (22))){
var inst_20499 = (state_20535[(10)]);
var inst_20498 = (state_20535[(2)]);
var inst_20499__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20498,cljs.core.cst$kw$tests);
var inst_20500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20498,cljs.core.cst$kw$callback);
var state_20535__$1 = (function (){var statearr_20544 = state_20535;
(statearr_20544[(10)] = inst_20499__$1);

(statearr_20544[(9)] = inst_20500);

return statearr_20544;
})();
if(cljs.core.truth_(inst_20499__$1)){
var statearr_20545_20593 = state_20535__$1;
(statearr_20545_20593[(1)] = (23));

} else {
var statearr_20546_20594 = state_20535__$1;
(statearr_20546_20594[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (29))){
var inst_20524 = (state_20535[(2)]);
var inst_20525 = cljs.test.clear_env_BANG_();
var state_20535__$1 = (function (){var statearr_20547 = state_20535;
(statearr_20547[(11)] = inst_20524);

(statearr_20547[(12)] = inst_20525);

return statearr_20547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20535__$1,(30),devcards.core.test_channel);
} else {
if((state_val_20536 === (6))){
var state_20535__$1 = state_20535;
var statearr_20548_20595 = state_20535__$1;
(statearr_20548_20595[(2)] = true);

(statearr_20548_20595[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (28))){
var inst_20500 = (state_20535[(9)]);
var inst_20516 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_20517 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_20518 = cljs.core.PersistentHashMap.fromArrays(inst_20516,inst_20517);
var inst_20519 = devcards.core.collect_test(inst_20518);
var inst_20520 = cljs.test.get_current_env();
var inst_20521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_20520,cljs.core.cst$kw$error,"Execution timed out!");
var inst_20522 = (inst_20500.cljs$core$IFn$_invoke$arity$1 ? inst_20500.cljs$core$IFn$_invoke$arity$1(inst_20521) : inst_20500.call(null,inst_20521));
var state_20535__$1 = (function (){var statearr_20549 = state_20535;
(statearr_20549[(13)] = inst_20519);

return statearr_20549;
})();
var statearr_20550_20596 = state_20535__$1;
(statearr_20550_20596[(2)] = inst_20522);

(statearr_20550_20596[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (25))){
var inst_20531 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20551_20597 = state_20535__$1;
(statearr_20551_20597[(2)] = inst_20531);

(statearr_20551_20597[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (17))){
var state_20535__$1 = state_20535;
var statearr_20552_20598 = state_20535__$1;
(statearr_20552_20598[(2)] = true);

(statearr_20552_20598[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (3))){
var inst_20453 = (state_20535[(14)]);
var inst_20458 = inst_20453.cljs$lang$protocol_mask$partition0$;
var inst_20459 = (inst_20458 & (64));
var inst_20460 = inst_20453.cljs$core$ISeq$;
var inst_20461 = (inst_20459) || (inst_20460);
var state_20535__$1 = state_20535;
if(cljs.core.truth_(inst_20461)){
var statearr_20553_20599 = state_20535__$1;
(statearr_20553_20599[(1)] = (6));

} else {
var statearr_20554_20600 = state_20535__$1;
(statearr_20554_20600[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (12))){
var inst_20476 = (state_20535[(7)]);
var inst_20480 = (inst_20476 == null);
var inst_20481 = cljs.core.not(inst_20480);
var state_20535__$1 = state_20535;
if(inst_20481){
var statearr_20555_20601 = state_20535__$1;
(statearr_20555_20601[(1)] = (14));

} else {
var statearr_20556_20602 = state_20535__$1;
(statearr_20556_20602[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (2))){
var inst_20453 = (state_20535[(14)]);
var inst_20453__$1 = (state_20535[(2)]);
var inst_20455 = (inst_20453__$1 == null);
var inst_20456 = cljs.core.not(inst_20455);
var state_20535__$1 = (function (){var statearr_20557 = state_20535;
(statearr_20557[(14)] = inst_20453__$1);

return statearr_20557;
})();
if(inst_20456){
var statearr_20558_20603 = state_20535__$1;
(statearr_20558_20603[(1)] = (3));

} else {
var statearr_20559_20604 = state_20535__$1;
(statearr_20559_20604[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (23))){
var inst_20499 = (state_20535[(10)]);
var inst_20503 = (state_20535[(15)]);
var inst_20503__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_20504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20505 = devcards.core.run_card_tests(inst_20499);
var inst_20506 = [inst_20505,inst_20503__$1];
var inst_20507 = (new cljs.core.PersistentVector(null,2,(5),inst_20504,inst_20506,null));
var state_20535__$1 = (function (){var statearr_20560 = state_20535;
(statearr_20560[(15)] = inst_20503__$1);

return statearr_20560;
})();
return cljs.core.async.ioc_alts_BANG_(state_20535__$1,(26),inst_20507);
} else {
if((state_val_20536 === (19))){
var inst_20490 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20561_20605 = state_20535__$1;
(statearr_20561_20605[(2)] = inst_20490);

(statearr_20561_20605[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (11))){
var inst_20453 = (state_20535[(14)]);
var inst_20473 = (state_20535[(2)]);
var inst_20474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20473,cljs.core.cst$kw$tests);
var inst_20475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20473,cljs.core.cst$kw$callback);
var inst_20476 = inst_20453;
var state_20535__$1 = (function (){var statearr_20562 = state_20535;
(statearr_20562[(16)] = inst_20474);

(statearr_20562[(7)] = inst_20476);

(statearr_20562[(17)] = inst_20475);

return statearr_20562;
})();
var statearr_20563_20606 = state_20535__$1;
(statearr_20563_20606[(2)] = null);

(statearr_20563_20606[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (9))){
var inst_20453 = (state_20535[(14)]);
var inst_20470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20453);
var state_20535__$1 = state_20535;
var statearr_20564_20607 = state_20535__$1;
(statearr_20564_20607[(2)] = inst_20470);

(statearr_20564_20607[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (5))){
var inst_20468 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
if(cljs.core.truth_(inst_20468)){
var statearr_20565_20608 = state_20535__$1;
(statearr_20565_20608[(1)] = (9));

} else {
var statearr_20566_20609 = state_20535__$1;
(statearr_20566_20609[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (14))){
var inst_20476 = (state_20535[(7)]);
var inst_20483 = inst_20476.cljs$lang$protocol_mask$partition0$;
var inst_20484 = (inst_20483 & (64));
var inst_20485 = inst_20476.cljs$core$ISeq$;
var inst_20486 = (inst_20484) || (inst_20485);
var state_20535__$1 = state_20535;
if(cljs.core.truth_(inst_20486)){
var statearr_20567_20610 = state_20535__$1;
(statearr_20567_20610[(1)] = (17));

} else {
var statearr_20568_20611 = state_20535__$1;
(statearr_20568_20611[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (26))){
var inst_20503 = (state_20535[(15)]);
var inst_20509 = (state_20535[(2)]);
var inst_20510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20509,(0),null);
var inst_20511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20509,(1),null);
var inst_20512 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_20511,inst_20503);
var state_20535__$1 = (function (){var statearr_20569 = state_20535;
(statearr_20569[(8)] = inst_20510);

return statearr_20569;
})();
if(inst_20512){
var statearr_20570_20612 = state_20535__$1;
(statearr_20570_20612[(1)] = (27));

} else {
var statearr_20571_20613 = state_20535__$1;
(statearr_20571_20613[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (16))){
var inst_20493 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
if(cljs.core.truth_(inst_20493)){
var statearr_20572_20614 = state_20535__$1;
(statearr_20572_20614[(1)] = (20));

} else {
var statearr_20573_20615 = state_20535__$1;
(statearr_20573_20615[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (30))){
var inst_20527 = (state_20535[(2)]);
var inst_20476 = inst_20527;
var state_20535__$1 = (function (){var statearr_20574 = state_20535;
(statearr_20574[(7)] = inst_20476);

return statearr_20574;
})();
var statearr_20575_20616 = state_20535__$1;
(statearr_20575_20616[(2)] = null);

(statearr_20575_20616[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (10))){
var inst_20453 = (state_20535[(14)]);
var state_20535__$1 = state_20535;
var statearr_20576_20617 = state_20535__$1;
(statearr_20576_20617[(2)] = inst_20453);

(statearr_20576_20617[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (18))){
var state_20535__$1 = state_20535;
var statearr_20577_20618 = state_20535__$1;
(statearr_20577_20618[(2)] = false);

(statearr_20577_20618[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20536 === (8))){
var inst_20465 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20578_20619 = state_20535__$1;
(statearr_20578_20619[(2)] = inst_20465);

(statearr_20578_20619[(1)] = (5));


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
});})(c__15299__auto__))
;
return ((function (switch__15185__auto__,c__15299__auto__){
return (function() {
var devcards$core$state_machine__15186__auto__ = null;
var devcards$core$state_machine__15186__auto____0 = (function (){
var statearr_20582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20582[(0)] = devcards$core$state_machine__15186__auto__);

(statearr_20582[(1)] = (1));

return statearr_20582;
});
var devcards$core$state_machine__15186__auto____1 = (function (state_20535){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_20535);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e20583){if((e20583 instanceof Object)){
var ex__15189__auto__ = e20583;
var statearr_20584_20620 = state_20535;
(statearr_20584_20620[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20535);

return cljs.core.cst$kw$recur;
} else {
throw e20583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__20621 = state_20535;
state_20535 = G__20621;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
devcards$core$state_machine__15186__auto__ = function(state_20535){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15186__auto____0.call(this);
case 1:
return devcards$core$state_machine__15186__auto____1.call(this,state_20535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15186__auto____0;
devcards$core$state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15186__auto____1;
return devcards$core$state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__))
})();
var state__15301__auto__ = (function (){var statearr_20585 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_20585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_20585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__))
);

return c__15299__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__19009__auto___20626 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__19009__auto___20626);
}

var seq__20622_20627 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20623_20628 = null;
var count__20624_20629 = (0);
var i__20625_20630 = (0);
while(true){
if((i__20625_20630 < count__20624_20629)){
var property__19010__auto___20631 = chunk__20623_20628.cljs$core$IIndexed$_nth$arity$2(null,i__20625_20630);
if(cljs.core.truth_((base__19009__auto___20626[property__19010__auto___20631]))){
(devcards.core.TestDevcard.prototype[property__19010__auto___20631] = (base__19009__auto___20626[property__19010__auto___20631]));
} else {
}

var G__20632 = seq__20622_20627;
var G__20633 = chunk__20623_20628;
var G__20634 = count__20624_20629;
var G__20635 = (i__20625_20630 + (1));
seq__20622_20627 = G__20632;
chunk__20623_20628 = G__20633;
count__20624_20629 = G__20634;
i__20625_20630 = G__20635;
continue;
} else {
var temp__4425__auto___20636 = cljs.core.seq(seq__20622_20627);
if(temp__4425__auto___20636){
var seq__20622_20637__$1 = temp__4425__auto___20636;
if(cljs.core.chunked_seq_QMARK_(seq__20622_20637__$1)){
var c__5971__auto___20638 = cljs.core.chunk_first(seq__20622_20637__$1);
var G__20639 = cljs.core.chunk_rest(seq__20622_20637__$1);
var G__20640 = c__5971__auto___20638;
var G__20641 = cljs.core.count(c__5971__auto___20638);
var G__20642 = (0);
seq__20622_20627 = G__20639;
chunk__20623_20628 = G__20640;
count__20624_20629 = G__20641;
i__20625_20630 = G__20642;
continue;
} else {
var property__19010__auto___20643 = cljs.core.first(seq__20622_20637__$1);
if(cljs.core.truth_((base__19009__auto___20626[property__19010__auto___20643]))){
(devcards.core.TestDevcard.prototype[property__19010__auto___20643] = (base__19009__auto___20626[property__19010__auto___20643]));
} else {
}

var G__20644 = cljs.core.next(seq__20622_20637__$1);
var G__20645 = null;
var G__20646 = (0);
var G__20647 = (0);
seq__20622_20627 = G__20644;
chunk__20623_20628 = G__20645;
count__20624_20629 = G__20646;
i__20625_20630 = G__20647;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6233__auto__ = [];
var len__6226__auto___20654 = arguments.length;
var i__6227__auto___20655 = (0);
while(true){
if((i__6227__auto___20655 < len__6226__auto___20654)){
args__6233__auto__.push((arguments[i__6227__auto___20655]));

var G__20656 = (i__6227__auto___20655 + (1));
i__6227__auto___20655 = G__20656;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core20649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core20649 = (function (test_thunks,meta20650){
this.test_thunks = test_thunks;
this.meta20650 = meta20650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core20649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20651,meta20650__$1){
var self__ = this;
var _20651__$1 = this;
return (new devcards.core.t_devcards$core20649(self__.test_thunks,meta20650__$1));
});

devcards.core.t_devcards$core20649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20651){
var self__ = this;
var _20651__$1 = this;
return self__.meta20650;
});

devcards.core.t_devcards$core20649.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core20649.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__20652 = devcards.core.TestDevcard;
var G__20653 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__20652,G__20653);
});

devcards.core.t_devcards$core20649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta20650], null);
});

devcards.core.t_devcards$core20649.cljs$lang$type = true;

devcards.core.t_devcards$core20649.cljs$lang$ctorStr = "devcards.core/t_devcards$core20649";

devcards.core.t_devcards$core20649.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"devcards.core/t_devcards$core20649");
});

devcards.core.__GT_t_devcards$core20649 = (function devcards$core$__GT_t_devcards$core20649(test_thunks__$1,meta20650){
return (new devcards.core.t_devcards$core20649(test_thunks__$1,meta20650));
});

}

return (new devcards.core.t_devcards$core20649(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq20648){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20648));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__20661 = (function (){var attrs20662 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20662))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs20662], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20662))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20662)], null))));
})();
return React.renderToString(G__20661);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
var G__20668 = (function (){var attrs20670 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20670))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs20670], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20670))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20670)], null))));
})();
var G__20669 = devcards.system.devcards_app_node();
return React.render(G__20668,G__20669);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__15299__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15299__auto__){
return (function (){
var f__15300__auto__ = (function (){var switch__15185__auto__ = ((function (c__15299__auto__){
return (function (state_20700){
var state_val_20701 = (state_20700[(1)]);
if((state_val_20701 === (1))){
var inst_20691 = devcards.core.load_data_from_channel_BANG_();
var state_20700__$1 = state_20700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20700__$1,(2),inst_20691);
} else {
if((state_val_20701 === (2))){
var inst_20693 = (state_20700[(2)]);
var inst_20694 = cljs.core.async.timeout((100));
var state_20700__$1 = (function (){var statearr_20702 = state_20700;
(statearr_20702[(7)] = inst_20693);

return statearr_20702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20700__$1,(3),inst_20694);
} else {
if((state_val_20701 === (3))){
var inst_20696 = (state_20700[(2)]);
var inst_20697 = (function (){return ((function (inst_20696,state_val_20701,c__15299__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_20696,state_val_20701,c__15299__auto__))
})();
var inst_20698 = setTimeout(inst_20697,(0));
var state_20700__$1 = (function (){var statearr_20703 = state_20700;
(statearr_20703[(8)] = inst_20696);

return statearr_20703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20700__$1,inst_20698);
} else {
return null;
}
}
}
});})(c__15299__auto__))
;
return ((function (switch__15185__auto__,c__15299__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__15186__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15186__auto____0 = (function (){
var statearr_20707 = [null,null,null,null,null,null,null,null,null];
(statearr_20707[(0)] = devcards$core$mount_namespace_$_state_machine__15186__auto__);

(statearr_20707[(1)] = (1));

return statearr_20707;
});
var devcards$core$mount_namespace_$_state_machine__15186__auto____1 = (function (state_20700){
while(true){
var ret_value__15187__auto__ = (function (){try{while(true){
var result__15188__auto__ = switch__15185__auto__(state_20700);
if(cljs.core.keyword_identical_QMARK_(result__15188__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15188__auto__;
}
break;
}
}catch (e20708){if((e20708 instanceof Object)){
var ex__15189__auto__ = e20708;
var statearr_20709_20711 = state_20700;
(statearr_20709_20711[(5)] = ex__15189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20700);

return cljs.core.cst$kw$recur;
} else {
throw e20708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15187__auto__,cljs.core.cst$kw$recur)){
var G__20712 = state_20700;
state_20700 = G__20712;
continue;
} else {
return ret_value__15187__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15186__auto__ = function(state_20700){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15186__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15186__auto____1.call(this,state_20700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15186__auto____0;
devcards$core$mount_namespace_$_state_machine__15186__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15186__auto____1;
return devcards$core$mount_namespace_$_state_machine__15186__auto__;
})()
;})(switch__15185__auto__,c__15299__auto__))
})();
var state__15301__auto__ = (function (){var statearr_20710 = (f__15300__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15300__auto__.cljs$core$IFn$_invoke$arity$0() : f__15300__auto__.call(null));
(statearr_20710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15299__auto__);

return statearr_20710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15301__auto__);
});})(c__15299__auto__))
);

return c__15299__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
