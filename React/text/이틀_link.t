react에서 Link는 react-router-dom 라이브러리에서 제공하는 컴포넌트입니다. 
웹 애플리케이션 내에서 클라이언트 사이드 네비게이션을 수행할 수 있는 방법을 제공합니다.
즉, 사용자가 페이지간 이동을 할 때 매번 서버에 요청하지 않고 
클라이언트에서 처리되는 라우팅을 가능하게 합니다. 
이로 인해 페이지 전환 속도가 빠르고 사용자 경험이 향상됩니다.

npm install react-router-dom

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

Link 컴포넌트는 to 속성을 사용하여 이동할 경로를 지정합니다. 
사용자가 Link를 클릭하면, 브라우저의 주소가 변경되고 해당하는 컴포넌트가 렌더링됩니다. Switch와 Route 컴포넌트는 라우팅 규칙을 설정하고, 
해당 경로에 맞는 컴포넌트를 렌더링하는 데 사용됩니다.

이렇게 Link 컴포넌트를 사용하면 사용자 경험을 향상시키면서 
웹 애플리케이션 내의 페이지 간 이동을 쉽게 구현할 수 있습니다.

