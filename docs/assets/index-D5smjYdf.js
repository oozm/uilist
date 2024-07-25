var R=Object.defineProperty,V=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var S=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&S(e,n,t[n]);if(I)for(var n of I(t))K.call(t,n)&&S(e,n,t[n]);return e},C=(e,t)=>V(e,z(t));import{u as L,q as U,K as F,aa as G,o as H,w as Q}from"./entry/index-C8_ims1X.js";import{d as T,f as P,c as g,u as s,k as d,ab as X,i as Y,I as Z,g as ee}from"./vue-oIE3a0W0.js";import{aJ as _,q as b,U as te}from"./antd-F6y9DdBf.js";function se(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Y(e)}const ne={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},re=T({name:"Description",props:ne,emits:["register"],setup(e,{slots:t,emit:n}){const f=P(null),{prefixCls:O}=L("description"),l=U(),u=g(()=>o(o({},e),s(f))),y=g(()=>C(o({},s(u)),{title:void 0})),E=g(()=>!!s(u).title),M=g(()=>o({canExpand:!1},s(y).collapseOptions)),N=g(()=>o(o({},s(l)),s(y)));function W(r){f.value=o(o({},s(f)),r)}function $({label:r,labelMinWidth:p,labelStyle:a}){if(!a&&!p)return r;const c=C(o({},a),{minWidth:`${p}px `});return d("div",{style:c},[r])}function k(){const{schema:r,data:p}=s(y);return s(r).map(a=>{const{render:c,field:D,span:A,show:x,contentMinWidth:v}=a;if(x&&b(x)&&!x(p))return null;const w=()=>{var j;const i=(j=s(y))==null?void 0:j.data;if(!i)return null;const m=te(i,D);return m&&!Z(i).hasOwnProperty(D)?b(c)?c("",i):"":b(c)?c(m,i):m!=null?m:""},B=v;return d(_.Item,{label:$(a),key:D,span:A},{default:()=>{if(!v)return w();const i={minWidth:`${B}px`};return d("div",{style:i},[w()])}})}).filter(a=>!!a)}const h=()=>{let r;return d(_,X({class:`${O}`},s(N)),se(r=k())?r:{default:()=>[r]})},q=()=>{const r=e.useCollapse?h():d("div",null,[h()]);if(!e.useCollapse)return r;const{canExpand:p,helpMessage:a}=s(M),{title:c}=s(u);return d(G,{title:c,canExpand:p,helpMessage:a},{default:()=>r,action:()=>F(t,"action")})};return n("register",{setDescProps:W}),()=>s(E)?q():h()}});function ue(e){if(!ee())throw new Error("useDescription() can only be used inside setup() or functional components!");const t=P(null),n=P(!1);function f(l){s(n)&&H()||(t.value=l,e&&l.setDescProps(e),n.value=!0)}return[f,{setDescProps:l=>{var u;(u=s(t))==null||u.setDescProps(l)}}]}const pe=Q(re);export{pe as D,ue as u};
