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
document.body.addEventListener("figwheel.js-reload",(function (p1__21445_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__21445_SHARP_.detail], null));
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
var map__21452 = c;
var map__21452__$1 = ((((!((map__21452 == null)))?((((map__21452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21452):map__21452);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,cljs.core.cst$kw$func);
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
var base__13148__auto___21464 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__21454 = "pre";
var G__21455 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__21456 = (function (){var G__21457 = "code";
var G__21458 = {"className": (function (){var or__5094__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__21459 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__21457,G__21458,G__21459);
})();
return React.createElement(G__21454,G__21455,G__21456);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__13148__auto___21464);
}

var seq__21460_21465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21461_21466 = null;
var count__21462_21467 = (0);
var i__21463_21468 = (0);
while(true){
if((i__21463_21468 < count__21462_21467)){
var property__13149__auto___21469 = chunk__21461_21466.cljs$core$IIndexed$_nth$arity$2(null,i__21463_21468);
if(cljs.core.truth_((base__13148__auto___21464[property__13149__auto___21469]))){
(devcards.core.CodeHighlight.prototype[property__13149__auto___21469] = (base__13148__auto___21464[property__13149__auto___21469]));
} else {
}

var G__21470 = seq__21460_21465;
var G__21471 = chunk__21461_21466;
var G__21472 = count__21462_21467;
var G__21473 = (i__21463_21468 + (1));
seq__21460_21465 = G__21470;
chunk__21461_21466 = G__21471;
count__21462_21467 = G__21472;
i__21463_21468 = G__21473;
continue;
} else {
var temp__4425__auto___21474 = cljs.core.seq(seq__21460_21465);
if(temp__4425__auto___21474){
var seq__21460_21475__$1 = temp__4425__auto___21474;
if(cljs.core.chunked_seq_QMARK_(seq__21460_21475__$1)){
var c__5897__auto___21476 = cljs.core.chunk_first(seq__21460_21475__$1);
var G__21477 = cljs.core.chunk_rest(seq__21460_21475__$1);
var G__21478 = c__5897__auto___21476;
var G__21479 = cljs.core.count(c__5897__auto___21476);
var G__21480 = (0);
seq__21460_21465 = G__21477;
chunk__21461_21466 = G__21478;
count__21462_21467 = G__21479;
i__21463_21468 = G__21480;
continue;
} else {
var property__13149__auto___21481 = cljs.core.first(seq__21460_21475__$1);
if(cljs.core.truth_((base__13148__auto___21464[property__13149__auto___21481]))){
(devcards.core.CodeHighlight.prototype[property__13149__auto___21481] = (base__13148__auto___21464[property__13149__auto___21481]));
} else {
}

var G__21482 = cljs.core.next(seq__21460_21475__$1);
var G__21483 = null;
var G__21484 = (0);
var G__21485 = (0);
seq__21460_21465 = G__21482;
chunk__21461_21466 = G__21483;
count__21462_21467 = G__21484;
i__21463_21468 = G__21485;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__21488 = devcards.core.CodeHighlight;
var G__21489 = {"code": code_str, "lang": lang};
return React.createElement(G__21488,G__21489);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__6007__auto__ = (function (){var G__21490 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21490) : cljs.core.atom.call(null,G__21490));
})();
var prefer_table__6008__auto__ = (function (){var G__21491 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21491) : cljs.core.atom.call(null,G__21491));
})();
var method_cache__6009__auto__ = (function (){var G__21492 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21492) : cljs.core.atom.call(null,G__21492));
})();
var cached_hierarchy__6010__auto__ = (function (){var G__21493 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21493) : cljs.core.atom.call(null,G__21493));
})();
var hierarchy__6011__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__21494){
var map__21495 = p__21494;
var map__21495__$1 = ((((!((map__21495 == null)))?((((map__21495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21495):map__21495);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__21497){
var map__21498 = p__21497;
var map__21498__$1 = ((((!((map__21498 == null)))?((((map__21498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21498):map__21498);
var block = map__21498__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,cljs.core.cst$kw$content);
var G__21500 = devcards.core.CodeHighlight;
var G__21501 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__21500,G__21501);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6159__auto__ = [];
var len__6152__auto___21507 = arguments.length;
var i__6153__auto___21508 = (0);
while(true){
if((i__6153__auto___21508 < len__6152__auto___21507)){
args__6159__auto__.push((arguments[i__6153__auto___21508]));

var G__21509 = (i__6153__auto___21508 + (1));
i__6153__auto___21508 = G__21509;
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
var attrs21503 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21503))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs21503], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21503))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21503)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__21504 = "div";
var G__21505 = {"style": {"color": "#a94442"}};
var G__21506 = sablono.interpreter.interpret(message);
return React.createElement(G__21504,G__21505,G__21506);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq21502){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21502));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__21516 = "div";
var G__21517 = {"className": (function (){var G__21519 = devcards.system.devcards_rendered_card_class;
var G__21519__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__21519),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__21519);
var G__21519__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__21519__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__21519__$1);
return G__21519__$2;
})()};
var G__21518 = sablono.interpreter.interpret(children);
return React.createElement(G__21516,G__21517,G__21518);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args21520 = [];
var len__6152__auto___21540 = arguments.length;
var i__6153__auto___21541 = (0);
while(true){
if((i__6153__auto___21541 < len__6152__auto___21540)){
args21520.push((arguments[i__6153__auto___21541]));

var G__21542 = (i__6153__auto___21541 + (1));
i__6153__auto___21541 = G__21542;
continue;
} else {
}
break;
}

