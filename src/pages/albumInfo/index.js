import React, { Component } from 'react';
import Album from '../../components/album';
import ActionLinkBack from '../../components/actionLinkBack';
import PlayList from '../../components/playList';
import MusicTrack from '../../components/musicTrack';

import './style.css';

class AlbumInfo extends Component {
    render() {
        return (
            <div className="album-info">
                <ActionLinkBack></ActionLinkBack>
                <div className="album-info-body">
                    <div className="album-container">
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </div>
                    <PlayList>
                        <MusicTrack></MusicTrack>
                    </PlayList>
                </div>
            </div>
        );
    }
}

export default AlbumInfo;