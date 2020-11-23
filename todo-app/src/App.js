import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning_examples/FirstComponent';

class App extends Component {
  render () {
    return (
      <div className="App">
        Hello World!
        <FirstComponent></FirstComponent>
      </div>
    );
  }
}

export default App;
