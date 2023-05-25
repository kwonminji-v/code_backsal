/* 리액트는 속성을 prop이라 함
사용자 정의 태그는 컴포넌트라고 한다! */

/* 
컴포넌트 함수를 다시 실행시켜주는 것이 Prop과 State!
작성해볼 기능은 MODE의 값을 이벤트가 발생했을 때, 변경해주는 걸 작성
*/
import React from "react";
import "../App.css";
import { useState } from "react";

function Article(props) {
  console.log(props.title, props.body);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  console.log("props", props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let item = props.topics[i];
    lis.push(
      <li key={item.id}>
        <a
          id={item.id}
          href={"/read/1" + item.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {item.title}
        </a>
      </li>
    );
    console.log("props", props, props.title);
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

export default function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState("WELCOME");
  //상단의 3문장을 위의 한 문장으로 축약해서 사용!

  const [id, setId] = useState(null);
  /* 
현재 값이 선택되지 않았으니 null하여 초깃값이 없다고 설정해두었다. 해당 초깃값이 변경하는 순간은 내부의 값을 클릭했을 때 변경하기때문에 Nav컴포넌트 안의 onChangeMode에 작성을 해준다.

**useState 이 인자는 그 state의 초깃값이다. state의 값은 0번째 인덱스의 값을 읽고, state의 값을 바꿀 땐 1번째 인덱스의 함수로 값을 변경해준다<div class=""></div>
const mode의 값을 통해서 상태의 값을 읽을 수 있고 (WELCOME)
const setMode는 1번째 원소인 setMode를 통해서 mode의 값을 바꿀 수 있다는 규칙이 있는 것.
 
보통의 지역변수를 state(상태)를 업그레이드 시켜줘야, 해당 함수가 한번 실행 후 멈추는 것이 아니라 이벤트가 더해짐에 따라 기능이 작동될 수 있다. 상태를 만들어 주고 그 상태를 _mode에 저장을 해봄.
useState(); 괄호안엔 상태를 state로 업그레이드 하고싶은 객체를 입력
useState(); 는 배열을 리턴하고, 그 배열에 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터이고, 1번째 데이터는 그 상태의 값을 변경할 때 사용하는 함수 이렇게 총 2개로 배열로 저장이 된다.
*/
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "CSS", body: "CSS is..." },
    { id: 3, title: "Javascript", body: "Javascript is ..." },
  ];
  console.log(topics);
  /* 
mode가 WELCOME일 때와, READ일 때의 조건문을 작성하였고, content라는 변수를 설정하여, mode에 따라 content의 값이 변경되게 설정함. 
*/
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello,WEB"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {/* 값을 바꿀 때는 setMode로 작성을 해주어야 함 */}
      {content}
    </div>
  );
}

/* 
setMode('WELCOME) , setMode('READ') mode의 값이 setMode에 의해서 READ로 바뀌게 되면서 App 컴포넌트가 다시 실행되며, useState가 mode의 값을 READ로 변경을 해준다. 그럼 조건문에서 mode 가 READ인 조건에 충족되며 아티클이 변경된다.
const [mode, setMode] = useState('WELCOME'); const 안에 mode와 setMode의 이름은 마음대로 설정이 가능하나, 배열로 저장되기 때문에 처음 입력된 곳엔 mode에 정의된 초깃값이! 뒤에 입력된 setMode엔 1번째 인덱스의 배열값인 함수가 저장이 되는 것
*/

/* 
Prop을 통해 입력된 데이터를 만든 컴포넌트 함수가  처리해서 리턴 값을 만들면 그 리턴 값이 새로운 UI가 되는 것.
State : 컴포넌트 함수를 다시 실행해서 새로운 리턴값을 만들어주는 또 하나의 데이터를 state 라고 한다.

클릭했을 때, 이미 한번 실행된 App 함수는 mode의 값을 READ로 변경해 주어도, 다시 실행되지 않기 때문에 리턴 값에는 변화가 없다.

mode의 값이 바뀌면 컴포넌트 함수가 새로 실행되면서 새로운 리턴값이 만들어지고, 그 리턴값이 UI변경에 반영되는 것을 진행하고자 한다면 "STATE"를 사용하면 된다.

state를 사용하려면 먼저 import가 필요하고, useState라는 훅을 사용해야 한다 훅은 리액트에서 제공하는 기본적인 함수이다.
*/

/* 
useState - state를 만드는 함수 / state값이 바뀌면 컴포넌트는 다시 렌더링 된다

useReducer
[state, setState] = useState(0) -> 0이라는 기본값을 가진 state을 만듬
setState(state+1) -> 1을 더해주고 싶을때

 */
