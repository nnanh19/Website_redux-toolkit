import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/pages/admin/product/productSlice'
import categoryReducer from "../components/pages/admin/category/categorySlice";

export const store = configureStore({
    reducer : {
       product : productReducer,
       category : categoryReducer
    }
});