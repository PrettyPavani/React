import './App.css';
import Keypad from './Keypad';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState('');
  const handleClick = (value) =>{
    setInput(input + value )
  }
  const calculte = (value) =>{
    let outputVal = eval(input);
    setInput(outputVal)
  }
  const handleClear = (value) =>{
    setInput('');

  }
  return (
    <div className="container">
      <h1>
        This is Calculator
      </h1>
      <div className="calculator">
        <input type="text" className="output" value={input}/>
        <Keypad handleClick={handleClick} calculte ={calculte} handleClear={handleClear} />

      </div>
    </div>
  );
}

export default App;
