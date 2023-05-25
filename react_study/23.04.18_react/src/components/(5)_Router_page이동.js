/* 
페이지 이동 버튼은 유저들은 주소창에 url입력해서 들어가지 않고 링크를 타고 들어가게 된다.
링크를 만들고 싶으면 react-router-dom에서 Link 컴포넌트 import 해오고 원하는 곳에서 <Link>를 쓰면 된다.

<Link to="/">Home</Link>
<Link to="/detail">상세페이지</Link>
위와 같이 작성하면 각각의 url 경로로 이동하는 링크를 생성할 수 있다.
*/
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import data from "../data.js";
import { Routes, Route, Link } from "react-router-dom";
// import { func } from "prop-types";
import Detail from "./(5)_Router_Detail";


function App() {
    let [shoes] = useState(data)
    console.log(shoes[0].title);

    return (
        <div className='App'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to="/" className="navbar-brand">ShopShop</Link>
                    <Nav className='me-auto'>
                        <Link to="/">HOME</Link>
                        <Link to="detail">상세 페이지</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={ <>
                            <div className="main-bg"></div>
                            <div className="container">
                                <div className="row">
                                    {shoes.map((a, i) => {
                                        return (
                                            <div key={i} className="col-md-4">
                                                <img src={process.env.PUBLIC_URL + "./dog_" + (i + 1) + ".jpg"} width="60%" />
                                                <div className="card-content">
                                                    <h4>{shoes[i].title}</h4>
                                                    <p>{shoes[i].price}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    path="/detail"
                    element={<div>상세페이지이다. 강아지소개하는</div>}
                />
            </Routes>
        </div>
    );
}

export default App;