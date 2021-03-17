(window.webpackJsonp=window.webpackJsonp||[]).push([[5,28,29,30,31],{629:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(6),n(12),n(9),n(13);var o=n(0),r=n(87);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{medicines:{type:Array,default:null},showaction:{type:Boolean,default:!0}},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Quantity left",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Price per unit",value:"price"},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0}}},created:function(){},beforeMount:function(){},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.datalist.indexOf(e);confirm("Are you sure you want to delete this item?")},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(Object.assign(this.medicines[this.editedIndex],this.editedItem),this.editedItem.group=this.editedItem.group.id,this.editedItem.category=this.editedItem.category.id,this.editedItem.price=parseFloat(this.editedItem.price+".00"),this.$store.dispatch("update_medicine_product",this.editedItem)):(this.medicines.push(this.editedItem),this.$store.dispatch("add_new_medicine",this.editedItem)),this.close()},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:c(c({},Object(r.b)({template:"medicine_templates"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine":"Edit medicine"}})},m=n(35),v=n(47),h=n.n(v),f=n(141),_=n(229),I=n(85),x=n(577),y=n(570),k=n(581),w=n(568),O=n(232),C=n(178),T=n(230),V=n(580),j=n(176),$=n(572),D=n(103),S=n(69),P=n(86),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.medicines,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicines\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([e.showaction?{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewmedicine")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Unit price"},model:{value:e.editedItem.price,callback:function(t){e.$set(e.editedItem,"price",t)},expression:"editedItem.price"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Company"},model:{value:e.editedItem.company,callback:function(t){e.$set(e.editedItem,"company",t)},expression:"editedItem.company"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Compositions"},model:{value:e.editedItem.compositions,callback:function(t){e.$set(e.editedItem,"compositions",t)},expression:"editedItem.compositions"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Units"},model:{value:e.editedItem.units,callback:function(t){e.$set(e.editedItem,"units",t)},expression:"editedItem.units"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineGroupOptions,label:"Group","item-text":"name","item-value":"id"},model:{value:e.editedItem.group,callback:function(t){e.$set(e.editedItem,"group",t)},expression:"editedItem.group"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineCategoriesOptions,label:"Medical Category","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.name)+" - "+e._s(n.id)+"\n                      ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.id)+" - "+e._s(n.name)+"\n                      ")]}}]),model:{value:e.editedItem.category,callback:function(t){e.$set(e.editedItem,"category",t)},expression:"editedItem.category"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},{key:"item.category",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},e.showaction?{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}:null,{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardActions:I.a,VCardText:I.c,VCardTitle:I.d,VCol:x.a,VContainer:y.a,VDataTable:k.a,VDialog:w.a,VDivider:O.a,VIcon:C.a,VProgressLinear:T.a,VRow:V.a,VSelect:j.a,VSpacer:$.a,VTextField:D.a,VToolbar:S.a,VToolbarTitle:P.a})},637:function(e,t,n){"use strict";var o=n(152),r=n(111),d=n(251),c=n(1),l=n(5),m=Object(l.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:d.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(c.g)(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}});t.a=m.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var e=m.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}})},675:function(e,t,n){"use strict";n.r(t);var o={props:{groups:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,search:"",headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Descriptions",value:"descriptions",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:0,name:"",descriptions:""},defaultItem:{id:0,name:"",descriptions:""}}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.groups[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_group",this.editedItem)):(this.groups.push(this.editedItem),this.$store.dispatch("add_new_medicine_group",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.groups.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(){}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  group":"Edit medicine group"}}},r=n(35),d=n(47),c=n.n(d),l=n(141),m=n(229),v=n(85),h=n(577),f=n(570),_=n(581),I=n(568),x=n(232),y=n(178),k=n(580),w=n(572),O=n(103),C=n(69),T=n(86),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.groups,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicine groups\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewgroup")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[n("v-text-field",{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:l.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:I.a,VDivider:x.a,VIcon:y.a,VRow:k.a,VSpacer:w.a,VTextField:O.a,VToolbar:C.a,VToolbarTitle:T.a})},676:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(6),n(12),n(9),n(13);var o=n(0),r=n(87);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{categories:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,dialogDelete:!1,search:"",select:null,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Descriptions",value:"descriptions",sortable:!1},{text:"Unit of measurement",value:"measureName"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:0,name:"",measurementId:0,descriptions:""},defaultItem:{id:0,name:"",measurementId:0,descriptions:""}}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.categories[this.editedIndex],this.editedItem),delete this.editedItem.measureName,this.editedItem.measurementId=this.select,this.$store.dispatch("update_medicine_category",this.editedItem)):(this.categories.push(this.editedItem),delete this.editedItem.id,this.editedItem.measurementId=this.select,this.$store.dispatch("add_new_medicine_category",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.categories.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.editedIndex=this.categories.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},fetch_measures:function(){this.$store.dispatch("fetch_medicine_measurements")}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},computed:c(c({},Object(r.b)({measures:"medicinemeasurements"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine  category":"Edit medicine category"},datas:function(){return this.categories}})},m=n(35),v=n(47),h=n.n(v),f=n(141),_=n(229),I=n(85),x=n(577),y=n(570),k=n(581),w=n(568),O=n(232),C=n(178),T=n(230),V=n(580),j=n(176),$=n(572),D=n(103),S=n(69),P=n(86),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.categories,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicine categories\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n              "+e._s(e.$t("label.button.addnewcategory")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-select",{attrs:{items:e.measures,"item-text":"unit","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Measure unit",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_measures},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:e.save}},[e._v(e._s(e.$t("label.button.btnsave")))])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"indigo"},on:{click:function(t){return e.closeDelete()}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"warning darken-1"},on:{click:function(t){return e.deleteItemConfirm()}}},[e._v(e._s(e.$t("label.button.btndelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardActions:I.a,VCardText:I.c,VCardTitle:I.d,VCol:x.a,VContainer:y.a,VDataTable:k.a,VDialog:w.a,VDivider:O.a,VIcon:C.a,VProgressLinear:T.a,VRow:V.a,VSelect:j.a,VSpacer:$.a,VTextField:D.a,VToolbar:S.a,VToolbarTitle:P.a})},677:function(e,t,n){"use strict";n.r(t);var o={props:{measures:{type:Array,default:null}},data:function(){return{dialog:!1,dialogDelete:!1,search:"",editedIndex:-1,editedItem:{id:0,unit:"",symbol:"",quantity:""},defaultItem:{id:0,unit:"",symbol:"",quantity:""},headers:[{text:"ID",value:"id"},{text:"Unit",value:"unit"},{text:"Symbol",value:"symbol",sortable:!1},{text:"Quantity",value:"quantity",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.measures[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_measure",this.editedItem)):(this.$store.dispatch("create_medicine_measurement",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.measures.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.editedIndex=this.measures.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  measures":"Edit medicine measures ?"},datas:function(){return this.measures}}},r=n(35),d=n(47),c=n.n(d),l=n(141),m=n(229),v=n(85),h=n(577),f=n(570),_=n(581),I=n(568),x=n(232),y=n(178),k=n(580),w=n(572),O=n(103),C=n(69),T=n(86),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.measures,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n              Medicine measurement units\n            ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by ...","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n          "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n                "+e._s(e.$t("label.button.addnewmeasure")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Unit"},model:{value:e.editedItem.unit,callback:function(t){e.$set(e.editedItem,"unit",t)},expression:"editedItem.unit"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Symbol"},model:{value:e.editedItem.symbol,callback:function(t){e.$set(e.editedItem,"symbol",t)},expression:"editedItem.symbol"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Quantity"},model:{value:e.editedItem.quantity,callback:function(t){e.$set(e.editedItem,"quantity",t)},expression:"editedItem.quantity"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",outlined:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"error",medium:""},on:{click:e.save}},[e._v(e._s(e.$t(-1===e.editedIndex?"label.button.btnsave":"label.button.btnedityes")))])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"indigo"},on:{click:function(t){return e.closeDelete()}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"warning darken-1"},on:{click:function(t){return e.deleteItemConfirm()}}},[e._v(e._s(e.$t("label.button.btnyesdelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n          mdi-delete\n        ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:l.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:I.a,VDivider:x.a,VIcon:y.a,VRow:k.a,VSpacer:w.a,VTextField:O.a,VToolbar:C.a,VToolbarTitle:T.a})},752:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(6),n(12),n(9),n(13);var o=n(0),r=n(87),d=n(629),c=n(675),l=n(676),m=n(677);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{"tab-medicine":d.default,"tab-med-groups":c.default,"tab-med-categories":l.default,"tab-med-measurement":m.default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},items:[{id:3,tab:"Medicine Groups",content:"Tab 2 Content"},{id:2,tab:"Medicine Categories",content:"Tab 2 Content"},{id:1,tab:"Medicines",content:"Tab 1"},{id:4,tab:"Measurement units",content:"Tab measures "}]}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},fetchMedicineMeasureUnits:function(){this.$store.dispatch("fetch_medicine_measurements")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups();break;case 4:this.fetchMedicineMeasureUnits()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:h(h({},Object(r.b)({medicines:"medicines",categories:"medicinecategories",groups:"medicinegroups",template:"medicine_templates",medicinemeasurements:"medicinemeasurements"})),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}})},_=n(35),I=n(47),x=n.n(I),y=n(757),k=n(637),w=n(814),O=n(754),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v("Pharmacy")])],1),e._v(" "),n("v-tabs",{attrs:{"show-arrows":"","background-color":"primary",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return n("v-tab",{key:t.tab,on:{click:function(n){return n.stopPropagation(),e.handleTabNavigation(t)}}},[e._v("\n      "+e._s(t.tab)+"\n    ")])})),1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",[n("tab-med-groups",{attrs:{groups:e.groups},on:{update:function(t){return e.fetchGroups()}}})],1),e._v(" "),n("v-tab-item",[n("tab-med-categories",{attrs:{categories:e.categories},on:{update:function(t){return e.fetchCategories()}}})],1),e._v(" "),n("v-tab-item",[n("tab-medicine",{attrs:{medicines:e.medicines}})],1),e._v(" "),n("v-tab-item",[n("tab-med-measurement",{attrs:{measures:e.medicinemeasurements},on:{update:function(t){return e.fetchMedicineMeasureUnits()}}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VTab:y.a,VTabItem:k.a,VTabs:w.a,VTabsItems:O.a})}}]);