import {useState} from 'react';
import "./App.css";


function App() {
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastname] = useState('');
  const [password,setPassword] = useState('');

  const handleFirstName = (e) =>{
    setFirstName (e.target.value);
  }
  const handleLastName = (e) =>{
    setLastname (e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword (e.target.value);  
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let newObje = {
      firstname : firstname,
      lastname : lastname,
      password : password
    }
    console.log(newObje)
  }

  

  return (
    <div className="App">
      <form>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter Your Firstname"
            value={firstname}
            onChange={handleFirstName}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Your Lastname"
            value={lastname}
            onChange={handleLastName}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
