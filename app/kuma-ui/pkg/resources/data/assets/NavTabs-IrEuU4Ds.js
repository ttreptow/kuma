import{d as l,A as i,I as n,a as p,o as _,b as N,$ as f,E as b,w as u,t as v,f as h,e as k,q as x,ai as T,_ as y}from"./index-Eji0C-Q5.js";const C=l({__name:"NavTabs",props:{tabs:{type:Array,required:!0}},setup(m){const o=i(),a=m,c=n(()=>a.tabs.map(t=>({title:t.title,hash:"#"+t.routeName}))),d=n(()=>{const t=o.matched.map(e=>e.meta.module??"").filter(e=>e!=="");t.reverse();const s=a.tabs.find(e=>!!(e.routeName===o.name||t.includes(e.module)));return"#"+((s==null?void 0:s.routeName)??a.tabs[0].routeName)});return(t,s)=>{const r=p("RouterLink");return _(),N(x(T),{tabs:c.value,"model-value":d.value,"hide-panels":"",class:"nav-tabs","data-testid":"nav-tabs"},f({_:2},[b(a.tabs,e=>({name:`${e.routeName}-anchor`,fn:u(()=>[k(r,{"data-testid":`${e.routeName}-tab`,to:{name:e.routeName}},{default:u(()=>[h(v(e.title),1)]),_:2},1032,["data-testid","to"])])}))]),1032,["tabs","model-value"])}}}),R=y(C,[["__scopeId","data-v-90d45b39"]]);export{R as N};
