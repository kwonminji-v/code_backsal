import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

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

function App(){
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
  )
}
export default App;
/* 
http://localhost:3000/
path ="/" -> path를 이렇게 작성하면 최상위인 host3000으로 적용
http://localhost:3000/topics
path="/"
path="/topics"  -> 이 두개의 path에 적용된다는 의미이다.
*/
