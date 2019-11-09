import React from 'react';
import './style.css';

const Album = (props) => (
    <div className="album">
        <div className="image">
            <img src={props.srcImage} alt={props.name} />
        </div>
        <span className="name">{props.name}</span>
        <span className="artist">{props.artist}</span>
    </div>
);

export default Album;