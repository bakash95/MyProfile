import React from 'react'

import './css/backDrop.css'

const BackDrop = (props)=>(
    <div className="backdrop" onClick={props.toggleDrawer}></div>
);

export default BackDrop;