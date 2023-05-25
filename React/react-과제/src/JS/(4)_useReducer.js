import React, { useReducer } from 'react'

export default function App() {
    function countReducer(oldCount, action) {
        if(action === 'UP'){
            return oldCount + 1;
        }else if(action === 'DOWN'){
            return oldCount - 1;
        }else if(action === 'RESET'){
            return 0;
        }
    }

  const [count, countDispatch] = useReducer(countReducer,0);
  /* useReducer의 첫번째 파라미터는 reducer함수, 두번째는 초깃값으로 작성된다.
  읽어올 때 쓰는 count와 해당 데이터를 변경하게 해주는 함수는 countDispatch로 설정 */
  function down() {
    countDispatch('DOWN');
  }
  function reset() {
    countDispatch('RESET');
  }
  function up() {
    countDispatch('UP');  
  }
  return (
    <div>
        <input type="button" value="-" onClick={down}/>
        <input type="button" value="0" onClick={reset}/>
        <input type="button" value="+" onClick={up}/>
        <span>{count}</span>
    </div>
  )
}

/* 
useState처럼 setCount의 값을 변경해주는 것이 아니라 useReducer의 countDispatch를 사용하고, 값을 변경해주는 함수인 countDispatch에 액션을 작성하여 값을 변경하여 준다.
action을 countDispatch에게 전달하면 countReducer 함수가 호출되면서 , 두개의 값을 받는데 1개는 oldCount, 하나는 action을 받게되고, 조건문에 실행된 액션에 따라서 어떻게 처리되야할지에 대한 조건문을 작성한다.

Reducer를 사용하게 되면 state를 직접 사용자가 설정하는 게 아니라 countReducer라는 함수가 처리를 한다.
 */