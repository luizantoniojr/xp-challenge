import React, { Component } from 'react';

import TextEdit from '../../components/textEdit';
import Grid from '../../components/grid';

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

                </Grid>
            </div>
        );
    }
}

export default Home;