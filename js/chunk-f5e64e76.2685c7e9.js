(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5e64e76","chunk-fb1100ac"],{"03d1":function(t,a,e){"use strict";var i=e("c200"),r=e.n(i);r.a},"05ed":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{attrs:{loading:t.loading,"body-style":{padding:"10px 12px 8px"},bordered:!1}},[e("div",{staticClass:"chart-card-header"},[e("div",{staticClass:"meta"},[e("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),e("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),e("div",{staticClass:"total"},[e("span",[t._v(t._s(t.total))])])]),e("div",{staticClass:"chart-card-content"},[e("div",{staticClass:"content-fix"},[t._t("default")],2)])])},r=[],n={name:"ChartCard",props:{title:{type:String,default:""},total:{type:[String,Number],default:""},loading:{type:Boolean,default:!1}}},s=n,l=(e("f3fc"),e("2877")),o=Object(l["a"])(s,i,r,!1,null,"0e9efa89",null);a["default"]=o.exports},"0923":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank"},[e("h4",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(a,i){return e("li",{key:i},[e("span",{class:i<3?"active":null},[t._v(t._s(i+1))]),e("span",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.total))])])})),0)])},r=[],n={name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}},s=n,l=(e("9a69"),e("2877")),o=Object(l["a"])(s,i,r,!1,null,"8ec947b4",null);a["default"]=o.exports},"1d43":function(t,a,e){"use strict";e.r(a);for(var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"antv-chart-mini"},[e("div",{staticClass:"chart-wrapper",style:{height:46}},[e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,padding:[36,0,18,0]}},[e("v-tooltip"),e("v-smooth-area",{attrs:{position:"x*y"}})],1)],1)])},r=[],n=e("5a0c"),s=e.n(n),l=[],o=(new Date).getTime(),c=0;c<10;c++)l.push({x:s()(new Date(o+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var d={name:"MiniArea",props:{dataSource:{type:Array,default:function(){return[]}},x:{type:String,default:"x"},y:{type:String,default:"y"}},data:function(){return{data:[],height:100}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){0===this.dataSource.length?this.data=l:this.data=this.dataSource}},u=d,f=(e("9203"),e("2877")),p=Object(f["a"])(u,i,r,!1,null,"6145ce76",null);a["default"]=p.exports},"34c4":function(t,a,e){"use strict";var i=e("8264"),r=e.n(i);r.a},"3ee3":function(t,a,e){"use strict";var i=e("c09e"),r=e.n(i);r.a},"4ec6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[e("v-tooltip"),e("v-axis"),e("v-legend"),e("v-line",{attrs:{position:"type*y",color:"x"}}),e("v-point",{attrs:{position:"type*y",color:"x",size:4,"v-style":t.style,shape:"circle"}})],1)],1)},r=[],n=e("7104"),s=e("c917"),l={name:"LineChartMultid",mixins:[s["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jan",jeecg:7,jeebt:3.9},{type:"Feb",jeecg:6.9,jeebt:4.2},{type:"Mar",jeecg:9.5,jeebt:5.7},{type:"Apr",jeecg:14.5,jeebt:8.5},{type:"May",jeecg:18.4,jeebt:11.9},{type:"Jun",jeecg:21.5,jeebt:15.2},{type:"Jul",jeecg:25.2,jeebt:17},{type:"Aug",jeecg:26.5,jeebt:16.6},{type:"Sep",jeecg:23.3,jeebt:14.2},{type:"Oct",jeecg:18.3,jeebt:10.3},{type:"Nov",jeecg:13.9,jeebt:6.6},{type:"Dec",jeecg:9.6,jeebt:4.8}]}},fields:{type:Array,default:function(){return["jeecg","jeebt"]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{scale:[{type:"cat",dataKey:"x",min:0,max:1}],style:{stroke:"#fff",lineWidth:1}}},computed:{data:function(){var t=this,a=(new n["DataSet"].View).source(this.dataSource);a.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var e=a.rows;return e.forEach((function(a){var e=!0,i=!1,r=void 0;try{for(var n,s=t.aliases[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var l=n.value;if(l.field===a.x){a.x=l.alias;break}}}catch(o){i=!0,r=o}finally{try{e||null==s.return||s.return()}finally{if(i)throw r}}})),e}}},o=l,c=e("2877"),d=Object(c["a"])(o,i,r,!1,null,"cb14ba92",null);a["default"]=d.exports},"4fa4":function(t,a,e){},"6b55":function(t,a,e){},"81d1":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head-info",class:t.center&&"center"},[e("span",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.content))]),t.bordered?e("em"):t._e()])},r=[],n={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},s=n,l=(e("3ee3"),e("2877")),o=Object(l["a"])(s,i,r,!1,null,"61b1bcfd",null);a["default"]=o.exports},8264:function(t,a,e){},9203:function(t,a,e){"use strict";var i=e("d054"),r=e.n(i);r.a},"942d":function(t,a,e){"use strict";e.r(a);for(var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{width:null==t.width?"auto":t.width+"px"}},[e("v-chart",{attrs:{forceFit:null==t.width,height:t.height,data:t.data,padding:"0"}},[e("v-tooltip"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},r=[],n=e("5a0c"),s=e.n(n),l=[],o=(new Date).getTime(),c=0;c<10;c++)l.push({x:s()(new Date(o+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var d=["x*y",function(t,a){return{name:t,value:a}}],u=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],f={name:"MiniBar",props:{dataSource:{type:Array,default:function(){return[]}},width:{type:Number,default:null},height:{type:Number,default:200}},created:function(){0===this.dataSource.length?this.data=l:this.data=this.dataSource},data:function(){return{tooltip:d,data:[],scale:u}}},p=f,h=(e("34c4"),e("2877")),y=Object(h["a"])(p,i,r,!1,null,"dda27cb2",null);a["default"]=y.exports},"9a69":function(t,a,e){"use strict";var i=e("6b55"),r=e.n(i);r.a},bf13:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-mini-progress"},[e("div",{staticClass:"target",style:{left:t.target+"%"}},[e("span",{style:{backgroundColor:t.color}}),e("span",{style:{backgroundColor:t.color}})]),e("div",{staticClass:"progress-wrapper"},[e("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},r=[],n={name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}},s=n,l=(e("fca0"),e("2877")),o=Object(l["a"])(s,i,r,!1,null,"51cc711b",null);a["default"]=o.exports},c09e:function(t,a,e){},c200:function(t,a,e){},c644:function(t,a,e){},c917:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var i={methods:{handleClick:function(t,a){this.handleEvent("click",t,a)},handleEvent:function(t,a,e){this.$emit(t,a,e)}}}},d054:function(t,a,e){},d316:function(t,a,e){"use strict";e.r(a);for(var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:8}},[e("chart-card",{attrs:{loading:t.loading,title:"每日总单数",total:"￥126,560"}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n            12%\n          ")]),e("trend",{attrs:{flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            11%\n          ")])],1),e("template",{slot:"footer"},[t._v("日均销售额"),e("span",[t._v("￥ 234.56")])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:8}},[e("chart-card",{attrs:{loading:t.loading,title:"每日成交总金额（CNY）",total:t._f("NumberFormat")(8846)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-area")],1),e("template",{slot:"footer"},[t._v("日订单量"),e("span",[t._v(" "+t._s(t._f("NumberFormat")("1234")))])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:8}},[e("chart-card",{attrs:{loading:t.loading,title:"每日成交率",total:t._f("NumberFormat")(6560)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-bar",{attrs:{height:40}})],1),e("template",{slot:"footer"},[t._v("转化率 "),e("span",[t._v("60%")])])],2)],1)],1),e("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("div",{staticClass:"extra-item"},[e("a",[t._v("今日")]),e("a",[t._v("本周")]),e("a",[t._v("本月")])]),e("a-range-picker",{style:{width:"256px"}})],1),e("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"销售额"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额排行",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1),e("a-tab-pane",{key:"2",attrs:{tab:"销售趋势"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额趋势",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1)],1)],1)]),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"最近一周访问量统计"}},[e("a-row",[e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日IP",content:t.loginfo.todayIp}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"environment"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日访问",content:t.loginfo.todayVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"team"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"总访问量",content:t.loginfo.totalVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"rise"},slot:"indicator"})],1)],1)],1),e("line-chart-multid",{attrs:{fields:t.visitFields,dataSource:t.visitInfo}})],1)],1)],1)],1)},r=[],n=e("05ed"),s=e("da05"),l=e("3896"),o=e("1d43"),c=e("942d"),d=e("bf13"),u=e("0923"),f=e("edd9"),p=e("4ec6"),h=e("81d1"),y=e("611e"),v=e("4ec3"),g=[],m=0;m<7;m++)g.push({name:"白鹭岛 "+(m+1)+" 号店",total:1234.56-100*m});for(var b=[],x=0;x<12;x+=1)b.push({x:"".concat(x+1,"月"),y:Math.floor(1e3*Math.random())+200});var _={name:"IndexChart",components:{ATooltip:l["a"],ACol:s["b"],ChartCard:n["default"],MiniArea:o["default"],MiniBar:c["default"],MiniProgress:d["default"],RankList:u["default"],Bar:f["default"],Trend:y["a"],LineChartMultid:p["default"],HeadInfo:h["default"]},data:function(){var t=this.$createElement;return{loading:!0,center:null,rankList:g,barData:b,loginfo:{},visitFields:["ip","visit"],visitInfo:[],indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px"})}},created:function(){var t=this;setTimeout((function(){t.loading=!t.loading}),1e3),this.initLogInfo()},methods:{initLogInfo:function(){var t=this;Object(v["u"])(null).then((function(a){a.success&&(Object.keys(a.result).forEach((function(t){a.result[t]=a.result[t]+""})),t.loginfo=a.result)})),Object(v["D"])().then((function(a){a.success&&(t.visitInfo=a.result)}))}}},C=_,j=(e("03d1"),e("2877")),w=Object(j["a"])(C,i,r,!1,null,"b3cfd8ee",null);a["default"]=w.exports},edd9:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[e("v-tooltip"),e("v-axis"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},r=[],n=e("ca00"),s={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(n["o"])()}},l=s,o=e("2877"),c=Object(o["a"])(l,i,r,!1,null,null,null);a["default"]=c.exports},f3fc:function(t,a,e){"use strict";var i=e("c644"),r=e.n(i);r.a},fca0:function(t,a,e){"use strict";var i=e("4fa4"),r=e.n(i);r.a}}]);