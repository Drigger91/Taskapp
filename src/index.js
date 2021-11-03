const express = require('express')
const cookieparser = require('cookie-parser')
require('./db/mongoose')
const cors = require('cors')
const UserRouter = require('./routers/user')
const TaskRouter = require('./routers/task')
const app = express()
app.use(cors(
    {
        origin : "*",
        methods : ["POST" ,"GET","DELETE" ,"PATCH"]
    }
))
app.use(cookieparser())
const port = process.env.PORT



//Middleware 


//inbuilt function for parsing json
app.use(express.json()) 



//user routes
app.use(UserRouter)


//Tasks requests
app.use(TaskRouter)



//heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    const path = require('path')
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client' , 'build' , 'index.html')
        );
    })
}
//server call
app.listen(port , ()=>{
    console.log("Server live on port:",port)
})
