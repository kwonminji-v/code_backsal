import { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import React from 'react'

const CardDiv = styled.div`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    width: ${(props) => (props.className === "setting" ? "200px" : "400px")};`;

const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.title}</h3>
      <hr></hr>
      <div>{props.children}</div>
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>

  )
}

const Test = (props) => {
  return (
    <>
      <p>Hello World</p>
    </>
  )
}

const TestTwo = () => {
  return (
    <p>Hello World2</p>
  )
}
const ModifyCard = () => {
  const [list, setList] =useState([])
  let count =0;
  function plus() {
    setList(list => [...list,<h2 key={list.length}>안녕 세상아!</h2>])
    console.log(list);
    
  }
  function minus() {
    setList(list => list.slice(0,list.length-1))

  }
  return (
    <React.Fragment>
      <button onClick={plus}>늘어난다</button>
      <button onClick={minus}>줄어든다</button>
    {list}
    </React.Fragment>
  )
}

function App() {

  return (
    <>
      <Card cardClassName='setting' title='챌린지 설정'>
        <SettingCard />
        <Test>
          <TestTwo></TestTwo>
          <TestTwo></TestTwo>
          <TestTwo></TestTwo>
        </Test>
        <ModifyCard />
      </Card>
    </>
  );
};

export default App;

/* 
스타일드 컴포넌트를 사용하여 두 종류의 카드 컴포넌트(setting, share)를 생성한다.
각 카드는 제목과 컨텐츠를 포함하며, 설정 카드에는 초기화와 저장하기 버튼이, 공유 카드에는 이미지 저장, 트위터, 페이스북 버튼이 있다.
그리고 각각의 카드에 'hello world' 및 'hello world2' 텍스트가 포함된 test와 testtwo 컴포넌트가 추가되어 있다.
*/