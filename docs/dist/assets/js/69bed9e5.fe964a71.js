"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,g=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return r?a.createElement(g,n(n({ref:t},p),{},{components:r})):a.createElement(g,n({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const i={title:"Record height",description:"Learn how to adjust the height of records in NocoDB.",tags:["Table operations","Record height","Grid view"],keywords:["table operations","record height"]},n=void 0,l={unversionedId:"table-operations/row-height",id:"table-operations/row-height",title:"Record height",description:"Learn how to adjust the height of records in NocoDB.",source:"@site/docs/060.table-operations/060.row-height.md",sourceDirName:"060.table-operations",slug:"/table-operations/row-height",permalink:"/table-operations/row-height",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/060.table-operations/060.row-height.md",tags:[{label:"Table operations",permalink:"/tags/table-operations"},{label:"Record height",permalink:"/tags/record-height"},{label:"Grid view",permalink:"/tags/grid-view"}],version:"current",sidebarPosition:60,frontMatter:{title:"Record height",description:"Learn how to adjust the height of records in NocoDB.",tags:["Table operations","Record height","Grid view"],keywords:["table operations","record height"]},sidebar:"tutorialSidebar",previous:{title:"Grouping records",permalink:"/table-operations/group-by"},next:{title:"Search",permalink:"/table-operations/search"}},s={},c=[{value:"Short",id:"short",level:3},{value:"Medium",id:"medium",level:3},{value:"Tall",id:"tall",level:3},{value:"Extra",id:"extra",level:3},{value:"Related topics",id:"related-topics",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NocoDB offers users the flexibility to adjust the display height of records within the spreadsheet grid to four distinct levels: Short (the default setting), Medium, Tall, and Extra. This feature proves valuable when working with extensive text fields and multi-select fields, as it enables users to present a greater amount of content within each cell.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record height",src:r(69024).Z,width:"2294",height:"812"})),(0,o.kt)("h3",{id:"short"},"Short"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Short",src:r(30996).Z,width:"2306",height:"1414"})),(0,o.kt)("h3",{id:"medium"},"Medium"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Medium",src:r(46373).Z,width:"2306",height:"1414"})),(0,o.kt)("h3",{id:"tall"},"Tall"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tall",src:r(17888).Z,width:"2306",height:"1414"})),(0,o.kt)("h3",{id:"extra"},"Extra"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Extra",src:r(61145).Z,width:"2306",height:"1408"})),(0,o.kt)("h3",{id:"related-topics"},"Related topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"field-operations"},"Field operations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"filter"},"Filter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"sort"},"Sort")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"group-by"},"GroupBy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"search"},"Quick Search")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"download"},"Download"))))}h.isMDXComponent=!0},69024:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-height-1-b999107b8ea25b026213a6c67498695b.png"},30996:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-height-2-422a0b8fac325abb9392cbd5763ee5c7.png"},46373:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-height-3-8b665502bcb2cb4bde649e53698161f5.png"},17888:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-height-4-6672aa1a7be4bd6075b285f7324c61bc.png"},61145:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-height-5-e58d68386f8aa821d5a32c7411ef4ba9.png"}}]);