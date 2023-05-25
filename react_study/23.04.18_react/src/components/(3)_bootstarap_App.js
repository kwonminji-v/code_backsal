import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from '../data';

function App() {
    let [shoes] = useState(data)
    console.log(shoes[0].title);
    console.log(shoes[1].title);
    console.log(shoes[2].title);

    return (
        <div className='App'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href='#home'>ShopShop</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href="home">HOME</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-bg'></div>
            <div className='container'>
                <div className='row'>
                    <Card shoes = {shoes}></Card>
                    <Card2 shoes = {shoes}></Card2>
                    <Card3 shoes = {shoes}></Card3>
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/dog_4.jpg'} width = '60%' />
{/* <img src='./shoes1.jpg'
<img src='c:\shop\shoes\shoes1.jpg' width = 80% />는 허용되지 않음. 로컬장소가 불안정하게 지정됨 */}
            <h4>{ props.shoes[0].title }</h4>
            <p>{ props.shoes[0].price }</p>
        </div>
    )
}

function Card2(props) {
    return (
        <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL + '/dog_6.jpg'} width = '60%' />
        <h4>{ props.shoes[1].title }</h4>
        <p>{ props.shoes[1].price }</p>
    </div>
    )
}
function Card3(props) {
    return (
        <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL + '/dog_5.jpg'} width = '60%' />
        <h4>{ props.shoes[2].title }</h4>
        <p>{ props.shoes[2].price }</p>
    </div>
    )
}

export default App;