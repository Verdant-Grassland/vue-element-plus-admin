import{l as o,aB as p,u as _,m as i,p as l}from"./vue-chunks-OJdMbo6i.js";const h=o({__name:"Redirect",setup(u){const{currentRoute:c,replace:a}=p(),{params:e,query:s}=_(c),{path:r,_redirect_type:n="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(n==="name"?{name:t,query:s,params:e}:{path:t.startsWith("/")?t:"/"+t,query:s}),(m,d)=>(i(),l("div"))}});export{h as default};
