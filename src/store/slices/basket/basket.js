import { createSlice } from "@reduxjs/toolkit";

const basketSlices = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
    },
    reducers: {
        addToBasket(state, { payload }) {
            const cartLocal = JSON.parse(localStorage.getItem('basket')) || []
            let id = state.basket.find(el => el.id === payload.id)
            if (cartLocal?.length === 0) {
                state.basket.unshift({
                    id: payload.id,
                    title: payload.title,
                    brand: payload.brand,
                    sku: payload.sku,
                    description: payload.description,
                    category: payload.category,
                    price: payload.price,
                    discount: payload.discount,
                    rating: payload.rating,
                    photoPreview: payload.photoPreview,
                    comment: payload.comment,
                    count: payload.count ? payload.count : 1
                })
                localStorage.setItem('basket', JSON.stringify(state.basket))
            }
            else if (cartLocal?.length > 0 && !id) {
                state.basket = [
                    ...cartLocal,
                    {
                        id: payload.id,
                        title: payload.title,
                        brand: payload.brand,
                        sku: payload.sku,
                        description: payload.description,
                        category: payload.category,
                        price: payload.price,
                        discount: payload.discount,
                        rating: payload.rating,
                        photoPreview: payload.photoPreview,
                        comment: payload.comment,
                        count: payload.count ? payload.count : 1
                    }
                ]
                localStorage.setItem('basket', JSON.stringify(state.basket))
            }
        },
    },
})

export const selectBasket = state => state.basket

export const { addToBasket } = basketSlices.actions

export const basketReducers = basketSlices.reducer