import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//npm install react-bootstrap


export default function App() {
  return (
    <div className='App'>
        <Navbar bg = "light" variant="light">
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
                <div className='col-md-4'>안녕</div>
                <div className='col-md-4'>바보</div>
                <div className='col-md-4'>강아지</div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
                    <h4>상품명</h4>
                    <p>상품 정보</p>
                </div>
                <div className='col-md-4'>
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
                    <h4>상품명</h4>
                    <p>상품 정보</p>
                </div>
                <div className='col-md-4'>
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
                    <h4>상품명</h4>
                    <p>상품 정보</p>
                </div>
            </div>
        </div>
    </div>
  )
}
/* 
React에서 public 폴더는 정적 자산을 저장하는 데 사용됩니다. 이 폴더에 저장된 파일은 React 애플리케이션에서 직접 참조할 수 있습니다. 이 폴더의 파일들은 webpack에 의해 번들링되지 않으므로, 파일 크기가 큰 이미지나 비디오와 같은 정적 자산을 저장할 때 유용합니다.

public 폴더는 React 프로젝트의 루트 디렉토리에 위치합니다. 이 폴더 내의 파일은 애플리케이션에서 / 경로를 통해 참조할 수 있습니다. 예를 들어, public 폴더에 index.html 파일이 있다면, 이 파일은 http://localhost:3000/ URL을 통해 브라우저에서 직접 열 수 있습니다.

public 폴더 내의 파일을 React 애플리케이션에서 참조하는 방법은 다음과 같습니다.

정적 자산의 경로를 상수로 선언합니다.
javascript
Copy code
const imagePath = "/images/example.jpg";
경로를 포함한 HTML 태그를 작성합니다.
javascript
Copy code
<img src={process.env.PUBLIC_URL + imagePath} alt="Example" />
process.env.PUBLIC_URL은 애플리케이션의 루트 경로를 나타냅니다. 이를 포함하여 상수 imagePath를 조합하여 이미지를 불러오고 있습니다.

HTML 태그에서 PUBLIC_URL 환경 변수를 사용하여 경로를 작성합니다.
html
Copy code
<img src="%PUBLIC_URL%/images/example.jpg" alt="Example" />
PUBLIC_URL은 React 애플리케이션이 서비스되는 경로를 나타냅니다. 이를 포함하여 경로를 작성하여 이미지를 불러오고 있습니다.

위의 예시에서는 public 폴더에 images 폴더를 생성하고, 해당 폴더 내에 example.jpg 파일을 저장하였습니다. 이렇게 하면 http://localhost:3000/images/example.jpg 경로를 통해 이미지를 불러올 수 있습니다.

Public 폴더의 용도
여러가지 소스코드는 src 폴더에 보관하면 되는데, img같은 static의 경우 public 폴더에 보관해도 된다.
리액트로 개발을 끝내면 build 작업이라는 걸 하는데, 지금까지 짰던 코드를 한 파일로 압축해주는 작업이다. (압축이라는 의미는 배포 시 공백이나 여백 없이 한줄로 빼곡하게 적히게 된다.)
src 폴더에 있던 코드와 파일은 다 압축이 되는데, public 폴더에 있는 것들은 그대로 보존이 된다.
그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴일이 거의 없고, img,txt, json 등 수정이 필요없는 static 파일들의 경우에는 public 폴더에 보관해도 상관없다.

<img src = "/logo192.png" />

하지만 권장되는 방식은 아래와 같이 작성해주는 방식이다. 내 사이트의 현재 경로를 뜻한다.
<img src={process.env.PUBLIC_URL + '/logo192.png'} />

*/
