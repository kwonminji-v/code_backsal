import { createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user',
    //initialState : 'kim',
    initialState : {name : 'kim', age : 20},
    reducers : {
      changeName(state){
        // return 'john ' + state
        //return {name : 'park', age : 20}
        state.name='park'//array/object의경우 직접수정해도 state변경됩니다
      },
        // increase(state){//추가
        //   state.age += 1   
        increase(state,action){//추가  state변경함수를 action이라 한다
          state.age += action.payload
      },
    }
  }) 
  export let { changeName ,  increase } = user.actions 
  export default user

/* 
createSlice: Redux Toolkit에서 제공하는 함수로서, reducer 함수와 action 생성 함수를 자동으로 생성해줍니다. 이 함수를 사용하면 Redux 구현 시 불필요한 코드 작성을 줄일 수 있습니다.

let user = createSlice({ ... }): createSlice 함수를 사용하여 user라는 이름의 slice를 생성합니다. slice는 Redux Store 안에 저장될 데이터의 조각으로 이해할 수 있습니다.

name: 해당 slice의 이름을 지정합니다.
initialState: 해당 slice가 가질 초기 상태 값을 지정합니다.
reducers: 해당 slice에서 사용할 action을 정의합니다. changeName과 increase 함수를 정의하였습니다.

changeName(state): state의 name 속성 값을 변경합니다.
increase(state,action): state의 age 속성 값에 action.payload 값을 더합니다.
export let { changeName, increase } = user.actions: user slice에서 정의한 action 생성 함수인 changeName과 increase를 외부에서도 사용할 수 있도록 export 합니다.

export default user: user slice를 default로 export 합니다. 이렇게 함으로써 다른 파일에서 해당 slice를 import할 때 default로 가져올 수 있습니다.


createSlice 함수를 사용하여 user 슬라이스를 생성합니다. 이 슬라이스는 name과 age라는 두 가지 속성을 가진 초기 상태값을 가지며, changeName과 increase 두 가지 액션을 정의합니다.

changeName 액션은 현재 상태의 name 값을 변경하여 park으로 설정합니다. 이를 위해서 createSlice 함수는 Immer 라이브러리를 사용하여 상태 변경 코드를 작성합니다. 따라서 직접 불변성을 유지하는 코드를 작성하지 않아도 됩니다.

increase 액션은 action.payload 값에 따라 age 값을 증가시킵니다. 이 값은 액션 객체의 payload 속성에 저장됩니다.

createSlice 함수는 해당 슬라이스의 액션 생성자 함수와 리듀서 함수를 자동으로 생성하며, 이들을 객체로 반환합니다. export let { changeName , increase } = user.actions 구문을 통해 생성된 액션 생성자 함수를 내보냅니다. 이들 함수는 dispatch 함수를 통해 액션 객체를 생성하며, 이 객체는 user 슬라이스의 리듀서 함수를 실행합니다.
*/