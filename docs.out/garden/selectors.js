// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('garden.selectors');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * @interface
 */
garden.selectors.ICSSSelector = function(){};

garden.selectors.css_selector = (function garden$selectors$css_selector(this$){
if((!((this$ == null))) && (!((this$.garden$selectors$ICSSSelector$css_selector$arity$1 == null)))){
return this$.garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (garden.selectors.css_selector[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (garden.selectors.css_selector["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICSSSelector.css-selector",this$);
}
}
}
});

garden.selectors.selector_QMARK_ = (function garden$selectors$selector_QMARK_(x){
if(!((x == null))){
if((false) || (x.garden$selectors$ICSSSelector$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
}
});
(garden.selectors.ICSSSelector["string"] = true);

(garden.selectors.css_selector["string"] = (function (this$){
return this$;
}));

cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$ = true;

cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$ = true;

cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {garden.selectors.ICSSSelector}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k25396,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__25399 = (((k25396 instanceof cljs.core.Keyword))?k25396.fqn:null);
switch (G__25399) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25396,else__5711__auto__);

}
});

garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#garden.selectors.CSSSelector{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selector,self__.selector],null))], null),self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IIterable$ = true;

garden.selectors.CSSSelector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25395){
var self__ = this;
var G__25395__$1 = this;
return (new cljs.core.RecordIter((0),G__25395__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selector], null),cljs.core._iterator(self__.__extmap)));
});

garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
});

garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
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

garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
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

garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$ = true;

garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return garden.selectors.css_selector(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selector,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__25395){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__25400 = cljs.core.keyword_identical_QMARK_;
var expr__25401 = k__5716__auto__;
if(cljs.core.truth_((pred__25400.cljs$core$IFn$_invoke$arity$2 ? pred__25400.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,expr__25401) : pred__25400.call(null,cljs.core.cst$kw$selector,expr__25401)))){
return (new garden.selectors.CSSSelector(G__25395,self__.__meta,self__.__extmap,null));
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__25395),null));
}
});

garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selector,self__.selector],null))], null),self__.__extmap));
});

garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__25395){
var self__ = this;
var this__5707__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,G__25395,self__.__extmap,self__.__hash));
});

garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

garden.selectors.CSSSelector.prototype.call = (function() {
var G__25404 = null;
var G__25404__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__25404__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a))].join(''),null,null,null));
});
var G__25404__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b))].join(''),null,null,null));
});
var G__25404__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c))].join(''),null,null,null));
});
var G__25404__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d))].join(''),null,null,null));
});
var G__25404__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e))].join(''),null,null,null));
});
var G__25404__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f))].join(''),null,null,null));
});
var G__25404__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g))].join(''),null,null,null));
});
var G__25404__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h))].join(''),null,null,null));
});
var G__25404__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i))].join(''),null,null,null));
});
var G__25404__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j))].join(''),null,null,null));
});
var G__25404__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k))].join(''),null,null,null));
});
var G__25404__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l))].join(''),null,null,null));
});
var G__25404__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m))].join(''),null,null,null));
});
var G__25404__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n))].join(''),null,null,null));
});
var G__25404__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o))].join(''),null,null,null));
});
var G__25404__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p))].join(''),null,null,null));
});
var G__25404__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q))].join(''),null,null,null));
});
var G__25404__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r))].join(''),null,null,null));
});
var G__25404__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r)),cljs.core.str(garden.selectors.css_selector(s))].join(''),null,null,null));
});
var G__25404__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r)),cljs.core.str(garden.selectors.css_selector(s)),cljs.core.str(garden.selectors.css_selector(t))].join(''),null,null,null));
});
G__25404 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__25404__1.call(this,self__);
case 2:
return G__25404__2.call(this,self__,a);
case 3:
return G__25404__3.call(this,self__,a,b);
case 4:
return G__25404__4.call(this,self__,a,b,c);
case 5:
return G__25404__5.call(this,self__,a,b,c,d);
case 6:
return G__25404__6.call(this,self__,a,b,c,d,e);
case 7:
return G__25404__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__25404__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__25404__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__25404__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__25404__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__25404__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__25404__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__25404__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__25404__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__25404__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__25404__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__25404__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__25404__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__25404__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__25404__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25404.cljs$core$IFn$_invoke$arity$1 = G__25404__1;
G__25404.cljs$core$IFn$_invoke$arity$2 = G__25404__2;
G__25404.cljs$core$IFn$_invoke$arity$3 = G__25404__3;
G__25404.cljs$core$IFn$_invoke$arity$4 = G__25404__4;
G__25404.cljs$core$IFn$_invoke$arity$5 = G__25404__5;
G__25404.cljs$core$IFn$_invoke$arity$6 = G__25404__6;
G__25404.cljs$core$IFn$_invoke$arity$7 = G__25404__7;
G__25404.cljs$core$IFn$_invoke$arity$8 = G__25404__8;
G__25404.cljs$core$IFn$_invoke$arity$9 = G__25404__9;
G__25404.cljs$core$IFn$_invoke$arity$10 = G__25404__10;
G__25404.cljs$core$IFn$_invoke$arity$11 = G__25404__11;
G__25404.cljs$core$IFn$_invoke$arity$12 = G__25404__12;
G__25404.cljs$core$IFn$_invoke$arity$13 = G__25404__13;
G__25404.cljs$core$IFn$_invoke$arity$14 = G__25404__14;
G__25404.cljs$core$IFn$_invoke$arity$15 = G__25404__15;
G__25404.cljs$core$IFn$_invoke$arity$16 = G__25404__16;
G__25404.cljs$core$IFn$_invoke$arity$17 = G__25404__17;
G__25404.cljs$core$IFn$_invoke$arity$18 = G__25404__18;
G__25404.cljs$core$IFn$_invoke$arity$19 = G__25404__19;
G__25404.cljs$core$IFn$_invoke$arity$20 = G__25404__20;
G__25404.cljs$core$IFn$_invoke$arity$21 = G__25404__21;
return G__25404;
})()
;

