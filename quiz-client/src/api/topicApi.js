import axios from "axios";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ACTIONS = {
  fetchAll: "fetchAllTopics",
  fetchQuestionGroup: "fetchQuestionGroup",
};

export const fetchAllTopics = createAsyncThunk(
  ACTIONS.fetchQuestionGroup,
  async () => {
    const response = await axios.get(
      `${BASE_URL + ROUTE_PATH.topic}/getallincludequestiongroup`
    );
    return response.data;
  }
);
