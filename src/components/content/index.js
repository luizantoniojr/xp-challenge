import React from 'react';
import './style.css';

const Content = (props) => (
    <div className="content">
        {props.children}
    </div>
);

export default Content;