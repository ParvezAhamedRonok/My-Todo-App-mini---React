import React from 'react'
import {BsCheck2All} from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";



const Todolist = ({todos , setTodos , setEditTodo}) => {



//fnc for showing the complete todo ----------------
 const handleCompleteTodo = (x) =>{
  console.log("Completed..")
  setTodos(todos.map((item) =>{
    if(item.id ===  x.id){
      console.log(item)
      return {...item , completed: !item.completed}
      
    }
    return item
    
  }))
 }

//handle edit function when user click on edit....for changing the toDo item
 const handleEditFnc = ({id}) =>{
  console.log("Edit-Todos--")
     const findTodo = todos.find((item) => item.id === id);
     setEditTodo(findTodo)
    //  console.log(findTodo);
 }




//for delete a specific item by there todos ID----------
//we destractuaring the todos id into the HandleDelete parametter in below.....
  const handleDeleteFnc = ({id}) =>{
    console.log(id);
    console.log(todos.id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }












  return (
    <div>
        {
            todos.map((e) => (
                 <li className='todo-list' key={e.id}>
                      <input type="text" name="text" id="text" value={e.title}
                       className='list'
                       style={{opacity: e.completed ? "0.3" : "1"}}
                       onChange={(e) => {e.preventDefault()}}
                      />
                      <div className="todoBtns">
                          <button className='okItme'
                            onClick={() =>{handleCompleteTodo(e)}}
                          ><BsCheck2All /></button>
                          <button className='editItem'
                            onClick={() =>{handleEditFnc(e)}}
                          ><FiEdit /></button>
                          <button className='deleteItem'
                            onClick={() => {handleDeleteFnc(e)}}
                          ><AiFillDelete /></button>
                      </div>

                 </li>
            )
            )
        }
    </div>
  )
}

export default Todolist