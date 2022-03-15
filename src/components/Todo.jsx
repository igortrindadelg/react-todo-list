import React from 'react'
import './Todo.css'

const Todo = ({ todo }) => {
    return (
        <div className='todo-container'> {todo.title} </div>
    )
}

export default Todo