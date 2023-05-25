import React, { useRef, useState } from "react"

/* 
useRef를 사용하여 DOM 요소에 대한 참조를 저장하고, 해당 요소의 값을 가져와 상태를 업데이트하는 리액트에서 사용하는 방식
*/
const App = () => {
    const emailInput = useRef(null); //email input에 대한 useRef
    const pwInput = useRef(null); //pw input에 대한 useRef

    const [emailValue, setEmailValue] = useState("");  //email state 값
    const [pwValue, setPwValue] = useState(""); //pw state의값

    const inputCheck = (e) => {
        e.preventDefault();
        console.log(emailInput)
        console.log(pwInput)
        setEmailValue(emailInput.current.value);
        setPwValue(pwInput.current.value);
    };
/* id를 사용하는 대신 ref를 사용한다. ref는 컴포넌트 내부에서만 작동한다.  */
    return (
        <form style={{ display: "flex", flexDirection: "column"}}>
            <label>
                이메일 : <input type="email" ref={emailInput} />    
            </label>
            <label>
                비밀번호 : <input type="password" ref={pwInput}/>
            </label>
            <button type='submit' style={{ width : "100px"}} onClick={inputCheck}>회원 가입</button>
            <span>{emailValue}</span>
            <span>{pwValue}</span>
        </form>
    )
}

export default App;
/* 
useMemo는 React의 훅 중 하나로, 값의 메모이제이션(캐싱)에 사용된다.
useMemo는 값이 변경될 때마다 주어진 함수를 호출하고, 결과를 메모이즈(캐싱)하여 반환한다.
이렇게하면 연산 비용이 큰 함수의 호출을 줄이고, 불 필요한 재 계산을 피할 수 있다.
*/