// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((nowArray) => [toDo, ...nowArray]);
    setToDo("");
  }
  // console.log(toDos);

  return (
    <div className="App">
      <h1>나의 할일 리스트 ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할일을 작성하세요" />
        <button type='submit'>일정 추가하기</button>
      </form>
      <hr />
      <ul>{toDos.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default App;

