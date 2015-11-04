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
var G__17672__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17671 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17671,(0),null);
var body = cljs.core.nthnext.call(null,vec__17671,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17673__i = 0, G__17673__a = new Array(arguments.length -  0);
while (G__17673__i < G__17673__a.length) {G__17673__a[G__17673__i] = arguments[G__17673__i + 0]; ++G__17673__i;}
  args = new cljs.core.IndexedSeq(G__17673__a,0);
} 
return G__17672__delegate.call(this,args);};
G__17672.cljs$lang$maxFixedArity = 0;
G__17672.cljs$lang$applyTo = (function (arglist__17674){
var args = cljs.core.seq(arglist__17674);
return G__17672__delegate(args);
});
G__17672.cljs$core$IFn$_invoke$arity$variadic = G__17672__delegate;
return G__17672;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17679(s__17680){
return (new cljs.core.LazySeq(null,(function (){
var s__17680__$1 = s__17680;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17680__$1);
if(temp__4425__auto__){
var s__17680__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17680__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17680__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17682 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17681 = (0);
while(true){
if((i__17681 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17681);
cljs.core.chunk_append.call(null,b__17682,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17683 = (i__17681 + (1));
i__17681 = G__17683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17682),sablono$core$update_arglists_$_iter__17679.call(null,cljs.core.chunk_rest.call(null,s__17680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17682),null);
}
} else {
var args = cljs.core.first.call(null,s__17680__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17679.call(null,cljs.core.rest.call(null,s__17680__$2)));
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
var len__6152__auto___17689 = arguments.length;
var i__6153__auto___17690 = (0);
while(true){
if((i__6153__auto___17690 < len__6152__auto___17689)){
args__6159__auto__.push((arguments[i__6153__auto___17690]));

var G__17691 = (i__6153__auto___17690 + (1));
i__6153__auto___17690 = G__17691;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17685(s__17686){
return (new cljs.core.LazySeq(null,(function (){
var s__17686__$1 = s__17686;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17686__$1);
if(temp__4425__auto__){
var s__17686__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17686__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17686__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17688 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17687 = (0);
while(true){
if((i__17687 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17687);
cljs.core.chunk_append.call(null,b__17688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17692 = (i__17687 + (1));
i__17687 = G__17692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17688),sablono$core$iter__17685.call(null,cljs.core.chunk_rest.call(null,s__17686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17688),null);
}
} else {
var style = cljs.core.first.call(null,s__17686__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17685.call(null,cljs.core.rest.call(null,s__17686__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17684){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17684));
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
sablono.core.link_to17693 = (function sablono$core$link_to17693(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17696 = arguments.length;
var i__6153__auto___17697 = (0);
while(true){
if((i__6153__auto___17697 < len__6152__auto___17696)){
args__6159__auto__.push((arguments[i__6153__auto___17697]));

var G__17698 = (i__6153__auto___17697 + (1));
i__6153__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17693.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17693.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17693.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17693.cljs$lang$applyTo = (function (seq17694){
var G__17695 = cljs.core.first.call(null,seq17694);
var seq17694__$1 = cljs.core.next.call(null,seq17694);
return sablono.core.link_to17693.cljs$core$IFn$_invoke$arity$variadic(G__17695,seq17694__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17693);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17699 = (function sablono$core$mail_to17699(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17704 = arguments.length;
var i__6153__auto___17705 = (0);
while(true){
if((i__6153__auto___17705 < len__6152__auto___17704)){
args__6159__auto__.push((arguments[i__6153__auto___17705]));

var G__17706 = (i__6153__auto___17705 + (1));
i__6153__auto___17705 = G__17706;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17699.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17699.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17702){
var vec__17703 = p__17702;
var content = cljs.core.nth.call(null,vec__17703,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17699.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17699.cljs$lang$applyTo = (function (seq17700){
var G__17701 = cljs.core.first.call(null,seq17700);
var seq17700__$1 = cljs.core.next.call(null,seq17700);
return sablono.core.mail_to17699.cljs$core$IFn$_invoke$arity$variadic(G__17701,seq17700__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17699);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17707 = (function sablono$core$unordered_list17707(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17707_$_iter__17712(s__17713){
return (new cljs.core.LazySeq(null,(function (){
var s__17713__$1 = s__17713;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17713__$1);
if(temp__4425__auto__){
var s__17713__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17713__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17713__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17715 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17714 = (0);
while(true){
if((i__17714 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17714);
cljs.core.chunk_append.call(null,b__17715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17716 = (i__17714 + (1));
i__17714 = G__17716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17715),sablono$core$unordered_list17707_$_iter__17712.call(null,cljs.core.chunk_rest.call(null,s__17713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17715),null);
}
} else {
var x = cljs.core.first.call(null,s__17713__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17707_$_iter__17712.call(null,cljs.core.rest.call(null,s__17713__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17707);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17717 = (function sablono$core$ordered_list17717(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17717_$_iter__17722(s__17723){
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
var x = cljs.core._nth.call(null,c__5864__auto__,i__17724);
cljs.core.chunk_append.call(null,b__17725,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17726 = (i__17724 + (1));
i__17724 = G__17726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17725),sablono$core$ordered_list17717_$_iter__17722.call(null,cljs.core.chunk_rest.call(null,s__17723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17725),null);
}
} else {
var x = cljs.core.first.call(null,s__17723__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17717_$_iter__17722.call(null,cljs.core.rest.call(null,s__17723__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17717);
/**
 * Create an image element.
 */
sablono.core.image17727 = (function sablono$core$image17727(var_args){
var args17728 = [];
var len__6152__auto___17731 = arguments.length;
var i__6153__auto___17732 = (0);
while(true){
if((i__6153__auto___17732 < len__6152__auto___17731)){
args17728.push((arguments[i__6153__auto___17732]));

var G__17733 = (i__6153__auto___17732 + (1));
i__6153__auto___17732 = G__17733;
continue;
} else {
}
break;
}

var G__17730 = args17728.length;
switch (G__17730) {
case 1:
return sablono.core.image17727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17728.length)].join('')));

}
});

sablono.core.image17727.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17727.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17727.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17727);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17735_SHARP_,p2__17736_SHARP_){
return [cljs.core.str(p1__17735_SHARP_),cljs.core.str("["),cljs.core.str(p2__17736_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17737_SHARP_,p2__17738_SHARP_){
return [cljs.core.str(p1__17737_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17738_SHARP_)].join('');
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
sablono.core.color_field17739 = (function sablono$core$color_field17739(var_args){
var args17740 = [];
var len__6152__auto___17807 = arguments.length;
var i__6153__auto___17808 = (0);
while(true){
if((i__6153__auto___17808 < len__6152__auto___17807)){
args17740.push((arguments[i__6153__auto___17808]));

var G__17809 = (i__6153__auto___17808 + (1));
i__6153__auto___17808 = G__17809;
continue;
} else {
}
break;
}

var G__17742 = args17740.length;
switch (G__17742) {
case 1:
return sablono.core.color_field17739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17740.length)].join('')));

}
});

sablono.core.color_field17739.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.color_field17739.call(null,name__11128__auto__,null);
});

sablono.core.color_field17739.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.color_field17739.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17739);

/**
 * Creates a date input field.
 */
sablono.core.date_field17743 = (function sablono$core$date_field17743(var_args){
var args17744 = [];
var len__6152__auto___17811 = arguments.length;
var i__6153__auto___17812 = (0);
while(true){
if((i__6153__auto___17812 < len__6152__auto___17811)){
args17744.push((arguments[i__6153__auto___17812]));

var G__17813 = (i__6153__auto___17812 + (1));
i__6153__auto___17812 = G__17813;
continue;
} else {
}
break;
}

var G__17746 = args17744.length;
switch (G__17746) {
case 1:
return sablono.core.date_field17743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17744.length)].join('')));

}
});

sablono.core.date_field17743.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.date_field17743.call(null,name__11128__auto__,null);
});

sablono.core.date_field17743.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.date_field17743.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17743);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17747 = (function sablono$core$datetime_field17747(var_args){
var args17748 = [];
var len__6152__auto___17815 = arguments.length;
var i__6153__auto___17816 = (0);
while(true){
if((i__6153__auto___17816 < len__6152__auto___17815)){
args17748.push((arguments[i__6153__auto___17816]));

var G__17817 = (i__6153__auto___17816 + (1));
i__6153__auto___17816 = G__17817;
continue;
} else {
}
break;
}

var G__17750 = args17748.length;
switch (G__17750) {
case 1:
return sablono.core.datetime_field17747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17748.length)].join('')));

}
});

sablono.core.datetime_field17747.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_field17747.call(null,name__11128__auto__,null);
});

sablono.core.datetime_field17747.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_field17747.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17747);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17751 = (function sablono$core$datetime_local_field17751(var_args){
var args17752 = [];
var len__6152__auto___17819 = arguments.length;
var i__6153__auto___17820 = (0);
while(true){
if((i__6153__auto___17820 < len__6152__auto___17819)){
args17752.push((arguments[i__6153__auto___17820]));

var G__17821 = (i__6153__auto___17820 + (1));
i__6153__auto___17820 = G__17821;
continue;
} else {
}
break;
}

var G__17754 = args17752.length;
switch (G__17754) {
case 1:
return sablono.core.datetime_local_field17751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17752.length)].join('')));

}
});

sablono.core.datetime_local_field17751.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_local_field17751.call(null,name__11128__auto__,null);
});

sablono.core.datetime_local_field17751.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_local_field17751.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17751);

/**
 * Creates a email input field.
 */
sablono.core.email_field17755 = (function sablono$core$email_field17755(var_args){
var args17756 = [];
var len__6152__auto___17823 = arguments.length;
var i__6153__auto___17824 = (0);
while(true){
if((i__6153__auto___17824 < len__6152__auto___17823)){
args17756.push((arguments[i__6153__auto___17824]));

var G__17825 = (i__6153__auto___17824 + (1));
i__6153__auto___17824 = G__17825;
continue;
} else {
}
break;
}

var G__17758 = args17756.length;
switch (G__17758) {
case 1:
return sablono.core.email_field17755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17756.length)].join('')));

}
});

sablono.core.email_field17755.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.email_field17755.call(null,name__11128__auto__,null);
});

sablono.core.email_field17755.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.email_field17755.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17755);

/**
 * Creates a file input field.
 */
sablono.core.file_field17759 = (function sablono$core$file_field17759(var_args){
var args17760 = [];
var len__6152__auto___17827 = arguments.length;
var i__6153__auto___17828 = (0);
while(true){
if((i__6153__auto___17828 < len__6152__auto___17827)){
args17760.push((arguments[i__6153__auto___17828]));

var G__17829 = (i__6153__auto___17828 + (1));
i__6153__auto___17828 = G__17829;
continue;
} else {
}
break;
}

var G__17762 = args17760.length;
switch (G__17762) {
case 1:
return sablono.core.file_field17759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17760.length)].join('')));

}
});

