import React from 'react';
import './style.css';

const MusicTrack = (props) => (
    <div className={`music-track link ${props.playing ? 'playing' : ''}`}>
        <span className="number">{props.number}.</span>
        <span className="name">{props.name}</span>
        <span className="time">{props.time}</span>
    </div>
);

export default MusicTrack;