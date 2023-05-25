/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = '강남 고기 맛집'

  function 제목바꾸기() { 
      let newArray = [...글제목]
/* 
deep copy라고 함 / 단순하게 값만 복사 및 공유하는 것이 아닌 각각 독립적인 값을 가지는 복사 방법
array나 object 자료들은 복사를 진행할 때, [...] (spread operate) -> 중괄호,대괄호 둘 다 제거하라는 의미 대괄호 안에 ...3개를 입력하여 복사하여 준다. 
리액트에서는 모든 데이터 state 데이터들은 imuutable data 직접 수정해선 안된다. 라는 원칙을 고수함
*/
      newArray[0] = '여자 코트 추천';
      글제목변경( newArray );
    } 
/* state를 변경하는 함수를 사용할 땐, state의 복사본을 만들어서 수정하는 것을 추천한다.
글제목에 있던 0번째 데이터를 여자 코트 추천으로 바꿈 / 복사된 배열의 인덱스 넘버를 이용하여 변경하고 싶은 값을 변경하여 준다. */

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }> 제목변경버튼 </button>

      <div className='list'>
        <h3> {글제목[0]} <span onClick={() => 좋아요변경(좋아요+1 )}>👍</span>{좋아요}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세 내용</p>
  </div>

  )
}
export default App;
/* 
<Array, Object state 데이터를 변경하는 방법>
변경 함수(대체할 데이터) 를 입력해야하고, 선언된 state는 직접 건들지 않는 것이 제일 중요하다. 
원래 있던 state를 deep copy해서 그걸 사용하여 state를 변경해주는 것이 좋다.

<> - 프래그먼트 </> 의미없는 <div>를 사용하기 싫으면 <></>를 사용해서 return() 내부를 묶을 수 있다.

컴포넌트 만드는 위치는 function App() 과 나란히 만들어서 사용하면 된다. 안에 포함되는 것이 아닌,

컴포넌트로 만드는 기준 어떤 UI들을 만들면 좋은지는 
1. 반복적으로 나타나는 코드를 컴포넌트로 치환하여 사용 하면 좋다.
2. 자주 변경되는 UI들이 있다면 컴포넌트로 만들어 사용한다면 성능적으로 좋다.
3. 다른 페이지들로 분리할 때도 사용하면 좋음.

but, 컴포넌트가 많이 생긴다면 state를 사용할 때 복잡해지는 단점이 있다. 상위 컴포넌트에서 만든 state를 사용하려면 props 문법을 사용해야함.
*/