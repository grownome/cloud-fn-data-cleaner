goog.provide('shadow.test.env');
goog.require('cljs.core');
if(typeof shadow.test.env.tests_ref !== 'undefined'){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.register_test = (function shadow$test$env$register_test(test_ns,test_name,test_var){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_ns,new cljs.core.Keyword(null,"vars","vars",-2046957217),test_name], null),test_var);
});
shadow.test.env.register_fixtures = (function shadow$test$env$register_fixtures(test_ns,type,fix){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_ns,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994),type], null),fix);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__6008__auto__ = (function shadow$test$env$get_test_count_$_iter__34457(s__34458){
return (new cljs.core.LazySeq(null,(function (){
var s__34458__$1 = s__34458;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__34458__$1);
if(temp__5457__auto__){
var s__34458__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34458__$2)){
var c__6006__auto__ = cljs.core.chunk_first(s__34458__$2);
var size__6007__auto__ = cljs.core.count(c__6006__auto__);
var b__34460 = cljs.core.chunk_buffer(size__6007__auto__);
if((function (){var i__34459 = (0);
while(true){
if((i__34459 < size__6007__auto__)){
var map__34461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6006__auto__,i__34459);
var map__34461__$1 = ((((!((map__34461 == null)))?((((map__34461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34461):map__34461);
var test_ns = map__34461__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34461__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__34460,cljs.core.count(vars));

var G__34471 = (i__34459 + (1));
i__34459 = G__34471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34460),shadow$test$env$get_test_count_$_iter__34457(cljs.core.chunk_rest(s__34458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34460),null);
}
} else {
var map__34465 = cljs.core.first(s__34458__$2);
var map__34465__$1 = ((((!((map__34465 == null)))?((((map__34465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34465):map__34465);
var test_ns = map__34465__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__34457(cljs.core.rest(s__34458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6008__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
