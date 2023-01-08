
const Post = require('../models/posts');


// 1. upload a post
// 2. Like a post
// 3. Comment
// 4. edit a post
// 5. Remove a post
// 6. Show only posts from people followed

const showallposts = async (req, res) => {
    try {
        const data = await Post.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.send(error)
    }
}
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
    const { dislikeflag } = req.query;

    try {

        if (dislikeflag) {
            Post.findByIdAndUpdate(postid, { $pull: { likes: id } }).exec((err, data) => {
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

                    Post.findByIdAndUpdate(postid, { $push: { likes: id } }).exec((err, data) => {
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
                }
            })

        }
        else
            Post.findByIdAndUpdate(postid, { $push: { likes: id } }).exec((err, data) => {
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
        // return res.json({"likes":addlike.likes.length , "status":true , "likedby":addlike.likes})

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
        Post.findByIdAndUpdate(postid, { $push: { comments: { comment: data.comment, commentedBy: id } } }).exec((err, data) => {
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


const editapost = async (req, res) => {
    const newdata = req.body;
    const postid = req.params.id;
    const userid = req.user.id;
    if (!userid) {
        return req.status(404).json({ flag: false, message: "Sorry , your user id not found" });
    }
    if (!postid) {
        return req.status(404).json({ flag: false, message: "Sorry , Can't fetch the post's id" });
    }
    await Post.findByIdAndUpdate(postid, newdata).exec((err, data) => {
        if (err) {
            res.status(502).json({ flag: true, message: err.message });
            Post.findByIdAndUpdate(postid, newdata).exec((err, data) => {
                if (err) {
                    res.status(502).json({ flag: true, message: err.message });
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

        }
    })
}
const removeapost = async (req, res) => {
    const user = req.user.id;
    if (!user) {
        return res.status(502).json({ flag: false, message: "You are not authorized to delete this post" });
    }
    else {
        const postid = req.params.id;
        try {
            await Post.findByIdAndRemove(postid);
            res.status(200).json({ flag: true, message: "Deleted Successfully" });

        } catch (error) {
            res.status(501).json({ flag: false, message: "Internal Server Error" });
        }
    }
}


// module.exports = { uploadpost, likepost, commentonpost, removeapost, editapost }
module.exports = {showallposts, uploadpost, likepost, commentonpost, removeapost, editapost }
