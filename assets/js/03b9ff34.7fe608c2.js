/*! For license information please see 03b9ff34.7fe608c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[463525],{317580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var i=a(785893),s=a(511151);const n={title:"Adopter Spotlight: How Stash simplified monitoring, ownership and true app health with microservices",author:"Taylor Webber, Staff Engineer, Stash"},o="Setting the monitoring/DORA scene",r={permalink:"/blog/2023/07/08/stash-adopter-post",source:"@site/blog/2023-07-08-stash-adopter-post.mdx",title:"Adopter Spotlight: How Stash simplified monitoring, ownership and true app health with microservices",description:"backstage header",date:"2023-07-08T00:00:00.000Z",formattedDate:"July 8, 2023",tags:[],readingTime:12.75,hasTruncateMarker:!0,authors:[{name:"Taylor Webber, Staff Engineer, Stash"}],frontMatter:{title:"Adopter Spotlight: How Stash simplified monitoring, ownership and true app health with microservices",author:"Taylor Webber, Staff Engineer, Stash"},unlisted:!1,prevItem:{title:"Five common traits of successful Backstage adopters",permalink:"/blog/2023/07/28/frontside-adopter-post"},nextItem:{title:"Switching out the Software Templates Sandbox",permalink:"/blog/2023/06/21/switching-out-sandbox"}},c={authorsImageUrls:[void 0]},l=[{value:"Ownership visibility",id:"ownership-visibility",level:2},{value:"Easy adoption and catalog usage",id:"easy-adoption-and-catalog-usage",level:3},{value:"Example catalog-info.yaml file to add service to Elevate",id:"example-catalog-infoyaml-file-to-add-service-to-elevate",level:6},{value:"Connecting to subject matter experts",id:"connecting-to-subject-matter-experts",level:3},{value:"Integration with SaaS products",id:"integration-with-saas-products",level:2},{value:"Visible cohesive monitoring",id:"visible-cohesive-monitoring",level:3},{value:"Centralized incident management",id:"centralized-incident-management",level:3},{value:"Infrastructure cost insights across all systems",id:"infrastructure-cost-insights-across-all-systems",level:2},{value:"Service, team and organizational health",id:"service-team-and-organizational-health",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h6:"h6",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"backstage header",src:a(421807).Z+"",width:"1200",height:"630"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TL;DR"}),": Monitoring the health of a software application goes beyond surfacing API errors and customer-facing issues. It requires a comprehensive understanding of every facet of a service, including process metrics like DORA, as well as clear ownership of services and processes. By implementing Elevate as an internal developer portal, development teams now have better visibility of ownership in the distributed systems they work in. They also have the benefit of consolidated application health data and other metrics gained from the SaaS products they utilize everyday. This approach ensures a \u201csingle pane of glass\u201d for application ownership and health so our teams can focus on building products and features that help our customers invest for a prosperous future."]}),"\n",(0,i.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,i.jsxs)(t.p,{children:["At ",(0,i.jsx)(t.a,{href:"stash.com",children:"Stash"}),", our mission is to give people the confidence to invest for a better life. Our app simplifies investing for the middle class who may be less experienced with traditional investing and retirement planning. Our customers trust us with their money, and with that, rely on us to provide a responsive and quality experience that works every time."]}),"\n",(0,i.jsx)(t.p,{children:"It isn't revolutionary to say that monitoring the health of a software application is critical for ensuring its reliability and performance in service of customers' needs. However, in a distributed architecture like microservices, tracking ownership and monitoring application health across the system quickly becomes complex. The difficulties are further compounded when leveraging multiple SaaS products, which is common in modern development but specifically so for fintechs like Stash that integrate best-of-breed software in novel ways, as we do across our platform."}),"\n",(0,i.jsxs)(t.p,{children:["What we found is that there are ways to make sense of these complex systems by tracking DevOps Research and Assessment (DORA) metrics for applications and leveraging SaaS products to create a central hub to understand the ",(0,i.jsx)(t.em,{children:"true"})," health of an application."]}),"\n",(0,i.jsxs)(t.p,{children:["In this post, I'll walk you through Stash's journey to create Elevate, our Internal Developer Portal (IDP) based on the open source ",(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"})," framework. Our portal increased visibility of application health metrics, prioritized cloud cost insights, and reduced the context switching required for teams to understand service ownership and the components that make up the entirety of Stash's world-class application systems."]}),"\n",(0,i.jsx)(t.p,{children:"Elevate enables effective monitoring, streamlined incident response, improved overall application health, and most importantly, team health."}),"\n",(0,i.jsx)(t.p,{children:"It seems counterintuitive, but trying to solve the problem of monitoring and tracking ownership with a traditional centralized approach and more SaaS monitoring tools will likely not solve the problem."}),"\n",(0,i.jsx)(t.p,{children:"Traditional centralized monitoring approaches may not suffice in a distributed architecture due to services that may act as pass-throughs or services that call many other services to aggregate data or tasks. In traditional monitoring, you will only see the error rates and request logging for individual services. That will only ever show you part of the puzzle as you'll still be unable to trace a request from a frontend application, through your many service layers to your data stores and back out."}),"\n",(0,i.jsx)(t.p,{children:"Utilizing multiple SaaS products for service monitoring and observability during development introduces additional complexity; each product may have its own dashboard and reporting tools. These implementation differences can make it difficult to consolidate and gain a holistic view of the application's health."}),"\n",(0,i.jsx)(t.p,{children:"Picking the right tool for the job can make developing quality products at speed and scale easier, but what we've learned is that utilizing each tool's context for application health as a piece of the puzzle has exponentially impacted our team's effectiveness."}),"\n",(0,i.jsxs)(t.p,{children:["The team at Stash took an approach of enhanced monitoring which required introducing request tracing for services that a team owns (and the entire org) to get the full picture. We worked to distribute monitoring ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"across"})})," services, capturing both customer-facing issues and internal process metrics that focus on service quality."]}),"\n",(0,i.jsx)(t.p,{children:"We also took a hard look at our health metrics. Some attributes of healthy applications are high availability, HTTP 500 errors are minimal, CPU and memory usage are sustainable, and the \u201c/health\u201d endpoint returns the health of the application. However, to gain insights into the true health of an application and the teams supporting it, tracking DORA metrics is essential."}),"\n",(0,i.jsx)(t.p,{children:"We took four key DORA metrics \u2014 deployment frequency, lead time for changes, mean time to restore, and change failure rate \u2014 to process aspects of services and provide a comprehensive understanding of an application's overall health as well as the health of our team and organization."}),"\n",(0,i.jsx)(t.h1,{id:"understanding-complex-systems-at-stash-with-backstage",children:"Understanding complex systems at Stash with Backstage"}),"\n",(0,i.jsx)(t.p,{children:"At Stash, we use a multitude of SaaS tools during the software development process, some of which provide varying degrees of built-in service catalogs. With many sources of truth and a lack of ability to combine data from multiple sources (eg. FireHydrant incident response with DataDog or DataDog Real User Monitoring data in PagerDuty, etc.) it was challenging to get a holistic view of the whole system.."}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, as we created more and more microservices, it became challenging to determine ownership for each service. Microservice owners were finding it increasingly difficult to keep track of their various consumers to assure that contracts were being maintained as new changes were introduced. Ownership clarity was ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"crucial"})})," to our goals for effective monitoring, issue resolution, and maintaining accountability."]}),"\n",(0,i.jsx)(t.p,{children:"To consolidate application health data, simplify support and clarify ownership for those on development teams as well as for those in non-engineering roles, we implemented an instance of Backstage as an internal service catalog we call Elevate."}),"\n",(0,i.jsx)(t.p,{children:"Utilizing Backstage as a framework, Elevate aims to improve quality and domain expertise for all things code and process at Stash. The key to accomplishing this goal is to leverage the processes and integrations we already use at Stash, but centralize and surface the data in a way that is digestible for engineers and non-engineers alike."}),"\n",(0,i.jsx)(t.p,{children:"For the benefit of a self-managed internal service catalog to outweigh the change in processes and the cost of the catalog's infrastructure, it had to be easy to adopt and have an enlightening effect on teams."}),"\n",(0,i.jsx)(t.h2,{id:"ownership-visibility",children:"Ownership visibility"}),"\n",(0,i.jsx)(t.p,{children:"Elevate acts as a centralized hub for registering services, documenting ownership information, and establishing clear accountability. It provides a holistic view of distributed systems and the shared modules and libraries they use by making it easier to track ownership and ensure effective communication and collaboration."}),"\n",(0,i.jsxs)(t.p,{children:["The Backstage ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Software Catalog"})," model allows service-level tracking, as well as dashboards for Groups (teams or squads), Systems (business units or focus areas), Domains (organization units) or even company wide."]}),"\n",(0,i.jsx)(t.h3,{id:"easy-adoption-and-catalog-usage",children:"Easy adoption and catalog usage"}),"\n",(0,i.jsx)(t.p,{children:"The Backstage open source plugins provide the nuts and bolts for our internal service catalog functionality. Backstage's community plugins assist with the basics of catalog management. They also allow for dynamically changing the type content based on which entry is being viewed in the catalog (library, service, API, team, etc.). Each view can be custom-tailored with the information for that type of entry, which allows for shared libraries to have an overview page focused on getting engineers to documentation; while the overview page for a deployed service can focus on the current incident status and on-call information as the most important thing. The plugin for searching allows for easy discovery of items or documentation throughout the catalog."}),"\n",(0,i.jsx)(t.h6,{id:"example-catalog-infoyaml-file-to-add-service-to-elevate",children:"Example catalog-info.yaml file to add service to Elevate"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: your-service\n  description: Awesome service for awesome things\n  annotations:\n    backstage.io/kubernetes-namespace: your-service\n    datadoghq.com/site: datadoghq.com\n    datadoghq.com/dashboard-url: https://p.datadoghq.com/some-dashbaord\n    firehydrant.com/service-name: your-service\n    jira/project-key: your-jira-project\n    github.com/project-slug: 'your-org/your-service'\n    pagerduty.com/service-id: your-pagerduty-service-id\n  links:\n    - title: Team Slack Channel\n      url: https://your-company.slack.com/archives/your-slack-channel-id\n      type: Slack\n      icon: chat\n    - title: Getting started\n      url: https://github.com/your-org/your-service/blob/main/README.md\n      type: Readme\n      icon: github\n    - title: Confluence\n      url: https://your-company.atlassian.net/your-docs-page-url\n      type: Confluence\n      icon: docs\nspec:\n  type: service\n  lifecycle: production\n  owner: your-team\n  system: your-business-unit\n"})}),"\n",(0,i.jsx)(t.h3,{id:"connecting-to-subject-matter-experts",children:"Connecting to subject matter experts"}),"\n",(0,i.jsx)(t.p,{children:"Elevate leverages the CODEOWNERS integration to establish expertise of specific codebases within services and ensure accountability and clarity within the development teams. Codespace ownership is typically defined with required reviewers by code owners and admins that provide additional support, but the CODEOWNERS plugin allows for clarity into who the subject matter expert of the codebase is, not just the administrative owner. The plugin also displays recent changes that have been merged into the codebase, including the authors and approvers of the changes and other valuable metadata."}),"\n",(0,i.jsx)(t.p,{children:"This improved clarity into contributors and recent contributions can prevent developers and managers from playing telephone when effective communication is crucial to fixing a bug or resolving an incident."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"service code owners",src:a(748159).Z+"",width:"1460",height:"1582"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"recent changes",src:a(987561).Z+"",width:"1456",height:"1634"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"CODEOWNER cards for service ownership and recent changes that appear on a service's overview page."})}),"\n",(0,i.jsx)(t.h2,{id:"integration-with-saas-products",children:"Integration with SaaS products"}),"\n",(0,i.jsx)(t.p,{children:"Backstage offers a catalog of integrations with many popular SaaS products. With Elevate, we've integrated plugins for monitoring infrastructure and user experience, visualizing process backlog and bottlenecks, as well as giving insights into data that teams have not yet been able to see for services they support. These integrations allow for seamless data collection and aggregation, transforming Elevate into the centralized hub for application and team health data."}),"\n",(0,i.jsx)(t.p,{children:"The key to making your service catalog scalable is to ensure you aren't requiring the duplication of data away from its source; Elevate utilizes dashboards and charts to view the data stored in the remote sources. When aggregating DORA metrics we are able to leverage our SaaS tools API within Elevate's service layer to pull data and transform it for our custom dashboards."}),"\n",(0,i.jsx)(t.h3,{id:"visible-cohesive-monitoring",children:"Visible cohesive monitoring"}),"\n",(0,i.jsx)(t.p,{children:"At Stash, we collect performance metrics, resource utilization, and proactive alerts with DataDog and Sentry; these tools can also monitor and track API errors and customer-facing issues that would normally go undetected. To deliver the best possible experience for Stash's customers, engineers need to be able to easily monitor errors on customer devices to solve issues before they are reported."}),"\n",(0,i.jsx)(t.p,{children:"Sentry's plugin easily surfaces uncaught errors within services. DataDog's plugin allows for plug-and-play visualizations of charts or graphs to help support services, teams and beyond. Elevate integrates these insights to monitor the overall health of the application."}),"\n",(0,i.jsx)(t.h3,{id:"centralized-incident-management",children:"Centralized incident management"}),"\n",(0,i.jsx)(t.p,{children:"PagerDuty has been Stash's standard for on-call activities and paging while FireHydrant has more recently been adopted as a part of a more comprehensive incident management process. Together, we use these incident management platforms to establish incident response workflows and communication channels dedicated to each service."}),"\n",(0,i.jsx)(t.p,{children:"PagerDuty's plugin allows for quick reference to the individual who is actively on-call for a service while FireHydrant's plugin lets you track open incidents that may be impacting a service and even trigger new incidents directly from within the service overview page in Elevate. Integrating these plugins allows Elevate to serve as a centralized location for the incident management process, helping our engineers quickly gather the necessary context of an issue and drive faster resolution."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"active incidents",src:a(360733).Z+"",width:"1456",height:"994"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"pager duty",src:a(586794).Z+"",width:"1456",height:"1538"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"FireHydrant and PagerDuty cards that appear on a service's overview page."})}),"\n",(0,i.jsx)(t.h2,{id:"infrastructure-cost-insights-across-all-systems",children:"Infrastructure cost insights across all systems"}),"\n",(0,i.jsx)(t.p,{children:"It's difficult for teams to be more efficient with their infrastructure costs if they are unable to see the problem areas for the services they support, as well as references for effective resource management to model after. The AWS Cost Insights plugin allows Elevate to monitor cost-related metrics and ensure efficient resource allocation and budgeting."}),"\n",(0,i.jsx)(t.p,{children:"Due to the dynamic nature of how different companies may want to aggregate their cost data, the plugin is mostly frontend visualizations for displaying costs over time with drop-downs for filtering and grouping. In Elevate, we created a custom backend plugin to pull our costs data from AWS and group it properly for presentation to the visualizations."}),"\n",(0,i.jsx)(t.p,{children:"When we surface this data with the backend layer in Elevate, the frontend is able to surface our AWS cost data to people who previously didn't have access or who found it too difficult to use the more complex AWS Cost Explorer."}),"\n",(0,i.jsx)(t.p,{children:"In addition to these people now having access to AWS cost data, those with access now get to visualize our spend by AWS product and Stash service. These visualizations are available when looking at a single service, a team or business unit, and organization-wide."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"aws breakdown",src:a(67667).Z+"",width:"1999",height:"1026"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Breakdown of costs per AWS product for a service."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"aws breakdown by project",src:a(591080).Z+"",width:"1999",height:"1025"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Breakdown of total costs per service owned by a Team or Business Unit."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"aws breakdown for org",src:a(36241).Z+"",width:"1999",height:"1208"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Breakdown of total costs per service across the organization."})}),"\n",(0,i.jsx)(t.p,{children:"For those that aren't regularly in AWS Cost Explorer, a benefit of implementing these visualizations is being able to easily see where we have some room for improvement when it comes to tagging our AWS resources. The company-wide breakdown shows all resources, whereas the sub-views rely on resource tagging for service name and team name, so discrepancies may arise which will help you close any gaps in tagging you may have. If resources are not properly tagged, reducing and managing your infrastructure costs will be more time consuming than necessary and much less effective."}),"\n",(0,i.jsx)(t.h2,{id:"service-team-and-organizational-health",children:"Service, team and organizational health"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned above, gathering DORA metrics provides important insight into the health of applications and teams, but until we built Elevate, we didn't have a hub at Stash to aggregate and present that data in an easily digestible manner."}),"\n",(0,i.jsx)(t.p,{children:"Elevate's initial DORA metrics implementation reaches out to the source(s) of truth for each metric and groups and surfaces that in a manner similar to the AWS Cost Insights implementation."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Deployment Frequency"})," from DataDog \u201cdeployment\u201d indicator for each service"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Lead Time for Changes"})," from GitHub for each repo using commit sha's and releases"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Mean Time to Restore"})," from FireHydrant using their MTTR API for each service"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Change Failure Rate"})," from DataDog and FireHydrant for each service"]}),"\n",(0,i.jsx)(t.p,{children:"Elevate implemented the above data sources for our DORA metrics MVP as those have been determined as our best practices for where that information should be tracked, for now."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dora metrics",src:a(970256).Z+"",width:"813",height:"475"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"DORA metrics that display on the overview page for each service."})}),"\n",(0,i.jsx)(t.p,{children:"Software development has an ever-changing SaaS landscape, so what serves as a best practice today, may not be in a week, a month or a year from now. The tools we use to facilitate a task or automate processes may change, but the metrics we want to track (DORA and others) are much more stable. Surfacing data in easily consumable views within Elevate has decoupled the tool we use to accomplish a task from where we monitor the health of our system and how that tool assists."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dora metrics typescript interface",src:a(662251).Z+"",width:"680",height:"298"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"An abstracted service layer that is agnostic of data source(s) allows for a stable integration for our frontend dashboards."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"backend interface",src:a(210308).Z+"",width:"1104",height:"160"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Separate backend services by metric allow for easy updating for additional or new data sources in the future."})}),"\n",(0,i.jsx)(t.h1,{id:"tldr",children:"tl;dr"}),"\n",(0,i.jsx)(t.p,{children:"Monitoring the health of a software application goes beyond surfacing API errors and customer-facing issues. It requires a comprehensive understanding of every facet of a service, including process metrics like DORA, as well as clear ownership of services and processes. By implementing Elevate as an internal developer portal, development teams now have better visibility of ownership in the distributed systems they work in. They also have the benefit of consolidated application health data and other metrics gained from the SaaS products they utilize everyday. This approach ensures a \u201csingle pane of glass\u201d for application ownership and health so our teams can focus on building products and features that help our customers invest for a prosperous future."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},675251:(e,t,a)=>{var i=a(667294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var i,n={},l=null,h=null;for(i in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:l,ref:h,props:n,_owner:r.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},421807:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-3aedcaa1bd84c0d0e2fa33535f2fc651.png"},360733:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image1-18576b0df08dbac3a5e6a85c46d38caa.png"},970256:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image10-aeb71743e6f2f307a2e771683fae1cd0.png"},210308:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image2-991e965ae8caf703cc0a2c65052c80a0.png"},987561:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image3-403a835d6c43da3e0bcfdcbe7286085e.png"},36241:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image4-1653d9ddbdcbf84b91ae898a02b3e87e.png"},748159:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image5-3465c6525552c41603cf90039f594e13.png"},67667:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image6-2d9ffeeac10cc46075f2227c5946cbdc.png"},662251:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image7-3f5477cf7ee08b1accbdd62ee2b9a772.png"},586794:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image8-e7d7c92511a26b58d786414e8d8430f3.png"},591080:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image9-69b1081798f3f47f3ab37fc41ab56853.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var i=a(667294);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);