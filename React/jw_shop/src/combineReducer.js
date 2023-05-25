import { combineReducers } from "@reduxjs/toolkit";
import dataSet from "./dataSet1";

const rootReducer = combineReducers({
    /* 여기에서 dataSet이라는 이름을 기억해야 하는데 store에 저장 되어 있는 state중에서 내가 찾는
       데이터가 이 미니프로젝트에서는 shoppingBasket.js 에서 dataSet1.js에 있는 productData를 가져오고 싶다?
     -> useSelector(state => state.dataSet) 여기서 dataSet은 combineReducers에 있는 dataSet이라는
     리듀서 이름. 그 담에 const dispatch = useDispatch()처럼 변수에 '무조건' 할당하고 
     dispatch(리듀서)를 통해 리듀서 안의 state, action 인자를 활용하여 상태 변경할 수 있다.*/
    dataSet
})

export default rootReducer;