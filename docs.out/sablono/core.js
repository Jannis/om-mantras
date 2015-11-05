// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17715__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17714 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17714,(0),null);
var body = cljs.core.nthnext.call(null,vec__17714,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17716__i = 0, G__17716__a = new Array(arguments.length -  0);
while (G__17716__i < G__17716__a.length) {G__17716__a[G__17716__i] = arguments[G__17716__i + 0]; ++G__17716__i;}
  args = new cljs.core.IndexedSeq(G__17716__a,0);
} 
return G__17715__delegate.call(this,args);};
G__17715.cljs$lang$maxFixedArity = 0;
G__17715.cljs$lang$applyTo = (function (arglist__17717){
var args = cljs.core.seq(arglist__17717);
return G__17715__delegate(args);
});
G__17715.cljs$core$IFn$_invoke$arity$variadic = G__17715__delegate;
return G__17715;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17722(s__17723){
return (new cljs.core.LazySeq(null,(function (){
var s__17723__$1 = s__17723;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17723__$1);
if(temp__4425__auto__){
var s__17723__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17723__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17723__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17725 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17724 = (0);
while(true){
if((i__17724 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17724);
cljs.core.chunk_append.call(null,b__17725,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17726 = (i__17724 + (1));
i__17724 = G__17726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17725),sablono$core$update_arglists_$_iter__17722.call(null,cljs.core.chunk_rest.call(null,s__17723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17725),null);
}
} else {
var args = cljs.core.first.call(null,s__17723__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17722.call(null,cljs.core.rest.call(null,s__17723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17732 = arguments.length;
var i__6153__auto___17733 = (0);
while(true){
if((i__6153__auto___17733 < len__6152__auto___17732)){
args__6159__auto__.push((arguments[i__6153__auto___17733]));

var G__17734 = (i__6153__auto___17733 + (1));
i__6153__auto___17733 = G__17734;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17728(s__17729){
return (new cljs.core.LazySeq(null,(function (){
var s__17729__$1 = s__17729;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17729__$1);
if(temp__4425__auto__){
var s__17729__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17729__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17729__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17731 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17730 = (0);
while(true){
if((i__17730 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17730);
cljs.core.chunk_append.call(null,b__17731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17735 = (i__17730 + (1));
i__17730 = G__17735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17731),sablono$core$iter__17728.call(null,cljs.core.chunk_rest.call(null,s__17729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17731),null);
}
} else {
var style = cljs.core.first.call(null,s__17729__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17728.call(null,cljs.core.rest.call(null,s__17729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17727){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17727));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17736 = (function sablono$core$link_to17736(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17739 = arguments.length;
var i__6153__auto___17740 = (0);
while(true){
if((i__6153__auto___17740 < len__6152__auto___17739)){
args__6159__auto__.push((arguments[i__6153__auto___17740]));

var G__17741 = (i__6153__auto___17740 + (1));
i__6153__auto___17740 = G__17741;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17736.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17736.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17736.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17736.cljs$lang$applyTo = (function (seq17737){
var G__17738 = cljs.core.first.call(null,seq17737);
var seq17737__$1 = cljs.core.next.call(null,seq17737);
return sablono.core.link_to17736.cljs$core$IFn$_invoke$arity$variadic(G__17738,seq17737__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17736);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17742 = (function sablono$core$mail_to17742(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17747 = arguments.length;
var i__6153__auto___17748 = (0);
while(true){
if((i__6153__auto___17748 < len__6152__auto___17747)){
args__6159__auto__.push((arguments[i__6153__auto___17748]));

var G__17749 = (i__6153__auto___17748 + (1));
i__6153__auto___17748 = G__17749;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17742.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17742.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17745){
var vec__17746 = p__17745;
var content = cljs.core.nth.call(null,vec__17746,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17742.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17742.cljs$lang$applyTo = (function (seq17743){
var G__17744 = cljs.core.first.call(null,seq17743);
var seq17743__$1 = cljs.core.next.call(null,seq17743);
return sablono.core.mail_to17742.cljs$core$IFn$_invoke$arity$variadic(G__17744,seq17743__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17742);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17750 = (function sablono$core$unordered_list17750(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17750_$_iter__17755(s__17756){
return (new cljs.core.LazySeq(null,(function (){
var s__17756__$1 = s__17756;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17756__$1);
if(temp__4425__auto__){
var s__17756__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17756__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17756__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17758 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17757 = (0);
while(true){
if((i__17757 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17757);
cljs.core.chunk_append.call(null,b__17758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17759 = (i__17757 + (1));
i__17757 = G__17759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17758),sablono$core$unordered_list17750_$_iter__17755.call(null,cljs.core.chunk_rest.call(null,s__17756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17758),null);
}
} else {
var x = cljs.core.first.call(null,s__17756__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17750_$_iter__17755.call(null,cljs.core.rest.call(null,s__17756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17750);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17760 = (function sablono$core$ordered_list17760(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17760_$_iter__17765(s__17766){
return (new cljs.core.LazySeq(null,(function (){
var s__17766__$1 = s__17766;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17766__$1);
if(temp__4425__auto__){
var s__17766__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17766__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17766__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17768 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17767 = (0);
while(true){
if((i__17767 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17767);
cljs.core.chunk_append.call(null,b__17768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17769 = (i__17767 + (1));
i__17767 = G__17769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17768),sablono$core$ordered_list17760_$_iter__17765.call(null,cljs.core.chunk_rest.call(null,s__17766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17768),null);
}
} else {
var x = cljs.core.first.call(null,s__17766__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17760_$_iter__17765.call(null,cljs.core.rest.call(null,s__17766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17760);
/**
 * Create an image element.
 */
sablono.core.image17770 = (function sablono$core$image17770(var_args){
var args17771 = [];
var len__6152__auto___17774 = arguments.length;
var i__6153__auto___17775 = (0);
while(true){
if((i__6153__auto___17775 < len__6152__auto___17774)){
args17771.push((arguments[i__6153__auto___17775]));

var G__17776 = (i__6153__auto___17775 + (1));
i__6153__auto___17775 = G__17776;
continue;
} else {
}
break;
}

var G__17773 = args17771.length;
switch (G__17773) {
case 1:
return sablono.core.image17770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17771.length)].join('')));

}
});

sablono.core.image17770.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17770.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17770.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17770);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17778_SHARP_,p2__17779_SHARP_){
return [cljs.core.str(p1__17778_SHARP_),cljs.core.str("["),cljs.core.str(p2__17779_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17780_SHARP_,p2__17781_SHARP_){
return [cljs.core.str(p1__17780_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17781_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17782 = (function sablono$core$color_field17782(var_args){
var args17783 = [];
var len__6152__auto___17850 = arguments.length;
var i__6153__auto___17851 = (0);
while(true){
if((i__6153__auto___17851 < len__6152__auto___17850)){
args17783.push((arguments[i__6153__auto___17851]));

var G__17852 = (i__6153__auto___17851 + (1));
i__6153__auto___17851 = G__17852;
continue;
} else {
}
break;
}

var G__17785 = args17783.length;
switch (G__17785) {
case 1:
return sablono.core.color_field17782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17783.length)].join('')));

}
});

sablono.core.color_field17782.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.color_field17782.call(null,name__11128__auto__,null);
});

sablono.core.color_field17782.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.color_field17782.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17782);

/**
 * Creates a date input field.
 */
sablono.core.date_field17786 = (function sablono$core$date_field17786(var_args){
var args17787 = [];
var len__6152__auto___17854 = arguments.length;
var i__6153__auto___17855 = (0);
while(true){
if((i__6153__auto___17855 < len__6152__auto___17854)){
args17787.push((arguments[i__6153__auto___17855]));

var G__17856 = (i__6153__auto___17855 + (1));
i__6153__auto___17855 = G__17856;
continue;
} else {
}
break;
}

var G__17789 = args17787.length;
switch (G__17789) {
case 1:
return sablono.core.date_field17786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17787.length)].join('')));

}
});

sablono.core.date_field17786.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.date_field17786.call(null,name__11128__auto__,null);
});

sablono.core.date_field17786.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.date_field17786.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17786);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17790 = (function sablono$core$datetime_field17790(var_args){
var args17791 = [];
var len__6152__auto___17858 = arguments.length;
var i__6153__auto___17859 = (0);
while(true){
if((i__6153__auto___17859 < len__6152__auto___17858)){
args17791.push((arguments[i__6153__auto___17859]));

var G__17860 = (i__6153__auto___17859 + (1));
i__6153__auto___17859 = G__17860;
continue;
} else {
}
break;
}

var G__17793 = args17791.length;
switch (G__17793) {
case 1:
return sablono.core.datetime_field17790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17791.length)].join('')));

}
});

sablono.core.datetime_field17790.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_field17790.call(null,name__11128__auto__,null);
});

sablono.core.datetime_field17790.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_field17790.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17790);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17794 = (function sablono$core$datetime_local_field17794(var_args){
var args17795 = [];
var len__6152__auto___17862 = arguments.length;
var i__6153__auto___17863 = (0);
while(true){
if((i__6153__auto___17863 < len__6152__auto___17862)){
args17795.push((arguments[i__6153__auto___17863]));

var G__17864 = (i__6153__auto___17863 + (1));
i__6153__auto___17863 = G__17864;
continue;
} else {
}
break;
}

var G__17797 = args17795.length;
switch (G__17797) {
case 1:
return sablono.core.datetime_local_field17794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17795.length)].join('')));

}
});

sablono.core.datetime_local_field17794.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_local_field17794.call(null,name__11128__auto__,null);
});

sablono.core.datetime_local_field17794.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_local_field17794.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17794);

/**
 * Creates a email input field.
 */
sablono.core.email_field17798 = (function sablono$core$email_field17798(var_args){
var args17799 = [];
var len__6152__auto___17866 = arguments.length;
var i__6153__auto___17867 = (0);
while(true){
if((i__6153__auto___17867 < len__6152__auto___17866)){
args17799.push((arguments[i__6153__auto___17867]));

var G__17868 = (i__6153__auto___17867 + (1));
i__6153__auto___17867 = G__17868;
continue;
} else {
}
break;
}

var G__17801 = args17799.length;
switch (G__17801) {
case 1:
return sablono.core.email_field17798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17799.length)].join('')));

}
});

sablono.core.email_field17798.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.email_field17798.call(null,name__11128__auto__,null);
});

sablono.core.email_field17798.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.email_field17798.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17798);

/**
 * Creates a file input field.
 */
sablono.core.file_field17802 = (function sablono$core$file_field17802(var_args){
var args17803 = [];
var len__6152__auto___17870 = arguments.length;
var i__6153__auto___17871 = (0);
while(true){
if((i__6153__auto___17871 < len__6152__auto___17870)){
args17803.push((arguments[i__6153__auto___17871]));

var G__17872 = (i__6153__auto___17871 + (1));
i__6153__auto___17871 = G__17872;
continue;
} else {
}
break;
}

var G__17805 = args17803.length;
switch (G__17805) {
case 1:
return sablono.core.file_field17802.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17802.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17803.length)].join('')));

}
});

sablono.core.file_field17802.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.file_field17802.call(null,name__11128__auto__,null);
});

sablono.core.file_field17802.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.file_field17802.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17802);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17806 = (function sablono$core$hidden_field17806(var_args){
var args17807 = [];
var len__6152__auto___17874 = arguments.length;
var i__6153__auto___17875 = (0);
while(true){
if((i__6153__auto___17875 < len__6152__auto___17874)){
args17807.push((arguments[i__6153__auto___17875]));

var G__17876 = (i__6153__auto___17875 + (1));
i__6153__auto___17875 = G__17876;
continue;
} else {
}
break;
}

var G__17809 = args17807.length;
switch (G__17809) {
case 1:
return sablono.core.hidden_field17806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17807.length)].join('')));

}
});

sablono.core.hidden_field17806.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.hidden_field17806.call(null,name__11128__auto__,null);
});

sablono.core.hidden_field17806.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.hidden_field17806.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17806);

/**
 * Creates a month input field.
 */
sablono.core.month_field17810 = (function sablono$core$month_field17810(var_args){
var args17811 = [];
var len__6152__auto___17878 = arguments.length;
var i__6153__auto___17879 = (0);
while(true){
if((i__6153__auto___17879 < len__6152__auto___17878)){
args17811.push((arguments[i__6153__auto___17879]));

var G__17880 = (i__6153__auto___17879 + (1));
i__6153__auto___17879 = G__17880;
continue;
} else {
}
break;
}

var G__17813 = args17811.length;
switch (G__17813) {
case 1:
return sablono.core.month_field17810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17811.length)].join('')));

}
});

