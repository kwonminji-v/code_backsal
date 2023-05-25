import React, { useEffect, useRef, useState } from 'react'
import Dialog1 from '../../components/common/Dialog1'
import Dialog2 from '../../components/common/Dialog2'
import Dialog3 from '../../components/common/Dialog3'
import Dialog4 from '../../components/common/Dialog4'
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index'
import Button from '../../components/common/Button'
import '../../css/TOSForm.css'
import styled from 'styled-components'


const TOSForm = () => {

  // 이용약관을 나타낼 배열
  const data = [
    {id: 0, title: '이용약관 (필수)', component: Dialog1, head: '■다독 서비스 이용약관'},
    {id: 1, title: '개인정보 . 수집 (필수)', component: Dialog2, head: '[개인정보활용동의서]'},
    {id: 2, title: '개인정보 제3자 제공 안내 (선택)', component: Dialog3, head: ''},
    {id: 3, title: '광고성 정보 수신 (선택)', component: Dialog4, head: '[마케팅 활용 및 광고성 정보 수신]'}
  ]

  // 체크 아이템을 담을 배열
  const [checkItems, setCheckItems] =useState([]);

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.map((el) => idArray.push(el.id));
      setCheckItems(idArray);
      console.log(checkItems);
    } else {
      setCheckItems([]);
    }
  }

  const handleSingleCheck = (checked, id) => {
    if(checked) {
      //  단일 선택 해제 시 체크된 아이템을 제외한 배열(필터)
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id))
    }
  }

  // checkbox 필수 사항 2개 체크했을 때만 페이지 이동하도록 input에 ref 달기
  const checkboxRef = useRef();

  // 체크박스를 모두 선택하지 않았을 때 나타나는 메세지
  const ErrorMessage = styled.div`
  color: red;
  text-align : center;
  font-size: 1.2rem;
  margin-top: 2rem;
  `;

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleNextPage = () => {
    if(checkboxRef[0].checked && checkboxRef[1].checked) {
      navigate('/register')
    } else {
     setError('필수 체크 사항을 확인하세요.')
    }
  }

  useEffect(() => {
    if(checkItems.includes(data[0].id && data[1].id)) {
      setError(null)
    }
  }, [checkItems])
  // 각 이용약관 클릭 시 Dialog 컴포넌트 출력
  const [selectedDialogIndex, setSelectedDialogIndex] = useState(null);
  const [showDialog1, setShowDialog1] = useState(false)
  const [showDialog2, setShowDialog2] = useState(false)
  const [showDialog3, setShowDialog3] = useState(false)
  const [showDialog4, setShowDialog4] = useState(false)

  const handleDialogClick = (index, id) => {
    setSelectedDialogIndex(index);
    switch(index) {
      case 0:
        setShowDialog1(true);
        setCheckItems([...checkItems, id]);
        break;
      case 1:
        setShowDialog2(true);
        setCheckItems([...checkItems, id]);
        break;
      case 2:
        setShowDialog3(true);
        setCheckItems([...checkItems, id]);
        break;
      case 3:
        setShowDialog4(true);
        setCheckItems([...checkItems, id]);
        break;
      default:
        break;
    }
  };
  return (
    <div className='allow-form'>
      <p>서비스 이용약관 및 개인정보 처리방침 동의</p>
      <div className='allow-all'>
        <input type="checkbox"
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === data.length ? true : false}
        />
        <span>서비스 이용약관 및 개인정보 처리방침에 모두 동의</span> 
      </div>

      <div className="tos">
        <ul>
          {data?.map((el, index) => (
            <li key={index}>
              <input type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, el.id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 선택 해제
                checked={checkItems.includes(el.id) ? true : false}
                ref={(el) => checkboxRef[index] = el}
              />
              <span
                onClick={() => handleDialogClick(index, el.id)}
              >
                {el.title}
              </span>
            </li>
          ))}
          {showDialog1 && (
            <Dialog1
              visible={showDialog1}
              onConfirm={() => setShowDialog1(false)}
              title={data[selectedDialogIndex].title}
              confirmText='확인'
              />
          )}
          {showDialog2 && (
            <Dialog2
              visible={showDialog2}
              onConfirm={() => setShowDialog2(false)}
              title={data[selectedDialogIndex].title}
              confirmText='확인'
              />
          )}
          {showDialog3 && (
            <Dialog3
              visible={showDialog3}
              onConfirm={() => setShowDialog3(false)}
              title={data[selectedDialogIndex].title}
              confirmText='확인'
              />
          )}
          {showDialog4 && (
            <Dialog4
              visible={showDialog4}
              onConfirm={() => setShowDialog4(false)}
              title={data[selectedDialogIndex].title}
              confirmText='확인'
              />
          )}
        </ul>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
        <Button fullWidth style={{ background: 'royalblue', marginTop: '30px' }}
          onClick={handleNextPage}
        >
          동의 및 다음으로
        </Button>
    </div>
  )
}

export default TOSForm