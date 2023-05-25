import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
/* 
useEffect는 리액트 훅(hook) 중에 하나로, 컴포넌트에서 부수효과 (side effect)를 수행할 수 있도록 해준다.
부수효과란, 컴포넌트가 렌더링 될 때, 외부와 상호작용 하는 코드를 말한다.
API 요청, 타이머 설정, DOM조작 등이 있다.
*/
function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
    
    const handleCountUp = (e) => {
        setCount(count + 1)
    }

/* 
useEffect는 함수의 형태로 사용되며, 첫번째 인자로 콜백 함수를 받는다. 콜백 함수는 컴포넌트가 렌더링 될 때마다 실행된다.
두 번째 인자로 배열을 받으며, 이 배열에 지정한 값이 변경될 때만 콜백 함수가 실행
두 번째 인자를 생략한다면, 모든 값이 변경될 때마다 콜백 함수가 실행된다.
useEffect는 컴포넌트가 렌더링 된 후 실행되는 함수로, 특정 값을 감시하고 있을 때만 해당 값이 변경될 때 실행된다. 이를 통해 컴포넌트의 상태를 관리할 수 있다.
여기선 count가 컴포넌트의 state로 존재하는데, 이 state가 변할 때마다 뭔가 다른효과를 주고 싶다면 useEffect 훅을 사용한다.
*/
useEffect(() => {
    if (bool) {
        if (count % 2) {
            alert('홀수입니다.')
        } else {
            alert('짝수입니다.')
        }
    }
    setBool(true)
}, [count]) //state로 인해 변화할 인자를 넣는다.
return (
    <>
        <div>{count}</div>
        <button onClick={handleCountUp}>UP!</button>
    </>
)
}

function App() {

    return (
        <div className='App'>
            <Counter />
        </div>
    );
};

export default App;
/* 
초기 렌더링 시 bool 상태 값은 false 이다.
handleCountUp 함수가 실행되면 count 상태값이 1 증가한다.
useEffect 함수가 실행된다.

bool 값이 false이므로 if문 안의 코드는 실행되지 않습니다.
setbool(true) 코드가 실행되어 bool값이 true로 변경된다. 
handleCountUp 함수가 다시 실행되면 count 값이 2가 된다.
useEffect 함수가 다시 실행된다. bool 값이 true 이므로 if 문 안의 코드가 실행된다.
count 값이 2 이므로 else문 안의 코드인 "짝수입니다."가 alert 창으로 나타난다.

처음 렌더링 시 bool값이 false이기 때문에 useEffect 함수가 실행되지 않는다.
첫 번째 클릭 이후부터는 bool 값이 true가 되므로 useEffect 함수가 실행된다.
count가 0이므로 count%2 의 값은 0이 된다.
하지만 bool 값이 바뀐 후에 알림창이 띄워져서 이전 count 값인 0이 아닌 1이라는 값이 나타나게 된다.
*/

/* 
useEffect(() => {
 ->state가 변경되어 렌더링 될 때 실행하는 부분(공부하기위해 책을 펴는 타이밍)
 return() => { 
 -> 다시 렌더링 하기 이전에 컴포넌트를 지우고 다시 그리는 과정에서 지우기 전에 실행되는 부분이다. 
 clean-up 부분 (시험공부를 하나 마치고 다음 시험 공부 전에 책상을 정리하는 느낌)
 }
},  [state값이 들어간다. (들어가지 않으면 최초 한번만 실행된다.)])
*/