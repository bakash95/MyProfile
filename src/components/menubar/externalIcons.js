import React, { Component } from 'react'
import image from './images/linkedIn.svg'
import git from './images/git.svg'
import theme from './images/theme.svg'
import "animate.css"

export default class ExternalIcons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openClassForGit: '',
            openClassForLinkedIn: '',
            openClassForTheme: '',
            currentTheme: "light",
            darkTheme: {
                "--color-background": "rgba(45,45,45,0.98)",
                "--color-textcolor": "white",
                "--color-theme": "rgb(224, 114, 79)",
                "--color-gradient": "rgb(224, 114, 79)"
            },
            lightTheme: {
                "--color-background": "white",
                "--color-textcolor": "rgba(45,45,45,0.98)",
                "--color-theme": "rgba(11, 122, 231, 1)",
                "--color-gradient": "#73baf3"
            },
        }
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
    switchTheme = () => {
        let isLight = this.state.currentTheme === 'light'
        let theme = isLight ? this.state.darkTheme : this.state.lightTheme
        this.setState({ currentTheme : isLight ? "dark" : "light"});
        Object.keys(theme).forEach(key => {
            const value = theme[key];
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
                    onClick={() => { this.clickAction("https://github.com/bakash95") }}
                    src={git} alt="git goes here" />
                <img className={"ext_icon" + this.state.openClassForLinkedIn} src={image}
                    alt="linkedIn" onMouseOver={() => this.mouseOver("openClassForLinkedIn")}
                    onClick={() => { this.clickAction("https://www.linkedin.com/in/akash-b-8675ba155/") }}
                    onMouseLeave={() => { this.onMouseLeave("openClassForLinkedIn") }} />
            </div>
        )
    }
}