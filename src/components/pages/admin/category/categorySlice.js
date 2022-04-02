import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../../../api/category";

export const getCategories = createAsyncThunk(
    "product/getCategories",
    async () => {
        const {data} = await list();
        return data;
    }
)

const CategorySlice = createSlice({
    name : "category", 
    initialState : {
        value : []
    },
    extraReducers : (builder) => {
        builder.addCase(getCategories.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
    }
})

export default CategorySlice.reducer;