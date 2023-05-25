/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //App 도 컴포넌트이다. 
  let posts = "여행 Blog";
  const [title, setTitle] = useState(["강원도 강릉", "제주도"]);
  const [good, setGood] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  //스위치의 역할을 한다. 아래의 삼항연산자는 기계라고 생각하면 된다.


  function addGood(i) {
    const newGood = [...good];
    newGood[i] += 1;
    setGood(newGood);
    console.log([i])
  }

  function modalToggle() {
    setModal(!modal)
  }

  // function arRange() {
  //   setTitle([...title.sort()]);
  // }

  // console.log([title]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>{posts}</div>
      </div>

      {/* <button onClick={arRange}>오름차순으로 정리하기</button> */}

      {/* <div className="list">
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
        <h4 onClick={modalToggle} >{title[2]}</h4>
        <div>6월 29일</div>
      </div> */}

      {

        title.map(function (a, i) {

          return (
            <div className="list" key={i}>
              <h4 onClick={modalToggle}>{a} <span onClick={() => addGood(i)}>좋아요👍</span> {good[i]}</h4>
              <div>2월 29일</div>
            </div>
          )
        })

      }



      {
        modal == true ? <Modal title={title} setTitle={setTitle} /> : null
      }

    </div>
  );
}

//함수 안에서 만들어진 변수는 밖에서 사용 불가하다. props 문법을 사용하면 간단하다

function Modal(props) {

  return (
    <>
      <div className="modal" >
        <h2>상세설명 페이지입니다.</h2>
        <h4>{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={() => { props.setTitle("경상도 창원", "전라도 여수") }}>글 수정 버튼</button>
      </div>
    </>
  );
}
export default App;

