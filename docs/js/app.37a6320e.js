(function(t){function e(e){for(var o,u,a=e[0],b=e[1],i=e[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&l.push(n[u][0]),n[u]=0;for(o in b)Object.prototype.hasOwnProperty.call(b,o)&&(t[o]=b[o]);s&&s(e);while(l.length)l.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var t,e=0;e<r.length;e++){for(var c=r[e],o=!0,a=1;a<c.length;a++){var b=c[a];0!==n[b]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=c[0]))}return t}var o={},n={app:0},r=[];function u(e){if(o[e])return o[e].exports;var c=o[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=t,u.c=o,u.d=function(t,e,c){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(c,o,function(e){return t[e]}.bind(null,o));return c},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],b=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var s=b;r.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"03ce":function(t,e,c){"use strict";c("90cf")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var o=c("7a23"),n={id:"nav"},r=Object(o["e"])("Home"),u=Object(o["e"])(" | "),a=Object(o["e"])("About"),b=Object(o["e"])(" | "),i=Object(o["e"])("Resources"),s=Object(o["e"])(" | "),f=Object(o["e"])("Contact");function l(t,e){var c=Object(o["v"])("router-link"),l=Object(o["v"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",n,[Object(o["f"])(c,{to:"/"},{default:Object(o["A"])((function(){return[r]})),_:1}),u,Object(o["f"])(c,{to:"/about"},{default:Object(o["A"])((function(){return[a]})),_:1}),b,Object(o["f"])(c,{to:"/resources"},{default:Object(o["A"])((function(){return[i]})),_:1}),s,Object(o["f"])(c,{to:"/contact"},{default:Object(o["A"])((function(){return[f]})),_:1})]),Object(o["f"])(l)],64)}c("b280");const d={};d.render=l;var O=d,j=c("6c02"),p=c("cf05"),v=c.n(p),h=Object(o["B"])("data-v-bbae4d24");Object(o["r"])("data-v-bbae4d24");var m={class:"home"},y=Object(o["f"])("img",{alt:"Zimera logo",src:v.a},null,-1),g=Object(o["f"])("div",{class:"hello"},[Object(o["f"])("h2",null,"Welcome!")],-1);Object(o["p"])();var T=h((function(t,e,c,n,r,u){return Object(o["o"])(),Object(o["d"])("div",m,[y,g])})),_={name:"Home"};c("df32");_.render=T,_.__scopeId="data-v-bbae4d24";var R=_,L={class:"about"},k=Object(o["f"])("h1",null,"About Zimera Systems",-1);function w(t,e){return Object(o["o"])(),Object(o["d"])("div",L,[k])}const x={};x.render=w;var U=x,A=Object(o["B"])("data-v-495a9c30");Object(o["r"])("data-v-495a9c30");var B={class:"header"},P={class:"center"},S=Object(o["f"])("td",null,":",-1);Object(o["p"])();var V=A((function(t,e,c,n,r,u){return Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.resources,(function(t,e){return Object(o["o"])(),Object(o["d"])("div",{key:e},[Object(o["f"])("p",B,Object(o["x"])(t.Type),1),Object(o["f"])("table",P,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(t.List,(function(t,e){return Object(o["o"])(),Object(o["d"])("tr",{key:e},[Object(o["f"])("td",null,Object(o["x"])(t.Title),1),S,Object(o["f"])("td",null,Object(o["x"])(t.URL),1)])})),128))])])})),128)})),M=c("d1ad"),C={data:function(){return{resources:M}}};c("03ce");C.render=V,C.__scopeId="data-v-495a9c30";var H=C,J={class:"about"},I=Object(o["f"])("h1",null,"Contact Us",-1);function Z(t,e){return Object(o["o"])(),Object(o["d"])("div",J,[I])}const N={};N.render=Z;var W=N,q=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:U},{path:"/resources",name:"Resources",component:H},{path:"/contact",name:"Contact",component:W}],z=Object(j["a"])({history:Object(j["b"])("/"),routes:q}),D=z;Object(o["c"])(O).use(D).mount("#app")},"7f22":function(t,e,c){},8976:function(t,e,c){},"90cf":function(t,e,c){},b280:function(t,e,c){"use strict";c("7f22")},cf05:function(t,e,c){t.exports=c.p+"img/logo.78a2de3c.png"},d1ad:function(t){t.exports=JSON.parse('{"Resource 1":{"Type":"Videos","List":[{"Title":"Video 1","URL":"https://youtube.com"},{"Title":"Video 2","URL":"https://youtube.com"},{"Title":"Video 3","URL":"https://youtube.com"},{"Title":"Video 4","URL":"https://youtube.com"}]},"Resources 2":{"Type":"Books","List":[{"Title":"Book 1","URL":"https://github.com"},{"Title":"Book 2","URL":"https://github.com"},{"Title":"Book 3","URL":"https://youtube.com"},{"Title":"Book 4","URL":"https://github.com"}]}}')},df32:function(t,e,c){"use strict";c("8976")}});
//# sourceMappingURL=app.37a6320e.js.map