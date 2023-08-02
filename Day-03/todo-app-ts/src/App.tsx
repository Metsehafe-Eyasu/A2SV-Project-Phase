import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'
import TodoList from './components/TodoList'

const App : React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (todo: Todo) => {
    setTodos(prevTodos => [...prevTodos, todo])
  }

  return (
    <div className='App'>
      <span className="heading">ToDo App</span>
      <InputField handleSubmit={handleSubmit}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>

  )
}

export default App
