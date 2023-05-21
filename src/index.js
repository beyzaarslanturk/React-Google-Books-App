import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.body.classList.add('bg-primary');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

