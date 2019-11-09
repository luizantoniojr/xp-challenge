import React, { Component } from 'react';
import './style.css';

const TextEdit = (props) => (
    <div className="text-edit">
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type="text" placeholder={props.placeholder}></input>
    </div>
);

export default TextEdit;