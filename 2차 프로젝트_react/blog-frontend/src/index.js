import React from 'react';
import ReactDOM from 'react-dom/client';
// import { configureStore } from "@reduxjs/toolkit";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';
import reportWebVitals from "./reportWebVitals";
import style from './css/jw_app.module.css';
import ScrollTop from './additional_features/jw_scrollTop';
import Footerjw from './component/jw_footer';



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);


// const store = configureStore({
//   reducer: rootReducer, 
//   middleware: [applyMiddleware(sagaMiddleware),  sagaMiddleware],
// });


function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();
// sagaMiddleware.run(rootSaga);
// loadUser();


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={style.container}>
    <Provider store={store}>
    <BrowserRouter>
    <ScrollTop />
      <App />
      <Footerjw />
    </BrowserRouter>
  </Provider>
  </div>
);

reportWebVitals();