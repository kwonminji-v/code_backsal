import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function App() {
  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      <Button variant='primary'>파란색 버튼(primary)</Button>
        </Container>
      </Navbar>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품 정보</p>
          </div>
          <div className='col-md-4'>
            <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품 정보</p>
          </div>
          <div className='col-md-4'>
            <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품 정보</p>
          </div>
        </div>
      </div>
    </div>
  )
}
