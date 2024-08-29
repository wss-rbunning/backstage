/*! For license information please see a57f591c.18fe3549.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[220479],{30903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(785893),a=t(511151);const s={id:"plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler"},c=void 0,o={id:"reference/plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler",source:"@site/../docs/reference/plugin-auth-backend.authhandler.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.authhandler",permalink:"/docs/reference/plugin-auth-backend.authhandler",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.authhandler.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler"}},i={},u=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.authhandler",children:(0,r.jsx)(n.code,{children:"AuthHandler"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"createOAuthRouteHandlers"})," from ",(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The AuthHandler function is called every time the user authenticates using the provider."}),"\n",(0,r.jsx)(n.p,{children:"The handler should return a profile that represents the session for the user in the frontend."}),"\n",(0,r.jsx)(n.p,{children:"Throwing an error in the function will cause the authentication to fail, making it possible to use this function as a way to limit access to a certain group of users."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AuthHandler<TAuthResult> = (input: TAuthResult, context: _AuthResolverContext) => Promise<AuthHandlerResult>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:"_AuthResolverContext"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.authhandlerresult",children:"AuthHandlerResult"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,s={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:u,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(667294);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);