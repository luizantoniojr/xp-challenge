import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/card';
import ActionLinkBack from '../../components/actionLinkBack';
import PlayList from '../../components/playList';

import * as SpotifyAction from '../../store/actions/spotify';

import './style.css';

class AlbumInfo extends Component {

    constructor(props) {
        super(props);
        this.getAlbum = this.getAlbum.bind(this);
    }

    componentDidMount() {
        this.getAlbum();
    }

    getAlbum() {
        const { id } = this.props.match.params;
        const { token } = this.props.state;

        this.props.getAlbumInfo(id, token);
    }

    render() {
        const { albumInfo } = this.props.state;
        if (!albumInfo)
            return null;

        return (
            <div className="album-info">
                <ActionLinkBack></ActionLinkBack>
                <div className="album-info-body">
                    <div className="album-container">
                        <Card
                            title={albumInfo.name}
                            subtitle={albumInfo.artists[0].name}
                            srcImage={albumInfo.images[0].url}>
                        </Card>
                    </div>
                    <PlayList tracks={albumInfo.tracks.items}></PlayList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.spotify });
const mapDispatchToProps = dispatch => bindActionCreators(SpotifyAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);