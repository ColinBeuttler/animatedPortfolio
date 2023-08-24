import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){
    return(
        <div className="navBar">
            <NavLink className="navLink" to="/" activeClassName="active">Home</NavLink>
            <a className="node-separtor">/</a>
            <NavLink className="navLink" to="/code" activeClassName="active">Code</NavLink>
            <a className="node-separtor">/</a>
            <NavLink className="navLink" to="/projects" activeClassName="active">Projects</NavLink>
        </div>
    )
}

export default Nav