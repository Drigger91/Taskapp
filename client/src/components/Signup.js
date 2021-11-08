import React , {useState } from 'react'
import {useHistory} from 'react-router-dom'

function Signup() {
    const history = useHistory()
    const [User, setUser] = useState({
      name : '' , age: '', email : '' , password : ''
    })
    const [type, settype] = useState('password')
    const [Class, setClass] = useState('bi bi-eye-slash')
   
    const change = ()=>{
      const a = 'text' ; 
      if(type=='password'){
          settype(a)
          setClass("bi bi-eye")
      }
      else{
          settype('password')
          setClass('bi bi-eye-slash')
      }
  }
    let key,value;
    const handleInput = (e)=>{
        key = e.target.name
        value = e.target.value
        setUser({...User , [key]:value})
    }
    const postData = async(e)=>{
      e.preventDefault()
      const{name,age,email,password} = User
      try{ 
        const res = await fetch('/users', {
        method:'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name,age,email,password
        })

      })
      const data = await res.json()
      if(res.status === 400 || !data){
       return window.alert('Resgistration Failed!! ')
      }
      else{
        window.alert('Registration successfull')
        history.push('/login')
      }}
     catch(error){
       window.alert('Form filled incorrectly or user already registered')
     }

     

    }
    return (
      <div className='signuppage'>
        <div className='Signup'>
                    <div className='animation'> <br/> <br/>
                                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_q5pk6p1k.json"  background="transparent"  speed=".51"  loop autoplay></lottie-player>
                      </div>
          <div className='signupform'>
          <form method="POST">
            <h3> <b>Sign-Up</b> </h3>

          <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Name</label>
          <input type="name" name='name' value={User.name} onChange={handleInput} class="form-control" id="exampleInputName1" aria-describedby="nameHelp" required/>
        </div>
        <div class="mb-3">
          <label for="exampleInputAge1" class="form-label">Age</label>
          <input type='number' name='age' value={User.age} onChange={handleInput} class="form-control" id="exampleInputAge1" aria-describedby="ageHelp" required/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" name='email' value={User.email} onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password </label>
          <input type={type} name='password' value={User.password} onChange={handleInput} class="form-control" id="exampleInputPassword1" required/><i onClick = {change} className={Class} id='icon'></i>
        </div>
        
        
        <button type="submit" onClick={postData} class="btn btn-primary" id='signup-button'>SignUp</button>
</form>
          </div>
            

        </div>
        </div>
    )
}

export default Signup
