import { createSlice } from "@reduxjs/toolkit";
import { getProductID } from "./productidAPI";


const productIDSlices = createSlice({
    name: 'productID',
    initialState: {
        productID: null,
        load: false,
        error: false,
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getProductID.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getProductID.fulfilled, (state, action) => {
            state.load = false
            state.productID = action.payload
        });
        builder.addCase(getProductID.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectProductID = state => state.productID

// export const { } = productIDSlices.actions

export const productIDReducers = productIDSlices.reducer