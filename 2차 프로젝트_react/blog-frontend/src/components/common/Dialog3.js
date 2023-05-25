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
      font-size: 2.5rem;
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
        
            <strong>1. 개인정보를 제공받는 자 :&nbsp; </strong>
            <b>CS리더, 아인텔레서비스, CSONE파트너, LB휴넷,피씨엔</b>
            <br />
            <br />
            <strong>2. 개인정보를 제공받는 자의 개인정보 이용 목적</strong>
            <div>
              "회사, 협력사, 제휴사가 제공하는 이동통신, 유선 및 인터넷 전화, 
              IPTV, FMC 등 방송통신상품, 금융서비스, 결합 및 제휴상품, 스토리지 등 데이터 및 콘텐츠
              서비스, 부가서비스, 전자상거래 서비스, 위치정보서비스, IT솔루션, 스마트헬스 서비스 등 각종 
              서비스 상품과 타 통신사 서비스와 결합된 상품에 대한 홍보, 가입 권유, 프로모션, 이벤트"
            </div>
            <br />
            <strong>3. 제공하는 개인정보의 항목</strong>
            <div>
            <table>
              <colgroup>
                <col className='col1' />
                <col className='col2' />               
              </colgroup>
              <tbody>
                <tr>
                  <th>개인회원</th>
                  <td>성명, 생년월일, 성별, 휴대전화번호</td>
                </tr>
                <tr>
                  <th>개인사업자 회원</th>
                  <td>상호명, 사업자등록번호, 성명, 생년월일, 성별, 휴대전화번호</td>
                </tr>
                <tr>
                  <th>법인사업자 회원(공공기관명)</th>
                  <td>법인명(공공기관명), 법인등록번호, 사업자등록번호</td>
                </tr>
                <tr>
                  <th>외국인 회원(Foreigner)</th>
                  <td>Name, Date of birth, Gender, Mobile No</td>
                </tr>
              </tbody>
            </table>
            </div>
            <br />      
            <strong>4. 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간 :&nbsp;</strong>
            <b>"다독 ID 탈퇴시까지"</b>
      
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