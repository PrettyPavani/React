import './App.css';
import {useState} from 'react';

function App() {
  let object = [
    {
    id:1,
    firstname : "emmma",
    lastname : "watson",
    age : 24
  },
  {
    id : 2,
    firstname : "hello",
    lastname : "jack",
    age : 24
  }
]

  const [name,setname] = useState(object)
  const handleDelete = (id) => {
    let newArray = name.filter((eachObj)=>{
      return eachObj.id !== id;
    })
    setname(newArray);
  }
  // const handleFirstname = () =>{
  //   setname({
  //     ...name,
  //     firstname : "Pavani"
  //   });
  // }

  // const handleLastname = () =>{
  //   setname({
  //     ...name,
  //     lastname : "Katlati"
  //   });
  // }
  // const handleAge = () =>{
  //   setname({
  //     ...name,
  //     age : 24
  //   });
  // }

  return (
    <div className="App">
      <ul>
        {
          name.map((eachObj)=>{
            const {firstname,lastname,age,id} = eachObj;
            return <li>
              <div>{firstname}</div>
              <div>{lastname}</div>
              <div>{age}</div>
              <button onClick={()=>handleDelete(id)}>
                Delete
              </button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
