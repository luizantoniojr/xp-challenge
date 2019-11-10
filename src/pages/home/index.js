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
        this.handleFinishTyping = this.handleFinishTyping.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ value: event.target.value, timer });
    }

    handleFinishTyping(value) {
        if (value)
            this.props.searchAlbums(value);
    }

    render() {
        const hasToken = true;
        if (!hasToken)
            return <Redirect to='/addToken' />

        var { searchResult, searchTerm, searchHistory } = this.props.state;

        var gridTitle = searchResult.items.length ? "Resultado" : "Álbuns buscados recentemente";

        return (
            <div className="Home">
                <TextEdit
                    id="search"
                    label="Busque por artistas, álbuns ou músicas"
                    placeholder="Comece a escrever..."
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    onFinishTyping={this.handleFinishTyping}>
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