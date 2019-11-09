import React from 'react';
import './style.css';

const PlayList = (props) => (
    <div className="play-list">
        {props.children}
    </div>
);

export default PlayList;