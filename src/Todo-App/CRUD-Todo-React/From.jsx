import React, { useEffect, useState } from 'react';
import {v4 as uuidV4} from "uuid"



function From({input , setInput ,todos , setTodos , editTodo , setEditTodo }) {


//for updating todo list ---
 const updateTodo = (title , id , completed) =>{
    const newTodo = todos.map((item) => item.id === id ? (title , id , completed) : item )
    setTodos(newTodo);
   setEditTodo("");
  //  console.log(title , id , completed);
  //  console.log("Updated-SuccessFyllu.........")
 }

useEffect(() =>{
     if(editTodo){
        setInput(editTodo.title)
     }else{
      setInput("")
     }
},[setInput , editTodo])




const handleInputData= (e) =>{
     setInput(e.target.value);
    //  console.log(e.target.value)
}

const handleSubmit = (x) => {
    x.preventDefault();
    if(!editTodo){
      setTodos([...todos , {id:uuidV4() , title:input , completed : false}]);
      setInput("")
    }else{
      updateTodo(input , editTodo.id , editTodo.completed)
      // console.log(editTodo)
    }

}



  return (
    <form  className='formData' onSubmit={handleSubmit}>
          <input type="text" name="text" id="text" placeholder='Enter a list here..' 
          className='text-input' 
           value={input} required
           onChange={handleInputData}
          />
          <button className='formBtn' type="submit">{editTodo ? "Ok" :"Add"}</button>
    </form>
  )
}

export default From