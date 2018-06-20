import React, { Component, propTypes } from 'react';
import { connect } from 'react-redux';
// import store from './store';

import logo from './logo.svg';
import './App.css';

import TilesSet from './components/tilesSet';
import TilesControls from './components/tilesControls';

class App extends Component {
  render() {
		console.log('App render::', this.props);
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory Trainer</h1>
        </header>

        <div className="App-intro">
					<TilesControls triesCounter={this.props.triesCounter} />
          <TilesSet {...this.props} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = store => ({
  triesCounter: store.triesCounter
});

export default connect(mapStateToProps)(App);
