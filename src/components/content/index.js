import React from 'react';
import './style.css';

const Content = (props) => (
    <main className="content">
        {props.children}
    </main>
);

export default Content;