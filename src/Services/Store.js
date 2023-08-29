"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartProducts from "./counter/CartProducts";

const rootReducer = combineReducers({
    cart: cartProducts,
},);

export default configureStore({
    reducer: rootReducer,
});

