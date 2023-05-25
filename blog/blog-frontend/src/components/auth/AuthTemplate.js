import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom'

// 회원가입/로그인 페이지의 레이아웃 담당하는 컴포넌트입니다. 


const AuthTemplateBlock = styled.div`
margin: 178px auto;
 background: ${palette.gray[2]};
/*flex로 내부 내용 중앙 정렬*/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 `;

 const WhiteBox = styled.div`
 .logo-area{
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
 }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    width: 30vw;
    height: 60vh;
    padding: 3rem;
    background: white;
    border-radius: 2px
    `;


const AuthTemplate = ({children}) => {
    return(
    <AuthTemplateBlock>
        <WhiteBox>
            <div className='logo-area' style={{ fontSize: '36px' }}>
                <Link to="/">다 독</Link>
            </div>
            {children}
        </WhiteBox>
    </AuthTemplateBlock>
    )
}

export default AuthTemplate;
