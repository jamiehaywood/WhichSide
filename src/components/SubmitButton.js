import React, { Component } from 'react';
import "./SubmitButton.scss"

class SubmitButton extends Component {
    render() {
        return (
            <div className="buttonDiv">
                <button type="button" onClick={this.props.check} className="button">{this.props.text} </button>
            </div>
        );
    }
}

export default SubmitButton;