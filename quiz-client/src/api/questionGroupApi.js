import axios from "axios";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
import { toast } from "../utils/sweet-alert";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ACTIONS = {
  questionGroupById: "questionGroupById",
  questionsById: "questionsById",
};

export const fetchQuestionGroupById = createAsyncThunk(
  ACTIONS.questionGroupById,
  async (questionGroupId) => {
    const response = await axios.get(
      `${BASE_URL + ROUTE_PATH.questionGroup}/getbyid/${questionGroupId}`
    );
    return response.data;
  }
);

export const fetchQuestionsById = createAsyncThunk(
  ACTIONS.questionsById,
  async (questionGroupId) => {
    const response = await axios.get(
      `${
        BASE_URL + ROUTE_PATH.questionGroup
      }/getincludequestionbyid/${questionGroupId}`
    );
    return response.data;
  }
);
