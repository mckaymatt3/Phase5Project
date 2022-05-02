import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <nav className="navbar-overall-div">

      <div className="navbar-header">
        <h1> Local. </h1>
      </div>

      <div className="flexbox-nav">
        <div className="navbar-links">
            <div className="navbar-link-spacing">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/login">Login</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/count">Count</NavLink>
            </div>
            <div className="navbar-link-spacing">
                <NavLink to="/musiclogin">Music Login</NavLink>
            </div>
            
        </div>
      </div>
    </nav>
  );
}

export default NavBar;