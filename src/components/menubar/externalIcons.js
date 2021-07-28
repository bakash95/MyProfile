import React, { PureComponent } from 'react'
import { ReactComponent as LinkedIN } from './images/linkedIn.svg'
import { ReactComponent as Git } from './images/git.svg'
import { ReactComponent as Call } from './images/call.svg'
import { ReactComponent as EmailIcon } from './images/email.svg'
import { ReactComponent as Codepen } from './images/codepen.svg'
import "animate.css"

import ReactGA from 'react-ga'

export default class ExternalIcons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openClassForGit: '',
            openClassForLinkedIn: '',
            openClassForTheme: ''
        }
    }
    clickAction = (url) => {
        window.open(url, '_blank')
    }
    redirectLinkedIn = () => {
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'linkedIn'
        })
        this.clickAction("https://www.linkedin.com/in/akash-b-8675ba155/")
    }
    redirectCodepen = () => {
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'codepen'
        })
        this.clickAction("https://codepen.io/bakash95/")
    }
    redirectGitHub = () => {
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'Github'
        })
        this.clickAction("https://github.com/bakash95")
    }
    reachMeOnCall = () => {
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'call'
        })
    }
    render() {
        return (
            <>
                <a href="tel:8056138749" >
                    <Call title="Phone"
                        height="100%"
                        width="100%"
                        alt="Phone"
                        onClick={this.reachMeOnCall} >
                    </Call>
                </a>
                <a href="mailto:bakash050695@gmail.com" >
                    <EmailIcon title="Email"
                        fill="var(--color-theme)"
                        alt="Email"
                        height="100%"
                        width="100%"
                        onClick={this.reachMeOnCall} >
                    </EmailIcon>
                </a>
                <Git style={{ "cursor": "pointer" }}
                    onClick={this.redirectGitHub}
                    alt="git goes here" />
                <LinkedIN style={{ "cursor": "pointer" }}
                    alt="linkedIn"
                    onClick={this.redirectLinkedIn} />
                <Codepen style={{ "cursor": "pointer" }}
                    alt="Codepen"
                    onClick={this.redirectCodepen} />
            </>
        )
    }
}