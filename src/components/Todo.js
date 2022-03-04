import React from 'react'

/**
 - I have 3 functionalities implemented here for each notes
  -Edit,Delete, Complete
  - Edit - onclick of the Edit button, call the hendleEdit method, I need to pass the single note object here,
    it sets the value to the input box and removes the note from the list
  - Delete - onClick calls the handleDelete method, pass the id to identify which ne to delete, filter through the notes array 
    except the selected id and use setNotes to assign the filtered array
  - Complete - onclick calls the handleComplete method, pass the id to identify the note to complete, select the dom element and 
    toggle the strike-through class  

 */

const Todo = ({ note, notes, setNotes, setInput }) => {
    const handleDelete = (id) => {
        const newArr = notes.filter(n => n.id !== id)
        setNotes(newArr);
    }

    const handleComplete = (id) => {
        const text = document.getElementById(id);
        text.classList.toggle("text-decoration-line-through")
    }

    const handleEdit = ({ id, note }) => {
        setInput(note);
        const inputBox = document.getElementById('input-box');
        inputBox.focus();
        handleDelete(id);
    }

    return (
        <div className='d-flex justify-content-between align-items-center mt-2 border border-light border-1 p-2'>
            <h4 className='h4 fw-light mx-3 text-break w-50' id={note.id}>{note.note}</h4>
            <div className="w-50 d-flex justify-content-end">
                <button className='btn btn-outline-secondary border-0 ' onClick={() => { handleEdit(note) }}><i className="bi bi-pencil-square"></i></button>
                <button className='btn btn-outline-secondary border-0' onClick={() => { handleComplete(note.id) }}><i className="bi bi-check2"></i></button>
                <button className='btn btn-outline-secondary border-0' onClick={() => { handleDelete(note.id) }}><i className="bi bi-x"></i></button>
            </div>
        </div>
    )
}

export default Todo;