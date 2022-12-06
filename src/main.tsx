import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';
import PwaReloadPrompt from './pwa/PwaReloadPrompt.js';

import './main.css';

createRoot(document.querySelector('#root') as HTMLDivElement).render(
  <StrictMode>
    <App />
    <PwaReloadPrompt />
  </StrictMode>,
);
