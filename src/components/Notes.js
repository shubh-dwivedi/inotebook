import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import Addnote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [note, setNote] = useState({_id:"",etitle:"",edescription:"",etag:""});
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getAllNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])

  
  const ref = useRef(null);
  const refClose = useRef(null);
  
  const updateNote = (currentNote)=> {
    ref.current.click();
    setNote({_id:currentNote._id, etitle: currentNote.title, edescription: `${currentNote.description}`, etag: currentNote.tag});
  }

  const handleUpdateClick = ()=> {
    editNote(note._id ,note.etitle, `${note.edescription}`, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully", "success");
  }

  const onChange = (e)=> {
    setNote({...note, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="container-home">
      <Addnote showAlert={props.showAlert} />

      <div className="modal-Container">
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        trigger button for update note modal(editor)
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
            <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} placeholder="Enter min 3 characters"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edescription" className="form-label">Description</label>
                <textarea type="text" className="form-control " id="edescription"  name="edescription" onChange={onChange} value={note.edescription} placeholder="Enter min 5 characters" rows={5}/>
            </div>
            <div className="mb-3">
                <label htmlFor="etag" className="form-label">Tags</label>
                <input type="text" className="form-control" id="etag"  name="etag" onChange={onChange} value={note.etag}/>
            </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<3 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleUpdateClick}>Uptate Note</button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container mt-4 yournotes-container">
      <h2>Your Notes</h2>
      <div className="row my-3">
        {(!notes || notes.length === 0) && <div>No notes to display!</div>}
        {notes && notes.map((note) => {
          return (
            <div className="col-md-3" key={note._id} >
              <NoteItem note={note} updateNote={updateNote} showAlert={props.showAlert} />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Notes;
