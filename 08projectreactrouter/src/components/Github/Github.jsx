import React,{useEffect, useState} from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

    return(
        <div className="text-center bg-gray-500 p-7">
    Github followers: {data?.followers ?? "Loading..."}
  </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}