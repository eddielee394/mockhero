import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../services/api";

export const getSpot = createAsyncThunk("spot/getSpot", async routeParams => {
  const { spot_id } = routeParams;
  const response = await Api.getSpot(spot_id);

  const { data } = response;

  return data;
});

const initialState = {
  showSpotDetailsModal: false
};

const spotSlice = createSlice({
  name: "spot",
  initialState: initialState,
  reducers: {
    toggleSpotDetailsModal: (state, action) => {
      state.showSpotDetailsModal = !state.showSpotDetailsModal;
    },
    resetState: () => initialState
  },
  extraReducers: {
    [getSpot.fulfilled]: (state, action) => ({
      ...state,
      selected: action.payload.selected
    })
  }
});

export const { toggleSpotDetailsModal, resetState } = spotSlice.actions;

export default spotSlice.reducer;
