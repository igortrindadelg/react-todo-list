import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import './Todo.css'

const Todo = ({ todo, handleTodoClick, handleTodoDelete }) => {
    const history = useHistory()

    const handleTodoDetailClick = () => {
        history.push(`/${todo.title}`)
    }

    return (
        <div className="todo-container" 
        style={ todo.done ? { borderLeft: '6px solid #32CD32', textDecoration: 'line-through'} : {} }>

            <div className="todo-title" onClick={ () => handleTodoClick(todo.id)}>
                {todo.title}
            </div>

            <div className="buttons-container">
                <button className="info-todo" onClick={handleTodoDetailClick} ><CgInfo /></button>
                <button className='delete-todo' onClick={ () => handleTodoDelete(todo.id)}><CgClose /></button>
            </div>
        </div>
    )
}

// 

export default Todo