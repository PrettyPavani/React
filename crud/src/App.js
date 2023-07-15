import React, { useState } from "react";

const App = () => {
  const[editingItem,setEditingItem] = useState({
    isEditing : false,
    id : ""
  })
  const[list,setList] = useState([]);
  const [message,setMessage] = useState({
    text : " Helo Pavani",
    id : ""
  })
  const changeMessage = (e) =>{
    setMessage({
      text: e.target.value,
      id : ""
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
  const changeEditState = (e) =>{
    e.preventDefault();

    let newTodo = list.map((eachObj)=>{
      if(eachObj.id === editingItem.id){
        return{
          text : message.text,
          id :editingItem.id
        };
      } else {
          return eachObj;
        }
        
      }
      
    )
    setList(newTodo);
  }
  const handleDelete =(id) =>{
      let newTodos = list.filter((eachObj)=>{
        return eachObj.id !== id
      })
      setList(newTodos);
      setMessage({
        text: "",
        id : ""
      })
      setEditingItem({
        isEditing : false,
        id : ""
      })
  }
  const handleEdit =(id) =>{
    setEditingItem({
      ...editingItem, 
      isEditing : true,
      id : id
    })
    let editableItem = list.find((eachObj)=>eachObj.id === id)
    setMessage({
      text : editableItem.text,
      id : editableItem.id
    })
  }
  return (
    <div>
      <form>
        <input 
        type="text"
        name="message"
        id="message"
        placeholder="Enter Something"
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
        
      </form>
      <hr />
      {
        list.length ===0  ? <h1> No items Found</h1> :
        <ul>
        {
          list.map((eachObj)=>{
            const {text,id} = eachObj;
            return <li key={id}>
              {text}
              <button onClick={()=>handleEdit(id)}>
                Edit
              </button>
              <button onClick={()=>handleDelete(id)}>
                Delete
              </button>

            </li>
          })
        }
      </ul>
      }
    </div>
  );
};

export default App;
