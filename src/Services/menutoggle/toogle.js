"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawer: false,
    searchbox: false,
    carttoggle: false,
};

export const toggle = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        setdrawer: (state, action) => {
            state.drawer = action.payload;
        },
        setcarttoogle: (state, action) => {
            state.carttoggle = action.payload;
        },
        setsearchbox: (state, action) => {

            state.searchbox = action.payload;
        },
    },
});

export const { setdrawer, setcarttoogle, setfilter, setsearchbox } = toggle.actions

export default toggle.reducer;