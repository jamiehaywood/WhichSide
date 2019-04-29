import React, { Component } from 'react';
import './App.scss';
import TubeIcon from './components/TubeIcon';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
// import Roundel from './components/Roundel';
import {whichSide} from './logic/whichSide.js'

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
    this.check = this.check.bind(this)
    this.onOriginInputChange = this.onOriginInputChange.bind(this)
    this.onDestinationInputChange = this.onDestinationInputChange.bind(this)
    this.onLineInputChange = this.onLineInputChange.bind(this)
  }

  check() {
    var white = "#ffffff";
    var green = "#6CE84F";

    var sides = this.state
    var originStation = this.state.originStation
    var destinationStation = this.state.destinationStation
    var inputLine = this.state.line
    var result = whichSide(originStation, destinationStation, inputLine)
    console.log(result)
    
    if (result === "rhs"){
      sides.rightSide = green
      sides.leftSide = white
    }
    else if (result === "lhs"){
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

  render() {
    return (
      <div>
        <div className="title"><span className="titleThin">Which</span>Side?
        </div>

        <InputBox id="originStation" onChange={this.onOriginInputChange} value={this.state.originStation} placeholder="Origin station" />

        <InputBox id="destinationStation" onChange={this.onDestinationInputChange} value={this.state.destinationStation} placeholder="Destination station" />

        <InputBox id="Line" onChange={this.onLineInputChange} value={this.state.line} placeholder="Line" />
        {/* <div className="roundelGrid">
          <Roundel name="Bakerloo" lineColour="#B26300" background="#89ec72" onClick={this.onLineSelection}/>
          <Roundel name="Central" lineColour="#DC241f" background={this.state.background} onClick={this.onLineSelection}/>
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

        <SubmitButton text="Check!" check={this.check} />

        <TubeIcon leftSide={this.state.leftSide} rightSide={this.state.rightSide} />
      </div>
    );
  }
}

export default App;
