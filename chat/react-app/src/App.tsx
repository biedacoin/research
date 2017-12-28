import * as React from 'react';
import './App.css';
const logo = require('./logo.svg');

import ChatBox from './components/ChatBox';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ChatBox />
      </div>
    );
  }
}

export default App;

// vim:ts=2:sw=2:et:syn=typescript:
