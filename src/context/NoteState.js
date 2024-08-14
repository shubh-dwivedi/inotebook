import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // let host = "http://localhost:5000"
  // let host = 'https://inotebook-node-backend.herokuapp.com'
  let host = 'https://inotebook-backend-ml1u.onrender.com'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // User needs to be logged in to perform all the following operations
  // get all notes of a User
  const getAllNotes = async ()=> {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      // mode : 'no-cors',
      headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  // Add a Note
  const addNote = async (title, description, tag)=> {
    // API call
    tag=tag?tag:"general";
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    const noteAdded = await response.json(); // parses JSON response into native JavaScript objects

    setNotes(notes.concat(noteAdded))
  }

  // Edit a Note
  const editNote = async (id, title, description, tag)=> {
    tag=tag?tag:"general";
    // API call
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    // Logic to edit on client side
    let newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if(element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  }

  // Delete a Note
  const deleteNote = async (id)=> {
    // API call -  delete from backend
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
      }
    });
    // Delete Note from UI(frontend)
    const newNotes = notes.filter((note)=> {return note._id !== id})
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, getAllNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
