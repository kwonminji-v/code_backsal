/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

    let [title, setTitle] = useState(["강원도 강릉", "경상도 창원", "제주도"]);
    let [good, setGood] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title1, setTitle1] = useState(0);
    let [inputvalue, setInputvalue] = useState("");

    function addGood(i) {
        const newGood = [...good];
        newGood[i] += 1;
        setGood(newGood);
        console.log([i])
    }

    return (


        <div className="App">
            <div className="black-nav">
                <div>여행Blog</div>
            </div>
            {
                // ↓ 글 목록들은 title이라는 데이터 갯수에 맞게 생성되게 코드를 짜둔 거라 title state를 사용하면 간단하게 요소 추가 가능!
                title.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => { setModal(true); setTitle1(i) }}>{a}<span onClick={() => { addGood(i) }}>좋아요👍</span> {good[i]}</h4>
                            <div>2월 29일</div>
                            <button onClick={() => {
                                let copyTitle = [...title]
                                copyTitle.splice(i, 1)
                                //splice -> () array 자료에서 내가 원하는 항목 삭제가 가능 0번째 항목을 삭제하고 싶다면 (0,1)로 작성
                                // 원하는 자료는 변수인 i(index)로 설정하여 어느 버튼을 누르더라도 본인이 삭제되게 작성
                                setTitle(copyTitle)
                            }}>삭제하기</button>

                            <hr />
                        </div>
                    )
                })

            }

            <input onChange={(e) => { setInputvalue(e.target.value); }} type="text" placeholder="게시글 작성" />

            <button onClick={() => {
                let copyTitle = [...title];
                copyTitle.unshift(inputvalue)
                setTitle(copyTitle)
            }}>글 추가하기</button>


            {/*         
let copy = [...title];
copy 맨 처음에 유저가 입력한 글을 추가하고
setTitle(copy)로 버튼 클릭 시 추가가 가능하게 만든다.
*/}
            {
                modal == true ? <Modal title={title} title1={title1} /> : null
            }

        </div >
    );
}

function Modal(props) {

    return (
        <>
            <div className="modal" >
                <h4>{props.title[props.title1]}</h4>
                <p>날짜</p>
                <p>상세 내용</p>
                <button>글 수정 버튼</button>
            </div>
        </>
    );
}
export default App;

