import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [visible,setvisible]=useState(false);

  const handleclick=()=>{
    setvisible(true);
  }
  return (
    <div className="App" id="main">
      <button id="click" onClick={handleclick}>
         Show Paragraph
      </button>
       <p
        id="para"
        className={visible ? "show" : "hide"}
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App
