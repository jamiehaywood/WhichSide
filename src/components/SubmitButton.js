import React, { Component } from 'react';
import "./SubmitButton.scss"
import InputBox from './InputBox';

class SubmitButton extends Component {
    render() {
        return (
            <div className="inputBox">
                <button type="button" className="button">{this.props.text}</button>
            </div>
        );
    }
}

export default SubmitButton;