(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{789:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(9),r(13),r(11),r(14);var o=r(0),c=(r(47),r(57));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{dialog:!1,search:"",sortDesc:!1,editedIndex:-1,valid:!0,dialogDelete:!1,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Is Active",value:"isActive",sortable:!1},{text:"Price",value:"price"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",descriptions:"",isActive:0,price:0},defaultItem:{id:"",name:"",descriptions:"",isActive:0,price:0}}},methods:{handleClick:function(t){this.$router.push("roles/"+t.id)},editItem:function(t){this.editedIndex=this.laboratoryservices.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.laboratoryservices.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.request_data()}))},request_data:function(){var t=this;setTimeout((function(){t.$store.dispatch("fetch_laboratory_services")}),5e3)},save:function(){this.editedIndex>-1?(Object.assign(this.laboratoryservices[this.editedIndex],this.editedItem),this.$store.dispatch("update_laboratory_service",this.editedItem)):(this.laboratoryservices.push(this.editedItem),delete this.editedItem.id,this.$store.dispatch("create_laboratory_service",this.editedItem)),this.close()}},created:function(){this.$store.dispatch("fetch_laboratory_services")},computed:l(l({},Object(c.b)({laboratoryservices:"laboratoryservices"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newlaboratoryservice":"label.titles.editlaboratoryservice"}})},v=r(8),m=r(15),f=r.n(m),h=r(168),_=r(262),y=r(7),x=r(707),I=r(704),k=r(697),O=r(723),V=r(695),j=r(265),w=r(715),C=r(202),$=r(263),A=r(708),D=r(699),T=r(62),P=r(716),S=r(84),E=r(38),F=r(703),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/laboratory"}},[t._v("Laboratory")])],1),t._v(" "),r("v-card",{staticClass:"mx-auto pa-2"},[null===t.laboratoryservices?r("v-progress-linear",{attrs:{value:"20","buffer-value":"0",stream:"",color:"primary"}}):r("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.laboratoryservices,search:t.search,"sort-by":"isActive","sort-desc":t.sortDesc,"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[t._v(t._s(t.$t("label.titles.laboratoryservices")))]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[t.isMdAndUp?r("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",medium:"",dark:""}},"v-btn",c,!1),o),[r("v-icon",{attrs:{small:""}},[t._v("mdi-plus")]),t._v("\n                "+t._s(t.$t("label.button.btnnewlaboratoryservice")))],1):r("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",c,!1),o),[r("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Service name",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Price",required:"",type:"number",min:"0"},model:{value:t.editedItem.price,callback:function(e){t.$set(t.editedItem,"price",e)},expression:"editedItem.price"}})],1),t._v(" "),r("v-col",{staticClass:"pa-2",attrs:{c:"",sm:"6",md:"6"}},[r("v-checkbox",{attrs:{label:"Active?",required:""},model:{value:t.editedItem.isActive,callback:function(e){t.$set(t.editedItem,"isActive",e)},expression:"editedItem.isActive"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-textarea",{attrs:{label:"Descriptions"},model:{value:t.editedItem.descriptions,callback:function(e){t.$set(t.editedItem,"descriptions",e)},expression:"editedItem.descriptions"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                  "+t._s(t.$t("label.button.btncancel"))+"\n                ")]),t._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                  "+t._s(t.$t("label.button.btnsave"))+"\n                ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),o),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.actions",fn:function(e){var o=e.item;return[r("td",{on:{click:function(t){t.stopPropagation()}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v("\n            mdi-pencil\n          ")])],1)]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCheckbox:x.a,VCol:I.a,VContainer:k.a,VDataTable:O.a,VDialog:V.a,VDivider:j.a,VForm:w.a,VIcon:C.a,VProgressLinear:$.a,VRow:A.a,VSpacer:D.a,VTextField:T.a,VTextarea:P.a,VToolbar:S.a,VToolbarTitle:E.a,VTooltip:F.a})}}]);