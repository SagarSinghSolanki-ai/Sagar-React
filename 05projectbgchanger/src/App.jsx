import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("pink")

  return (
    <>
      <div className="flex flex-wrap h-screen justify-center items-end pb-16" 
      style={{background:color}}
      >
        <div className='flex flex-wrap bg-white rounded-3xl'>
          <div className='flex flex-wrap gap-10 text-white p-2 mx-3'>
            <button
            onClick={()=> setcolor("red")} 
            className='bg-red-700 rounded-3xl w-20 p-2'
            style={{backgroundColor:"red"}}>Red</button>
            <button
            onClick={()=> setcolor("grey")} 
            className='bg-gray-500 rounded-3xl w-20 p-2'
            style={{backgroundColor:"grey"}}>Grey</button>
            <button
            onClick={()=> setcolor("orange")} 
            className='bg-orange-600 rounded-3xl w-20 p-2'
            style={{backgroundColor:"orange"}}>Orange</button>
            <button
            onClick={()=> setcolor("black")} 
            className='bg-black rounded-3xl w-20 p-2'
            style={{backgroundColor:"black"}}>Black</button>
            <button
            onClick={()=> setcolor("purple")} 
            className='bg-purple-600 rounded-3xl w-20 p-2'
            style={{backgroundColor:"purple"}}>Purple</button>
            <button
            onClick={()=> setcolor("green")} 
            className='bg-green-600 rounded-3xl w-20 p-2'
            style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
