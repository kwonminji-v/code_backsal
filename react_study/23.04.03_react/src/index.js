import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import App from './JS/(1)_useState-App'
// import App from './JS/(2)_stateup-App';
// import App from './JS/(3)_stateup-sol-App';
// import App from './JS/(4)_style-App';
// import App from './JS/(5)_component-App';
// import App from './JS/연습';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
