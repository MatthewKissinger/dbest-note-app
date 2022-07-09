import React from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
// import Split from "react-split"
import {nanoid} from "nanoid"

export default function Notes() {

    const localNotes = JSON.parse(localStorage.getItem("notes"));
    
    const [notes, setNotes] = React.useState(() => localNotes || [])

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    const [sidebarVisible, setSidebarVisible] = React.useState(true);

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])
    
    function createNewNote() {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        let fullDate = `${month}/${day}/${year}`;


        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            dateCreated: fullDate
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

        setNotes(oldNotes => {
            return oldNotes.filter(oldNote => oldNote.id !== noteId);
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function handleArrow() {
        console.log('you clicked the arrow');

        setSidebarVisible(prevState => !prevState);
    }

    return (
        <main>
            {
            notes.length > 0 
            ?
            <div className="split">
                {sidebarVisible && <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />}
                <div className="vertical-split">
                    <div className="arrow-container"
                        onClick={handleArrow}
                    >
                        {sidebarVisible 
                        ? 
                        <img src={require("../images/arrow-left-icon.png")} alt="arrow-left"></img> 
                        :
                        <img src={require("../images/arrow-right-icon.png")} alt="arrow-right"></img>}
                        
                    </div>
                </div>
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </div>
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
        </main>
    )
}