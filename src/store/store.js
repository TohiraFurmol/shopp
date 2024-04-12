import { configureStore } from "@reduxjs/toolkit";
import Home from '../reducer/Home/Home'

export const store = configureStore({
    reducer: {
        Home,
    }
})