/*eslint-disable*/
import logo from './logo.svg';
import '../App.css';
import {useState} from "react";

function App() {
  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function(a) {
    console.log(a);
  })
/* 
a라고 작명 (이름을 지어준다.) a는 1,2,3이 된다.
map() 메소드에서 사용된 함수는 a라는 인자를 받고 , 콘솔을 실행한다. [1,2,3]배열의 각 요소에 대하여 함수를 실행
map() 메소드는 배열의 각 요소에 대하여 지정된 함수를 실행하고, 새로운 배열을 반환한다.
*/

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
{/* 
버튼을 클릭하면, copy 변수에 ...글제목을 복사한다. ...는 전개 연산자로 배열을 복사하는데 사용
*/}
      <button onClick={() =>[...글제목]}>수정버튼 1</button>

      <div className='list'>
      <h4>
        {글제목[0]} <span onClick={() => 좋아요변경(좋아요+1)}>👍</span>
        {좋아요}
      </h4>
      <p>2월 17일 발행</p>
      </div>

      <div className='list'>
      <h4> {글제목[1]} </h4>
      <p>2월 17일 발행</p>
      </div>
      <hr/>

      <div className='list'>
      <h4 onClick={toggleModal}> {글제목[2]} </h4>
      <p>2월 17일 발행</p>
      <hr/>
      </div>

      {modal && <Modal onclose={toggleModal} />}
    </div>
  );
}

글제목.map(function (a,i) { //글제목 배열의 각 요소에 대하여 함수를 실행하여 리스트를 구성하는 부분
  return (
    <div className='list' key = {i}>
      <h4>{글제목[i]} <span onClick={() => {좋아요변경(좋아요+1)}}>👍</span></h4>
      <p>날짜</p>
    </div>
  )
// map 반복문으로 반복 생성한 html엔 key={i} 이런 속성을 추가해야 한다. 반복되는 엘리먼트를 구분하기 위하여 사용한다.
})
}

<button onClick={() => {setModal}}></button>

{
  modal == true ? <Modal></Modal> : null
}
</div>

function Modal () {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={onClose}>닫기</button>
    </div>
  )
}
export default App;
