import React from 'react'

import Todo from './Todo'

const Todos = ({ todos, handleTodoClick, handleTodoDelete }) => {
    return (
        <>
             { todos.map( (todo) => (
             <Todo 
             key={todo.id}
             todo={todo} 
             handleTodoClick={handleTodoClick} 
             handleTodoDelete={handleTodoDelete} />) )}
        </>
    ) 
}

export default Todos