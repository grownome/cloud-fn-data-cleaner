goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276 = (function (f,meta32277){
this.f = f;
this.meta32277 = meta32277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32278,meta32277__$1){
var self__ = this;
var _32278__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276(self__.f,meta32277__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32278){
var self__ = this;
var _32278__$1 = this;
return self__.meta32277;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32277","meta32277",2034016159,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers32276";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers32276");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers32276 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers32276(f__$1,meta32277){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276(f__$1,meta32277));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers32276(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__32279 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__32279.cljs$core$IFn$_invoke$arity$1 ? fexpr__32279.cljs$core$IFn$_invoke$arity$1(state) : fexpr__32279.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e32280){if((e32280 instanceof Object)){
var ex = e32280;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e32280;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_32281_32283 = state;
(statearr_32281_32283[(2)] = x);

(statearr_32281_32283[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_32282_32284 = state;
(statearr_32282_32284[(2)] = cljs.core.deref(cb));

(statearr_32282_32284[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_32285_32287 = state;
(statearr_32285_32287[(2)] = ret_val);

(statearr_32285_32287[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_32286_32288 = state;
(statearr_32286_32288[(2)] = cljs.core.deref(cb));

(statearr_32286_32288[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
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
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18321__auto__,k__18322__auto__){
var self__ = this;
var this__18321__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18321__auto____$1,k__18322__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18323__auto__,k32293,else__18324__auto__){
var self__ = this;
var this__18323__auto____$1 = this;
var G__32297 = k32293;
var G__32297__$1 = (((G__32297 instanceof cljs.core.Keyword))?G__32297.fqn:null);
switch (G__32297__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32293,else__18324__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18335__auto__,writer__18336__auto__,opts__18337__auto__){
var self__ = this;
var this__18335__auto____$1 = this;
var pr_pair__18338__auto__ = ((function (this__18335__auto____$1){
return (function (keyval__18339__auto__){
return cljs.core.pr_sequential_writer(writer__18336__auto__,cljs.core.pr_writer,""," ","",opts__18337__auto__,keyval__18339__auto__);
});})(this__18335__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18336__auto__,pr_pair__18338__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__18337__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32292){
var self__ = this;
var G__32292__$1 = this;
return (new cljs.core.RecordIter((0),G__32292__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18319__auto__){
var self__ = this;
var this__18319__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18316__auto__){
var self__ = this;
var this__18316__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18325__auto__){
var self__ = this;
var this__18325__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18317__auto__){
var self__ = this;
var this__18317__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__32298 = ((function (h__5582__auto__,this__18317__auto____$1){
return (function (coll__18318__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__18318__auto__));
});})(h__5582__auto__,this__18317__auto____$1))
;
return fexpr__32298(this__18317__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32294,other32295){
var self__ = this;
var this32294__$1 = this;
return (!((other32295 == null))) && ((this32294__$1.constructor === other32295.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.catch_block,other32295.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.catch_exception,other32295.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.finally_block,other32295.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.continue_block,other32295.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.prev,other32295.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32294__$1.__extmap,other32295.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18330__auto__,k__18331__auto__){
var self__ = this;
var this__18330__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__18331__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18330__auto____$1),self__.__meta),k__18331__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18331__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18328__auto__,k__18329__auto__,G__32292){
var self__ = this;
var this__18328__auto____$1 = this;
var pred__32299 = cljs.core.keyword_identical_QMARK_;
var expr__32300 = k__18329__auto__;
if(cljs.core.truth_((function (){var G__32302 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);
var G__32303 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32302,G__32303) : pred__32299.call(null,G__32302,G__32303));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__32292,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32308 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);
var G__32309 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32308,G__32309) : pred__32299.call(null,G__32308,G__32309));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__32292,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32310 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);
var G__32311 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32310,G__32311) : pred__32299.call(null,G__32310,G__32311));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__32292,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32312 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);
var G__32313 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32312,G__32313) : pred__32299.call(null,G__32312,G__32313));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__32292,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32314 = new cljs.core.Keyword(null,"prev","prev",-1597069226);
var G__32315 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32314,G__32315) : pred__32299.call(null,G__32314,G__32315));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__32292,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18329__auto__,G__32292),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18333__auto__){
var self__ = this;
var this__18333__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18320__auto__,G__32292){
var self__ = this;
var this__18320__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__32292,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18326__auto__,entry__18327__auto__){
var self__ = this;
var this__18326__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18327__auto__)){
return cljs.core._assoc(this__18326__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18327__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18327__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18326__auto____$1,entry__18327__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__32296){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__32296),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__32296),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__32296),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__32296),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__32296),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32296,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_32351 = state;
(statearr_32351[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_32351;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__5114__auto__ = exception;
if(cljs.core.truth_(and__5114__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__5114__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__5114__auto__ = exception;
if(cljs.core.truth_(and__5114__auto__)){
var and__5114__auto____$1 = catch_block;
if(cljs.core.truth_(and__5114__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__5114__auto____$1;
}
} else {
return and__5114__auto__;
}
})())){
var statearr_32352 = state;
(statearr_32352[(1)] = catch_block);

(statearr_32352[(2)] = exception);

(statearr_32352[(5)] = null);

(statearr_32352[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));

return statearr_32352;
} else {
if(cljs.core.truth_((function (){var and__5114__auto__ = exception;
if(cljs.core.truth_(and__5114__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__5114__auto__;
}
})())){
var statearr_32354_32379 = state;
(statearr_32354_32379[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__32380 = state;
state = G__32380;
continue;
} else {
if(cljs.core.truth_((function (){var and__5114__auto__ = exception;
if(cljs.core.truth_(and__5114__auto__)){
var and__5114__auto____$1 = cljs.core.not(catch_block);
if(and__5114__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__5114__auto____$1;
}
} else {
return and__5114__auto__;
}
})())){
var statearr_32360 = state;
(statearr_32360[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32360[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_32360;
} else {
if(cljs.core.truth_((function (){var and__5114__auto__ = cljs.core.not(exception);
if(and__5114__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__5114__auto__;
}
})())){
var statearr_32366 = state;
(statearr_32366[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32366[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_32366;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_32374 = state;
(statearr_32374[(1)] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32374[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_32374;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
