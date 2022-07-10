import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, list, listById, remove, update } from "../../../../api/category";

export const getCategories = createAsyncThunk(
    "product/getCategories",
    async () => {
        const {data} = await list();
        return data;
    }
)
export const getCategory = createAsyncThunk(
    "product/getCategory",
    async (id) => {
        console.log('id slice',id);
        const {data} = await listById(id);
        return data;
    }
)
export const updateCategory = createAsyncThunk(
    "product/updateCategory",
    async (category) => {
        console.log('upcate',category);
        const {data} = await update(category);
        console.log(data);
        return data;
    }
)

export const getSubCategories = createAsyncThunk(
    "product/getSubCategories",
    async (idParen) => {
        let category = {};
        const {data} = await list();
        console.log('data',data);
        data.categoryList?.forEach(element => {
            if(element._id === idParen){
                category = element;
            }
         });
         return category.children;
      

        
    }
)
export const newCatgeories = createAsyncThunk(
    "product/newCategories",
    async (category) => {
        const {data} = await add(category);
        return data;
    }
)
export const removeCategory = createAsyncThunk(
    "product/removeCategory",
    async (id) => {
       
        const {data} =await list()
        await remove(id._id);
        if(id._parenId){
            const categories =  data.categoryList?.filter( category => category._id === id._parenId );
            const newCategories = categories[0].children;
            const category = newCategories.filter(item => item._id !== id._id);
            return category;
        }
        const category =  data.categoryList?.filter( category => category._id !== id._id );
        return category;
    }
)

const CategorySlice = createSlice({
    name : "category", 
    initialState : {
        value : [],
        subCate : [],
        subCategory : []
    },
    extraReducers : (builder) => {
        builder.addCase(getCategories.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
        builder.addCase(getCategory.fulfilled , (state, action) =>{
            state.subCategory = action.payload;
        })
        builder.addCase(getSubCategories.fulfilled , (state, action) =>{
            state.subCate = action.payload;
        })
        builder.addCase(removeCategory.fulfilled , (state, action) =>{
            state.value = action.payload;
        })
        builder.addCase(updateCategory.fulfilled , (state, action) =>{
            state.subCategory = action.payload;
        })
    }
})

export default CategorySlice.reducer;