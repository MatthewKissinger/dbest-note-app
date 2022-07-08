import React from "react"
import { useParams } from "react-router-dom"

export default function NoteDetails() {
    const params = useParams();
    const noteId = params.noteId;


    return (
        <div> Note ID is {noteId}</div>
    )
}