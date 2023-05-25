import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './home/main_of_main';
import ShoppingBasket from './purchase_page/shoppingBasket';
import NotFound from './notFound'
import Content from './main_page/content'
import Main from './home/main';
import ProgressBar from './progressBar';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
// configureStore = createStore에서 향상된 기능 제공
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './combineReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer : rootReducer
});

root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <Provider store = {store}>
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<><Home /><Main /></>} />
      <Route path='/' element={<Outlet />}>
        {/* 남성 의류 라우트 */}
        <Route path='manCloth/' element={<><Content url={'/manCloth'} /></>} />
        {/* 여성 의류 라우트 */}
        <Route path='womanCloth/' element={<><Content url={'/WomanCloth'} /></>} />
        {/* 남성 신발 라우트 */}
        <Route path='manShoe/' element={<><Content url={'/ManShoe'} /></>} />
        {/* 여성 신발 라우트 */}
        <Route path='womanShoe/' element={<><Content url={'/WomanShoe'} /></>} />
        {/* 상세정보 라우트 */}
        <Route path='/buyItems/:productId' element={<ShoppingBasket />} />
      </Route>
    </Routes>
    <Routes>

    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
