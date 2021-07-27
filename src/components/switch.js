import React, { useEffect, useState } from 'react'
import './switch.css'

const darkTheme = {
    "--color-background": "rgba(18, 18, 18)",
    "--color-textcolor": "white",
    "--color-theme": "#f44336",
    "--color-gradient": "#ef9a9a"
}

const lightTheme = {
    "--color-background": "white",
    "--color-textcolor": "rgba(18, 18, 18)",
    "--color-theme": "rgba(11, 122, 231, 1)",
    "--color-gradient": "#90caf9"
}

export const Switch = () => {
    let [leftOrRight, setLeftOrRight] = useState(true);
    let [currentTheme, setCurrentTheme] = useState('light')
    let [classes, setClasses] = useState('');

    const switchTheme = () => {
        let isLight = currentTheme === 'light'
        let nextTheme = isLight ? darkTheme : lightTheme
        Object.keys(nextTheme).forEach(key => {
            const value = nextTheme[key];
            document.documentElement.style.setProperty(key, value);
        });
        setCurrentTheme(isLight ? 'dark' : 'light')
    }

    useEffect(() => {
        switchTheme()
    }, [])
    const swicth = () => {
        if (leftOrRight) {
            document.getElementById('switch').classList.add('right-toggle');
            setClasses('theme-background')
        } else {
            document.getElementById('switch').classList.remove('right-toggle');
            setClasses('')
        }
        setLeftOrRight(!leftOrRight);
        switchTheme();
    }
    return <div id="toggler" className={`${classes} toggle`} onClick={swicth}>
        <div id="switch" className="hovereffect switch"></div>
    </div>
}