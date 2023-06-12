import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser } from "services/auth-service";

export const loginThunk = createAsyncThunk('auth/login', async (body) => {
    return await logInUser(body)
})