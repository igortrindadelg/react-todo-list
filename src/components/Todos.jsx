import React from 'react'

import Todo from './Todo'

const Todos = ({ todos, handleTodoClick, handleTodoDelete }) => {
    return (
        <>
             { todos.map( (todo) => (<Todo todo={todo} handleTodoClick={handleTodoClick} handleTodoDelete={handleTodoDelete} />) )}
        </>
    ) 
}

export default Todos