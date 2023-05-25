import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Route } from 'react-router-dom'
function Home() {
  return (
      <div>
          <h2>HOME</h2>
          Home....
      </div>
  )
}
function Topics() {
  return (
      <div>
          <h2>Topics</h2>
          Topics....
      </div>
  )
}
function Contact() {
  return (
      <div>
          <h2>Contact</h2>
          Contact....
      </div>
  )
}

function App () {
  return(
    <div>
      <h1>Hello Router</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
{/* 사용자가 최상위 디렉토리로 접근하면 Home 컴포넌트를 라우팅해준다. */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route> 
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
/* 사용자가 해당 웹사이트에 아무런 path도 지정하지 않고 들어왔을땐 Home컴포넌트를 라우팅 하고 싶을 때 경로에 /를 입력해준다. 
라우트의 패스만 지정해주면, 그 컴포넌트는 패스와 일치하는 자료가 라우팅 되는 것을 알 수 있다.*/
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

/* 
http://localhost:3000/
path ="/" -> path를 이렇게 작성하면 최상위인 host3000으로 적용
http://localhost:3000/topics
path="/"
path="/topics"  -> 이 두개의 path에 적용된다는 의미이다.
*/
