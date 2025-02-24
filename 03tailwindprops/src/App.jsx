import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name: 'neeraj',
    age: 18
  }
  let array1 = [1,2,3,4];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1> 
    < Card name="troyy" btnText="click me"/>
    < Card name="neeraj" btnText="visit me"/>
    </>
  )
}

export default App
