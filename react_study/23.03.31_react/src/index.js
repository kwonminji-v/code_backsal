import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home"/>);

/* 
"App" 컴포넌트를 "home" 탭을 기본값으로 랜더링 한다.
 App 컴포넌트 속성 (attribute) 중 하나로 사용
 createRoot 함수를 사용하면 애플리케이션의 초기 랜더링과 나중에 발생하는 업데이트들이 더욱 효율적으로 처리
 home은 실제로 해당 애플리케이션에서 정의된 탭 중 하나일 필요는 없다.
 이 값은 "App" 컴포넌트의 속성 (attribute) 중 하나로 사용 */

// reportWebVitals();
