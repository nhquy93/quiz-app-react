import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "topicsSlice",
    initialState: {
        topicList: []
    },
    reducers: {
        setTopicList: (currentSlice, action) => {
            currentSlice.topicList = action.payload;
        },
        addTopic: (currentSlice, action) => {
            currentSlice.topicList.push(action.payload);
        },
        updateTopic: (currentSlice, action) => {
            const indexToUpdate = currentSlice.topicList.findIndex(
                (topic) => topic.id === action.payload.id
            );
            currentSlice.topicList[indexToUpdate] = action.payload;
        },
        deleteTopic: (currentSlice, action) => {
            const filteredTopicList = currentSlice.topicList.filter(
                (topic) => topic.id !== action.payload.id
            );
            currentSlice.topicList = filteredTopicList;
        }
    }
})

export const { setTopicList, addTopic, updateTopic, deleteTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;