import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTopics } from "../../api/topicApi";
import { toast } from "../../utils/sweet-alert";

const initialState = {
  topics: [],
  isLoading: false,
};

export const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState,
  reducers: {
    addTopic: (currentSlice, action) => {
      currentSlice.topics.push(action.payload);
    },
    updateTopic: (currentSlice, action) => {
      const indexToUpdate = currentSlice.topics.findIndex(
        (topic) => topic.id === action.payload.id
      );
      currentSlice.topics[indexToUpdate] = action.payload;
    },
    deleteTopic: (currentSlice, action) => {
      const filteredTopicList = currentSlice.topics.filter(
        (topic) => topic.id !== action.payload.id
      );
      currentSlice.topics = filteredTopicList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTopics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllTopics.fulfilled, (state, action) => {
      const { resultObj } = action.payload;
      state.topics = resultObj;
      state.isLoading = false;
    });
    builder.addCase(fetchAllTopics.rejected, (state, action) => {
      const { message } = action.payload;
      state.topics = [];
      state.isLoading = false;
      toast("error", message);
    });
  },
});

export const { addTopic, updateTopic, deleteTopic } = topicsSlice.actions;
export const topicsSelector = (state) => state.topicsSlice; 
export const topicsReducer = topicsSlice.reducer;
