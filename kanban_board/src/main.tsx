import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Removed the .tsx extension
import './index.css';

// Assuming document.getElementById('root') is not null
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
