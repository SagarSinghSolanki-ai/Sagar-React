import UserContext from "../Context/UserContext";
import React, { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext)

        if(!user) return <div className="text-center">please login</div>
        
        return <div className="text-center">Welcome {user.username}</div>
}

export default Profile;