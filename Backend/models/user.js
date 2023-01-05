const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    password:{
        type:String,
        required:true
    },
    profilecreated:{
        type:Boolean,
        default:false
    },
    username:{
        type:String,
        required:true,
    },
    profilepic: {
        type: String,
        default:null
    },
    bio:{
        type:String,
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 20,
    },
    mobileno: {
        type: Number,
        min: 8,
        max: 13,
        default:null
    },
    followers: {
        type: [String],

    },
    following: {
        type: [String],

    },
    totalposts: {
        type: Number,
        default: 0,
    }


},
    { timestamps: true }
)


const User = mongoose.model('users',UserSchema);
module.exports = User;