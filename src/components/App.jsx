import './App.css'
import React, { Component } from 'react';
import Section from './Section/Section';
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
    name: '',
    number: ''
  };

  nameId = nanoid();

  changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
  }
  


  getVisibleContacts = () => {

    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  
  
  handleChange = e => {
    // const { name, id } = e.currentTarget;

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
          // this.onSubmit(this.state.name)
    this.addContact();
    this.setState({name: '', number: ''})

  }

    addContact = name => {
        const contact = {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number
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
    const contactsRender = this.state.contacts;
    
    return (
      <div className="phonebook">
        <Section title="Phonebook">
          <form className="phonebook__form" onSubmit={this.handleSubmit}>
            <label className="phonebook__label" htmlFor={this.nameId}>
              Name
              <input
                className='phonebook__input'
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={this.nameId}
                onChange={this.handleChange}
                required
              />
              <input
                type="tel"
                name='number'
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
                
              <button
                type='submit'
                className='phonebook__btn-add'>
                Add contact
              </button>
            </label>
            </form>
        </Section>
        <Section title="Contacts">
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
        </Section>
        
      </div>
    );
  }
}
  
export default App;