sablono.core.file_field17759.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.file_field17759.call(null,name__11128__auto__,null);
});

sablono.core.file_field17759.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.file_field17759.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17759);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17763 = (function sablono$core$hidden_field17763(var_args){
var args17764 = [];
var len__6152__auto___17831 = arguments.length;
var i__6153__auto___17832 = (0);
while(true){
if((i__6153__auto___17832 < len__6152__auto___17831)){
args17764.push((arguments[i__6153__auto___17832]));

var G__17833 = (i__6153__auto___17832 + (1));
i__6153__auto___17832 = G__17833;
continue;
} else {
}
break;
}

var G__17766 = args17764.length;
switch (G__17766) {
case 1:
return sablono.core.hidden_field17763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17764.length)].join('')));

}
});

sablono.core.hidden_field17763.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.hidden_field17763.call(null,name__11128__auto__,null);
});

sablono.core.hidden_field17763.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.hidden_field17763.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17763);

/**
 * Creates a month input field.
 */
sablono.core.month_field17767 = (function sablono$core$month_field17767(var_args){
var args17768 = [];
var len__6152__auto___17835 = arguments.length;
var i__6153__auto___17836 = (0);
while(true){
if((i__6153__auto___17836 < len__6152__auto___17835)){
args17768.push((arguments[i__6153__auto___17836]));

var G__17837 = (i__6153__auto___17836 + (1));
i__6153__auto___17836 = G__17837;
continue;
} else {
}
break;
}

var G__17770 = args17768.length;
switch (G__17770) {
case 1:
return sablono.core.month_field17767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17768.length)].join('')));

}
});

