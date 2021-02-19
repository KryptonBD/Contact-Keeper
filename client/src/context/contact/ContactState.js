import React, { useReducer } from "react";
import {v4 as uuid} from "uuid";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 2,
                name: "Eren Yegar",
                email: "titanEren@gmail.com",
                phone: "1013-4236-392",
                type: "personal"
            },
            {
                id: 3,
                name: "Levi Ackerman",
                email: "levi@gmail.com",
                phone: "7857-1211-025",
                type: "professional"
            },
            {
                id: 4,
                name: "Roronoa Zoro",
                email: "zoro@gmail.com",
                phone: "3340-529-183",
                type: "personal"
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;