garden.selectors.CSSSelector.prototype.apply = (function (self__,args25398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25398)));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r)),cljs.core.str(garden.selectors.css_selector(s))].join(''),null,null,null));
});

garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(garden.selectors.css_selector(b)),cljs.core.str(garden.selectors.css_selector(c)),cljs.core.str(garden.selectors.css_selector(d)),cljs.core.str(garden.selectors.css_selector(e)),cljs.core.str(garden.selectors.css_selector(f)),cljs.core.str(garden.selectors.css_selector(g)),cljs.core.str(garden.selectors.css_selector(h)),cljs.core.str(garden.selectors.css_selector(i)),cljs.core.str(garden.selectors.css_selector(j)),cljs.core.str(garden.selectors.css_selector(k)),cljs.core.str(garden.selectors.css_selector(l)),cljs.core.str(garden.selectors.css_selector(m)),cljs.core.str(garden.selectors.css_selector(n)),cljs.core.str(garden.selectors.css_selector(o)),cljs.core.str(garden.selectors.css_selector(p)),cljs.core.str(garden.selectors.css_selector(q)),cljs.core.str(garden.selectors.css_selector(r)),cljs.core.str(garden.selectors.css_selector(s)),cljs.core.str(garden.selectors.css_selector(t))].join(''),null,null,null));
});

garden.selectors.CSSSelector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selector], null);
});

garden.selectors.CSSSelector.cljs$lang$type = true;

garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.selectors/CSSSelector");
});

garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"garden.selectors/CSSSelector");
});

garden.selectors.__GT_CSSSelector = (function garden$selectors$__GT_CSSSelector(selector){
return (new garden.selectors.CSSSelector(selector,null,null,null));
});

garden.selectors.map__GT_CSSSelector = (function garden$selectors$map__GT_CSSSelector(G__25397){
return (new garden.selectors.CSSSelector(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(G__25397),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25397,cljs.core.cst$kw$selector),null));
});

garden.selectors.selector = (function garden$selectors$selector(x){
return (new garden.selectors.CSSSelector(x,null,null,null));
});
garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$a,cljs.core.cst$sym$abbr,cljs.core.cst$sym$address,cljs.core.cst$sym$area,cljs.core.cst$sym$article,cljs.core.cst$sym$aside,cljs.core.cst$sym$audio,cljs.core.cst$sym$b,cljs.core.cst$sym$base,cljs.core.cst$sym$bdi,cljs.core.cst$sym$bdo,cljs.core.cst$sym$blockquote,cljs.core.cst$sym$body,cljs.core.cst$sym$br,cljs.core.cst$sym$button,cljs.core.cst$sym$canvas,cljs.core.cst$sym$caption,cljs.core.cst$sym$cite,cljs.core.cst$sym$code,cljs.core.cst$sym$col,cljs.core.cst$sym$colgroup,cljs.core.cst$sym$command,cljs.core.cst$sym$datalist,cljs.core.cst$sym$dd,cljs.core.cst$sym$del,cljs.core.cst$sym$details,cljs.core.cst$sym$dfn,cljs.core.cst$sym$div,cljs.core.cst$sym$dl,cljs.core.cst$sym$dt,cljs.core.cst$sym$em,cljs.core.cst$sym$embed,cljs.core.cst$sym$fieldset,cljs.core.cst$sym$figcaption,cljs.core.cst$sym$figure,cljs.core.cst$sym$footer,cljs.core.cst$sym$form,cljs.core.cst$sym$h1,cljs.core.cst$sym$h2,cljs.core.cst$sym$h3,cljs.core.cst$sym$h4,cljs.core.cst$sym$h5,cljs.core.cst$sym$h6,cljs.core.cst$sym$head,cljs.core.cst$sym$header,cljs.core.cst$sym$hgroup,cljs.core.cst$sym$hr,cljs.core.cst$sym$html,cljs.core.cst$sym$i,cljs.core.cst$sym$iframe,cljs.core.cst$sym$img,cljs.core.cst$sym$input,cljs.core.cst$sym$ins,cljs.core.cst$sym$kbd,cljs.core.cst$sym$keygen,cljs.core.cst$sym$label,cljs.core.cst$sym$legend,cljs.core.cst$sym$li,cljs.core.cst$sym$link,cljs.core.cst$sym$map,cljs.core.cst$sym$mark,cljs.core.cst$sym$math,cljs.core.cst$sym$menu,cljs.core.cst$sym$meta,cljs.core.cst$sym$meter,cljs.core.cst$sym$nav,cljs.core.cst$sym$noscript,cljs.core.cst$sym$object,cljs.core.cst$sym$ol,cljs.core.cst$sym$optgroup,cljs.core.cst$sym$option,cljs.core.cst$sym$output,cljs.core.cst$sym$p,cljs.core.cst$sym$param,cljs.core.cst$sym$pre,cljs.core.cst$sym$progress,cljs.core.cst$sym$q,cljs.core.cst$sym$rp,cljs.core.cst$sym$rt,cljs.core.cst$sym$ruby,cljs.core.cst$sym$s,cljs.core.cst$sym$samp,cljs.core.cst$sym$script,cljs.core.cst$sym$section,cljs.core.cst$sym$select,cljs.core.cst$sym$small,cljs.core.cst$sym$source,cljs.core.cst$sym$span,cljs.core.cst$sym$strong,cljs.core.cst$sym$style,cljs.core.cst$sym$sub,cljs.core.cst$sym$summary,cljs.core.cst$sym$sup,cljs.core.cst$sym$svg,cljs.core.cst$sym$table,cljs.core.cst$sym$tbody,cljs.core.cst$sym$td,cljs.core.cst$sym$textarea,cljs.core.cst$sym$tfoot,cljs.core.cst$sym$th,cljs.core.cst$sym$thead,cljs.core.cst$sym$time,cljs.core.cst$sym$title,cljs.core.cst$sym$tr,cljs.core.cst$sym$track,cljs.core.cst$sym$u,cljs.core.cst$sym$ul,cljs.core.cst$sym$var,cljs.core.cst$sym$video,cljs.core.cst$sym$wbr], true);
/**
 * CSS a type selector.
 */
