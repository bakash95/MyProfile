import React, { PureComponent } from 'react'
import image from './images/linkedIn.svg'
import git from './images/git.svg'
import theme from './images/theme.svg'
import "animate.css"

import ReactGA from 'react-ga'

export default class ExternalIcons extends PureComponent {
    constructor(props) {
        super(props);
        let currentHours = new Date().getHours();
        this.state = {
            openClassForGit: '',
            openClassForLinkedIn: '',
            openClassForTheme: '',
            currentTheme: currentHours <= 6 || currentHours >= 18 ? "light" : "dark",
            darkTheme: {
                "--color-background": "rgba(18, 18, 18)",
                "--color-textcolor": "white",
                "--color-theme": "rgb(183, 148, 246)",
                "--color-gradient": "rgb(183, 148, 246)"
            },
            lightTheme: {
                "--color-background": "white",
                "--color-textcolor": "rgba(18, 18, 18)",
                "--color-theme": "rgba(11, 122, 231, 1)",
                "--color-gradient": "#73baf3"
            },
        }
    }
    componentDidMount() {
        this.switchTheme()
    }
    onMouseLeave = (event) => {
        this.setState({ [event]: "" });
    }
    mouseOver = (event) => {
        this.setState({ [event]: " animated bounce" });
    }
    clickAction = (url) => {
        this.props.pageActions.toggleSpinner();
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
    redirectGitHub = ()=>{
        ReactGA.event({
            category: 'external_click',
            action: 'redirect',
            label: 'Github'
        })
        this.clickAction("https://github.com/bakash95")
    }
    switchTheme = () => {
        let isLight = this.state.currentTheme === 'light'
        let nextTheme = isLight ? this.state.darkTheme : this.state.lightTheme
        this.setState({ currentTheme: isLight ? "dark" : "light" }, () => ReactGA.event({
            category: 'theme',
            action: 'switch theme',
            label: this.state.currentTheme
        }));
        Object.keys(nextTheme).forEach(key => {
            const value = nextTheme[key];
            document.documentElement.style.setProperty(key, value);
        });
    }
    render() {
        return (
            <div>
                <img className={"ext_icon" + this.state.openClassForTheme} title="Switch Theme" src={theme} alt="Switch Theme" onMouseOver={() => this.mouseOver("openClassForTheme")}
                    onMouseLeave={() => { this.onMouseLeave("openClassForTheme") }}
                    onClick={this.switchTheme} />
                <img className={"ext_icon" + this.state.openClassForGit} onMouseOver={() => this.mouseOver("openClassForGit")}
                    onMouseLeave={() => { this.onMouseLeave("openClassForGit") }}
                    onClick={this.redirectGitHub}
                    src={git} alt="git goes here" />
                <img className={"ext_icon" + this.state.openClassForLinkedIn} src={image}
                    alt="linkedIn" onMouseOver={() => this.mouseOver("openClassForLinkedIn")}
                    onClick={this.redirectLinkedIn}
                    onMouseLeave={() => { this.onMouseLeave("openClassForLinkedIn") }} />
            </div>
        )
    }
}