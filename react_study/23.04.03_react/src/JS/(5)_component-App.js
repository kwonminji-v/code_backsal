
import React, { useState } from 'react'



function Child(props) {
    return (
        <div>
            <p>{props.onClick}</p>
            <button onClick={props.onClick}>증가</button>
        </div>
    );
};

function App() {
    const [count, setCount] = useState(0);
    const clickBtn = () => setCount(count + 1);

  return (
    <div>부모 컴포넌트
    <span>count : {count}</span>
    <Child onClick = {clickBtn}/>
    </div>
  );
}

export default App;
// const GrandChild = ({ count, setCount}) => {
//     const increment =() => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             손자 컴포넌트
//             <span>{count}</span>
//             <button onClick={increment}>증가</button>
//         </div>
//     )
    
// };

/* 
App 컴포넌트는 부모 컴포넌트 이다. 여기서는 Child 컴포넌트를 렌더링 한다. Child 컴포넌트는 자식 컴포넌트이다.
이 컴포넌트는 useState를 사용하여 count 상태를 관리하고 있다. 초기값은 0
increment 함수는 Child 컴포넌트 내에 정의되어 있다. 이 함수는 count 상태 값을 1 증가시키는 역할을 한다.
Child 컴포넌트에서 "증가" 버튼이 렌더링 된다. 이 버튼을 클릭하면 increment 함수가 호출되어 count 상태 값이 증가한다.
child 컴포넌트는 또한 GrandChild 컴포넌트를 랜더링한다. 이 컴포넌트는 손자 컴포넌트이다. 
GrandChild 컴포넌트는 숫자 변경과 관련된 기능이 없기 때문에 상태를 관리하지 않고,
단순히 '손자 컴포넌트'라는 텍스트를 렌더링한다. */

/* 
손자 컴포넌트에도 버튼 만들어 자식과 같이 올라가게 버튼 만드는 실습 해보기

기본적으로 React에서 부모 컴포넌트는 자식 컴포넌트에게 prop을 통해 데이터를 전달하며, 각 컴포넌트는 독립적으로 상태를 관리할 수 있다.
이전 예제에서는 Child 컴포넌트에서만 count 상태가 관리되고 있어, Child 컴포넌트의 숫자만 변경되었다.

만약 부모 컴포넌트의 상태가 자식과 손자 컴포넌트에도 영향을 미치길 원한다면, 상태를 부모 컴포넌트에서 관리하고 자식 및 손자 컴포넌트로 prop을 통해 전달해야 합니다.*/