sablono.core.month_field17810.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.month_field17810.call(null,name__11128__auto__,null);
});

sablono.core.month_field17810.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.month_field17810.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17810);

/**
 * Creates a number input field.
 */
sablono.core.number_field17814 = (function sablono$core$number_field17814(var_args){
var args17815 = [];
var len__6152__auto___17882 = arguments.length;
var i__6153__auto___17883 = (0);
while(true){
if((i__6153__auto___17883 < len__6152__auto___17882)){
args17815.push((arguments[i__6153__auto___17883]));

var G__17884 = (i__6153__auto___17883 + (1));
i__6153__auto___17883 = G__17884;
continue;
} else {
}
break;
}

var G__17817 = args17815.length;
switch (G__17817) {
case 1:
return sablono.core.number_field17814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17815.length)].join('')));

}
});

sablono.core.number_field17814.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.number_field17814.call(null,name__11128__auto__,null);
});

sablono.core.number_field17814.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.number_field17814.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17814);

/**
 * Creates a password input field.
 */
sablono.core.password_field17818 = (function sablono$core$password_field17818(var_args){
var args17819 = [];
var len__6152__auto___17886 = arguments.length;
var i__6153__auto___17887 = (0);
while(true){
if((i__6153__auto___17887 < len__6152__auto___17886)){
args17819.push((arguments[i__6153__auto___17887]));

var G__17888 = (i__6153__auto___17887 + (1));
i__6153__auto___17887 = G__17888;
continue;
} else {
}
break;
}

var G__17821 = args17819.length;
switch (G__17821) {
case 1:
return sablono.core.password_field17818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17819.length)].join('')));

}
});

