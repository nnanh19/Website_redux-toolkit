import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { list, signup } from "../../../../api/user";
import { signin } from "../../../../api/user";

export const getUsers = createAsyncThunk(
    "auth/getUsers",
    async () => {
        const {data} = await list();
        return data;
    },
)
export const signUp = createAsyncThunk(
    "auth/signup",
    async (user) => {
        console.log(user);
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
export const logOut = createAsyncThunk(
    "auth/logout",
    async (user) => {
        
    },
)

export const user = createAsyncThunk(
    "auth/user",
    async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
    }
)

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        users : [],
        isLogged : false,
        user : {}
    },
    extraReducers : (builder) =>{
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLogged = true;
            localStorage.setItem('user',JSON.stringify(action.payload));
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.isLogged = false;
            localStorage.removeItem('user');
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
    }

)

export default authSlice.reducer;