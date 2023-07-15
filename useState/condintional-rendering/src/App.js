import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleChange = () =>{
    setShow(!show);
  }
  return (
    <div className="App">
      <button onClick={handleChange}>{show ? "Hide" : "show"}</button>
      {
        show ? <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      :
      <p>
        Data is hidden
      </p>
      }
    </div>
  );
}

export default App;
