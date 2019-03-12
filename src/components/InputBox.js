import React, { Component } from 'react';
import "./InputBox.scss";
import "../App.scss"

class InputBox extends Component {
    render() {
        return (
            <div className="textBoxStyling">
                <input className="textBox" id={this.props.stationOne} placeholder={this.props.placeholder}></input>
            </div>
        );
    }
}

export default InputBox;