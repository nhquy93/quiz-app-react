import { createSlice } from "@reduxjs/toolkit";
import { KEYS } from "../../constants/keys.constant";
import { postResult } from "../../api/participantResultApi";
import { toast } from "../../utils/sweet-alert";

const initialState = {
  answeredList: [],
  isSuccess: false,
};

export const resultSlice = createSlice({
  name: "resultSlice",
  initialState,
  reducers: {
    addAnswered: (currentSlice, action) => {
      const indexToUpdate = currentSlice.answeredList.findIndex(
        (answered) => answered.id === action.payload.id
      );
      if (indexToUpdate > -1) {
        currentSlice.answeredList[indexToUpdate] = action.payload;
      } else {
        currentSlice.answeredList.push(action.payload);
      }
      localStorage.setItem(
        KEYS.selectedOpts,
        JSON.stringify(currentSlice.answeredList)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postResult.pending, (state) => {
      state.isSuccess = false;
    });
    builder.addCase(postResult.fulfilled, (state) => {
      state.isSuccess = true;
      toast("success", "Your result submitted!");
    });
    builder.addCase(postResult.rejected, (state) => {
      state.answeredList = [];
      state.isSuccess = false;
      toast("error", "Try again later!");
    });
  },
});

export const { addAnswered } = resultSlice.actions;
export const resultSelector = (state) => state.resultSlice;
export const resultReducer = resultSlice.reducer;
