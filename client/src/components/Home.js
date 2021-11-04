import React ,{useEffect , useState} from 'react'
import { NavLink ,useHistory } from 'react-router-dom'
import Tasks from './Tasks'

function Home() {
    const history = useHistory()
    const [User, setUser] = useState({})
    const [display, setdisplay] = useState('home-container')
    const [display2, setdisplay2] = useState('d-none')
    const callPage = async()=>{
        try{
            const res = await fetch('/users/me' , {
                method : "GET" ,
                headers : {
                    "Content-Type" : 'application/json'
                },
                credentials : 'include'
      
            })
            const data = await res.json()
            setdisplay2('home-container')
            setdisplay('d-none')
            setUser(data)
            if(res.status===500){
                console.log(res.error)
            }
        }
    
    
    catch(e){
        console.log(e)
    }}
    useEffect(()=>{
        callPage();
    }
    , [])
    const LogOut = async(e)=>{
        try{
            const res = await fetch('/users/logout' , {
                method : "POST" ,
                headers : {
                    "Content-Type" : 'application/json'
                },
                credentials : 'include'

            })
            const data = await res.json()
        }
        catch(error){
            console.log(error)
        }
        history.push('/login')
    }

    return (
        <>
        <div className={display}>
            <h1>Welcome to <b id='nav-logo'>Task-App!</b></h1>
            <h3>If you are new SignUp here - <NavLink className= 'nav-link active' to='/SignUp' >Sign Up</NavLink></h3>
            <h3>If already a User Login here -  <NavLink className= 'nav-link active' to='/login' >Login</NavLink></h3>
        </div>
        <div className={display2}>
            <h1>Welcome <span className='user-heading'> {User.name}</span></h1>
            <button className='btn btn-primary' onClick={LogOut}> logOut</button>
            <div className='task-ui'>
                <Tasks owner = {User._id}></Tasks>
            </div>
        </div>
        </>
    )
}

export default Home
