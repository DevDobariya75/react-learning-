import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const[input , setInput] = useState('')
    const dispatch = useDispatch()

    const AddTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className="w-full flex justify-center items-center py-8">
      <form onSubmit={AddTodoHandler} className="w-full max-w-2xl px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-2xl p-8">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Add Your Task
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 
              focus:border-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-white
              placeholder-gray-300 py-3 px-5 leading-8 transition-all duration-200 ease-in-out
              hover:bg-white/15"
              placeholder="Enter your task here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="submit"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg
              hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white
              transition-all duration-200 ease-in-out transform hover:scale-105 
              shadow-lg hover:shadow-xl active:scale-95"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo