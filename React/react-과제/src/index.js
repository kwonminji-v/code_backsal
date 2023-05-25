import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './JS/(1)_props';
// import App from './JS/(2)_state';
// import App from './JS/(3)_event';
// import App from './youtube/(1)_component';
// import App from './youtube/(2)_page';
// import App from './JS/(4)_useReducer';
// import App from './JS/(5)_create'
// import App from './JS/(6)_update'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* 
DOM에서 'root' 라는 ID를 가진 요소를 찾아서 ReactDOM의 새로운 루트를 생성한다. 이렇게 생성된 루트는 root라는 상수에 저장*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
root.render() 함수는 생성된 루트에 React 컴포넌트를 랜더링 합니다.
여기서는 <App /> 컴포넌트를 렌더링 한 것
<React.StrictMode>로 <App /> 컴포넌트를 감싸서 Strict 모드를 활성화 한다.
Strict 모드는 개발 과정에서 잠재적인 문제를 찾아내기 위해 추가 검사를 수행한다.*/

reportWebVitals();
/* 
애플리케이션 성능을 측정하고 리포팅하는데 사용
      index.html -> index.js -> App.js 순서이다. 
*/
