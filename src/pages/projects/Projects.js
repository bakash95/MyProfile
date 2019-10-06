import React, { Component } from 'react'

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
                <article className="cardContainer">
                    <div className="cardText">
                        <summary className="cardTextHeader">Hospital Mgmt</summary>
                        <p className="cardTextContent">Plain Spring Boot Application with API gateway with URL whitelisting and role based Login with JWT and custom claims</p>
                    </div>
                </article>
                <article className="cardContainer">
                    <div className="cardText">
                        <summary className="cardTextHeader">NewsBulletin</summary>
                        <p className="cardTextContent">A web Application that uses plain vanilla JS for displaying news articles</p>
                    </div>
                </article>
                <article className="cardContainer">
                    <div className="cardText">
                        <summary className="cardTextHeader">Lending Loans</summary>
                        <p className="cardTextContent">A ReactJS Application that displays and filters loans lent to users and has a responsive UI and a powerful search utilising Hibernate Search for filtering and sorting with spring data for storing and retrieving data from a Mysql DB</p>
                    </div>
                </article>
                <article className="cardContainer">
                    <div className="cardText">
                        <summary className="cardTextHeader">BlogApp</summary>
                        <p className="cardTextContent">A BlogApp which is to show articles and also allow to post articles along with a provision to list based on authors</p>
                    </div>
                </article>
                <article className="cardContainer">
                    <div className="cardText">
                        <summary className="cardTextHeader">Spring Security based Login</summary>
                        <p className="cardTextContent">A Spring MVC application with Spring security backed login function</p>
                    </div>
                </article>
            </section>
        )
    }
}