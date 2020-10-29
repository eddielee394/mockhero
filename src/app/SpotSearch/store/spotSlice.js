import { createSlice } from "@reduxjs/toolkit";

const spotSlice = createSlice({
  name: "spot",
  initialState: {
    selected: {},
    previousSelected: {},
    showSpotDetailsModal: false
  },
  reducers: {
    openSpotDetailsModal: (state, action) => {
      state.showSpotDetailsModal = true;
    },
    closeSpotDetailsModal: (state, action) => {
      state.showSpotDetailsModal = false;
    },
    getSpotData: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const {
  openSpotDetailsModal,
  closeSpotDetailsModal
} = spotSlice.actions;

export default spotSlice.reducer;
