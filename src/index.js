const express = require('express')
const path = require('path')
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
const port = process.env.PORT || 3000



//Middleware 


//inbuilt function for parsing json
app.use(express.json()) 



//user routes
app.use(UserRouter)


//Tasks requests
app.use(TaskRouter)



//heroku
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})



//server call
app.listen(port , ()=>{
    console.log("Server live on port:",port)
})
