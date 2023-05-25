import React from 'react'

export default function App() {
    const name = '누리호!';
    function 함수() {
        return 100
    }

    const 변수 = 10
    const 값 = true
    const 값2 = null

  return (
    <div className='App'>
        <h1>안녕, {name} 1호</h1>
        <p> {100+1}</p>
        <p>{'Hello' + 'World'}</p>
        <p>{[1, 2, 3].map(x => x**2)}</p>
        <p>{함수()}</p>
        <p>{변수}</p>
        <p>{값?'one':'two'}</p>
        <p>{값2??'one'}</p>
    </div>
  )
}
/* 
??는 nullish coalescing 연산자이다. 이 연산자는 왼쪽 피연산자가 null 또는 undefined일 경우,오른쪽 피연산자를 반환한다.
만약 왼쪽 피연산자가 falsy하지만 null 또는 undefined가 아닐 경우에는 왼쪽 피연산자를 반환한다.
*/