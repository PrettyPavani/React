import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);
  const increment = () =>{
    setCount(count+1);
  }
  const decrement = () =>{
    setCount(count-1);
  }
  return (
    <div className="App">
      <h1 style={{color : "red"}}>Counter</h1>
      <button className='button button1' onClick={increment}>Increment</button>
      <h3>
        count is : {count}
      </h3>
      <button className='button button1'onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
