(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94e91042"],{"88bc":function(e,r,t){(function(r){var t=1/0,n=9007199254740991,a="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",i="[object Symbol]",l="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function f(e,r){var t=-1,n=e?e.length:0,a=Array(n);while(++t<n)a[t]=r(e[t],t,e);return a}function h(e,r){var t=-1,n=r.length,a=e.length;while(++t<n)e[a+t]=r[t];return e}var b=Object.prototype,p=b.hasOwnProperty,m=b.toString,v=u.Symbol,g=b.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,O=Math.max;function C(e,r,t,n,a){var s=-1,o=e.length;t||(t=T),a||(a=[]);while(++s<o){var i=e[s];r>0&&t(i)?r>1?C(i,r-1,t,n,a):h(a,i):n||(a[a.length]=i)}return a}function k(e,r){return e=Object(e),y(e,r,(function(r,t){return t in e}))}function y(e,r,t){var n=-1,a=r.length,s={};while(++n<a){var o=r[n],i=e[o];t(i,o)&&(s[o]=i)}return s}function j(e,r){return r=O(void 0===r?e.length-1:r,0),function(){var t=arguments,n=-1,a=O(t.length-r,0),s=Array(a);while(++n<a)s[n]=t[r+n];n=-1;var o=Array(r+1);while(++n<r)o[n]=t[n];return o[r]=s,d(e,this,o)}}function T(e){return R(e)||x(e)||!!(w&&e&&e[w])}function P(e){if("string"==typeof e||D(e))return e;var r=e+"";return"0"==r&&1/e==-t?"-0":r}function x(e){return F(e)&&p.call(e,"callee")&&(!g.call(e,"callee")||m.call(e)==a)}var R=Array.isArray;function A(e){return null!=e&&N(e.length)&&!L(e)}function F(e){return _(e)&&A(e)}function L(e){var r=S(e)?m.call(e):"";return r==s||r==o}function N(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function S(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}function _(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||_(e)&&m.call(e)==i}var E=j((function(e,r){return null==e?{}:k(e,f(C(r,1),P))}));e.exports=E}).call(this,t("c8ba"))},c6f6:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("2f62");function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i={data:function(){return{selecedChain:null,selecedChainTwo:null,needTag:!1}},computed:{chains:function(){var e=this.getChains();return e},tokens:function(){return this.getAllTokenList()},tokenNames:function(){var e=this.getTokenNames()||[];return e},chainTokens:function(){var e=this,r=this.chains.findIndex((function(r){return r.sChain==e.selecedChain}));return r<0?[]:this.chains[r].children},chainTokensTwo:function(){var e=this,r=this.chains.findIndex((function(r){return r.sChain==e.selecedChainTwo}));return r<0?[]:this.chains[r].children}},methods:s({},Object(n["c"])(["getChains","getTokenNames","getAllTokenList"]),{},Object(n["b"])(["GetTokens"]),{onChainChange:function(e){this.selecedChain=e,this.needTag=this.chains.find((function(r){return r.sChain===e})).iNeedTag,this.form.setFieldsValue({sToken:void 0})}})}},e484:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"主链",hasFeedback:""}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sChain",e.validatorRules.sChain],expression:"['sChain', validatorRules.sChain]"}],attrs:{placeholder:"请选择主链",showSearch:""},on:{change:e.onChainChange}},e._l(e.chains,(function(r,n){return t("a-select-option",{key:n,attrs:{value:r.sChain}},[e._v(e._s(r.sChain))])})),1)],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"币种",hasFeedback:""}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sToken",e.validatorRules.sToken],expression:"['sToken',  validatorRules.sToken]"}],attrs:{placeholder:"请选择币种"}},e._l(e.chainTokens,(function(r,n){return t("a-select-option",{key:n,attrs:{value:r}},[e._v(e._s(r))])})),1)],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"钱包地址",hasFeedback:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sAddress",e.validatorRules.sAddress],expression:"['sAddress', validatorRules.sAddress]"}],attrs:{placeholder:"请输入钱包地址",maxLength:50}})],1),e.needTag?t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"标签",hasFeedback:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sTag",e.validatorRules.sTag],expression:"['sTag', validatorRules.sTag]"}],attrs:{placeholder:"请输入标签"}})],1):e._e(),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注",hasFeedback:""}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRemark",e.validatorRules.sRemark],expression:"['sRemark', validatorRules.sRemark]"}],attrs:{placeholder:"请输入备注（最短三个字符）",maxLength:50}})],1)],1)],1)],1)},a=[],s=t("0fea"),o=(t("88bc"),t("c1df"),t("2f62")),i=t("c6f6");function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d={name:"ColdWalletModal",mixins:[i["a"]],props:{},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{sChain:{rules:[{required:!0,message:"请选择主链"}]},sToken:{rules:[{required:!0,message:"请选择币种"}]},sAddress:{rules:[{required:!0,message:"请输入钱包地址"}]},sTag:{rules:[{required:!0,message:"请输入标签"}]},sRemark:{rules:[{required:!0,message:"请输入备注"}]}},url:{add:"/v1/core/AddColdAddress",edit:""}}},created:function(){},methods:c({},Object(o["c"])(["getChains"]),{add:function(){this.edit({})},edit:function(e){this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,r=this;this.form.validateFields((function(t,n){if(!t){if(n.sRemark.length<3)return r.$message.warning("备注不能小于3个字"),!1;r.confirmLoading=!0;var a="",o="post";e.model.iId?a+=e.url.edit:a+=e.url.add;var i=Object.assign(e.model,n);i.sTag||(i.sTag=""),Object(s["i"])(a,i,o).then((function(e){if(e.success)r.$message.success(e.message),r.$emit("ok"),r.close();else{var t;switch(e.code){case-100025:t="备注太短";break;case-100026:t="该钱包地址已存在";break;case-100027:t="钱包地址格式不正确";break;case-100028:t="没有找零地址";break;case-100029:t="多重签名";break;case-100030:t="ETH交易阻塞中";break;case-100031:t="提币钱包不能删除";break;default:t=e.message}r.$message.warning(t)}})).finally((function(){r.confirmLoading=!1}))}}))},handleCancel:function(){this.close()}})},f=d,h=t("2877"),b=Object(h["a"])(f,n,a,!1,null,"2793bf22",null);r["default"]=b.exports}}]);