(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{514:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return v}));var o=n(515),r=n(2),l=Object(r.i)("v-card__actions"),d=Object(r.i)("v-card__subtitle"),c=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");o.a},543:function(e,t,n){var content=n(544);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("2065bca8",content,!0,{sourceMap:!1})},544:function(e,t,n){var o=n(9)(!1);o.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=o},551:function(e,t,n){"use strict";n(50),n(27),n(77),n(12),n(46),n(58),n(43);var o=n(21),r=n(0),l=(n(543),n(513)),d=n(96),c=n(84),v=n(145),f=n(242),x=n(241),h=n(240),m=n(32),_=n(106),y=n(6),w=n(7),O=n(2);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=Object(y.a)(d.a,c.a,v.a,f.a,x.a,h.a,m.a);t.a=j.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===O.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:I({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=I(I({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(O.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(O.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},558:function(e,t,n){var content=n(559);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5c8fbe94",content,!0,{sourceMap:!1})},559:function(e,t,n){var o=n(9)(!1);o.push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=o},582:function(e,t,n){"use strict";n(12),n(43);var o=n(0),r=(n(558),n(97)),l=n(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=Object(l.a)(r.a);t.a=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){r.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},606:function(e,t,n){var content=n(658);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("55c02462",content,!0,{sourceMap:!1})},657:function(e,t,n){"use strict";n(606)},658:function(e,t,n){var o=n(9)(!1);o.push([e.i,":v-deep tbody tr[data-v-093fe9f1]{cursor:pointer}:v-deep tbody tr td.none-clickable[data-v-093fe9f1]{cursor:auto}",""]),e.exports=o},725:function(e,t,n){"use strict";n.r(t);n(105);var o=n(0),r=n(95);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={data:function(){return{search:null,title:"Departments",headers:[{text:"ID",value:"id"},{text:"Department name",value:"name",sortable:!1},{text:"Description",value:"descriptions"},{text:"Opening date",value:"openingDate"},{text:"Actions",value:"actions",sortable:!1}],items:[{title:"Edit",icon:"lead-pencil",color:"blue"},{title:"Delete",icon:"delete",color:"red"}],editedIndex:-1,editedItemId:"",dialog:!1,editedItem:{id:0,name:"",hierachy:"",description:"",extraId:"",parent:0},defaultItem:{id:0,name:"",hierachy:"",description:"",extraId:"",parent:0}}},methods:{fetchdata:function(){this.$store.dispatch("retrieve_departments")},getSelected:function(e,t){"Edit"==e.title&&this.editItem(t),"Delete"==e.title&&this.deleteItem(t),"View"==e.title&&this.navigateTo(t.id),console.log(e),console.log(t)},editItem:function(e){this.editedIndex=this.departments.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){console.log(e)},navigateTo:function(e){this.$router.push("/departments/".concat(e))},close:function(){this.dialog=!1},save:function(){this.editedIndex>-1||(delete this.editedItem.id,this.$store.dispatch("create_department",this.editedItem)),this.close()},handleClick:function(e){this.navigateTo(e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_departments")}},created:function(){this.$store.dispatch("retrieve_departments")},computed:d(d({},Object(r.b)({departments:"departments"})),{},{formTitle:function(){return-1===this.editedIndex?"New department":"Edit department"}})},v=(n(657),n(45)),f=n(57),x=n.n(f),h=n(136),m=n(515),_=n(514),y=n(538),w=n(529),O=n(540),k=n(551),I=n(173),j=n(221),C=n(229),$=n(539),P=n(172),D=n(532),A=n(97),S=n(582),T=n(56),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/departments"}},[e._v("Departments")])],1),e._v(" "),n("v-card",{staticClass:"mx-auto default "},[null==e.departments.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.departments,search:e.search,width:"100%"},on:{"click:row":e.handleClick},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("h2",[n("strong",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n            "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.newdepartment")))],1):n("v-btn",e._g(e._b({staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"}},"v-btn",r,!1),o),[n("v-icon",{attrs:{dark:""}},[e._v("\n                    mdi-plus\n                  ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Hierachy"},model:{value:e.editedItem.hierachy,callback:function(t){e.$set(e.editedItem,"hierachy",t)},expression:"editedItem.hierachy"}})],1),e._v(" "),1!=e.editedItem.id?n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-select",{attrs:{items:e.departments,label:"Parent department","item-text":"name","item-value":"id"},model:{value:e.editedItem.parent,callback:function(t){e.$set(e.editedItem,"parent",t)},expression:"editedItem.parent"}})],1):e._e(),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Etra Identifier (Optional)"},model:{value:e.editedItem.extraId,callback:function(t){e.$set(e.editedItem,"extraId",t)},expression:"editedItem.extraId"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-textarea",{attrs:{label:"Descriptions"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:function(t){return t.stopPropagation(),e.save(t)}}},[e._v(e._s(e.$t("label.button.btnsave")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("td",{staticClass:"none-clickable",on:{click:function(e){e.stopPropagation()}}},e._l(e.items,(function(t,i){return n("v-icon",{key:i,staticClass:"mr-2",attrs:{"x-small":"",color:t.color},on:{click:function(n){return e.getSelected(t,o)}}},[e._v("\n              mdi-"+e._s(t.icon)+"\n            ")])})),1)]}},{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,"093fe9f1",null);t.default=component.exports;x()(component,{VBtn:h.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:y.a,VContainer:w.a,VDataTable:O.a,VDialog:k.a,VIcon:I.a,VProgressCircular:j.a,VProgressLinear:C.a,VRow:$.a,VSelect:P.a,VSpacer:D.a,VTextField:A.a,VTextarea:S.a,VToolbar:T.a})}}]);