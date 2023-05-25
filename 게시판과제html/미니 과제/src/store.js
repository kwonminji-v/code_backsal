import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

// let user = createSlice({
//   name : 'user',
//   initialState : 'kim'
// })

// let user = createSlice({
//     name : 'user',
//     //initialState : 'kim',
//     initialState : {name : 'kim', age : 20},
//     reducers : {
//       changeName(state){
//         // return 'john ' + state
//         //return {name : 'park', age : 20}
//         state.name='park'//array/object의경우 직접수정해도 state변경됩니다
//       },
//         // increase(state){//추가
//         //   state.age += 1   
//         increase(state,action){//추가  state변경함수를 action이라 한다
//           state.age += action.payload
//       },
//     }
//   }) 

// export let { changeName ,  increase } = user.actions 

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
    // { id: 1, name: 'Red Knit', count: 1 },
  ],
  reducers : {
    addCount(state, action) {
      //state[action.payload].count++
      let 번호 = state.findIndex((a) => a.id === action.payload )
      state[번호].count++
      //payload와 같은 id가진 상품을 찾아서  +1
      //a는 state 어레이 에 있던 하나 하나의 자료이다
    },
    addItem(state, action) {
      //addItem( {id : 2, name : 'Grey Yordan', count : 1} ) //1번상품만 추가됨
      //array뒤에 자료 추가해주는 함수
      //state.push({id : 1, name : 'Red Knit', count : 1})
      state.push(action.payload)
    }
  }
})
//addItem({id : 2, name : 'Gary Yordan', count : 1})
//state[action.payload].count++ 의미는 addConunt(0) 0번째 상품 + 1 해주는 기능인듯
export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 