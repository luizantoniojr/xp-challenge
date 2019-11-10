import React, { Component } from 'react';
import './style.css';

class TextEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value, timer: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleFinishTyping = this.handleFinishTyping.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, timer });
        var timer = setTimeout(this.handleFinishTyping, 2000);
        if (this.props.handleChange)
            this.props.onChange();
    }

    handleFinishTyping() {
        this.props.onFinishTyping(this.state.value);
    }

    componentWillUnmount() {
        this.setState({ timer: null });
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
                ></input>
            </div>
        )
    };
};

export default TextEdit;