var G__21522 = args21520.length;
switch (G__21522) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21520.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__21523 = card;
var map__21523__$1 = ((((!((map__21523 == null)))?((((map__21523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21523):map__21523);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__21525 = "div";
var G__21526 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__21527 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__21525,G__21526,G__21527);
} else {
var G__21529 = "div";
var G__21530 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__21531 = (function (){var attrs21528 = (cljs.core.truth_(path)?(function (){var G__21533 = "a";
var G__21534 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21533,G__21529,G__21530,map__21523,map__21523__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21533,G__21529,G__21530,map__21523,map__21523__$1,path,options))
)};
var G__21535 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__21536 = " ";
return React.createElement(G__21533,G__21534,G__21535,G__21536);
})():(function (){var attrs21537 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21537))?sablono.interpreter.attributes(attrs21537):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21537)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21528))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs21528], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21528))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21528)], null))));
})();
var G__21532 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__21529,G__21530,G__21531,G__21532);
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
var base__13148__auto___21554 = {"getInitialState": (function (){
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
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs21546 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21546))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs21546], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21546))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21546)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__21547 = "div";
var G__21548 = {"className": "com-rigsomelight-devcards-frameless"};
var G__21549 = sablono.interpreter.interpret(children);
return React.createElement(G__21547,G__21548,G__21549);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__13148__auto___21554);
}

