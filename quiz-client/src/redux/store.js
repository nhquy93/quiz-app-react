import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import homeReducer from "./home/homeSlice";
import quizReducer from "./quiz/quizSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    home: homeReducer,
    quiz: quizReducer,
  },
});
export default store;
