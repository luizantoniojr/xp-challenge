import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextEdit from '../../components/textEdit';
import ActionLink from '../../components/actionLink';

import './style.css';

class AddToken extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        //ToDo:Verificar token 
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="add-token">
                <TextEdit
                    id="token"
                    label="Não encontramos o seu token de acesso"
                    placeholder="Insira seu token aqui...">
                </TextEdit>
                <div className="action-area">
                    <ActionLink onClick={() => { this.props.history.push('/') }}>
                        Avançar
                    </ActionLink>
                </div>
            </div>
        );
    }
}

export default withRouter(AddToken);