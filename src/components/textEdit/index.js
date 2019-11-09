import React, { Component } from 'react';
import './style.css';

const TextEdit = (props) => (
    <div className="textEdit">
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder}></input>
    </div>
);

export default TextEdit;