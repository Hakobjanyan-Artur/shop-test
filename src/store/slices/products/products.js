import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsAPI";


const productsSlices = createSlice({
    name: 'products',
    initialState: {
        products: [],
        load: false,
        error: false,
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.load = false
            state.products = [...action.payload]
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectProducts = state => state.products

// export const { } = productsSlices.actions

export const productsReducers = productsSlices.reducer