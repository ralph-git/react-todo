import React, { useState } from 'react';
import './App.css';
import ToDoItems from './components/ToDoItems' //eslint
import SampleData from './components/SampleData'
import AddTask from './components/AddTask'
function App() {

 
  const [todos, setTodos] = useState(SampleData)

 
 const addTodo = task => {
   const NewTodos = [...todos, { task }];
   setTodos(NewTodos);
  
 }

 const completedTodo = index => {
   const NewTodos = [...todos]
   NewTodos(index).completed = !NewTodos(index).completed;
  
   console.log('True')
   setTodos(NewTodos);
 }

 const removedTodo = index => {
  const NewTodos = [...todos]
  NewTodos.splice(index, 1)
  
  setTodos(NewTodos);
}

  return (
    <div className="todo-list">

     <h1> To Do List</h1>

     <AddTask addTodo = {addTodo}/>
     
     {todos.map((item, index) => 

    <ToDoItems key = {index} 
    index = {index}
    task = {item.task} 
    completed = {item.completed}
    addTodo = {item.addTodo}
    completedTodo = {completedTodo}
    removedTodo = {removedTodo}
    />)}
    
    
    </div>
  );
}


export default App;
