(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{494:function(e,t,r){var content=r(495);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("12a190a6",content,!0,{sourceMap:!1})},495:function(e,t,r){(t=r(14)(!1)).push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),e.exports=t},514:function(e,t,r){"use strict";r(12),r(9),r(78),r(10),r(47),r(16),r(17),r(13),r(230),r(71),r(11),r(55);var n=r(1),o=r(6),l=r(80),c=r(101);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},522:function(e,t,r){"use strict";r(12),r(9),r(10),r(16),r(17),r(13),r(19),r(26),r(11);var n=r(1),o=(r(494),r(310),r(68)),l=r(110),c=r(233);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},681:function(e,t,r){"use strict";r.r(t);r(12),r(9),r(10),r(130),r(167),r(16),r(17),r(13),r(11);var n=r(1),o=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{dialog:!1,dialogDelete:!1,editedIndex:-1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Username",align:"start",sortable:!1,value:"username"},{text:"Email",value:"email"},{text:"Is Staff ?",value:"isStaff"},{text:"Roles",value:"roles"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",username:"",isStaff:!1,email:"",password:"",role:[]},defaultItem:{id:"",username:"",isStaff:!1,email:"",password:"",role:[]},colors:["red","blue","green","yellow","purple","teal","orange","brown","deep-orange","blue-grey","cyan"],currentColor:"",valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>5||"Name must be less than 5 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},created:function(){console.log("Dispating")},beforeMount:function(){this.$store.dispatch("fetchuserroles"),this.$store.dispatch("retrieveAllusers")},methods:{getColor:function(e){return"user"===e?"yellow":"admin"===e?"red darken-3 white--text":"moderator"===e?"green":"cyan"},editItem:function(e){this.editedIndex=this.userslist.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.userslist.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.userslist.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),this.$refs.form.reset()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(console.log(this.editedItem),this.close()):(delete this.editedItem.id,this.$refs.form.validate()&&(this.$store.dispatch("create_new_user",this.editedItem),this.close()))}},computed:c(c({},Object(o.b)({userslist:"users",userroles:"userroles"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newuser":"label.titles.edituser"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}}},f=r(54),m=r(65),h=r.n(m),v=r(229),O=r(478),x=r(477),y=r(522),I=r(540),_=r(490),w=r(467),j=r(660),k=r(655),$=r(459),C=r(514),D=r(169),V=r(491),S=r(590),P=r(470),E=r(511),B=r(53),T=r(97),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.userslist,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v(e._s(e.$t("label.titles.usersmanagement")))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",fab:"","x-small":"",dark:""}},"v-btn",o,!1),n),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[e._v(e._s(e.$t(e.formTitle)))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Username",required:""},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"Email Address",type:"email",required:""},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.userroles,"item-text":"name","item-value":"id",chips:"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Chips",required:""},model:{value:e.editedItem.role,callback:function(t){e.$set(e.editedItem,"role",t)},expression:"editedItem.role"}})],1),e._v(" "),r("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[r("v-checkbox",{attrs:{label:"Is Staff?",required:""},model:{value:e.editedItem.isStaff,callback:function(t){e.$set(e.editedItem,"isStaff",t)},expression:"editedItem.isStaff"}})],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:e.close}},[e._v("\n              "+e._s(e.$t("label.button.btncancel"))+"\n            ")]),e._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:e.save}},[e._v("\n              "+e._s(e.$t("label.button.btnsave"))+"\n            ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",{staticClass:"subhead-1 pa-4"},[e._v("\n            "+e._s(e.$t("label.dialogs.deleteconfirmdialog")))]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary","x-small":""},on:{click:e.closeDelete}},[e._v(e._s(e.$t("label.button.btnno")))]),e._v(" "),r("v-btn",{attrs:{color:"warning","x-small":""},on:{click:e.deleteItemConfirm}},[e._v(e._s(e.$t("label.button.btnyes")))]),e._v(" "),r("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n      mdi-delete\n    ")])]}},{key:"item.roles",fn:function(t){var n=t.item;return e._l(n.roles,(function(t,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1",attrs:{color:e.getColor(t.name.toLowerCase()),"x-small":""}},[e._v(e._s(t.name.toLowerCase()))])}))}},{key:"no-data",fn:function(){return[r("p",[e._v("No Data available")])]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:v.a,VCard:O.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCheckbox:y.a,VChip:I.a,VCol:_.a,VContainer:w.a,VDataTable:j.a,VDialog:k.a,VDivider:$.a,VForm:C.a,VIcon:D.a,VRow:V.a,VSelect:S.a,VSpacer:P.a,VTextField:E.a,VToolbar:B.a,VToolbarTitle:T.a})}}]);