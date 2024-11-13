import { createSlice } from "@reduxjs/toolkit";
import { getDumy } from "./dumyAPI";


const dumySlices = createSlice({
    name: 'dumy',
    initialState: {
        dumy: [],
        load: false,
        error: false,
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getDumy.pending, (state, action) => {
            state.load = true
        });
        builder.addCase(getDumy.fulfilled, (state, action) => {
            state.load = false
            state.dumy = [...action.payload]
        });
        builder.addCase(getDumy.rejected, (state, action) => {
            state.load = false
            state.error = true
        })
    }
})

export const selectDumy = state => state.dumy

// export const { } = dumySlices.actions

export const dumyReducers = dumySlices.reducer