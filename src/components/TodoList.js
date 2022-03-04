import React from 'react'
import Todo from './Todo'

/**
 - Todo is my individual note component
 - i ll map through the entire notes array and render each note using the todo component
 - setNotes and setInut is not used here it is being passed here so it can pass it to todo component
 - state management libraries should solve this prop passing issue - I'll stick to the passing method for this project
 
 */

const TodoList = ({ notes, setNotes, setInput }) => {
    /*
        const handleDelete = (id) => {
            const newArr = notes.filter(n => n.id !== id)
            setNotes(newArr);
        }*/

    return (
        <div className="w-75 " id='notes-container'>
            {notes.map(note => <Todo key={note.id} note={note} notes={notes} setNotes={setNotes} setInput={setInput} />)}
            {/*
                notes.map(note => {
                    return (
                        <div className='d-flex justify-content-between mt-2' key={note.id}>
                            <input type="text" className="form-control" onChange={(e) => e.preventDefault()} value={note.note} />
                            <button className='btn btn-outline-secondary' onClick={() => { handleDelete(note.id) }}><i className="bi bi-x"></i></button>
                        </div>
                    )
                }

                )*/
            }
        </div>
    )
}

export default TodoList