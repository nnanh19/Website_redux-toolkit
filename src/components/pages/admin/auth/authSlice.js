import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { signup } from "../../../../api/user";
import { signin } from "../../../../api/user";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (user) => {
        await signup(user);
    },
)
export const signIn = createAsyncThunk(
    "auth/signin",
    async (user) => {
        const {data} = await signin(user);
        return data;
    },
)
const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLogged : false,
        user : {}
    },
    extraReducers : (builder) =>{
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        })
    }

})

export default authSlice.reducer;