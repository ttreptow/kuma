import{ak as u}from"./index-baa571c4.js";function c(e){return e.length===0?void 0:e[e.length-1].status.lastUpdateTime}function f(e){var i;const a=u((i=e.dataplaneInsight)==null?void 0:i.subscriptions);if(e.dataplane.networking.gateway)return{status:a?"online":"offline",reason:[]};const s=e.dataplane.networking.inbound??[],r=s.filter(t=>t.health&&!t.health.ready).map(t=>`Inbound on port ${t.port} is not ready (kuma.io/service: ${t.tags["kuma.io/service"]})`);let n;switch(!0){case s.length===0:n="online";break;case r.length===s.length:n="offline";break;case r.length>0:n="partially_degraded";break;default:n=a?"online":"offline"}return{status:n,reason:r}}function p(e){let a=[];const s="=",{gateway:r,inbound:n}=e.dataplane.networking;n&&(a=n.flatMap(t=>Object.entries(t.tags)).map(([t,o])=>`${t}${s}${o}`)),r&&(a=Object.entries(r.tags).map(([t,o])=>`${t}${s}${o}`));const i=Array.from(new Set(a));return i.sort((t,o)=>t.localeCompare(o)),i.map(t=>{const[o,l]=t.split(s);return{label:o,value:l}})}export{c as a,p as b,f as g};
