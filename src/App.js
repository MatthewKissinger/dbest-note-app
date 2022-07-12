import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Contact from "./components/Contact"

// add the validation for the contact form

export default function App() {
    
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="notes" element={<Notes />}>
                    <Route path=":noteId" element={<Notes />}></Route>
                </Route>
                <Route path="contact" element={<Contact />}></Route>   
            </Routes>
        </div>
        
    )
}
