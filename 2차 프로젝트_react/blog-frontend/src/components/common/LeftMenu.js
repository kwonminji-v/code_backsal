import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from 'react-router-dom'

const LeftMenuBlock = styled.div`
border: 1px solid white;
width:  200px;
height: 55px;
margin-top : 60px;
margin-right : 40px;
text-indent: 20px;
color: ${palette.gray[7]};
line-height: 55px;
font-size: 18px;
font-family : kakao;
.LeftMenuBox {
    &:hover{  
        border-radius : 10px;
        background-color : ${palette.gray[1]};
        color : ${palette.gray[8]};
        font-weight : bold;
      }
}

    `;


const LeftMenu= () => {  
    return (
    <LeftMenuBlock>
    <h3 className='MenuBox'>고객센터</h3>
    <Link to='/question'><div className='LeftMenuBox'>자주하는 질문</div></Link>
    <Link to='/notice'><div className='LeftMenuBox'>공지사항</div></Link>
    <Link to='/postlist'><div className='LeftMenuBox'>문의게시판</div></Link>
    </LeftMenuBlock>
    );
};
export default LeftMenu;
