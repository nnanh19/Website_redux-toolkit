import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, remove } from "../../../../api/category";

export const getCategories = createAsyncThunk(
    "product/getCategories",
    async () => {
        const {data} = await list();
        return data;
    }
)
export const removeCategory = createAsyncThunk(
    "product/removeCategory",
    async (id) => {
       
        const {data} =await list()
        const categories =  data.categoryList?.filter( category => category._id === id._parenId );
        console.log('s',categories[0].children);
        const newCategories = categories[0].children?.filter(cate => cate._id !== id._id)
        console.log(newCategories);
        // await remove(id);
        return newCategories;
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
        builder.addCase(removeCategory.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
    }
})

export default CategorySlice.reducer;