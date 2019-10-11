import React from 'react'
import spinner from './public/spinner.svg'

import './css/spinner.css'

const LoadingIndicator = (props) => {
    return (
        <object data={spinner} type="image/svg+xml" aria-label="Loading..." className="loadingIndicator" />
    )
}

export default LoadingIndicator