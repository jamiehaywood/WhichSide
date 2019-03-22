import React, { Component } from 'react';
import "./InputBox.scss";
import "../App.scss"

class InputBox extends Component {
    render() {
        return (
            <div className="textBoxStyling">
                <input className="textBox" key={this.props.id} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder}></input>
            </div>
        );
    }
}

export default InputBox;