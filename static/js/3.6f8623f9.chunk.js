(window.webpackJsonpmyprofile=window.webpackJsonpmyprofile||[]).push([[3],{163:function(e,t,s){e.exports=s.p+"static/media/close_icon.2a105e5b.svg"},164:function(e,t,s){e.exports=s.p+"static/media/send_icon.d6d8fbc4.svg"},165:function(e,t,s){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.r(t);var n=s(10),c=s(11),r=s(13),o=s(12),i=s(14),l=s(0),m=s.n(l),u=s(163),d=s.n(u),h=s(164),g=s.n(h),f=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(r.a)(this,Object(o.a)(t).call(this,e))).callBack=function(e){"Enter"!==e.key?s.setState({currentMessage:e.target.value}):s.sendMessage()},s.sendMessage=function(){s.refs.input.value="";var e=s.state.currentMessage;e&&""!==e&&(s.props.sendMessage(e),s.setState({currentMessage:""}))},s.keyPress=function(e){13===e.keyCode&&s.sendMessage()},s.state={},s}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"chatRoom"},m.a.createElement("input",{type:"text",className:"chatTextbox",ref:"input",onKeyDown:this.keyPress,onChange:this.callBack}),m.a.createElement("img",{className:"chatSend",src:g.a,alt:"send",onClick:this.sendMessage}))}}]),t}(l.PureComponent),p=s(56);s(89);s.d(t,"default",(function(){return v}));var v=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(r.a)(this,Object(o.a)(t).call(this,e))).sendMessage=function(e){var t={message:e,mine:!0};s.setState({messages:[].concat(a(s.state.messages),[t])}),s.state.websocket.send(e)},s.state={messages:[],currentMessage:"",websocket:null,closedChat:!1,closedChatMessage:"Technical Error"},s}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.state.websocket.close()}},{key:"componentDidMount",value:function(){var e=this,t=Object(p.a)("wss")+"/profile/websocket",s=new WebSocket(t);s.onmessage=function(t){var s={message:t.data,mine:!1};e.setState({messages:[].concat(a(e.state.messages),[s])})},s.onclose=function(t){1006===t.code?e.setState({closedChat:!0,closedChatMessage:"Your chat window expired"}):e.setState({closedChat:!0,closedChatMessage:"Oops there was technical issue!"})},s.onerror=function(t){e.setState({closedChat:!0,closedChatMessage:"Oops there was technical issue!"})},this.setState({websocket:s})}},{key:"componentDidUpdate",value:function(){this.refs.scrollToView&&this.refs.scrollToView.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return m.a.createElement("div",{className:"wrapper"},m.a.createElement("div",{className:"chat_title"},m.a.createElement("img",{className:"close",src:d.a,alt:"close",onClick:this.props.closeChat})),m.a.createElement("div",{className:"chatContent"},m.a.createElement("div",{className:"messages"},this.state.messages.map((function(e,t){return e.mine?m.a.createElement("div",{className:"message"},m.a.createElement("div",{className:"self"},e.message)):m.a.createElement("div",{className:"messageTheirs"},m.a.createElement("div",{className:"self",dangerouslySetInnerHTML:{__html:e.message}}))})),m.a.createElement("div",{ref:"scrollToView"}))),this.state.closedChat?m.a.createElement("span",{className:"chatRoom"},this.state.closedChatMessage):m.a.createElement(f,{sendMessage:this.sendMessage}))}}]),t}(l.PureComponent)}}]);
//# sourceMappingURL=3.6f8623f9.chunk.js.map