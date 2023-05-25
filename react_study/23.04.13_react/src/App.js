/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  //useState hook을 사용하여 글제목이라는 상태 변수와 글 제목 변경이라는 상태변경 함수를 선언하고, 초기값으로 문자열 배열을 설정함.
  let [좋아요, 좋아요변경] = useState(0);
//useState 훅을 이용하여 좋아요 상태와 초깃값인 0(좋아요)를 업데이트할 좋아요 변경함수를 선언한다.
  let [modal, setModal] = useState(false);
//useState 훅을 이용하여 modal 상태와 false를 업데이트할 setModal 함수를 선언한다. 초깃값으로 false를 전달
  let [toggleStatus, setToggleStatus] = useState([false,false,false]);
//초깃값으로 false 값을 갖는 길이가 3인 배열을 전달.

  const toggleTitle = (idx) => { //toggleStatus 값을 토글하고, 그에 따라 newTitle 배열을 업데이트 한다.
    const newTitle = [...글제목];
    const newToggleStatus = [...toggleStatus];
    newToggleStatus[idx] = !newToggleStatus[idx];

    if (idx === 0 ) {
      newTitle[0] = newToggleStatus[idx] ? '여자 코트 추천' : '남자 코트 추천';
    }else if (idx === 1) {
      newTitle[1] = newToggleStatus[idx] ? '강서 우동 맛집' : '강남 우동 맛집';
    }else if (idx === 2) {
      newTitle[2] = newToggleStatus[idx] ? '자바 독학' : '파이썬 독학';
    }
//글 제목 변경과 setToggleStatus 함수를 이용하여 상태를 업데이트 한다.
    글제목변경(newTitle);
    setToggleStatus(newToggleStatus);
  };
//toggleModal 함수는 modal 상태 값을 토글하는 setModal 함수를 호출한다.
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>

      <button onClick={() => toggleTitle(0)}>수정버튼 1</button>
      <button onClick={() => toggleTitle(1)}>수정버튼 2</button>
      <button onClick={() => toggleTitle(2)}>수정버튼 3</button>

      <div className='list'>
      <h4>
        {글제목[0]} <span onClick={() => 좋아요변경(좋아요+1)}>👍</span>
        {좋아요}
      </h4>
      <p>2월 17일 발행</p>
      </div>

      <div className='list'>
      <h4> {글제목[1]} </h4>
      <p>2월 17일 발행</p>
      </div>
      <hr/>

      <div className='list'>
      <h4 onClick={toggleModal}> {글제목[2]} </h4>
      <p>2월 17일 발행</p>
      <hr/>
      </div>

      {modal && <Modal onclose={toggleModal} />}
    </div>
  );
}

function Modal ({ onClose }) {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={onClose}>닫기</button>
    </div>
  )
}
export default App;

/* 
1. 싱글페이지 어플리케이션을 만들 때 사용한다 2. HTML 재사용이 편리 3. 같은 문법으로 앱개발이 가능

나중에 Redux 쓰는 이유
1. props 문법이 귀찮을 때 사용하고, state를 변경 및 관리할때 사용한다 (상태 관리가 용이)
components들은 수정 요청만이 가능하다. / store.js를 만들어서 관리한다.
복습 ) 
JSX 문법 1. html에 class를 넣을 땐 class가 아닌 className (class는 리액트 상 자바스크립트 작성 시 예약어로 취급될 수 있기 때문에 className을 사용한다.)
         2. 변수를 html 상에 입력하여 줄때에는 {중괄호}를 사용하여 입력한다.

자바스크립트 변수같은 곳에 있던 자료를 html 중간에 입력하여 사용하는 경우가 많은데, 이전 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML = ?? 이런 식으로 사용하나,
리액트에서는 좀 더 쉽게 대이터를 입력하여 사용하는 것이 가능하고 이를 데이터 바인딩이라고 한다.
중괄호 안에 데이터 바인딩 하고 싶은 변수명 및 함수를 작성하여 사용하면 됨 

JSX 문법 3. html에 style 속성을 적용하고 싶다면 JSX 상에서는 style = {} 안에 { } 자료형으로 넣어야 한다.
ex) <div style = { { color : "red", fontSize : "16px"}}>글 제목</div>

import { useState } from 'react';에서 중괄호르 사용하는 이유는 useState 함수는 배열을 반환하므로, 배열 비구조화 할당 (destructuring assignment)을 사용하여 해당 배열의 첫 번째 요소를 count 변수에 할당하고, 두 번째 요소를 setCount 변수에 할당한다.

예를 들어 , count [count, setCount] = useState(0); 코드에서는 useState(0)이 반환하는 배열의 첫 번째 요소가 count 변수에 , 두 번째 요소가 setCount 변수에 할당된다.
배열 비구조화 할당을 사용하여 변수명을 지정하면 코드 가독성이 좋아지고, 요소에 접근할 때 인덱스를 사용하는 것보다 변수명을 사용하는 것이 더 직관적이다.

state의 가장 큰 장점은 state가 변경될 때마다 자동으로 state와 관련된 html이 재 렌더링 된다는 것이다.
state는 상품명, 글제목, 가격 자주 변경이 필요한 데이터들을 저장하는 것이 좋다. 

터미널 / 브라우저 콘솔창에 warning이 뜨는 이유
대부분 eslint라는 친구가 잘못된 코딩관습 교정해주는 사항이며, 빨간 error는 해결이 필요하지만, 
warning은 무시해도 괜찮다. /* eslint-disable*   이라는 주석을 js 파일 최상단에 추가해주면 eslint 기능을 잠시 끌 수 있습니다. 
*/