import React from 'react'

function List({index, task, completed, completedTodo, removedTodo}) {


    
    
    
    return (
        <div className = 'itemComponent'>
           <input type = 'checkbox' onChange= {
               () => completedTodo(index)}  />
            <p>{task}</p>
            <button className = "delete"onClick = 
            {
               () => removedTodo(index)}>
                   Delete
            </button>
        </div>
    )
}

export default List