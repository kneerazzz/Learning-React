import { useState } from 'react'

function App() {
  let [color , setColor] = useState("olive")
  return (
    <div className="w-full h-screen absolute top-0 left-0"style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-sm'>
          <button onClick={() => setColor("red")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "red"}}>RED</button>
          <button onClick={() => setColor("green")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "green"}}>GREEN</button>          
          <button onClick={() => setColor("blue")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "blue"}}>BLUE</button>          
          <button onClick={() => setColor("purple")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "purple"}}>PURPLE</button>          
          <button onClick={() => setColor("yellow")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button onClick={() => setColor("grey")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "grey"}}>GREY</button>
          <button onClick={() => setColor("whitesmoke")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-black ' style={{backgroundColor: "whitesmoke"}}>WHITESMOKE</button>
          <button onClick={() => setColor("pink")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "pink"}}>PINK</button>
          <button onClick={() => setColor("olive")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "olive"}}>OLIVE</button>
          <button onClick={() => setColor("black")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-white ' style={{backgroundColor: "black"}}>BLACK</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-2 py-1 !rounded-full shadow-lg text-black' style={{backgroundColor: "lavender"}}>LAVENDER</button>
        </div>
      </div>
    </div>
  )
}

export default App
