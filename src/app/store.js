import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/pages/admin/product/productSlice'

export const store = configureStore({
    reducer : {
       product : productReducer
    }
});