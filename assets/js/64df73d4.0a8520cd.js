/*! For license information please see 64df73d4.0a8520cd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[34081],{918152:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var n=t(785893),r=t(511151);const s={id:"plugin-devtools.devtoolslayout",title:"DevToolsLayout",description:"API reference for DevToolsLayout"},l=void 0,a={id:"reference/plugin-devtools.devtoolslayout",title:"DevToolsLayout",description:"API reference for DevToolsLayout",source:"@site/../docs/reference/plugin-devtools.devtoolslayout.md",sourceDirName:"reference",slug:"/reference/plugin-devtools.devtoolslayout",permalink:"/docs/reference/plugin-devtools.devtoolslayout",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-devtools.devtoolslayout.md",tags:[],version:"current",frontMatter:{id:"plugin-devtools.devtoolslayout",title:"DevToolsLayout",description:"API reference for DevToolsLayout"}},c={},i=[{value:"Example",id:"example",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(o.a,{href:"/docs/reference/plugin-devtools",children:(0,n.jsx)(o.code,{children:"@backstage/plugin-devtools"})})," > ",(0,n.jsx)(o.a,{href:"/docs/reference/plugin-devtools.devtoolslayout",children:(0,n.jsx)(o.code,{children:"DevToolsLayout"})})]}),"\n",(0,n.jsx)(o.p,{children:"DevTools is a compound component, which allows you to define a custom layout"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:"DevToolsLayout: {\n    ({ children, title, subtitle, }: DevToolsLayoutProps): React.JSX.Element;\n    Route: (props: SubRoute) => null;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:'<DevToolsLayout>\n  <DevToolsLayout.Route path="/example" title="Example tab">\n    <div>This is rendered under /example/anything-here route</div>\n  </DevToolsLayout.Route>\n</DevToolsLayout>\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,o,t)=>{var n=t(667294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,t){var n,s={},i=null,d=null;for(n in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(d=o.ref),o)l.call(o,n)&&!c.hasOwnProperty(n)&&(s[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:r,type:e,key:i,ref:d,props:s,_owner:a.current}}o.Fragment=s,o.jsx=i,o.jsxs=i},785893:(e,o,t)=>{e.exports=t(675251)},511151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>l});var n=t(667294);const r={},s=n.createContext(r);function l(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);