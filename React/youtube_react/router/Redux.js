import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
/*  store안에 state를 어떻게 바꿀것인가를 결정해주는 것이 reducer이다 .
reducer는 두 개의 매개변수를 받는데, 현재상태인 currentstate 값을 받고, 두번째는 어떻게 바꿀것인지에 대한 action을 받는다. */

function reducer(currentstate, action) {
  //리덕스는 각각의 state의 변화를 불변하게 유지해야되는데, 그러기 위해서는 새로운 state를 만드는데 그 새로운 state는 기존 state를 복제해서 사용하는 방법을 택한다.
  if (currentstate === undefined) {
    // 만약 currentstate값이 정의되지 않았다면 기본 state값을 리턴하는 것으로 설정이 가능하다.
    return {
      number: 1,
    };
  }
  const newState = { ...currentstate };
  //reducer가 호출될 때, 만약 action의 type이 "ADD"라면 number를 newState.number의 값을 1씩 증가시켜준다.
  if (action.type === 'ADD') {
    newState.number++;
  }
  return newState;
  //그렇게 복제된 새로운 state값을 return 하여 준다. 매개변수로 받은 값을 return 해주면 그 리턴값이 새로운 state의 값이 된다.
  //위에서 action으로 인해 바로 앞 조건문이 실행되며, 새로운 값이 return되고 새로운 state가 생성된다.
}
const store = createStore(reducer);
//createStore에는 반드시 reducer를 사용해주어야 한다.
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
          {/* Provider로 감싸진 컴포넌트들은 store를 사용할 수 있게 된다. */}
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1> :<Left2></Left2>
    </div>
  );
}
function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  console.log('3');
  //콘솔을 작성하여 버튼을 클릭 시, 콘솔창의 숫자는 3이라고만 쭉 표시되는데, state를 사용하고 있는, number의 값만 바뀌고 부모컴포넌트들은 다시 렌더링 되기 않는 것을 알 수 있다.
  const number = useSelector((state) => state.number);
  //useSelector는 함수를 인자로 받는다. 임의의 함수 f를 생성해보았다. 함수는 state값을 입력 값으로 받을예정이다.
  return (
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'ADD' });
        }}
      ></input>
    </div>
  );
}

/* 
React-Redux의 4인방이 있다.
1. Provider (컴포넌트)
2. useSelector (어떤 state값을 쓰고 싶을지 선택할 때 사용이 가능)
3. useDispatch (state값을 변경시킬 때 사용)
4. connect (사용하기 어렵고, 재사용성만 필요할 때 사용)

Provider - 어떤 컴포넌트들에게 제공할 것인가들에 대한 가장 바깥쪽 울타리를 정의하는 것이 Provider이다. 만약 container 박스 안의 컴포넌트인 <Left1/>과 <Right1>만 사용할 예정이라면 Provider로 감싸 사용하면 된다.
단순히 Provider로만 감싸면 에러가 발생하는데, Provider의 props 중엔 store를 반드시 정의해주어야 하는데, 앞에서 선언해 둔 store를 Provider 속성으로 입력해준다.

reducer에 선언해둔 number라는 값을 Left3에서만 표시하기 위해서는, useSelector를 사용하여 특정 컴포넌트와 연결해주면 된다. 

이제 버튼을 클릭하면, 숫자가 변경되는 기능을 입력하기 위해서는 Right3의 onClick에 dispatch를 가져와서 해야한다. dispatch안에 type (액션) 일어나길 원하는 액션을 작성해준다. 그렇다면 reducer가 호출되는데 , 
*/
