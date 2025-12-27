import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./components/Cards.jsx"

function App() {

  return (
    <>
      <h1 className='bg-amber-50 mb-4'>Tailwind test</h1>
      <Cards username="Sagar" btntext="visit me"/>
      <br></br>
      <Cards username="Nikhil" />
    </>
  )
}

export default App
