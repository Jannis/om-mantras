// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.util');
goog.require('cljs.core');
om_mantras.util.indexes_of = (function om_mantras$util$indexes_of(x,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__22015_SHARP_,p2__22014_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p2__22014_SHARP_)){
return p1__22015_SHARP_;
} else {
return null;
}
}),coll);
});
om_mantras.util.index_of = (function om_mantras$util$index_of(x,coll){
return cljs.core.first(om_mantras.util.indexes_of(x,coll));
});
