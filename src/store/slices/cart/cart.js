import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, { payload }) {
            let id = state.cart.find(el => el.id === payload)
            if (state.cart.length === 0) {
                state.cart.unshift({
                    id: payload
                })
            } else if (!id) {
                state.cart.unshift({
                    id: payload
                })
            }
        }
    },
})

export const selectCart = state => state.cart

export const { addToCart } = cartSlices.actions

export const cartReducers = cartSlices.reducer