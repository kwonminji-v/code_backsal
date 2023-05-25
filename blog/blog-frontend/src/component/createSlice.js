import { createSlice } from "@reduxjs/toolkit";



const detailList = createSlice({
    name: "detailList",
    initialState: { list: [] },
    reducers: {
        detailListChange: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { detailListChange } = detailList.actions;
export default detailList;