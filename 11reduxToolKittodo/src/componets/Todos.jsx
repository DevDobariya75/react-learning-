import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full max-w-2xl px-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Your Tasks
          </h2>

          {todos.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-white/70 text-lg">No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            <ul className="list-none space-y-3">
              {todos.map((todo) => (
                <li
                  className="flex justify-between items-center bg-white/10 backdrop-blur-sm 
                  px-6 py-4 rounded-lg border border-white/20 hover:bg-white/15 
                  transition-all duration-200 group"
                  key={todo.id}
                >
                  <div className="text-white text-lg flex-1">{todo.text}</div>

                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold 
                    py-2 px-4 rounded-lg transition-all duration-200 transform 
                    hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 
                    focus:ring-red-300 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todos