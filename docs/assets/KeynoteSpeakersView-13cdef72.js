import{b,d as f,a as g,u as v,e as y,o as i,c,n as h,f as a,r as k,g as u,h as w,i as A,w as j,j as t,F as S,k as H,t as l,l as p,m as U,_ as C}from"./index-70a60841.js";const P=b({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:f(String),default:"solid"}}),B=g({name:"ElDivider"}),L=g({...B,props:P,setup(_){const n=_,o=v("divider"),r=y(()=>o.cssVar({"border-style":n.borderStyle}));return(e,d)=>(i(),c("div",{class:h([a(o).b(),a(o).m(e.direction)]),style:w(a(r)),role:"separator"},[e.$slots.default&&e.direction!=="vertical"?(i(),c("div",{key:0,class:h([a(o).e("text"),a(o).is(e.contentPosition)])},[k(e.$slots,"default")],2)):u("v-if",!0)],6))}});var M=A(L,[["__file","divider.vue"]]);const R=j(M);const I=""+new URL("Bingsheng He-5cce3933.jpg",import.meta.url).href,K=""+new URL("Heming Cui-8c07c797.jpg",import.meta.url).href,N=""+new URL("Hironori_Washizaki-273b1d6b.jpg",import.meta.url).href,z=""+new URL("Jun_Sun-331a2117.jpg",import.meta.url).href,x=""+new URL("Marco Canini-3b1c497b.jpg",import.meta.url).href,W=""+new URL("Mohamed WAHIB-0b2556db.jpg",import.meta.url).href,J=""+new URL("Stefanos Kaxiras-15e5d149.jpg",import.meta.url).href,V=""+new URL("sun_jun-e84f040d.jpg",import.meta.url).href,D=""+new URL("globe-ec69cc7c.svg",import.meta.url).href,E=""+new URL("google-b60c38d2.svg",import.meta.url).href,$={class:"keynote-speakers"},F={class:"speaker-content"},T={class:"speaker-photo"},Y=["src","alt"],q={class:"icon"},O=["href"],Q=["href"],G={class:"speaker-info"},X={class:"speaker-name"},Z={class:"bolder"},ee={class:"italic"},te={class:"speaker-bio"},se=g({__name:"KeynoteSpeakersView",setup(_){const n=[{id:"Stefanos_Kaxiras",name:"Stefanos Kaxiras, Uppsala University",photo:"Stefanos Kaxiras.jpg",title:"",keynote:"",abstract:"",bio:"",personalPage:"https://www.uu.se/en/contact-and-organisation/staff?query=N9-1645",academicPage:"https://scholar.google.com/citations?user=-FYgbQwAAAAJ&hl=en"},{id:"Bingsheng_He",name:"Bingsheng He, National University of Singapore",photo:"Bingsheng He.jpg",title:"",keynote:"",abstract:"",bio:"",personalPage:"https://www.comp.nus.edu.sg/~hebs/",academicPage:"https://scholar.google.com/citations?user=_S92MLYAAAAJ&hl=zh-CN"},{id:"Heming_Cui",name:"Heming Cui, The University of Hong Kong",photo:"Heming Cui.jpg",title:"",keynote:"",abstract:"",bio:"",personalPage:"https://i.cs.hku.hk/~heming/",academicPage:"https://scholar.google.com/citations?user=lW9bpFIAAAAJ&hl=zh-CN"},{id:"Marco_Canini",name:"Marco Canini, King Abdullah University of Science and Technology",photo:"Marco Canini.jpg",title:"",keynote:"",abstract:"",bio:"",personalPage:"https://mcanini.github.io/",academicPage:"https://scholar.google.com/citations?user=c-rwMUkAAAAJ&hl=zh-CN"},{id:"Mohamed_WAHIB",name:"Mohamed WAHIB, RIKEN",photo:"Mohamed WAHIB.jpg",title:"",keynote:"",abstract:"",bio:"",personalPage:"https://www.r-ccs.riken.jp/en/research/labs/hpaisrt/",academicPage:"https://scholar.google.com/citations?user=C3fmEegAAAAJ&hl=en"}],o=r=>new URL(Object.assign({"../assets/image/photos/Bingsheng He.jpg":I,"../assets/image/photos/Heming Cui.jpg":K,"../assets/image/photos/Hironori_Washizaki.jpg":N,"../assets/image/photos/Jun_Sun.jpg":z,"../assets/image/photos/Marco Canini.jpg":x,"../assets/image/photos/Mohamed WAHIB.jpg":W,"../assets/image/photos/Stefanos Kaxiras.jpg":J,"../assets/image/photos/sun_jun.jpg":V})[`../assets/image/photos/${r}`],self.location).href;return(r,e)=>{const d=R;return i(),c("div",$,[e[7]||(e[7]=t("h1",{class:"title1 font-merri"},"Invited Speakers",-1)),(i(),c(S,null,H(n,(s,m)=>t("div",{key:m,class:"speaker-section"},[t("div",F,[t("div",T,[t("img",{src:o(s.photo),alt:s.name},null,8,Y),t("div",q,[t("a",{href:s.personalPage,target:"_blank"},e[0]||(e[0]=[t("img",{class:"icon-item",src:D,alt:""},null,-1)]),8,O),t("a",{href:s.academicPage,target:"_blank"},e[1]||(e[1]=[t("img",{style:{"margin-left":"5px"},class:"icon-item",src:E,alt:""},null,-1)]),8,Q)])]),t("div",G,[t("h2",X,l(s.name),1),t("p",null,[e[2]||(e[2]=t("span",{class:"bold"},"Speech:",-1)),e[3]||(e[3]=p()),t("span",Z,l(s.keynote),1)]),t("p",null,[e[4]||(e[4]=t("span",{class:"bold"},"Abstract:",-1)),e[5]||(e[5]=p()),t("span",ee,l(s.abstract),1)])])]),t("div",te,[t("p",null,[e[6]||(e[6]=t("span",{class:"bold"},"Bio:",-1)),p(" "+l(s.bio),1)])]),m<n.length-1?(i(),U(d,{key:0})):u("",!0)])),64))])}}});const ae=C(se,[["__scopeId","data-v-0b475933"]]);export{ae as default};
