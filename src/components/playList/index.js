import React, { Component } from 'react';

import MusicTrack from '../../components/musicTrack';

import './style.css';

class PlayList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trackPlaying: null,
            audio: null
        };
        this.play = this.play.bind(this);
        this.checkIfTrackIsPlaying = this.checkIfTrackIsPlaying.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUnmount() {
        this.pause();
    }

    handleClick(track) {
        this.pause(track);

        if (this.state.trackPlaying == track.id) {
            this.setState({ trackPlaying: null, audio: null });
        } else {
            this.play(track);
        }
    }

    play(track) {
        var audio = new Audio(track.preview_url);
        audio.play();
        this.setState({ trackPlaying: track.id, audio: audio });
    }

    pause() {
        if (this.state.audio)
            this.state.audio.pause();
    }

    checkIfTrackIsPlaying(track) {
        return this.state.trackPlaying == track.id;
    }

    render() {
        if (!this.props.tracks)
            return null;
        return (
            <div className="play-list">
                {
                    this.props.tracks.map(track => (
                        <MusicTrack
                            key={track.id}
                            onClick={() => this.handleClick(track)}
                            number={track.track_number}
                            name={track.name}
                            time={track.duration_ms}
                            playing={this.checkIfTrackIsPlaying(track)}>
                        </MusicTrack>
                    ))
                }
            </div>
        );
    }
}

export default PlayList;