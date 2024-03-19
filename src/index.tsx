import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * HTML  : Hyper Text Markup Langauge
 * DOM   : Document Object Model
 * CSS   : Cascading Style Sheets
 * HTTP  : Hyper Text Transfer Protocol
 * URL   : Uniform Resource Locator
 * WWW   : World Wide Web
 * JSON  : Java Script Object Notation
 * SPA   : Single Page Application
 * API   : Application Programming Interface
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
