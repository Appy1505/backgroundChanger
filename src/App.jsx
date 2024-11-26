import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
     <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center px-2 inset-x-0 bottom-12">
            <div className="flex gap-3 flex-wrap justify-center px-3 py-2 inset-x-0 bg-white rounded-3xl">
              <button className='outline-0 text-white px-3 py-2 rounded-full' style={{backgroundColor:"red"}} onClick={ ()=> setColor("red")}>Red</button>
              <button className='outline-0 text-white px-3 py-2 rounded-full' style={{backgroundColor:"green"}} onClick={ ()=> setColor("green")}>Green</button>
              <button className='outline-0 text-white px-3 py-2 rounded-full' style={{backgroundColor:"blue"}} onClick={ ()=> setColor("blue")}>Blue</button>
              <button className='outline-0 text-black px-3 py-2 rounded-full' style={{backgroundColor:"white"}} onClick={ ()=> setColor("white")}>White</button>
            </div>
        </div>
     </div>
  )
}

export default App
