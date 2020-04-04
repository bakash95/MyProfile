import React, { PureComponent } from 'react'

import chat from '../../img/chat_icon.png'
import './css/chat.css'

import ReactGA from 'react-ga'

export default class ChatWindow extends PureComponent {
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
            import('./Chat').then((Chat) => this.setState({ Chat: Chat.default }))
                .catch((error) => console.error("error loading chat module" + error))
            ReactGA.event({
                category: 'help_center',
                action: 'chat',
                label: 'click'
            })
        }
    }

    render() {
        let isChatOpen = this.state.openOrNot;
        let ChatComp = this.state.Chat;
        let chatOpenFetched = isChatOpen && ChatComp;
        return (
            <>
                <img src={chat} alt="chat" onClick={this.closeChat} className="chat-button" />
                <div id={!chatOpenFetched ? "chatNotOpen" : "chatOpen"} className="modalContent" >
                    {chatOpenFetched ? <ChatComp closeChat={this.closeChat} /> : <div />}
                </div>
            </>
        )
    }
}