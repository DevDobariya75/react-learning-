import AddTodo from './componets/AddTodo'
import Todos from './componets/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-8 pb-8">
        <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Redux Toolkit Todo App
        </h1>
      </div>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App