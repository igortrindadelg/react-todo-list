import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './components/Todos'
import Header from './components/Header'
import './App.css'
import AddTodo from './components/AddTodo'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Estudar react.js',
      done: false
    },
    {
      id: '2',
      title: 'Estudar Blockchain',
      done: true
    },
    {
      id: '3',
      title: 'Estudar NFT Mint',
      done: false
    }
  ])

  const handleTodoClick = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id == todoId) return {
        ...todo,
        done: !todo.done
      }

      return todo
    })

    setTodos(newTodos)
  }


  const handleTodoAdd = (todoTitle) => {
    const newTodos = [
      ...todos, 
      {
        title: todoTitle,
        id: uuidv4(),
        done: false
    }]

    setTodos(newTodos)
  }

  const handleTodoDelete = (todoId) => {
    const newTodos = todos.filter(todo => todo.id != todoId)
    
    setTodos(newTodos)
  }

  return (
    <>
      <div className='container'>
        <Header />
        <AddTodo handleTodoAdd={handleTodoAdd} />
        <Todos todos={todos} handleTodoClick={handleTodoClick} handleTodoDelete={handleTodoDelete} />
      </div>
    </>
  )
 
}

export default App