garden.selectors.a = garden.selectors.selector("a");

/**
 * CSS abbr type selector.
 */
garden.selectors.abbr = garden.selectors.selector("abbr");

/**
 * CSS address type selector.
 */
garden.selectors.address = garden.selectors.selector("address");

/**
 * CSS area type selector.
 */
garden.selectors.area = garden.selectors.selector("area");

/**
 * CSS article type selector.
 */
garden.selectors.article = garden.selectors.selector("article");

/**
 * CSS aside type selector.
 */
garden.selectors.aside = garden.selectors.selector("aside");

/**
 * CSS audio type selector.
 */
garden.selectors.audio = garden.selectors.selector("audio");

/**
 * CSS b type selector.
 */
garden.selectors.b = garden.selectors.selector("b");

/**
 * CSS base type selector.
 */
garden.selectors.base = garden.selectors.selector("base");

/**
 * CSS bdi type selector.
 */
garden.selectors.bdi = garden.selectors.selector("bdi");

/**
 * CSS bdo type selector.
 */
garden.selectors.bdo = garden.selectors.selector("bdo");

/**
 * CSS blockquote type selector.
 */
garden.selectors.blockquote = garden.selectors.selector("blockquote");

/**
 * CSS body type selector.
 */
garden.selectors.body = garden.selectors.selector("body");

/**
 * CSS br type selector.
 */
garden.selectors.br = garden.selectors.selector("br");

/**
 * CSS button type selector.
 */
garden.selectors.button = garden.selectors.selector("button");

/**
 * CSS canvas type selector.
 */
garden.selectors.canvas = garden.selectors.selector("canvas");

/**
 * CSS caption type selector.
 */
garden.selectors.caption = garden.selectors.selector("caption");

/**
 * CSS cite type selector.
 */
garden.selectors.cite = garden.selectors.selector("cite");

/**
 * CSS code type selector.
 */
garden.selectors.code = garden.selectors.selector("code");

/**
 * CSS col type selector.
 */
garden.selectors.col = garden.selectors.selector("col");

/**
 * CSS colgroup type selector.
 */
garden.selectors.colgroup = garden.selectors.selector("colgroup");

/**
 * CSS command type selector.
 */
garden.selectors.command = garden.selectors.selector("command");

/**
 * CSS datalist type selector.
 */
garden.selectors.datalist = garden.selectors.selector("datalist");

/**
 * CSS dd type selector.
 */
garden.selectors.dd = garden.selectors.selector("dd");

/**
 * CSS del type selector.
 */
garden.selectors.del = garden.selectors.selector("del");

/**
 * CSS details type selector.
 */
garden.selectors.details = garden.selectors.selector("details");

/**
 * CSS dfn type selector.
 */
garden.selectors.dfn = garden.selectors.selector("dfn");

/**
 * CSS div type selector.
 */
garden.selectors.div = garden.selectors.selector("div");

/**
 * CSS dl type selector.
 */
garden.selectors.dl = garden.selectors.selector("dl");

/**
 * CSS dt type selector.
 */
garden.selectors.dt = garden.selectors.selector("dt");

/**
 * CSS em type selector.
 */
garden.selectors.em = garden.selectors.selector("em");

/**
 * CSS embed type selector.
 */
garden.selectors.embed = garden.selectors.selector("embed");

