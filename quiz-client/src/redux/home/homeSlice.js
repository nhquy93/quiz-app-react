import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    key: "1",
    label: "Popular",
    children: [
      {
        id: 1,
        title: "UI UX Design part 1",
        total: 10,
        timeExpired: 600,
        rate: 4.6,
      },
      {
        id: 2,
        title: "UI UX Design part 2",
        total: 20,
        timeExpired: 900,
        rate: 4.7,
      },
    ],
  },
  {
    key: "2",
    label: "Science",
    children: [],
  },
  {
    key: "3",
    label: "Mathematic",
    children: [],
  },
  {
    key: "4",
    label: "Computer",
    children: [],
  },
];

const initialState = {
  quizList: [...data],
  contQuiz: {},
};

// const homeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "GET_QUIZZES": {
//       return { ...state, quizList: data };
//     }
//     default:
//       return state;
//   }
// };

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getList: state => {
    }
  }
})

export const { getList } = homeSlice.actions;

export default homeSlice.reducer;
