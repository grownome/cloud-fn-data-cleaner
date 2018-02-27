goog.provide('data_cleaner.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('shadow.js.shim.module$initial_state');
goog.require('shadow.js.shim.module$firebase_admin');
goog.require('cljs.core.async');
goog.require('shadow.js.shim.module$$google_cloud$bigquery');
goog.require('promesa.core');
goog.require('taoensso.timbre');
data_cleaner.core.store_capture = (function data_cleaner$core$store_capture(attrs,data){
return null;
});
if(typeof data_cleaner.core.app !== 'undefined'){
} else {
data_cleaner.core.app = shadow.js.shim.module$firebase_admin.initializeApp(({"credential": shadow.js.shim.module$firebase_admin.credential.applicationDefault(), "databaseURL": "https://grownome.firebaseio.com"}));
}
if(typeof data_cleaner.core.bq_client !== 'undefined'){
} else {
data_cleaner.core.bq_client = (new shadow.js.shim.module$$google_cloud$bigquery(({"projectId": "grownome"})));
}
if(typeof data_cleaner.core.users !== 'undefined'){
} else {
data_cleaner.core.users = new cljs.core.PersistentArrayMap(null, 2, ["0",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q7S374HJ4MGR","GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"], null),"1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4TF3E3GQHP8E","GgUpQkUzqBujBlrTM5vIpcBXWruYjkcA"], null)], null);
}
data_cleaner.core.bq_insert = (function data_cleaner$core$bq_insert(var_args){
var G__40182 = arguments.length;
switch (G__40182) {
case 3:
return data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$3 = (function (dataset,table,data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inserting bq row"], null);
}),null)),null,1843440536);

return data_cleaner.core.bq_client.dataset(dataset).table(table).insert(data).then((function (){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inserted data"], null);
}),null)),null,1096112803);
})).catch((function (err){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"data-cleaner.core",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["insert error ",err], null);
}),null)),null,-2123565206);

try{var result__40030__auto___40185 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((err["errors"]));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"data-cleaner.core",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__40030__auto___40185){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"err","err",-448925678,null),"errors")),"=>",result__40030__auto___40185], null);
});})(result__40030__auto___40185))
,null)),null,1678888549);

}catch (e40183){if((e40183 instanceof Error)){
var e__39992__auto___40186 = e40183;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"data-cleaner.core",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__39992__auto___40186){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__39992__auto___40186], null);
});})(e__39992__auto___40186))
,null)),null,757459204);

throw e__39992__auto___40186;
} else {
throw e40183;

}
}
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"data-cleaner.core",null,39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.js_keys(err)], null);
}),null)),null,1017065775);
}));
});

data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$1 = (function (data){
return data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$3("grownome","metrics",data);
});

data_cleaner.core.bq_insert.cljs$lang$maxFixedArity = 3;

data_cleaner.core.push_inital_state = (function data_cleaner$core$push_inital_state(bucket,reading,value,timestamp){
return bucket.push(reading,value,timestamp);
});
data_cleaner.core.cleanup_temp = (function data_cleaner$core$cleanup_temp(value){
return ((value * ((9) / (5))) + (32));
});
data_cleaner.core.clean_value = (function data_cleaner$core$clean_value(name,value){
if(clojure.string.includes_QMARK_(name,"temp")){
return data_cleaner.core.cleanup_temp(value);
} else {
return value;
}
});
/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *   * @param {!Object} event The Cloud Functions event.
 *   example event inside data
 *   :deviceId blue-cherry,
 *   :deviceNumId 2711002696579299,
 *   :deviceRegistryId nomes,
 *   :deviceRegistryLocation us-central1,
 *   :projectId grownome,
 *   :subFolder metrics/core-temp-max},
 *   :data bm9tZXMvYmx1ZS1jaGVycnktcGF5bG9hZC1jb3JlLXRlbXAtbWF4LzQzLjg1}
 *   * @param {!Function} The callback function.
 */
data_cleaner.core.subscribe = (function data_cleaner$core$subscribe(event,callback){
var pubsub_message = event.data;
var attributes = (pubsub_message["attributes"]);
var subfolder = (attributes["subFolder"]);
var subparts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(subfolder,/\//);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,71,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pubsub_message,attributes,subfolder,subparts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subparts], null);
});})(pubsub_message,attributes,subfolder,subparts))
,null)),null,624128332);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(subparts),"captures")){
var fs = shadow.js.shim.module$firebase_admin.firestore();
var vec__40187 = subparts;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(0),null);
var rand_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(1),null);
var max_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(2),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(3),null);
var data = (pubsub_message["data"]);
var images_ref = fs.collection("images");
(attributes["image_part"] = data);

