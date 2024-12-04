import { configureStore } from "@reduxjs/toolkit";
import { basketReducers } from "./slices/basket/basket";
import { categoriReducers } from "./slices/categories/categories";
import { currentReducers } from "./slices/categories/currentCategori";
import { productIDReducers } from "./slices/products/productId";
import { productsReducers } from "./slices/products/products";

const store = configureStore({
    reducer: {
        products: productsReducers,
        basket: basketReducers,
        categori: categoriReducers,
        currentCategori: currentReducers,
        productID: productIDReducers
    }
})

export default store