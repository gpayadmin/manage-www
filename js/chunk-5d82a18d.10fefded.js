(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d82a18d","chunk-2d20fed6"],{"0a4f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("finance-list",{attrs:{type:1}})},s=[],n=a("0f38b"),i={name:"FinancelRecord",components:{FinanceList:n["default"]}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,"02045070",null);t["default"]=l.exports},"0f38b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[0===e.pageType?a("span",[a("a-radio-group",{staticStyle:{"margin-bottom":"24px",margin:"0 8px"},on:{change:e.searchQuery},model:{value:e.queryParam.iType,callback:function(t){e.$set(e.queryParam,"iType",t)},expression:"queryParam.iType"}},[a("a-radio-button",{attrs:{value:0}},[e._v("\n              全部\n            ")]),a("a-radio-button",{attrs:{value:2}},[e._v("\n              充值\n            ")]),a("a-radio-button",{attrs:{value:1}},[e._v("\n              提币\n            ")])],1),a("a-range-picker",{staticStyle:{"margin-bottom":"24px","margin-right":"8px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onCreateTimeChange},model:{value:e.queryParam.iCreateTime,callback:function(t){e.$set(e.queryParam,"iCreateTime",t)},expression:"queryParam.iCreateTime"}}),a("a-button",{staticStyle:{"margin-bottom":"24px","margin-right":"8px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.$emit("back")}}},[e._v("返回资产列表")])],1):e._e(),1===e.pageType?a("span",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"昵称"}},[a("j-input",{attrs:{placeholder:"请输入昵称",type:"normal"},model:{value:e.queryParam.sNickName,callback:function(t){e.$set(e.queryParam,"sNickName",t)},expression:"queryParam.sNickName"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"手机号"}},[a("j-input",{attrs:{placeholder:"请输入手机号",type:"normal"},model:{value:e.queryParam.sCellphone,callback:function(t){e.$set(e.queryParam,"sCellphone",t)},expression:"queryParam.sCellphone"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("j-input",{attrs:{placeholder:"请输入邮箱",type:"normal"},model:{value:e.queryParam.sEmail,callback:function(t){e.$set(e.queryParam,"sEmail",t)},expression:"queryParam.sEmail"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"币种"}},[a("a-select",{attrs:{placeholder:"请选择币种",allowClear:""},on:{change:e.searchQuery},model:{value:e.queryParam.sToken,callback:function(t){e.$set(e.queryParam,"sToken",t)},expression:"queryParam.sToken"}},e._l(e.tokenNames,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t}},[e._v(e._s(t))])})),1)],1)],1),a("a-col",{attrs:{xl:12,lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{label:"充提类型"}},[a("a-radio-group",{staticStyle:{"margin-bottom":"24px","margin-right":"8px"},on:{change:e.searchQuery},model:{value:e.queryParam.iType,callback:function(t){e.$set(e.queryParam,"iType",t)},expression:"queryParam.iType"}},[a("a-radio-button",{attrs:{value:0}},[e._v("\n                    全部\n                  ")]),a("a-radio-button",{attrs:{value:2}},[e._v("\n                    充值\n                  ")]),a("a-radio-button",{attrs:{value:1}},[e._v("\n                    提币\n                  ")])],1),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1):e._e()])],1),a("div",[a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:e.computedColumns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"sAddress",fn:function(t,r,s){return a("span",{},[a("qrcode-preview",{attrs:{sAddress:r.sAddress,maps:"left",title:"地址二维码"}}),e.sPrAddres(r.sChain,"sAddressQueryUrl")+"/"+r.sAddress?a("a",{staticClass:"abtc-color",attrs:{href:e.sPrAddres(r.sChain,"sAddressQueryUrl")+"/"+r.sAddress,target:"_blank"}},[e._v(e._s(e._f("btcNum")(r.sAddress)))]):a("a",[e._v(e._s(e._f("btcNum")(r.sAddress)))]),a("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.sAddress,expression:"record.sAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(){return e.$message.success("已复制到剪切板")},expression:"()=>$message.success('已复制到剪切板')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(){return e.$message.error("复制失败")},expression:"()=>$message.error('复制失败')",arg:"error"}],staticStyle:{"margin-left":"16px"}},[e._v("复制")])],1)}},{key:"sTxHash",fn:function(t,r,s){return a("span",{},[r.sTxHash?a("qrcode-preview",{attrs:{sAddress:r.sTxHash,maps:"left",title:"交易hash二维码"}}):e._e(),e.sPrAddres(r.sChain,"sTxQueryUrl")+"/"+r.sTxHash&&r.sTxHash?a("a",{staticClass:"abtc-color",attrs:{href:e.sPrAddres(r.sChain,"sTxQueryUrl")+"/"+r.sTxHash,target:"_blank"}},[e._v(e._s(e._f("btcNum")(r.sTxHash)))]):a("a",[e._v(e._s(e._f("btcNum")(r.sTxHash)))]),r.sTxHash?a("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.sTxHash,expression:"record.sTxHash",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(){return e.$message.success("已复制到剪切板")},expression:"()=>$message.success('已复制到剪切板')",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(){return e.$message.error("复制失败")},expression:"()=>$message.error('复制失败')",arg:"error"}],staticStyle:{"margin-left":"16px"}},[e._v("复制")]):e._e()],1)}},{key:"iStatus",fn:function(t,r,s){return a("span",{},[1===t?a("span",[a("a-badge",{attrs:{status:"processing"}}),e._v(" 创建订单")],1):e._e(),2===t?a("span",[a("a-badge",{attrs:{status:"processing"}}),e._v(" 冻结资产")],1):e._e(),3===t?a("span",[a("a-badge",{attrs:{status:"processing"}}),e._v(" 通知钱包服务")],1):e._e(),5===t?a("span",[a("a-badge",{attrs:{status:"success"}}),e._v(" 提币完成")],1):e._e(),6===t?a("span",[a("a-badge",{attrs:{status:"error"}}),e._v(" 拒绝提币")],1):e._e(),7===t?a("span",[a("a-badge",{attrs:{status:"error"}}),e._v(" 提币失败")],1):e._e(),8===t?a("span",[a("a-badge",{attrs:{color:"#d2d0d0"}}),e._v(" 用户取消提币")],1):e._e(),9===t?a("span",[a("a-badge",{attrs:{color:"error"}}),e._v(" 异常订单")],1):e._e(),11===t?a("span",[a("a-badge",{attrs:{status:"warning"}}),e._v(" 收到充值记录")],1):e._e(),13===t?a("span",[a("a-badge",{attrs:{status:"success"}}),e._v(" 充值完成")],1):e._e(),14===t?a("span",[a("a-badge",{attrs:{status:"success"}}),e._v(" 充值失败")],1):e._e()])}}])})],1)])},s=[],n=a("1b3c"),i=a("ca00"),o=(a("89f2"),a("5a0c")),c=a.n(o),l=a("4349"),u=(a("0fea"),a("38e6")),d=(a("2f62"),a("c6f6"));function m(e){return f(e)||p(e)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var g={name:"FinanceList",mixins:[n["a"],d["a"]],props:{type:{Number:Number,default:0},userId:[String,Number],token:String},components:{JInput:l["default"],QrcodePreview:u["default"]},data:function(){var e=this;return{description:"充提列表",sexDictOptions:[],resultName:"vRecords",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(t,a,r){return parseInt(r)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"昵称",align:"center",dataIndex:"sNickName",customRender:function(e,t,a){return e&&""!==e?e:"用户未设置"}},{title:"手机号",align:"center",dataIndex:"sCellphone"},{title:"邮箱",align:"center",dataIndex:"sEmail"},{title:"币种",align:"center",dataIndex:"sToken"},{title:"主链",align:"center",dataIndex:"sChain"},{title:"类型",align:"center",dataIndex:"iType",customRender:function(e){return 2===e?"充值":"提币"}},{title:"地址",align:"center",dataIndex:"sAddress",scopedSlots:{customRender:"sAddress"}},{title:"数量",align:"center",dataIndex:"dAmount",customRender:function(e){return Number(e)}},{title:"手续费",align:"center",dataIndex:"dHandingFee",customRender:function(e,t){return 1===t.iType?Number(e):"-"}},{title:"交易哈希",align:"center",dataIndex:"sTxHash",scopedSlots:{customRender:"sTxHash"}},{title:"状态",align:"center",dataIndex:"iStatus",scopedSlots:{customRender:"iStatus"}},{title:"创建时间",align:"center",dataIndex:"iCreateTime",customRender:function(e){return c()(e).format("YYYY-MM-DD HH:mm")}}],settingColumns:[],defColumns:[],url:{list:"/v1/udc/GetUserFinanceList",GetTokenCodeList:"/v1/core/GetTokenCodeList"},sToken:this.token,iUserId:this.userId,iType:0,pageType:this.type}},computed:{computedColumns:function(){if(0===this.type){var e=m(this.columns);return e.splice(1,3),e}return this.columns}},methods:{getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,0===this.type&&(t.iUserId=this.iUserId,t.sToken=this.sToken),delete t.order,delete t.column,Object(i["d"])(t)},onCreateTimeChange:function(e,t){this.queryParam.iCreateTime_Begin=c()(t[0]).startOf("day").valueOf(),this.queryParam.iCreateTime_End=c()(t[1]).endOf("day").valueOf()},showDetail:function(e){this.userData=e,this.modalType="detail",this.$refs.modalForm.visible=!0}},created:function(){this.queryParam.iType=this.iType}},y=g,b=a("2877"),v=Object(b["a"])(y,r,s,!1,null,"1095b37c",null);t["default"]=v.exports},4349:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-input",{attrs:{placeholder:e.placeholder,value:e.inputVal},on:{input:e.backValue}})},s=[],n="like",i="ne",o="ge",c="le",l={name:"JInput",props:{value:{type:String,required:!1},type:{type:String,required:!1,default:n},placeholder:{type:String,required:!1,default:""},trim:{type:Boolean,required:!1,default:!1}},watch:{value:{immediate:!0,handler:function(){this.initVal()}},type:function(){this.backValue({target:{value:this.inputVal}})}},model:{prop:"value",event:"change"},data:function(){return{inputVal:""}},methods:{initVal:function(){if(this.value){var e=this.value;switch(this.type){case n:-1!=e.indexOf("*")&&(e=e.substring(1,e.length-1));break;case i:e=e.substring(1);break;case o:e=e.substring(2);break;case c:e=e.substring(2);break;default:}this.inputVal=e}else this.inputVal=""},backValue:function(e){var t=e.target.value;switch(t&&!0===this.trim&&(t=t.trim()),this.type){case n:t="*"+t+"*";break;case i:t="!"+t;break;case o:t=">="+t;break;case c:t="<="+t;break;default:}this.$emit("change",t)}}},u=l,d=a("2877"),m=Object(d["a"])(u,r,s,!1,null,"9b2fd3f2",null);t["default"]=m.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("ca00"),s=a("0fea"),n=a("2b0e"),i=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":n["default"].ls.get(i["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","50","100"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(s["d"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(s["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,s=a.result,n=s.msg,i=s.fileUrl,o=s.fileName,c=window._CONFIG["domianURL"]+i;this.$warning({title:r,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:c,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["e"])(e)},downloadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["e"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},c6f6:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("2f62");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={data:function(){return{selecedChain:null,selecedChainTwo:null,needTag:!1}},computed:{chains:function(){var e=this.getChains();return e},tokens:function(){return this.getAllTokenList()},tokenNames:function(){var e=this.getTokenNames()||[];return e},chainTokens:function(){var e=this,t=this.chains.findIndex((function(t){return t.sChain==e.selecedChain}));return t<0?[]:this.chains[t].children},chainTokensTwo:function(){var e=this,t=this.chains.findIndex((function(t){return t.sChain==e.selecedChainTwo}));return t<0?[]:this.chains[t].children}},methods:n({},Object(r["c"])(["getChains","getTokenNames","getAllTokenList"]),{},Object(r["b"])(["GetTokens"]),{onChainChange:function(e){this.selecedChain=e,this.needTag=this.chains.find((function(t){return t.sChain===e})).iNeedTag,this.form.setFieldsValue({sToken:void 0})}})}}}]);