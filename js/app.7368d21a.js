(function(t){function n(n){for(var r,s,c=n[0],u=n[1],a=n[2],f=0,h=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,a||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,c=1;c<e.length;c++){var u=e[c];0!==i[u]&&(r=!1)}r&&(o.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},o=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/tic-tac-toe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var l=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"32b8":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h3",{},[t._v("Tic-Tac-Toe")]),e("Content")],1)},o=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"block"},t._l(t.grids,(function(n,r){return e("div",{key:r,staticClass:"block__list",on:{click:function(n){return t.addClass(r)}}},[e("div",{class:{"mark-circle":1==n,"mark-check":-1==n}})])})),0),t.over?e("section",{staticClass:"surprise"},[e("div",{staticClass:"over"},[e("h3",{staticClass:"over__text"},[t._v(t._s(t.winnerText))]),t.over?e("button",{staticClass:"over__btn",on:{click:function(n){return t.restart()}}},[t._v("Restart")]):t._e()])]):t._e()])},c=[],u=(e("d81d"),e("3835")),a={data:function(){return{change:0,count:0,over:!1,grids:[null,null,null,null,null,null,null,null,null],winnerMethod:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],winnerText:""}},computed:{},methods:{addClass:function(t){null==this.grids[t]&&(0==this.change?(this.$set(this.grids,t,1),this.change=1):(this.$set(this.grids,t,-1),this.change=0),this.count+=1,this.checkWinner())},checkWinner:function(){var t=this;if(!(this.count<5)){9==this.count&&(this.over=!0,this.winnerText="Tie");for(var n=0;n<8;n++){var e=this.winnerMethod[n],r=Object(u["a"])(e,3),i=r[0],o=r[1],s=r[2],c=this.grids[i]+this.grids[o]+this.grids[s];3!==c&&-3!==c||setTimeout((function(){t.over=!0,0==t.change?t.winnerText="winner is 'X' ":t.winnerText="winner is 'O' "}),100)}}},restart:function(){var t=this;this.grids=this.grids.map((function(n,e){t.$set(t.grids,e,null)})),this.over=!1,this.count=0}}},l=a,f=(e("9e70"),e("2877")),h=Object(f["a"])(l,s,c,!1,null,"cb936a08",null),d=h.exports,p={name:"App",components:{Content:d}},v=p,b=(e("5c0b"),Object(f["a"])(v,i,o,!1,null,null,null)),g=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("9c0c"),i=e.n(r);i.a},"9c0c":function(t,n,e){},"9e70":function(t,n,e){"use strict";var r=e("32b8"),i=e.n(r);i.a}});
//# sourceMappingURL=app.7368d21a.js.map