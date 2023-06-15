// import { configureStore } from "@reduxjs/toolkit";

// import { itemsReducer } from "./contacts/contactsSlice";
// import { filterReducer } from "./filter/filterSlice";
// import { authReducer } from "./auth/authSlice";
    
// export const store = configureStore({
//     reducer: {
//         contacts: itemsReducer,
//         filter: filterReducer,
//         auth: authReducer
//     },
// });

// -------------------------------add persistor

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import { itemsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token', 'profile']
};

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        contacts: itemsReducer,
        filter: filterReducer,
        auth: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ],
            },
        }),
});

export const persistor = persistStore(store)