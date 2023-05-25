import React from 'react'
import styled, {css} from 'styled-components'
//스타일 적용하기 npm install styled-components

const One = css `color:red;` ; //One이라는 이름의 CSS 코드 조각 생성
const Two = css `border: 1px solid black;`; //Two 라는 이름의 CSS 코드 조각 생성
const Three = styled.div`${One}${Two}`
//Three 라는 이름의 styled-component를 생성 , 해당 컴포넌트에는 one과 two css 코드 조각을 결합
const App = () => {
    return (
        <Three>Lorem ipsum dolor</Three>
    );
}

export default App;
