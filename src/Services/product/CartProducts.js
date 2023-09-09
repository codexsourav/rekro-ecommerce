"use client";

import { createSlice } from "@reduxjs/toolkit";
import { reactLocalStorage } from "reactjs-localstorage";

// Helper function to initialize the cart
const initializeCart = () => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const cart = reactLocalStorage.getObject('cart');
        return Array.isArray(cart) ? cart : [];
    } else {
        return [];
    }
}


const initialState = {
    products: initializeCart(),
};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const existingProductIndex = state.products.findIndex(obj => obj._id === action.payload._id);

            if (existingProductIndex !== -1) {
                // If the product already exists in the cart, update the quantity
                state.products[existingProductIndex].qut += action.payload.qut;
            } else {
                // If it's a new product, add it to the cart
                state.products.push(action.payload);
            }

            // Update local storage
            reactLocalStorage.setObject('cart', state.products);
        },
        removeTocart: (state, action) => {
            const updatedCart = state.products.filter(obj => obj._id !== action.payload._id);
            state.products = updatedCart;

            // Update local storage
            reactLocalStorage.setObject('cart', updatedCart);
        },
    },
});

export const { addtocart, removeTocart } = CartSlice.actions;

export default CartSlice.reducer;
