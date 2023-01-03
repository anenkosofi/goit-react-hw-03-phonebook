import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { PhonebookBox, ContactBox } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      !this.state.contacts.find(
        ({ name }) => name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <Box>
        <GlobalStyle />
        <PhonebookBox>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </PhonebookBox>
        <ContactBox>
          <h2>Contacts</h2>
          {this.state.contacts.length !== 0 && (
            <Filter value={this.state.filter} onChange={this.findContact} />
          )}
          <ContactList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </ContactBox>
      </Box>
    );
  }
}
