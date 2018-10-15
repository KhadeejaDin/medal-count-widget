import React, { Component } from 'react';
import MedalWidget from './components/medal-widget';

class App extends Component {
  render() {
    return (
      <div className="App pad2">
        <MedalWidget 
        sort="total" />
      </div>
    );
  }
}

export default App;
