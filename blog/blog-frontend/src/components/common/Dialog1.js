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
      margin: 2rem 0;
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

function Dialog1({ title, confirmText, onConfirm, visible }) {
  if(!visible) return null;
  return (
    <>
    <DarkBackground>
      <DialogBlock>
        <InnerBlock>
        <h3>{title}</h3>
        <h3>제 1장 총칙</h3>
        <br /><br />
        <strong>제 1조(목적)</strong>
        <br />
        <br />
        "본 약관은 주식회사 다독(이하 "회사"라 한다.)에서 제공하는 개별 서비스의 ID를 하나의 ID로 사용
        할 수 있는 서비스인 "다독 ID 서비스"(이하 "서비스")를 이용함에 있어 회원과 회사 간의 권리, 의무 및 책임
        사항, 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다."
        <br />
        <br />
        <strong>제 2조 (용어의 정의)</strong>
        <br />
        <br />
        "1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다."
        <br />
        "1) 다독"
        "ID: 회사가 제공하는 개별 서비스를 하나의 ID(e-mail 계정)와 Password(비밀번호)로 회원가입, 회원인증,
        회원정보 변경, 개별서비스 이용 동의/해지, 회원탈퇴
        등을 관리할 수 있는 "다독"의 로그인 ID로서 "다독 ID 적용 서비스"에서 회원 식별과 회원의 서비스 이용을
        위해 회원이 선정하고 회사가 승인하는 전자메일(e-mail) 형태의 로그인 ID를 의미하며, 회원의 종류에 따라
        복수 생성이 가능함"
        <br />
        "2) 회원: "다독 ID"가 적용된 개별 서비스(사이트/APP 등)에서 본 약관을 동의하고 회사에서 "다독
        ID와 Password를 발급받은 고객으로, 회원의 자격 및 권한은 회원 등급 별로 별도 관리 운영됨"
        <br />
        "3) 다독 일반회원: 회사에서 제공하는 서비스에 접속하여 본 약관에 따라 서비스를 제공받는 회원 중 회사의
        "이동전화 서비스" 이외의 통신 서비스(인터넷, 인터넷전화, IPTV 등)에 가입하여 회사의 서비스 및 "다독 ID 적용 서비스"
        이용 계약을 체결한 자"
        <br />
        "5) 타사 일반회원: 회사에서 제공하는 서비스에 접속하여 본 약관에 따라 서비스를 제공받는 회원 중 회사의 통신 서비스
        (모바일, 인터넷, 인터넷전화, IPTV 등)를 가입하지 아니하고 회사의 다독"ID 적용 서비스" 이용 계약을 체결한 자"
        <br />
        "6) 다독 ID 적용 서비스 : 다독 ID를 이용하여 접속 가능한, 회사가 제공하는 서비스로, 다독 ID 적용 서비스는
        추후 추가, 변동될 수 있으며, 서비스가 추가, 변동될 경우 본 약관에서 정한 방법으로 별도 공지함"
        <br />
        "7) 주카 서비스 이용약관: 주카 홈페이지(www.juca.co.kr") 서비스의 이용을 위해 홈페이지에서 제공되는 서비스 이용약관"
        <br />
        "8) 다독 홈페이지(www.dadok.co.kr): 회사가 재화, 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
        재화, 용역을 거래할 수 있도록 설정한 가상의 영업장 또는 회사가 운영하는 대표 서비스 홈페이지"
        </InnerBlock>
        <ButtonGroup>
          <Button style={{ background: '#E6007E' }} onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
    </>
  )
}

Dialog1.defaultProps = {
  confirmText: '확인'
};

export default Dialog1