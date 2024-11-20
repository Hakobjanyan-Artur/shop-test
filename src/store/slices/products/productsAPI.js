import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (limit) => {

        let products = await axios.get('https://dummyjson.com/products', {
            params: {
                limit: limit,
            }
        })

        let product = products.data.products.map(el => ({
            id: el.id,
            brand: el.brand,
            category: el.category,
            description: el.description, // описание
            price: el.price,
            discount: el.discountPercentage, // скидка
            rating: el.rating,
            comment: el.reviews, // коментарии
            sku: el.sku, // артикул
            title: el.title,
            warranty: el.warrantyInformation, // гарантия
            meta: el.meta,
            photoPreview: el.thumbnail,
            images: el.images,
        }))

        return product

    }
)