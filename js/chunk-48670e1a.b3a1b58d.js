(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48670e1a","chunk-2d20fed6"],{2095:function(e,t,n){"use strict";n.r(t);var a,r,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((function(e,t){var n=t.charCodeAt(0);return n>=0&&n<=128?e+1:e+2}),0)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=0;return e.split("").reduce((function(e,a){var r=a.charCodeAt(0);return n+=r>=0&&r<=128?1:2,n<=t?e+a:e}),"")},l={name:"Ellipsis",props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean,default:!0},length:{type:Number,default:25},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{},render:function(){var e=arguments[0],t=this.$props,n=t.tooltip,a=t.length,r="";return this.$slots.default&&(r=this.$slots.default.map((function(e){return e.text})).join("")),n&&i(r)>a?e("a-tooltip",[e("template",{slot:"title"},[r]),e("span",[s(r,this.length)+"…"])]):e("span",[r])}},o=l,u=n("2877"),c=Object(u["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},"3f89":function(e,t,n){"use strict";var a=n("cf77"),r=n.n(a);r.a},a1ed:function(e,t,n){"use strict";var a=n("cae5"),r=n.n(a);r.a},b16a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("j-modal",{attrs:{centered:"",title:e.name+"选择",width:e.width,visible:e.visible,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.close}},[n("a-row",{attrs:{gutter:18}},[n("a-col",{attrs:{span:16}},[n("a-form",{staticClass:"j-inline-form",attrs:{layout:"inline"}},[n("a-form-item",{attrs:{label:e.queryParamText||e.name}},[n("a-input",{attrs:{placeholder:"请输入"+(e.queryParamText||e.name)},on:{pressEnter:e.searchQuery},model:{value:e.queryParam[e.queryParamCode||e.valueKey],callback:function(t){e.$set(e.queryParam,e.queryParamCode||e.valueKey,t)},expression:"queryParam[queryParamCode||valueKey]"}})],1),e.queryConfig.length>0?n("j-select-biz-query-item",{directives:[{name:"show",rawName:"v-show",value:e.showMoreQueryItems,expression:"showMoreQueryItems"}],attrs:{queryParam:e.queryParam,queryConfig:e.queryConfig},on:{pressEnter:e.searchQuery}}):e._e(),n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),e.queryConfig.length>0?n("a",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.showMoreQueryItems=!e.showMoreQueryItems}}},[e._v("\n          "+e._s(e.showMoreQueryItems?"收起":"展开")+"\n          "),n("a-icon",{attrs:{type:e.showMoreQueryItems?"up":"down"}})],1):e._e()],1),n("a-table",{attrs:{size:"middle",bordered:"",rowKey:e.rowKey,columns:e.innerColumns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.multiple?"checkbox":"radio"},customRow:e.customRowFn},on:{change:e.handleTableChange}})],1),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"已选"+e.name,bordered:!1,"head-style":{padding:0},"body-style":{padding:0}}},[n("a-table",e._b({attrs:{size:"middle",rowKey:e.rowKey,bordered:""},scopedSlots:e._u([{key:"action",fn:function(t,a,r){return n("span",{},[n("a",{on:{click:function(t){return e.handleDeleteSelected(a,r)}}},[e._v("删除")])])}}])},"a-table",e.selectedTable,!1))],1)],1)],1)],1)},r=[],i=n("0fea"),s=n("c4db"),l=n("b65a"),o=n("ca00"),u=n("2638"),c=n.n(u),d={name:"JSelectBizQueryItem",props:{queryParam:Object,queryConfig:Array},data:function(){return{}},methods:{renderQueryItem:function(){var e=this,t=this.$createElement;return this.queryConfig.map((function(n){var a,r=n.key,i=n.label,s=n.placeholder,l=n.dictCode,o=n.props,u=n.customRender,d={props:{},on:{pressEnter:function(){return e.$emit("pressEnter")}}};return null!=o&&Object.assign(d.props,o),d.props["placeholder"]=void 0===s?l?"请选择".concat(i):"请输入".concat(i):s,a="function"===typeof u?u.call(e,{key:r,options:d,queryParam:e.queryParam}):l?t("j-dict-select-tag",c()([{},d,{attrs:{dictCode:l},style:"width:180px;",model:{value:e.queryParam[r],callback:function(t){e.$set(e.queryParam,r,t)}}}])):t("a-input",c()([{},d,{model:{value:e.queryParam[r],callback:function(t){e.$set(e.queryParam,r,t)}}}])),t("a-form-item",{key:r,attrs:{label:i}},[a])}))}},render:function(){var e=arguments[0];return e("span",[this.renderQueryItem()])}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"JSelectBizComponentModal",mixins:[l["a"]],components:{Ellipsis:s["a"],JSelectBizQueryItem:d},props:{value:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},valueKey:{type:String,required:!0},multiple:{type:Boolean,default:!0},width:{type:Number,default:900},name:{type:String,default:""},listUrl:{type:String,required:!0,default:""},valueUrl:{type:String,default:""},displayKey:{type:String,default:null},columns:{type:Array,required:!0,default:function(){return[]}},queryParamCode:{type:String,default:null},queryParamText:{type:String,default:null},queryConfig:{type:Array,default:function(){return[]}},rowKey:{type:String,default:"id"},ellipsisLength:{type:Number,default:12}},data:function(){var e=this,t=this.$createElement;return{innerValue:[],selectedTable:{pagination:!1,scroll:{y:240},columns:[f({},this.columns[0],{width:this.columns[0].widthRight||this.columns[0].width}),{title:"操作",dataIndex:"action",align:"center",width:60,scopedSlots:{customRender:"action"}}],dataSource:[]},renderEllipsis:function(n){return t("ellipsis",{attrs:{length:e.ellipsisLength}},[n])},url:{list:this.listUrl},ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},options:[],dataSourceMap:{},showMoreQueryItems:!1}},computed:{innerColumns:function(){var e=this,t=Object(o["b"])(this.columns);return t.forEach((function(t){-1!==e.ellipsisLength&&(t.customRender=function(t){return e.renderEllipsis(t)})})),t}},watch:{value:{deep:!0,immediate:!0,handler:function(e){this.innerValue=Object(o["b"])(e),this.selectedRowKeys=[],this.valueWatchHandler(e),this.queryOptionsByValue(e)}},dataSource:{deep:!0,handler:function(e){this.emitOptions(e),this.valueWatchHandler(this.innerValue)}},selectedRowKeys:{immediate:!0,deep:!0,handler:function(e){var t=this;this.innerValue&&(this.innerValue.length=0),this.selectedTable.dataSource=e.map((function(e){var n=!0,a=!1,r=void 0;try{for(var i,s=t.dataSource[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var l=i.value;if(l[t.rowKey]===e)return Object(o["i"])(t.innerValue,l[t.valueKey]),l}}catch(y){a=!0,r=y}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}var u=!0,c=!1,d=void 0;try{for(var h,f=t.selectedTable.dataSource[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var p=h.value;if(p[t.rowKey]===e)return Object(o["i"])(t.innerValue,p[t.valueKey]),p}}catch(y){c=!0,d=y}finally{try{u||null==f.return||f.return()}finally{if(c)throw d}}return{}}))}}},methods:{close:function(){this.$emit("update:visible",!1)},valueWatchHandler:function(e){var t=this;e.forEach((function(e){t.dataSource.concat(t.selectedTable.dataSource).forEach((function(n){n[t.valueKey]===e&&Object(o["i"])(t.selectedRowKeys,n[t.rowKey])}))}))},queryOptionsByValue:function(e){var t,n=this;if(e&&0!==e.length){var a=!1,r=!0,s=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var d=u.value,h=!1,f=!0,y=!1,m=void 0;try{for(var b,g=this.options[Symbol.iterator]();!(f=(b=g.next()).done);f=!0){var v=b.value;if(d===v.value){h=!0;break}}}catch(w){y=!0,m=w}finally{try{f||null==g.return||g.return()}finally{if(y)throw m}}if(!h){a=!0;break}}}catch(w){s=!0,l=w}finally{try{r||null==c.return||c.return()}finally{if(s)throw l}}a&&Object(i["d"])(this.valueUrl||this.listUrl,(t={},p(t,this.valueKey,e.join(",")+","),p(t,"pageNo",1),p(t,"pageSize",e.length),t)).then((function(e){if(e.success){var t=e.result;t instanceof Array||(t=e.result.records),n.emitOptions(t,(function(e){Object(o["i"])(n.innerValue,e[n.valueKey]),Object(o["i"])(n.selectedRowKeys,e[n.rowKey]),Object(o["i"])(n.selectedTable.dataSource,e,n.rowKey)}))}}))}},emitOptions:function(e,t){var n=this;e.forEach((function(e){var a=e[n.valueKey];n.dataSourceMap[a]=e,Object(o["i"])(n.options,{label:e[n.displayKey||n.valueKey],value:a},"value"),"function"===typeof t&&t(e)})),this.$emit("options",this.options,this.dataSourceMap)},handleOk:function(){var e=this,t=this.selectedTable.dataSource.map((function(t){return t[e.valueKey]}));this.$emit("input",t),this.close()},handleDeleteSelected:function(e,t){this.selectedRowKeys.splice(this.selectedRowKeys.indexOf(e[this.rowKey]),1),this.selectedTable.dataSource.splice(this.selectedTable.dataSource.indexOf(e),1),this.innerValue.splice(this.innerValue.indexOf(e[this.valueKey]),1)},customRowFn:function(e){var t=this;return{on:{click:function(){var n=e[t.rowKey];if(t.multiple){var a=t.selectedRowKeys.indexOf(n);-1===a?(t.selectedRowKeys.push(n),t.selectedTable.dataSource.push(e)):t.handleDeleteSelected(e,a)}else t.selectedRowKeys=[n],t.selectedTable.dataSource=[e]}}}}}},m=y,b=(n("3f89"),n("2877")),g=Object(b["a"])(m,a,r,!1,null,"70945e2f",null);t["default"]=g.exports},b296:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",{staticClass:"j-select-biz-component-box",attrs:{type:"flex",gutter:8}},[n("a-col",{staticClass:"left",class:{full:!e.buttons}},[e._t("left",[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:e.placeholder,options:e.selectOptions,allowClear:"",disabled:e.disabled,open:e.selectOpen},on:{dropdownVisibleChange:e.handleDropdownVisibleChange},nativeOn:{click:function(t){e.visible=!e.buttons||e.visible}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})])],2),e.buttons?n("a-col",{staticClass:"right"},[n("a-button",{attrs:{type:"primary",icon:"search",disabled:e.disabled},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.selectButtonText))])],1):e._e(),n("j-select-biz-component-modal",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t},options:e.handleOptions},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"j-select-biz-component-modal",e.modalProps,!1))],1)},r=[],i=n("b16a"),s={name:"JSelectBizComponent",components:{JSelectBizComponentModal:i["default"]},props:{value:{type:String,default:""},returnId:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},displayKey:{type:String,default:null},returnKeys:{type:Array,default:function(){return["id","id"]}},selectButtonText:{type:String,default:"选择"}},data:function(){return{selectValue:[],selectOptions:[],dataSourceMap:{},visible:!1,selectOpen:!1}},computed:{valueKey:function(){return this.returnId?this.returnKeys[0]:this.returnKeys[1]},modalProps:function(){return Object.assign({valueKey:this.valueKey,multiple:this.multiple,returnKeys:this.returnKeys,displayKey:this.displayKey||this.valueKey},this.$attrs)}},watch:{value:{immediate:!0,handler:function(e){this.selectValue=e?e.split(","):[]}},selectValue:{deep:!0,handler:function(e){var t=this,n=e.map((function(e){return t.dataSourceMap[e]})),a=e.join(",");a!==this.value&&(this.$emit("select",n),this.$emit("input",a),this.$emit("change",a))}}},methods:{handleOptions:function(e,t){this.selectOptions=e,this.dataSourceMap=t},handleDropdownVisibleChange:function(){var e=this;this.selectOpen=!0,this.$nextTick((function(){e.selectOpen=!1}))}}},l=s,o=(n("a1ed"),n("2877")),u=Object(o["a"])(l,a,r,!1,null,"3d386544",null);t["default"]=u.exports},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("ca00"),r=n("0fea"),i=n("2b0e"),s=n("9fb0");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{tokenHeader:{"X-Access-Token":i["default"].ls.get(s["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","50","100"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(r["d"])(this.url.list,n).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(a["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(r["a"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(r["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=o({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),Object(r["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,a=n.message,r=n.result,i=r.msg,s=r.fileUrl,l=r.fileName,o=window._CONFIG["domianURL"]+s;this.$warning({title:a,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:o,target:"_blank",download:l}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(r["e"])(e)},downloadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(r["e"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},c4db:function(e,t,n){"use strict";var a=n("2095");t["a"]=a["default"]},cae5:function(e,t,n){},cf77:function(e,t,n){}}]);