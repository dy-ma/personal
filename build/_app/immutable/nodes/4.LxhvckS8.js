import{a as C,t as H}from"../chunks/disclose-version.DT-AkbyV.js";import{c as U,b as W,h as g,e as k,N as X,C as F,T as Y,$ as K,a0 as O,d as z,f as N,a1 as A,a2 as $,W as q,a3 as Z,A as D,a4 as j,a5 as ee,a6 as ae,m as re,x as L,a7 as ne,a8 as te,R as le,a9 as se,aa as ie,i as fe,O as ue,J as ve,g as ce,ab as oe,ac as _e,ad as de,p as G,r as R,ae as he,l as P}from"../chunks/runtime.COEaKkZJ.js";import{s as pe}from"../chunks/render.DgyJIFtv.js";import{h as me}from"../chunks/svelte-head.9lqHNe_l.js";import{s as ge}from"../chunks/attributes.BjNpuMcq.js";let S=null;function xe(n,e){return e}function ye(n,e,a,t){for(var c=[],i=e.length,f=0;f<i;f++)te(e[f].e,c,!0);var h=i>0&&c.length===0&&a!==null;if(h){var o=a.parentNode;le(o),o.append(a),t.clear(),y(n,e[0].prev,e[i-1].next)}se(c,()=>{for(var _=0;_<i;_++){var r=e[_];h||(t.delete(r.k),y(n,r.prev,r.next)),ie(r.e,!h)}})}function Ee(n,e,a,t,c,i=null){var f=n,h={flags:e,items:new Map,first:null};{var o=n;f=g?k(fe(o)):o.appendChild(U())}g&&X();var _=null,r=!1;W(()=>{var d=a(),l=F(d)?d:d==null?[]:Y(d),v=l.length;if(r&&v===0)return;r=v===0;let s=!1;if(g){var b=f.data===K;b!==(v===0)&&(f=O(),k(f),z(!1),s=!0)}if(g){for(var x=null,u,p=0;p<v;p++){if(N.nodeType===8&&N.data===ue){f=N,s=!0,z(!1);break}var T=l[p],E=t(T,p);u=B(N,h,x,null,T,E,p,c,e),h.items.set(E,u),x=u}v>0&&k(O())}if(!g){var m=ve;be(l,h,f,c,e,(m.f&A)!==0,t)}i!==null&&(v===0?_?$(_):_=q(()=>i(f)):_!==null&&Z(_,()=>{_=null})),s&&z(!0)}),g&&(f=N)}function be(n,e,a,t,c,i,f){var h=n.length,o=e.items,_=e.first,r=_,d,l=null,v=[],s=[],b,x,u,p;for(p=0;p<h;p+=1){if(b=n[p],x=f(b,p),u=o.get(x),u===void 0){var T=r?r.e.nodes_start:a;l=B(T,e,l,l===null?e.first:l.next,b,x,p,t,c),o.set(x,l),v=[],s=[],r=l.next;continue}if(Ne(u,b,p),u.e.f&A&&$(u.e),u!==r){if(d!==void 0&&d.has(u)){if(v.length<s.length){var E=s[0],m;l=E.prev;var M=v[0],w=v[v.length-1];for(m=0;m<v.length;m+=1)V(v[m],E,a);for(m=0;m<s.length;m+=1)d.delete(s[m]);y(e,M.prev,w.next),y(e,l,M),y(e,w,E),r=E,l=w,p-=1,v=[],s=[]}else d.delete(u),V(u,r,a),y(e,u.prev,u.next),y(e,u,l===null?e.first:l.next),y(e,l,u),l=u;continue}for(v=[],s=[];r!==null&&r.k!==x;)(i||!(r.e.f&A))&&(d??(d=new Set)).add(r),s.push(r),r=r.next;if(r===null)continue;u=r}v.push(u),l=u,r=u.next}if(r!==null||d!==void 0){for(var I=d===void 0?[]:Y(d);r!==null;)(i||!(r.e.f&A))&&I.push(r),r=r.next;var J=I.length;if(J>0){var Q=h===0?a:null;ye(e,I,Q,o)}}D.first=e.first&&e.first.e,D.last=l&&l.e}function Ne(n,e,a,t){j(n.v,e),n.i=a}function B(n,e,a,t,c,i,f,h,o){var _=S;try{var r=(o&ee)!==0,d=(o&ae)===0,l=r?d?re(c):L(c):c,v=o&ne?L(f):f,s={i:v,v:l,k:i,a:null,e:null,prev:a,next:t};return S=s,s.e=q(()=>h(n,l,v),g),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{S=_}}function V(n,e,a){for(var t=n.next?n.next.e.nodes_start:a,c=e?e.e.nodes_start:a,i=n.e.nodes_start;i!==t;){var f=ce(i);c.before(i),i=f}}function y(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Te(n,e){var a=n.__className,t=Ae(e);g&&n.className===t?n.__className=t:(a!==t||g&&n.className!==t)&&(e==null?n.removeAttribute("class"):n.className=t,n.__className=t)}function Ae(n){return n??""}const we=!0,Oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:we},Symbol.toStringTag,{value:"Module"}));var Ie=H('<meta name="description" content="My Contact Info">'),Ce=H('<div><a target="_blank" class="svelte-7zzh40"> </a></div>'),ke=H('<div class="title svelte-7zzh40"><h1>Contacts</h1></div> <div class="container svelte-7zzh40"></div>',1);function De(n){let e=[{name:"Github",url:"https://github.com/dy-ma"},{name:"Resume",url:"https://drive.google.com/file/d/1vSSxwpA29HPdRq2Qdu4pSG2gxL6uoHNi/view?usp=sharing"},{name:"LinkedIn",url:"https://www.linkedin.com/in/dylan-mou-ang/"},{name:"Email",url:"mailto:dylanmouang@gmail.com"}];var a=ke();me(c=>{var i=Ie();de.title="Contacts",C(c,i)});var t=oe(_e(a),2);Ee(t,5,()=>e,xe,(c,i)=>{let f=()=>P(i).name,h=()=>P(i).url;var o=Ce(),_=G(o),r=G(_,!0);R(_),R(o),he(()=>{Te(o,`${"card "+f()} svelte-7zzh40`),ge(_,"href",h()),pe(r,f())}),C(c,o)}),R(t),C(n,a)}export{De as component,Oe as universal};
