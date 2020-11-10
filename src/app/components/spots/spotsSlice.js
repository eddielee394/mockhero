import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import Api from "../../services/api";

export const getSpots = createAsyncThunk("spots/getSpots", async (params) => {
  const response = await Api.getSpots();

  const { data } = response;
  return data;
});

const spotsAdapter = createEntityAdapter({});

export const {
  selectAll: selectSpots,
  selectById: selectSpotById,
} = spotsAdapter.getSelectors((state) => state.spots);

const spotsSlice = createSlice({
  name: "spots",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getSpots.fulfilled]: (state, action) => action.payload,
  },
});

export default spotsSlice.reducer;
