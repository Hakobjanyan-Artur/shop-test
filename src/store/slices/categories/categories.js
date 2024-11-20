import { createSlice } from "@reduxjs/toolkit";
import { getCategori } from "./categoriAPI";

const categoriSlices = createSlice({
    name: 'categori',
    initialState: {
        categori: [],
        load: false,
        error: false
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getCategori.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getCategori.fulfilled, (state, action) => {
            state.load = false
            state.categori = [...action.payload]
        });
        builder.addCase(getCategori.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectCategories = state => state.categori

// export const { } = categoriSlices.actions

export const categoriReducers = categoriSlices.reducer

