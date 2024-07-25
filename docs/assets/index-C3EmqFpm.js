var ie=Object.defineProperty,re=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var K=(i,e,a)=>e in i?ie(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,B=(i,e)=>{for(var a in e||(e={}))le.call(e,a)&&K(i,a,e[a]);if(q)for(var a of q(e))ue.call(e,a)&&K(i,a,e[a]);return i},X=(i,e)=>re(i,ce(e));var Z=(i,e,a)=>new Promise((r,g)=>{var w=d=>{try{f(a.next(d))}catch(p){g(p)}},b=d=>{try{f(a.throw(d))}catch(p){g(p)}},f=d=>d.done?r(d.value):Promise.resolve(d.value).then(w,b);f((a=a.apply(i,e)).next())});import{u as te,a9 as de,_ as ge,$ as fe,p as h,a5 as pe,a6 as he,w as oe}from"./entry/index-CBn2Bmt9.js";import{d as M,U as z,V as U,W as E,ad as C,Y as V,u as s,af as G,f as P,y as I,w as L,H as me,K as ye,ag as ve,p as be,c as y,$ as O,ac as He,aa as ke,Z as D,ai as _e,aj as we,F as Re,G as ne,X as se,ab as Fe,_ as Y,k as N,l as J}from"./vue-oIE3a0W0.js";import{u as je}from"./useContentViewHeight-D4LlqCm1.js";import{k as Se,ak as Ce,aF as $e,o as Q,aH as xe,R as Te}from"./antd-CPM_kc3N.js";import{o as Be,u as W,D as A}from"./index-BP7Z2zzV.js";import{u as ze}from"./useWindowSizeFn-BJIv6kU7.js";import{G as ee,D as Pe,S as De}from"./siteSetting-BSGR9S7Z.js";const Ee=M({name:"PageFooter",inheritAttrs:!1,__name:"PageFooter",setup(i){const{prefixCls:e}=te("page-footer"),{getCalcContentWidth:a}=de();return(r,g)=>(z(),U("div",{class:V(s(e)),style:G({width:s(a)})},[E("div",{class:V(`${s(e)}__left`)},[C(r.$slots,"left",{},void 0,!0)],2),C(r.$slots,"default",{},void 0,!0),E("div",{class:V(`${s(e)}__right`)},[C(r.$slots,"right",{},void 0,!0)],2)],6))}}),ae=ge(Ee,[["__scopeId","data-v-c0f09219"]]);function Ve(i,e,a,r,g=0,w=P(0)){const b=P(null),{footerHeightRef:f}=je();let d={useLayoutFooter:!0};const p=l=>{d=l};function $(){I(()=>{R()})}function H(l,F="all"){var _,j,S,x;function c(o){return Number(o.replace(/[^\d]/g,""))}let u=0;const m="0px";if(l){const o=getComputedStyle(l),t=c((_=o==null?void 0:o.marginTop)!=null?_:m),n=c((j=o==null?void 0:o.marginBottom)!=null?j:m),v=c((S=o==null?void 0:o.paddingTop)!=null?S:m),T=c((x=o==null?void 0:o.paddingBottom)!=null?x:m);F==="all"?(u+=t,u+=n,u+=v,u+=T):F==="top"?(u+=t,u+=v):(u+=n,u+=T)}return u}function k(l){return l==null?null:l instanceof HTMLDivElement?l:l.$el}function R(){return Z(this,null,function*(){var x;if(!i.value)return;yield I();const l=k(s(e));if(!l)return;const{bottomIncludeBody:F}=fe(l);let c=0;a.forEach(o=>{var t,n;c+=(n=(t=k(s(o)))==null?void 0:t.offsetHeight)!=null?n:0});let u=(x=H(l))!=null?x:0;r.forEach(o=>{u+=H(k(s(o)))});let m=0;function _(o,t){if(o&&t){const n=o.parentElement;n&&(Se(t)?n.classList.contains(t)?m+=H(n,"bottom"):(m+=H(n,"bottom"),_(n,t)):Ce(t)&&t>0&&(m+=H(n,"bottom"),_(n,--t)))}}me(g)?_(l,s(g)):_(l,g);let j=F-s(f)-s(w)-c-u-m;const S=()=>{var o;(o=d.elements)==null||o.forEach(t=>{var n,v;j+=(v=(n=k(s(t)))==null?void 0:n.offsetHeight)!=null?v:0})};d.useLayoutFooter&&s(f)>0,S(),b.value=j})}return Be(()=>{I(()=>{R()})}),ze(()=>{R()},{wait:50,immediate:!0}),L(()=>[f.value],()=>{R()},{flush:"post",immediate:!0}),{redoHeight:$,setCompensation:p,contentHeight:b}}const Ie=M({name:"PageWrapper",inheritAttrs:!1,__name:"PageWrapper",props:{title:h.string,dense:h.bool,ghost:h.bool,headerSticky:h.bool,headerStyle:Object,content:h.string,contentStyle:{type:Object},contentBackground:h.bool,contentFullHeight:h.bool.def(!1),contentClass:h.string,fixedHeight:h.bool,upwardSpace:h.oneOfType([h.number,h.string]).def(0)},setup(i){const e=i,a=ye(),r=ve(),g=P(null),w=P(null),b=P(null),f=P(null),{height:d}=pe(g),{prefixCls:p}=te("page-wrapper");be(he,y(()=>e.fixedHeight));const $=y(()=>e.contentFullHeight),H=y(()=>e.upwardSpace),{redoHeight:k,setCompensation:R,contentHeight:l}=Ve($,g,[w,f],[b],H),F=$e(k,50);R({useLayoutFooter:!0,elements:[f]});const c=y(()=>{var t;return[p,{[`${p}--dense`]:e.dense},(t=a.class)!=null?t:{}]}),u=y(()=>{const{contentFullHeight:t,fixedHeight:n}=e;return B({},t&&n?{height:"100%"}:{})}),m=y(()=>{const{headerSticky:t}=e;return t?B({position:"sticky",top:0,zIndex:99},e.headerStyle):{}}),_=y(()=>e.content||(r==null?void 0:r.headerContent)||e.title||S.value.length),j=y(()=>(r==null?void 0:r.leftFooter)||(r==null?void 0:r.rightFooter)),S=y(()=>Object.keys(Q(r,"default","leftFooter","rightFooter","headerContent"))),x=y(()=>{const{contentFullHeight:t,contentStyle:n,fixedHeight:v}=e;if(!t)return B({},n);const T=`${s(l)}px`;return B(X(B({},n),{minHeight:T}),v?{height:T}:{})}),o=y(()=>{const{contentBackground:t,contentClass:n}=e;return[`${p}-content`,n,{[`${p}-content-bg`]:t}]});return L(()=>[j.value],()=>{k()},{flush:"post",immediate:!0}),L(d,()=>{const{contentFullHeight:t,fixedHeight:n}=e;t&&n&&F()}),(t,n)=>(z(),U("div",{class:V(c.value),style:G(u.value),ref_key:"wrapperRef",ref:g},[_.value?(z(),O(s(xe),Fe({key:0,ghost:i.ghost,title:i.title},s(Q)(t.$attrs,"class"),{style:m.value,ref_key:"headerRef",ref:w}),He({default:D(()=>[i.content?(z(),U(Re,{key:0},[ne(se(i.content),1)],64)):C(t.$slots,"headerContent",{key:1})]),_:2},[ke(S.value,v=>({name:v,fn:D(T=>[C(t.$slots,v,_e(we(T||{})))])}))]),1040,["ghost","title","style"])):Y("",!0),E("div",{class:V(["overflow-hidden",o.value]),style:G(x.value),ref_key:"contentRef",ref:b},[C(t.$slots,"default")],6),j.value?(z(),O(ae,{key:1,ref_key:"footerRef",ref:f},{left:D(()=>[C(t.$slots,"leftFooter")]),right:D(()=>[C(t.$slots,"rightFooter")]),_:3},512)):Y("",!0)],6))}});oe(ae);const Ne=oe(Ie);var We={pkg:{dependencies:{"@ant-design/icons-vue":"^7.0.1","@iconify/iconify":"^3.1.1","@logicflow/core":"^1.2.26","@logicflow/extension":"^1.2.26","@vue/shared":"^3.4.25","@vueuse/core":"^10.9.0","@zhaojs/hooks":"workspace:*","@zxcvbn-ts/core":"^3.0.4","ant-design-vue":"^4.2.1",axios:"^1.6.8",codemirror:"^5.65.16",cropperjs:"^1.6.2","crypto-js":"^4.1.1",dayjs:"^1.11.10",html2canvas:"^1.4.1","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.2",pinia:"2.1.7","pinia-plugin-persistedstate":"^3.2.1","print-js":"^1.6.0",qrcode:"^1.5.3","resize-observer-polyfill":"^1.5.1",showdown:"^2.1.0",sortablejs:"^1.15.2",tinymce:"^5.10.9",unocss:"^0.59.4",uuid:"^9.0.0",vditor:"^3.10.4",vue:"^3.4.25","vue-i18n":"^9.13.1","vue-json-pretty":"^2.4.0","vue-router":"^4.3.2","vue-types":"^5.1.1",vuedraggable:"^4.1.0","xe-utils":"^3.5.25"},devDependencies:{"@commitlint/cli":"^19.3.0","@commitlint/config-conventional":"^19.2.2","@iconify/json":"^2.2.203","@purge-icons/generated":"^0.10.0","@types/codemirror":"^5.60.15","@types/crypto-js":"^4.2.2","@types/lodash-es":"^4.17.12","@types/mockjs":"^1.0.10","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/showdown":"^2.0.6","@types/sortablejs":"^1.15.8","@types/uuid":"^9.0.1","@vue/compiler-sfc":"^3.4.25","@vue/test-utils":"^2.4.5","@zhaojs/eslint-config":"workspace:*","@zhaojs/stylelint-config":"workspace:*","@zhaojs/ts-config":"workspace:*","@zhaojs/types":"workspace:*","@zhaojs/vite-config":"workspace:*","conventional-changelog-cli":"^4.1.0","cross-env":"^7.0.3","lint-staged":"15.2.2",prettier:"^3.2.5","prettier-plugin-packagejson":"^2.5.0",rimraf:"^5.0.5",turbo:"^1.13.2",typescript:"^5.4.5",unbuild:"^2.0.0",vite:"^5.2.10","vite-plugin-mock":"^2.9.6","vite-plugin-vue-devtools":"^7.2.0","vue-tsc":"^2.0.14"},name:"uilist-site",version:"1.0.0"},lastBuildTime:"2024-07-25 09:56:21"};const Ae={class:"flex justify-between items-center"},Ue={class:"flex-1"},Ge=["href"],Je=M({__name:"index",setup(i){const{pkg:e,lastBuildTime:a}=We,{dependencies:r,devDependencies:g,name:w,version:b}=e,f=[],d=[],p=c=>u=>J(Te,{color:c},()=>u),$=c=>u=>J("a",{href:u,target:"_blank"},c),H=[{label:"版本",field:"version",render:p("blue")},{label:"最后编译时间",field:"lastBuildTime",render:p("blue")},{label:"文档地址",field:"doc",render:$("文档地址")},{label:"预览地址",field:"preview",render:$("预览地址")},{label:"Github",field:"github",render:$("Github")}],k={version:b,lastBuildTime:a,doc:Pe,preview:De,github:ee};Object.keys(r).forEach(c=>{f.push({field:c,label:c})}),Object.keys(g).forEach(c=>{d.push({field:c,label:c})});const[R]=W({title:"生产环境依赖",data:r,schema:f,column:3}),[l]=W({title:"开发环境依赖",data:g,schema:d,column:3}),[F]=W({title:"项目信息",data:k,schema:H,column:2});return(c,u)=>(z(),O(s(Ne),{title:"关于"},{headerContent:D(()=>[E("div",Ae,[E("span",Ue,[E("a",{href:s(ee),target:"_blank"},se(s(w)),9,Ge),ne(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ")])])]),default:D(()=>[N(s(A),{onRegister:s(F),class:"enter-y"},null,8,["onRegister"]),N(s(A),{onRegister:s(R),class:"my-4 enter-y"},null,8,["onRegister"]),N(s(A),{onRegister:s(l),class:"enter-y"},null,8,["onRegister"])]),_:1}))}});export{Je as default};
