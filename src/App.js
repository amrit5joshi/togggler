import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [status,setStatus]= useState("active");
  const [counter,setCounter]= useState(0);
  const addHandler = (() => {
    if(status === "active"){
     setStatus("away");
    }
    else{
      setStatus("active");
    }
  });
  useEffect(() => {
    setCounter(counter+1)
  },[status]);

  return (
    <div className="App">

      <h1>status =   {status}</h1>
      <h2> counter =  {counter}</h2>
      <button onClick={ addHandler } >click me to toggle!!</button>
    </div>
  );
}
