__NUXT_JSONP__("/engineering/development-setup", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"development-setup",description:"How to setup your development environment",title:v,position:3200,category:"Engineering",menuTitle:v,toc:[{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:A,depth:h,text:B},{id:C,depth:h,text:D},{id:E,depth:h,text:F}],body:{type:"root",children:[{type:b,tag:i,props:{id:w},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#clone-the-repo",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:x}]},{type:a,value:d},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,u]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\ncd nocodb\u002Fpackages\n"}]}]}]},{type:a,value:d},{type:b,tag:i,props:{id:y},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-sdk",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:z}]},{type:a,value:d},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,u]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"# build nocodb-sdk\ncd nocodb-sdk\nnpm install\nnpm run build\n"}]}]}]},{type:a,value:d},{type:b,tag:i,props:{id:A},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-backend",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:d},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,u]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"# build backend - runs on port 8080\ncd ..\u002Fnocodb\nnpm install\nnpm run watch:run\n"}]}]}]},{type:a,value:d},{type:b,tag:i,props:{id:C},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-frontend",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:D}]},{type:a,value:d},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,u]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"# build frontend - runs on port 3000\ncd ..\u002Fnc-gui\nnpm install\nnpm run dev \n"}]}]}]},{type:a,value:d},{type:b,tag:"p",props:{},children:[{type:a,value:"Any changes made to frontend and backend will be automatically reflected in the browser."}]},{type:a,value:d},{type:b,tag:i,props:{id:E},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#cypress",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:F}]},{type:a,value:d},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,"language-shell"]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# install dependencies(cypress)"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:" "},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"install"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# run mysql database with required database using docker compose"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"docker-compose"}]},{type:a,value:" -f .\u002Fscripts\u002Fdocker-compose-cypress.yml up\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# Run backend api using following command"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:" run start:api\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# Run frontend web UI using following command"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:" run start:web\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# wait until both 3000 and 8080 ports are available"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# and run cypress test using following command"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:" run cypress:run\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"# or run following command to run it with GUI"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:" run cypress:open\n"}]}]}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Fdevelopment-setup",extension:".md",createdAt:G,updatedAt:G,to:"\u002Fengineering\u002Fdevelopment-setup"},prev:{slug:"repository-structure",title:"Repository structure",to:"\u002Fengineering\u002Frepository-structure"},next:{slug:"builds-and-releases",title:"Build on Pull Requests",to:"\u002Fengineering\u002Fbuilds-and-releases"}}],fetch:{},mutations:[]}}("text","element","span","\n","token","comment","function",3,"h3","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code","npm","language-text","Development setup","clone-the-repo","Clone the repo","build-sdk","Build SDK","build-backend","Build Backend","build-frontend","Build Frontend","cypress","Cypress","2022-09-13T04:02:55.549Z")));