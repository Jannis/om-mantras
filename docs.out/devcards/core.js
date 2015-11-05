// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
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
devcards.core.react_element_type_symbol = (function (){var or__5094__auto__ = (function (){var and__5082__auto__ = typeof Symbol !== 'undefined';
if(and__5082__auto__){
var and__5082__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__5082__auto____$1){
var and__5082__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__5082__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__5082__auto____$2;
}
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__18688_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__18688_SHARP_.detail], null));
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
var and__5082__auto__ = cljs.core.map_QMARK_(c);
if(and__5082__auto__){
var map__18695 = c;
var map__18695__$1 = ((((!((map__18695 == null)))?((((map__18695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18695):map__18695);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18695__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18695__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__5082__auto__;
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
var base__13148__auto___18707 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__18697 = "pre";
var G__18698 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__18699 = (function (){var G__18700 = "code";
var G__18701 = {"className": (function (){var or__5094__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__18702 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__18700,G__18701,G__18702);
})();
return React.createElement(G__18697,G__18698,G__18699);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__13148__auto___18707);
}

var seq__18703_18708 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18704_18709 = null;
var count__18705_18710 = (0);
var i__18706_18711 = (0);
while(true){
if((i__18706_18711 < count__18705_18710)){
var property__13149__auto___18712 = chunk__18704_18709.cljs$core$IIndexed$_nth$arity$2(null,i__18706_18711);
if(cljs.core.truth_((base__13148__auto___18707[property__13149__auto___18712]))){
(devcards.core.CodeHighlight.prototype[property__13149__auto___18712] = (base__13148__auto___18707[property__13149__auto___18712]));
} else {
}

var G__18713 = seq__18703_18708;
var G__18714 = chunk__18704_18709;
var G__18715 = count__18705_18710;
var G__18716 = (i__18706_18711 + (1));
seq__18703_18708 = G__18713;
chunk__18704_18709 = G__18714;
count__18705_18710 = G__18715;
i__18706_18711 = G__18716;
continue;
} else {
var temp__4425__auto___18717 = cljs.core.seq(seq__18703_18708);
if(temp__4425__auto___18717){
var seq__18703_18718__$1 = temp__4425__auto___18717;
if(cljs.core.chunked_seq_QMARK_(seq__18703_18718__$1)){
var c__5897__auto___18719 = cljs.core.chunk_first(seq__18703_18718__$1);
var G__18720 = cljs.core.chunk_rest(seq__18703_18718__$1);
var G__18721 = c__5897__auto___18719;
var G__18722 = cljs.core.count(c__5897__auto___18719);
var G__18723 = (0);
seq__18703_18708 = G__18720;
chunk__18704_18709 = G__18721;
count__18705_18710 = G__18722;
i__18706_18711 = G__18723;
continue;
} else {
var property__13149__auto___18724 = cljs.core.first(seq__18703_18718__$1);
if(cljs.core.truth_((base__13148__auto___18707[property__13149__auto___18724]))){
(devcards.core.CodeHighlight.prototype[property__13149__auto___18724] = (base__13148__auto___18707[property__13149__auto___18724]));
} else {
}

var G__18725 = cljs.core.next(seq__18703_18718__$1);
var G__18726 = null;
var G__18727 = (0);
var G__18728 = (0);
seq__18703_18708 = G__18725;
chunk__18704_18709 = G__18726;
count__18705_18710 = G__18727;
i__18706_18711 = G__18728;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__18731 = devcards.core.CodeHighlight;
var G__18732 = {"code": code_str, "lang": lang};
return React.createElement(G__18731,G__18732);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__6007__auto__ = (function (){var G__18733 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18733) : cljs.core.atom.call(null,G__18733));
})();
var prefer_table__6008__auto__ = (function (){var G__18734 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18734) : cljs.core.atom.call(null,G__18734));
})();
var method_cache__6009__auto__ = (function (){var G__18735 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18735) : cljs.core.atom.call(null,G__18735));
})();
var cached_hierarchy__6010__auto__ = (function (){var G__18736 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18736) : cljs.core.atom.call(null,G__18736));
})();
var hierarchy__6011__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__18737){
var map__18738 = p__18737;
var map__18738__$1 = ((((!((map__18738 == null)))?((((map__18738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18738):map__18738);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__18740){
var map__18741 = p__18740;
var map__18741__$1 = ((((!((map__18741 == null)))?((((map__18741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18741):map__18741);
var block = map__18741__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18741__$1,cljs.core.cst$kw$content);
var G__18743 = devcards.core.CodeHighlight;
var G__18744 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__18743,G__18744);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18750 = arguments.length;
var i__6153__auto___18751 = (0);
while(true){
if((i__6153__auto___18751 < len__6152__auto___18750)){
args__6159__auto__.push((arguments[i__6153__auto___18751]));

var G__18752 = (i__6153__auto___18751 + (1));
i__6153__auto___18751 = G__18752;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
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
var attrs18746 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18746))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs18746], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18746))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18746)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__18747 = "div";
var G__18748 = {"style": {"color": "#a94442"}};
var G__18749 = sablono.interpreter.interpret(message);
return React.createElement(G__18747,G__18748,G__18749);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq18745){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18745));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__18759 = "div";
var G__18760 = {"className": (function (){var G__18762 = devcards.system.devcards_rendered_card_class;
var G__18762__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__18762),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__18762);
var G__18762__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__18762__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__18762__$1);
return G__18762__$2;
})()};
var G__18761 = sablono.interpreter.interpret(children);
return React.createElement(G__18759,G__18760,G__18761);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args18763 = [];
var len__6152__auto___18783 = arguments.length;
var i__6153__auto___18784 = (0);
while(true){
if((i__6153__auto___18784 < len__6152__auto___18783)){
args18763.push((arguments[i__6153__auto___18784]));

var G__18785 = (i__6153__auto___18784 + (1));
i__6153__auto___18784 = G__18785;
continue;
} else {
}
break;
}

var G__18765 = args18763.length;
switch (G__18765) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18763.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__18766 = card;
var map__18766__$1 = ((((!((map__18766 == null)))?((((map__18766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18766):map__18766);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__18768 = "div";
var G__18769 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__18770 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__18768,G__18769,G__18770);
} else {
var G__18772 = "div";
var G__18773 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__18774 = (function (){var attrs18771 = (cljs.core.truth_(path)?(function (){var G__18776 = "a";
var G__18777 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__18776,G__18772,G__18773,map__18766,map__18766__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__18776,G__18772,G__18773,map__18766,map__18766__$1,path,options))
)};
var G__18778 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__18779 = " ";
return React.createElement(G__18776,G__18777,G__18778,G__18779);
})():(function (){var attrs18780 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs18780))?sablono.interpreter.attributes(attrs18780):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18780)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18771))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs18771], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18771))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18771)], null))));
})();
var G__18775 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__18772,G__18773,G__18774,G__18775);
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
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5750__auto__.call(null,this$,devcard_opts));
} else {
var m__5750__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5750__auto____$1.call(null,this$,devcard_opts));
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
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (devcards.core._devcard[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5750__auto__.call(null,this$,devcard_opts));
} else {
var m__5750__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5750__auto____$1.call(null,this$,devcard_opts));
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
var data = (function (){var or__5094__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
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
var base__13148__auto___18797 = {"getInitialState": (function (){
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
return this$.setState((function (){var or__5094__auto__ = (function (){var and__5082__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__5082__auto__)){
return this$.state;
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
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
if(cljs.core.truth_((function (){var and__5082__auto__ = data_atom;
if(cljs.core.truth_(and__5082__auto__)){
return id;
} else {
return and__5082__auto__;
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
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs18789 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18789))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18789], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18789))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18789)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__18790 = "div";
var G__18791 = {"className": "com-rigsomelight-devcards-frameless"};
var G__18792 = sablono.interpreter.interpret(children);
return React.createElement(G__18790,G__18791,G__18792);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__13148__auto___18797);
}

var seq__18793_18798 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18794_18799 = null;
var count__18795_18800 = (0);
var i__18796_18801 = (0);
while(true){
if((i__18796_18801 < count__18795_18800)){
var property__13149__auto___18802 = chunk__18794_18799.cljs$core$IIndexed$_nth$arity$2(null,i__18796_18801);
if(cljs.core.truth_((base__13148__auto___18797[property__13149__auto___18802]))){
(devcards.core.DevcardBase.prototype[property__13149__auto___18802] = (base__13148__auto___18797[property__13149__auto___18802]));
} else {
}

var G__18803 = seq__18793_18798;
var G__18804 = chunk__18794_18799;
var G__18805 = count__18795_18800;
var G__18806 = (i__18796_18801 + (1));
seq__18793_18798 = G__18803;
chunk__18794_18799 = G__18804;
count__18795_18800 = G__18805;
i__18796_18801 = G__18806;
continue;
} else {
var temp__4425__auto___18807 = cljs.core.seq(seq__18793_18798);
if(temp__4425__auto___18807){
var seq__18793_18808__$1 = temp__4425__auto___18807;
if(cljs.core.chunked_seq_QMARK_(seq__18793_18808__$1)){
var c__5897__auto___18809 = cljs.core.chunk_first(seq__18793_18808__$1);
var G__18810 = cljs.core.chunk_rest(seq__18793_18808__$1);
var G__18811 = c__5897__auto___18809;
var G__18812 = cljs.core.count(c__5897__auto___18809);
var G__18813 = (0);
seq__18793_18798 = G__18810;
chunk__18794_18799 = G__18811;
count__18795_18800 = G__18812;
i__18796_18801 = G__18813;
continue;
} else {
var property__13149__auto___18814 = cljs.core.first(seq__18793_18808__$1);
if(cljs.core.truth_((base__13148__auto___18797[property__13149__auto___18814]))){
(devcards.core.DevcardBase.prototype[property__13149__auto___18814] = (base__13148__auto___18797[property__13149__auto___18814]));
} else {
}

var G__18815 = cljs.core.next(seq__18793_18808__$1);
var G__18816 = null;
var G__18817 = (0);
var G__18818 = (0);
seq__18793_18798 = G__18815;
chunk__18794_18799 = G__18816;
count__18795_18800 = G__18817;
i__18796_18801 = G__18818;
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
var G__18819 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18820 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__18819,G__18820) : node_fn.call(null,G__18819,G__18820));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__13148__auto___18827 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__5082__auto__;
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
var G__18821 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__18822 = "Card has not mounted DOM node.";
return React.DOM.div(G__18821,G__18822);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__13148__auto___18827);
}

var seq__18823_18828 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18824_18829 = null;
var count__18825_18830 = (0);
var i__18826_18831 = (0);
while(true){
if((i__18826_18831 < count__18825_18830)){
var property__13149__auto___18832 = chunk__18824_18829.cljs$core$IIndexed$_nth$arity$2(null,i__18826_18831);
if(cljs.core.truth_((base__13148__auto___18827[property__13149__auto___18832]))){
(devcards.core.DomComponent.prototype[property__13149__auto___18832] = (base__13148__auto___18827[property__13149__auto___18832]));
} else {
}

var G__18833 = seq__18823_18828;
var G__18834 = chunk__18824_18829;
var G__18835 = count__18825_18830;
var G__18836 = (i__18826_18831 + (1));
seq__18823_18828 = G__18833;
chunk__18824_18829 = G__18834;
count__18825_18830 = G__18835;
i__18826_18831 = G__18836;
continue;
} else {
var temp__4425__auto___18837 = cljs.core.seq(seq__18823_18828);
if(temp__4425__auto___18837){
var seq__18823_18838__$1 = temp__4425__auto___18837;
if(cljs.core.chunked_seq_QMARK_(seq__18823_18838__$1)){
var c__5897__auto___18839 = cljs.core.chunk_first(seq__18823_18838__$1);
var G__18840 = cljs.core.chunk_rest(seq__18823_18838__$1);
var G__18841 = c__5897__auto___18839;
var G__18842 = cljs.core.count(c__5897__auto___18839);
var G__18843 = (0);
seq__18823_18828 = G__18840;
chunk__18824_18829 = G__18841;
count__18825_18830 = G__18842;
i__18826_18831 = G__18843;
continue;
} else {
var property__13149__auto___18844 = cljs.core.first(seq__18823_18838__$1);
if(cljs.core.truth_((base__13148__auto___18827[property__13149__auto___18844]))){
(devcards.core.DomComponent.prototype[property__13149__auto___18844] = (base__13148__auto___18827[property__13149__auto___18844]));
} else {
}

var G__18845 = cljs.core.next(seq__18823_18838__$1);
var G__18846 = null;
var G__18847 = (0);
var G__18848 = (0);
seq__18823_18828 = G__18845;
chunk__18824_18829 = G__18846;
count__18825_18830 = G__18847;
i__18826_18831 = G__18848;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5094__auto__ = x === true;
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = x === false;
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
var or__5094__auto____$2 = (x == null);
if(or__5094__auto____$2){
return or__5094__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5094__auto__ = typeof x === 'string';
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = (x == null);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__5094__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__18849_SHARP_){
return !(p1__18849_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__18858 = opts;
var map__18858__$1 = ((((!((map__18858 == null)))?((((map__18858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18858):map__18858);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5094__auto__ = cljs.core.map_QMARK_(options);
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = (options == null);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__5094__auto__ = (initial_data == null);
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
var or__5094__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__5094__auto____$2){
return or__5094__auto____$2;
} else {
var or__5094__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__5094__auto____$3){
return or__5094__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__18858,map__18858__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__18850_SHARP_){
return devcards.core.booler_QMARK_(p1__18850_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__18858,map__18858__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__18882 = "div";
var G__18883 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__18884 = sablono.interpreter.interpret((function (){var G__18887 = "code";
var G__18888 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__18889 = (cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0))):null);
return React.createElement(G__18887,G__18888,G__18889);
})());
var G__18885 = (function (){var G__18890 = "span";
var G__18891 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__18892 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__18890,G__18891,G__18892);
})();
var G__18886 = (function (){var G__18893 = "span";
var G__18894 = {"style": {"flex": "1 100px"}};
var G__18895 = " Received: ";
var G__18896 = (function (){var attrs18881 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs18881))?sablono.interpreter.attributes(attrs18881):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18881))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18881)], null))));
})();
return React.createElement(G__18893,G__18894,G__18895,G__18896);
})();
return React.createElement(G__18882,G__18883,G__18884,G__18885,G__18886);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__18910 = "div";
var G__18911 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__18912 = (function (){var attrs18909 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18909))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs18909], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18909))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18909)], null))));
})();
var G__18913 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__18916 = "div";
var G__18917 = null;
var G__18918 = (function (){var attrs18914 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18914))?sablono.interpreter.attributes(attrs18914):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18914))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18914)], null))));
})();
var G__18919 = ((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs18920 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18920))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18920], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18920))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18920)], null))));
})()):null);
return React.createElement(G__18916,G__18917,G__18918,G__18919);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__18910,G__18911,G__18912,G__18913);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__18921_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__18921_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__18924 = devcards.core.DevcardBase;
var G__18925 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__18924,G__18925);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k18927,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__18929 = (((k18927 instanceof cljs.core.Keyword))?k18927.fqn:null);
switch (G__18929) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18927,else__5711__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18926){
var self__ = this;
var G__18926__$1 = this;
return (new cljs.core.RecordIter((0),G__18926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap(this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map(this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__18926){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__18930 = cljs.core.keyword_identical_QMARK_;
var expr__18931 = k__5716__auto__;
if(cljs.core.truth_((pred__18930.cljs$core$IFn$_invoke$arity$2 ? pred__18930.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18931) : pred__18930.call(null,cljs.core.cst$kw$obj,expr__18931)))){
return (new devcards.core.IdentiyOptions(G__18926,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__18926),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__18926){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__18926,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__18928){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18928),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18928,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__18934){
var map__18937 = p__18934;
var map__18937__$1 = ((((!((map__18937 == null)))?((((map__18937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18937):map__18937);
var devcard_opts = map__18937__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18937__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__18937,map__18937__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__18937,map__18937__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k18940,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__18942 = (((k18940 instanceof cljs.core.Keyword))?k18940.fqn:null);
switch (G__18942) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18940,else__5711__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18939){
var self__ = this;
var G__18939__$1 = this;
return (new cljs.core.RecordIter((0),G__18939__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap(this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map(this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__18939){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__18943 = cljs.core.keyword_identical_QMARK_;
var expr__18944 = k__5716__auto__;
if(cljs.core.truth_((pred__18943.cljs$core$IFn$_invoke$arity$2 ? pred__18943.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18944) : pred__18943.call(null,cljs.core.cst$kw$obj,expr__18944)))){
return (new devcards.core.AtomLikeOptions(G__18939,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__18939),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__18939){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__18939,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__18941){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18941),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18941,cljs.core.cst$kw$obj),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k18950,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__18952 = (((k18950 instanceof cljs.core.Keyword))?k18950.fqn:null);
switch (G__18952) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18950,else__5711__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18949){
var self__ = this;
var G__18949__$1 = this;
return (new cljs.core.RecordIter((0),G__18949__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap(this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map(this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__18949){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__18953 = cljs.core.keyword_identical_QMARK_;
var expr__18954 = k__5716__auto__;
if(cljs.core.truth_((pred__18953.cljs$core$IFn$_invoke$arity$2 ? pred__18953.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18954) : pred__18953.call(null,cljs.core.cst$kw$obj,expr__18954)))){
return (new devcards.core.EdnLikeOptions(G__18949,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__18949),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__18949){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__18949,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__18951){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18951),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18951,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__5082__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__5082__auto__){
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
return and__5082__auto__;
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
if((function (){var G__18968 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__18968 == null))){
if((false) || (G__18968.devcards$core$IDevcard$)){
return true;
} else {
if((!G__18968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18968);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__18971 = devcards.core.DomComponent;
var G__18972 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__18971,G__18972);
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
var map__18976 = (function (){var G__18977 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18977) : cljs.core.deref.call(null,G__18977));
})();
var map__18976__$1 = ((((!((map__18976 == null)))?((((map__18976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18976):map__18976);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18980 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18980) : cljs.core.deref.call(null,G__18980));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18982 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18982) : cljs.core.deref.call(null,G__18982));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18987 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18987__$1 = ((((!((map__18987 == null)))?((((map__18987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18987):map__18987);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18989_18991 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18990_18992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18989_18991,G__18990_18992) : cljs.core.reset_BANG_.call(null,G__18989_18991,G__18990_18992));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18997 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18997__$1 = ((((!((map__18997 == null)))?((((map__18997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18997):map__18997);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18997__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18997__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18999_19001 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__19000_19002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18999_19001,G__19000_19002) : cljs.core.reset_BANG_.call(null,G__18999_19001,G__19000_19002));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__19007 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__19007__$1 = ((((!((map__19007 == null)))?((((map__19007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19007):map__19007);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__19009_19011 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__19010_19012 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19009_19011,G__19010_19012) : cljs.core.reset_BANG_.call(null,G__19009_19011,G__19010_19012));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__19067 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__19068 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19068) : cljs.core.atom.call(null,G__19068));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__19069 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19069) : cljs.core.deref.call(null,G__19069));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__5082__auto__ = data_atom;
if(cljs.core.truth_(and__5082__auto__)){
return id;
} else {
return and__5082__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__19070){
var map__19071 = p__19070;
var map__19071__$1 = ((((!((map__19071 == null)))?((((map__19071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19071):map__19071);
var ha = map__19071__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071__$1,cljs.core.cst$kw$ignore_DASH_click);
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
if(cljs.core.truth_((function (){var or__5094__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__19073 = "div";
var G__19074 = {"style": {"display": (cljs.core.truth_((function (){var or__5094__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__19075 = (function (){var action = ((function (G__19073,G__19074,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__19073,G__19074,this$))
;
return sablono.interpreter.interpret((function (){var G__19081 = "button";
var G__19082 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__19083 = (function (){var G__19084 = "span";
var G__19085 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__19086 = "";
return React.createElement(G__19084,G__19085,G__19086);
})();
return React.createElement(G__19081,G__19082,G__19083);
})());
})();
var G__19076 = (function (){var action = ((function (G__19073,G__19074,G__19075,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__19087 = data_atom;
var G__19088 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19087,G__19088) : cljs.core.reset_BANG_.call(null,G__19087,G__19088));
});})(G__19073,G__19074,G__19075,this$))
;
return sablono.interpreter.interpret((function (){var G__19091 = "button";
var G__19092 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__19093 = (function (){var G__19094 = "span";
var G__19095 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__19096 = "";
return React.createElement(G__19094,G__19095,G__19096);
})();
return React.createElement(G__19091,G__19092,G__19093);
})());
})();
var G__19077 = (function (){var action = ((function (G__19073,G__19074,G__19075,G__19076,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__19073,G__19074,G__19075,G__19076,this$))
;
return sablono.interpreter.interpret((function (){var G__19099 = "button";
var G__19100 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__19101 = (function (){var G__19102 = "span";
var G__19103 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__19104 = "";
return React.createElement(G__19102,G__19103,G__19104);
})();
return React.createElement(G__19099,G__19100,G__19101);
})());
})();
var G__19078 = (function (){var listener = ((function (G__19073,G__19074,G__19075,G__19076,G__19077,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__19073,G__19074,G__19075,G__19076,G__19077,this$))
;
return sablono.interpreter.interpret((function (){var G__19111 = "button";
var G__19112 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__19113 = (function (){var G__19116 = "span";
var G__19117 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__19116,G__19117);
})();
var G__19114 = (function (){var G__19118 = "span";
var G__19119 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__19118,G__19119);
})();
var G__19115 = (function (){var G__19120 = "span";
var G__19121 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__19120,G__19121);
})();
return React.createElement(G__19111,G__19112,G__19113,G__19114,G__19115);
})());
})();
return React.createElement(G__19073,G__19074,G__19075,G__19076,G__19077,G__19078);
} else {
return null;
}
})};
return React.createClass(G__19067);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__19124 = devcards.core.HistoryComponent;
var G__19125 = {"data_atom": data_atom};
return React.createElement(G__19124,G__19125);
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
var _STAR_current_env_STAR_19127 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_19127;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__6007__auto__ = (function (){var G__19128 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19128) : cljs.core.atom.call(null,G__19128));
})();
var prefer_table__6008__auto__ = (function (){var G__19129 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19129) : cljs.core.atom.call(null,G__19129));
})();
var method_cache__6009__auto__ = (function (){var G__19130 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19130) : cljs.core.atom.call(null,G__19130));
})();
var cached_hierarchy__6010__auto__ = (function (){var G__19131 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19131) : cljs.core.atom.call(null,G__19131));
})();
var hierarchy__6011__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs19132 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19132))?sablono.interpreter.attributes(attrs19132):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19132)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__19133,body){
var map__19141 = p__19133;
var map__19141__$1 = ((((!((map__19141 == null)))?((((map__19141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19141):map__19141);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__19144 = "div";
var G__19145 = null;
var G__19146 = (function (){var attrs19143 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19143))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs19143], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19143))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19143)], null))));
})();
var G__19147 = sablono.interpreter.interpret(body);
return React.createElement(G__19144,G__19145,G__19146,G__19147);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__19148){
var map__19153 = p__19148;
var map__19153__$1 = ((((!((map__19153 == null)))?((((map__19153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19153):map__19153);
var m = map__19153__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19153__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__19155 = devcards.core.CodeHighlight;
var G__19156 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__19155,G__19156);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__19160 = "div";
var G__19161 = null;
var G__19162 = React.createElement("strong",null,"Error: ");
var G__19163 = (function (){var attrs19159 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs19159))?sablono.interpreter.attributes(attrs19159):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19159)], null))));
})();
return React.createElement(G__19160,G__19161,G__19162,G__19163);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs19164 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19164))?sablono.interpreter.attributes(attrs19164):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19164))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19164)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__19165){
var map__19166 = p__19165;
var map__19166__$1 = ((((!((map__19166 == null)))?((((map__19166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19166):map__19166);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs19168 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19166,map__19166__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__19166,map__19166__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19168))?sablono.interpreter.attributes(attrs19168):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19168))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19168)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__19170 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__19170) : cljs.test.report.call(null,G__19170));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs19175 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__19176,t){
var map__19177 = p__19176;
var map__19177__$1 = ((((!((map__19177 == null)))?((((map__19177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19177):map__19177);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19175))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs19175], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19175))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19175)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__19222){
var map__19223 = p__19222;
var map__19223__$1 = ((((!((map__19223 == null)))?((((map__19223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19223):map__19223);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19223__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__19221 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__19221__$1 = ((((!((map__19221 == null)))?((((map__19221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19221):map__19221);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__19226 = "div";
var G__19227 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__19228 = (function (){var G__19230 = "div";
var G__19231 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__19232 = (function (){var G__19236 = "a";
var G__19237 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__19236,G__19230,G__19231,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__19236,G__19230,G__19231,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
)};
var G__19238 = (cljs.core.truth_(path)?sablono.interpreter.interpret([cljs.core.str(cljs.core.name(cljs.core.last(path)))].join('')):null);
return React.createElement(G__19236,G__19237,G__19238);
})();
var G__19233 = (function (){var G__19239 = "button";
var G__19240 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__19239,G__19230,G__19231,G__19232,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__19239,G__19230,G__19231,G__19232,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__19241 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__19239,G__19240,G__19241);
})();
var G__19234 = ((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret((function (){var G__19245 = "button";
var G__19246 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__19245,G__19230,G__19231,G__19232,G__19233,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__19245,G__19230,G__19231,G__19232,G__19233,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (p__19248){
var map__19249 = p__19248;
var map__19249__$1 = ((((!((map__19249 == null)))?((((map__19249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19249):map__19249);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19249__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__19245,G__19230,G__19231,G__19232,G__19233,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
});
});})(G__19245,G__19230,G__19231,G__19232,G__19233,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__19247 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__19245,G__19246,G__19247);
})()));
var G__19235 = ((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret((function (){var G__19254 = "button";
var G__19255 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__19254,G__19230,G__19231,G__19232,G__19233,G__19234,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__19254,G__19230,G__19231,G__19232,G__19233,G__19234,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1){
return (function (p__19257){
var map__19258 = p__19257;
var map__19258__$1 = ((((!((map__19258 == null)))?((((map__19258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19258):map__19258);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19258__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__19254,G__19230,G__19231,G__19232,G__19233,G__19234,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
});
});})(G__19254,G__19230,G__19231,G__19232,G__19233,G__19234,G__19226,G__19227,error_QMARK_,tests,some_tests,total_tests,map__19221,map__19221__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__19256 = sablono.interpreter.interpret(pass);
return React.createElement(G__19254,G__19255,G__19256);
})()));
return React.createElement(G__19230,G__19231,G__19232,G__19233,G__19234,G__19235);
})();
var G__19229 = (function (){var G__19260 = "div";
var G__19261 = {"className": devcards.system.devcards_rendered_card_class};
var G__19262 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__5094__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__19260,G__19261,G__19262);
})();
return React.createElement(G__19226,G__19227,G__19228,G__19229);
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
devcards.core.test_loop = (function (){var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__){
return (function (state_19349){
var state_val_19350 = (state_19349[(1)]);
if((state_val_19350 === (7))){
var state_19349__$1 = state_19349;
var statearr_19351_19400 = state_19349__$1;
(statearr_19351_19400[(2)] = false);

(statearr_19351_19400[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (20))){
var inst_19290 = (state_19349[(7)]);
var inst_19309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19290);
var state_19349__$1 = state_19349;
var statearr_19352_19401 = state_19349__$1;
(statearr_19352_19401[(2)] = inst_19309);

(statearr_19352_19401[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (27))){
var inst_19314 = (state_19349[(8)]);
var inst_19324 = (state_19349[(9)]);
var inst_19328 = (inst_19314.cljs$core$IFn$_invoke$arity$1 ? inst_19314.cljs$core$IFn$_invoke$arity$1(inst_19324) : inst_19314.call(null,inst_19324));
var state_19349__$1 = state_19349;
var statearr_19353_19402 = state_19349__$1;
(statearr_19353_19402[(2)] = inst_19328);

(statearr_19353_19402[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (1))){
var state_19349__$1 = state_19349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19349__$1,(2),devcards.core.test_channel);
} else {
if((state_val_19350 === (24))){
var state_19349__$1 = state_19349;
var statearr_19354_19403 = state_19349__$1;
(statearr_19354_19403[(2)] = null);

(statearr_19354_19403[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (4))){
var state_19349__$1 = state_19349;
var statearr_19355_19404 = state_19349__$1;
(statearr_19355_19404[(2)] = false);

(statearr_19355_19404[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (15))){
var state_19349__$1 = state_19349;
var statearr_19356_19405 = state_19349__$1;
(statearr_19356_19405[(2)] = false);

(statearr_19356_19405[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (21))){
var inst_19290 = (state_19349[(7)]);
var state_19349__$1 = state_19349;
var statearr_19357_19406 = state_19349__$1;
(statearr_19357_19406[(2)] = inst_19290);

(statearr_19357_19406[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (13))){
var inst_19347 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19349__$1,inst_19347);
} else {
if((state_val_19350 === (22))){
var inst_19313 = (state_19349[(10)]);
var inst_19312 = (state_19349[(2)]);
var inst_19313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19312,cljs.core.cst$kw$tests);
var inst_19314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19312,cljs.core.cst$kw$callback);
var state_19349__$1 = (function (){var statearr_19358 = state_19349;
(statearr_19358[(8)] = inst_19314);

(statearr_19358[(10)] = inst_19313__$1);

return statearr_19358;
})();
if(cljs.core.truth_(inst_19313__$1)){
var statearr_19359_19407 = state_19349__$1;
(statearr_19359_19407[(1)] = (23));

} else {
var statearr_19360_19408 = state_19349__$1;
(statearr_19360_19408[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (29))){
var inst_19338 = (state_19349[(2)]);
var inst_19339 = cljs.test.clear_env_BANG_();
var state_19349__$1 = (function (){var statearr_19361 = state_19349;
(statearr_19361[(11)] = inst_19338);

(statearr_19361[(12)] = inst_19339);

return statearr_19361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19349__$1,(30),devcards.core.test_channel);
} else {
if((state_val_19350 === (6))){
var state_19349__$1 = state_19349;
var statearr_19362_19409 = state_19349__$1;
(statearr_19362_19409[(2)] = true);

(statearr_19362_19409[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (28))){
var inst_19314 = (state_19349[(8)]);
var inst_19330 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_19331 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_19332 = cljs.core.PersistentHashMap.fromArrays(inst_19330,inst_19331);
var inst_19333 = devcards.core.collect_test(inst_19332);
var inst_19334 = cljs.test.get_current_env();
var inst_19335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19334,cljs.core.cst$kw$error,"Execution timed out!");
var inst_19336 = (inst_19314.cljs$core$IFn$_invoke$arity$1 ? inst_19314.cljs$core$IFn$_invoke$arity$1(inst_19335) : inst_19314.call(null,inst_19335));
var state_19349__$1 = (function (){var statearr_19363 = state_19349;
(statearr_19363[(13)] = inst_19333);

return statearr_19363;
})();
var statearr_19364_19410 = state_19349__$1;
(statearr_19364_19410[(2)] = inst_19336);

(statearr_19364_19410[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (25))){
var inst_19345 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
var statearr_19365_19411 = state_19349__$1;
(statearr_19365_19411[(2)] = inst_19345);

(statearr_19365_19411[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (17))){
var state_19349__$1 = state_19349;
var statearr_19366_19412 = state_19349__$1;
(statearr_19366_19412[(2)] = true);

(statearr_19366_19412[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (3))){
var inst_19267 = (state_19349[(14)]);
var inst_19272 = inst_19267.cljs$lang$protocol_mask$partition0$;
var inst_19273 = (inst_19272 & (64));
var inst_19274 = inst_19267.cljs$core$ISeq$;
var inst_19275 = (inst_19273) || (inst_19274);
var state_19349__$1 = state_19349;
if(cljs.core.truth_(inst_19275)){
var statearr_19367_19413 = state_19349__$1;
(statearr_19367_19413[(1)] = (6));

} else {
var statearr_19368_19414 = state_19349__$1;
(statearr_19368_19414[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (12))){
var inst_19290 = (state_19349[(7)]);
var inst_19294 = (inst_19290 == null);
var inst_19295 = cljs.core.not(inst_19294);
var state_19349__$1 = state_19349;
if(inst_19295){
var statearr_19369_19415 = state_19349__$1;
(statearr_19369_19415[(1)] = (14));

} else {
var statearr_19370_19416 = state_19349__$1;
(statearr_19370_19416[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (2))){
var inst_19267 = (state_19349[(14)]);
var inst_19267__$1 = (state_19349[(2)]);
var inst_19269 = (inst_19267__$1 == null);
var inst_19270 = cljs.core.not(inst_19269);
var state_19349__$1 = (function (){var statearr_19371 = state_19349;
(statearr_19371[(14)] = inst_19267__$1);

return statearr_19371;
})();
if(inst_19270){
var statearr_19372_19417 = state_19349__$1;
(statearr_19372_19417[(1)] = (3));

} else {
var statearr_19373_19418 = state_19349__$1;
(statearr_19373_19418[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (23))){
var inst_19313 = (state_19349[(10)]);
var inst_19317 = (state_19349[(15)]);
var inst_19317__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_19318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19319 = devcards.core.run_card_tests(inst_19313);
var inst_19320 = [inst_19319,inst_19317__$1];
var inst_19321 = (new cljs.core.PersistentVector(null,2,(5),inst_19318,inst_19320,null));
var state_19349__$1 = (function (){var statearr_19374 = state_19349;
(statearr_19374[(15)] = inst_19317__$1);

return statearr_19374;
})();
return cljs.core.async.ioc_alts_BANG_(state_19349__$1,(26),inst_19321);
} else {
if((state_val_19350 === (19))){
var inst_19304 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
var statearr_19375_19419 = state_19349__$1;
(statearr_19375_19419[(2)] = inst_19304);

(statearr_19375_19419[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (11))){
var inst_19267 = (state_19349[(14)]);
var inst_19287 = (state_19349[(2)]);
var inst_19288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19287,cljs.core.cst$kw$tests);
var inst_19289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19287,cljs.core.cst$kw$callback);
var inst_19290 = inst_19267;
var state_19349__$1 = (function (){var statearr_19376 = state_19349;
(statearr_19376[(16)] = inst_19289);

(statearr_19376[(7)] = inst_19290);

(statearr_19376[(17)] = inst_19288);

return statearr_19376;
})();
var statearr_19377_19420 = state_19349__$1;
(statearr_19377_19420[(2)] = null);

(statearr_19377_19420[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (9))){
var inst_19267 = (state_19349[(14)]);
var inst_19284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19267);
var state_19349__$1 = state_19349;
var statearr_19378_19421 = state_19349__$1;
(statearr_19378_19421[(2)] = inst_19284);

(statearr_19378_19421[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (5))){
var inst_19282 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
if(cljs.core.truth_(inst_19282)){
var statearr_19379_19422 = state_19349__$1;
(statearr_19379_19422[(1)] = (9));

} else {
var statearr_19380_19423 = state_19349__$1;
(statearr_19380_19423[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (14))){
var inst_19290 = (state_19349[(7)]);
var inst_19297 = inst_19290.cljs$lang$protocol_mask$partition0$;
var inst_19298 = (inst_19297 & (64));
var inst_19299 = inst_19290.cljs$core$ISeq$;
var inst_19300 = (inst_19298) || (inst_19299);
var state_19349__$1 = state_19349;
if(cljs.core.truth_(inst_19300)){
var statearr_19381_19424 = state_19349__$1;
(statearr_19381_19424[(1)] = (17));

} else {
var statearr_19382_19425 = state_19349__$1;
(statearr_19382_19425[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (26))){
var inst_19317 = (state_19349[(15)]);
var inst_19323 = (state_19349[(2)]);
var inst_19324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19323,(0),null);
var inst_19325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19323,(1),null);
var inst_19326 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_19325,inst_19317);
var state_19349__$1 = (function (){var statearr_19383 = state_19349;
(statearr_19383[(9)] = inst_19324);

return statearr_19383;
})();
if(inst_19326){
var statearr_19384_19426 = state_19349__$1;
(statearr_19384_19426[(1)] = (27));

} else {
var statearr_19385_19427 = state_19349__$1;
(statearr_19385_19427[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (16))){
var inst_19307 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
if(cljs.core.truth_(inst_19307)){
var statearr_19386_19428 = state_19349__$1;
(statearr_19386_19428[(1)] = (20));

} else {
var statearr_19387_19429 = state_19349__$1;
(statearr_19387_19429[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (30))){
var inst_19341 = (state_19349[(2)]);
var inst_19290 = inst_19341;
var state_19349__$1 = (function (){var statearr_19388 = state_19349;
(statearr_19388[(7)] = inst_19290);

return statearr_19388;
})();
var statearr_19389_19430 = state_19349__$1;
(statearr_19389_19430[(2)] = null);

(statearr_19389_19430[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (10))){
var inst_19267 = (state_19349[(14)]);
var state_19349__$1 = state_19349;
var statearr_19390_19431 = state_19349__$1;
(statearr_19390_19431[(2)] = inst_19267);

(statearr_19390_19431[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (18))){
var state_19349__$1 = state_19349;
var statearr_19391_19432 = state_19349__$1;
(statearr_19391_19432[(2)] = false);

(statearr_19391_19432[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19350 === (8))){
var inst_19279 = (state_19349[(2)]);
var state_19349__$1 = state_19349;
var statearr_19392_19433 = state_19349__$1;
(statearr_19392_19433[(2)] = inst_19279);

(statearr_19392_19433[(1)] = (5));


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
});})(c__10081__auto__))
;
return ((function (switch__10014__auto__,c__10081__auto__){
return (function() {
var devcards$core$state_machine__10015__auto__ = null;
var devcards$core$state_machine__10015__auto____0 = (function (){
var statearr_19396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19396[(0)] = devcards$core$state_machine__10015__auto__);

(statearr_19396[(1)] = (1));

return statearr_19396;
});
var devcards$core$state_machine__10015__auto____1 = (function (state_19349){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_19349);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e19397){if((e19397 instanceof Object)){
var ex__10018__auto__ = e19397;
var statearr_19398_19434 = state_19349;
(statearr_19398_19434[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19349);

return cljs.core.cst$kw$recur;
} else {
throw e19397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__19435 = state_19349;
state_19349 = G__19435;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
devcards$core$state_machine__10015__auto__ = function(state_19349){
switch(arguments.length){
case 0:
return devcards$core$state_machine__10015__auto____0.call(this);
case 1:
return devcards$core$state_machine__10015__auto____1.call(this,state_19349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__10015__auto____0;
devcards$core$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__10015__auto____1;
return devcards$core$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_19399 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_19399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_19399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__))
);

return c__10081__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__13148__auto___19440 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__13148__auto___19440);
}

var seq__19436_19441 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__19437_19442 = null;
var count__19438_19443 = (0);
var i__19439_19444 = (0);
while(true){
if((i__19439_19444 < count__19438_19443)){
var property__13149__auto___19445 = chunk__19437_19442.cljs$core$IIndexed$_nth$arity$2(null,i__19439_19444);
if(cljs.core.truth_((base__13148__auto___19440[property__13149__auto___19445]))){
(devcards.core.TestDevcard.prototype[property__13149__auto___19445] = (base__13148__auto___19440[property__13149__auto___19445]));
} else {
}

var G__19446 = seq__19436_19441;
var G__19447 = chunk__19437_19442;
var G__19448 = count__19438_19443;
var G__19449 = (i__19439_19444 + (1));
seq__19436_19441 = G__19446;
chunk__19437_19442 = G__19447;
count__19438_19443 = G__19448;
i__19439_19444 = G__19449;
continue;
} else {
var temp__4425__auto___19450 = cljs.core.seq(seq__19436_19441);
if(temp__4425__auto___19450){
var seq__19436_19451__$1 = temp__4425__auto___19450;
if(cljs.core.chunked_seq_QMARK_(seq__19436_19451__$1)){
var c__5897__auto___19452 = cljs.core.chunk_first(seq__19436_19451__$1);
var G__19453 = cljs.core.chunk_rest(seq__19436_19451__$1);
var G__19454 = c__5897__auto___19452;
var G__19455 = cljs.core.count(c__5897__auto___19452);
var G__19456 = (0);
seq__19436_19441 = G__19453;
chunk__19437_19442 = G__19454;
count__19438_19443 = G__19455;
i__19439_19444 = G__19456;
continue;
} else {
var property__13149__auto___19457 = cljs.core.first(seq__19436_19451__$1);
if(cljs.core.truth_((base__13148__auto___19440[property__13149__auto___19457]))){
(devcards.core.TestDevcard.prototype[property__13149__auto___19457] = (base__13148__auto___19440[property__13149__auto___19457]));
} else {
}

var G__19458 = cljs.core.next(seq__19436_19451__$1);
var G__19459 = null;
var G__19460 = (0);
var G__19461 = (0);
seq__19436_19441 = G__19458;
chunk__19437_19442 = G__19459;
count__19438_19443 = G__19460;
i__19439_19444 = G__19461;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19468 = arguments.length;
var i__6153__auto___19469 = (0);
while(true){
if((i__6153__auto___19469 < len__6152__auto___19468)){
args__6159__auto__.push((arguments[i__6153__auto___19469]));

var G__19470 = (i__6153__auto___19469 + (1));
i__6153__auto___19469 = G__19470;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core19463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core19463 = (function (test_thunks,meta19464){
this.test_thunks = test_thunks;
this.meta19464 = meta19464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core19463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19465,meta19464__$1){
var self__ = this;
var _19465__$1 = this;
return (new devcards.core.t_devcards$core19463(self__.test_thunks,meta19464__$1));
});

devcards.core.t_devcards$core19463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19465){
var self__ = this;
var _19465__$1 = this;
return self__.meta19464;
});

devcards.core.t_devcards$core19463.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core19463.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__19466 = devcards.core.TestDevcard;
var G__19467 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__19466,G__19467);
});

devcards.core.t_devcards$core19463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta19464], null);
});

devcards.core.t_devcards$core19463.cljs$lang$type = true;

devcards.core.t_devcards$core19463.cljs$lang$ctorStr = "devcards.core/t_devcards$core19463";

devcards.core.t_devcards$core19463.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"devcards.core/t_devcards$core19463");
});

devcards.core.__GT_t_devcards$core19463 = (function devcards$core$__GT_t_devcards$core19463(test_thunks__$1,meta19464){
return (new devcards.core.t_devcards$core19463(test_thunks__$1,meta19464));
});

}

return (new devcards.core.t_devcards$core19463(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq19462){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19462));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__19475 = (function (){var attrs19476 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19476))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs19476], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19476)], null))));
})();
return React.renderToString(G__19475);
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
var G__19482 = (function (){var attrs19484 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19484))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs19484], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs19484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19484)], null))));
})();
var G__19483 = devcards.system.devcards_app_node();
return React.render(G__19482,G__19483);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__10081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10081__auto__){
return (function (){
var f__10082__auto__ = (function (){var switch__10014__auto__ = ((function (c__10081__auto__){
return (function (state_19514){
var state_val_19515 = (state_19514[(1)]);
if((state_val_19515 === (1))){
var inst_19505 = devcards.core.load_data_from_channel_BANG_();
var state_19514__$1 = state_19514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19514__$1,(2),inst_19505);
} else {
if((state_val_19515 === (2))){
var inst_19507 = (state_19514[(2)]);
var inst_19508 = cljs.core.async.timeout((100));
var state_19514__$1 = (function (){var statearr_19516 = state_19514;
(statearr_19516[(7)] = inst_19507);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19514__$1,(3),inst_19508);
} else {
if((state_val_19515 === (3))){
var inst_19510 = (state_19514[(2)]);
var inst_19511 = (function (){return ((function (inst_19510,state_val_19515,c__10081__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_19510,state_val_19515,c__10081__auto__))
})();
var inst_19512 = setTimeout(inst_19511,(0));
var state_19514__$1 = (function (){var statearr_19517 = state_19514;
(statearr_19517[(8)] = inst_19510);

return statearr_19517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19514__$1,inst_19512);
} else {
return null;
}
}
}
});})(c__10081__auto__))
;
return ((function (switch__10014__auto__,c__10081__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__10015__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__10015__auto____0 = (function (){
var statearr_19521 = [null,null,null,null,null,null,null,null,null];
(statearr_19521[(0)] = devcards$core$mount_namespace_$_state_machine__10015__auto__);

(statearr_19521[(1)] = (1));

return statearr_19521;
});
var devcards$core$mount_namespace_$_state_machine__10015__auto____1 = (function (state_19514){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_19514);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e19522){if((e19522 instanceof Object)){
var ex__10018__auto__ = e19522;
var statearr_19523_19525 = state_19514;
(statearr_19523_19525[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19514);

return cljs.core.cst$kw$recur;
} else {
throw e19522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__19526 = state_19514;
state_19514 = G__19526;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__10015__auto__ = function(state_19514){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__10015__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__10015__auto____1.call(this,state_19514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__10015__auto____0;
devcards$core$mount_namespace_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__10015__auto____1;
return devcards$core$mount_namespace_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_19524 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_19524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_19524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10083__auto__);
});})(c__10081__auto__))
);

return c__10081__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
