"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1771],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),h=r,v=p["".concat(l,".").concat(h)]||p[h]||w[h]||o;return i?a.createElement(v,n(n({ref:t},c),{},{components:i})):a.createElement(v,n({ref:t},c))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var d=2;d<o;d++)n[d]=i[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},49826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>w,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=i(87462),r=(i(67294),i(3905));const o={title:"Share view",description:"Learn how to share a view publicly in NocoDB.",tags:["Views","Share","Grid view","Form view","Kanban view","Gallery view"],keywords:["NocoDB view","share view","share","share view with password protection","share view with download options"]},n=void 0,s={unversionedId:"views/share-view",id:"views/share-view",title:"Share view",description:"Learn how to share a view publicly in NocoDB.",source:"@site/docs/090.views/025.share-view.md",sourceDirName:"090.views",slug:"/views/share-view",permalink:"/views/share-view",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/090.views/025.share-view.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Share",permalink:"/tags/share"},{label:"Grid view",permalink:"/tags/grid-view"},{label:"Form view",permalink:"/tags/form-view"},{label:"Kanban view",permalink:"/tags/kanban-view"},{label:"Gallery view",permalink:"/tags/gallery-view"}],version:"current",sidebarPosition:25,frontMatter:{title:"Share view",description:"Learn how to share a view publicly in NocoDB.",tags:["Views","Share","Grid view","Form view","Kanban view","Gallery view"],keywords:["NocoDB view","share view","share","share view with password protection","share view with download options"]},sidebar:"tutorialSidebar",previous:{title:"Create view",permalink:"/views/create-view"},next:{title:"Grid",permalink:"/views/view-types/grid"}},l={},d=[{value:"Generate Share View",id:"generate-share-view",level:2},{value:"Share view options",id:"share-view-options",level:3},{value:"Password protection",id:"password-protection",level:4},{value:"Download options",id:"download-options",level:4},{value:"Share Form View Options",id:"share-form-view-options",level:3},{value:"Access Share View",id:"access-share-view",level:2}],c={toc:d},p="wrapper";function w(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sharing a specific view of a table becomes highly valuable when you need to collaborate with individuals outside your organization who need access to specific sections of your database. This shared view provides a read-only perspective, accessible to anyone, regardless of their workspace affiliation. You have control over which data fields and records are visible to these external viewers, ensuring that any sensitive data remains hidden. Furthermore, if you decide to make changes to the visible fields or records within the view, the shared link will promptly reflect these adjustments, updating in real-time."),(0,r.kt)("h2",{id:"generate-share-view"},"Generate Share View"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Share")," button on the top right of the toolbar"),(0,r.kt)("li",{parentName:"ol"},"Toggle ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable public viewing")," to create shared view link"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Copy")," button to copy the link to clipboard")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"share button",src:i(85926).Z,width:"2894",height:"864"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"shared view",src:i(44717).Z,width:"2876",height:"1800"})),(0,r.kt)("h3",{id:"share-view-options"},"Share view options"),(0,r.kt)("h4",{id:"password-protection"},"Password protection"),(0,r.kt)("p",null,"You can enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Restrict access with a password")," if you want a password-protected view"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"password protection",src:i(12689).Z,width:"2876",height:"1800"})),(0,r.kt)("h4",{id:"download-options"},"Download options"),(0,r.kt)("p",null,"You can toggle ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow Download")," button to enable or disable download CSV/XLSX options in the shared view link"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"download options",src:i(57762).Z,width:"2876",height:"1800"})),(0,r.kt)("h3",{id:"share-form-view-options"},"Share Form View Options"),(0,r.kt)("p",null,"Form view has additional customizations for shared view. You can enable/disable the following options for shared form view:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Survey mode"),": This option when enabled, will display the form in survey mode."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"RTL Orientation"),": This option when enabled, will display the form in RTL orientation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Themes"),": You can select a theme for the form from the dropdown.\n",(0,r.kt)("img",{alt:"form view options",src:i(24501).Z,width:"2880",height:"1800"}))),(0,r.kt)("h2",{id:"access-share-view"},"Access Share View"),(0,r.kt)("p",null,"To access the shared view, please follow the steps below:\nClick on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shared View URL"),". If the URL is password-protected, you will be prompted to enter the password to unlock it. Please input the required password to proceed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"password modal",src:i(19318).Z,width:"1328",height:"846"})),(0,r.kt)("p",null,"Once the password is successfully entered and authenticated, you will gain access to the shared view.\nIn the event that the URL is not password-protected, you will be directed to the shared view directly, without the need for a password."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"share-view",src:i(3144).Z,width:"2880",height:"1800"})),(0,r.kt)("p",null,"Users with the shared view link can only view the data and cannot make any changes to the view or its content. Records and fields in the shared view will be updated in real-time as changes are made to the original view. Users accessing shared view can apply filters and sort records as per their requirements."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that, filters & sorts applied to shared view will not be persisted. These filters & sorts will be reset when the shared view is accessed again.")))}w.isMDXComponent=!0},85926:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-button-9751630544eab59c43f368bcbe4aaaae.png"},24501:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-form-a0f60904770cda6be5710e12a60077bd.png"},12689:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-modal-2-4bb63f03e7cb528595d3f2f6335fca02.png"},57762:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-modal-3-1202422c5c9bf2b234a5b5ed7a05e805.png"},44717:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-modal-2c40f95aa822fa2830e1f205431a4b4e.png"},19318:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-password-8b55b2f905ed895f6ceddccad842c205.png"},3144:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/share-view-22f8daabd281e5b6199d1e03ab814378.png"}}]);