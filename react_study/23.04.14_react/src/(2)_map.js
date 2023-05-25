import React from 'react'

export default function App() {
  return (
    <div>
        {[1, 2, 3].map((num, idx) => {
            return <div key={idx}>{num}</div>
        })}

        {[1,2,3].map((num, idx)=> {
            return <div key = {idx}>{num}</div>
        })}
    </div>
  )
}
/* 
두 코드 조각 모두 Array.prototype.map() 함수를 사용하여 배열의 각 요소를 순회하고 있다.
map() 함수는 각 요소에 대해 콜백함수를 실행하며, 이 콜백 함수의 매개변수로 요소(el)와 해당 요소의 인덱스(idx)를 받는다.
두 코드 조각에서 idx를 사용하는 부분은 <div> 요소의 key 속성이다.
key 속성은 React가 효율적으로 리스트를 렌더링하고 업데이트 할 수 있도록 도와준다. 여기서 idx는 배열 내의 고유한 위치를 나타내므로, 각 <div> 요소에 고유한 key 값을 제공한다.

map()은 배열을 받아서 또 다른 배열을 반환하여 준다.
*/