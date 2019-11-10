import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextEdit from '../../components/textEdit';
import Grid from '../../components/grid';
import Card from '../../components/card';

import * as SpotifyAction from '../../store/actions/spotify';

import './style.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '', timer: null };
        this.handleFinishTyping = this.handleFinishTyping.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(searchTerm) {
        var timer = setTimeout(this.handleFinishTyping, 2000);
        this.setState({ searchTerm, timer });
    }

    handleFinishTyping() {
        if (this.state.searchTerm)
            this.props.searchAlbums(this.state.searchTerm, this.props.state.token);
    }

    componentWillUnmount() {
        this.setState({ timer: null });
    }

    render() {
        const {
            token,
            searchedTerm,
            searchResultAlbums,
            searchResultTracks,
            albumSelectionHistory
        } = this.props.state;

        const { searchTerm } = this.state;

        if (!token)
            return <Redirect to='/addToken' />

        return (
            <div className="Home">
                <TextEdit
                    id="search"
                    label="Busque por artistas, álbuns ou músicas"
                    placeholder="Comece a escrever..."
                    value={searchTerm}
                    onChange={this.handleSearchChange}>
                </TextEdit>
                {
                    (!!searchResultAlbums.length &&
                        <Grid title={`Álbuns encontrados para "${searchedTerm}"`}>
                            {
                                searchResultAlbums.map(item => (
                                    <Link key={item.id} className="link" to={`/AlbumInfo/${item.id}`}>
                                        <Card
                                            title={item.name}
                                            subtitle={item.artists[0].name}
                                            srcImage={item.images[0].url}>
                                        </Card>
                                    </Link>
                                ))
                            }
                        </Grid>
                    )
                }
                {
                    (!!searchResultTracks.length &&
                        <Grid title={`Músicas encontradas para "${searchedTerm}"`}>
                            {
                                searchResultTracks.map(item => (
                                    <Link key={item.id} className="link" to={`/AlbumInfo/${item.album.id}`}>
                                        <Card
                                            title={item.name}
                                            subtitle={item.artists[0].name}
                                            srcImage={item.album.images[0].url}>
                                        </Card>
                                    </Link>
                                ))
                            }
                        </Grid>
                    )
                }
                {
                    (!!albumSelectionHistory.length &&
                        <Grid title="Álbuns buscados recentemente">
                            {
                                albumSelectionHistory.map(item => (
                                    <Link key={item.id} className="link" to={`/AlbumInfo/${item.id}`}>
                                        <Card
                                            title={item.name}
                                            subtitle={item.artists[0].name}
                                            srcImage={item.images[0].url}>
                                        </Card>
                                    </Link>
                                ))
                            }
                        </Grid>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.spotify });
const mapDispatchToProps = dispatch => bindActionCreators(SpotifyAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);