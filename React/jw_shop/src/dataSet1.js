import { createSlice } from "@reduxjs/toolkit";

let count = 0;
function counter() {
    count++

}

// // like 정보 가져오기
// fetch('http://localhost:4000/like')
// .then(res => res.json())
// .then(json => initialState.likeData(json))

const initialState={
    productData:[]
}
const dataSet = createSlice({

    name: "dataSet",
    initialState,
    reducers: {
        ProductDataReducer:(state, action)=>{
            // state.dataSet에 dispatch에서 가져온 data값들을 저장함
            state.productData = action.payload
            console.log("initialState에 담긴 dataSet : "+state.productData)
        },
        likeDataReducer:(state)=>{
            state.productData.like +=1
            console.log("state.productData.like : "+state.productData.like)
        }
    }

})

export { counter }
export const {ProductDataReducer, likeDataReducer} = dataSet.actions
export default dataSet.reducer