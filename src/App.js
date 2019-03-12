import React, { Component } from 'react';
import './App.scss';
import TubeIcon from './components/TubeIcon';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          Which Side?
        </div>
        
        <InputBox placeholder="Station One"/>
        <InputBox placeholder="Station Two"/>
        <SubmitButton text="Check!"/>
        <TubeIcon leftSide="#ffffff" rightSide="#ffffff" />
      </div>
    );
  }
}

export default App;
