(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{672:function(e,t,n){"use strict";n.r(t);n(12),n(9),n(10),n(130),n(164),n(16),n(17),n(13),n(11);var o=n(1),l=n(66);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{dialog:!1,dialogDelete:!1,editedIndex:-1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"SID",value:"sid"},{text:"Token",value:"token"},{text:"From Number",value:"phoneNumber"},{text:"Is Active?",value:"isActive"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1},defaultItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1}}},beforeMount:function(){this.$store.dispatch("fetch_sms_configurations")},methods:{updatedata:function(){this.$store.dispatch("fetch_sms_configurations")},editItem:function(e){this.editedIndex=this.smsconfigurations.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.smsconfigurations.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.smsconfigurations.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?(this.$store.dispatch("update_sms_configuration",this.editedItem).then((function(){e.updatedata()})),this.close()):(delete this.editedItem.id,this.$store.dispatch("create_sms_configuration",this.editedItem).then((function(){e.updatedata()})),this.close())}},computed:c(c({},Object(l.b)({smsconfigurations:"smsconfigurations"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newsmsconfigurations":"label.titles.updatesmsconfigurations"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}}},m=n(54),v=n(65),f=n.n(v),h=n(225),_=n(471),x=n(470),I=n(482),k=n(460),O=n(653),y=n(648),D=n(168),w=n(483),j=n(463),$=n(509),V=n(53),C=n(97),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.smsconfigurations,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v(e._s(e.$t("label.titles.smsconfigurations")))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",fab:"","x-small":"",dark:""}},"v-btn",l,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary"},[n("span",[e._v(e._s(e.$t(e.formTitle)))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"SID",required:""},model:{value:e.editedItem.sid,callback:function(t){e.$set(e.editedItem,"sid",t)},expression:"editedItem.sid"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Token",required:""},model:{value:e.editedItem.token,callback:function(t){e.$set(e.editedItem,"token",t)},expression:"editedItem.token"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Phone number",required:""},model:{value:e.editedItem.phoneNumber,callback:function(t){e.$set(e.editedItem,"phoneNumber",t)},expression:"editedItem.phoneNumber"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",small:""},on:{click:e.close}},[e._v("\n              "+e._s(e.$t("label.button.btncancel"))+"\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"warning",small:""},on:{click:e.save}},[e._v("\n              "+e._s(e.$t("label.button.btnsave"))+"\n            ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"subhead-1 pa-4"},[e._v("\n            "+e._s(e.$t("label.dialogs.deleteconfirmdialog")))]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary","x-small":""},on:{click:e.closeDelete}},[e._v(e._s(e.$t("label.button.btnno")))]),e._v(" "),n("v-btn",{attrs:{color:"warning","x-small":""},on:{click:e.deleteItemConfirm}},[e._v(e._s(e.$t("label.button.btnyes")))]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[n("p",[e._v("No Data available")])]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:I.a,VContainer:k.a,VDataTable:O.a,VDialog:y.a,VIcon:D.a,VRow:w.a,VSpacer:j.a,VTextField:$.a,VToolbar:V.a,VToolbarTitle:C.a})}}]);