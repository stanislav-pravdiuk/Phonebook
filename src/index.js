import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from 'redux/store';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading='null' persistor={persistor}>
        <BrowserRouter basename='/Phonebook'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);