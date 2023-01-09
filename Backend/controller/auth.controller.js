// const router = require('express').Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken');

 const signup = async(req,res)=>{
    const authdata = req.body;
    try {
        const search_email = await User.findOne({email:authdata.email});
        if(!search_email){
            const saveddata = await User.create(authdata)
            // await saveddata.save();
            const data = {
                user:{
                    id:saveddata.id
                }
            }
            let token = jwt.sign(data , "jwtverify7263");
            res.json({ flag : true, result:saveddata , token:token})
        }
        else{
            res.send({ flag : true,message: "User already exists with this email id , please login or use another email id"})
        }
    } catch (error) {
        res.send(error)
    }
}

const login = async(req,res)=>{
    const authdata = req.body;
    let flag = false;
    try {
        const search_user = await User.findOne({$and:[{email:authdata.email},{password:authdata.password}]});
        if(!search_user){
            res.json({flag:false , message:"Invalid Credentials! please try again"});
        }
        else{
            flag = true;
            const data = {
                user:{
                    id:search_user.id
                }
            }
            let token = jwt.sign(data , "jwtverify7263");
            res.json({flag,result:search_user , token:token});
            // res.json({flag , result:search_user})
        }
    } catch (error) {
        res.json({flag:false , message:"some error occured"});
    }

}

module.exports = {signup,login};