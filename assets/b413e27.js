(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{585:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("12a190a6",content,!0,{sourceMap:!1})},586:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=r},587:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e2bc7da",content,!0,{sourceMap:!1})},588:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},597:function(t,e,n){"use strict";var r=n(0),o=(n(40),n(55),n(188),n(7),n(10),n(47),n(56),n(11),n(9),n(13),n(14),n(6)),l=n(97),c=n(111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},598:function(t,e,n){"use strict";n(11),n(9),n(7),n(13),n(10),n(14);var r=n(0),o=(n(19),n(71),n(585),n(587),n(29)),l=n(79),c=n(49),d=n(3).a.extend({name:"rippleable",directives:{ripple:c.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),h=n(251),v=n(6);function m(t){t.preventDefault()}var f=Object(v.a)(l.a,d,h.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=f.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x(x({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",x(x({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},752:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(10),n(105),n(11),n(9),n(7),n(13),n(14),n(88));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{dialog:!1,dialogDelete:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Username",align:"start",sortable:!1,value:"username"},{text:"Email",value:"email"},{text:"Is Staff ?",value:"isStaff"},{text:"Roles",value:"roles"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},defaultItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},colors:["red","blue","green","yellow","purple","teal","orange","brown","deep-orange","blue-grey","cyan"],currentColor:"",valid:!0,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>5||"Name must be less than 5 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("fetchuserroles"),this.$store.dispatch("retrieveAllusers")},methods:{getColor:function(t){return"user"===t?"yellow":"admin"===t?"red darken-3 white--text":"moderator"===t?"green":"cyan"},editItem:function(t){this.editedIndex=this.userslist.indexOf(t),this.editedItem=Object.assign({},t),this.editedItem.departmentId=null===this.editedItem.staff?null:this.editedItem.staff.department.id;var e=[];this.editedItem.roles.forEach((function(t){e.push(t.id)})),this.editedItem.roles=e,this.dialog=!0},deleteItem:function(t){this.editedIndex=this.userslist.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.userslist.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1})),this.$store.dispatch("retrieveAllusers")},save:function(){if(this.editedIndex>-1){var t=this.editedItem.id;delete this.editedItem.staff;var e={id:t,data:this.editedItem};this.$store.dispatch("updateuserdetails",e)}else delete this.editedItem.id,this.$refs.form.validate()&&this.$store.dispatch("create_new_user",this.editedItem),this.close()},_fetch_departments:function(){this.$store.dispatch("retrieve_departments")}},computed:c(c({},Object(o.b)({userslist:"users",userroles:"userroles",departments:"departments"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newuser":"label.titles.edituser"}}),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}}},h=n(36),v=n(48),m=n.n(v),f=n(142),_=n(230),x=n(86),y=n(598),I=n(241),w=n(577),O=n(570),k=n(581),C=n(568),V=n(233),j=n(597),$=n(179),D=n(232),S=n(580),P=n(177),E=n(572),A=n(104),B=n(70),T=n(87),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.userslist?n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.userslist,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v(t._s(t.$t("label.titles.usersmanagement")))]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",medium:"",dark:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-plus")]),t._v("\n              "+t._s(t.$t("label.button.btncreatenewuser")))],1):n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary"},[n("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Username",required:""},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}})],1),t._v(" "),-1===t.editedIndex?n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"Email Address",type:"email",required:""},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-select",{attrs:{items:t.userroles,"item-text":"name","item-value":"id",chips:"","small-chips":"",multiple:"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Role",required:""},model:{value:t.editedItem.roles,callback:function(e){t.$set(t.editedItem,"roles",e)},expression:"editedItem.roles"}})],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"6"}},[n("v-checkbox",{attrs:{label:"Is Staff?",required:""},model:{value:t.editedItem.isStaff,callback:function(e){t.$set(t.editedItem,"isStaff",e)},expression:"editedItem.isStaff"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t.editedItem.isStaff?n("v-select",{attrs:{items:t.departments,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Department"},on:{click:t._fetch_departments},model:{value:t.editedItem.departmentId,callback:function(e){t.$set(t.editedItem,"departmentId",e)},expression:"editedItem.departmentId"}}):t._e()],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                "+t._s(t.$t("label.button.btncancel"))+"\n              ")]),t._v(" "),n("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                "+t._s(t.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"subhead-1 pa-4"},[t._v("\n              "+t._s(t.$t("label.dialogs.deleteconfirmdialog")))]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary","x-small":""},on:{click:t.closeDelete}},[t._v(t._s(t.$t("label.button.btnno")))]),t._v(" "),n("v-btn",{attrs:{color:"warning","x-small":""},on:{click:t.deleteItemConfirm}},[t._v(t._s(t.$t("label.button.btnyes")))]),t._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.isStaff",fn:function(e){return[e.item.isStaff?n("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[t._v("\n        mdi-check\n      ")]):n("v-icon",{staticClass:"font-weight-black",attrs:{color:"primary",small:""}},[t._v("\n        mdi-close\n      ")])]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("\n        mdi-delete\n      ")])]}},{key:"item.roles",fn:function(e){var r=e.item;return t._l(r.roles,(function(e,i){return n("v-chip",{key:i,staticClass:"pa-1 mr-1",attrs:{color:t.getColor(e.name.toLowerCase()),"x-small":""}},[t._v(t._s(e.name.toLowerCase()))])}))}},{key:"no-data",fn:function(){return[n("p",[t._v("No Data available")])]},proxy:!0}],null,!0)}):n("v-progress-circular",{attrs:{size:"52",color:"indigo",indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCheckbox:y.a,VChip:I.a,VCol:w.a,VContainer:O.a,VDataTable:k.a,VDialog:C.a,VDivider:V.a,VForm:j.a,VIcon:$.a,VProgressCircular:D.a,VRow:S.a,VSelect:P.a,VSpacer:E.a,VTextField:A.a,VToolbar:B.a,VToolbarTitle:T.a})}}]);