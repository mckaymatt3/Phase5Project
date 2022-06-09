import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import './Login.css'
import '../App.css';

function SignUp({}) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signup, setSignup] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data signup here:", jsonData)   
        })
        .catch((error) => {
            console.error("Error:", error)
        })
        setUsername("");
        setPassword("");
        alert("Signed up!")
    }

    return(
        <div className="overall-login-div">
            <h1 className="welcome-local-login">Welcome to Aux.</h1>
            <div className="login-div"> 
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="email-label">Username: </label>
                    <input className="input-bar" type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
                <label className="password-label">Password: </label>
                    <input className="input-bar" type="password" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <div className="login-button-div">
                    <input type="submit" value="Signup" onClick={() => setSignup(true)} />
                </div>
            </form>
            </div>
            <div className="redirect-to-spotify-two">
                {/* <a className="logged-in-welcome" href='http://localhost:4000/login'> Signed Up? Continue to Login.</a> */}
                <NavLink className="logged-in-welcome" to="/login"> Signed Up? Continue to Login. </NavLink>  
            </div>    
        </div>
    )

}

export default SignUp; 