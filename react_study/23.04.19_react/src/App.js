/* 페이지 이동을 위해서 유저들은 주소창에 url 링크를 타고 이동하게 된다.
<Link to="/">Home</Link>
<Link to="/detail">상세페이지</Link>
위와 같이 작성하면 각각의 url 경로로 이동하는 링크를 생성할 수 있다.
*/
import './App.css';
import React from 'react'
import { Button, Navbar, Container, Nav, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import doglist from './doglist_data';
import Detail from './routes/detail';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Finddog from './routes/finddog';
import axios from 'axios'
import Login from './routes/login'








function App() {

  let [dogs, setDogs] = useState(doglist)

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">LoveFiction</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => { navigate('/') }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>사이트 소개</Nav.Link>
            <Nav.Link onClick={() => { navigate('/finddog') }}>반려동물찾기</Nav.Link>
            <Nav.Link onClick={() => { navigate('/') }}>입양동물</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
            {/* <button onClick={signupModal}>회원가입</button> */}
            {/* <button onClick={mypageModal}>마이페이지</button> */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  dogs.map((value, index) => {
                    return (
                      <Card dogs={dogs[index]} index={index} />
                    )
                  })
                }
              </div>
            </div>
            <button className='Btn'>더보기</button>
          </>
        } />
        <Route path="/" element={<Navbar.Brand />} />
        <Route path="/detail/:id" element={<Detail dogs={dogs} />} />
        <Route path='*' element={<div>이곳은 아직 아무것도 없습니다. 잘못 누르셨어요</div>}></Route>
        <Route path='/finddog' element={<Finddog />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}





function Card(props) {
  return (
    <div className='col-md-4'>
      <div style={{ width: "200px", height: "170px" }}><img src={`${process.env.PUBLIC_URL}/dog_${props.index + 1}.jpg`} width="100%" height="80%" />
        <h4>{props.dogs.title}</h4>
        <p>{props.dogs.content}</p>
        <p>{props.dogs.location}</p>
        <input type="button" value="입양하기" /></div>
    </div>
  )
}


export default App;
