(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{557:function(e,t,n){"use strict";n(11),n(8),n(9),n(105),n(17),n(18),n(13),n(10);var o=n(1),r=n(76);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{medicines:{type:Array,default:null},showaction:{type:Boolean,default:!0}},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.datalist.indexOf(e);confirm("Are you sure you want to delete this item?")},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(Object.assign(this.medicines[this.editedIndex],this.editedItem),this.editedItem.group=this.editedItem.group.id,this.editedItem.category=this.editedItem.category.id,this.$store.dispatch("update_medicine_product",this.editedItem)):(this.medicines.push(this.editedItem),this.$store.dispatch("add_new_medicine",this.editedItem)),this.close()},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:d(d({},Object(r.b)({template:"medicine_templates"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine":"Edit medicine"}})},m=n(60),v=n(73),h=n.n(v),f=n(246),y=n(503),_=n(502),I=n(509),x=n(493),O=n(656),k=n(651),w=n(208),j=n(163),C=n(215),$=n(510),P=n(485),V=n(496),D=n(94),S=n(59),T=n(103),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.medicines,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicines\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([e.showaction?{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewmedicine")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Company"},model:{value:e.editedItem.company,callback:function(t){e.$set(e.editedItem,"company",t)},expression:"editedItem.company"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Compositions"},model:{value:e.editedItem.compositions,callback:function(t){e.$set(e.editedItem,"compositions",t)},expression:"editedItem.compositions"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Units"},model:{value:e.editedItem.units,callback:function(t){e.$set(e.editedItem,"units",t)},expression:"editedItem.units"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineGroupOptions,label:"Group","item-text":"name","item-value":"id"},model:{value:e.editedItem.group,callback:function(t){e.$set(e.editedItem,"group",t)},expression:"editedItem.group"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineCategoriesOptions,label:"Medical Category","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.name)+" - "+e._s(n.id)+"\n                      ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.id)+" - "+e._s(n.name)+"\n                      ")]}}]),model:{value:e.editedItem.category,callback:function(t){e.$set(e.editedItem,"category",t)},expression:"editedItem.category"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},{key:"item.category",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},e.showaction?{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}:null,{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.a=component.exports;h()(component,{VBtn:f.a,VCard:y.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:I.a,VContainer:x.a,VDataTable:O.a,VDialog:k.a,VDivider:w.a,VIcon:j.a,VProgressLinear:C.a,VRow:$.a,VSelect:P.a,VSpacer:V.a,VTextField:D.a,VToolbar:S.a,VToolbarTitle:T.a})},664:function(e,t,n){"use strict";n.r(t);n(11),n(8),n(9),n(105),n(17),n(18),n(13),n(10);var o=n(1),r=n(76);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={components:{"tab-medicine":n(557).a},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)({medicines:"medicines"}))},l=n(60),component=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"breadcrumb"},[t("router-link",{attrs:{to:"/"}},[this._v("Dashboard")]),this._v(" "),t("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[this._v("Pharmacy")])],1),this._v(" "),t("tab-medicine",{attrs:{medicines:this.medicines,showaction:!1}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);