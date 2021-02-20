import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    let text = useRef("");

    const { filtered, filterContact, clearFilter } = contactContext;

    useEffect(()=>{
        if(filtered === null){
            text.current.value = "";
        }
    })

    const onChange = (ev) => {
        if(text.current.value !== "") {
            filterContact(ev.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input type="text" ref={text} placeholder="Filter Contacts" onChange={onChange}/>
        </form>
    )
}

export default ContactFilter;
