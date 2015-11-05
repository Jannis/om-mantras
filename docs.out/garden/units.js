// Compiled by ClojureScript 1.7.145 {}
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('garden.types');
goog.require('garden.util');
goog.require('cljs.reader');
garden.units.length_units = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)], true);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_.call(null,garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_.call(null,garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_.call(null,garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_.call(null,garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_.call(null,garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,"%"),(1)], true, false),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),(1),new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_.call(null,garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__23671,right){
var map__23674 = p__23671;
var map__23674__$1 = ((((!((map__23674 == null)))?((((map__23674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23674):map__23674);
var m = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.call(null,[cljs.core.str("Inconvertible unit "),cljs.core.str(cljs.core.name.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__4425__auto__ = cljs.core.re_matches.call(null,garden.units.unit_re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__23677 = temp__4425__auto__;
var _ = cljs.core.nth.call(null,vec__23677,(0),null);
var magnitude = cljs.core.nth.call(null,vec__23677,(1),null);
var unit = cljs.core.nth.call(null,vec__23677,(2),null);
var unit__$1 = cljs.core.keyword.call(null,unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
var and__5082__auto__ = garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit);
} else {
return and__5082__auto__;
}
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
var or__5094__auto__ = (function (){var and__5082__auto__ = cljs.core._EQ_.call(null,unit.call(null,x),unit);
if(and__5082__auto__){
return x;
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return garden.units.convert.call(null,x,unit);
}
} else {
throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Don't know how to convert type %s to %s",cljs.core.type.call(null,x).getName(),cljs.core.name.call(null,unit)),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return u.call(null,(0));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return u.call(null,x);
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__23690 = u.call(null,x);
var map__23690__$1 = ((((!((map__23690 == null)))?((((map__23690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23690):map__23690);
var m1 = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__23691 = u.call(null,y);
var map__23691__$1 = ((((!((map__23691 == null)))?((((map__23691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23691):map__23691);
var m2 = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 + m2));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__23694__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.call(null,x,y),more);
};
var G__23694 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__23695__i = 0, G__23695__a = new Array(arguments.length -  2);
while (G__23695__i < G__23695__a.length) {G__23695__a[G__23695__i] = arguments[G__23695__i + 2]; ++G__23695__i;}
  more = new cljs.core.IndexedSeq(G__23695__a,0);
} 
return G__23694__delegate.call(this,x,y,more);};
G__23694.cljs$lang$maxFixedArity = 2;
G__23694.cljs$lang$applyTo = (function (arglist__23696){
var x = cljs.core.first(arglist__23696);
arglist__23696 = cljs.core.next(arglist__23696);
var y = cljs.core.first(arglist__23696);
var more = cljs.core.rest(arglist__23696);
return G__23694__delegate(x,y,more);
});
G__23694.cljs$core$IFn$_invoke$arity$variadic = G__23694__delegate;
return G__23694;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__23697 = null;
if (arguments.length > 2) {
var G__23698__i = 0, G__23698__a = new Array(arguments.length -  2);
while (G__23698__i < G__23698__a.length) {G__23698__a[G__23698__i] = arguments[G__23698__i + 2]; ++G__23698__i;}
G__23697 = new cljs.core.IndexedSeq(G__23698__a,0);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__23697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
return u.call(null,(- x));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__23711 = u.call(null,x);
var map__23711__$1 = ((((!((map__23711 == null)))?((((map__23711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23711):map__23711);
var m1 = cljs.core.get.call(null,map__23711__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__23712 = u.call(null,y);
var map__23712__$1 = ((((!((map__23712 == null)))?((((map__23712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23712):map__23712);
var m2 = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 - m2));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__23715__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.call(null,x,y),more);
};
var G__23715 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__23716__i = 0, G__23716__a = new Array(arguments.length -  2);
while (G__23716__i < G__23716__a.length) {G__23716__a[G__23716__i] = arguments[G__23716__i + 2]; ++G__23716__i;}
  more = new cljs.core.IndexedSeq(G__23716__a,0);
} 
return G__23715__delegate.call(this,x,y,more);};
G__23715.cljs$lang$maxFixedArity = 2;
G__23715.cljs$lang$applyTo = (function (arglist__23717){
var x = cljs.core.first(arglist__23717);
arglist__23717 = cljs.core.next(arglist__23717);
var y = cljs.core.first(arglist__23717);
var more = cljs.core.rest(arglist__23717);
return G__23715__delegate(x,y,more);
});
G__23715.cljs$core$IFn$_invoke$arity$variadic = G__23715__delegate;
return G__23715;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__23718 = null;
if (arguments.length > 2) {
var G__23719__i = 0, G__23719__a = new Array(arguments.length -  2);
while (G__23719__i < G__23719__a.length) {G__23719__a[G__23719__i] = arguments[G__23719__i + 2]; ++G__23719__i;}
G__23718 = new cljs.core.IndexedSeq(G__23719__a,0);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__23718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return u.call(null,(1));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return u.call(null,x);
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__23732 = u.call(null,x);
var map__23732__$1 = ((((!((map__23732 == null)))?((((map__23732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23732):map__23732);
var m1 = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__23733 = u.call(null,y);
var map__23733__$1 = ((((!((map__23733 == null)))?((((map__23733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23733):map__23733);
var m2 = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 * m2));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__23736__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.call(null,x,y),more);
};
var G__23736 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__23737__i = 0, G__23737__a = new Array(arguments.length -  2);
while (G__23737__i < G__23737__a.length) {G__23737__a[G__23737__i] = arguments[G__23737__i + 2]; ++G__23737__i;}
  more = new cljs.core.IndexedSeq(G__23737__a,0);
} 
return G__23736__delegate.call(this,x,y,more);};
G__23736.cljs$lang$maxFixedArity = 2;
G__23736.cljs$lang$applyTo = (function (arglist__23738){
var x = cljs.core.first(arglist__23738);
arglist__23738 = cljs.core.next(arglist__23738);
var y = cljs.core.first(arglist__23738);
var more = cljs.core.rest(arglist__23738);
return G__23736__delegate(x,y,more);
});
G__23736.cljs$core$IFn$_invoke$arity$variadic = G__23736__delegate;
return G__23736;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__23739 = null;
if (arguments.length > 2) {
var G__23740__i = 0, G__23740__a = new Array(arguments.length -  2);
while (G__23740__i < G__23740__a.length) {G__23740__a[G__23740__i] = arguments[G__23740__i + 2]; ++G__23740__i;}
G__23739 = new cljs.core.IndexedSeq(G__23740__a,0);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__23739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
return u.call(null,((1) / x));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__23753 = u.call(null,x);
var map__23753__$1 = ((((!((map__23753 == null)))?((((map__23753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23753):map__23753);
var m1 = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__23754 = u.call(null,y);
var map__23754__$1 = ((((!((map__23754 == null)))?((((map__23754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23754):map__23754);
var m2 = cljs.core.get.call(null,map__23754__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 / m2));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__23757__delegate = function (x,y,more){
return cljs.core.reduce.call(null,garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.call(null,x,y),more);
};
var G__23757 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__23758__i = 0, G__23758__a = new Array(arguments.length -  2);
while (G__23758__i < G__23758__a.length) {G__23758__a[G__23758__i] = arguments[G__23758__i + 2]; ++G__23758__i;}
  more = new cljs.core.IndexedSeq(G__23758__a,0);
} 
return G__23757__delegate.call(this,x,y,more);};
G__23757.cljs$lang$maxFixedArity = 2;
G__23757.cljs$lang$applyTo = (function (arglist__23759){
var x = cljs.core.first(arglist__23759);
arglist__23759 = cljs.core.next(arglist__23759);
var y = cljs.core.first(arglist__23759);
var more = cljs.core.rest(arglist__23759);
return G__23757__delegate(x,y,more);
});
G__23757.cljs$core$IFn$_invoke$arity$variadic = G__23757__delegate;
return G__23757;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__23760 = null;
if (arguments.length > 2) {
var G__23761__i = 0, G__23761__a = new Array(arguments.length -  2);
while (G__23761__i < G__23761__a.length) {G__23761__a[G__23761__i] = arguments[G__23761__i + 2]; ++G__23761__i;}
G__23760 = new cljs.core.IndexedSeq(G__23761__a,0);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__23760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
garden.units.cm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.mm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.in$ = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.px = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.pt = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pc = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.percent = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.em = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.ex = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ch = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.rem = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.vw = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vh = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vmin = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmax = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.deg = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.grad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.rad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.turn = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.s = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.ms = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.Hz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.kHz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.dpi = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpcm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dppx = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=units.js.map