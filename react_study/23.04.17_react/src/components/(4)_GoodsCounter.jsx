import {useSelector, useDispatch} from 'react-redux';
import { addNumber, substractNumber } from '../modules/goodsReducer';
import { sale } from '../modules/stockReducer';

function GoodsCounter(){
    //useSelector : store의 상태 조회 Hook
    const{stock, goods, message, goodsState} = useSelector(state=>({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods,
        message : state.stockReducer.message,
        goodsState : state.stockReducer.type
    }))
    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 hook
    const dispatch = useDispatch(),
          onAddNumber = () => dispatch(addNumber()),
          onSubstractNumber = () => dispatch(substractNumber()),
          onSale = () => dispatch(sale()),
          onSoldOut = () => dispatch(sale());
    const handleMinusBtn=() =>{
        onSubstractNumber();
        onSale();
    }
    const handlePlusBtn=() =>{
        onAddNumber();
        onSoldOut();
    }
    return (
        <div>
            <h2>딥러닝 개발자 무릎담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type='button' onClick={handleMinusBtn}>-</button>
                <i> {goods} </i>
                <button type='button' onClick={handlePlusBtn}>+</button>
            </div>
            <div>
                total amount <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원
            </div>
            <div>
                재고<strong>{stock}</strong>
            </div>
            <div>
                <strong>{message}</strong>
                <strong>{goodsState}</strong>
            </div>
        </div>
    )
}
export default GoodsCounter;
/* 리덕스 사용상 이득은 
1) 예측 가능한 상태관리, 2) 디버깅용이, 3) 코드의 일관성, 4)  */