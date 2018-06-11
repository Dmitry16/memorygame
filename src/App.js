import React, { Component } from 'react';
// import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import TilesSet from './components/tilesSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <TilesSet />
        </div>
      </div>
    );
  }
}

export default App;
