// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const e = require('express')
const {MongoClient , ObjectId} = require('mongodb')

const id = new ObjectId()
console.log(id.getTimestamp())
const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager-api'
//connection is not a synchronous action it is async
MongoClient.connect(connectionURL , {useNewUrlParser : true} , (error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }
    console.log('Hello Everyone!')
       const db = client.db(databaseName)
       //creating data
    //    db.collection('users').insertOne({
    //        username : 'anyname' ,
    //        age : 17
    //    })
    // db.collection('users').insertMany([{
    //         name :'name1' ,
    //         age : 'age1'
    //     },
    //     {
    //         name: 'name2' ,
    //         age : 'age2'
    //     }]
    //     )

    //reading data
    //findone always returns the first document  //if want a particular item search with id
    // db.collection('users').findOne({name:"piyush"} , (error , result)=>{
    //     if(error){
    //         console.log('Unable to fetch user')
    //     }
    //     else if (result == null){
    //         console.log('User not found')
    //     }
    //     else{
    //     console.log(result)
    //     }
    // })
    // //while using find we get a cursor(pointer to data) as a return value and therre is no 3rd argument of callback functions
    // //there are many methods to interpret with data like count,toArray,etc,etc
    // db.collection('users').find({age:'age1'}).toArray((error,result)=>{
    //     if(error){
    //         console.log('Error occured cannot connect to database')
    //     }
    //     else if(result == null){
    //         console.log('Cannot find user')
    //     }
    //     else{
    //         console.log(result)
    //     }
    // })

    //update documents
    // db.collection('users').updateOne({age:'age1'},{$set:{
    //     name : "NAME",
    //     age:17
    // }}).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    //deleting documents
    db.collection('users').deleteMany({age : 17})
    .then((result)=>{
        console.log('result',result)
    }).catch((error)=>{
        console.log('Error' , error)
    })











})

