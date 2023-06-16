import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "../../api/participantApi";
import { toast } from "../../utils/sweet-alert";

const initialState = {
  auth: { user: null },
  isLoading: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.auth.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      const { resultObj } = action.payload;
      state.auth.user = resultObj;
      state.isLoading = false;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      const { message } = action.payload;
      state.auth = { user: null };
      state.isLoading = false;
      toast("error", message);
    });
  },
});

export const { setUser } = authSlice.actions;
export const authSelector = (state) => state.authSlice;
export const authReducer = authSlice.reducer;
