import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../services/api";

export const getCheckoutData = createAsyncThunk(
  "checkout/getCheckoutData",
  async (routeParams) => {
    const response = await Api.getCheckoutData(routeParams);

    const { data } = response;

    console.log("getCheckoutData: ", data);
    return data;
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    isPending: true,
    spot: {},
  },
  reducers: {},
  extraReducers: {
    [getCheckoutData.pending]: (state, action) => ({
      ...state,
      isPending: true,
    }),
    [getCheckoutData.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
      isPending: false,
    }),
  },
});

export default checkoutSlice.reducer;
