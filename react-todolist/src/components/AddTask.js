import React, { useState } from 'react'

function AddTask({addTodo}) {
    
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');

    }

    return (
          <div className = "add-todo">
                    <form>
                        <input className = 'input-box' placeholder = "Add task" value = {value} onChange = {e => setValue(e.target.value)}></input>
                        <br />
                        <button onClick = 
                        {handleSubmit}>Add</button>
                    
                    </form>
                    
          </div>
        
    )}



export default AddTask
