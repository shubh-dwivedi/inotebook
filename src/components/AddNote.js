import React, {useState, useContext} from 'react'
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handleAddClick = (e)=> {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""});
        // document.getElementById("tag").value = "";
        props.showAlert("Note Added Successfully","success");
    }
    const onChange = (e)=> {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className="container text-start">
            <h2 className='my-4'>Add a Note</h2>
            <form className='my-3'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control w-50" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter min 3 characters" value={note.title}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control w-50" id="description"  name="description" onChange={onChange} placeholder="Enter min 5 characters" value={note.description}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control w-50" id="tag"  name="tag" onChange={onChange} value={note.tag}/>
            </div>
            <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleAddClick}>Add Note</button>
            </form>
        </div>
    </div>
  )
}

export default Addnote