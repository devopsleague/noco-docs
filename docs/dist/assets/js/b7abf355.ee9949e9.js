"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3857],{3905:(e,a,r)=>{r.d(a,{Zo:()=>l,kt:()=>d});var t=r(67294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},l=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},w=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),w=o,d=m["".concat(c,".").concat(w)]||m[w]||k[w]||n;return r?t.createElement(d,s(s({ref:a},l),{},{components:r})):t.createElement(d,s({ref:a},l))}));function d(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=w;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}w.displayName="MDXCreateElement"},17569:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const n={title:"Workspace overview",description:"This article briefs the concept of workspaces in NocoDB.",tags:["Workspaces","Overview"]},s=void 0,i={unversionedId:"workspaces/workspace-overview",id:"workspaces/workspace-overview",title:"Workspace overview",description:"This article briefs the concept of workspaces in NocoDB.",source:"@site/docs/030.workspaces/010.workspace-overview.md",sourceDirName:"030.workspaces",slug:"/workspaces/workspace-overview",permalink:"/workspaces/workspace-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/030.workspaces/010.workspace-overview.md",tags:[{label:"Workspaces",permalink:"/tags/workspaces"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Workspace overview",description:"This article briefs the concept of workspaces in NocoDB.",tags:["Workspaces","Overview"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading",permalink:"/getting-started/self-hosted/upgrading"},next:{title:"Create workspace",permalink:"/workspaces/create-workspace"}},c={},p=[{value:"Workspace context menu",id:"workspace-context-menu",level:3},{value:"Related articles",id:"related-articles",level:2}],l={toc:p},m="wrapper";function k(e){let{components:a,...n}=e;return(0,o.kt)(m,(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In NocoDB, workspaces play a pivotal role in facilitating collaborative and organized data management. A workspace serves as a container for one or more bases, allowing users to bring together interconnected tables, views, and various elements into a unified and coherent entity. Each workspace can house multiple bases, enabling users to categorize and structure their data in a way that suits their specific needs. Whether you're tracking projects, managing databases, or organizing information, NocoDB's workspaces provide the flexibility and organization required to make data-driven decisions and foster collaboration within your team. Additionally, workspaces allow for the assignment of specific access permissions to workspace members, ensuring that data security and privacy are maintained while enabling effective teamwork."),(0,o.kt)("p",null,"Some key points to note about workspaces are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each workspace contains its own set of bases, keeping your data separate and well-organized."),(0,o.kt)("li",{parentName:"ol"},"Workspaces have their own set of members and permissions, allowing you to control who can access and modify data within each workspace."),(0,o.kt)("li",{parentName:"ol"},"Workspaces offer unique settings and billing options, letting you customize configurations to suit specific needs."),(0,o.kt)("li",{parentName:"ol"},"Bases are tied exclusively to one workspace and can't be moved between workspaces, ensuring data integrity."),(0,o.kt)("li",{parentName:"ol"},"Members can be part of multiple workspaces. You can also fine-tune their roles within each workspace.")),(0,o.kt)("p",null,"In summary, NocoDB workspaces streamline data management and member control, providing the flexibility and oversight necessary for various projects and teams."),(0,o.kt)("p",null,"To begin, you can ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/create-workspace"},"create a workspace")," tailored to your project. Collaborate seamlessly by ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/workspace-collaboration"},"inviting team members")," to the workspace. If roles need adjustment, simply ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/workspace-collaboration#modifying-workspace-member-roles"},"modify a team member's role"),". When necessary, you can also ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/workspace-collaboration#removing-workspace-members"},"remove team members")," from the workspace. For organizational purposes, renaming the workspace is straightforward with the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/actions-on-workspace#rename-workspace"},"rename workspace")," feature. Finally, if a workspace is no longer needed, you can easily ",(0,o.kt)("a",{parentName:"p",href:"/workspaces/actions-on-workspace#delete-workspace"},"delete it"),". "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Open Source NocoDB includes a default workspace, and it does not allow the creation of additional workspaces.")),(0,o.kt)("h3",{id:"workspace-context-menu"},"Workspace context menu"),(0,o.kt)("p",null,"The workspace context menu, conveniently located in the left top of sidebar, provides a list of all the workspaces accessible to you.\nYou can easily switch between different workspaces by simply clicking on the respective workspace name within this menu."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(56178).Z,width:"2878",height:"1018"})),(0,o.kt)("h2",{id:"related-articles"},"Related articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/create-workspace"},"Create workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/workspace-collaboration"},"Invite team members to workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/workspace-collaboration#modifying-workspace-member-roles"},"Change team member role")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/workspace-collaboration#removing-workspace-members"},"Remove team member from workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/actions-on-workspace#rename-workspace"},"Rename workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workspaces/actions-on-workspace#delete-workspace"},"Delete workspace"))))}k.isMDXComponent=!0},56178:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/workspace-context-menu-6c2b64ca701e4c01ed8706bde7426f2d.png"}}]);