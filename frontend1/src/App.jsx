import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/Todos'

function App() {
  const [todos, setTodos] = useState([]);


  return (

    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>

  )
}

export default App
