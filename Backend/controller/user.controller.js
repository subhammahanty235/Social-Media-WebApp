const Post = require('../models/posts');
const User = require('../models/user');

const editprofile = async (req, res) => {
    const data = req.body;
    let userId = req.user.id;
    let newdata = {};
    if (data.name) newdata.name = data.name;
    if (data.mobileno) newdata.mobileno = data.mobileno;

    try {
        const updateddata = await User.findByIdAndUpdate(userId, { $set: newdata }, { new: true });
        res.send(updateddata);
    } catch (error) {
        res.send(error)
    }
}
const deleteprofile = async (req, res) => {
    const id = req.user.id;
    try {
        const data = await User.findByIdAndDelete(id);
        const removeposts = await Post.deleteMany({ uploadedBy: id });
        res.send("deleted successfully")
    } catch (error) {
        res.send("error occured")
    }
}

const followuser = async (req, res) => {
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
const unfollowuser = async (req, res) => {
    const myid = req.user.id;
    const othid = req.params.id;
    let flag = false;
    try {

        await User.findByIdAndUpdate(othid, { $pull: { followers: myid } });
        await User.findByIdAndUpdate(myid, { $pull: { following: othid } });
        flag = true;
        res.json({flag});

    } catch (error) {
        console.log(error)
    }
}

const getuserdetails = async (req, res) => {
    const id = req.params.id;
    try {
        const userdata = await User.findOne({ _id: id }).select("-password");
        const postbyuser = await Post.find({ uploadedBy: id });
        res.json({ user: userdata, posts: postbyuser })
    } catch (error) {
        res.send(error)
    }
}

const changeprofilepic = async (req, res) => {

}

module.exports = { editprofile, deleteprofile, followuser, unfollowuser, getuserdetails, changeprofilepic };