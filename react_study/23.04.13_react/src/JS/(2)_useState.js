import React from 'react'
import { useState } from 'react'
import '../App.css';


function Resume(props) {

    const [like, setLike] = useState(0);
    const myColor = props.color;
    const styleColor = {color: myColor};

    // function clickLike() {
    //     setLike(like + 1);
    // }

  return (
    <div style={{border: "solid 1px", width:"500px"}}>
        <h1>{props.name} 자기소개서</h1>
        <h1>{props.hello}</h1>
        <h2>취미 : {props.hobby}</h2>
        <h2>좋아하는 음식 : {props.food}</h2>
        <h2>좋아하는 색 : <span style={styleColor}>{myColor}</span></h2>
        {/* <button onClick={clickLike}>Like</button><span>{like}</span> */}
        <button onClick={() => clickLike(props.like, props.setLike)}>👍<span>{props.like}</span></button>
    </div>
  )
}


function clickLike(like, setLike) {
    setLike(like + 1);
}
function App() {
    const[like, setLike] = useState(0);

    return (
        <Resume name="권민지" hello="헬로우" hobby = "축구" food="치킨" color="skyblue" like={like} setLike={setLike} />
    )
}
export default App;

/* 
App 컴포넌트에서 useState()를 사용하여, like와 setLike 상태를 만들고, 이들을 Resume 컴포넌트에 props로 전달한다.
Resume 컴포넌트에서 props로 전달된 like와 setLike를 사용하여, clickLike() 함수를 실행한다.
*/