(attributes["image_id"] = rand_id);

(attributes["image_max_index"] = max_idx);

(attributes["image_index"] = idx);

(attributes["timestamp"] = event.timestamp);

images_ref.add(attributes);

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
var fs = shadow.js.shim.module$firebase_admin.firestore();
var data = Buffer.from((pubsub_message["data"]),"base64");
var vec__40190 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,/\//);
var reg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(3),null);
var readings_ref = fs.collection("readings");
var vec__40193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_cleaner.core.users,(function (){var or__5126__auto__ = user;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return "0";
}
})());
var bucket_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40193,(0),null);
var access_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40193,(1),null);
var clean_value = data_cleaner.core.clean_value(name,parseFloat(value));
var b = shadow.js.shim.module$initial_state.bucket(bucket_key,access_key);
data_cleaner.core.push_inital_state(b,name,clean_value,event.timestamp);

(attributes["reading"] = clean_value);

(attributes["timestamp"] = event.timestamp);

readings_ref.add(attributes);

return promesa.core.then(data_cleaner.core.bq_insert.cljs$core$IFn$_invoke$arity$1(attributes),((function (fs,data,vec__40190,reg,user,name,value,readings_ref,vec__40193,bucket_key,access_key,clean_value,b,pubsub_message,attributes,subfolder,subparts){
return (function (){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});})(fs,data,vec__40190,reg,user,name,value,readings_ref,vec__40193,bucket_key,access_key,clean_value,b,pubsub_message,attributes,subfolder,subparts))
);
}
});
data_cleaner.core.images_by_id = (function data_cleaner$core$images_by_id(var_args){
var G__40197 = arguments.length;
switch (G__40197) {
case 2:
return data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$2 = (function (fs,start_at){
return data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$1(fs).startAt(start_at);
});

data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$1 = (function (fs){

return fs.collection("images").orderBy("image_id").limit((5));
});

data_cleaner.core.images_by_id.cljs$lang$maxFixedArity = 2;

/**
 * checks to see if all the parts are there and then assembles one image
 *   or not
 */
data_cleaner.core.reassemble_image = (function data_cleaner$core$reassemble_image(parts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reassembling image"], null);
}),null)),null,235674321);

