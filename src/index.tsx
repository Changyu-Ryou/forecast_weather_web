import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import './styles';

const queryClient = new QueryClient();

async function init() {
  try {
    const rootNode = document.getElementById('root') as HTMLElement;

    ReactDOM.createRoot(rootNode).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );
  } catch (e) {
    console.log('init project fail', e);
  }
}

init();
