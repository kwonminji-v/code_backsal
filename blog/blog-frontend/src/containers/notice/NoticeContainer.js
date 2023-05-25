import LeftMenu from "../../components/common/LeftMenu";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import React, { useState } from "react";
import { Noticedata } from "./NoticeData";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const NoticeBlock = styled.div`
height : 900px;
color: ${palette.gray[7]};
font-size: 16px;
line-height : 65px;
margin-top : 45px;
li{
  border-bottom : 1px solid ${palette.gray[5]}
};
display: flex;
margin-left : 250px;

.container {
  width : 800px;
}
.container info {
  width : 800px;
}
.question .btn {
 margin : 10px;
}
.question .title {
  border-bottom : 1px solid ${palette.gray[7]};
}
font-family : kakao;
.container h2 {
  color : ${palette.gray[7]}
};
color : ${palette.gray[7]};
.info {
  line-height : 35px;
  margin-top : 5px;
  margin-left : 5px;
  margin-right : 5px;
}
.title {
  line-height : 65px;
  margin-left : -5px;
}
.noticeleft {
  margin-top : -37px;
}
.noticeright {
  margin-top : 18px;
  margin-left : -90px;
}
`
const NoticeContent = ({ index, id, setIndex, info, title }) => {
  const [toggle, setToggle] = useState(false);

  const onClickShow = (id) => {
    setToggle((prev) => !prev);
    setIndex(id);
  }
  return (
    <article className="question">
      <div className="title">{title}<button className="btn" onClick={() => onClickShow(id)}>
        {!!toggle && id === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button></div>
      {!!toggle && id === index && <p className="info">{info}</p>}
    </article>
  )
}



function Notice() {
  const [notice, setNotice] = useState(Noticedata);
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <h2>공지사항</h2>
      <section className="info">
        {notice.map((props) => (
          <NoticeContent key={props.id} setIndex={setIndex} index={index} {...props} />
        ))}
      </section>
    </div>

  )
}



function NoticeContainer() {
  return (

    <NoticeBlock>
      <div className="noticeleft"><LeftMenu /></div>
      <div className="noticeright"><Notice /></div>
    </NoticeBlock>
  )
}
export default NoticeContainer;