sablono.core.month_field17767.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.month_field17767.call(null,name__11128__auto__,null);
});

sablono.core.month_field17767.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.month_field17767.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17767);

/**
 * Creates a number input field.
 */
sablono.core.number_field17771 = (function sablono$core$number_field17771(var_args){
var args17772 = [];
var len__6152__auto___17839 = arguments.length;
var i__6153__auto___17840 = (0);
while(true){
if((i__6153__auto___17840 < len__6152__auto___17839)){
args17772.push((arguments[i__6153__auto___17840]));

var G__17841 = (i__6153__auto___17840 + (1));
i__6153__auto___17840 = G__17841;
continue;
} else {
}
break;
}

var G__17774 = args17772.length;
switch (G__17774) {
case 1:
return sablono.core.number_field17771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17772.length)].join('')));

}
});

sablono.core.number_field17771.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.number_field17771.call(null,name__11128__auto__,null);
});

sablono.core.number_field17771.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.number_field17771.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17771);

/**
 * Creates a password input field.
 */
sablono.core.password_field17775 = (function sablono$core$password_field17775(var_args){
var args17776 = [];
var len__6152__auto___17843 = arguments.length;
var i__6153__auto___17844 = (0);
while(true){
if((i__6153__auto___17844 < len__6152__auto___17843)){
args17776.push((arguments[i__6153__auto___17844]));

var G__17845 = (i__6153__auto___17844 + (1));
i__6153__auto___17844 = G__17845;
continue;
} else {
}
break;
}

var G__17778 = args17776.length;
switch (G__17778) {
case 1:
return sablono.core.password_field17775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17776.length)].join('')));

}
});