var a_part = cljs.core.first(parts);
var expected_parts = (a_part["image_max_index"]);
var device_id = (a_part["deviceNumId"]);
var image_id = (a_part["image_id"]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_parts,cljs.core.count(parts))){
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (a_part,expected_parts,device_id,image_id){
return (function (p1__40199_SHARP_){
return (p1__40199_SHARP_["image_index"]);
});})(a_part,expected_parts,device_id,image_id))
,parts);
var unencoded = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (sorted,a_part,expected_parts,device_id,image_id){
return (function (p1__40200_SHARP_){
return Buffer.from((p1__40200_SHARP_["data"]),"base64");
});})(sorted,a_part,expected_parts,device_id,image_id))
);
var joined = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,unencoded);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),joined,new cljs.core.Keyword(null,"device-id","device-id",1535359525),device_id,new cljs.core.Keyword(null,"image-id","image-id",-988480565),image_id], null);
} else {
return null;
}
});
data_cleaner.core.upload_image = (function data_cleaner$core$upload_image(p__40201){
var map__40202 = p__40201;
var map__40202__$1 = ((((!((map__40202 == null)))?((((map__40202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40202):map__40202);
var device_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202__$1,new cljs.core.Keyword(null,"device-id","device-id",1535359525));
var image_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202__$1,new cljs.core.Keyword(null,"image-id","image-id",-988480565));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var stor = shadow.js.shim.module$firebase_admin.storage();
var ref = stor.ref().child(["processed_images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(device_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_id)].join(''));
var metadata = ({"contentType": "image/jpeg"});
return ref.put(image);
});
data_cleaner.core.images_chan = (function data_cleaner$core$images_chan(fs,cursor){
var img_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(data_cleaner.core.upload_image),cljs.core.map.cljs$core$IFn$_invoke$arity$1(data_cleaner.core.reassemble_image),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__40204_SHARP_){
return (p1__40204_SHARP_["image_id"]);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__40205_SHARP_){
return p1__40205_SHARP_.data();
}))], 0)));
var next_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32469__auto___40330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___40330,img_chan,next_chan){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___40330,img_chan,next_chan){
return (function (state_40223){
var state_val_40224 = (state_40223[(1)]);
if((state_val_40224 === (1))){
var inst_40206 = cursor;
var state_40223__$1 = (function (){var statearr_40225 = state_40223;
(statearr_40225[(7)] = inst_40206);

return statearr_40225;
})();
var statearr_40226_40331 = state_40223__$1;
(statearr_40226_40331[(2)] = null);

(statearr_40226_40331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (2))){
var inst_40206 = (state_40223[(7)]);
var inst_40208 = (function (){var c = inst_40206;
return ((function (c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (a_few_images){
var clj_imgs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(a_few_images);
var c__32469__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (state_40289){
var state_val_40290 = (state_40289[(1)]);
if((state_val_40290 === (7))){
var inst_40287 = (state_40289[(2)]);
var state_40289__$1 = state_40289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40289__$1,inst_40287);
} else {
if((state_val_40290 === (1))){
var inst_40227 = (function (){return ((function (state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to reconstruct"], null);
});
;})(state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40228 = (new cljs.core.Delay(inst_40227,null));
var inst_40229 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40228,null,566310368);
var inst_40230 = (function (){return ((function (inst_40227,inst_40228,inst_40229,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.js_keys(a_few_images)], null);
});
;})(inst_40227,inst_40228,inst_40229,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40231 = (new cljs.core.Delay(inst_40230,null));
var inst_40232 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40231,null,-612080277);
var state_40289__$1 = (function (){var statearr_40291 = state_40289;
(statearr_40291[(7)] = inst_40229);

(statearr_40291[(8)] = inst_40232);

return statearr_40291;
})();
var statearr_40292_40332 = state_40289__$1;
(statearr_40292_40332[(2)] = null);

(statearr_40292_40332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40289,(3),Error,null,(2));
var inst_40241 = cljs.core.count(clj_imgs);
var inst_40242 = (function (){var result__40030__auto__ = inst_40241;
return ((function (result__40030__auto__,_,inst_40241,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"clj-imgs","clj-imgs",786881860,null)),"=>",result__40030__auto__], null);
});
;})(result__40030__auto__,_,inst_40241,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40243 = (new cljs.core.Delay(inst_40242,null));
var inst_40244 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"data-cleaner.core",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40243,null,-488527733);
var state_40289__$1 = (function (){var statearr_40293 = state_40289;
(statearr_40293[(9)] = inst_40244);

return statearr_40293;
})();
var statearr_40294_40333 = state_40289__$1;
(statearr_40294_40333[(2)] = inst_40241);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (13))){
var inst_40250 = (state_40289[(10)]);
var inst_40268 = (state_40289[(2)]);
var inst_40269 = (function (){var l = inst_40250;
var e__39992__auto__ = inst_40268;
return ((function (l,e__39992__auto__,inst_40250,inst_40268,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__39992__auto__], null);
});
;})(l,e__39992__auto__,inst_40250,inst_40268,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40270 = (new cljs.core.Delay(inst_40269,null));
var inst_40271 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"data-cleaner.core",null,156,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40270,null,1235279161);
var inst_40272 = (function(){throw inst_40268})();
var state_40289__$1 = (function (){var statearr_40295 = state_40289;
(statearr_40295[(11)] = inst_40271);

return statearr_40295;
})();
var statearr_40296_40334 = state_40289__$1;
(statearr_40296_40334[(2)] = inst_40272);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (6))){
var inst_40284 = cljs.core.async.close_BANG_(img_chan);
var inst_40285 = cljs.core.async.close_BANG_(next_chan);
var state_40289__$1 = (function (){var statearr_40297 = state_40289;
(statearr_40297[(12)] = inst_40284);

return statearr_40297;
})();
var statearr_40298_40335 = state_40289__$1;
(statearr_40298_40335[(2)] = inst_40285);

(statearr_40298_40335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (3))){
var inst_40233 = (state_40289[(2)]);
var inst_40234 = (function (){var e__39992__auto__ = inst_40233;
return ((function (e__39992__auto__,inst_40233,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__39992__auto__], null);
});
;})(e__39992__auto__,inst_40233,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40235 = (new cljs.core.Delay(inst_40234,null));
var inst_40236 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"data-cleaner.core",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40235,null,-1960231073);
var inst_40237 = (function(){throw inst_40233})();
var state_40289__$1 = (function (){var statearr_40299 = state_40289;
(statearr_40299[(13)] = inst_40236);

return statearr_40299;
})();
var statearr_40300_40336 = state_40289__$1;
(statearr_40300_40336[(2)] = inst_40237);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (12))){
var inst_40280 = (state_40289[(2)]);
var state_40289__$1 = state_40289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40289__$1,(11),next_chan,inst_40280);
} else {
if((state_val_40290 === (2))){
var inst_40246 = (state_40289[(2)]);
var inst_40247 = (inst_40246 > (0));
var state_40289__$1 = state_40289;
if(cljs.core.truth_(inst_40247)){
var statearr_40301_40337 = state_40289__$1;
(statearr_40301_40337[(1)] = (5));

} else {
var statearr_40302_40338 = state_40289__$1;
(statearr_40302_40338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (11))){
var inst_40282 = (state_40289[(2)]);
var state_40289__$1 = state_40289;
var statearr_40303_40339 = state_40289__$1;
(statearr_40303_40339[(2)] = inst_40282);

(statearr_40303_40339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (9))){
var inst_40250 = (state_40289[(10)]);
var inst_40254 = (state_40289[(2)]);
var inst_40255 = (function (){var l = inst_40250;
var e__39992__auto__ = inst_40254;
return ((function (l,e__39992__auto__,inst_40250,inst_40254,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__39992__auto__], null);
});
;})(l,e__39992__auto__,inst_40250,inst_40254,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40256 = (new cljs.core.Delay(inst_40255,null));
var inst_40257 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"data-cleaner.core",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40256,null,-718068504);
var inst_40258 = (function(){throw inst_40254})();
var state_40289__$1 = (function (){var statearr_40304 = state_40289;
(statearr_40304[(14)] = inst_40257);

return statearr_40304;
})();
var statearr_40305_40340 = state_40289__$1;
(statearr_40305_40340[(2)] = inst_40258);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (5))){
var inst_40250 = (state_40289[(10)]);
var inst_40249 = cljs.core.last(clj_imgs);
var inst_40250__$1 = inst_40249.data();
var inst_40251 = (function (){var l = inst_40250__$1;
return ((function (l,inst_40250,inst_40249,inst_40250__$1,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to put image on chan"], null);
});
;})(l,inst_40250,inst_40249,inst_40250__$1,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40252 = (new cljs.core.Delay(inst_40251,null));
var inst_40253 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-cleaner.core",null,153,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40252,null,1907480811);
var state_40289__$1 = (function (){var statearr_40306 = state_40289;
(statearr_40306[(10)] = inst_40250__$1);

(statearr_40306[(15)] = inst_40253);

return statearr_40306;
})();
var statearr_40307_40341 = state_40289__$1;
(statearr_40307_40341[(2)] = null);

(statearr_40307_40341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (14))){
var inst_40250 = (state_40289[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40289,(13),Error,null,(12));
var inst_40276 = (function (){var l = inst_40250;
var result__40030__auto__ = inst_40250;
return ((function (l,result__40030__auto__,inst_40250,_,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),"=>",result__40030__auto__], null);
});
;})(l,result__40030__auto__,inst_40250,_,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40277 = (new cljs.core.Delay(inst_40276,null));
var inst_40278 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"data-cleaner.core",null,156,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40277,null,-1414460938);
var state_40289__$1 = (function (){var statearr_40308 = state_40289;
(statearr_40308[(16)] = inst_40278);

return statearr_40308;
})();
var statearr_40309_40342 = state_40289__$1;
(statearr_40309_40342[(2)] = inst_40250);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (10))){
var inst_40250 = (state_40289[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40289,(9),Error,null,(8));
var inst_40262 = (function (){var l = inst_40250;
var result__40030__auto__ = clj_imgs;
return ((function (l,result__40030__auto__,inst_40250,_,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clj-imgs","clj-imgs",786881860,null),"=>",result__40030__auto__], null);
});
;})(l,result__40030__auto__,inst_40250,_,state_val_40290,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40263 = (new cljs.core.Delay(inst_40262,null));
var inst_40264 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"data-cleaner.core",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40263,null,984358931);
var state_40289__$1 = (function (){var statearr_40310 = state_40289;
(statearr_40310[(17)] = inst_40264);

return statearr_40310;
})();
var statearr_40311_40343 = state_40289__$1;
(statearr_40311_40343[(2)] = clj_imgs);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40290 === (8))){
var inst_40266 = (state_40289[(2)]);
var inst_40267 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(img_chan,clj_imgs,false);
var state_40289__$1 = (function (){var statearr_40312 = state_40289;
(statearr_40312[(18)] = inst_40267);

(statearr_40312[(19)] = inst_40266);

return statearr_40312;
})();
var statearr_40313_40344 = state_40289__$1;
(statearr_40313_40344[(2)] = null);

(statearr_40313_40344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
;
return ((function (switch__32260__auto__,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan){
return (function() {
var data_cleaner$core$images_chan_$_state_machine__32261__auto__ = null;
var data_cleaner$core$images_chan_$_state_machine__32261__auto____0 = (function (){
var statearr_40314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40314[(0)] = data_cleaner$core$images_chan_$_state_machine__32261__auto__);

(statearr_40314[(1)] = (1));

return statearr_40314;
});
var data_cleaner$core$images_chan_$_state_machine__32261__auto____1 = (function (state_40289){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_40289);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e40315){if((e40315 instanceof Object)){
var ex__32264__auto__ = e40315;
var statearr_40316_40345 = state_40289;
(statearr_40316_40345[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40346 = state_40289;
state_40289 = G__40346;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
data_cleaner$core$images_chan_$_state_machine__32261__auto__ = function(state_40289){
switch(arguments.length){
case 0:
return data_cleaner$core$images_chan_$_state_machine__32261__auto____0.call(this);
case 1:
return data_cleaner$core$images_chan_$_state_machine__32261__auto____1.call(this,state_40289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_cleaner$core$images_chan_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = data_cleaner$core$images_chan_$_state_machine__32261__auto____0;
data_cleaner$core$images_chan_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = data_cleaner$core$images_chan_$_state_machine__32261__auto____1;
return data_cleaner$core$images_chan_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var state__32471__auto__ = (function (){var statearr_40317 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_40317[(6)] = c__32469__auto____$1);

return statearr_40317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto____$1,clj_imgs,c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
);

return c__32469__auto____$1;
});
;})(c,inst_40206,state_val_40224,c__32469__auto___40330,img_chan,next_chan))
})();
var inst_40209 = promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(cursor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_40208], 0));
var state_40223__$1 = (function (){var statearr_40318 = state_40223;
(statearr_40318[(8)] = inst_40209);

return statearr_40318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40223__$1,(4),next_chan);
} else {
if((state_val_40224 === (3))){
var inst_40221 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40223__$1,inst_40221);
} else {
if((state_val_40224 === (4))){
var inst_40211 = (state_40223[(9)]);
var inst_40211__$1 = (state_40223[(2)]);
var state_40223__$1 = (function (){var statearr_40319 = state_40223;
(statearr_40319[(9)] = inst_40211__$1);

return statearr_40319;
})();
if(cljs.core.truth_(inst_40211__$1)){
var statearr_40320_40347 = state_40223__$1;
(statearr_40320_40347[(1)] = (5));

} else {
var statearr_40321_40348 = state_40223__$1;
(statearr_40321_40348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (5))){
var inst_40211 = (state_40223[(9)]);
var inst_40213 = (inst_40211["image_id"]);
var inst_40214 = data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$2(fs,inst_40213);
var inst_40215 = inst_40214.get();
var inst_40206 = inst_40215;
var state_40223__$1 = (function (){var statearr_40322 = state_40223;
(statearr_40322[(7)] = inst_40206);

return statearr_40322;
})();
var statearr_40323_40349 = state_40223__$1;
(statearr_40323_40349[(2)] = null);

(statearr_40323_40349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (6))){
var state_40223__$1 = state_40223;
var statearr_40324_40350 = state_40223__$1;
(statearr_40324_40350[(2)] = null);

(statearr_40324_40350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (7))){
var inst_40219 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40325_40351 = state_40223__$1;
(statearr_40325_40351[(2)] = inst_40219);

(statearr_40325_40351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32469__auto___40330,img_chan,next_chan))
;
return ((function (switch__32260__auto__,c__32469__auto___40330,img_chan,next_chan){
return (function() {
var data_cleaner$core$images_chan_$_state_machine__32261__auto__ = null;
var data_cleaner$core$images_chan_$_state_machine__32261__auto____0 = (function (){
var statearr_40326 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40326[(0)] = data_cleaner$core$images_chan_$_state_machine__32261__auto__);

(statearr_40326[(1)] = (1));

return statearr_40326;
});
var data_cleaner$core$images_chan_$_state_machine__32261__auto____1 = (function (state_40223){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_40223);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e40327){if((e40327 instanceof Object)){
var ex__32264__auto__ = e40327;
var statearr_40328_40352 = state_40223;
(statearr_40328_40352[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40353 = state_40223;
state_40223 = G__40353;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
data_cleaner$core$images_chan_$_state_machine__32261__auto__ = function(state_40223){
switch(arguments.length){
case 0:
return data_cleaner$core$images_chan_$_state_machine__32261__auto____0.call(this);
case 1:
return data_cleaner$core$images_chan_$_state_machine__32261__auto____1.call(this,state_40223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_cleaner$core$images_chan_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = data_cleaner$core$images_chan_$_state_machine__32261__auto____0;
data_cleaner$core$images_chan_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = data_cleaner$core$images_chan_$_state_machine__32261__auto____1;
return data_cleaner$core$images_chan_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___40330,img_chan,next_chan))
})();
var state__32471__auto__ = (function (){var statearr_40329 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_40329[(6)] = c__32469__auto___40330);

return statearr_40329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___40330,img_chan,next_chan))
);


return img_chan;
});
data_cleaner.core.assemble_images = (function data_cleaner$core$assemble_images(event,callback){
var fs = shadow.js.shim.module$firebase_admin.firestore();
var images_ref = data_cleaner.core.images_by_id.cljs$core$IFn$_invoke$arity$1(fs);
var images_snap_p = images_ref.get();
var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__,fs,images_ref,images_snap_p){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__,fs,images_ref,images_snap_p){
return (function (state_40361){
var state_val_40362 = (state_40361[(1)]);
if((state_val_40362 === (1))){
var state_40361__$1 = state_40361;
var statearr_40363_40369 = state_40361__$1;
(statearr_40363_40369[(2)] = null);

(statearr_40363_40369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40362 === (2))){
var inst_40355 = data_cleaner.core.images_chan(fs,images_ref);
var state_40361__$1 = state_40361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40361__$1,(4),inst_40355);
} else {
if((state_val_40362 === (3))){
var inst_40359 = (state_40361[(2)]);
var state_40361__$1 = state_40361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40361__$1,inst_40359);
} else {
if((state_val_40362 === (4))){
var inst_40357 = (state_40361[(2)]);
var state_40361__$1 = state_40361;
var statearr_40364_40370 = state_40361__$1;
(statearr_40364_40370[(2)] = inst_40357);

(statearr_40364_40370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32469__auto__,fs,images_ref,images_snap_p))
;
return ((function (switch__32260__auto__,c__32469__auto__,fs,images_ref,images_snap_p){
return (function() {
var data_cleaner$core$assemble_images_$_state_machine__32261__auto__ = null;
var data_cleaner$core$assemble_images_$_state_machine__32261__auto____0 = (function (){
var statearr_40365 = [null,null,null,null,null,null,null];
(statearr_40365[(0)] = data_cleaner$core$assemble_images_$_state_machine__32261__auto__);

(statearr_40365[(1)] = (1));

return statearr_40365;
});
var data_cleaner$core$assemble_images_$_state_machine__32261__auto____1 = (function (state_40361){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_40361);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e40366){if((e40366 instanceof Object)){
var ex__32264__auto__ = e40366;
var statearr_40367_40371 = state_40361;
(statearr_40367_40371[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40372 = state_40361;
state_40361 = G__40372;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
data_cleaner$core$assemble_images_$_state_machine__32261__auto__ = function(state_40361){
switch(arguments.length){
case 0:
return data_cleaner$core$assemble_images_$_state_machine__32261__auto____0.call(this);
case 1:
return data_cleaner$core$assemble_images_$_state_machine__32261__auto____1.call(this,state_40361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_cleaner$core$assemble_images_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = data_cleaner$core$assemble_images_$_state_machine__32261__auto____0;
data_cleaner$core$assemble_images_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = data_cleaner$core$assemble_images_$_state_machine__32261__auto____1;
return data_cleaner$core$assemble_images_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__,fs,images_ref,images_snap_p))
})();
var state__32471__auto__ = (function (){var statearr_40368 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_40368[(6)] = c__32469__auto__);

return statearr_40368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__,fs,images_ref,images_snap_p))
);

return c__32469__auto__;
});

//# sourceMappingURL=data_cleaner.core.js.map
