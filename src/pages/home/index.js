import React, { Component } from 'react';

import TextEdit from '../../components/textEdit';

import './style.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <TextEdit></TextEdit>
            </div>
        );
    }
}

export default Home;