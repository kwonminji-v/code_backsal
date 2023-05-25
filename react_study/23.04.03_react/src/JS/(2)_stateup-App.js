import { useState } from 'react'
import './App.css'



//state 끌어 올리기(lifting-state-up)
function AddCalculator(props) {  //덧셈 계산기 컴포넌트를 정의
  console.log(props)
/* AddCarlculator컴포넌트와 SubCalculator 컴포넌트의 공통된 값들을 전부 props로 받도록 만들어 준다. */
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [num4, setNum4] = useState(0)
  /* useState hook의 초기값을 생략하면, 해당 state의 초기값은 undefined가 된다. 
  이 때, 컴포넌트가 렌더링 될 때 해당 state의 값이 undefined에서 첫 번째 전달인자로 지정한 값을 설정된다. */

  const handleNum1 = (e) => {
    const newNum1 = parseInt(e.target.value);
    setNum1(newNum1);
  }
  const handleNum2 = (e) => {
    const newNum2 = parseInt(e.target.value)
    setNum2(newNum2);
  }
  const handleNum3 = (e) => {
    const newNum3 = parseInt(e.target.value)
    setNum3(newNum3);
  }
  const handleNum4 = (e) => {
    const newNum4 = parseInt(e.target.value)
    setNum4(newNum4);
  }
  /* 
  두 개의 이벤트 핸들러 함수 handelNum1과 handleNum2를 정의한다.
  사용자가 두 개의 입력 필드에 입력할 때마다 호출 되고, 이 함수들은 입력 값의 문자열을 parseInt를 사용하여 정수로 변환하고, 해당 값에 맞는 상태 업데이트 함수(setNum1 또는 setNum2)를 사용하여 state 값을 업데이트 한다.
  Javascript에서 문장의 끝에 세미콜론을 붙이지 않아도 실행이 가능하다.
  따라서, ;을 생략해도 문제가 되지 않지만 코드의 가독성을 높이기 위해 일관성 있게 세미콜론을 사용하는 것이 좋다. */

  return (
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" value={num1} onChange={handleNum1}/>
      <input type="number" name="num2" value={num2} onChange={handleNum2}/>
      결과 : {num1 + num2}

      <h2>빼기</h2>
      <input type="number" name="num3" value={num3} onChange={handleNum3}/>
      <input type="number" name="num4" value={num4} onChange={handleNum4}/>
      결과 : {num3 - num4}
    </div>
        )
}

function App() {
  return (
    <div>
      <h1>계산기</h1>
      <AddCalculator/>
    </div>
  );
}

export default App;