sablono.core.password_field17775.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.password_field17775.call(null,name__11128__auto__,null);
});

sablono.core.password_field17775.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.password_field17775.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17775);

/**
 * Creates a range input field.
 */
sablono.core.range_field17779 = (function sablono$core$range_field17779(var_args){
var args17780 = [];
var len__6152__auto___17847 = arguments.length;
var i__6153__auto___17848 = (0);
while(true){
if((i__6153__auto___17848 < len__6152__auto___17847)){
args17780.push((arguments[i__6153__auto___17848]));

var G__17849 = (i__6153__auto___17848 + (1));
i__6153__auto___17848 = G__17849;
continue;
} else {
}
break;
}

var G__17782 = args17780.length;
switch (G__17782) {
case 1:
return sablono.core.range_field17779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17780.length)].join('')));

}
});

sablono.core.range_field17779.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.range_field17779.call(null,name__11128__auto__,null);
});

sablono.core.range_field17779.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.range_field17779.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17779);

/**
 * Creates a search input field.
 */
sablono.core.search_field17783 = (function sablono$core$search_field17783(var_args){
var args17784 = [];
var len__6152__auto___17851 = arguments.length;
var i__6153__auto___17852 = (0);
while(true){
if((i__6153__auto___17852 < len__6152__auto___17851)){
args17784.push((arguments[i__6153__auto___17852]));

var G__17853 = (i__6153__auto___17852 + (1));
i__6153__auto___17852 = G__17853;
continue;
} else {
}
break;
}

var G__17786 = args17784.length;
switch (G__17786) {
case 1:
return sablono.core.search_field17783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17784.length)].join('')));

}
});

sablono.core.search_field17783.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.search_field17783.call(null,name__11128__auto__,null);
});

sablono.core.search_field17783.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.search_field17783.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17783);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17787 = (function sablono$core$tel_field17787(var_args){
var args17788 = [];
var len__6152__auto___17855 = arguments.length;
var i__6153__auto___17856 = (0);
while(true){
if((i__6153__auto___17856 < len__6152__auto___17855)){
args17788.push((arguments[i__6153__auto___17856]));

var G__17857 = (i__6153__auto___17856 + (1));
i__6153__auto___17856 = G__17857;
continue;
} else {
}
break;
}

var G__17790 = args17788.length;
switch (G__17790) {
case 1:
return sablono.core.tel_field17787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17788.length)].join('')));

}
});

sablono.core.tel_field17787.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.tel_field17787.call(null,name__11128__auto__,null);
});

sablono.core.tel_field17787.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.tel_field17787.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17787);

