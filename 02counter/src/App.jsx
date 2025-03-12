import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0);

  function addValue() {
    if(counter < 20){
      counter = counter+1;
      setCounter(counter);
    }
  }
  function decreaseValue() {
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>react ig</h1>
    <h1>for changes of commits</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
