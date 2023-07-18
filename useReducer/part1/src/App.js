import './App.css';
import {useReducer} from 'react';

const reducer = (state,action) =>{

  if(action.type === 'DELETE_PERSON'){
    const newPerson = state.data.filter((eachPerson)=>{
      return eachPerson.id !== action.payload
    })
    return {
      ...state,
      data : newPerson,
      length : state.length-1
      

    }
  }
  return state;

}

function App() {

  const initialState = {
    data : [
      {id:11,firstname:"jaluyi",email : "kadvbn@gmail.com"},
      {id:22,firstname:"pavani",email : "pavani@gmail.com"}
    ],
    length : 2,
  }

  const[state,dispatch] = useReducer(reducer,initialState);

  const handleDelete = (id) =>{
    dispatch({
        type : 'DELETE_PERSON',
        payload : id
    })
  }

  const handleEdit = (id) =>{
    dispatch({
      type : 'UPDATE_PERSON',
      id : id
    })
  }

  return (
    <div className="App">
      <h1>Length {state.length}</h1>
      {
        state.data.map((eachItem)=>{
          const {id,firstname,email} = eachItem;
          return (
            <div key={id}>
              <h4>{firstname}</h4>
              <p>{email}</p>
              <button onClick={()=>handleDelete(id)}>Delete</button>
              <button onClick={()=>handleEdit(id)}>Edit</button>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
