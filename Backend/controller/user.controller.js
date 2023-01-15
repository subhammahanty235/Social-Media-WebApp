const Post = require('../models/posts');
const User = require('../models/user');

const createprofile = async()=>{
    const data = req.body
    let userid = req.user.id
    if(!userid){
        return res.status(400).json({status:false , message:"user not found , please re login"})
    }
    try {
        const createprofile = await User.findByIdAndUpdate(userid,{$set:data},{new:true});
        res.status(200).json({status:true , message:"Profile Created Successfully"});
    } catch (error) {
        res.send(error)
    }

}

const editprofile = async(req,res)=>{
    const data = req.body;
    console.log(data)
    let userId = req.user.id;
    let newdata = {};
    if(data.name)newdata.name = data.name;
    if(data.mobileno)newdata.mobileno = data.mobileno;
    if(data.username)newdata.username = data.username
    if(data.profilepic)newdata.profilepic = data.profilepic
    if(data.email)newdata.email = data.email
    if(data.bio){
        let newbio = data.bio.replace(/\\n/g, '\n');
        console.log(newbio)
        newdata.bio = newbio
    }
    
    // if(data.username)newdata.username = data.username
    // if(data.username)newdata.username = data.username

    try {
        const updateddata = await User.findByIdAndUpdate(userId,{$set:newdata},{new:true});
        res.send({flag:true,data: updateddata});
    } catch (error) {
        res.send({flag:false})
    }
}
const deleteprofile = async(req,res)=>{
    const id = req.user.id;
    try {
        await User.findByIdAndDelete(id);
        await Post.deleteMany({uploadedBy:id});
        res.send("deleted successfully")
    } catch (error) {
        res.send("error occured")
    }
}

const followuser = async(req,res)=>{
    const myid = req.user.id;
    const othid = req.params.id;
    let flag = false;
    try {

        await User.findByIdAndUpdate(othid, { $push: { followers: myid } });
        await User.findByIdAndUpdate(myid, { $push: { following: othid } });
        flag = true;
        res.json({ flag });

    } catch (error) {
        console.log(error)
    }
}
const unfollowuser = async(req,res)=>{
    const myid = req.user.id;
    const othid = req.params.id;
    let flag = false;
    try {

        await User.findByIdAndUpdate(othid, { $pull: { followers: myid } });
        await User.findByIdAndUpdate(myid, { $pull: { following: othid } });
        flag = true;
        res.json({ flag });

    } catch (error) {
        console.log(error)
    }
}

const checkusername = async(req,res)=>{
    const username = req.params.userid;
    try {
        const data = await User.findOne({username:username}).select("_id");
        if(data){
            res.json({flag:false});
        }
        else{
            res.json({flag:true});
        }
    } catch (error) {
        res.status(500).send("Technical Error Occured");
    }
}
const getuserdetails = async(req,res)=>{
    const id = req.params.id;
    try {
        const userdata = await User.findOne({_id:id}).select("-password");
        const postbyuser = await Post.find({uploadedBy:id}).sort({createdAt:-1});
        res.json({user:userdata , posts:postbyuser})
    } catch (error) {
        res.send(error)
    }
}

const changeprofilepic = async(req,res)=>{
    const id = req.user.id;
    const data = req.body;
    try{
        const updatedprofile = await User.findByIdAndUpdate(id , {$set:{profilepic:data.profilepic}});
        req.json({flag:true , profilepic:updatedprofile.profilepic});
    }
    catch(error){
        res.json({flag:false , message:error});
    }
}

module.exports = {editprofile , deleteprofile ,createprofile, followuser , unfollowuser , getuserdetails , changeprofilepic , checkusername}