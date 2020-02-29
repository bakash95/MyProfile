import React, { Component } from 'react'

import projects from './projectList'

import './css/projects.css'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <section className="container">
                {
                    projects.map((project) =>
                        <article className="cardContainer">
                            <div className="cardText">
                                <summary className="cardTextHeader">{project.title}</summary>
                                <p className="cardTextContent">{project.content}</p>
                            </div>
                        </article>
                    )
                }
            </section>
        )
    }
}