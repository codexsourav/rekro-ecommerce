"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {
        fname: '',
        lname: '',
        company: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        phone: ''
    }
};

export const Address = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddress: (state, action) => {
            console.log(action.payload);
            state.address = action.payload;
        },
    },
});

export const { setAddress } = Address.actions

export default Address.reducer;