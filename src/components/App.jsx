import './App.css'
import React, { Component } from 'react';
import Section from './Section/Section';
import { nanoid } from 'nanoid'




class App extends Component {
  state = {
    contacts: [],
    name: ''
  };


  render() {
    
    return (
      <div className="phonebook">
        <Section title="Phonebook">
          <form className="phonebook__form">
            <label className="phonebook__label">
              Name
              <input
                className='phonebook__input'
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <button type='submit' className='phonebook__btn-add'>Add</button>
            </label>
            </form>
        </Section>
        <Section title="Contacts">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Section>
        
      </div>
    );
  }
}
  
export default App;
