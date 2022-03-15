import React, { useState } from 'react'
import Button from './Button'
import './AddTodo.css'

const AddTodo = ({ handleTodoAdd }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTodoClick = () => {
        handleTodoAdd(inputData)
        setInputData('')
    }

    return ( 
        <div className='add-todo-container'>
            <input value={inputData} onChange={handleInputChange} type="text" className='add-todo-input' />
            <div className="button-container">
                <Button onClick={handleAddTodoClick}>Adicionar</Button>
            </div>
        </div>
     )
}
 
export default AddTodo