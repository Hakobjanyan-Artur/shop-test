import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./slices/cart/cart";
import { categoriReducers } from "./slices/categories/categories";
import { currentReducers } from "./slices/categories/currentCategori";
import { productIDReducers } from "./slices/products/productId";
import { productsReducers } from "./slices/products/products";

const store = configureStore({
    reducer: {
        products: productsReducers,
        cart: cartReducers,
        categori: categoriReducers,
        currentCategori: currentReducers,
        productID: productIDReducers
    }
})

export default store