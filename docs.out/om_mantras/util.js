// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.util');
goog.require('cljs.core');
om_mantras.util.indexes_of = (function om_mantras$util$indexes_of(x,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__26774_SHARP_,p2__26773_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p2__26773_SHARP_)){
return p1__26774_SHARP_;
} else {
return null;
}
}),coll);
});
om_mantras.util.index_of = (function om_mantras$util$index_of(x,coll){
return cljs.core.first(om_mantras.util.indexes_of(x,coll));
});
