import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts';
class App extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [{
        name: 'Saitcan',
        phone: '123456789'
    }, {
        name: 'Esra',
        phone: '0123456789'
    }]
  };

  addContact(contact){
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Telephone Directory App</h1>
       <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
