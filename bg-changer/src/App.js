
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [color , setColor] = useState(localStorage.getItem('bgColor') || "olive");

  useEffect(() => {
    localStorage.setItem('bgColor', color);
  }, [color]);


  return (
    <div className="App" style={{backgroundColor:color}}>
    <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
    <button style={{backgroundColor:"blue"}}  onClick={()=>setColor("blue")}>blue</button>
    <button style={{backgroundColor:"black", color:"white"}}  onClick={()=>setColor("black")}>black</button>
    <button style={{backgroundColor:"lavender"}}  onClick={()=>setColor("lavender")}>lavender</button>
    <button style={{backgroundColor:"green"}}  onClick={()=>setColor("green")}>green</button>
    </div>
  );
}

export default App;
