import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './store/store.js';
import App from './App.jsx';
import { ThemeProvider } from './context/Theme.jsx';
import { SidebarPanelProvider } from './context/SidebarToggle.jsx';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            useRefreshTokens={true}
            cacheLocation='localstorage'
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <ThemeProvider>
                <SidebarPanelProvider>
                    <App />
                </SidebarPanelProvider>
            </ThemeProvider>
        </Auth0Provider>
    </Provider>
);