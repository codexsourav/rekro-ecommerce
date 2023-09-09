"use client";

import { createSlice } from "@reduxjs/toolkit";
import { reactLocalStorage } from "reactjs-localstorage";
// Helper function to initialize the cart
const initializeProduct = () => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        return reactLocalStorage.getObject('product') ?? { qut: 1 };

    } else {
        return { qut: 1 };
    }
}

const initialState = {
    product: initializeProduct()
};

export const ProductState = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = { ...action.payload };
            reactLocalStorage.setObject('product', { ...action.payload })
        },
    },
});

export const { setProduct, updateProduct } = ProductState.actions

export default ProductState.reducer;