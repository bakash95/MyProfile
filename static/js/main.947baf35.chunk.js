(window.webpackJsonpmyprofile=window.webpackJsonpmyprofile||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n.n(o),c=(n(97),n(5)),l=n(6),s=n(8),u=n(7),m=n(9),h=(n(98),n(99),n(100),function(e){return r.a.createElement("button",{className:"toggler","aria-label":"toggle menu",onClick:e.pageActions.toggleDrawer},r.a.createElement("div",{className:"toggle_line"}),r.a.createElement("div",{className:"toggle_line"}),r.a.createElement("div",{className:"toggle_line"}))}),d=n(56),p=n(82),f=n.n(p),g=n(83),v=n.n(g),b=n(84),w=n.n(b),E=(n(101),n(14)),A=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onMouseLeave=function(e){n.setState(Object(d.a)({},e,""))},n.mouseOver=function(e){n.setState(Object(d.a)({},e," animated bounce"))},n.clickAction=function(e){n.props.pageActions.toggleSpinner(),window.location.href=e},n.redirectLinkedIn=function(){E.a.event({category:"external_click",action:"redirect",label:"linkedIn"}),n.clickAction("https://www.linkedin.com/in/akash-b-8675ba155/")},n.redirectGitHub=function(){E.a.event({category:"external_click",action:"redirect",label:"Github"}),n.clickAction("https://github.com/bakash95")},n.switchTheme=function(){var e="light"===n.state.currentTheme,t=e?n.state.darkTheme:n.state.lightTheme;n.setState({currentTheme:e?"dark":"light"},(function(){return E.a.event({category:"theme",action:"switch theme",label:n.state.currentTheme})})),Object.keys(t).forEach((function(e){var n=t[e];document.documentElement.style.setProperty(e,n)}))};var a=(new Date).getHours();return n.state={openClassForGit:"",openClassForLinkedIn:"",openClassForTheme:"",currentTheme:a<=6||a>=18?"light":"dark",darkTheme:{"--color-background":"rgba(18, 18, 18)","--color-textcolor":"white","--color-theme":"rgb(183, 148, 246)","--color-gradient":"rgb(183, 148, 246)"},lightTheme:{"--color-background":"white","--color-textcolor":"rgba(18, 18, 18)","--color-theme":"rgba(11, 122, 231, 1)","--color-gradient":"#73baf3"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.switchTheme()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{className:"ext_icon"+this.state.openClassForTheme,title:"Switch Theme",src:w.a,alt:"Switch Theme",onMouseOver:function(){return e.mouseOver("openClassForTheme")},onMouseLeave:function(){e.onMouseLeave("openClassForTheme")},onClick:this.switchTheme}),r.a.createElement("img",{className:"ext_icon"+this.state.openClassForGit,onMouseOver:function(){return e.mouseOver("openClassForGit")},onMouseLeave:function(){e.onMouseLeave("openClassForGit")},onClick:this.redirectGitHub,src:v.a,alt:"git goes here"}),r.a.createElement("img",{className:"ext_icon"+this.state.openClassForLinkedIn,src:f.a,alt:"linkedIn",onMouseOver:function(){return e.mouseOver("openClassForLinkedIn")},onClick:this.redirectLinkedIn,onMouseLeave:function(){e.onMouseLeave("openClassForLinkedIn")}}))}}]),t}(a.PureComponent),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("nav",{className:"navbar_comp"},r.a.createElement(h,{pageActions:this.props.pageActions}),r.a.createElement("div",{className:"icon_holder"},r.a.createElement(A,{pageActions:this.props.pageActions}))))}}]),t}(a.PureComponent),N=n(21),O=n.n(N),S=n(33),j=n(55),y=(n(105),n(59)),C=n(85),T=n.n(C),x=(n(106),function(e){return r.a.createElement("object",{data:T.a,type:"image/svg+xml","aria-label":"Loading...",className:"loadingIndicator"})}),L=n(86),P=n.n(L),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={menuData:{home:"/",resume:"/resume",projects:"projects"},imgSrc:P.a,showSpinner:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){var e=Object(S.a)(O.a.mark((function e(t,a){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.openOrNot||a.imgSrc){e.next=11;break}return e.prev=1,e.next=4,n.e(4).then(n.t.bind(null,170,7));case 4:r=e.sent,this.setState({imgSrc:r.default}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E.a.exception({description:"image load failed",fatal:!1});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(S.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.b.callAPI("/menu");case 3:t=e.sent,this.setState({menuData:t.response}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:this.setState({showSpinner:!1});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=this.state.menuData,n=this.state.imgSrc;return r.a.createElement("nav",{className:e.openOrNot?"slider open":"slider"},r.a.createElement("div",{className:"image_holder"},r.a.createElement("img",{className:"profile_image",src:n,alt:":("})),r.a.createElement("div",{className:"nav_content"},this.state.showSpinner?r.a.createElement(x,null):t&&Object.keys(t).map((function(n){return r.a.createElement(j.a,{to:t[n],key:t[n]},r.a.createElement("button",{className:"nav_button",onClick:function(){e.pageActions.toggleDrawer()}},n))}))))}}]),t}(a.PureComponent),M=(n(109),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.toggleDrawer})}),B=[{title:"Hospital Mgmt",content:"Plain Spring Boot Application with API gateway with URL whitelisting and role based Login with JWT and custom claims",url:"https://github.com/bakash95/HospitalMgmt"},{title:"NewsBulletin",content:"A News Bulletin App for listing news articles built with Vanilla JS and deployed in Aws BeanStalk and RDS",url:"https://github.com/bakash95/NewsBulletin"},{title:"Lending Loans",content:"A ReactJS Application that displays and filters loans lent to users and has a responsive UI and a powerful search utilising Hibernate Search for filtering and sorting with spring data for storing and retrieving data from a Mysql DB"},{title:"Stock Market Performance Visualizer",content:"A Stock Index Comparator Web App made with ReactJS,Spring Boot,MongoDB combined with Data Visualization Library Nivo Charts and deployed in Heroku Cloud"},{title:"Speech Management App",content:"A speech management app which allows to add speeches to be written and view/edit added speeches"}],D=(n(110),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"container"},B.map((function(e){return r.a.createElement("article",{className:"cardContainer"},r.a.createElement("div",{className:"cardText"},r.a.createElement("summary",{className:"cardTextHeader"},e.title),r.a.createElement("p",{className:"cardTextContent"},e.content)))})))}}]),t}(a.PureComponent)),U=(n(111),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"border-btm"},"Hi , My Name is Akash"),r.a.createElement("section",null,r.a.createElement("article",{className:"line-1_7"},"Feel Free to switch between Light and Dark themes.You can view my Resume/Projects and also find a link to my LinkedIN and GitHub Profile")))}),F=n(167),H=n(166),R=n(20),X=(n(112),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main-inline"},r.a.createElement("section",{className:"header_resume"},r.a.createElement("div",{className:"flt-left"},r.a.createElement("h1",{className:"name-headr"},"Akash"),r.a.createElement("h2",{style:{fontSize:"1em"}},"Software Developer")),r.a.createElement("div",{className:"flt-right"},r.a.createElement("ul",null,r.a.createElement("li",null,"8056XXXX49"),r.a.createElement("li",null,"bakash050695@gmail.com")))),r.a.createElement("div",{className:"margin-section"},r.a.createElement("section",{className:"section-container"},r.a.createElement("article",null,r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h1",null,"Resume Sumary")),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("p",null,"Full Stack Developer who is experienced in developing secure, asynchronous service oriented applications using frameworks such as Spring, Apache camel and libraries like Reactjs with intermediate experience in API Gateway")))),r.a.createElement("section",{className:"section-container"},r.a.createElement("article",null,r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h1",null,"work experience")),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("h4",null,"PROGRAMMER ANALYST, COGNIZANT TECHNOLOGY SOLUTIONS"),r.a.createElement("ul",null,r.a.createElement("li",null,"Worked on letter processing module (Microservice) which routes letter requests based on conditions defined in Apache camel."),r.a.createElement("li",null,"Created a REST/SOAP UI client with utilities including a XML/JSON formatter ,Zip and Unzip ,Split and Merge."),r.a.createElement("li",null,"Refactored JUNITs for an entire code base in a record span of 2 months."),r.a.createElement("li",null,"performed modularization process for a EAR which was critical for the GO-LIVE of a project"),r.a.createElement("li",null,"Solved technical issues before GO-LIVE and identified technical and functional limiters. "),r.a.createElement("li",null,"Created  SOAP UI TEST SUITE projects for the account to do a shakeout test of the entire application."),r.a.createElement("li",null,"Helped in creating a AutoLogInjector that automatically inserts logs at important portions of the code"),r.a.createElement("li",null,"Helped in the development of a standalone tool to identify duplicate bean declarations."))),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("h4",null,"Associate Software Developer,Banca Sella SPA"),r.a.createElement("ul",null,r.a.createElement("li",null,"Managed InternetBanking application for Banca Sella"),r.a.createElement("li",null,"Worked on ReactJS and spring backed Java Backend")))))))}}]),t}(a.PureComponent)),J=n(89),W=n.n(J),z=(n(90),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).closeChat=function(){a.setState((function(e){return{openOrNot:!e.openOrNot}})),a.state.Chat||(n.e(3).then(n.bind(null,171)).then((function(e){return a.setState({Chat:e.default})})).catch((function(e){return console.error("error loading chat module"+e)})),E.a.event({category:"help_center",action:"chat",label:"click"}))},a.state={openOrNot:!1,Chat:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.openOrNot,t=this.state.Chat,n=e&&t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:W.a,alt:"chat",onClick:this.closeChat,className:"chat-button"}),r.a.createElement("div",{id:n?"chatOpen":"chatNotOpen",className:"modalContent"},n?r.a.createElement(t,{closeChat:this.closeChat}):r.a.createElement("div",null)))}}]),t}(a.PureComponent)),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleDrawer=function(){n.setState((function(e){return{drawOpen:!e.drawOpen}}))},n.toggleSpinner=function(){n.setState((function(e){return{showSpinner:!e.showSpinner}}))},n.state={drawOpen:!1,showSpinner:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){E.a.initialize("UA-160375951-1")}},{key:"render",value:function(){var e=null;this.state.drawOpen&&(e=r.a.createElement(M,{toggleDrawer:this.toggleDrawer}));var t={toggleDrawer:this.toggleDrawer,toggleSpinner:this.toggleSpinner};return this.state.showSpinner?r.a.createElement(x,null):r.a.createElement(R.a,null,r.a.createElement("div",{className:"app",style:{height:"100%"}},r.a.createElement(k,{pageActions:t}),r.a.createElement(I,{pageActions:t,openOrNot:this.state.drawOpen}),e,r.a.createElement(Z,null),r.a.createElement(z,null),r.a.createElement(Q,null)))}}]),t}(a.PureComponent),Q=function(){return Object(R.g)().listen((function(e){var t=e.pathname;E.a.set({location:t}),E.a.pageview(t)})),r.a.createElement(r.a.Fragment,null)},Z=function(){var e=Object(R.h)();return r.a.createElement(F.a,null,r.a.createElement(H.a,{key:e.key,classNames:"page",timeout:500,unmountOnExit:!0},r.a.createElement(R.d,{location:e},r.a.createElement(R.b,{path:"/",component:G},r.a.createElement(R.b,{path:"/",exact:!0,component:U}),r.a.createElement(R.b,{path:"/resume",exact:!0,component:X}),r.a.createElement(R.b,{path:"/projects",exact:!0,component:D})))))},V=G,Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(113);i.a.render(r.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/MyProfile",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/MyProfile","/service-worker.js");Y?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(21),r=n.n(a),o=n(33),i=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,i,l,s,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:{"Content-Type":"application/json"},o=u.length>3&&void 0!==u[3]?u[3]:void 0,i=new AbortController,l={method:n,mode:"cors",headers:a,body:JSON.stringify(o),signal:i.signal},setTimeout((function(){i.abort()}),3e3),e.prev=6,e.next=9,fetch(c()+t,l);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(6),e.t0;case 14:return e.next=16,s.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https";return e+"://profilebe.herokuapp.com"};t.b={callAPI:i}},82:function(e,t,n){e.exports=n.p+"static/media/linkedIn.64050d62.svg"},83:function(e,t,n){e.exports=n.p+"static/media/git.1454e8de.svg"},84:function(e,t,n){e.exports=n.p+"static/media/theme.61d85715.svg"},85:function(e,t,n){e.exports=n.p+"static/media/spinner.c191eeb3.svg"},86:function(e,t,n){e.exports=n.p+"static/media/blurredprofile.c6c58716.jpg"},89:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6hJREFUeJztmU1oXFUUx3/3vvl4bSaZmabSlhQMSayIm4JYla5cBUFwZUVEoQgigh8IgSJuXFQQ0Y0fi6IiFCvSnTtXLoTUlaAtaD+MNhp1NOmYSeblzcd910XNJE1mbHNz72QG7291Zw73nXP+7557z+OCx+PxeDwej8fj8fwPEaYT4ziekkFwHK0zNgNajxCirLV+IZPJnHPlw4g4jqd0l4jjeKVUKuVc5SKNJgXBcduBtEMpRa1eD7PZ7AOufBgJ4HLZr6KUohpFaK0RQmRd+TETwDHrk3eN0SZYr9evpNPpcdvBQPvkPyknjUsxSfsZsgacKfw+9PxrD4rmVv2lTAN1Qac3L4RM/8dazQLPlkcWzwPvb9Vnz5TAdpe9Rhw2mdcTAtioeam12Ylm7LENP1drfFmqsNhQm2w/dbAppbgwv8hXCxHLzQ5l7hBre8DZ2Wuc+PZXNFBIB3x2dJw7BkMAzlxd4NXv5gAoZlKcPTrOWC6LUooPLv/BG5cXABjOBHx8+AAHd3Vva7K2At66WGJ1Af/dUHw4M9+yvf1DqTUu15t8NDOPUorlKOLdmXLLtlBXfPpbxVZIt4Q1ATbWr+4wBkh00qp5vdHq/ui/AWsCvHTn/tZ4KB3w9NjedbZ9rXE+HXBs/8D1Dg94brTYshXSAY+NDNoK6ZawVmyP376He4cH+HE55sieAYqZtUc/OTrM/cMDXFla4e5Qkk+t9V9PHBzivkLIbNzgnsIu8qnuHkxWd5uJXJaJXPu2fWx3mn002h51E7kMEznnnxdt6Yrc3eztt4pzAXo5eXAsQK8nDw4F6IfkwZEA/ZI8GAoghGh0srlIXjnU0UgApdTpDv9bT35JwWxHubePUR8QhuHrcRwLKeVTQAZACDEaraxsSr6m4WLNLLgogXMR1B2uAONGKAzDk8DJ1d/XyuVYSnlDF1TTcLoMvzh8g9vF2SmQQNTN5LUw+4xyJUBluqpf7uabF4g/Tea5EKAiYPLhA/lTidafO3j+ZjRXmyr1nslU47vBjfy7B9QETObz+a+vB6bFi5cqRwTsTcTWfekkeUVKuflWKEliLeWjAFLrOMpVp0+NjEQmcdsUoBRI+UgreQtMff/XYCxSX2wUIYHqO4fyVu4LrZWAgIdsJg/w5l23LYW6OZkkibPbYWsCFIvFb2w9az2uReiJe4Gb4VKEvhAA3InQNwLAmggyYXqnY9lRnpmb273TMXg8Ho/H4/F4PB6Px9PH/ANMdxhN+fFKRQAAAABJRU5ErkJggg=="},90:function(e,t,n){},92:function(e,t,n){e.exports=n(164)},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.947baf35.chunk.js.map