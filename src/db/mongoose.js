const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
    useNewUrlParser : true ,
})

// const admin = new User({
//     name: 'Piyush',
//     age : 19,
//     email: 'mepiyusht@gmail.com',
//     password : 'piyush1234'
// })

// admin.save()
// .then((result)=>{
//         console.log("User saved" , result)
//     })
// .catch((error)=>{
//     console.log("Error occured" , error)
// })

