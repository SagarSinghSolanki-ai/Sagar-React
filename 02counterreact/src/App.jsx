// import { useState } from "react";

// function App() {
//   let [counter , setcounter] = useState(0);
//   const addvalue = () => {
//     counter = counter+1;
//     if(counter<=20 && counter>=0){
//       setcounter(counter)
//     }
//   }
//   const removevalue = () => {
//     counter = counter-1;
//     if(counter<=20 && counter>=0){
//       setcounter(counter)
//     }
//   }
//   return (
//     <>
//       <h1>hey there</h1>
//       <h2>counter {counter}</h2>
//       <button onClick={addvalue}>add value</button>
//       <button onClick={removevalue}>remove value</button>
//     </>
//   )
// }

// export default App

import { useState } from "react";

export default function App(){
  let [counter,setcounter] = useState(0);

  const addvalue = () => {
    counter = counter + 1;
    setcounter(counter);
  }

  const subvalue = () => {
    counter = counter - 1;
    setcounter(counter);
  }

  return(
    <>
    <h1>hey there</h1>
    <h2>counter {counter}</h2>
    <button onClick={addvalue}>adding</button>
    <button onClick={subvalue}>subtracting</button>
    </>
  );
}
