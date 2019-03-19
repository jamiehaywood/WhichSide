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
