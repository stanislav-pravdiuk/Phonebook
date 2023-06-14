import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getProfileThunk, loginThunk } from "services/thunk";
import Notiflix from "notiflix";

const handlePending = (state) => {
    state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = '';
    state.token = payload.token;
};
const handleFulfilledProfile = (state, { payload }) => {
    state.isLoading = false;
    state.error = '';
    state.profile = payload;
};
const handleRejected = (state, actions) => {
    state.isLoading = false;
    state.error = actions.error.message;
    Notiflix.Notify.warning(actions.error.message)
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            state.profile = null
            state.token = ''   
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            .addMatcher(isAnyOf(
                loginThunk.pending, getProfileThunk.pending),
                handlePending
            )
            .addMatcher(isAnyOf(
                loginThunk.rejected, getProfileThunk.rejected),
                handleRejected
            )

    }
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;