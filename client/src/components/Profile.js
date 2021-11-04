import React from 'react'
import avatar from '../Images/avatar.png'

function Profile() {
    return (
        <div  id='portfolio'>
             <div class="container py-5 text-center" id='portfolio'>
        <img src={avatar}/>
        <h2>Welcome to my Portfolio!</h2>
        <p class="w-50 mx-auto py-2">I am a Web Developer, and UI designer specializing in modern,
            creative design based in
            Bhopal, MP</p>
    </div>



    <div class="container-fluid" id='profile-container'>
            <div class="" id='card-container'>
                <div class="card" id='profile-card'>
                        <i class="fa fa-laptop text-center rounded-circle p-4 bg-primary  mx-auto"
                            aria-hidden="true"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark" id='card-title' >Web-Dev (MERN)</h5>
                            <p class="card-text">I develop custom web-pages and web-services for contract clients</p>
                    </div>
                </div>
                <div class="card" id='profile-card'>
                        <i class="fa fa-sticky-note-o text-center rounded-circle p-4 bg-warning  mx-auto"
                            aria-hidden="true"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark"  id='card-title'>UI Design</h5>
                            <p class="card-text">User experience and interface designs is one of my specialties</p>
                    </div>
                </div>
                <div class="card" id='profile-card'>
                        <i class="fa fa-camera text-center rounded-circle p-4 bg-danger  mx-auto"
                             aria-hidden="true"></i>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark"  id='card-title'>PhotoGraphy</h5>
                            <p class="card-text">Potraits,shoots,post processing and other photo services</p>
                    </div>
                </div>

            </div>

    </div>
    
    <div class="container-fluid container1 text-center pt-5 " id='contact-container'>


            </div>
        </div>

    )
}

export default Profile