/**
 * CSS fieldset type selector.
 */
garden.selectors.fieldset = garden.selectors.selector("fieldset");

/**
 * CSS figcaption type selector.
 */
garden.selectors.figcaption = garden.selectors.selector("figcaption");

/**
 * CSS figure type selector.
 */
garden.selectors.figure = garden.selectors.selector("figure");

/**
 * CSS footer type selector.
 */
garden.selectors.footer = garden.selectors.selector("footer");

/**
 * CSS form type selector.
 */
garden.selectors.form = garden.selectors.selector("form");

/**
 * CSS h1 type selector.
 */
garden.selectors.h1 = garden.selectors.selector("h1");

/**
 * CSS h2 type selector.
 */
garden.selectors.h2 = garden.selectors.selector("h2");

/**
 * CSS h3 type selector.
 */
garden.selectors.h3 = garden.selectors.selector("h3");

/**
 * CSS h4 type selector.
 */
garden.selectors.h4 = garden.selectors.selector("h4");

/**
 * CSS h5 type selector.
 */
garden.selectors.h5 = garden.selectors.selector("h5");

/**
 * CSS h6 type selector.
 */
garden.selectors.h6 = garden.selectors.selector("h6");

/**
 * CSS head type selector.
 */
garden.selectors.head = garden.selectors.selector("head");

/**
 * CSS header type selector.
 */
garden.selectors.header = garden.selectors.selector("header");

/**
 * CSS hgroup type selector.
 */
garden.selectors.hgroup = garden.selectors.selector("hgroup");

/**
 * CSS hr type selector.
 */
garden.selectors.hr = garden.selectors.selector("hr");

/**
 * CSS html type selector.
 */
garden.selectors.html = garden.selectors.selector("html");

/**
 * CSS i type selector.
 */
garden.selectors.i = garden.selectors.selector("i");

/**
 * CSS iframe type selector.
 */
garden.selectors.iframe = garden.selectors.selector("iframe");

/**
 * CSS img type selector.
 */
garden.selectors.img = garden.selectors.selector("img");

/**
 * CSS input type selector.
 */
garden.selectors.input = garden.selectors.selector("input");

/**
 * CSS ins type selector.
 */
garden.selectors.ins = garden.selectors.selector("ins");

/**
 * CSS kbd type selector.
 */
garden.selectors.kbd = garden.selectors.selector("kbd");

/**
 * CSS keygen type selector.
 */
garden.selectors.keygen = garden.selectors.selector("keygen");

/**
 * CSS label type selector.
 */
garden.selectors.label = garden.selectors.selector("label");

/**
 * CSS legend type selector.
 */
garden.selectors.legend = garden.selectors.selector("legend");

/**
 * CSS li type selector.
 */
garden.selectors.li = garden.selectors.selector("li");

/**
 * CSS link type selector.
 */
garden.selectors.link = garden.selectors.selector("link");

/**
 * CSS map type selector.
 */
garden.selectors.map = garden.selectors.selector("map");

/**
 * CSS mark type selector.
 */
garden.selectors.mark = garden.selectors.selector("mark");

/**
 * CSS math type selector.
 */
garden.selectors.math = garden.selectors.selector("math");

/**
 * CSS menu type selector.
 */
garden.selectors.menu = garden.selectors.selector("menu");

/**
 * CSS meta type selector.
 */
garden.selectors.meta = garden.selectors.selector("meta");

/**
 * CSS meter type selector.
 */
garden.selectors.meter = garden.selectors.selector("meter");

/**
 * CSS nav type selector.
 */
garden.selectors.nav = garden.selectors.selector("nav");

/**
 * CSS noscript type selector.
 */
garden.selectors.noscript = garden.selectors.selector("noscript");

/**
 * CSS object type selector.
 */
garden.selectors.object = garden.selectors.selector("object");

/**
 * CSS ol type selector.
 */
garden.selectors.ol = garden.selectors.selector("ol");

/**
 * CSS optgroup type selector.
 */
garden.selectors.optgroup = garden.selectors.selector("optgroup");

/**
 * CSS option type selector.
 */
garden.selectors.option = garden.selectors.selector("option");

/**
 * CSS output type selector.
 */
garden.selectors.output = garden.selectors.selector("output");

/**
 * CSS p type selector.
 */
garden.selectors.p = garden.selectors.selector("p");

/**
 * CSS param type selector.
 */
garden.selectors.param = garden.selectors.selector("param");

/**
 * CSS pre type selector.
 */
garden.selectors.pre = garden.selectors.selector("pre");

/**
 * CSS progress type selector.
 */
garden.selectors.progress = garden.selectors.selector("progress");

/**
 * CSS q type selector.
 */
garden.selectors.q = garden.selectors.selector("q");

/**
 * CSS rp type selector.
 */
garden.selectors.rp = garden.selectors.selector("rp");

/**
 * CSS rt type selector.
 */
garden.selectors.rt = garden.selectors.selector("rt");

/**
 * CSS ruby type selector.
 */
garden.selectors.ruby = garden.selectors.selector("ruby");

/**
 * CSS s type selector.
 */
garden.selectors.s = garden.selectors.selector("s");

