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
          <strong>1. 개인정보를 제공받는 자의 개인정보 이용 목적</strong>
          <br />
          "다독"이 제공하는 이동통신, 인터넷, IPTV, IoT 및 각종 결합 . 제휴상품 등
          서비스의 홍보, 가입권유, 프로모션, 이벤트, 혜택 안내를 위해 수집, 이용 활용하는 것,
          동의하면 혜택 및 광고 정보를 전화, 단문메시지, 장문메시지 멀티메시지, WAP 푸시,
          이메일, 우편, 앱 안내 및 팝업 등으로 전송
          <br />
          <br />
          <strong>2. 제공하는 개인정보의 항목</strong>
          <br />
          "필수 동의 항목에서 수집한 개인정보, 통신사 정보, 고객세분화정보, 선호도 및 라이프스타일정보,
          쿠키 및 접속로그, 광고식별자 및 이 정보들에 대한 통계분석 데이터 등"
          <br />
          <br />
          <strong>3. 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간 : 서비스 이용 탈퇴/해지시까지</strong>
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