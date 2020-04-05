import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './css/sideDrawer.css'

import apiCaller from '../../apiCaller'
import LoadingIndicator from '../spinner/spinner'

import ReactGA from 'react-ga'

class SideDrawer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuData: {
                "home": "/",
                "resume": "/resume",
                "projects": "projects"
            },
            imgSrc: undefined,
            showSpinner: true,
        }
    }

    async componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.openOrNot && !nextState.imgSrc) {
            try {
                let imageLoaded = await import('./images/latest_photo.jpg');
                this.setState({ imgSrc: imageLoaded.default });
            } catch (error) {
                ReactGA.exception({
                    description: 'image load failed',
                    fatal: false
                })
            }
        }
    }

    async componentDidMount() {
        try {
            const data = await apiCaller.callAPI('/menu');
            this.setState({ menuData: data.response })
        } catch (error) {
        }
        this.setState({ showSpinner: false })
    }

    render() {
        let props = this.props
        let menuData = this.state.menuData
        let image = this.state.imgSrc
        return (
            <nav className={props.openOrNot ? "slider open" : "slider"}>
                <div className="image_holder">
                    <img className="profile_image" src={image} alt=":(" />
                </div>
                <div className="nav_content">
                    {
                        this.state.showSpinner ?
                            <LoadingIndicator />
                            :
                            menuData && Object.keys(menuData).map((key) => {
                                return <Link to={menuData[key]} key={menuData[key]}>
                                    <button className="nav_button" onClick={() => { props.pageActions.toggleDrawer() }}>{key}</button>
                                </Link>
                            })
                    }
                </div>
            </nav>
        );
    }
}

export default SideDrawer;