import React from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Contact from "./components/Contact"

export default function App() {

    const localNotes = JSON.parse(localStorage.getItem("notes"));
    
    const [notes, setNotes] = React.useState(() => localNotes || [])

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",

        }
        setNotes(prevNotes => [newNote, ...prevNotes])

        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {

        setNotes(oldNotes => {
            const newArray = [];
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text });
                } else {
                    newArray.push(oldNote);
                }
            }

            return newArray;
        })
    }
    
     function deleteNote(event, noteId) {
        event.stopPropagation()

        console.log(noteId);
        console.log(event.target)

        setNotes(oldNotes => {
            return oldNotes.filter(oldNote => oldNote.id !== noteId);
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="notes" element={<Notes />}></Route>
                <Route path="contact" element={<Contact />}></Route>   
            </Routes>
            {/* <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main> */}
        </div>
        
    )
}
