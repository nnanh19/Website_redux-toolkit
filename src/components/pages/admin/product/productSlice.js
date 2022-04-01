import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { list } from "../../../../api/product";

export const getProducts = createAsyncThunk(
    "product/listProduct",
    async () => {
        const {data} = await list();
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
    }
});

export const {addProduct}  = ProductSlice.actions;
export default ProductSlice.reducer;