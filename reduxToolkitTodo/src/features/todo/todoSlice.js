// it is the store

import {createSlice  , nanoid} from '@reduxjs/toolkit'


const initialState = {

    todos :[{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({

    name:'todo',
    initialState,
    reducers:{
        // addTodo is the property
        // as we use data , setData in useState like wise we have state and action here  state give us the current value access and action gives value that are required to perform action
        addTodo : (state , action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
                // payload is an object
                
            }
            state.todos.push(todo)

        },
        removeTodo:(state , action)=>{
            state.todos =state.todos.filter((todo)=>
            todo.id !== action.payload)
        },
        // create update and delete todo
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer