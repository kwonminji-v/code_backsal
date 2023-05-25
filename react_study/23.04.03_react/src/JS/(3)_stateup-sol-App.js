import { useState } from 'react'
// import '../App.css'


/* AddCarlculator컴포넌트와 SubCalculator 컴포넌트의 공통된 값들을 전부 props로 받도록 만들어 준다. */

function AddCalculator(props) {  //덧셈 계산기 컴포넌트를 정의
  console.log(props)
  return (
//props로 num1, num2, handleNum1, handleNum2를 전달받는다.
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" value={props.num1} onChange={props.handleNum1} />
      <input type="number" name="num2" value={props.num2} onChange={props.handleNum2} />
      결과 : {props.num1 + props.num2}
    </div>
  )
}

  function SubCalculator(props) {  //뺄셈 계산기 컴포넌트를 정의
    console.log(props)
    return (
//props로 num1, num2, handleNum1, handleNum2를 전달받는다.
    <div>
      <h2>빼기</h2>
      <input type="number" name="num1" value={props.num1} onChange={props.handleNum1}/>
      <input type="number" name="num2" value={props.num2} onChange={props.handleNum2}/>
      결과 : {props.num1 - props.num2}
    </div>
  )
}

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const handleNum1 = (e) => {
    const newNum1 = parseInt(e.target.value)
    setNum1(newNum1)
  }
/* setNum1 함수를 호출하여 상태를 업데이트 합니다.
   num1 입력 값이 변경될 때마다 실행되는 이벤트 핸들러를 정의한다. */

  const handleNum2 = (e) => {    //입력값을 정수로 변환
    const newNum2 = parseInt(e.target.value)
    setNum2(newNum2)
  }
/* num 입력 값이 변경될 때마다 실행되는 이벤트 핸들러를 정의 */
  return (  //App 컴포넌트의 렌더링 결과를 정의
    <div>
      <h1>계산기</h1>
      <AddCalculator num1 = {num1} num2 = {num2} handleNum1 = {handleNum1} handelNum2 = {handleNum2} />
      <SubCalculator num1 = {num1} num2 = {num2} handleNum1 = {handleNum1} handleNum2 = {handleNum2} />
    </div>
  );
}

export default App;