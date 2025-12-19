import React,{ useState,useContext } from "react";
import UserContext from "../Context/UserContext";

function Login(){

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username,password})
    }

    return(
        <div className="flex justify-center items-center">
            <input 
            className="bg-amber-200 mx-1"
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
            />
            <input 
            className="bg-amber-200 mr-1"
            value={password}
            type="text"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            className="bg-pink-400 p-1 px-2 rounded-lg"
            >Submit</button>
        </div>
    )
}

export default Login;