import React, { useState } from 'react';
import "./index.css";
import From from './From';
import Todolist from './Todolist';

function index() {
const[input , setInput] = useState("");
const[todos , setTodos] = useState([]);
const[editTodo , setEditTodo] = useState(null);



  return (
    <div className='Todo-main'>
        <h2>To-do-App</h2>
        <From 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <div className='todoMain'>
            <Todolist 
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
        </div>
          
    </div>
  )
}

export default index