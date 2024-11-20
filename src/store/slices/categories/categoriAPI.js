import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

export const getCategori = createAsyncThunk(
    'categori/getCategori',
    async () => {

        let categories = await axios.get('https://dummyjson.com/products/category-list')


        let categori = categories.data.map(el => ({
            id: v4(),
            name: el,
        }))

        return categori

    }
)