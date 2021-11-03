const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL , {
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