sablono.core.password_field17818.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.password_field17818.call(null,name__11128__auto__,null);
});

sablono.core.password_field17818.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.password_field17818.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17818);

/**
 * Creates a range input field.
 */
sablono.core.range_field17822 = (function sablono$core$range_field17822(var_args){
var args17823 = [];
var len__6152__auto___17890 = arguments.length;
var i__6153__auto___17891 = (0);
while(true){
if((i__6153__auto___17891 < len__6152__auto___17890)){
args17823.push((arguments[i__6153__auto___17891]));

var G__17892 = (i__6153__auto___17891 + (1));
i__6153__auto___17891 = G__17892;
continue;
} else {
}
break;
}

var G__17825 = args17823.length;
switch (G__17825) {
case 1:
return sablono.core.range_field17822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17823.length)].join('')));

}
});

sablono.core.range_field17822.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.range_field17822.call(null,name__11128__auto__,null);
});

sablono.core.range_field17822.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.range_field17822.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17822);

/**
 * Creates a search input field.
 */
sablono.core.search_field17826 = (function sablono$core$search_field17826(var_args){
var args17827 = [];
var len__6152__auto___17894 = arguments.length;
var i__6153__auto___17895 = (0);
while(true){
if((i__6153__auto___17895 < len__6152__auto___17894)){
args17827.push((arguments[i__6153__auto___17895]));

var G__17896 = (i__6153__auto___17895 + (1));
i__6153__auto___17895 = G__17896;
continue;
} else {
}
break;
}

var G__17829 = args17827.length;
switch (G__17829) {
case 1:
return sablono.core.search_field17826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17827.length)].join('')));

}
});

