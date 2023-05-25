import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import { Provider } from "react-redux";
import store from './store.js'

//경로가 없는것들은 라이브러리이다  "react-router-dom"  
//경로가 있는 ./App  자바스크립트 파일들이다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);

reportWebVitals();
