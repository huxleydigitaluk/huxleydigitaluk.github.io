webpackJsonp([7],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},Bq4M:function(t,e,n){"use strict";e.a={props:["error"],layout:"errorlayout",asyncData:function(){},data:function(){return{}},mounted:function(){},methods:{mouseOver:function(){this.expand=!0},mouseLeave:function(){this.expand=!1}},head:{title:"We can't find that page, sorry!  Huxley",meta:[{hid:"description",name:"Description",content:"This is an error page because the content you tried to load can't be found."}]}}},F7kz:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="F7kz"},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=s[f]||c,p={};r.forEach(function(t){void 0!==d[t]&&(p[t]=d[t])});var l={};o.forEach(function(t){"function"==typeof d[t]&&(l[t]=d[t].bind(u))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var x=[t("router-view",a)];return void 0!==i.keepAlive&&(x=[t("keep-alive",x)]),t("transition",{props:p,on:l},x)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),u=n("/5sW"),s=n("NYxO");u.default.use(s.default);var c=n("F7kz"),f=c.keys(),d={},p=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(p=t)}),p&&(d=g(p)),"function"!=typeof d){d.modules||(d.modules={});var l=!0,h=!1,x=void 0;try{for(var v,m=i()(f);!(l=(v=m.next()).done);l=!0){var y=v.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var w=b.split(/\//);(t=C(d,w))[b=w.pop()]=g(y),t[b].namespaced=!0}}}catch(t){h=!0,x=t}finally{try{!l&&m.return&&m.return()}finally{if(h)throw x}}}var _=d instanceof Function?d:function(){return new s.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function g(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},OkXW:function(t,e,n){"use strict";var r=n("/5sW"),o=n("295d"),a=n.n(o);r.default.use(a.a)},PiST:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"welcome-pane"},[e("div",{staticClass:"page-header",attrs:{id:"page-header"}},[404===this.error.statusCode?e("h1",{staticClass:"page-header__title"},[this._v("Page not found")]):e("h1",{staticClass:"page-header__title"},[this._v("An error occurred")]),e("p",{staticClass:"page-header__strapline text"},[this._v("Let's start at the beginning and  "),e("nuxt-link",{attrs:{to:"/",title:"Huxley Digital"}},[this._v("try again")]),this._v("!")],1)])]),e("main",{ref:"main",attrs:{id:"main",role:"main"}})])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),u=n.n(i),s=n("//Fk"),c=n.n(s),f=n("Xxa5"),d=n.n(f),p=n("mvHQ"),l=n.n(p),h=n("exGp"),x=n.n(h),v=n("fZjL"),m=n.n(v),y=n("woOf"),b=n.n(y),w=n("/5sW"),_=n("unZF"),g=n("qcny"),C=n("YLfZ"),k=(r=x()(d.a.mark(function t(e,n,r){var o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],t.prev=3,t.next=6,Object(C.k)(e);case 6:t.sent,r(),t.next=17;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 17:case"end":return t.stop()}},t,this,[[3,10]])})),function(t,e,n){return r.apply(this,arguments)}),E=(o=x()(d.a.mark(function t(e,n,r){var o,a,i,u,s,f,p,l,h=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(!o){o=!0;var e=[];R=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(j,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,i=[],(u=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,D.call(this,u,j.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout(j.context):g.a.layout);case 17:return s=t.sent,t.next=20,D.call(this,u,j.context,s);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(u,e,n)),t.prev=26,t.next=29,D.call(this,u,j.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=u[0].options.layout)&&(f=f(j.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,D.call(this,u,j.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(p=!0,u.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),p){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(u.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==R[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch;if(a){var s=Object(C.j)(t.options.asyncData,j.context).then(function(e){Object(C.a)(t,e)});o.push(s)}if(u){var f=t.options.fetch(j.context);f&&(f instanceof c.a||"function"==typeof f.then)||(f=c.a.resolve(f)),f.then(function(t){}),o.push(f)}return c.a.all(o)}));case 51:o||(R=u.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),R=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(l=g.a.layout)&&(l=l(j.context)),t.next=63,this.loadLayout(l);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),$=(a=x()(d.a.mark(function t(e){var n,r,o,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,O=e.router,T=e.store,t.next=5,c.a.all(F(O));case 5:return n=t.sent,r=new w.default(j),o=q.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),w.default.nextTick(function(){B(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,O.currentRoute)),R=O.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(O.currentRoute.params)})),r.$loading={},q.error&&r.error(q.error),O.beforeEach(k.bind(r)),O.beforeEach(E.bind(r)),O.afterEach(S),O.afterEach(W.bind(r)),!q.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:E.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return S(O.currentRoute,O.currentRoute),N.call(r,O.currentRoute),void a();O.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),R=[],j=void 0,O=void 0,T=void 0,q=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);m()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function L(t,e){return q.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function F(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=x()(d.a.mark(function t(e,r,o,a,i){var u;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=L(Object(C.l)(e),q.data?q.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function D(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof _.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),_.a[t])}),!a)return Object(C.i)(o,e)}function S(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":u()(t))||t.options||((t=w.default.extend(t))._Ctor=t,n.components[r]=t),t})}function N(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function W(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||w.default.nextTick(function(){var e=[];Object(C.f)(t,e).forEach(function(n,r){if(n&&-1!==t.matched[e[r]].path.indexOf(":")&&n.constructor._dataRefresh&&R[r]===n.constructor._path&&"function"==typeof n.constructor.options.data){var o=n.constructor.options.data.call(n);for(var a in o)w.default.set(n.$data,a,o[a])}}),N.call(n,t)})}function B(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){w.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(g.b)().then($).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("Bq4M"),o=n("PiST"),a=n("VU/8")(r.a,o.a,!1,null,null,null);a.options.__file="layouts/error.vue",e.a=a.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=w,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=_,e.k=g,n.d(e,"h",function(){return E}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return R(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=R,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},u=r||{},s=u.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,p=i[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(d=s(p[l]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===l?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var s=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+s.length,c)i+=c[1];else{var d=t[a],p=n[2],l=n[3],h=n[4],x=n[5],v=n[6],m=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=d&&d!==p,b="+"===v||"*"===v,w="?"===v||"*"===v,_=n[2]||u,g=h||x;r.push({name:l||o++,prefix:p||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!m,pattern:g?q(g):m?".*":"[^"+T(_)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),u=n("Xxa5"),s=n.n(u),c=n("exGp"),f=n.n(c),d=n("//Fk"),p=n.n(d),l=n("fZjL"),h=n.n(l),x=n("Dd8w"),v=n.n(x),m=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=m.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function _(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function g(t){var e,n=this;return p.a.all(_(t,(e=f()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,E=(C=f()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:return t.abrupt("return",v()({},e,{meta:w(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),$=(k=f()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,E(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,E(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function R(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},dd5e:function(t,e){},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:d,routes:[{path:"/work",component:u,name:"work"},{path:"/contact",component:s,name:"contact"},{path:"/about",component:c,name:"about"},{path:"/",component:f,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var u=function(){return n.e(4).then(n.bind(null,"rXLo")).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,"fBFx")).then(function(t){return t.default||t})},c=function(){return n.e(5).then(n.bind(null,"hSk2")).then(function(t){return t.default||t})},f=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var d=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){t.hash&&document.querySelector(t.hash)&&(r={selector:t.hash}),e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return L});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),f=n("Dd8w"),d=n.n(f),p=n("exGp"),l=n.n(p),h=n("MU8w"),x=(n.n(h),n("/5sW")),v=n("p3jY"),m=n.n(v),y=n("mtxM"),b=n("0F0d"),w=n("HBB+"),_=n("WRRc"),g=n("To1F"),C=n("Hot+"),k=n("yTq1"),E=n("YLfZ"),$=n("J2Ti"),R=n("uakC"),j=n("uS0v"),O=n("OkXW"),T=n("dd5e"),q=n.n(T);n.d(e,"a",function(){return g.a});var A,L=(A=l()(o.a.mark(function t(e){var n,r,a,i,s,f,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(),(r=Object($.a)()).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:F,transitions:[F],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},F,{name:t}):c()({},F,t):F}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},s=void 0,e?s=n.resolve(e.url).route:(f=Object(E.d)(n.options.base),s=n.resolve(f).route),t.next=10,Object(E.m)(a,{route:s,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";x.default[n]||(x.default[n]=!0,x.default.use(function(){x.default.prototype.hasOwnProperty(t)||u()(x.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof R.default){t.next=16;break}return t.next=16,Object(R.default)(a.context,p);case 16:if("function"!=typeof j.default){t.next=19;break}return t.next=19,Object(j.default)(a.context,p);case 19:if("function"!=typeof O.default){t.next=22;break}return t.next=22,Object(O.default)(a.context,p);case 22:if("function"!=typeof q.a){t.next=25;break}return t.next=25,q()(a.context,p);case 25:t.next=28;break;case 28:return t.abrupt("return",{app:a,router:n,store:r});case 29:case"end":return t.stop()}},t,this)})),function(t){return A.apply(this,arguments)});x.default.component(b.a.name,b.a),x.default.component(w.a.name,w.a),x.default.component(_.a.name,_.a),x.default.component(C.a.name,C.a),x.default.use(m.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var F={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sq1o:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="sq1o"},uS0v:function(t,e,n){"use strict";var r=n("/5sW"),o=n("4t5/"),a=n.n(o);r.default.use(a.a)},uakC:function(t,e,n){"use strict";var r=n("/5sW"),o=n("9OOc"),a=n.n(o);r.default.use(a.a)},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("sq1o"),i=a.keys();function u(t){var e=a(t);return e.default?e.default:e}var s={},c=!0,f=!1,d=void 0;try{for(var p,l=o()(i);!(c=(p=l.next()).done);c=!0){var h=p.value;s[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(h)}}catch(t){f=!0,d=t}finally{try{!c&&l.return&&l.return()}finally{if(f)throw d}}e.a=s},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i={_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})},_errorlayout:function(){return n.e(1).then(n.bind(null,"ZQjw")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"Huxley Digital",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Huxley Digital 2018 site based on Nuxt"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[n])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},methods:{setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(i["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):i[n]().then(function(t){return u[n]=t,delete i[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{}}}},["T23V"]);