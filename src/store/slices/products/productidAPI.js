import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductID = createAsyncThunk(
    'productID/getProductID',
    async (id) => {

        let product = await axios.get(`https://dummyjson.com/products/${id}`)

        let productID = {
            id: product.data.id,
            brand: product.data.brand,
            category: product.data.category,
            description: product.data.description, //описание
            price: product.data.price,
            discount: product.data.discountPercentage, // скидка
            rating: product.data.rating,
            comment: product.data.reviews, // коментарии
            sku: product.data.sku, // артикул
            title: product.data.title,
            warranty: product.data.warrantyInformation, // гарантия
            meta: product.data.meta,
            photoPreview: product.data.thumbnail,
            images: product.data.images
        }

        return productID

    }
)