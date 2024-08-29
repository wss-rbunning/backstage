/*! For license information please see 49142bd2.ee2ffaad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[857383],{679850:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(785893),t=n(511151);const i={id:"config-loader.loadconfigoptions",title:"LoadConfigOptions",description:"API reference for LoadConfigOptions"},c=void 0,s={id:"reference/config-loader.loadconfigoptions",title:"LoadConfigOptions",description:"API reference for LoadConfigOptions",source:"@site/../docs/reference/config-loader.loadconfigoptions.md",sourceDirName:"reference",slug:"/reference/config-loader.loadconfigoptions",permalink:"/docs/reference/config-loader.loadconfigoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.loadconfigoptions.md",tags:[],version:"current",frontMatter:{id:"config-loader.loadconfigoptions",title:"LoadConfigOptions",description:"API reference for LoadConfigOptions"}},a={},d=[];function f(e){const o={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader",children:(0,r.jsx)(o.code,{children:"@backstage/config-loader"})})," > ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader.loadconfigoptions",children:(0,r.jsx)(o.code,{children:"LoadConfigOptions"})})]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(o.p,{children:["Use ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader.configsources.default",children:"ConfigSources.default()"})," instead."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Options that control the loading of configuration files in the backend."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-typescript",children:"export type LoadConfigOptions = {\n    configRoot: string;\n    configTargets: ConfigTarget[];\n    experimentalEnvFunc?: (name: string) => Promise<string | undefined>;\n    remote?: LoadConfigOptionsRemote;\n    watch?: LoadConfigOptionsWatch;\n};\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"References:"})," ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader.configtarget",children:"ConfigTarget"}),", ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader.loadconfigoptionsremote",children:"LoadConfigOptionsRemote"}),", ",(0,r.jsx)(o.a,{href:"/docs/reference/config-loader.loadconfigoptionswatch",children:"LoadConfigOptionsWatch"})]})]})}function l(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},675251:(e,o,n)=>{var r=n(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,n){var r,i={},d=null,f=null;for(r in void 0!==n&&(d=""+n),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(f=o.ref),o)c.call(o,r)&&!a.hasOwnProperty(r)&&(i[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:t,type:e,key:d,ref:f,props:i,_owner:s.current}}o.Fragment=i,o.jsx=d,o.jsxs=d},785893:(e,o,n)=>{e.exports=n(675251)},511151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>c});var r=n(667294);const t={},i=r.createContext(t);function c(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);