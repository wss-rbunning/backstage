/*! For license information please see b0f556f2.713ab548.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[250901],{577963:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(785893),s=t(511151);const o={id:"core-app-api.bitbucketserversession",title:"BitbucketServerSession",description:"API reference for BitbucketServerSession"},c=void 0,i={id:"reference/core-app-api.bitbucketserversession",title:"BitbucketServerSession",description:"API reference for BitbucketServerSession",source:"@site/../docs/reference/core-app-api.bitbucketserversession.md",sourceDirName:"reference",slug:"/reference/core-app-api.bitbucketserversession",permalink:"/docs/reference/core-app-api.bitbucketserversession",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.bitbucketserversession.md",tags:[],version:"current",frontMatter:{id:"core-app-api.bitbucketserversession",title:"BitbucketServerSession",description:"API reference for BitbucketServerSession"}},a={},p=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.bitbucketserversession",children:(0,n.jsx)(r.code,{children:"BitbucketServerSession"})})]}),"\n",(0,n.jsx)(r.p,{children:"Session information for Bitbucket Server auth."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type BitbucketServerSession = {\n    providerInfo: {\n        accessToken: string;\n        scopes: Set<string>;\n        expiresAt?: Date;\n    };\n    profile: ProfileInfo;\n    backstageIdentity: BackstageIdentityResponse;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfo",children:"ProfileInfo"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityresponse",children:"BackstageIdentityResponse"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,o={},p=null,f=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:f,props:o,_owner:i.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>c});var n=t(667294);const s={},o=n.createContext(s);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);