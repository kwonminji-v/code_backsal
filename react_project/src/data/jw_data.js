import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 구독 컨텐츠 데이터
  contentsData: [],
  // 구독 장바구니 onoff
  btnCount: false,
  // 장바구니에 담긴 데이터
  getKeyConvertJS: [],
  // 총 가격
  totalPrice: 0,
  // 컨텐츠가 하나라도 선택 시 장바구니가 활성화되고 없으면 사라짐
  onOffArr: [],
  discount : 0,

};

const dataSet = createSlice({
  name: "dataSet",
  initialState,
  reducers: {
    // 장바구니 활성화 비활성화
    addCartbtn1Rdc: (state, action) => {
      state.btnCount = !state.btnCount;
    },
    // 컨텐츠 데이터 가져오기
    contentGetRdc: (state, action) => {
      state.contentsData = action.payload;
    },
    getKeyConvertJSRdc: (state, action) => {
      state.getKeyConvertJS = action.payload;
    },
    totalPriceRdc: (state, action) => {
      state.totalPrice = action.payload;
    },
    discountRdc: (state, action) => {
      state.discount = action.payload;
    },

  },
});

export const {
  addCartbtn1Rdc,
  contentGetRdc,
  getKeyConvertJSRdc,
  totalPriceRdc,
  discountRdc,
} = dataSet.actions;
export default dataSet.reducer;
