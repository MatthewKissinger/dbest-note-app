import React from "react"

// each note needs it's own route 
// use the nanoid given to each note as the url param

export default function Sidebar(props) {

    const noteElements = props.notes.map((note, index) => {
       
        const noteBody = props.notes[index].body;
        const noteBodyArray = noteBody.split("\n");

        const noteTitle = noteBodyArray.shift();

        const noteTextSnippet = noteBodyArray.join(' ');

        return (
        <div className="note" key={note.id}>
            <div 
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h2 className="note-title">{noteTitle}</h2>
                <h4 className="text-snippet">{noteTextSnippet.length > 50 ? noteTextSnippet.slice(0, 50) + '...' : noteTextSnippet}
                </h4>
                <button 
                    className="delete-btn"
                    // Your onClick event handler here
                    onClick={event => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
        )
    })

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <button 
                    className="new-note" 
                    onClick={props.newNote}
                >Create Note</button>
            </div>
            <hr></hr>
            <h4 className="sidebar--h4">Notes</h4>
            <hr></hr>
            {noteElements}
        </section>
    )
}