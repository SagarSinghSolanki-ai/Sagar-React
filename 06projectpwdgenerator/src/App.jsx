import { useState ,useRef,useEffect,useCallback} from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(8);
  const [numbers,setnumbers] = useState(false);
  const [characters,setcharacters] = useState(false);
  const [password , setpassword] = useState("");


  const passwordref = useRef(null)


  const copyingclipboard = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  const passwordgenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz"

    if(numbers) str+="0123456789"
    if(characters) str+="~!@#$%^&*()_+{}[]<>?"

    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setpassword(pass)
  },[length,numbers,characters,setpassword])


  useEffect(()=>{
    passwordgenerator()
  },[length,numbers,characters,passwordgenerator])


  return (
    <>
      <div className='px-4 py-3 my-8 text-orange-500 bg-gray-600 mx-auto w-full max-w-md text-center'>
        <h2 className=' text-white pb-8'>PASSWORD GENERATOR</h2>
        <div className='flex mb-4 rounded-lg overflow-hidden bg-white'>
          <input
          type='text'
          value={password}
          className='w-full outline-none py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
          />
          <button onClick={copyingclipboard} className=' bg-blue-500 text-white px-3 py-0.5 '>copy</button>
        </div>
        <div className='flex gap-x-2 text-sm'>
          <div className="gap-x-1 text-center flex">
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer '
            onChange={(e)=>{setlength(e.target.value)}}
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numbers}
            onChange={()=>{
              setnumbers((prev)=>!prev)}}
            >
            </input>
            <label>Numbers</label>
          </div>
          <div className='flex gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={characters}
            onChange={()=>{
              setcharacters((prev)=>!prev)}}
            >
            </input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
