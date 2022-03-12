import{r as l,j as x,c as i,R as v,a as N}from"./vendor.9d7210f7.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};k();const b=l.exports.createContext({}),g=async e=>await(await fetch(`https://api.github.com/users/${e}`)).json(),j=async e=>await(await fetch(`https://api.github.com/users/${e}/repos`)).json(),o=x.exports.jsx,d=x.exports.jsxs,R=({children:e})=>{const[r,s]=l.exports.useState(null),[c,t]=l.exports.useState(null),[n,a]=l.exports.useState(!1),m=l.exports.useCallback(async h=>{a(!0);const p=await g(h);s(p),a(!1),r&&("login"in r||s(null))},[s,g]),u=l.exports.useCallback(()=>{s(null)},[s]);l.exports.useEffect(()=>{r&&(async()=>{const p=await j(r.login);t(p)})()},[r]);const y={repositories:c,user:r,loading:n,setUser:m,searchNewUser:u};return o(b.Provider,{value:y,children:e})},f=()=>{const e=l.exports.useContext(b);return e||console.warn("Voc\xEA deve est\xE1r dentro de um <GithubProvier/>"),e},w=({onClick:e,children:r,style:s,type:c})=>o("button",{type:c,style:s,className:C,onClick:e,children:r}),C=i`
  padding: 0.5rem 1rem;

  border: 2px solid #414141;

  border-radius: 5px;

  background-color: #414141;
  color: #f1f1f1;

  cursor: pointer;

  &:hover {
    background-color: #515151;
    border-color: #515151;
  }
`,E=({children:e})=>{const r=l.exports.useRef(),{user:s,setUser:c,loading:t}=f(),n=l.exports.useCallback(a=>{var u;a.preventDefault(),(u=r.current)!=null&&u.value&&c(r.current.value)},[c,r]);return o("div",{className:S,children:s!=null&&s.login?o("div",{className:M,children:e}):d("div",{style:{display:"flex",flexDirection:"column"},children:[t&&o("div",{children:"Carregando...."}),d("form",{onSubmit:n,className:U,children:[o("h1",{className:L,children:"GitHub"}),o("input",{className:B,placeholder:"Buscar usu\xE1rio...",ref:r}),o(w,{type:"submit",children:"Buscar"})]})]})})},S=i`
  padding: 1rem;
  width: 100%;
  min-height: 100vh;

  box-sizing: border-box;

  background-color: #3f3f3f;
  color: #fefefe;

  display: flex;
  align-items: center;
  justify-content: center;
`,U=i`
  background-color: red;

  height: 10rem;
  padding: 1rem;

  background-color: #dfdfdf;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px #222;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,L=i`
  color: #444;
`,B=i`
  padding: 0.5rem 1rem;

  border: 2px solid #414141;

  border-radius: 5px;
`,M=i`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
  justify-content: space-between;
`,P=({alt:e,url:r="https://i.stack.imgur.com/l60Hf.png"})=>o("img",{className:A,src:r,alt:e}),A=i`
  width: 250px;
  height: 250px;
  object-fit: contain;

  border-radius: 50%;
`,D=()=>{const{user:e,searchNewUser:r}=f();return d("div",{className:I,children:[o(P,{alt:`Avatar do usu\xE1rio ${e==null?void 0:e.name}`,url:e==null?void 0:e.avatar_url}),d("div",{className:O,children:[o("h1",{children:e==null?void 0:e.name}),d("h3",{children:["@",e==null?void 0:e.login]}),o("h4",{children:e==null?void 0:e.bio}),o("p",{children:e==null?void 0:e.location}),d("div",{className:G,children:[d("span",{children:["Seguidores: ",o("strong",{children:e==null?void 0:e.followers})]}),d("span",{children:["Seguindo: ",o("strong",{children:e==null?void 0:e.following})]})]}),o(w,{onClick:r,children:"Buscar Novo Usu\xE1rio"})]})]})},I=i`
  min-height: 17rem;
  width: 80%;

  border-radius: 3px;
  background-color: #c3c3c3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #3f3f3f;
  padding: 1rem;
`,O=i`
  flex: 1;
  height: 90%;

  box-sizing: border-box;

  margin: 1rem;
  padding: 1rem;

  background-color: #afafaf;
  border-radius: 3px;

  position: relative;
`,G=i`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;

  background-color: #444;
  color: white;
  padding: 0.3rem;

  border-radius: 3px;
`;i`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  padding: 0.3rem 1rem;
`;const $=({description:e="Sem descri\xE7\xE3o",html_url:r,id:s,langugage:c,name:t})=>{const n=l.exports.useMemo(()=>{const a=Math.floor(Math.random()*10);return a<4?"#474973":a>=4&&a<8?"#161B33":"#0D0C1D"},[]);return d("div",{className:q(n),children:[o("h3",{children:t}),o("p",{children:e}),o("p",{children:c}),o("a",{className:F,target:"_blank",href:r,children:"Ver reposit\xF3rio"})]})},q=e=>i`
  box-shadow: 0 0 5px 1px #aaa;

  background-color: ${e};

  max-width: 15rem;
  min-height: 15rem;
  margin: 1rem 0.4rem;
  padding: 1rem;

  color: #f1f1f1;
`,F=i`
  text-decoration: none;
  padding: 0.3rem;
  background-color: #0e131f;

  color: white;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background-color: #0e133f;
  }
`,z=()=>{const{repositories:e}=f();return o("div",{className:H,children:e==null?void 0:e.map(({name:r,description:s,html_url:c,id:t,langugage:n})=>o($,{name:r,description:s,html_url:c,id:t,langugage:n},t))})},H=i`
  margin-top: 2rem;
  min-height: 17rem;
  width: 80%;

  border-radius: 3px;
  background-color: #c3c3c3;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  color: #3f3f3f;
  padding: 1rem;
`,V=()=>o(R,{children:d(E,{children:[o(D,{}),o(z,{})]})});v.render(o(N.StrictMode,{children:o(V,{})}),document.getElementById("root"));
