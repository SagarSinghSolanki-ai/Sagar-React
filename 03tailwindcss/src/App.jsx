import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./components/Cards.jsx"

function App() {

  return (
    <>
      <h1 className='bg-green-400 , mb-4'>Tailwind test</h1>
      <Cards username="sagar" btntext="visit me"/>
      <Cards username="nikhil" btntext="read me"/>
    </>
  )
}

export default App
