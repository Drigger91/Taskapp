import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
       <div className='footer bg-light'>
           <div className='footer-logo'>
                <h1>Task-App</h1>
                <ul className='logo-list'>
                    <li><a href='https://www.instagram.com/piyush_t29/' target='_blank'><i class="bi bi-instagram"></i></a></li>
                    <li><a href='https://github.com/Drigger91' target='_blank'><i class="bi bi-github"></i></a></li>
                    <li><a href='#'><i class="bi bi-twitter"></i></a></li>
                    <li><a href='#'><i class="bi bi-facebook"></i></a></li>

                </ul>
           </div>
           <div className='footer-list'>
           <h3 className='footer-heading'> Contact</h3><hr className='line'/>
           <ul>
                
                <li><i class="bi bi-telephone-fill"></i>: +91-8103595203

                </li>
                <li>
                <i class="bi bi-github"></i> : Drigger91
                </li>
                <li>
                <i class="bi bi-envelope-fill"></i> : mepiyusht@gmail.com
                </li>
            </ul>
           </div>
           <div className='footer-list'>
           <h3 className='footer-heading'> Links</h3> <hr className='line'/>
            <ul>
                <li>
                    <NavLink className = 'footer-navlinks' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className = 'footer-navlinks' to = '/Contact'>Contact </NavLink>
                </li>
                <li>
                    <NavLink className = 'footer-navlinks' to = '/SignUp'>SignUp</NavLink>
                </li>
                <li>
                   <NavLink className = 'footer-navlinks' to = '/Login'>LogIn</NavLink> 
                </li>
               
            </ul>
           </div>
       </div>
    )
}

export default Footer
