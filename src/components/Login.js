import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate();

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json()
          console.log(json);
          if(json.success) {
            // save the auth token redirect
            setCredentials({email:"",password:""});
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Logged in Successfully", "success");
          } else props.showAlert("Invalid email or password", "danger");
    }
  return (
    <div className='mt-4'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login