// import React from "react";
// // import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// // import App from "./App";
// import App from "./modules/(4)_index"
// import { createStore } from "redux";
// import rootReducer from "./modules/(4)_index";
// import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

// const store = createStore(rootReducer, composeWithDevTools());
// console.log(store.getState());

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <Provider store={store}>
//     <App tab="home" />
//   </Provider>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />)