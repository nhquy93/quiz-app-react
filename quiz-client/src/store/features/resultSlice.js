import { createSlice } from "@reduxjs/toolkit";
import { KEYS } from "../../constants/keys.constant";
import { ParticipantResultAPI } from "../../api/participantResultApi";

export const resultSlice = createSlice({
  name: "resultSlice",
  initialState: {
    answeredList: [],
  },
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
    postResult: (_, action) => {
      ParticipantResultAPI.create(action.payload);
    },
  },
});

export const { addAnswered, postResult } = resultSlice.actions;
export const answeredReducer = resultSlice.reducer;
