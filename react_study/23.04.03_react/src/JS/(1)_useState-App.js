import {useState} from 'react'
import '../App.css'

function Article(props) {
  console.log(props, props.title)
  let [글제목, b] = useState('여자 바지 추천');
  let posts = '강남역 spa 브랜드'
  return (
    <div className="App">
      <div className="list">
        <h4>{props.title}</h4>
        <p>04월 03일 발행</p>
      </div>
    </div>
  )
}


function App() {
  let [글제목, b] = useState('여자 바지 추천');
  let posts = '강남역 spa 브랜드'
  return (
    <div>
    <div className="black-nav">브랜드 list</div>
    <Article title = "여자 바지 추천"></Article>
    <Article title = "여자 코트 추천"></Article>
    <Article title = "여자 티셔츠 추천"></Article>
    </div>
  )
}


export default App;

/* 
state 만드는 법
let posts = "임의로 입력" 이렇게 변수에 데이터를 저장했었는데, 리액트에선 변수 말고 state를 만들어서 데이터를 저장할 수 있다.

import { useState } from 'react'; -> 중괄호를 사용하는 이유는 useState 함수는 배열을 반환하므로, 배열 비 구조화 할당(destructruing assignment)을 사용하여 해당 배열의 첫 번째 요소를 count  변수에 할당하고, 두번째 요소를 setCount변수에 할당한다.

배열 비 구조화 할당을 위해 중괄호({})를 사용한다. 
중괄호 안에 변수명을 넣어 해당 변수에 할당할 요소를 선택한다.
예를 들어, const [count,setCount] = useState(0);
코드에서는 useState(0)이 반환하는 배열의 첫 번째 요소가 count 변수에, 두 번째 요소가 setCount 변수에 할당된다.

만약 중괄호르 사용하지 않고, useState를 호출하면, 배열 전체가 count 변수에 할당된다.
이 경우, setCount 함수를 사용하려면 인덱스를 이용하여 요소에 접근해야 한다.

예를 들어, const state = usestate(0);과 같이 호출하면, state[0]이 count에, state[1]이 setCount에 할당된다.
따라서 setCount를 호출하려면 state[1]을 사용해야 한다.

하지만 배열 비구조화 할당을 사용하여 변수명을 지정하면 코드 가독성이 좋아지고, 요소에 접근할 때 인덱스를 사용하는 것보다 변수명을 사용하는 것이 더 직관적이다.*/