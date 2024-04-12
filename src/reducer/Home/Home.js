import { createSlice } from "@reduxjs/toolkit";
import { productget } from "../../Api/Home/HomeApi";


export const home = createSlice({
    name: 'home',
    initialState: {
        producties:[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productget.fulfilled, (state, action) => {
            state.loading = false;
            state.producties = action.payload
        })
    },
})
export default home.reducer;