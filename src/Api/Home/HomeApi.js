import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

let uri = 'https://66178d6eed6b8fa43482fc43.mockapi.io/products/'

export const productget = createAsyncThunk(`home/productget`,
    async (elem) => {
        try {
            const { data } = await axiosRequest.get(uri + elem);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)