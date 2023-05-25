import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeField } from '../../modules/write';


const Category = () => {  
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('선택');
  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(changeField({ key: 'category', value: category}));
  }
  return (
    <>
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="선택">선택</option>
      <option value="구독 및 해지 관련 문의">구독 및 해지 관련 문의</option>
      <option value="구독 서비스 관련 문의">구독 서비스 관련 문의</option>
      <option value="입금 및 결제 문의">입금 및 결제 문의</option>
      <option value="기타 문의">기타 문의</option>
    </select>
    </>
  )
}

export default Category