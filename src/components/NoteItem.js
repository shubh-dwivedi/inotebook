import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div>
      <div className="my-3">
        
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-pen mx-2" onClick={()=> { updateNote(note) }}></i>
            <i className="fa-regular fa-trash-can mx-2" onClick={()=> { deleteNote(note._id); props.showAlert("Deleted note successfully","success");}}></i>
            </div>
            <p className="card-text">{note.description}</p>
            <p className="card-text"><small className="text-muted">{note.tag}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
