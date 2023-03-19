import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './App.module.css';
import { IContact, NewContact} from 'types/contact';

interface IState {
  contacts: IContact[];
  filter: string;
}



export class App extends Component<{}, IState> {
  state: IState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = (data: NewContact): void => {
    const newContact: IContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ filter: value });
  };
  handleDelete = (id: string):void => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm addContact={this.addContact} contacts={contacts} />

        <h2 className={css.subtitle}>Contacts</h2>
        <div className={css.container}>
          <Filter onChange={this.handleSearch} value={filter} />
          <ContactList onDelete={this.handleDelete} contacts={filterContacts} />
        </div>
      </div>
    );
  }
}