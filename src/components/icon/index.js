import React from 'react';
import './style.css';

const Icon = (props) => (
    <i className={`
        ${props.name ? `fa fa-${props.name}` : ''} 
        ${props.size ? `fa-${props.size}x` : ''}
    `}></i>
);

export default Icon;