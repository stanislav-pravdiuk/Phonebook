import ContactForm from "../phonebook/contactForm";
import ContactList from "../contacts/ContactsList";
import Filter from "../contacts/Filter";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from '../../redux/contacts/operations';
import { useEffect } from "react";

function Phonebook() {
  const dispatch = useDispatch()

  const { isLoading } = useSelector((state) => state.contacts.items)

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])

    return (
        <div>

        <ContactForm />

        <Filter />

        {isLoading&& <Loader />}
        <ContactList />

        </div>
    );
};

export default Phonebook;