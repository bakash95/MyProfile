import React, { useEffect, useState } from 'react'
import './css/Menubar.css'
import { Link } from 'react-router-dom'
import apiCaller from '../../apiCaller'
import { Switch } from '../switch'

const Menubar = (props) => {
    const [selected, setSelected] = useState(0);
    const [menuData, setMenuData] = useState({
        "aboutme": {
            path: "/",
            key: "About"
        },
        "workHistory": {
            path: "/workHistory",
            key: "Work"
        },
        "projects": {
            path: "/projects",
            key: "Projects"
        },
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await apiCaller.callAPI('/menu');
                setMenuData(data.response)
            } catch (error) {
            }
        })()
    })
    return (
        <header className="navbar" >
            <div>
                B Akash
            </div>
            <div className="nav_content">
                <div style={{ "padding": "0px 15px" }}><Switch /></div>
                {
                    menuData && Object.keys(menuData).map((key, index) => {
                        let selectedClass = selected === index ? "selected" : ""
                        return <Link to={menuData[key].path} key={menuData[key].path}>
                            <button className={`nav_button ${selectedClass}`} onClick={() => setSelected(index)} >{menuData[key].key}</button>
                        </Link>
                    })
                }
            </div>
        </header >
    )
}

export default Menubar