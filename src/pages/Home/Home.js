import React from 'react'
import { Card, CustomCard } from '../../components/card'
import architecture from './image/architecture.svg'
import frontend from './image/frontend.svg'
import backend from './image/backend.svg'
import './css/home.scss'
import Resume from '../resume/Resume_akash.pdf'

const Home = (props) => (
    <div className="container">
        <h4 className="intro">Hi, My Name is Akash
        </h4>
        <section>
            <article className="line-1_7">
                Software Engineer, Digicert Inc
            </article>
            <article className="line-1_7">
                I'm a Web Developer having experience working on Financial and Application Security Related products
                I'm passionate about learning new technologies and this led me to learn and develop apps using React native and AWS
            </article>
        </section>
        <div className="skills">
            <div className="skills--header">
                My Skills
            </div>
            <div className="skills-content">
                <div className="skills--intro">
                    <span>5+ Years Of Experience</span>
                    <a href={Resume} style={{"align-self" : "center"}} target="_blank" rel="noopener noreferrer">
                        <button className="skills--download_resume">
                            Download CV
                        </button>
                    </a>
                </div>
                <div className="skills--list">
                    <CustomCard img={frontend} title="Frontend" content="Javascript,Typescript,ReactJS,
Redux,Redux Saga,SCSS"/>
                    <CustomCard img={backend} title="Backend" content="Java,Spring Boot,SQL,Hibernate" />
                    <CustomCard img={architecture} title="Architecture" content="Microservices,REST" />
                </div>
            </div>
        </div>
    </div>
);

export default Home