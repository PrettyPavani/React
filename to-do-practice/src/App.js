import React, { useState } from "react";

const App = () => {
  const [list,setList] =useState([])
  const [message,setMessage] = useState({
    text : "hello",
    id : "jhgfghjk"
  })
  const changeMessage = (e) =>{
    setMessage({
      ...message,
      text : e.target.value,
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let newTodo = {
      text : message.text,
      id : new Date().getTime().toString()
    }
    setList([...list,newTodo])
    setMessage({
      text : "",
      id: ""
    })

  }
  const handleDelete = (id) =>{
    let newTodos = list.filter((eachItem)=>{
      return eachItem.id !== id;
    })
    setList(newTodos)

  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        <button onClick={handleSubmit}>
          Add
        </button>
      </form>
      <hr />
      <ul>
        {list.map((eachItem) => {
          return (
            <li key={eachItem.id}>
              <span>{eachItem.text}</span>
              <button >edit</button>
              <button onClick={()=>handleDelete(eachItem.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;