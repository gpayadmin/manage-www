(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a70438e","chunk-96ffada4","chunk-10b1e910","chunk-2d0e4e51","chunk-2d0c8bc6","chunk-2d0aecfc","chunk-2d209ae6"],{"00c1":function(t,e,i){},"0c3f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data}})},n=[],s={data:function(){return{data:[]}},methods:{}},o=s,c=i("2877"),r=Object(c["a"])(o,a,n,!1,null,"43092d5f",null);e["default"]=r.exports},"33e6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account-settings-info-view"},[i("a-row",{attrs:{gutter:16}},[i("a-col",{attrs:{md:24,lg:16}},[i("a-form",{attrs:{layout:"vertical"}},[i("a-form-item",{attrs:{label:"昵称"}},[i("a-input",{attrs:{placeholder:"给自己起个名字"}})],1),i("a-form-item",{attrs:{label:"Bio"}},[i("a-textarea",{attrs:{rows:"4",placeholder:"You are not alone."}})],1),i("a-form-item",{attrs:{label:"电子邮件",required:!1}},[i("a-input",{attrs:{placeholder:"exp@admin.com"}})],1),i("a-form-item",{attrs:{label:"加密方式",required:!1}},[i("a-select",{attrs:{defaultValue:"aes-256-cfb"}},[i("a-select-option",{attrs:{value:"aes-256-cfb"}},[t._v("aes-256-cfb")]),i("a-select-option",{attrs:{value:"aes-128-cfb"}},[t._v("aes-128-cfb")]),i("a-select-option",{attrs:{value:"chacha20"}},[t._v("chacha20")])],1)],1),i("a-form-item",{attrs:{label:"连接密码",required:!1}},[i("a-input",{attrs:{placeholder:"h3gSbecd"}})],1),i("a-form-item",{attrs:{label:"登录密码",required:!1}},[i("a-input",{attrs:{placeholder:"密码"}})],1),i("a-form-item",[i("a-button",{attrs:{type:"primary"}},[t._v("提交")]),i("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("保存")])],1)],1)],1),i("a-col",{style:{minHeight:"180px"},attrs:{md:24,lg:8}},[i("div",{staticClass:"ant-upload-preview",on:{click:function(e){return t.$refs.modal.edit(1)}}},[i("a-icon",{staticClass:"upload-icon",attrs:{type:"cloud-upload-o"}}),i("div",{staticClass:"mask"},[i("a-icon",{attrs:{type:"plus"}})],1),i("img",{attrs:{src:t.option.img}})],1)])],1),i("avatar-modal",{ref:"modal"})],1)},n=[],s=i("8d90"),o={components:{AvatarModal:s["default"]},data:function(){return{preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]}}},methods:{}},c=o,r=(i("71a9"),i("2877")),l=Object(r["a"])(c,a,n,!1,null,"3ddc9d28",null);e["default"]=l.exports},"55c3":function(t,e,i){"use strict";i.r(e);var a,n,s=i("5976"),o=i("160c"),c=i("fe2b"),r=i("a6b6"),l=i("ac0d"),u=r["a"].Meta,d={components:{AListItem:r["a"],AList:c["b"],ASwitch:o["a"],Meta:u},mixins:[l["a"]],data:function(){return{}},filters:{themeFilter:function(t){var e={dark:"暗色",light:"白色"};return e[t]}},methods:{colorFilter:function(t){var e=s["a"].filter((function(e){return e.color===t}))[0];return e&&e.key},onChange:function(t){t?this.$store.dispatch("ToggleTheme","dark"):this.$store.dispatch("ToggleTheme","light")}},render:function(){var t=arguments[0];return t(c["b"],{attrs:{itemLayout:"horizontal"}},[t(r["a"],[t(u,[t("a",{slot:"title"},["风格配色"]),t("span",{slot:"description"},["整体风格配色设置"])]),t("div",{slot:"actions"},[t(o["a"],{attrs:{checkedChildren:"暗色",unCheckedChildren:"白色",defaultChecked:"dark"===this.navTheme},on:{change:this.onChange}})])]),t(r["a"],[t(u,[t("a",{slot:"title"},["主题色"]),t("span",{slot:"description"},["页面风格配色： ",t("a",{domProps:{innerHTML:this.colorFilter(this.primaryColor)}})])])])])}},f=d,h=i("2877"),m=Object(h["a"])(f,a,n,!1,null,"75019a7f",null);e["default"]=m.exports},"71a9":function(t,e,i){"use strict";var a=i("9fac"),n=i.n(a);n.a},8777:function(t,e,i){},"8d90":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{visible:t.visible,title:"修改头像",maskClosable:!1,confirmLoading:t.confirmLoading,width:800}},[i("a-row",[i("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[i("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),i("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[i("div",{staticClass:"avatar-upload-preview"},[i("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),i("template",{slot:"footer"},[i("a-button",{key:"back",on:{click:t.cancelHandel}},[t._v("取消")]),i("a-button",{key:"submit",attrs:{type:"primary",loading:t.confirmLoading},on:{click:t.okHandel}},[t._v("保存")])],1)],2)},n=[],s=i("7e79"),o={components:{VueCropper:s["VueCropper"]},data:function(){return{visible:!1,id:null,confirmLoading:!1,options:{img:"/avatar2.jpg",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}},c=o,r=(i("ba30"),i("2877")),l=Object(r["a"])(c,a,n,!1,null,"68555700",null);e["default"]=l.exports},9108:function(t,e,i){"use strict";var a=i("8777"),n=i.n(a);n.a},"91be":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data}})},n=[],s={data:function(){return{data:[]}},methods:{}},o=s,c=i("2877"),r=Object(c["a"])(o,a,n,!1,null,"433691d5",null);e["default"]=r.exports},"9fac":function(t,e,i){},a9a9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return i("a-list-item",{key:a},[i("a-list-item-meta",[i("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),i("span",{attrs:{slot:"description"},slot:"description"},[i("span",{staticClass:"security-list-description"},[t._v(t._s(e.description))]),e.value?i("span",[t._v(" : ")]):t._e(),i("span",{staticClass:"security-list-value"},[t._v(t._s(e.value))])])]),e.actions?[i("a",{attrs:{slot:"actions"},on:{click:e.actions.callback},slot:"actions"},[t._v(t._s(e.actions.title))])]:t._e()],2)}}])})},n=[],s={data:function(){var t=this;return{data:[{title:"账户密码",description:"当前密码强度",value:"强",actions:{title:"修改",callback:function(){t.$message.info("This is a normal message")}}},{title:"密保手机",description:"已绑定手机",value:"138****8293",actions:{title:"修改",callback:function(){t.$message.success("This is a message of success")}}},{title:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",value:"",actions:{title:"设置",callback:function(){t.$message.error("This is a message of error")}}},{title:"备用邮箱",description:"已绑定邮箱",value:"ant***sign.com",actions:{title:"修改",callback:function(){t.$message.warning("This is message of warning")}}},{title:"MFA 设备",description:"未绑定 MFA 设备，绑定后，可以进行二次确认",value:"",actions:{title:"绑定",callback:function(){t.$message.info("This is a normal message")}}}]}}},o=s,c=i("2877"),r=Object(c["a"])(o,a,n,!1,null,"28b2c3cd",null);e["default"]=r.exports},ba30:function(t,e,i){"use strict";var a=i("00c1"),n=i.n(a);n.a},cd07:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-header-index-wide"},[i("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[i("div",{staticClass:"account-settings-info-main",class:t.device,style:"min-height:"+t.mainInfoHeight},[i("div",{staticClass:"account-settings-info-left"},[i("a-menu",{style:{border:"0",width:"mobile"==t.device?"560px":"auto"},attrs:{mode:"mobile"==t.device?"horizontal":"inline","default-selected-keys":["settings"],type:"inner"},on:{openChange:t.onOpenChange}},[i("a-menu-item",{key:"settings"},[i("a",{on:{click:function(e){return t.settingsClick()}}},[t._v("\n              基本设置\n            ")])]),i("a-menu-item",{key:"security"},[i("a",{on:{click:function(e){return t.securityClick()}}},[t._v("安全设置")])]),i("a-menu-item",{key:"custom"},[i("a",{on:{click:function(e){return t.customClick()}}},[t._v(" 个性化")])]),i("a-menu-item",{key:"binding"},[i("a",{on:{click:function(e){return t.bindingClick()}}},[t._v("账户绑定")])]),i("a-menu-item",{key:"notification"},[i("a",{on:{click:function(e){return t.notificationClick()}}},[t._v("新消息通知")])])],1)],1),i("div",{staticClass:"account-settings-info-right"},[i("div",{staticClass:"account-settings-info-title"},[i("span",[t._v(t._s(t.title))])]),t.security?i("security",{ref:"security"}):t._e(),t.baseSetting?i("base-setting",{ref:"baseSetting"}):t._e(),t.custom?i("custom",{ref:"custom"}):t._e(),t.notification?i("notification",{ref:"notification"}):t._e(),t.binding?i("binding",{ref:"binding"}):t._e()],1)])])],1)},n=[],s=i("b445"),o=i("501f"),c=i("ac0d"),r=i("a9a9"),l=i("33e6"),u=i("55c3"),d=i("0c3f"),f=i("91be"),h={components:{RouteView:o["default"],PageLayout:s["default"],security:r["default"],baseSetting:l["default"],custom:u["default"],notification:d["default"],binding:f["default"]},mixins:[c["b"]],data:function(){return{mode:"inline",mainInfoHeight:"100%",openKeys:[],defaultSelectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:"",title:"基本设置",security:!1,baseSetting:!0,custom:!1,notification:!1,binding:!1}},created:function(){this.updateMenu()},mounted:function(){this.mainInfoHeight=window.innerHeight-285+"px"},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.defaultSelectedKeys=[t.pop().path]},settingsClick:function(){this.security=!1,this.custom=!1,this.notification=!1,this.binding=!1,this.baseSetting=!0,this.title="基本设置"},securityClick:function(){this.baseSetting=!1,this.custom=!1,this.notification=!1,this.binding=!1,this.security=!0,this.title="安全设置"},notificationClick:function(){this.security=!1,this.custom=!1,this.baseSetting=!1,this.binding=!1,this.notification=!0,this.title="新消息通知"},bindingClick:function(){this.security=!1,this.baseSetting=!1,this.notification=!1,this.custom=!1,this.binding=!0,this.title="账号绑定"},customClick:function(){this.security=!1,this.baseSetting=!1,this.notification=!1,this.binding=!1,this.custom=!0,this.title="个性化"}}},m=h,p=(i("9108"),i("2877")),g=Object(p["a"])(m,a,n,!1,null,"de0025d0",null);e["default"]=g.exports}}]);