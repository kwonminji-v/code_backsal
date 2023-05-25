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