(function(e){function n(n){for(var r,a,c=n[0],s=n[1],u=n[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/three1/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"18c4":function(e,n,t){"use strict";var r=t("eb42"),o=t.n(r);o.a},5131:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("stage"),t("layout")],1)},i=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"container"}})},c=[],s=t("5a89"),u={name:"ThreeTest",data:function(){return{camera:null,scene:null,renderer:null,mesh:null}},methods:{init:function(){var e=document.getElementById("container");this.camera=new s["d"](70,e.clientWidth/e.clientHeight,.01,10),this.camera.position.z=1,this.scene=new s["e"];var n=new s["a"](.1,.2,.2),t=new s["c"];this.mesh=new s["b"](n,t),this.scene.add(this.mesh),this.renderer=new s["f"]({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}},l=u,f=(t("18c4"),t("2877")),d=Object(f["a"])(l,a,c,!1,null,"14cb5dbe",null),p=d.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"layout"}},[e._v(" layout ")])},m=[],v={},b=v,g=(t("f7de"),Object(f["a"])(b,h,m,!1,null,"1dafac2f",null)),w=g.exports,y={name:"app",components:{Stage:p,Layout:w}},O=y,j=(t("5c0b"),Object(f["a"])(O,o,i,!1,null,null,null)),_=j.exports,x=t("9483");Object(x["a"])("".concat("/three1/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=t("2f62");r["a"].use(S["a"]);var k=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:k,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"9c0c":function(e,n,t){},eb42:function(e,n,t){},f7de:function(e,n,t){"use strict";var r=t("5131"),o=t.n(r);o.a}});
//# sourceMappingURL=app.540f5694.js.map