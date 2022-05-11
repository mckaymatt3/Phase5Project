import React, { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setRoomValue } from "../redux/room";
import { setValue } from "../redux/user";
import './Login.css'
import '../App.css'

function Login({username, setUsername, password, setPassword, login, setLogin, user, setUser, setIsLoading}) {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.value);
    // console.log("currentUser", currentUser)
    
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
        setUsername("")
        setPassword("")
        alert("Logged in!")
    }

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
                setUser(user);
                dispatch(setValue(user))
            });
          }
        });
      }, []);

      function isUserLoggedIn () {
          if (user)
            return <a className="logged-in-welcome" href='http://localhost:4000/'> Home. </a>
        else {
            return <a className="signup-welcome" href='http://localhost:4000/signup'>New to Aux? Sign up by clicking here.</a>
        }
      }    
    
    return ( 
        <div className="overall-login-div">
            <h1 className="welcome-local-login">Welcome to Aux.</h1>
            <div className="login-div"> 
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="email-label"> Username: </label>
                        <input className="input-bar" type="text" value={ username } name="username" onChange={(e) => setUsername(e.target.value)} />
                    <label className="password-label"> Password: </label>
                        <input className="input-bar" type="password" value={ password } name="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="login-button-div">
                        <input type="submit" value="Login" onClick={() => setLogin(true)} />
                    </div>
                </form>
            </div>
            <div className="redirect-to-spotify">
                <a className="logged-in-welcome" href='http://localhost:4000/'> 🏠 Home 🏠 </a> 
                <a className="signup-welcome" href='http://localhost:4000/signup'> Sign up? </a>
            </div>
        </div>
     );
}

export default Login;