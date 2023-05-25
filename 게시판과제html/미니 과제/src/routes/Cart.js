import {Table} from 'react-bootstrap'
import { useDispatch , useSelector } from "react-redux"

//import { changeName , increase } from "./../ustore.js"
import { increase } from "./../store/userSlice.js"
import { addCount } from './../store.js'

function Cart(){
 //store 안에 있던 모든 state가 됩니다   
  let state = useSelector((state) =>  state )
  //console.log(a)
 // console.log(a.user)
//아무 컴포넌트에서 useSelector((state) => { return state } ) 쓰면 store에 있던 모든 state가 그 자리에 남습니다. 
  console.log(state.cart[0].name)
//cart소문자로 써야함

let dispatch = useDispatch()
//store.js로 요청보내주는 함수임

    return(
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니 출력해보기</h6>
            {/* //수정 증가함수를 추가함 */}
            <button onClick={()=>{ dispatch(increase(100))}}>버튼</button>
            {/* 100은 메시지에 실어보내는 화물임 */}
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>{state.cart[0].name}</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{state.cart[1].name}</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr> */}
                    {//return문이랑 {}는 동시에 생략가능하다
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>안녕</td>
                                   <button onClick={()=>{
                                    //   dispatch(changeName())
                                    //dispatch(addCount(i))
                                    dispatch(addCount(state.cart[i].id)) //버튼옆의 id
                                   }}>+</button> 
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;
