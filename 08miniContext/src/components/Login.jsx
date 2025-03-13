import React from "react";
import { useState , useContext } from "react";
import UserContext from "../Context/userContext";
export default function Login() {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return (
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
        {" "}
        <input type="text" placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
}