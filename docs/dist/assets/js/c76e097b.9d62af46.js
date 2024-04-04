"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[20],{2514:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=s(74848),r=s(28453);const l={title:"Roles & permissions overview",description:"Learn about roles and permissions in NocoDB.",tags:["Roles","Permissions","Overview"],keywords:["Roles overview","Permissions overview","NocoDB roles","NocoDB permissions","NocoDB roles overview","NocoDB permissions overview"]},i=void 0,d={id:"roles-and-permissions/roles-permissions-overview",title:"Roles & permissions overview",description:"Learn about roles and permissions in NocoDB.",source:"@site/docs/110.roles-and-permissions/010.roles-permissions-overview.md",sourceDirName:"110.roles-and-permissions",slug:"/roles-and-permissions/roles-permissions-overview",permalink:"/roles-and-permissions/roles-permissions-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/110.roles-and-permissions/010.roles-permissions-overview.md",tags:[{label:"Roles",permalink:"/tags/roles"},{label:"Permissions",permalink:"/tags/permissions"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Roles & permissions overview",description:"Learn about roles and permissions in NocoDB.",tags:["Roles","Permissions","Overview"],keywords:["Roles overview","Permissions overview","NocoDB roles","NocoDB permissions","NocoDB roles overview","NocoDB permissions overview"]},sidebar:"tutorialSidebar",previous:{title:"Roles and permissions",permalink:"/category/roles-and-permissions"},next:{title:"Collaboration",permalink:"/category/collaboration"}},c={},o=[{value:"Roles",id:"roles",level:2},{value:"Workspace level permissions",id:"workspace-level-permissions",level:3},{value:"Base level permissions",id:"base-level-permissions",level:3},{value:"Collaboration",id:"collaboration",level:4},{value:"Table &amp; view operations",id:"table--view-operations",level:4},{value:"Record operations",id:"record-operations",level:4},{value:"Automations &amp; advanced",id:"automations--advanced",level:4}];function x(e){const t={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In NocoDB, we have roles that determine what people can do in a Workspace or Base."}),"\n",(0,n.jsx)(t.p,{children:"You can give a member one of these roles:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Creator"}),"\n",(0,n.jsx)(t.li,{children:"Editor"}),"\n",(0,n.jsx)(t.li,{children:"Commenter"}),"\n",(0,n.jsx)(t.li,{children:"Viewer"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Role for a member, if assigned at base level carry precedence over workspace level role."})}),"\n",(0,n.jsx)(t.p,{children:"When inviting a user, their role designation is initially assigned but can be modified later. Our role system\noperates incrementally, with higher-level roles encompassing all privileges of lower-level roles.\nThis hierarchy offers flexibility in permissions and fosters a transparent organizational structure\nin workspace or base management."}),"\n",(0,n.jsx)(t.h2,{id:"roles",children:"Roles"}),"\n",(0,n.jsx)(t.p,{children:'Roles serve as the basis for user privileges in NocoDB. They are associated with members at two levels:\nWorkspace and Base. When a member is invited to a Workspace with a specific role, like an "Editor," they\nautomatically have that role in all Bases within that Workspace. However, project owners or creators can customize\npermissions at the project level to align with specific needs. This dual-level role assignment system\nensures adaptable user permissions and access management in NocoDB.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Owner"}),': When a member creates a new Workspace or Base, they automatically become the Workspace or Base "Owner."\n\\This role grants exclusive privileges, including the authority to delete the Workspace or Base.\nThe "Owner" role\'s privileges are non-transferable, ensuring ownership and control integrity.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Creator"}),': The "Creator" role shares all privileges with an "Owner," except for deleting the workspace or base.\n"Creators" have full administrative rights, except for deletion authority, which remains exclusive to the "Owner."\nThis ensures balanced workspace or base management.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Editor"}),': An "Editor" can create and edit records but cannot modify the project schema,\nlike adding tables or fields. They strike a balance between data input and schema management.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Commenter"}),': The "Commenter" role cannot add or edit records but can provide comments on existing records\n, facilitating communication and feedback.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Viewer"}),': "Viewers" can only access records and associated comments, without the ability to contribute\nor make changes, ensuring controlled access for informational purposes.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No Access"}),": This role, applied exclusively at the base level, revokes project access for the designated user,\nensuring robust security and access management."]}),"\n",(0,n.jsx)(t.h3,{id:"workspace-level-permissions",children:"Workspace level permissions"}),"\n",(0,n.jsx)(t.p,{children:"The individual who creates the workspace is automatically designated as a Workspace owner.\nA workspace can have only one Owner. Access to bases within that workspace is granted to members based on their roles\nwithin the parent workspace. When a member becomes part of a workspace, the role at the workspace level is\nautomatically applied to them for all bases in that workspace, unless a specific exception is configured\nto override at base level."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Task"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Owner"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Creator"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Editor"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Invite member to workspace"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Manage member access to workspace"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Remove member access from workspace"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"View members in workspace"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delete Workspace"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Billing & upgrade options"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Create a new base"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Access existing bases at assigned roles"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"base-level-permissions",children:"Base level permissions"}),"\n",(0,n.jsx)(t.h4,{id:"collaboration",children:"Collaboration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Task"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Owner"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Creator"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Editor"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Invite members to base at or below your role"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Manage members access to base"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Remove member access from a base"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"View members in a base"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Share base"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Share view"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"table--view-operations",children:"Table & view operations"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Task"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Owner"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Creator"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Editor"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete table"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete fields"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete views"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hide / un-hide / reorder fields"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete sort"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete filters"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete group-by"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"record-operations",children:"Record operations"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Task"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Owner"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Creator"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Editor"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete record"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"View & add comment on a record"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"View record"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"automations--advanced",children:"Automations & advanced"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Task"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Owner"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Creator"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Editor"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add / modify / delete Webhook"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ERD (Project & Table relations)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Snippet"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Token"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(96540);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);