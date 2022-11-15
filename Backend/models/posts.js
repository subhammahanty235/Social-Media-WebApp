const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    content:{
        type:String,
        
    },
    uploadedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    media:{
        type:String,

    },
    likes:{
        type:[String],
        
    },
    comments:[
        {
            comment:{
                type:String,
                
            },
            commentedBy:{
                type:String,
            },
            likes:{
                type:Number,
                default:0,
            }
        }
    ]


},
    { timestamps: true }
)
const Post = mongoose.model('posts',PostSchema);
module.exports = Post;