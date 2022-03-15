import React from 'react'

import Todo from './Todo'

const Todos = ({ todos }) => {
    return (
        <>
             { todos.map( (todo) => (<Todo todo={todo} />) )}
        </>
    ) 
}

export default Todos