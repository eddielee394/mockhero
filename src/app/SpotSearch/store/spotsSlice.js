import {createSlice} from "@reduxjs/toolkit";

const spotsSlice = createSlice({
    name: 'spots',
    initialState: {
        isPending: false,
        airportPendingRequests: [],
        data: [],
        error: null
    },
    reducers: {
    
    }
});

export default spotsSlice.reducer;
