const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const Task = require('../models/tasks')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email :{
        type : String,
        unique : true , 
        required : true ,
        trim : true,
        lowercase :true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    age :{
        type : Number,
        required : true,
        validate(value){
            if(value<18){
                throw new Error('Age does not meet as expected')
            }
        }
    } ,
    password :{
        type : String ,
        required : true ,
        trim : true,
        validate(value){
            if(value.length< 6 || value.includes('password')){
                throw new Error('Password doesn\'t match the requirements')
            }
        }
    } , 
    tokens : [{
        token: { 
            type:String,
            required:true
        }
    }]

} , {
    timestamps : true
})

userSchema.methods.AuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()} , 'thisisthesecretcode')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials = async (email,password) =>{
    const user = await User.findOne( {email} )
    if(!user){
        throw new Error('Unable to LogIn!')
    }
    const isMatch = await bcrypt.compare(password , user.password)

    if(!isMatch){
        throw new Error('Password didn\'t match')
    }
    return user
        
}

userSchema.virtual('tasks' ,{
    ref : 'Task' ,
    localField : '_id',
    foreignField : 'owner'
})
userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

userSchema.pre('save' , async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 7)
    }

    next()//calling of next function describes that your pre functioning of schema is done 
}) //you can't bind 'this' in arrow functions that's why normal function syntax

const User = mongoose.model('User' , userSchema)


module.exports = User