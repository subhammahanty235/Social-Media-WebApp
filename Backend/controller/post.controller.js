
const Post = require('../models/posts');


// 1. upload a post
// 2. Like a post
// 3. Cooment
// 4. edit a post
// 5. Remove a post
// 6. Show only posts from people followed

const uploadpost = async (req, res) => {
    const id = req.user.id;
    try {

        const data = req.body;
        if (!data.content && !data.media) {
            return res.send("Please add some content to post")
        }
        const updata = {};
        if (data.content) updata.content = data.content;
        if (data.media) updata.media = data.media;
        updata.uploadedBy = id;
        const upd = await Post.create(updata);
        res.send(upd);
    } catch (error) {
        res.send(error)
    }




}
const likepost = async (req, res) => {
    const id = req.user.id;
    const postid = req.params.id;
    try {
        const addlike = await Post.findByIdAndUpdate(postid, { $push: { likes: id } });
        // return res.json({"likes":addlike.likes.length , "status":true , "likedby":addlike.likes})
        res.send(addlike)
    } catch (error) {
        res.send(error)
    }
}
const commentonpost = async (req, res) => {
    const flag = false;
    const id = req.user.id;
    const data = req.body;
    const postid = req.params.id
    try {
        await Post.findByIdAndUpdate(postid, { $push: { comment: data.comment, commentedBy: id } }).exec((err, data) => {
            if (err) {
                res.status(502).json({ flag: false, message: err.message });
            }
            if (data) {
                return res.status(200).json({ flag: true, details: data });
            }
            else {
                return res
                    .status(404)
                    .json({ flag: false, message: "Post Not found" });

            }
        })
    } catch (error) {
        res.status(501).json({ flag: false, message: "Internal Server Error" });
    }


}


const editapost = (req, res) => {

}
const removeapost = () => {

}


module.exports = { uploadpost, likepost }