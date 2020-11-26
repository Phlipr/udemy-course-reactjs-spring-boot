import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning_examples/FirstComponent';
import Counter from './components/counter/Counter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Counter></Counter>
        <Counter by={5}></Counter>
        <Counter by={10}></Counter>
      </div>
    );
  }
}

export default App;
