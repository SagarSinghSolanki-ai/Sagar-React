import { useState } from "react";

function App(){
  let [counter , setcounter] = useState(0);
  const addvalue = () => {
    setcounter(prevcounter => prevcounter+1);
    setcounter(prevcounter => prevcounter+1);
    setcounter(prevcounter => prevcounter+1);
  }
  const subvalue = () => {
    setcounter(prevcounter => prevcounter-1);
    setcounter(prevcounter => prevcounter-1);
    setcounter(prevcounter => prevcounter-1);
  }
  return (
    <>
    <h1 className="text-3xl text-amber-500">hey i am here to increment and decrement the counter</h1>
    <h1>Counter {counter}</h1>
    <button className='p-4 bg-amber-950 text-3xl rounded-3xl text-white'  onClick={addvalue}>increment</button>
    <button className="p-4"   onClick={subvalue}>decrement</button>
    </>
  )
}

export default App;