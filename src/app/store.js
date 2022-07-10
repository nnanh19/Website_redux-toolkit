import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/pages/admin/product/productSlice'
import categoryReducer from "../components/pages/admin/category/categorySlice";
import authReducer from "../components/pages/admin/auth/authSlice";
import cartReducer from "../components/pages/admin/cart/cartSlice";

export const store = configureStore({
    reducer : {
       product : productReducer,
       category : categoryReducer,
       auth : authReducer,
       cart : cartReducer
    }
});