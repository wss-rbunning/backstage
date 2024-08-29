/*! For license information please see 5f9d5eae.e79dad5c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[977542],{8217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var r=s(785893),n=s(511151);const c={id:"plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",title:"TechDocsAddonTester.renderWithEffects()",description:"API reference for TechDocsAddonTester.renderWithEffects()"},o=void 0,d={id:"reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",title:"TechDocsAddonTester.renderWithEffects()",description:"API reference for TechDocsAddonTester.renderWithEffects()",source:"@site/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",permalink:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",title:"TechDocsAddonTester.renderWithEffects()",description:"API reference for TechDocsAddonTester.renderWithEffects()"}},i={},a=[{value:"Remarks",id:"remarks",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-addons-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",children:(0,r.jsx)(t.code,{children:"TechDocsAddonTester"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",children:(0,r.jsx)(t.code,{children:"renderWithEffects"})})]}),"\n",(0,r.jsx)(t.p,{children:"Render the Addon within a fully configured and mocked TechDocs reader."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"renderWithEffects(): Promise<typeof screen & {\n        shadowRoot: ShadowRoot | null;\n    }>;\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<typeof screen & { shadowRoot: ShadowRoot | null; }>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Components using useEffect to perform an asynchronous action (such as fetch) must be rendered within an async act call to properly get the final state, even with mocked responses. This utility method makes the signature a bit cleaner, since act doesn't return the result of the evaluated function."})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},675251:(e,t,s)=>{var r=s(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var r,c={},a=null,h=null;for(r in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:n,type:e,key:a,ref:h,props:c,_owner:d.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var r=s(667294);const n={},c=r.createContext(n);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);