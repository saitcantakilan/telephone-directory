import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Contacts from './Contacts';
class App extends Component {
  state = {
    contacts: [{
        name: 'Saitcan',
        phone: '123456789'
    }, {
        name: 'Esra',
        phone: '123456789'
    }]
  };

  render() {
    return (
      <div className="App">
      <h1>Telephone Directory App</h1>
       <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
