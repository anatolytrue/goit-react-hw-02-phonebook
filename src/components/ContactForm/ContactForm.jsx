import React, { Component } from "react";
import css from './ContactForm.css'
// import { nanoid } from "nanoid";

class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    }


    handleChange = e => {
    // const { name, id } = e.currentTarget;

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    }

    handleSubmit = e => {
    e.preventDefault();
          // this.onSubmit(this.state.name)
    this.props.onSubmit(this.state);
    this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {


        return (
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
        )
    }
}

export default ContactForm;