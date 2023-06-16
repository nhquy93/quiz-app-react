import axios from "axios";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ACTIONS = {
  postUser: "postUser",
};

export const postUser = createAsyncThunk(
  ACTIONS.postUser,
  async (participant) => {
    const response = await axios.post(
      `${BASE_URL + ROUTE_PATH.participant}/create`,
      participant
    );
    return response.data;
  }
);
