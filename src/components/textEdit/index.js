import React, { Component } from 'react';
import './style.css';

const TextEdit = (props) => (
    <div className="textEdit">
        <label>Busque por artistas, álbuns ou músicas</label>
        <input type="text" placeholder="Comece a escrever..."></input>
    </div>
);

export default TextEdit;