(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d492d46","chunk-dcec768e","chunk-42014cc2","chunk-2d0b1e33"],{"01c0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:10}},[a("a-col",{staticStyle:{"margin-bottom":"20px"},attrs:{md:e.leftColMd,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"角色名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:""},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:12,sm:24}},[a("a-button",{staticStyle:{"margin-left":"21px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{margin:"5px 0 10px 2px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建角色")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("角色管理")}}},[e._v("导出")])],1),a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",[a("b",[e._v(e._s(e.selectedRowKeys1.length))])]),e._v("项\n        "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected1}},[e._v("清空")])]),a("div",{staticStyle:{"margin-top":"15px"}},[a("a-table",{ref:"table",staticStyle:{height:"500px"},attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys1,onChange:e.onSelectChange1,type:"radio"}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleOpen(s)}}},[e._v("用户")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n              更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(s.id)}}},[e._v("授权")])]),a("a-menu-item",[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete1(s.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("user-role-modal",{ref:"modalUserRole"}),a("role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)],1),1==this.rightcolval?a("a-col",{attrs:{md:e.rightColMd,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticStyle:{"text-align":"right"}},[a("a-icon",{attrs:{type:"close-circle"},on:{click:e.hideUserList}})],1),a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:12}},[a("a-form-item",{attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:""},model:{value:e.queryParam2.username,callback:function(t){e.$set(e.queryParam2,"username",t)},expression:"queryParam2.username"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:9,sm:24}},[a("a-button",{staticStyle:{"margin-left":"21px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery2}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset2}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",attrs:{md:24,sm:24}},[a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd2}},[e._v("新增用户")]),a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAddUserRole}},[e._v("已有用户")]),e.selectedRowKeys2.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel2}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n              删除\n            ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n            "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys2.length))]),e._v("项\n          "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected2}},[e._v("清空")])]),a("a-table",{ref:"table2",staticStyle:{height:"500px"},attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns2,dataSource:e.dataSource2,pagination:e.ipagination2,loading:e.loading2,rowSelection:{selectedRowKeys:e.selectedRowKeys2,onChange:e.onSelectChange2}},on:{change:e.handleTableChange2},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit2(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete2(s.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}],null,!1,4047252981)})],1),a("role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("user-modal",{ref:"modalForm2",on:{ok:e.modalFormOk2}}),a("Select-User-Modal",{ref:"selectUserModal",on:{selectFinished:e.selectOK}})],1)],1):e._e()],1)},i=[],n=a("b65a"),r=a("0fea"),l=a("b3c4"),o=a("2a70"),c=a("418f"),d=a("ca00"),u=a("ee18"),h=a("c1df"),m=a.n(h),f={name:"RoleUserList",mixins:[n["a"]],components:{UserRoleModal:u["default"],SelectUserModal:l["default"],RoleModal:o["default"],UserModal:c["default"],moment:m.a},data:function(){return{model1:{},model2:{},currentRoleId:"",queryParam1:{},queryParam2:{},dataSource1:[],dataSource2:[],ipagination1:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},ipagination2:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter1:{column:"createTime",order:"desc"},isorter2:{column:"createTime",order:"desc"},filters1:{},filters2:{},loading1:!1,loading2:!1,selectedRowKeys1:[],selectedRowKeys2:[],selectionRows1:[],selectionRows2:[],test:{},rightcolval:0,columns:[{title:"角色编码",align:"center",dataIndex:"roleCode"},{title:"角色名称",align:"center",dataIndex:"roleName"},{title:"创建时间",dataIndex:"createTime",align:"center",sorter:!0,customRender:function(e){return m()(e).format("YYYY-MM-DD")}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],columns2:[{title:"用户账号",align:"center",dataIndex:"username",width:120},{title:"用户名称",align:"center",width:100,dataIndex:"realname"},{title:"状态",align:"center",width:80,dataIndex:"status_dictText"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:120}],superQueryParams2:"",superQueryMatchType2:"and",url:{list:"/sys/role/list",delete:"/sys/role/delete",list2:"/sys/user/userRoleList",addUserRole:"/sys/user/addSysUserRole",delete2:"/sys/user/deleteUserRole",deleteBatch2:"/sys/user/deleteUserRoleBatch",exportXlsUrl:"sys/role/exportXls",importExcelUrl:"sys/role/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)},leftColMd:function(){return 0===this.selectedRowKeys1.length?24:12},rightColMd:function(){return 0===this.selectedRowKeys1.length?0:12}},methods:{onSelectChange2:function(e,t){this.selectedRowKeys2=e,this.selectionRows2=t},onClearSelected2:function(){this.selectedRowKeys2=[],this.selectionRows2=[]},onClearSelected1:function(){this.selectedRowKeys1=[],this.selectionRows1=[]},onSelectChange1:function(e,t){this.rightcolval=1,this.selectedRowKeys1=e,this.selectionRows1=t,this.model1=Object.assign({},t[0]),this.currentRoleId=e[0],this.loadData2()},onClearSelected:function(){},getQueryParams2:function(){var e={};this.superQueryParams2&&(e["superQueryParams"]=encodeURI(this.superQueryParams2),e["superQueryMatchType"]=this.superQueryMatchType2);var t=Object.assign(e,this.queryParam2,this.isorter2,this.filters2);return t.field=this.getQueryField2(),t.pageNo=this.ipagination2.current,t.pageSize=this.ipagination2.pageSize,Object(d["d"])(t)},getQueryField2:function(){var e="id,";return this.columns2.forEach((function(t){e+=","+t.dataIndex})),e},handleEdit2:function(e){this.$refs.modalForm2.title="编辑",this.$refs.modalForm2.roleDisabled=!0,this.$refs.modalForm2.edit(e)},handleAdd2:function(){""==this.currentRoleId?this.$message.error("请选择一个角色!"):(this.$refs.modalForm2.roleDisabled=!0,this.$refs.modalForm2.selectedRole=[this.currentRoleId],this.$refs.modalForm2.add(),this.$refs.modalForm2.title="新增")},modalFormOk2:function(){this.loadData2()},loadData2:function(e){var t=this;if(this.url.list2){if(1===e&&(this.ipagination2.current=1),""!==this.currentRoleId){var a=this.getQueryParams2();a.roleId=this.currentRoleId,this.loading2=!0,Object(r["d"])(this.url.list2,a).then((function(e){e.success&&(t.dataSource2=e.result.records,t.ipagination2.total=e.result.total),t.loading2=!1}))}}else this.$message.error("请设置url.list2属性!")},handleDelete1:function(e){this.handleDelete(e),this.dataSource2=[],this.currentRoleId=""},handleDelete2:function(e){if(this.url.delete2){var t=this;Object(r["a"])(t.url.delete2,{roleId:this.currentRoleId,userId:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData2()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete2属性!")},batchDel2:function(){if(this.url.deleteBatch2)if(this.selectedRowKeys2.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys2.length;t++)e+=this.selectedRowKeys2[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){Object(r["a"])(a.url.deleteBatch2,{roleId:a.currentRoleId,userIds:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData2(),a.onClearSelected()):a.$message.warning(e.message)}))}})}else this.$message.error("请设置url.deleteBatch2属性!")},selectOK:function(e){var t=this,a={};a.roleId=this.currentRoleId,a.userIdList=[];for(var s=0;s<e.length;s++)a.userIdList.push(e[s]);Object(r["j"])(this.url.addUserRole,a).then((function(e){e.success?(t.loadData2(),t.$message.success(e.message)):t.$message.warning(e.message)}))},handleAddUserRole:function(){""==this.currentRoleId?this.$message.error("请选择一个角色!"):this.$refs.selectUserModal.visible=!0},handleOpen:function(e){this.rightcolval=1,this.selectedRowKeys1=[e.id],this.model1=Object.assign({},e),this.currentRoleId=e.id,this.onClearSelected2(),this.loadData2()},searchQuery2:function(){this.loadData2(1)},searchReset2:function(){this.queryParam2={},this.loadData2(1)},handleTableChange2:function(e,t,a){Object.keys(a).length>0&&(this.isorter2.column=a.field,this.isorter2.order="ascend"==a.order?"asc":"desc"),this.ipagination2=e,this.loadData2()},hideUserList:function(){this.selectedRowKeys1=[]},handlePerssion:function(e){this.$refs.modalUserRole.show(e)}}},p=f,y=(a("04a7"),a("2877")),g=Object(y["a"])(p,s,i,!1,null,"bf4ed0e2",null);t["default"]=g.exports},"04a7":function(e,t,a){"use strict";var s=a("9d32"),i=a.n(s);i.a},"222d":function(e,t,a){"use strict";var s=a("abfd"),i=a.n(s);i.a},2285:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,s){return a("a-col",{key:"dr"+s,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},i=[],n=a("290c"),r=a("da05"),l=a("0fea"),o={name:"RoleDataruleModal",components:{ACol:r["b"],ARow:n["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(l["d"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};Object(l["j"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=o,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,"435b66de",null);t["default"]=u.exports},"2a70":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"85%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["roleName",e.validatorRules.roleName],expression:"[ 'roleName', validatorRules.roleName]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入角色名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["roleCode",e.validatorRules.roleCode],expression:"[ 'roleCode', validatorRules.roleCode]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入角色编码",disabled:e.roleDisabled}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",e.validatorRules.description],expression:"[ 'description', validatorRules.description ]"}],attrs:{rows:5,placeholder:"..."}})],1)],1)],1)],1)},i=[],n=a("88bc"),r=a.n(n),l=a("4ec3"),o={name:"RoleModal",data:function(){return{title:"操作",visible:!1,roleDisabled:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{roleName:{rules:[{required:!0,message:"请输入角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}]},roleCode:{rules:[{required:!0,message:"请输入角色名称!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}]},description:{rules:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.id?this.roleDisabled=!0:this.roleDisabled=!1,this.$nextTick((function(){t.form.setFieldsValue(r()(t.model,"roleName","description","roleCode"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0;var i,n=Object.assign(e.model,s);i=e.model.id?Object(l["q"])(n):Object(l["d"])(n),i.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateRoleCode:function(e,t,a){if(/[\u4E00-\u9FA5]/g.test(t))a("角色编码不可输入汉字!");else{var s={tableName:"sys_role",fieldName:"role_code",fieldVal:t,dataId:this.model.id};Object(l["m"])(s).then((function(e){e.success?a():a(e.message)}))}}}},c=o,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,"36209f6b",null);t["default"]=u.exports},"461d":function(e,t,a){"use strict";var s=a("86f5"),i=a.n(s);i.a},"86f5":function(e,t,a){},"9d32":function(e,t,a){},abfd:function(e,t,a){},b3c4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{centered:"",title:e.title,width:1e3,visible:e.visible,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:10}},[a("a-form-item",{attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入用户账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",[a("a-table",{attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns1,dataSource:e.dataSource1,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onSelectAll:e.onSelectAll,onSelect:e.onSelect,onChange:e.onSelectChange}},on:{change:e.handleTableChange}})],1)])],1)},i=[],n=a("ca00"),r=a("0fea"),l={name:"SelectUserModal",data:function(){var e=this;return{title:"添加已有用户",names:[],visible:!1,placement:"right",description:"",queryParam:{},columns1:[{title:"#",dataIndex:"",key:"rowIndex",width:50,align:"center",customRender:function(t,a,s){return parseInt(s)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"用户账号",align:"center",width:100,dataIndex:"username"},{title:"用户名称",align:"center",width:100,dataIndex:"realname"},{title:"性别",align:"center",width:100,dataIndex:"sex_dictText"},{title:"电话",align:"center",width:100,dataIndex:"phone"},{title:"部门",align:"center",width:150,dataIndex:"orgCode"}],columns2:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"操作",dataIndex:"action",align:"center",width:100,scopedSlots:{customRender:"action"}}],dataSource1:[],dataSource2:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/user/list"}}},created:function(){this.loadData()},methods:{searchQuery:function(){this.loadData(1)},searchReset:function(){this.queryParam={},this.loadData(1)},handleCancel:function(){this.visible=!1},handleOk:function(){this.dataSource2=this.selectedRowKeys,this.$emit("selectFinished",this.dataSource2),this.visible=!1},add:function(){this.visible=!0},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(r["d"])(this.url.list,a).then((function(e){e.success&&(t.dataSource1=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(n["d"])(e)},getQueryField:function(){},onSelectAll:function(e,t,a){if(!0===e)for(var s=0;s<a.length;s++)this.dataSource2.push(a[s]);else for(var i=0;i<a.length;i++)this.dataSource2.splice(this.dataSource2.indexOf(a[i]),1)},onSelect:function(e,t){if(!0===t)this.dataSource2.push(e);else{var a=this.dataSource2.indexOf(e);a>=0&&this.dataSource2.splice(this.dataSource2.indexOf(e),1)}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){this.dataSource2.splice(this.dataSource2.indexOf(e),1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()}}},o=l,c=(a("461d"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,"2aec9224",null);t["default"]=d.exports},ee18:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var s=t.slotTitle,i=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(s)),i?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}])})],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("role-datarule-modal",{ref:"datarule"})],1)},i=[],n=a("4ec3"),r=a("2285");function l(e){return d(e)||c(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function d(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var u={name:"RoleModal",components:{RoleDataruleModal:r["default"]},data:function(){return{roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!0,title:"角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.roleId)},onCheck:function(e){this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},show:function(e){this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,s={roleId:a.roleId,permissionIds:a.checkedKeys.join(","),lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,Object(n["X"])(s).then((function(s){s.success?(a.$message.success(s.message),a.loading=!1,e&&a.close()):(a.$message.error(s.message),a.loading=!1,e&&a.close()),t.loadData()}))},loadData:function(){var e=this;Object(n["Q"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids,Object(n["N"])({roleId:e.roleId}).then((function(t){e.checkedKeys=l(t.result),e.defaultCheckedKeys=l(t.result),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},h=u,m=(a("222d"),a("2877")),f=Object(m["a"])(h,s,i,!1,null,"60e39634",null);t["default"]=f.exports}}]);