import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextEdit from '../../components/textEdit';
import Grid from '../../components/grid';
import Album from '../../components/album';

import './style.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <TextEdit
                    id="search"
                    label="Busque por artistas, álbuns ou músicas"
                    placeholder="Comece a escrever...">
                </TextEdit>
                <Grid title="Álbuns buscados recentemente">
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                    <Link className="link" to={`/AlbumInfo/1`}>
                        <Album
                            name="Nome album grande de duas linhas"
                            artist="Nome artista grande de duas linhas"
                            srcImage="">
                        </Album>
                    </Link>
                </Grid>
            </div>
        );
    }
}

export default Home;