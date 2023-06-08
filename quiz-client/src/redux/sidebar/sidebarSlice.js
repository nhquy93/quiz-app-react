import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expanded: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setExpanded: (state, action) => {
      state.expanded = action.payload;
    },
  },
});

export const { setExpanded } = sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar.expanded;

export default sidebarSlice.reducer;
