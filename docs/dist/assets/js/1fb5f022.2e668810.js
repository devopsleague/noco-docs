"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||n;return a?r.createElement(v,c(c({ref:t},u),{},{components:a})):r.createElement(v,c({ref:t},u))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={title:"Data sources overview",description:"NocoDB Data-Source sync, access control & re-config",tags:["Data Sources","Overview"],keywords:["Data Sources overview","Data Sources sync","Data Sources access control","Data Sources re-config"]},c=void 0,s={unversionedId:"data-sources/data-source-overview",id:"data-sources/data-source-overview",title:"Data sources overview",description:"NocoDB Data-Source sync, access control & re-config",source:"@site/docs/100.data-sources/010.data-source-overview.md",sourceDirName:"100.data-sources",slug:"/data-sources/data-source-overview",permalink:"/data-sources/data-source-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/100.data-sources/010.data-source-overview.md",tags:[{label:"Data Sources",permalink:"/tags/data-sources"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Data sources overview",description:"NocoDB Data-Source sync, access control & re-config",tags:["Data Sources","Overview"],keywords:["Data Sources overview","Data Sources sync","Data Sources access control","Data Sources re-config"]},sidebar:"tutorialSidebar",previous:{title:"Actions on view",permalink:"/views/actions-on-view"},next:{title:"Connect to a Data source",permalink:"/data-sources/connect-to-data-source"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Accessing <code>Data Sources</code>",id:"accessing-data-sources",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"NocoDB allows you to connect to external data sources and get a unified spreadsheet view of your data. Activities related to external data sources can be managed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Data Sources")," tab in ",(0,o.kt)("inlineCode",{parentName:"p"},"Base dashboard"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Data Sources")," tab includes following functionalities"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect/manage external data source"),(0,o.kt)("li",{parentName:"ol"},"UI Access Control"),(0,o.kt)("li",{parentName:"ol"},"Relations"),(0,o.kt)("li",{parentName:"ol"},"Audit logs")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently only one external data source can be added per project.")),(0,o.kt)("h2",{id:"accessing-data-sources"},"Accessing ",(0,o.kt)("inlineCode",{parentName:"h2"},"Data Sources")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data source",src:a(37750).Z,width:"2876",height:"928"})),(0,o.kt)("p",null,"Learn more about working with Data sources in the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/connect-to-data-source"},"Connect to a Data source"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/sync-with-data-source"},"Sync changes externally made to data source"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#edit-external-database-configuration-parameters"},"Edit external database configuration parameters"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#remove-external-data-source"},"Remove Data source"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#data-source-visibility"},"Hide Data source"),"  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#relations"},"Relations within a data source"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#audit-logs"},"Audit logs"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/data-sources/actions-on-data-sources#ui-access-control"},"UI Access Control"))))}p.isMDXComponent=!0},37750:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-source-a136125c9bc5031ada9df69ba6484d5a.png"}}]);