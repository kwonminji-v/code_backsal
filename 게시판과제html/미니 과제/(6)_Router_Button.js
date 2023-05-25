import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "../App.css"
import bg from '../dog_9.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import data from "../data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "../routes/(6)_Router_Detail";


function App() {
    let [shoes] = useState(data)
    /* 페이지 이동을 도와주는 함수 */
    console.log(shoes[0].title);

    let navigate = useNavigate();

    return (
        <div className='App'>

            <Button variant="primary">그냥 파란색</Button>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        {/* <Nav.Link onClick={() =>{navigate('1')}}>앞으로</Nav.Link>
                     <Nav.Link onClick={() =>{navigate('-1')}}>뒤로</Nav.Link> */}
                        <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')'}}></div>
                            <div className="container">
                                <div className="row">
                                    {
                                    shoes.map((a, i) => {
                                        return (
                                            <Card shoes = {shoes[i]} i={i+1}></Card>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    }
                />
{/* <Route path = "/detail/0" element={ <Detail shoes ={shoes}/> } /> 
 <Route path = "/detail/1" element={ <Detail shoes ={shoes}/> } />
    <Route path = "/detail/2" element={ <Detail shoes ={shoes}/> } />
    이 3문장을 id값을 이용하여 아래의 1 문장으로 만들 수 있게 된다.*/}
                <Route
                    path="/detail/:id"
                    element={<Detail shoes={shoes} />} />
{/* <Route path = "*" element={ <div> 경로에 *을 작성하면 해당페이지는 없는 페이지를 의미한다.</div> } /> 
    /about/member로 접속 시 <About>안에 <div>멤버들</div>를 보여준다.*/}
                <Route path="/about" element={<About />} >
                    <Route path="member" element={<div>멤버들</div>} />
                    <Route path="location" element={<div>회사 위치</div>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/event" element={<Eventpage />}>
                    <Route path="one" element={<p>첫 주문시 양배추 즙 선물 받기</p>}></Route>
                    <Route path="two" element={<p>생일 기념 쿠폰 받기</p>}></Route>
                </Route>
            </Routes>
        </div>
    );
}
/* 라우터의 장점은 뒤로가기 버튼을 이용할 수 있으며, 페이지간의 이동이 쉽다. */

function About() {
    return (
        <div>
            <h4>회사 정보이다.</h4>
            {/* 위에서 import 해온 <Outlet>은 nested routes안의 element들을 어디에 보여줄 지 표기하는 곳이다. */}
            <Outlet></Outlet>
        </div>
    )
}

function Card(props) {
    return (
        <div className="cor-md-4">
            <img src={`../dog_${props.i}.jpg`} width="30%" alt="" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
}

function Eventpage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    )
}
export default App;