import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser, getProfile } from "services/auth-service";

export const loginThunk = createAsyncThunk('auth/login', async (body, { dispatch }) => {
    const data = await logInUser(body)
    dispatch(getProfileThunk())
    return data
});

export const getProfileThunk = createAsyncThunk('auth/UserMenu', async () => {
    return await getProfile()
});