sablono.core.search_field17826.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.search_field17826.call(null,name__11128__auto__,null);
});

sablono.core.search_field17826.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.search_field17826.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17826);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17830 = (function sablono$core$tel_field17830(var_args){
var args17831 = [];
var len__6152__auto___17898 = arguments.length;
var i__6153__auto___17899 = (0);
while(true){
if((i__6153__auto___17899 < len__6152__auto___17898)){
args17831.push((arguments[i__6153__auto___17899]));

var G__17900 = (i__6153__auto___17899 + (1));
i__6153__auto___17899 = G__17900;
continue;
} else {
}
break;
}

var G__17833 = args17831.length;
switch (G__17833) {
case 1:
return sablono.core.tel_field17830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17831.length)].join('')));

}
});

sablono.core.tel_field17830.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.tel_field17830.call(null,name__11128__auto__,null);
});

sablono.core.tel_field17830.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.tel_field17830.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17830);

/**
 * Creates a text input field.
 */
sablono.core.text_field17834 = (function sablono$core$text_field17834(var_args){
var args17835 = [];
var len__6152__auto___17902 = arguments.length;
var i__6153__auto___17903 = (0);
while(true){
if((i__6153__auto___17903 < len__6152__auto___17902)){
args17835.push((arguments[i__6153__auto___17903]));

var G__17904 = (i__6153__auto___17903 + (1));
i__6153__auto___17903 = G__17904;
continue;
} else {
}
break;
}

var G__17837 = args17835.length;
switch (G__17837) {
case 1:
return sablono.core.text_field17834.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17834.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17835.length)].join('')));

}
});

