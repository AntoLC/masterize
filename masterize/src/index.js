import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor }  from './redux/store';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './assets/fontawesome/css/all.css'; // Font-Awesome 
import App from './App';

// if(process.env.NODE_ENV !== 'production')
//   require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.register();
