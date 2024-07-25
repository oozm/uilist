var R=Object.defineProperty,V=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(e,t,s)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,r=(e,t)=>{for(var s in t||(t={}))K.call(t,s)&&M(e,s,t[s]);if(I)for(var s of I(t))L.call(t,s)&&M(e,s,t[s]);return e},C=(e,t)=>V(e,z(t));import{o as T,y as U,P as F,d as G,f as b,c as g,u as n,k as p,ab as H,i as J,I as Q,g as X}from"./vue-oIE3a0W0.js";import{u as Y,q as Z,K as ee,aa as te,o as ne,w as se}from"./entry/index-CBn2Bmt9.js";import{aI as S,q as P,U as oe}from"./antd-CPM_kc3N.js";function fe(e){let t;T(()=>{e(),U(()=>{t=!0})}),F(()=>{t&&e()})}function re(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!J(e)}const ae={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},ie=G({name:"Description",props:ae,emits:["register"],setup(e,{slots:t,emit:s}){const f=b(null),{prefixCls:O}=Y("description"),u=Z(),l=g(()=>r(r({},e),n(f))),y=g(()=>C(r({},n(l)),{title:void 0})),_=g(()=>!!n(l).title),A=g(()=>r({canExpand:!1},n(y).collapseOptions)),E=g(()=>r(r({},n(u)),n(y)));function N(o){f.value=r(r({},n(f)),o)}function W({label:o,labelMinWidth:d,labelStyle:a}){if(!a&&!d)return o;const i=C(r({},a),{minWidth:`${d}px `});return p("div",{style:i},[o])}function $(){const{schema:o,data:d}=n(y);return n(o).map(a=>{const{render:i,field:D,span:q,show:x,contentMinWidth:v}=a;if(x&&P(x)&&!x(d))return null;const w=()=>{var j;const c=(j=n(y))==null?void 0:j.data;if(!c)return null;const m=oe(c,D);return m&&!Q(c).hasOwnProperty(D)?P(i)?i("",c):"":P(i)?i(m,c):m!=null?m:""},B=v;return p(S.Item,{label:W(a),key:D,span:q},{default:()=>{if(!v)return w();const c={minWidth:`${B}px`};return p("div",{style:c},[w()])}})}).filter(a=>!!a)}const h=()=>{let o;return p(S,H({class:`${O}`},n(E)),re(o=$())?o:{default:()=>[o]})},k=()=>{const o=e.useCollapse?h():p("div",null,[h()]);if(!e.useCollapse)return o;const{canExpand:d,helpMessage:a}=n(A),{title:i}=n(l);return p(te,{title:i,canExpand:d,helpMessage:a},{default:()=>o,action:()=>ee(t,"action")})};return s("register",{setDescProps:N}),()=>n(_)?k():h()}});function me(e){if(!X())throw new Error("useDescription() can only be used inside setup() or functional components!");const t=b(null),s=b(!1);function f(u){n(s)&&ne()||(t.value=u,e&&u.setDescProps(e),s.value=!0)}return[f,{setDescProps:u=>{var l;(l=n(t))==null||l.setDescProps(u)}}]}const ge=se(ie);export{ge as D,fe as o,me as u};
