import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"

// add the validation for the contact form

export default function App() {

    const [users, setUsers] = React.useState(false);
    // const usersColRef = collection(db, "users");

    // React.useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersColRef);
    //         setUsers(data.docs.map((doc) => {
    //             return {
    //                 ...doc.data(), 
    //                 id: doc.id
    //             }
    //         }))
    //     }

    //     getUsers();
    // }, []);

    console.log(users);
    
    return (
        <div className="app-container">


            {!users && <Navbar />}

            <Routes>   
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="notes" element={<Notes />}>
                    <Route path=":noteId" element={<Notes />}></Route>
                </Route>
                <Route path="contact" element={<Contact />}></Route>   
            </Routes>
        </div>
        
    )
}