var seq__21550_21555 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21551_21556 = null;
var count__21552_21557 = (0);
var i__21553_21558 = (0);
while(true){
if((i__21553_21558 < count__21552_21557)){
var property__13149__auto___21559 = chunk__21551_21556.cljs$core$IIndexed$_nth$arity$2(null,i__21553_21558);
if(cljs.core.truth_((base__13148__auto___21554[property__13149__auto___21559]))){
(devcards.core.DevcardBase.prototype[property__13149__auto___21559] = (base__13148__auto___21554[property__13149__auto___21559]));
} else {
}

var G__21560 = seq__21550_21555;
var G__21561 = chunk__21551_21556;
var G__21562 = count__21552_21557;
var G__21563 = (i__21553_21558 + (1));
seq__21550_21555 = G__21560;
chunk__21551_21556 = G__21561;
count__21552_21557 = G__21562;
i__21553_21558 = G__21563;
continue;
} else {
var temp__4425__auto___21564 = cljs.core.seq(seq__21550_21555);
if(temp__4425__auto___21564){
var seq__21550_21565__$1 = temp__4425__auto___21564;
if(cljs.core.chunked_seq_QMARK_(seq__21550_21565__$1)){
var c__5897__auto___21566 = cljs.core.chunk_first(seq__21550_21565__$1);
var G__21567 = cljs.core.chunk_rest(seq__21550_21565__$1);
var G__21568 = c__5897__auto___21566;
var G__21569 = cljs.core.count(c__5897__auto___21566);
var G__21570 = (0);
seq__21550_21555 = G__21567;
chunk__21551_21556 = G__21568;
count__21552_21557 = G__21569;
i__21553_21558 = G__21570;
continue;
} else {
var property__13149__auto___21571 = cljs.core.first(seq__21550_21565__$1);
if(cljs.core.truth_((base__13148__auto___21554[property__13149__auto___21571]))){
(devcards.core.DevcardBase.prototype[property__13149__auto___21571] = (base__13148__auto___21554[property__13149__auto___21571]));
} else {
}

var G__21572 = cljs.core.next(seq__21550_21565__$1);
var G__21573 = null;
var G__21574 = (0);
var G__21575 = (0);
seq__21550_21555 = G__21572;
chunk__21551_21556 = G__21573;
count__21552_21557 = G__21574;
i__21553_21558 = G__21575;
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
var G__21576 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21577 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__21576,G__21577) : node_fn.call(null,G__21576,G__21577));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__13148__auto___21584 = {"getInitialState": (function (){
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
var G__21578 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__21579 = "Card has not mounted DOM node.";
return React.DOM.div(G__21578,G__21579);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__13148__auto___21584);
}

var seq__21580_21585 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21581_21586 = null;
var count__21582_21587 = (0);
var i__21583_21588 = (0);
while(true){
if((i__21583_21588 < count__21582_21587)){
var property__13149__auto___21589 = chunk__21581_21586.cljs$core$IIndexed$_nth$arity$2(null,i__21583_21588);
if(cljs.core.truth_((base__13148__auto___21584[property__13149__auto___21589]))){
(devcards.core.DomComponent.prototype[property__13149__auto___21589] = (base__13148__auto___21584[property__13149__auto___21589]));
} else {
}

var G__21590 = seq__21580_21585;
var G__21591 = chunk__21581_21586;
var G__21592 = count__21582_21587;
var G__21593 = (i__21583_21588 + (1));
seq__21580_21585 = G__21590;
chunk__21581_21586 = G__21591;
count__21582_21587 = G__21592;
i__21583_21588 = G__21593;
continue;
} else {
var temp__4425__auto___21594 = cljs.core.seq(seq__21580_21585);
if(temp__4425__auto___21594){
var seq__21580_21595__$1 = temp__4425__auto___21594;
if(cljs.core.chunked_seq_QMARK_(seq__21580_21595__$1)){
var c__5897__auto___21596 = cljs.core.chunk_first(seq__21580_21595__$1);
var G__21597 = cljs.core.chunk_rest(seq__21580_21595__$1);
var G__21598 = c__5897__auto___21596;
var G__21599 = cljs.core.count(c__5897__auto___21596);
var G__21600 = (0);
seq__21580_21585 = G__21597;
chunk__21581_21586 = G__21598;
count__21582_21587 = G__21599;
i__21583_21588 = G__21600;
continue;
} else {
var property__13149__auto___21601 = cljs.core.first(seq__21580_21595__$1);
if(cljs.core.truth_((base__13148__auto___21584[property__13149__auto___21601]))){
(devcards.core.DomComponent.prototype[property__13149__auto___21601] = (base__13148__auto___21584[property__13149__auto___21601]));
} else {
}

var G__21602 = cljs.core.next(seq__21580_21595__$1);
var G__21603 = null;
var G__21604 = (0);
var G__21605 = (0);
seq__21580_21585 = G__21602;
chunk__21581_21586 = G__21603;
count__21582_21587 = G__21604;
i__21583_21588 = G__21605;
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
return (function (p1__21606_SHARP_){
return !(p1__21606_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__21615 = opts;
var map__21615__$1 = ((((!((map__21615 == null)))?((((map__21615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21615):map__21615);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.cst$kw$options);
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
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21615,map__21615__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__21607_SHARP_){
return devcards.core.booler_QMARK_(p1__21607_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__21615,map__21615__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__21639 = "div";
var G__21640 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__21641 = sablono.interpreter.interpret((function (){var G__21644 = "code";
var G__21645 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__21646 = (cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0))):null);
return React.createElement(G__21644,G__21645,G__21646);
})());
var G__21642 = (function (){var G__21647 = "span";
var G__21648 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__21649 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__21647,G__21648,G__21649);
})();
var G__21643 = (function (){var G__21650 = "span";
var G__21651 = {"style": {"flex": "1 100px"}};
var G__21652 = " Received: ";
var G__21653 = (function (){var attrs21638 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21638))?sablono.interpreter.attributes(attrs21638):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21638))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21638)], null))));
})();
return React.createElement(G__21650,G__21651,G__21652,G__21653);
})();
return React.createElement(G__21639,G__21640,G__21641,G__21642,G__21643);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__21667 = "div";
var G__21668 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__21669 = (function (){var attrs21666 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21666))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs21666], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21666))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21666)], null))));
})();
var G__21670 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__21673 = "div";
var G__21674 = null;
var G__21675 = (function (){var attrs21671 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21671))?sablono.interpreter.attributes(attrs21671):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21671))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21671)], null))));
})();
var G__21676 = ((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs21677 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21677))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs21677], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21677))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21677)], null))));
})()):null);
return React.createElement(G__21673,G__21674,G__21675,G__21676);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__21667,G__21668,G__21669,G__21670);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__21678_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__21678_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__21681 = devcards.core.DevcardBase;
var G__21682 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__21681,G__21682);
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

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k21684,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__21686 = (((k21684 instanceof cljs.core.Keyword))?k21684.fqn:null);
switch (G__21686) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21684,else__5711__auto__);

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

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21683){
var self__ = this;
var G__21683__$1 = this;
return (new cljs.core.RecordIter((0),G__21683__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__21683){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__21687 = cljs.core.keyword_identical_QMARK_;
var expr__21688 = k__5716__auto__;
if(cljs.core.truth_((pred__21687.cljs$core$IFn$_invoke$arity$2 ? pred__21687.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21688) : pred__21687.call(null,cljs.core.cst$kw$obj,expr__21688)))){
return (new devcards.core.IdentiyOptions(G__21683,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__21683),null));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__21683){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__21683,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__21685){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21685),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21685,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__21691){
var map__21694 = p__21691;
var map__21694__$1 = ((((!((map__21694 == null)))?((((map__21694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21694):map__21694);
var devcard_opts = map__21694__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__21694,map__21694__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__21694,map__21694__$1,devcard_opts,options))
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

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k21697,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__21699 = (((k21697 instanceof cljs.core.Keyword))?k21697.fqn:null);
switch (G__21699) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21697,else__5711__auto__);

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

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21696){
var self__ = this;
var G__21696__$1 = this;
return (new cljs.core.RecordIter((0),G__21696__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__21696){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__21700 = cljs.core.keyword_identical_QMARK_;
var expr__21701 = k__5716__auto__;
if(cljs.core.truth_((pred__21700.cljs$core$IFn$_invoke$arity$2 ? pred__21700.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21701) : pred__21700.call(null,cljs.core.cst$kw$obj,expr__21701)))){
return (new devcards.core.AtomLikeOptions(G__21696,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__21696),null));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__21696){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__21696,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__21698){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21698),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21698,cljs.core.cst$kw$obj),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k21707,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__21709 = (((k21707 instanceof cljs.core.Keyword))?k21707.fqn:null);
switch (G__21709) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21707,else__5711__auto__);

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

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21706){
var self__ = this;
var G__21706__$1 = this;
return (new cljs.core.RecordIter((0),G__21706__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__21706){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__21710 = cljs.core.keyword_identical_QMARK_;
var expr__21711 = k__5716__auto__;
if(cljs.core.truth_((pred__21710.cljs$core$IFn$_invoke$arity$2 ? pred__21710.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21711) : pred__21710.call(null,cljs.core.cst$kw$obj,expr__21711)))){
return (new devcards.core.EdnLikeOptions(G__21706,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__21706),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__21706){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__21706,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__21708){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21708),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21708,cljs.core.cst$kw$obj),null));
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
if((function (){var G__21725 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__21725 == null))){
if((false) || (G__21725.devcards$core$IDevcard$)){
return true;
} else {
if((!G__21725.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21725);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__21728 = devcards.core.DomComponent;
var G__21729 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__21728,G__21729);
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
var map__21733 = (function (){var G__21734 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21734) : cljs.core.deref.call(null,G__21734));
})();
var map__21733__$1 = ((((!((map__21733 == null)))?((((map__21733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21733):map__21733);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21737 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21737) : cljs.core.deref.call(null,G__21737));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21739 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21739) : cljs.core.deref.call(null,G__21739));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21744 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21744__$1 = ((((!((map__21744 == null)))?((((map__21744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21744):map__21744);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21746_21748 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21747_21749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21746_21748,G__21747_21749) : cljs.core.reset_BANG_.call(null,G__21746_21748,G__21747_21749));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21754 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21754__$1 = ((((!((map__21754 == null)))?((((map__21754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21754):map__21754);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21756_21758 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21757_21759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21756_21758,G__21757_21759) : cljs.core.reset_BANG_.call(null,G__21756_21758,G__21757_21759));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21764 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21764__$1 = ((((!((map__21764 == null)))?((((map__21764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21764):map__21764);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21766_21768 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21767_21769 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21766_21768,G__21767_21769) : cljs.core.reset_BANG_.call(null,G__21766_21768,G__21767_21769));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__21824 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__21825 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21825) : cljs.core.atom.call(null,G__21825));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__21826 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21826) : cljs.core.deref.call(null,G__21826));
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
return (function (p__21827){
var map__21828 = p__21827;
var map__21828__$1 = ((((!((map__21828 == null)))?((((map__21828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21828):map__21828);
var ha = map__21828__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.cst$kw$ignore_DASH_click);
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
var G__21830 = "div";
var G__21831 = {"style": {"display": (cljs.core.truth_((function (){var or__5094__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__21832 = (function (){var action = ((function (G__21830,G__21831,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__21830,G__21831,this$))
;
return sablono.interpreter.interpret((function (){var G__21838 = "button";
var G__21839 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__21840 = (function (){var G__21841 = "span";
var G__21842 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__21843 = "";
return React.createElement(G__21841,G__21842,G__21843);
})();
return React.createElement(G__21838,G__21839,G__21840);
})());
})();
var G__21833 = (function (){var action = ((function (G__21830,G__21831,G__21832,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21844 = data_atom;
var G__21845 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21844,G__21845) : cljs.core.reset_BANG_.call(null,G__21844,G__21845));
});})(G__21830,G__21831,G__21832,this$))
;
return sablono.interpreter.interpret((function (){var G__21848 = "button";
var G__21849 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__21850 = (function (){var G__21851 = "span";
var G__21852 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__21853 = "";
return React.createElement(G__21851,G__21852,G__21853);
})();
return React.createElement(G__21848,G__21849,G__21850);
})());
})();
var G__21834 = (function (){var action = ((function (G__21830,G__21831,G__21832,G__21833,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__21830,G__21831,G__21832,G__21833,this$))
;
return sablono.interpreter.interpret((function (){var G__21856 = "button";
var G__21857 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__21858 = (function (){var G__21859 = "span";
var G__21860 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__21861 = "";
return React.createElement(G__21859,G__21860,G__21861);
})();
return React.createElement(G__21856,G__21857,G__21858);
})());
})();
var G__21835 = (function (){var listener = ((function (G__21830,G__21831,G__21832,G__21833,G__21834,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__21830,G__21831,G__21832,G__21833,G__21834,this$))
;
return sablono.interpreter.interpret((function (){var G__21868 = "button";
var G__21869 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__21870 = (function (){var G__21873 = "span";
var G__21874 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__21873,G__21874);
})();
var G__21871 = (function (){var G__21875 = "span";
var G__21876 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__21875,G__21876);
})();
var G__21872 = (function (){var G__21877 = "span";
var G__21878 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__21877,G__21878);
})();
return React.createElement(G__21868,G__21869,G__21870,G__21871,G__21872);
})());
})();
return React.createElement(G__21830,G__21831,G__21832,G__21833,G__21834,G__21835);
} else {
return null;
}
})};
return React.createClass(G__21824);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__21881 = devcards.core.HistoryComponent;
var G__21882 = {"data_atom": data_atom};
return React.createElement(G__21881,G__21882);
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
var _STAR_current_env_STAR_21884 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_21884;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__6007__auto__ = (function (){var G__21885 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21885) : cljs.core.atom.call(null,G__21885));
})();
var prefer_table__6008__auto__ = (function (){var G__21886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21886) : cljs.core.atom.call(null,G__21886));
})();
var method_cache__6009__auto__ = (function (){var G__21887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21887) : cljs.core.atom.call(null,G__21887));
})();
var cached_hierarchy__6010__auto__ = (function (){var G__21888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21888) : cljs.core.atom.call(null,G__21888));
})();
var hierarchy__6011__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21889 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21889))?sablono.interpreter.attributes(attrs21889):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21889))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21889)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21890,body){
var map__21898 = p__21890;
var map__21898__$1 = ((((!((map__21898 == null)))?((((map__21898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21898):map__21898);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21898__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21901 = "div";
var G__21902 = null;
var G__21903 = (function (){var attrs21900 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21900))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21900], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21900))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21900)], null))));
})();
var G__21904 = sablono.interpreter.interpret(body);
return React.createElement(G__21901,G__21902,G__21903,G__21904);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21905){
var map__21910 = p__21905;
var map__21910__$1 = ((((!((map__21910 == null)))?((((map__21910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21910):map__21910);
var m = map__21910__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21910__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__21912 = devcards.core.CodeHighlight;
var G__21913 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__21912,G__21913);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__21917 = "div";
var G__21918 = null;
var G__21919 = React.createElement("strong",null,"Error: ");
var G__21920 = (function (){var attrs21916 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21916))?sablono.interpreter.attributes(attrs21916):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21916))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21916)], null))));
})();
return React.createElement(G__21917,G__21918,G__21919,G__21920);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21921 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21921))?sablono.interpreter.attributes(attrs21921):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21921))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21921)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21922){
var map__21923 = p__21922;
var map__21923__$1 = ((((!((map__21923 == null)))?((((map__21923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21923):map__21923);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21925 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21923,map__21923__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21923,map__21923__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21925))?sablono.interpreter.attributes(attrs21925):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21925))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21925)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21927 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21927) : cljs.test.report.call(null,G__21927));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21932 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21933,t){
var map__21934 = p__21933;
var map__21934__$1 = ((((!((map__21934 == null)))?((((map__21934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21934):map__21934);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21932))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21932], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21932)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__21979){
var map__21980 = p__21979;
var map__21980__$1 = ((((!((map__21980 == null)))?((((map__21980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21980):map__21980);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21980__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__21978 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__21978__$1 = ((((!((map__21978 == null)))?((((map__21978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21978):map__21978);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21978__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21978__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21978__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__21983 = "div";
var G__21984 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__21985 = (function (){var G__21987 = "div";
var G__21988 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__21989 = (function (){var G__21993 = "a";
var G__21994 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21993,G__21987,G__21988,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21993,G__21987,G__21988,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
)};
var G__21995 = (cljs.core.truth_(path)?sablono.interpreter.interpret([cljs.core.str(cljs.core.name(cljs.core.last(path)))].join('')):null);
return React.createElement(G__21993,G__21994,G__21995);
})();
var G__21990 = (function (){var G__21996 = "button";
var G__21997 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__21996,G__21987,G__21988,G__21989,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__21996,G__21987,G__21988,G__21989,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__21998 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__21996,G__21997,G__21998);
})();
var G__21991 = ((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret((function (){var G__22002 = "button";
var G__22003 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__22002,G__21987,G__21988,G__21989,G__21990,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__22002,G__21987,G__21988,G__21989,G__21990,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (p__22005){
var map__22006 = p__22005;
var map__22006__$1 = ((((!((map__22006 == null)))?((((map__22006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22006):map__22006);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22006__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__22002,G__21987,G__21988,G__21989,G__21990,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
});
});})(G__22002,G__21987,G__21988,G__21989,G__21990,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__22004 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__22002,G__22003,G__22004);
})()));
var G__21992 = ((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret((function (){var G__22011 = "button";
var G__22012 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__22011,G__21987,G__21988,G__21989,G__21990,G__21991,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__22011,G__21987,G__21988,G__21989,G__21990,G__21991,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1){
return (function (p__22014){
var map__22015 = p__22014;
var map__22015__$1 = ((((!((map__22015 == null)))?((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22015):map__22015);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22015__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__22011,G__21987,G__21988,G__21989,G__21990,G__21991,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
});
});})(G__22011,G__21987,G__21988,G__21989,G__21990,G__21991,G__21983,G__21984,error_QMARK_,tests,some_tests,total_tests,map__21978,map__21978__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__22013 = sablono.interpreter.interpret(pass);
return React.createElement(G__22011,G__22012,G__22013);
})()));
return React.createElement(G__21987,G__21988,G__21989,G__21990,G__21991,G__21992);
})();
var G__21986 = (function (){var G__22017 = "div";
var G__22018 = {"className": devcards.system.devcards_rendered_card_class};
var G__22019 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__5094__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__22017,G__22018,G__22019);
})();
return React.createElement(G__21983,G__21984,G__21985,G__21986);
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
return (function (state_22106){
var state_val_22107 = (state_22106[(1)]);
if((state_val_22107 === (7))){
var state_22106__$1 = state_22106;
var statearr_22108_22157 = state_22106__$1;
(statearr_22108_22157[(2)] = false);

(statearr_22108_22157[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (20))){
var inst_22047 = (state_22106[(7)]);
var inst_22066 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22047);
var state_22106__$1 = state_22106;
var statearr_22109_22158 = state_22106__$1;
(statearr_22109_22158[(2)] = inst_22066);

(statearr_22109_22158[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (27))){
var inst_22081 = (state_22106[(8)]);
var inst_22071 = (state_22106[(9)]);
var inst_22085 = (inst_22071.cljs$core$IFn$_invoke$arity$1 ? inst_22071.cljs$core$IFn$_invoke$arity$1(inst_22081) : inst_22071.call(null,inst_22081));
var state_22106__$1 = state_22106;
var statearr_22110_22159 = state_22106__$1;
(statearr_22110_22159[(2)] = inst_22085);

(statearr_22110_22159[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (1))){
var state_22106__$1 = state_22106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22106__$1,(2),devcards.core.test_channel);
} else {
if((state_val_22107 === (24))){
var state_22106__$1 = state_22106;
var statearr_22111_22160 = state_22106__$1;
(statearr_22111_22160[(2)] = null);

(statearr_22111_22160[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (4))){
var state_22106__$1 = state_22106;
var statearr_22112_22161 = state_22106__$1;
(statearr_22112_22161[(2)] = false);

(statearr_22112_22161[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (15))){
var state_22106__$1 = state_22106;
var statearr_22113_22162 = state_22106__$1;
(statearr_22113_22162[(2)] = false);

(statearr_22113_22162[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (21))){
var inst_22047 = (state_22106[(7)]);
var state_22106__$1 = state_22106;
var statearr_22114_22163 = state_22106__$1;
(statearr_22114_22163[(2)] = inst_22047);

(statearr_22114_22163[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (13))){
var inst_22104 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22106__$1,inst_22104);
} else {
if((state_val_22107 === (22))){
var inst_22070 = (state_22106[(10)]);
var inst_22069 = (state_22106[(2)]);
var inst_22070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22069,cljs.core.cst$kw$tests);
var inst_22071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22069,cljs.core.cst$kw$callback);
var state_22106__$1 = (function (){var statearr_22115 = state_22106;
(statearr_22115[(9)] = inst_22071);

(statearr_22115[(10)] = inst_22070__$1);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22070__$1)){
var statearr_22116_22164 = state_22106__$1;
(statearr_22116_22164[(1)] = (23));

} else {
var statearr_22117_22165 = state_22106__$1;
(statearr_22117_22165[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (29))){
var inst_22095 = (state_22106[(2)]);
var inst_22096 = cljs.test.clear_env_BANG_();
var state_22106__$1 = (function (){var statearr_22118 = state_22106;
(statearr_22118[(11)] = inst_22095);

(statearr_22118[(12)] = inst_22096);

return statearr_22118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22106__$1,(30),devcards.core.test_channel);
} else {
if((state_val_22107 === (6))){
var state_22106__$1 = state_22106;
var statearr_22119_22166 = state_22106__$1;
(statearr_22119_22166[(2)] = true);

(statearr_22119_22166[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (28))){
var inst_22071 = (state_22106[(9)]);
var inst_22087 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_22088 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_22089 = cljs.core.PersistentHashMap.fromArrays(inst_22087,inst_22088);
var inst_22090 = devcards.core.collect_test(inst_22089);
var inst_22091 = cljs.test.get_current_env();
var inst_22092 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_22091,cljs.core.cst$kw$error,"Execution timed out!");
var inst_22093 = (inst_22071.cljs$core$IFn$_invoke$arity$1 ? inst_22071.cljs$core$IFn$_invoke$arity$1(inst_22092) : inst_22071.call(null,inst_22092));
var state_22106__$1 = (function (){var statearr_22120 = state_22106;
(statearr_22120[(13)] = inst_22090);

return statearr_22120;
})();
var statearr_22121_22167 = state_22106__$1;
(statearr_22121_22167[(2)] = inst_22093);

(statearr_22121_22167[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (25))){
var inst_22102 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22122_22168 = state_22106__$1;
(statearr_22122_22168[(2)] = inst_22102);

(statearr_22122_22168[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (17))){
var state_22106__$1 = state_22106;
var statearr_22123_22169 = state_22106__$1;
(statearr_22123_22169[(2)] = true);

(statearr_22123_22169[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (3))){
var inst_22024 = (state_22106[(14)]);
var inst_22029 = inst_22024.cljs$lang$protocol_mask$partition0$;
var inst_22030 = (inst_22029 & (64));
var inst_22031 = inst_22024.cljs$core$ISeq$;
var inst_22032 = (inst_22030) || (inst_22031);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22032)){
var statearr_22124_22170 = state_22106__$1;
(statearr_22124_22170[(1)] = (6));

} else {
var statearr_22125_22171 = state_22106__$1;
(statearr_22125_22171[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (12))){
var inst_22047 = (state_22106[(7)]);
var inst_22051 = (inst_22047 == null);
var inst_22052 = cljs.core.not(inst_22051);
var state_22106__$1 = state_22106;
if(inst_22052){
var statearr_22126_22172 = state_22106__$1;
(statearr_22126_22172[(1)] = (14));

} else {
var statearr_22127_22173 = state_22106__$1;
(statearr_22127_22173[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (2))){
var inst_22024 = (state_22106[(14)]);
var inst_22024__$1 = (state_22106[(2)]);
var inst_22026 = (inst_22024__$1 == null);
var inst_22027 = cljs.core.not(inst_22026);
var state_22106__$1 = (function (){var statearr_22128 = state_22106;
(statearr_22128[(14)] = inst_22024__$1);

return statearr_22128;
})();
if(inst_22027){
var statearr_22129_22174 = state_22106__$1;
(statearr_22129_22174[(1)] = (3));

} else {
var statearr_22130_22175 = state_22106__$1;
(statearr_22130_22175[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (23))){
var inst_22074 = (state_22106[(15)]);
var inst_22070 = (state_22106[(10)]);
var inst_22074__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_22075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22076 = devcards.core.run_card_tests(inst_22070);
var inst_22077 = [inst_22076,inst_22074__$1];
var inst_22078 = (new cljs.core.PersistentVector(null,2,(5),inst_22075,inst_22077,null));
var state_22106__$1 = (function (){var statearr_22131 = state_22106;
(statearr_22131[(15)] = inst_22074__$1);

return statearr_22131;
})();
return cljs.core.async.ioc_alts_BANG_(state_22106__$1,(26),inst_22078);
} else {
if((state_val_22107 === (19))){
var inst_22061 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22132_22176 = state_22106__$1;
(statearr_22132_22176[(2)] = inst_22061);

(statearr_22132_22176[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (11))){
var inst_22024 = (state_22106[(14)]);
var inst_22044 = (state_22106[(2)]);
var inst_22045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22044,cljs.core.cst$kw$tests);
var inst_22046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22044,cljs.core.cst$kw$callback);
var inst_22047 = inst_22024;
var state_22106__$1 = (function (){var statearr_22133 = state_22106;
(statearr_22133[(7)] = inst_22047);

(statearr_22133[(16)] = inst_22046);

(statearr_22133[(17)] = inst_22045);

return statearr_22133;
})();
var statearr_22134_22177 = state_22106__$1;
(statearr_22134_22177[(2)] = null);

(statearr_22134_22177[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (9))){
var inst_22024 = (state_22106[(14)]);
var inst_22041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22024);
var state_22106__$1 = state_22106;
var statearr_22135_22178 = state_22106__$1;
(statearr_22135_22178[(2)] = inst_22041);

(statearr_22135_22178[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (5))){
var inst_22039 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22039)){
var statearr_22136_22179 = state_22106__$1;
(statearr_22136_22179[(1)] = (9));

} else {
var statearr_22137_22180 = state_22106__$1;
(statearr_22137_22180[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (14))){
var inst_22047 = (state_22106[(7)]);
var inst_22054 = inst_22047.cljs$lang$protocol_mask$partition0$;
var inst_22055 = (inst_22054 & (64));
var inst_22056 = inst_22047.cljs$core$ISeq$;
var inst_22057 = (inst_22055) || (inst_22056);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22057)){
var statearr_22138_22181 = state_22106__$1;
(statearr_22138_22181[(1)] = (17));

} else {
var statearr_22139_22182 = state_22106__$1;
(statearr_22139_22182[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (26))){
var inst_22074 = (state_22106[(15)]);
var inst_22080 = (state_22106[(2)]);
var inst_22081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22080,(0),null);
var inst_22082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22080,(1),null);
var inst_22083 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_22082,inst_22074);
var state_22106__$1 = (function (){var statearr_22140 = state_22106;
(statearr_22140[(8)] = inst_22081);

return statearr_22140;
})();
if(inst_22083){
var statearr_22141_22183 = state_22106__$1;
(statearr_22141_22183[(1)] = (27));

} else {
var statearr_22142_22184 = state_22106__$1;
(statearr_22142_22184[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (16))){
var inst_22064 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22064)){
var statearr_22143_22185 = state_22106__$1;
(statearr_22143_22185[(1)] = (20));

} else {
var statearr_22144_22186 = state_22106__$1;
(statearr_22144_22186[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (30))){
var inst_22098 = (state_22106[(2)]);
var inst_22047 = inst_22098;
var state_22106__$1 = (function (){var statearr_22145 = state_22106;
(statearr_22145[(7)] = inst_22047);

return statearr_22145;
})();
var statearr_22146_22187 = state_22106__$1;
(statearr_22146_22187[(2)] = null);

(statearr_22146_22187[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (10))){
var inst_22024 = (state_22106[(14)]);
var state_22106__$1 = state_22106;
var statearr_22147_22188 = state_22106__$1;
(statearr_22147_22188[(2)] = inst_22024);

(statearr_22147_22188[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (18))){
var state_22106__$1 = state_22106;
var statearr_22148_22189 = state_22106__$1;
(statearr_22148_22189[(2)] = false);

(statearr_22148_22189[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22107 === (8))){
var inst_22036 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22149_22190 = state_22106__$1;
(statearr_22149_22190[(2)] = inst_22036);

(statearr_22149_22190[(1)] = (5));


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
var statearr_22153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22153[(0)] = devcards$core$state_machine__10015__auto__);

(statearr_22153[(1)] = (1));

return statearr_22153;
});
var devcards$core$state_machine__10015__auto____1 = (function (state_22106){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22106);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22154){if((e22154 instanceof Object)){
var ex__10018__auto__ = e22154;
var statearr_22155_22191 = state_22106;
(statearr_22155_22191[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22106);

return cljs.core.cst$kw$recur;
} else {
throw e22154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22192 = state_22106;
state_22106 = G__22192;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
devcards$core$state_machine__10015__auto__ = function(state_22106){
switch(arguments.length){
case 0:
return devcards$core$state_machine__10015__auto____0.call(this);
case 1:
return devcards$core$state_machine__10015__auto____1.call(this,state_22106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__10015__auto____0;
devcards$core$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__10015__auto____1;
return devcards$core$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_22156 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_22156;
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
var base__13148__auto___22197 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__13148__auto___22197);
}

var seq__22193_22198 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22194_22199 = null;
var count__22195_22200 = (0);
var i__22196_22201 = (0);
while(true){
if((i__22196_22201 < count__22195_22200)){
var property__13149__auto___22202 = chunk__22194_22199.cljs$core$IIndexed$_nth$arity$2(null,i__22196_22201);
if(cljs.core.truth_((base__13148__auto___22197[property__13149__auto___22202]))){
(devcards.core.TestDevcard.prototype[property__13149__auto___22202] = (base__13148__auto___22197[property__13149__auto___22202]));
} else {
}

var G__22203 = seq__22193_22198;
var G__22204 = chunk__22194_22199;
var G__22205 = count__22195_22200;
var G__22206 = (i__22196_22201 + (1));
seq__22193_22198 = G__22203;
chunk__22194_22199 = G__22204;
count__22195_22200 = G__22205;
i__22196_22201 = G__22206;
continue;
} else {
var temp__4425__auto___22207 = cljs.core.seq(seq__22193_22198);
if(temp__4425__auto___22207){
var seq__22193_22208__$1 = temp__4425__auto___22207;
if(cljs.core.chunked_seq_QMARK_(seq__22193_22208__$1)){
var c__5897__auto___22209 = cljs.core.chunk_first(seq__22193_22208__$1);
var G__22210 = cljs.core.chunk_rest(seq__22193_22208__$1);
var G__22211 = c__5897__auto___22209;
var G__22212 = cljs.core.count(c__5897__auto___22209);
var G__22213 = (0);
seq__22193_22198 = G__22210;
chunk__22194_22199 = G__22211;
count__22195_22200 = G__22212;
i__22196_22201 = G__22213;
continue;
} else {
var property__13149__auto___22214 = cljs.core.first(seq__22193_22208__$1);
if(cljs.core.truth_((base__13148__auto___22197[property__13149__auto___22214]))){
(devcards.core.TestDevcard.prototype[property__13149__auto___22214] = (base__13148__auto___22197[property__13149__auto___22214]));
} else {
}

var G__22215 = cljs.core.next(seq__22193_22208__$1);
var G__22216 = null;
var G__22217 = (0);
var G__22218 = (0);
seq__22193_22198 = G__22215;
chunk__22194_22199 = G__22216;
count__22195_22200 = G__22217;
i__22196_22201 = G__22218;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6159__auto__ = [];
var len__6152__auto___22225 = arguments.length;
var i__6153__auto___22226 = (0);
while(true){
if((i__6153__auto___22226 < len__6152__auto___22225)){
args__6159__auto__.push((arguments[i__6153__auto___22226]));

var G__22227 = (i__6153__auto___22226 + (1));
i__6153__auto___22226 = G__22227;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core22220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core22220 = (function (test_thunks,meta22221){
this.test_thunks = test_thunks;
this.meta22221 = meta22221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core22220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22222,meta22221__$1){
var self__ = this;
var _22222__$1 = this;
return (new devcards.core.t_devcards$core22220(self__.test_thunks,meta22221__$1));
});

devcards.core.t_devcards$core22220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22222){
var self__ = this;
var _22222__$1 = this;
return self__.meta22221;
});

devcards.core.t_devcards$core22220.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core22220.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__22223 = devcards.core.TestDevcard;
var G__22224 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__22223,G__22224);
});

devcards.core.t_devcards$core22220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta22221], null);
});

devcards.core.t_devcards$core22220.cljs$lang$type = true;

devcards.core.t_devcards$core22220.cljs$lang$ctorStr = "devcards.core/t_devcards$core22220";

devcards.core.t_devcards$core22220.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"devcards.core/t_devcards$core22220");
});

devcards.core.__GT_t_devcards$core22220 = (function devcards$core$__GT_t_devcards$core22220(test_thunks__$1,meta22221){
return (new devcards.core.t_devcards$core22220(test_thunks__$1,meta22221));
});

}

return (new devcards.core.t_devcards$core22220(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq22219){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22219));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__22232 = (function (){var attrs22233 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22233))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22233], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22233))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22233)], null))));
})();
return React.renderToString(G__22232);
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
var G__22239 = (function (){var attrs22241 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22241))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22241], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22241))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22241)], null))));
})();
var G__22240 = devcards.system.devcards_app_node();
return React.render(G__22239,G__22240);
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
return (function (state_22271){
var state_val_22272 = (state_22271[(1)]);
if((state_val_22272 === (1))){
var inst_22262 = devcards.core.load_data_from_channel_BANG_();
var state_22271__$1 = state_22271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22271__$1,(2),inst_22262);
} else {
if((state_val_22272 === (2))){
var inst_22264 = (state_22271[(2)]);
var inst_22265 = cljs.core.async.timeout((100));
var state_22271__$1 = (function (){var statearr_22273 = state_22271;
(statearr_22273[(7)] = inst_22264);

return statearr_22273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22271__$1,(3),inst_22265);
} else {
if((state_val_22272 === (3))){
var inst_22267 = (state_22271[(2)]);
var inst_22268 = (function (){return ((function (inst_22267,state_val_22272,c__10081__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_22267,state_val_22272,c__10081__auto__))
})();
var inst_22269 = setTimeout(inst_22268,(0));
var state_22271__$1 = (function (){var statearr_22274 = state_22271;
(statearr_22274[(8)] = inst_22267);

return statearr_22274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22271__$1,inst_22269);
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
var statearr_22278 = [null,null,null,null,null,null,null,null,null];
(statearr_22278[(0)] = devcards$core$mount_namespace_$_state_machine__10015__auto__);

(statearr_22278[(1)] = (1));

return statearr_22278;
});
var devcards$core$mount_namespace_$_state_machine__10015__auto____1 = (function (state_22271){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__(state_22271);
if(cljs.core.keyword_identical_QMARK_(result__10017__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e22279){if((e22279 instanceof Object)){
var ex__10018__auto__ = e22279;
var statearr_22280_22282 = state_22271;
(statearr_22280_22282[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22271);

return cljs.core.cst$kw$recur;
} else {
throw e22279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10016__auto__,cljs.core.cst$kw$recur)){
var G__22283 = state_22271;
state_22271 = G__22283;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__10015__auto__ = function(state_22271){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__10015__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__10015__auto____1.call(this,state_22271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__10015__auto____0;
devcards$core$mount_namespace_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__10015__auto____1;
return devcards$core$mount_namespace_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10081__auto__))
})();
var state__10083__auto__ = (function (){var statearr_22281 = (f__10082__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10082__auto__.cljs$core$IFn$_invoke$arity$0() : f__10082__auto__.call(null));
(statearr_22281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10081__auto__);

return statearr_22281;
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
