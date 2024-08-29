/*! For license information please see 48353f00.8ffd9543.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[242804],{358641:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(785893),t=n(511151);const s={id:"plugin-catalog-node.processingresult",title:"processingResult",description:"API reference for processingResult"},c=void 0,a={id:"reference/plugin-catalog-node.processingresult",title:"processingResult",description:"API reference for processingResult",source:"@site/../docs/reference/plugin-catalog-node.processingresult.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node.processingresult",permalink:"/docs/reference/plugin-catalog-node.processingresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-node.processingresult.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-node.processingresult",title:"processingResult",description:"API reference for processingResult"}},i={},l=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.processingresult",children:(0,o.jsx)(r.code,{children:"processingResult"})})]}),"\n",(0,o.jsx)(r.p,{children:"Factory functions for the standard processing result types."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"processingResult: Readonly<{\n    readonly notFoundError: (atLocation: LocationSpec, message: string) => CatalogProcessorResult;\n    readonly inputError: (atLocation: LocationSpec, message: string) => CatalogProcessorResult;\n    readonly generalError: (atLocation: LocationSpec, message: string) => CatalogProcessorResult;\n    readonly location: (newLocation: LocationSpec) => CatalogProcessorResult;\n    readonly entity: (atLocation: LocationSpec, newEntity: Entity) => CatalogProcessorResult;\n    readonly relation: (spec: EntityRelationSpec) => CatalogProcessorResult;\n    readonly refresh: (key: string) => CatalogProcessorResult;\n}>\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},675251:(e,r,n)=>{var o=n(667294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var o,s={},l=null,p=null;for(o in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,o)&&!i.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:l,ref:p,props:s,_owner:a.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var o=n(667294);const t={},s=o.createContext(t);function c(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);