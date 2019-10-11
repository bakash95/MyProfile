import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/sideDrawer.css'
import image from './images/latest_photo.jpg'

import apiCaller from '../../apiCaller'
import LoadingIndicator from '../spinner/spinner'

class SideDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: {
                "home":"/",
                "resume":"/resume",
                "projects":"projects"
            },
            showSpinner: true,
        }
    }

    async componentWillMount() {
        try {
            const data = await apiCaller.callAPI('/menu');
            this.setState({ menuData: data.response })
        } catch (error) {
            console.log(error);
        }
        this.setState({ showSpinner: false })
    }

    render() {
        let props = this.props
        let menuData = this.state.menuData
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
                                return <Link to={menuData[key]}>
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