/* 
1개의 store안에서 모든 정보를 담아서 코딩을 해오나 , 프로그램이 커지면 기능별로 작은 store들을 만들게 되는데, 작은 store들을 slice라고 한다.
redux-toolkit이 작은 store들을 합쳐서 redux가 요구하는 큰 store로 만들어 주는 기능을 한다.
*/
import * as React from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
//작은 Slice들을 모아서 store를 만들때에는 configureStore를 사용한다.


//아래와 같은 Slice조각들을 여러개 만들어서 사용해보기


const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
      // state.value = state.value + action.payload;

      //아래에서 reduce사용 시 값의 불변성을 위해 state를 복제하여 사용하였으나, toolkit을 사용하면 아래와 같이 복잡하지 않아도 됨 (state.value = state.value + action.step;) 문법으로 작성해보기.
    },
  },
});

/* createSlice는 store로서의 객체들이 필요하다 이름, 초깃값, reducer(복수형) - type별로 함수를 정해준다.
   기존 코드에서 보면 action.type에 따라서 조건문이 있었는데, reducers에 작성시에는 type을 바로 기입하여 type이 up일 때는 해당 함수가 실행될거라고 기입한다. 인자로는 (state,action)값을 받는 것은 동일하다. */

/* 아래에서 button에 전달될 action에 대해 reducer를 작성해준다. */

//configureStore에는 객체를 전달해야하고, 필수적으로 들어가야하는 건 reducer이다 (단수!)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    //상단에 적힌 counterSlice의 reducers에 적힌 reducer들을 하나로 합쳐서 자동으로 만들어주는 하나의 reducer가 counterSlice.reducer 한문장이다.
  },
  //reducer에는 각각의 Slice의 reducer들이 들어가면 된다.
});


// function reducer(state, action) {
//   if (action.type === 'up') {
//     /* state를 리턴하는데, 이 때 우리가 불변하게 값을 다루기위해서 기존의 값을 복사하여 사용한다. */
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// }

// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state.counter.value); //state의 최상위 객체로 counter가 console에 보여지는데 이 counter는 store안의 reducer: {}에 적힌 counter를 의미한다.
    return state.counter.value; // state.couter.value 라고 적게되면 counterSlice에 우리가 전달한 초깃값인 value:0으로 출력됨.
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: 'counterSlice/up', step: 2 });
          dispatch(counterSlice.actions.up(2));
          //type을 counterSlice/up으로 작성하면, counterSlice와 일치하는 Slice에 속해있는 reducer에 /up 과 일치하는 중괄호 안의 함수가 호출되면서, 해당 함수가 리턴한 값이 새로이 출력되는 값이 된다.
        }}
      >
        +
      </button>
      {count}
    </div>
    /* action을 클릭할때마다 dispatch가 전달될때마다, 숫자를 2씩 올라갈 수 있게 step 값을 2로 설정해두었다.  */
  );
}

export default function App() {
  return (
    //위에서 작성된 하나의 거대한 store(configuerStore로 만들어진) 를 return 값에 작성해주고, store에서 만들어진 여러가진 정보들(state)을 사용하려면 useSelector를 사용하면 된다.
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

/* 
redux-toolkit에서는 reduce 함수들을 참고해서 자동으로 action을 만들어주는 actioncreater를 생성해준다.
해당 코드에서의 사용 방법은 counterSlice에 dispatch(counterSlice.actions.up())입력하고 매개변수()안에는 2라고 입력하여준다.
콘솔로 action의 값을 counterSlice함수에서 확인해보면 {type: "counterSlice/up", payload: 2} 위와 같이 출력되는데, 
전달된 값이 payload라는 값으로 들어오게 되는데 (action을 사용할 때) 위에 적혀있던 action.step을 action.payload라고 작성해준다면
payload의 값은 괄호안의 매개변수인 2로 들어가게 된다.

만약 직접 action을 전달하는게 아닌 자동으로 생성된 actioncreate를 쓴다면 payload를 쓰는 게 약속되어 있는것이다.
*/
