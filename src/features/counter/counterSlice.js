import {createSlice} from '@reduxjs/toolkit';
var initialState = {
    count:1
}
export const counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        increment:(state)=>{state.count++},
        decrement:(state)=>{state.count--}
    }
})
export var {increment,decrement}=counterSlice.actions;
var counterReducer = counterSlice.reducer;
export default counterReducer;