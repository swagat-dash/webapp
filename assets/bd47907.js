(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{582:function(t,e,n){var content=n(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2065bca8",content,!0,{sourceMap:!1})},583:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},586:function(t,e,n){"use strict";n(54),n(30),n(12),n(46),n(62),n(39);var o=n(23),r=n(0),c=(n(582),n(557)),l=n(94),d=n(87),v=n(143),h=n(242),f=n(241),m=n(240),y=n(33),x=n(102),w=n(6),O=n(7),_=n(2);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(w.a)(l.a,d.a,v.a,h.a,f.a,m.a,y.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(_.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},676:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(79);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{charges:n(247).default},props:{consultationsservices:{type:Array,default:null},transaction:{type:Object,default:null},isActive:{type:Boolean,default:!0}},data:function(){return{select:[],dialog:!1,service_transactions:null,type:"medicine",headers:[{text:"ID",value:"id"},{text:"Service",value:"service",sortable:!0},{text:"Department",value:"departmentName"},{text:"Amount",value:"amount",sortable:!1},{text:"Currency",value:"currencyCode"},{text:"Reversed",value:"isReversed",sortable:!0},{text:"Transaction Date",value:"transactionDate"}]}},methods:{fetch_medical_services:function(){this.$store.dispatch("getmedicines")},save:function(){this.$store.dispatch("initiate_medical_transaction",{id:this.$route.params.id,services:this.select,type:this.type}),this.dialog=!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({medicines:"medicines"}))},d=n(27),v=n(38),h=n.n(v),f=n(135),m=n(231),y=n(142),x=n(568),w=n(579),O=n(586),_=n(227),k=n(168),j=n(60),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[t.isActive?n("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",r,!1),o),[t._v("Add patient medicine")]):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("Add new service's received by this patient")]),t._v(" "),n("v-card-text",[n("v-select",{attrs:{items:t.medicines,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Medical services",required:"",multiple:"","persistent-hint":"","single-line":""},on:{click:t.fetch_medical_services},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),n("v-btn",{staticClass:"warning",on:{click:t.save}},[t._v("Save")])],1)],1)],1),t._v(" "),n("div",[null==t.transaction?n("v-progress-linear",{attrs:{indeterminate:""}}):n("v-container",{staticClass:"ma-2",attrs:{fluid:""}},[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.transaction.transactions.filter((function(t){return null===t.medicalServiceName})),"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"item.service",fn:function(e){var o=e.item;return[null!=o.medicalServiceName?n("p",[t._v("\n            "+t._s(o.medicalServiceName)+"\n          ")]):n("p",[t._v(t._s(o.medicineName))])]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:m.a,VCardActions:y.a,VCardText:y.c,VContainer:x.a,VDataTable:w.a,VDialog:O.a,VProgressLinear:_.a,VSelect:k.a,VToolbar:j.a})}}]);