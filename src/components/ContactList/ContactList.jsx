import PropTypes from 'prop-types'
import './ContactList.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul className='phonebook__contact-list'>
        {contacts.map(({ id, name, number}) => (
            <li key={id} className="phonebook__contact-list-item">
                <p>{name} : { number}</p>
                <button type="button"
                    onClick={() => onDeleteContact(id)}
                    className="phonebook__contact-list-btn">
                Delete
                </button>
            </li>
            
            ))}
    </ul>
) 

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;