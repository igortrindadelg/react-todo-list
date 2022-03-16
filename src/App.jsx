import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Todos from './components/Todos'
import Header from './components/Header'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoDetail from './components/TodoDetail'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
      const fetchTodos = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        
        setTodos(data)
      } 
      fetchTodos()
  }, [])

  const handleTodoClick = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) return {
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
    const newTodos = todos.filter(todo => todo.id !== todoId)
    
    setTodos(newTodos)
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route
          	path='/'
            exact
            render={() => (
              <>
                <AddTodo handleTodoAdd={handleTodoAdd} />
                <Todos todos={todos} handleTodoClick={handleTodoClick} handleTodoDelete={handleTodoDelete} />
              </>
            )}>
        </Route>

        <Route
            path='/:todoTitle'
            exact 
            component={TodoDetail} />
      </div>
    </Router>
  )
 
}

export default App