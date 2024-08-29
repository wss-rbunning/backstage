/*! For license information please see b19cadb5.e4ffee18.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512141],{204486:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=r(785893),i=r(511151);const s={id:"plugin-permission-common.permissioncondition",title:"PermissionCondition",description:"API reference for PermissionCondition"},t=void 0,c={id:"reference/plugin-permission-common.permissioncondition",title:"PermissionCondition",description:"API reference for PermissionCondition",source:"@site/../docs/reference/plugin-permission-common.permissioncondition.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissioncondition",permalink:"/docs/reference/plugin-permission-common.permissioncondition",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.permissioncondition.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissioncondition",title:"PermissionCondition",description:"API reference for PermissionCondition"}},a={},m=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:(0,o.jsx)(n.code,{children:"PermissionCondition"})})]}),"\n",(0,o.jsx)(n.p,{children:"A condition returned with a CONDITIONAL authorization response."}),"\n",(0,o.jsxs)(n.p,{children:["Conditions are a reference to a rule defined by a plugin, and parameters to apply the rule. For example, a rule might be ",(0,o.jsx)(n.code,{children:"isOwner"})," from the catalog-backend, and params may be a list of entity claims from a identity token."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type PermissionCondition<TResourceType extends string = string, TParams extends PermissionRuleParams = PermissionRuleParams> = {\n    resourceType: TResourceType;\n    rule: string;\n    params?: TParams;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionruleparams",children:"PermissionRuleParams"})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},675251:(e,n,r)=>{var o=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function m(e,n,r){var o,s={},m=null,p=null;for(o in void 0!==r&&(m=""+r),void 0!==n.key&&(m=""+n.key),void 0!==n.ref&&(p=n.ref),n)t.call(n,o)&&!a.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:m,ref:p,props:s,_owner:c.current}}n.Fragment=s,n.jsx=m,n.jsxs=m},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var o=r(667294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);