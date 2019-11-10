import React, { Component } from 'react';
import './style.css';

class MusicTrack extends Component {

    formatTime(millisecond) {
        var minutes = Math.floor(millisecond / 60000);
        var seconds = ((millisecond % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render() {
        return (
            <div onClick={this.props.onClick}
                className={`music-track link ${this.props.playing ? 'playing' : ''}`}>
                <span className="number">{this.props.number}.</span>
                <span className="name">{this.props.name}</span>
                <span className="time">{this.formatTime(this.props.time)}</span>
            </div>);
    }
};


export default MusicTrack;