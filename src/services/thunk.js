import { createAsyncThunk } from "@reduxjs/toolkit";
import { postContact, getContacts, deleteContact, logInUser, getProfile } from "./requestsAPI";

export const loginThunk = createAsyncThunk('auth/login', async (body, { dispatch }) => {
    const data = await logInUser(body)
    dispatch(getProfileThunk())
    return data
});

export const getProfileThunk = createAsyncThunk('auth/UserMenu', async () => {
    return await getProfile()
});

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    return await getContacts('/contacts')
});

export const postContactThunk = createAsyncThunk('contacts/addContact', async (requestBody) => {
    return await postContact('/contacts', requestBody)
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (endpoint) => {
    return await deleteContact(`/contacts/${endpoint}`)
});