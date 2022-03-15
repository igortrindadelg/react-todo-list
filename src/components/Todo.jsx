import React from 'react'
import './Todo.css'
import { CgClose, CgInfo } from 'react-icons/cg'

const Todo = ({ todo, handleTodoClick, handleTodoDelete }) => {
    return (
        <div className="todo-container" 
        style={ todo.done ? { borderLeft: '6px solid #32CD32', textDecoration: 'line-through'} : {} }>

            <div className="todo-title" onClick={ () => handleTodoClick(todo.id)}>
                {todo.title}
            </div>

            <div className="buttons-container">
                <button className='delete-todo' onClick={ () => handleTodoDelete(todo.id)}><CgClose /></button>
                <button className="info-todo"><CgInfo /></button>
            </div>
        </div>
    )
}

// 

export default Todo