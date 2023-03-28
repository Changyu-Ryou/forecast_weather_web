import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/reset.css';

async function init() {
  try {
    const rootNode = document.getElementById('root') as HTMLElement;

    ReactDOM.createRoot(rootNode).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (e) {
    console.log('init project fail', e);
  }
}

init();
