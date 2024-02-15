import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);