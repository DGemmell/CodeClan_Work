import React, { Component } from 'react';
import './App.css';
import PiggyBank from './PiggyBank';

class App extends Component {
  render() {
    return (
      <PiggyBank title="Colins Savings Pig" owner=" Colin" depositAmount={200}/>
    );
  }
}

export default App;
