"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=i,b=s["".concat(p,".").concat(u)]||s[u]||c[u]||n;return a?l.createElement(b,r(r({ref:t},m),{},{components:a})):l.createElement(b,r({ref:t},m))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<n;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var l=a(87462),i=(a(67294),a(3905));const n={title:"Import data into an existing table",description:"Learn how to import data into an existing table in NocoDB.",tags:["Tables","Upload","CSV","Excel","JSON"],keywords:["NocoDB table","import data into table","import data from csv","import data from excel","import data from xlsx"]},r=void 0,o={unversionedId:"tables/import-data-into-existing-table",id:"tables/import-data-into-existing-table",title:"Import data into an existing table",description:"Learn how to import data into an existing table in NocoDB.",source:"@site/docs/050.tables/040.import-data-into-existing-table.md",sourceDirName:"050.tables",slug:"/tables/import-data-into-existing-table",permalink:"/tables/import-data-into-existing-table",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/050.tables/040.import-data-into-existing-table.md",tags:[{label:"Tables",permalink:"/tags/tables"},{label:"Upload",permalink:"/tags/upload"},{label:"CSV",permalink:"/tags/csv"},{label:"Excel",permalink:"/tags/excel"},{label:"JSON",permalink:"/tags/json"}],version:"current",sidebarPosition:40,frontMatter:{title:"Import data into an existing table",description:"Learn how to import data into an existing table in NocoDB.",tags:["Tables","Upload","CSV","Excel","JSON"],keywords:["NocoDB table","import data into table","import data from csv","import data from excel","import data from xlsx"]},sidebar:"tutorialSidebar",previous:{title:"Create table via import",permalink:"/tables/create-table-via-import"},next:{title:"Actions on table",permalink:"/tables/actions-on-table"}},p={},d=[{value:"Import data from CSV / Excel",id:"import-data-from-csv--excel",level:2},{value:"Accessing import modal",id:"accessing-import-modal",level:3},{value:"Importing file data",id:"importing-file-data",level:3},{value:"1. Upload from local directory",id:"1-upload-from-local-directory",level:4},{value:"2. Upload from URL",id:"2-upload-from-url",level:4},{value:"Field mapping",id:"field-mapping",level:3},{value:"Advance settings",id:"advance-settings",level:3},{value:"Related articles",id:"related-articles",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"import-data-from-csv--excel"},"Import data from CSV / Excel"),(0,i.kt)("h3",{id:"accessing-import-modal"},"Accessing import modal"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"...")," context menu from the toolbar."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload")," button."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload CSV")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload Excel")," option.    ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(71630).Z,width:"2896",height:"940"})),(0,i.kt)("h3",{id:"importing-file-data"},"Importing file data"),(0,i.kt)("p",null,"There are two ways to upload source file:"),(0,i.kt)("h4",{id:"1-upload-from-local-directory"},"1. Upload from local directory"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload")," tab from the Quick import modal."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"file upload")," button or drag and drop file to the modal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#advance-settings"},"Advance Settings")," (optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button.  ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(87035).Z,width:"2876",height:"1798"})),(0,i.kt)("h4",{id:"2-upload-from-url"},"2. Upload from URL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"URL")," tab from the Quick import modal."),(0,i.kt)("li",{parentName:"ol"},"Paste the URL of the file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#advance-settings"},"Advance Settings")," (optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(63878).Z,width:"2876",height:"1796"})),(0,i.kt)("h3",{id:"field-mapping"},"Field mapping"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Table Name")," (Optional)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to the name of the file; double-click to edit."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mapping Fields")," (Optional)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Existing field names are listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Source field"),", while new fields identified from the import file are listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination field"),"."),(0,i.kt)("li",{parentName:"ul"},"NocoDB automatically maps destination field names based on the source field names."),(0,i.kt)("li",{parentName:"ul"},"You can reconfigure the mapping by utilizing the dropdown menu that appears when you click on the destination field."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exclude fields")," (Optional)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A checkbox is provided to exclude a field from being imported."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Initiate Import")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button to commence the file import process.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(64547).Z,width:"2872",height:"1800"})),(0,i.kt)("h3",{id:"advance-settings"},"Advance settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# of records to parse to infer datatype")," - defaults to 500 records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Utilize First Record as Headers"),"**`: Enabled by default. If selected, the first record in the spreadsheet will be treated as the header record and its contents will be used as field names.")),(0,i.kt)("h2",{id:"related-articles"},"Related articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/create-table"},"Create a new table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/create-table-via-import"},"Create a table using a CSV, Excel or a JSON")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#rename-table"},"Rename a table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#duplicate-table"},"Duplicate a table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#delete-table"},"Delete a table"))))}c.isMDXComponent=!0},71630:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/upload-csv-1-5060880a942894e2cf7d72a27b048520.png"},87035:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/upload-csv-2-8d2bf537b779871fcd91d482507b6ec2.png"},64547:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/upload-csv-3-2b437b676c7ea55dfc099c630c62bc32.png"},63878:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/upload-csv-url-e91498d1e314587238b1379f73bee6b1.png"}}]);