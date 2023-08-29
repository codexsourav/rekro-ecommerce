"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { addtocart } = CartSlice.actions

export default CartSlice.reducer;