import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Diary from './pages/diary';




function App() {

  let [item, setItem] = useState(data)
  let navigate = useNavigate();

  function contentUp() {
    return (
      item.content.sort()
    )
      (console.log(item.content))
  }


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">권민지님의 Day</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/diary')}>Diary</Nav.Link>
            <Nav.Link onClick={() => navigate('/photo')}>Photo</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={<>
          <div className="main-bg"></div>
          <button onClick={contentUp}>여행지 가나다 순서로 정리</button>
          <div className="container">
            <div className="row">
              {item.map((value, i) => {
                return (
                  <Card key={i} item={item[i]} i={i} />
                )
              })
              }
            </div>
          </div>
        </>} />

        <Route path="/diary/:id" element={<Diary item={item} />} />

        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
      </Routes>


    </div>
  );
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}



function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <img src={process.env.PUBLIC_URL + `/travel_${[props.i]}.jpg`} width="80%" alt="img" />
        <h4>{props.item.title}</h4>
        <p>{props.item.content}</p>
        <p>{props.item.price}</p>
      </div>
    </>
  )
}

export default App;
