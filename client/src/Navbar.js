import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

function NavBar() {

  function handleLogoutClick(){
    fetch("/logout", { method: "DELETE"}).then((r) => {
        if (r.ok) {
            console.log(r)
            // need to add in global state here to the logout
            // setCurrentUser(null);
            // routes you back to home
        }
    });
}



  return (
    <nav className="navbar-overall-div">

      <div className="navbar-header">
        <h1 className="navbar-header-name"> Aux. </h1>
      </div>

      <div className="flexbox-nav">
        <div className="navbar-links">
            <div className="navbar-link-spacing">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/login">Login</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/musiclogin">Spotify Login</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <a href="">Log Out</a>
            </div>
            {/* <div className="navbar-link-spacing">
                <NavLink to="/count">Count</NavLink>
            </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;