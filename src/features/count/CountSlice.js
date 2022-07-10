import { createSlice } from "@reduxjs/toolkit"

const CountSlice = createSlice({
    name : "count",
    initialState : {
        value : 10,
    },
    reducers : {
        increment(state){
            state.value +=1;
        },
        decreament(state){
            state.value -=1;
        },
        increase(state, actions){
            // state.value += actions.payload;
            console.log(actions.payload);
        }
    }

})

export const {increase, decreament, increment} = CountSlice.actions;
export default CountSlice.reducer;