import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [input, setInput] = useState('')
  const [show, setShow] = useState(true)

  const btn = true;



  useEffect(() =>{
    console.log("a component has been added")
  })

  const update = (e) =>{
    setInput(e.target.value)

    
  }
  
  
  const updateShow = () =>{
    setShow(!show)
  }

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );

  
}

export default App;