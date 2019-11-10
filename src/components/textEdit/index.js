import React, { Component } from 'react';
import './style.css';

class TextEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value, };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange)
            this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="text-edit">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required
                ></input>
            </div>
        )
    };
};

export default TextEdit;