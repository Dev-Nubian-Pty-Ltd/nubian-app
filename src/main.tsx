import { apollo } from './api/Apollo';
import { gqlURI } from './api/config';
import { ApolloProvider } from '@apollo/client';
import { App } from '@components/app/App';
import '@root/assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

apollo.init({ getUrl: gqlURI });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={apollo.get()}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
);
