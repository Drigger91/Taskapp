import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className='contactpage'>
        <div className='contact'>
        <div className='contact-form'>
            <h1 className='form-heading'>Get in Touch</h1> <hr/>
            <div className='formrow'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+91-xxxxxxxxxx"/>
            </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
            </div>
            <button className='btn btn-primary'>Send Message</button>
</div></div></div>
    )
}

export default Contact
