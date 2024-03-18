import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo  } from '../features/todo/todoSlice.js'
function AddTodo() {
    const [data , setData] = useState('')
    const dispatch = useDispatch()
    // dispatch uses the reduce to add value in store
    const addTodoHandler = (e) => {
        console.log("button is clicked")
        e.preventDefault()
        dispatch(addTodo(data))
        setData('')
    }


    return (
        
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
           )
}

export default AddTodo
