/*! For license information please see e99b4860.89ecfe73.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[399226],{249770:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var n=t(785893),o=t(511151);const p={id:"core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder"},a=void 0,c={id:"reference/core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder",source:"@site/../docs/reference/core-app-api.approutebinder.md",sourceDirName:"reference",slug:"/reference/core-app-api.approutebinder",permalink:"/docs/reference/core-app-api.approutebinder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.approutebinder.md",tags:[],version:"current",frontMatter:{id:"core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder"}},i={},s=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.approutebinder",children:(0,n.jsx)(r.code,{children:"AppRouteBinder"})})]}),"\n",(0,n.jsxs)(r.p,{children:["A function that can bind from external routes of a given plugin, to concrete routes of other plugins. See ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AppRouteBinder = <ExternalRoutes extends {\n    [name: string]: ExternalRouteRef;\n}>(externalRoutes: ExternalRoutes, targetRoutes: PartialKeys<TargetRouteMap<ExternalRoutes>, KeysWithType<ExternalRoutes, ExternalRouteRef<any, true>>>) => void;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.externalrouteref",children:"ExternalRouteRef"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),o=Symbol.for("react.element"),p=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,p={},s=null,d=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(p[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===p[n]&&(p[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:d,props:p,_owner:c.current}}r.Fragment=p,r.jsx=s,r.jsxs=s},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(667294);const o={},p=n.createContext(o);function a(e){const r=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(p.Provider,{value:r},e.children)}}}]);