/*! For license information please see cd58a639.9ec995a3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[555878],{120737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=n(785893),r=n(511151);const c={id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()"},o=void 0,s={id:"reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket",children:(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket"})})," > ",(0,i.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",children:(0,i.jsx)(t.code,{children:"createPublishBitbucketAction"})})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,i.jsx)(t.p,{children:'in favor of "createPublishBitbucketCloudAction" by @backstage/plugin-scaffolder-backend-module-bitbucket-cloud and "createPublishBitbucketServerAction" by @backstage/plugin-scaffolder-backend-module-bitbucket-server'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'function createPublishBitbucketAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    repoVisibility?: "private" | "public" | undefined;\n    sourcePath?: string | undefined;\n    enableLFS?: boolean | undefined;\n    token?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"options"}),(0,i.jsxs)(t.td,{children:["{ integrations: ",(0,i.jsx)(t.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,i.jsx)(t.a,{href:"/docs/reference/config.config",children:"Config"}),"; }"]}),(0,i.jsx)(t.td,{})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,i.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; defaultBranch?: string | undefined; repoVisibility?: "private" | "public" | undefined; sourcePath?: string | undefined; enableLFS?: boolean | undefined; token?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; }, import("@backstage/types").',(0,i.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var i=n(667294),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,c={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:l,props:c,_owner:s.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(667294);const r={},c=i.createContext(r);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);