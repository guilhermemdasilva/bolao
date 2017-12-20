import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      betNumbers: [1, 2, 3, 4, 5, 6]
    }
  }

  prettifyBet(betNumbers) {
    return betNumbers.reduce((acc, cur) => acc + ' - ' + cur)
  }

  render() {
    const {betNumbers} = this.state
    const prettyBet = this.prettifyBet(betNumbers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bolão da Mega da Virada</h1>
        </header>
        <h1 id="betNumbers">{prettyBet}</h1>
        <div>
          <InputMask id="placeBet" mask={'99 99 99 99 99 99'}/>
          <input type="submit" value="Place Bet" />
        </div>
      </div>
    );
  }
}

export default App;