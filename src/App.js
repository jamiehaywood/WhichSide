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
      rightSide: "#ffffff"
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    var sides = this.state
    sides.leftSide = color;
    sides.rightSide = "#ffffff"
    this.setState(sides)
  }

  render() {
    return (
      <div>
        <div className="title">
          Which Side?
        </div>
        
        <InputBox id="stationOne" placeholder="Station One"/>
        <InputBox id="stationTwo" placeholder="Station Two"/>
        <SubmitButton text="Check!"/>
        <TubeIcon leftSide="#ffffff" rightSide="#ffffff" />
      </div>
    );
  }
}

export default App;
