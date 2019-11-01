import React, { Component } from 'react'

import close from './img/close_icon.svg'

import SendComp from './SendComp'
import './css/chat.css'

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            currentMessage: '',
            websocket:null,
            closedChat:false,
            closedChatMessage:'Technical Error',
        }
    }

    componentDidMount(){
        let websocket = new WebSocket('ws://localhost:8080/profile');
        websocket.onmessage= (event)=>{
            let messObject = {
                "message":event.data,
                "mine":false
             }
           this.setState({ messages: [...this.state.messages, messObject] })
        };

        websocket.onclose = (event)=>{
            if(event.code!==1006)
                this.setState({closedChat:true,closedChatMessage:"Sorry your chat timed out as there was no input"});
        }

        websocket.onerror = (event)=>{
            this.setState({closedChat:true,closedChatMessage:"Oops there was technical issue!"});
        }

        this.setState({websocket:websocket})
    }

     
    componentDidUpdate(){
        this.refs.scrollToView && this.refs.scrollToView.scrollIntoView({behavior:'smooth'})
    }

    sendMessage = (message) => {
        let messObject = {
           "message":message,
           "mine":true
        }
        this.setState({ messages: [...this.state.messages,messObject ] });
        this.state.websocket.send(message);
    }

    render() {
        return (
            <div className="modalContent">
                <div className="wrapper">
                    <div className="chat_title">
                        <img className="close" src={close} alt="close" onClick={this.props.closeChat}/>
                    </div>
                    <div className="chatContent">
                        <div className="messages">
                            {
                                this.state.messages.map((messObject,index) => {
                                    if(messObject.mine){
                                        return <div className="message"><div className="self">{messObject.message}</div></div>
                                    }else{
                                        return <div className="messageTheirs"><div className="self" >{messObject.message}</div></div>
                                    }
                                    
                                })
                            }
                            <div ref="scrollToView"/>
                        </div>
                    </div>
                    {!this.state.closedChat ? <SendComp sendMessage={this.sendMessage}/>:<span className="chatClosed">{this.state.closedChatMessage}</span>}
                </div>
            </div>
        )
    }
}