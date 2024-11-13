import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./slices/cart/cart";
import { dumyReducers } from "./slices/products/dumy";
import { oneStoreReducers } from "./slices/products/oneStore";

const store = configureStore({
    reducer: {
        dumy: dumyReducers,
        oneStore: oneStoreReducers,
        cart: cartReducers,
    }
})

export default store