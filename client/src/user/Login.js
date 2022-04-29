import React, { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router";
import '../App.css';

function Login({username, setUsername, password, setPassword, login, setLogin, user, setUser, setIsLoading}) {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])
    
    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data here:", jsonData);
            // setUser(jsonData)
            setIsLoading(false)  
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);
    
    
    return ( 
        <div className="overall-login-div">
            <div className="login-div"> Welcome to Local.
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="email-label"> Username: </label>
                        <input type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
                    <label className="password-label"> Password: </label>
                        <input type="text" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="login-button-div">
                        <input type="submit" value="Login" onClick={() => setLogin(true)} />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login;