/**
 * CSS samp type selector.
 */
garden.selectors.samp = garden.selectors.selector("samp");

/**
 * CSS script type selector.
 */
garden.selectors.script = garden.selectors.selector("script");

/**
 * CSS section type selector.
 */
garden.selectors.section = garden.selectors.selector("section");

/**
 * CSS select type selector.
 */
garden.selectors.select = garden.selectors.selector("select");

/**
 * CSS small type selector.
 */
garden.selectors.small = garden.selectors.selector("small");

/**
 * CSS source type selector.
 */
garden.selectors.source = garden.selectors.selector("source");

/**
 * CSS span type selector.
 */
garden.selectors.span = garden.selectors.selector("span");

/**
 * CSS strong type selector.
 */
garden.selectors.strong = garden.selectors.selector("strong");

/**
 * CSS style type selector.
 */
garden.selectors.style = garden.selectors.selector("style");

/**
 * CSS sub type selector.
 */
garden.selectors.sub = garden.selectors.selector("sub");

/**
 * CSS summary type selector.
 */
garden.selectors.summary = garden.selectors.selector("summary");

/**
 * CSS sup type selector.
 */
garden.selectors.sup = garden.selectors.selector("sup");

/**
 * CSS svg type selector.
 */
garden.selectors.svg = garden.selectors.selector("svg");

/**
 * CSS table type selector.
 */
garden.selectors.table = garden.selectors.selector("table");

/**
 * CSS tbody type selector.
 */
garden.selectors.tbody = garden.selectors.selector("tbody");

/**
 * CSS td type selector.
 */
garden.selectors.td = garden.selectors.selector("td");

/**
 * CSS textarea type selector.
 */
garden.selectors.textarea = garden.selectors.selector("textarea");

/**
 * CSS tfoot type selector.
 */
garden.selectors.tfoot = garden.selectors.selector("tfoot");

/**
 * CSS th type selector.
 */
garden.selectors.th = garden.selectors.selector("th");

/**
 * CSS thead type selector.
 */
garden.selectors.thead = garden.selectors.selector("thead");

/**
 * CSS time type selector.
 */
garden.selectors.time = garden.selectors.selector("time");

/**
 * CSS title type selector.
 */
garden.selectors.title = garden.selectors.selector("title");

/**
 * CSS tr type selector.
 */
garden.selectors.tr = garden.selectors.selector("tr");

/**
 * CSS track type selector.
 */
garden.selectors.track = garden.selectors.selector("track");

/**
 * CSS u type selector.
 */
garden.selectors.u = garden.selectors.selector("u");

/**
 * CSS ul type selector.
 */
garden.selectors.ul = garden.selectors.selector("ul");

/**
 * CSS var type selector.
 */
garden.selectors.var$ = garden.selectors.selector("var");

/**
 * CSS video type selector.
 */
garden.selectors.video = garden.selectors.selector("video");

/**
 * CSS wbr type selector.
 */
garden.selectors.wbr = garden.selectors.selector("wbr");
garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$active,cljs.core.cst$sym$checked,cljs.core.cst$sym$default,cljs.core.cst$sym$disabled,cljs.core.cst$sym$empty,cljs.core.cst$sym$enabled,cljs.core.cst$sym$first,cljs.core.cst$sym$first_DASH_child,cljs.core.cst$sym$first_DASH_of_DASH_type,cljs.core.cst$sym$fullscreen,cljs.core.cst$sym$focus,cljs.core.cst$sym$hover,cljs.core.cst$sym$indeterminate,cljs.core.cst$sym$in_DASH_range,cljs.core.cst$sym$invalid,cljs.core.cst$sym$last_DASH_child,cljs.core.cst$sym$last_DASH_of_DASH_type,cljs.core.cst$sym$left,cljs.core.cst$sym$link,cljs.core.cst$sym$only_DASH_child,cljs.core.cst$sym$only_DASH_of_DASH_type,cljs.core.cst$sym$optional,cljs.core.cst$sym$out_DASH_of_DASH_range,cljs.core.cst$sym$read_DASH_only,cljs.core.cst$sym$read_DASH_write,cljs.core.cst$sym$required,cljs.core.cst$sym$right,cljs.core.cst$sym$root,cljs.core.cst$sym$scope,cljs.core.cst$sym$target,cljs.core.cst$sym$valid,cljs.core.cst$sym$visited], true);
/**
 * CSS :active pseudo-class selector.
 */
garden.selectors.active = garden.selectors.selector(":active");

/**
 * CSS :checked pseudo-class selector.
 */
garden.selectors.checked = garden.selectors.selector(":checked");

/**
 * CSS :default pseudo-class selector.
 */
garden.selectors.default$ = garden.selectors.selector(":default");

/**
 * CSS :disabled pseudo-class selector.
 */
