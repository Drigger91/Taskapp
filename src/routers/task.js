const express = require('express')
const router = new express.Router()
const Task = require('../models/tasks')
const auth = require('../middleware/auth')


router.post('/tasks', auth , async(req,res)=>{
    const task = new Task({
            ...req.body,
            owner: req.user._id
    })
    try{
        await task.save()
        res.status(200).send(task)}
    catch(error){
        res.status(400).send(error.message)
    }
    
})

router.get('/tasks', auth , async(req,res)=>{
   let user = req.user
    try {
        user.populate({
            path : 'tasks',
            options :{
                sort : {
                    createdAt : -1
                }
            }
        }).then(()=>{
            res.send(user.tasks)
        }
            
        ).catch(()=>{
            res.status(404).send()
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
    
})

router.get('/tasks/:id', auth, async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findOne({ _id , owner : req.user._id})
        if(!task){
            res.status(404).send()
        }
        res.status(200).send(task)
    }
    catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/tasks/:id', auth , async(req,res)=>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description" , "completed"]
    const isvalidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isvalidOperation){
        return res.status(400).send('Provided term/terms cannot get updated!! \n You can update only "description and completed"')
    }
    try{
        const task = await Task.findOne({ _id : req.params.id , owner : req.user._id})
        if(!task){
            return   res.status(404).send('Task not found!')
          }
        updates.forEach((update)=>{
            task[update] = req.body[update]
        })
        
        await task.save()
      
        res.send(task)
    }
    catch(error){
        res.status(500).send(error.message)
    }
})

router.delete('/tasks/:id',auth , async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id : req.params.id , owner: req.user._id})
        if(!task){
            res.status(404).send('Task not found!')
        }
        res.send(task)
    }
    catch(error){
        res.status(500).send(error.message)
    }
})



module.exports = router