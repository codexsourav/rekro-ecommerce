"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartProducts from "./product/CartProducts";
import toggle from "./menutoggle/toogle";
import ProductState from "./product/CurrentProduct";
import Address from "./address/ManageAddress";

const rootReducer = combineReducers({
    toogle: toggle,
    cart: cartProducts,
    product: ProductState,
    address: Address,

},);

export default configureStore({
    reducer: rootReducer,
});

