import { stockGoodsValue } from '../modules/goodsReducer'; 
import { goodsReducer1 } from '../modules/goodsReducer'; 
const stockVal = stockGoodsValue().stock;
const goodsVal = stockGoodsValue().goods;
console.log(goodsReducer1)
export const sale = () => {
    console.log(stockVal)
    if(stockVal >0){
        return {type : "SALE"}
    }
    else{
        return{type : "SOLDOUT"}
    }

}

// 초기값
const initialState={
    message : "판매중 (initialState)"
};
// 리듀서
const stockReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SALE":{
            return{
                ...state,
                message : "판매중 ㅎㅎㅎ"
            }
        }
        case "SOLDOUT":{
            return{
                ...state,
                message:"다팔림 ㅋㅋ"
            }
        }
        default : return state;
    }
}
export default stockReducer;