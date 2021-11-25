__NUXT_JSONP__("/getting-started/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:[{document:{slug:"upgrading",description:"Upgrading NocoDB : Docker, npm, Heroku!",title:w,position:p,category:"Getting started",menuTitle:w,link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:x,depth:p,text:y},{id:z,depth:q,text:A},{id:B,depth:q,text:C},{id:D,depth:q,text:E},{id:F,depth:q,text:G},{id:H,depth:p,text:I},{id:J,depth:p,text:K}],body:{type:"root",children:[{type:a,tag:t,props:{id:x},children:[{type:a,tag:e,props:{href:"#docker",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:r,props:{id:z},children:[{type:a,tag:e,props:{href:"#find-stop--delete-nocodb-docker-container",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:A}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,s]},children:[{type:a,tag:n,props:{},children:[{type:b,value:"docker ps\n\ndocker stop YOUR_CONTAINER_ID\"\n\ndocker rm YOUR_CONTAINER_ID\"\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{id:B},children:[{type:a,tag:e,props:{href:"#find--remove-nocodb-docker-image",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,s]},children:[{type:a,tag:n,props:{},children:[{type:b,value:"docker images\n\ndocker rmi YOUR_IMAGE_ID\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{id:D},children:[{type:a,tag:e,props:{href:"#pull-the-latest-nocodb-image-with-same-environment-variables",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,s]},children:[{type:a,tag:n,props:{},children:[{type:b,value:"docker run -d -p 8080:8080 \\\n    -e NC_DB=\"YOUR_NC_DB_URL\" \\\n    -e NC_AUTH_JWT_SECRET=\"YOUR_NC_AUTH_JWT_SECRET_IF_GIVEN\" \\\n    nocodb\u002Fnocodb:latest\n"}]}]}]},{type:b,value:c},{type:a,tag:o,props:{},children:[{type:b,value:"Updating nocodb docker container is similar to updating "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.whitesourcesoftware.com\u002Ffree-developer-tools\u002Fblog\u002Fupdate-docker-images\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"any other docker container"}]},{type:b,value:"."}]},{type:b,value:c},{type:a,tag:r,props:{id:F},children:[{type:a,tag:e,props:{href:"#example-docker-upgrade",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:o,props:{},children:[{type:a,tag:"img",props:{alt:"Screen Shot 2021-09-16 at 09 23 07",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png"},children:[]}]},{type:b,value:c},{type:a,tag:t,props:{id:H},children:[{type:a,tag:e,props:{href:"#node",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:o,props:{},children:[{type:b,value:"Updating docker container is similar to updating a npm package."}]},{type:b,value:c},{type:a,tag:o,props:{},children:[{type:b,value:"From your root folder"}]},{type:b,value:c},{type:a,tag:L,props:{id:"uninstall-nocodb-package"},children:[{type:a,tag:e,props:{href:"#uninstall-nocodb-package",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:"Uninstall nocodb package"}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,M]},children:[{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{className:[u,v]},children:[{type:b,value:N}]},{type:b,value:" uninstall nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:L,props:{id:"install-nocodb-package"},children:[{type:a,tag:e,props:{href:"#install-nocodb-package",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:"Install nocodb package"}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,M]},children:[{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{className:[u,v]},children:[{type:b,value:N}]},{type:b,value:" "},{type:a,tag:d,props:{className:[u,v]},children:[{type:b,value:"install"}]},{type:b,value:" --save nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:J},children:[{type:a,tag:e,props:{href:"#heroku",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:K}]},{type:b,value:c},{type:a,tag:o,props:{},children:[{type:b,value:"Use Heroku CLI login"}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m,s]},children:[{type:a,tag:n,props:{},children:[{type:b,value:"heroku container:login\ndocker pull nocodb\u002Fnocodb:latest\ndocker tag nocodb\u002Fnocodb:latest registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\ndocker push registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\nheroku container:release -a \u003CHeroku App Name\u003E web\n"}]}]}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fupgrading",extension:".md",createdAt:O,updatedAt:O,to:"\u002Fgetting-started\u002Fupgrading"},prev:{slug:"installation",title:"Installation",to:"\u002Fgetting-started\u002Finstallation"},next:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"}}],fetch:{},mutations:[]}}("element","text","\n","span","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code","p",2,3,"h3","language-text","h2","token","function","Upgrading","docker","Docker","find-stop--delete-nocodb-docker-container","Find, stop & delete nocodb docker container","find--remove-nocodb-docker-image","Find & remove nocodb docker image","pull-the-latest-nocodb-image-with-same-environment-variables","Pull the latest nocodb image with same environment variables","example-docker-upgrade","Example docker upgrade","node","Node","heroku","Heroku","h4","language-bash","npm","2021-11-25T15:05:34.988Z")));