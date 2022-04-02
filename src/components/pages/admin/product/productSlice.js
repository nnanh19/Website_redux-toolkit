import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { add, list, read, remove } from "../../../../api/product";

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

export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (id) =>{
        const {data} = await list();
        remove(id);
        const product = data.filter(data => data._id !== id)
        return product;
    }
)

export const detailProduct = createAsyncThunk(
    "product/detailProduct",
    async (id) => {
        const {data} = await read(id);
        return data;
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
        builder.addCase(removeProduct.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
        builder.addCase(detailProduct.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
});

export default ProductSlice.reducer;