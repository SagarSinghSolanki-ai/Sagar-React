import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("pink")

  return (
    <>
      <div className="flex flex-wrap h-screen justify-center items-end pb-16" 
      style={{background:color}}
      >
        <div className='flex flex-wrap bg-white rounded-xl'>
          <div className='flex flex-wrap gap-10 text-white p-2'>
            <button
            onClick={()=> setcolor("red")} 
            className='bg-red-700 rounded-xl w-14'>Red</button>
            <button
            onClick={()=> setcolor("grey")} 
            className='bg-gray-500 rounded-xl w-14'>Grey</button>
            <button
            onClick={()=> setcolor("orange")} 
            className='bg-orange-600 rounded-xl w-14'>Orange</button>
            <button
            onClick={()=> setcolor("black")} 
            className='bg-black rounded-xl w-14'>Black</button>
            <button
            onClick={()=> setcolor("purple")} 
            className='bg-purple-600 rounded-xl w-14'>Purple</button>
            <button
            onClick={()=> setcolor("green")} 
            className='bg-green-600 rounded-xl w-14'>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
