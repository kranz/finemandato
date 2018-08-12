import React, { Component } from 'react';
import Countdown from './Countdown.js';
import { I18n } from 'react-i18next'
import Navbar from './Navbar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
      {
        (t, { i18n }) => (
            <div className="App">
              <Navbar />
              <Countdown date={'2022-02-05T00:00:00'} />
            </div>
        )
      }
      </I18n>
    )
  }
}

export default App;

