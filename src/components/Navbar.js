import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const onLogoutClick = ()=> {
    localStorage.removeItem('token');
    localStorage.removeItem('accountInfo');
  }
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-info`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">About</Link>
            </li>
            </ul>
            {!localStorage.getItem('token') ?<form className="d-flex">
                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>: 
            // <Link className="btn btn-primary mx-1" onClick={onLogoutClick} to="/login" role="button">Logout</Link>
            <div className="dropdown me-4">
                <a className="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="/account">Account Info</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="btn btn-primary dropdown-item link-primary" onClick={onLogoutClick} to="/login" role="button">Logout</Link></li>
                </ul>
            </div>
            }
        </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar