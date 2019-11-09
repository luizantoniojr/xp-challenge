import React from 'react';
import './style.css';

const Grid = (props) => (
    <div className="grid">
        <h4>{props.title}</h4>
        <div className="grid-container">
            {props.children}
        </div>
    </div>
);

export default Grid;