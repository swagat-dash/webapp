(window.webpackJsonp=window.webpackJsonp||[]).push([[55,13,14,15,16,17,42],{522:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(523),o=r(2),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},523:function(t,e,r){"use strict";r(169),r(170),r(13);var n=r(0),o=(r(524),r(116)),l=r(218),c=r(58),d=r(6);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},524:function(t,e,r){var content=r(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("e23b7040",content,!0,{sourceMap:!1})},525:function(t,e,r){var n=r(10)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},528:function(t,e,r){"use strict";r(50),r(27),r(114),r(98),r(293),r(13),r(70),r(18),r(28),r(87),r(76),r(71),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(69),r(97);var n=r(0),o=(r(292),r(3)),l=r(39),c=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in r)c+=String(r[d]);var f=x.get(c);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(c,f)}(),t(r.tag,Object(l.a)(data,{class:f}),o)}})},529:function(t,e,r){"use strict";r(20),r(50),r(27),r(114),r(293),r(70),r(18),r(28),r(51),r(87),r(76),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(69),r(97);var n=r(0),o=(r(292),r(3)),l=r(39),c=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(r,n){return r[t+Object(c.G)(n)]=e(),r}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:w}})),_=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:_}})),k={align:Object.keys(O),justify:Object.keys(x),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:w}},x),{},{alignContent:{type:String,default:null,validator:_}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var d in r)c+=String(r[d]);var f=C.get(c);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var n=r[t],o=P(e,t,n);o&&f.push(o)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(c,f)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},570:function(t,e,r){var content=r(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("058fbc3a",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r(570)},592:function(t,e,r){var n=r(10)(!1);n.push([t.i,".outlined[data-v-6661f012]{color:#00f!important;border-color:#00f!important}",""]),t.exports=n},623:function(t,e,r){"use strict";r.r(e);r(13);var n={props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"pie",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{blur:0,opacity:0}},fill:{colors:["#44FF07","#00A756"],type:"solid"},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{fillColors:["#00897B","#ED1C23"]}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{height:t.height,width:"90%",options:t.options,series:t.data.series}})}),[],!1,null,null,null);e.default=component.exports},624:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,type:"bar",toolbar:{show:!0,offsetY:25}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},title:{text:"Services issued on Date",align:"center",margin:10,offsetX:0,offsetY:2,floating:!1,style:{fontSize:"16px",fontWeight:"18"}},xaxis:{categories:this.data.categories,title:{text:"Date"},labels:{show:!0,otate:180},crosshairs:{show:!1}},yaxis:{title:{text:"No. of issued services"},subtitle:{text:"No of issued services"},min:0},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5,itemMargin:{horizontal:5,vertical:15}}}}},created:function(){console.log(this.$vuetify.theme.dark)},computed:{dark:function(){return this.$vuetify.theme.dark}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{fluid:""}},[r("apexchart",{attrs:{height:"350",width:"98%",options:t.options,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},625:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:null}},data:function(){return{}}},o=(r(591),r(49)),l=r(63),c=r.n(l),d=r(523),f=r(528),h=r(703),v=r(161),m=r(132),y=r(204),O=r(25),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"pa-1",attrs:{xs:"6",sm:"6",md:"2",xl:"1"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"default",attrs:{elevation:n?3:0}},[r("v-list-item",[r("v-list-item-avatar",{staticClass:"primary",attrs:{height:"45",width:"45",rounded:""}},[r("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6 font-weight-black my-1",domProps:{innerHTML:t._s(t.item.value)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"font-weight-normal",domProps:{innerHTML:t._s(t.item.title)}})],1)],1)],1)]}}])})],1)}),[],!1,null,"6661f012",null);e.default=component.exports;c()(component,{VCard:d.a,VCol:f.a,VHover:h.a,VIcon:v.a,VListItem:m.a,VListItemAvatar:y.a,VListItemContent:O.a,VListItemSubtitle:O.b,VListItemTitle:O.c})},626:function(t,e,r){"use strict";r.r(e);r(13);var n={props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"donut",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{}},fill:{type:"solid",colors:["#44FF07","#58508D","#BC5090","#FF6361","#FFA600"]},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{height:t.height,width:"100%",options:t.options,series:t.data.series}})}),[],!1,null,null,null);e.default=component.exports},627:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,default:null}},data:function(){return{chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",width:1},xaxis:{type:"date",categories:this.data.categories},yaxis:{title:{text:"Total"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return""+t}},x:{format:"dd/MM/yy"}}}}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"chart"}},[r("apexchart",{attrs:{type:"area",height:"280",options:t.chartOptions,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},628:function(t,e,r){"use strict";r.r(e);var n=r(60),o={props:{data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,type:"line",id:"areachart-2"},stroke:{width:7,curve:"smooth"},title:{text:"Number of consultation's conducted per day",align:"left",margin:10,offsetX:0,offsetY:2,floating:!1,style:{fontSize:"18px",fontWeight:"bold",color:"#666"}},xaxis:{categories:this.data.categories,tickAmount:10,title:{text:"Day in a month",fontWeight:"bold"},axisBorder:{show:!0,color:"#78909C",height:1,width:"100%",offsetX:0,offsetY:0}},yaxis:{title:{text:"No. of consultation`s"},subtitle:{text:"Number of patient consultations opened each day"},min:0,max:"undefined"===this.max?0:this.max,axisBorder:{show:!0,color:"#78909C",offsetX:0,offsetY:0,forceNiceScale:!0},axisTicks:{show:!0,borderType:"solid",color:"#78909C",width:6,offsetX:0,offsetY:0}},markers:{size:4,colors:["#FFA41B"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}}}},created:function(){},computed:{dark:function(){return this.$vuetify.theme.dark},max:function(){var t=this.data.series[0].data;return Math.max.apply(Math,Object(n.a)(t))+5}}},l=r(49),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("apexchart",{attrs:{height:"395",options:t.options,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},703:function(t,e,r){"use strict";var n=r(107),o=r(26),l=r(6),c=r(7);e.a=Object(l.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},763:function(t,e,r){"use strict";r.r(e);r(50),r(311),r(18),r(28),r(87),r(65),r(69),r(97),r(36);var n=r(0),o=(r(16),r(4)),l=r(623),c=r(624),d=r(625),f=r(626),h=r(627),v=r(628),m=r(88);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w,x={components:{"pie-chart":l.default,"bar-chart":c.default,"line-chart-gradient":v.default,summarycard:d.default,donutchart:f.default,"area-chart-spline":h.default},data:function(){return{apexdata:{series:[{name:"Trends",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}]},pie_options:{series:[44,55,13,33],chartOptions:{labels:["Apple","Mango","Orange","Watermelon"]}}}},methods:{percentCalculation:function(t,e){return+(t/e*100).toFixed(2)},syncro:(w=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).sync=!e.sync,t.next=4,Promise.all([e.$store.dispatch("retrievephysicians"),e.$store.dispatch("retrieve_statistics")]).then((function(){console.log("Loading complete...")}));case 4:setTimeout((function(){e.sync=!e.sync}),2e3);case 5:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)})},mounted:function(){this.syncro();var t=window.localStorage.getItem("date");(null===t?(new Date).getTime()-2:t)-(new Date).getTime()>0||this.$store.dispatch("logout")},computed:O(O({},Object(m.b)({staffs:"staffStatistics",servicetrends:"serviceTrends",users:"userStatistics",patient:"patientStatistics",ward:"wardstatistics",services:"servicestatistics",patienttrends:"patienttrends"})),{},{statistics:function(){return this.$store.getters.statistics},patient_trends:{get:function(){return[{series:[this.patient.totalMale,this.patient.totalFemale],chartOptions:{labels:["Male ","Female"]},title:"Gender Composition"},{series:[this.services.totalOpd,this.services.totalIpd],chartOptions:{labels:["Out Patient Department(OPD)","In Patient Department (IPD) "]},title:"OPD Vs IPD in (%)"},{series:[this.services.totalActive,this.services.totalInActive],chartOptions:{labels:["Active","Inactive"]},title:"Consultations distribution"},{series:[this.services.totalAssigned,this.services.totalUnAssigned],chartOptions:{labels:["Assigned","Un-Assigned"]},title:"Consultations assignment"},{series:[this.ward.totalOccupied,this.ward.totalUnOccupied],chartOptions:{labels:["Occupied beds","Free beds"]},title:"Beds distributions"},{series:[this.users.totalUsers,this.users.totalStaffs],chartOptions:{labels:["Users","Staffs"]},title:"System users Vs Staff's"}]}},patient_items:{get:function(){return[{title:"Overall Total Patients",subtitle:"Overall Total Patients",value:this.patient.total,icon:"mdi-account-group-outline",color:"blue"},{title:"Males",subtitle:"Male Patients",value:this.patient.totalMale,icon:"mdi-gender-male",color:"indigo"},{title:"Females",subtitle:"Female patients",value:this.patient.totalFemale,icon:"mdi-gender-female",color:"deep-orange"},{title:"Others",subtitle:"Special Gender",value:this.patient.totalUnspecified,icon:"mdi-gender-male-female",color:"orange"}]}},user_items:{get:function(){return[{title:"Users",subtitle:"Users",value:this.users.totalUsers,icon:"mdi-account-star",color:"orange"},{title:"Staff's",subtitle:"Staff's",value:this.users.totalStaffs,icon:"mdi-account-supervisor",color:"orange"}]}},service_items:{get:function(){return[{title:"Total consultations",subtitle:"Total consultations",measure:"p/d",value:this.services.total,icon:"mdi-egg",color:"red"},{title:"Active consultations",subtitle:"Active consultations",measure:"p/d",value:this.services.totalActive,icon:"mdi-order-alphabetical-ascending",color:"red"},{title:"Inactive consultations",subtitle:"Inactive consultations",measure:"p/d",value:this.services.totalInActive,icon:"mdi-order-bool-ascending",color:"red"},{title:"Assigned consultations",subtitle:"Assigned consultations",measure:"p/d",value:this.services.totalAssigned,icon:"mdi-order-numeric-descending",color:"red"},{title:"Unassigned consultations",subtitle:"Unassigned consultations",value:this.services.totalUnAssigned,icon:"mdi-order-bool-ascending",color:"teal"},{title:" OPD",subtitle:"OPD  consultations",value:this.services.totalOpd,measure:"p/d",icon:"mdi-account-group-outline",color:"lime"},{title:"IPD ",subtitle:"IPD  consultations",measure:"p/d",value:this.services.totalIpd,icon:"mdi-bed",color:"green"},{title:"Physicians",subtitle:"No. of Physicians",value:this.$store.getters.physicians.length,icon:"mdi-doctor",color:"light-blue"}]}},ward_bed:{get:function(){return[{title:"Total beds",subtitle:"Total beds",value:this.ward.totalCount,icon:"mdi-bed-single",color:"brown"},{title:"Occupied beds",subtitle:"Occupied beds",value:this.ward.totalOccupied,icon:"mdi-bunk-bed",color:"grey"},{title:"Un-Occupied beds",subtitle:"Un-Occupied beds",value:this.ward.totalUnOccupied,measure:"pt/min",icon:"mdi-bed-empty",color:"cyan"}]}},bsc_size:{get:function(){return null==this.patienttrends?0:this.patienttrends.length}},bsc_chart:{get:function(){var t=this.patienttrends,e=new Array,r=new Array,n=new Array,o=new Array,l=new Array;return t.forEach((function(element){e.push(element.total),r.push(element.male),n.push(element.female),o.push(element.other),l.push(element.date)})),l.push(0),{series:[{name:"Total",data:e},{name:"Male",data:r},{name:"Female",data:n},{name:"Other",data:o}],categories:l}}},service_trends:{get:function(){var t=this.servicetrends,e=new Array,r=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.total);var t=element.date;r.push(new Date(t).toISOString().split("T")[0])})),{series:[{name:"Service  issued",data:e}],categories:r}}}}),created:function(){}},_=r(49),j=r(63),k=r.n(j),S=r(523),P=r(522),C=r(528),A=r(512),D=r(703),E=r(200),M=r(529),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-2 pa-0 px-2",attrs:{fluid:""}},[t.statistics?r("div",[r("v-row",{staticClass:"mt-2",attrs:{justify:"start",align:"start"}},[[null==t.patient?r("v-progress-circular"):t._l(t.patient_items,(function(t,i){return r("summarycard",{key:i,attrs:{item:t}})})),t._v(" "),null==t.services?r("v-progress-circular"):t._l(t.service_items,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})})),t._v(" "),null==t.users?r("v-progress-circular"):t._l(t.user_items,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})})),t._v(" "),null==t.ward||null==t.ward?r("v-progress-circular"):t._l(t.ward_bed,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})}))]],2),t._v(" "),t.patienttrends?r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},t._l(t.patient_trends,(function(e,i){return r("v-col",{key:i,staticClass:"ma-0 pa-0 mt-1",attrs:{cols:"12",sm:"6",md:"2"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-card",{staticClass:"default mx-1",attrs:{elevation:n?3:1,dense:""}},[r("v-card-text",{staticClass:"ma-0"},[r("pie-chart",{attrs:{data:e,height:200}})],1)],1)]}}],null,!0)})],1)})),1):t._e(),t._v(" "),r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},[r("v-col",{staticClass:"ma-0 pa-0 mt-2 ",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 mx-auto default ",attrs:{height:"400",dense:""}},[r("line-chart-gradient",{attrs:{data:t.service_trends}})],1)],1),t._v(" "),t.bsc_size>0?r("v-col",{staticClass:"ma-0 pa-0 mt-3",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 mx-auto default ",attrs:{dense:""}},[r("area-chart-spline",{staticClass:"ma-0 ",attrs:{data:t.bsc_chart}})],1)],1):t._e()],1)],1):r("div",[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}})],1)])}),[],!1,null,null,null);e.default=component.exports;k()(component,{VCard:S.a,VCardText:P.c,VCol:C.a,VContainer:A.a,VHover:D.a,VProgressCircular:E.a,VRow:M.a})}}]);