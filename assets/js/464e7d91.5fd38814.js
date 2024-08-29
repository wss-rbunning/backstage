/*! For license information please see 464e7d91.5fd38814.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[855910],{554397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(785893),r=n(511151);const a={id:"plugin-catalog.entitylayout",title:"EntityLayout",description:"API reference for EntityLayout"},i=void 0,c={id:"reference/plugin-catalog.entitylayout",title:"EntityLayout",description:"API reference for EntityLayout",source:"@site/../docs/reference/plugin-catalog.entitylayout.md",sourceDirName:"reference",slug:"/reference/plugin-catalog.entitylayout",permalink:"/docs/reference/plugin-catalog.entitylayout",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog.entitylayout.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog.entitylayout",title:"EntityLayout",description:"API reference for EntityLayout"}},s={},l=[{value:"Example",id:"example",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog.entitylayout",children:(0,o.jsx)(t.code,{children:"EntityLayout"})})]}),"\n",(0,o.jsx)(t.p,{children:"EntityLayout is a compound component, which allows you to define a layout for entities using a sub-navigation mechanism."}),"\n",(0,o.jsx)(t.p,{children:"Consists of two parts: EntityLayout and EntityLayout.Route"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"EntityLayout: {\n    (props: EntityLayoutProps): React.JSX.Element;\n    Route: (props: EntityLayoutRouteProps) => null;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'<EntityLayout>\n  <EntityLayout.Route path="/example" title="Example tab">\n    <div>This is rendered under /example/anything-here route</div>\n  </EntityLayout.Route>\n</EntityLayout>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var o=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(667294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);