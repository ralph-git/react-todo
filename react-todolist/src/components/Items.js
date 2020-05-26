import React, { useState } from 'react'


function Items() {

    function addTask() {
        console.log('Hello!');
        
       
      }
    return (
        <div>
            
            <div className = 'form'>
                <form>
            <input type = 'text' placeholder = 'Task'></input>
            <button onClick = {addTask}>Add..</button>
                </form>
            </div>

            <p>Errand A</p> 
            <p>Errand B</p>
            <p>Errand C</p>
        </div>
    )
}

export default Items;
