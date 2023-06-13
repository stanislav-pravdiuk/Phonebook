import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser, getProfile } from "services/auth-service";

export const loginThunk = createAsyncThunk('auth/login', async (body) => {
    return await logInUser(body)
});

export const getProfileThunk = createAsyncThunk('auth/UserMenu', async () => {
    return await getProfile()
});