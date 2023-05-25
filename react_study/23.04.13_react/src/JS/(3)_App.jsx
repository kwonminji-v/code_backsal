import React from 'react'


export default function App() {
    const styleH2 = {border:'solid 1px black' , color:'blue', fontSize: '32px'}
  return (
    <div>
        {}
        <h1>Hello World</h1>
        <h2 style={styleH2}> Hello World </h2>
        <h2 style={{border: 'solid 1px black', color:'blue', fontSize: '32px'}}>Hello World</h2>
        <p className='content'>Hello World</p>
        {}

    </div>
  )
}
/* 
app.jsx는 자바스크립트 XML 파일의 확장자이다. JSX는 리액트에서 사용되는 템플릿 언어
JSX 파일을 자바스크립트 파일로 변환하기 위해서는 바벨(Babel)과 같은 도구를 사용한다.
JSX 파일에서는 자바스크립트와 HTML 태그를 함께 사용 
tsx는 TypeScript와 JSX를 함께 사용하는 파일의 확장자이다.
*/