import React from "react";
import { useParams } from "react-router";

function User(){
    const {userid} = useParams()
    return(
        <div className="text-center bg-amber-700 p-7 m-7">User: {userid} </div>
    )
}

export default User;