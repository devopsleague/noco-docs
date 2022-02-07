__NUXT_JSONP__("/getting-started/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{document:{slug:"upgrading",description:"Upgrading NocoDB : Docker, npm, Heroku!",title:C,position:20,category:"Getting started",menuTitle:C,link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:D,depth:s,text:E},{id:F,depth:l,text:G},{id:H,depth:l,text:I},{id:J,depth:l,text:K},{id:L,depth:l,text:M},{id:N,depth:s,text:O},{id:P,depth:s,text:Q},{id:R,depth:l,text:S},{id:T,depth:l,text:U}],body:{type:"root",children:[{type:a,tag:t,props:{id:D},children:[{type:a,tag:d,props:{href:"#docker",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:m,props:{id:F},children:[{type:a,tag:d,props:{href:"#find-stop--delete-nocodb-docker-container",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,r]},children:[{type:a,tag:k,props:{},children:[{type:b,value:"docker ps\n\ndocker stop \"YOUR_CONTAINER_ID\"\n\ndocker rm \"YOUR_CONTAINER_ID\"\n"}]}]}]},{type:b,value:c},{type:a,tag:m,props:{id:H},children:[{type:a,tag:d,props:{href:"#find--remove-nocodb-docker-image",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,r]},children:[{type:a,tag:k,props:{},children:[{type:b,value:"docker images\n\ndocker rmi YOUR_IMAGE_ID\n"}]}]}]},{type:b,value:c},{type:a,tag:m,props:{id:J},children:[{type:a,tag:d,props:{href:"#pull-the-latest-nocodb-image-with-same-environment-variables",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:K}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,r]},children:[{type:a,tag:k,props:{},children:[{type:b,value:"docker run -d -p 8080:8080 \\\n    -e NC_DB=\"YOUR_NC_DB_URL\" \\\n    -e NC_AUTH_JWT_SECRET=\"YOUR_NC_AUTH_JWT_SECRET_IF_GIVEN\" \\\n    nocodb\u002Fnocodb:latest\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Updating nocodb docker container is similar to updating "},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.whitesourcesoftware.com\u002Ffree-developer-tools\u002Fblog\u002Fupdate-docker-images\u002F",rel:[u,v,w],target:x},children:[{type:b,value:"any other docker container"}]},{type:b,value:V}]},{type:b,value:c},{type:a,tag:m,props:{id:L},children:[{type:a,tag:d,props:{href:"#example-docker-upgrade",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:M}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:y,props:{alt:"Screen Shot 2021-09-16 at 09 23 07",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png"},children:[]}]},{type:b,value:c},{type:a,tag:t,props:{id:N},children:[{type:a,tag:d,props:{href:"#node",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:O}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Updating docker container is similar to updating a npm package."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"From your root folder"}]},{type:b,value:c},{type:a,tag:z,props:{id:"uninstall-nocodb-package"},children:[{type:a,tag:d,props:{href:"#uninstall-nocodb-package",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:"Uninstall nocodb package"}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,W]},children:[{type:a,tag:k,props:{},children:[{type:a,tag:e,props:{className:[A,B]},children:[{type:b,value:X}]},{type:b,value:" uninstall nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:z,props:{id:"install-nocodb-package"},children:[{type:a,tag:d,props:{href:"#install-nocodb-package",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:"Install nocodb package"}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,W]},children:[{type:a,tag:k,props:{},children:[{type:a,tag:e,props:{className:[A,B]},children:[{type:b,value:X}]},{type:b,value:" "},{type:a,tag:e,props:{className:[A,B]},children:[{type:b,value:"install"}]},{type:b,value:" --save nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:P},children:[{type:a,tag:d,props:{href:"#heroku",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:Q}]},{type:b,value:c},{type:a,tag:m,props:{id:R},children:[{type:a,tag:d,props:{href:"#using-the-heroku-cli-login",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:S}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q,r]},children:[{type:a,tag:k,props:{},children:[{type:b,value:"heroku container:login\ndocker pull nocodb\u002Fnocodb:latest\ndocker tag nocodb\u002Fnocodb:latest registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\ndocker push registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\nheroku container:release -a \u003CHeroku App Name\u003E web\n"}]}]}]},{type:b,value:c},{type:a,tag:z,props:{id:"on-apple-m1-chipset"},children:[{type:a,tag:d,props:{href:"#on-apple-m1-chipset",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:"On Apple M1 Chipset"}]},{type:b,value:c},{type:a,tag:"blockquote",props:{},children:[{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Please make sure you change Docker's default architecture to "},{type:a,tag:k,props:{},children:[{type:b,value:"linux\u002Famd64"}]},{type:b,value:" by running the following command "},{type:a,tag:"em",props:{},children:[{type:b,value:"before"}]},{type:b,value:" executing the aforementioned steps"}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"export DOCKER_DEFAULT_PLATFORM=linux\u002Famd64"}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"More details "},{type:a,tag:d,props:{href:"https:\u002F\u002Fmedium.com\u002Fgeekculture\u002Ffrom-apple-silicon-to-heroku-docker-registry-without-swearing-36a2f59b30a3",rel:[u,v,w],target:x},children:[{type:b,value:"here"}]},{type:b,value:V}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:m,props:{id:T},children:[{type:a,tag:d,props:{href:"#using-github",ariaHidden:g,tabIndex:h},children:[{type:a,tag:e,props:{className:[i,j]},children:[]}]},{type:b,value:U}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Fork the "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-seed-heroku",rel:[u,v,w],target:x},children:[{type:b,value:"nocodb-seed-heroku repository"}]},{type:b,value:" to your GitHub account.\nLogin to Heroku, go to your NocoDB app, and head to the \"Deploy\" tab.\nSelect \"GitHub\" in the \"Deployment method\" section."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"In the \"Connect to GitHub\" section, search for your forked nocodb-seed-heroku repo. Connect to it:"}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:y,props:{alt:Y,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479577-e8bdc1f0-99d1-4072-8d95-4879cc54ddb2.png"},children:[]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"In the \"Automatic deploys\" section, select \"Enable Automatic Deploys\":"}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:y,props:{alt:Y,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479705-b5280199-aa31-40db-a5aa-7586eb918c01.png"},children:[]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Head back to your forked nocodb-seed-heroku repo on your GitHub account. Edit one of your files and make a simple modification (example, add some random characters to the readme.md) and commit the change directly to the main branch."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This will trigger the Heroku deployment. Your app should now be updated to the latest release of NocoDB."}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fupgrading",extension:".md",createdAt:Z,updatedAt:Z,to:"\u002Fgetting-started\u002Fupgrading"},prev:{slug:"installation",title:"Installation",to:"\u002Fgetting-started\u002Finstallation"},next:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"}}],fetch:{},mutations:[]}}("element","text","\n","a","span","p","true",-1,"icon","icon-link","code",3,"h3","div","nuxt-content-highlight","pre","line-numbers","language-text",2,"h2","nofollow","noopener","noreferrer","_blank","img","h4","token","function","Upgrading","docker","Docker","find-stop--delete-nocodb-docker-container","Find, stop & delete nocodb docker container","find--remove-nocodb-docker-image","Find & remove nocodb docker image","pull-the-latest-nocodb-image-with-same-environment-variables","Pull the latest nocodb image with same environment variables","example-docker-upgrade","Example docker upgrade","node","Node","heroku","Heroku","using-the-heroku-cli-login","Using the Heroku CLI login","using-github","Using GitHub",".","language-bash","npm","image","2022-02-07T11:57:03.866Z")));