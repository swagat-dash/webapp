(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{580:function(t,e,o){"use strict";o.r(e);o(16);var l=o(4),r={props:{title:{type:String,default:null},data:{type:Object,default:null}},data:function(){return{name:"",email:"",city:"",formData:{isReachable:!1,home_phone:"",work_phone:"",physical_address:"",zipcode:"",state:""},select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},computed:{},methods:{submit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$api.$patch("contacts/".concat(t.$route.params.id,"/"),t.formData).then((function(e){null!==e&&t.$router.push("/patients/"+t.$route.params.id)})).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()},clear:function(){}}},c=o(49),n=o(63),d=o.n(n),m=o(131),f=o(523),v=o(522),h=o(557),_=o(528),D=o(201),x=o(529),k=o(90),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[o("v-card-title",[t._v(" "+t._s(t.title))]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{dense:"",outlined:"",counter:10,label:"State/Country",required:""},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{dense:"",outlined:"",counter:10,label:"City",required:""},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{dense:"",outlined:"",counter:10,label:"Zip Code",required:""},model:{value:t.formData.zipcode,callback:function(e){t.$set(t.formData,"zipcode",e)},expression:"formData.zipcode"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{dense:"",outlined:"",label:"E-mail",required:""},model:{value:t.formData.email_address,callback:function(e){t.$set(t.formData,"email_address",e)},expression:"formData.email_address"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{outlined:"",dense:"",label:"Physical Address",hint:"E.g Mbamba Bay ",required:""},model:{value:t.formData.physical_address,callback:function(e){t.$set(t.formData,"physical_address",e)},expression:"formData.physical_address"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{outlined:"",dense:"",label:"Desk phone"},model:{value:t.formData.home_phone,callback:function(e){t.$set(t.formData,"home_phone",e)},expression:"formData.home_phone"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-text-field",{attrs:{outlined:"",dense:"",label:"Mobile Phone"},model:{value:t.formData.work_phone,callback:function(e){t.$set(t.formData,"work_phone",e)},expression:"formData.work_phone"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-checkbox",{attrs:{label:"Is reachable?",required:""},model:{value:t.formData.isReachable,callback:function(e){t.$set(t.formData,"isReachable",e)},expression:"formData.isReachable"}})],1),t._v(" "),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[o("v-btn",{staticClass:"mr-4",on:{click:t.submit}},[t._v("\n          submit\n        ")]),t._v(" "),o("v-btn",{on:{click:t.clear}},[t._v("\n          clear\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardText:v.c,VCardTitle:v.d,VCheckbox:h.a,VCol:_.a,VDivider:D.a,VRow:x.a,VTextField:k.a})}}]);