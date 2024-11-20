import { createSlice } from "@reduxjs/toolkit";
import { getCurrent } from "./currentCategoriAPI";

const currentCategori = createSlice({
    name: 'currentCategori',
    initialState: {
        currentCategori: [],
        load: false,
        error: false
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getCurrent.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getCurrent.fulfilled, (state, action) => {
            state.load = false
            state.currentCategori = [...action.payload]
        });
        builder.addCase(getCurrent.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectCurrent = state => state.currentCategori

// export const { } = currentCategoriSlices.actions

export const currentReducers = currentCategori.reducer