(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51e99fc1","chunk-ca6bb466"],{"1b3c":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r("b65a"),a=r("0fea"),n=r("ca00"),o=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e,t,r){e.length;for(var i="",a=0;a<10;a++)i+="*";return e.substring(0,t)+i+e.substring(e.length-r)},d={},m={},f={mixins:[i["a"]],data:function(){return{resultName:"",isorter:{column:"iCreateTime",order:"desc"},result:null,spUrl:this.getSProtocols()}},methods:s({},Object(o["c"])(["getSProtocols","getCountry"]),{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(a["j"])(this.url.list,r).then((function(e){e.success?(t.result=e.result,e.result.data[t.resultName].length>0?(t.dataSource=t.initResDatas(e.result.data[t.resultName]),t.ipagination.total=e.result.data.iTotalCount||e.result.data.total):t.dataSource=[]):t.$message.error(e.message)})).finally((function(){t.loading=!1}))}else this.$message.error("请设置url.list属性!")},searchQuery:function(){this.verifiedParams()&&this.loadData(1)},verifiedParams:function(){return!0},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(n["d"])(t)},handleDelete:function(e,t){var r=this;if(this.url.delete){this.loading=!0;var i=t||"iId";Object(a["j"])(this.url.delete,u({},i,e)).then((function(e){e.success?(r.$message.success(e.message),r.loadData()):(r.$message.warning(e.message),r.loading=!1)}))}else this.$message.error("请设置url.delete属性!")},initResDatas:function(e){return e},sPrAddres:function(e,t){var r=d||[],i="",a=!0,n=!1,o=void 0;try{for(var l,s=r[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var u=l.value;u.sChain==e&&(i="sAddressQueryUrl"==t?u.sAddressQueryUrl:u.sTxQueryUrl)}}catch(c){n=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}return i}}),filters:{btcNum:function(e){if(!e)return"-";var t=c(e,5,5);return t},sProtocolUrl:function(e){var t=d||[],r={},i=!0,a=!1,n=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value;s.sProtocol==e&&(r=s.data)}}catch(u){a=!0,n=u}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}return r[0]},countryVal:function(e){if(!e)return"暂无数据";var t="iId无对应国家",r=!0,i=!1,a=void 0;try{for(var n,o=m[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var l=n.value;l.iId==e&&(t=l.sCountryName)}}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return t}},created:function(){m=this.getCountry(),d=this.spUrl}}},"2cc2":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-operator"},[r("a-button",{on:{click:function(t){return e.loadData()}}},[e._v("刷新")])],1),r("div",[r("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:e.columns,dataSource:e.dataSource,pagination:!1,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"iDepositSwitch",fn:function(t,i,a){return r("span",{},[r("a-switch",{attrs:{loading:i.depositSwitchLoading},on:{click:function(t){var r=arguments.length,a=Array(r);while(r--)a[r]=arguments[r];return e.depositSwitch(a.concat([i]))}},model:{value:i.iDepositSwitch,callback:function(t){e.$set(i,"iDepositSwitch",t)},expression:"record.iDepositSwitch"}})],1)}},{key:"iWithdrawSwitch",fn:function(t,i,a){return r("span",{},[r("a-switch",{attrs:{loading:i.withdrawSwitchLoading},on:{click:function(t){var r=arguments.length,a=Array(r);while(r--)a[r]=arguments[r];return e.withdrawSwitch(a.concat([i]))}},model:{value:i.iWithdrawSwitch,callback:function(t){e.$set(i,"iWithdrawSwitch",t)},expression:"record.iWithdrawSwitch"}})],1)}},{key:"action",fn:function(t,i,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("修改")])])}}])})],1),r("rating-edit-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},a=[],n=r("f4c2"),o=r("8c6e"),l=r("4349"),s=r("89f2"),u=r("1b3c"),c=r("2b0e"),d=r("ca00"),m=(r("0fea"),r("5a0c"),{name:"TokenManage",mixins:[u["a"]],components:{RatingEditModal:n["default"],JSuperQuery:o["default"],JInput:l["default"]},data:function(){return{description:"钱包币种管理",sexDictOptions:[],isorter:{column:"iLevel",order:"asc"},resultName:"vList",columns:[],settingColumns:[],defColumns:[{title:"等级",align:"center",dataIndex:"iLevel",customRender:function(e,t,r){return"Lv"+e}},{title:"最低保证金要求(USDT)",align:"center",dataIndex:"iLowerDeposit",customRender:function(e,t,r){return"≥ "+Number(e)}},{title:"近30天交易量(CNY)",align:"center",dataIndex:"iDay30TradeAmount",customRender:function(e,t,r){return"≥ "+Number(e)}},{title:"申诉率",align:"center",dataIndex:"iArbitrationRate",customRender:function(e,t,r){return"≤ "+Number(e)/100+"%"}},{title:"成交率",align:"center",dataIndex:"iTradeRate",customRender:function(e,t,r){return"≥ "+Number(e)/100+"%"}},{title:"平均放币时间",align:"center",dataIndex:"iAvgReleaseTime",customRender:function(e,t,r){return"≤ "+Number(e)/6e4+"分钟"}},{title:"总成交单数(单)",align:"center",dataIndex:"iTradeCount",customRender:function(e,t,r){return"≥ "+e}},{title:"每单限额(USDT)",align:"center",dataIndex:"iOrderLimit",customRender:function(e,t,r){return"≤ "+Number(e)}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"action"}}],url:{list:"/v1/otc/GetAdsConfigList",delete:"/v1/otc/DelAdsConfig"}}},methods:{getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=0,t.iPageSize=1e3,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(d["d"])(t)},initDictConfig:function(){var e=this;Object(s["d"])("sex").then((function(t){t.success&&(e.sexDictOptions=t.result)}))},onColSettingsChange:function(e){var t=this,r=this.$route.name+":colsettings";c["default"].ls.set(r,e,6048e5),this.settingColumns=e;var i=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.settingColumns.includes(e.dataIndex)}));this.columns=i},initColumns:function(){var e=this.$route.name+":colsettings",t=c["default"].ls.get(e);if(null==t||void 0==t){var r=[];this.defColumns.forEach((function(e,t,i){r.push(e.dataIndex)})),this.settingColumns=r,this.columns=this.defColumns}else{this.settingColumns=t;var i=this.defColumns.filter((function(e){return"rowIndex"==e.key||"action"==e.dataIndex||!!t.includes(e.dataIndex)}));this.columns=i}}},created:function(){this.initColumns()}}),f=m,h=(r("3cda"),r("2877")),p=Object(h["a"])(f,i,a,!1,null,"6659852a",null);t["default"]=p.exports},"3cda":function(e,t,r){"use strict";var i=r("b9de"),a=r.n(i);a.a},"88bc":function(e,t,r){(function(t){var r=1/0,i=9007199254740991,a="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,i=e?e.length:0,a=Array(i);while(++r<i)a[r]=t(e[r],r,e);return a}function f(e,t){var r=-1,i=t.length,a=e.length;while(++r<i)e[a+r]=t[r];return e}var h=Object.prototype,p=h.hasOwnProperty,b=h.toString,v=c.Symbol,g=h.propertyIsEnumerable,y=v?v.isConcatSpreadable:void 0,w=Math.max;function C(e,t,r,i,a){var n=-1,o=e.length;r||(r=A),a||(a=[]);while(++n<o){var l=e[n];t>0&&r(l)?t>1?C(l,t-1,r,i,a):f(a,l):i||(a[a.length]=l)}return a}function R(e,t){return e=Object(e),T(e,t,(function(t,r){return r in e}))}function T(e,t,r){var i=-1,a=t.length,n={};while(++i<a){var o=t[i],l=e[o];r(l,o)&&(n[o]=l)}return n}function D(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,i=-1,a=w(r.length-t,0),n=Array(a);while(++i<a)n[i]=r[t+i];i=-1;var o=Array(t+1);while(++i<t)o[i]=r[i];return o[t]=n,d(e,this,o)}}function A(e){return L(e)||S(e)||!!(y&&e&&e[y])}function O(e){if("string"==typeof e||Q(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function S(e){return j(e)&&p.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==a)}var L=Array.isArray;function x(e){return null!=e&&P(e.length)&&!k(e)}function j(e){return I(e)&&x(e)}function k(e){var t=N(e)?b.call(e):"";return t==n||t==o}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return!!e&&"object"==typeof e}function Q(e){return"symbol"==typeof e||I(e)&&b.call(e)==l}var F=D((function(e,t){return null==e?{}:R(e,m(C(t,1),O))}));e.exports=F}).call(this,r("c8ba"))},b9de:function(e,t,r){},f4c2:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"等级",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iLevel",e.validatorRules.iLevel],expression:"['iLevel', validatorRules.iLevel]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入等级",min:1,max:100,step:1}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最低保证金(USDT)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iLowerDeposit",e.validatorRules.iLowerDeposit],expression:"['iLowerDeposit', validatorRules.iLowerDeposit]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最低保证金",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最近30天交易量(≥,单位:CNY)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iDay30TradeAmount",e.validatorRules.iDay30TradeAmount],expression:"['iDay30TradeAmount', validatorRules.iDay30TradeAmount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最近30天交易量",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"申诉率要求(≤,单位:%)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iArbitrationRate",e.validatorRules.iArbitrationRate],expression:"['iArbitrationRate', validatorRules.iArbitrationRate]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入申诉率",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"成交率要求(≥,单位:%)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iTradeRate",e.validatorRules.iTradeRate],expression:"['iTradeRate', validatorRules.iTradeRate]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入成交率",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"平均放币时间(≤,单位:分钟)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iAvgReleaseTime",e.validatorRules.iAvgReleaseTime],expression:"['iAvgReleaseTime', validatorRules.iAvgReleaseTime]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入平均放币时间",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"总成交单数(≥,单位:单)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iTradeCount",e.validatorRules.iTradeCount],expression:"['iTradeCount', validatorRules.iTradeCount]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入总成交单数",min:0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"每单限额(单位:USDT)",hasFeedback:""}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iOrderLimit",e.validatorRules.iAvgReleaseTime],expression:"['iOrderLimit', validatorRules.iAvgReleaseTime]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入每单限额",min:0}})],1)],1)],1)],1)},a=[],n=r("0fea"),o=r("88bc"),l=r.n(o),s=(r("c1df"),{name:"TokenManageModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{iLevel:{rules:[{required:!0,message:"",type:"number"}]},iLowerDeposit:{rules:[{required:!0,message:"",type:"number"}]},iDay30TradeAmount:{rules:[{required:!0,message:"",type:"number"}]},iArbitrationRate:{rules:[{required:!0,message:"",type:"number"}]},iTradeRate:{rules:[{required:!0,message:"",type:"number"}]},iAvgReleaseTime:{rules:[{required:!0,message:"",type:"number"}]},iTradeCount:{rules:[{required:!0,message:"",type:"number"}]},iOrderLimit:{rules:[{required:!0,message:"",type:"number"}]},iDayLimit:{rules:[{required:!0,message:"",type:"number"}]}},url:{add:"/v1/otc/AddAdsConfig",edit:"/v1/otc/EditAdsConfig"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.iId&&(this.model.iLowerDeposit=Number(this.model.iLowerDeposit),this.model.iOrderLimit=Number(this.model.iOrderLimit),this.model.iDayLimit=Number(this.model.iDayLimit),this.model.iDay30TradeAmount=Number(this.model.iDay30TradeAmount),this.model.iArbitrationRate=Number(this.model.iArbitrationRate)/100,this.model.iTradeRate=Number(this.model.iTradeRate)/100,this.model.iAvgReleaseTime=this.model.iAvgReleaseTime?this.model.iAvgReleaseTime/6e4:0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"iLevel","iLowerDeposit","iDay30TradeAmount","iArbitrationRate","iTradeRate","iAvgReleaseTime","iTradeCount","iOrderLimit","iDayLimit"))})))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,i){if(!r){t.confirmLoading=!0;var a="";e.model.iId?a+=e.url.edit:a+=e.url.add,i.iLowerDeposit=i.iLowerDeposit?i.iLowerDeposit.toString():"0",i.iOrderLimit=i.iOrderLimit?i.iOrderLimit.toString():"0",i.iDayLimit=i.iDayLimit?i.iDayLimit.toString():"0",i.iDay30TradeAmount=i.iDay30TradeAmount?i.iDay30TradeAmount.toString():"0",i.iArbitrationRate=i.iArbitrationRate?100*i.iArbitrationRate:0,i.iTradeRate=i.iTradeRate?100*i.iTradeRate:0,i.iAvgReleaseTime=i.iAvgReleaseTime?6e4*i.iAvgReleaseTime:0;var o=Object.assign(e.model,i);Object(n["j"])(a,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}}),u=s,c=r("2877"),d=Object(c["a"])(u,i,a,!1,null,"84fba512",null);t["default"]=d.exports}}]);