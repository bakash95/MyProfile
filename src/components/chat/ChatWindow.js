import React, { Component } from 'react'

import chat from '../../img/chat_icon.png'
import './css/chat.css'

export default class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openOrNot: false,
            Chat: null
        }
    }

    closeChat = () => {
        this.setState((props) => { return { openOrNot: !props.openOrNot } })
        if (!this.state.Chat) {
            console.log("importing")
            import('./Chat').then((Chat) => this.setState({ Chat: Chat.default }))
                .catch((error) => console.log("error loading chat module" + error))
        }
    }

    render() {
        let isChatOpen = this.state.openOrNot;
        let ChatComp = this.state.Chat;
        return (
            !isChatOpen ? <img src={chat} alt="chat" onClick={this.closeChat} className="chat-button" /> :
                ChatComp && <ChatComp closeChat={this.closeChat} />
        )
    }
}