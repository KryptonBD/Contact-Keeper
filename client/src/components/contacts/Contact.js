import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
const Contact = () => {
    const contactContext = useContext(ContactContext);

    const { getContacts, contacts, filtered, loading } = contactContext;

    useEffect(() => {
        getContacts();
        //eslint-disable-next-line
    }, [])

    if (contacts !== null && !loading && contacts.length === 0) {
        return <h4>Please Add a Contact</h4>
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null ? filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    )) : contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            ) : <Spinner />}

        </Fragment>
    )
}

export default Contact;
