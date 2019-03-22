import React, { Component } from 'react';
import './App.scss';
import TubeIcon from './components/TubeIcon';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';

class App extends Component {
  constructor() {
    super()
    this.state = {
      leftSide: "#ffffff",
      rightSide: "#ffffff",
      originStation: "",
      destinationStation: "",
    }
    this.changeColor = this.changeColor.bind(this)
    this.onOriginInputChange = this.onOriginInputChange.bind(this)
    this.onDestinationInputChange = this.onDestinationInputChange.bind(this)
  }

  changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var color1 = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      color1 += letters[Math.floor(Math.random() * 16)]
    }
    var sides = this.state
    sides.leftSide = color;
    sides.rightSide = color1;
    this.setState(sides)
  }

  onOriginInputChange = (event) => {
    this.setState({
      originStation: event.target.value
    });
  }

  onDestinationInputChange = (event) => {
    this.setState({
      destinationStation: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="title"><span className="titleThin">Which</span>Side?
        </div>

        <InputBox id="originStation" onChange={this.onOriginInputChange} value={this.state.originStation} placeholder="Origin station" />

        <InputBox id="destinationStation" onChange={this.onDestinationInputChange} value={this.state.destinationStation} placeholder="Destination station" />

        <SubmitButton text="Check!" changeColor={this.changeColor} />

        <TubeIcon leftSide={this.state.leftSide} rightSide={this.state.rightSide} />
      </div>
    );
  }
}

export default App;
