import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDeleteContact}) => (
  <div className={style.container}>
    <div className={style.contactContainer}>
    <span className={style.name}>{contacts.name}:</span>
    <span className={style.number}>{contacts.number}</span></div>
    <button className={style.delButton} onClick={()=> onDeleteContact(contacts.id)}>Delete</button>
  </div>
);

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
  onDeleteContact:PropTypes.func.isRequired
};

export default ContactItem;
