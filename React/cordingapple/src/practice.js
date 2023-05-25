/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(["나의 정보", "사진첩", "게시판", "방명록"]);
  const [good, setGood] = useState(0);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");



  function upGood() {
    setGood(good + 1);
  }

  return (
    <>
      <div className="black-nav">권민지의 Blog</div>
      {menu.map((menu, i) => (
        <div className="list" key={menu}>
          <h3 onClick={() => {setModal(!modal); setTitle(i)}}>{menu}</h3>
           {(console.log(modal))}
          <p>
            여기는 권민지의 Blog입니다.
            <span onClick={() => {upGood(i)}}>방문자 수 😁</span>
            {good}
          </p>
          <div>생성 날짜 : 2023-06-24</div>
          <button onClick={() => {
            let copy = [...menu];
            copy.splice(i , 1);
            setMenu(copy);
          }}>삭제하기</button>
        </div>
      ))}

      <input onChange={(e) => { setInputValue(e.target.value);  }}/>
    

      <button onClick={() => {
        let copy = [...menu];
        copy.unshift(inputValue);
        setMenu(copy);
      }}>항목 추가</button>


      {
        modal ? <Modal title={title} menu={menu} /> : null 
        
      }
    </>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h1>디테일 페이지입니다.</h1>
      <h3>{props.menu[props.title]}</h3>
      {console.log(props.title)}
      <p>여기는 권민지의 Blog입니다.</p>
      <div>생성 날짜 : 2023-06-24</div>
    </div>
  );
}

export default App;
