
import React from 'react'
/* npm i redux react-redux / 리액트에서 리덕스 사용하기 / 액션생성함수 */

export const addNumber = () => {
    return { type : "ADD" }
}
//"SUBSTARCT" 라는 액션 타입을 가진 객체를 반환하는 액션 생성 함수
export const substractNumber = () => {
    return { type : "SUBSTARACT" }
}
/* 이 함수를 호출하여 반환된 액션 객체를 Redux 스토어에 디스패치하면, 스토어의 상태를 변경하는데 사용되는 reducer에 전달한다. */
//초깃 값 설정하기.
const initialState = {
    stock : 10,    //재고
    goods: 1       //구매한 개수
};

//Reducer 생성 -> 사용
/* Redux reducer는 애플리케이션의 상태를 변경하는 함수로, 상태와 액션을 인자로 받아 새로운 상태를 반환한다.
action : 디스패치된 액션 객체이다. 이 객체는 액션 생성 함수에서 반환된 객체, 어떤 동작을 수행해야 하는지를 나타낸다.*/
const goodsReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    console.log(state)
    switch (action.type) {
        case "ADD" : 
        return {
            ...state,
            stock : state.stock - 1,
            goods : state.stock + 1
        }
        case "SUBTRACT":
        return {
            ...state,
            stock : state.stock + 1,
            goods : state.stock - 1,
        }
        default :
        return state
    }
}

export default goodsReducer;