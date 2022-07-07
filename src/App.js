import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Contact from "./components/Contact"

// TODO list
// 1) style active navlink -- DONE
// 2) update the create note function to add a title, text-snippet and date of creation

export default function App() {
    
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="notes" element={<Notes />}></Route>
                <Route path="contact" element={<Contact />}></Route>   
            </Routes>
        </div>
        
    )
}
