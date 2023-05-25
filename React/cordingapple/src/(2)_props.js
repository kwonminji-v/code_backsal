/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

  const [title, setTitle] = useState(["강원도 강릉", "경상도 창원", "제주도"]);
  const [good, setGood] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title1, setTitle1] = useState(0)

  //스위치의 역할을 한다. 아래의 삼항연산자는 기계라고 생각하면 된다.


  function addGood(i) {
    const newGood = [...good];
    newGood[i] += 1;
    setGood(newGood);
    console.log([i])
  }

  // function arRange() {
  //   setTitle([...title.sort()]);
  // }

  // console.log([title]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>여행Blog</div>
      </div>
      {

        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true); setTitle1(i) }}>{a}<span onClick={() => addGood(i)}>좋아요👍</span> {good[i]}</h4>
              <div>2월 29일</div>
            </div>
          )
        })

      }

      <button onClick={() => setTitle1(0)}>title[0]</button>
      <button onClick={() => setTitle1(1)}>title[1]</button>
      <button onClick={() => setTitle1(2)}>title[2]</button>

      {
        modal == true ? <Modal title={title} title1={title1} /> : null
      }

    </div>
  );
}

function Modal(props) {

  return (
    <>
      <div className="modal" >
        {/*{ ↓ 해당 title state가 0이면 props.글제목[0] } */}
        <h4>{props.title[props.title1]}</h4>
        {(console.log(props.title[props.title1]))}
        <p>날짜</p>
        <p>상세 내용</p>
        <button>글 수정 버튼</button>
      </div>
    </>
  );
}
export default App;

