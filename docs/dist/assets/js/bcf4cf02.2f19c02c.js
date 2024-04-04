"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9221],{41065:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=i(74848),r=i(28453);const t={title:"Calendar",description:"Learn how to work with Calendar view in NocoDB.",tags:["Views","Calendar"],keywords:["NocoDB Calendar","Calendar View","Calendar board","Calendar view operations"]},o=void 0,d={id:"views/view-types/calendar",title:"Calendar",description:"Learn how to work with Calendar view in NocoDB.",source:"@site/docs/090.views/040.view-types/050.calendar.md",sourceDirName:"090.views/040.view-types",slug:"/views/view-types/calendar",permalink:"/views/view-types/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/090.views/040.view-types/050.calendar.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Calendar",permalink:"/tags/calendar"}],version:"current",sidebarPosition:50,frontMatter:{title:"Calendar",description:"Learn how to work with Calendar view in NocoDB.",tags:["Views","Calendar"],keywords:["NocoDB Calendar","Calendar View","Calendar board","Calendar view operations"]},sidebar:"tutorialSidebar",previous:{title:"Kanban",permalink:"/views/view-types/kanban"},next:{title:"Actions on view",permalink:"/views/actions-on-view"}},s={},l=[{value:"Calendar View Actions",id:"calendar-view-actions",level:2},{value:"Timescales",id:"timescales",level:2},{value:"Day",id:"day",level:3},{value:"Week",id:"week",level:3},{value:"Month",id:"month",level:3},{value:"Year",id:"year",level:3},{value:"Calendar View Operations",id:"calendar-view-operations",level:2},{value:"Customize Record Label",id:"customize-record-label",level:3},{value:"Add New Records",id:"add-new-records",level:3},{value:"Expand Record Details",id:"expand-record-details",level:3},{value:"Edit Record Details",id:"edit-record-details",level:3},{value:"Delete Record",id:"delete-record",level:3},{value:"Other toolbar operations",id:"other-toolbar-operations",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Calendar View allows you to visualise your data in a calendar format. You can easily rearrange the records by dragging and dropping them to different dates. You can also visualise the records in a day, week, month, or year format. This section will cover all the operations that can be performed on the Calendar view."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"1010-2 Calendar",src:i(30105).A+"",width:"7702",height:"3248"})}),"\n",(0,n.jsx)(a.h2,{id:"calendar-view-actions",children:"Calendar View Actions"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/create-view/#create-new-view",children:"Create a New Calendar View"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/actions-on-view#rename-view",children:"Rename an Existing Calendar View"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/actions-on-view#duplicate-view",children:"Duplicate a Calendar View"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/actions-on-view#delete-view",children:"Remove a Calendar View"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/share-view",children:"Share a Calendar View"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/views/views-overview#view-permission-types",children:"Lock Calendar View for Edits"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"timescales",children:"Timescales"}),"\n",(0,n.jsx)(a.p,{children:"For Calendar view, NocoDB supports 4 different timescales:"}),"\n",(0,n.jsx)(a.h3,{id:"day",children:"Day"}),"\n",(0,n.jsx)(a.p,{children:"In day view, you can see the records for a single day. For records with DateTime fields, you can drag and drop the records to different timeslots within the day."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"day-view",src:i(23199).A+"",width:"2876",height:"1624"})}),"\n",(0,n.jsx)(a.h3,{id:"week",children:"Week"}),"\n",(0,n.jsx)(a.p,{children:"In week view, you can see the records for a single week. You can drag and drop the records to different days within the week. For records with DateTime fields, you can drag and drop the records to different timeslots within the day."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"week-view",src:i(75619).A+"",width:"2874",height:"1626"})}),"\n",(0,n.jsx)(a.h3,{id:"month",children:"Month"}),"\n",(0,n.jsx)(a.p,{children:"In month view, you can see the records for an entire month. You can drag and drop the records to different days within the month."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"month-view",src:i(17983).A+"",width:"2876",height:"1628"})}),"\n",(0,n.jsx)(a.h3,{id:"year",children:"Year"}),"\n",(0,n.jsx)(a.p,{children:"Year view allows you to see a birds-eye view of the records for the entire year. Blue badge on the date indicates that there are records on that date. You can click on the date to see the records for that date."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"year-view",src:i(84180).A+"",width:"2872",height:"1620"})}),"\n",(0,n.jsx)(a.h2,{id:"calendar-view-operations",children:"Calendar View Operations"}),"\n",(0,n.jsx)(a.h3,{id:"customize-record-label",children:"Customize Record Label"}),"\n",(0,n.jsxs)(a.p,{children:["You can customize the record label that appears on the calendar. To do this, click on the ",(0,n.jsx)(a.code,{children:"Fields"})," menu on the toolbar. In the dropdown that appears"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Use toggle to enable or disable the fields that you want to display on the calendar."}),"\n",(0,n.jsx)(a.li,{children:"Use reorder to change the order of the fields that you want to display on the calendar."}),"\n",(0,n.jsx)(a.li,{children:"Use format menu options to customize the display of the fields on the calendar. You can choose to format the field as Bold, Italicise or Underline."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"fields-menu",src:i(73173).A+"",width:"2872",height:"1432"})}),"\n",(0,n.jsx)(a.h3,{id:"add-new-records",children:"Add New Records"}),"\n",(0,n.jsxs)(a.p,{children:["To add a new record to the calendar, click on the ",(0,n.jsx)(a.code,{children:"+"})," icon to the bottom right of the calendar. Alternatively, you can also double-click on the white space in the calendar to add a new record. In the form that appears, fill in the details and click on ",(0,n.jsx)(a.code,{children:"Save"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"expand-record-details",children:"Expand Record Details"}),"\n",(0,n.jsx)(a.p,{children:"To view the details of a record, click on the record. This will expand the record and show all the details of the record."}),"\n",(0,n.jsx)(a.h3,{id:"edit-record-details",children:"Edit Record Details"}),"\n",(0,n.jsxs)(a.p,{children:["Use drag and drop to move the record to a different date or time. To edit any other details of a record, click on the record to expand it. Edit the details of the record. Make the necessary changes and click on ",(0,n.jsx)(a.code,{children:"Save"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"delete-record",children:"Delete Record"}),"\n",(0,n.jsxs)(a.p,{children:["To delete a record, click on the record to expand it. Click on the ",(0,n.jsx)(a.code,{children:"Delete"})," button from the record context menu. Confirm the deletion by clicking on ",(0,n.jsx)(a.code,{children:"Delete"})," in the confirmation dialog."]}),"\n",(0,n.jsx)(a.h2,{id:"other-toolbar-operations",children:"Other toolbar operations"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/table-operations/filter",children:"Apply Filters to Display Specific Records on the Calendar"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/table-operations/sort",children:"Sort Records on the Calendar by One or More Criteria"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/table-operations/search",children:"Perform Quick Searches for Specific Data Within Fields"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/table-operations/download#download-data",children:"Export Data to CSV or Excel Format"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},23199:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/day-scale-be0c966b44860de53cb410e87e1392a2.png"},73173:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/fields-menu-d5f58a5a678ce396d0279f86773000b5.png"},30105:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/markers-0b9e6cd1c8f6b0296112e6b13bebeccd.png"},17983:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/month-scale-ede2ec05c3b4bcce16deb434f844136d.png"},75619:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/week-scale-1ec5cb296b55dc10967bc63aabde4bec.png"},84180:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/year-scale-c7b02552a300e08dd181c1f256667dbe.png"},28453:(e,a,i)=>{i.d(a,{R:()=>o,x:()=>d});var n=i(96540);const r={},t=n.createContext(r);function o(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);