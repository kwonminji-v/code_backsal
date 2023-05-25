import { Table } from 'react-bootstrap'
import { useDispatch , useSelector } from "react-redux"
import { increase } from "../store/userSlice.js"
import { addCount } from '../store.js'



function Finddog() {


    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    return (
        <div>
        <h2>{state.user.name} {state.user.age}의 정보현황 출력해보기</h2>
        <button onClick={() => dispatch(increase(1))}>버튼</button>

        <Table>
            <thead>
            <th>#</th>
            <th>지역</th>
            <th>보호동물</th>
            <th>입양 대기</th>
            </thead>
            <tbody>
                {
                state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count+"마리"}</td>
                                <td>{state.cart[i].stay+"마리"}</td>
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

export default Finddog;