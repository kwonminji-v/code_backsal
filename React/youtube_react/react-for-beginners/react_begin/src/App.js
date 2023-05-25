/* eslint-disable */
import style from './App.css'
import { useState } from 'react';

function App() {

    let posts = "여행지 강력 추천"
    const [title, setTitle] = useState(['강원도 강릉', '경상도 부산', '제주도'])
    const [good, setGood] = useState(0)

    function addGood() {
        setGood(good + 1);
    }

    // function titleChange() {
    //     setTitle[0]("경기도 용인")
    // }

    return (
        <div className="App">
            <div className='black-nav'>
                <div>여행 blog</div>
            </div>
            <div className='list'>
                <h4>{title[0]} <span onClick={addGood}>좋아요👍</span> {good} </h4>
                <div>4월 29일</div>
                <button onClick={() => { setTitle(["경기도 용인"]) }}>title 변경 버튼</button>
            </div>
            <div className='list'>
                <h4>{title[1]}</h4>
                <div>2월 29일</div>
            </div>
            <div className='list'>
                <h4>{title[2]}</h4>
                <div>6월 29일</div>
            </div>
        </div>
    );
}


export default App;
