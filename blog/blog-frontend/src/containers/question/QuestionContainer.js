import LeftMenu from '../../components/common/LeftMenu';
import '../../App.css';
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Questiondata from "./QuestionData";
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuestionBlock = styled.div`
height : 800px;
display: flex;
margin-left: 250px;
color: ${palette.gray[9]};
font-size: 16px;
color : ${palette.gray[7]};
line-height : 35px;
margin-top : 50px;
.container {
    width : 900px;
}
.title {
  border-bottom : 1px solid ${palette.gray[6]};
  margin : 10px;
  line-height : 50px;
}
.container h2 { 
  margin : 10px;
  color :${palette.gray[7]};
}
.btn {
  margin : 10px;
}
.questionsidemenu {
  margin-left : -25px;
}
.questionsidemenu button {
  width: 80px;
  height : 38px;
  font-family : kakao;
  font-size : 16px;
  text-align : center;
}
font-family: kakao;

.info {
 margin-left : 10px;
 margin-right : 20px;
}
.title {
  margin-left : -2px;
}
.category {
  color : red;
  font-weight : bold;
}
.questionleft {
  margin-top : -42px;
}
.questionright {
  margin-left : -90px;
  margin-top: 2px;
}
`

const QuestionContent = ({ index, setIndex, id, title, info, category }) => {
  const [toggle, setToggle] = useState(false);
  const onClickShow = (id) => {
    setToggle((prev) => !(prev));
    setIndex(id);
  }
  return (
    <div>
      <article className="question">
        <div className="title"><span className='category'>{category}</span>&nbsp;&nbsp;{title}<button className="btn" onClick={() => onClickShow(id)}>
          {!!toggle && id === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button></div>
        {!!toggle && id === index && <p className='info'>{info}</p>}
      </article>
    </div>
  )
}

function Question() {
  const [question, setQuestion] = useState(Questiondata);
  const [index, setIndex] = useState(0);

  //아래 해당 카테고리 별로 클릭했을 때 같은 value값을 가진 배열을 filter해서 해당 value값을 
  //가지고 있는 배열만을 배열한다. 
  const changeCategory = (event) => {
    const value = event.target.value;
    if (value === '[all]') {
      setQuestion(Questiondata);
    } else {
      const selectedquestions = Questiondata.filter(x => x.category === value);
      setQuestion(selectedquestions);
      console.log(selectedquestions)
    }
  }

  return (
    <div className="container">
      <h2>자주하는 질문</h2>
      <div className="questionsidemenu">
        <ul>
          <button value="[all]" onClick={changeCategory}>전체</button>
          <button value="[가입]" onClick={changeCategory}>가입</button>
          <button value="[변경]" onClick={changeCategory}>변경</button>
          <button value="[해지]" onClick={changeCategory}>해지</button>
          <button value="[요금]" onClick={changeCategory}>요금</button>
          <button value="[제휴사]" onClick={changeCategory}>제휴사</button>
        </ul>
      </div>

      <section className="info">
        {question.map((props) => (
          <QuestionContent key={props.id} setIndex={setIndex} index={index} {...props} />
        ))}
      </section>
    </div>
  )
}






function QuestionContainer() {
  return (
    <QuestionBlock>
      <div className="questionleft"><LeftMenu /></div>
      <div className="questionright">  <Question /></div>
    </QuestionBlock>
  )
}
export default QuestionContainer;