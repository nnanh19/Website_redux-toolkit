import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const addToCart = createAsyncThunk(
    "cart/addToCart",
    (cartValue) => {
        const cart = cartValue;
        return cart;
    }
)

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartItems : [],
        cartTotalQuantity : 0,
        cartTotalAmount : 0
    },
    extraReducers : (builder) => {
        builder.addCase(addToCart.fulfilled , (state,action) => {
            state.cartItems = action.payload;
            console.log(state.cartItems);
        })
    } 
})

export default cartSlice.reducer;