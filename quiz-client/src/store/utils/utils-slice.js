import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        searchItem: ""
    },
    reducers: {
        setSearchItems: (currentSlice, action) => {
            currentSlice.searchItem = action.payload;
        }
    }
});

export const { setSearchItems } = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;