
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
  domain={process.env.REACT_APP_DOMAIN}
  clientId={process.env.REACT_APP_CLIENTID}
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  cacheLocation="localstorage"
  useRefreshTokens={true}
>
      <App />
    </Auth0Provider>*
    
  </React.StrictMode>
);