/**
 * Creates a text input field.
 */
sablono.core.text_field17791 = (function sablono$core$text_field17791(var_args){
var args17792 = [];
var len__6152__auto___17859 = arguments.length;
var i__6153__auto___17860 = (0);
while(true){
if((i__6153__auto___17860 < len__6152__auto___17859)){
args17792.push((arguments[i__6153__auto___17860]));

var G__17861 = (i__6153__auto___17860 + (1));
i__6153__auto___17860 = G__17861;
continue;
} else {
}
break;
}

var G__17794 = args17792.length;
switch (G__17794) {
case 1:
return sablono.core.text_field17791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17792.length)].join('')));

}
});

sablono.core.text_field17791.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.text_field17791.call(null,name__11128__auto__,null);
});

sablono.core.text_field17791.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.text_field17791.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17791);

/**
 * Creates a time input field.
 */
sablono.core.time_field17795 = (function sablono$core$time_field17795(var_args){
var args17796 = [];
var len__6152__auto___17863 = arguments.length;
var i__6153__auto___17864 = (0);
while(true){
if((i__6153__auto___17864 < len__6152__auto___17863)){
args17796.push((arguments[i__6153__auto___17864]));

var G__17865 = (i__6153__auto___17864 + (1));
i__6153__auto___17864 = G__17865;
continue;
} else {
}
break;
}

var G__17798 = args17796.length;
switch (G__17798) {
case 1:
return sablono.core.time_field17795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17796.length)].join('')));

}
});

sablono.core.time_field17795.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.time_field17795.call(null,name__11128__auto__,null);
});

sablono.core.time_field17795.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.time_field17795.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17795);

/**
 * Creates a url input field.
 */
sablono.core.url_field17799 = (function sablono$core$url_field17799(var_args){
var args17800 = [];
var len__6152__auto___17867 = arguments.length;
var i__6153__auto___17868 = (0);
while(true){
if((i__6153__auto___17868 < len__6152__auto___17867)){
args17800.push((arguments[i__6153__auto___17868]));

var G__17869 = (i__6153__auto___17868 + (1));
i__6153__auto___17868 = G__17869;
continue;
} else {
}
break;
}

var G__17802 = args17800.length;
switch (G__17802) {
case 1:
return sablono.core.url_field17799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17800.length)].join('')));

}
});

sablono.core.url_field17799.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.url_field17799.call(null,name__11128__auto__,null);
});

sablono.core.url_field17799.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.url_field17799.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17799);

/**
 * Creates a week input field.
 */
sablono.core.week_field17803 = (function sablono$core$week_field17803(var_args){
var args17804 = [];
var len__6152__auto___17871 = arguments.length;
var i__6153__auto___17872 = (0);
while(true){
if((i__6153__auto___17872 < len__6152__auto___17871)){
args17804.push((arguments[i__6153__auto___17872]));

var G__17873 = (i__6153__auto___17872 + (1));
i__6153__auto___17872 = G__17873;
continue;
} else {
}
break;
}

var G__17806 = args17804.length;
switch (G__17806) {
case 1:
return sablono.core.week_field17803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17804.length)].join('')));

}
});

sablono.core.week_field17803.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.week_field17803.call(null,name__11128__auto__,null);
});

sablono.core.week_field17803.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.week_field17803.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17803);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17875 = (function sablono$core$check_box17875(var_args){
var args17876 = [];
var len__6152__auto___17879 = arguments.length;
var i__6153__auto___17880 = (0);
while(true){
if((i__6153__auto___17880 < len__6152__auto___17879)){
args17876.push((arguments[i__6153__auto___17880]));

var G__17881 = (i__6153__auto___17880 + (1));
i__6153__auto___17880 = G__17881;
continue;
} else {
}
break;
}

var G__17878 = args17876.length;
switch (G__17878) {
case 1:
return sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17876.length)].join('')));

}
});

sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17875.call(null,name,null);
});

sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17875.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17875.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17875.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17875);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17883 = (function sablono$core$radio_button17883(var_args){
var args17884 = [];
var len__6152__auto___17887 = arguments.length;
var i__6153__auto___17888 = (0);
while(true){
if((i__6153__auto___17888 < len__6152__auto___17887)){
args17884.push((arguments[i__6153__auto___17888]));

var G__17889 = (i__6153__auto___17888 + (1));
i__6153__auto___17888 = G__17889;
continue;
} else {
}
break;
}

var G__17886 = args17884.length;
switch (G__17886) {
case 1:
return sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17884.length)].join('')));

}
});

sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17883.call(null,group,null);
});

sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17883.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17883.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17883.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17883);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17891 = (function sablono$core$select_options17891(coll){
var iter__5866__auto__ = (function sablono$core$select_options17891_$_iter__17900(s__17901){
return (new cljs.core.LazySeq(null,(function (){
var s__17901__$1 = s__17901;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17901__$1);
if(temp__4425__auto__){
var s__17901__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17901__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17901__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17903 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17902 = (0);
while(true){
if((i__17902 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17902);
cljs.core.chunk_append.call(null,b__17903,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17906 = x;
var text = cljs.core.nth.call(null,vec__17906,(0),null);
var val = cljs.core.nth.call(null,vec__17906,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17906,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17891.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17908 = (i__17902 + (1));
i__17902 = G__17908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17903),sablono$core$select_options17891_$_iter__17900.call(null,cljs.core.chunk_rest.call(null,s__17901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17903),null);
}
} else {
var x = cljs.core.first.call(null,s__17901__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17907 = x;
var text = cljs.core.nth.call(null,vec__17907,(0),null);
var val = cljs.core.nth.call(null,vec__17907,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17907,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17891.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17891_$_iter__17900.call(null,cljs.core.rest.call(null,s__17901__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17891);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17909 = (function sablono$core$drop_down17909(var_args){
var args17910 = [];
var len__6152__auto___17913 = arguments.length;
var i__6153__auto___17914 = (0);
while(true){
if((i__6153__auto___17914 < len__6152__auto___17913)){
args17910.push((arguments[i__6153__auto___17914]));

var G__17915 = (i__6153__auto___17914 + (1));
i__6153__auto___17914 = G__17915;
continue;
} else {
}
break;
}

var G__17912 = args17910.length;
switch (G__17912) {
case 2:
return sablono.core.drop_down17909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17909.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17910.length)].join('')));

}
});

sablono.core.drop_down17909.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17909.call(null,name,options,null);
});

sablono.core.drop_down17909.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17909.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17909);
/**
 * Creates a text area element.
 */
sablono.core.text_area17917 = (function sablono$core$text_area17917(var_args){
var args17918 = [];
var len__6152__auto___17921 = arguments.length;
var i__6153__auto___17922 = (0);
while(true){
if((i__6153__auto___17922 < len__6152__auto___17921)){
args17918.push((arguments[i__6153__auto___17922]));

var G__17923 = (i__6153__auto___17922 + (1));
i__6153__auto___17922 = G__17923;
continue;
} else {
}
break;
}

var G__17920 = args17918.length;
switch (G__17920) {
case 1:
return sablono.core.text_area17917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17918.length)].join('')));

}
});

sablono.core.text_area17917.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17917.call(null,name,null);
});

sablono.core.text_area17917.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17917.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17917);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17925 = (function sablono$core$label17925(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17925);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17926 = (function sablono$core$submit_button17926(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17926);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17927 = (function sablono$core$reset_button17927(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17927);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17928 = (function sablono$core$form_to17928(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17933 = arguments.length;
var i__6153__auto___17934 = (0);
while(true){
if((i__6153__auto___17934 < len__6152__auto___17933)){
args__6159__auto__.push((arguments[i__6153__auto___17934]));

var G__17935 = (i__6153__auto___17934 + (1));
i__6153__auto___17934 = G__17935;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17928.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17928.cljs$core$IFn$_invoke$arity$variadic = (function (p__17931,body){
var vec__17932 = p__17931;
var method = cljs.core.nth.call(null,vec__17932,(0),null);
var action = cljs.core.nth.call(null,vec__17932,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17928.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17928.cljs$lang$applyTo = (function (seq17929){
var G__17930 = cljs.core.first.call(null,seq17929);
var seq17929__$1 = cljs.core.next.call(null,seq17929);
return sablono.core.form_to17928.cljs$core$IFn$_invoke$arity$variadic(G__17930,seq17929__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17928);

//# sourceMappingURL=core.js.map