garden.selectors.disabled = garden.selectors.selector(":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
garden.selectors.empty = garden.selectors.selector(":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
garden.selectors.enabled = garden.selectors.selector(":enabled");

/**
 * CSS :first pseudo-class selector.
 */
garden.selectors.first = garden.selectors.selector(":first");

/**
 * CSS :first-child pseudo-class selector.
 */
garden.selectors.first_child = garden.selectors.selector(":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
garden.selectors.first_of_type = garden.selectors.selector(":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
garden.selectors.fullscreen = garden.selectors.selector(":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
garden.selectors.focus = garden.selectors.selector(":focus");

/**
 * CSS :hover pseudo-class selector.
 */
garden.selectors.hover = garden.selectors.selector(":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
garden.selectors.indeterminate = garden.selectors.selector(":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
garden.selectors.in_range = garden.selectors.selector(":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
garden.selectors.invalid = garden.selectors.selector(":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
garden.selectors.last_child = garden.selectors.selector(":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
garden.selectors.last_of_type = garden.selectors.selector(":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
garden.selectors.left = garden.selectors.selector(":left");

/**
 * CSS :link pseudo-class selector.
 */
garden.selectors.link = garden.selectors.selector(":link");

/**
 * CSS :only-child pseudo-class selector.
 */
garden.selectors.only_child = garden.selectors.selector(":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
garden.selectors.only_of_type = garden.selectors.selector(":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
garden.selectors.optional = garden.selectors.selector(":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
garden.selectors.out_of_range = garden.selectors.selector(":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
garden.selectors.read_only = garden.selectors.selector(":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
garden.selectors.read_write = garden.selectors.selector(":read-write");

/**
 * CSS :required pseudo-class selector.
 */
garden.selectors.required = garden.selectors.selector(":required");

/**
 * CSS :right pseudo-class selector.
 */
garden.selectors.right = garden.selectors.selector(":right");

/**
 * CSS :root pseudo-class selector.
 */
garden.selectors.root = garden.selectors.selector(":root");

/**
 * CSS :scope pseudo-class selector.
 */
garden.selectors.scope = garden.selectors.selector(":scope");

/**
 * CSS :target pseudo-class selector.
 */
garden.selectors.target = garden.selectors.selector(":target");

/**
 * CSS :valid pseudo-class selector.
 */
garden.selectors.valid = garden.selectors.selector(":valid");

/**
 * CSS :visited pseudo-class selector.
 */
garden.selectors.visited = garden.selectors.selector(":visited");
/**
 * @param {...*} var_args
 */
garden.selectors.lang = (function() { 
var garden$selectors$lang__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (language){
return cljs.core.name(language);
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("lang"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$lang = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25407__i = 0, G__25407__a = new Array(arguments.length -  0);
while (G__25407__i < G__25407__a.length) {G__25407__a[G__25407__i] = arguments[G__25407__i + 0]; ++G__25407__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25407__a,0);
} 
return garden$selectors$lang__delegate.call(this,args__16911__auto__);};
garden$selectors$lang.cljs$lang$maxFixedArity = 0;
garden$selectors$lang.cljs$lang$applyTo = (function (arglist__25408){
var args__16911__auto__ = cljs.core.seq(arglist__25408);
return garden$selectors$lang__delegate(args__16911__auto__);
});
garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$lang__delegate;
return garden$selectors$lang;
})()
;
/**
 * @param {...*} var_args
 */
garden.selectors.not = (function() { 
var garden$selectors$not__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (selector){
return garden.selectors.css_selector(selector);
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("not"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$not = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25409__i = 0, G__25409__a = new Array(arguments.length -  0);
while (G__25409__i < G__25409__a.length) {G__25409__a[G__25409__i] = arguments[G__25409__i + 0]; ++G__25409__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25409__a,0);
} 
return garden$selectors$not__delegate.call(this,args__16911__auto__);};
garden$selectors$not.cljs$lang$maxFixedArity = 0;
garden$selectors$not.cljs$lang$applyTo = (function (arglist__25410){
var args__16911__auto__ = cljs.core.seq(arglist__25410);
return garden$selectors$not__delegate(args__16911__auto__);
});
garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$not__delegate;
return garden$selectors$not;
})()
;
garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
garden.selectors.nth_x = (function garden$selectors$nth_x(x){
if((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Agument must be a string, keyword, or symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$symbol_QMARK_,cljs.core.cst$sym$x))], 0)))].join('')));
}

var s = cljs.core.name(x);
var temp__4423__auto__ = cljs.core.re_matches(garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return m;
} else {
throw (new Error());
}
});
/**
 * CSS :nth-child pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_child = (function() { 
var garden$selectors$nth_child__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'number'){
return garden.selectors.nth_x([cljs.core.str(x),cljs.core.str("n")].join(''));
} else {
return garden.selectors.nth_x(x);
}
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("nth-child"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_child = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25411__i = 0, G__25411__a = new Array(arguments.length -  0);
while (G__25411__i < G__25411__a.length) {G__25411__a[G__25411__i] = arguments[G__25411__i + 0]; ++G__25411__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25411__a,0);
} 
return garden$selectors$nth_child__delegate.call(this,args__16911__auto__);};
garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__25412){
var args__16911__auto__ = cljs.core.seq(arglist__25412);
return garden$selectors$nth_child__delegate(args__16911__auto__);
});
garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_child__delegate;
return garden$selectors$nth_child;
})()
;
/**
 * CSS :nth-last-child pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_last_child = (function() { 
var garden$selectors$nth_last_child__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("nth-last-child"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_last_child = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25413__i = 0, G__25413__a = new Array(arguments.length -  0);
while (G__25413__i < G__25413__a.length) {G__25413__a[G__25413__i] = arguments[G__25413__i + 0]; ++G__25413__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25413__a,0);
} 
return garden$selectors$nth_last_child__delegate.call(this,args__16911__auto__);};
garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__25414){
var args__16911__auto__ = cljs.core.seq(arglist__25414);
return garden$selectors$nth_last_child__delegate(args__16911__auto__);
});
garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_child__delegate;
return garden$selectors$nth_last_child;
})()
;
/**
 * CSS :nth-of-type pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_of_type = (function() { 
var garden$selectors$nth_of_type__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("nth-of-type"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_of_type = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25415__i = 0, G__25415__a = new Array(arguments.length -  0);
while (G__25415__i < G__25415__a.length) {G__25415__a[G__25415__i] = arguments[G__25415__i + 0]; ++G__25415__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25415__a,0);
} 
return garden$selectors$nth_of_type__delegate.call(this,args__16911__auto__);};
garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__25416){
var args__16911__auto__ = cljs.core.seq(arglist__25416);
return garden$selectors$nth_of_type__delegate(args__16911__auto__);
});
garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_of_type__delegate;
return garden$selectors$nth_of_type;
})()
;
/**
 * CSS :nth-last-of-type pseudo class selector.
 * @param {...*} var_args
 */
garden.selectors.nth_last_of_type = (function() { 
var garden$selectors$nth_last_of_type__delegate = function (args__16911__auto__){
var v__16912__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__16911__auto__);
var v__16912__auto____$1 = (cljs.core.truth_(garden.selectors.selector_QMARK_(v__16912__auto__))?garden.selectors.css_selector(v__16912__auto__):v__16912__auto__);
return garden.selectors.selector([cljs.core.str(":"),cljs.core.str("nth-last-of-type"),cljs.core.str("("),cljs.core.str(v__16912__auto____$1),cljs.core.str(")")].join(''));
};
var garden$selectors$nth_last_of_type = function (var_args){
var args__16911__auto__ = null;
if (arguments.length > 0) {
var G__25417__i = 0, G__25417__a = new Array(arguments.length -  0);
while (G__25417__i < G__25417__a.length) {G__25417__a[G__25417__i] = arguments[G__25417__i + 0]; ++G__25417__i;}
  args__16911__auto__ = new cljs.core.IndexedSeq(G__25417__a,0);
} 
return garden$selectors$nth_last_of_type__delegate.call(this,args__16911__auto__);};
garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__25418){
var args__16911__auto__ = cljs.core.seq(arglist__25418);
return garden$selectors$nth_last_of_type__delegate(args__16911__auto__);
});
garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_of_type__delegate;
return garden$selectors$nth_last_of_type;
})()
;
/**
 * CSS ::after pseudo element selector.
 */
garden.selectors.after = garden.selectors.selector("::after");
/**
 * CSS ::before pseudo element selector.
 */
garden.selectors.before = garden.selectors.selector("::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
garden.selectors.first_letter = garden.selectors.selector("::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
garden.selectors.first_line = garden.selectors.selector("::first-line");
garden.selectors.attr = (function garden$selectors$attr(var_args){
var args25419 = [];
var len__6152__auto___25422 = arguments.length;
var i__6153__auto___25423 = (0);
while(true){
if((i__6153__auto___25423 < len__6152__auto___25422)){
args25419.push((arguments[i__6153__auto___25423]));

var G__25424 = (i__6153__auto___25423 + (1));
i__6153__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var G__25421 = args25419.length;
switch (G__25421) {
case 1:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25419.length)].join('')));

}
});

garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return garden.selectors.selector([cljs.core.str("["),cljs.core.str(cljs.core.name(attr_name)),cljs.core.str("]")].join(''));
});

garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name(attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches(/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)));
return garden.selectors.selector([cljs.core.str("["),cljs.core.str(cljs.core.name(attr_name)),cljs.core.str(cljs.core.name(op)),cljs.core.str(v__$1),cljs.core.str("]")].join(''));
});

