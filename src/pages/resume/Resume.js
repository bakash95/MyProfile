import React, { Component } from 'react'

import './css/resume.css'

export default class Menubar extends Component {

    render() {
        return (
            <main className="main-inline">
                <section className="header_resume">
                    <div className="flt-left">
                        <h1 className="name-headr">Akash</h1>
                        <h2 style={{ fontSize: "1em" }}>Software Developer</h2>
                    </div>
                    <div className="flt-right">
                        <ul>
                            <li>8056XXXX49</li>
                            <li>bakash050695@gmail.com</li>
                        </ul>
                    </div>
                </section>
                <div className="margin-section">
                    <section className="section-container">
                        <article>
                            <div className="sectionTitle">
                                <h1>Resume Sumary</h1>
                            </div>

                            <div className="sectionContent">
                                <p>Full Stack Developer who is experienced in developing secure, asynchronous service oriented applications using frameworks such as Spring, Apache camel and libraries like Reactjs with intermediate experience in API Gateway</p>
                            </div>
                        </article>
                    </section>

                    <section className="section-container">
                        <article>
                            <div className="sectionTitle">
                                <h1>work experience</h1>
                            </div>

                            <div className="sectionContent">
                                <h4>PROGRAMMER ANALYST, COGNIZANT TECHNOLOGY SOLUTIONS</h4>
                                <ul>
                                    <li>Worked on letter processing module (Microservice) which routes letter requests based on conditions defined in Apache camel.</li>
                                    <li>Created a REST/SOAP UI client with utilities including a XML/JSON formatter ,Zip and Unzip ,Split and Merge.</li>
                                    <li>Refactored JUNITs for an entire code base in a record span of 2 months.</li>
                                    <li>performed modularization process for a EAR which was critical for the GO-LIVE of a project</li>
                                    <li>Solved technical issues before GO-LIVE and identified technical and functional limiters. </li>
                                    <li>Created  SOAP UI TEST SUITE projects for the account to do a shakeout test of the entire application.</li>
                                    <li>Helped in creating a AutoLogInjector that automatically inserts logs at important portions of the code</li>
                                    <li>Helped in the development of a standalone tool to identify duplicate bean declarations.</li>
                                </ul>
                            </div>

                            <div className="sectionContent">
                                <h4>Associate Software Developer,Banca Sella SPA</h4>
                                <ul>
                                    <li>Managed InternetBanking application for Banca Sella</li>
                                    <li>Worked on ReactJS and spring backed Java Backend</li>
                                </ul>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        )
    }
}