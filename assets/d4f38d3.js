(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{655:function(t,e,n){var content=n(711);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2b25b40d",content,!0,{sourceMap:!1})},710:function(t,e,n){"use strict";n(655)},711:function(t,e,n){var o=n(9),c=n(252),l=n(712),d=n(713),r=o(!1),v=c(l),m=c(d);r.push([t.i,"#invoice-POS[data-v-5dca5a1e]{box-shadow:0 0 1in -.25in rgba(0,0,0,.5);padding:2mm;margin:0 auto;width:80mm;background:#fff}#invoice-POS[data-v-5dca5a1e] ::-moz-selection{background:#f31544;color:#fff}#invoice-POS[data-v-5dca5a1e] ::selection{background:#f31544;color:#fff}#invoice-POS[data-v-5dca5a1e] ::moz-selection{background:#f31544;color:#fff}#invoice-POS h1[data-v-5dca5a1e]{font-size:1.5em;color:#222}#invoice-POS h2[data-v-5dca5a1e]{font-size:.9em}#invoice-POS h3[data-v-5dca5a1e]{font-size:1.2em;font-weight:300;line-height:2em}#invoice-POS p[data-v-5dca5a1e]{font-size:.7em;color:#666;line-height:1.2em}#invoice-POS #bot[data-v-5dca5a1e],#invoice-POS #mid[data-v-5dca5a1e],#invoice-POS #top[data-v-5dca5a1e]{border-bottom:1px solid #eee}#invoice-POS #top[data-v-5dca5a1e]{min-height:100px}#invoice-POS #mid[data-v-5dca5a1e]{min-height:80px}#invoice-POS #bot[data-v-5dca5a1e]{min-height:50px}#invoice-POS #top .logo[data-v-5dca5a1e]{height:60px;width:60px;background:url("+v+") no-repeat;background-size:60px 60px}#invoice-POS .clientlogo[data-v-5dca5a1e]{float:left;height:60px;width:60px;background:url("+m+") no-repeat;background-size:60px 60px;border-radius:50px}#invoice-POS .info[data-v-5dca5a1e]{display:block;margin-left:0}#invoice-POS .title[data-v-5dca5a1e]{float:right}#invoice-POS .title p[data-v-5dca5a1e]{text-align:right}#invoice-POS table[data-v-5dca5a1e]{width:100%;border-collapse:collapse}#invoice-POS .tabletitle[data-v-5dca5a1e]{font-size:.5em;background:#eee}#invoice-POS .service[data-v-5dca5a1e]{border-bottom:1px solid #eee}#invoice-POS .item[data-v-5dca5a1e]{width:24mm}#invoice-POS .itemtext[data-v-5dca5a1e]{font-size:.5em}#invoice-POS #legalcopy[data-v-5dca5a1e]{margin-top:5mm}",""]),t.exports=r},712:function(t,e,n){t.exports=n.p+"img/icon.1fc9da8.png"},713:function(t,e,n){t.exports=n.p+"img/logo.17bb66c.png"},773:function(t,e,n){"use strict";n.r(e);n(18);var o=n(4),c={data:function(){return{dialog:!1,bill:null,transaction:null,amountToPay:null,tax:0}},methods:{getbill:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("bills/1/").then((function(e){t.bill=e,t.transaction=e.transactionResponse,t.amountToPay=e.totalAmount})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.getbill()}},l=(n(710),n(27)),d=n(38),r=n.n(d),v=n(568),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[null!==t.bill?n("div",{attrs:{id:"invoice-POS"}},[n("center",{attrs:{id:"top"}},[n("div",{staticClass:"logo"}),t._v(" "),n("div",{staticClass:"info"},[n("h2",[t._v("Ospic Memorial Hospital")])])]),t._v(" "),n("div",{attrs:{id:"mid"}},[n("div",{staticClass:"info"},[n("h2",[t._v("Receipt Info")]),t._v(" "),n("p",[t._v(" \n            Client : "+t._s(t.bill.patientName)),n("br"),t._v("\n            Email   : "+t._s(t.bill.emailAddress)),n("br"),t._v("\n            Phone   : "+t._s(t.bill.phoneNumber)+" "),n("br"),t._v("\n            Address : "+t._s(t.bill.address)+"\n        ")])])]),t._v(" "),n("div",{attrs:{id:"bot"}},[null!==t.transaction?n("div",{attrs:{id:"table"}},[n("table",[n("tr",{staticClass:"tabletitle"},[n("td",{staticClass:"item"},[n("h2",[t._v("Item")])]),t._v(" "),n("td",{staticClass:"Hours"},[n("h2",[t._v("Medicine")])]),t._v(" "),n("td",{staticClass:"Hours"},[n("h2",[t._v("Service")])]),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Price")])])]),t._v(" "),t._l(t.transaction.transactions,(function(e,o){return n("tr",{key:o,staticClass:"service"},[n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v("Communication")])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(null===e.medicalServiceName?"------":e.medicalServiceName))])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(null===e.medicineName?"------":e.medicineName))])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(e.amount))])])])})),t._v(" "),n("tr",{staticClass:"tabletitle"},[n("td"),n("td"),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Tax")])]),t._v(" "),n("td",{staticClass:"payment"},[n("h2",[t._v(t._s(t.tax))])])]),t._v(" "),n("tr",{staticClass:"tabletitle"},[n("td"),n("td"),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Total")])]),t._v(" "),n("td",{staticClass:"payment"},[n("h2",[t._v(t._s(t.amountToPay))])])])],2)]):t._e(),t._v(" "),n("div",{attrs:{id:"legalcopy"}},[n("div",[t.bill.isPaid?n("span",{staticClass:"stamp",staticStyle:{height:"90px"}},[t._v("Paid ")]):n("span",{staticClass:"stamp is-approved"},[t._v("OutStanding !")])])])])],1):t._e()])}),[],!1,null,"5dca5a1e",null);e.default=component.exports;r()(component,{VContainer:v.a})}}]);