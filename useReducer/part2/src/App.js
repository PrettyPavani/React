import "./App.css";
import { useReducer, useEffect } from "react";

const reducer = (state,action) => {
  if(action.type === 'UPDATE_USERS'){
    return {
      ...state,
      userData:action.payload 
    }

  }
  if(action.type === 'LOADING'){
    return {
      ...state,
      isLoading:action.payload 
    }

  }
  if(action.type === 'DELETE_USER'){

    const newUser = state.userData.filter((eachUser)=>eachUser.id !== action.payload)
    return {
      ...state,
      userData : newUser,
    }

  }
  return state;
};

function App() {

    const fetchUserData = async (api) => {
      dispatch({type : "LOADING",payload : true})
      dispatch({type : "ERROR",payload : { status: false, msg: "" } })
      try {
        const response = await fetch(api);
        const data = await response.json();
        dispatch({type: "UPDATE_USERS",payload: data });
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"ERROR",payload:{status : false,msg : ""}})

      } catch (error) {
        dispatch({type:"LOADING",payload:false})

        dispatch({
          type : "ERROR",
          payload :{ status: true, msg: error.message }
        })
      }
    };
    useEffect(() => {

    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) =>{
    dispatch({type:"DELETE_USER",payload:id})
  }
  const handleEdit = (id) =>{
    dispatch({type:"UPDATE_USER",payload:id})
  }


  if (state.isLoading){
    return <div>
      <h3>
      Loading .........

      </h3>
    </div>
  }
  return (
    <div className="App">
      <h1>Users</h1>
      {
        state.userData.map((eachUser)=>{
          const {id,name,email} = eachUser;
          return (
            <div style={{background:"pink"}} key={id}>
              <h1>{name}</h1>
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
