import { useState } from "react";

function App() {
  const [count,setCount] = useState(0);  

  const handleClick = (event) =>{
    setCount(c=>c+1)
    setCount(c=>c+1)
  };
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>Increment</button>
    
    </>
  );
}

export default App
