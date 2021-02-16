(window.webpackJsonp=window.webpackJsonp||[]).push([[63,32],{535:function(e,t,r){"use strict";r.r(t);var n={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(e){this.$router.push("/consultations/"+e.id)},updatePagination:function(e){console.log(e)}}},c=r(49),l=r(63),o=r.n(l),v=r(523),d=r(723),f=r(161),m=r(200),h=r(515),_=r(90),x=r(48),y=r(520),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto default "},[null==e.services.length?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("div",{attrs:{md12:""}},[r("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.services,search:e.search,width:"100%"},on:{"click:row":e.handleClick,"update:page":e.updatePagination},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("h2",[r("strong",[e._v(e._s(e.title))])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(t){return[t.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[r("v-icon",e._g(e._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),n),[e._v("mdi-check")])]}}],null,!0)},[e._v(" "),r("span",[e._v("Active")])]):r("div")]}},{key:"item.patientName",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.patientName)+" ( "+e._s(r.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(t){var n=t.item;return[null==n.staffName?r("p",[e._v("Unassigned")]):r("p",[e._v(e._s(n.staffName)+" ( "+e._s(n.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VCard:v.a,VDataTable:d.a,VIcon:f.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:x.a,VTooltip:y.a})},735:function(e,t,r){"use strict";r.r(t);var n={components:{"servicescard-component":r(535).default},data:function(){return{}},created:function(){this.$store.dispatch("retrieve_active_ipd_services")},computed:{services:function(){return this.$store.getters.ipds}}},c=r(49),l=r(63),o=r.n(l),v=r(200),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return null==e.services?r("v-progress-circular"):r("servicescard-component",{attrs:{services:e.services,title:"Active IPD consultations"}})}),[],!1,null,null,null);t.default=component.exports;o()(component,{VProgressCircular:v.a})}}]);