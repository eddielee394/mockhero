import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../services/api";

export const getSearchData = createAsyncThunk(
  "search/getSearchData",
  async (routeParams) => {
    const response = await Api.getSearchData(routeParams);

    const { data } = response;
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: { isPending: true },
  reducers: {
    setIsPending: (state, action) => {
      state.isPending = action.payload;
    },
  },
  extraReducers: {
    [getSearchData.pending]: (state, action) => ({
      ...state,
      isPending: true,
    }),
    [getSearchData.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
      isPending: false,
    }),
  },
});

export const { setIsPending } = searchSlice.actions;

export default searchSlice.reducer;
