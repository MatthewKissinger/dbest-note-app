import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo-image" src={require('../images/notes_logo1.png')} alt="notes logo orange"></img>
                <h4>Logo</h4>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/notes'>Notes</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}