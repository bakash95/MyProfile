import React from 'react'
import './card.css'

export const Card = (props) => {
    const { title, content } = props
    return <article className="cardContainer" style={{ ...props.style }}>
        <div className="cardText">
            <summary className="cardTextHeader">{title}</summary>
            <p className="cardTextContent">{content}</p>
        </div>
    </article>
}

export const CustomCard = (props) => {
    const { title, content, img } = props
    return <div className="customCardContainer cardContainer" >
        <img className="cardImg" src={img} alt={title}></img>
        <div className="cardTextHeader">{title}</div>
        <div className="cardTextContent">{content}</div>
    </div>
}