import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor }  from './redux/store';
=======
import CartProvider from './providers/cart/cart.provider';
>>>>>>> f770f7a... update config docker

import './index.css';
import App from './App';

// if(process.env.NODE_ENV !== 'production')
//   require('dotenv').config();

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, 
=======
    <CartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartProvider>, 
>>>>>>> f770f7a... update config docker
    document.getElementById('root')
);
