
import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContact = id => props.getContactId(id);

    return (
        <div className="main">
            <h2 style={{color: "blue",fontSize:"40px",padding:"20px",textAlign:"center"}}>Contact List</h2>
            <Link to="/add">
                <button className='ui violet button' style={{color: "red",padding:"10px"}} >Add Contact</button>
            </Link>
            <div>
                {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={deleteContact} />)}
            </div>
        </div>
    )
}

export default ContactList