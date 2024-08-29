/*! For license information please see d98c3e05.e4ebe470.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[288306],{916532:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=n(785893),o=n(511151);const s={id:"core-plugin-api.storagevaluesnapshot",title:"StorageValueSnapshot",description:"API reference for StorageValueSnapshot"},a=void 0,c={id:"reference/core-plugin-api.storagevaluesnapshot",title:"StorageValueSnapshot",description:"API reference for StorageValueSnapshot",source:"@site/../docs/reference/core-plugin-api.storagevaluesnapshot.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.storagevaluesnapshot",permalink:"/docs/reference/core-plugin-api.storagevaluesnapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.storagevaluesnapshot.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.storagevaluesnapshot",title:"StorageValueSnapshot",description:"API reference for StorageValueSnapshot"}},i={},p=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storagevaluesnapshot",children:(0,t.jsx)(r.code,{children:"StorageValueSnapshot"})})]}),"\n",(0,t.jsx)(r.p,{children:"A snapshot in time of the current known value of a storage key."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type StorageValueSnapshot<TValue extends JsonValue> = {\n    key: string;\n    presence: 'unknown' | 'absent';\n    value?: undefined;\n} | {\n    key: string;\n    presence: 'present';\n    value: TValue;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,s={},p=null,l=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:p,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=p,r.jsxs=p},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var t=n(667294);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);