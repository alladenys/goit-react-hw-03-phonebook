import './App.css';
import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

import data from './data/contacts.json';
import ContactsList from './components/ContactsList/ContactsList';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  textChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getReserchedContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedText),
    );
  };

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const renewList = this.getReserchedContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addNewContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.textChange}></Filter>
        <ContactsList
          contacts={renewList}
          onDeleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}

export default App;
