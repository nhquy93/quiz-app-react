import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestionGroupById } from "../../api/questionGroupApi";
import { toast } from "../../utils/sweet-alert";

const initialState = {
  detail: {},
  isLoading: false,
};
export const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionGroupById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuestionGroupById.fulfilled, (state, action) => {
      const { resultObj } = action.payload;
      state.detail = resultObj;
      state.isLoading = false;
    });
    builder.addCase(fetchQuestionGroupById.rejected, (state, action) => {
      const { message } = action.payload;
      state.isLoading = false;
      toast("error", message || "ERR_TIME_OUT");
    });
  },
});

export const { getQuizDetail } = detailSlice.actions;
export const detailSelector = (state) => state.detailSlice;
export const detailReducer = detailSlice.reducer;
