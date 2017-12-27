import * as React from 'react';
import './App.css';
import ListOfBlocks from './components/ListOfBlocks';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ListOfBlocks maxLength={16} />
      </div>
    );
  }
}

export default App;