sablono.core.text_field17834.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.text_field17834.call(null,name__11128__auto__,null);
});

sablono.core.text_field17834.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.text_field17834.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17834);

/**
 * Creates a time input field.
 */
sablono.core.time_field17838 = (function sablono$core$time_field17838(var_args){
var args17839 = [];
var len__6152__auto___17906 = arguments.length;
var i__6153__auto___17907 = (0);
while(true){
if((i__6153__auto___17907 < len__6152__auto___17906)){
args17839.push((arguments[i__6153__auto___17907]));

var G__17908 = (i__6153__auto___17907 + (1));
i__6153__auto___17907 = G__17908;
continue;
} else {
}
break;
}

var G__17841 = args17839.length;
switch (G__17841) {
case 1:
return sablono.core.time_field17838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17839.length)].join('')));

}
});

sablono.core.time_field17838.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.time_field17838.call(null,name__11128__auto__,null);
});

sablono.core.time_field17838.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.time_field17838.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17838);

/**
 * Creates a url input field.
 */
sablono.core.url_field17842 = (function sablono$core$url_field17842(var_args){
var args17843 = [];
var len__6152__auto___17910 = arguments.length;
var i__6153__auto___17911 = (0);
while(true){
if((i__6153__auto___17911 < len__6152__auto___17910)){
args17843.push((arguments[i__6153__auto___17911]));

var G__17912 = (i__6153__auto___17911 + (1));
i__6153__auto___17911 = G__17912;
continue;
} else {
}
break;
}

var G__17845 = args17843.length;
switch (G__17845) {
case 1:
return sablono.core.url_field17842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17843.length)].join('')));

}
});

sablono.core.url_field17842.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.url_field17842.call(null,name__11128__auto__,null);
});

sablono.core.url_field17842.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.url_field17842.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17842);

/**
 * Creates a week input field.
 */
sablono.core.week_field17846 = (function sablono$core$week_field17846(var_args){
var args17847 = [];
var len__6152__auto___17914 = arguments.length;
var i__6153__auto___17915 = (0);
while(true){
if((i__6153__auto___17915 < len__6152__auto___17914)){
args17847.push((arguments[i__6153__auto___17915]));

var G__17916 = (i__6153__auto___17915 + (1));
i__6153__auto___17915 = G__17916;
continue;
} else {
}
break;
}

var G__17849 = args17847.length;
switch (G__17849) {
case 1:
return sablono.core.week_field17846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17847.length)].join('')));

}
});

sablono.core.week_field17846.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.week_field17846.call(null,name__11128__auto__,null);
});

sablono.core.week_field17846.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.week_field17846.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17846);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17918 = (function sablono$core$check_box17918(var_args){
var args17919 = [];
var len__6152__auto___17922 = arguments.length;
var i__6153__auto___17923 = (0);
while(true){
if((i__6153__auto___17923 < len__6152__auto___17922)){
args17919.push((arguments[i__6153__auto___17923]));

var G__17924 = (i__6153__auto___17923 + (1));
i__6153__auto___17923 = G__17924;
continue;
} else {
}
break;
}

var G__17921 = args17919.length;
switch (G__17921) {
case 1:
return sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17919.length)].join('')));

}
});

sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17918.call(null,name,null);
});

sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17918.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17918.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17918.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17918);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17926 = (function sablono$core$radio_button17926(var_args){
var args17927 = [];
var len__6152__auto___17930 = arguments.length;
var i__6153__auto___17931 = (0);
while(true){
if((i__6153__auto___17931 < len__6152__auto___17930)){
args17927.push((arguments[i__6153__auto___17931]));

var G__17932 = (i__6153__auto___17931 + (1));
i__6153__auto___17931 = G__17932;
continue;
} else {
}
break;
}

var G__17929 = args17927.length;
switch (G__17929) {
case 1:
return sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17927.length)].join('')));

}
});

sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17926.call(null,group,null);
});

sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17926.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17926.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17926.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17926);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17934 = (function sablono$core$select_options17934(coll){
var iter__5866__auto__ = (function sablono$core$select_options17934_$_iter__17943(s__17944){
return (new cljs.core.LazySeq(null,(function (){
var s__17944__$1 = s__17944;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17944__$1);
if(temp__4425__auto__){
var s__17944__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17944__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17944__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17946 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17945 = (0);
while(true){
if((i__17945 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17945);
cljs.core.chunk_append.call(null,b__17946,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17949 = x;
var text = cljs.core.nth.call(null,vec__17949,(0),null);
var val = cljs.core.nth.call(null,vec__17949,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17949,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17934.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17951 = (i__17945 + (1));
i__17945 = G__17951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17946),sablono$core$select_options17934_$_iter__17943.call(null,cljs.core.chunk_rest.call(null,s__17944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17946),null);
}
} else {
var x = cljs.core.first.call(null,s__17944__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17950 = x;
var text = cljs.core.nth.call(null,vec__17950,(0),null);
var val = cljs.core.nth.call(null,vec__17950,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17950,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17934.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17934_$_iter__17943.call(null,cljs.core.rest.call(null,s__17944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17934);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17952 = (function sablono$core$drop_down17952(var_args){
var args17953 = [];
var len__6152__auto___17956 = arguments.length;
var i__6153__auto___17957 = (0);
while(true){
if((i__6153__auto___17957 < len__6152__auto___17956)){
args17953.push((arguments[i__6153__auto___17957]));

var G__17958 = (i__6153__auto___17957 + (1));
i__6153__auto___17957 = G__17958;
continue;
} else {
}
break;
}

var G__17955 = args17953.length;
switch (G__17955) {
case 2:
return sablono.core.drop_down17952.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17952.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17953.length)].join('')));

}
});

sablono.core.drop_down17952.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17952.call(null,name,options,null);
});

sablono.core.drop_down17952.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17952.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17952);
/**
 * Creates a text area element.
 */
sablono.core.text_area17960 = (function sablono$core$text_area17960(var_args){
var args17961 = [];
var len__6152__auto___17964 = arguments.length;
var i__6153__auto___17965 = (0);
while(true){
if((i__6153__auto___17965 < len__6152__auto___17964)){
args17961.push((arguments[i__6153__auto___17965]));

var G__17966 = (i__6153__auto___17965 + (1));
i__6153__auto___17965 = G__17966;
continue;
} else {
}
break;
}

var G__17963 = args17961.length;
switch (G__17963) {
case 1:
return sablono.core.text_area17960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17961.length)].join('')));

}
});

sablono.core.text_area17960.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17960.call(null,name,null);
});

sablono.core.text_area17960.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17960.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17960);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17968 = (function sablono$core$label17968(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17968);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17969 = (function sablono$core$submit_button17969(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17969);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17970 = (function sablono$core$reset_button17970(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17970);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17971 = (function sablono$core$form_to17971(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17976 = arguments.length;
var i__6153__auto___17977 = (0);
while(true){
if((i__6153__auto___17977 < len__6152__auto___17976)){
args__6159__auto__.push((arguments[i__6153__auto___17977]));

var G__17978 = (i__6153__auto___17977 + (1));
i__6153__auto___17977 = G__17978;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17971.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17971.cljs$core$IFn$_invoke$arity$variadic = (function (p__17974,body){
var vec__17975 = p__17974;
var method = cljs.core.nth.call(null,vec__17975,(0),null);
var action = cljs.core.nth.call(null,vec__17975,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17971.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17971.cljs$lang$applyTo = (function (seq17972){
var G__17973 = cljs.core.first.call(null,seq17972);
var seq17972__$1 = cljs.core.next.call(null,seq17972);
return sablono.core.form_to17971.cljs$core$IFn$_invoke$arity$variadic(G__17973,seq17972__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17971);

//# sourceMappingURL=core.js.map