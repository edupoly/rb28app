import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos:['get bmw','get villa','pay bills']
}

export const todolistSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        },
    }
})
export const {addTodo,deleteTodo}=todolistSlice.actions;
var todoReducer = todolistSlice.reducer;
export default todoReducer;