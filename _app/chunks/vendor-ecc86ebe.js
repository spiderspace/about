function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function M(){return Object.create(null)}function m(t){t.forEach(v)}function I(t){return typeof t=="function"}function L(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n}function G(t){return Object.keys(t).length===0}function st(t,n,e,r){if(t){const c=z(t,n,e,r);return t[0](c)}}function z(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function ft(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function at(t,n,e,r,c,s){if(c){const o=z(n,e,r,s);t.p(o,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let g=!1;function J(){g=!0}function K(){g=!1}function P(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:P(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[a]+1;const f=a+1;e[f]=i,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);l>=i;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<o.length;i++){for(;u<s.length&&o[i].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[i],a)}}function Q(t,n){if(g){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){g&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function mt(){return k(" ")}function pt(){return k("")}function X(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t,n){for(const e in n)X(t,e,n[e])}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,r,c=!1){Z(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function T(t,n,e,r){return B(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>r(n))}function gt(t,n,e){return T(t,n,e,U)}function xt(t,n,e){return T(t,n,e,V)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>k(n),!0)}function bt(t){return tt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let x;function b(t){x=t}function E(){if(!x)throw new Error("Function called outside component initialization");return x}function kt(t){E().$$.on_mount.push(t)}function Et(t){E().$$.after_update.push(t)}function St(t,n){E().$$.context.set(t,n)}const p=[],O=[],$=[],D=[],nt=Promise.resolve();let S=!1;function et(){S||(S=!0,nt.then(F))}function A(t){$.push(t)}let N=!1;const j=new Set;function F(){if(!N){N=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];b(n),it(n.$$)}for(b(null),p.length=0;O.length;)O.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];j.has(n)||(j.add(n),n())}$.length=0}while(p.length);for(;D.length;)D.pop()();S=!1,N=!1,j.clear()}}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function At(){_={r:0,c:[],p:_}}function Nt(){_.r||m(_.c),_=_.p}function rt(t,n){t&&t.i&&(w.delete(t),t.i(n))}function jt(t,n,e,r){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function qt(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const i in o)i in l||(r[i]=1);for(const i in l)c[i]||(e[i]=l[i],c[i]=1);t[s]=l}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function vt(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function ct(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),r||A(()=>{const i=s.map(v).filter(I);o?o.push(...i):m(i),t.$$.on_mount=[]}),l.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,r,c,s,o,l=[-1]){const i=x;b(t);const u=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...q)=>{const C=q.length?q[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&lt(t,f)),y}):[],u.update(),a=!0,m(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){J();const f=Y(n.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),F()}b(i)}class Bt{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Tt(t,n=h){let e;const r=new Set;function c(l){if(L(t,l)&&(t=l,e)){const i=!d.length;for(const u of r)u[1](),d.push(u,t);if(i){for(let u=0;u<d.length;u+=2)d[u][0](d[u+1]);d.length=0}}}function s(l){c(l(t))}function o(l,i=h){const u=[l,i];return r.add(u),r.size===1&&(e=n(c)||h),l(t),()=>{r.delete(u),r.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{kt as A,H as B,Tt as C,st as D,wt as E,Q as F,at as G,_t as H,ft as I,h as J,V as K,xt as L,yt as M,dt as N,Bt as S,Y as a,X as b,gt as c,R as d,U as e,ht as f,tt as g,vt as h,zt as i,mt as j,pt as k,Mt as l,bt as m,ut as n,ct as o,qt as p,Ct as q,At as r,$t as s,k as t,jt as u,ot as v,Nt as w,rt as x,St as y,Et as z};
