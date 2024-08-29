/*! For license information please see 9b952f2f.f3638ff3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[476784],{688381:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(785893),i=r(511151);const a={id:"org--old",title:"Microsoft Entra Tenant Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Entra ID into Backstage"},o=void 0,s={id:"integrations/azure/org--old",title:"Microsoft Entra Tenant Data",description:"Importing users and groups from Microsoft Entra ID into Backstage",source:"@site/../docs/integrations/azure/org--old.md",sourceDirName:"integrations/azure",slug:"/integrations/azure/org--old",permalink:"/docs/integrations/azure/org--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/azure/org--old.md",tags:[],version:"current",frontMatter:{id:"org--old",title:"Microsoft Entra Tenant Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Entra ID into Backstage"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Authenticating with Microsoft Graph",id:"authenticating-with-microsoft-graph",level:2},{value:"Local Development",id:"local-development",level:3},{value:"App Registration",id:"app-registration",level:3},{value:"Managed Identity",id:"managed-identity",level:3},{value:"Filtering imported Users and Groups",id:"filtering-imported-users-and-groups",level:2},{value:"Groups",id:"groups",level:3},{value:"Users",id:"users",level:3},{value:"User photos",id:"user-photos",level:3},{value:"Customizing Transformation",id:"customizing-transformation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No data",id:"no-data",level:3},{value:"Authentication / Token Errors",id:"authentication--token-errors",level:3},{value:"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation",id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,t.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,t.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,t.jsx)(n.a,{href:"/docs/integrations/azure/org",children:"its own article"})," instead.Otherwise, ",(0,t.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,t.jsx)(n.p,{children:"The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from a tenant in Microsoft Entra ID via the\nMicrosoft Graph API."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["The package is not installed by default, therefore you have to add ",(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})," to your backend package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-msgraph\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next add the basic configuration to ",(0,t.jsx)(n.code,{children:"app-config.yaml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    microsoftGraphOrg:\n      default:\n        tenantId: ${AZURE_TENANT_ID}\n        user:\n          filter: accountEnabled eq true and userType eq 'member'\n        group:\n          filter: >\n            securityEnabled eq false\n            and mailEnabled eq true\n            and groupTypes/any(c:c+eq+'Unified')\n        schedule:\n          frequency: PT1H\n          timeout: PT50M\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, register the plugin in ",(0,t.jsx)(n.code,{children:"catalog.ts"}),".\nFor large organizations, this plugin can take a long time, so be careful setting low frequency / timeouts and importing a large amount of users / groups for the first try."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { MicrosoftGraphOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-msgraph';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authenticating-with-microsoft-graph",children:"Authenticating with Microsoft Graph"}),"\n",(0,t.jsx)(n.h3,{id:"local-development",children:"Local Development"}),"\n",(0,t.jsxs)(n.p,{children:["For a local dev environment, it's recommended you have the Azure CLI or Azure PowerShell installed, and are logged in to those.\nAlternatively you can use VSCode with the Azure extension if you install ",(0,t.jsx)(n.code,{children:"@azure/identity-vscode"}),".\nWhen these are set up, the plugin will authenticate with the Microsoft Graph API without you needing to configure any credentials, or granting any special permissions.\nIf you can't do this, you'll have to create an App Registration."]}),"\n",(0,t.jsx)(n.h3,{id:"app-registration",children:"App Registration"}),"\n",(0,t.jsx)(n.p,{children:"If none of the other authentication methods work, you can create an app registration in the azure portal.\nBy default the graph plugin requires the following Application permissions (not Delegated) for Microsoft Graph:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GroupMember.Read.All"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"User.Read.All"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If your organization required Admin Consent for these permissions, that will need to be granted."}),"\n",(0,t.jsxs)(n.p,{children:["When authenticating with a ClientId/ClientSecret, you can either set the ",(0,t.jsx)(n.code,{children:"AZURE_TENANT_ID"}),", ",(0,t.jsx)(n.code,{children:"AZURE_CLIENT_ID"})," and ",(0,t.jsx)(n.code,{children:"AZURE_CLIENT_SECRET"})," environment variables, or specify the values in configuration"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  default:\n    ##...\n    clientId: 9ef1aac6-b454-4e69-9cf5-7199df049281\n    clientSecret: REDACTED\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To authenticate with a certificate rather than a client secret, you can set the ",(0,t.jsx)(n.code,{children:"AZURE_TENANT_ID"}),", ",(0,t.jsx)(n.code,{children:"AZURE_CLIENT_ID"})," and ",(0,t.jsx)(n.code,{children:"AZURE_CLIENT_CERTIFICATE_PATH"})," environments"]}),"\n",(0,t.jsx)(n.h3,{id:"managed-identity",children:"Managed Identity"}),"\n",(0,t.jsxs)(n.p,{children:["If deploying to resources that supports Managed Identity, and has identities configured (e.g. Azure App Services, Azure Container Apps), Managed Identity should be picked up without any additional configuration.\nIf your app has multiple managed identities, you may need to set the ",(0,t.jsx)(n.code,{children:"AZURE_CLIENT_ID"})," environment variable to tell Azure Identity which identity to use."]}),"\n",(0,t.jsxs)(n.p,{children:["To grant the managed identity the same permissions as mentioned in ",(0,t.jsx)(n.em,{children:"App Registration"})," above, ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/app-service/tutorial-connect-app-access-microsoft-graph-as-app-javascript?tabs=azure-powershell",children:"please follow this guide"})]}),"\n",(0,t.jsx)(n.h2,{id:"filtering-imported-users-and-groups",children:"Filtering imported Users and Groups"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the plugin will import all users and groups from your directory.\nThis can be customized through ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/graph/filter-query-parameter",children:"filters"})," and ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/graph/search-query-parameter",children:"search"})," queries. Keep in mind that if you omit filters and search queries for the user or group properties, the plugin will automatically import all available users or groups."]}),"\n",(0,t.jsx)(n.h3,{id:"groups",children:"Groups"}),"\n",(0,t.jsxs)(n.p,{children:["A smaller set of groups can be obtained by configuring a search query or a filter.\nIf both ",(0,t.jsx)(n.code,{children:"filter"})," and ",(0,t.jsx)(n.code,{children:"search"})," are provided, then groups must match both to be ingested."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'microsoftGraphOrg:\n  providerId:\n    group:\n      filter: securityEnabled eq false and mailEnabled eq true and groupTypes/any(c:c+eq+\'Unified\')\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"In addition to these groups, one additional group will be created for your organization.\nAll imported groups will be a child of this group."}),"\n",(0,t.jsx)(n.h3,{id:"users",children:"Users"}),"\n",(0,t.jsxs)(n.p,{children:["There are two modes for importing users - You can import all user objects matching a ",(0,t.jsx)(n.code,{children:"filter"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      filter: accountEnabled eq true and userType eq 'member'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively you can import users that are members of specific groups.\nFor each group matching the ",(0,t.jsx)(n.code,{children:"search"})," and ",(0,t.jsx)(n.code,{children:"filter"})," query, each group member will be imported.\nOnly direct group members will be imported, not transient users."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'microsoftGraphOrg:\n  providerId:\n    userGroupMember:\n      filter: "displayName eq \'Backstage Users\'"\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"user-photos",children:"User photos"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the photos of users will be fetched and added to each user entity. For huge organizations this may be unfeasible, as it will take a ",(0,t.jsx)(n.em,{children:"very"})," long time, and can be disabled by setting ",(0,t.jsx)(n.code,{children:"loadPhotos"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      filter: ...\n      loadPhotos: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"customizing-transformation",children:"Customizing Transformation"}),"\n",(0,t.jsxs)(n.p,{children:["Ingested entities can be customized by providing custom transformers.\nThese can be used to completely replace the built in logic, or used to tweak it by using the default transformers (",(0,t.jsx)(n.code,{children:"defaultGroupTransformer"}),", ",(0,t.jsx)(n.code,{children:"defaultUserTransformer"})," and ",(0,t.jsx)(n.code,{children:"defaultOrganizationTransformer"}),"\nEntities can also be excluded from backstage by returning ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These Transformers are be registered when configuring ",(0,t.jsx)(n.code,{children:"MicrosoftGraphOrgEntityProvider"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"builder.addEntityProvider(\n  MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n    // ...\n    /* highlight-add-start */\n    groupTransformer: myGroupTransformer,\n    userTransformer: myUserTransformer,\n    organizationTransformer: myOrganizationTransformer,\n    /* highlight-add-end */\n  }),\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"When using custom transformers, you may want to customize the data returned.\nSeveral configuration options can be provided to tweak the Microsoft Graph query to get the data you need"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      expand: manager\n    group:\n      expand: member\n      select: ['id', 'displayName', 'description']\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following provides an example of each kind of transformer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';\nimport {\n  defaultGroupTransformer,\n  defaultUserTransformer,\n  defaultOrganizationTransformer,\n} from '@backstage/plugin-catalog-backend-module-msgraph';\nimport { GroupEntity, UserEntity } from '@backstage/catalog-model';\n\n// This group transformer completely replaces the built in logic with custom logic.\nexport async function myGroupTransformer(\n  group: MicrosoftGraph.Group,\n  groupPhoto?: string,\n): Promise<GroupEntity | undefined> {\n  return {\n    apiVersion: 'backstage.io/v1alpha1',\n    kind: 'Group',\n    metadata: {\n      name: group.id!,\n      annotations: {},\n    },\n    spec: {\n      type: 'Microsoft Entra ID',\n      children: [],\n    },\n  };\n}\n\n// This user transformer makes use of the built in logic, but also sets the description field\nexport async function myUserTransformer(\n  graphUser: MicrosoftGraph.User,\n  userPhoto?: string,\n): Promise<UserEntity | undefined> {\n  const backstageUser = await defaultUserTransformer(graphUser, userPhoto);\n\n  if (backstageUser) {\n    backstageUser.metadata.description = 'Loaded from Microsoft Entra ID';\n  }\n\n  return backstageUser;\n}\n\n// Example organization transformer that removes the organization group completely\nexport async function myOrganizationTransformer(\n  graphOrganization: MicrosoftGraph.Organization,\n): Promise<GroupEntity | undefined> {\n  return undefined;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"no-data",children:"No data"}),"\n",(0,t.jsxs)(n.p,{children:["First check your logs for the message ",(0,t.jsx)(n.code,{children:"Reading msgraph users and groups"}),".\nIf you don't see this, check you've registered the provider, and that the schedule is valid"]}),"\n",(0,t.jsxs)(n.p,{children:["If you see a log entry ",(0,t.jsx)(n.code,{children:"Read 0 msgraph users and 0 msgraph groups"}),", check your search and filter arguments."]}),"\n",(0,t.jsxs)(n.p,{children:["If you see the start message (",(0,t.jsx)(n.code,{children:"Reading msgraph users and groups"}),") but no end message (",(0,t.jsx)(n.code,{children:"Read X msgraph users and Y msgraph groups"}),"), then it is likely the job is taking a long time due to a large volume of data.\nThe default behavior is to import all users and groups, which is often more data than needed.\nTry importing a smaller set of data (e.g. ",(0,t.jsx)(n.code,{children:"filter: displayName eq 'John Smith'"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"authentication--token-errors",children:"Authentication / Token Errors"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://aka.ms/azsdk/js/identity/troubleshoot",children:"Troubleshooting Azure Identity Authentication Issues"})]}),"\n",(0,t.jsx)(n.h3,{id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation",children:"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure you've granted all the required permissions to your application registration or managed identity"}),"\n",(0,t.jsxs)(n.li,{children:["Make sure the permissions are ",(0,t.jsx)(n.code,{children:"Application"})," permissions rather than ",(0,t.jsx)(n.code,{children:"Delegated"})]}),"\n",(0,t.jsx)(n.li,{children:'If your organization has configured "Admin consent" to be required, make sure this has been granted for your application permissions'}),"\n",(0,t.jsxs)(n.li,{children:["If your group queries are returning Microsoft Teams groups, you may need to grant addition permissions (e.g. ",(0,t.jsx)(n.code,{children:"Team.ReadBasic.All"}),", ",(0,t.jsx)(n.code,{children:"TeamMember.Read.All"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["If you've added additional ",(0,t.jsx)(n.code,{children:"select"})," or ",(0,t.jsx)(n.code,{children:"expand"})," fields, those may need additional permissions granted"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},675251:(e,n,r)=>{var t=r(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,a={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:a,_owner:s.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(667294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);