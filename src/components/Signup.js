import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate();

    // let host = "http://localhost:5000"
    // let host = "https://inotebook-node-backend.herokuapp.com"
    let host = 'https://inotebook-backend-ml1u.onrender.com'

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json()
          console.log(json.success);
          if(json.success) {
            // save the auth token redirect
            setCredentials({name:"",email:"",password:"",cpassword:""});
            localStorage.setItem('token', json.authToken);
            let accountObj = { name: json.name, email: json.email };
            localStorage.setItem('accountInfo', JSON.stringify(accountObj))
            navigate("/");
            props.showAlert("Account created successfully", "success")
          } else {
            props.showAlert("Details entered are invalid", "danger");
          }
    }
  return (
    <div className='mt-4 signup-container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className="my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp" onChange={onChange} minLength={3} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onChange} required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className='my-3'>
        Already have an account? <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
        </div>
    </div>
  )
}

export default Signup