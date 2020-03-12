import React from 'react'

import './css/togglebutton.css'

const ToggleButton = (props)=>(
    <button className="toggler" aria-label="toggle menu" onClick={props.pageActions.toggleDrawer}>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
        <div className="toggle_line"></div>
    </button>
);

export default ToggleButton;