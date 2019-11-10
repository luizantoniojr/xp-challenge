import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextEdit from '../../components/textEdit';
import ActionLink from '../../components/actionLink';

import * as SpotifyAction from '../../store/actions/spotify';

import './style.css';

class Token extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(token) {
        this.setState({ token });
        if (token.length >= 167) {
            this.props.setToken(token);
            this.props.history.push('/');
        }
    }

    render() {

        return (
            <div className="token">
                <TextEdit
                    id="token"
                    label="Não encontramos o seu token de acesso"
                    placeholder="Insira seu token aqui..."
                    value={this.state.token}
                    onChange={this.handleChange}>
                </TextEdit>
                <div className="action-area">
                    <ActionLink
                        href="https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#"
                        target="_blank">
                        Pegue o seu token aqui
                </ActionLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ state: state.spotify.token });
const mapDispatchToProps = dispatch => bindActionCreators(SpotifyAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Token));
