import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => (<ul className={style.list}>
    {contacts.map((contacts)=>(<li key={contacts.id}><ContactItem contacts={contacts} onDeleteContact={onDeleteContact}></ContactItem></li>))}
    </ul>
)

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact:PropTypes.func.isRequired
};
export default ContactsList;

