import{u as r,c as d,_ as l}from"./entry/index-CC-CuoC4.js";import{e as m}from"./index-BS3arxPV.js";import{d as p,c as u,U as h,V as f,W as C,X as g,k,ab as b,u as t,Y as y}from"./vue-oIE3a0W0.js";import{ae as _}from"./antd-_31jc7HV.js";import"./useContentViewHeight-CQ_LNo0w.js";import"./useWindowSizeFn-vjwldKE9.js";import"./useSortable-DiAYop1V.js";const v=p({name:"SwitchItem",__name:"SwitchItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(a){const e=a,{prefixCls:o}=r("setting-switch-item"),{t:n}=d(),i=u(()=>e.def?{checked:e.def}:{}),c=s=>{e.event&&m(e.event,s)};return(s,B)=>(h(),f("div",{class:y(t(o))},[C("span",null,g(a.title),1),k(t(_),b(i.value,{onChange:c,disabled:a.disabled,checkedChildren:t(n)("layout.setting.on"),unCheckedChildren:t(n)("layout.setting.off")}),null,16,["disabled","checkedChildren","unCheckedChildren"])],2))}}),z=l(v,[["__scopeId","data-v-da8a343f"]]);export{z as default};