import React, { PureComponent } from 'react'
import image from './images/linkedIn.svg'
import git from './images/git.svg'
import call from './images/call.svg'
import email from './images/email.svg'
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
        window.location.href = url
    }
    redirectLinkedIn = () => {
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'linkedIn'
        })
        this.clickAction("https://www.linkedin.com/in/akash-b-8675ba155/")
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
                    <img title="Phone" style={{ "width": "40px", height: "50px", "padding": '0px 5px' }}
                        src={call} alt="Phone"
                        onClick={this.reachMeOnCall} >
                    </img>
                </a>
                <a href="mailto:bakash050695@gmail.com" >
                    <img title="Email" style={{ "width": "40px", height: "50px", "padding": '0px 5px' }}
                        src={email} alt="Email"
                        onClick={this.reachMeOnCall} >
                    </img>
                </a>
                <img style={{ "cursor": "pointer" }}
                    onClick={this.redirectGitHub}
                    src={git} alt="git goes here" />
                <img style={{ "cursor": "pointer" }}
                    src={image}
                    alt="linkedIn"
                    onClick={this.redirectLinkedIn} />
            </>
        )
    }
}