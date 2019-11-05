import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor }  from './redux/store';

import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';

// if(process.env.NODE_ENV !== 'production')
//   require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <CartProvider>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </CartProvider>
    </Provider>, 
    document.getElementById('root')
);
