import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextEdit from '../../components/textEdit';
import Grid from '../../components/grid';
import Album from '../../components/album';

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
        const { token, searchedTerm, searchResult, albumSelectionHistory } = this.props.state;
        const { searchTerm } = this.state;

        if (!token)
            return <Redirect to='/addToken' />

        var gridTitle = searchResult.items.length ? `Resultados encontrados para "${searchedTerm}"` : "Álbuns buscados recentemente";

        return (
            <div className="Home">
                <TextEdit
                    id="search"
                    label="Busque por artistas, álbuns ou músicas"
                    placeholder="Comece a escrever..."
                    value={searchTerm}
                    onChange={this.handleSearchChange}>
                </TextEdit>
                <Grid title={gridTitle}>
                    {
                        searchResult.items.map(item => (
                            <Link key={item.id} className="link" to={`/AlbumInfo/${item.id}`}>
                                <Album
                                    name={item.name}
                                    artist={item.artists[0].name}
                                    srcImage={item.images[0].url}>
                                </Album>
                            </Link>
                        ))
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.spotify });
const mapDispatchToProps = dispatch => bindActionCreators(SpotifyAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);