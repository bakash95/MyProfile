(window.webpackJsonpmyprofile=window.webpackJsonpmyprofile||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),i=n.n(c),o=(n(100),n(4)),l=n(5),s=n(7),u=n(6),m=n(8),p=(n(101),n(102),n(103),function(e){return r.a.createElement("button",{className:"toggler","aria-label":"toggle menu",onClick:e.pageActions.toggleDrawer},r.a.createElement("div",{className:"toggle_line"}),r.a.createElement("div",{className:"toggle_line"}),r.a.createElement("div",{className:"toggle_line"}))}),h=n(58),d=n(85),g=n.n(d),f=n(86),b=n.n(f),v=n(87),A=n.n(v),w=(n(104),n(13)),E=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onMouseLeave=function(e){n.setState(Object(h.a)({},e,""))},n.mouseOver=function(e){n.setState(Object(h.a)({},e," animated bounce"))},n.clickAction=function(e){n.props.pageActions.toggleSpinner(),window.location.href=e},n.redirectLinkedIn=function(){w.a.event({category:"external_click",action:"redirect",label:"linkedIn"}),n.clickAction("https://www.linkedin.com/in/akash-b-8675ba155/")},n.redirectGitHub=function(){w.a.event({category:"external_click",action:"redirect",label:"Github"}),n.clickAction("https://github.com/bakash95")},n.switchTheme=function(){var e="light"===n.state.currentTheme,t=e?n.state.darkTheme:n.state.lightTheme;n.setState({currentTheme:e?"dark":"light"},function(){return w.a.event({category:"theme",action:"switch theme",label:n.state.currentTheme})}),Object.keys(t).forEach(function(e){var n=t[e];document.documentElement.style.setProperty(e,n)})};var a=(new Date).getHours();return n.state={openClassForGit:"",openClassForLinkedIn:"",openClassForTheme:"",currentTheme:a<=6||a>=18?"light":"dark",darkTheme:{"--color-background":"rgba(45,45,45,0.98)","--color-textcolor":"white","--color-theme":"rgb(224, 114, 79)","--color-gradient":"rgb(224, 114, 79)"},lightTheme:{"--color-background":"white","--color-textcolor":"rgba(45,45,45,0.98)","--color-theme":"rgba(11, 122, 231, 1)","--color-gradient":"#73baf3"}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.switchTheme()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{className:"ext_icon"+this.state.openClassForTheme,title:"Switch Theme",src:A.a,alt:"Switch Theme",onMouseOver:function(){return e.mouseOver("openClassForTheme")},onMouseLeave:function(){e.onMouseLeave("openClassForTheme")},onClick:this.switchTheme}),r.a.createElement("img",{className:"ext_icon"+this.state.openClassForGit,onMouseOver:function(){return e.mouseOver("openClassForGit")},onMouseLeave:function(){e.onMouseLeave("openClassForGit")},onClick:this.redirectGitHub,src:b.a,alt:"git goes here"}),r.a.createElement("img",{className:"ext_icon"+this.state.openClassForLinkedIn,src:g.a,alt:"linkedIn",onMouseOver:function(){return e.mouseOver("openClassForLinkedIn")},onClick:this.redirectLinkedIn,onMouseLeave:function(){e.onMouseLeave("openClassForLinkedIn")}}))}}]),t}(a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("nav",{className:"navbar_comp"},r.a.createElement(p,{pageActions:this.props.pageActions}),r.a.createElement("div",{className:"icon_holder"},r.a.createElement(E,{pageActions:this.props.pageActions}))))}}]),t}(a.Component),O=n(24),N=n.n(O),C=n(39),y=n(57),S=(n(108),n(88)),j=n.n(S),T=n(61),x=n(89),L=n.n(x),U=(n(109),function(e){return r.a.createElement("object",{data:L.a,type:"image/svg+xml","aria-label":"Loading...",className:"loadingIndicator"})}),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={menuData:{home:"/",resume:"/resume",projects:"projects"},showSpinner:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.b.callAPI("/menu");case 3:t=e.sent,this.setState({menuData:t.response}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:this.setState({showSpinner:!1});case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=this.state.menuData;return r.a.createElement("nav",{className:e.openOrNot?"slider open":"slider"},r.a.createElement("div",{className:"image_holder"},r.a.createElement("img",{className:"profile_image",src:j.a,alt:":("})),r.a.createElement("div",{className:"nav_content"},this.state.showSpinner?r.a.createElement(U,null):t&&Object.keys(t).map(function(n){return r.a.createElement(y.a,{to:t[n],key:t[n]},r.a.createElement("button",{className:"nav_button",onClick:function(){e.pageActions.toggleDrawer()}},n))})))}}]),t}(a.Component),J=(n(112),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.toggleDrawer})}),I=[{title:"Hospital Mgmt",content:"Plain Spring Boot Application with API gateway with URL whitelisting and role based Login with JWT and custom claims"},{title:"NewsBulletin",content:"A web Application that uses plain vanilla JS for displaying news articles"},{title:"Lending Loans",content:"A ReactJS Application that displays and filters loans lent to users and has a responsive UI and a powerful search utilising Hibernate Search for filtering and sorting with spring data for storing and retrieving data from a Mysql DB"},{title:"BlogApp",content:"A BlogApp which is to show articles and also allow to post articles along with a provision to list based on authors"},{title:"Spring Security based Login",content:"A Spring MVC application with Spring security backed login function"},{title:"Speech keep App",content:"A speech keep app which allows to add speeches to be written and view/edit added speeches"}],R=(n(113),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"container"},I.map(function(e){return r.a.createElement("article",{className:"cardContainer"},r.a.createElement("div",{className:"cardText"},r.a.createElement("summary",{className:"cardTextHeader"},e.title),r.a.createElement("p",{className:"cardTextContent"},e.content)))}))}}]),t}(a.Component)),M=(n(114),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"border-btm"},"Hi, This is Akash"),r.a.createElement("section",null,r.a.createElement("article",{className:"line-1_7"},"This is a Application made with ReactJS ,The WebApp will be responsive with a option to Switch themes, you can view my resume and set of projects under my belt and a link to my LinkedIN and Github profile..")))}),V=n(171),P=n(170),D=n(17),H=(n(115),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main-inline"},r.a.createElement("section",{className:"header_resume"},r.a.createElement("div",{className:"flt-left"},r.a.createElement("h1",{className:"name-headr"},"Akash"),r.a.createElement("h2",{style:{fontSize:"1em"}},"Software Developer")),r.a.createElement("div",{className:"flt-right"},r.a.createElement("ul",null,r.a.createElement("li",null,"8056XXXX49"),r.a.createElement("li",null,"bakash050695@gmail.com")))),r.a.createElement("div",{className:"margin-section"},r.a.createElement("section",{className:"section-container"},r.a.createElement("article",null,r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h1",null,"Resume Sumary")),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("p",null,"Full Stack Developer who is experienced in developing secure, asynchronous service oriented applications using frameworks such as Spring, Apache camel and libraries like Reactjs with intermediate experience in API Gateway")))),r.a.createElement("section",{className:"section-container"},r.a.createElement("article",null,r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h1",null,"work experience")),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("h4",null,"PROGRAMMER ANALYST, COGNIZANT TECHNOLOGY SOLUTIONS"),r.a.createElement("ul",null,r.a.createElement("li",null,"Worked on letter processing module (Microservice) which routes letter requests based on conditions defined in Apache camel."),r.a.createElement("li",null,"Created a REST/SOAP UI client with utilities including a XML/JSON formatter ,Zip and Unzip ,Split and Merge."),r.a.createElement("li",null,"Refactored JUNITs for an entire code base in a record span of 2 months."),r.a.createElement("li",null,"performed modularization process for a EAR which was critical for the GO-LIVE of a project"),r.a.createElement("li",null,"Solved technical issues before GO-LIVE and identified technical and functional limiters. "),r.a.createElement("li",null,"Created  SOAP UI TEST SUITE projects for the account to do a shakeout test of the entire application."),r.a.createElement("li",null,"Helped in creating a AutoLogInjector that automatically inserts logs at important portions of the code"),r.a.createElement("li",null,"Helped in the development of a standalone tool to identify duplicate bean declarations."))),r.a.createElement("div",{className:"sectionContent"},r.a.createElement("h4",null,"Associate Software Developer,Banca Sella SPA"),r.a.createElement("ul",null,r.a.createElement("li",null,"Managed InternetBanking application for Banca Sella"),r.a.createElement("li",null,"Worked on ReactJS and spring backed Java Backend")))))))}}]),t}(a.Component)),B=n(92),G=n.n(B),q=(n(93),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).closeChat=function(){a.setState(function(e){return{openOrNot:!e.openOrNot}}),a.state.Chat||(n.e(3).then(n.bind(null,174)).then(function(e){return a.setState({Chat:e.default})}).catch(function(e){return console.error("error loading chat module"+e)}),w.a.event({category:"help_center",action:"chat",label:"click"}))},a.state={openOrNot:!1,Chat:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.openOrNot,t=this.state.Chat;return e?t&&r.a.createElement(t,{closeChat:this.closeChat}):r.a.createElement("img",{src:G.a,alt:"chat",onClick:this.closeChat,className:"chat-button"})}}]),t}(a.Component)),W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleDrawer=function(){n.setState(function(e){return{drawOpen:!e.drawOpen}})},n.toggleSpinner=function(){n.setState(function(e){return{showSpinner:!e.showSpinner}})},n.state={drawOpen:!1,showSpinner:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){w.a.initialize("UA-160375951-1")}},{key:"render",value:function(){var e=null;this.state.drawOpen&&(e=r.a.createElement(J,{toggleDrawer:this.toggleDrawer}));var t={toggleDrawer:this.toggleDrawer,toggleSpinner:this.toggleSpinner};return this.state.showSpinner?r.a.createElement(U,null):r.a.createElement(D.a,null,r.a.createElement("div",{className:"app",style:{height:"100%"}},r.a.createElement(k,{pageActions:t}),r.a.createElement(F,{pageActions:t,openOrNot:this.state.drawOpen}),e,r.a.createElement(X,null),r.a.createElement(q,null),r.a.createElement(Q,null)))}}]),t}(a.Component),Q=function(){return Object(D.g)().listen(function(e){var t=e.pathname;w.a.set({location:t}),w.a.pageview(t)}),r.a.createElement(r.a.Fragment,null)},X=function(){var e=Object(D.h)();return r.a.createElement(V.a,null,r.a.createElement(P.a,{key:e.key,classNames:"page",timeout:100,unmountOnExit:!0},r.a.createElement(D.d,{location:e},r.a.createElement(D.b,{path:"/",component:W},r.a.createElement(D.b,{path:"/",exact:!0,component:M}),r.a.createElement(D.b,{path:"/resume",exact:!0,component:H}),r.a.createElement(D.b,{path:"/projects",exact:!0,component:R})))))},Y=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116);i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(24),r=n.n(a),c=n(39),i=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,i,l,s,u=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:{"Content-Type":"application/json"},c=u.length>3&&void 0!==u[3]?u[3]:void 0,i=new AbortController,l={method:n,mode:"cors",headers:a,body:JSON.stringify(c),signal:i.signal},setTimeout(function(){i.abort()},3e3),e.next=8,fetch(o()+t,l);case 8:return s=e.sent,e.next=11,s.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http";return e+"://localhost:8080"};t.b={callAPI:i}},85:function(e,t,n){e.exports=n.p+"static/media/linkedIn.64050d62.svg"},86:function(e,t,n){e.exports=n.p+"static/media/git.1454e8de.svg"},87:function(e,t,n){e.exports=n.p+"static/media/theme.61d85715.svg"},88:function(e,t,n){e.exports=n.p+"static/media/latest_photo.e20a68ed.jpg"},89:function(e,t,n){e.exports=n.p+"static/media/spinner.c191eeb3.svg"},92:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABACAYAAACkwA+xAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACAFJREFUaIHtmltMU1sax39tkQKtAh6FQ8UeDMiDongF9XScBBOJyRmcjJH4IBpiVGRQYCTMEEyIPsi8TNSgAW9p9EFBZdAEh0wmalCJI4Y5EBwG9ZiK3JQiR0Ao0Mueh1IilkI37hYf+CUrafda+/vWf6/LXutbG2aZZZZZZpl5ZCLLKjxVkUmwjSaPowSygXpgGBBmKLUAfwNCPSV00ajImRI4UTICP05XkKtu7A/8G1ip1WrJzc0lLi4Of3//6fqZNhaLhebmZk6dOkVtbS1AH7AW+EUqH38BhCVLlghdXV3Ct8DIyIiwbds2RwvfkUoowEtAuHLlykxrHMeLFy8cYm1INH5VowYFg8Ew0/qcCA0NdQjeKlaYzwTX5jp+qNXqcRm1tbVcu3ZNrI9pc+LECebNmzfumkqlcvwMkMLH94y2rNFoHPdU9Xq9V2ffzs5Op5aNjIx05P9erLCJWtYlUVFR7N27V6yPaSP17C9KrE6nQ6fTSVoBbyJKrMFg4OnTp56qixPbt2+XtHVFia2uriY1NVUy51PR2dk5c2Lnzp1LZGSkZM6nQqHw/L7D5Wz8LfA1s7Fc6if1LSOqG9+6dYucnBxP1cWJZ8+esXDhQsnsiRL76dMnWlpaJHM+FVarVVJ7osQmJCRQUVEhaQUmIygoSFJ7osRqtVq0Wq2kFfAmot+zxcXFnqqLEyUlJZK2rugVVFlZmWTOp+L06dOS2hMldvny5Rw9elTSCkxGQIAku7gxJopBfQd0A3R0dBAWFiapw69Fq9XS2tpKUlJS5YYNGz5/NYwAz1Qq1d8zMzOHJ7p3opbtAT4A3zU0NHxTYo1GI21tbQBER0f/JJM5t9Xg4OAvhYWFf8jLy2v8Ms9VdPEckL5582bu3buHj4+o3u4xsrKyOHPmDDExMU4RE4vFgsFg4OXLlwBGhUKxMjc39507dsOwt66wdetWoa6uTrBarTOyFrbZbMLr16+FtLQ0ARBkMpnw8OFDl+Wrq6uFwsJCobCw8JyYB/kjMMjopsDHx0dQqVSikuNevV4/YcWampqEsLAwAXBpQ6lUjtmRy+XChQsXJn04JpPJIbbtS0GT9c8aYDeQB6yxWCxyi8Ui5mGNkZqaysDAAOnp6Xw+zt68eUNnZycAAwMDk9qIjY0lIyODFStWOAUQwsLCxhY7fn5+KJVKTCbT91/amGowVjrsYd/6uTV4g4OD5yYnJ//RbDZz/fp1TCYTGRkZNDQ0cPbsWXx9fQHYsmULCoUCq9XKunXrWLt2rZMtuVzO/PnzUavVdHd38+DBA6cycXFxTis72QSz11SVH8EueBXwA/aDLnfEzo+IiCAkJITi4mKOHDnC+fPnuXjxIk1NTZSXlxMaGoqvry/p6ekUFRVhsVjYvXu3O+adWLRokassBTC2m3CnpUaA2tHkFgcOHAgXBOEMgK+vLyUlJaxatYrDhw9TU1PD+vXruX37NmvWrGHPnj0UFRVRX19PcHAwERER7roZY5K3RTCjawYQuYL6GtLS0ggMDGT//v20trai0+nQ6/UkJyezbNkympqayM7OJiEhQbTtuLg4V/eNi+t4NVKh0+nIy8sjPDwck8nErl27OHbsGCkpKQDU19cTGBhIUFCQqORuUM6rq4XFixeTn59PVlYWqamp3Lx5k5MnT45NTEajkdjYWDZt2uQR/14V++HDBxoaGgA4ePAgarUavV5PXV3dWJnCwkKys7NF2dVqtURFRU1Zzqtie3t7HQfKAERHR5OSkkJZWRkjIyMAVFZWEh8fL3qJ+s2JXbBgAYmJieOuJSYmkpSUxKFDh+jutk+cc+bMYetW908kQ0JC3CrnVbFKpRKNRuN0XaPR8PjxY2JiYrBYLAQHB09YzhXu7nu9Kra9vZ0bN264zD9+/Di9vb309PSg1+vdtjvJq2ccXhXr5+dHeHi45HYDAwPdKucRsQqFYsRisTjFfTUazbSXhO4iCAJWqxVBEJx2LR5ZVOTk5BhtNltHT08P/f39nnDhkvb2diwWC/39/U7RfI+IlclkglwuPy0IAhUVFXz8+NETbpx4//49lZX2jVpjY+O/vsz32JgdGho6pVQqf9PR0fG7kpIS1Gq10xGk2WzGZrOxceNG4uPjx+W9evWK+/fvY7O599mi2WxmcHAQgLdv396vqqr6D/ZNzBhiPtQUTUFBgY9SqcySyWRHgMWuyvn7+5OZmTn2v6amhkePHon2ZzKZOhsbG/9x586dJzabrRe49Xm+R8U6EARBtnLlypju7u7f8tnQ2bdv359VKpVmx44dLF26FLPZzN27d2lubsZqtVqfP39eWl1d7dbWcmBgwNzX1+cIoZqBfwJdn5fxyqtHJpMJQCPwFogCVKtXr9aoVCpNQEAAkZGR9Pb2Ul5eTldXF2azua+qqurckydPHN8ndgAmN1wJ2L9tfAU4xXm8HSPtBeoAdu7cWQD2U4a2tjYqKiowmUz09fW1lJaWFhkMhl+xV74W+K8Uzmfk5F0QBJkgCHvAPrGUlpZiMpno6Oh4WlRU9NdRocPYu6IkQmFmvgzH399fJ5PJjgK8e/cOq9UqNDc3l12+fPnW8PCwFfgVqMIeu5aMGQn1W63WHLl8rFP1GQyGP129elUY/d8CPMQ+yUiK17txQUGBn1wu3z76t89ms8VfunTJEdD+GbiHB4TCDI1Zm832P8AwNDT0Q35+fisQgl3kzzNRH2+yBHvIc5ZZZpma/wOJ6F+3GTgCAgAAAABJRU5ErkJggg=="},93:function(e,t,n){},95:function(e,t,n){e.exports=n(168)}},[[95,1,2]]]);
//# sourceMappingURL=main.45f5a7e1.chunk.js.map