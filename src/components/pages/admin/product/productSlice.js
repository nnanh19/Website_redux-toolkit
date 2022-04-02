import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { add, list } from "../../../../api/product";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const {data} = await list();
        return data;
    }
)

export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (product) => {
        add(product);
    }
)

const ProductSlice = createSlice({
    "name" : "product",
    initialState : {
        value : [],
    },
    extraReducers : (builder) =>{
        builder.addCase(getProducts.fulfilled , (state , action) => {
            state.value = action.payload;
        } );
    }
});

export default ProductSlice.reducer;