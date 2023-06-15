import ContactForm from "../phonebook/contactForm";
import ContactList from "../contacts/ContactsList";
import Filter from "../contacts/Filter";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "services/thunk";
import { useEffect } from "react";
import React from "react";
import Error from "components/error/Error";

function Phonebook() {
    
    const { items, isLoading, error } = useSelector((state) => state.contacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
    
    return (
        <div>

        <ContactForm />

        <Filter />

        {isLoading&& <Loader />}
        {items&& <ContactList />}
        {error && Error(error)}

        </div>
    );
};

export default Phonebook;