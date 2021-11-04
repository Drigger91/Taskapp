import React,{useState} from 'react'
import Modal from 'react-modal'

function Taskui(props) {
    const [modalState, setmodalState] = useState(false)
    const deleteTask = async()=>{
        const id = props.task._id
        try{
            const res  = await fetch(`/tasks/${id}` , {
                method: 'DELETE' ,
                headers :{
                    "Content-Type" : "application/json"
                }
                 
            })
            const data = await res.json()
            if(res.status == 200){
                props.triggerFetch()
                window.alert('Task deleted successfully')
            }
        }
        catch(e){
                window.alert('Failed to delete task')
        }
    }
    const editTask = async()=>{
        console.log("edited")
        setmodalState(true)
    }
    const [Task, setTask] = useState({})
    let key ,value ;
    const handleInput=(e)=>{
        key  = e.target.name
        value = e.target.value
        setTask({ ...Task , [key] : value })

     }
     const addTask = async(e)=>{
        const id = props.task._id
        const {description , completed} = Task
        console.log(description , completed, 'desc',  'completed')
            const res = await fetch(`/tasks/${id}` ,{
                method : "PATCH" ,
                headers :{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({description ,completed})
            })

            
            if(res.status ===200){
                window.alert('Task updated successfully')
                props.triggerFetch()
                setmodalState(false)
            }
       
    }
    return (
        <>
        <div className='task-card'>
            <span><button className='btn' onClick={editTask}><i class="bi bi-pencil-square"></i></button>Edit Task</span>
            <h3 className='user-heading'>
                {props.task.description}
            </h3>
            <p> Status : {props.task.completed === 'true'|| props.task.completed === "True"? 'completed' : 'pending'}</p>
            <p>Created at - {props.task.createdAt.slice(0,10)}</p>
            <button className='btn btn-danger' onClick={deleteTask}>Delete Task</button>
        </div>
        <Modal isOpen={modalState}>
                 
<div className="task-input-modal">
    <form method="PATCH"> 
  <div className="card-header">
    Update Task here!
  </div>
  
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> Description: <input name='description' onChange={handleInput} type='text' autoComplete = 'off'></input></li>
    <li className="list-group-item">Completed :  <input name = 'completed'  onChange={handleInput} type='text' placeholder='true/false' autoComplete = 'off' ></input></li>
    <li className="list-group-item"><button onClick={addTask} type="button" className='btn btn-success'>Update Task</button> <button className='btn btn-danger' onClick={()=>setmodalState(false)}>Close</button></li>
  </ul>
</form>
</div>
            
        </Modal>
        </>
    )
}

export default Taskui
