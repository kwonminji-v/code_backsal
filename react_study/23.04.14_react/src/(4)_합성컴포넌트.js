import {useState} from 'react'
import {useEffect} from 'react'
import styled from "styled-components"
import React from 'react'

const CardDiv = styled.div `
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

const ShareCard = () => {
    return (
        <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
            <button>이미지 저장</button>
            <button>트위터</button>
            <button>페이스북</button>
        </div>
        </>
    )
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
        {props.children}
        <p><input type="button" value="create Hello World"/></p>
        <p><input type="button" value="Delete Hello World"/></p>
        </>
    )
}

const TestTwo =() => {
    return (
        <p>Hello World2</p>
    )

}

function create() {
    return  (
        <Test>

        </Test>
    )
}

function App(){

  return(
    <>
    <Card cardClassName='setting' title='챌린지 설정'>
        <SettingCard />
        <Test>
            <TestTwo></TestTwo>
        </Test>
    </Card>
    <Card cardClassName='share' title='서비스 공유하기'>
        <ShareCard/>
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