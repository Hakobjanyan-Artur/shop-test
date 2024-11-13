import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOne = createAsyncThunk(
    'oneStore/getOne',
    async () => {

        let one = await axios.get('https://fakestoreapi.com/products', {
            params: {
                limit: 18
            }
        })
        let comments = await axios.get('https://dummyjson.com/comments', {
            params: {
                limit: 20
            }
        })

        let onePr = one.data.map(el => ({
            id: el.id,
            category: el.category,
            description: el.description,
            price: el.price,
            discount: el.rating.count / 10,
            rating: el.rating.rate,
            title: el.title,
            photoPreview: el.image,
            sku: Math.floor(Math.random(1000) * 9999),
            comment: comments.data.comments.filter(com => com.id === el.id),
            shop: 'oneShop'
        }))

        return onePr

    }
)