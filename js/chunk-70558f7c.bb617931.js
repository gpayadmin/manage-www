(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70558f7c"],{7020:function(e,t,a){"use strict";var s=a("fa47"),n=a.n(s);n.a},ed2a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"账号"}},[a("a-input",{attrs:{placeholder:"请输入账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"性别"}},[a("a-select",{attrs:{placeholder:"请选择性别"},model:{value:e.queryParam.sex,callback:function(t){e.$set(e.queryParam,"sex",t)},expression:"queryParam.sex"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择性别查询")]),a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.queryParam.email,callback:function(t){e.$set(e.queryParam,"email",t)},expression:"queryParam.email"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"手机号码"}},[a("a-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择状态"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("解冻")])],1)],1)],1)]:e._e(),a("a-col",{attrs:{span:6}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchByquery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n                "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n                "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("a-table",{ref:"table",attrs:{rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,onSelect:e.onSelect}},on:{change:e.handleTableChange}})],1)},n=[],i=a("ca00"),r=a("4ec3"),l={name:"SelectUserListModal",components:{},data:function(){return{title:"选择用户",queryParam:{},columns:[{title:"用户账号",align:"center",dataIndex:"username",fixed:"left",width:200},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"手机号码",align:"center",dataIndex:"phone"},{title:"邮箱",align:"center",dataIndex:"email"},{title:"状态",align:"center",dataIndex:"status",customRender:function(e){return 1==e?"正常":2==e?"冻结":e}}],dataSource:[],ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedRowKeys:[],selectionRows:[],visible:!1,toggleSearchStatus:!1}},created:function(){this.loadData()},methods:{add:function(e,t){this.visible=!0,this.edit(e,t)},edit:function(e,t){if(t&&t.length>0?this.selectedRowKeys=t.split(","):this.selectedRowKeys=[],e){var a=this;a.selectionRows=[],e.forEach((function(e,t){a.selectionRows.push({id:a.selectedRowKeys[t],realname:e.label})}))}else this.selectionRows=[]},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(r["C"])(a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(i["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},onSelectChange:function(e){this.selectedRowKeys=e},onSelect:function(e,t){1==t?this.selectionRows.push(e):this.selectionRows.forEach((function(t,a,s){t.id==e.id&&s.splice(a,1)}))},searchReset:function(){var e=this;Object.keys(e.queryParam).forEach((function(t){e.queryParam[t]=""})),e.loadData(1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleCancel:function(){this.selectionRows=[],this.selectedRowKeys=[],this.visible=!1},handleOk:function(){this.$emit("choseUser",this.selectionRows),this.handleCancel()},searchByquery:function(){this.loadData(1)},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus}}},o=l,c=(a("7020"),a("2877")),u=Object(c["a"])(o,s,n,!1,null,"76b69b89",null);t["default"]=u.exports},fa47:function(e,t,a){}}]);