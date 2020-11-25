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
      </div>
    );
  }
}

export default App;