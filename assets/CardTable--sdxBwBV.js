var f=(_,d,o)=>new Promise((l,p)=>{var c=t=>{try{s(o.next(t))}catch(m){p(m)}},i=t=>{try{s(o.throw(t))}catch(m){p(m)}},s=t=>t.done?l(t.value):Promise.resolve(t.value).then(c,i);s((o=o.apply(_,d)).next())});import{_ as v}from"./ContentWrap.vue_vue_type_script_setup_true_lang-lwaJrPd7.js";import{c as b}from"./index-gA3Zwonr.js";import{_ as C}from"./Table.vue_vue_type_script_lang-Nheoe9KY.js";import{b as k}from"./index-uBazA9t-.js";/* empty css                *//* empty css                   */import{p as u,n as T}from"./element-plus-G-zvxjZl.js";import{l as y,a as x,m as L,W as B,R as n,O as r,q as e,U as g,u as a,V as h}from"./vue-chunks-OJdMbo6i.js";/* empty css                *//* empty css                  *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                        */import"./el-radio-button-FGX_zSyv.js";/* empty css                         *//* empty css                  */import"./index-VaZNcyET.js";const D={class:"flex cursor-pointer"},V={class:"pr-16px"},w=["src"],z={class:"mb-12px font-700 font-size-16px"},N={class:"line-clamp-3 font-size-12px"},E={class:"flex justify-center items-center"},I=["onClick"],R=["onClick"],tt=y({__name:"CardTable",setup(_){const{t:d}=b(),o=x(!0);let l=x([]);(i=>f(this,null,function*(){const s=yield k(i||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{o.value=!1});s&&(l.value=s.data.list)}))();const c=i=>{};return(i,s)=>(L(),B(a(v),{title:a(d)("tableDemo.cardTable")},{default:n(()=>[r(a(C),{columns:[],data:a(l),loading:o.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:n(t=>[e("div",D,[e("div",V,[e("img",{src:t.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,w)]),e("div",null,[e("div",z,g(t.name),1),e("div",N,g(t.desc),1)])])]),"content-footer":n(t=>[e("div",E,[e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[r(a(u),{underline:!1},{default:n(()=>[h("操作一")]),_:1})],8,I),r(a(T),{direction:"vertical"}),e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[r(a(u),{underline:!1},{default:n(()=>[h("操作二")]),_:1})],8,R)])]),_:1},8,["data","loading"])]),_:1},8,["title"]))}});export{tt as default};
