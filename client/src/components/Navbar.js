import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import { UserContext } from "../App";


function Navbar() {
    return (
        <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
 <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand" id = 'nav-logo'to="#"><h1><b>Task-App</b></h1></NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"><b className='navlinks'>Home</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Profile"><b className='navlinks'>About</b></NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link active" to="/ContactUs"><b className='navlinks'>Contact</b> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to = '/SignUp'><b className='navlinks'>Register</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to = '/LogIn'><b className='navlinks'>Login</b></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
