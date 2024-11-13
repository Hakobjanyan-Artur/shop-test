import { createSlice } from "@reduxjs/toolkit";
import { getOne } from "./oneStoreAPI";



const oneStoreSlices = createSlice({
    name: 'oneStore',
    initialState: {
        oneStore: [],
        load: false,
        error: false
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getOne.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getOne.fulfilled, (state, action) => {
            state.load = false
            state.oneStore = [...action.payload]
        });
        builder.addCase(getOne.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectOne = state => state.oneStore

// export const { } = oneStoreSlices.actions

export const oneStoreReducers = oneStoreSlices.reducer