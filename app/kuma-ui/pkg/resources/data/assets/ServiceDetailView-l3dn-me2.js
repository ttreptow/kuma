import{d as V,a as p,o as e,b as i,w as t,X as C,t as r,m as B,T as d,f as s,e as a,p as T,c,F as b,aw as D}from"./index-Eji0C-Q5.js";import{E as N}from"./ErrorBlock-tZ_qs6LA.js";import{_ as P}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-X5ne7YO2.js";import{S as $}from"./StatusBadge-3mjZmol0.js";import{T as R}from"./TagList-iuTnSeqp.js";import{T as f}from"./TextWithCopyButton-CMioPVeB.js";import"./index-FZCiQto1.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-xZZ4Psen.js";import"./CopyButton-ULULAS88.js";const A={key:0},E={key:3,class:"columns"},F={key:1,class:"columns"},J=V({__name:"ServiceDetailView",props:{data:{}},setup(h){const n=h;return(K,S)=>{const k=p("DataSource"),g=p("KCard"),v=p("AppView"),w=p("RouteView");return e(),i(w,{name:"service-detail-view",params:{mesh:"",service:""}},{default:t(({can:x,route:m,t:o})=>[a(v,null,{default:t(()=>[a(g,null,{default:t(()=>{var _,u;return[!x("use gateways ui")&&n.data.serviceType==="external"?(e(),c("div",A,[a(k,{src:`/meshes/${m.params.mesh}/external-services/for/${m.params.service}`},{default:t(({data:l,error:y})=>[y?(e(),i(N,{key:0,error:y},null,8,["error"])):l===void 0?(e(),i(P,{key:1})):l===null?(e(),i(C,{key:2,"data-testid":"no-matching-external-service"},{title:t(()=>[B("p",null,r(o("services.detail.no_matching_external_service",{name:m.params.service})),1)]),_:2},1024)):(e(),c("div",E,[a(d,null,{title:t(()=>[s(r(o("http.api.property.address")),1)]),body:t(()=>[a(f,{text:l.networking.address},null,8,["text"])]),_:2},1024),s(),l.tags!==null?(e(),i(d,{key:0},{title:t(()=>[s(r(o("http.api.property.tags")),1)]),body:t(()=>[a(R,{tags:l.tags},null,8,["tags"])]),_:2},1024)):T("",!0)]))]),_:2},1032,["src"])])):(e(),c("div",F,[a(d,null,{title:t(()=>[s(r(o("http.api.property.status")),1)]),body:t(()=>[a($,{status:n.data.status},null,8,["status"])]),_:2},1024),s(),a(d,null,{title:t(()=>[s(r(o("http.api.property.address")),1)]),body:t(()=>[n.data.addressPort?(e(),i(f,{key:0,text:n.data.addressPort},null,8,["text"])):(e(),c(b,{key:1},[s(r(o("common.detail.none")),1)],64))]),_:2},1024),s(),a(D,{online:((_=n.data.dataplanes)==null?void 0:_.online)??0,total:((u=n.data.dataplanes)==null?void 0:u.total)??0},{title:t(()=>[s(r(o("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])]))]}),_:2},1024)]),_:2},1024)]),_:1})}}});export{J as default};
