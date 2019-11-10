import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Album from '../../components/album';
import ActionLinkBack from '../../components/actionLinkBack';
import PlayList from '../../components/playList';
import MusicTrack from '../../components/musicTrack';

import * as SpotifyAction from '../../store/actions/spotify';

import './style.css';

class AlbumInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trackPlaying: null,
            audio: null
        };
        this.getAlbum = this.getAlbum.bind(this);
        this.play = this.play.bind(this);
        this.checkIfTrackIsPlaying = this.checkIfTrackIsPlaying.bind(this);
    }

    componentDidMount() {
        this.getAlbum();
    }

    componentWillUnmount() {
        this.pause();
    }

    getAlbum() {
        const { id } = this.props.match.params;
        const { token } = this.props.state;

        this.props.getAlbumInfo(id, token);
    }

    play(track) {
        this.pause();
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
        const { albumInfo } = this.props.state;
        if (!albumInfo)
            return <div>Carregando</div>

        return (
            <div className="album-info">
                <ActionLinkBack></ActionLinkBack>
                <div className="album-info-body">
                    <div className="album-container">
                        <Album
                            name={albumInfo.name}
                            artist={albumInfo.artists[0].name}
                            srcImage={albumInfo.images[0].url}>
                        </Album>
                    </div>
                    <PlayList>
                        {
                            albumInfo.tracks.items.map(track => (
                                <MusicTrack
                                    key={track.id}
                                    onClick={() => this.play(track)}
                                    number={track.track_number}
                                    name={track.name}
                                    time={track.duration_ms}
                                    playing={this.checkIfTrackIsPlaying(track)}
                                ></MusicTrack>
                            ))
                        }
                    </PlayList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.spotify });
const mapDispatchToProps = dispatch => bindActionCreators(SpotifyAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);