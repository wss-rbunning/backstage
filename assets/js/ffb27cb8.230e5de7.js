/*! For license information please see ffb27cb8.230e5de7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512974],{213534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(785893),s=n(511151);const o={id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},i=void 0,r={id:"integrations/ldap/org",title:"LDAP Organizational Data",description:"Setting up ingestion of organizational data from LDAP",source:"@site/../docs/integrations/ldap/org.md",sourceDirName:"integrations/ldap",slug:"/integrations/ldap/org",permalink:"/docs/integrations/ldap/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/ldap/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/google-cloud-storage/locations"},next:{title:"Intro to plugins",permalink:"/docs/plugins/"}},l={},d=[{value:"Supported vendors",id:"supported-vendors",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"target",id:"target",level:3},{value:"target.tls.keys",id:"targettlskeys",level:4},{value:"target.tls.certs",id:"targettlscerts",level:4},{value:"bind",id:"bind",level:3},{value:"users",id:"users",level:3},{value:"users.dn",id:"usersdn",level:4},{value:"users.options",id:"usersoptions",level:4},{value:"users.set",id:"usersset",level:4},{value:"users.map",id:"usersmap",level:4},{value:"groups",id:"groups",level:3},{value:"groups.dn",id:"groupsdn",level:4},{value:"groups.options",id:"groupsoptions",level:4},{value:"groups.set",id:"groupsset",level:4},{value:"groups.map",id:"groupsmap",level:4},{value:"Customize the Provider",id:"customize-the-provider",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\ngroups - directly from an LDAP compatible service. The result is a hierarchy of\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,a.jsx)(t.code,{children:"User"})})," and\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,a.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,a.jsx)(t.h2,{id:"supported-vendors",children:"Supported vendors"}),"\n",(0,a.jsxs)(t.p,{children:["Backstage in general supports OpenLDAP compatible vendors, as well as Active Directory and FreeIPA. If you are using a vendor that does not seem to be supported, please ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md",children:"file an issue"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,a.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})," to your backend package."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-ldap\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Next add the basic configuration to ",(0,a.jsx)(t.code,{children:"app-config.yaml"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    ldapOrg:\n      default:\n        target: ldaps://ds.example.net\n        bind:\n          dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n          secret: ${LDAP_SECRET}\n        schedule:\n          frequency: PT1H\n          timeout: PT15M\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, updated your backend by adding the following line:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend/alpha'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-catalog-backend-module-ldap'));\n/* highlight-add-end */\n"})}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"The following configuration is a small example of how a setup could look for\nimporting groups and users from a corporate LDAP server."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  providers:\n    ldapOrg:\n      default:\n        target: ldaps://ds.example.net\n        bind:\n          dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n          secret: ${LDAP_SECRET}\n        users:\n          dn: ou=people,ou=example,dc=example,dc=net\n          options:\n            filter: (uid=*)\n          map:\n            description: l\n          set:\n            metadata.customField: 'hello'\n        groups:\n          dn: ou=access,ou=groups,ou=example,dc=example,dc=net\n          options:\n            filter: (&(objectClass=some-group-class)(!(groupType=email)))\n          map:\n            description: l\n          set:\n            metadata.customField: 'hello'\n"})}),"\n",(0,a.jsx)(t.p,{children:'These config blocks have a lot of options in them, so we will describe each\n"root" key within the block separately.'}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"NOTE:"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to import users and groups from different LDAP servers, you can define multiple providers with different names.\nIf they should come from the same server, you can define multiple users and groups blocks within the same provider using an array of users / groups.\nEntries coming from the same block will be able to detect group memberships based on the ",(0,a.jsx)(t.code,{children:"memberOf"})," attribute."]}),"\n",(0,a.jsx)(t.p,{children:"If you want only to import users or groups, you can omit the groups or users block."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"target",children:"target"}),"\n",(0,a.jsxs)(t.p,{children:["This is the URL of the targeted server, typically on the form\n",(0,a.jsx)(t.code,{children:"ldaps://ds.example.net"})," for SSL enabled servers or ",(0,a.jsx)(t.code,{children:"ldap://ds.example.net"}),"\nwithout SSL."]}),"\n",(0,a.jsx)(t.h4,{id:"targettlskeys",children:"target.tls.keys"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"keys"})," in TLS options specifies location of a file, that contains private keys\nto establish connection with your LDAP server, in PEM format. See an example\nfor Google Secure LDAP Service below."]}),"\n",(0,a.jsx)(t.h4,{id:"targettlscerts",children:"target.tls.certs"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"certs"})," in TLS options specifies location of a file, that contains certificate\nchains to establish connection with your LDAP server, in PEM format. See an\nexample for Google Secure LDAP Service below."]}),"\n",(0,a.jsx)(t.h3,{id:"bind",children:"bind"}),"\n",(0,a.jsx)(t.p,{children:"The bind block specifies how the plugin should bind (essentially, to\nauthenticate) towards the server. It has the following fields."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\nsecret: ${LDAP_SECRET}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"dn"})," is the full LDAP Distinguished Name for the user that the plugin\nauthenticates itself as. At this point, only regular user based authentication\nis supported."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"secret"})," is the password of the same user. In this example, it is given in\nthe form of an environment variable ",(0,a.jsx)(t.code,{children:"LDAP_SECRET"}),", that has to be set when the\nbackend starts."]}),"\n",(0,a.jsx)(t.h3,{id:"users",children:"users"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"users"})," block defines the settings that govern the reading and\ninterpretation of users. Its fields are explained in separate sections below."]}),"\n",(0,a.jsx)(t.h4,{id:"usersdn",children:"users.dn"}),"\n",(0,a.jsxs)(t.p,{children:["The DN under which users are stored, e.g.\n",(0,a.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"usersoptions",children:"users.options"}),"\n",(0,a.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\nusers. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of users that are of actual interest to ingest. For example, you may want\n  # to filter out disabled users.\n  filter: (uid=*)\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,a.jsx)(t.h4,{id:"usersset",children:"users.set"}),"\n",(0,a.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,a.jsx)(t.h4,{id:"usersmap",children:"users.map"}),"\n",(0,a.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All the options are shown\nbelow, with their default values, but they are all optional."}),"\n",(0,a.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,a.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,a.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,a.jsx)(t.code,{children:"spec.profile.displayName"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry.\n  rdn: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: mail\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.memberOf field of the entity.\n  memberOf: memberOf\n"})}),"\n",(0,a.jsx)(t.h3,{id:"groups",children:"groups"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"groups"})," block defines the settings that govern the reading and\ninterpretation of groups. Its fields are explained in separate sections below."]}),"\n",(0,a.jsx)(t.h4,{id:"groupsdn",children:"groups.dn"}),"\n",(0,a.jsxs)(t.p,{children:["The DN under which groups are stored, e.g.\n",(0,a.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"groupsoptions",children:"groups.options"}),"\n",(0,a.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\ngroups. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of groups that are of actual interest to ingest. For example, you may want\n  # to filter out disabled groups.\n  filter: (&(objectClass=some-group-class)(!(groupType=email)))\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,a.jsx)(t.h4,{id:"groupsset",children:"groups.set"}),"\n",(0,a.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,a.jsx)(t.h4,{id:"groupsmap",children:"groups.map"}),"\n",(0,a.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All of the options are\nshown below, with their default values, but they are all optional."}),"\n",(0,a.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,a.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,a.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,a.jsx)(t.code,{children:"spec.profile.displayName"}),". If the target field is optional, such as the display\nname, the importer will accept missing attributes and just leave the target\nfield unset. If the target field is mandatory, such as the name of the entity,\nvalidation will fail if the source attribute is missing."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry. This value is copied into a\n  # well known annotation to be able to query by it later.\n  rdn: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.type field of the entity.\n  type: groupType\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: <nothing, left out>\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.parent field of the entity.\n  memberOf: memberOf\n  # The name of the attribute that shall be used for the values of\n  # the spec.children field of the entity.\n  members: member\n"})}),"\n",(0,a.jsx)(t.h2,{id:"customize-the-provider",children:"Customize the Provider"}),"\n",(0,a.jsx)(t.p,{children:"In case you want to customize the ingested entities, the provider allows to pass\ntransformers for users and groups."}),"\n",(0,a.jsxs)(t.p,{children:["Transformers can be configured by extending ",(0,a.jsx)(t.code,{children:"ldapOrgEntityProviderTransformsExtensionPoint"}),". Here is an example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport { ldapOrgEntityProviderTransformsExtensionPoint } from '@backstage/plugin-catalog-backend-module-ldap';\nimport { myUserTransformer, myGroupTransformer } from './transformers';\n\nbackend.add(\n  createBackendModule({\n    pluginId: 'catalog',\n    moduleId: 'ldap-extensions',\n    register(env) {\n      env.registerInit({\n        deps: {\n          /* highlight-add-start */\n          ldapTransformers: ldapOrgEntityProviderTransformsExtensionPoint,\n          /* highlight-add-end */\n        },\n        async init({ ldapTransformers }) {\n          /* highlight-add-start */\n          ldapTransformers.setUserTransformer(myUserTransformer);\n          ldapTransformers.setGroupTransformer(myGroupTransformer);\n          /* highlight-add-end */\n        },\n      });\n    },\n  }),\n);\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},675251:(e,t,n)=>{var a=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,o={},d=null,h=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:h,props:o,_owner:r.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(667294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);