import React, { useState } from "react";

const App = () => {
  const [editingItem,setEditingItem] = useState({
    isEditing : false,
    id : ""
  })
  const[list,setList] = useState([])
  const[message,setMessage] = useState({
    text : " Hello pip",
    id : ""
  })
  const changeMessage = (e) =>{
    setMessage({
      text: e.target.value,
      id: ""
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    let newTodo = {
      text : message.text,
      id : new Date().getTime().toString()
    }
    setList([...list,newTodo]);
    setMessage({
      text : "",
      id : ""
    })
  }
  const handleDelete = (id) =>{
    let newTodos = list.filter((eachObj)=>{
      return eachObj.id !== id
    })
    setList(newTodos);
  }

  const handleEdit = (id) =>{
    let editableItem = list.find((eachObj)=>eachObj.id === id);
    setEditingItem({
      isEditing : true,
      id : id
    })
    setMessage({
      text : editableItem.text,
      id : editableItem.id
    })
  }
  const changeEditState = (e) =>{
    e.preventDefault()
    let newTodos = list.map((eachObj)=>{
      if(eachObj.id === editingItem.id){
        return {
          text : message.text,
          id:editingItem.id
        }
      }
      else {
        return eachObj;
      }
    })
    setList(newTodos);
    setEditingItem({
      isEditing : false,
      id : ""
    })
    setMessage({
      text : "",
      id : ""
    })
   }
  return (
    <div>
      <form >
        <input 
        type="text"
        name="message"
        placeholder="enter something"
        value={message.text}
        onChange={changeMessage}
        />
        {
          editingItem.isEditing ?
          <button onClick={changeEditState}>
          Edit
        </button>
        :
        <button onClick={handleSubmit}>
          Add
        </button>
        }
        <hr />
      </form>
      <ul>
        {
          list.map((eachObj)=>{
            const {text,id} = eachObj;
            return <li>
                {text}
                <button onClick={()=>handleEdit(id)}>Edit</button>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </li>
          })
        }
      </ul>
    </div>
  )
};

export default App;
