import React, { PureComponent } from 'react'

import projects from './projectList'

import './css/projects.css'
import { Card } from '../../components/card'

export default class Projects extends PureComponent {
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
                        <Card title={project.title} content={project.content} />
                    )
                }
            </section>
        )
    }
}