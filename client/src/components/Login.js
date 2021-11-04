import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import login from '../Images/lsvg.png'

function Login() {
    const history = useHistory()
        const [User, setUser] = useState({ email : '' , password:''})
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
        const handleInput  = (e)=>{
                key = e.target.name
                value = e.target.value

                setUser({...User , [key]:value})
        }
        const logIn = async (e)=>{
            e.preventDefault()
            const {email , password} = User
            try{
                const res = await fetch('/users/login' , {
                    method : "POST" ,
                    headers :{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({email ,password})
                })
                const data = res.json()
                if(!data || res.status==500){
                   return window.alert('Invalid credentitials')
                }
                else{
                        window.alert('Login Successfull')
                        history.push('/')
                }
            }
            catch(error){
                window.alert(error)
            }
         
        }
    return (
        <>
        <h1 className='loginheader'>Welcome to the Task-App login here! </h1>
        <div className='Login'>
    <form className='text-align-center' method="POST">
        <h3> <b>Log-In</b> </h3>
        <div> <img src={login}></img></div>
       
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" name = 'email' onChange={handleInput} on className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3" id="password">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type={type} name='password' onChange={handleInput} className="form-control" id="exampleInputPassword1" required></input><i onClick = {change} className={Class} id='icon'></i>
  </div>
  <button type="submit" className="btn btn-primary" onClick={logIn}>Login</button>

</form>
        </div>
        </>
    )
}

export default Login
