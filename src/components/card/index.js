import React from 'react';
import './style.css';

const Card = (props) => (
    <div className="card">
        <div className="image">
            <img src={props.srcImage} alt={props.title} />
        </div>
        <span className="title">{props.title}</span>
        <span className="subtitle">{props.subtitle}</span>
    </div>
);

export default Card;