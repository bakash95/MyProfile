import React from 'react'

import './workHistory.scss'

const timeLine = [
    {
        title: "Software Engineer",
        content: "Digicert Inc SEP - 2020 to Present"
    },
    {
        title: "Associate Software Developer",
        content: "Banca Sella SPA  SEP - 2018 to SEP 2020"
    },
    {
        title: "Programmer Analyst",
        content: "Cognizant Technology Solutions JUNE - 2016 to SEP 2020"
    }
];

export const WorkHistory = () => {
    return <div className="timeline--container">
        {timeLine.map((time, index) => {
            let classForAlign = index % 2 === 0 ? "left" : "right";
            return (
                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className={`time ${classForAlign}`}>
                        <div className="text--container">
                            <div className="text--container__title">{time.title}</div>
                            <div className="text--container__content">{time.content}</div>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
}