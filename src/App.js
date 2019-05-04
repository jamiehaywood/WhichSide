import React, { Component } from 'react';
import './App.scss';
import TubeIcon from './components/TubeIcon';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
// import Roundel from './components/Roundel';
import { whichSide } from './logic/whichSide.js'
import { validate } from './logic/validation'

class App extends Component {
  constructor() {
    super()
    this.state = {
      leftSide: "#ffffff",
      rightSide: "#ffffff",
      originStation: "",
      destinationStation: "",
      line: ""
    }
    this.validation = this.validation.bind(this)
    this.check = this.check.bind(this)
    this.onOriginInputChange = this.onOriginInputChange.bind(this)
    this.onDestinationInputChange = this.onDestinationInputChange.bind(this)
    this.onLineInputChange = this.onLineInputChange.bind(this)
    this.onEnterPress = this.onEnterPress.bind(this)
  }

  validation() {
    let originStation = this.state.originStation
    let destinationStation = this.state.destinationStation
    let inputLine = this.state.line
    
    if (validate(originStation, destinationStation, inputLine)) {
      this.check()
    }
  }

  check() {
    let originStation = this.state.originStation
    let destinationStation = this.state.destinationStation
    let inputLine = this.state.line
    var white = "#ffffff";
    var green = "#6CE84F";
    var result = whichSide(originStation, destinationStation, inputLine)

    var sides = this.state
    if (result === "rhs") {
      sides.rightSide = green
      sides.leftSide = white
    }
    else if (result === "lhs") {
      sides.rightSide = white
      sides.leftSide = green
    }
    this.setState(sides)
  }

  onLineInputChange = (event) => {
    this.setState({
      line: event.target.value
    });
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

  onEnterPress = (event) => {
    if (event.key === "Enter") {
      this.validation()
    }
  }


  render() {
    return (
      <div>
        <div className="title"><span className="titleThin">Which</span>Side?
        </div>

        <InputBox id="originStation" onKeyDown={this.onEnterPress} onChange={this.onOriginInputChange} value={this.state.originStation} placeholder="Origin station" />

        <InputBox id="destinationStation" onKeyDown={this.onEnterPress} onChange={this.onDestinationInputChange} value={this.state.destinationStation} placeholder="Destination station" />

        <InputBox id="Line" onKeyDown={this.onEnterPress} onChange={this.onLineInputChange} value={this.state.line} placeholder="Line" />
        {/* <div className="roundelGrid">
          <Roundel name="Bakerloo" lineColour="#B26300"/>
          <Roundel name="Central" lineColour="#DC241f"/>
          <Roundel name="Circle" lineColour="#FFD329"/>
          <Roundel name="District" lineColour="#007D32"/>
        </div>
        <div className="roundelGrid">
          <Roundel name="Ham & City" lineColour="#F589A6"/>
          <Roundel name="Jubilee" lineColour="#838D93"/>
          <Roundel name="Metropolitan" lineColour="#9B0058"/>
          <Roundel name="Northern" lineColour="#000000"/>
        </div>
        <div className="roundelGrid">
          <Roundel name="Picadilly" lineColour="#0019A8"/>
          <Roundel name="Victoria" lineColour="#039BE5"/>
          <Roundel name="Wloo & City" lineColour="#76D0BD"/>
          <Roundel name="DLR" lineColour="#00AFAD"/>

        </div> */}

        <SubmitButton text="Check!" validate={this.validation} />
        <TubeIcon leftSide={this.state.leftSide} rightSide={this.state.rightSide} />
      </div>
    );
  }
}

export default App;
