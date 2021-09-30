import React, { Component } from 'react';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';



class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id:''
    }

    handleInputChange = e => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
        });
      };

    reset = () => {
        this.setState({
          name: '',
          number: '',
        });
      };
    

    handleSubmitForm = e => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
        this.props.onAddContact(this.state);
        this.reset();
    }

    render() {
        const { name, number } = this.state;
        const forNameId = uuidv4();
        const forNumberId = uuidv4();
        return (
                <form className={style.form} onSubmit={this.handleSubmitForm}>
                <label className={style.label}>
                    <span className={style.title}>Name</span>
                    <input
                        value={name}
                        id = {forNameId}
                        onChange={this.handleInputChange}
                        className={style.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={style.label}>
                    <span className={style.title}>Number</span>
                    <input
                        value={number}
                        id = {forNumberId}
                        onChange={this.handleInputChange}
                        className={style.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button className={style.button} type="submit" onClick={this.handleSubmitForm}>Add contact</button>
            </form>
        )
    }

}

export default ContactForm;