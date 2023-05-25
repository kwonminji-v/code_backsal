import React from 'react'
import styled from 'styled-components'
import Button from './Button';


const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8)
    `;

    const DialogBlock = styled.div`
    position: relative;
    width: 1200px;
    height: 50vh;
    padding: 1.5rem;
    background: white;
    border-radius: 4px;
    h3 {
      margin: 3rem 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    p {
      font-size: 1.125rem;
      font-weight: bold;
    }
    `;

    // 컴포넌트 앞 글자는 무조건 대문자다
    const InnerBlock = styled.div`
    font-size: 19px;
    border-radius: 5px;
    padding: 1.5rem;
    height: 40vh;
    background: lightgray;
    margin: 10px;
    overflow-y: scroll;
    line-height: 2.5rem;
    strong {
      font-weight: bold;
    }
    b {
      font-weight: bold;
    }
    `;

    const ButtonGroup = styled.div`
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    `

function Dialog2({ title, confirmText, onConfirm, visible }) {
  if(!visible) return null;
  return (
    <>
    <DarkBackground>
      <DialogBlock>
        <InnerBlock>
        <h3>{title}</h3>
        <br />
        "회사는 회원가입에 의한 다독 ID 서비스 제공을 위해 다음과 같이 개인정보를 활용합니다."
        <br />
        <br />
        <strong>1. 개인정보 수집 및 이용</strong>
        <br />
        "1) 수집항목: 성명(SNS 간편로그인을 위해 제공받은 정보를 포함하며, 이하의 수집항목에서 동일합니다), 성별, SMS 인증번호, 홈페이지 아이디
        , 비밀번호, 전화번호, 휴대폰번호, 이메일, 주소, 생년월일, IP Address, 쿠키, 광고식별자,
        방문일시, 서비스 이용 기록, 불량 이용 기록, 고객 정보(고객번호, 가입번호), 회원 구분 정보(가입형태, 회원타입, 회원등급, 사이트 가입일)"
        <br />
        "2) 수집 및 이용 목적 : 서비스 이용에 따른 본인확인 및 가입자 식별, 휴대폰 본인인증 절차 시 개인정보 자동입력, 홈페이지
        회원 서비스 제공을 위한 회원인증 및 확인, 이용자 및 서비스 이용에 대한 통계 . 분석, 고지사항 전달, 본인의사
        확인, 불만 처리 등 원활한 의사소통 경로 확보, 추가 정보 잔달, UI/UX 개선, 고객 Pain Point 개선, 
        고객경험 개선 등 서비스/품질 향상"
        <br />
        "3) 보유 및 이용 기간 : 
        <strong>회원 가입 및 탈퇴한 날로부터 6개월 동안 보유 및 이용 후 폐기</strong>
        합니다. 단, 소송이나 분쟁 등의 특정한 이유가 있을 때에는 이의 해결시점까지 보유하며, 해당 법령 규정에 의거하여
        보존 필요성이 있는 경우네는 보관합니다."
        <br />
        <br />
        <strong>2. 동의 거부권 및 미 동의에 대한 불이익 안내</strong>
        <br />
        "고객님은 개인 정보 동의에 대한 거부권이 있습니다. 동의하지 않으면 정보가 제공되지 않으며,
         서비스 가입 및 이용에 제약이 있을 수 있습니다."
         <br />
        </InnerBlock>
        <ButtonGroup>
          <Button style={{background: '#E6007E'}} onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
    </>
  )
}

Dialog2.defaultProps = {
  confirmText: '확인'
};

export default Dialog2