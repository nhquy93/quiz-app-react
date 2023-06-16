import axios from "axios";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ACTIONS = {
  postResult: "postResult",
};

export const postResult = createAsyncThunk(
  ACTIONS.postResult,
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL + ROUTE_PATH.participantResult}/create`,
      payload
    );
    return response.data;
  }
);
