import React, { PureComponent } from 'react'
import send from './img/send_icon.svg'

class SendComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    callBack = (event) => {
        if (event.key === 'Enter') {
            this.sendMessage();
            return;
        }
        this.setState({ currentMessage: event.target.value });
    }

    sendMessage = () => {
        this.refs.input.value = ""
        let message = this.state.currentMessage
        if (message && message !== "") {
            this.props.sendMessage(message);
            this.setState({ currentMessage: "" })
        }
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.sendMessage();
        }
    }

    render() {
        return (
            <div className="chatRoom">
                <input type="text" className="chatTextbox" ref="input" onKeyDown={this.keyPress} onChange={this.callBack} />
                <img className="chatSend" src={send} alt="send" onClick={this.sendMessage} />
            </div>
        )
    }
}

export default SendComp