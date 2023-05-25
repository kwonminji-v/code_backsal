/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
//App 도 컴포넌트이다. 
  let posts = "여행 Blog";
  const [title, setTitle] = useState(["강원도 강릉", "하동", "제주도"]);
  const [good, setGood] = useState(0);
  const [modal, setModal] = useState(false);
//스위치의 역할을 한다. 아래의 삼항연산자는 기계라고 생각하면 된다.
  


  function modalClose() {
    setModal(false);
  }

  function modalUp() {
    setModal(true);
  }

  function addGood() {
    setGood(good + 1);
  }

  function arRange() {
    setTitle([...title.sort()]);
  }

  console.log([title]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>{posts}</div>
      </div>

      <button onClick={arRange}>오름차순으로 정리하기</button>

      <div className="list">
        <h4>
          {title[0]} <span onClick={addGood}>좋아요👍</span> {good}{" "}
        </h4>
        <div>4월 29일</div>
        <button
          onClick={() => {
            let titlecopy = [...title];
            titlecopy[0] = "경기도 용인";
            setTitle(titlecopy);
          }}
        >
          title 변경 버튼
        </button>
      </div>

      <div className="list">
        <h4 >{title[1]}</h4>
        <div>2월 29일</div>
      </div>

      <div className="list">
        <h4 onClick={modalUp} >{title[2]}</h4>
        <div>6월 29일</div>
      </div>

          {
            modal ? <Modal /> : null
          }

    </div>
  );
}



function Modal() {
  return (
    <>
      <div className="modal">
        <h2>상세설명 페이지입니다.</h2>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}

export default App;

/* 
컴포넌트 만드는 문법 
2번째 방법은 화살표 함수를 사용해서 사용 /  변수를 하나 만든 후 함수를 넣어서 작성했기 때문에 사용 가능하다.
let Modal = () => {
    return (

    )
}
const 변수에 담아서 사용하는 경우가 많은데, 재할당이 되지않아서 실수 방지차원에서 많이 사용되어진다.
*/