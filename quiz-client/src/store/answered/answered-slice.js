import { createSlice } from "@reduxjs/toolkit";

export const answeredSlice = createSlice({
    name: "answeredSlice",
    initialState: {
        answeredList: []
    },
    reducers: {
        addAnswered: (currentSlice, action) => {
            const indexToUpdate = currentSlice.answeredList.findIndex(
                (answered) => answered.id === action.payload.id
              );
              console.log("find", indexToUpdate);
            if(indexToUpdate > -1) {
                currentSlice.answeredList[indexToUpdate] = action.payload;
            }
            else {
                currentSlice.answeredList.push(action.payload);
            }
        },
    }
});

export const { addAnswered } = answeredSlice.actions;
export const answeredReducer = answeredSlice.reducer;