(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{688:function(t,n,e){"use strict";e.r(n);var o=e(3),r=(e(22),e(24),{props:{files:{type:Array,default:null}},data:function(){return{select:[],dialog:!1,loading:!1,file:void 0,currentFile:void 0,location:null}},methods:{selectFile:function(t){this.progress=0,this.currentFile=t,this.loading=!1},uploadimagefile:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,(e=new FormData).append("file",t.currentFile),n.next=5,t.$api.$patch("/consultations/".concat(t.$route.params.id,"/").concat(t.location,"/"),e).then((function(n){null!==n&&(t.loading=!1,t.dialog=!1,t.currentFile=void 0),t.$emit("updatereport")})).catch((function(t){console.log(t)}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}}),l=e(35),c=e(47),d=e.n(c),v=e(141),f=e(229),m=e(85),_=e(577),y=e(570),w=e(568),h=e(668),x=e(178),V=e(765),k=e(766),C=e(580),F=e(572),R=e(69),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mx-2"},[e("v-spacer"),t._v(" "),e("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"primary",small:"",outlined:""}},"v-btn",r,!1),o),[e("v-icon",{attrs:{left:""}},[t._v("\n            mdi-file-document\n          ")]),t._v("\n          Upload new report file")],1)]}}]),model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[t._v(" "),e("v-card",[e("v-card-title",{staticClass:"pa-0 mb-4"},[e("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[t._v("Upload new patient medical examination report")])],1),t._v(" "),e("v-card-text",[e("p",[t._v(t._s(t.location||"null"))]),t._v(" "),e("v-radio-group",{attrs:{row:"",mandatory:""},model:{value:t.location,callback:function(n){t.location=n},expression:"location"}},[e("v-radio",{attrs:{label:"Laboratory",value:"laboratory"}}),t._v(" "),e("v-radio",{attrs:{label:"Radiology",value:"radiology"}})],1),t._v(" "),e("v-file-input",{attrs:{counter:"","show-size":"","small-chips":"",accept:"image/png, image/jpeg, image/bmp",label:"Medical examination report file","truncate-length":"27"},on:{change:t.selectFile}})],1),t._v(" "),e("v-card-actions",{staticClass:"justify-end"},[e("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(n){t.dialog=!1}}},[t._v("Deny")]),t._v(" "),e("v-btn",{staticClass:"primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(n){return t.uploadimagefile()}},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",[t._v("Uploading...")])]},proxy:!0}])},[t._v("Upload\n            "),e("v-icon",{attrs:{right:"",dark:""}},[t._v("\n              mdi-cloud-upload\n            ")])],1)],1)],1)],1)],1),t._v(" "),e("v-row",t._l(t.files,(function(n,i){return e("v-col",{key:i,attrs:{md:"2",sm:"6"}},[e("v-card",{attrs:{outlined:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e("v-card-text",[e("ul",[e("li",[t._v("File: "+t._s(n.name))]),t._v(" "),e("li",[t._v("Size: "+t._s(n.size))]),t._v(" "),e("li",[t._v("Unit: "+t._s(n.location))])])])],1),t._v(" "),e("div",{class:"ma-3 fi fi-size-xl fi-round-md fi-"+n.type.split("/")[1]},[e("div",{staticClass:"fi-content"},[t._v(t._s(n.type.split("/")[1]))])])])])],1)})),1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:_.a,VContainer:y.a,VDialog:w.a,VFileInput:h.a,VIcon:x.a,VRadio:V.a,VRadioGroup:k.a,VRow:C.a,VSpacer:F.a,VToolbar:R.a})}}]);