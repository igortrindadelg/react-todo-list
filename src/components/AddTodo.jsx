import React from 'react'
import Button from './Button'
import './AddTodo.css'

const AddTodo = () => {
    return ( 
        <div className='add-todo-container'>
            <input type="text" className='add-todo-input' placeholder='Add New Todo' />
            <div className="button-container">
                <Button>Adicionar</Button>
            </div>
        </div>
     )
}
 
export default AddTodo