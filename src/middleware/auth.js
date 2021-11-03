const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async(req,res,next)=>{
    try{
        const token = req.cookies.jwtoken;
        const decoded = jwt.verify(token , process.env.CODE)
        const user = await User.findOne({_id:decoded._id , 'tokens.token' : token})

        if(!user){
            throw new Error('User not found')
        }
        req.token = token
        req.user = user
        next()
    }
    catch(error){
        res.status(500).send('Please authorize first')
    }
}


module.exports = auth