garden.selectors.attr.cljs$lang$maxFixedArity = 3;
garden.selectors.attr_EQ_ = (function garden$selectors$attr_EQ_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"=",attr_value);
});
garden.selectors.attr_contains = (function garden$selectors$attr_contains(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"~=",attr_value);
});
garden.selectors.attr_starts_with = (function garden$selectors$attr_starts_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"^=",attr_value);
});
garden.selectors.attr_starts_with_STAR_ = (function garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"|=",attr_value);
});
garden.selectors.attr_ends_with = (function garden$selectors$attr_ends_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"$=",attr_value);
});
garden.selectors.attr_matches = (function garden$selectors$attr_matches(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
garden.selectors.descendant = (function garden$selectors$descendant(var_args){
var args25426 = [];
var len__6152__auto___25432 = arguments.length;
var i__6153__auto___25433 = (0);
while(true){
if((i__6153__auto___25433 < len__6152__auto___25432)){
args25426.push((arguments[i__6153__auto___25433]));

var G__25434 = (i__6153__auto___25433 + (1));
i__6153__auto___25433 = G__25434;
continue;
} else {
}
break;
}

var G__25431 = args25426.length;
switch (G__25431) {
case 2:
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6171__auto__ = (new cljs.core.IndexedSeq(args25426.slice((2)),(0)));
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6171__auto__);

}
});

garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(" "),cljs.core.str(garden.selectors.css_selector(b))].join(''));
});

garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2(a,b),more))));
});

garden.selectors.descendant.cljs$lang$applyTo = (function (seq25427){
var G__25428 = cljs.core.first(seq25427);
var seq25427__$1 = cljs.core.next(seq25427);
var G__25429 = cljs.core.first(seq25427__$1);
var seq25427__$2 = cljs.core.next(seq25427__$1);
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic(G__25428,G__25429,seq25427__$2);
});

garden.selectors.descendant.cljs$lang$maxFixedArity = (2);
/**
 * Adjacent sibling combinator.
 */
garden.selectors._PLUS_ = (function garden$selectors$_PLUS_(a,b){
return garden.selectors.selector([cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(" + "),cljs.core.str(garden.selectors.css_selector(b))].join(''));
});
/**
 * General sibling combinator.
 */
garden.selectors._ = (function garden$selectors$_(a,b){
return garden.selectors.selector([cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(" ~ "),cljs.core.str(garden.selectors.css_selector(b))].join(''));
});
/**
 * Child combinator.
 */
garden.selectors._GT_ = (function garden$selectors$_GT_(var_args){
var args25436 = [];
var len__6152__auto___25442 = arguments.length;
var i__6153__auto___25443 = (0);
while(true){
if((i__6153__auto___25443 < len__6152__auto___25442)){
args25436.push((arguments[i__6153__auto___25443]));

var G__25444 = (i__6153__auto___25443 + (1));
i__6153__auto___25443 = G__25444;
continue;
} else {
}
break;
}

var G__25441 = args25436.length;
switch (G__25441) {
case 1:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6171__auto__ = (new cljs.core.IndexedSeq(args25436.slice((2)),(0)));
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6171__auto__);

}
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return garden.selectors.selector(a);
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str(garden.selectors.css_selector(a)),cljs.core.str(" > "),cljs.core.str(garden.selectors.css_selector(b))].join(''));
});

garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(a,b),more))));
});

garden.selectors._GT_.cljs$lang$applyTo = (function (seq25437){
var G__25438 = cljs.core.first(seq25437);
var seq25437__$1 = cljs.core.next(seq25437);
var G__25439 = cljs.core.first(seq25437__$1);
var seq25437__$2 = cljs.core.next(seq25437__$1);
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic(G__25438,G__25439,seq25437__$2);
});

garden.selectors._GT_.cljs$lang$maxFixedArity = (2);
/**
 * Parent selector.
 */
garden.selectors._AMPERSAND_ = garden.selectors.selector("&");
garden.selectors.lex_specificity = (function garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some(((function (id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re){
return (function (p__25448){
var vec__25449 = p__25448;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,(1),null);
var temp__4423__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
});})(id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,cljs.core.cst$kw$a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,cljs.core.cst$kw$c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,cljs.core.cst$kw$c], null)], null));
});
garden.selectors.specificity_STAR_ = (function garden$selectors$specificity_STAR_(selector){
var s = garden.selectors.css_selector(selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$a,(0),cljs.core.cst$kw$b,(0),cljs.core.cst$kw$c,(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_(s__$1)){
return score__$1;
} else {
var temp__4423__auto__ = garden.selectors.lex_specificity(s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25452 = temp__4423__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25452,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25452,(1),null);
var temp__4423__auto____$1 = cljs.core.re_find(/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__4423__auto____$1)){
var vec__25453 = temp__4423__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25453,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25453,(1),null);
var G__25454 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__25455 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([score__$1,garden$selectors$specificity_STAR_(inner)], 0));
s__$1 = G__25454;
score__$1 = G__25455;
continue;
} else {
var G__25456 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__25457 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__25456;
score__$1 = G__25457;
continue;
}
} else {
var G__25458 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1));
var G__25459 = score__$1;
s__$1 = G__25458;
score__$1 = G__25459;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 *   
 *   Example:
 * 
 *  (specificity "#s12:not(FOO)")
 *  ;; => 101
 *  (specificity (a hover))
 *  ;; => 10
 *   
 */
garden.selectors.specificity = (function garden$selectors$specificity(selector){
if(((!((selector == null)))?(((false) || (selector.garden$selectors$ICSSSelector$))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector):false)):cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$ICSSSelector,cljs.core.cst$sym$selector)], 0)))].join('')));
}

var map__25464 = garden.selectors.specificity_STAR_(selector);
var map__25464__$1 = ((((!((map__25464 == null)))?((((map__25464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25464):map__25464);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25464__$1,cljs.core.cst$kw$a);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25464__$1,cljs.core.cst$kw$b);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25464__$1,cljs.core.cst$kw$c);
var sv = clojure.string.replace([cljs.core.str(a),cljs.core.str(b),cljs.core.str(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_(sv)){
return (0);
} else {
return parseInt(sv);
}
});
