import React, { useState } from 'react'
import Todos from './components/Todos'
import './App.css'
import AddTodo from './components/AddTodo'

const App = () => {
  const [todos, doneTodos] = useState([
    {
      id: '1',
      title: 'Estudar react.js',
      done: false
    },
    {
      id: '2',
      title: 'Estudar Blockchain',
      done: false
    },
    {
      id: '3',
      title: 'Estudar NFT Mint',
      done: false
    }
  ])

  return (
    <>
      <div className='container'>
        <AddTodo />
        <Todos todos={todos} />
      </div>
    </>
  )
 
}

export default App