import React, { useState, useMemo, useRef } from 'react'
/* 
React에서 useState, useMemo, useRef 라는 훅을 불러온다. 
const 저장할 변수 = useMemo(() => {
    return 계산하는_무거운함수()
}, [감시하고_있는_변수])
state가 있는 컴포넌트에 state 변화가 생기면 재 평가후 새로 렌더링 하기 때문이다.
*/

export default function App() {
    /* inputName과 inputId에 useRef를 사용하여 각각의 input 요소에 대한 참조를 생성한다. */
    const inputName = useRef(null)
    const inputId = useRef(null)
    /* 각각의 input 요소에 대한 참조를 생성 */
    const [userInfo, setUserInfo] = useState([])
    /* userInfo라는 상태와 그에 대한 업데이트 함수 setUserInfo를 생성하고, 초기값은 빈 배열로 설정한다. */
    const [name, setName] = useState("")
    /* name 상태와 그에 대한 업데이트 함수 setName을 생성 */
    const [id, setId] = useState("")
    /* id 상태와 그에 대한 업데이트 함수 setId를 생성 */

    function handleInputName(e) {  //이름 입력란의 값을 상태에 저장
        setName(e.target.value)
        console.log("렌더링 - 1")
    }

    function handleInputId(e) { // 아이디 입력란의 값을 상태에 저장
        setId(e.target.value)
        console.log("렌더링 - 2")
    }
    /* form submit 이벤트를 처리하며, 이름과 아이디를 userInfo 배열에 추가한다. */
    function handleSubmit(e) {
        e.preventDefault()
        const newInfo = [...userInfo, { name, id }]
        inputName.current.value = ''
        inputId.current.value = ''
        inputName.current.focus()
        setUserInfo(newInfo)
        console.log("렌더링 - 3")
    }//userInfo 배열의 길이를 반환
    function getNum(user) {
        console.log("getNum 렌더링")
        return user.length
    }
    /* userInfo 배열이 변경될 때마다 getNum 함수를 호출하여 결과를 n변수에 저장한다. */
    const n = useMemo(() => getNum(userInfo), [userInfo])
    //컴포넌트의 반환 부분에서, 입력란, 버튼, 목록, n변수 값을 표시한다.
    return (
        <div className='App'>
            <form>
                <input
                    type="text"
                    placeholder='이름을 입력하세요'
                    onChange={handleInputName}
                    ref={inputName} />
                <input
                    type="text"
                    placeholder='아이디를 입력하세요'
                    onChange={handleInputId}
                    ref={inputId} />
                <button
                    type='submit'
                    onClick={handleSubmit}>버튼
                </button>
            </form>
            <ul>
                {userInfo.map((value, idx) => (
                    <li key={idx}>
                        <h3>{value.name}</h3>
                        <storng>@{value.id}</storng>
                    </li>
                ))}
            </ul>
            <span>{n}</span>
        </div>
    )
}

