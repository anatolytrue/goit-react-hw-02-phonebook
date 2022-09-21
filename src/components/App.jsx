import './App.css'
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid'




class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // nameId = nanoid();

  changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
  }
  


  getVisibleContacts = () => {

    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  
  
  

  addContact = ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number,
        };

        this.setState(({contacts}) => ({
          contacts: [contact, ...contacts],
        }))
  }
    // renderContact = () => {
    //   const { contacts } = this.state;
    //   return 
    // }
  

  render() {
    const contactsRender = this.getVisibleContacts();
    
    return (
      <div className="phonebook">

        <h1 className="counter__title">Phonebook</h1>
        <ContactForm onSubmit={ this.addContact} />

        <h2 className="counter__title">Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}


          
     
          <label htmlFor="filter"> filter by name 
            <input type="text" name="filter" value={this.state.filter} onChange={ this.changeFilter} />
          </label>
          
          <ul>
            {contactsRender.map(({ id, name, number}) => (
              <li key={id}>
                <p>{name} : { number}</p>
              </li>
            ))}
          </ul>

        
      </div>
    );
  }
}
  
export default App;
