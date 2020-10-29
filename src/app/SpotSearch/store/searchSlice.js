import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "spotSearch",
  initialState: {
    spotListItem: {},
    spotDetailDrawerOpen: false
  },
  reducers: {
    openDrawer: (state, action) => {
      state.spotDetailDrawerOpen = true;
    },
    closeDrawer: (state, action) => {
      state.spotDetailDrawerOpen = false;
    }
  }
});

export const { openDrawer, closeDrawer } = searchSlice.actions;

export default searchSlice.reducer;
