import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { add, list, listByCategory, read, remove, update } from "../../../../api/product";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (q_limit) => {
        const {data} = await list(q_limit);
        return data;
    }
)
export const getProductsByCategory = createAsyncThunk(
    "product/getProductsByCategory",
    async (q_category) => {
        const {data} = await listByCategory(q_category);
        return data;
    }
)
export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (product) => {
        add(product);
    }
)

export const updateProduct = createAsyncThunk (
    "product/addProducts",
    async (product) => {
        update(product); 
        const {data} = await list();
        return data;
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
        detail : [],
    },
    extraReducers : (builder) =>{
        builder.addCase(getProducts.fulfilled , (state , action) => {
            state.value = action.payload;
            console.log('products');
        } );
        builder.addCase(getProductsByCategory.fulfilled , (state , action) => {
            state.value = action.payload;
        } );
        builder.addCase(removeProduct.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
        builder.addCase(detailProduct.fulfilled, (state, action) => {
            state.detail = action.payload;
            console.log('detproduct',action.payload);
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = action.payload;
            console.log('update',state.value);
        })
        
    }
});

export default ProductSlice.reducer;