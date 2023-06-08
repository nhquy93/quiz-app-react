import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "a77ca281-ed43-4d1d-58a9-08db67187f97",
    name: "Computer",
    questionGroups: [
      {
        id: "7350b4c1-7c3e-444c-9654-08db67190a7a",
        name: "Computer Basic",
        topicId: "a77ca281-ed43-4d1d-58a9-08db67187f97",
        total: 2,
        timeExpired: 60,
        rate: 1,
        questions: [
          {
            id: "cc6706b2-d406-4e96-9d33-08db67195f5c",
            name: "Who is know as the father of computer?",
            image: "string",
            option1: "Dennis Ritchie",
            option2: "Bill Gates",
            option3: "Charles Babbage",
            option4: "James Gosling",
            option5: "string",
            option6: "string",
            answer: 3,
            questionGroupId: "7350b4c1-7c3e-444c-9654-08db67190a7a",
            answerList: [
              "Dennis Ritchie",
              "Bill Gates",
              "Charles Babbage",
              "James Gosling",
              "string",
              "string",
            ],
          },
          {
            id: "2d660c61-3d1e-45fa-9d34-08db67195f5c",
            name: "What is brain of a computer system called?",
            image: "string",
            option1: "RAM",
            option2: "CPU",
            option3: "GPU",
            option4: "None of the above",
            option5: "string",
            option6: "string",
            answer: 2,
            questionGroupId: "7350b4c1-7c3e-444c-9654-08db67190a7a",
            answerList: [
              "RAM",
              "CPU",
              "GPU",
              "None of the above",
              "string",
              "string",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9f4320f1-c3fa-4ea6-58a8-08db67187f97",
    name: "Mathematic",
    questionGroups: [],
  },
  {
    id: "92941242-7e5b-4323-af1a-54f03e2a3c63",
    name: "Popular",
    questionGroups: [
      {
        id: "37b8b1e7-12de-4303-a91d-89b3543ad139",
        name: "Graphic Design",
        topicId: "92941242-7e5b-4323-af1a-54f03e2a3c63",
        total: 2,
        timeExpired: 60,
        rate: 3,
        questions: [
          {
            id: "1f1e665f-eb11-4191-441b-08db6709f6c3",
            name: "1 + 1 = ?",
            image: "string",
            option1: "1",
            option2: "2",
            option3: "3",
            option4: "4",
            option5: "5",
            option6: "6",
            answer: 2,
            questionGroupId: "37b8b1e7-12de-4303-a91d-89b3543ad139",
            answerList: ["1", "2", "3", "4", "5", "6"],
          },
          {
            id: "df70d3a6-a916-49d3-9afb-08db670dbe88",
            name: "2 + 2 = ?",
            image: "string",
            option1: "1",
            option2: "2",
            option3: "3",
            option4: "4",
            option5: "5",
            option6: "6",
            answer: 4,
            questionGroupId: "37b8b1e7-12de-4303-a91d-89b3543ad139",
            answerList: ["1", "2", "3", "4", "5", "6"],
          },
        ],
      },
    ],
  },
  {
    id: "f19fe653-49cd-4a33-58a7-08db67187f97",
    name: "Science",
    questionGroups: [],
  },
];

const initialState = {
  questions: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuestions: (state) => {
      state.questions = [...data]
    },
  },
});

export const { getQuestions } = quizSlice.actions;

export default quizSlice.reducer;
