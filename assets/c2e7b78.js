(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{758:function(t,e,r){"use strict";r.r(e);r(59),r(16);var o=r(4),n={data:function(){return{contact:{},messages:[{from:"You",message:"Sure, I'll see you later.",time:"10:42am",color:"deep-purple lighten-1"},{from:"John Doe",message:"Yeah, sure. Does 1:00pm work?",time:"10:37am",color:"green"},{from:"You",message:"Did you still want to grab lunch today?",time:"9:47am",color:"deep-purple lighten-1"}]}},methods:{viewusedata:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("contacts/".concat(t.$route.params.id,"/")).then((function(e){t.contact=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},isEmpty:function(t){return 0===Object.keys(t).length}},created:function(){this.viewusedata()},computed:{isDataLoaded:function(){return this.isEmpty(this.contact)},itemThumbnail:function(){return this.contact.patient.patientPhoto},username:function(){return this.contact.patient.first_name},patient:function(){return this.$store.getters.patient(parseInt(this.$route.params.id))}}},c=r(45),l=r(57),v=r.n(l),m=r(541),d=r(534),_=r(226),h=r(136),f=r(515),w=r(514),y=r(560),C=r(538),V=r(529),x=r(583),k=r(173),$=r(177),T=r(596),I=r(539),R=r(532),A=r(618),D=r(619),P=r(104),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.patient?r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.$vuetify.breakpoint.mobile,expression:"!this.$vuetify.breakpoint.mobile"}],attrs:{to:"/patients"}},[t._v("Patients")]),t._v(" "),r("router-link",{attrs:{to:"/patients/"+this.$route.params.id}},[t._v(t._s(t.patient.name))]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/patients"}},[t._v("Add contact")])],1):t._e(),t._v(" "),r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-card",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md12:"","order-md2":"","order-sm2":""}},[t.isDataLoaded?t._e():r("v-row",{attrs:{justify:"space-around","no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"2"}}),t._v(" "),r("v-col",{staticClass:"pr-2",attrs:{cols:"12",md:"4"}},[r("v-card",{attrs:{width:"400"}},[r("v-img",{attrs:{height:"200px",src:"https://static.timesofisrael.com/www/uploads/2017/02/Hitlers-Phone-Auction_Horo-640x400.jpg"}},[r("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[r("v-app-bar-nav-icon",{attrs:{color:"white"}}),t._v(" "),r("v-toolbar-title",{staticClass:"title white--text pl-0"},[t._v("\n                      Contacts\n                    ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"white",icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),t._v(" "),r("v-card-title",{staticClass:"white--text mt-8"},[r("v-avatar",{attrs:{size:"56"}},[r("img",{attrs:{alt:"user",src:t.itemThumbnail}})]),t._v(" "),r("p",{staticClass:"ml-3",domProps:{innerHTML:t._s(t.username)}})],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-card",{attrs:{width:"400",outlined:""}},[r("v-card-text",[r("v-timeline",{attrs:{"align-top":"",dense:""}},[r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("City")])]),t._v(" "),r("div",[t._v(t._s(t.contact.city))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("State")])]),t._v(" "),r("div",[t._v(t._s(t.contact.state))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("Location")])]),t._v(" "),r("div",[t._v(t._s(t.contact.physical_address))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("Email Adress")])]),t._v(" "),r("div",[t._v(t._s(t.contact.email_address))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("Home Phone")])]),t._v(" "),r("div",[t._v(t._s(t.contact.home_phone))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("Mobile Phone")])]),t._v(" "),r("div",[t._v(t._s(t.contact.work_phone))])])]),t._v(" "),r("v-timeline-item",{attrs:{color:"primary",small:""}},[r("div",[r("div",{staticClass:"font-weight-normal"},[r("strong",[t._v("Is Reachable")]),t._v(" "),r("v-checkbox",{attrs:{required:"",readonly:""},model:{value:t.contact.isReachable,callback:function(e){t.$set(t.contact,"isReachable",e)},expression:"contact.isReachable"}})],1)])])],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAppBar:m.a,VAppBarNavIcon:d.a,VAvatar:_.a,VBtn:h.a,VCard:f.a,VCardText:w.c,VCardTitle:w.d,VCheckbox:y.a,VCol:C.a,VContainer:V.a,VFlex:x.a,VIcon:k.a,VImg:$.a,VLayout:T.a,VRow:I.a,VSpacer:R.a,VTimeline:A.a,VTimelineItem:D.a,VToolbarTitle:P.a})}}]);