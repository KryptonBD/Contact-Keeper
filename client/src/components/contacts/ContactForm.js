import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "personal"
    })

    const { name, email, phone, type } = contact;

    const onChange = (ev) => setContact({ ...contact, [ev.target.name]: ev.target.value })

    const onSubmit = ev => {
        ev.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: "",
            email: "",
            phone: "",
            type: "personal"
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" placeholder="Enter Name" name="name" value={name} onChange={onChange} />
            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={onChange} />
            <input type="text" placeholder="Enter Phone" name="phone" value={phone} onChange={onChange} />

            <h5>Contact Type</h5>
            <input type="radio" name="type" id="" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal &nbsp;
            <input type="radio" name="type" id="" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional &nbsp;
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
            </div>

        </form>
    )
}

export default ContactForm;
