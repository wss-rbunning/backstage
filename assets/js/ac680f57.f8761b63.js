/*! For license information please see ac680f57.f8761b63.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[160938],{540479:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(785893),t=n(511151);const s={id:"backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",title:"SchedulerServiceTaskScheduleDefinitionConfig.initialDelay",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig.initialDelay"},a=void 0,c={id:"reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",title:"SchedulerServiceTaskScheduleDefinitionConfig.initialDelay",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig.initialDelay",source:"@site/../docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",permalink:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",title:"SchedulerServiceTaskScheduleDefinitionConfig.initialDelay",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig.initialDelay"}},o={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api",children:(0,r.jsx)(i.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",children:(0,r.jsx)(i.code,{children:"SchedulerServiceTaskScheduleDefinitionConfig"})})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",children:(0,r.jsx)(i.code,{children:"initialDelay"})})]}),"\n",(0,r.jsx)(i.p,{children:"The amount of time that should pass before the first invocation happens."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-typescript",children:"initialDelay?: string | HumanDuration;\n"})}),"\n",(0,r.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(i.p,{children:"This can be useful in cold start scenarios to stagger or delay some heavy compute jobs. If no value is given for this field then the first invocation will happen as soon as possible according to the cadence."}),"\n",(0,r.jsxs)(i.p,{children:["NOTE: This is a per-worker delay. If you have a cluster of workers all collaborating on a task that has its ",(0,r.jsx)(i.code,{children:"scope"})," field set to ",(0,r.jsx)(i.code,{children:"'global'"}),', then you may still see the task being processed by other long-lived workers, while any given single worker is in its initial sleep delay time e.g. after a deployment. Therefore, this parameter is not useful for "globally" pausing work; its main intended use is for individual machines to get a chance to reach some equilibrium at startup before triggering heavy batch workloads.']})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,i,n)=>{var r=n(667294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)a.call(i,r)&&!o.hasOwnProperty(r)&&(s[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===s[r]&&(s[r]=i[r]);return{$$typeof:t,type:e,key:l,ref:d,props:s,_owner:c.current}}i.Fragment=s,i.jsx=l,i.jsxs=l},785893:(e,i,n)=>{e.exports=n(675251)},511151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>a});var r=n(667294);const t={},s=r.createContext(t);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);