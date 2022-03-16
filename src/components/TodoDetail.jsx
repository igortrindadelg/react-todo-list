import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Button from './Button'
import './TodoDetail.css'


const TodoDetail = () => {
    const params = useParams()
    const history = useHistory()

    const handleBackButton = () => {
        history.goBack()
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButton}>Voltar</Button>
            </div>
            
            <div className="todo-details-container">
                <h2>{params.todoTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium delectus pariatur, magni ipsam rerum.</p>
            </div>
        </>
     )
}
 
export default TodoDetail
