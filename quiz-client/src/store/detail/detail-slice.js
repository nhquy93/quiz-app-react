import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: "detailSlice",
    initialState: {
        detail: {}
    },
    reducers: {
        getQuizDetail: (state, action) => {
            state.detail = action.payload;
        },
    }
})

export const { getQuizDetail} = detailSlice.actions;
export const detailReducer = detailSlice.reducer;