(self.webpackChunk=self.webpackChunk||[]).push([["narrators"],{5070:(e,t,r)=>{var n=r(930),a=r(8759),o=r(7530);e.exports=function(e,t,r){var s,i;return o&&n(s=t.constructor)&&s!==r&&a(i=s.prototype)&&i!==r.prototype&&o(e,i),e}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:e=>{var t=1..valueOf;e.exports=function(e){return t.call(e)}},7471:(e,t,r)=>{"use strict";var n=r(1695),a=r(6198).indexOf,o=r(2802),s=[].indexOf,i=!!s&&1/[1].indexOf(1,-0)<0,c=o("indexOf");n({target:"Array",proto:!0,forced:i||!c},{indexOf:function(e){return i?s.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),a=r(2086),o=r(7189),s=r(1007),i=r(9606),c=r(5070),l=r(2071),u=r(1288),p=r(3677),f=r(62).f,h=r(4399).f,d=r(7826).f,g=r(5773),v=r(4080).trim,b="Number",y=a.Number,m=y.prototype,k=function(e){var t=u(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,r,n,a,o,s,i,c,p=u(e,"number");if(l(p))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof p&&p.length>2)if(43===(t=(p=v(p)).charCodeAt(0))||45===t){if(88===(r=p.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(p.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+p}for(s=(o=p.slice(2)).length,i=0;i<s;i++)if((c=o.charCodeAt(i))<48||c>a)return NaN;return parseInt(o,n)}return+p};if(o(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var _,S=function(e){var t=arguments.length<1?0:y(k(e)),r=this;return r instanceof S&&p((function(){g(r)}))?c(Object(t),r,S):t},N=n?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;N.length>I;I++)i(y,_=N[I])&&!i(S,_)&&d(S,_,h(y,_));S.prototype=m,m.constructor=S,s(a,b,S)}},2759:(e,t,r)=>{var n=r(5283),a=r(2086),o=r(7189),s=r(5070),i=r(2585),c=r(7826).f,l=r(62).f,u=r(7994),p=r(4059),f=r(4276),h=r(4930),d=r(1007),g=r(3677),v=r(9606),b=r(3278).enforce,y=r(7420),m=r(211),k=r(2582),x=r(2910),_=m("match"),S=a.RegExp,N=S.prototype,I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,E=/a/g,w=new S(O)!==O,A=h.UNSUPPORTED_Y;if(o("RegExp",n&&(!w||A||k||x||g((function(){return E[_]=!1,S(O)!=O||S(E)==E||"/a/i"!=S(O,"i")}))))){for(var T=function(e,t){var r,n,a,o,c,l,h=this instanceof T,d=u(e),g=void 0===t,y=[],m=e;if(!h&&d&&g&&e.constructor===T)return e;if((d||e instanceof T)&&(e=e.source,g&&(t="flags"in m?m.flags:f.call(m))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),m=e,k&&"dotAll"in O&&(n=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),r=t,A&&"sticky"in O&&(a=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),x&&(o=function(e){for(var t,r=e.length,n=0,a="",o=[],s={},i=!1,c=!1,l=0,u="";n<=r;n++){if("\\"===(t=e.charAt(n)))t+=e.charAt(++n);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:I.test(e.slice(n+1))&&(n+=2,c=!0),a+=t,l++;continue;case">"===t&&c:if(""===u||v(s,u))throw new SyntaxError("Invalid capture group name");s[u]=!0,o.push([u,l]),c=!1,u="";continue}c?u+=t:a+=t}return[a,o]}(e),e=o[0],y=o[1]),c=s(S(e,t),h?this:N,T),(n||a||y.length)&&(l=b(c),n&&(l.dotAll=!0,l.raw=T(function(e){for(var t,r=e.length,n=0,a="",o=!1;n<=r;n++)"\\"!==(t=e.charAt(n))?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),a+=t):a+="[\\s\\S]":a+=t+e.charAt(++n);return a}(e),r)),a&&(l.sticky=!0),y.length&&(l.groups=y)),e!==m)try{i(c,"source",""===m?"(?:)":m)}catch(e){}return c},C=function(e){e in T||c(T,e,{configurable:!0,get:function(){return S[e]},set:function(t){S[e]=t}})},R=l(S),$=0;R.length>$;)C(R[$++]);N.constructor=T,T.prototype=N,d(a,"RegExp",T)}y("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(2331),a=r(6112),o=r(9586),s=r(2031),i=r(4059),c=r(2964),l=r(1189);n("search",(function(e,t,r){return[function(t){var r=o(this),n=null==t?void 0:c(t,e);return n?n.call(t,r):new RegExp(t)[e](i(r))},function(e){var n=a(this),o=i(e),c=r(t,n,o);if(c.done)return c.value;var u=n.lastIndex;s(u,0)||(n.lastIndex=0);var p=l(n,o);return s(n.lastIndex,u)||(n.lastIndex=u),null===p?-1:p.index}]}))},7877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c}),r(2327);var n=r(7758),a=r(1035),o=r(730),s=r(3486);const i={name:"aleNarrators",components:{aleSearch:a.Z,lazy:n.Z},mixins:[o.Z,s.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Narrators",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1;_.eachRight(e.subPageSource.collection,(function(n){n.narrators&&_.each(n.narrators,(function(a){var o=_.find(t,{name:a.name});if(o)return o.books.push(n.title||n.shortTitle),!1;var s={name:a.name,url:e.slugify(a.name),added:r,books:[n.title||n.shortTitle],authors:n.authors,publishers:n.publishers,series:n.series};t.push(s),++r}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search narrators by name"},{active:!0,key:"books",tippy:"Search narrators by book titles"},{active:!0,key:"authors.name",tippy:"Search narrators by authors"},{active:!0,key:"publishers.name",tippy:"Search narrators by publishers"},{active:!0,key:"series.name",tippy:"Search narrators by series"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by narrator's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},c=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-narrators"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"narrators:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"narrator",params:{narrator:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this narrator."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"455cabd0",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},a=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);