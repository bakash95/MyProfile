import React from 'react'
import {Link} from 'react-router-dom'
import './css/sideDrawer.css'
import image from './images/latest_photo.jpg'

const SideDrawer = (props) => (
    <nav className={props.openOrNot ? "slider open" : "slider"}>
        <div className="image_holder">
            <img className="profile_image" src={image} alt=":("/>
        </div>
        <div className="nav_content">
            <Link to="/resume"><button className="nav_button" onClick={()=>{props.pageActions.toggleDrawer()}}>Resume</button></Link>
            <button className="nav_button">Projects</button>
        </div>
    </nav>
);

export default SideDrawer;