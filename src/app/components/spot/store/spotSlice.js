import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../services/api";

export const getSpot = createAsyncThunk("spot/getSpot", async routeParams => {
  const { spot_id } = routeParams;
  const response = await Api.getSpot(spot_id);

  const { data } = response;

  return data;
});

const initialState = {
  showSpotDetailsModal: false,
  isLoading: false,
  hasError: false,
  selected: null
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
    [getSpot.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [getSpot.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      selected: action.payload.selected
    }),
    [getSpot.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      hasError: true
    })
  }
});

export const { toggleSpotDetailsModal, resetState } = spotSlice.actions;

export default spotSlice.reducer;
