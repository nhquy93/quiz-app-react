import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        value: ""
    },
    reducers: {
        searchItem: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { searchItem } = utilsSlice.actions;
export const searchSelector = (state) => state.utilsSlice.value;
export const utilsReducer = utilsSlice.reducer;