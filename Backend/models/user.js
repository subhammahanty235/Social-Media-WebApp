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
        default:null,
        
        // required:true,
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


UserSchema.post('save',async function(){
    let randomnumber = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111;
    let namepart = this.name.slice(5);
    namepart = namepart.trim();
    let uname = `${namepart}@${randomnumber}` 
    this.username = uname
    // console.log(this.username)
})

const User = mongoose.model('users',UserSchema);
module.exports = User;