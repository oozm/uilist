var W=Object.defineProperty,X=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var N=(u,s,a)=>s in u?W(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,$=(u,s)=>{for(var a in s||(s={}))U.call(s,a)&&N(u,a,s[a]);if(w)for(var a of w(s))Z.call(s,a)&&N(u,a,s[a]);return u},x=(u,s)=>X(u,z(s));var V=(u,s,a)=>new Promise((C,g)=>{var b=f=>{try{p(a.next(f))}catch(_){g(_)}},h=f=>{try{p(a.throw(f))}catch(_){g(_)}},p=f=>f.done?C(f.value):Promise.resolve(f.value).then(b,h);p((a=a.apply(u,s)).next())});import{d as j,f as q,a3 as H,h as J,U as i,V as y,k as D,Z as d,u as o,Y as K,S as Q,F as L,aa as T,$ as v,ac as I,_ as Y,X as M,G as F}from"./vue-oIE3a0W0.js";import{p as ee,u as ae,W as ne,ad as te,c as se,an as re,ax as ce,al as le,aY as ue,h as G}from"./entry/index-DiyLfboN.js";import{aW as oe,n as ie,aX as fe,aY as me,k as de}from"./antd-F6y9DdBf.js";const he={key:1},pe={key:1},ye=j({name:"LayoutBreadcrumb",__name:"Breadcrumb",props:{theme:ee.oneOf(["dark","light"])},setup(u){const s=q([]),{currentRoute:a}=H(),{prefixCls:C}=ae("layout-breadcrumb"),{getShowBreadCrumbIcon:g}=ne(),b=te(),{t:h}=se();J(()=>V(this,null,function*(){var P,R,S,A;if(a.value.name===re)return;const l=yield ce(),t=a.value.matched,n=t==null?void 0:t[t.length-1];let e=a.value.path;n&&((P=n==null?void 0:n.meta)!=null&&P.currentActiveMenu)&&(e=n.meta.currentActiveMenu);const r=le(l,e),c=l.filter(O=>O.path===r[0]),m=p(c,r);if(!m||m.length===0){s.value=[];return}const k=f(m);(R=a.value.meta)!=null&&R.currentActiveMenu&&!((S=a.value.meta)!=null&&S.hideBreadcrumb)&&k.push(x($({},a.value),{name:((A=a.value.meta)==null?void 0:A.title)||a.value.name})),s.value=k}));function p(l,t){const n=[];return l.forEach(e=>{var r,c;t.includes(e.path)&&n.push(x($({},e),{name:((r=e.meta)==null?void 0:r.title)||e.name})),(c=e.children)!=null&&c.length&&n.push(...p(e.children,t))}),n}function f(l){return ue(l,t=>{const{meta:n,name:e}=t;if(!n)return!!e;const{title:r,hideBreadcrumb:c,hideMenu:m}=n;return!(!r||c||m)}).filter(t=>{var n;return!((n=t.meta)!=null&&n.hideBreadcrumb)})}function _(l){const{children:t,redirect:n,meta:e}=l;if(!(t!=null&&t.length&&!n)&&!(e!=null&&e.carryParam))if(n&&de(n))b(n);else{let r="";l.path?r=l.path:r="",r=/^\//.test(r)?r:`/${r}`,b(r)}}function E(l,t){return l.indexOf(t)!==l.length-1}function B(l){var t;return l.icon||((t=l.meta)==null?void 0:t.icon)}return(l,t)=>{const n=Q("router-link");return i(),y("div",{class:K([o(C),`${o(C)}--${u.theme}`])},[D(o(oe),null,{default:d(()=>[(i(!0),y(L,null,T(s.value,e=>{var r;return i(),v(o(me),{key:e.name},I({default:d(()=>[o(g)&&B(e)?(i(),v(G,{key:0,icon:B(e)},null,8,["icon"])):Y("",!0),E(s.value,e)?(i(),v(n,{key:2,to:"",onClick:c=>_(e)},{default:d(()=>[F(M(o(h)(e.meta.title||e.name)),1)]),_:2},1032,["onClick"])):(i(),y("span",he,M(o(h)(e.meta.title||e.name)),1))]),_:2},[e.children&&!((r=e.meta)!=null&&r.hideChildrenInMenu)?{name:"overlay",fn:d(()=>[D(o(ie),null,{default:d(()=>[(i(!0),y(L,null,T(e.children,c=>(i(),v(o(fe),{key:c.name},{default:d(()=>{var m;return[o(g)&&B(c)?(i(),v(G,{key:0,icon:B(c)},null,8,["icon"])):Y("",!0),E(s.value,c)?(i(),v(n,{key:2,to:"",onClick:k=>_(c)},{default:d(()=>{var k;return[F(M(o(h)(((k=c.meta)==null?void 0:k.title)||c.name)),1)]}),_:2},1032,["onClick"])):(i(),y("span",pe,M(o(h)(((m=c.meta)==null?void 0:m.title)||c.name)),1))]}),_:2},1024))),128))]),_:2},1024)]),key:"0"}:void 0]),1024)}),128))]),_:1})],2)}}});export{ye as default};